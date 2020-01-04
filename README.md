# Lorenzo's userscripts 

Lorenzo's homebrewed userscripts to add functionality to a myriad of sites.

## Installation

1. Make sure you have user scripts enabled in your browser (these instructions refer to the latest versions of the browser):

	* Firefox - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=firefox) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (GM v4+ is **not supported**!).
	* Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome).
	* Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera) or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/).
	* Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari).
	* Dolphin - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=dolphin).
	* UC Browser - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=ucweb).

2. Install a script directly from GitHub by clicking on the "install" link in the table below.



	| Userscript Wiki                        | ![][ico] | Direct<br>Install | Sites                 | Created    | Updated    | Deprecated |
	|----------------------------------------|:---:|:------------------:|:-------------------------:|:----------:|:----------:|:----------:|
	| [GitHub code colors][ccr-wiki]         |     | [install][ccr-raw] | [GF][ccr-gf] [OU][ccr-ou] | 2016.03.20 | 2019.07.31 |            |
	| [GitHub code folding][cfd-wiki]        |     | [install][cfd-raw] | [GF][cfd-gf] [OU][cfd-ou] | 2016.12.28 | 2019.06.07 |            |
	| [GitHub code guides][cgl-wiki]         |     | [install][cgl-raw] | [GF][cgl-gf] [OU][cgl-ou] | 2016.08.27 | 2018.02.16 |            |
	| [GitHub code show whitespace][csw-wiki]|     | [install][csw-raw] | [GF][csw-gf] [OU][csw-ou] | 2017.03.26 | 2019.07.02 |            |
	| [GitHub collapse in comment][cic-wiki] |  *  | [install][cic-raw] | [GF][cic-gf] [OU][cic-ou] | 2016.06.27 | 2019.02.16 |            |
	| [GitHub collapse markdown][cmd-wiki]   |  *  | [install][cmd-raw] | [GF][cmd-gf] [OU][cmd-ou] | 2016.06.27 | 2019.03.29 |            |
	| [GitHub copy code snippet][ccs-wiki]   |     | [install][ccs-raw] | [GF][ccs-gf] [OU][ccs-ou] | 2018.01.12 | 2019.02.16 |            |
	| [GitHub custom hotkeys][chk-wiki]      |     | [install][chk-raw] | [GF][chk-gf] [OU][chk-ou] | 2016.04.10 | 2019.05.12 |            |
	| [GitHub custom navigation][cnv-wiki]   |     | [install][cnv-raw] | [GF][cnv-gf] [OU][cnv-ou] | 2016.06.22 | 2019.06.02 |            |
	| [GitHub diff expander][dex-wiki]       |     | [install][dex-raw] | [GF][dex-gf] [OU][dex-ou] | 2018.06.09 | 2019.02.16 | 2019.01.30 |
	| [GitHub diff filename][dfn-wiki]       |     | [install][dfn-raw] | [GF][dfn-gf] [OU][dfn-ou] | 2017.08.27 | 2019.02.16 |            |
	| [GitHub diff files filter][dff-wiki]   |     | [install][dff-raw] | [GF][dff-gf] [OU][dff-ou] | 2016.12.31 | 2019.07.21 |            |
	| [GitHub diff links][dfl-wiki]          |     | [install][dfl-raw] | [GF][dfl-gf] [OU][dfl-ou] | 2016.07.21 | 2019.04.28 |            |
	| [GitHub download zip][dlz-wiki]        |     | [install][dlz-raw] | [GF][dlz-gf] [OU][dlz-ou] | 2018.10.22 | 2019.10.19 |            |
	| [GitHub files filter][gff-wiki]        |     | [install][gff-raw] | [GF][gff-gf] [OU][gff-ou] | 2017.06.26 | 2019.09.22 |            |
	| [GitHub font preview][fpv-wiki]        |     | [install][fpv-raw] | [GF][fpv-gf] [OU][fpv-ou] | 2016.06.11 | 2019.06.07 |            |
	| [GitHub hide own feed meta][hof-wiki]  |     | [install][hof-raw] | [GF][hof-gf] [OU][hof-ou] | 2017.12.21 | 2019.02.16 |            |
	| [GitHub html preview][ghp-wiki]        |     | [install][ghp-raw] | [GF][ghp-gf] [OU][ghp-ou] | 2019.03.29 | 2019.04.28 |            |
	| [GitHub image preview][ipv-wiki]       |     | [install][ipv-raw] | [GF][ipv-gf] [OU][ipv-ou] | 2016.05.17 | 2019.09.22 |            |
	| [GitHub indent comments][ioc-wiki]     |     | [install][ioc-raw] | [GF][ioc-gf] [OU][ioc-ou] | 2017.03.15 | 2019.02.16 |            |
	| [GitHub issue add details][iad-wiki]   |     | [install][iad-raw] | [GF][iad-gf] [OU][iad-ou] | 2018.01.05 | 2019.02.16 |            |
	| [GitHub issue comments][ic1-wiki]      |     | [install][ic1-raw] | [GF][ic1-gf] [OU][ic1-ou] | 2016.04.04 | 2019.05.23 |            |
	| [GitHub issue counts][ic2-wiki]        |     | [install][ic2-raw] | [GF][ic2-gf] [OU][ic2-ou] | 2012.01.16 | 2019.02.16 |            |
	| [GitHub issue highlighter][gih-wiki]   |     | [install][gih-raw] | [GF][gih-gf] [OU][gih-ou] | 2016.05.21 | 2018.02.16 | 2018.07.26 |
	| [GitHub issue show status][iss-wiki]   |     | [install][iss-raw] | [GF][iss-gf] [OU][iss-ou] | 2017.06.02 | 2019.02.16 | 2019.01.04 |
	| [GitHub label color picker][glc-wiki]  |     | [install][glc-raw] | [GF][glc-gf] [OU][glc-ou] | 2016.09.16 | 2019.07.25 |            |
	| [GitHub remove diff signs][rds-wiki]   |     | [install][rds-raw] | [GF][rds-gf] [OU][rds-ou] | 2016.04.05 | 2018.02.16 | 2018.07.31 |
	| [GitHub reveal header][rhd-wiki]       |     | [install][rhd-raw] | [GF][rhd-gf] [OU][rhd-ou] | 2017.06.03 | 2019.03.29 |            |
	| [GitHub rtl comments][rtl-wiki]        |     | [install][rtl-raw] | [GF][rtl-gf] [OU][rtl-ou] | 2016.06.13 | 2019.02.16 |            |
	| [GitHub search autocomplete][sac-wiki] |     | [install][sac-raw] | [GF][sac-gf] [OU][sac-ou] | 2017.03.31 | 2018.05.19 |            |
	| [GitHub sort content][srt-wiki]        |     | [install][srt-raw] | [GF][srt-gf] [OU][srt-ou] | 2016.07.13 | 2019.11.10 |            |
	| [GitHub sort reactions][gsr-wiki]      |     | [install][gsr-raw] | [GF][gsr-gf] [OU][gsr-ou] | 2018.02.10 | 2019.09.26 |            |
	| [GitHub static time][stt-wiki]         |     | [install][stt-raw] | [GF][stt-gf] [OU][stt-ou] | 2017.04.24 | 2019.02.16 |            |
	| [GitHub table of contents][toc-wiki]   |     | [install][toc-raw] | [GF][toc-gf] [OU][toc-ou] | 2016.03.28 | 2019.09.05 |            |
	| [GitHub title notification][tbn-wiki]  |     | [install][tbn-raw] | [GF][tbn-gf] [OU][tbn-ou] | 2016.03.24 | 2018.02.16 |            |
	| [GitHub toggle diff comments][tdc-wiki]|     | [install][tdc-raw] | [GF][tdc-gf] [OU][tdc-ou] | 2017.12.10 | 2019.02.16 |            |
	| [GitHub toggle expanders][tex-wiki]    |     | [install][tex-raw] | [GF][tex-gf] [OU][tex-ou] | 2016.09.17 | 2019.09.02 |            |
	| [GitHub toggle wiki sidebar][tws-wiki] |     | [install][tws-raw] | [GF][tws-gf] [OU][tws-ou] | 2016.04.01 | 2019.02.16 |            |
	| [Gist raw links][grl-wiki]             |     | [install][grl-raw] | [GF][grl-gf] [OU][grl-ou] | 2017.05.19 | 2019.06.07 |            |
	| [Gist to dabblet][g2d-wiki]            |     | [install][g2d-raw] | [GF][g2d-gf] [OU][g2d-ou] | 2012.01.26 | 2017.02.16 |            |

\* The ![][ico] column indicates that the userscript has been included in the [Octopatcher](https://github.com/Mottie/Octopatcher) browser extension/addon.

[ccr-wiki]: https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-code-colors

[tws-raw]: https://raw.githubusercontent.com/Mottie/GitHub-userscripts/master/github-toggle-wiki-sidebar.user.js

## Issues

Please report any userscript issues within this repository's [issue section](https://github.com/LSwank/userscripts/issues).

## Contributions

If you would like to contribute to this repository, please...

1. Fork
2. Make changes (please read the [contribution guidelines](./CONTRIBUTING.md) and abide by them)
3. Create a pull request!

## Acknowledgements

* Special thanks to GitHub user Mottie who had a great set of GitHub userscripts which provided a guideline to me for how to start sharing user scripts.
