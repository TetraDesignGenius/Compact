// standard global variables
var container, scene, backgroundScene, backgroundCamera, camera,cameraLeft,cameraRight, renderer, controls,controls1;
var keyboard = new KeyboardState();


// custom global variables
var targetList = [],targetListX = [],targetListY = [],targetListXY = [],savedFiles = [],userLocalName = [],userLocalPass = [];
var numSavedFiles = 0, current = ["NONE", ""],currentFile;
var activeFiles = [];
activeFiles[0] = ". ";
var numUserL = 0;
var numUsers = 1;
var possiX=[], possiY=[], possiZ=[],possiXX=[], possiYX=[], possiZX=[],possiXY=[], possiYY=[], possiZY=[],possiXXY=[], possiYXY=[], possiZXY=[];//positions
var TFlagNum=[],TFlagNumX=[], TFlagNumY=[], TFlagNumXY=[], TColour=[], TColourX=[], TColourY=[], TColourXY=[];
var rotX=[], rotY=[], rotZ=[], rotXX=[], rotYX=[], rotZX=[], rotXY=[], rotYY=[], rotZY=[], rotXXY=[], rotYXY=[], rotZXY=[], DesT=[];//rotations
var vv0x=[], vv0y=[], vv0z=[], vv1x=[], vv1y=[], vv1z=[], vv2x=[], vv2y=[], vv2z=[], vv3x=[], vv3y=[], vv3z=[];//?
			
var mirX=[],mirY=[],mirXY=[];
var targetOBJ = [];
var objects = []; 
var objectsL = []; //loaded objects
var objectXxx =[];
var objectX;
var lightsP = [];
var particleLight;
var projector, raycaster, mouse = { x: 0, y: 0 },INTERSECTED, isShiftDown = false;
var separation=0.1;
var selectedFaces = [];
var floorSide=1000;
var faceColorMaterial, baseColor=new THREE.Color( 0xeedd66 );
var highlightedColor=new THREE.Color( 0xddaa00 );
var selectedColor=new THREE.Color( 0x4466dd );
var mouseSphereCoords = null;
var mouseSphere=[];
var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.1 } );
var light1, light2, light3; 
var li=2, i, iiL, xi, yi, zi, si, sy, sz, ci = 1, cii = 1, ciiX=0, ciiY=0, ciiXY=0; //xi is sum of vx values to determine symetry
var materials = [];
var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;
var keyCode, KeyCodeUp;
var xposi1 = 3.3003030003033003330; //sort of random starting position x. May replace with more random number in final version?
var yposi1 = 2.2200202020020220002; //sort of random starting position y
var zposi1 = 5.5005505005055050055; //sort of random starting position z
var Xsym, Ysym, Zsym;
var Doption = "OFF", Rainbow = "Random",addTetraName = "Original",addTetraName2 = "",addTetraName2R = "";
var xxpo = xposi1/(Math.PI/3)*(Math.floor(xposi1/Math.floor(xposi1)+yposi1+zposi1-Math.floor(yposi1+zposi1)))/Math.PI/Math.floor(xposi1/3) ; //Another random pos based on x1, y1 and z1
var yypo = 5*Math.PI*(Math.floor(yposi1/Math.floor(yposi1)+xposi1+zposi1-Math.floor(xposi1+zposi1)))/Math.PI/Math.floor(yposi1/10);  //Another random pos based on x1, y1 and z1
var zzpo = 2*Math.PI*(Math.floor(zposi1/Math.floor(zposi1)+xposi1+yposi1-Math.floor(yposi1+xposi1)))/Math.PI/Math.floor(zposi1/2.5);  //Another random pos based on x1, y1 and z1
var object3, object4, object2;
var rotSelect2 = [];
var rotSelect = [];
var material11 = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0});   //0 is glass 1 is brick
var material999 = new THREE.MeshLambertMaterial({color: 0x00ff00, transparent: true, opacity: 0.3});   //0 is glass 1 is brick
var material12 = new THREE.MeshLambertMaterial({color: 0xffff00, transparent: true, opacity: 1});
var material13 = new THREE.MeshLambertMaterial({color: 0xeeff00});
var material14 = new THREE.MeshLambertMaterial({color: 0xeeff00});
var material15 = new THREE.MeshLambertMaterial({color: 0xffffff,  transparent: true, opacity: 1});
var octa, octaX, octaY,octaZ;
var cubeColor, texture2, backgroundMesh;
var folder1;
var addTetraFlag = 0, addTetraFlag2 = 0, Load2 = 0, addDesignFlag = 0, TexFlag =0;
texFlag = 0;
var designs =[];
var textures = [];
var Tadd;
var TransparentBlock = "False"
var saveOBJ1 = "SavedOBJ";
var colcol = "0x2222cc";
var colcol2 = "0x2222cc";
// myFolder = "home\\theuns\\Downloads\\TetraGeniusUserFiles\\"; // add extra escape slash Not required!!! saved local storage
var musicC = [];
var playingNow;
var audio;
var loaded;
var retrievedObjectA = [];
var sentObjectA = {};
var userObject = [];
var USERS = {};
var retrievedObject;

const tetrasL = [];
var angleObx = 0;
var angleOby = 0;
var angleObz = 0;
var angleOb = Math.PI;
var ciiB = 0, ciiA = 0;
var tNames = [" ","Original", "Geometric","Spiral","Pipes", "Clipped", "Cubes", "TetraFrame",
"TetraMag","Flower","Triangles","TetraClip","Esher Stair","Old Style","FlatPack","Cubic",
"Modern","DNA segment","Oval","Dragon","Torus"];
var tNames2 = [" ","Sphere0", "Sphere1","Sphere2","Sphere3", "Sphere4"];
var tNames3 = [" ","Globe1", "Globe2","Globe3","Globe4", "Globe5", "Globe6"];
var tNames4 = [" ","ThickStar", "ThinStar","Light","Heavy"];
var tNames5 = [" ","Modern", "Dragon", "Heart", "Flower", "Leaf"];
var tetraName = "Original";
var loadingF = 0;
var texNames = [ "Gradient", "Central Africa","Antartica","Eurasia","Australia","Canada","Americas","EsherStair","GoldCopper",
"BlueIce","Silver","Glass","Green","Sandstone","Leaf", "Heart","AddMonochrome"];
