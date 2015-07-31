/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['lato, sans-serif']='<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'header',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'body',
                type: 'rect',
                rect: ['0', '700','auto','auto','auto', 'auto']
            },
            {
                id: 'footer',
                type: 'rect',
                rect: ['0', '2200','auto','auto','auto', 'auto']
            },
            {
                id: 'script-',
                type: 'image',
                rect: ['421px', '1706px','753px','445px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"script-.png",'0px','0px']
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['146px', '829px','1308px','273px','auto', 'auto'],
                fill: ["rgba(249,133,77,0.68)"],
                stroke: [0,"rgba(255, 255, 255, 0)","none"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['80px', '26px','1048px','45px','auto', 'auto'],
                text: "I'm passionate about technology and arts furthermore an enthusiastic and self-motivated",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['80px', '56px','768px','45px','auto', 'auto'],
                text: "front end web developer. I currently Studing and working as a freelancer",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['840px', '56px','33px','45px','auto', 'auto'],
                text: ".",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['80px', '136px','1048px','36px','auto', 'auto'],
                text: "Experience in HTML, CSS, pre-procesors, jQuery, Javascript, Bootstrap and Adobe suite.",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['80px', '165px','1048px','36px','auto', 'auto'],
                text: "I'm renowned for fast HTML and CSS coding, accuracy and attention to detail as well as",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['80px', '195px','657px','36px','auto', 'auto'],
                text: "awesome interpersonal skills and a relaxed temperament.",
                align: "left",
                font: ['lato, sans-serif', 24, "rgba(96,84,78,1)", "400", "none", "normal"]
            },
            {
                id: 'good-idea-iconsCopy2',
                type: 'image',
                rect: ['1208px', '178px','64px','64px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"good-idea-icons.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'footer',
                symbolName: 'footer',
                autoPlay: {

                }
            },
            {
                id: 'header',
                symbolName: 'header',
                autoPlay: {

                }
            },
            {
                id: 'body',
                symbolName: 'body',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_script-}": [
                ["style", "top", '2119px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '421px'],
                ["style", "width", '37px']
            ],
            "${_Text11}": [
                ["style", "top", '1026px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '36px'],
                ["style", "left", '204px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(249,133,77,0.68)'],
                ["style", "left", '146px'],
                ["style", "top", '829px']
            ],
            "${_Text8}": [
                ["style", "left", '660px'],
                ["style", "top", '-45px']
            ],
            "${_Text10}": [
                ["style", "top", '996px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '36px'],
                ["style", "left", '204px'],
                ["style", "width", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '857px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '36px'],
                ["style", "left", '204px'],
                ["style", "width", '0px']
            ],
            "${_footer}": [
                ["style", "top", '1550px'],
                ["style", "left", '-2px'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Text7}": [
                ["style", "top", '887px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '36px'],
                ["style", "left", '204px'],
                ["style", "width", '0px']
            ],
            "${_header}": [
                ["transform", "scaleX", '0.99875'],
                ["style", "left", '-1px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1600px'],
                ["style", "height", '2400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '967px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '36px'],
                ["style", "left", '204px'],
                ["style", "width", '0px']
            ],
            "${_body}": [
                ["style", "top", '800px']
            ],
            "${_good-idea-iconsCopy2}": [
                ["style", "top", '1009px'],
                ["style", "opacity", '0'],
                ["style", "left", '1332px'],
                ["transform", "rotateZ", '14deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23501,
            autoPlay: true,
            timeline: [
                { id: "eid515", tween: [ "style", "${_Text11}", "left", '204px', { fromValue: '204px'}], position: 6496, duration: 0 },
                { id: "eid36", tween: [ "transform", "${_header}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid451", tween: [ "style", "${_script-}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 4000, easing: "easeOutExpo" },
                { id: "eid573", tween: [ "style", "${_good-idea-iconsCopy2}", "top", '1009px', { fromValue: '1009px'}], position: 4963, duration: 0 },
                { id: "eid574", tween: [ "style", "${_good-idea-iconsCopy2}", "top", '1009px', { fromValue: '1009px'}], position: 8877, duration: 0 },
                { id: "eid489", tween: [ "style", "${_Text10}", "width", '1048px', { fromValue: '0px'}], position: 3557, duration: 603 },
                { id: "eid508", tween: [ "style", "${_Text9}", "top", '967px', { fromValue: '967px'}], position: 6496, duration: 0 },
                { id: "eid445", tween: [ "style", "${_script-}", "height", '445px', { fromValue: '32px'}], position: 6000, duration: 4000, easing: "easeOutExpo" },
                { id: "eid414", tween: [ "style", "${_footer}", "top", '1550px', { fromValue: '1550px'}], position: 0, duration: 0, easing: "easeInExpo" },
                { id: "eid37", tween: [ "style", "${_header}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid511", tween: [ "style", "${_Text7}", "left", '204px', { fromValue: '204px'}], position: 6496, duration: 0 },
                { id: "eid509", tween: [ "style", "${_good-idea-iconsCopy2}", "left", '1332px', { fromValue: '1332px'}], position: 4963, duration: 0 },
                { id: "eid496", tween: [ "style", "${_Text8}", "top", '51px', { fromValue: '-45px'}], position: 2757, duration: 43 },
                { id: "eid497", tween: [ "style", "${_Text8}", "top", '33px', { fromValue: '51px'}], position: 2801, duration: 31 },
                { id: "eid498", tween: [ "style", "${_Text8}", "top", '62px', { fromValue: '33px'}], position: 2832, duration: 45 },
                { id: "eid499", tween: [ "style", "${_Text8}", "top", '33px', { fromValue: '62px'}], position: 2877, duration: 41 },
                { id: "eid500", tween: [ "style", "${_Text8}", "top", '56px', { fromValue: '33px'}], position: 2919, duration: 37 },
                { id: "eid485", tween: [ "transform", "${_good-idea-iconsCopy2}", "rotateZ", '-19deg', { fromValue: '14deg'}], position: 4812, duration: 50 },
                { id: "eid486", tween: [ "transform", "${_good-idea-iconsCopy2}", "rotateZ", '25deg', { fromValue: '-19deg'}], position: 4863, duration: 50 },
                { id: "eid487", tween: [ "transform", "${_good-idea-iconsCopy2}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 4913, duration: 50 },
                { id: "eid31", tween: [ "style", "${_body}", "top", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
                { id: "eid483", tween: [ "style", "${_good-idea-iconsCopy2}", "opacity", '0.6', { fromValue: '0'}], position: 4762, duration: 50 },
                { id: "eid484", tween: [ "style", "${_good-idea-iconsCopy2}", "opacity", '0.60162626679351', { fromValue: '0.6'}], position: 4812, duration: 151 },
                { id: "eid447", tween: [ "style", "${_script-}", "top", '1707px', { fromValue: '2119px'}], position: 6000, duration: 4000, easing: "easeOutExpo" },
                { id: "eid507", tween: [ "style", "${_Text9}", "left", '204px', { fromValue: '204px'}], position: 6496, duration: 0 },
                { id: "eid491", tween: [ "style", "${_Text8}", "left", '587px', { fromValue: '660px'}], position: 2757, duration: 43 },
                { id: "eid492", tween: [ "style", "${_Text8}", "left", '685px', { fromValue: '587px'}], position: 2801, duration: 31 },
                { id: "eid493", tween: [ "style", "${_Text8}", "left", '722px', { fromValue: '685px'}], position: 2832, duration: 45 },
                { id: "eid494", tween: [ "style", "${_Text8}", "left", '769px', { fromValue: '722px'}], position: 2877, duration: 41 },
                { id: "eid495", tween: [ "style", "${_Text8}", "left", '840px', { fromValue: '769px'}], position: 2919, duration: 37 },
                { id: "eid512", tween: [ "style", "${_Text7}", "top", '887px', { fromValue: '887px'}], position: 6496, duration: 0 },
                { id: "eid516", tween: [ "style", "${_Text11}", "top", '1026px', { fromValue: '1026px'}], position: 6496, duration: 0 },
                { id: "eid2", tween: [ "transform", "${_header}", "scaleX", '0.99875', { fromValue: '0.99875'}], position: 0, duration: 0 },
                { id: "eid449", tween: [ "style", "${_script-}", "width", '753px', { fromValue: '37px'}], position: 6000, duration: 4000, easing: "easeOutExpo" },
                { id: "eid502", tween: [ "style", "${_Text7}", "width", '768px', { fromValue: '0px'}], position: 2353, duration: 603 },
                { id: "eid503", tween: [ "style", "${_Text6}", "height", '36px', { fromValue: '36px'}], position: 1875, duration: 0 },
                { id: "eid504", tween: [ "style", "${_Text6}", "width", '1048px', { fromValue: '0px'}], position: 1750, duration: 603 },
                { id: "eid488", tween: [ "style", "${_Text11}", "width", '657px', { fromValue: '0px'}], position: 4160, duration: 603 },
                { id: "eid514", tween: [ "style", "${_Text10}", "top", '996px', { fromValue: '996px'}], position: 6496, duration: 0 },
                { id: "eid501", tween: [ "style", "${_Text7}", "height", '36px', { fromValue: '36px'}], position: 2453, duration: 0 },
                { id: "eid513", tween: [ "style", "${_Text10}", "left", '204px', { fromValue: '204px'}], position: 6496, duration: 0 },
                { id: "eid490", tween: [ "style", "${_Text9}", "width", '1048px', { fromValue: '0px'}], position: 2955, duration: 603 },
                { id: "eid506", tween: [ "style", "${_Text6}", "top", '857px', { fromValue: '857px'}], position: 6496, duration: 0 },
                { id: "eid505", tween: [ "style", "${_Text6}", "left", '204px', { fromValue: '204px'}], position: 6496, duration: 0 },
                { id: "eid3", tween: [ "style", "${_header}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"header": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '800px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(198,85,81,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(198,85,81,1.00)']
                },
                {
                    rect: ['618px', '172px', '355px', '355px', 'auto', 'auto'],
                    id: 'JohanHover',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/JohanHover.png', '0px', '0px']
                },
                {
                    id: 'Untitled-2',
                    type: 'image',
                    rect: ['618px', '172px', '355px', '355px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-2.png', '0px', '0px']
                },
                {
                    rect: ['543px', '94px', '505px', '501px', 'auto', 'auto'],
                    id: 'photo-hole2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/photo-hole2.png', '0px', '0px']
                },
                {
                    id: 'header_text',
                    type: 'rect',
                    rect: ['522px', '425px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['570px', '151px', '64px', '64px', 'auto', 'auto'],
                    id: 'social_01',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/social_01.png', '0px', '0px']
                },
                {
                    rect: ['936px', '151px', '64px', '64px', 'auto', 'auto'],
                    id: 'social_06',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/social_06.png', '0px', '0px']
                },
                {
                    rect: ['516px', '416px', '64px', '64px', 'auto', 'auto'],
                    id: 'social_14',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/social_14.png', '0px', '0px']
                },
                {
                    rect: ['490px', '312px', '64px', '64px', 'auto', 'auto'],
                    id: 'social_032',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/social_03.png', '0px', '0px']
                },
                {
                    id: 'contact_box',
                    type: 'rect',
                    rect: ['1081', '164', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1048px', '313px', '64px', '64px', 'auto', 'auto'],
                    id: 'social_56',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/social_56.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'header_text',
                symbolName: 'header_text',
                autoPlay: {

               }
            },
            {
                id: 'contact_box',
                symbolName: 'contact_box',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_social_56}": [
                ["style", "top", '341px'],
                ["style", "left", '778px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ],
            "${_social_01}": [
                ["style", "top", '328px'],
                ["style", "left", '781px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.017094017094017'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ],
            "${_JohanHover}": [
                ["style", "top", '172px'],
                ["style", "height", '355px'],
                ["style", "opacity", '1'],
                ["style", "left", '618px'],
                ["style", "width", '355px']
            ],
            "${_social_14}": [
                ["style", "top", '326px'],
                ["style", "left", '753px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '24px']
            ],
            "${_social_032}": [
                ["style", "top", '334px'],
                ["style", "opacity", '0'],
                ["style", "left", '782px'],
                ["style", "height", '31px'],
                ["style", "background-size", [99.9,99.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer'],
                ["style", "width", '29px']
            ],
            "${_social_06}": [
                ["style", "top", '342px'],
                ["style", "left", '768px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.025641025641026'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ],
            "${_Untitled-2}": [
                ["style", "top", '172px'],
                ["style", "height", '355px'],
                ["style", "opacity", '1'],
                ["style", "left", '618px'],
                ["style", "width", '355px']
            ],
            "${_header_text}": [
                ["style", "left", '522px'],
                ["style", "top", '425px']
            ],
            "${_photo-hole2}": [
                ["style", "top", '94px'],
                ["style", "height", '501px'],
                ["style", "left", '543px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '505px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(198,85,81,1.00)'],
                ["style", "height", '800px'],
                ["color", "border-color", 'rgba(198,85,81,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_contact_box}": [
                ["style", "top", '203px'],
                ["style", "opacity", '0'],
                ["style", "left", '968px']
            ],
            "${symbolSelector}": [
                ["style", "height", '700px'],
                ["style", "width", '1600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7207,
            autoPlay: false,
            labels: {
                "start": 0,
                "img_hover": 3000,
                "negative": 6000,
                "contact-box": 7000
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_social_56}", "top", '313px', { fromValue: '341px'}], position: 3122, duration: 378, easing: "easeInExpo" },
                { id: "eid531", tween: [ "style", "${_social_56}", "top", '304px', { fromValue: '313px'}], position: 3500, duration: 200, easing: "easeInQuad" },
                { id: "eid147", tween: [ "style", "${_social_14}", "height", '64px', { fromValue: '30px'}], position: 3300, duration: 400, easing: "easeInExpo" },
                { id: "eid69", tween: [ "style", "${_social_01}", "left", '570px', { fromValue: '781px'}], position: 3047, duration: 370, easing: "easeInExpo" },
                { id: "eid529", tween: [ "style", "${_social_01}", "left", '615px', { fromValue: '570px'}], position: 3418, duration: 282, easing: "easeInQuad" },
                { id: "eid93", tween: [ "style", "${_social_56}", "width", '64px', { fromValue: '31px'}], position: 3122, duration: 378, easing: "easeInExpo" },
                { id: "eid143", tween: [ "style", "${_social_14}", "left", '570px', { fromValue: '753px'}], position: 3300, duration: 400, easing: "easeInExpo" },
                { id: "eid151", tween: [ "style", "${_social_14}", "opacity", '1', { fromValue: '0'}], position: 3300, duration: 400, easing: "easeInExpo" },
                { id: "eid569", tween: [ "style", "${_contact_box}", "left", '968px', { fromValue: '968px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid67", tween: [ "style", "${_social_032}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 363, easing: "easeInQuad" },
                { id: "eid61", tween: [ "style", "${_social_032}", "top", '312px', { fromValue: '334px'}], position: 3000, duration: 363, easing: "easeInQuad" },
                { id: "eid527", tween: [ "style", "${_social_032}", "top", '311px', { fromValue: '312px'}], position: 3363, duration: 337, easing: "easeInQuad" },
                { id: "eid97", tween: [ "style", "${_social_56}", "opacity", '1', { fromValue: '0'}], position: 3122, duration: 378, easing: "easeInExpo" },
                { id: "eid571", tween: [ "style", "${_social_56}", "opacity", '0', { fromValue: '1'}], position: 7104, duration: 102, easing: "easeInExpo" },
                { id: "eid534", tween: [ "style", "${_Untitled-2}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 193, easing: "easeInExpo" },
                { id: "eid87", tween: [ "style", "${_social_06}", "opacity", '0.025641025641026', { fromValue: '0.025641025641026'}], position: 3088, duration: 0, easing: "easeInExpo" },
                { id: "eid136", tween: [ "style", "${_social_06}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 400, easing: "easeInExpo" },
                { id: "eid570", tween: [ "style", "${_contact_box}", "top", '203px', { fromValue: '203px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid89", tween: [ "style", "${_social_56}", "left", '1048px', { fromValue: '778px'}], position: 3122, duration: 378, easing: "easeInExpo" },
                { id: "eid530", tween: [ "style", "${_social_56}", "left", '977px', { fromValue: '1048px'}], position: 3500, duration: 200, easing: "easeInQuad" },
                { id: "eid81", tween: [ "style", "${_social_06}", "top", '342px', { fromValue: '342px'}], position: 3088, duration: 0, easing: "easeInExpo" },
                { id: "eid133", tween: [ "style", "${_social_06}", "top", '215px', { fromValue: '318px'}], position: 3200, duration: 400, easing: "easeInExpo" },
                { id: "eid73", tween: [ "style", "${_social_01}", "height", '64px', { fromValue: '31px'}], position: 3047, duration: 370, easing: "easeInExpo" },
                { id: "eid79", tween: [ "style", "${_social_06}", "left", '768px', { fromValue: '768px'}], position: 3088, duration: 0, easing: "easeInExpo" },
                { id: "eid132", tween: [ "style", "${_social_06}", "left", '516px', { fromValue: '761px'}], position: 3200, duration: 400, easing: "easeInExpo" },
                { id: "eid528", tween: [ "style", "${_social_06}", "left", '562px', { fromValue: '516px'}], position: 3600, duration: 100, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_social_14}", "top", '418px', { fromValue: '326px'}], position: 3300, duration: 400, easing: "easeInExpo" },
                { id: "eid103", tween: [ "style", "${_social_032}", "background-size", [99.9,99.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.9,99.9]}], position: 4000, duration: 0, easing: "easeInExpo" },
                { id: "eid75", tween: [ "style", "${_social_01}", "width", '64px', { fromValue: '31px'}], position: 3047, duration: 370, easing: "easeInExpo" },
                { id: "eid85", tween: [ "style", "${_social_06}", "width", '31px', { fromValue: '31px'}], position: 3088, duration: 0, easing: "easeInExpo" },
                { id: "eid135", tween: [ "style", "${_social_06}", "width", '64px', { fromValue: '17px'}], position: 3200, duration: 400, easing: "easeInExpo" },
                { id: "eid121", tween: [ "style", "${_contact_box}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInExpo" },
                { id: "eid124", tween: [ "style", "${_contact_box}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 104, easing: "easeInExpo" },
                { id: "eid65", tween: [ "style", "${_social_032}", "width", '64px', { fromValue: '29px'}], position: 3000, duration: 363, easing: "easeInQuad" },
                { id: "eid77", tween: [ "style", "${_social_01}", "opacity", '1', { fromValue: '0.017094017094017'}], position: 3047, duration: 370, easing: "easeInExpo" },
                { id: "eid83", tween: [ "style", "${_social_06}", "height", '31px', { fromValue: '31px'}], position: 3088, duration: 0, easing: "easeInExpo" },
                { id: "eid134", tween: [ "style", "${_social_06}", "height", '64px', { fromValue: '17px'}], position: 3200, duration: 400, easing: "easeInExpo" },
                { id: "eid63", tween: [ "style", "${_social_032}", "height", '64px', { fromValue: '31px'}], position: 3000, duration: 363, easing: "easeInQuad" },
                { id: "eid71", tween: [ "style", "${_social_01}", "top", '151px', { fromValue: '328px'}], position: 3047, duration: 370, easing: "easeInExpo" },
                { id: "eid91", tween: [ "style", "${_social_56}", "height", '64px', { fromValue: '31px'}], position: 3122, duration: 378, easing: "easeInExpo" },
                { id: "eid59", tween: [ "style", "${_social_032}", "left", '490px', { fromValue: '782px'}], position: 3000, duration: 363, easing: "easeInQuad" },
                { id: "eid526", tween: [ "style", "${_social_032}", "left", '543px', { fromValue: '490px'}], position: 3363, duration: 337, easing: "easeInQuad" },
                { id: "eid149", tween: [ "style", "${_social_14}", "width", '64px', { fromValue: '24px'}], position: 3300, duration: 400, easing: "easeInExpo" }            ]
        }
    }
},
"header_text": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '559px', '276px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['5px', '70px', '263px', '105px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'JOHAN',
                    font: ['lato, sans-serif', 70, 'rgba(92,226,175,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['259px', '70px', '263px', '89px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 70, 'rgba(131,124,154,1.00)', '400', 'none', 'normal'],
                    align: 'left',
                    id: 'Text2',
                    text: 'MÉNDEZ',
                    autoOrient: false,
                    type: 'text'
                },
                {
                    rect: ['113px', '166px', '363px', '89px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 43, 'rgba(228,227,232,1.00)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'FRONT END DEV',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '276px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_Text}": [
                ["style", "top", '70px'],
                ["style", "font-size", '70px'],
                ["color", "color", 'rgba(92,226,175,1)'],
                ["style", "height", '105px'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '5px'],
                ["style", "width", '263px']
            ],
            "${symbolSelector}": [
                ["style", "height", '276px'],
                ["style", "width", '559px']
            ],
            "${_Text5}": [
                ["style", "top", '166px'],
                ["color", "color", 'rgba(228,227,232,1)'],
                ["style", "width", '363px'],
                ["style", "left", '113px'],
                ["style", "font-size", '43px']
            ],
            "${_Text2}": [
                ["style", "top", '70px'],
                ["style", "left", '259px'],
                ["color", "color", 'rgba(131,124,154,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"body": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '900px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgba(255, 255, 255, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    id: 'rectangles_ani',
                    type: 'rect',
                    rect: ['19', '262', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'rectangles_ani',
                symbolName: 'rectangles_ani',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "height", '900px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1500px'],
                ["style", "width", '1598px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23501,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"footer": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '897px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgba(255, 255, 255, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['575px', '837px', '217px', '105px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: '2015',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['274px', '792px', '263px', '89px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 70, 'rgba(131,124,154,1.00)', '400', 'none', 'normal'],
                    id: 'Text2Copy',
                    text: 'MÉNDEZ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['11px', '792px', '263px', '105px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'JOHAN',
                    font: ['lato, sans-serif', 70, 'rgba(92,226,175,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    id: 'screen',
                    type: 'image',
                    rect: ['350px', '56px', '900px', '758px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/screen.png', '0px', '0px']
                },
                {
                    rect: ['385px', '93px', '827px', '519px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(255, 255, 255, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(46,204,113,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["color", "color", 'rgba(131,124,154,1)'],
                ["style", "left", '274px'],
                ["style", "top", '792px']
            ],
            "${_TextCopy}": [
                ["style", "top", '792px'],
                ["style", "font-size", '70px'],
                ["color", "color", 'rgba(92,226,175,1)'],
                ["style", "height", '105px'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '11px'],
                ["style", "width", '263px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1000px'],
                ["style", "width", '1600px']
            ],
            "${_screen}": [
                ["style", "left", '350px'],
                ["style", "top", '56px']
            ],
            "${_Rectangle}": [
                ["style", "top", '93px'],
                ["style", "height", '519px'],
                ["color", "background-color", 'rgba(46,204,113,1.00)'],
                ["style", "left", '385px'],
                ["style", "width", '827px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '897px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text4}": [
                ["style", "top", '837px'],
                ["style", "left", '575px'],
                ["style", "font-size", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"rectangles_ani": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1559px', '649px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgba(255, 255, 255, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['123px', '165px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'juan',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(191,63,121,1.00)']
                },
                {
                    rect: ['123px', '165px', '210px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1.00)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'juanText',
                    text: 'Juan<br>',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['559px', '165px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'chonta',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(191,76,63,1.00)']
                },
                {
                    rect: ['559px', '165px', '210px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'lachontaText',
                    text: 'La Chonta',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['669px', '275px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'citycar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(191,145,63,1.00)']
                },
                {
                    transform: [[], ['-1']],
                    rect: ['669px', '275px', '210px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'citycarText',
                    text: 'CityCar-plus',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['1002px', '385px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle9Copy24',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['no-drop'],
                    fill: ['rgba(63,191,70,1.00)']
                },
                {
                    rect: ['890px', '275px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle9Copy23',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['no-drop'],
                    fill: ['rgba(63,159,191,1.00)']
                },
                {
                    rect: ['231px', '385px', '210px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle9Copy22',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['e-resize'],
                    fill: ['rgba(191,187,63,1.00)']
                },
                {
                    rect: ['450px', '165px', '100px', '320px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle11Copy15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['col-resize'],
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['669px', '275px', '100px', '320px', 'auto', 'auto'],
                    transform: [[], ['90']],
                    type: 'rect',
                    id: 'Rectangle11Copy14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['n-resize'],
                    fill: ['rgba(149,63,191,1.00)']
                },
                {
                    rect: ['1226px', '165px', '100px', '320px', 'auto', 'auto'],
                    transform: [[], ['90']],
                    type: 'rect',
                    id: 'StreetCat',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(191,76,63,1.00)']
                },
                {
                    rect: ['1112px', '275px', '319px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'streetcatText',
                    text: 'StreetCat',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['1112px', '55px', '100px', '320px', 'auto', 'auto'],
                    transform: [[], ['90']],
                    type: 'rect',
                    id: 'capitales',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(63,89,191,1.00)']
                },
                {
                    rect: ['1002px', '165px', '319px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'capitalesText',
                    text: 'Capitales',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['286px', '220px', '210px', '100px', 'auto', 'auto'],
                    transform: [[], ['90']],
                    type: 'rect',
                    id: 'Rectangle9Copy21',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['col-resize'],
                    fill: ['rgba(63,159,191,1.00)']
                },
                {
                    rect: ['231px', '275px', '88px', '88px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'angelmoda',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(125,191,63,1.00)']
                },
                {
                    rect: ['228px', '275px', '100px', '100px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'angelmodaText',
                    text: 'Angel<br>Moda',
                    cursor: ['pointer'],
                    type: 'text'
                },
                {
                    rect: ['122px', '275px', '88px', '88px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle10Copy38',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    cursor: ['n-resize'],
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['122px', '385px', '88px', '88px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle10Copy37',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    cursor: ['n-resize'],
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['559px', '275px', '88px', '88px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle10Copy36',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    cursor: ['row-resize'],
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['779px', '165px', '88px', '88px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle10Copy35',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    cursor: ['w-resize'],
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['890px', '385px', '88px', '88px', 'auto', 'auto'],
                    id: 'Rectangle10Copy34',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['1222px', '385px', '88px', '88px', 'auto', 'auto'],
                    id: 'Rectangle10Copy33',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['1333px', '385px', '88px', '88px', 'auto', 'auto'],
                    id: 'Rectangle10Copy32',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['1333px', '165px', '88px', '88px', 'auto', 'auto'],
                    id: 'Rectangle10Copy31',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['890px', '165px', '88px', '88px', 'auto', 'auto'],
                    id: 'Rectangle10Copy30',
                    stroke: [6, 'rgba(0,0,0,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(63,159,191,1)']
                },
                {
                    rect: ['677px', '67px', '202px', '63px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'projects',
                    stroke: [0, 'rgba(255, 255, 255, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(100,100,100,1.00)']
                },
                {
                    rect: ['677px', '67px', '203px', '63px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(228,227,232,1)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'projectsText',
                    text: '►  Projects',
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_capitalesText}": [
                ["style", "line-height", '93px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle9Copy22}": [
                ["style", "top", '386px'],
                ["color", "background-color", 'rgba(191,187,63,1)'],
                ["style", "height", '100px'],
                ["style", "cursor", 'e-resize'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle10Copy34}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px']
            ],
            "${_StreetCat}": [
                ["style", "top", '387px'],
                ["color", "background-color", 'rgba(191,76,63,1)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '100px']
            ],
            "${_Rectangle11Copy14}": [
                ["style", "top", '276px'],
                ["transform", "rotateZ", '90deg'],
                ["color", "background-color", 'rgba(149,63,191,1)'],
                ["style", "cursor", 'n-resize'],
                ["style", "left", '232px'],
                ["style", "width", '100px']
            ],
            "${_Rectangle10Copy38}": [
                ["style", "top", '385px'],
                ["style", "cursor", 'n-resize'],
                ["style", "border-width", '6px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "left", '122px'],
                ["style", "width", '88px']
            ],
            "${_citycar}": [
                ["style", "top", '385px'],
                ["color", "background-color", 'rgba(191,145,63,1)'],
                ["style", "cursor", 'pointer'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle10Copy31}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px']
            ],
            "${_juan}": [
                ["style", "top", '385px'],
                ["color", "background-color", 'rgba(191,63,121,1)'],
                ["style", "height", '100px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle9Copy24}": [
                ["style", "top", '387px'],
                ["color", "background-color", 'rgba(63,191,70,1)'],
                ["style", "cursor", 'no-drop'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle10Copy30}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1545px'],
                ["style", "width", '1545px']
            ],
            "${_projects}": [
                ["color", "background-color", 'rgba(100,100,100,1)'],
                ["style", "cursor", 'pointer']
            ],
            "${_lachontaText}": [
                ["style", "line-height", '94px'],
                ["style", "cursor", 'pointer']
            ],
            "${_juanText}": [
                ["style", "line-height", '90px'],
                ["color", "color", 'rgba(228,227,232,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '123px'],
                ["style", "width", '210px'],
                ["style", "top", '165px'],
                ["style", "text-align", 'center'],
                ["style", "height", '100px'],
                ["style", "cursor", 'pointer']
            ],
            "${_chonta}": [
                ["style", "top", '386px'],
                ["color", "background-color", 'rgba(191,76,63,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle10Copy36}": [
                ["style", "top", '385px'],
                ["style", "cursor", 'row-resize'],
                ["style", "border-width", '6px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "left", '122px'],
                ["style", "width", '88px']
            ],
            "${_citycarText}": [
                ["style", "line-height", '95px'],
                ["style", "cursor", 'pointer'],
                ["transform", "rotateZ", '-1deg']
            ],
            "${_angelmodaText}": [
                ["style", "line-height", '48px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle10Copy32}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "border-width", '6px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "left", '122px'],
                ["style", "width", '88px']
            ],
            "${_Rectangle9Copy23}": [
                ["style", "top", '386px'],
                ["color", "background-color", 'rgba(63,159,191,1)'],
                ["style", "cursor", 'no-drop'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '210px']
            ],
            "${_Rectangle9Copy21}": [
                ["color", "background-color", 'rgba(63,159,191,1)'],
                ["style", "top", '442px'],
                ["style", "cursor", 'col-resize'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '67px'],
                ["style", "width", '210px']
            ],
            "${_streetcatText}": [
                ["style", "line-height", '89px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle10Copy33}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px']
            ],
            "${_projectsText}": [
                ["style", "line-height", '56px'],
                ["style", "left", '677px'],
                ["style", "top", '67px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '203px']
            ],
            "${_capitales}": [
                ["style", "top", '277px'],
                ["color", "background-color", 'rgba(63,89,191,1)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '232px'],
                ["style", "width", '100px']
            ],
            "${_Rectangle10Copy37}": [
                ["style", "top", '385px'],
                ["style", "cursor", 'n-resize'],
                ["style", "left", '122px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px']
            ],
            "${_Rectangle6}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle11Copy15}": [
                ["style", "top", '387px'],
                ["style", "cursor", 'col-resize'],
                ["style", "left", '122px'],
                ["style", "width", '100px']
            ],
            "${_Rectangle10Copy35}": [
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px'],
                ["style", "top", '386px'],
                ["style", "cursor", 'w-resize'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "opacity", '0'],
                ["style", "left", '122px']
            ],
            "${_angelmoda}": [
                ["color", "background-color", 'rgba(125,191,63,1)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '6px'],
                ["style", "width", '88px'],
                ["style", "top", '385px'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '122px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23501,
            autoPlay: true,
            labels: {
                "bodyani": 2000,
                "juanani": 11000,
                "angelmodaani": 13000,
                "lachontaani": 15000,
                "capitalesani": 17000,
                "streetcatani": 19000,
                "citycarani": 21000,
                "projectsani": 23000
            },
            timeline: [
                { id: "eid333", tween: [ "style", "${_capitales}", "left", '1000px', { fromValue: '232px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid267", tween: [ "style", "${_capitales}", "left", '1000px', { fromValue: '1000px'}], position: 4750, duration: 250 },
                { id: "eid270", tween: [ "style", "${_capitales}", "left", '1000px', { fromValue: '1000px'}], position: 5000, duration: 150 },
                { id: "eid272", tween: [ "style", "${_capitales}", "left", '1092px', { fromValue: '1000px'}], position: 5150, duration: 171 },
                { id: "eid274", tween: [ "style", "${_capitales}", "left", '1112px', { fromValue: '1092px'}], position: 5321, duration: 179 },
                { id: "eid291", tween: [ "style", "${_StreetCat}", "top", '55px', { fromValue: '387px'}], position: 2750, duration: 750, easing: "easeOutBack" },
                { id: "eid222", tween: [ "style", "${_StreetCat}", "top", '59px', { fromValue: '55px'}], position: 4099, duration: 151 },
                { id: "eid280", tween: [ "style", "${_StreetCat}", "top", '62px', { fromValue: '59px'}], position: 4250, duration: 79 },
                { id: "eid281", tween: [ "style", "${_StreetCat}", "top", '117px', { fromValue: '62px'}], position: 4329, duration: 171 },
                { id: "eid223", tween: [ "style", "${_StreetCat}", "top", '138px', { fromValue: '117px'}], position: 4500, duration: 46 },
                { id: "eid224", tween: [ "style", "${_StreetCat}", "top", '149px', { fromValue: '138px'}], position: 4546, duration: 28 },
                { id: "eid225", tween: [ "style", "${_StreetCat}", "top", '165px', { fromValue: '149px'}], position: 4574, duration: 28 },
                { id: "eid157", tween: [ "style", "${_angelmoda}", "top", '275px', { fromValue: '385px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid341", tween: [ "style", "${_Rectangle9Copy24}", "left", '1002px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid324", tween: [ "style", "${_Rectangle10Copy30}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid285", tween: [ "style", "${_Rectangle10Copy30}", "top", '145px', { fromValue: '385px'}], position: 5250, duration: 370 },
                { id: "eid286", tween: [ "style", "${_Rectangle10Copy30}", "top", '165px', { fromValue: '145px'}], position: 5620, duration: 130 },
                { id: "eid295", tween: [ "style", "${_Rectangle9Copy22}", "left", '231px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid301", tween: [ "style", "${_Rectangle9Copy21}", "top", '441px', { fromValue: '442px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid242", tween: [ "style", "${_Rectangle9Copy21}", "top", '220px', { fromValue: '441px'}], position: 4500, duration: 500, easing: "easeOutBack" },
                { id: "eid358", tween: [ "style", "${_Rectangle10Copy32}", "left", '1333px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid307", tween: [ "style", "${_Rectangle11Copy14}", "top", '275px', { fromValue: '276px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid347", tween: [ "style", "${_Rectangle10Copy33}", "left", '1222px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid305", tween: [ "style", "${_Rectangle11Copy14}", "left", '669px', { fromValue: '232px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid339", tween: [ "style", "${_StreetCat}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid311", tween: [ "style", "${_Rectangle9Copy23}", "left", '669px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid214", tween: [ "style", "${_Rectangle9Copy23}", "left", '890px', { fromValue: '669px'}], position: 4000, duration: 500, easing: "easeOutExpo" },
                { id: "eid293", tween: [ "style", "${_angelmoda}", "left", '231px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid517", tween: [ "style", "${_angelmoda}", "left", '228px', { fromValue: '231px'}], position: 2750, duration: 7196, easing: "easeOutBack" },
                { id: "eid330", tween: [ "style", "${_Rectangle10Copy34}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid299", tween: [ "style", "${_Rectangle11Copy15}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid244", tween: [ "style", "${_Rectangle11Copy15}", "top", '165px', { fromValue: '385px'}], position: 4500, duration: 500, easing: "easeOutBack" },
                { id: "eid354", tween: [ "style", "${_Rectangle10Copy31}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid288", tween: [ "style", "${_Rectangle10Copy31}", "top", '165px', { fromValue: '385px'}], position: 5620, duration: 380, easing: "easeOutBack" },
                { id: "eid349", tween: [ "style", "${_Rectangle10Copy33}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid553", tween: [ "color", "${_capitales}", "background-color", 'rgba(191,158,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(63,89,191,1)'}], position: 17000, duration: 500, easing: "easeOutBack" },
                { id: "eid554", tween: [ "color", "${_capitales}", "background-color", 'rgba(63,89,191,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(191,158,63,1.00)'}], position: 17500, duration: 500, easing: "easeOutBack" },
                { id: "eid378", tween: [ "style", "${_Rectangle9Copy21}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 3500, easing: "easeOutBack" },
                { id: "eid362", tween: [ "style", "${_Rectangle10Copy32}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid315", tween: [ "style", "${_chonta}", "left", '669px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid254", tween: [ "style", "${_chonta}", "left", '559px', { fromValue: '669px'}], position: 4500, duration: 500, easing: "swing" },
                { id: "eid351", tween: [ "style", "${_Rectangle10Copy33}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid227", tween: [ "style", "${_juan}", "left", '123px', { fromValue: '122px'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid356", tween: [ "style", "${_Rectangle10Copy31}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid318", tween: [ "style", "${_Rectangle10Copy35}", "left", '780px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid259", tween: [ "style", "${_Rectangle10Copy35}", "left", '779px', { fromValue: '780px'}], position: 4750, duration: 500, easing: "easeOutBack" },
                { id: "eid155", tween: [ "style", "${_Rectangle10Copy38}", "top", '275px', { fromValue: '385px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid310", tween: [ "style", "${_citycar}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid317", tween: [ "style", "${_chonta}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid360", tween: [ "style", "${_Rectangle10Copy32}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid256", tween: [ "style", "${_chonta}", "top", '128px', { fromValue: '386px'}], position: 4500, duration: 391, easing: "swing" },
                { id: "eid257", tween: [ "style", "${_chonta}", "top", '165px', { fromValue: '128px'}], position: 4891, duration: 109, easing: "swing" },
                { id: "eid314", tween: [ "style", "${_Rectangle9Copy23}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid229", tween: [ "style", "${_juan}", "top", '165px', { fromValue: '385px'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid551", tween: [ "color", "${_chonta}", "background-color", 'rgba(63,191,124,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(191,76,63,1)'}], position: 15000, duration: 500, easing: "easeOutBack" },
                { id: "eid552", tween: [ "color", "${_chonta}", "background-color", 'rgba(191,76,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(63,191,124,1.00)'}], position: 15500, duration: 500, easing: "easeOutBack" },
                { id: "eid159", tween: [ "style", "${_Rectangle10Copy36}", "top", '275px', { fromValue: '385px'}], position: 3500, duration: 500, easing: "easeOutBack" },
                { id: "eid334", tween: [ "style", "${_capitales}", "top", '275px', { fromValue: '277px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid269", tween: [ "style", "${_capitales}", "top", '5px', { fromValue: '275px'}], position: 4750, duration: 250 },
                { id: "eid271", tween: [ "style", "${_capitales}", "top", '55px', { fromValue: '5px'}], position: 5000, duration: 150 },
                { id: "eid273", tween: [ "style", "${_capitales}", "top", '20px', { fromValue: '55px'}], position: 5150, duration: 171 },
                { id: "eid275", tween: [ "style", "${_capitales}", "top", '55px', { fromValue: '20px'}], position: 5321, duration: 179 },
                { id: "eid319", tween: [ "style", "${_Rectangle10Copy35}", "top", '385px', { fromValue: '386px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid261", tween: [ "style", "${_Rectangle10Copy35}", "top", '165px', { fromValue: '385px'}], position: 4750, duration: 500, easing: "easeOutBack" },
                { id: "eid560", tween: [ "color", "${_projects}", "background-color", 'rgba(127,127,127,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(100,100,100,1)'}], position: 23000, duration: 500, easing: "easeOutBack" },
                { id: "eid312", tween: [ "style", "${_Rectangle9Copy23}", "top", '385px', { fromValue: '386px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid216", tween: [ "style", "${_Rectangle9Copy23}", "top", '275px', { fromValue: '385px'}], position: 4000, duration: 500, easing: "easeOutExpo" },
                { id: "eid343", tween: [ "style", "${_Rectangle9Copy24}", "top", '385px', { fromValue: '387px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid332", tween: [ "style", "${_Rectangle10Copy34}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid163", tween: [ "style", "${_citycar}", "top", '275px', { fromValue: '385px'}], position: 3750, duration: 500, easing: "easeOutBack" },
                { id: "eid345", tween: [ "style", "${_Rectangle9Copy24}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid549", tween: [ "color", "${_angelmoda}", "background-color", 'rgba(177,63,191,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(125,191,63,1)'}], position: 13000, duration: 500, easing: "easeOutBack" },
                { id: "eid550", tween: [ "color", "${_angelmoda}", "background-color", 'rgba(125,191,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(177,63,191,1.00)'}], position: 13500, duration: 498, easing: "easeOutBack" },
                { id: "eid326", tween: [ "style", "${_Rectangle10Copy30}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid297", tween: [ "style", "${_Rectangle9Copy22}", "top", '385px', { fromValue: '386px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid328", tween: [ "style", "${_Rectangle10Copy34}", "left", '890px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid353", tween: [ "style", "${_Rectangle10Copy31}", "left", '1333px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid321", tween: [ "style", "${_Rectangle10Copy35}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid323", tween: [ "style", "${_Rectangle10Copy30}", "left", '890px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid300", tween: [ "style", "${_Rectangle9Copy21}", "left", '395px', { fromValue: '67px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid240", tween: [ "style", "${_Rectangle9Copy21}", "left", '286px', { fromValue: '395px'}], position: 4500, duration: 500, easing: "easeOutBack" },
                { id: "eid308", tween: [ "style", "${_citycar}", "left", '559px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid161", tween: [ "style", "${_citycar}", "left", '669px', { fromValue: '559px'}], position: 3750, duration: 500, easing: "easeOutBack" },
                { id: "eid303", tween: [ "style", "${_Rectangle10Copy36}", "left", '559px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid558", tween: [ "color", "${_citycar}", "background-color", 'rgba(63,122,191,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(191,145,63,1)'}], position: 21000, duration: 500, easing: "easeOutBack" },
                { id: "eid559", tween: [ "color", "${_citycar}", "background-color", 'rgba(191,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(63,122,191,1)'}], position: 21500, duration: 500, easing: "easeOutBack" },
                { id: "eid545", tween: [ "color", "${_juan}", "background-color", 'rgba(63,191,66,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(191,63,121,1)'}], position: 11000, duration: 500, easing: "easeOutBack" },
                { id: "eid546", tween: [ "color", "${_juan}", "background-color", 'rgba(191,63,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(63,191,66,1.00)'}], position: 11500, duration: 500, easing: "easeOutBack" },
                { id: "eid336", tween: [ "style", "${_capitales}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid167", tween: [ "transform", "${_citycar}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3750, duration: 250, easing: "easeOutBack" },
                { id: "eid168", tween: [ "transform", "${_citycar}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 4000, duration: 250, easing: "easeOutBack" },
                { id: "eid218", tween: [ "transform", "${_StreetCat}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 4099, duration: 503 },
                { id: "eid298", tween: [ "style", "${_Rectangle11Copy15}", "left", '341px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid246", tween: [ "style", "${_Rectangle11Copy15}", "left", '450px', { fromValue: '341px'}], position: 4500, duration: 500, easing: "easeOutBack" },
                { id: "eid337", tween: [ "style", "${_StreetCat}", "left", '1002px', { fromValue: '122px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid220", tween: [ "style", "${_StreetCat}", "left", '1070px', { fromValue: '1002px'}], position: 4099, duration: 151 },
                { id: "eid279", tween: [ "style", "${_StreetCat}", "left", '1115px', { fromValue: '1070px'}], position: 4250, duration: 79 },
                { id: "eid282", tween: [ "style", "${_StreetCat}", "left", '1184px', { fromValue: '1115px'}], position: 4329, duration: 171 },
                { id: "eid276", tween: [ "style", "${_StreetCat}", "left", '1195px', { fromValue: '1184px'}], position: 4500, duration: 46 },
                { id: "eid277", tween: [ "style", "${_StreetCat}", "left", '1205px', { fromValue: '1195px'}], position: 4546, duration: 28 },
                { id: "eid278", tween: [ "style", "${_StreetCat}", "left", '1222px', { fromValue: '1205px'}], position: 4574, duration: 28 },
                { id: "eid555", tween: [ "color", "${_StreetCat}", "background-color", 'rgba(63,191,124,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(191,76,63,1)'}], position: 19000, duration: 500, easing: "easeOutBack" },
                { id: "eid556", tween: [ "color", "${_StreetCat}", "background-color", 'rgba(191,76,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(63,191,124,1)'}], position: 19500, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"contact_box": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '450px', '276px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(198, 85, 81)', 'none'],
                    type: 'rect',
                    fill: ['rgba(96,84,78,0.42)']
                },
                {
                    rect: ['109px', '20px', '208px', '43px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(135,205,140,1)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: 'Bogotá, Colombia',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['109px', '152px', '291px', '43px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 24, 'rgba(135,205,140,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'johanmendezb@gmail.com ',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'social_48Copy',
                    type: 'image',
                    rect: ['8px', '10px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/social_48.png', '0px', '0px']
                },
                {
                    id: 'social_47Copy',
                    type: 'image',
                    rect: ['8px', '74px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/social_47.png', '0px', '0px']
                },
                {
                    id: 'social_46Copy',
                    type: 'image',
                    rect: ['8px', '138px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/social_46.png', '0px', '0px']
                },
                {
                    id: 'social_45Copy',
                    type: 'image',
                    rect: ['181px', '195px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/social_45.png', '0px', '0px']
                },
                {
                    rect: ['109px', '84px', '233px', '43px', 'auto', 'auto'],
                    id: 'Text',
                    text: '01-57-3142 822059',
                    font: ['lato, sans-serif', 24, 'rgba(135,205,140,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["color", "color", 'rgba(135,205,140,1.00)'],
                ["style", "width", '291px']
            ],
            "${_social_47Copy}": [
                ["style", "top", '74px'],
                ["style", "left", '8px']
            ],
            "${_social_48Copy}": [
                ["style", "left", '8px'],
                ["style", "top", '10px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(96,84,78,0.42)']
            ],
            "${_Text}": [
                ["style", "top", '84px'],
                ["color", "color", 'rgba(135,205,140,1.00)'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '109px'],
                ["style", "width", '233px']
            ],
            "${symbolSelector}": [
                ["style", "height", '276px'],
                ["style", "width", '450px']
            ],
            "${_social_45Copy}": [
                ["style", "left", '181px'],
                ["style", "top", '195px']
            ],
            "${_social_46Copy}": [
                ["style", "left", '8px'],
                ["style", "top", '138px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"description_txt": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '273px'],
                ["style", "width", '1308px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-53125087");
