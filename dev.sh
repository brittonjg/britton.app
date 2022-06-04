#!/usr/bin/env bash
# ReadMe
# Starts and configures the NPM server for development

# As this is a simple script, exit if we come accross a failure
set -e

# update_firebase () {
# 	cd functions
# 	npm install firebase-functions@latest --save
# 	npm install firebase-functions@latest firebase-admin@latest --save
# 	npm outdated # Just to see what isn't up to date
# 	cd ../
# }

update_firebase_tools(){
	sudo npm install -g firebase-tools	
}

building(){
	echo "Building... "
	# Create a Production build
	flutter build web
}

if [ "$1" != "" ]; then
	echo 'You have chosen to start' $1
fi

if [ "$1" == "firebase" ]; then
    # Start Firebase dev
	# update_firebase
	firebase serve
elif [ "$1" == "functions" ]; then
	# Start only Firebase Functions
	firebase serve --only functions
elif [ "$1" == "run" ]; then
	# Analyse the code
	flutter analyze
	# Start Dev Server
	flutter run -d chrome
elif [ "$1" == "update" ]; then
	npm update
	# update_firebase
	npm outdated # Just to see what isn't up to date
elif [ "$1" == "firebase-update-tools" ]; then
	update_firebase_tools
elif [ "$1" == "deploy" ] && [ "$2" == "beta" ]; then
	building
	firebase deploy --only hosting:beta
elif [ "$1" == "deploy" ] && [ "$2" == "prod" ]; then
	building
	firebase deploy
elif [ "$1" == "version" ] && [ "$2" != "" ]; then
	# Update both the package json versions in turn 
	cd functions
	npm version --no-git-tag-version "$2" 
	cd ../
	npm version --no-git-tag-version "$2"
	# Add the change files to git and commit
	git add package.json package-lock.json functions/package.json functions/package-lock.json 
	git commit -m "Updating version to $2"
	# Create a tag and push
	git tag -a "v$2" -m "Tag v$2"
	git push --follow-tags
	# Now deploy this change to staging
	building
	firebase deploy
elif [ "$1" == "process" ]; then
	# Detect which process is hanging on to the port
	netstat -vanp tcp | grep 3000
else
    echo "You need to tell me what to do!"
fi
