const {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  UnderlineType,
  WidthType,
  VerticalAlign,
  TextDirection,
  HeadingLevel,
} = require("docx");

const doc = new Document();

//file transfer
const fs = require("fs");

/*
Name
Workplace

*/

const Name = "Bryan";
const WorkPlace = "Central Valley";
const HOURS = "30";
const TextTitle = new TextRun({
  text: "Weekly Timesheet ",
  underline: {
    type: UnderlineType.DOUBLE,
    color: "990011",
  },
  bold: true,
});
const spacing = new TextRun({
  text: "",
});

const paragraphTitle = new Paragraph({
  children: [TextTitle.break(), spacing.break()],
});
//  columnWidths: [1000, 1000, 1000],

const TextName = new TextRun({
  text: `${Name}`,
  underline: {
    type: UnderlineType.DOUBLE,
  },
  color: "#FF0000",
  bold: true,
});
const table = new Table({
  width: {
    size: 1000,
    type: WidthType.DXA,
  },
  columnWidths: [9000],
  margins: {
    top: 200,
    bottom: 200,
    right: 200,
    left: 200,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun("Employee Name: "), TextName],
            }),
          ],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(`Workplace: ${WorkPlace}`)],
        }),
      ],
    }),
  ],
});

const paragraph = new Paragraph(" ");

const testtable = new Table({
  width: {
    size: 9000,
    type: WidthType.DXA,
  },
  columnWidths: [1800, 1800, 1800, 1800, 1800],
  margins: {
    top: 100,
    bottom: 100,
    right: 400,
    left: 200,
  },

  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph("DAY")],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph("START TIME")],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph("END TIME")],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph("LUNCH TIME")],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph("TOTAL  HOURS")],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
      ],
    }),
    new TableRow({
      width: {
        size: 9000,
        type: WidthType.DXA,
      },
      columnWidths: [1800, 1800, 1800, 1800, 1800],
      margins: {
        top: 100,
        bottom: 100,
        right: 400,
        left: 200,
      },
      children: [
        new TableCell({
          children: [new Paragraph("Monday")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
      ],
    }),

    new TableRow({
      width: {
        size: 9000,
        type: WidthType.DXA,
      },
      columnWidths: [1800, 1800, 1800, 1800, 1800],
      margins: {
        top: 100,
        bottom: 100,
        right: 400,
        left: 200,
      },
      children: [
        new TableCell({
          children: [new Paragraph("Tuesday")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
      ],
    }),

    new TableRow({
      width: {
        size: 9000,
        type: WidthType.DXA,
      },
      columnWidths: [1800, 1800, 1800, 1800, 1800],
      margins: {
        top: 100,
        bottom: 100,
        right: 400,
        left: 200,
      },
      children: [
        new TableCell({
          children: [new Paragraph("Wednesday")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
      ],
    }),

    new TableRow({
      width: {
        size: 9000,
        type: WidthType.DXA,
      },
      columnWidths: [1800, 1800, 1800, 1800, 1800],
      margins: {
        top: 100,
        bottom: 100,
        right: 400,
        left: 200,
      },
      children: [
        new TableCell({
          children: [new Paragraph("Thursday")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
      ],
    }),

    new TableRow({
      width: {
        size: 9000,
        type: WidthType.DXA,
      },
      columnWidths: [1800, 1800, 1800, 1800, 1800],
      margins: {
        top: 100,
        bottom: 100,
        right: 400,
        left: 200,
      },
      children: [
        new TableCell({
          children: [new Paragraph("Friday")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
        new TableCell({
          children: [new Paragraph("TIME")],
        }),
      ],
    }),
  ],
});

const TOTAL_HOURS_TEXT = new TextRun({
  text: "TOTAL HOURS",
  bold: true,
});

const TOTAL_HOURS_NUMBER = new TextRun({
  text: `${HOURS} HOURS`,
  underline: {
    type: UnderlineType.DOUBLE,
  },
  color: "#FF0000",
  bold: true,
});

const finaltable = new Table({
  width: {
    size: 1000,
    type: WidthType.DXA,
  },
  columnWidths: [4500, 4500],
  margins: {
    top: 200,
    bottom: 200,
    right: 200,
    left: 200,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [TOTAL_HOURS_TEXT],
            }),
          ],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [TOTAL_HOURS_NUMBER],
            }),
          ],
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
    }),
  ],
});

doc.addSection({
  children: [paragraphTitle, table, paragraph, testtable, finaltable],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("MyDocument.docx", buffer);
});
