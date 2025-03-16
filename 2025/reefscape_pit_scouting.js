var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "t": "Tank<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Floor pickup Coral",
      "code": "fpc",
      "type": "bool"
    },
    { "name": "Score Coral - L1",
      "code": "sc1",
      "type": "bool"
    },
    { "name": "Score Coral - L2",
      "code": "sc2",
      "type": "bool"
    },
    { "name": "Score Coral - L3",
      "code": "sc3",
      "type": "bool"
    },
    { "name": "Score Coral - L4",
      "code": "sc4",
      "type": "bool"
    },
    { "name": "Score Algae - Processor",
      "code": "sap",
      "type": "bool"
    },
    { "name": "Score Algae - Net",
      "code": "san",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "radio",
      "choices": {
        "m": "Move Only<br>",
        "n": "One Coral<br>",
        "u": "Multi Coral<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Auto Notes",
      "code": "atn",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Climb",
      "code": "cli",
      "type": "radio",
      "choices": {
        "d": "Deep Climp<br>",
        "s": "Shallow Climb<br>",
        "n": "None"
      },
      "defaultValue": "o"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
