/*
Copyright (C) 2015 Sam Parkinson

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

window.platform = {
    android: /Android/i.test(navigator.userAgent),
    FF:      /Firefox/i.test(navigator.userAgent),
    mobile:  /Mobi/i   .test(navigator.userAgent),
    tablet:  /Tablet/i .test(navigator.userAgent)
};

platform.androidWebkit = platform.android && !platform.FF;
platform.FFOS = platform.FF
            && (platform.mobile || platform.tablet)
            && !platform.android;
console.log('On platform: ', platform);


window.platformColor = {
    blockText: '#282828',
    paletteColors: {
	'widgets': ['#7CD622', '#57AD02', '#77C428', '#B4EB7D'],
	'pitch': ['#7CD622', '#57AD02', '#77C428', '#B4EB7D'],
	'rhythm': ['#FE994F', '#E86B0E', '#FF8B2D', '#FEC092'],
	'meter': ['#FE994F', '#E86B0E', '#FF8B2D', '#FEC092'],
	'tone': ['#3EDCDD', '#1DBCBD', '#25C3C0', '#A1EEEF'],
	'ornament': ['#3EDCDD', '#1DBCBD', '#25C3C0', '#A1EEEF'],
	'intervals': ['#7CD622', '#57AD02', '#77C428', '#B4EB7D'],
	'volume': ['#3EDCDD', '#1DBCBD', '#25C3C0', '#A1EEEF'],
	'drum': ['#3EDCDD', '#1DBCBD', '#25C3C0', '#A1EEEF'],
	'graphics': ['#92A9FF', '#5370DC', '#728FF9', '#CDD8FF'],
	'pen': ['#92A9FF', '#5370DC', '#728FF9', '#CDD8FF'],
	'boxes': ['#FFBF00', '#DAAF30', '#DAA926', '#FFE391'],
	'action': ['#FFBF00', '#DAAF30', '#DAA926', '#FFE391'],
	'media': ['#FF664B', '#EA4326', '#FF5942', '#FFB9E2'],
	'number': ['#FF6EA1', '#FF2C76', '#FF5293', '#FFCDDF'],
	'boolean': ['#D97DF5', '#B653D3', '#C96DF3', '#EDC6A3'],
	'flow': ['#D98A43', '#B7651A', '#D68136', '#ECC6A4'],
	'sensors': ['#FF664B', '#EA4326', '#FF5942', '#FFB9E2'],
	'extras': ['#C4C4C4', '#A0A0A0', '#B0B0B0', '#D0D0D0'],
	'myblocks': ['#C4C4C4', '#A0A0A0', '#B0B0B0', '#D0D0D0'],
	'heap': ['#D98A43', '#B7651A', '#D68136', '#ECC6A4'],
	'ensemble': ['#92A9FF', '#5370DC', '#728FF9', '#CDD8FF'],
    },

    disconnected: '#C4C4C4',  // disconnected block color
    header: platform.FF? '#4DA6FF' : '#4DA6FF',
    aux: '#1A8CFF',
    sub: '#8CC6FF',
    doHeaderShadow: !platform.FF,
    rule: '#E2E2E2',
    ruleColor: '#E2E2E2',
    trashColor: '#C0C0C0',
    trashBorder: '#808080',
    trashActive: '#FF0000',
    background: '#F9F9F9',
    paletteSelected: '#F3F3F3',
    paletteBackground: '#FFFFFF',
    paletteText: '#666666',
    selectorBackground: '#8CC6FF',
    selectorSelected: '#1A8CFF',
};

document.querySelector('meta[name=theme-color]')
        .content = platformColor.header;


function showButtonHighlight(x, y, r, event, scale, stage) {
    if (platform.FFOS) return {};
    return showMaterialHighlight(x, y, r, event, scale, stage);
};
