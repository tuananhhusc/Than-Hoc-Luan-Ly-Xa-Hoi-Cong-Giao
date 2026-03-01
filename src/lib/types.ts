export interface TableRow {
  cells: string[];
}

export interface ContentTable {
  headers: string[];
  rows: TableRow[];
}

export interface SubSection {
  id: string;
  title: string;
  paragraphs: string[];
  table?: ContentTable;
}

export interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: SubSection[];
  table?: ContentTable;
}

export interface TocItem {
  id: string;
  title: string;
  children?: { id: string; title: string }[];
}

export interface DocumentData {
  title: string;
  sections: Section[];
  references: string[];
  tocItems: TocItem[];
}
