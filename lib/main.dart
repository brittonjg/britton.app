import 'package:britton_app/contants.dart';
import 'package:britton_app/ui/download_resume.dart';
import 'package:britton_app/work_experience.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:responsive_builder/responsive_builder.dart';


const double PADDING = 6.0;
const double FONT_HEIGHT = 1.6;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'James\' Portfolio',
      theme: ThemeData(
          // This is the theme of your application.
          //
          // Try running your application with "flutter run". You'll see the
          // application has a blue toolbar. Then, without quitting the app, try
          // changing the primarySwatch below to Colors.green and then invoke
          // "hot reload" (press "r" in the console where you ran "flutter run",
          // or simply save your changes to "hot reload" in a Flutter IDE).
          // Notice that the counter didn't reset back to zero; the application
          // is not restarted.
          primarySwatch: Colors.blue,
          textTheme: GoogleFonts.quicksandTextTheme(
            Theme.of(context).textTheme,
          ),
          disabledColor: Color.fromRGBO(55, 71, 79, 1)),
      home: MyHomePage(title: 'Britton Portfolio'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  Future<void>? launched;

  Future<void> launchInBrowser(String url) async {
    if (await canLaunch(url)) {
      await launch(
        url,
        forceSafariVC: false,
        forceWebView: false,
      );
    } else {
      throw 'Could not launch $url';
    }
  }

  AutoSizeText createSubTitle(text, maxNumLines) {
    final TextStyle subTitle = TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        fontStyle: FontStyle.normal,
        height: FONT_HEIGHT,
        color: TEXT_COLOUR);

    return AutoSizeText(
      text,
      style: subTitle,
      maxLines: maxNumLines,
      minFontSize: 12,
      textAlign: TextAlign.center,
      overflow: TextOverflow.visible,
    );
  }

  AutoSizeText createMainText(String text, int maxLineNum) {
    final TextStyle mainText = TextStyle(
        fontSize: 16,
        height: FONT_HEIGHT,
        fontWeight: FontWeight.w500,
        fontStyle: FontStyle.normal,
        color: TEXT_COLOUR);

    return AutoSizeText(
      text,
      style: mainText,
      maxLines: maxLineNum,
      minFontSize: 10,
      textAlign: TextAlign.center,
      overflow: TextOverflow.visible,
    );
  }

  Widget socialContainer() {
    return Padding(
        padding: EdgeInsets.all(PADDING),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: socialIcons(),
        ));
  }

  IconButton createIcon(IconData iconImage, String url) {
    return IconButton(
        icon: FaIcon(iconImage),
        color: TEXT_COLOUR,
        onPressed: () => setState(() {
              launched = launchInBrowser(url);
            }));
  }

  List<Widget> socialIcons() {
    return [
      createIcon(FontAwesomeIcons.linkedin, URL_LINKEDIN),
      createIcon(FontAwesomeIcons.github, URL_GITHUB),
      createIcon(FontAwesomeIcons.instagram, URL_INSTA_ME),
      createIcon(FontAwesomeIcons.lastfm, URL_LASTFM),
    ];
  }

  List<Widget> getMainLayout() {
    return <Widget>[
      Expanded(flex: 7, child: mainContents()),
      Expanded(child: torrynLayout()),
      Expanded(flex: 1, child: socialContainer()),
    ];
  }

  Widget mainContents() {
    return Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      Padding(
        padding: EdgeInsets.all(PADDING),
        child: Image(
          image: AssetImage('assets/images/selfie.png'),
          height: 200,
          width: 200,
        ),
      ),
      Padding(
        padding: EdgeInsets.all(PADDING),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            createSubTitle('Engineering Manager 🧑‍💻', 2),
            createSubTitle('Triathlete 🏊🚴🏃', 1)
          ],
        ),
      ),
      Padding(
          padding: EdgeInsets.all(PADDING),
          child: Column(
            children: [
              createMainText(
                  'Currently an Engineering Manager at Cuvva for the Growth team.',
                  2),
              createMainText('', 1), // Space between text
              createMainText(
                  'A mobile engineer for 9+ years, now leading and coaching teams to develop, deploy and maintain high quality applications across mobile, web and backend.',
                  4)
            ],
          )),
    ]);
  }

  torrynLayout() {
    return TextButton(
        onPressed: () => setState(() {
              launched = launchInBrowser(URL_INSTA_TORRYN);
            }),
        child: createSubTitle('Torryn 🐶', 1));
  }

  DownloadResume fabResume() {
    return DownloadResume(() => {launched = launchInBrowser(URL_RESUME)});
  }

  getTabletLayout() {
    return Scaffold(
        body: Container(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.

          child: Row(children: <Widget>[
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Expanded(
                    flex: 4,
                    child: Padding(
                        padding: EdgeInsets.all(PADDING),
                        child: mainContents())),
                Expanded(child: torrynLayout()),
                Expanded(child: socialContainer()),
              ],
            )),
            Expanded(child: WorkExperience())
          ]),
        ),
        floatingActionButton: fabResume()
        );
  }

  getMobileLayout() {
    return Scaffold(
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Expanded(flex: 7, child: mainContents()),
              Expanded(child: torrynLayout()),
              Expanded(flex: 1, child: socialContainer()),
              WorkExperience(),
          ],
        ),
      ),
        floatingActionButton: fabResume()
    );
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.

    // Responsive design
    return ResponsiveBuilder(builder: (context, sizingInformation) {
      // Check the sizing information here and return your UI
      if (sizingInformation.deviceScreenType == DeviceScreenType.desktop ||
          sizingInformation.deviceScreenType == DeviceScreenType.tablet) {
        // Show our table layout
        return getTabletLayout();
      }
      // Let's assume it's a mobile device
      return getMobileLayout();
    });
  }
}
