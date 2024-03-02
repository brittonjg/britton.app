import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:auto_size_text/auto_size_text.dart';

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
      title: 'EM James',
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
      home: MyHomePage(title: 'EM James'),
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
  static const URL_RESUME =
      'https://drive.google.com/file/d/1Qtw5ZT1Z_u4j1GSby_FOabVeh_WVPF3Y/view?usp=sharing';
  static const URL_INSTA_TORRYN = 'https://www.instagram.com/torryn_toller';
  static const URL_INSTA_ME = 'https://www.instagram.com/britton.jg/';
  static const URL_LINKEDIN = 'https://www.linkedin.com/in/jgbritton/';
  static const URL_GITHUB = 'https://github.com/brittonjg';
  static const URL_LASTFM = 'https://www.last.fm/user/mcdillon';

  static const TEXT_COLOUR = Color.fromRGBO(55, 71, 79, 1);

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
              createMainText('', 1), // Space between text
              createMainText(
                  'Currently an Engineering Manager at Cuvva, responsible for our short term insurance product',
                  2),
              createMainText('', 1), // Space between text
              createMainText(
                  'A highly skilled Engineering Manager, from a mobile engineering backend. Now leading, coaching and delivering projects with a highly functioning multi disciplinary team.',
                  4)
            ],
          )),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Row(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).

          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Container(),
            ),
            Expanded(
                flex: 9,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Expanded(flex: 7, child: mainContents()),
                    Expanded(
                      child: TextButton(
                          onPressed: () => setState(() {
                                launched = launchInBrowser(URL_INSTA_TORRYN);
                              }),
                          child: createSubTitle('Torryn 🐶', 1)),
                    ),
                    Expanded(flex: 1, child: socialContainer()),
                    Expanded(
                        flex: 1,
                        child: Container()), // Space to allow for the FAB
                  ],
                )),
            Expanded(
              flex: 1,
              child: Container(),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => setState(() {
          launched = launchInBrowser(URL_RESUME);
        }),
        tooltip: 'Download Resumé',
        label: Text(
          'Resumé',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.w600,
            fontStyle: FontStyle.normal,
          ),
        ),
        icon: Icon(Icons.download),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
