(function(){
    var script = {
 "start": "this.playAudioList([this.audio_41CAEA97_6595_9548_41D5_77BF844369D5]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE"
 ],
 "id": "rootPlayer",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": "100%",
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 73.09,
   "backwardYaw": -159.44,
   "panorama": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115558_00_248_PureShot",
 "id": "panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73DA767B_61FC_E711_41B4_8BDE4C2C5087"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 167.74,
   "backwardYaw": 41.63,
   "panorama": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -35.92,
   "backwardYaw": -148.92,
   "panorama": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 163.32,
   "backwardYaw": 2.84,
   "panorama": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_114617_00_231_PureShot",
 "id": "panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6E18110F_61D4_1AF1_41D4_BA1B1ACD61DB",
  "this.overlay_70954F1F_61D4_6511_418E_447DE8406BD9",
  "this.overlay_6E2979E8_61D4_ED30_41BC_49275C498FCE"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40DE9678_6673_9DB8_4197_8F15EFE480FE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.89,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4EDB3772_6673_9BC8_41B6_59A6B4FBBBB7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 43.2,
   "backwardYaw": -10.33,
   "panorama": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.31,
   "backwardYaw": -136.03,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.38,
   "backwardYaw": -49.78,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.3,
   "backwardYaw": 9.27,
   "panorama": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 50.47,
   "backwardYaw": -47.49,
   "panorama": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_120434_00_266_PureShot",
 "id": "panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73ADB402_61F4_3AF3_41CF_7E2399ED10CE",
  "this.overlay_736D02B9_61F4_1F11_41B7_73F8E983B321",
  "this.overlay_7374CF62_61F4_6533_41CC_82F079D4C5F9",
  "this.overlay_73516922_61F4_6D33_41D5_677FCF381240",
  "this.overlay_72D3A076_61F4_3B13_41D7_45B76D881A5F"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FAFC7D0_6673_9AC8_41B8_EFF82F923C10",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E26C724_6673_9B48_4189_385522CC7ECD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.69,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F35D7A1_6673_9B48_41BD_41CECAE49AF2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.51,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F27D791_6673_9B48_41BB_3BBDD1C1E647",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.59,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40F50688_6673_9D47_41D0_0B23C51293B3",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -136.03,
   "backwardYaw": 53.31,
   "panorama": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.14,
   "backwardYaw": -133.49,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -132.97,
   "backwardYaw": 132.39,
   "panorama": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.1,
   "backwardYaw": -111.63,
   "panorama": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -27.91,
   "backwardYaw": 9.07,
   "panorama": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.43,
   "backwardYaw": -147.03,
   "panorama": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115947_00_253_PureShot",
 "id": "panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73FB66B7_61FC_2711_41B1_A2EEE6889F6C",
  "this.overlay_73B2A29A_61FC_3F13_41D0_7E836DF7DDDD",
  "this.overlay_739F8CF4_61FC_2B17_41A3_380933A53489",
  "this.overlay_7322CEF6_61FC_6713_41CB_005AD2B96802",
  "this.overlay_738AB9A3_61F3_ED31_41C2_3FCF1F7B36D6",
  "this.overlay_7D8BC93D_6595_F7B8_41C2_EF28D58344AD"
 ],
 "pitch": 0
},
{
 "label": "140379-774881529_small",
 "scaleMode": "fit_inside",
 "width": 960,
 "thumbnailUrl": "media/video_46EB421C_658D_B578_41D1_C75833247EA4_t.jpg",
 "class": "Video",
 "id": "video_46EB421C_658D_B578_41D1_C75833247EA4",
 "loop": false,
 "height": 540,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_46EB421C_658D_B578_41D1_C75833247EA4.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.13,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_406C963A_6673_9DBB_41B8_30AF82E3E66B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.9,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4165F6C6_6673_9AC8_41D6_171FDDC7A32B",
 "automaticZoomSpeed": 10
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_41CAEA97_6595_9548_41D5_77BF844369D5.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_41CAEA97_6595_9548_41D5_77BF844369D5.ogg"
 },
 "autoplay": true,
 "id": "audio_41CAEA97_6595_9548_41D5_77BF844369D5",
 "data": {
  "label": "our-summer-matrika-main-version-31126-02-48"
 }
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 78.02,
   "backwardYaw": 8.07,
   "panorama": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115818_00_252_PureShot",
 "id": "panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73C56248_61FC_FF7F_41D6_D8328AAEE4F1"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4EBD6763_6673_9BC9_41CA_E43182333872",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.93,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F7397B1_6673_9B49_41BF_A701C0FB9947",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.62,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40E85688_6673_9D47_41D4_F6B292373C53",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_418256D6_6673_9AC8_41D6_E4816297C1C6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_410DA697_6673_9D48_41CB_AC4091EB9AC0",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 115.79,
   "backwardYaw": -174.87,
   "panorama": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.37,
   "backwardYaw": 105.05,
   "panorama": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 25.79,
   "backwardYaw": 48.61,
   "panorama": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 113.14,
   "backwardYaw": -134.83,
   "panorama": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115626_00_249_PureShot",
 "id": "panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73A6B719_61FC_2511_41C6_239CB9553E3E",
  "this.overlay_736325AF_61FC_2531_41BC_75F42B9699D3",
  "this.overlay_732D148A_61FC_1BF3_41D6_977CA2234825",
  "this.overlay_72C0F4FC_61FF_FB17_41B3_2213FF1FAF3D",
  "this.overlay_4626CC85_659E_AD49_41D7_7BD913E68944",
  "this.overlay_40612E07_65F3_ED49_41C2_675E8AFEE9AE"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 52.23,
   "backwardYaw": -171.53,
   "panorama": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.83,
   "backwardYaw": 113.14,
   "panorama": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.14,
   "backwardYaw": -94.61,
   "panorama": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -159.44,
   "backwardYaw": 73.09,
   "panorama": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115539_00_247_PureShot",
 "id": "panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73D8D215_61FD_FF11_41D0_B3FBE83BCE3D",
  "this.overlay_73864EA1_61FD_E731_41C3_6612D2AEAF18",
  "this.overlay_7361EAEA_61FC_2F30_41A9_1903D4BE0362",
  "this.overlay_735706F7_61FC_2711_41B2_80CBF9C663F7",
  "this.overlay_729C6A3C_61FC_6F10_41A5_1B63171F13C7",
  "this.overlay_4642AF0F_658E_EB59_41C8_CE90A197CA94"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F6337B1_6673_9B49_4199_C47D41E39DE1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40C67669_6673_9DD9_41C2_06C03FE06F50",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.35,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40BA2669_6673_9DD9_4149_A368D7C0CC66",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.47,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4173C6C6_6673_9AC8_41BF_7F9CE387285D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.22,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F09D782_6673_9B4B_41B7_CF45248B0B05",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4191A6D6_6673_9AC8_41AA_EF83B11F98A0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.93,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41BD66E6_6673_9ACB_41D8_D67CDD2FCFE5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -134.71,
   "backwardYaw": 31.93,
   "panorama": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.6,
   "backwardYaw": 130.5,
   "panorama": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.92,
   "backwardYaw": -35.92,
   "panorama": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.02,
   "backwardYaw": -0.65,
   "panorama": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_114708_00_232_PureShot",
 "id": "panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_715CB4B4_61EC_3B17_419B_2327EE350E03",
  "this.overlay_714E910A_61EC_1AF3_41D0_88E9828E429F",
  "this.overlay_71D81467_61EC_1B31_418D_96A635FE5B24",
  "this.overlay_73C439BB_61EC_6D11_41CE_D6E1C89DE2DF"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.7,
   "backwardYaw": -94.3,
   "panorama": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46.9,
   "backwardYaw": 110.57,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.34,
   "backwardYaw": 159.72,
   "panorama": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115420_00_245_PureShot",
 "id": "panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73F54919_61FC_2D11_41C8_4E75BAC0303A",
  "this.overlay_73B5D84A_61FC_6B73_41D5_0EA004D544C2",
  "this.overlay_7390D49E_61FC_7B10_41D0_FD5FBC4397A1",
  "this.overlay_734F3F9B_61FC_6511_41D1_61F8A44B27CA",
  "this.overlay_72EA1F3C_61FC_2517_41D0_5D1EBFF144B4",
  "this.overlay_46C86D0B_6593_EF58_41C1_53EE330C6C19",
  "this.overlay_41F724A9_65F2_9D58_41B6_0A90EA99248D"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.3,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4EAE8763_6673_9BC9_4177_183AD4FFEBF0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -47.49,
   "backwardYaw": 50.47,
   "panorama": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 132.39,
   "backwardYaw": -132.97,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 112.02,
   "backwardYaw": -64.73,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 118.43,
   "backwardYaw": 0.12,
   "panorama": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_120254_00_256_PureShot",
 "id": "panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73B45344_61F4_3D77_41D4_39C2A95319FE",
  "this.overlay_73445108_61F4_1AFF_41C3_49200CB1EF8E",
  "this.overlay_73208231_61F4_FF10_41A4_95EBD863B256",
  "this.overlay_73136D46_61F4_E570_41D8_06B3554FF314",
  "this.overlay_79479D75_658E_EFC8_41B9_3DB589C90687"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4156A6B7_6673_9D49_41C1_FB7852751AAD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.28,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41EA7705_6673_9B49_419E_E370705F2B19",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E354724_6673_9B48_41C2_B905B8459C66",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.5,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FBE47E0_6673_9AC7_41D1_D207EE58731B",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_403E962A_6673_9D58_41D0_A31F80AC3020",
 "items": [
  {
   "media": "this.video_46EB421C_658D_B578_41D1_C75833247EA4",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_403E962A_6673_9D58_41D0_A31F80AC3020, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_403E962A_6673_9D58_41D0_A31F80AC3020, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.67,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4EEBE772_6673_9BC8_41D1_AAE55B0591EE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F5457B1_6673_9B49_41D6_C0385883DE89",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240628_114405_00_merged",
 "id": "panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_6F6C54C3_61DC_1B70_41C9_ED0641378985",
  "this.overlay_6F157949_61DC_6D71_41D7_5D063BDC3CCD",
  "this.overlay_6E960A6F_61DC_2F31_41B8_E26095E50E93",
  "this.overlay_73BC5613_61F5_E711_41C4_6C76B58551CD"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.65,
   "backwardYaw": -134.02,
   "panorama": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.33,
   "backwardYaw": 43.2,
   "panorama": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.84,
   "backwardYaw": 163.32,
   "panorama": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.96,
   "backwardYaw": -157.15,
   "panorama": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.4,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E9F6753_6673_9BC8_41D8_984907ACFD5E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F91D7C0_6673_9AC8_41D8_6A04E3DC8F26",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.8,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E72B744_6673_9BCF_41D7_DB9B57BD2240",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41CD96F5_6673_9AC8_41D7_4AD7E47E5449",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.91,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41A0D6E6_6673_9ACB_41D7_B8516EA362DF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.97,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4EF93782_6673_9B4B_41CE_02249560539F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.53,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FDDE7EF_6673_9AD8_41BA_59690746BE1F",
 "automaticZoomSpeed": 10
},
{
 "label": "The Three Stooges - Slaps, Smacks and Pokes",
 "scaleMode": "fit_inside",
 "width": 608,
 "thumbnailUrl": "media/video_4132F12C_6592_B758_41D7_A719039B95A5_t.jpg",
 "class": "Video",
 "id": "video_4132F12C_6592_B758_41D7_A719039B95A5",
 "loop": false,
 "height": 360,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.56,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E44E734_6673_9B48_41C1_00DDC6B5DB51",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.03,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FEBD7F0_6673_9AC7_41D4_BC262D4A9C45",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240628_115102_00_merged-2",
 "id": "panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_734B91CB_61F4_3D70_41C5_04D9910231F8",
  "this.overlay_73BE64D3_61F4_1B11_41D8_1EECBF71910C",
  "this.overlay_737116C5_61F4_2771_41C8_B86F5E308B53",
  "this.overlay_7306060C_61F3_E6F7_41D4_31270FF46857",
  "this.overlay_72BA6578_61F3_E51F_4154_EEA38D815978",
  "this.overlay_750C064F_658D_9DD8_41CE_278DF807C68F",
  "this.overlay_46DB25F9_6592_9EB8_41D3_5AA9270BD1A0",
  "this.overlay_46D700DD_658D_F6F8_41D3_6AE8F52DFBD2"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 130.5,
   "backwardYaw": 42.6,
   "panorama": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -94.3,
   "backwardYaw": 155.7,
   "panorama": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.53,
   "backwardYaw": 52.23,
   "panorama": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -174.87,
   "backwardYaw": 115.79,
   "panorama": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -130.5,
   "backwardYaw": -160.11,
   "panorama": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 31.93,
   "backwardYaw": -134.71,
   "panorama": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 41.63,
   "backwardYaw": 167.74,
   "panorama": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.15,
   "backwardYaw": 2.96,
   "panorama": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_114534_00_230_PureShot",
 "id": "panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_71EA430A_61DC_3EF3_41C8_A3E3CBEDE525",
  "this.overlay_7129C3E2_61D4_FD33_41CC_19860BEE07DE",
  "this.overlay_71384195_61EC_1D11_41CC_C99180B06132"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.68,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E80B744_6673_9BCF_41AE_BBA201FC7A53",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.47,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F9F17D0_6673_9AC8_41D9_77B9A708EB0A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40809649_6673_9DD8_41D1_DA3122EBCBF7",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 159.72,
   "backwardYaw": -123.34,
   "panorama": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.41,
   "backwardYaw": 166.53,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -94.61,
   "backwardYaw": -32.14,
   "panorama": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.11,
   "backwardYaw": -130.5,
   "panorama": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.07,
   "backwardYaw": -27.91,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115518_00_246_PureShot",
 "id": "panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73CC0498_61FC_1B1F_41CE_6BBD1A2B7836",
  "this.overlay_7383C89B_61FC_2B11_41D5_55D603DA4B21",
  "this.overlay_736CB453_61FC_1B11_41C4_AACFC0A4B2CA",
  "this.overlay_73437EF6_61FC_6713_41D1_41C7173E3E44",
  "this.overlay_72E0203E_61FC_1B10_41D6_D95E69F91A5B",
  "this.overlay_7267733C_61FC_3D17_41D2_26A23E3EC88E",
  "this.overlay_410035D2_65F5_BEFB_41D5_28D3D89F56BC"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.09,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FCD97E0_6673_9AC7_41CC_363EEF067E81",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.68,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4100D697_6673_9D48_41C6_B05FF7E09243",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.56,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41AEF6E6_6673_9ACB_4195_8AAC4C658BC1",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.5,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40A3C659_6673_9DF8_41D4_C93BA7A4815C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41DB96F5_6673_9AC8_41D0_DAA7014F164E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 107.63,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_413826A7_6673_9D48_41C2_FA211E116492",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.27,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4FFBF7F0_6673_9AC7_41D0_540E6CC78209",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.1,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40D11678_6673_9DB8_41BE_6AF34EFD67FC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.88,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4C0927FF_6673_9AB8_41C1_C437E44018AF",
 "automaticZoomSpeed": 10
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E54A734_6673_9B48_41B2_5133F2C4FED8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_411BE697_6673_9D78_41D8_11D6E8D33741",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.95,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4076C63A_6673_9DBB_41D2_10CA2FBF2FBB",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 48.61,
   "backwardYaw": 25.79,
   "panorama": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 8.07,
   "backwardYaw": 78.02,
   "panorama": "this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.63,
   "backwardYaw": 42.1,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115751_00_251_PureShot",
 "id": "panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73C713CA_61FC_1D73_41B3_11273B177541",
  "this.overlay_738E7160_61FC_3D2F_41C0_4E5C484C03C5",
  "this.overlay_736BE062_61FC_1B33_41D4_2314D3D8E264"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_403EB62A_6673_9D58_41CD_25F16A4B83EE",
 "items": [
  {
   "media": "this.video_4132F12C_6592_B758_41D7_A719039B95A5",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_403EB62A_6673_9D58_41CD_25F16A4B83EE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_403EB62A_6673_9D58_41CD_25F16A4B83EE, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_414626B7_6673_9D49_41D1_C46DB36C21E0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.29,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_41F81705_6673_9B49_41C6_AF24930BC3C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.85,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E8F5753_6673_9BC8_41C1_9D84E8479821",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -133.49,
   "backwardYaw": -50.14,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.57,
   "backwardYaw": -46.9,
   "panorama": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -64.73,
   "backwardYaw": 112.02,
   "panorama": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -49.78,
   "backwardYaw": 38.38,
   "panorama": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.53,
   "backwardYaw": 102.41,
   "panorama": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -56.44,
   "backwardYaw": 156.32,
   "panorama": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_120031_00_254_PureShot",
 "id": "panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73DC9C55_61FC_2B11_41C8_689EDE81808A",
  "this.overlay_73673771_61FD_E510_41D7_A646A2E6E3BA",
  "this.overlay_7352273E_61FC_2513_41A8_BDEF1C07FD03",
  "this.overlay_72DF40CF_61FC_1B71_41D3_75289F3DD283",
  "this.overlay_73BE8FD4_61FC_2517_418D_E2CCF3038259",
  "this.overlay_7DAA8D7C_6596_EFB8_41A8_11B02E401155"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.26,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E08D714_6673_9B48_41D2_622244B979CD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.07,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4097E659_6673_9DF8_413E_C75C21CEE4E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.73,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F172791_6673_9B48_41CA_365AFF82752E",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.51,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F45C7A1_6673_9B48_41D6_B396130B2D48",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 105.05,
   "backwardYaw": -72.37,
   "panorama": "this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_115701_00_250_PureShot",
 "id": "panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73DC0F24_61FC_2537_41CD_277A1BAAE5D8",
  "this.overlay_7397291D_61FC_6D10_41BB_E1DE58ADF469"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.17,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_408CC649_6673_9DD8_4194_1CF5BD7DA262",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_40AE9659_6673_9DF8_41C0_A555DD9B434F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4129E6A7_6673_9D48_41A4_0DF18C55DAD4",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -147.03,
   "backwardYaw": -111.43,
   "panorama": "this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.27,
   "backwardYaw": 42.3,
   "panorama": "this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 156.32,
   "backwardYaw": -56.44,
   "panorama": "this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.12,
   "backwardYaw": 118.43,
   "panorama": "this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "colCount": 8
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "IMG_20240628_120156_00_255_PureShot",
 "id": "panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_73BB318B_61FC_3DF1_41C7_9215A48FB99E",
  "this.overlay_73705386_61FC_FDF3_41D5_D3EFC8E08094",
  "this.overlay_73505290_61FC_1FEF_41B8_B5B4BC4374D5",
  "this.overlay_731B1F95_61FC_2511_41C5_0DF2265F632E"
 ],
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.04,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E161714_6673_9B48_41C2_92CBB0127A69",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -64.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4ECB5772_6673_9BC8_41A8_BC9F3DF8CAD4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4E629734_6673_9B48_41C2_2899DC66F3BF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.97,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_4F81C7C0_6673_9AC8_41D6_75ADE6AEFA88",
 "automaticZoomSpeed": 10
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 7,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#000000",
 "progressBackgroundOpacity": 1,
 "progressBottom": 55,
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 10,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 13,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "minHeight": 50,
 "top": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 100,
 "toolTipPaddingRight": 10,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 7,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 641,
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": 0,
 "height": 118,
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0.64,
 "overflow": "visible",
 "propagateClick": true,
 "data": {
  "name": "--MENU"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--INFO photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--INFO photoalbum"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--FLOORPLAN"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--REALTOR"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "maxWidth": 1258,
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "maxHeight": 953,
 "verticalAlign": "middle",
 "width": "5.398%",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "height": "7.606%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Image",
 "borderRadius": 0,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4523"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.21,
   "hfov": 6.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0, this.camera_41AEF6E6_6673_9ACB_4195_8AAC4C658BC1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C969E8A_659D_AD58_41B7_61F5894D9BE0",
   "yaw": 73.09,
   "pitch": -11.21,
   "distance": 100,
   "hfov": 6.8
  }
 ],
 "id": "overlay_73DA767B_61FC_E711_41B4_8BDE4C2C5087"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.89,
   "hfov": 5.06
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693, this.camera_410DA697_6673_9D48_41CB_AC4091EB9AC0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40473F14_65B2_EB48_41C8_F7DA9FADF1CD",
   "yaw": 167.74,
   "pitch": -4.89,
   "distance": 100,
   "hfov": 5.06
  }
 ],
 "id": "overlay_6E18110F_61D4_1AF1_41D4_BA1B1ACD61DB"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.32,
   "hfov": 2.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154, this.camera_4129E6A7_6673_9D48_41A4_0DF18C55DAD4); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40477F14_65B2_EB48_41D9_4A74F0239C94",
   "yaw": 163.32,
   "pitch": 5.32,
   "distance": 100,
   "hfov": 2.84
  }
 ],
 "id": "overlay_70954F1F_61D4_6511_418E_447DE8406BD9"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.54,
   "hfov": 3.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2, this.camera_411BE697_6673_9D78_41D8_11D6E8D33741); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40478F14_65B2_EB48_41C7_B55A53BFF1F7",
   "yaw": -35.92,
   "pitch": -7.54,
   "distance": 100,
   "hfov": 3.35
  }
 ],
 "id": "overlay_6E2979E8_61D4_ED30_41BC_49275C498FCE"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.05,
   "hfov": 4.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B, this.camera_4F27D791_6673_9B48_41BB_3BBDD1C1E647); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40579F24_65B2_EB48_41D5_8EFD259C7060",
   "yaw": 50.47,
   "pitch": 0.05,
   "distance": 100,
   "hfov": 4.8
  }
 ],
 "id": "overlay_73ADB402_61F4_3AF3_41CF_7E2399ED10CE"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.05,
   "hfov": 4.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB, this.camera_4F172791_6673_9B48_41CA_365AFF82752E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40502F24_65B2_EB48_41A5_4C66190A9B93",
   "yaw": 42.3,
   "pitch": 8.05,
   "distance": 100,
   "hfov": 4.93
  }
 ],
 "id": "overlay_736D02B9_61F4_1F11_41B7_73F8E983B321"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.67,
   "hfov": 3.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_4EF93782_6673_9B4B_41CE_02249560539F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40504F24_65B2_EB48_41A4_651691081FC6",
   "yaw": 53.31,
   "pitch": 16.67,
   "distance": 100,
   "hfov": 3.26
  }
 ],
 "id": "overlay_7374CF62_61F4_6533_41CC_82F079D4C5F9"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.19,
   "hfov": 3.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_4F09D782_6673_9B4B_41B7_CF45248B0B05); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4050EF24_65B2_EB48_41D1_3D03F0525455",
   "yaw": 38.38,
   "pitch": 16.19,
   "distance": 100,
   "hfov": 3.83
  }
 ],
 "id": "overlay_73516922_61F4_6D33_41D5_677FCF381240"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.99,
   "hfov": 6.82
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154, this.camera_4EEBE772_6673_9BC8_41D1_AAE55B0591EE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40510F24_65B2_EB48_41D6_0DEA4712892A",
   "yaw": 43.2,
   "pitch": 27.99,
   "distance": 100,
   "hfov": 6.82
  }
 ],
 "id": "overlay_72D3A076_61F4_3B13_41D7_45B76D881A5F"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.42,
   "hfov": 4.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8, this.camera_4F6337B1_6673_9B49_4199_C47D41E39DE1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40495F14_65B2_EB48_41C5_DD0E6EBE41D6",
   "yaw": 42.1,
   "pitch": -24.42,
   "distance": 100,
   "hfov": 4.17
  }
 ],
 "id": "overlay_73FB66B7_61FC_2711_41B1_A2EEE6889F6C"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.73,
   "hfov": 3.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_4F45C7A1_6673_9B48_41D6_B396130B2D48); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40499F14_65B2_EB48_41D9_5306F8300B37",
   "yaw": -50.14,
   "pitch": -9.73,
   "distance": 100,
   "hfov": 3.16
  }
 ],
 "id": "overlay_73B2A29A_61FC_3F13_41D0_7E836DF7DDDD"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.93,
   "hfov": 2.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975, this.camera_4F35D7A1_6673_9B48_41BD_41CECAE49AF2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404A0F14_65B2_EB48_41D3_771F6BFE0CA1",
   "yaw": -136.03,
   "pitch": -20.93,
   "distance": 100,
   "hfov": 2.98
  }
 ],
 "id": "overlay_739F8CF4_61FC_2B17_41A3_380933A53489"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.55,
   "hfov": 5.37
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321, this.camera_4F7397B1_6673_9B49_41BF_A701C0FB9947); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404AAF14_65B2_EB48_41D2_CD1C1FA273E7",
   "yaw": -27.91,
   "pitch": -3.55,
   "distance": 100,
   "hfov": 5.37
  }
 ],
 "id": "overlay_7322CEF6_61FC_6713_41CB_005AD2B96802"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.92,
   "hfov": 4.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB, this.camera_4F81C7C0_6673_9AC8_41D6_75ADE6AEFA88); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404ACF14_65B2_EB48_41D7_E73F8B81EEE6",
   "yaw": -111.43,
   "pitch": -29.92,
   "distance": 100,
   "hfov": 4.14
  }
 ],
 "id": "overlay_738AB9A3_61F3_ED31_41C2_3FCF1F7B36D6"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.9,
   "hfov": 3.19
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B, this.camera_4F5457B1_6673_9B49_41D6_C0385883DE89); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404B1F14_65B2_EB48_41C6_7025E45B70A2",
   "yaw": -132.97,
   "pitch": -27.9,
   "distance": 100,
   "hfov": 3.19
  }
 ],
 "id": "overlay_7D8BC93D_6595_F7B8_41C2_EF28D58344AD"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.95,
   "hfov": 5.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8, this.camera_41BD66E6_6673_9ACB_41D8_D67CDD2FCFE5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4048DF14_65B2_EB48_4100_6D8284E74500",
   "yaw": 78.02,
   "pitch": -20.95,
   "distance": 100,
   "hfov": 5.75
  }
 ],
 "id": "overlay_73C56248_61FC_FF7F_41D6_D8328AAEE4F1"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.43,
   "hfov": 5.64
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8, this.camera_40809649_6673_9DD8_41D1_DA3122EBCBF7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404F9F14_65B2_EB48_41D0_CA563516E9BE",
   "yaw": 25.79,
   "pitch": -30.43,
   "distance": 100,
   "hfov": 5.64
  }
 ],
 "id": "overlay_73A6B719_61FC_2511_41C6_239CB9553E3E"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.21,
   "hfov": 4.85
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2, this.camera_4076C63A_6673_9DBB_41D2_10CA2FBF2FBB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404FCF14_65B2_EB48_41C0_8C7BF7BA1DD2",
   "yaw": -72.37,
   "pitch": -13.21,
   "distance": 100,
   "hfov": 4.85
  }
 ],
 "id": "overlay_736325AF_61FC_2531_41BC_75F42B9699D3"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.89,
   "hfov": 5.85
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0, this.camera_408CC649_6673_9DD8_4194_1CF5BD7DA262); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40486F14_65B2_EB48_41D4_F105C8DAD9E6",
   "yaw": 113.14,
   "pitch": -26.89,
   "distance": 100,
   "hfov": 5.85
  }
 ],
 "id": "overlay_732D148A_61FC_1BF3_41D6_977CA2234825"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31,
   "hfov": 4.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3, this.camera_406C963A_6673_9DBB_41B8_30AF82E3E66B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4048BF14_65B2_EB48_41D2_080A59601698",
   "yaw": 115.79,
   "pitch": -10.31,
   "distance": 100,
   "hfov": 4.9
  }
 ],
 "id": "overlay_72C0F4FC_61FF_FB17_41B3_2213FF1FAF3D"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.62,
   "hfov": 4.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F964654_659F_9DCF_41D8_A0481AD124C5",
   "yaw": 126.77,
   "pitch": -13.62,
   "distance": 100,
   "hfov": 4.83
  }
 ],
 "id": "overlay_4626CC85_659E_AD49_41D7_7BD913E68944"
},
{
 "rotationX": 1.73,
 "autoplay": true,
 "id": "overlay_40612E07_65F3_ED49_41C2_675E8AFEE9AE",
 "roll": -4.06,
 "vfov": 5.2,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_40612E07_65F3_ED49_41C2_675E8AFEE9AE_t.jpg",
    "width": 2,
    "class": "ImageResourceLevel",
    "height": 2
   }
  ]
 },
 "pitch": -2.95,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationY": -40.56,
 "yaw": 118.1,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 7.51,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.01,
   "hfov": 5.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3, this.camera_4173C6C6_6673_9AC8_41BF_7F9CE387285D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404D8F14_65B2_EB48_41D4_F6C7428A7177",
   "yaw": 52.23,
   "pitch": -20.01,
   "distance": 100,
   "hfov": 5.97
  }
 ],
 "id": "overlay_73D8D215_61FD_FF11_41D0_B3FBE83BCE3D"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.18,
   "hfov": 3.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321, this.camera_4191A6D6_6673_9AC8_41AA_EF83B11F98A0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404DFF14_65B2_EB48_41C0_990BA33B0403",
   "yaw": -32.14,
   "pitch": -31.18,
   "distance": 100,
   "hfov": 3.92
  }
 ],
 "id": "overlay_73864EA1_61FD_E731_41C3_6612D2AEAF18"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.52,
   "hfov": 5.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8, this.camera_418256D6_6673_9AC8_41D6_E4816297C1C6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404E6F14_65B2_EB48_41CE_7BD76103AC8E",
   "yaw": -134.83,
   "pitch": -28.52,
   "distance": 100,
   "hfov": 5.58
  }
 ],
 "id": "overlay_7361EAEA_61FC_2F30_41A9_1903D4BE0362"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.82,
   "hfov": 4.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8, this.camera_41A0D6E6_6673_9ACB_41D7_B8516EA362DF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404EAF14_65B2_EB48_41D1_05D429EA617E",
   "yaw": -159.44,
   "pitch": -19.82,
   "distance": 100,
   "hfov": 4.67
  }
 ],
 "id": "overlay_735706F7_61FC_2711_41B2_80CBF9C663F7"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.11,
   "hfov": 5.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404ECF14_65B2_EB48_41B5_1C38AAC2FB94",
   "yaw": -136.31,
   "pitch": -14.11,
   "distance": 100,
   "hfov": 5.59
  }
 ],
 "id": "overlay_729C6A3C_61FC_6F10_41A5_1B63171F13C7"
},
{
 "rotationX": 3.69,
 "autoplay": true,
 "id": "overlay_4642AF0F_658E_EB59_41C8_CE90A197CA94",
 "roll": -0.38,
 "vfov": 7.84,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_4642AF0F_658E_EB59_41C8_CE90A197CA94_t.jpg",
    "width": 608,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ]
 },
 "pitch": -2.53,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationY": 8.2,
 "yaw": 50.01,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 14.01,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.8,
   "hfov": 1.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693, this.camera_4097E659_6673_9DF8_413E_C75C21CEE4E8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40402F14_65B2_EB48_41D1_E49FF8CB0DD1",
   "yaw": -134.71,
   "pitch": -0.8,
   "distance": 100,
   "hfov": 1.88
  }
 ],
 "id": "overlay_715CB4B4_61EC_3B17_419B_2327EE350E03"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.22,
   "hfov": 2.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154, this.camera_40BA2669_6673_9DD9_4149_A368D7C0CC66); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40401F14_65B2_EB48_4192_FA31D85557A4",
   "yaw": -134.02,
   "pitch": 4.22,
   "distance": 100,
   "hfov": 2.16
  }
 ],
 "id": "overlay_714E910A_61EC_1AF3_41D0_88E9828E429F"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.3,
   "hfov": 3.03
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18, this.camera_40AE9659_6673_9DF8_41C0_A555DD9B434F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4040AF14_65B2_EB48_41C2_B4E14C2F0146",
   "yaw": -148.92,
   "pitch": -11.3,
   "distance": 100,
   "hfov": 3.03
  }
 ],
 "id": "overlay_71D81467_61EC_1B31_418D_96A635FE5B24"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.72,
   "hfov": 4.73
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3, this.camera_40A3C659_6673_9DF8_41D4_C93BA7A4815C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40412F14_65B2_EB48_41D5_962A4270C60D",
   "yaw": 42.6,
   "pitch": -19.72,
   "distance": 100,
   "hfov": 4.73
  }
 ],
 "id": "overlay_73C439BB_61EC_6D11_41CE_D6E1C89DE2DF"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.01,
   "hfov": 6.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3, this.camera_41CD96F5_6673_9AC8_41D7_4AD7E47E5449); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4041EF14_65B2_EB48_41A5_2D399D288D04",
   "yaw": 155.7,
   "pitch": -26.01,
   "distance": 100,
   "hfov": 6.94
  }
 ],
 "id": "overlay_73F54919_61FC_2D11_41C8_4E75BAC0303A"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.5,
   "hfov": 3.57
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40420F14_65B2_EB48_41A9_27E9FC6FAE30",
   "yaw": 173.82,
   "pitch": -8.5,
   "distance": 100,
   "hfov": 3.57
  }
 ],
 "id": "overlay_73B5D84A_61FC_6B73_41D5_0EA004D544C2"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.79,
   "hfov": 8.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_41DB96F5_6673_9AC8_41D0_DAA7014F164E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40424F14_65B2_EB48_41BE_54BDEB78ACFB",
   "yaw": -46.9,
   "pitch": -20.79,
   "distance": 100,
   "hfov": 8.15
  }
 ],
 "id": "overlay_7390D49E_61FC_7B10_41D0_FD5FBC4397A1"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.23,
   "hfov": 6.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321, this.camera_41EA7705_6673_9B49_419E_E370705F2B19); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4042CF14_65B2_EB48_41D0_E119EAE93579",
   "yaw": -123.34,
   "pitch": -25.23,
   "distance": 100,
   "hfov": 6.28
  }
 ],
 "id": "overlay_734F3F9B_61FC_6511_41D1_61F8A44B27CA"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.45,
   "hfov": 6.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40430F14_65B2_EB48_41D0_81DCB084DAAF",
   "yaw": -147.11,
   "pitch": -11.45,
   "distance": 100,
   "hfov": 6.23
  }
 ],
 "id": "overlay_72EA1F3C_61FC_2517_41D0_5D1EBFF144B4"
},
{
 "rotationX": 24.26,
 "autoplay": true,
 "id": "overlay_46C86D0B_6593_EF58_41C1_53EE330C6C19",
 "roll": 20.62,
 "vfov": 13.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_46C86D0B_6593_EF58_41C1_53EE330C6C19_t.jpg",
    "width": 608,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ]
 },
 "pitch": -9.1,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationY": 70.95,
 "yaw": 126.11,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 27.99,
 "data": {
  "label": "Video"
 }
},
{
 "rotationX": -2.19,
 "autoplay": false,
 "id": "overlay_41F724A9_65F2_9D58_41B6_0A90EA99248D",
 "roll": -17.39,
 "vfov": 5.73,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_41F724A9_65F2_9D58_41B6_0A90EA99248D_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -18.83,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 },
 "rotationY": 19.03,
 "yaw": -170.18,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_46EB421C_658D_B578_41D1_C75833247EA4.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": false,
 "click": "this.overlay_41F724A9_65F2_9D58_41B6_0A90EA99248D.play()",
 "distance": 50,
 "hfov": 5.26
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 31.02,
   "hfov": 7.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40577F24_65B2_EB48_41C4_0477A6683528",
   "yaw": 123.46,
   "pitch": 31.02,
   "distance": 100,
   "hfov": 7.45
  }
 ],
 "id": "overlay_73B45344_61F4_3D77_41D4_39C2A95319FE"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.61,
   "hfov": 4.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_4FEBD7F0_6673_9AC7_41D4_BC262D4A9C45); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40578F24_65B2_EB48_41D1_B5C4B652AF64",
   "yaw": 132.39,
   "pitch": 14.61,
   "distance": 100,
   "hfov": 4.05
  }
 ],
 "id": "overlay_73445108_61F4_1AFF_41C3_49200CB1EF8E"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.96,
   "hfov": 4.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_4FFBF7F0_6673_9AC7_41D0_540E6CC78209); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40502F24_65B2_EB48_41D3_4DFFC5DDF960",
   "yaw": 112.02,
   "pitch": 17.96,
   "distance": 100,
   "hfov": 4.74
  }
 ],
 "id": "overlay_73208231_61F4_FF10_41A4_95EBD863B256"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.28,
   "hfov": 4.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB, this.camera_4C0927FF_6673_9AB8_41C1_C437E44018AF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40505F24_65B2_EB48_41B9_608FF551585D",
   "yaw": 118.43,
   "pitch": 4.28,
   "distance": 100,
   "hfov": 4.97
  }
 ],
 "id": "overlay_73136D46_61F4_E570_41D8_06B3554FF314"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.36,
   "hfov": 4.71
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975, this.camera_4FDDE7EF_6673_9AD8_41BA_59690746BE1F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4050FF24_65B2_EB48_41A6_8F97419FB6AF",
   "yaw": -47.49,
   "pitch": -18.36,
   "distance": 100,
   "hfov": 4.71
  }
 ],
 "id": "overlay_79479D75_658E_EFC8_41B9_3DB589C90687"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.92,
   "hfov": 2.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693, this.camera_4E8F5753_6673_9BC8_41C1_9D84E8479821); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40449F14_65B2_EB48_41D0_35868673CE10",
   "yaw": 2.96,
   "pitch": -20.92,
   "distance": 100,
   "hfov": 2.88
  }
 ],
 "id": "overlay_6F6C54C3_61DC_1B70_41C9_ED0641378985"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.38,
   "hfov": 2.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18, this.camera_4E80B744_6673_9BCF_41AE_BBA201FC7A53); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40451F14_65B2_EB48_41D8_9DDBFBAC78B5",
   "yaw": 2.84,
   "pitch": -14.38,
   "distance": 100,
   "hfov": 2.99
  }
 ],
 "id": "overlay_6F157949_61DC_6D71_41D7_5D063BDC3CCD"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.26,
   "hfov": 1.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2, this.camera_4E629734_6673_9B48_41C2_2899DC66F3BF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4045BF14_65B2_EB48_41D5_370D3F17951F",
   "yaw": -0.65,
   "pitch": -10.26,
   "distance": 100,
   "hfov": 1.67
  }
 ],
 "id": "overlay_6E960A6F_61DC_2F31_41B8_E26095E50E93"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.37,
   "hfov": 10.09
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975, this.camera_4E72B744_6673_9BCF_41D7_DB9B57BD2240); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4045DF14_65B2_EB48_41BB_743361283939",
   "yaw": -10.33,
   "pitch": 11.37,
   "distance": 100,
   "hfov": 10.09
  }
 ],
 "id": "overlay_73BC5613_61F5_E711_41C4_6C76B58551CD"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.06,
   "hfov": 4.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2, this.camera_4E9F6753_6673_9BC8_41D8_984907ACFD5E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40416F14_65B2_EB48_41CD_0343D25CE4BE",
   "yaw": 130.5,
   "pitch": -14.06,
   "distance": 100,
   "hfov": 4.26
  }
 ],
 "id": "overlay_734B91CB_61F4_3D70_41C5_04D9910231F8"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.51,
   "hfov": 3.79
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F, this.camera_4EAE8763_6673_9BC9_4177_183AD4FFEBF0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4041BF14_65B2_EB48_41D7_F5867D0C416D",
   "yaw": -94.3,
   "pitch": -25.51,
   "distance": 100,
   "hfov": 3.79
  }
 ],
 "id": "overlay_73BE64D3_61F4_1B11_41D8_1EECBF71910C"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.52,
   "hfov": 5.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321, this.camera_4EDB3772_6673_9BC8_41B6_59A6B4FBBBB7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4041CF14_65B2_EB48_41C4_5C014E1A4FD7",
   "yaw": -130.5,
   "pitch": -22.52,
   "distance": 100,
   "hfov": 5.15
  }
 ],
 "id": "overlay_737116C5_61F4_2771_41C8_B86F5E308B53"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.56,
   "hfov": 3.89
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0, this.camera_4EBD6763_6673_9BC9_41CA_E43182333872); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40427F14_65B2_EB48_41D7_F2763D965E2D",
   "yaw": -171.53,
   "pitch": -27.56,
   "distance": 100,
   "hfov": 3.89
  }
 ],
 "id": "overlay_7306060C_61F3_E6F7_41D4_31270FF46857"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.29,
   "hfov": 5.29
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8, this.camera_4ECB5772_6673_9BC8_41A8_BC9F3DF8CAD4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4042BF14_65B2_EB48_41C4_8956A902B2DC",
   "yaw": -174.87,
   "pitch": -9.29,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "id": "overlay_72BA6578_61F3_E51F_4154_EEA38D815978"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.09,
   "hfov": 5.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40415F14_65B2_EB48_41C5_619200852BEB",
   "yaw": -89.59,
   "pitch": -9.09,
   "distance": 100,
   "hfov": 5.88
  }
 ],
 "id": "overlay_750C064F_658D_9DD8_41CE_278DF807C68F"
},
{
 "rotationX": 14.61,
 "autoplay": true,
 "id": "overlay_46DB25F9_6592_9EB8_41D3_5AA9270BD1A0",
 "roll": 0.89,
 "vfov": 24.16,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_46DB25F9_6592_9EB8_41D3_5AA9270BD1A0_t.jpg",
    "width": 608,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ]
 },
 "pitch": -14.55,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationY": -3.35,
 "yaw": -6.27,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 41.89,
 "data": {
  "label": "Video"
 }
},
{
 "rotationX": 28.29,
 "autoplay": true,
 "id": "overlay_46D700DD_658D_F6F8_41D3_6AE8F52DFBD2",
 "roll": -6.59,
 "vfov": 9.21,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_46D700DD_658D_F6F8_41D3_6AE8F52DFBD2_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -30.41,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationY": -21.6,
 "yaw": 166.85,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_46EB421C_658D_B578_41D1_C75833247EA4.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 12.67,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.05,
   "hfov": 2.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18, this.camera_4E08D714_6673_9B48_41D2_622244B979CD); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_403CB7BB_65B6_9AB8_41C3_A1BC775CB3E6",
   "yaw": 41.63,
   "pitch": -19.05,
   "distance": 100,
   "hfov": 2.92
  }
 ],
 "id": "overlay_71EA430A_61DC_3EF3_41C8_A3E3CBEDE525"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.05,
   "hfov": 2.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2, this.camera_41F81705_6673_9B49_41C6_AF24930BC3C8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40464F14_65B2_EB48_41C5_7967C54581C8",
   "yaw": 31.93,
   "pitch": -10.05,
   "distance": 100,
   "hfov": 2.15
  }
 ],
 "id": "overlay_7129C3E2_61D4_FD33_41CC_19860BEE07DE"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.22,
   "hfov": 4.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154, this.camera_4E161714_6673_9B48_41C2_92CBB0127A69); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4046FF14_65B2_EB48_41B0_B590D9AFA087",
   "yaw": -157.15,
   "pitch": 2.22,
   "distance": 100,
   "hfov": 4.42
  }
 ],
 "id": "overlay_71384195_61EC_1D11_41CC_C99180B06132"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.42,
   "hfov": 5.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0, this.camera_4FAFC7D0_6673_9AC8_41B8_EFF82F923C10); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4043BF14_65B2_EB48_41C5_764FFEFE2E12",
   "yaw": -94.61,
   "pitch": -31.42,
   "distance": 100,
   "hfov": 5.58
  }
 ],
 "id": "overlay_73CC0498_61FC_1B1F_41CE_6BBD1A2B7836"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.4,
   "hfov": 6.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F, this.camera_4F91D7C0_6673_9AC8_41D8_6A04E3DC8F26); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4043FF14_65B2_EB48_41D8_2E3B021B784B",
   "yaw": 159.72,
   "pitch": -26.4,
   "distance": 100,
   "hfov": 6.05
  }
 ],
 "id": "overlay_7383C89B_61FC_2B11_41D5_55D603DA4B21"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.21,
   "hfov": 5.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_4F9F17D0_6673_9AC8_41D9_77B9A708EB0A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404C1F14_65B2_EB48_41BA_2881140E261F",
   "yaw": 102.41,
   "pitch": -17.21,
   "distance": 100,
   "hfov": 5.12
  }
 ],
 "id": "overlay_736CB453_61FC_1B11_41C4_AACFC0A4B2CA"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.63,
   "hfov": 5.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3, this.camera_4FBE47E0_6673_9AC7_41D1_D207EE58731B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404CAF14_65B2_EB48_41CD_63388AEFDCFB",
   "yaw": -160.11,
   "pitch": -18.63,
   "distance": 100,
   "hfov": 5.08
  }
 ],
 "id": "overlay_73437EF6_61FC_6713_41D1_41C7173E3E44"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.06,
   "hfov": 5.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_4FCD97E0_6673_9AC7_41CC_363EEF067E81); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404CCF14_65B2_EB48_41C5_7BAEB106F8EE",
   "yaw": 9.07,
   "pitch": -11.06,
   "distance": 100,
   "hfov": 5.47
  }
 ],
 "id": "overlay_72E0203E_61FC_1B10_41D6_D95E69F91A5B"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.86,
   "hfov": 5.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404D1F14_65B2_EB48_41BA_A6ED0B0C4450",
   "yaw": 52.43,
   "pitch": -10.86,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "id": "overlay_7267733C_61FC_3D17_41D2_26A23E3EC88E"
},
{
 "rotationX": 10.16,
 "autoplay": true,
 "id": "overlay_410035D2_65F5_BEFB_41D5_28D3D89F56BC",
 "roll": 3.14,
 "vfov": 8.1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_410035D2_65F5_BEFB_41D5_28D3D89F56BC_t.jpg",
    "width": 2,
    "class": "ImageResourceLevel",
    "height": 2
   }
  ]
 },
 "pitch": -7.65,
 "useHandCursor": true,
 "videoVisibleOnStop": true,
 "class": "VideoPanoramaOverlay",
 "rotationY": 30.55,
 "yaw": -172.4,
 "video": {
  "width": 608,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_4132F12C_6592_B758_41D7_A719039B95A5.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "loop": true,
 "distance": 50,
 "hfov": 13.02,
 "data": {
  "label": "Video"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "verticalAlign": "middle",
 "width": 100,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "height": 75,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.18,
   "hfov": 4.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8, this.camera_414626B7_6673_9D49_41D1_C46DB36C21E0); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4049BF14_65B2_EB48_41C2_A6485B85AE19",
   "yaw": 48.61,
   "pitch": -9.18,
   "distance": 100,
   "hfov": 4.92
  }
 ],
 "id": "overlay_73C713CA_61FC_1D73_41B3_11273B177541"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.77,
   "hfov": 5.02
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792, this.camera_4156A6B7_6673_9D49_41C1_FB7852751AAD); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4049DF14_65B2_EB48_41C3_B888A147278A",
   "yaw": 8.07,
   "pitch": -14.77,
   "distance": 100,
   "hfov": 5.02
  }
 ],
 "id": "overlay_738E7160_61FC_3D2F_41C0_4E5C484C03C5"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.39,
   "hfov": 4.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_4165F6C6_6673_9AC8_41D6_171FDDC7A32B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40488F14_65B2_EB48_41B5_CC63FCA8F92D",
   "yaw": -111.63,
   "pitch": -37.39,
   "distance": 100,
   "hfov": 4.26
  }
 ],
 "id": "overlay_736BE062_61FC_1B33_41D4_2314D3D8E264"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.76,
   "hfov": 4.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A94F632_61D4_2713_41D1_4C0DB866639F, this.camera_40D11678_6673_9DB8_41BE_6AF34EFD67FC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404BBF24_65B2_EB48_41AC_F57DB839A859",
   "yaw": 110.57,
   "pitch": -10.76,
   "distance": 100,
   "hfov": 4.88
  }
 ],
 "id": "overlay_73DC9C55_61FC_2B11_41C8_689EDE81808A"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.66,
   "hfov": 6.25
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975, this.camera_40E85688_6673_9D47_41D4_F6B292373C53); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_404BDF24_65B2_EB48_41D4_511EECBC4C59",
   "yaw": -49.78,
   "pitch": -17.66,
   "distance": 100,
   "hfov": 6.25
  }
 ],
 "id": "overlay_73673771_61FD_E510_41D7_A646A2E6E3BA"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.45,
   "hfov": 5.13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_40C67669_6673_9DD9_41C2_06C03FE06F50); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40547F24_65B2_EB48_41CC_9EF9B756810D",
   "yaw": -133.49,
   "pitch": -17.45,
   "distance": 100,
   "hfov": 5.13
  }
 ],
 "id": "overlay_7352273E_61FC_2513_41A8_BDEF1C07FD03"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.8,
   "hfov": 6.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321, this.camera_40F50688_6673_9D47_41D0_0B23C51293B3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F83DF69_65F3_ABD8_41C2_8AA0BEA080F5",
   "yaw": 166.53,
   "pitch": -18.8,
   "distance": 100,
   "hfov": 6.2
  }
 ],
 "id": "overlay_72DF40CF_61FC_1B71_41D3_75289F3DD283"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.77,
   "hfov": 6.33
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB, this.camera_4100D697_6673_9D48_41C6_B05FF7E09243); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4054CF24_65B2_EB48_41D2_243944CBF138",
   "yaw": -56.44,
   "pitch": -32.77,
   "distance": 100,
   "hfov": 6.33
  }
 ],
 "id": "overlay_73BE8FD4_61FC_2517_418D_E2CCF3038259"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.7,
   "hfov": 4.53
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B, this.camera_40DE9678_6673_9DB8_4197_8F15EFE480FE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40554F24_65B2_EB48_41B9_4E2F94D253FC",
   "yaw": -64.73,
   "pitch": -24.7,
   "distance": 100,
   "hfov": 4.53
  }
 ],
 "id": "overlay_7DAA8D7C_6596_EFB8_41A8_11B02E401155"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.76,
   "hfov": 4.52
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8, this.camera_413826A7_6673_9D48_41C2_FA211E116492); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4D0395BC_65F3_9EB8_41D3_E7E7AC50EA64",
   "yaw": 105.05,
   "pitch": -32.76,
   "distance": 100,
   "hfov": 4.52
  }
 ],
 "id": "overlay_73DC0F24_61FC_2537_41CD_277A1BAAE5D8"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.93,
   "hfov": 4.65
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40490F14_65B2_EB48_41D5_2665CDDEC295",
   "yaw": 103.5,
   "pitch": -12.93,
   "distance": 100,
   "hfov": 4.65
  }
 ],
 "id": "overlay_7397291D_61FC_6D10_41BB_E1DE58ADF469"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.29,
   "hfov": 4.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17, this.camera_4E44E734_6673_9B48_41C1_00DDC6B5DB51); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4055EF24_65B2_EB48_41CD_5BC138257813",
   "yaw": 156.32,
   "pitch": 10.29,
   "distance": 100,
   "hfov": 4.7
  }
 ],
 "id": "overlay_73BB318B_61FC_3DF1_41C7_9215A48FB99E"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.15,
   "hfov": 4.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975, this.camera_4E354724_6673_9B48_41C2_B905B8459C66); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40560F24_65B2_EB48_41C8_DE86EFD74E81",
   "yaw": 9.27,
   "pitch": -16.15,
   "distance": 100,
   "hfov": 4.97
  }
 ],
 "id": "overlay_73705386_61FC_FDF3_41D5_D3EFC8E08094"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.95,
   "hfov": 4.43
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B, this.camera_4E54A734_6673_9B48_41B2_5133F2C4FED8); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4056BF24_65B2_EB48_41B1_029E36CB1366",
   "yaw": 0.12,
   "pitch": -26.95,
   "distance": 100,
   "hfov": 4.43
  }
 ],
 "id": "overlay_73505290_61FC_1FEF_41B8_B5B4BC4374D5"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.4,
   "hfov": 5.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824, this.camera_4E26C724_6673_9B48_4189_385522CC7ECD); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4056CF24_65B2_EB48_41D7_A5D8BD2EA66A",
   "yaw": -147.03,
   "pitch": 6.4,
   "distance": 100,
   "hfov": 5.16
  }
 ],
 "id": "overlay_731B1F95_61FC_2511_41C5_0DF2265F632E"
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 110,
 "layout": "horizontal",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "layout": "vertical",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "visible": false,
 "gap": 3
},
{
 "paddingBottom": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "verticalAlign": "middle",
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Image",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 51,
 "layout": "horizontal",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 3
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "levels": [
  {
   "url": "media/panorama_6AF228AB_61D7_EB31_41D6_727FA0A4DFE8_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4C969E8A_659D_AD58_41B7_61F5894D9BE0",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40473F14_65B2_EB48_41C8_F7DA9FADF1CD",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40477F14_65B2_EB48_41D9_4A74F0239C94",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A80080F_61D4_6AF1_41C8_3F6BA0CBCF18_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40478F14_65B2_EB48_41C7_B55A53BFF1F7",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40579F24_65B2_EB48_41D5_8EFD259C7060",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40502F24_65B2_EB48_41A5_4C66190A9B93",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40504F24_65B2_EB48_41A4_651691081FC6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4050EF24_65B2_EB48_41D1_3D03F0525455",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE0BED_61D4_2D31_41CA_8CB4227B3975_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40510F24_65B2_EB48_41D6_0DEA4712892A",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40495F14_65B2_EB48_41C5_DD0E6EBE41D6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40499F14_65B2_EB48_41D9_5306F8300B37",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404A0F14_65B2_EB48_41D3_771F6BFE0CA1",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404AAF14_65B2_EB48_41D2_CD1C1FA273E7",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404ACF14_65B2_EB48_41D7_E73F8B81EEE6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEAB1EE_61D4_7D33_41A2_E061C9179824_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404B1F14_65B2_EB48_41C6_7025E45B70A2",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE36AF_61D4_6731_41D3_D49E8A556792_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4048DF14_65B2_EB48_4100_6D8284E74500",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404F9F14_65B2_EB48_41D0_CA563516E9BE",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404FCF14_65B2_EB48_41C0_8C7BF7BA1DD2",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40486F14_65B2_EB48_41D4_F105C8DAD9E6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4048BF14_65B2_EB48_41D2_080A59601698",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82427_61D4_1B30_41B3_5FB057C86AB8_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F964654_659F_9DCF_41D8_A0481AD124C5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404D8F14_65B2_EB48_41D4_F6C7428A7177",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404DFF14_65B2_EB48_41C0_990BA33B0403",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404E6F14_65B2_EB48_41CE_7BD76103AC8E",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404EAF14_65B2_EB48_41D1_05D429EA617E",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A95BD2E_61D7_E533_41C5_5A72571746E0_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404ECF14_65B2_EB48_41B5_1C38AAC2FB94",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40402F14_65B2_EB48_41D1_E49FF8CB0DD1",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40401F14_65B2_EB48_4192_FA31D85557A4",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4040AF14_65B2_EB48_41C2_B4E14C2F0146",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A8C827B_61D4_7F11_41C2_C2CCCC0B2BF2_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40412F14_65B2_EB48_41D5_962A4270C60D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4041EF14_65B2_EB48_41A5_2D399D288D04",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40420F14_65B2_EB48_41A9_27E9FC6FAE30",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40424F14_65B2_EB48_41BE_54BDEB78ACFB",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4042CF14_65B2_EB48_41D0_E119EAE93579",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A94F632_61D4_2713_41D1_4C0DB866639F_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40430F14_65B2_EB48_41D0_81DCB084DAAF",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40577F24_65B2_EB48_41C4_0477A6683528",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40578F24_65B2_EB48_41D1_B5C4B652AF64",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40502F24_65B2_EB48_41D3_4DFFC5DDF960",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40505F24_65B2_EB48_41B9_608FF551585D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFEF1E6_61D4_3D33_41D8_13CFD0BFEC9B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4050FF24_65B2_EB48_41A6_8F97419FB6AF",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40449F14_65B2_EB48_41D0_35868673CE10",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40451F14_65B2_EB48_41D8_9DDBFBAC78B5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4045BF14_65B2_EB48_41D5_370D3F17951F",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6A2D161C_61D4_2717_41BB_6F88C51C6154_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4045DF14_65B2_EB48_41BB_743361283939",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40416F14_65B2_EB48_41CD_0343D25CE4BE",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4041BF14_65B2_EB48_41D7_F5867D0C416D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4041CF14_65B2_EB48_41C4_5C014E1A4FD7",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40427F14_65B2_EB48_41D7_F2763D965E2D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4042BF14_65B2_EB48_41C4_8956A902B2DC",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AEC6447_61D4_1B70_41D7_7339637F1FB3_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40415F14_65B2_EB48_41C5_619200852BEB",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_403CB7BB_65B6_9AB8_41C3_A1BC775CB3E6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40464F14_65B2_EB48_41C5_7967C54581C8",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFBDDE3_61D4_2531_41A4_CEF3C8CCE693_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4046FF14_65B2_EB48_41B0_B590D9AFA087",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4043BF14_65B2_EB48_41C5_764FFEFE2E12",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4043FF14_65B2_EB48_41D8_2E3B021B784B",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404C1F14_65B2_EB48_41BA_2881140E261F",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404CAF14_65B2_EB48_41CD_63388AEFDCFB",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404CCF14_65B2_EB48_41C5_7BAEB106F8EE",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF231AE_61D4_1D33_41CC_44B31E43E321_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404D1F14_65B2_EB48_41BA_A6ED0B0C4450",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4049BF14_65B2_EB48_41C2_A6485B85AE19",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4049DF14_65B2_EB48_41C3_B888A147278A",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AE82B12_61D4_2D13_41BF_90F3219ADCD8_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40488F14_65B2_EB48_41B5_CC63FCA8F92D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404BBF24_65B2_EB48_41AC_F57DB839A859",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_404BDF24_65B2_EB48_41D4_511EECBC4C59",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40547F24_65B2_EB48_41CC_9EF9B756810D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F83DF69_65F3_ABD8_41C2_8AA0BEA080F5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4054CF24_65B2_EB48_41D2_243944CBF138",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE6DE9_61D4_6531_41C2_C46E4FC11B17_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40554F24_65B2_EB48_41B9_4E2F94D253FC",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D0395BC_65F3_9EB8_41D3_E7E7AC50EA64",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AF1EFDF_61D4_2511_41AE_D2CF7B4600B2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40490F14_65B2_EB48_41D5_2665CDDEC295",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4055EF24_65B2_EB48_41CD_5BC138257813",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40560F24_65B2_EB48_41C8_DE86EFD74E81",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4056BF24_65B2_EB48_41B1_029E36CB1366",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6AFE17D0_61D4_256F_41CF_08034DB2B4AB_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4056CF24_65B2_EB48_41D7_A5D8BD2EA66A",
 "colCount": 4
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": 60,
 "maxWidth": 60,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "visible": false
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "visible": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 0,
 "rollOverShadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "HOUSE INFO",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button house info"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "PANORAMA LIST",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button panorama list"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "LOCATION",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button location"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "FLOORPLAN",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button floorplan"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "PHOTOALBUM",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 90,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Button",
 "borderRadius": 0,
 "label": "REALTOR",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button realtor"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "layout": "absolute",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "itemVerticalAlign": "top",
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "itemMaxWidth": 1000,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "class": "ThumbnailGrid",
 "itemLabelFontColor": "#666666",
 "scrollBarVisible": "rollOver",
 "itemLabelGap": 7,
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0.05,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "height": "100%",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 0,
 "itemMinHeight": 50,
 "itemMode": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontSize": 14,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "itemPaddingBottom": 3,
 "itemLabelTextDecoration": "none",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "itemLabelFontStyle": "normal",
 "propagateClick": false,
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemLabelHorizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 26
},
{
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "layout": "absolute",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "MapViewer",
 "transitionMode": "blending",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Floor Plan"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "layout": "absolute",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 60,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Image",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipFontStyle": "normal",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "right": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipShadowOpacity": 1,
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": 0,
 "toolTipFontWeight": "normal",
 "bottom": 0,
 "toolTipFontFamily": "Arial",
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "layout": "horizontal",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container arrows"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "WebFrame",
 "insetBorder": false,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "paddingBottom": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg"
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png"
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "10%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Image",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "class": "Button",
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "maxWidth": 150,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png"
},
{
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "30%",
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container separator"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "maxWidth": 150,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "class": "Button",
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 59,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "class": "Button",
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": 34,
 "backgroundOpacity": 0.7,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "45%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "height": "80%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "verticalAlign": "middle",
 "width": "25.177%",
 "maxWidth": 983,
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "30.5%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Image",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4092"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingRight": 10
}],
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.75,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "height": "100%",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "overflow": "visible",
 "propagateClick": true,
 "scripts": {
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
