import 'package:flutter/material.dart';

class DownloadResume extends StatelessWidget {
  final Function() onPressAction;

  DownloadResume(this.onPressAction) : super();

  @override
  FloatingActionButton build(BuildContext context) {
    return FloatingActionButton.extended(
      onPressed: onPressAction,
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
    );
  }
}
