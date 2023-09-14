/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  middleMarchSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Middlemarch <div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'middlemarch/index'
    },
    {
      type: 'doc',
      id: 'middlemarch/PRELUDE'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK I. </div> <div>MISS BROOKE.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK I'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK II. </div> <div>OLD AND YOUNG.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK II'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK III. </div> <div>WAITING FOR DEATH.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK III'},    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK IV. </div> <div>THREE LOVE PROBLEMS.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK IV'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK V. </div> <div>THE DEAD HAND.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK V'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK VI. </div> <div>THE WIDOW AND THE WIFE.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK VI'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'> BOOK VII. </div> <div>TWO TEMPTATIONS.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK VII'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'> BOOK VIII. </div> <div>SUNSET AND SUNRISE.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'middlemarch/BOOK VIII'}, 
    {
      type: 'html',
      value: "<div style='padding-top:10px'> FINALE.<div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'doc', id: 'middlemarch/FINALE'},
  ],
  theMillOnTheFlossSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 The Mill on the Floss<div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'The Mill on the Floss/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK FIRST.</div> <div> BOY AND GIRL.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK I'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK SECOND. </div> <div> SCHOOL-TIME.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK II'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK THIRD. </div> <div> THE DOWNFALL.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK III'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK FOURTH. </div> <div> THE VALLEY OF HUMILIATION.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK IV'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK FIFTH. </div> <div> WHEAT AND TARES.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK V'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'> BOOK SIXTH. </div> <div> THE GREAT TEMPTATION.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK VI'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'> BOOK SEVENTH. </div> <div> THE FINAL RESCUE.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'The Mill on the Floss/BOOK VII'}
  ],
  romolaSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Romola<div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'romola/index'
    },
    {
      type: 'doc',
      id: 'romola/PROEM'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK I.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'romola/BOOK I'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK II.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'romola/BOOK II'},
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK III.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'romola/BOOK III'},
  ],
  impressionsOfTheophrastusSuchSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Impressions of </div> <div>Theophrastus Such</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Impressions of Theophrastus Such/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>Chapters</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    {type: 'autogenerated', dirName: 'Impressions of Theophrastus Such/BOOK'},
  ],
  danielDerondaSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Daniel Deronda</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Daniel Deronda/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK I.  </div> <div>The Spoiled Child</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK I' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK II.  </div> <div>Meeting Streams</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK II' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK III.  </div> <div>Maidens Choosing</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK III' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK IV.  </div> <div>Gwendolen Gets Her Choice</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK IV' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK V.  </div> <div>Mordecai</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK V' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK VI.  </div> <div>Revelations</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK VI' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK VII.  </div> <div>The Mother and the Son</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK VII' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK VIII.  </div> <div>Fruit and Seed.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Daniel Deronda/BOOK VIII' }
  ],
  adamBedeSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Adam Bede</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Adam Bede/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK I.  </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK I' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK II.  </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK II' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK III.  </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK III' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK IV.  </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK IV' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK V.  </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK V' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK VI.  </div>" ,
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Adam Bede/BOOK VI' },
  ],
  scenesOfClericalLifeSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Scenes of Clerical Life</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Scenes of Clerical Life/index'
    },
    {
      type: 'doc',
      id: 'Scenes of Clerical Life/INTRODUCTION'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK I.  </div>  <div>The Sad Fortunes of the Rev. Amos Barton</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Scenes of Clerical Life/BOOK I' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK II.  </div>  <div>Mr. Gilfil’s Love Story </div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Scenes of Clerical Life/BOOK II' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>BOOK III.  </div>  <div>Janet’s Repentance</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Scenes of Clerical Life/BOOK III' },
  ],
  silasMarnerSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Silas Marner</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Silas Marner/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>PART ONE.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Silas Marner/BOOK I' },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>PART TWO.</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Silas Marner/BOOK II' }
  ],
  felixHoltTheRadicalSidebar: [
    {
      type: 'html',
      value: "<div id='book-title'>📖 Felix Holt, the Radical</div> ",
      className: 'sidebar-title book-header'
    },
    {
      type: 'doc',
      id: 'Felix Holt, the Radical/index'
    },
    {
      type: 'html',
      value: "<div style='padding-top:10px'>Chapters</div>",
      className: 'sidebar-title book-title',
      defaultStyle: true,
    },
    { type: 'autogenerated', dirName: 'Felix Holt, the Radical/BOOK' }
  ]
};

module.exports = sidebars;
