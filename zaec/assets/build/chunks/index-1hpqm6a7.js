import{n}from"./app-fjph34ja.js";var du="186";var fu=0,mc=1,pu=2;var Lr=1,mu=2,Ws=3,Qn=0,fn=1,Vt=2,ei=0,ti=1,Ht=2,Ac=3,gc=4,Ha=5;var qs=100,Au=101,gu=102,bu=103,Ga=104,xu=200,Fr=201,_u=202,vu=203,yu=204,Mu=205,Su=206,wu=207,Eu=208,Tu=209,Ru=210,Cu=211,Pu=212,Iu=213,Du=214,Lu=0,Fu=1,Nu=2,bc=3,Uu=4,Ou=5,Bu=6,ku=7,zu=0,Hu=1,Gu=2,qn=0,xc=1,_c=2,vc=3,yc=4,Mc=5,Sc=6,wc=7;var Xs=301,ns=302,Va=303,Wa=304,Nr=306,ni=1000,js=1001,qa=1002,Xn=1003,Xa=1004;var is=1005;var kt=1006,Ks=1007;var ii=1008;var Mn=1009,Vu=1010,Wu=1011,Ur=1012,Ec=1013,Bi=1014,_i=1015,si=1016,Tc=1017,Rc=1018,Ys=1020,qu=35902,Xu=35899,ju=1021,Ku=1022,Ln=1023,ss=1026,rs=1027,Js=1028,Cc=1029,as=1030,Pc=1031;var Ic=1033,ja=33776,Ka=33777,Ya=33778,Ja=33779,Dc=35840,Lc=35841,Fc=35842,Nc=35843,Uc=36196,Oc=37492,Bc=37496,kc=37488,zc=37489,Za=37490,Hc=37491,Gc=37808,Vc=37809,Wc=37810,qc=37811,Xc=37812,jc=37813,Kc=37814,Yc=37815,Jc=37816,Zc=37817,$c=37818,Qc=37819,el=37820,tl=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,$a=36285,ol=36286;var cl=2300,Qa=2301;var ll=0,Or=1,Zs=2;var hl=0,Yu=1,Sn="",ri="srgb",wn="srgb-linear",ul="linear",Ft="srgb";var Ju=512,Zu=513,$u=514,eo=515,Qu=516,ed=517,to=518,td=519;var dl=35048;var fl="300 es",pl=2000;function ip(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nd(){let e=Hs("canvas");return e.style.display="block",e}var yh={},Gs=null;function Cr(...e){let t="THREE."+e.shift();if(Gs)Gs("log",t,...e);else console.log(t,...e)}function id(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function $e(...e){e=id(e);let t="THREE."+e.shift();if(Gs)Gs("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function rt(...e){e=id(e);let t="THREE."+e.shift();if(Gs)Gs("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Qi(...e){let t=e.join(" ");if(t in yh)return;yh[t]=!0,$e(...e)}function sd(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}var rd={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class vi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);if(r!==-1)s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}var cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,ks=Math.PI/180,es=180/Math.PI;function Dn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(cn[e&255]+cn[e>>8&255]+cn[e>>16&255]+cn[e>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[i&63|128]+cn[i>>8&255]+"-"+cn[i>>16&255]+cn[i>>24&255]+cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]).toLowerCase()}function gt(e,t,i){return Math.max(t,Math.min(i,e))}function ml(e,t){return(e%t+t)%t}function rp(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function ap(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Er(e,t,i){return(1-i)*e+i*t}function op(e,t,i,s){return Er(e,t,1-Math.exp(-i*s))}function cp(e,t=1){return t-Math.abs(ml(e,t*2)-t)}function lp(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function hp(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function up(e,t){return e+Math.floor(Math.random()*(t-e+1))}function dp(e,t){return e+Math.random()*(t-e)}function fp(e){return e*(0.5-Math.random())}function pp(e){if(e!==void 0)Mh=e;let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mp(e){return e*ks}function Ap(e){return e*es}function gp(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function bp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function xp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function _p(e,t,i,s,r){let{cos:a,sin:o}=Math,c=a(i/2),l=o(i/2),h=a((t+s)/2),u=o((t+s)/2),f=a((t-s)/2),d=o((t-s)/2),p=a((s-t)/2),g=o((s-t)/2);switch(r){case"XYX":e.set(c*u,l*f,l*d,c*h);break;case"YZY":e.set(l*d,c*u,l*f,c*h);break;case"ZXZ":e.set(l*f,l*d,c*u,c*h);break;case"XZX":e.set(c*u,l*g,l*p,c*h);break;case"YXY":e.set(l*p,c*u,l*g,c*h);break;case"ZYZ":e.set(l*g,l*p,c*u,c*h);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Al={DEG2RAD:ks,RAD2DEG:es,generateUUID:Dn,clamp:gt,euclideanModulo:ml,mapLinear:rp,inverseLerp:ap,lerp:Er,damp:op,pingpong:cp,smoothstep:lp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:Ap,isPowerOfTwo:gp,ceilPowerOfTwo:bp,floorPowerOfTwo:xp,setQuaternionFromProperEuler:_p,normalize:Ct,denormalize:Wn};class Fe{static{Fe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],g=r[a+3];if(u!==g||c!==f||l!==d||h!==p){let v=c*f+l*d+h*p+u*g;if(v<0)f=-f,d=-d,p=-p,g=-g,v=-v;let A=1-o;if(v<0.9995){let m=Math.acos(v),E=Math.sin(m);A=Math.sin(A*m)/E,o=Math.sin(o*m)/E,c=c*A+f*o,l=l*A+d*o,h=h*A+p*o,u=u*A+g*o}else{c=c*A+f*o,l=l*A+d*o,h=h*A+p*o,u=u*A+g*o;let m=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=m,l*=m,h*=m,u*=m}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-o*d,e[t+2]=l*p+h*d+o*f-c*u,e[t+3]=h*p-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:s,_z:r,_order:a}=e,{cos:o,sin:c}=Math,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=0.5/Math.sqrt(f+1);this._w=0.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=0.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=0.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,{_x:o,_y:c,_z:l,_w:h}=t;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,o=this.dot(e);if(o<0)i=-i,s=-s,r=-r,a=-a,o=-o;let c=1-t;if(o<0.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,{x:r,y:a,z:o,w:c}=e,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:s,z:r}=e,{x:a,y:o,z:c}=t;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Bo=new P,Sh=new Fn;class ct{static{ct.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],g=s[0],v=s[3],A=s[6],m=s[1],E=s[4],T=s[7],b=s[2],S=s[5],R=s[8];return r[0]=a*g+o*m+c*b,r[3]=a*v+o*E+c*S,r[6]=a*A+o*T+c*R,r[1]=l*g+h*m+u*b,r[4]=l*v+h*E+u*S,r[7]=l*A+h*T+u*R,r[2]=f*g+d*m+p*b,r[5]=f*v+d*E+p*S,r[8]=f*A+d*T+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(s*l-h*i)*g,e[2]=(o*i-s*a)*g,e[3]=f*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ko=new ct,wh=new ct().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Eh=new ct().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function vp(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,a,o){if(this.enabled===!1||a===o||!a||!o)return r;if(this.spaces[a].transfer==="srgb")r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b);if(this.spaces[a].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b);return r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r==="")return"linear";return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],s=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:s,transfer:"linear",toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:s,transfer:"srgb",toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var At=vp();function bi(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function zs(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ws;class gl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(ws===void 0)ws=Hs("canvas");ws.width=e.width,ws.height=e.height;let s=ws.getContext("2d");if(e instanceof ImageData)s.putImageData(e,0,0);else s.drawImage(e,0,0,e.width,e.height);i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(bi(t[i]/255)*255);else t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var yp=0;class Br{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)if(s[a].isDataTexture)r.push(zo(s[a].image));else r.push(zo(s[a]))}else r=zo(s);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function zo(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return gl.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return $e("Texture: Unable to serialize Texture."),{}}var Mp=0,Ho=new P;class Kt extends vi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=Kt.DEFAULT_ANISOTROPY,h=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Dn(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}if(s&&i&&(s.isVector2&&i.isVector2))s.copy(i);else if(s&&i&&(s.isVector3&&i.isVector3))s.copy(i);else if(s&&i&&(s.isMatrix3&&i.isMatrix3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=300;Kt.DEFAULT_ANISOTROPY=1;class Pt{static{Pt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=0.01,o=0.1,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],g=c[2],v=c[6],A=c[10];if(Math.abs(h-f)<0.01&&Math.abs(u-g)<0.01&&Math.abs(p-v)<0.01){if(Math.abs(h+f)<0.1&&Math.abs(u+g)<0.1&&Math.abs(p+v)<0.1&&Math.abs(l+d+A-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,T=(d+1)/2,b=(A+1)/2,S=(h+f)/4,R=(u+g)/4,C=(p+v)/4;if(E>T&&E>b)if(E<0.01)i=0,s=0.707106781,r=0.707106781;else i=Math.sqrt(E),s=S/i,r=R/i;else if(T>b)if(T<0.01)i=0.707106781,s=0,r=0.707106781;else s=Math.sqrt(T),i=S/s,r=C/s;else if(b<0.01)i=0.707106781,s=0.707106781,r=0;else r=Math.sqrt(b),i=R/r,s=C/r;return this.set(i,s,r,t),this}let m=Math.sqrt((v-p)*(v-p)+(u-g)*(u-g)+(f-h)*(f-h));if(Math.abs(m)<0.001)m=1;return this.x=(v-p)/m,this.y=(u-g)/m,this.z=(f-h)/m,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bl extends vi{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Kt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)if(this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0)this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends bl{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class no extends Kt{constructor(e=null,t=1,i=1,s=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xl extends Kt{constructor(e=null,t=1,i=1,s=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class nt{static{nt.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,h,u,f,d,p,g,v){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,s,r,a,o,c,l,h,u,f,d,p,g,v)}set(e,t,i,s,r,a,o,c,l,h,u,f,d,p,g,v){let A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=u,A[14]=f,A[3]=d,A[7]=p,A[11]=g,A[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:s,z:r}=e,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,p=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,g=l*u;t[0]=f+g*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,g=l*u;t[0]=f-g*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,p=o*h,g=o*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+g,t[1]=c*u,t[5]=g*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=g-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-g*u}else if(e.order==="XZY"){let f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+g,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,wp)}lookAt(e,t,i){let s=this.elements;if(_n.subVectors(e,t),_n.lengthSq()===0)_n.z=1;if(_n.normalize(),Ii.crossVectors(i,_n),Ii.lengthSq()===0){if(Math.abs(i.z)===1)_n.x+=0.0001;else _n.z+=0.0001;_n.normalize(),Ii.crossVectors(i,_n)}return Ii.normalize(),oa.crossVectors(_n,Ii),s[0]=Ii.x,s[4]=oa.x,s[8]=_n.x,s[1]=Ii.y,s[5]=oa.y,s[9]=_n.y,s[2]=Ii.z,s[6]=oa.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],g=i[6],v=i[10],A=i[14],m=i[3],E=i[7],T=i[11],b=i[15],S=s[0],R=s[4],C=s[8],_=s[12],M=s[1],B=s[5],D=s[9],F=s[13],G=s[2],L=s[6],W=s[10],ee=s[14],V=s[3],H=s[7],k=s[11],N=s[15];return r[0]=a*S+o*M+c*G+l*V,r[4]=a*R+o*B+c*L+l*H,r[8]=a*C+o*D+c*W+l*k,r[12]=a*_+o*F+c*ee+l*N,r[1]=h*S+u*M+f*G+d*V,r[5]=h*R+u*B+f*L+d*H,r[9]=h*C+u*D+f*W+d*k,r[13]=h*_+u*F+f*ee+d*N,r[2]=p*S+g*M+v*G+A*V,r[6]=p*R+g*B+v*L+A*H,r[10]=p*C+g*D+v*W+A*k,r[14]=p*_+g*F+v*ee+A*N,r[3]=m*S+E*M+T*G+b*V,r[7]=m*R+E*B+T*L+b*H,r[11]=m*C+E*D+T*W+b*k,r[15]=m*_+E*F+T*ee+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],g=e[7],v=e[11],A=e[15],m=c*d-l*f,E=o*d-l*u,T=o*f-c*u,b=a*d-l*h,S=a*f-c*h,R=a*u-o*h;return t*(g*m-v*E+A*T)-i*(p*m-v*b+A*S)+s*(p*E-g*b+A*R)-r*(p*T-g*S+v*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;if(e.isVector3)s[12]=e.x,s[13]=e.y,s[14]=e.z;else s[12]=e,s[13]=t,s[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],g=e[13],v=e[14],A=e[15],m=t*o-i*a,E=t*c-s*a,T=t*l-r*a,b=i*c-s*o,S=i*l-r*o,R=s*l-r*c,C=h*g-u*p,_=h*v-f*p,M=h*A-d*p,B=u*v-f*g,D=u*A-d*g,F=f*A-d*v,G=m*F-E*D+T*B+b*M-S*_+R*C;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/G;return e[0]=(o*F-c*D+l*B)*L,e[1]=(s*D-i*F-r*B)*L,e[2]=(g*R-v*S+A*b)*L,e[3]=(f*S-u*R-d*b)*L,e[4]=(c*M-a*F-l*_)*L,e[5]=(t*F-s*M+r*_)*L,e[6]=(v*T-p*R-A*E)*L,e[7]=(h*R-f*T+d*E)*L,e[8]=(a*D-o*M+l*C)*L,e[9]=(i*M-t*D-r*C)*L,e[10]=(p*S-g*T+A*m)*L,e[11]=(u*T-h*S-d*m)*L,e[12]=(o*_-a*B-c*C)*L,e[13]=(t*B-i*_+s*C)*L,e[14]=(g*E-p*b-v*m)*L,e[15]=(h*b-u*E+f*m)*L,this}scale(e){let t=this.elements,{x:i,y:s,z:r}=e;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,{x:a,y:o,z:c}=e,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,{_x:r,_y:a,_z:o,_w:c}=t,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,p=r*u,g=a*h,v=a*u,A=o*u,m=c*l,E=c*h,T=c*u,{x:b,y:S,z:R}=i;return s[0]=(1-(g+A))*b,s[1]=(d+T)*b,s[2]=(p-E)*b,s[3]=0,s[4]=(d-T)*S,s[5]=(1-(f+A))*S,s[6]=(v+m)*S,s[7]=0,s[8]=(p+E)*R,s[9]=(v-m)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),c=Es.set(s[8],s[9],s[10]).length();if(r<0)a=-a;Hn.copy(this);let l=1/a,h=1/o,u=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=2000,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===2000)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===2001)p=-a/(a-r),g=-a*r/(a-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2000,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===2000)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===2001)p=-1/(a-r),g=-r/(a-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Es=new P,Hn=new nt,Sp=new P(0,0,0),wp=new P(1,1,1),Ii=new P,oa=new P,_n=new P,Th=new nt,Rh=new Fn;class xi{constructor(e=0,t=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":if(this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<0.9999999)this._y=Math.atan2(o,d),this._z=Math.atan2(c,l);else this._y=Math.atan2(-u,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l);else this._y=0,this._z=Math.atan2(c,r);break;case"ZYX":if(this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,d),this._z=Math.atan2(c,r);else this._x=0,this._z=Math.atan2(-a,l);break;case"YZX":if(this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<0.9999999)this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r);else this._x=0,this._y=Math.atan2(o,d);break;case"XZY":if(this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-h,d),this._y=0;break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Ep=0,Ch=new P,Ts=new Fn,di=new nt,ca=new P,gr=new P,Tp=new P,Rp=new Fn,Ph=new P(1,0,0),Ih=new P(0,1,0),Dh=new P(0,0,1),Lh={type:"added"},Cp={type:"removed"},Rs={type:"childadded",child:null},Go={type:"childremoved",child:null};class Ut extends vi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();let e=new P,t=new xi,i=new Fn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ct}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)ca.copy(e);else ca.set(e,t,i);let s=this.parent;if(this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)di.lookAt(gr,ca,this.up);else di.lookAt(ca,gr,this.up);if(this.quaternion.setFromRotationMatrix(di),s)di.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(di),this.quaternion.premultiply(Ts.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return rt("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null;else rt("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),Go.child=e,this.dispatchEvent(Go),Go.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld);return e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:s}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null)s.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let s={};if(s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)s.userData=this.userData;if(s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null)s.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)s.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)s.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map((o)=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)s.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)s.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)s.boundingBox=this.boundingBox.toJSON()}function r(o,c){if(o[c.uuid]===void 0)o[c.uuid]=c.toJSON(e);return c.uuid}if(this.isScene){if(this.background){if(this.background.isColor)s.background=this.background.toJSON();else if(this.background.isTexture)s.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)s.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh){if(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);if(o.length>0)i.geometries=o;if(c.length>0)i.materials=c;if(l.length>0)i.textures=l;if(h.length>0)i.images=h;if(u.length>0)i.shapes=u;if(f.length>0)i.skeletons=f;if(d.length>0)i.animations=d;if(p.length>0)i.nodes=p}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lt extends Ut{constructor(){super();this.isGroup=!0,this.type="Group"}}var Pp={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,i),A=this._getHandJoint(l,g);if(v!==null)A.matrix.fromArray(v.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=v.radius;A.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=0.02,p=0.005;if(l.inputState.pinching&&f>d+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=d-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(c!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity)c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity);else c.hasLinearVelocity=!1;if(r.angularVelocity)c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity);else c.hasAngularVelocity=!1;if(c.eventsEnabled)c.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null)s=r;if(s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Pp)}}}if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;if(l!==null)l.visible=a!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},la={h:0,s:0,l:0};function Vo(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;if(s&&s.isColor)this.copy(s);else if(typeof s==="number")this.setHex(s);else if(typeof s==="string")this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=ml(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Vo(a,r,e+0.3333333333333333),this.g=Vo(a,r,e),this.b=Vo(a,r,e-0.3333333333333333)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t="srgb"){function i(r){if(r===void 0)return;if(parseFloat(r)<1)$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(a===6)return this.setHex(parseInt(r,16),t);else $e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=ad[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else $e("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return At.workingToColorSpace(ln.copy(this),e),Math.round(gt(ln.r*255,0,255))*65536+Math.round(gt(ln.g*255,0,255))*256+Math.round(gt(ln.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(ln.copy(this),t);let{r:i,g:s,b:r}=ln,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=0.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e="srgb"){At.workingToColorSpace(ln.copy(this),e);let{r:t,g:i,b:s}=ln;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(la);let i=Er(Di.h,la.h,t),s=Er(Di.s,la.s,t),r=Er(Di.l,la.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ln=new Oe;Oe.NAMES=ad;class so extends Ut{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Gn=new P,fi=new P,Wo=new P,pi=new P,Cs=new P,Ps=new P,Fh=new P,qo=new P,Xo=new P,jo=new P,Ko=new Pt,Yo=new Pt,Jo=new Pt;class yn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();if(r>0)return s.multiplyScalar(1/Math.sqrt(r));return s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),fi.subVectors(i,t),Wo.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(fi),c=Gn.dot(Wo),l=fi.dot(fi),h=fi.dot(Wo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){if(this.getBarycoord(e,t,i,s,pi)===null)return!1;return pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){if(this.getBarycoord(e,t,i,s,pi)===null){if(c.x=0,c.y=0,"z"in c)c.z=0;if("w"in c)c.w=0;return null}return c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c}static getInterpolatedAttribute(e,t,i,s,r,a){return Ko.setScalar(0),Yo.setScalar(0),Jo.setScalar(0),Ko.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,i),Jo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),fi.subVectors(e,t),Gn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Gn.cross(fi).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Cs.subVectors(s,i),Ps.subVectors(r,i),qo.subVectors(e,i);let c=Cs.dot(qo),l=Ps.dot(qo);if(c<=0&&l<=0)return t.copy(i);Xo.subVectors(e,s);let h=Cs.dot(Xo),u=Ps.dot(Xo);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Cs,a);jo.subVectors(e,r);let d=Cs.dot(jo),p=Ps.dot(jo);if(p>=0&&d<=p)return t.copy(r);let g=d*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(Ps,o);let v=h*p-d*u;if(v<=0&&u-h>=0&&d-p>=0)return Fh.subVectors(r,s),o=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Fh,o);let A=1/(v+g+f);return a=g*A,o=f*A,t.copy(i).addScaledVector(Cs,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++){if(e.isMesh===!0)e.getVertexPosition(a,Vn);else Vn.fromBufferAttribute(r,a);Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();ha.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();ha.copy(i.boundingBox)}ha.applyMatrix4(e.matrixWorld),this.union(ha)}}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ua.subVectors(this.max,br),Is.subVectors(e.a,br),Ds.subVectors(e.b,br),Ls.subVectors(e.c,br),Li.subVectors(Ds,Is),Fi.subVectors(Ls,Ds),Yi.subVectors(Is,Ls);let t=[0,-Li.z,Li.y,0,-Fi.z,Fi.y,0,-Yi.z,Yi.y,Li.z,0,-Li.x,Fi.z,0,-Fi.x,Yi.z,0,-Yi.x,-Li.y,Li.x,0,-Fi.y,Fi.x,0,-Yi.y,Yi.x,0];if(!Zo(t,Is,Ds,Ls,ua))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Is,Ds,Ls,ua))return!1;return da.crossVectors(Li,Fi),t=[da.x,da.y,da.z],Zo(t,Is,Ds,Ls,ua)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Vn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var mi=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,ha=new Nn,Is=new P,Ds=new P,Ls=new P,Li=new P,Fi=new P,Yi=new P,br=new P,ua=new P,da=new P,Ji=new P;function Zo(e,t,i,s,r){for(let a=0,o=e.length-3;a<=o;a+=3){Ji.fromArray(e,a);let c=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=t.dot(Ji),h=i.dot(Ji),u=s.dot(Ji);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>c)return!1}return!0}var jt=new P,fa=new Fe,Ip=0;class ot extends vi{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=Wn(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=Ct(i,this.array);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=Wn(t,this.array);return t}setX(e,t){if(this.normalized)t=Ct(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=Wn(t,this.array);return t}setY(e,t){if(this.normalized)t=Ct(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=Wn(t,this.array);return t}setZ(e,t){if(this.normalized)t=Ct(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=Wn(t,this.array);return t}setW(e,t){if(this.normalized)t=Ct(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){if(e*=this.itemSize,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e*=this.itemSize,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ro extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ao extends ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Dp=new Nn,xr=new P,$o=new P;class Yt{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*0.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else $o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add($o)),this.expandByPoint(xr.copy(e.center).sub($o));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Lp=0,In=new nt,Qo=new Ut,Fs=new P,vn=new Nn,_r=new Nn,nn=new P;class it extends vi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((ip(e))?ao:ro)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;if(s!==void 0)s.transformDirection(e),s.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}if(e.length>t.count)$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Nn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];if(vn.setFromBufferAttribute(r),this.morphTargetsRelative)nn.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(nn);else this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Yt;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];if(_r.setFromBufferAttribute(o),this.morphTargetsRelative)nn.addVectors(vn.min,_r.min),vn.expandByPoint(nn),nn.addVectors(vn.max,_r.max),vn.expandByPoint(nn);else vn.expandByPoint(_r.min),vn.expandByPoint(_r.max)}vn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++){if(nn.fromBufferAttribute(o,l),c)Fs.fromBufferAttribute(e,l),nn.add(Fs);s=Math.max(s,i.distanceToSquared(nn))}}if(this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius))rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:s,uv:r}=t,a=this.getAttribute("tangent");if(a===void 0||a.count!==i.count)a=new ot(new Float32Array(4*i.count),4),this.setAttribute("tangent",a);let o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new P,c[C]=new P;let l=new P,h=new P,u=new P,f=new Fe,d=new Fe,p=new Fe,g=new P,v=new P;function A(C,_,M){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let B=1/(d.x*p.y-p.x*d.y);if(!isFinite(B))return;g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(B),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(B),o[C].add(g),o[_].add(g),o[M].add(g),c[C].add(v),c[_].add(v),c[M].add(v)}let m=this.groups;if(m.length===0)m=[{start:0,count:e.count}];for(let C=0,_=m.length;C<_;++C){let M=m[C],{start:B,count:D}=M;for(let F=B,G=B+D;F<G;F+=3)A(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new P,T=new P,b=new P,S=new P;function R(C){b.fromBufferAttribute(s,C),S.copy(b);let _=o[C];E.copy(_),E.sub(b.multiplyScalar(b.dot(_))).normalize(),T.crossVectors(S,_);let B=T.dot(c[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,B)}for(let C=0,_=m.length;C<_;++C){let M=m[C],{start:B,count:D}=M;for(let F=B,G=B+D;F<G;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){let{array:l,itemSize:h,normalized:u}=o,f=new l.constructor(c.length*h),d=0,p=0;for(let g=0,v=c.length;g<v;g++){if(o.isInterleavedBufferAttribute)d=c[g]*o.data.stride+o.offset;else d=c[g]*h;for(let A=0;A<h;A++)f[p++]=l[d++]}return new ot(f,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new it,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)if(c[l]!==void 0)e[l]=c[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}if(h.length>0)s[c]=h,r=!0}if(r)e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;if(a.length>0)e.data.groups=JSON.parse(JSON.stringify(a));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let c=e.boundingSphere;if(c!==null)this.boundingSphere=c.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Dn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Dn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}var dn=new P;class $s{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=Wn(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=Ct(i,this.array);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=Ct(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=Ct(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=Ct(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=Ct(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=Wn(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=Wn(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=Wn(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=Wn(t,this.array);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e=e*this.data.stride+this.offset,this.normalized)t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new $s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var ec=new P,Fp=new P,Np=new ct;class Jn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ec.subVectors(i,t).cross(Fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ec),r=this.normal.dot(s);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let a=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(a<0||a>1))return null;return t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Np.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Up=0;class Tn extends vi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(s&&s.isColor)s.set(i);else if(s&&s.isVector2&&(i&&i.isVector2)||s&&s.isEuler&&(i&&i.isEuler)||s&&s.isVector3&&(i&&i.isVector3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)i.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);if(r.length>0)i.textures=r;if(a.length>0)i.images=a}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Oe().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Jn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new Fe().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var Ai=new P,tc=new P,pa=new P,ma=new P;class Qs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e)}distanceSqToSegment(e,t,i,s){tc.copy(e).add(t).multiplyScalar(0.5),pa.copy(t).sub(e).normalize(),ma.copy(this.origin).sub(tc);let r=e.distanceTo(t)*0.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else if(f<=-p)u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l;else if(f<=p)u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l;else u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l;else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,u);if(s)s.copy(tc).addScaledVector(pa,f);return d}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;if(c<0)return null;if(o<0)return this.at(c,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l;if(h>=0)r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h;else r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h;if(i>a||r>s)return null;if(r>i||isNaN(i))i=r;if(a<s||isNaN(s))s=a;if(u>=0)o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u;else o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u;if(i>c||o>s)return null;if(o>i||i!==i)i=o;if(c<s||s!==s)s=c;if(s<0)return null;return this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,{x:c,y:l,z:h}=o,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,g=t.y-a.y,v=t.z-a.z,A=i.x-a.x,m=i.y-a.y,E=i.z-a.z,T=Math.abs(c),b=Math.abs(l),S=Math.abs(h),R,C,_,M,B,D,F,G,L,W,ee,V;if(T>=b&&T>=S)if(_=c,D=u,L=p,V=A,c>=0)R=l,C=h,M=f,B=d,F=g,G=v,W=m,ee=E;else R=h,C=l,M=d,B=f,F=v,G=g,W=E,ee=m;else if(b>=S)if(_=l,D=f,L=g,V=m,l>=0)R=h,C=c,M=d,B=u,F=v,G=p,W=E,ee=A;else R=c,C=h,M=u,B=d,F=p,G=v,W=A,ee=E;else if(_=h,D=d,L=v,V=E,h>=0)R=c,C=l,M=u,B=f,F=p,G=g,W=A,ee=m;else R=l,C=c,M=f,B=u,F=g,G=p,W=m,ee=A;if(_===0)return null;let H=R/_,k=C/_,N=1/_,ie=M-H*D,Ce=B-k*D,Me=F-H*L,et=G-k*L,We=W-H*V,Y=ee-k*V,ue=We*et-Y*Me,fe=ie*Y-Ce*We,Xe=Me*Ce-et*ie;if(s){if(ue<0||fe<0||Xe<0)return null}else if((ue<0||fe<0||Xe<0)&&(ue>0||fe>0||Xe>0))return null;let J=ue+fe+Xe;if(J===0)return null;let we=N*(ue*D+fe*L+Xe*V);if(J>0?we<0:we>0)return null;return this.at(we/J,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends Tn{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Nh=new nt,Zi=new Qs,Aa=new Yt,Uh=new P,ga=new P,ba=new P,xa=new P,nc=new P,_a=new P,Oh=new P,va=new P;class yt extends Ut{constructor(e=new it,t=new pn){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];if(h===0)continue;if(nc.fromBufferAttribute(u,e),a)_a.addScaledVector(nc,h);else _a.addScaledVector(nc.sub(t),h)}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),Aa.containsPoint(Zi.origin)===!1){if(Zi.intersectSphere(Aa,Uh)===null)return;if(Zi.origin.distanceToSquared(Uh)>(e.far-e.near)**2)return}if(Nh.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Nh),i.boundingBox!==null){if(Zi.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Zi)}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,{groups:f,drawRange:d}=r;if(o!==null)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){let v=f[p],A=a[v.materialIndex],m=Math.max(v.start,d.start),E=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let T=m,b=E;T<b;T+=3){let S=o.getX(T),R=o.getX(T+1),C=o.getX(T+2);if(s=ya(this,A,e,i,l,h,u,S,R,C),s)s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,A=g;v<A;v+=3){let m=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);if(s=ya(this,a,e,i,l,h,u,m,E,T),s)s.faceIndex=Math.floor(v/3),t.push(s)}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){let v=f[p],A=a[v.materialIndex],m=Math.max(v.start,d.start),E=Math.min(c.count,Math.min(v.start+v.count,d.start+d.count));for(let T=m,b=E;T<b;T+=3){let S=T,R=T+1,C=T+2;if(s=ya(this,A,e,i,l,h,u,S,R,C),s)s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let v=p,A=g;v<A;v+=3){let m=v,E=v+1,T=v+2;if(s=ya(this,a,e,i,l,h,u,m,E,T),s)s.faceIndex=Math.floor(v/3),t.push(s)}}}}function Op(e,t,i,s,r,a,o,c){let l;if(t.side===1)l=s.intersectTriangle(o,a,r,!0,c);else l=s.intersectTriangle(r,a,o,t.side===0,c);if(l===null)return null;va.copy(c),va.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(va);if(h<i.near||h>i.far)return null;return{distance:h,point:va.clone(),object:e}}function ya(e,t,i,s,r,a,o,c,l,h){e.getVertexPosition(c,ga),e.getVertexPosition(l,ba),e.getVertexPosition(h,xa);let u=Op(e,t,i,s,ga,ba,xa,Oh);if(u){let f=new P;if(yn.getBarycoord(Oh,ga,ba,xa,f),r)u.uv=yn.getInterpolatedAttribute(r,c,l,h,f,new Fe);if(a)u.uv1=yn.getInterpolatedAttribute(a,c,l,h,f,new Fe);if(o){if(u.normal=yn.getInterpolatedAttribute(o,c,l,h,f,new P),u.normal.dot(s.direction)>0)u.normal.multiplyScalar(-1)}let d={a:c,b:l,c:h,normal:new P,materialIndex:0};yn.getNormal(ga,ba,xa,d.normal),u.face=d,u.barycoord=f}return u}var vr=new Pt,Bh=new Pt,kh=new Pt,Bp=new Pt,zh=new nt,Ma=new P,ic=new Yt,Hh=new nt,sc=new Qs;class oo extends yt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new Nn;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Yt;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){if(super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){let i=this.material,s=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ic.copy(this.boundingSphere),ic.applyMatrix4(s),e.ray.intersectsSphere(ic)===!1)return;if(Hh.copy(s).invert(),sc.copy(e.ray).applyMatrix4(Hh),this.boundingBox!==null){if(sc.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,sc)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else $e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;if(Bh.fromBufferAttribute(s.attributes.skinIndex,e),kh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4)vr.copy(t),t.set(0,0,0,0);else vr.set(...t,1),t.set(0,0,0);vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=kh.getComponent(r);if(a!==0){let o=Bh.getComponent(r);zh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Bp.copy(vr).applyMatrix4(zh),a)}}if(t.isVector4)t.w=vr.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Hr extends Ut{constructor(){super();this.isBone=!0,this.type="Bone"}}class os extends Kt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=1003,h=1003,u,f){super(null,a,o,c,l,h,s,r,u,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Gh=new nt,kp=new nt;class Gr{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new nt;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:kp;Gh.multiplyMatrices(o,t[r]),Gh.toArray(i,r*16)}if(s!==null)s.needsUpdate=!0}clone(){return new Gr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new os(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];if(a===void 0)$e("Skeleton: No bone found with UUID:",r),a=new Hr;this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}}class Oi extends ot{constructor(e,t,i,s=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Ns=new nt,Vh=new nt,Sa=[],Wh=new Nn,zp=new nt,yr=new yt,Mr=new Yt;class co extends yt{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Nn;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Wh.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Wh)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Yt;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Mr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Mr)}copy(e,t){if(super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();if(this.count=e.count,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)===!1)return;for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),Vh.multiplyMatrices(i,Ns),yr.matrixWorld=Vh,yr.raycast(e,Sa);for(let a=0,o=Sa.length;a<o;a++){let c=Sa[a];c.instanceId=r,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;if(this.morphTexture===null)this.morphTexture=new os(new Float32Array(s*this.count),s,this.count,1028,1015);let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var $i=new Yt,Hp=new Fe(0.5,0.5),wa=new P;class Vr{constructor(e=new Jn,t=new Jn,i=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2000,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],A=r[11],m=r[12],E=r[13],T=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,A-p,b-m).normalize(),s[1].setComponents(l+a,d+h,A+p,b+m).normalize(),s[2].setComponents(l+o,d+u,A+g,b+E).normalize(),s[3].setComponents(l-o,d-u,A-g,b-E).normalize(),i)s[4].setComponents(c,f,v,T).normalize(),s[5].setComponents(l-c,d-f,A-v,b-T).normalize();else if(s[4].setComponents(l-c,d-f,A-v,b-T).normalize(),t===2000)s[5].setComponents(l+c,d+f,A+v,b+T).normalize();else if(t===2001)s[5].setComponents(c,f,v,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Hp.distanceTo(e.center);return $i.radius=0.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Un extends Tn{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Ba=new P,ka=new P,qh=new nt,Sr=new Qs,Ea=new Yt,rc=new P,Xh=new P;class er extends Ut{constructor(e=new it,t=new Un){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ba.distanceTo(ka);e.setAttribute("lineDistance",new Qe(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;qh.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p-1;g<v;g+=l){let A=h.getX(g),m=h.getX(g+1),E=Ta(this,e,Sr,c,A,m,g);if(E)t.push(E)}if(this.isLineLoop){let g=h.getX(p-1),v=h.getX(d),A=Ta(this,e,Sr,c,g,v,p-1);if(A)t.push(A)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,v=p-1;g<v;g+=l){let A=Ta(this,e,Sr,c,g,g+1,g);if(A)t.push(A)}if(this.isLineLoop){let g=Ta(this,e,Sr,c,p-1,d,p-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ta(e,t,i,s,r,a,o){let c=e.geometry.attributes.position;if(Ba.fromBufferAttribute(c,r),ka.fromBufferAttribute(c,a),i.distanceSqToSegment(Ba,ka,rc,Xh)>s)return;rc.applyMatrix4(e.matrixWorld);let h=t.ray.origin.distanceTo(rc);if(h<t.near||h>t.far)return;return{distance:h,point:Xh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var jh=new P,Kh=new P;class Jt extends er{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)jh.fromBufferAttribute(t,s),Kh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jh.distanceTo(Kh);e.setAttribute("lineDistance",new Qe(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends er{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Wr extends Tn{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Yh=new nt,dc=new Qs,Ra=new Yt,Ca=new P;class ki extends Ut{constructor(e=new it,t=new Wr){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Yh.copy(s).invert(),dc.copy(e.ray).applyMatrix4(Yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,g=d;p<g;p++){let v=l.getX(p);Ca.fromBufferAttribute(u,v),Jh(Ca,v,c,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,g=d;p<g;p++)Ca.fromBufferAttribute(u,p),Jh(Ca,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jh(e,t,i,s,r,a,o){let c=dc.distanceSqToPoint(e);if(c<i){let l=new P;dc.closestPointToPoint(e,l),l.applyMatrix4(s);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ho extends Kt{constructor(e=[],t=301,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cs extends Kt{constructor(e,t,i=1014,s,r,a,o=1003,c=1003,l,h=1026,u=1){if(h!==1026&&h!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _l extends cs{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uo extends Kt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends it{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function p(g,v,A,m,E,T,b,S,R,C,_){let M=T/R,B=b/C,D=T/2,F=b/2,G=S/2,L=R+1,W=C+1,ee=0,V=0,H=new P;for(let k=0;k<W;k++){let N=k*B-F;for(let ie=0;ie<L;ie++){let Ce=ie*M-D;H[g]=Ce*m,H[v]=N*E,H[A]=G,l.push(H.x,H.y,H.z),H[g]=0,H[v]=0,H[A]=S>0?1:-1,h.push(H.x,H.y,H.z),u.push(ie/R),u.push(1-k/C),ee+=1}}for(let k=0;k<C;k++)for(let N=0;N<R;N++){let ie=f+N+L*k,Ce=f+N+L*(k+1),Me=f+(N+1)+L*(k+1),et=f+(N+1)+L*k;c.push(ie,Ce,et),c.push(Ce,Me,et),V+=6}o.addGroup(d,V,_),d+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ls extends it{constructor(e=1,t=32,i=0,s=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new Fe;a.push(0,0,0),o.push(0,0,1),c.push(0.5,0.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tr extends it{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,g=[],v=i/2,A=0;if(m(),a===!1){if(e>0)E(!0);if(t>0)E(!1)}this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function m(){let T=new P,b=new P,S=0,R=(t-e)/i;for(let C=0;C<=r;C++){let _=[],M=C/r,B=M*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,G=F*c+o,L=Math.sin(G),W=Math.cos(G);b.x=B*L,b.y=-M*i+v,b.z=B*W,u.push(b.x,b.y,b.z),T.set(L,R,W).normalize(),f.push(T.x,T.y,T.z),d.push(F,1-M),_.push(p++)}g.push(_)}for(let C=0;C<s;C++)for(let _=0;_<r;_++){let M=g[_][C],B=g[_+1][C],D=g[_+1][C+1],F=g[_][C+1];if(e>0||_!==0)h.push(M,B,F),S+=3;if(t>0||_!==r-1)h.push(B,D,F),S+=3}l.addGroup(A,S,0),A+=S}function E(T){let b=p,S=new Fe,R=new P,C=0,_=T===!0?e:t,M=T===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,v*M,0),f.push(0,M,0),d.push(0.5,0.5),p++;let B=p;for(let D=0;D<=s;D++){let G=D/s*c+o,L=Math.cos(G),W=Math.sin(G);R.x=_*W,R.y=v*M,R.z=_*L,u.push(R.x,R.y,R.z),f.push(0,M,0),S.x=L*0.5+0.5,S.y=W*0.5*M+0.5,d.push(S.x,S.y),p++}for(let D=0;D<s;D++){let F=b+D,G=B+D;if(T===!0)h.push(G,G+1,F);else h.push(G+1,G,F);C+=3}l.addGroup(A,C,T===!0?1:2),A+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nr extends tr{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new nr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var Pa=new P,Ia=new P,ac=new P,Da=new yn;class qr extends it{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ks*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=[,,,],f={},d=[];for(let p=0;p<c;p+=3){if(a)l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:g,b:v,c:A}=Da;if(g.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),A.fromBufferAttribute(o,l[2]),Da.getNormal(ac),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[2]=`${Math.round(A.x*s)},${Math.round(A.y*s)},${Math.round(A.z*s)}`,u[0]===u[1]||u[1]===u[2]||u[2]===u[0])continue;for(let m=0;m<3;m++){let E=(m+1)%3,T=u[m],b=u[E],S=Da[h[m]],R=Da[h[E]],C=`${T}_${b}`,_=`${b}_${T}`;if(_ in f&&f[_]){if(ac.dot(f[_].normal)<=r)d.push(S.x,S.y,S.z),d.push(R.x,R.y,R.z);f[_]=null}else if(!(C in f))f[C]={index0:l[m],index1:l[E],normal:ac.clone()}}}for(let p in f)if(f[p]){let{index0:g,index1:v}=f[p];Pa.fromBufferAttribute(o,g),Ia.fromBufferAttribute(o,v),d.push(Pa.x,Pa.y,Pa.z),d.push(Ia.x,Ia.y,Ia.z)}this.setAttribute("position",new Qe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;if(t)a=t;else a=e*i[r-1];let o=0,c=r-1,l;while(o<=c)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-0.0001,r=e+0.0001;if(s<0)s=0;if(r>1)r=1;let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Fe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,c=new nt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);if(h<=l)l=h,i.set(1,0,0);if(u<=l)l=u,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(gt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(gt(r[0].dot(r[e]),-1,1));if(d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0)d=-d;for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xr extends On{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;while(r<0)r+=s;while(r>s)r-=s;if(r<Number.EPSILON)if(a)r=0;else r=s;if(this.aClockwise===!0&&!a)if(r===s)r=-s;else r=r-s;let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vl extends Xr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a);this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let e=0,t=0,i=0,s=0;function r(a,o,c,l){e=a,t=c,i=-3*a+3*o-2*c-l,s=2*a-2*o+c+l}return{initCatmullRom:function(a,o,c,l,h){r(o,c,h*(c-a),h*(l-o))},initNonuniformCatmullRom:function(a,o,c,l,h,u,f){let d=(o-a)/h-(c-a)/(h+u)+(c-o)/u,p=(c-o)/u-(l-o)/(u+f)+(l-c)/f;d*=u,p*=u,r(o,c,d,p)},calc:function(a){let o=a*a,c=o*a;return e+t*a+i*o+s*c}}}var Zh=new P,$h=new P,oc=new yl,cc=new yl,lc=new yl;class Ml extends On{constructor(e=[],t=!1,i="centripetal",s=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(c===0&&o===r-1)o=r-2,c=1;let l,h;if(this.closed||o>0)l=s[(o-1)%r];else $h.subVectors(s[0],s[1]).add(s[0]),l=$h;let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r)h=s[(o+2)%r];else Zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d);if(g<0.0001)g=1;if(p<0.0001)p=g;if(v<0.0001)v=g;oc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,g,v),cc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,g,v),lc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,g,v)}else if(this.curveType==="catmullrom")oc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),cc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),lc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension);return i.set(oc.calc(c),cc.calc(c),lc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(e,t,i,s,r){let a=(s-t)*0.5,o=(r-i)*0.5,c=e*e,l=e*c;return(2*i-2*s+a+o)*l+(-3*i+3*s-2*a-o)*c+a*e+i}function Gp(e,t){let i=1-e;return i*i*t}function Vp(e,t){return 2*(1-e)*e*t}function Wp(e,t){return e*e*t}function Tr(e,t,i,s){return Gp(e,t)+Vp(e,i)+Wp(e,s)}function qp(e,t){let i=1-e;return i*i*i*t}function Xp(e,t){let i=1-e;return 3*i*i*e*t}function jp(e,t){return 3*(1-e)*e*e*t}function Kp(e,t){return e*e*e*t}function Rr(e,t,i,s,r){return qp(e,t)+Xp(e,i)+jp(e,s)+Kp(e,r)}class fo extends On{constructor(e=new Fe,t=new Fe,i=new Fe,s=new Fe){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Fe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sl extends On{constructor(e=new P,t=new P,i=new P,s=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y),Rr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class po extends On{constructor(e=new Fe,t=new Fe){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wl extends On{constructor(e=new P,t=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mo extends On{constructor(e=new Fe,t=new Fe,i=new Fe){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class El extends On{constructor(e=new P,t=new P,i=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y),Tr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ao extends On{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Qh(o,c.x,l.x,h.x,u.x),Qh(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}}var eu=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:Ml,CubicBezierCurve:fo,CubicBezierCurve3:Sl,EllipseCurve:Xr,LineCurve:po,LineCurve3:wl,QuadraticBezierCurve:mo,QuadraticBezierCurve3:El,SplineCurve:Ao});class Tl extends On{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;while(r<s.length){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];if(i&&i.equals(h))continue;t.push(h),i=h}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new eu[s.type]().fromJSON(s))}return this}}class za extends Tl{constructor(e){super();if(this.type="Path",this.currentPoint=new Fe,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new po(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new mo(this.currentPoint.clone(),new Fe(e,t),new Fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new fo(this.currentPoint.clone(),new Fe(e,t),new Fe(i,s),new Fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ao(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Xr(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jr extends za{constructor(e){super(e);this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new za().fromJSON(s))}return this}}function Yp(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=od(e,0,r,i,!0),o=[];if(!a||a.next===a.prev)return o;let c,l,h;if(s)a=e1(e,t,a,i);if(e.length>80*i){c=e[0],l=e[1];let u=c,f=l;for(let d=i;d<r;d+=i){let p=e[d],g=e[d+1];if(p<c)c=p;if(g<l)l=g;if(p>u)u=p;if(g>f)f=g}h=Math.max(u-c,f-l),h=h!==0?32767/h:0}return Pr(a,o,i,c,l,h,0),o}function od(e,t,i,s,r){let a;if(r===u1(e,t,i,s)>0)for(let o=t;o<i;o+=s)a=tu(o/s|0,e[o],e[o+1],a);else for(let o=i-s;o>=t;o-=s)a=tu(o/s|0,e[o],e[o+1],a);if(a&&Vs(a,a.next))Dr(a),a=a.next;return a}function ts(e,t){if(!e)return e;if(!t)t=e;let i=e,s;do if(s=!1,!i.steiner&&(Vs(i,i.next)||zt(i.prev,i,i.next)===0)){if(Dr(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Pr(e,t,i,s,r,a,o){if(!e)return;if(!o&&a)r1(e,s,r,a);let c=e;while(e.prev!==e.next){let l=e.prev,h=e.next;if(a?Zp(e,s,r,a):Jp(e)){t.push(l.i,e.i,h.i),Dr(e),e=h.next,c=h.next;continue}if(e=h,e===c){if(!o)Pr(ts(e),t,i,s,r,a,1);else if(o===1)e=$p(ts(e),t),Pr(e,t,i,s,r,a,2);else if(o===2)Qp(e,t,i,s,r,a);break}}}function Jp(e){let t=e.prev,i=e,s=e.next;if(zt(t,i,s)>=0)return!1;let r=t.x,a=i.x,o=s.x,c=t.y,l=i.y,h=s.y,u=Math.min(r,a,o),f=Math.min(c,l,h),d=Math.max(r,a,o),p=Math.max(c,l,h),g=s.next;while(g!==t){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&wr(r,c,a,l,o,h,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zp(e,t,i,s){let r=e.prev,a=e,o=e.next;if(zt(r,a,o)>=0)return!1;let c=r.x,l=a.x,h=o.x,u=r.y,f=a.y,d=o.y,p=Math.min(c,l,h),g=Math.min(u,f,d),v=Math.max(c,l,h),A=Math.max(u,f,d),m=fc(p,g,t,i,s),E=fc(v,A,t,i,s),{prevZ:T,nextZ:b}=e;while(T&&T.z>=m&&b&&b.z<=E){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=A&&T!==r&&T!==o&&wr(c,u,l,f,h,d,T.x,T.y)&&zt(T.prev,T,T.next)>=0)return!1;if(T=T.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=A&&b!==r&&b!==o&&wr(c,u,l,f,h,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}while(T&&T.z>=m){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=A&&T!==r&&T!==o&&wr(c,u,l,f,h,d,T.x,T.y)&&zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}while(b&&b.z<=E){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=A&&b!==r&&b!==o&&wr(c,u,l,f,h,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $p(e,t){let i=e;do{let s=i.prev,r=i.next.next;if(!Vs(s,r)&&ld(s,i,i.next,r)&&Ir(s,r)&&Ir(r,s))t.push(s.i,i.i,r.i),Dr(i),Dr(i.next),i=e=r;i=i.next}while(i!==e);return ts(i)}function Qp(e,t,i,s,r,a){let o=e;do{let c=o.next.next;while(c!==o.prev){if(o.i!==c.i&&c1(o,c)){let l=hd(o,c);o=ts(o,o.next),l=ts(l,l.next),Pr(o,t,i,s,r,a,0),Pr(l,t,i,s,r,a,0);return}c=c.next}o=o.next}while(o!==e)}function e1(e,t,i,s){let r=[];for(let a=0,o=t.length;a<o;a++){let c=t[a]*s,l=a<o-1?t[a+1]*s:e.length,h=od(e,c,l,s,!1);if(h===h.next)h.steiner=!0;r.push(o1(h))}r.sort(t1);for(let a=0;a<r.length;a++)i=n1(r[a],i);return i}function t1(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}}return i}function n1(e,t){let i=i1(e,t);if(!i)return t;let s=hd(i,e);return ts(s,s.next),ts(i,i.next)}function i1(e,t){let i=t,{x:s,y:r}=e,a=-1/0,o;if(Vs(e,i))return i;do{if(Vs(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=s&&f>a){if(a=f,o=i.x<i.next.x?i:i.next,f===s)return o}}i=i.next}while(i!==t);if(!o)return null;let c=o,l=o.x,h=o.y,u=1/0;i=o;do{if(s>=i.x&&i.x>=l&&s!==i.x&&cd(r<h?s:a,r,l,h,r<h?a:s,r,i.x,i.y)){let f=Math.abs(r-i.y)/(s-i.x);if(Ir(i,e)&&(f<u||f===u&&(i.x>o.x||i.x===o.x&&s1(o,i))))o=i,u=f}i=i.next}while(i!==c);return o}function s1(e,t){return zt(e.prev,e,t.prev)<0&&zt(t.next,e,e.next)<0}function r1(e,t,i,s){let r=e;do{if(r.z===0)r.z=fc(r.x,r.y,t,i,s);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,a1(r)}function a1(e){let t,i=1;do{let s=e,r;e=null;let a=null;t=0;while(s){t++;let o=s,c=0;for(let h=0;h<i;h++)if(c++,o=o.nextZ,!o)break;let l=i;while(c>0||l>0&&o){if(c!==0&&(l===0||!o||s.z<=o.z))r=s,s=s.nextZ,c--;else r=o,o=o.nextZ,l--;if(a)a.nextZ=r;else e=r;r.prevZ=a,a=r}s=o}a.nextZ=null,i*=2}while(t>1);return e}function fc(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function o1(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function cd(e,t,i,s,r,a,o,c){return(r-o)*(t-c)>=(e-o)*(a-c)&&(e-o)*(s-c)>=(i-o)*(t-c)&&(i-o)*(a-c)>=(r-o)*(s-c)}function wr(e,t,i,s,r,a,o,c){return!(e===o&&t===c)&&cd(e,t,i,s,r,a,o,c)}function c1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!l1(e,t)&&(Ir(e,t)&&Ir(t,e)&&h1(e,t)&&(zt(e.prev,e,t.prev)||zt(e,t.prev,t))||Vs(e,t)&&zt(e.prev,e,e.next)>0&&zt(t.prev,t,t.next)>0)}function zt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Vs(e,t){return e.x===t.x&&e.y===t.y}function ld(e,t,i,s){let r=Fa(zt(e,t,i)),a=Fa(zt(e,t,s)),o=Fa(zt(i,s,e)),c=Fa(zt(i,s,t));if(r!==a&&o!==c)return!0;if(r===0&&La(e,i,t))return!0;if(a===0&&La(e,s,t))return!0;if(o===0&&La(i,e,s))return!0;if(c===0&&La(i,t,s))return!0;return!1}function La(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Fa(e){return e>0?1:e<0?-1:0}function l1(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&ld(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ir(e,t){return zt(e.prev,e,e.next)<0?zt(e,t,e.next)>=0&&zt(e,e.prev,t)>=0:zt(e,t,e.prev)<0||zt(e,e.next,t)<0}function h1(e,t){let i=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do{if(i.y>a!==i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x)s=!s;i=i.next}while(i!==e);return s}function hd(e,t){let i=pc(e.i,e.x,e.y),s=pc(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function tu(e,t,i,s){let r=pc(e,t,i);if(!s)r.prev=r,r.next=r;else r.next=s.next,r.prev=s,s.next.prev=r,s.next=r;return r}function Dr(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function pc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u1(e,t,i,s){let r=0;for(let a=t,o=i-s;a<i;a+=s)r+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return r}class ud{static triangulate(e,t,i=2){return Yp(e,t,i)}}class $n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*0.5}static isClockWise(e){return $n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];nu(e),iu(i,e);let a=e.length;t.forEach(nu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,iu(i,t[c]);let o=ud.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function nu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function iu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Bn extends it{constructor(e=1,t=1,i=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],p=[],g=[],v=[];for(let A=0;A<h;A++){let m=A*f-a;for(let E=0;E<l;E++){let T=E*u-r;p.push(T,-m,0),g.push(0,0,1),v.push(E/o),v.push(1-A/c)}}for(let A=0;A<c;A++)for(let m=0;m<o;m++){let E=m+l*A,T=m+l*(A+1),b=m+1+l*(A+1),S=m+1+l*A;d.push(E,T,S),d.push(T,b,S)}this.setIndex(d),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends it{constructor(e=new jr([new Fe(0,0.5),new Fe(-0.5,-0.5),new Fe(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(a,2));function l(h){let u=s.length/3,f=h.extractPoints(t),{shape:d,holes:p}=f;if($n.isClockWise(d)===!1)d=d.reverse();for(let v=0,A=p.length;v<A;v++){let m=p[v];if($n.isClockWise(m)===!0)p[v]=m.reverse()}let g=$n.triangulateShape(d,p);for(let v=0,A=p.length;v<A;v++){let m=p[v];d=d.concat(m)}for(let v=0,A=d.length;v<A;v++){let m=d[v];s.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let v=0,A=g.length;v<A;v++){let m=g[v],E=m[0]+u,T=m[1]+u,b=m[2]+u;i.push(E,T,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return d1(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new Kr(i,e.curveSegments)}}function d1(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class ir extends it{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,f=new P,d=[],p=[],g=[],v=[];for(let A=0;A<=i;A++){let m=[],E=A/i,T=a+E*o,b=e*Math.cos(T),S=Math.sqrt(e*e-b*b),R=0;if(A===0&&a===0)R=0.5/t;else if(A===i&&c===Math.PI)R=-0.5/t;for(let C=0;C<=t;C++){let _=C/t,M=s+_*r;u.x=-S*Math.cos(M),u.y=b,u.z=S*Math.sin(M),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),v.push(_+R,1-E),m.push(l++)}h.push(m)}for(let A=0;A<i;A++)for(let m=0;m<t;m++){let E=h[A][m+1],T=h[A][m],b=h[A+1][m],S=h[A+1][m+1];if(A!==0||a>0)d.push(E,T,S);if(A!==i-1||c<Math.PI)d.push(T,b,S)}this.setIndex(d),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function hs(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(su(r))if(r.isRenderTargetTexture)$e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null;else t[i][s]=r.clone();else if(Array.isArray(r))if(su(r[0])){let a=[];for(let o=0,c=r.length;o<c;o++)a[o]=r[o].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function hn(e){let t={};for(let i=0;i<e.length;i++){let s=hs(e[i]);for(let r in s)t[r]=s[r]}return t}function su(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function f1(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Rl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return At.workingColorSpace}var dd={clone:hs,merge:hn},p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Tn{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;if(a&&a.isTexture)t.uniforms[s]={type:"t",value:a.toJSON(e).uuid};else if(a&&a.isColor)t.uniforms[s]={type:"c",value:a.getHex()};else if(a&&a.isVector2)t.uniforms[s]={type:"v2",value:a.toArray()};else if(a&&a.isVector3)t.uniforms[s]={type:"v3",value:a.toArray()};else if(a&&a.isVector4)t.uniforms[s]={type:"v4",value:a.toArray()};else if(a&&a.isMatrix3)t.uniforms[s]={type:"m3",value:a.toArray()};else if(a&&a.isMatrix4)t.uniforms[s]={type:"m4",value:a.toArray()};else t.uniforms[s]={value:a}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)if(this.extensions[s]===!0)i[s]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[i].value=new nt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Cl extends Mt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends Tn{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends yi{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pl extends Tn{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Il extends Tn{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ui(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Oa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function A1(e){function t(r,a){return e[r]-e[a]}let i=e.length,s=Array(i);for(let r=0;r!==i;++r)s[r]=r;return s.sort(t),s}function ru(e,t,i){let s=e.length,r=new e.constructor(s);for(let a=0,o=0;o!==s;++a){let c=i[a]*t;for(let l=0;l!==t;++l)r[o++]=e[c+l]}return r}function g1(e,t,i,s){let r=1,a=e[0];while(a!==void 0&&a[s]===void 0)a=e[r++];if(a===void 0)return;let o=a[s];if(o===void 0)return;if(Array.isArray(o))do{if(o=a[s],o!==void 0)t.push(a.time),i.push(...o);a=e[r++]}while(a!==void 0);else if(o.toArray!==void 0)do{if(o=a[s],o!==void 0)t.push(a.time),o.toArray(i,i.length);a=e[r++]}while(a!==void 0);else do{if(o=a[s],o!==void 0)t.push(a.time),i.push(o);a=e[r++]}while(a!==void 0)}class Mi{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}while(i<a){let o=i+a>>>1;if(e<t[o])a=o;else i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Dl extends Mi{constructor(e,t,i,s){super(e,t,i,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-i;break;case 2402:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*i-t;break;case 2402:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*0.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),g=p*p,v=g*p,A=-f*v+2*f*g-f*p,m=(1+f)*v+(-1.5-2*f)*g+(-0.5+f)*p+1,E=(-1-d)*v+(1.5+d)*g+0.5*p,T=d*v-d*g;for(let b=0;b!==o;++b)r[b]=A*a[h+b]+m*a[l+b]+E*a[c+b]+T*a[u+b];return r}}class Ll extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class Fl extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nl extends Mi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),g=1-p;for(let v=0;v!==o;++v)r[v]=a[l+v]*g+a[c+v]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let g=a[l+p],v=a[c+p],A=d*f+p*2,m=u[A],E=u[A+1],T=e*f+p*2,b=h[T],S=h[T+1],R=x1(i,t,m,b,s);r[p]=fd(R,g,E,S,v)}return r}}function fd(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function b1(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function x1(e,t,i,s,r){let a=(e-t)/(r-t);for(let o=0;o<8;o++){let c=fd(a,t,i,s,r)-e;if(Math.abs(c)<0.0000000001)break;let l=b1(a,t,i,s,r);if(Math.abs(l)<0.0000000001)break;a=Math.max(0,Math.min(1,a-c/l))}return a}class Cn{constructor(e,t,i,s){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let s=e.getInterpolation();if(s!==e.DefaultInterpolation)i.interpolation=s;if(Oa(e.settings))i.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;if(Oa(this.settings))au(this.settings.inTangents,e),au(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;while(r!==s&&i[r]<e)++r;while(a!==-1&&i[a]>t)--a;if(++a,r!==0||a!==s){if(r>=a)a=Math.max(a,1),r=a-1;let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)rt("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,s=this.values,r=i.length;if(r===0)rt("KeyframeTrack: Track is empty.",this),e=!1;let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c==="number"&&isNaN(c)){rt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){rt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0){if(sp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(!s){let u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let g=t[u+p];if(g!==t[f+p]||g!==t[d+p]){c=!0;break}}}else c=!0;if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}if(a!==e.length)this.times=e.slice(0,a),this.values=t.slice(0,a*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),s=new this.constructor(this.name,e,t);if(s.createInterpolant=this.createInterpolant,Oa(this.settings))s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return s}}function au(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=2301;class zi extends Cn{constructor(e,t,i){super(e,t,i)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=2300;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Cn{constructor(e,t,i,s){super(e,t,i,s)}}go.prototype.ValueTypeName="color";class Hi extends Cn{constructor(e,t,i,s){super(e,t,i,s)}}Hi.prototype.ValueTypeName="number";class Ul extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Fn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Gi extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Vi extends Cn{constructor(e,t,i){super(e,t,i)}}Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=2300;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Cn{constructor(e,t,i,s){super(e,t,i,s)}}us.prototype.ValueTypeName="vector";class bo{constructor(e="",t=-1,i=[],s=2500){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(v1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=A1(c);if(c=ru(c,1,h),l=ru(l,1,h),!s&&c[0]===0)c.push(r),l.push(l[0]);a.push(new Hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];if(!f)s[u]=f=[];f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _1(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return go;case"quaternion":return Gi;case"bool":case"boolean":return zi;case"string":return Vi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function v1(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=_1(e.type);if(e.times===void 0){let s=[],r=[];g1(e.keys,s,r,"value"),e.times=s,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(Oa(e.settings))i.settings={inTangents:Ui(e.settings.inTangents,Float32Array),outTangents:Ui(e.settings.outTangents,Float32Array)};return i}var Zn={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(ou(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(ou(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ou(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Ol{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){if(o++,r===!1){if(s.onStart!==void 0)s.onStart(h,a,o)}r=!0},this.itemEnd=function(h){if(a++,s.onProgress!==void 0)s.onProgress(h,a,o);if(a===o){if(r=!1,s.onLoad!==void 0)s.onLoad()}},this.itemError=function(h){if(s.onError!==void 0)s.onError(h)},this.resolveURL=function(h){if(h=h.normalize("NFC"),c)return c(h);return h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global)d.lastIndex=0;if(d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var pd=new Ol;class Si{constructor(e){if(this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={};class md extends Error{constructor(e,t){super(e);this.response=t}}class Yr extends Si{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=Zn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:i,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)$e("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=gi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,g=0,v=new ReadableStream({start(A){m();function m(){u.read().then(({done:E,value:T})=>{if(E)A.close();else{g+=T.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let S=0,R=h.length;S<R;S++){let C=h[S];if(C.onProgress)C.onProgress(b)}A.enqueue(T),m()}},(E)=>{A.error(E)})}}});return new Response(v)}else throw new md(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h)=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();else{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then((p)=>d.decode(p))}}}).then((l)=>{Zn.add(`file:${e}`,l);let h=gi[e];delete gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];if(d.onLoad)d.onLoad(l)}}).catch((l)=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];if(d.onError)d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Us=new WeakMap;class Bl extends Si{constructor(e){super(e)}load(e,t,i,s){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);else{let u=Us.get(a);if(u===void 0)u=[],Us.set(a,u);u.push({onLoad:t,onError:s})}return a}let o=Hs("img");function c(){if(h(),t)t(this);let u=Us.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];if(d.onLoad)d.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function l(u){if(h(),s)s(u);Zn.remove(`image:${e}`);let f=Us.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];if(p.onError)p.onError(u)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Wi extends Si{constructor(e){super(e)}load(e,t,i,s){let r=new Kt,a=new Bl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,s),r}}class sr extends Ut{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class xo extends sr{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var hc=new nt,cu=new P,lu=new P;class Jr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;if(e.coordinateSystem===2001||e.reversedDepth)t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Na=new P,Ua=new Fn,Yn=new P;class _o extends Ut{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Na,Ua,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Na,Ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Na,Ua,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Ni=new P,hu=new Fe,uu=new Fe;class Qt extends _o{constructor(e=50,t=1,i=0.1,s=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(ks*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,i,s,r,a){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*0.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-0.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:c,fullHeight:l}=a;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ad extends Jr{constructor(){super(new Qt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||s!==t.aspect||r!==t.far)t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vo extends sr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ad}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class gd extends Jr{constructor(){super(new Qt(90,1,0.5,500));this.isPointLightShadow=!0}}class rr extends sr{constructor(e,t,i=0,s=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ds extends _o{constructor(e=-1,t=1,i=1,s=-1,r=0.1,a=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class bd extends Jr{constructor(){super(new ds(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class fs extends sr{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new bd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qi{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var uc=new WeakMap;class yo extends Si{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")$e("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")$e("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then((l)=>{if(uc.has(a)===!0){if(s)s(uc.get(a));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(Zn.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(s)s(l);uc.set(c,l),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Os=-90,Bs=1;class kl extends Ut{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Os,Bs,e,t);r.layers=this.layers,this.add(r);let a=new Qt(Os,Bs,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Os,Bs,e,t);o.layers=this.layers,this.add(o);let c=new Qt(Os,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Os,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===2000)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;if(e.isWebGLRenderer===!0)v=e.state.buffers.depth.getReversed();else v=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,s),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,s),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,2,s),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,s),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,c),e.setRenderTarget(i,4,s),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),v&&e.autoClear===!1)e.clearDepth();e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class zl extends Qt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}var Hl="\\[\\]\\.:\\/",y1=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",M1="[^"+Hl.replace("\\.","")+"]",S1=/((?:WC+[\/:])*)/.source.replace("WC",Gl),w1=/(WCOD+)?/.source.replace("WCOD",M1),E1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),R1=new RegExp("^"+S1+w1+E1+T1+"$"),C1=["material","materials","bones","map"];class xd{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];if(s!==void 0)s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Tt{constructor(e,t,i){this.path=t,this.parsedPath=i||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Tt(e,t,i);else return new Tt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y1,"")}static parseTrackName(e){let t=R1.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);if(C1.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,s),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:s,propertyIndex:r}=t;if(!e)e=Tt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else if(a.fromArray!==void 0&&a.toArray!==void 0)c=this.BindingType.HasFromToArray,this.resolvedProperty=a;else if(Array.isArray(a))c=this.BindingType.EntireArray,this.resolvedProperty=a;else this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=xd;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j3=new Float32Array(1);class Vl{static{Vl.prototype.isMatrix2=!0}constructor(e,t,i,s){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}function Wl(e,t,i,s){let r=P1(s);switch(i){case 1021:return e*t;case 1028:return e*t/r.components*r.byteLength;case 1029:return e*t/r.components*r.byteLength;case 1030:return e*t*2/r.components*r.byteLength;case 1031:return e*t*2/r.components*r.byteLength;case 1022:return e*t*3/r.components*r.byteLength;case 1023:return e*t*4/r.components*r.byteLength;case 1033:return e*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function P1(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)$e("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Hd(){let e=null,t=!1,i=null,s=null;function r(a,o){s=e.requestAnimationFrame(r),i(a,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;s=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(s);t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function I1(e){let t=new WeakMap;function i(c,l){let{array:h,usage:u}=c,f=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,u),c.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,l,h){let{array:u,updateRanges:f}=l;if(e.bindBuffer(h,c),f.length===0)e.bufferSubData(h,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],v=f[p];if(v.start<=g.start+g.count+1)g.count=Math.max(g.count,v.start+v.count-g.start);else++d,f[d]=v}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];e.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){if(c.isInterleavedBufferAttribute)c=c.data;return t.get(c)}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;let l=t.get(c);if(l)e.deleteBuffer(l.buffer),t.delete(c)}function o(c,l){if(c.isInterleavedBufferAttribute)c=c.data;if(c.isGLBufferAttribute){let u=t.get(c);if(!u||u.version<c.version)t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,i(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,l),h.version=c.version}}return{get:r,remove:a,update:o}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,S0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:D1,alphahash_pars_fragment:L1,alphamap_fragment:F1,alphamap_pars_fragment:N1,alphatest_fragment:U1,alphatest_pars_fragment:O1,aomap_fragment:B1,aomap_pars_fragment:k1,batching_pars_vertex:z1,batching_vertex:H1,begin_vertex:G1,beginnormal_vertex:V1,bsdfs:W1,iridescence_fragment:q1,bumpmap_pars_fragment:X1,clipping_planes_fragment:j1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:J1,color_fragment:Z1,color_pars_fragment:$1,color_pars_vertex:Q1,color_vertex:e0,common:t0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:i0,displacementmap_pars_vertex:s0,displacementmap_vertex:r0,emissivemap_fragment:a0,emissivemap_pars_fragment:o0,colorspace_fragment:c0,colorspace_pars_fragment:l0,envmap_fragment:h0,envmap_common_pars_fragment:u0,envmap_pars_fragment:d0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:S0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:A0,fog_fragment:g0,fog_pars_fragment:b0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:w0,lights_toon_pars_fragment:E0,lights_phong_fragment:T0,lights_phong_pars_fragment:R0,lights_physical_fragment:C0,lights_physical_pars_fragment:P0,lights_fragment_begin:I0,lights_fragment_maps:D0,lights_fragment_end:L0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:O0,logdepthbuf_vertex:B0,map_fragment:k0,map_pars_fragment:z0,map_particle_fragment:H0,map_particle_pars_fragment:G0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:W0,morphinstance_vertex:q0,morphcolor_vertex:X0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:Y0,normal_fragment_begin:J0,normal_fragment_maps:Z0,normal_pars_fragment:$0,normal_pars_vertex:Q0,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:cm,project_vertex:lm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:Am,shadowmask_pars_fragment:gm,skinbase_vertex:bm,skinning_pars_vertex:xm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:wm,transmission_fragment:Em,transmission_pars_fragment:Tm,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Im,background_vert:Dm,background_frag:Lm,backgroundCube_vert:Fm,backgroundCube_frag:Nm,cube_vert:Um,cube_frag:Om,depth_vert:Bm,depth_frag:km,distance_vert:zm,distance_frag:Hm,equirect_vert:Gm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:qm,meshbasic_vert:Xm,meshbasic_frag:jm,meshlambert_vert:Km,meshlambert_frag:Ym,meshmatcap_vert:Jm,meshmatcap_frag:Zm,meshnormal_vert:$m,meshnormal_frag:Qm,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:sA,meshtoon_frag:rA,points_vert:aA,points_frag:oA,shadow_vert:cA,shadow_frag:lA,sprite_vert:hA,sprite_frag:uA},Ne={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Fe(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ci={basic:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:hn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:hn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:hn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:hn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:hn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:hn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:hn([Ne.common,Ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:hn([Ne.lights,Ne.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Mo={r:0,b:0,g:0},dA=new nt,Gd=new ct;Gd.set(-1,0,0,0,1,0,0,0,1);function fA(e,t,i,s,r,a){let o=new Oe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let b=E.backgroundBlurriness>0;T=t.get(T,b)}return T}function g(E){let T=!1,b=p(E);if(b===null)A(o,c);else if(b&&b.isColor)A(b,1),T=!0;let S=e.xr.getEnvironmentBlendMode();if(S==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(S==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||T)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function v(E,T){let b=p(T);if(b&&(b.isCubeTexture||b.mapping===Nr)){if(h===void 0)h=new yt(new ai(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:hs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1)h.material.uniforms.backgroundRotation.value.premultiply(Gd);if(h.material.toneMapped=At.getTransfer(b.colorSpace)!==Ft,u!==b||f!==b.version||d!==e.toneMapping)h.material.needsUpdate=!0,u=b,f=b.version,d=e.toneMapping;h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new yt(new Bn(2,2),new Mt({name:"BackgroundMaterial",uniforms:hs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=At.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),u!==b||f!==b.version||d!==e.toneMapping)l.material.needsUpdate=!0,u=b,f=b.version,d=e.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function A(E,T){E.getRGB(Mo,Rl(e)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,T,a)}function m(){if(h!==void 0)h.geometry.dispose(),h.material.dispose(),h=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),c=T,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,A(o,c)},render:g,addToRenderList:v,dispose:m}}function pA(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=d(null),a=r,o=!1;function c(D,F,G,L,W){let ee=!1,V=f(D,L,G,F);if(a!==V)a=V,h(a.object);if(ee=p(D,L,G,W),ee)g(D,L,G,W);if(W!==null)t.update(W,e.ELEMENT_ARRAY_BUFFER);if(ee||o){if(o=!1,b(D,F,G,L),W!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer)}}function l(){return e.createVertexArray()}function h(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function f(D,F,G,L){let W=L.wireframe===!0,ee=s[F.id];if(ee===void 0)ee={},s[F.id]=ee;let V=D.isInstancedMesh===!0?D.id:0,H=ee[V];if(H===void 0)H={},ee[V]=H;let k=H[G.id];if(k===void 0)k={},H[G.id]=k;let N=k[W];if(N===void 0)N=d(l()),k[W]=N;return N}function d(D){let F=[],G=[],L=[];for(let W=0;W<i;W++)F[W]=0,G[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:D,attributes:{},index:null}}function p(D,F,G,L){let W=a.attributes,ee=F.attributes,V=0,H=G.getAttributes();for(let k in H)if(H[k].location>=0){let ie=W[k],Ce=ee[k];if(Ce===void 0){if(k==="instanceMatrix"&&D.instanceMatrix)Ce=D.instanceMatrix;if(k==="instanceColor"&&D.instanceColor)Ce=D.instanceColor}if(ie===void 0)return!0;if(ie.attribute!==Ce)return!0;if(Ce&&ie.data!==Ce.data)return!0;V++}if(a.attributesNum!==V)return!0;if(a.index!==L)return!0;return!1}function g(D,F,G,L){let W={},ee=F.attributes,V=0,H=G.getAttributes();for(let k in H)if(H[k].location>=0){let ie=ee[k];if(ie===void 0){if(k==="instanceMatrix"&&D.instanceMatrix)ie=D.instanceMatrix;if(k==="instanceColor"&&D.instanceColor)ie=D.instanceColor}let Ce={};if(Ce.attribute=ie,ie&&ie.data)Ce.data=ie.data;W[k]=Ce,V++}a.attributes=W,a.attributesNum=V,a.index=L}function v(){let D=a.newAttributes;for(let F=0,G=D.length;F<G;F++)D[F]=0}function A(D){m(D,0)}function m(D,F){let G=a.newAttributes,L=a.enabledAttributes,W=a.attributeDivisors;if(G[D]=1,L[D]===0)e.enableVertexAttribArray(D),L[D]=1;if(W[D]!==F)e.vertexAttribDivisor(D,F),W[D]=F}function E(){let D=a.newAttributes,F=a.enabledAttributes;for(let G=0,L=F.length;G<L;G++)if(F[G]!==D[G])e.disableVertexAttribArray(G),F[G]=0}function T(D,F,G,L,W,ee,V){if(V===!0)e.vertexAttribIPointer(D,F,G,W,ee);else e.vertexAttribPointer(D,F,G,L,W,ee)}function b(D,F,G,L){v();let W=L.attributes,ee=G.getAttributes(),V=F.defaultAttributeValues;for(let H in ee){let k=ee[H];if(k.location>=0){let N=W[H];if(N===void 0){if(H==="instanceMatrix"&&D.instanceMatrix)N=D.instanceMatrix;if(H==="instanceColor"&&D.instanceColor)N=D.instanceColor}if(N!==void 0){let ie=N.normalized,Ce=N.itemSize,Me=t.get(N);if(Me===void 0)continue;let{buffer:et,type:We,bytesPerElement:Y}=Me,ue=We===e.INT||We===e.UNSIGNED_INT||N.gpuType===Ec;if(N.isInterleavedBufferAttribute){let fe=N.data,Xe=fe.stride,J=N.offset;if(fe.isInstancedInterleavedBuffer){for(let we=0;we<k.locationSize;we++)m(k.location+we,fe.meshPerAttribute);if(D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=fe.meshPerAttribute*fe.count}else for(let we=0;we<k.locationSize;we++)A(k.location+we);e.bindBuffer(e.ARRAY_BUFFER,et);for(let we=0;we<k.locationSize;we++)T(k.location+we,Ce/k.locationSize,We,ie,Xe*Y,(J+Ce/k.locationSize*we)*Y,ue)}else{if(N.isInstancedBufferAttribute){for(let fe=0;fe<k.locationSize;fe++)m(k.location+fe,N.meshPerAttribute);if(D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=N.meshPerAttribute*N.count}else for(let fe=0;fe<k.locationSize;fe++)A(k.location+fe);e.bindBuffer(e.ARRAY_BUFFER,et);for(let fe=0;fe<k.locationSize;fe++)T(k.location+fe,Ce/k.locationSize,We,ie,Ce*Y,Ce/k.locationSize*fe*Y,ue)}}else if(V!==void 0){let ie=V[H];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(k.location,ie);break;case 3:e.vertexAttrib3fv(k.location,ie);break;case 4:e.vertexAttrib4fv(k.location,ie);break;default:e.vertexAttrib1fv(k.location,ie)}}}}E()}function S(){M();for(let D in s){let F=s[D];for(let G in F){let L=F[G];for(let W in L){let ee=L[W];for(let V in ee)u(ee[V].object),delete ee[V];delete L[W]}}delete s[D]}}function R(D){if(s[D.id]===void 0)return;let F=s[D.id];for(let G in F){let L=F[G];for(let W in L){let ee=L[W];for(let V in ee)u(ee[V].object),delete ee[V];delete L[W]}}delete s[D.id]}function C(D){for(let F in s){let G=s[F];for(let L in G){let W=G[L];if(W[D.id]===void 0)continue;let ee=W[D.id];for(let V in ee)u(ee[V].object),delete ee[V];delete W[D.id]}}}function _(D){for(let F in s){let G=s[F],L=D.isInstancedMesh===!0?D.id:0,W=G[L];if(W===void 0)continue;for(let ee in W){let V=W[ee];for(let H in V)u(V[H].object),delete V[H];delete W[ee]}if(delete G[L],Object.keys(G).length===0)delete s[F]}}function M(){if(B(),o=!0,a===r)return;a=r,h(a.object)}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:M,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:A,disableUnusedAttributes:E}}function mA(e,t,i){let s;function r(l){s=l}function a(l,h){e.drawArrays(s,l,h),i.update(h,s,1)}function o(l,h,u){if(u===0)return;e.drawArraysInstanced(s,l,h,u),i.update(h,s,u)}function c(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c}function AA(e,t,i,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){if(C!==Ln&&s.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function c(C){let _=C===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(C!==Mn&&C!==_i&&!_&&s.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);if(u!==h)$e("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u;let f=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(i.reversedDepthBuffer===!0&&d===!1)$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),A=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:A,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:b,maxSamples:S,samples:R}}function gA(e){let t=this,i=null,s=0,r=!1,a=!1,o=new Jn,c=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||s!==0||r;return r=d,s=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){i=u(f,d,0)},this.setState=function(f,d,p){let{clippingPlanes:g,clipIntersection:v,clipShadows:A}=f,m=e.get(f);if(!r||g===null||g.length===0||a&&!A)if(a)u(null);else h();else{let E=a?0:s,T=E*4,b=m.clippingState||null;l.value=b,b=u(g,d,T,p);for(let S=0;S!==T;++S)b[S]=i[S];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function h(){if(l.value!==i)l.value=i,l.needsUpdate=s>0;t.numPlanes=s,t.numIntersection=0}function u(f,d,p,g){let v=f!==null?f.length:0,A=null;if(v!==0){if(A=l.value,g!==!0||A===null){let m=p+v*4,E=d.matrixWorldInverse;if(c.getNormalMatrix(E),A===null||A.length<m)A=new Float32Array(m);for(let T=0,b=p;T!==v;++T,b+=4)o.copy(f[T]).applyMatrix4(E,c),o.normal.toArray(A,b),A[b+3]=o.constant}l.value=A,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,A}}var or=4,bA=6,xA=20,_A=256,Zr=new ds,_d=new Oe,ql=null,Xl=0,jl=0,Kl=!1,vA=new P,ps=new P;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=0.1,s=100,r={}){let{size:a=256,position:o=vA}=r;ql=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();if(c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0)this._blur(c,0,0,t);return this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Xl,jl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===Xs||e.mapping===ns)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);ql=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:si,format:Ln,colorSpace:wn,depthBuffer:!1},s=vd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=vd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yA(r)),this._blurMaterial=SA(r,e,t),this._ggxMaterial=MA(r,e,t)}return s}_compileMaterial(e){let t=new yt(new it,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,s,r){let c=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:f,toneMapping:d}=u;if(u.getClearColor(_d),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new yt(new ai,new pn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,v=g.material,A=!1,m=e.background;if(m){if(m.isColor)v.color.copy(m),e.background=null,A=!0}else v.color.copy(_d),A=!0;for(let E=0;E<6;E++){let T=E%3;if(T===0)c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z);else if(T===1)c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z);else c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]);let b=this._cubeSize;if(ar(s,T*b,E>2?b:0,b,b),u.setRenderTarget(s),A)u.render(g,c);u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xs||e.mapping===ns;if(s){if(this._cubemapMaterial===null)this._cubemapMaterial=Md();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=yd();let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ar(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Zr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[i],v=3*g*(i>p-or?i-p+or:0),A=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,ar(r,v,A,3*g,2*g),s.setRenderTarget(r),s.render(o,Zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,ar(e,v,A,3*g,2*g),s.setRenderTarget(e),s.render(o,Zr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-or?s-this._lodMax+or:0),f=4*(this._cubeSize-h);ar(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(c,Zr)}}function yA(e){let t=[],i=[],s=e,r=e-or+1+bA;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/(o-2),l=-c,h=1+c,u=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,d=6,p=3,g=new Float32Array(p*d*f),v=new Float32Array(p*d*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,T=m>2?0:-1,b=[E,T,0,E+0.6666666666666666,T,0,E+0.6666666666666666,T+1,0,E,T,0,E+0.6666666666666666,T+1,0,E,T+1,0];g.set(b,p*d*m);for(let S=0;S<d;S++){let R=u[S*2]*2-1,C=u[S*2+1]*2-1;if(m===0)ps.set(1,C,R);else if(m===1)ps.set(-R,1,-C);else if(m===2)ps.set(-R,C,1);else if(m===3)ps.set(-1,C,-R);else if(m===4)ps.set(-R,-1,C);else ps.set(R,C,-1);ps.toArray(v,(m*d+S)*p)}}let A=new it;if(A.setAttribute("position",new ot(g,p)),A.setAttribute("outputDirection",new ot(v,p)),i.push(new yt(A,null)),s>or)s--}return{lodMeshes:i,sizeLods:t}}function vd(e,t,i){let s=new En(e,t,i);return s.texture.mapping=Nr,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ar(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function MA(e,t,i){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_A,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function SA(e,t,i){return new Mt({name:"SphericalGaussianBlur",defines:{SAMPLES:xA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yd(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Md(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eh extends En{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ho(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:ei});r.uniforms.tEquirect.value=t;let a=new yt(s,r),o=t.minFilter;if(t.minFilter===ii)t.minFilter=kt;return new kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function wA(e){let t=new WeakMap,i=new WeakMap,s=null;function r(d,p=!1){if(d===null||d===void 0)return null;if(p)return o(d);return a(d)}function a(d){if(d&&d.isTexture){let p=d.mapping;if(p===Va||p===Wa)if(t.has(d)){let g=t.get(d).texture;return c(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new eh(g.height);return v.fromEquirectangularTexture(e,d),t.set(d,v),d.addEventListener("dispose",h),c(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,g=p===Va||p===Wa,v=p===Xs||p===ns;if(g||v){let A=i.get(d),m=A!==void 0?A.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m){if(s===null)s=new Zl(e);return A=g?s.fromEquirectangular(d,A):s.fromCubemap(d,A),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),A.texture}else if(A!==void 0)return A.texture;else{let E=d.image;if(g&&E&&E.height>0||v&&E&&l(E)){if(s===null)s=new Zl(e);return A=g?s.fromEquirectangular(d):s.fromCubemap(d),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),d.addEventListener("dispose",u),A.texture}else return null}}}return d}function c(d,p){if(p===Va)d.mapping=Xs;else if(p===Wa)d.mapping=ns;return d}function l(d){let p=0,g=6;for(let v=0;v<g;v++)if(d[v]!==void 0)p++;return p===g}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);if(g!==void 0)t.delete(p),g.dispose()}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=i.get(p);if(g!==void 0)i.delete(p),g.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,s!==null)s.dispose(),s=null}return{get:r,dispose:f}}function EA(e){let t={};function i(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);if(r===null)Qi("WebGLRenderer: "+s+" extension not supported.");return r}}}function TA(e,t,i,s){let r={},a=new WeakMap;function o(f){let d=f.target;if(d.index!==null)t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=a.get(d);if(p)t.remove(p),a.delete(d);if(s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;i.memory.geometries--}function c(f,d){if(r[d.id]===!0)return d;return d.addEventListener("dispose",o),r[d.id]=!0,i.memory.geometries++,d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],e.ARRAY_BUFFER)}function h(f){let d=[],p=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(p!==null){let E=p.array;v=p.version;for(let T=0,b=E.length;T<b;T+=3){let S=E[T+0],R=E[T+1],C=E[T+2];d.push(S,R,R,C,C,S)}}else{let E=g.array;v=g.version;for(let T=0,b=E.length/3-1;T<b;T+=3){let S=T+0,R=T+1,C=T+2;d.push(S,R,R,C,C,S)}}let A=new(g.count>=65535?ao:ro)(d,1);A.version=v;let m=a.get(f);if(m)t.remove(m);a.set(f,A)}function u(f){let d=a.get(f);if(d){let p=f.index;if(p!==null){if(d.version<p.version)h(f)}}else h(f);return a.get(f)}return{get:c,update:l,getWireframeAttribute:u}}function RA(e,t,i){let s;function r(f){s=f}let a,o;function c(f){a=f.type,o=f.bytesPerElement}function l(f,d){e.drawElements(s,d,a,f*o),i.update(d,s,1)}function h(f,d,p){if(p===0)return;e.drawElementsInstanced(s,d,a,f*o,p),i.update(d,s,p)}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,d,0,a,f,0,p);let v=0;for(let A=0;A<p;A++)v+=d[A];i.update(v,s,1)}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function CA(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,o,c){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=c*(a/3);break;case e.LINES:i.lines+=c*(a/2);break;case e.LINE_STRIP:i.lines+=c*(a-1);break;case e.LINE_LOOP:i.lines+=c*a;break;case e.POINTS:i.points+=c*a;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:s}}function PA(e,t,i){let s=new WeakMap,r=new Pt;function a(o,c,l){let h=o.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=u!==void 0?u.length:0,d=s.get(c);if(d===void 0||d.count!==f){let M=function(){C.dispose(),s.delete(c),c.removeEventListener("dispose",M)};if(d!==void 0)d.texture.dispose();let p=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],E=c.morphAttributes.color||[],T=0;if(p===!0)T=1;if(g===!0)T=2;if(v===!0)T=3;let b=c.attributes.position.count*T,S=1;if(b>t.maxTextureSize)S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let R=new Float32Array(b*S*4*f),C=new no(R,b,S,f);C.type=_i,C.needsUpdate=!0;let _=T*4;for(let B=0;B<f;B++){let D=A[B],F=m[B],G=E[B],L=b*S*4*B;for(let W=0;W<D.count;W++){let ee=W*_;if(p===!0)r.fromBufferAttribute(D,W),R[L+ee+0]=r.x,R[L+ee+1]=r.y,R[L+ee+2]=r.z,R[L+ee+3]=0;if(g===!0)r.fromBufferAttribute(F,W),R[L+ee+4]=r.x,R[L+ee+5]=r.y,R[L+ee+6]=r.z,R[L+ee+7]=0;if(v===!0)r.fromBufferAttribute(G,W),R[L+ee+8]=r.x,R[L+ee+9]=r.y,R[L+ee+10]=r.z,R[L+ee+11]=G.itemSize===4?r.w:1}}d={count:f,texture:C,size:new Fe(b,S)},s.set(c,d),c.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function IA(e,t,i,s,r){let a=new WeakMap;function o(h){let u=r.render.frame,f=h.geometry,d=t.get(h,f);if(a.get(d)!==u)t.update(d),a.set(d,u);if(h.isInstancedMesh){if(h.hasEventListener("dispose",l)===!1)h.addEventListener("dispose",l);if(a.get(h)!==u){if(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null)i.update(h.instanceColor,e.ARRAY_BUFFER);a.set(h,u)}}if(h.isSkinnedMesh){let p=h.skeleton;if(a.get(p)!==u)p.update(),a.set(p,u)}return d}function c(){a=new WeakMap}function l(h){let u=h.target;if(u.removeEventListener("dispose",l),s.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null)i.remove(u.instanceColor)}return{update:o,dispose:c}}var DA={[xc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function LA(e,t,i,s,r,a){let o=new En(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,h=new it;h.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let u=new Cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new yt(h,u),d=new ds(-1,1,1,-1,0,1),p=null,g=null,v=!1,A,m=null,E=[],T=!1;this.setSize=function(b,S){if(o.setSize(b,S),c!==null)c.setSize(b,S);if(l!==null)l.setSize(b,S);for(let R=0;R<E.length;R++){let C=E[R];if(C.setSize)C.setSize(b,S)}},this.setEffects=function(b){E=b,T=E.length>0&&E[0].isRenderPass===!0;let{width:S,height:R}=o;if(E.length>0&&c===null)c=new En(S,R,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new En(S,R,{type:si,depthBuffer:!1,stencilBuffer:!1});for(let C=0;C<E.length;C++){let _=E[C];if(_.setSize)_.setSize(S,R)}},this.begin=function(b,S){if(v)return!1;if(b.toneMapping===qn&&E.length===0)return!1;if(m=S,S!==null){let{width:R,height:C}=S;if(o.width!==R||o.height!==C)this.setSize(R,C)}if(T===!1)b.setRenderTarget(o);return A=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return T},this.end=function(b,S){b.toneMapping=A,v=!0;let R=o,C=c;for(let _=0;_<E.length;_++){let M=E[_];if(M.enabled===!1)continue;if(M.render(b,C,R,S),M.needsSwap!==!1)R=C,C=C===c?l:c}if(p!==b.outputColorSpace||g!==b.toneMapping){if(p=b.outputColorSpace,g=b.toneMapping,u.defines={},At.getTransfer(p)===Ft)u.defines.SRGB_TRANSFER="";let _=DA[g];if(_)u.defines[_]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(m),b.render(f,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){if(o.dispose(),c!==null)c.dispose();if(l!==null)l.dispose();h.dispose(),u.dispose()}}var Vd=new Kt,$l=new cs(1,1),Wd=new no,qd=new xl,Xd=new ho,Sd=[],wd=[],Ed=new Float32Array(16),Td=new Float32Array(9),Rd=new Float32Array(4);function cr(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=Sd[r];if(a===void 0)a=new Float32Array(r),Sd[r]=a;if(t!==0){s.toArray(a,0);for(let o=1,c=0;o!==t;++o)c+=i,e[o].toArray(a,c)}return a}function en(e,t){if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return!1;return!0}function tn(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function Eo(e,t){let i=wd[t];if(i===void 0)i=new Int32Array(t),wd[t]=i;for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function FA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function NA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(en(i,t))return;e.uniform2fv(this.addr,t),tn(i,t)}}function UA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(en(i,t))return;e.uniform3fv(this.addr,t),tn(i,t)}}function OA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(en(i,t))return;e.uniform4fv(this.addr,t),tn(i,t)}}function BA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(en(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(i,t)}else{if(en(i,s))return;Rd.set(s),e.uniformMatrix2fv(this.addr,!1,Rd),tn(i,s)}}function kA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(en(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(i,t)}else{if(en(i,s))return;Td.set(s),e.uniformMatrix3fv(this.addr,!1,Td),tn(i,s)}}function zA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(en(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(i,t)}else{if(en(i,s))return;Ed.set(s),e.uniformMatrix4fv(this.addr,!1,Ed),tn(i,s)}}function HA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function GA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(en(i,t))return;e.uniform2iv(this.addr,t),tn(i,t)}}function VA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(en(i,t))return;e.uniform3iv(this.addr,t),tn(i,t)}}function WA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(en(i,t))return;e.uniform4iv(this.addr,t),tn(i,t)}}function qA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function XA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(en(i,t))return;e.uniform2uiv(this.addr,t),tn(i,t)}}function jA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(en(i,t))return;e.uniform3uiv(this.addr,t),tn(i,t)}}function KA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(en(i,t))return;e.uniform4uiv(this.addr,t),tn(i,t)}}function YA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;let a;if(this.type===e.SAMPLER_2D_SHADOW)$l.compareFunction=i.isReversedDepthBuffer()?to:eo,a=$l;else a=Vd;i.setTexture2D(t||a,r)}function JA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture3D(t||qd,r)}function ZA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTextureCube(t||Xd,r)}function $A(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture2DArray(t||Wd,r)}function QA(e){switch(e){case 5126:return FA;case 35664:return NA;case 35665:return UA;case 35666:return OA;case 35674:return BA;case 35675:return kA;case 35676:return zA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return WA;case 5125:return qA;case 36294:return XA;case 36295:return jA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return $A}}function e2(e,t){e.uniform1fv(this.addr,t)}function t2(e,t){let i=cr(t,this.size,2);e.uniform2fv(this.addr,i)}function n2(e,t){let i=cr(t,this.size,3);e.uniform3fv(this.addr,i)}function i2(e,t){let i=cr(t,this.size,4);e.uniform4fv(this.addr,i)}function s2(e,t){let i=cr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function r2(e,t){let i=cr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function a2(e,t){let i=cr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function o2(e,t){e.uniform1iv(this.addr,t)}function c2(e,t){e.uniform2iv(this.addr,t)}function l2(e,t){e.uniform3iv(this.addr,t)}function h2(e,t){e.uniform4iv(this.addr,t)}function u2(e,t){e.uniform1uiv(this.addr,t)}function d2(e,t){e.uniform2uiv(this.addr,t)}function f2(e,t){e.uniform3uiv(this.addr,t)}function p2(e,t){e.uniform4uiv(this.addr,t)}function m2(e,t,i){let s=this.cache,r=t.length,a=Eo(i,r);if(!en(s,a))e.uniform1iv(this.addr,a),tn(s,a);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=$l;else o=Vd;for(let c=0;c!==r;++c)i.setTexture2D(t[c]||o,a[c])}function A2(e,t,i){let s=this.cache,r=t.length,a=Eo(i,r);if(!en(s,a))e.uniform1iv(this.addr,a),tn(s,a);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||qd,a[o])}function g2(e,t,i){let s=this.cache,r=t.length,a=Eo(i,r);if(!en(s,a))e.uniform1iv(this.addr,a),tn(s,a);for(let o=0;o!==r;++o)i.setTextureCube(t[o]||Xd,a[o])}function b2(e,t,i){let s=this.cache,r=t.length,a=Eo(i,r);if(!en(s,a))e.uniform1iv(this.addr,a),tn(s,a);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||Wd,a[o])}function x2(e){switch(e){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return s2;case 35675:return r2;case 35676:return a2;case 5124:case 35670:return o2;case 35667:case 35671:return c2;case 35668:case 35672:return l2;case 35669:case 35673:return h2;case 5125:return u2;case 36294:return d2;case 36295:return f2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return b2}}class jd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QA(t.type)}}class Kd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x2(t.type)}}class Yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}}var Yl=/(\w+)(\])?(\[|\.)?/g;function Cd(e,t){e.seq.push(t),e.map[t.id]=t}function _2(e,t,i){let s=e.name,r=s.length;Yl.lastIndex=0;while(!0){let a=Yl.exec(s),o=Yl.lastIndex,c=a[1],l=a[2]==="]",h=a[3];if(l)c=c|0;if(h===void 0||h==="["&&o+2===r){Cd(i,h===void 0?new jd(c,e,t):new Kd(c,e,t));break}else{let f=i.map[c];if(f===void 0)f=new Yd(c),Cd(i,f);i=f}}}class ea{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);_2(o,c,this)}let s=[],r=[];for(let a of this.seq)if(a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW)s.push(a);else r.push(a);if(s.length>0)this.seq=s.concat(r)}setValue(e,t,i,s){let r=this.map[t];if(r!==void 0)r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];if(s!==void 0)this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];if(c.needsUpdate!==!1)o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];if(a.id in t)i.push(a)}return i}}function Pd(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}var v2=37297,y2=0;function M2(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let o=r;o<a;o++){let c=o+1;s.push(`${c===t?">":" "} ${c}: ${i[o]}`)}return s.join(`
`)}var Id=new ct;function S2(e){At._getMatrix(Id,At.workingColorSpace,e);let t=`mat3( ${Id.elements.map((i)=>i.toFixed(4))} )`;switch(At.getTransfer(e)){case ul:return[t,"LinearTransferOETF"];case Ft:return[t,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Dd(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(s&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let c=parseInt(o[1]);return i.toUpperCase()+`

`+a+`

`+M2(e.getShaderSource(t),c)}else return a}function w2(e,t){let i=S2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var E2={[xc]:"Linear",[_c]:"Reinhard",[vc]:"Cineon",[yc]:"ACESFilmic",[Sc]:"AgX",[wc]:"Neutral",[Mc]:"Custom"};function T2(e,t){let i=E2[t];if(i===void 0)return $e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var So=new P;function R2(){At.getLuminanceCoefficients(So);let e=So.x.toFixed(4),t=So.y.toFixed(4),i=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function C2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function P2(e){let t=[];for(let i in e){let s=e[i];if(s===!1)continue;t.push("#define "+i+" "+s)}return t.join(`
`)}function I2(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),o=a.name,c=1;if(a.type===e.FLOAT_MAT2)c=2;if(a.type===e.FLOAT_MAT3)c=3;if(a.type===e.FLOAT_MAT4)c=4;i[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:c}}return i}function Qr(e){return e!==""}function Ld(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(e){return e.replace(D2,F2)}var L2=new Map;function F2(e,t){let i=pt[t];if(i===void 0){let s=L2.get(t);if(s!==void 0)i=pt[s],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ql(i)}var N2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(e){return e.replace(N2,U2)}function U2(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ud(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var O2={[Lr]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function B2(e){return O2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k2={[Xs]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function z2(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return k2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var H2={[ns]:"ENVMAP_MODE_REFRACTION"};function G2(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return H2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V2={[zu]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function W2(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return V2[e.combine]||"ENVMAP_BLENDING_NONE"}function q2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function X2(e,t,i,s){let r=e.getContext(),{defines:a,vertexShader:o,fragmentShader:c}=i,l=B2(i),h=z2(i),u=G2(i),f=W2(i),d=q2(i),p=C2(i),g=P2(a),v=r.createProgram(),A,m,E=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Qr).join(`
`),A.length>0)A+=`
`;if(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Qr).join(`
`),m.length>0)m+=`
`}else A=[Ud(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[Ud(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qn?"#define TONE_MAPPING":"",i.toneMapping!==qn?pt.tonemapping_pars_fragment:"",i.toneMapping!==qn?T2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,w2("linearToOutputTexel",i.outputColorSpace),R2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qr).join(`
`);if(o=Ql(o),o=Ld(o,i),o=Fd(o,i),c=Ql(c),c=Ld(c,i),c=Fd(c,i),o=Nd(o),c=Nd(c),i.isRawShaderMaterial!==!0)E=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",i.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let T=E+A+o,b=E+m+c,S=Pd(r,r.VERTEX_SHADER,T),R=Pd(r,r.FRAGMENT_SHADER,b);if(r.attachShader(v,S),r.attachShader(v,R),i.index0AttributeName!==void 0)r.bindAttribLocation(v,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(v,0,"position");r.linkProgram(v);function C(D){if(e.debug.checkShaderErrors){let F=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(R)||"",W=F.trim(),ee=G.trim(),V=L.trim(),H=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,v,S,R);else{let N=Dd(r,S,"vertex"),ie=Dd(r,R,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+N+`
`+ie)}else if(W!=="")$e("WebGLProgram: Program Info Log:",W);else if(ee===""||V==="")k=!1;if(k)D.diagnostics={runnable:H,programLog:W,vertexShader:{log:ee,prefix:A},fragmentShader:{log:V,prefix:m}}}r.deleteShader(S),r.deleteShader(R),_=new ea(r,v),M=I2(r,v)}let _;this.getUniforms=function(){if(_===void 0)C(this);return _};let M;this.getAttributes=function(){if(M===void 0)C(this);return M};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(B===!1)B=r.getProgramParameter(v,v2);return B},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=y2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=R,this}var j2=0;class Jd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);if(s.has(t)===!1)s.add(t),t.usedTimes++;if(s.has(i)===!1)s.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new Zd(e),t.set(e,i);return i}}class Zd{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function K2(e){return e===as||e===Za||e===$a}function Y2(e,t,i,s,r,a){let o=new io,c=new Jd,l=new Set,h=[],u=new Map,{logarithmicDepthBuffer:f,precision:d}=s,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function v(_,M,B,D,F,G){let L=D.fog,W=F.geometry,ee=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||ee,V),k=!!H&&H.mapping===Nr?H.image.height:null,N=p[_.type];if(_.precision!==null){if(d=s.getMaxPrecision(_.precision),d!==_.precision)$e("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead.")}let ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ce=ie!==void 0?ie.length:0,Me=0;if(W.morphAttributes.position!==void 0)Me=1;if(W.morphAttributes.normal!==void 0)Me=2;if(W.morphAttributes.color!==void 0)Me=3;let et,We,Y,ue;if(N){let xt=ci[N];et=xt.vertexShader,We=xt.fragmentShader}else{et=_.vertexShader,We=_.fragmentShader;let xt=c.getVertexShaderStage(_),_t=c.getFragmentShaderStage(_);c.update(_,xt,_t),Y=xt.id,ue=_t.id}let fe=e.getRenderTarget(),Xe=e.state.buffers.depth.getReversed(),J=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,_e=!!_.map,ae=!!_.matcap,ge=!!H,ke=!!_.aoMap,He=!!_.lightMap,st=!!_.bumpMap&&_.wireframe===!1,at=!!_.normalMap,ut=!!_.displacementMap,Q=!!_.emissiveMap,de=!!_.metalnessMap,I=!!_.roughnessMap,Je=_.anisotropy>0,qe=_.clearcoat>0,Te=_.dispersion>0,y=_.retroreflectivity>0,x=_.iridescence>0,U=_.sheen>0,K=_.transmission>0,he=Je&&!!_.anisotropyMap,ve=qe&&!!_.clearcoatMap,Re=qe&&!!_.clearcoatNormalMap,te=qe&&!!_.clearcoatRoughnessMap,oe=x&&!!_.iridescenceMap,Ee=x&&!!_.iridescenceThicknessMap,Be=U&&!!_.sheenColorMap,Pe=U&&!!_.sheenRoughnessMap,ye=!!_.specularMap,ne=!!_.specularColorMap,re=!!_.specularIntensityMap,De=K&&!!_.transmissionMap,O=K&&!!_.thicknessMap,pe=!!_.gradientMap,X=!!_.alphaMap,se=_.alphaTest>0,xe=!!_.alphaHash,ce=!!_.extensions,Se=qn;if(_.toneMapped){if(fe===null||fe.isXRRenderTarget===!0)Se=e.toneMapping}let Ye={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:We,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:J,instancingColor:J&&F.instanceColor!==null,instancingMorph:J&&F.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_e,matcap:ae,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:k,aoMap:ke,lightMap:He,bumpMap:st,normalMap:at,displacementMap:ut,emissiveMap:Q,normalMapObjectSpace:at&&_.normalMapType===Yu,normalMapTangentSpace:at&&_.normalMapType===hl,packedNormalMap:at&&_.normalMapType===hl&&K2(_.normalMap.format),metalnessMap:de,roughnessMap:I,anisotropy:Je,anisotropyMap:he,clearcoat:qe,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:te,dispersion:Te,retroreflection:y,iridescence:x,iridescenceMap:oe,iridescenceThicknessMap:Ee,sheen:U,sheenColorMap:Be,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:ne,specularIntensityMap:re,transmission:K,transmissionMap:De,thicknessMap:O,gradientMap:pe,opaque:_.transparent===!1&&_.blending===ti&&_.alphaToCoverage===!1,alphaMap:X,alphaTest:se,alphaHash:xe,combine:_.combine,mapUv:_e&&g(_.map.channel),aoMapUv:ke&&g(_.aoMap.channel),lightMapUv:He&&g(_.lightMap.channel),bumpMapUv:st&&g(_.bumpMap.channel),normalMapUv:at&&g(_.normalMap.channel),displacementMapUv:ut&&g(_.displacementMap.channel),emissiveMapUv:Q&&g(_.emissiveMap.channel),metalnessMapUv:de&&g(_.metalnessMap.channel),roughnessMapUv:I&&g(_.roughnessMap.channel),anisotropyMapUv:he&&g(_.anisotropyMap.channel),clearcoatMapUv:ve&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(_.sheenRoughnessMap.channel),specularMapUv:ye&&g(_.specularMap.channel),specularColorMapUv:ne&&g(_.specularColorMap.channel),specularIntensityMapUv:re&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:X&&g(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(at||Je),vertexNormals:!!W.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(_e||X),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||W.attributes.normal===void 0&&at===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Me,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&B.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:_e&&_.map.isVideoTexture===!0&&At.getTransfer(_.map.colorSpace)===Ft,decodeVideoTextureEmissive:Q&&_.emissiveMap.isVideoTexture===!0&&At.getTransfer(_.emissiveMap.colorSpace)===Ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function A(_){let M=[];if(_.shaderID)M.push(_.shaderID);else M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let B in _.defines)M.push(B),M.push(_.defines[B]);if(_.isRawShaderMaterial===!1)m(M,_),E(M,_),M.push(e.outputColorSpace);return M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){if(o.disableAll(),M.instancing)o.enable(0);if(M.instancingColor)o.enable(1);if(M.instancingMorph)o.enable(2);if(M.matcap)o.enable(3);if(M.envMap)o.enable(4);if(M.normalMapObjectSpace)o.enable(5);if(M.normalMapTangentSpace)o.enable(6);if(M.clearcoat)o.enable(7);if(M.iridescence)o.enable(8);if(M.alphaTest)o.enable(9);if(M.vertexColors)o.enable(10);if(M.vertexAlphas)o.enable(11);if(M.vertexUv1s)o.enable(12);if(M.vertexUv2s)o.enable(13);if(M.vertexUv3s)o.enable(14);if(M.vertexTangents)o.enable(15);if(M.anisotropy)o.enable(16);if(M.alphaHash)o.enable(17);if(M.batching)o.enable(18);if(M.dispersion)o.enable(19);if(M.retroreflection)o.enable(24);if(M.batchingColor)o.enable(20);if(M.gradientMap)o.enable(21);if(M.packedNormalMap)o.enable(22);if(M.vertexNormals)o.enable(23);if(_.push(o.mask),o.disableAll(),M.fog)o.enable(0);if(M.useFog)o.enable(1);if(M.flatShading)o.enable(2);if(M.logarithmicDepthBuffer)o.enable(3);if(M.reversedDepthBuffer)o.enable(4);if(M.skinning)o.enable(5);if(M.morphTargets)o.enable(6);if(M.morphNormals)o.enable(7);if(M.morphColors)o.enable(8);if(M.premultipliedAlpha)o.enable(9);if(M.shadowMapEnabled)o.enable(10);if(M.doubleSided)o.enable(11);if(M.flipSided)o.enable(12);if(M.useDepthPacking)o.enable(13);if(M.dithering)o.enable(14);if(M.transmission)o.enable(15);if(M.sheen)o.enable(16);if(M.opaque)o.enable(17);if(M.pointsUvs)o.enable(18);if(M.decodeVideoTexture)o.enable(19);if(M.decodeVideoTextureEmissive)o.enable(20);if(M.alphaToCoverage)o.enable(21);if(M.numLightProbeGrids>0)o.enable(22);if(M.hasPositionAttribute)o.enable(23);_.push(o.mask)}function T(_){let M=p[_.type],B;if(M){let D=ci[M];B=dd.clone(D.uniforms)}else B=_.uniforms;return B}function b(_,M){let B=u.get(M);if(B!==void 0)++B.usedTimes;else B=new X2(e,M,_,r),h.push(B),u.set(M,B);return B}function S(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){c.remove(_)}function C(){c.dispose()}return{getParameters:v,getProgramCacheKey:A,getUniforms:T,acquireProgram:b,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:C}}function J2(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let c=e.get(o);if(c===void 0)c={},e.set(o,c);return c}function s(o){e.delete(o)}function r(o,c,l){e.get(o)[c]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function Z2(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Od(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Bd(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function o(d){let p=0;if(d.isInstancedMesh)p+=2;if(d.isSkinnedMesh)p+=1;return p}function c(d,p,g,v,A,m){let E=e[t];if(E===void 0)E={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:A,group:m},e[t]=E;else E.id=d.id,E.object=d,E.geometry=p,E.material=g,E.materialVariant=o(d),E.groupOrder=v,E.renderOrder=d.renderOrder,E.z=A,E.group=m;return t++,E}function l(d,p,g,v,A,m,E){if(E.reversedDepth===!0)A=-A;let T=c(d,p,g,v,A,m);if(g.transmission>0)s.push(T);else if(g.transparent===!0)r.push(T);else i.push(T)}function h(d,p,g,v,A,m){let E=c(d,p,g,v,A,m);if(g.transmission>0)s.unshift(E);else if(g.transparent===!0)r.unshift(E);else i.unshift(E)}function u(d,p){if(i.length>1)i.sort(d||Z2);if(s.length>1)s.sort(p||Od);if(r.length>1)r.sort(p||Od)}function f(){for(let d=t,p=e.length;d<p;d++){let g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:l,unshift:h,finish:f,sort:u}}function $2(){let e=new WeakMap;function t(s,r){let a=e.get(s),o;if(a===void 0)o=new Bd,e.set(s,[o]);else if(r>=a.length)o=new Bd,a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Q2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new Oe};break;case"SpotLight":i={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function e3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var t3=0;function n3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function i3(e){let t=new Q2,i=e3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new nt,o=new nt;function c(h){let u=0,f=0,d=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let p=0,g=0,v=0,A=0,m=0,E=0,T=0,b=0,S=0,R=0,C=0,_=0,M=0,B=0;h.sort(n3);for(let F=0,G=h.length;F<G;F++){let L=h[F],{color:W,intensity:ee,distance:V}=L,H=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===as)H=L.shadow.map.texture;else H=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)u+=W.r*ee,f+=W.g*ee,d+=W.b*ee;else if(L.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(L.sh.coefficients[k],ee);B++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,ie=i.get(L);ie.shadowIntensity=N.intensity,ie.shadowBias=N.bias,ie.shadowNormalBias=N.normalBias,ie.shadowRadius=N.radius,ie.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),s.sunShadow[g]=ie,s.sunShadowMap[g]=H;let Ce=N.getViewportCount();for(let Me=0;Me<Ce;Me++)s.sunShadowMatrix[v+Me]=N.getMatrix(Me),s.sunShadowCascade[v+Me]=N._cascadeData[Me];v+=Ce,g++}s.sun[p]=k,p++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,ie=i.get(L);ie.shadowIntensity=N.intensity,ie.shadowBias=N.bias,ie.shadowNormalBias=N.normalBias,ie.shadowRadius=N.radius,ie.shadowMapSize=N.mapSize,s.directionalShadow[A]=ie,s.directionalShadowMap[A]=H,s.directionalShadowMatrix[A]=L.shadow.matrix,S++}s.directional[A]=k,A++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(W).multiplyScalar(ee),k.distance=V,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,s.spot[E]=k;let N=L.shadow;if(L.map){if(s.spotLightMap[_]=L.map,_++,N.updateMatrices(L),L.castShadow)M++}if(s.spotLightMatrix[E]=N.matrix,L.castShadow){let ie=i.get(L);ie.shadowIntensity=N.intensity,ie.shadowBias=N.bias,ie.shadowNormalBias=N.normalBias,ie.shadowRadius=N.radius,ie.shadowMapSize=N.mapSize,s.spotShadow[E]=ie,s.spotShadowMap[E]=H,C++}E++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(W).multiplyScalar(ee),k.halfWidth.set(L.width*0.5,0,0),k.halfHeight.set(0,L.height*0.5,0),s.rectArea[T]=k,T++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let N=L.shadow,ie=i.get(L);ie.shadowIntensity=N.intensity,ie.shadowBias=N.bias,ie.shadowNormalBias=N.normalBias,ie.shadowRadius=N.radius,ie.shadowMapSize=N.mapSize,ie.shadowCameraNear=N.camera.near,ie.shadowCameraFar=N.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=H,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=k,m++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(ee),k.groundColor.copy(L.groundColor).multiplyScalar(ee),s.hemi[b]=k,b++}}if(T>0)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2;else s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2;s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=d;let D=s.hash;if(D.sunLength!==p||D.directionalLength!==A||D.pointLength!==m||D.spotLength!==E||D.rectAreaLength!==T||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==R||D.numSpotShadows!==C||D.numSpotMaps!==_||D.numLightProbes!==B)s.sun.length=p,s.directional.length=A,s.spot.length=E,s.rectArea.length=T,s.point.length=m,s.hemi.length=b,s.sunShadow.length=g,s.sunShadowMap.length=g,s.sunShadowMatrix.length=v,s.sunShadowCascade.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.directionalShadowMatrix.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.pointShadowMatrix.length=R,s.spotShadow.length=C,s.spotShadowMap.length=C,s.spotLightMatrix.length=C+_-M,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=M,s.numLightProbes=B,D.sunLength=p,D.directionalLength=A,D.pointLength=m,D.spotLength=E,D.rectAreaLength=T,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=R,D.numSpotShadows=C,D.numSpotMaps=_,D.numLightProbes=B,s.version=t3++}function l(h,u){let f=0,d=0,p=0,g=0,v=0,A=0,m=u.matrixWorldInverse;for(let E=0,T=h.length;E<T;E++){let b=h[E];if(b.isSunLight){let S=s.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),f++}else if(b.isDirectionalLight){let S=s.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let S=s.rectArea[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),S.halfWidth.set(b.width*0.5,0,0),S.halfHeight.set(0,b.height*0.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let S=s.hemi[A];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),A++}}}return{setup:c,setupView:l,state:s}}function kd(e){let t=new i3(e),i=[],s=[],r=[];function a(d){f.camera=d,i.length=0,s.length=0,r.length=0}function o(d){i.push(d)}function c(d){s.push(d)}function l(d){r.push(d)}function h(){t.setup(i)}function u(d){t.setupView(i,d)}let f={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:h,setupLightsView:u,pushLight:o,pushShadow:c,pushLightProbeGrid:l}}function s3(e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;if(o===void 0)c=new kd(e),t.set(r,[c]);else if(a>=o.length)c=new kd(e),o.push(c);else c=o[a];return c}function s(){t=new WeakMap}return{get:i,dispose:s}}var r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o3=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],c3=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],zd=new nt,$r=new P,Jl=new P;function l3(e,t,i){let s=new Vr,r=new Fe,a=new Fe,o=new Pt,c=new Pl,l=new Il,h={},u=i.maxTextureSize,f={[Qn]:fn,[fn]:Qn,[Vt]:Vt},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:r3,fragmentShader:a3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new it;g.setAttribute("position",new ot(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let v=new yt(g,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let m=this.type;this.render=function(R,C,_){if(A.enabled===!1)return;if(A.autoUpdate===!1&&A.needsUpdate===!1)return;if(R.length===0)return;if(this.type===mu)$e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr;let M=e.getRenderTarget(),B=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),F=e.state;if(F.setBlending(ei),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=m!==this.type;if(G)C.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((W)=>W.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,W=R.length;L<W;L++){let ee=R[L],V=ee.shadow;if(V===void 0){$e("WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let H=V.getFrameExtents();if(r.multiply(H),a.copy(V.mapSize),r.x>u||r.y>u){if(r.x>u)a.x=Math.floor(u/H.x),r.x=a.x*H.x,V.mapSize.x=a.x;if(r.y>u)a.y=Math.floor(u/H.y),r.y=a.y*H.y,V.mapSize.y=a.y}let k=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||G===!0){if(V.map!==null){if(V.map.depthTexture!==null)V.map.depthTexture.dispose(),V.map.depthTexture=null;V.map.dispose()}if(this.type===Ws){if(ee.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new En(r.x,r.y,{format:as,type:si,minFilter:kt,magFilter:kt,generateMipmaps:!1}),V.map.texture.name=ee.name+".shadowMap",V.map.depthTexture=new cs(r.x,r.y,_i),V.map.depthTexture.name=ee.name+".shadowMapDepth",V.map.depthTexture.format=ss,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xn,V.map.depthTexture.magFilter=Xn}else{if(ee.isPointLight)V.map=new eh(r.x),V.map.depthTexture=new _l(r.x,Bi);else V.map=new En(r.x,r.y),V.map.depthTexture=new cs(r.x,r.y,Bi);if(V.map.depthTexture.name=ee.name+".shadowMap",V.map.depthTexture.format=ss,this.type===Lr)V.map.depthTexture.compareFunction=k?to:eo,V.map.depthTexture.minFilter=kt,V.map.depthTexture.magFilter=kt;else V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xn,V.map.depthTexture.magFilter=Xn}V.camera.updateProjectionMatrix()}if(V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y))V.map.setSize(r.x,r.y);let N=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();if(ee.isPointLight!==!0)V.updateMatrices(ee,_);for(let ie=0;ie<N;ie++){let Ce=V.getCamera(ie);if(ee.isPointLight){let{camera:Me,matrix:et}=V,We=ee.distance||Me.far;if(We!==Me.far)Me.far=We,Me.updateProjectionMatrix();$r.setFromMatrixPosition(ee.matrixWorld),Me.position.copy($r),Jl.copy(Me.position),Jl.add(o3[ie]),Me.up.copy(c3[ie]),Me.lookAt(Jl),Me.updateMatrixWorld(),et.makeTranslation(-$r.x,-$r.y,-$r.z),zd.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(zd,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,ie),e.clear();else{if(ie===0)e.setRenderTarget(V.map),e.clear();let Me=V.getViewport(ie);o.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),F.viewport(o)}s=V.getFrustum(ie),b(C,_,Ce,ee,this.type)}if(V.isPointLightShadow!==!0&&this.type===Ws)E(V,_);V.needsUpdate=!1}m=this.type,A.needsUpdate=!1,e.setRenderTarget(M,B,D)};function E(R,C){let _=t.update(v);if(d.defines.VSM_SAMPLES!==R.blurSamples)d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new En(r.x,r.y,{format:as,type:si});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(C,null,_,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(C,null,_,p,v,null)}function T(R,C,_,M){let B=null,D=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)B=D;else if(B=_.isPointLight===!0?l:c,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=B.uuid,G=C.uuid,L=h[F];if(L===void 0)L={},h[F]=L;let W=L[G];if(W===void 0)W=B.clone(),L[G]=W,C.addEventListener("dispose",S);B=W}if(B.visible=C.visible,B.wireframe=C.wireframe,M===Ws)B.side=C.shadowSide!==null?C.shadowSide:C.side;else B.side=C.shadowSide!==null?C.shadowSide:f[C.side];if(B.alphaMap=C.alphaMap,B.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,B.map=C.map,B.clipShadows=C.clipShadows,B.clippingPlanes=C.clippingPlanes,B.clipIntersection=C.clipIntersection,B.displacementMap=C.displacementMap,B.displacementScale=C.displacementScale,B.displacementBias=C.displacementBias,B.wireframeLinewidth=C.wireframeLinewidth,B.linewidth=C.linewidth,_.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let F=e.properties.get(B);F.light=_}return B}function b(R,C,_,M,B){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&B===Ws)&&(!R.frustumCulled||R.intersectsFrustum(s))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);let G=t.update(R),L=R.material;if(Array.isArray(L)){let W=G.groups;for(let ee=0,V=W.length;ee<V;ee++){let H=W[ee],k=L[H.materialIndex];if(k&&k.visible){let N=T(R,k,M,B);R.onBeforeShadow(e,R,C,_,G,N,H),e.renderBufferDirect(_,null,G,N,R,H),R.onAfterShadow(e,R,C,_,G,N,H)}}}else if(L.visible){let W=T(R,L,M,B);R.onBeforeShadow(e,R,C,_,G,W,null),e.renderBufferDirect(_,null,G,W,R,null),R.onAfterShadow(e,R,C,_,G,W,null)}}}let F=R.children;for(let G=0,L=F.length;G<L;G++)b(F[G],C,_,M,B)}function S(R){R.target.removeEventListener("dispose",S);for(let _ in h){let M=h[_],B=R.target.uuid;if(B in M)M[B].dispose(),delete M[B]}}}function h3(e,t){function i(){let O=!1,pe=new Pt,X=null,se=new Pt(0,0,0,0);return{setMask:function(xe){if(X!==xe&&!O)e.colorMask(xe,xe,xe,xe),X=xe},setLocked:function(xe){O=xe},setClear:function(xe,ce,Se,Ye,xt){if(xt===!0)xe*=Ye,ce*=Ye,Se*=Ye;if(pe.set(xe,ce,Se,Ye),se.equals(pe)===!1)e.clearColor(xe,ce,Se,Ye),se.copy(pe)},reset:function(){O=!1,X=null,se.set(-1,0,0,0)}}}function s(){let O=!1,pe=!1,X=null,se=null,xe=null;return{setReversed:function(ce){if(pe!==ce){let Se=t.get("EXT_clip_control");if(ce)Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT);else Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT);pe=ce;let Ye=xe;xe=null,this.setClear(Ye)}},getReversed:function(){return pe},setTest:function(ce){if(ce)fe(e.DEPTH_TEST);else Xe(e.DEPTH_TEST)},setMask:function(ce){if(X!==ce&&!O)e.depthMask(ce),X=ce},setFunc:function(ce){if(pe)ce=rd[ce];if(se!==ce){switch(ce){case Lu:e.depthFunc(e.NEVER);break;case Fu:e.depthFunc(e.ALWAYS);break;case Nu:e.depthFunc(e.LESS);break;case bc:e.depthFunc(e.LEQUAL);break;case Uu:e.depthFunc(e.EQUAL);break;case Ou:e.depthFunc(e.GEQUAL);break;case Bu:e.depthFunc(e.GREATER);break;case ku:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=ce}},setLocked:function(ce){O=ce},setClear:function(ce){if(xe!==ce){if(xe=ce,pe)ce=1-ce;e.clearDepth(ce)}},reset:function(){O=!1,X=null,se=null,xe=null,pe=!1}}}function r(){let O=!1,pe=null,X=null,se=null,xe=null,ce=null,Se=null,Ye=null,xt=null;return{setTest:function(_t){if(!O)if(_t)fe(e.STENCIL_TEST);else Xe(e.STENCIL_TEST)},setMask:function(_t){if(pe!==_t&&!O)e.stencilMask(_t),pe=_t},setFunc:function(_t,sn,An){if(X!==_t||se!==sn||xe!==An)e.stencilFunc(_t,sn,An),X=_t,se=sn,xe=An},setOp:function(_t,sn,An){if(ce!==_t||Se!==sn||Ye!==An)e.stencilOp(_t,sn,An),ce=_t,Se=sn,Ye=An},setLocked:function(_t){O=_t},setClear:function(_t){if(xt!==_t)e.clearStencil(_t),xt=_t},reset:function(){O=!1,pe=null,X=null,se=null,xe=null,ce=null,Se=null,Ye=null,xt=null}}}let a=new i,o=new s,c=new r,l=new WeakMap,h=new WeakMap,u={},f={},d={},p=new WeakMap,g=[],v=null,A=!1,m=null,E=null,T=null,b=null,S=null,R=null,C=null,_=new Oe(0,0,0),M=0,B=!1,D=null,F=null,G=null,L=null,W=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,H=0,k=e.getParameter(e.VERSION);if(k.indexOf("WebGL")!==-1)H=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=H>=1;else if(k.indexOf("OpenGL ES")!==-1)H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=H>=2;let N=null,ie={},Ce=e.getParameter(e.SCISSOR_BOX),Me=e.getParameter(e.VIEWPORT),et=new Pt().fromArray(Ce),We=new Pt().fromArray(Me);function Y(O,pe,X,se){let xe=new Uint8Array(4),ce=e.createTexture();e.bindTexture(O,ce),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Se=0;Se<X;Se++)if(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)e.texImage3D(pe,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,xe);else e.texImage2D(pe+Se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ce}let ue={};ue[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),fe(e.DEPTH_TEST),o.setFunc(bc),st(!1),at(mc),fe(e.CULL_FACE),ke(ei);function fe(O){if(u[O]!==!0)e.enable(O),u[O]=!0}function Xe(O){if(u[O]!==!1)e.disable(O),u[O]=!1}function J(O,pe){if(d[O]!==pe){if(e.bindFramebuffer(O,pe),d[O]=pe,O===e.DRAW_FRAMEBUFFER)d[e.FRAMEBUFFER]=pe;if(O===e.FRAMEBUFFER)d[e.DRAW_FRAMEBUFFER]=pe;return!0}return!1}function we(O,pe){let X=g,se=!1;if(O){if(X=p.get(pe),X===void 0)X=[],p.set(pe,X);let xe=O.textures;if(X.length!==xe.length||X[0]!==e.COLOR_ATTACHMENT0){for(let ce=0,Se=xe.length;ce<Se;ce++)X[ce]=e.COLOR_ATTACHMENT0+ce;X.length=xe.length,se=!0}}else if(X[0]!==e.BACK)X[0]=e.BACK,se=!0;if(se)e.drawBuffers(X)}function _e(O){if(v!==O)return e.useProgram(O),v=O,!0;return!1}let ae={[qs]:e.FUNC_ADD,[Au]:e.FUNC_SUBTRACT,[gu]:e.FUNC_REVERSE_SUBTRACT};ae[bu]=e.MIN,ae[Ga]=e.MAX;let ge={[xu]:e.ZERO,[Fr]:e.ONE,[_u]:e.SRC_COLOR,[yu]:e.SRC_ALPHA,[Ru]:e.SRC_ALPHA_SATURATE,[Eu]:e.DST_COLOR,[Su]:e.DST_ALPHA,[vu]:e.ONE_MINUS_SRC_COLOR,[Mu]:e.ONE_MINUS_SRC_ALPHA,[Tu]:e.ONE_MINUS_DST_COLOR,[wu]:e.ONE_MINUS_DST_ALPHA,[Cu]:e.CONSTANT_COLOR,[Pu]:e.ONE_MINUS_CONSTANT_COLOR,[Iu]:e.CONSTANT_ALPHA,[Du]:e.ONE_MINUS_CONSTANT_ALPHA};function ke(O,pe,X,se,xe,ce,Se,Ye,xt,_t){if(O===ei){if(A===!0)Xe(e.BLEND),A=!1;return}if(A===!1)fe(e.BLEND),A=!0;if(O!==Ha){if(O!==m||_t!==B){if(E!==qs||S!==qs)e.blendEquation(e.FUNC_ADD),E=qs,S=qs;if(_t)switch(O){case ti:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ht:e.blendFunc(e.ONE,e.ONE);break;case Ac:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",O);break}else switch(O){case ti:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ht:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ac:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",O);break}T=null,b=null,R=null,C=null,_.set(0,0,0),M=0,m=O,B=_t}return}if(xe=xe||pe,ce=ce||X,Se=Se||se,pe!==E||xe!==S)e.blendEquationSeparate(ae[pe],ae[xe]),E=pe,S=xe;if(X!==T||se!==b||ce!==R||Se!==C)e.blendFuncSeparate(ge[X],ge[se],ge[ce],ge[Se]),T=X,b=se,R=ce,C=Se;if(Ye.equals(_)===!1||xt!==M)e.blendColor(Ye.r,Ye.g,Ye.b,xt),_.copy(Ye),M=xt;m=O,B=!1}function He(O,pe){O.side===Vt?Xe(e.CULL_FACE):fe(e.CULL_FACE);let X=O.side===fn;if(pe)X=!X;st(X),O.blending===ti&&O.transparent===!1?ke(ei):ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),a.setMask(O.colorWrite);let se=O.stencilWrite;if(c.setTest(se),se)c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);Q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):Xe(e.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){if(D!==O){if(O)e.frontFace(e.CW);else e.frontFace(e.CCW);D=O}}function at(O){if(O!==fu){if(fe(e.CULL_FACE),O!==F)if(O===mc)e.cullFace(e.BACK);else if(O===pu)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Xe(e.CULL_FACE);F=O}function ut(O){if(O!==G){if(V)e.lineWidth(O);G=O}}function Q(O,pe,X){if(O){if(fe(e.POLYGON_OFFSET_FILL),L!==pe||W!==X){if(L=pe,W=X,o.getReversed())pe=-pe;e.polygonOffset(pe,X)}}else Xe(e.POLYGON_OFFSET_FILL)}function de(O){if(O)fe(e.SCISSOR_TEST);else Xe(e.SCISSOR_TEST)}function I(O){if(O===void 0)O=e.TEXTURE0+ee-1;if(N!==O)e.activeTexture(O),N=O}function Je(O,pe,X){if(X===void 0)if(N===null)X=e.TEXTURE0+ee-1;else X=N;let se=ie[X];if(se===void 0)se={type:void 0,texture:void 0},ie[X]=se;if(se.type!==O||se.texture!==pe){if(N!==X)e.activeTexture(X),N=X;e.bindTexture(O,pe||ue[O]),se.type=O,se.texture=pe}}function qe(){let O=ie[N];if(O!==void 0&&O.type!==void 0)e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function Te(){try{e.compressedTexImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function x(){try{e.texSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function U(){try{e.texSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function he(){try{e.compressedTexSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function ve(){try{e.texStorage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function Re(){try{e.texStorage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function te(){try{e.texImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function oe(){try{e.texImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function Ee(O){if(f[O]!==void 0)return f[O];else return e.getParameter(O)}function Be(O,pe){if(f[O]!==pe)e.pixelStorei(O,pe),f[O]=pe}function Pe(O){if(et.equals(O)===!1)e.scissor(O.x,O.y,O.z,O.w),et.copy(O)}function ye(O){if(We.equals(O)===!1)e.viewport(O.x,O.y,O.z,O.w),We.copy(O)}function ne(O,pe){let X=h.get(pe);if(X===void 0)X=new WeakMap,h.set(pe,X);let se=X.get(O);if(se===void 0)se=e.getUniformBlockIndex(pe,O.name),X.set(O,se)}function re(O,pe){let se=h.get(pe).get(O);if(l.get(pe)!==se)e.uniformBlockBinding(pe,se,O.__bindingPointIndex),l.set(pe,se)}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},N=null,ie={},d={},p=new WeakMap,g=[],v=null,A=!1,m=null,E=null,T=null,b=null,S=null,R=null,C=null,_=new Oe(0,0,0),M=0,B=!1,D=null,F=null,G=null,L=null,W=null,et.set(0,0,e.canvas.width,e.canvas.height),We.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:fe,disable:Xe,bindFramebuffer:J,drawBuffers:we,useProgram:_e,setBlending:ke,setMaterial:He,setFlipSided:st,setCullFace:at,setLineWidth:ut,setPolygonOffset:Q,setScissorTest:de,activeTexture:I,bindTexture:Je,unbindTexture:qe,compressedTexImage2D:Te,compressedTexImage3D:y,texImage2D:te,texImage3D:oe,pixelStorei:Be,getParameter:Ee,updateUBOMapping:ne,uniformBlockBinding:re,texStorage2D:ve,texStorage3D:Re,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:K,compressedTexSubImage3D:he,scissor:Pe,viewport:ye,reset:De}}function u3(e,t,i,s,r,a,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Fe,u=new WeakMap,f=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(y){}function v(y,x){return g?new OffscreenCanvas(y,x):Hs("canvas")}function A(y,x,U){let K=1,he=Te(y);if(he.width>U||he.height>U)K=U/Math.max(he.width,he.height);if(K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let ve=Math.floor(K*he.width),Re=Math.floor(K*he.height);if(d===void 0)d=v(ve,Re);let te=x?v(ve,Re):d;return te.width=ve,te.height=Re,te.getContext("2d").drawImage(y,0,0,ve,Re),$e("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ve+"x"+Re+")."),te}else{if("data"in y)$e("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+").");return y}return y}function m(y){return y.generateMipmaps}function E(y){e.generateMipmap(y)}function T(y){if(y.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(y.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function b(y,x,U,K,he,ve=!1){if(y!==null){if(e[y]!==void 0)return e[y];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Re;if(K){if(Re=t.get("EXT_texture_norm16"),!Re)$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let te=x;if(x===e.RED){if(U===e.FLOAT)te=e.R32F;if(U===e.HALF_FLOAT)te=e.R16F;if(U===e.UNSIGNED_BYTE)te=e.R8;if(U===e.UNSIGNED_SHORT&&Re)te=Re.R16_EXT;if(U===e.SHORT&&Re)te=Re.R16_SNORM_EXT}if(x===e.RED_INTEGER){if(U===e.UNSIGNED_BYTE)te=e.R8UI;if(U===e.UNSIGNED_SHORT)te=e.R16UI;if(U===e.UNSIGNED_INT)te=e.R32UI;if(U===e.BYTE)te=e.R8I;if(U===e.SHORT)te=e.R16I;if(U===e.INT)te=e.R32I}if(x===e.RG){if(U===e.FLOAT)te=e.RG32F;if(U===e.HALF_FLOAT)te=e.RG16F;if(U===e.UNSIGNED_BYTE)te=e.RG8;if(U===e.UNSIGNED_SHORT&&Re)te=Re.RG16_EXT;if(U===e.SHORT&&Re)te=Re.RG16_SNORM_EXT}if(x===e.RG_INTEGER){if(U===e.UNSIGNED_BYTE)te=e.RG8UI;if(U===e.UNSIGNED_SHORT)te=e.RG16UI;if(U===e.UNSIGNED_INT)te=e.RG32UI;if(U===e.BYTE)te=e.RG8I;if(U===e.SHORT)te=e.RG16I;if(U===e.INT)te=e.RG32I}if(x===e.RGB_INTEGER){if(U===e.UNSIGNED_BYTE)te=e.RGB8UI;if(U===e.UNSIGNED_SHORT)te=e.RGB16UI;if(U===e.UNSIGNED_INT)te=e.RGB32UI;if(U===e.BYTE)te=e.RGB8I;if(U===e.SHORT)te=e.RGB16I;if(U===e.INT)te=e.RGB32I}if(x===e.RGBA_INTEGER){if(U===e.UNSIGNED_BYTE)te=e.RGBA8UI;if(U===e.UNSIGNED_SHORT)te=e.RGBA16UI;if(U===e.UNSIGNED_INT)te=e.RGBA32UI;if(U===e.BYTE)te=e.RGBA8I;if(U===e.SHORT)te=e.RGBA16I;if(U===e.INT)te=e.RGBA32I}if(x===e.RGB){if(U===e.UNSIGNED_SHORT&&Re)te=Re.RGB16_EXT;if(U===e.SHORT&&Re)te=Re.RGB16_SNORM_EXT;if(U===e.UNSIGNED_INT_5_9_9_9_REV)te=e.RGB9_E5;if(U===e.UNSIGNED_INT_10F_11F_11F_REV)te=e.R11F_G11F_B10F}if(x===e.RGBA){let oe=ve?ul:At.getTransfer(he);if(U===e.FLOAT)te=e.RGBA32F;if(U===e.HALF_FLOAT)te=e.RGBA16F;if(U===e.UNSIGNED_BYTE)te=oe===Ft?e.SRGB8_ALPHA8:e.RGBA8;if(U===e.UNSIGNED_SHORT&&Re)te=Re.RGBA16_EXT;if(U===e.SHORT&&Re)te=Re.RGBA16_SNORM_EXT;if(U===e.UNSIGNED_SHORT_4_4_4_4)te=e.RGBA4;if(U===e.UNSIGNED_SHORT_5_5_5_1)te=e.RGB5_A1}if(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)t.get("EXT_color_buffer_float");return te}function S(y,x){let U;if(y){if(x===null||x===Bi||x===Ys)U=e.DEPTH24_STENCIL8;else if(x===_i)U=e.DEPTH32F_STENCIL8;else if(x===Ur)U=e.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Bi||x===Ys)U=e.DEPTH_COMPONENT24;else if(x===_i)U=e.DEPTH_COMPONENT32F;else if(x===Ur)U=e.DEPTH_COMPONENT16;return U}function R(y,x){if(m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xn&&y.minFilter!==kt)return Math.log2(Math.max(x.width,x.height))+1;else if(y.mipmaps!==void 0&&y.mipmaps.length>0)return y.mipmaps.length;else if(y.isCompressedTexture&&Array.isArray(y.image))return x.mipmaps.length;else return 1}function C(y){let x=y.target;if(x.removeEventListener("dispose",C),M(x),x.isVideoTexture)u.delete(x);if(x.isHTMLTexture)f.delete(x)}function _(y){let x=y.target;x.removeEventListener("dispose",_),D(x)}function M(y){let x=s.get(y);if(x.__webglInit===void 0)return;let U=y.source,K=p.get(U);if(K){let he=K[x.__cacheKey];if(he.usedTimes--,he.usedTimes===0)B(y);if(Object.keys(K).length===0)p.delete(U)}s.remove(y)}function B(y){let x=s.get(y);e.deleteTexture(x.__webglTexture);let U=y.source,K=p.get(U);delete K[x.__cacheKey],o.memory.textures--}function D(y){let x=s.get(y);if(y.depthTexture)y.depthTexture.dispose(),s.remove(y.depthTexture);if(y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let he=0;he<x.__webglFramebuffer[K].length;he++)e.deleteFramebuffer(x.__webglFramebuffer[K][he]);else e.deleteFramebuffer(x.__webglFramebuffer[K]);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)e.deleteFramebuffer(x.__webglFramebuffer[K]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)e.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let K=0;K<x.__webglColorRenderbuffer.length;K++)if(x.__webglColorRenderbuffer[K])e.deleteRenderbuffer(x.__webglColorRenderbuffer[K])}if(x.__webglDepthRenderbuffer)e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=y.textures;for(let K=0,he=U.length;K<he;K++){let ve=s.get(U[K]);if(ve.__webglTexture)e.deleteTexture(ve.__webglTexture),o.memory.textures--;s.remove(U[K])}s.remove(y)}let F=0;function G(){F=0}function L(){return F}function W(y){F=y}function ee(){let y=F;if(y>=r.maxTextures)$e("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+r.maxTextures);return F+=1,y}function V(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function H(y,x){let U=s.get(y);if(y.isVideoTexture)Je(y);if(y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&U.__version!==y.version){let K=y.image;if(K===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(U,y,x);return}}else if(y.isExternalTexture)U.__webglTexture=y.sourceTexture?y.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+x)}function k(y,x){let U=s.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){Xe(U,y,x);return}else if(y.isExternalTexture)U.__webglTexture=y.sourceTexture?y.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+x)}function N(y,x){let U=s.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){Xe(U,y,x);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+x)}function ie(y,x){let U=s.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&U.__version!==y.version){J(U,y,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+x)}let Ce={[ni]:e.REPEAT,[js]:e.CLAMP_TO_EDGE,[qa]:e.MIRRORED_REPEAT},Me={[Xn]:e.NEAREST,[Xa]:e.NEAREST_MIPMAP_NEAREST,[is]:e.NEAREST_MIPMAP_LINEAR,[kt]:e.LINEAR,[Ks]:e.LINEAR_MIPMAP_NEAREST,[ii]:e.LINEAR_MIPMAP_LINEAR},et={[Ju]:e.NEVER,[td]:e.ALWAYS,[Zu]:e.LESS,[eo]:e.LEQUAL,[$u]:e.EQUAL,[to]:e.GEQUAL,[Qu]:e.GREATER,[ed]:e.NOTEQUAL};function We(y,x){if(x.type===_i&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===kt||x.magFilter===Ks||x.magFilter===is||x.magFilter===ii||x.minFilter===kt||x.minFilter===Ks||x.minFilter===is||x.minFilter===ii))$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(y,e.TEXTURE_WRAP_S,Ce[x.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,Ce[x.wrapT]),y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)e.texParameteri(y,e.TEXTURE_WRAP_R,Ce[x.wrapR]);if(e.texParameteri(y,e.TEXTURE_MAG_FILTER,Me[x.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction)e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,et[x.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xn)return;if(x.minFilter!==is&&x.minFilter!==ii)return;if(x.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function Y(y,x){let U=!1;if(y.__webglInit===void 0)y.__webglInit=!0,x.addEventListener("dispose",C);let K=x.source,he=p.get(K);if(he===void 0)he={},p.set(K,he);let ve=V(x);if(ve!==y.__cacheKey){if(he[ve]===void 0)he[ve]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0;he[ve].usedTimes++;let Re=he[y.__cacheKey];if(Re!==void 0){if(he[y.__cacheKey].usedTimes--,Re.usedTimes===0)B(x)}y.__cacheKey=ve,y.__webglTexture=he[ve].texture}return U}function ue(y,x,U){return Math.floor(Math.floor(y/U)/x)}function fe(y,x,U,K){let ve=y.updateRanges;if(ve.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,U,K,x.data);else{ve.sort((Be,Pe)=>Be.start-Pe.start);let Re=0;for(let Be=1;Be<ve.length;Be++){let Pe=ve[Re],ye=ve[Be],ne=Pe.start+Pe.count,re=ue(ye.start,x.width,4),De=ue(Pe.start,x.width,4);if(ye.start<=ne+1&&re===De&&ue(ye.start+ye.count-1,x.width,4)===re)Pe.count=Math.max(Pe.count,ye.start+ye.count-Pe.start);else++Re,ve[Re]=ye}ve.length=Re+1;let te=i.getParameter(e.UNPACK_ROW_LENGTH),oe=i.getParameter(e.UNPACK_SKIP_PIXELS),Ee=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Be=0,Pe=ve.length;Be<Pe;Be++){let ye=ve[Be],ne=Math.floor(ye.start/4),re=Math.ceil(ye.count/4),De=ne%x.width,O=Math.floor(ne/x.width),pe=re,X=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,De),i.pixelStorei(e.UNPACK_SKIP_ROWS,O),i.texSubImage2D(e.TEXTURE_2D,0,De,O,pe,1,U,K,x.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,te),i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function Xe(y,x,U){let K=e.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)K=e.TEXTURE_2D_ARRAY;if(x.isData3DTexture)K=e.TEXTURE_3D;let he=Y(y,x),ve=x.source;i.bindTexture(K,y.__webglTexture,e.TEXTURE0+U);let Re=s.get(ve);if(ve.version!==Re.__version||he===!0){if(i.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let X=At.getPrimaries(At.workingColorSpace),se=x.colorSpace===Sn?null:At.getPrimaries(x.colorSpace),xe=x.colorSpace===Sn||X===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let oe=A(x.image,!1,r.maxTextureSize);oe=qe(x,oe);let Ee=a.convert(x.format,x.colorSpace),Be=a.convert(x.type),Pe=b(x.internalFormat,Ee,Be,x.normalized,x.colorSpace,x.isVideoTexture);We(K,x);let ye,ne=x.mipmaps,re=x.isVideoTexture!==!0,De=Re.__version===void 0||he===!0,O=ve.dataReady,pe=R(x,oe);if(x.isDepthTexture){if(Pe=S(x.format===rs,x.type),De)if(re)i.texStorage2D(e.TEXTURE_2D,1,Pe,oe.width,oe.height);else i.texImage2D(e.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Ee,Be,null)}else if(x.isDataTexture)if(ne.length>0){if(re&&De)i.texStorage2D(e.TEXTURE_2D,pe,Pe,ne[0].width,ne[0].height);for(let X=0,se=ne.length;X<se;X++)if(ye=ne[X],re){if(O)i.texSubImage2D(e.TEXTURE_2D,X,0,0,ye.width,ye.height,Ee,Be,ye.data)}else i.texImage2D(e.TEXTURE_2D,X,Pe,ye.width,ye.height,0,Ee,Be,ye.data);x.generateMipmaps=!1}else if(re){if(De)i.texStorage2D(e.TEXTURE_2D,pe,Pe,oe.width,oe.height);if(O)fe(x,oe,Ee,Be)}else i.texImage2D(e.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Ee,Be,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(re&&De)i.texStorage3D(e.TEXTURE_2D_ARRAY,pe,Pe,ne[0].width,ne[0].height,oe.depth);for(let X=0,se=ne.length;X<se;X++)if(ye=ne[X],x.format!==Ln)if(Ee!==null)if(re){if(O)if(x.layerUpdates.size>0){let xe=Wl(ye.width,ye.height,x.format,x.type);for(let ce of x.layerUpdates){let Se=ye.data.subarray(ce*xe/ye.data.BYTES_PER_ELEMENT,(ce+1)*xe/ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,ce,ye.width,ye.height,1,Ee,Se)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,oe.depth,Ee,ye.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,Pe,ye.width,ye.height,oe.depth,0,ye.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(re){if(O)i.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,oe.depth,Ee,Be,ye.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,X,Pe,ye.width,ye.height,oe.depth,0,Ee,Be,ye.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(re&&De)i.texStorage2D(e.TEXTURE_2D,pe,Pe,ne[0].width,ne[0].height);for(let X=0,se=ne.length;X<se;X++)if(ye=ne[X],x.format!==Ln)if(Ee!==null)if(re){if(O)i.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,ye.width,ye.height,Ee,ye.data)}else i.compressedTexImage2D(e.TEXTURE_2D,X,Pe,ye.width,ye.height,0,ye.data);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(re){if(O)i.texSubImage2D(e.TEXTURE_2D,X,0,0,ye.width,ye.height,Ee,Be,ye.data)}else i.texImage2D(e.TEXTURE_2D,X,Pe,ye.width,ye.height,0,Ee,Be,ye.data)}else if(x.isDataArrayTexture)if(re){if(De)i.texStorage3D(e.TEXTURE_2D_ARRAY,pe,Pe,oe.width,oe.height,oe.depth);if(O)if(x.layerUpdates.size>0){let X=Wl(oe.width,oe.height,x.format,x.type);for(let se of x.layerUpdates){let xe=oe.data.subarray(se*X/oe.data.BYTES_PER_ELEMENT,(se+1)*X/oe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,Ee,Be,xe)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Be,oe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,Ee,Be,oe.data);else if(x.isData3DTexture)if(re){if(De)i.texStorage3D(e.TEXTURE_3D,pe,Pe,oe.width,oe.height,oe.depth);if(O)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Be,oe.data)}else i.texImage3D(e.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,Ee,Be,oe.data);else if(x.isFramebufferTexture){if(De)if(re)i.texStorage2D(e.TEXTURE_2D,pe,Pe,oe.width,oe.height);else{let X=oe.width,se=oe.height;for(let xe=0;xe<pe;xe++)i.texImage2D(e.TEXTURE_2D,xe,Pe,X,se,0,Ee,Be,null),X>>=1,se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let X=e.canvas;if(!X.hasAttribute("layoutsubtree"))X.setAttribute("layoutsubtree","true");if(oe.parentNode!==X){X.appendChild(oe),f.add(x),X.onpaint=(se)=>{let xe=se.changedElements;for(let ce of f)if(xe.includes(ce.image))ce.needsUpdate=!0},X.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let{RGBA:xe,RGBA:ce,UNSIGNED_BYTE:Se}=e;e.texElementImage2D(e.TEXTURE_2D,0,xe,ce,Se,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ne.length>0){if(re&&De){let X=Te(ne[0]);i.texStorage2D(e.TEXTURE_2D,pe,Pe,X.width,X.height)}for(let X=0,se=ne.length;X<se;X++)if(ye=ne[X],re){if(O)i.texSubImage2D(e.TEXTURE_2D,X,0,0,Ee,Be,ye)}else i.texImage2D(e.TEXTURE_2D,X,Pe,Ee,Be,ye);x.generateMipmaps=!1}else if(re){if(De){let X=Te(oe);i.texStorage2D(e.TEXTURE_2D,pe,Pe,X.width,X.height)}if(O)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Ee,Be,oe)}else i.texImage2D(e.TEXTURE_2D,0,Pe,Ee,Be,oe);if(m(x))E(K);if(Re.__version=ve.version,x.onUpdate)x.onUpdate(x)}y.__version=x.version}function J(y,x,U){if(x.image.length!==6)return;let K=Y(y,x),he=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+U);let ve=s.get(he);if(he.version!==ve.__version||K===!0){i.activeTexture(e.TEXTURE0+U);let Re=At.getPrimaries(At.workingColorSpace),te=x.colorSpace===Sn?null:At.getPrimaries(x.colorSpace),oe=x.colorSpace===Sn||Re===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let ce=0;ce<6;ce++){if(!Ee&&!Be)Pe[ce]=A(x.image[ce],!0,r.maxCubemapSize);else Pe[ce]=Be?x.image[ce].image:x.image[ce];Pe[ce]=qe(x,Pe[ce])}let ye=Pe[0],ne=a.convert(x.format,x.colorSpace),re=a.convert(x.type),De=b(x.internalFormat,ne,re,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,pe=ve.__version===void 0||K===!0,X=he.dataReady,se=R(x,ye);We(e.TEXTURE_CUBE_MAP,x);let xe;if(Ee){if(O&&pe)i.texStorage2D(e.TEXTURE_CUBE_MAP,se,De,ye.width,ye.height);for(let ce=0;ce<6;ce++){xe=Pe[ce].mipmaps;for(let Se=0;Se<xe.length;Se++){let Ye=xe[Se];if(x.format!==Ln)if(ne!==null)if(O){if(X)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,0,0,Ye.width,Ye.height,ne,Ye.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,De,Ye.width,Ye.height,0,Ye.data);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(X)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,0,0,Ye.width,Ye.height,ne,re,Ye.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,De,Ye.width,Ye.height,0,ne,re,Ye.data)}}}else{if(xe=x.mipmaps,O&&pe){if(xe.length>0)se++;let ce=Te(Pe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,se,De,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Be){if(O){if(X)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe[ce].width,Pe[ce].height,ne,re,Pe[ce].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,De,Pe[ce].width,Pe[ce].height,0,ne,re,Pe[ce].data);for(let Se=0;Se<xe.length;Se++){let xt=xe[Se].image[ce].image;if(O){if(X)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,0,0,xt.width,xt.height,ne,re,xt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,De,xt.width,xt.height,0,ne,re,xt.data)}}else{if(O){if(X)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ne,re,Pe[ce])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,De,ne,re,Pe[ce]);for(let Se=0;Se<xe.length;Se++){let Ye=xe[Se];if(O){if(X)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,0,0,ne,re,Ye.image[ce])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,De,ne,re,Ye.image[ce])}}}if(m(x))E(e.TEXTURE_CUBE_MAP);if(ve.__version=he.version,x.onUpdate)x.onUpdate(x)}y.__version=x.version}function we(y,x,U,K,he,ve){let Re=a.convert(U.format,U.colorSpace),te=a.convert(U.type),oe=b(U.internalFormat,Re,te,U.normalized,U.colorSpace),Ee=s.get(x),Be=s.get(U);if(Be.__renderTarget=x,!Ee.__hasExternalTextures){let Pe=Math.max(1,x.width>>ve),ye=Math.max(1,x.height>>ve);if(he===e.TEXTURE_3D||he===e.TEXTURE_2D_ARRAY)i.texImage3D(he,ve,oe,Pe,ye,x.depth,0,Re,te,null);else i.texImage2D(he,ve,oe,Pe,ye,0,Re,te,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,y),I(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,he,Be.__webglTexture,0,de(x));else if(he===e.TEXTURE_2D||he>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,K,he,Be.__webglTexture,ve);i.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(y,x,U){if(e.bindRenderbuffer(e.RENDERBUFFER,y),x.depthBuffer){let K=x.depthTexture,he=K&&K.isDepthTexture?K.type:null,ve=S(x.stencilBuffer,he),Re=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(I(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(x),ve,x.width,x.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,de(x),ve,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,ve,x.width,x.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Re,e.RENDERBUFFER,y)}else{let K=x.textures;for(let he=0;he<K.length;he++){let ve=K[he],Re=a.convert(ve.format,ve.colorSpace),te=a.convert(ve.type),oe=b(ve.internalFormat,Re,te,ve.normalized,ve.colorSpace);if(I(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(x),oe,x.width,x.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,de(x),oe,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,oe,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ae(y,x,U){let K=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=s.get(x.depthTexture);if(he.__renderTarget=x,!he.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(K){if(he.__webglInit===void 0)he.__webglInit=!0,x.depthTexture.addEventListener("dispose",C);if(he.__webglTexture===void 0){he.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,he.__webglTexture),We(e.TEXTURE_CUBE_MAP,x.depthTexture);let Ee=a.convert(x.depthTexture.format),Be=a.convert(x.depthTexture.type),Pe;if(x.depthTexture.format===ss)Pe=e.DEPTH_COMPONENT24;else if(x.depthTexture.format===rs)Pe=e.DEPTH24_STENCIL8;for(let ye=0;ye<6;ye++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Pe,x.width,x.height,0,Ee,Be,null)}}else H(x.depthTexture,0);let ve=he.__webglTexture,Re=de(x),te=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,oe=x.depthTexture.format===rs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===ss)if(I(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,te,ve,0,Re);else e.framebufferTexture2D(e.FRAMEBUFFER,oe,te,ve,0);else if(x.depthTexture.format===rs)if(I(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,te,ve,0,Re);else e.framebufferTexture2D(e.FRAMEBUFFER,oe,te,ve,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(y){let x=s.get(y),U=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){let K=y.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(K){let he=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",he)};K.addEventListener("dispose",he),x.__depthDisposeCallback=he}x.__boundDepthTexture=K}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)ae(x.__webglFramebuffer[K],y,K);else{let K=y.texture.mipmaps;if(K&&K.length>0)ae(x.__webglFramebuffer[0],y,0);else ae(x.__webglFramebuffer,y,0)}else if(U){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=e.createRenderbuffer(),_e(x.__webglDepthbuffer[K],y,!1);else{let he=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=x.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,ve)}}else{let K=y.texture.mipmaps;if(K&&K.length>0)i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),_e(x.__webglDepthbuffer,y,!1);else{let he=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,ve)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(y,x,U){let K=s.get(y);if(x!==void 0)we(K.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(U!==void 0)ge(y)}function He(y){let x=y.texture,U=s.get(y),K=s.get(x);y.addEventListener("dispose",_);let he=y.textures,ve=y.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(!Re){if(K.__webglTexture===void 0)K.__webglTexture=e.createTexture();K.__version=x.version,o.memory.textures++}if(ve){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let oe=0;oe<x.mipmaps.length;oe++)U.__webglFramebuffer[te][oe]=e.createFramebuffer()}else U.__webglFramebuffer[te]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<x.mipmaps.length;te++)U.__webglFramebuffer[te]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Re)for(let te=0,oe=he.length;te<oe;te++){let Ee=s.get(he[te]);if(Ee.__webglTexture===void 0)Ee.__webglTexture=e.createTexture(),o.memory.textures++}if(y.samples>0&&I(y)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<he.length;te++){let oe=he[te];U.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[te]);let Ee=a.convert(oe.format,oe.colorSpace),Be=a.convert(oe.type),Pe=b(oe.internalFormat,Ee,Be,oe.normalized,oe.colorSpace,y.isXRRenderTarget===!0),ye=de(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,Pe,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,U.__webglColorRenderbuffer[te])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer)U.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(U.__webglDepthRenderbuffer,y,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ve){i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),We(e.TEXTURE_CUBE_MAP,x);for(let te=0;te<6;te++)if(x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)we(U.__webglFramebuffer[te][oe],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe);else we(U.__webglFramebuffer[te],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);if(m(x))E(e.TEXTURE_CUBE_MAP);i.unbindTexture()}else if(Re){for(let te=0,oe=he.length;te<oe;te++){let Ee=he[te],Be=s.get(Ee),Pe=e.TEXTURE_2D;if(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)Pe=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Pe,Be.__webglTexture),We(Pe,Ee),we(U.__webglFramebuffer,y,Ee,e.COLOR_ATTACHMENT0+te,Pe,0),m(Ee))E(Pe)}i.unbindTexture()}else{let te=e.TEXTURE_2D;if(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)te=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(te,K.__webglTexture),We(te,x),x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)we(U.__webglFramebuffer[oe],y,x,e.COLOR_ATTACHMENT0,te,oe);else we(U.__webglFramebuffer,y,x,e.COLOR_ATTACHMENT0,te,0);if(m(x))E(te);i.unbindTexture()}if(y.depthBuffer)ge(y)}function st(y){let x=y.textures;for(let U=0,K=x.length;U<K;U++){let he=x[U];if(m(he)){let ve=T(y),Re=s.get(he).__webglTexture;i.bindTexture(ve,Re),E(ve),i.unbindTexture()}}}let at=[],ut=[];function Q(y){if(y.samples>0){if(I(y)===!1){let{textures:x,width:U,height:K}=y,he=e.COLOR_BUFFER_BIT,ve=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Re=s.get(y),te=x.length>1;if(te)for(let Ee=0;Ee<x.length;Ee++)i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let oe=y.texture.mipmaps;if(oe&&oe.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(y.resolveDepthBuffer){if(y.depthBuffer)he|=e.DEPTH_BUFFER_BIT;if(y.stencilBuffer&&y.resolveStencilBuffer)he|=e.STENCIL_BUFFER_BIT}if(te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);let Be=s.get(x[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Be,0)}if(e.blitFramebuffer(0,0,U,K,0,0,U,K,he,e.NEAREST),l===!0){if(at.length=0,ut.length=0,at.push(e.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1)at.push(ve),ut.push(ve),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ut);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let Ee=0;Ee<x.length;Ee++){i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);let Be=s.get(x[Ee]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,Be,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){let x=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function de(y){return Math.min(r.maxSamples,y.samples)}function I(y){let x=s.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Je(y){let x=o.render.frame;if(u.get(y)!==x)u.set(y,x),y.update()}function qe(y,x){let{colorSpace:U,format:K,type:he}=y;if(y.isCompressedTexture===!0||y.isVideoTexture===!0)return x;if(U!==wn&&U!==Sn)if(At.getTransfer(U)===Ft){if(K!==Ln||he!==Mn)$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else rt("WebGLTextures: Unsupported texture color space:",U);return x}function Te(y){if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement)h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height;else if(typeof VideoFrame<"u"&&y instanceof VideoFrame)h.width=y.displayWidth,h.height=y.displayHeight;else h.width=y.width,h.height=y.height;return h}this.allocateTextureUnit=ee,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=ie,this.rebindTextures=ke,this.setupRenderTarget=He,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d3(e,t){function i(s,r=Sn){let a,o=At.getTransfer(r);if(s===Mn)return e.UNSIGNED_BYTE;if(s===Tc)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Rc)return e.UNSIGNED_SHORT_5_5_5_1;if(s===qu)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===Xu)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vu)return e.BYTE;if(s===Wu)return e.SHORT;if(s===Ur)return e.UNSIGNED_SHORT;if(s===Ec)return e.INT;if(s===Bi)return e.UNSIGNED_INT;if(s===_i)return e.FLOAT;if(s===si)return e.HALF_FLOAT;if(s===ju)return e.ALPHA;if(s===Ku)return e.RGB;if(s===Ln)return e.RGBA;if(s===ss)return e.DEPTH_COMPONENT;if(s===rs)return e.DEPTH_STENCIL;if(s===Js)return e.RED;if(s===Cc)return e.RED_INTEGER;if(s===as)return e.RG;if(s===Pc)return e.RG_INTEGER;if(s===Ic)return e.RGBA_INTEGER;if(s===ja||s===Ka||s===Ya||s===Ja)if(o===Ft)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dc||s===Lc||s===Fc||s===Nc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uc||s===Oc||s===Bc||s===kc||s===zc||s===Za||s===Hc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Uc||s===Oc)return o===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===kc)return a.COMPRESSED_R11_EAC;if(s===zc)return a.COMPRESSED_SIGNED_R11_EAC;if(s===Za)return a.COMPRESSED_RG11_EAC;if(s===Hc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gc||s===Vc||s===Wc||s===qc||s===Xc||s===jc||s===Kc||s===Yc||s===Jc||s===Zc||s===$c||s===Qc||s===el||s===tl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$c)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qc)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===el)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tl)return o===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nl||s===il||s===sl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===nl)return o===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===il)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rl||s===al||s===$a||s===ol)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===rl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(s===Ys)return e.UNSIGNED_INT_24_8;return e[s]!==void 0?e[s]:null}return{convert:i}}var f3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $d{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new uo(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:f3,fragmentShader:p3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Bn(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qd extends vi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",v=new $d,A={},m=t.getContextAttributes(),E=null,T=null,b=[],S=[],R=new Fe,C=null,_=null,M=new Qt;M.viewport=new Pt;let B=new Qt;B.viewport=new Pt;let D=[M,B],F=new zl,G=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=b[Y];if(ue===void 0)ue=new kr,b[Y]=ue;return ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=b[Y];if(ue===void 0)ue=new kr,b[Y]=ue;return ue.getGripSpace()},this.getHand=function(Y){let ue=b[Y];if(ue===void 0)ue=new kr,b[Y]=ue;return ue.getHandSpace()};function W(Y){let ue=S.indexOf(Y.inputSource);if(ue===-1)return;let fe=b[ue];if(fe!==void 0)fe.update(Y.inputSource,Y.frame,l||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource})}function ee(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<b.length;Y++){let ue=S[Y];if(ue===null)continue;S[Y]=null,b[Y].disconnect(ue)}G=null,L=null,v.reset();for(let Y in A)delete A[Y];if(e.setRenderTarget(E),d=null,f=null,u=null,s=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),_!==null){let Y=_.camera;Y.fov=_.fov,Y.zoom=_.zoom,Y.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){if(r=Y,i.isPresenting===!0)$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){if(o=Y,i.isPresenting===!0)$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){if(u===null&&g)u=new XRWebGLBinding(s,t);return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0)await t.makeXRCompatible();if(C=e.getPixelRatio(),e.getSize(R),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new En(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let fe=null,Xe=null,J=null;if(m.depth)J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?rs:ss,Xe=m.stencil?Ys:Bi;let we={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new En(f.textureWidth,f.textureHeight,{format:Ln,type:Mn,depthTexture:new cs(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(Y){for(let ue=0;ue<Y.removed.length;ue++){let fe=Y.removed[ue],Xe=S.indexOf(fe);if(Xe>=0)S[Xe]=null,b[Xe].disconnect(fe)}for(let ue=0;ue<Y.added.length;ue++){let fe=Y.added[ue],Xe=S.indexOf(fe);if(Xe===-1){for(let we=0;we<b.length;we++)if(we>=S.length){S.push(fe),Xe=we;break}else if(S[we]===null){S[we]=fe,Xe=we;break}if(Xe===-1)break}let J=b[Xe];if(J)J.connect(fe)}}let H=new P,k=new P;function N(Y,ue,fe){H.setFromMatrixPosition(ue.matrixWorld),k.setFromMatrixPosition(fe.matrixWorld);let Xe=H.distanceTo(k),J=ue.projectionMatrix.elements,we=fe.projectionMatrix.elements,_e=J[14]/(J[10]-1),ae=J[14]/(J[10]+1),ge=(J[9]+1)/J[5],ke=(J[9]-1)/J[5],He=(J[8]-1)/J[0],st=(we[8]+1)/we[0],at=_e*He,ut=_e*st,Q=Xe/(-He+st),de=Q*-He;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Q),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),J[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let I=_e+Q,Je=ae+Q,qe=at-de,Te=ut+(Xe-de),y=ge*ae/Je*I,x=ke*ae/Je*I;Y.projectionMatrix.makePerspective(qe,Te,y,x,I,Je),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ue){if(ue===null)Y.matrixWorld.copy(Y.matrix);else Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix);Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let{near:ue,far:fe}=Y;if(v.texture!==null){if(v.depthNear>0)ue=v.depthNear;if(v.depthFar>0)fe=v.depthFar}if(F.near=B.near=M.near=ue,F.far=B.far=M.far=fe,G!==F.near||L!==F.far)s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,L=F.far;F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&-5,B.layers.mask=F.layers.mask&-3;let Xe=Y.parent,J=F.cameras;ie(F,Xe);for(let we=0;we<J.length;we++)ie(J[we],Xe);if(J.length===2)N(F,M,B);else F.projectionMatrix.copy(M.projectionMatrix);if(_===null&&Y.isPerspectiveCamera)_={camera:Y,fov:Y.fov,zoom:Y.zoom};Ce(Y,F,Xe)};function Ce(Y,ue,fe){if(fe===null)Y.matrix.copy(ue.matrixWorld);else Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld);if(Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera)Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(f===null&&d===null)return;return c},this.setFoveation=function(Y){if(c=Y,f!==null)f.fixedFoveation=Y;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=Y},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(Y){return A[Y]};let Me=null;function et(Y,ue){if(h=ue.getViewerPose(l||a),p=ue,h!==null){let fe=h.views;if(d!==null)e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T);let Xe=!1;if(fe.length!==F.cameras.length)F.cameras.length=0,Xe=!0;for(let ae=0;ae<fe.length;ae++){let ge=fe[ae],ke=null;if(d!==null)ke=d.getViewport(ge);else{let st=u.getViewSubImage(f,ge);if(ke=st.viewport,ae===0)e.setRenderTargetTextures(T,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(T)}let He=D[ae];if(He===void 0)He=new Qt,He.layers.enable(ae),He.viewport=new Pt,D[ae]=He;if(He.matrix.fromArray(ge.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ge.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ke.x,ke.y,ke.width,ke.height),ae===0)F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Xe===!0)F.cameras.push(He)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let ae=u.getDepthInformation(fe[0]);if(ae&&ae.isValid&&ae.texture)v.init(ae,s.renderState)}if(J&&J.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let ae=0;ae<fe.length;ae++){let ge=fe[ae].camera;if(ge){let ke=A[ge];if(!ke)ke=new uo,A[ge]=ke;let He=u.getCameraImage(ge);ke.sourceTexture=He}}}}for(let fe=0;fe<b.length;fe++){let Xe=S[fe],J=b[fe];if(Xe!==null&&J!==void 0)J.update(Xe,ue,l||a)}if(Me)Me(Y,ue);if(ue.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ue});p=null}let We=new Hd;We.setAnimationLoop(et),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}var m3=new nt,ef=new ct;ef.set(-1,0,0,0,1,0,0,0,1);function A3(e,t){function i(A,m){if(A.matrixAutoUpdate===!0)A.updateMatrix();m.value.copy(A.matrix)}function s(A,m){if(m.color.getRGB(A.fogColor.value,Rl(e)),m.isFog)A.fogNear.value=m.near,A.fogFar.value=m.far;else if(m.isFogExp2)A.fogDensity.value=m.density}function r(A,m,E,T,b){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)a(A,m);else if(m.isMeshLambertMaterial){if(a(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)a(A,m),f(A,m);else if(m.isMeshPhongMaterial){if(a(A,m),u(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(a(A,m),d(A,m),m.isMeshPhysicalMaterial)p(A,m,b)}else if(m.isMeshMatcapMaterial)a(A,m),g(A,m);else if(m.isMeshDepthMaterial)a(A,m);else if(m.isMeshDistanceMaterial)a(A,m),v(A,m);else if(m.isMeshNormalMaterial)a(A,m);else if(m.isLineBasicMaterial){if(o(A,m),m.isLineDashedMaterial)c(A,m)}else if(m.isPointsMaterial)l(A,m,E,T);else if(m.isSpriteMaterial)h(A,m);else if(m.isShadowMaterial)A.color.value.copy(m.color),A.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function a(A,m){if(A.opacity.value=m.opacity,m.color)A.diffuse.value.copy(m.color);if(m.emissive)A.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.bumpMap){if(A.bumpMap.value=m.bumpMap,i(m.bumpMap,A.bumpMapTransform),A.bumpScale.value=m.bumpScale,m.side===fn)A.bumpScale.value*=-1}if(m.normalMap){if(A.normalMap.value=m.normalMap,i(m.normalMap,A.normalMapTransform),A.normalScale.value.copy(m.normalScale),m.side===fn)A.normalScale.value.negate()}if(m.displacementMap)A.displacementMap.value=m.displacementMap,i(m.displacementMap,A.displacementMapTransform),A.displacementScale.value=m.displacementScale,A.displacementBias.value=m.displacementBias;if(m.emissiveMap)A.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,A.emissiveMapTransform);if(m.specularMap)A.specularMap.value=m.specularMap,i(m.specularMap,A.specularMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest;let E=t.get(m),{envMap:T,envMapRotation:b}=E;if(T){if(A.envMap.value=T,A.envMapRotation.value.setFromMatrix4(m3.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)A.envMapRotation.value.premultiply(ef);A.reflectivity.value=m.reflectivity,A.ior.value=m.ior,A.refractionRatio.value=m.refractionRatio}if(m.lightMap)A.lightMap.value=m.lightMap,A.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,A.lightMapTransform);if(m.aoMap)A.aoMap.value=m.aoMap,A.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,A.aoMapTransform)}function o(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,m.map)A.map.value=m.map,i(m.map,A.mapTransform)}function c(A,m){A.dashSize.value=m.dashSize,A.totalSize.value=m.dashSize+m.gapSize,A.scale.value=m.scale}function l(A,m,E,T){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.size.value=m.size*E,A.scale.value=T*0.5,m.map)A.map.value=m.map,i(m.map,A.uvTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function h(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.rotation.value=m.rotation,m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function u(A,m){A.specular.value.copy(m.specular),A.shininess.value=Math.max(m.shininess,0.0001)}function f(A,m){if(m.gradientMap)A.gradientMap.value=m.gradientMap}function d(A,m){if(A.metalness.value=m.metalness,m.metalnessMap)A.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,A.metalnessMapTransform);if(A.roughness.value=m.roughness,m.roughnessMap)A.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,A.roughnessMapTransform);if(m.envMap)A.envMapIntensity.value=m.envMapIntensity}function p(A,m,E){if(A.ior.value=m.ior,m.sheen>0){if(A.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),A.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)A.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,A.sheenColorMapTransform);if(m.sheenRoughnessMap)A.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,A.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(A.clearcoat.value=m.clearcoat,A.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)A.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,A.clearcoatMapTransform);if(m.clearcoatRoughnessMap)A.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(A.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn)A.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)A.dispersion.value=m.dispersion;if(m.retroreflectivity>0)A.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(A.iridescence.value=m.iridescence,A.iridescenceIOR.value=m.iridescenceIOR,A.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)A.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,A.iridescenceMapTransform);if(m.iridescenceThicknessMap)A.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,A.iridescenceThicknessMapTransform)}if(m.transmission>0){if(A.transmission.value=m.transmission,A.transmissionSamplerMap.value=E.texture,A.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap)A.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,A.transmissionMapTransform);if(A.thickness.value=m.thickness,m.thicknessMap)A.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,A.thicknessMapTransform);A.attenuationDistance.value=m.attenuationDistance,A.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(A.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)A.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,A.anisotropyMapTransform)}if(A.specularIntensity.value=m.specularIntensity,A.specularColor.value.copy(m.specularColor),m.specularColorMap)A.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,A.specularColorMapTransform);if(m.specularIntensityMap)A.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,A.specularIntensityMapTransform)}function g(A,m){if(m.matcap)A.matcap.value=m.matcap}function v(A,m){let E=t.get(m).light;A.referencePosition.value.setFromMatrixPosition(E.matrixWorld),A.nearDistance.value=E.shadow.camera.near,A.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function g3(e,t,i,s){let r={},a={},o=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let R=S.program;s.uniformBlockBinding(b,R)}function h(b,S){let R=r[b.id];if(R===void 0)A(b),R=u(b),r[b.id]=R,b.addEventListener("dispose",E);let C=S.program;s.updateUBOMapping(b,C);let _=t.render.frame;if(a[b.id]!==_)d(b),a[b.id]=_}function u(b){let S=f();b.__bindingPointIndex=S;let R=e.createBuffer(),{__size:C,usage:_}=b;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,C,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,R),R}function f(){for(let b=0;b<c;b++)if(o.indexOf(b)===-1)return o.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=r[b.id],{uniforms:R,__cache:C}=b;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let _=0,M=R.length;_<M;_++){let B=R[_];if(Array.isArray(B))for(let D=0,F=B.length;D<F;D++)p(B[D],_,D,C);else p(B,_,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(b,S,R,C){if(v(b,S,R,C)===!0){let{__offset:_,value:M}=b;if(Array.isArray(M)){let B=0;for(let D=0;D<M.length;D++){let F=M[D],G=m(F);if(g(F,b.__data,B),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))B+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else g(M,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,b.__data)}}function g(b,S,R){if(typeof b==="number"||typeof b==="boolean")S[0]=b;else if(b.isMatrix3)S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0;else if(ArrayBuffer.isView(b))S.set(new b.constructor(b.buffer,b.byteOffset,S.length));else b.toArray(S,R)}function v(b,S,R,C){let _=b.value,M=S+"_"+R;if(C[M]===void 0){if(typeof _==="number"||typeof _==="boolean")C[M]=_;else if(ArrayBuffer.isView(_))C[M]=_.slice();else C[M]=_.clone();return!0}else{let B=C[M];if(typeof _==="number"||typeof _==="boolean"){if(B!==_)return C[M]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(B.equals(_)===!1)return B.copy(_),!0}return!1}function A(b){let S=b.uniforms,R=0,C=16;for(let M=0,B=S.length;M<B;M++){let D=Array.isArray(S[M])?S[M]:[S[M]];for(let F=0,G=D.length;F<G;F++){let L=D[F],W=Array.isArray(L.value)?L.value:[L.value];for(let ee=0,V=W.length;ee<V;ee++){let H=W[ee],k=m(H),N=R%C,ie=N%k.boundary,Ce=N+ie;if(R+=ie,Ce!==0&&C-Ce<k.storage)R+=C-Ce;L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=k.storage}}}let _=R%C;if(_>0)R+=C-_;return b.__size=R,b.__cache={},this}function m(b){let S={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")S.boundary=4,S.storage=4;else if(b.isVector2)S.boundary=8,S.storage=8;else if(b.isVector3||b.isColor)S.boundary=16,S.storage=12;else if(b.isVector4)S.boundary=16,S.storage=16;else if(b.isMatrix3)S.boundary=48,S.storage=48;else if(b.isMatrix4)S.boundary=64,S.storage=64;else if(b.isTexture)$e("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))S.boundary=16,S.storage=b.byteLength;else $e("WebGLRenderer: Unsupported uniform value type.",b);return S}function E(b){let S=b.target;S.removeEventListener("dispose",E);let R=o.indexOf(S.__bindingPointIndex);o.splice(R,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function T(){for(let b in r)e.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:l,update:h,dispose:T}}var b3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function x3(){if(oi===null)oi=new os(b3,16,16,as,si),oi.name="DFG_LUT",oi.minFilter=kt,oi.magFilter=kt,oi.wrapS=js,oi.wrapT=js,oi.generateMipmaps=!1,oi.needsUpdate=!0;return oi}class th{constructor(e={}){let{canvas:t=nd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=d,v=new Set([Ic,Pc,Cc]),A=new Set([Mn,Bi,Ur,Ys,Tc,Rc]),m=new Uint32Array(4),E=new Int32Array(4),T=new P,b=null,S=null,R=[],C=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,B=!1,D=null,F=null,G=null,L=null;this._outputColorSpace=ri;let W=0,ee=0,V=null,H=-1,k=null,N=new Pt,ie=new Pt,Ce=null,Me=new Oe(0),et=0,{width:We,height:Y}=t,ue=1,fe=null,Xe=null,J=new Pt(0,0,We,Y),we=new Pt(0,0,We,Y),_e=!1,ae=new Vr,ge=!1,ke=!1,He=new nt,st=new P,at=new Pt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function de(){return V===null?ue:1}let I=i;function Je(w,z){return t.getContext(w,z)}let qe,Te,y,x,U,K,he,ve,Re,te,oe,Ee,Be,Pe,ye,ne,re,De,O,pe,X,se,xe;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${du}`);if(t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",_t,!1),I===null){if(I=Je("webgl2",w),I===null)if(Je("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(w){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),rt("WebGLRenderer: "+w.message),w}function ce(){if(qe=new EA(I),qe.init(),X=new d3(I,qe),Te=new AA(I,qe,e,X),y=new h3(I,qe),Te.reversedDepthBuffer&&f)y.buffers.depth.setReversed(!0);F=I.createFramebuffer(),G=I.createFramebuffer(),L=I.createFramebuffer(),x=new CA(I),U=new J2,K=new u3(I,qe,y,U,Te,X,x),he=new wA(M),ve=new I1(I),se=new pA(I,ve),Re=new TA(I,ve,x,se),te=new IA(I,Re,ve,se,x),De=new PA(I,Te,K),ye=new gA(U),oe=new Y2(M,he,qe,Te,se,ye),Ee=new A3(M,U),Be=new $2,Pe=new s3(qe),re=new fA(M,he,y,te,p,c),ne=new l3(M,te,Te),xe=new g3(I,x,Te,y),O=new mA(I,qe,x),pe=new RA(I,qe,x),x.programs=oe.programs,M.capabilities=Te,M.extensions=qe,M.properties=U,M.renderLists=Be,M.shadowMap=ne,M.state=y,M.info=x}if(g!==Mn)_=new LA(g,t.width,t.height,o,s,r);let Se=new Qd(M,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=qe.get("WEBGL_lose_context");if(w)w.loseContext()},this.forceContextRestore=function(){let w=qe.get("WEBGL_lose_context");if(w)w.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(w){if(w===void 0)return;ue=w,this.setSize(We,Y,!1)},this.getSize=function(w){return w.set(We,Y)},this.setSize=function(w,z,Z=!0){if(Se.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}if(We=w,Y=z,t.width=Math.floor(w*ue),t.height=Math.floor(z*ue),Z===!0)t.style.width=w+"px",t.style.height=z+"px";if(_!==null)_.setSize(t.width,t.height);this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(We*ue,Y*ue).floor()},this.setDrawingBufferSize=function(w,z,Z){We=w,Y=z,ue=Z,t.width=Math.floor(w*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(g===Mn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,z,Z,j){if(w.isVector4)J.set(w.x,w.y,w.z,w.w);else J.set(w,z,Z,j);y.viewport(N.copy(J).multiplyScalar(ue).round())},this.getScissor=function(w){return w.copy(we)},this.setScissor=function(w,z,Z,j){if(w.isVector4)we.set(w.x,w.y,w.z,w.w);else we.set(w,z,Z,j);y.scissor(ie.copy(we).multiplyScalar(ue).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){y.setScissorTest(_e=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,Z=!0){let j=0;if(w){let q=!1;if(V!==null){let Le=V.texture.format;q=v.has(Le)}if(q){let Le=V.texture.type,Ve=A.has(Le),Ue=re.getClearColor(),je=re.getClearAlpha(),{r:Ze,g:ft,b:vt}=Ue;if(Ve)m[0]=Ze,m[1]=ft,m[2]=vt,m[3]=je,I.clearBufferuiv(I.COLOR,0,m);else E[0]=Ze,E[1]=ft,E[2]=vt,E[3]=je,I.clearBufferiv(I.COLOR,0,E)}else j|=I.COLOR_BUFFER_BIT}if(z)j|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Z)j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(j!==0)I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),re.dispose(),Be.dispose(),Pe.dispose(),U.dispose(),he.dispose(),te.dispose(),se.dispose(),xe.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",me),Se.removeEventListener("sessionend",Ae),be.stop()};function Ye(w){w.preventDefault(),Cr("WebGLRenderer: Context Lost."),B=!0}function xt(){Cr("WebGLRenderer: Context Restored."),B=!1;let w=x.autoReset,z=ne.enabled,Z=ne.autoUpdate,j=ne.needsUpdate,q=ne.type;ce(),x.autoReset=w,ne.enabled=z,ne.autoUpdate=Z,ne.needsUpdate=j,ne.type=q}function _t(w){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function sn(w){let z=w.target;z.removeEventListener("dispose",sn),An(z)}function An(w){Ei(w),U.remove(w)}function Ei(w){let z=U.get(w).programs;if(z!==void 0){if(z.forEach(function(Z){oe.releaseProgram(Z)}),w.isShaderMaterial)oe.releaseShaderCache(w)}}this.renderBufferDirect=function(w,z,Z,j,q,Le){if(z===null)z=ut;let Ve=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ue=vs(w,z,Z,j,q);y.setMaterial(j,Ve);let je=Z.index,Ze=1;if(j.wireframe===!0){if(je=Re.getWireframeAttribute(Z),je===void 0)return;Ze=2}let ft=Z.drawRange,vt=Z.attributes.position,Ke=ft.start*Ze,Rt=(ft.start+ft.count)*Ze;if(Le!==null)Ke=Math.max(Ke,Le.start*Ze),Rt=Math.min(Rt,(Le.start+Le.count)*Ze);if(je!==null)Ke=Math.max(Ke,0),Rt=Math.min(Rt,je.count);else if(vt!==void 0&&vt!==null)Ke=Math.max(Ke,0),Rt=Math.min(Rt,vt.count);let Xt=Rt-Ke;if(Xt<0||Xt===1/0)return;se.setup(q,j,Ue,Z,je);let Bt,Dt=O;if(je!==null)Bt=ve.get(je),Dt=pe,Dt.setIndex(Bt);if(q.isMesh)if(j.wireframe===!0)y.setLineWidth(j.wireframeLinewidth*de()),Dt.setMode(I.LINES);else Dt.setMode(I.TRIANGLES);else if(q.isLine){let on=j.linewidth;if(on===void 0)on=1;if(y.setLineWidth(on*de()),q.isLineSegments)Dt.setMode(I.LINES);else if(q.isLineLoop)Dt.setMode(I.LINE_LOOP);else Dt.setMode(I.LINE_STRIP)}else if(q.isPoints)Dt.setMode(I.POINTS);else if(q.isSprite)Dt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(!qe.get("WEBGL_multi_draw")){let{_multiDrawStarts:on,_multiDrawCounts:Ge,_multiDrawCount:un}=q,Et=je?ve.get(je).bytesPerElement:1,Pn=U.get(j).currentProgram.getUniforms();for(let Kn=0;Kn<un;Kn++)Pn.setValue(I,"_gl_DrawID",Kn),Dt.render(on[Kn]/Et,Ge[Kn])}else Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Dt.renderInstances(Ke,Xt,q.count);else if(Z.isInstancedBufferGeometry){let on=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ge=Math.min(Z.instanceCount,on);Dt.renderInstances(Ke,Xt,Ge)}else Dt.render(Ke,Xt)};function gn(w,z,Z,j){if(D!==null&&w.isNodeMaterial)D.setObject(j,w);if(ge===!0)ye.setState(w,Z,!1);if(w.transparent===!0&&w.side===Vt&&w.forceSinglePass===!1)w.side=fn,w.needsUpdate=!0,mt(w,z,j),w.side=Qn,w.needsUpdate=!0,mt(w,z,j),w.side=Vt;else mt(w,z,j)}this.compile=function(w,z,Z=null){if(Z===null)Z=w;if(D!==null)D.renderStart(w,z,Z);if(S=Pe.get(Z),S.init(z),C.push(S),Z.traverseVisible(function(q){if(q.isLight&&q.layers.test(z.layers)){if(S.pushLight(q),q.castShadow)S.pushShadow(q)}}),w!==Z)w.traverseVisible(function(q){if(q.isLight&&q.layers.test(z.layers)){if(S.pushLight(q),q.castShadow)S.pushShadow(q)}});if(S.setupLights(),D!==null)D.updateLights(S.state.lightsArray);if(ke=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,ke),ge===!0)ye.setGlobalState(this.clippingPlanes,z);if(D!==null)ne.render(S.state.shadowsArray,Z,z);let j=new Set;if(w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Le=q.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){let Ue=Le[Ve];gn(Ue,Z,z,q),j.add(Ue)}else gn(Le,Z,z,q),j.add(Le)}),S=C.pop(),D!==null)D.renderEnd();return j},this.compileAsync=function(w,z,Z=null){let j=this.compile(w,z,Z);return new Promise((q)=>{function Le(){if(j.forEach(function(Ve){let je=U.get(Ve).currentProgram;if(je===void 0||je.isReady())j.delete(Ve)}),j.size===0){q(w);return}setTimeout(Le,10)}if(qe.get("KHR_parallel_shader_compile")!==null)Le();else setTimeout(Le,10)})};let bn=null;function le(w){if(bn)bn(w)}function me(){be.stop()}function Ae(){be.start()}let be=new Hd;if(be.setAnimationLoop(le),typeof self<"u")be.setContext(self);this.setAnimationLoop=function(w){bn=w,Se.setAnimationLoop(w),w===null?be.stop():be.start()},Se.addEventListener("sessionstart",me),Se.addEventListener("sessionend",Ae),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(D!==null)D.renderStart(w,z);let Z=Se.enabled===!0&&Se.isPresenting===!0,j=_!==null&&(V===null||Z)&&_.begin(M,V);if(w.matrixWorldAutoUpdate===!0)w.updateMatrixWorld();if(z.parent===null&&z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(Se.enabled===!0&&Se.isPresenting===!0&&(_===null||_.isCompositing()===!1)){if(Se.cameraAutoUpdate===!0)Se.updateCamera(z);z=Se.getCamera()}if(w.isScene===!0)w.onBeforeRender(M,w,z,V);if(S=Pe.get(w,C.length),S.init(z),S.state.textureUnits=K.getTextureUnits(),C.push(S),He.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ae.setFromProjectionMatrix(He,pl,z.reversedDepth),ke=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,ke),b=Be.get(w,R.length),b.init(),R.push(b),Se.enabled===!0&&Se.isPresenting===!0){let Ve=M.xr.getDepthSensingMesh();if(Ve!==null)Ie(Ve,z,-1/0,M.sortObjects)}if(Ie(w,z,0,M.sortObjects),b.finish(),D!==null)D.updateLights(S.state.lightsArray);if(M.sortObjects===!0)b.sort(fe,Xe);if(Q=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Q)re.addToRenderList(b,w);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(ge===!0)ye.beginShadows();let q=S.state.shadowsArray;if(ne.render(q,w,z),ge===!0)ye.endShadows();if((j&&_.hasRenderPass())===!1){let Ve=b.opaque,Ue=b.transmissive;if(S.setupLights(),z.isArrayCamera){let je=z.cameras;if(Ue.length>0)for(let Ze=0,ft=je.length;Ze<ft;Ze++){let vt=je[Ze];lt(Ve,Ue,w,vt)}if(Q)re.render(w);for(let Ze=0,ft=je.length;Ze<ft;Ze++){let vt=je[Ze];ze(b,w,vt,vt.viewport)}}else{if(Ue.length>0)lt(Ve,Ue,w,z);if(Q)re.render(w);ze(b,w,z)}}if(V!==null&&ee===0)K.updateMultisampleRenderTarget(V),K.updateRenderTargetMipmap(V);if(j)_.end(M);if(w.isScene===!0)w.onAfterRender(M,w,z);if(se.resetDefaultState(),H=-1,k=null,C.pop(),C.length>0){if(S=C[C.length-1],K.setTextureUnits(S.state.textureUnits),ge===!0)ye.setGlobalState(M.clippingPlanes,S.state.camera)}else S=null;if(R.pop(),R.length>0)b=R[R.length-1];else b=null;if(D!==null)D.renderEnd()};function Ie(w,z,Z,j){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD){if(w.autoUpdate===!0)w.update(z)}else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight){if(S.pushLight(w),w.castShadow)S.pushShadow(w)}else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ae)){if(j)at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);let Ve=te.update(w),Ue=w.material;if(Ue.visible)b.push(w,Ve,Ue,Z,at.z,null,z)}}else if(w.isMesh||w.isLine||w.isPoints){if(!w.frustumCulled||w.intersectsFrustum(ae)){let Ve=te.update(w),Ue=w.material;if(j){if(w.boundingSphere!==void 0){if(w.boundingSphere===null)w.computeBoundingSphere();at.copy(w.boundingSphere.center)}else{if(Ve.boundingSphere===null)Ve.computeBoundingSphere();at.copy(Ve.boundingSphere.center)}at.applyMatrix4(w.matrixWorld).applyMatrix4(He)}if(Array.isArray(Ue)){let je=Ve.groups;for(let Ze=0,ft=je.length;Ze<ft;Ze++){let vt=je[Ze],Ke=Ue[vt.materialIndex];if(Ke&&Ke.visible)b.push(w,Ve,Ke,Z,at.z,vt,z)}}else if(Ue.visible)b.push(w,Ve,Ue,Z,at.z,null,z)}}}let Le=w.children;for(let Ve=0,Ue=Le.length;Ve<Ue;Ve++)Ie(Le[Ve],z,Z,j)}function ze(w,z,Z,j){let{opaque:q,transmissive:Le,transparent:Ve}=w;if(S.setupLightsView(Z),ge===!0)ye.setGlobalState(M.clippingPlanes,Z);if(j)y.viewport(N.copy(j));if(q.length>0)tt(q,z,Z);if(Le.length>0)tt(Le,z,Z);if(Ve.length>0)tt(Ve,z,Z);y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lt(w,z,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let Ke=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new En(1,1,{generateMipmaps:!0,type:Ke?si:Mn,minFilter:ii,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let Le=S.state.transmissionRenderTarget[j.id],Ve=j.viewport||N;Le.setSize(Ve.z*M.transmissionResolutionScale,Ve.w*M.transmissionResolutionScale);let Ue=M.getRenderTarget(),je=M.getActiveCubeFace(),Ze=M.getActiveMipmapLevel();if(M.setRenderTarget(Le),M.getClearColor(Me),et=M.getClearAlpha(),et<1)M.setClearColor(16777215,0.5);if(M.clear(),Q)re.render(Z);let ft=M.toneMapping;M.toneMapping=qn;let vt=j.viewport;if(j.viewport!==void 0)j.viewport=void 0;if(S.setupLightsView(j),ge===!0)ye.setGlobalState(M.clippingPlanes,j);if(tt(w,Z,j),K.updateMultisampleRenderTarget(Le),K.updateRenderTargetMipmap(Le),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Rt=0,Xt=z.length;Rt<Xt;Rt++){let Bt=z[Rt],{object:Dt,geometry:on,material:Ge,group:un}=Bt;if(Ge.side===Vt&&Dt.layers.test(j.layers)){let Et=Ge.side;Ge.side=fn,Ge.needsUpdate=!0,ht(Dt,Z,j,on,Ge,un),Ge.side=Et,Ge.needsUpdate=!0,Ke=!0}}if(Ke===!0)K.updateMultisampleRenderTarget(Le),K.updateRenderTargetMipmap(Le)}if(M.setRenderTarget(Ue,je,Ze),M.setClearColor(Me,et),vt!==void 0)j.viewport=vt;M.toneMapping=ft}function tt(w,z,Z){let j=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Le=w.length;q<Le;q++){let Ve=w[q],{object:Ue,geometry:je,group:Ze}=Ve,ft=Ve.material;if(ft.allowOverride===!0&&j!==null)ft=j;if(Ue.layers.test(Z.layers))ht(Ue,z,Z,je,ft,Ze)}}function ht(w,z,Z,j,q,Le){if(D!==null&&q.isNodeMaterial)D.setObject(w,q);if(w.onBeforeRender(M,z,Z,j,q,Le),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(M,z,Z,j,w,Le),q.transparent===!0&&q.side===Vt&&q.forceSinglePass===!1)q.side=fn,q.needsUpdate=!0,M.renderBufferDirect(Z,z,j,q,w,Le),q.side=Qn,q.needsUpdate=!0,M.renderBufferDirect(Z,z,j,q,w,Le),q.side=Vt;else M.renderBufferDirect(Z,z,j,q,w,Le);w.onAfterRender(M,z,Z,j,q,Le)}function mt(w,z,Z){if(z.isScene!==!0)z=ut;let j=U.get(w),q=S.state.lights,Le=S.state.shadowsArray,Ve=q.state.version,Ue=oe.getParameters(w,q.state,Le,z,Z,S.state.lightProbeGridArray),je=oe.getProgramCacheKey(Ue),Ze=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;let ft=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;if(j.envMap=he.get(w.envMap||j.environment,ft),j.envMapRotation=j.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ze===void 0)w.addEventListener("dispose",sn),Ze=new Map,j.programs=Ze;let vt=Ze.get(je);if(vt!==void 0){if(j.currentProgram===vt&&j.lightsStateVersion===Ve)return xn(w,Ue),vt}else{if(Ue.uniforms=oe.getUniforms(w),D!==null&&w.isNodeMaterial)D.build(w,Z,Ue);w.onBeforeCompile(Ue,M),vt=oe.acquireProgram(Ue,je),Ze.set(je,vt),j.uniforms=Ue.uniforms}let Ke=j.uniforms;if(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)Ke.clippingPlanes=ye.uniform;if(xn(w,Ue),j.needsLights=ys(w),j.lightsStateVersion=Ve,j.needsLights)Ke.ambientLightColor.value=q.state.ambient,Ke.lightProbe.value=q.state.probe,Ke.sunLights.value=q.state.sun,Ke.sunLightShadows.value=q.state.sunShadow,Ke.directionalLights.value=q.state.directional,Ke.directionalLightShadows.value=q.state.directionalShadow,Ke.spotLights.value=q.state.spot,Ke.spotLightShadows.value=q.state.spotShadow,Ke.rectAreaLights.value=q.state.rectArea,Ke.ltc_1.value=q.state.rectAreaLTC1,Ke.ltc_2.value=q.state.rectAreaLTC2,Ke.pointLights.value=q.state.point,Ke.pointLightShadows.value=q.state.pointShadow,Ke.hemisphereLights.value=q.state.hemi,Ke.sunShadowMatrix.value=q.state.sunShadowMatrix,Ke.sunShadowCascade.value=q.state.sunShadowCascade,Ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ke.spotLightMatrix.value=q.state.spotLightMatrix,Ke.spotLightMap.value=q.state.spotLightMap,Ke.pointShadowMatrix.value=q.state.pointShadowMatrix;return j.lightProbeGrid=S.state.lightProbeGridArray.length>0,j.currentProgram=vt,j.uniformsList=null,vt}function rn(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function xn(w,z){let Z=U.get(w);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function $t(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(z.matrixWorld);for(let Z=0,j=w.length;Z<j;Z++){let q=w[Z];if(q.texture!==null&&q.boundingBox.containsPoint(T))return q}return null}function vs(w,z,Z,j,q){if(z.isScene!==!0)z=ut;K.resetTextureUnits();let Le=z.fog,Ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,Ue=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:At.workingColorSpace,je=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ze=he.get(j.envMap||Ve,je),ft=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ke=!!Z.morphAttributes.position,Rt=!!Z.morphAttributes.normal,Xt=!!Z.morphAttributes.color,Bt=qn;if(j.toneMapped){if(V===null||V.isXRRenderTarget===!0)Bt=M.toneMapping}let Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,on=Dt!==void 0?Dt.length:0,Ge=U.get(j),un=S.state.lights;if(ge===!0){if(ke===!0||w!==k){let Nt=w===k&&j.id===H;ye.setState(j,w,Nt)}}let Et=!1;if(j.version===Ge.__version){if(Ge.needsLights&&Ge.lightsStateVersion!==un.state.version)Et=!0;else if(Ge.outputColorSpace!==Ue)Et=!0;else if(q.isBatchedMesh&&Ge.batching===!1)Et=!0;else if(!q.isBatchedMesh&&Ge.batching===!0)Et=!0;else if(q.isBatchedMesh&&Ge.batchingColor===!0&&q._colorsTexture===null)Et=!0;else if(q.isBatchedMesh&&Ge.batchingColor===!1&&q._colorsTexture!==null)Et=!0;else if(q.isInstancedMesh&&Ge.instancing===!1)Et=!0;else if(!q.isInstancedMesh&&Ge.instancing===!0)Et=!0;else if(q.isSkinnedMesh&&Ge.skinning===!1)Et=!0;else if(!q.isSkinnedMesh&&Ge.skinning===!0)Et=!0;else if(q.isInstancedMesh&&Ge.instancingColor===!0&&q.instanceColor===null)Et=!0;else if(q.isInstancedMesh&&Ge.instancingColor===!1&&q.instanceColor!==null)Et=!0;else if(q.isInstancedMesh&&Ge.instancingMorph===!0&&q.morphTexture===null)Et=!0;else if(q.isInstancedMesh&&Ge.instancingMorph===!1&&q.morphTexture!==null)Et=!0;else if(Ge.envMap!==Ze)Et=!0;else if(j.fog===!0&&Ge.fog!==Le)Et=!0;else if(Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ye.numPlanes||Ge.numIntersection!==ye.numIntersection))Et=!0;else if(Ge.vertexAlphas!==ft)Et=!0;else if(Ge.vertexTangents!==vt)Et=!0;else if(Ge.morphTargets!==Ke)Et=!0;else if(Ge.morphNormals!==Rt)Et=!0;else if(Ge.morphColors!==Xt)Et=!0;else if(Ge.toneMapping!==Bt)Et=!0;else if(Ge.morphTargetsCount!==on)Et=!0;else if(!!Ge.lightProbeGrid!==S.state.lightProbeGridArray.length>0)Et=!0}else Et=!0,Ge.__version=j.version;let Pn=Ge.currentProgram;if(Et===!0){if(Pn=mt(j,z,q),D&&j.isNodeMaterial)D.onUpdateProgram(j,Pn,Ge)}let Kn=!1,Ri=!1,Ms=!1,It=Pn.getUniforms(),Wt=Ge.uniforms;if(y.useProgram(Pn.program))Kn=!0,Ri=!0,Ms=!0;if(j.id!==H)H=j.id,Ri=!0;if(Ge.needsLights){let Nt=$t(S.state.lightProbeGridArray,q);if(Ge.lightProbeGrid!==Nt)Ge.lightProbeGrid=Nt,Ri=!0}if(Kn||k!==w){if(y.buffers.depth.getReversed()&&w.reversedDepth!==!0)w._reversedDepth=!0,w.updateProjectionMatrix();It.setValue(I,"projectionMatrix",w.projectionMatrix),It.setValue(I,"viewMatrix",w.matrixWorldInverse);let Pi=It.map.cameraPosition;if(Pi!==void 0)Pi.setValue(I,st.setFromMatrixPosition(w.matrixWorld));if(Te.logarithmicDepthBuffer)It.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2));if(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)It.setValue(I,"isOrthographic",w.isOrthographicCamera===!0);if(k!==w)k=w,Ri=!0,Ms=!0}if(Ge.needsLights){if(un.state.sunShadowMap.length>0)It.setValue(I,"sunShadowMap",un.state.sunShadowMap,K);if(un.state.directionalShadowMap.length>0)It.setValue(I,"directionalShadowMap",un.state.directionalShadowMap,K);if(un.state.spotShadowMap.length>0)It.setValue(I,"spotShadowMap",un.state.spotShadowMap,K);if(un.state.pointShadowMap.length>0)It.setValue(I,"pointShadowMap",un.state.pointShadowMap,K)}if(q.isSkinnedMesh){It.setOptional(I,q,"bindMatrix"),It.setOptional(I,q,"bindMatrixInverse");let Nt=q.skeleton;if(Nt){if(Nt.boneTexture===null)Nt.computeBoneTexture();It.setValue(I,"boneTexture",Nt.boneTexture,K)}}if(q.isBatchedMesh){if(It.setOptional(I,q,"batchingTexture"),It.setValue(I,"batchingTexture",q._matricesTexture,K),It.setOptional(I,q,"batchingIdTexture"),It.setValue(I,"batchingIdTexture",q._indirectTexture,K),It.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null)It.setValue(I,"batchingColorTexture",q._colorsTexture,K)}let Ci=Z.morphAttributes;if(Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)De.update(q,Z,Pn);if(Ri||Ge.receiveShadow!==q.receiveShadow)Ge.receiveShadow=q.receiveShadow,It.setValue(I,"receiveShadow",q.receiveShadow);if((j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null)Wt.envMapIntensity.value=z.environmentIntensity;if(Wt.dfgLUT!==void 0)Wt.dfgLUT.value=x3();if(Ri){if(It.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights)Ti(Wt,Ms);if(Le&&j.fog===!0)Ee.refreshFogUniforms(Wt,Le);if(Ee.refreshMaterialUniforms(Wt,j,ue,Y,S.state.transmissionRenderTarget[w.id]),Ge.needsLights&&Ge.lightProbeGrid){let Nt=Ge.lightProbeGrid;Wt.probesSH.value=Nt.texture,Wt.probesMin.value.copy(Nt.boundingBox.min),Wt.probesMax.value.copy(Nt.boundingBox.max),Wt.probesResolution.value.copy(Nt.resolution)}ea.upload(I,rn(Ge),Wt,K)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0)ea.upload(I,rn(Ge),Wt,K),j.uniformsNeedUpdate=!1;if(j.isSpriteMaterial)It.setValue(I,"center",q.center);if(It.setValue(I,"modelViewMatrix",q.modelViewMatrix),It.setValue(I,"normalMatrix",q.normalMatrix),It.setValue(I,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){let Nt=j.uniformsGroups;for(let Pi=0,Ss=Nt.length;Pi<Ss;Pi++){let vh=Nt[Pi];xe.update(vh,Pn),xe.bind(vh,Pn)}}return Pn}function Ti(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ys(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,z,Z){let j=U.get(w);if(j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1)j.__useRenderToTexture=!1;U.get(w.texture).__webglTexture=z,U.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let Z=U.get(w);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Z=0){V=w,W=z,ee=Z;let j=null,q=!1,Le=!1;if(w){let Ue=U.get(w);if(Ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,Ue.__webglFramebuffer),N.copy(w.viewport),ie.copy(w.scissor),Ce=w.scissorTest,y.viewport(N),y.scissor(ie),y.setScissorTest(Ce),H=-1;return}else if(Ue.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Ue.__hasExternalTextures)K.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ft=w.depthTexture;if(Ue.__boundDepthTexture!==ft){if(ft!==null&&U.has(ft)&&(w.width!==ft.image.width||w.height!==ft.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}let je=w.texture;if(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)Le=!0;let Ze=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget){if(Array.isArray(Ze[z]))j=Ze[z][Z];else j=Ze[z];q=!0}else if(w.samples>0&&K.useMultisampledRTT(w)===!1)j=U.get(w).__webglMultisampledFramebuffer;else if(Array.isArray(Ze))j=Ze[Z];else j=Ze;N.copy(w.viewport),ie.copy(w.scissor),Ce=w.scissorTest}else N.copy(J).multiplyScalar(ue).floor(),ie.copy(we).multiplyScalar(ue).floor(),Ce=_e;if(Z!==0)j=F;if(y.bindFramebuffer(I.FRAMEBUFFER,j))y.drawBuffers(w,j);if(y.viewport(N),y.scissor(ie),y.setScissorTest(Ce),q){let Ue=U.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,Z)}else if(Le){let Ue=z;for(let je=0;je<w.textures.length;je++){let Ze=U.get(w.textures[je]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+je,Ze.__webglTexture,Z,Ue)}}else if(w!==null&&Z!==0){let Ue=U.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,Z)}H=-1};function Ar(w){let z=U.get(w);if(z.__readFormat!==w.format||z.__readType!==w.type)z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=Te.textureFormatReadable(w.format),z.__typeReadable=Te.textureTypeReadable(w.type);return z}if(this.readRenderTargetPixels=function(w,z,Z,j,q,Le,Ve,Ue=0){if(!(w&&w.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0)je=je[Ve];if(je){y.bindFramebuffer(I.FRAMEBUFFER,je);try{let Ze=w.textures[Ue],{format:ft,type:vt}=Ze;if(w.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+Ue);let Ke=Ar(Ze);if(Ke.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(z>=0&&z<=w.width-j&&(Z>=0&&Z<=w.height-q))I.readPixels(z,Z,j,q,X.convert(ft),X.convert(vt),Le)}finally{let Ze=V!==null?U.get(V).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,z,Z,j,q,Le,Ve,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0)je=je[Ve];if(je)if(z>=0&&z<=w.width-j&&(Z>=0&&Z<=w.height-q)){y.bindFramebuffer(I.FRAMEBUFFER,je);let Ze=w.textures[Ue],{format:ft,type:vt}=Ze;if(w.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+Ue);let Ke=Ar(Ze);if(Ke.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),I.readPixels(z,Z,j,q,X.convert(ft),X.convert(vt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Xt=V!==null?U.get(V).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Xt);let Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sd(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Rt),I.deleteSync(Bt),Le}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,Z=0){let j=Math.pow(2,-Z),q=Math.floor(w.image.width*j),Le=Math.floor(w.image.height*j),Ve=z!==null?z.x:0,Ue=z!==null?z.y:0;K.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ve,Ue,q,Le),y.unbindTexture()},this.copyTextureToTexture=function(w,z,Z=null,j=null,q=0,Le=0){let Ve,Ue,je,Ze,ft,vt,Ke,Rt,Xt,Bt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(Z!==null)Ve=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,je=Z.isBox3?Z.max.z-Z.min.z:1,Ze=Z.min.x,ft=Z.min.y,vt=Z.isBox3?Z.min.z:0;else{let Wt=Math.pow(2,-q);if(Ve=Math.floor(Bt.width*Wt),Ue=Math.floor(Bt.height*Wt),w.isDataArrayTexture)je=Bt.depth;else if(w.isData3DTexture)je=Math.floor(Bt.depth*Wt);else je=1;Ze=0,ft=0,vt=0}if(j!==null)Ke=j.x,Rt=j.y,Xt=j.z;else Ke=0,Rt=0,Xt=0;let Dt=X.convert(z.format),on=X.convert(z.type),Ge;if(z.isData3DTexture)K.setTexture3D(z,0),Ge=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)K.setTexture2DArray(z,0),Ge=I.TEXTURE_2D_ARRAY;else K.setTexture2D(z,0),Ge=I.TEXTURE_2D;y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);let un=y.getParameter(I.UNPACK_ROW_LENGTH),Et=y.getParameter(I.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(I.UNPACK_SKIP_PIXELS),Kn=y.getParameter(I.UNPACK_SKIP_ROWS),Ri=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),y.pixelStorei(I.UNPACK_SKIP_ROWS,ft),y.pixelStorei(I.UNPACK_SKIP_IMAGES,vt);let Ms=w.isDataArrayTexture||w.isData3DTexture,It=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Wt=U.get(w),Ci=U.get(z),Nt=U.get(Wt.__renderTarget),Pi=U.get(Ci.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,Nt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ss=0;Ss<je;Ss++){if(Ms)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(w).__webglTexture,q,vt+Ss),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(z).__webglTexture,Le,Xt+Ss);I.blitFramebuffer(Ze,ft,Ve,Ue,Ke,Rt,Ve,Ue,I.DEPTH_BUFFER_BIT,I.NEAREST)}y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||U.has(w)){let Wt=U.get(w),Ci=U.get(z);y.bindFramebuffer(I.READ_FRAMEBUFFER,G),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,L);for(let Nt=0;Nt<je;Nt++){if(Ms)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,q,vt+Nt);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wt.__webglTexture,q);if(It)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ci.__webglTexture,Le,Xt+Nt);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ci.__webglTexture,Le);if(q!==0)I.blitFramebuffer(Ze,ft,Ve,Ue,Ke,Rt,Ve,Ue,I.COLOR_BUFFER_BIT,I.NEAREST);else if(It)I.copyTexSubImage3D(Ge,Le,Ke,Rt,Xt+Nt,Ze,ft,Ve,Ue);else I.copyTexSubImage2D(Ge,Le,Ke,Rt,Ze,ft,Ve,Ue)}y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(It)if(w.isDataTexture||w.isData3DTexture)I.texSubImage3D(Ge,Le,Ke,Rt,Xt,Ve,Ue,je,Dt,on,Bt.data);else if(z.isCompressedArrayTexture)I.compressedTexSubImage3D(Ge,Le,Ke,Rt,Xt,Ve,Ue,je,Dt,Bt.data);else I.texSubImage3D(Ge,Le,Ke,Rt,Xt,Ve,Ue,je,Dt,on,Bt);else if(w.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,Le,Ke,Rt,Ve,Ue,Dt,on,Bt.data);else if(w.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,Le,Ke,Rt,Bt.width,Bt.height,Dt,Bt.data);else I.texSubImage2D(I.TEXTURE_2D,Le,Ke,Rt,Ve,Ue,Dt,on,Bt);if(y.pixelStorei(I.UNPACK_ROW_LENGTH,un),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(I.UNPACK_SKIP_ROWS,Kn),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Ri),Le===0&&z.generateMipmaps)I.generateMipmap(Ge);y.unbindTexture()},this.initRenderTarget=function(w){if(U.get(w).__webglFramebuffer===void 0)K.setupRenderTarget(w)},this.initTexture=function(w){if(w.isCubeTexture)K.setTextureCube(w,0);else if(w.isData3DTexture)K.setTexture3D(w,0);else if(w.isDataArrayTexture||w.isCompressedArrayTexture)K.setTexture2DArray(w,0);else K.setTexture2D(w,0);y.unbindTexture()},this.resetState=function(){W=0,ee=0,V=null,y.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}var ta={globe:{d48:"wP///wEAAAAAQP3/AQL//wEAAAAAAPj/AOj/fwAAAAAAAPAf4P//AQAAAAAAAP6A//8HAAAAAAAA+P3/3wMAAAAAAADw///7BgAAAAAAAPD/vzsAAAAAAAAA///CAAAAAAAAAPD/gQAAAAAAAAD+/wgAAAAAAACA+ucAAAAAAAAAAP8HAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAPiAf/+5///v//AeAHAAAAAAAAwP/4A+ABAAAAAAAA+P/5AQoXAA8AAAAA/D8+IPgB+AAAAAAA/+Hx/AP4AQAAAAD4AW/AH/wDAAAAAPgAT+QDfwAAAAzWP8BPB/AfAABgzv8BMj7Q/wAAgDz/B+Af8P/gAeB+/w/8Afx/8AC86v/zH+D/DwQAAP6/AsD/HwAAAPz/P+j/DwAAAPx/FP7/AQAA0f8/8/8fAAA+4f95/x8AAPyV////BwAA/p//f/4BAMD/4D/ACwAAfwT+AQAAAP4A/wMAKICf3/8BAALg//c/ADAA/v//AQAA+P//AwAA4PX/AQgAcP4/AAAA+P8BAAD8/wOACvj/AQzE/z8AAPz/AQD6/wN4/v8BuP///////+//////////////////////////A/wfyDQAAICA////B//vKgAAAADC///////LEwAAAAD+/////x9BBgAAAMD//////3wIAAAAAP//////+8EAAAAA+P/////+AwAAAAD/////3zIAAAAA8P////9DAAAAgPD/////DwAAAODg/////w8AAABk/v////8BAAAA/P////8vAAAA/P//////FQAA/P//////DwDg////////AVD///////8H+P///////wf/////////+////3+g/wPj////A/w/gf/3HwDgP4D+gQEA+g0A9AMAAAEAAOABAAgAAMAPABAAAAAfAAAAAAAPAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///38AAAAAAAAA4P///38AAAAAAAAA+P///w8AAAAAAAAA/////wQAAAAAAAD4////AwAAAAAAAPD///8DAAAAAAAA+P///wEAAAAAAAD///8PAAAAAAAA+P//CwAAAAAAAPD//wsAAAAAAAD4//8HAAAAAAAA//9/AAAAAAAA+P//AwAAAAAA8P//AwAAAAAA+P//AQAAAAAA//8fAAAAAAD4/z8AAAAAAPD/PwAAAAAA+P8PAAAAAAD/fwAAAAAA+H8AAAAAAPA/AAAAAAD4DwAAAAAATwAAAAAAmAAAAAAA0AAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////fw4AAAAAwP///////wgAAAAA8P//////fwQAAAAA/v//////DwAAAADw//////8/AAAAAOD//////38AAAAA8P//////vwAAAAD+//////8fAAAA8P//////fwAAAOD//////n8AAADw////B/QfAAAA/v//PwD8AQAA8P///wDgBwAA4P//HwDABwAA8P//AwBwAAAA/v8/AIADAADw/38AuB8AAAD8YAD8HwAAAABwAPQHAAAAAA4DOAAAAAAAAvgAAAAAFAH4AAAAAGAAfgAAAAAGgA8AAACYADAAAACIADAAAAAAAAwAABAAsAAAcABAAAAwAMAAAATA/wAQgP9fTQD8/x8A//8PwP//Afz/D/j/H/z/z////f//////////////////////////cRz8////////////cwD///////////9/DPD////////////nQP///////////x82+P///////3/8PxDw//////+/CPgPAP7//////0+AwwDw//////8/AI0C4P/////BP/gfAOD///9/4Yf/R1D8////P/7/H4D/////f/j/CwD/////P/j/E+D/////P/7/Afz/////wf9/+P/////P/////////////9//////////8////////x////////9//P///3/+f/z///+P/w////9//P/4//+/+P/H//8P8P+H///w///wX4D//w8fgP//PzwA//8/HgD//58DQP//HQCA+jIAAAAQAAAAAQDwHwCAPwAAHwCAAwAAAAAAAAAAAAAAwP//LwAAAAAAAAD+////fwAAAAAAAAD+/////wAAAAAAAAD/////PwAAAAAAAPj/////AAAAAAAAgP////8BAAAAAADg/////wAAAAAAAP7///8fAAAAAAD4/////wEAAAAA8P////8BAAAAAPz///9/AAAAAKD/////BwAAAAD/////DwAAAAD+////DwAAAAD/////AwAAAOD///8/AAAAAP7//38AAAAA8P//PwAAAACA/v8FAAAAAAD8AQAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////8DAAAAAAAAAP////8HAAAAAAAAgP////8AAAAAAAAA8P///z8AAAAAAACA/////wAAAAAAAAD///9/AAAAAAAAgP///w8AAAAAAADw//9/AAAAAAAAgP///wAAAAAAAAD//38AAAAAAACA//8PAAAAAAAA8P//AAAAAAAAgP//AAAAAAAAAP9/AAAAAAAAgP8DAAAAAAAA8B8AAAAAAACAfwAAAAAAAAB/AAAAAAAAgB8AAAAAAADwAwAAAAAAgA8AAAAAAAAPAAAAAACABwAAAAAA8AAAAAAAgAMAAAAAAAMAAAAAgAEAAAAAEAAAAACAAAAAAAABAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////wMAAAAAAAD4/////wEAAAAAAHz/////PwAAAAAA4P//////AQAAAABg/v////8DAAAAAED//////wEAAAAAyP////8/AAAAAAD8/////wEAAADg4P////8DAAAAwOD/////AQAAACD4////PwAAAIAD/f///wEAAAAG4P///wMAAAAG4P///wEAAMAH4P//PwAAAHiAJ///AQAAgAcP+P8DAAAAiof5/wEAAACEgP8/AAAAYAD4/wEAAAAA8P8DAAAAAPz/AQAAAAD/PwAAAAD4/wEAAADg/wMAAADA/wEAAADwPwAAAGD+AQAAgOADAAAAwAEAAAAAAAAAAAAAAAcAAAADAADAAABABQAgCADgAgBiAOAAwAuAEQAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAD8AQAAAAAAAAD+AQAAAAAAAPD/AAAAAAAAAP4/AAAAAAAA4A8AAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAB8AAAAAAAAwAMAAAAAAIAHAAAAAADgAwAAAAD4fwAAAADA/wMAAAD4/wcAAAD8/wMAAOD/fwAAAP//AwAA/v8HAAD+/wMAgP9/AAD8/wMA+P8HAOD/AwDAfwAA4AMAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAwAcAAAAAAAAAPuD/AAAAAAAAAPiX/x8AAAAAAADwP/8/AAAAAAAA+N//fwAAAAAAAP///w8AAAAAAPj//38BAAAAAPD///8DAAAAAPj///8BAAAAAP///z8AAAAA+P///wEAAADw////AwAAAPj///8AAAAA////HwAAAPj//z8AAADw//8HAAAA+P//AAAAAP//DwAAAPj/DAAAAPB/AAAAAPjPAQAAAD8AAAAA+AEAAADwAQAAAHgAAAAAvz8AAPj/BwDw5w8I+Og2AAcAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAA8P///////w8AAAAA/P//////fwsAAADA//////v/IwAAAID/////8/8PAAAAAP7//z/g/w8AAAAA////B8D/AwAAAPD//z8A/AcAAABA////APgPAAAAAPz//wCIAAAAAAD//x8AAAAAAADg//8BAAAAAAAA/v8PAAAAAAAA/P8fAAAAAAAA8H8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAADgAAMABAIADAMACAGAA4AHABzABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAADgAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAwP8BAAAAAAAA4P8fAAAAAAAA+P8fAAAAAADA//8DAAAAAED+/x8AAAAAwP//PwAAAADw//8PAAAAwP//fwDA//////8DwP//////AfD/////fwD//////wP8/////wf+/////4////////P///9/3////3/4////P7D///8HAPD//wCA/v8PAHz8AQAAEAAAAAAAAAAAAABgBQAAAAMAAAAAQICBIQwAAAAAAAAAAACAwA8AAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAMAAEAAAAAAAAAAAAIF/AAAAAAAAAACAAT8AAAAAAAAAAGDgBwAAAAAAAAAAAz8AAAAAAAAAAAR8AAAAAAAAAAAGOAAAAAAAAACAAQQAAAAAAAAAEAAAAAAAAAAAwAcAAAAAAAAAwAcAAAAAAAAA8AEAAAAAAAAAPgAAAAAAAABwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////PwAAAAAAAID/////fwAAAAAAAMD/////HwAAAAAAAPj/////AQAAAAAA4P////8PAAAAAADg/////w8AAAAAAPj/////HwAAAACA//////8/AAAAAPz///////8HAADw////////PwAA+P///////w8AAPz//////38AAPD///////8AAPD//////38AAPD//////w8AAP//////fwAA/P//////AAD8/////38AgP//////DwD4/////38A4P//////AID/////fwCA/////w8A+P///38A/P////8A/v///3+A/////w/+//////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBwAAAAAAAAAAAMABAAAAAAAAAAAADuAAAAAAAAAAAPADAAAAAAAAAADADwAAAAAAAAAAwH8AAAAAAAAAAPA/AAAAAAAAAAD/AQAAAAAAAAD4DwAAAAAAAADgHwAAAAAAAAD0HwAAAAAAAMD/BwAAAAAAAP6/AgAAAAAA/v8PAAAAAAD//wMAAAAA4P/fBwAAAAD///8AAAAA/v//BwAAAP///wMAAOD//38AAAD///+vCgD+////HwD/////H+D/////B/////8//v///3////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAgB8AAAAAAAAYgAEAgAMAAAAAAAAIAAAgAAAAAAAAAAAgwAF8AAAAAAAAAMDA9/8DAAAAFAAAAIDj/0cBAAAAAAAAAPD/fwEAAAAAAAAA4H8AAAAAAAAAAAAACAAAAAAAAAAAAAAAACAAAAAAAAAIAAQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A/x8GAAAAAAAAgH+A/R8AAAAAAAAAcA4A/gMAAAAAAADA8QAAPwAAAAAAAIDiAwD4AQAAAAwAAGAAAHAAAAAAAwAABQAACAAAABMAAHAgAAAAAAAeAADAgAMAAAAAPgAAgPAPAAAAwB8AALD/BwAAAPwBAID/fwAAAPgHAED+/wAAAPw/AOD+fwAAAP8/APz/AwAA8P8P4P8fBgDA///A//8gAPj//+///xsA////////f/j///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8P",d30:"cP8fAAAA8B/w/wEAAAD44P8BAAAA4P3/AQAAAOD/9wAAAADg/wgAAAAA/gMAAAAA4B8AAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCQ8/3/AQ8AAAAA/zxQAAoAAPDPIQ88AACADx8+PgAAAA8egx8AMP5BOfwBAN0PPPCPAa9/FfgfAYD/TP8DAPDf/B8AWv//HwB4+/8PAPz5gQLAAz8AAt75ARz89wMA+P8BAMw/AAD/ART+A4H/AeA/sP/////+////////g/9aAQDj/3//twAAAP///6cVAAD+////GQAA+P//0wMAAP7//wkAAPH//z8AAID//z8AAPz///8CgP////8A/P///4f/////8///Az/k/1fgB/4ZQAVADAABADwAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA8P//AwAAAAD//x8AAAAA+P9/AQAAAPD/fwAAAAD4/x8AAAAA/38AAAAA+P8DAAAA8P8DAAAA+P8BAAAA/x8AAAD4fwAAAPB/AAAA+A8AAAA/AAAAuAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///08AAAD+////CQAA8P///w8AAOD///8fAADw////HwAA/v///wEA8P//8QcA4P9/gAcA8P8XwAEA/j8ADADQ/wA/AACCgT4AAMAEBgAAInAAAIDAAwBAAAIAEAABAAAIAAYQAAB/AOD/Af8P/h//7///////////////TPz//////2/g//////+/yf/////fP4T/////ghjw////jx6B//9/Hn8A//9//B/w//+P/wH////xP/7///f////////3//////z///vP///nP///4T//r/3PF/5/HPj/MeD/GwC6AwAAAD8AHAACAAAAwP8fAAAAAPj//wcAAACA//9/AAAAAPz/fwAAAAD//z8AAADw//8PAACA//8/AACA//8/AADg//8HAAD4/38AAOD//wEAAP//AAAA6AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//HwAAAADw//8BAAAAgP//DwAAAAD//wcAAACA//8AAAAA8P8HAAAAgP8fAAAAAP8PAAAAgP8AAAAA8AMAAACADwAAAAAPAAAAgAcAAABwAAAAgAEAAAADAACAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8/AAAAoP7//wEAAED///8DAACA////AQAA4P//PwAAcPz//wEAAPH//wMAgMD//wEAIOD/PwAAB9b/AQBwDv4DAMCE/wEAIMA/AACA/wEAAP4DAAD+AQCAPwAA9AEAgAMAAAAAAQAQACgADEAQHgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAADwAAAAD+AQAAAOALAAAAAAAAAAAAgAMAAABwAAAAgAMAAPAHAAD/AwDwfwDA/wMA/wcA/wPgfwD4AwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUPAHAAAAAD//AAAAAPj9HwAAAPD/PwAAAPj/PwAAAP//DwAA+P8/AADw/z8AAPj/DwAA/38AAPj/AADwbwAA+AUAAA8AADgAALAIAPgfAO9DGCAAAAAAAAAAAADA/////wEAAPz///8fAADw///7HwAA4P9/+B8AAPj/D/gFAAD+/+APAADw/wEAAADg/wEAAADQ/wAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAYACAAOAADGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAACAAAAAAA+AAAAAMB/AAAAAP4/AAAA/P8BAAD8/wEQwf9/gP///wP+//8P/v//h/////v///3//yP1/wHo/wAEAwAAAAAYDAAAQSQAAAAAAADAAwAAAAAAAAAAAAAAACBoAAAAAAAgPAAAAAAAhAcAAAAAQDgAAAAAgEEAAAAAAAUAAAAAwAEAAAAAGAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//fwAAAAD8//8HAAAA4P//HwAAAOD//z8AAAD4//9/AQAA/////w8A+P////8AwP///38A4P///w8A/v//fwD4////APj//38A////D8D//38A/v//gP//f/D//4////////////////////////////////8AAAAAAAAAAAAAAAAAAAAACAAAAAAAAAcAAAAAAOBBAAAAAAAeAAAAAAD4AQAAAAD4AAAAAAD8AAAAAMAPAAAAAP8LAAAA/h8AAAD/PwAA4P8fAAD//wEA/v9XAP///+D//x/////+//////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAIAAIQAAAAAg+n4AAAgAAIh/BAAAAABAfwAAAAAAABAAMAAAAICAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz4nwAAAACwAX4AAAAAMAfgAQCAAAABgAEAJAAwAAAAwAEA4AAEgAcA3A8AgA8A/AcA8Afg/wAA/wP+BwD8H/6fgP/////z//////////////////////////////////////////////////////////8P"},europe:[{id:"832",name:"Jersey",rings:[[[-2.02,49.23],[-2.05,49.17],[-2.24,49.18],[-2.22,49.27],[-2.02,49.23]]]},{id:"831",name:"Guernsey",rings:[[[-2.51,49.49],[-2.55,49.43],[-2.65,49.47],[-2.51,49.49]]]},{id:"833",name:"Isle of Man",rings:[[[-4.41,54.18],[-4.61,54.06],[-4.79,54.07],[-4.7,54.22],[-4.43,54.41],[-4.34,54.27],[-4.41,54.18]]]},{id:"826",name:"United Kingdom",rings:[[[-2.67,51.62],[-3.29,51.39],[-3.56,51.41],[-3.89,51.59],[-4.24,51.57],[-4.09,51.66],[-4.39,51.74],[-4.6,51.74],[-4.9,51.63],[-5.12,51.71],[-5.2,51.86],[-5.26,51.88],[-5.09,52],[-4.38,52.2],[-4.15,52.33],[-3.98,52.54],[-4.08,52.61],[-4.04,52.7],[-4.12,52.82],[-4.1,52.92],[-4.68,52.81],[-4.64,52.89],[-4.27,53.14],[-3.81,53.3],[-3.43,53.34],[-3.1,53.26],[-3.17,53.39],[-3.07,53.43],[-2.92,53.3],[-2.75,53.31],[-2.91,53.35],[-3.07,53.51],[-2.93,53.73],[-3.03,53.77],[-3.03,53.91],[-2.9,53.96],[-2.87,54.18],[-3.17,54.13],[-3.57,54.47],[-3.59,54.56],[-3.47,54.77],[-3.27,54.91],[-3.04,54.95],[-3.55,54.95],[-3.96,54.78],[-4.13,54.78],[-4.25,54.85],[-4.52,54.76],[-4.82,54.85],[-4.91,54.69],[-5.14,54.86],[-5.17,54.99],[-5.06,54.99],[-4.68,55.5],[-4.73,55.6],[-4.89,55.7],[-4.83,55.93],[-4.58,55.94],[-4.84,56.05],[-4.8,56.16],[-4.93,56.03],[-5.23,55.89],[-5.22,56.07],[-5,56.23],[-5.38,56.02],[-5.42,55.97],[-5.39,55.77],[-5.56,55.39],[-5.65,55.33],[-5.77,55.36],[-5.68,55.62],[-5.51,55.8],[-5.62,55.81],[-5.61,56.05],[-5.54,56.25],[-5.19,56.76],[-5.65,56.53],[-5.87,56.56],[-5.97,56.69],[-6.13,56.72],[-5.73,56.85],[-5.86,56.9],[-5.59,57.1],[-5.56,57.23],[-5.82,57.44],[-5.58,57.55],[-5.68,57.57],[-5.74,57.67],[-5.61,57.88],[-5.16,57.88],[-5.41,58.07],[-5.34,58.24],[-5.01,58.26],[-5.09,58.38],[-5.07,58.52],[-4.98,58.58],[-4.81,58.57],[-4.71,58.51],[-4.49,58.57],[-4.43,58.51],[-3.05,58.63],[-3.11,58.41],[-3.21,58.32],[-3.99,57.96],[-4.03,57.85],[-3.86,57.82],[-4.08,57.68],[-4.13,57.58],[-3.3,57.71],[-3.04,57.67],[-2.08,57.7],[-1.87,57.61],[-1.78,57.47],[-2.02,57.26],[-2.26,56.86],[-2.5,56.64],[-2.68,56.51],[-3.31,56.36],[-2.89,56.4],[-2.65,56.32],[-2.67,56.25],[-2.98,56.19],[-3.36,56.03],[-3.79,56.09],[-3.61,56.02],[-3.05,55.95],[-2.84,56.03],[-2.6,56.03],[-2.15,55.9],[-1.65,55.57],[-1.23,54.7],[-0.67,54.5],[-0.08,54.12],[-0.21,54.02],[0.12,53.61],[-0.27,53.74],[-0.66,53.72],[-0.29,53.69],[0.27,53.34],[0.35,53.16],[0.05,52.91],[0.28,52.81],[0.38,52.83],[0.56,52.97],[1.06,52.96],[1.38,52.89],[1.72,52.68],[1.75,52.47],[1.56,52.09],[1.32,51.96],[1.23,51.97],[1.28,51.84],[1.19,51.8],[0.96,51.81],[0.75,51.73],[0.9,51.69],[0.89,51.57],[0.42,51.47],[0.53,51.49],[0.69,51.39],[0.89,51.36],[1.42,51.36],[1.4,51.18],[1.05,51.05],[0.96,50.93],[0.77,50.93],[0.2,50.76],[-0.2,50.82],[-0.79,50.76],[-1.42,50.9],[-1.33,50.82],[-1.52,50.75],[-2.03,50.72],[-1.96,50.63],[-2.04,50.6],[-2.35,50.64],[-2.43,50.6],[-3,50.72],[-3.4,50.63],[-3.68,50.24],[-3.79,50.23],[-4.2,50.39],[-4.73,50.29],[-5.01,50.16],[-5.12,50.04],[-5.23,50.02],[-5.43,50.11],[-5.62,50.05],[-5.66,50.13],[-5.34,50.25],[-4.89,50.53],[-4.58,50.78],[-4.52,50.98],[-4.3,51.03],[-4.19,51.19],[-3.84,51.23],[-3.14,51.21],[-2.43,51.74],[-2.67,51.62]]]},{id:"826",name:"United Kingdom",rings:[[[-4.2,53.32],[-4.05,53.31],[-4.08,53.26],[-4.37,53.13],[-4.55,53.26],[-4.57,53.39],[-4.31,53.42],[-4.2,53.32]]]},{id:"826",name:"United Kingdom",rings:[[[-2.55,59.23],[-2.66,59.23],[-2.6,59.29],[-2.41,59.3],[-2.55,59.23]]]},{id:"826",name:"United Kingdom",rings:[[[-1.04,60.51],[-1.16,60.6],[-1.09,60.72],[-0.99,60.69],[-1.05,60.65],[-1.04,60.51]]]},{id:"826",name:"United Kingdom",rings:[[[-1.31,60.54],[-1.29,60.47],[-1.16,60.42],[-1.05,60.44],[-1.2,60.01],[-1.3,59.88],[-1.36,59.91],[-1.29,60.15],[-1.48,60.17],[-1.67,60.28],[-1.37,60.33],[-1.45,60.47],[-1.57,60.5],[-1.36,60.61],[-1.3,60.61],[-1.31,60.54]]]},{id:"826",name:"United Kingdom",rings:[[[-0.78,60.81],[-0.83,60.68],[-0.92,60.7],[-0.92,60.81],[-0.78,60.81]]]},{id:"826",name:"United Kingdom",rings:[[[-3.17,58.79],[-3.28,58.78],[-3.39,58.91],[-3.27,58.9],[-3.17,58.79]]]},{id:"826",name:"United Kingdom",rings:[[[-2.93,58.74],[-3.04,58.82],[-2.9,58.83],[-2.93,58.74]]]},{id:"826",name:"United Kingdom",rings:[[[-3.06,59.03],[-2.76,58.96],[-2.83,58.89],[-3.2,58.93],[-3.24,59],[-3.35,58.99],[-3.31,59.13],[-3.05,59.1],[-3.02,59.06],[-3.06,59.03]]]},{id:"826",name:"United Kingdom",rings:[[[-2.73,59.19],[-2.82,59.16],[-2.86,59.25],[-3.05,59.32],[-2.98,59.35],[-2.73,59.19]]]},{id:"826",name:"United Kingdom",rings:[[[-6.61,56.59],[-6.67,56.59],[-6.57,56.66],[-6.49,56.67],[-6.61,56.59]]]},{id:"826",name:"United Kingdom",rings:[[[-5.11,55.45],[-5.33,55.48],[-5.37,55.67],[-5.19,55.69],[-5.11,55.57],[-5.11,55.45]]]},{id:"826",name:"United Kingdom",rings:[[[-5.78,56.34],[-6.31,56.29],[-6.19,56.36],[-6.14,56.49],[-6.32,56.57],[-6.1,56.65],[-5.95,56.54],[-5.76,56.49],[-5.78,56.34]]]},{id:"826",name:"United Kingdom",rings:[[[-6.13,55.93],[-6.06,55.72],[-6.09,55.66],[-6.31,55.61],[-6.3,55.78],[-6.49,55.7],[-6.41,55.85],[-6.13,55.93]]]},{id:"826",name:"United Kingdom",rings:[[[-5.97,55.81],[-6.04,55.81],[-6.07,55.89],[-5.91,55.97],[-5.97,55.99],[-5.94,56.05],[-5.73,56.12],[-5.97,55.81]]]},{id:"826",name:"United Kingdom",rings:[[[-6.2,58.36],[-6.33,58.19],[-6.55,58.09],[-6.4,58.08],[-6.42,58.02],[-6.96,57.75],[-7.08,57.81],[-6.86,57.92],[-7.06,58],[-6.99,58.05],[-7.09,58.1],[-7.03,58.22],[-6.73,58.19],[-6.78,58.3],[-6.24,58.5],[-6.2,58.36]]]},{id:"826",name:"United Kingdom",rings:[[[-6.28,56.96],[-6.43,57.02],[-6.32,57.05],[-6.26,57.01],[-6.28,56.96]]]},{id:"826",name:"United Kingdom",rings:[[[-6.14,57.51],[-6.14,57.31],[-5.67,57.25],[-5.95,57.05],[-6.01,57.05],[-6.04,57.2],[-6.32,57.2],[-6.44,57.33],[-6.68,57.36],[-6.76,57.44],[-6.58,57.51],[-6.62,57.56],[-6.38,57.6],[-6.36,57.67],[-6.25,57.65],[-6.14,57.51]]]},{id:"826",name:"United Kingdom",rings:[[[-7.21,57.68],[-7.09,57.63],[-7.18,57.53],[-7.52,57.6],[-7.47,57.65],[-7.21,57.68]]]},{id:"826",name:"United Kingdom",rings:[[[-7.25,57.12],[-7.38,57.13],[-7.41,57.38],[-7.27,57.37],[-7.25,57.12]]]},{id:"826",name:"United Kingdom",rings:[[[-7.42,56.97],[-7.54,56.97],[-7.45,57.02],[-7.42,56.97]]]},{id:"826",name:"United Kingdom",rings:[[[-6.22,54.09],[-6.65,54.06],[-6.67,54.18],[-6.8,54.21],[-6.94,54.37],[-7.05,54.41],[-7.2,54.3],[-7.16,54.24],[-7.32,54.13],[-7.61,54.14],[-7.85,54.22],[-8.15,54.45],[-7.75,54.59],[-7.91,54.7],[-7.55,54.77],[-7.38,55.03],[-7.22,55.09],[-7.1,55.05],[-6.95,55.18],[-6.47,55.24],[-6.13,55.22],[-5.87,54.92],[-5.72,54.82],[-5.71,54.76],[-5.88,54.68],[-5.88,54.64],[-5.58,54.66],[-5.47,54.5],[-5.48,54.44],[-5.67,54.55],[-5.66,54.38],[-5.56,54.37],[-5.61,54.27],[-5.83,54.24],[-6.02,54.05],[-6.22,54.09]]]},{id:"826",name:"United Kingdom",rings:[[[-1.06,50.69],[-1.25,50.59],[-1.56,50.67],[-1.31,50.77],[-1.06,50.69]]]},{id:"804",name:"Ukraine",rings:[[[38.21,47.09],[37.54,47.07],[37.34,46.92],[37.05,46.88],[36.79,46.71],[36.56,46.76],[36.28,46.66],[35.83,46.62],[35.4,46.38],[35.26,46.2],[35.06,46.1],[35.28,46.28],[35.29,46.37],[35.23,46.44],[35.06,46.27],[34.85,46.19],[34.86,45.99],[35,45.73],[34.95,45.73],[34.8,45.79],[34.79,45.89],[34.69,45.98],[34.45,45.97],[34.35,46.06],[34.03,46.11],[33.81,46.21],[33.66,46.22],[33.59,46.1],[33.43,46.06],[33.2,46.18],[32.48,46.08],[32.03,46.26],[31.83,46.28],[31.78,46.32],[31.99,46.36],[32.01,46.43],[31.71,46.47],[31.56,46.56],[32.36,46.48],[32.58,46.62],[32.36,46.57],[32.05,46.64],[31.94,46.78],[31.94,46.98],[31.76,47.21],[31.91,46.93],[31.87,46.65],[31.53,46.66],[31.56,46.78],[31.4,46.63],[30.8,46.55],[30.66,46.27],[30.22,45.87],[29.82,45.73],[29.63,45.72],[29.6,45.6],[29.67,45.54],[29.71,45.26],[29.4,45.42],[28.9,45.29],[28.78,45.31],[28.76,45.23],[28.32,45.35],[28.21,45.45],[28.5,45.52],[28.49,45.67],[28.73,45.85],[28.74,45.94],[28.95,46.05],[29.01,46.18],[28.94,46.29],[28.96,46.46],[29.19,46.52],[29.21,46.38],[29.31,46.47],[29.62,46.4],[29.71,46.45],[29.84,46.35],[30.13,46.42],[29.93,46.54],[29.94,46.72],[29.88,46.83],[29.57,46.96],[29.51,47.09],[29.54,47.27],[29.13,47.49],[29.21,47.78],[29.13,47.96],[28.92,47.95],[28.77,48.12],[28.53,48.15],[28.46,48.09],[28.34,48.15],[28.35,48.21],[28.29,48.24],[28.09,48.26],[27.82,48.42],[27.55,48.48],[27.23,48.37],[26.85,48.39],[26.62,48.26],[26.31,48.2],[26.16,47.99],[25.46,47.91],[24.89,47.72],[24.49,47.95],[24.18,47.91],[23.41,47.99],[23.14,48.09],[22.88,47.95],[22.77,48.11],[22.58,48.13],[22.35,48.26],[22.25,48.41],[22.13,48.41],[22.14,48.57],[22.3,48.69],[22.54,49.07],[22.84,49.04],[22.71,49.17],[22.73,49.29],[22.65,49.54],[22.71,49.61],[23.71,50.38],[23.97,50.41],[24.09,50.53],[24.09,50.62],[23.98,50.79],[24.1,50.87],[23.66,51.31],[23.61,51.61],[23.71,51.64],[23.98,51.59],[24.36,51.87],[25.27,51.94],[25.93,51.91],[27.14,51.75],[27.3,51.6],[27.69,51.57],[27.7,51.48],[27.86,51.59],[28.01,51.56],[28.18,51.61],[28.6,51.54],[28.65,51.46],[28.73,51.43],[28.85,51.54],[29.1,51.63],[29.35,51.38],[30.16,51.48],[30.31,51.4],[30.33,51.33],[30.54,51.26],[30.63,51.36],[30.53,51.6],[30.58,51.69],[30.76,51.89],[30.98,52.05],[31.57,52.11],[32.12,52.05],[32.28,52.11],[32.36,52.27],[32.43,52.31],[32.81,52.25],[33.15,52.34],[33.73,52.34],[33.92,52.25],[34.11,51.98],[34.4,51.78],[34.38,51.72],[34.12,51.68],[34.28,51.31],[34.21,51.26],[34.76,51.17],[35.06,51.2],[35.16,51.06],[35.31,51.04],[35.44,50.73],[35.41,50.54],[35.59,50.37],[35.67,50.35],[35.89,50.44],[36.12,50.41],[36.3,50.28],[36.5,50.28],[36.62,50.21],[36.76,50.29],[37.42,50.41],[37.58,50.29],[37.7,50.11],[38.05,49.92],[38.15,49.94],[38.18,50.03],[38.26,50.05],[38.92,49.82],[39.17,49.86],[39.3,49.74],[39.46,49.73],[39.78,49.57],[40.08,49.58],[40.11,49.25],[39.89,49.06],[39.68,49.01],[39.75,48.91],[40.01,48.82],[39.79,48.81],[39.7,48.74],[39.65,48.59],[39.84,48.54],[39.89,48.36],[39.85,48.3],[39.96,48.27],[39.77,47.96],[39.78,47.89],[39.66,47.84],[38.9,47.86],[38.64,47.67],[38.37,47.61],[38.29,47.56],[38.2,47.32],[38.28,47.28],[38.2,47.17],[38.21,47.09]]]},{id:"804",name:"Ukraine",rings:[[[32.01,46.2],[32.15,46.15],[32.01,46.17],[31.56,46.26],[31.51,46.37],[31.64,46.27],[32.01,46.2]]]},{id:"792",name:"Turkey",rings:[[[25.97,40.14],[25.67,40.14],[25.92,40.24],[25.97,40.14]]]},{id:"792",name:"Turkey",rings:[[[41.51,41.52],[41.82,41.43],[41.92,41.5],[42.47,41.44],[42.61,41.58],[42.79,41.56],[42.82,41.49],[43.15,41.31],[43.21,41.2],[43.43,41.16],[43.45,41.06],[43.63,40.93],[43.72,40.72],[43.57,40.48],[43.71,40.17],[43.67,40.13],[43.94,40.02],[44.29,40.04],[44.4,40],[44.82,39.65],[44.59,39.77],[44.46,39.67],[44.39,39.42],[44.02,39.38],[44.08,39.22],[44.18,39.14],[44.17,38.93],[44.27,38.84],[44.3,38.39],[44.45,38.34],[44.21,37.91],[44.56,37.74],[44.57,37.44],[44.8,37.27],[44.76,37.14],[44.61,37.18],[44.28,36.98],[44.2,37.05],[44.19,37.25],[44.11,37.3],[43.68,37.23],[43.09,37.37],[42.94,37.32],[42.77,37.37],[42.46,37.13],[42.36,37.11],[42.31,37.23],[42.2,37.3],[42.06,37.21],[41.51,37.09],[40.71,37.1],[40.02,36.83],[39.36,36.68],[38.77,36.69],[38.44,36.86],[38.19,36.9],[37.43,36.64],[37.07,36.65],[36.94,36.76],[36.66,36.8],[36.54,36.46],[36.64,36.23],[36.38,36.17],[36.35,36],[36.2,35.94],[36.13,35.83],[35.89,35.92],[35.96,36],[35.81,36.31],[36.19,36.66],[36.18,36.81],[36.05,36.91],[35.66,36.72],[35.54,36.6],[35.39,36.57],[34.7,36.82],[34.3,36.6],[33.95,36.3],[33.69,36.18],[32.93,36.1],[32.79,36.04],[32.38,36.18],[32.02,36.53],[31.35,36.8],[30.65,36.87],[30.58,36.8],[30.56,36.53],[30.45,36.27],[30.39,36.24],[30.23,36.31],[29.69,36.16],[29.22,36.32],[29.14,36.4],[29.04,36.69],[28.97,36.72],[28.82,36.68],[28.49,36.8],[28.31,36.81],[28.2,36.69],[28.02,36.63],[28.09,36.75],[27.66,36.68],[27.46,36.71],[27.63,36.79],[28.01,36.83],[28.24,37.03],[27.35,37.02],[27.26,36.98],[27.25,37.08],[27.3,37.13],[27.53,37.16],[27.52,37.25],[27.22,37.39],[27.15,37.6],[27.07,37.66],[27.23,37.73],[27.23,37.98],[26.88,38.06],[26.68,38.2],[26.58,38.15],[26.29,38.28],[26.34,38.37],[26.42,38.37],[26.37,38.56],[26.38,38.62],[26.44,38.64],[26.59,38.56],[26.6,38.42],[26.67,38.34],[26.73,38.42],[26.86,38.37],[27.14,38.45],[26.91,38.48],[26.76,38.71],[27.01,38.89],[26.81,38.96],[26.85,39.12],[26.68,39.29],[26.9,39.55],[26.11,39.47],[26.18,39.99],[26.31,40.02],[26.74,40.4],[27.28,40.46],[27.33,40.38],[27.48,40.32],[27.73,40.33],[27.85,40.38],[27.73,40.48],[27.87,40.51],[27.99,40.49],[27.93,40.38],[27.96,40.37],[29.01,40.39],[29.05,40.42],[28.79,40.53],[28.96,40.63],[29.85,40.74],[29.36,40.81],[29.12,40.94],[29.05,41.01],[29.15,41.22],[29.92,41.15],[30.35,41.2],[30.81,41.08],[31.25,41.11],[31.46,41.32],[32.3,41.73],[33.28,42],[34.75,41.96],[35,42.06],[35.16,42.03],[35.12,41.89],[35.3,41.73],[35.56,41.63],[35.92,41.71],[36.05,41.68],[36.18,41.43],[36.41,41.27],[36.51,41.26],[36.65,41.35],[36.78,41.36],[36.99,41.28],[37.07,41.18],[38.38,40.93],[39.43,41.11],[39.81,40.98],[40.26,40.96],[41.08,41.26],[41.51,41.52]]]},{id:"792",name:"Turkey",rings:[[[28.01,41.97],[27.99,41.86],[28.2,41.56],[29.06,41.23],[28.96,41.01],[28.78,40.97],[28.17,41.08],[27.92,40.99],[27.5,40.97],[27.26,40.69],[26.77,40.5],[26.33,40.12],[26.2,40.07],[26.25,40.31],[26.79,40.63],[26.11,40.61],[26.04,40.73],[26.33,40.95],[26.33,41.24],[26.62,41.4],[26.58,41.6],[26.32,41.72],[26.33,41.77],[26.51,41.83],[26.62,41.97],[27.24,42.09],[27.53,41.92],[28.01,41.97]]]},{id:"788",name:"Tunisia",rings:[[[11.5,33.18],[11.45,32.78],[11.45,32.64],[11.53,32.52],[11.5,32.41],[10.83,32.08],[10.61,31.93],[10.47,31.74],[10.28,31.68],[10.11,31.46],[10.26,30.94],[10.22,30.78],[9.89,30.39],[9.52,30.23],[9.05,32.07],[8.33,32.54],[8.21,32.93],[8.11,33.06],[7.73,33.27],[7.5,33.83],[7.52,34.08],[7.75,34.25],[7.84,34.41],[8.12,34.56],[8.25,34.73],[8.31,35.09],[8.39,35.2],[8.25,35.8],[8.35,36.37],[8.21,36.52],[8.37,36.63],[8.44,36.76],[8.6,36.83],[8.58,36.94],[8.82,37],[9.14,37.19],[9.69,37.34],[9.84,37.31],[9.78,37.21],[9.83,37.14],[9.89,37.18],[9.88,37.25],[10.2,37.21],[10.19,37.03],[10.33,36.86],[10.29,36.78],[10.41,36.73],[10.57,36.88],[11.05,37.07],[11.13,36.87],[10.97,36.74],[10.8,36.49],[10.52,36.32],[10.48,36.18],[10.59,35.89],[11,35.63],[11.04,35.34],[11.12,35.24],[10.69,34.68],[10.12,34.28],[10.04,34.14],[10.16,33.85],[10.31,33.73],[10.45,33.66],[10.71,33.69],[10.72,33.51],[10.9,33.53],[10.96,33.63],[11.09,33.56],[11.15,33.37],[11.26,33.31],[11.2,33.25],[11.5,33.18]]]},{id:"788",name:"Tunisia",rings:[[[11.28,34.75],[11.12,34.68],[11.26,34.82],[11.28,34.75]]]},{id:"788",name:"Tunisia",rings:[[[10.96,33.72],[10.86,33.69],[10.72,33.74],[10.74,33.89],[10.92,33.89],[11.02,33.82],[11.04,33.78],[10.96,33.72]]]},{id:"760",name:"Syria",rings:[[[35.89,35.92],[36.15,35.83],[36.2,35.94],[36.35,36],[36.38,36.17],[36.64,36.23],[36.54,36.46],[36.66,36.8],[36.94,36.76],[37.07,36.65],[37.43,36.64],[38.19,36.9],[38.44,36.86],[38.77,36.69],[39.36,36.68],[40.02,36.83],[40.71,37.1],[41.51,37.09],[42.06,37.21],[42.2,37.3],[42.31,37.23],[42.36,37.11],[41.79,36.6],[41.42,36.51],[41.29,36.38],[41.24,36.07],[41.35,35.81],[41.36,35.64],[41.22,35.29],[41.19,34.77],[40.99,34.43],[40.69,34.33],[39.05,33.51],[36.82,32.32],[36.37,32.39],[36.06,32.53],[35.89,32.71],[35.79,32.73],[35.91,32.95],[35.84,33.33],[35.87,33.43],[36.03,33.59],[35.94,33.67],[35.97,33.73],[36.09,33.83],[36.37,33.84],[36.28,33.89],[36.3,33.96],[36.59,34.22],[36.51,34.43],[36.33,34.5],[36.43,34.61],[36.38,34.66],[35.98,34.63],[35.89,34.95],[35.94,35.22],[35.9,35.42],[35.76,35.57],[35.89,35.92]]]},{id:"756",name:"Switzerland",rings:[[[9.52,47.52],[9.62,47.47],[9.48,47.17],[9.49,47.06],[9.84,47.01],[9.88,46.94],[10.13,46.85],[10.35,46.99],[10.46,46.9],[10.4,46.66],[10.43,46.55],[10.2,46.62],[10.09,46.6],[10.04,46.48],[10.13,46.24],[10.04,46.24],[9.94,46.36],[9.53,46.31],[9.43,46.48],[9.3,46.5],[9.26,46.48],[9.25,46.29],[9,46.02],[9.05,45.88],[8.96,45.83],[8.78,46],[8.82,46.08],[8.64,46.11],[8.46,46.25],[8.42,46.45],[8.09,46.27],[8.12,46.16],[7.99,46.02],[7.79,45.92],[7.54,45.98],[7.13,45.88],[7.05,45.9],[6.77,46.16],[6.82,46.28],[6.76,46.42],[6.43,46.43],[6.23,46.33],[6.27,46.25],[6.2,46.19],[5.97,46.15],[5.97,46.21],[6.1,46.28],[6.12,46.38],[6.06,46.43],[6.16,46.61],[6.41,46.75],[6.46,46.95],[6.67,47.03],[6.95,47.27],[7,47.34],[6.9,47.39],[7.05,47.49],[7.27,47.43],[7.42,47.46],[7.62,47.59],[8.43,47.59],[8.56,47.62],[8.4,47.69],[8.57,47.78],[8.88,47.66],[9.18,47.67],[9.52,47.52]]]},{id:"752",name:"Sweden",rings:[[[19.07,57.84],[18.82,57.71],[18.79,57.48],[18.91,57.4],[18.78,57.36],[18.7,57.24],[18.48,57.16],[18.34,56.98],[18.15,56.92],[18.29,57.08],[18.11,57.27],[18.15,57.34],[18.14,57.56],[18.54,57.83],[18.8,57.83],[18.9,57.92],[19.07,57.84]]]},{id:"752",name:"Sweden",rings:[[[16.53,56.29],[16.43,56.24],[16.4,56.31],[16.41,56.57],[16.63,56.88],[16.73,56.9],[17,57.32],[17.12,57.32],[16.78,56.8],[16.53,56.29]]]},{id:"752",name:"Sweden",rings:[[[11.39,59.04],[11.47,58.91],[11.64,58.93],[11.8,59.29],[11.68,59.59],[11.84,59.7],[11.93,59.86],[12.17,59.91],[12.49,60.11],[12.59,60.45],[12.31,60.89],[12.3,61],[12.71,61.06],[12.88,61.35],[12.59,61.54],[12.16,61.72],[12.3,62.28],[12.12,62.59],[12.11,62.92],[12.22,63],[12,63.29],[12.21,63.49],[12.17,63.6],[12.79,64],[13.2,64.07],[13.96,64.01],[14.14,64.17],[14.08,64.46],[13.65,64.58],[14.48,65.3],[14.55,65.65],[14.64,65.79],[14.54,66.13],[15.04,66.17],[15.49,66.31],[15.42,66.49],[16.4,67.06],[16.44,67.15],[16.13,67.43],[16.19,67.51],[16.46,67.55],[16.59,67.63],[16.79,67.9],[17.33,68.1],[17.92,67.97],[18.18,68.2],[18.16,68.53],[18.38,68.56],[19.97,68.36],[20.24,68.48],[19.97,68.54],[20.24,68.67],[20.35,68.85],[20.12,69.02],[20.62,69.04],[20.9,68.98],[20.92,68.91],[22,68.52],[22.85,68.37],[23.1,68.26],[23.18,68.14],[23.32,68.13],[23.64,67.95],[23.5,67.87],[23.54,67.61],[23.46,67.46],[23.73,67.42],[23.78,67.33],[23.63,67.23],[23.64,67.13],[23.99,66.81],[23.87,66.58],[23.7,66.48],[23.7,66.25],[24,66.06],[24.15,65.81],[23.89,65.78],[23.69,65.83],[23.1,65.74],[22.75,65.87],[22.54,65.8],[22.4,65.86],[22.29,65.75],[22.25,65.6],[22.09,65.61],[22.15,65.55],[21.92,65.53],[21.95,65.47],[21.88,65.42],[21.57,65.41],[21.52,65.36],[21.61,65.26],[21.41,65.32],[21.57,65.13],[21.14,64.81],[21.52,64.46],[21.47,64.38],[21.02,64.18],[20.76,63.87],[20.21,63.66],[19.91,63.61],[19.72,63.46],[19.5,63.51],[19.5,63.42],[19.36,63.48],[19.04,63.24],[18.82,63.26],[18.86,63.21],[18.61,63.18],[18.53,63.06],[18.31,63],[18.5,62.99],[18.46,62.9],[18.17,62.79],[17.88,62.87],[17.97,62.72],[17.9,62.66],[18.04,62.6],[17.65,62.45],[17.41,62.51],[17.38,62.46],[17.43,62.34],[17.63,62.23],[17.51,62.17],[17.38,61.87],[17.47,61.68],[17.2,61.72],[17.22,61.66],[17.13,61.57],[17.14,61.38],[17.2,61.31],[17.16,61.28],[17.2,60.95],[17.28,60.81],[17.25,60.7],[17.36,60.64],[17.56,60.64],[17.66,60.54],[17.96,60.59],[18.16,60.41],[18.56,60.25],[18.53,60.15],[18.79,60.08],[18.99,59.83],[18.97,59.76],[18.58,59.57],[17.97,59.36],[18.13,59.32],[18.56,59.39],[18.62,59.33],[18.42,59.29],[18.29,59.11],[17.76,58.97],[16.98,58.65],[16.21,58.64],[16.79,58.59],[16.93,58.49],[16.65,58.43],[16.77,58.21],[16.7,58.16],[16.7,57.92],[16.6,57.91],[16.55,57.81],[16.65,57.5],[16.48,57.26],[16.53,57.07],[16.35,56.71],[15.92,56.17],[15.83,56.13],[15.63,56.19],[14.72,56.13],[14.75,56.03],[14.56,56.05],[14.21,55.83],[14.2,55.73],[14.34,55.53],[14.18,55.4],[13.81,55.43],[13.32,55.35],[12.89,55.41],[12.94,55.48],[12.97,55.75],[12.47,56.29],[12.71,56.23],[12.8,56.26],[12.66,56.44],[12.86,56.45],[12.92,56.52],[12.88,56.62],[12.72,56.66],[12.42,56.91],[12.15,57.23],[12.05,57.45],[11.96,57.43],[11.88,57.68],[11.73,57.72],[11.7,57.97],[11.55,58],[11.45,58.12],[11.43,58.34],[11.25,58.37],[11.21,58.87],[11.15,58.99],[11.19,59.08],[11.39,59.04]]]},{id:"752",name:"Sweden",rings:[[[19.16,57.92],[19.14,57.86],[19.04,57.91],[19.14,57.98],[19.33,57.96],[19.16,57.92]]]},{id:"752",name:"Sweden",rings:[[[18.42,59.03],[18.35,59.02],[18.38,59.07],[18.48,59.1],[18.42,59.03]]]},{id:"752",name:"Sweden",rings:[[[18.6,59.47],[18.57,59.44],[18.55,59.48],[18.57,59.53],[18.7,59.54],[18.6,59.47]]]},{id:"724",name:"Spain",rings:[[[1.59,38.67],[1.41,38.67],[1.4,38.71],[1.43,38.77],[1.59,38.67]]]},{id:"724",name:"Spain",rings:[[[3.14,39.79],[3.45,39.76],[3.46,39.7],[3.25,39.39],[3.07,39.3],[2.8,39.39],[2.7,39.54],[2.5,39.48],[2.37,39.57],[2.9,39.91],[3.2,39.96],[3.14,39.79]]]},{id:"724",name:"Spain",rings:[[[4.29,39.84],[3.87,39.96],[3.85,40.06],[4.22,40.03],[4.32,39.9],[4.29,39.84]]]},{id:"724",name:"Spain",rings:[[[1.45,38.92],[1.41,38.86],[1.22,38.9],[1.35,39.08],[1.56,39.12],[1.61,39.09],[1.63,39.04],[1.45,38.92]]]},{id:"724",name:"Spain",rings:[[[-1.79,43.41],[-1.76,43.32],[-1.41,43.24],[-1.48,43.07],[-1.43,43.04],[-1.3,43.1],[-1.18,43.02],[-0.76,42.94],[-0.59,42.8],[-0.3,42.83],[-0.04,42.69],[0.63,42.69],[0.7,42.85],[1.35,42.69],[1.43,42.6],[1.45,42.44],[1.7,42.5],[1.99,42.36],[2.2,42.42],[2.65,42.34],[2.67,42.39],[2.89,42.46],[3.21,42.43],[3.31,42.29],[3.17,42.26],[3.15,42.16],[3.24,42.08],[3.25,41.94],[3,41.77],[2.31,41.47],[2.08,41.29],[1.03,41.06],[0.71,40.82],[0.89,40.72],[0.6,40.61],[0.04,40.01],[-0.33,39.52],[-0.2,39.06],[-0.03,38.89],[0.16,38.82],[0.2,38.76],[-0.52,38.32],[-0.82,37.77],[-0.82,37.71],[-0.72,37.63],[-0.82,37.58],[-1.33,37.56],[-1.64,37.39],[-2.11,36.78],[-2.19,36.74],[-2.45,36.83],[-2.79,36.72],[-3.15,36.76],[-3.43,36.71],[-3.83,36.76],[-4.37,36.72],[-4.67,36.51],[-4.93,36.5],[-5.17,36.42],[-5.36,36.14],[-5.45,36.15],[-5.46,36.07],[-5.63,36.03],[-6.04,36.19],[-6.23,36.43],[-6.27,36.6],[-6.38,36.64],[-6.41,36.73],[-6.22,36.91],[-6.32,36.91],[-6.4,36.83],[-6.49,36.95],[-6.89,37.19],[-6.86,37.28],[-6.98,37.2],[-7.41,37.18],[-7.5,37.59],[-7.44,37.73],[-7.18,38.01],[-7.02,38.05],[-6.96,38.19],[-7.1,38.18],[-7.34,38.46],[-7.28,38.72],[-7.05,38.91],[-7,39.06],[-7.17,39.14],[-7.34,39.47],[-7.54,39.66],[-7.12,39.68],[-6.98,39.8],[-6.9,40.02],[-7.03,40.17],[-6.81,40.34],[-6.85,40.44],[-6.83,40.78],[-6.93,41.01],[-6.21,41.53],[-6.31,41.64],[-6.54,41.67],[-6.56,41.87],[-6.62,41.94],[-7.15,41.98],[-7.21,41.9],[-7.4,41.83],[-7.92,41.88],[-8.15,41.81],[-8.22,41.9],[-8.14,42.04],[-8.27,42.14],[-8.85,41.93],[-8.89,42.11],[-8.69,42.27],[-8.81,42.28],[-8.73,42.41],[-8.81,42.47],[-8.81,42.64],[-9.03,42.59],[-8.93,42.8],[-9.04,42.81],[-9.24,42.98],[-9.18,43.17],[-8.87,43.33],[-8.54,43.34],[-8.25,43.44],[-8.26,43.58],[-7.7,43.77],[-7.5,43.74],[-7.26,43.6],[-7.06,43.55],[-5.85,43.65],[-4.52,43.42],[-3.61,43.52],[-3.04,43.37],[-2.87,43.45],[-2.34,43.33],[-1.79,43.41]]]},{id:"703",name:"Slovakia",rings:[[[22.54,49.07],[22.3,48.69],[22.14,48.57],[22.11,48.39],[21.72,48.35],[21.45,48.55],[21.07,48.51],[20.49,48.53],[20.33,48.3],[19.9,48.13],[19.63,48.22],[19.47,48.11],[18.79,48],[18.73,47.79],[17.76,47.77],[17.63,47.81],[17.32,47.99],[17.09,48.04],[16.86,48.39],[16.99,48.68],[17.13,48.84],[17.48,48.83],[17.76,48.89],[18.08,49.07],[18.16,49.26],[18.6,49.49],[18.94,49.5],[18.97,49.4],[19.15,49.4],[19.25,49.51],[19.44,49.6],[19.63,49.41],[19.77,49.37],[19.76,49.2],[19.8,49.19],[20.06,49.18],[20.16,49.32],[20.36,49.38],[20.62,49.39],[20.95,49.32],[21.08,49.42],[21.35,49.43],[21.89,49.34],[22.02,49.21],[22.54,49.07]]]},{id:"705",name:"Slovenia",rings:[[[16.52,46.5],[16.32,46.53],[16.24,46.48],[16.23,46.37],[16.07,46.37],[15.93,46.28],[15.64,46.2],[15.59,46.14],[15.67,46.05],[15.65,45.86],[15.28,45.73],[15.36,45.65],[15.28,45.58],[15.34,45.47],[15.24,45.44],[14.79,45.48],[14.57,45.66],[14.37,45.48],[13.99,45.51],[13.88,45.43],[13.61,45.48],[13.58,45.52],[13.88,45.61],[13.72,45.76],[13.58,45.81],[13.6,45.98],[13.49,45.99],[13.63,46.18],[13.38,46.26],[13.7,46.52],[14.55,46.4],[14.89,46.61],[15.44,46.63],[15.76,46.71],[15.96,46.68],[15.98,46.8],[16.09,46.86],[16.28,46.86],[16.38,46.64],[16.52,46.5]]]},{id:"688",name:"Serbia",rings:[[[22.7,44.24],[22.63,44.19],[22.6,44.08],[22.42,44.01],[22.37,43.78],[22.56,43.45],[22.98,43.19],[22.94,43.1],[22.71,42.88],[22.47,42.84],[22.44,42.63],[22.53,42.48],[22.42,42.33],[22.24,42.36],[21.56,42.25],[21.52,42.33],[21.61,42.39],[21.75,42.67],[21.39,42.75],[21.4,42.83],[21.06,43.09],[20.85,43.17],[20.8,43.26],[20.62,43.2],[20.66,43.1],[20.62,43.03],[20.48,42.95],[20.47,42.86],[20.35,42.83],[20.27,42.94],[19.61,43.17],[19.22,43.45],[19.19,43.52],[19.25,43.58],[19.45,43.56],[19.5,43.64],[19.24,43.96],[19.55,43.99],[19.58,44.04],[19.12,44.36],[19.15,44.53],[19.29,44.7],[19.35,44.88],[19,44.9],[19.09,44.93],[19.06,45.14],[19.14,45.2],[19.39,45.17],[19.4,45.21],[19.01,45.4],[19.06,45.52],[18.92,45.6],[18.95,45.66],[18.84,45.84],[18.91,45.93],[19.07,46.01],[19.28,46],[19.53,46.16],[20.21,46.13],[20.71,45.74],[20.77,45.75],[20.77,45.48],[21.02,45.32],[21.49,45.15],[21.35,45.01],[21.53,44.9],[21.36,44.83],[21.91,44.67],[22.09,44.54],[22.5,44.71],[22.64,44.65],[22.74,44.57],[22.55,44.54],[22.49,44.44],[22.7,44.24]]]},{id:"674",name:"San Marino",rings:[[[12.49,43.9],[12.4,43.94],[12.5,43.99],[12.49,43.9]]]},{id:"643",name:"Russia",rings:[[[62,53.98],[61.93,53.95],[61.33,54.05],[61.23,54.02],[61.14,53.96],[61.11,53.75],[60.98,53.62],[61.25,53.55],[61.52,53.55],[61.5,53.49],[61.23,53.45],[61.16,53.34],[61.2,53.29],[61.66,53.23],[62,53.11],[62,52.95],[61.05,52.97],[60.77,52.68],[60.99,52.34],[60.67,52.15],[60.42,52.13],[60.03,51.93],[60.39,51.77],[60.46,51.65],[61.36,51.44],[61.56,51.32],[61.58,51.23],[61.39,50.86],[60.94,50.7],[60.42,50.68],[60.29,50.7],[60.06,50.85],[59.96,50.8],[59.81,50.58],[59.52,50.49],[59.52,50.58],[59.45,50.62],[58.88,50.69],[58.36,51.06],[57.84,51.09],[57.65,50.92],[57.44,50.89],[57.18,51.04],[57.01,51.07],[56.62,50.98],[56.49,51.02],[56.14,50.84],[56.05,50.71],[55.69,50.58],[55.36,50.67],[54.64,51.01],[54.55,50.95],[54.65,50.66],[54.56,50.54],[54.47,50.58],[54.42,50.78],[54.14,51.04],[53.34,51.48],[52.57,51.48],[52.33,51.68],[52.22,51.71],[52.01,51.67],[51.61,51.48],[51.35,51.47],[51.27,51.59],[51.16,51.65],[50.79,51.73],[50.25,51.29],[49.82,51.13],[49.5,51.08],[49.32,50.85],[48.81,50.6],[48.62,50.61],[48.84,50.01],[48.76,49.93],[48.43,49.83],[48.22,49.93],[47.71,50.38],[47.5,50.4],[47.37,50.32],[47.3,50.22],[47.3,50.06],[46.99,49.85],[46.89,49.7],[46.8,49.37],[47.03,49.15],[46.7,48.8],[46.61,48.57],[46.66,48.41],[47.07,48.23],[47.12,48.13],[47.09,47.95],[47.29,47.74],[47.48,47.8],[48.17,47.71],[48.6,47.26],[48.96,46.77],[48.88,46.71],[48.56,46.76],[48.5,46.7],[48.54,46.61],[49.23,46.34],[49.25,46.29],[49.12,46.28],[49.08,46.19],[48.69,46.09],[48.73,45.9],[48.49,45.94],[48.16,45.74],[47.83,45.66],[47.7,45.69],[47.63,45.58],[47.46,45.68],[47.53,45.6],[47.52,45.49],[47.41,45.42],[47.39,45.29],[47.08,44.82],[47,44.88],[46.96,44.78],[46.76,44.66],[46.72,44.56],[46.75,44.42],[47.02,44.34],[47.31,44.1],[47.46,43.56],[47.56,43.83],[47.65,43.89],[47.51,43.51],[47.46,43.03],[47.63,42.9],[47.73,42.68],[48.08,42.35],[48.38,41.95],[48.57,41.85],[48.39,41.6],[48.06,41.46],[47.86,41.21],[47.59,41.22],[47.26,41.32],[47.21,41.46],[46.75,41.81],[46.57,41.8],[46.54,41.87],[45.95,42.04],[45.64,42.2],[45.73,42.48],[45.65,42.52],[45.34,42.53],[45.16,42.68],[44.87,42.76],[44.77,42.62],[44.65,42.73],[44.51,42.75],[43.96,42.57],[43.83,42.57],[43.74,42.62],[43.78,42.75],[43.09,42.99],[42.99,43.09],[42.76,43.17],[42.57,43.16],[42.42,43.22],[41.58,43.22],[41.36,43.33],[41.08,43.37],[40.65,43.53],[40.15,43.57],[39.98,43.42],[38.72,44.29],[38.18,44.42],[37.85,44.7],[37.7,44.66],[37.5,44.7],[37.2,44.97],[36.65,45.13],[36.62,45.19],[36.94,45.29],[36.72,45.37],[36.79,45.41],[36.87,45.43],[37.22,45.27],[37.65,45.38],[37.67,45.49],[37.61,45.5],[37.61,45.57],[37.84,45.8],[37.93,46],[38.01,46.05],[38.08,45.94],[38.18,46.09],[38.49,46.09],[38.08,46.39],[37.91,46.41],[37.77,46.64],[37.97,46.62],[38.23,46.7],[38.5,46.66],[38.44,46.81],[39.27,47.04],[39.29,47.11],[39.2,47.27],[39.02,47.27],[38.93,47.18],[38.67,47.14],[38.55,47.15],[38.76,47.26],[38.58,47.24],[38.21,47.09],[38.2,47.17],[38.28,47.28],[38.2,47.32],[38.29,47.56],[38.64,47.67],[38.82,47.84],[39.74,47.84],[39.78,47.89],[39.77,47.96],[39.96,48.27],[39.85,48.3],[39.89,48.36],[39.84,48.54],[39.65,48.59],[39.7,48.74],[39.79,48.81],[40.01,48.82],[39.75,48.91],[39.68,49.01],[39.89,49.06],[40.11,49.25],[40.08,49.58],[39.78,49.57],[39.46,49.73],[39.3,49.74],[39.17,49.86],[38.92,49.82],[38.26,50.05],[38.18,50.03],[38.15,49.94],[38.05,49.92],[37.7,50.11],[37.58,50.29],[37.42,50.41],[36.76,50.29],[36.62,50.21],[36.5,50.28],[36.3,50.28],[36.12,50.41],[35.89,50.44],[35.67,50.35],[35.59,50.37],[35.41,50.54],[35.44,50.73],[35.31,51.04],[35.16,51.06],[35.06,51.2],[34.76,51.17],[34.21,51.26],[34.28,51.31],[34.12,51.68],[34.38,51.72],[34.4,51.78],[34.11,51.98],[33.92,52.25],[33.73,52.34],[33.15,52.34],[32.81,52.25],[32.43,52.31],[32.36,52.27],[32.28,52.11],[32.12,52.05],[31.76,52.1],[31.58,52.31],[31.62,52.55],[31.53,52.63],[31.56,52.76],[31.26,53.02],[31.42,53.2],[31.67,53.2],[31.85,53.11],[32.14,53.09],[32.7,53.34],[32.69,53.45],[32.47,53.55],[32.42,53.62],[32.45,53.69],[32.2,53.78],[31.75,53.81],[31.83,54.03],[31.4,54.2],[31.19,54.45],[31.07,54.49],[31.15,54.63],[30.8,54.78],[30.83,54.92],[30.98,55.05],[30.96,55.14],[30.81,55.28],[30.9,55.4],[30.88,55.6],[30.23,55.84],[29.94,55.85],[29.48,55.68],[29.35,55.78],[29.37,55.94],[29.09,56.02],[28.79,55.94],[28.56,56.09],[28.28,56.06],[28.15,56.14],[28.2,56.26],[28.1,56.55],[28.01,56.6],[27.85,56.85],[27.64,56.85],[27.83,57.19],[27.83,57.29],[27.54,57.43],[27.51,57.51],[27.35,57.53],[27.4,57.67],[27.54,57.8],[27.78,57.86],[27.67,57.93],[27.5,58.22],[27.53,58.43],[27.43,58.79],[27.76,59.05],[27.9,59.28],[28.15,59.37],[28.01,59.48],[28.06,59.55],[28.01,59.72],[28.06,59.78],[28.33,59.69],[28.52,59.85],[28.95,59.83],[29.15,60],[30.12,59.87],[30.17,59.96],[29.72,60.19],[29.07,60.19],[28.64,60.38],[28.49,60.54],[28.62,60.49],[28.65,60.61],[28.51,60.68],[28.18,60.57],[27.8,60.54],[28.41,60.9],[29.25,61.29],[30.94,62.32],[31.29,62.57],[31.53,62.89],[31.18,63.21],[30.42,63.5],[29.99,63.73],[30.21,63.8],[30.53,64.08],[30.49,64.24],[30.11,64.37],[29.99,64.52],[30.12,64.64],[30.11,64.73],[29.78,64.8],[29.6,64.97],[29.62,65.04],[29.83,65.15],[29.81,65.2],[29.61,65.25],[29.72,65.34],[29.73,65.47],[29.82,65.57],[29.72,65.63],[30.09,65.68],[30.09,65.79],[29.9,66.09],[29.06,66.89],[29.09,66.97],[29.24,67.1],[29.94,67.55],[29.99,67.67],[29.34,68.06],[28.69,68.19],[28.47,68.49],[28.78,68.81],[28.41,68.9],[29.12,69.05],[29.39,69.3],[29.99,69.39],[30.16,69.5],[30.16,69.63],[30.62,69.53],[30.86,69.54],[30.92,69.61],[30.87,69.78],[31.55,69.7],[31.79,69.82],[32,69.81],[31.98,69.95],[33.01,69.72],[33,69.63],[32.91,69.6],[32.18,69.67],[32.09,69.63],[32.33,69.55],[32.38,69.48],[33,69.47],[32.94,69.38],[32.98,69.37],[33.45,69.43],[33.33,69.15],[33.14,69.07],[33.44,69.13],[33.68,69.31],[34.23,69.31],[35.01,69.22],[35.29,69.28],[35.86,69.19],[37.73,68.69],[38.43,68.36],[38.83,68.32],[39.57,68.07],[39.82,68.06],[39.75,68.16],[39.81,68.15],[40.38,67.83],[40.97,67.71],[41.06,67.44],[41.13,67.39],[41.13,67.27],[41.36,67.21],[41.28,66.91],[41.19,66.83],[40.52,66.45],[40.1,66.3],[39.29,66.13],[38.66,66.07],[37.9,66.1],[36.98,66.27],[35.51,66.4],[34.82,66.61],[34.48,66.55],[34.4,66.61],[34.45,66.65],[33.15,66.84],[32.85,67.02],[32.93,67.09],[31.89,67.16],[32.5,67],[32.46,66.92],[32.86,66.72],[33.18,66.68],[33.22,66.53],[33.65,66.44],[33.36,66.33],[34.11,66.23],[34.4,66.13],[34.69,65.95],[34.79,65.86],[34.78,65.77],[34.62,65.51],[34.41,65.4],[34.8,64.99],[34.83,64.8],[34.95,64.76],[34.86,64.71],[34.87,64.56],[35.03,64.44],[35.43,64.35],[35.65,64.38],[36.15,64.19],[36.37,64],[37.44,63.81],[37.97,63.95],[38.07,64.03],[38.06,64.09],[37.95,64.32],[37.74,64.4],[37.18,64.41],[36.58,64.79],[36.53,64.94],[36.79,64.99],[36.88,65.17],[37.14,65.19],[37.53,65.11],[38.01,64.88],[38.41,64.86],[39.57,64.57],[39.76,64.58],[39.85,64.69],[40.06,64.77],[40.44,64.78],[40.28,65],[39.8,65.35],[39.75,65.45],[39.82,65.6],[40.33,65.75],[40.69,65.96],[41.47,66.12],[42.21,66.52],[42.6,66.42],[43.23,66.41],[43.65,66.25],[43.54,66.12],[43.84,66.14],[44.11,66.01],[44.15,66.11],[44.1,66.23],[44.49,66.67],[44.43,66.94],[44.29,67.1],[43.85,67.19],[43.78,67.26],[44.22,68],[44.2,68.25],[44.17,68.33],[43.33,68.67],[44.05,68.55],[45.08,68.58],[45.89,68.48],[46.68,67.97],[46.69,67.85],[45.53,67.76],[44.94,67.48],[44.9,67.41],[44.94,67.35],[45.56,67.19],[45.88,66.89],[46.49,66.8],[47.66,66.98],[47.77,67.28],[47.91,67.45],[47.88,67.58],[48.83,67.68],[48.88,67.73],[48.7,67.87],[48.75,67.9],[49.16,67.87],[50.84,68.35],[51.99,68.54],[52.29,68.46],[52.18,68.37],[52.4,68.35],[52.72,68.48],[52.55,68.59],[52.34,68.61],[53.8,69],[54.49,68.99],[53.8,68.91],[53.97,68.84],[53.76,68.63],[53.92,68.54],[53.93,68.44],[53.83,68.38],[53.34,68.34],[53.26,68.27],[53.97,68.23],[54.48,68.3],[54.72,68.18],[54.86,68.2],[54.92,68.37],[55.42,68.57],[56.04,68.65],[57.13,68.55],[58.17,68.89],[58.24,68.83],[58.35,68.92],[59.06,69.01],[59.11,68.9],[59.37,68.74],[59.11,68.62],[59.1,68.44],[59.73,68.35],[59.92,68.47],[59.87,68.61],[59.9,68.71],[60.49,68.73],[60.93,68.99],[60.86,69.15],[60.67,69.11],[60.17,69.59],[60.91,69.85],[62,69.76],[62,69],[-32,69],[-32,65.05],[62,65.05],[62,53.98]]]},{id:"643",name:"Russia",rings:[[[35.81,65.18],[35.86,65.08],[35.84,65],[35.78,64.98],[35.53,65.15],[35.81,65.18]]]},{id:"643",name:"Russia",rings:[[[42.71,66.7],[42.46,66.77],[42.63,66.78],[42.71,66.7]]]},{id:"643",name:"Russia",rings:[[[20.96,55.28],[20.59,54.98],[20.89,54.91],[21.19,54.93],[21.23,55.26],[21.39,55.27],[22.07,55.06],[22.57,55.06],[22.63,54.97],[22.83,54.87],[22.69,54.56],[22.76,54.36],[19.6,54.46],[19.86,54.63],[19.97,54.92],[20.52,55],[20.9,55.29],[20.96,55.28]]]},{id:"643",name:"Russia",rings:[[[33.59,46.1],[33.66,46.22],[33.81,46.21],[34.03,46.11],[34.35,46.06],[34.45,45.97],[34.69,45.98],[34.79,45.89],[34.8,45.79],[35,45.73],[35.26,45.45],[35.46,45.32],[35.83,45.4],[36.01,45.37],[36.17,45.45],[36.57,45.39],[36.39,45.07],[35.87,45],[35.68,45.1],[35.47,45.1],[35.09,44.8],[34.72,44.81],[34.47,44.72],[34.08,44.42],[33.76,44.4],[33.45,44.55],[33.61,44.91],[33.55,45.1],[33.39,45.19],[33.19,45.19],[32.92,45.35],[32.61,45.33],[32.51,45.4],[33.14,45.75],[33.67,45.95],[33.59,46.1]]]},{id:"642",name:"Romania",rings:[[[28.21,45.45],[28.32,45.35],[28.76,45.23],[28.78,45.31],[28.9,45.29],[29.4,45.42],[29.71,45.26],[29.56,44.84],[29.05,44.76],[29.05,44.92],[29.09,44.98],[28.98,44.99],[28.89,44.92],[28.92,44.81],[28.81,44.57],[28.89,44.57],[28.64,44.3],[28.66,43.98],[28.59,43.74],[28.22,43.77],[28.05,43.82],[27.88,43.99],[27.74,43.96],[27.43,44.02],[27.09,44.17],[26.22,44.01],[25.82,43.77],[25.5,43.67],[23.23,43.87],[22.92,43.83],[22.87,43.95],[23.03,44.08],[22.7,44.24],[22.49,44.44],[22.55,44.54],[22.7,44.56],[22.72,44.61],[22.5,44.71],[22.09,44.54],[21.91,44.67],[21.36,44.83],[21.53,44.9],[21.35,45.01],[21.49,45.15],[21.02,45.32],[20.77,45.48],[20.77,45.75],[20.71,45.74],[20.24,46.11],[20.51,46.17],[20.61,46.13],[20.76,46.25],[21.12,46.28],[21.26,46.41],[21.32,46.61],[21.5,46.7],[21.48,46.75],[21.66,47.04],[21.99,47.4],[22,47.5],[22.29,47.73],[22.61,47.77],[23.14,48.09],[23.41,47.99],[24.18,47.91],[24.58,47.93],[24.89,47.72],[25.46,47.91],[26.16,47.99],[26.31,48.2],[26.71,48.26],[26.98,48.16],[27.61,47.34],[28.07,46.98],[28.24,46.64],[28.24,46.45],[28.1,45.97],[28.16,45.65],[28.07,45.6],[28.21,45.45]]]},{id:"620",name:"Portugal",rings:[[[-8.78,41.94],[-8.59,42.05],[-8.27,42.14],[-8.14,42.04],[-8.22,41.9],[-8.15,41.81],[-7.92,41.88],[-7.4,41.83],[-7.21,41.9],[-7.15,41.98],[-6.62,41.94],[-6.56,41.87],[-6.54,41.67],[-6.31,41.64],[-6.21,41.53],[-6.93,41.01],[-6.83,40.78],[-6.85,40.44],[-6.81,40.34],[-7.03,40.17],[-6.9,40.02],[-6.98,39.8],[-7.12,39.68],[-7.54,39.66],[-7.34,39.47],[-7.17,39.14],[-7,39.06],[-7.05,38.91],[-7.28,38.72],[-7.34,38.46],[-7.1,38.18],[-6.96,38.19],[-7.02,38.05],[-7.18,38.01],[-7.44,37.73],[-7.5,37.59],[-7.41,37.18],[-7.84,37.01],[-8.6,37.12],[-9,37.03],[-8.81,37.43],[-8.79,37.73],[-8.88,37.96],[-8.81,38.3],[-8.88,38.45],[-8.67,38.42],[-8.8,38.52],[-9.21,38.45],[-9.25,38.66],[-9.02,38.75],[-8.94,39],[-8.79,39.08],[-8.96,39.02],[-9.14,38.74],[-9.36,38.7],[-9.47,38.73],[-9.35,39.25],[-9.38,39.34],[-9.15,39.54],[-8.84,40.12],[-8.87,40.26],[-8.69,40.75],[-8.66,41.09],[-8.81,41.65],[-8.76,41.7],[-8.85,41.7],[-8.89,41.77],[-8.78,41.94]]]},{id:"616",name:"Poland",rings:[[[23.6,51.52],[23.68,51.4],[23.66,51.31],[24.1,50.87],[23.98,50.79],[24.09,50.62],[24.09,50.53],[23.97,50.41],[23.71,50.38],[23.41,50.17],[22.65,49.54],[22.73,49.29],[22.71,49.17],[22.85,49.08],[22.81,49.02],[22.02,49.21],[21.89,49.34],[21.64,49.41],[21.08,49.42],[21,49.34],[20.87,49.32],[20.62,49.39],[20.36,49.38],[20.16,49.32],[20.06,49.18],[19.76,49.2],[19.77,49.37],[19.63,49.41],[19.44,49.6],[19.25,49.51],[19.15,49.4],[18.97,49.4],[18.94,49.5],[18.83,49.51],[18.81,49.61],[18.6,49.76],[18.56,49.88],[18.3,49.91],[18.03,50.04],[17.88,49.97],[17.63,50.12],[17.59,50.16],[17.74,50.23],[17.7,50.31],[17.42,50.25],[17.15,50.38],[16.88,50.43],[16.99,50.24],[16.64,50.1],[16.21,50.42],[16.42,50.57],[16.28,50.66],[16.01,50.61],[15.73,50.74],[15.36,50.81],[15.26,50.96],[14.99,51.01],[14.98,50.89],[14.81,50.86],[15.02,51.25],[14.91,51.46],[14.73,51.52],[14.74,51.63],[14.6,51.83],[14.75,52.08],[14.68,52.25],[14.55,52.36],[14.62,52.53],[14.13,52.88],[14.37,53.1],[14.41,53.22],[14.26,53.73],[14.58,53.64],[14.56,53.82],[14.21,53.87],[14.2,53.92],[16.19,54.29],[16.56,54.55],[16.89,54.6],[17.26,54.73],[18.08,54.84],[18.32,54.84],[18.76,54.68],[18.8,54.63],[18.44,54.75],[18.59,54.51],[18.67,54.43],[18.98,54.35],[19.41,54.39],[19.6,54.46],[22.17,54.36],[22.89,54.39],[23.45,54.14],[23.6,53.6],[23.89,53.03],[23.9,52.7],[23.41,52.52],[23.18,52.29],[23.65,52.04],[23.63,51.81],[23.55,51.71],[23.6,51.52]]]},{id:"578",name:"Norway",rings:[[[20.62,69.04],[20.12,69.02],[20.35,68.85],[20.24,68.67],[19.97,68.54],[20.24,68.48],[19.97,68.36],[18.3,68.56],[18.16,68.53],[18.18,68.2],[17.92,67.97],[17.33,68.1],[16.79,67.9],[16.59,67.63],[16.19,67.51],[16.13,67.43],[16.44,67.15],[16.4,67.06],[15.42,66.49],[15.49,66.31],[15.04,66.17],[14.54,66.13],[14.64,65.79],[14.55,65.65],[14.48,65.3],[13.65,64.58],[14.08,64.46],[14.15,64.26],[14.14,64.17],[14.06,64.1],[13.96,64.01],[13.2,64.07],[12.79,64],[12.17,63.6],[12.21,63.49],[12,63.29],[12.22,63],[12.11,62.92],[12.12,62.59],[12.3,62.28],[12.16,61.72],[12.59,61.54],[12.88,61.35],[12.71,61.06],[12.3,61],[12.31,60.89],[12.59,60.45],[12.49,60.11],[12.17,59.91],[11.93,59.86],[11.84,59.7],[11.68,59.59],[11.8,59.29],[11.64,58.93],[11.47,58.91],[11.37,59.1],[10.83,59.18],[10.64,59.39],[10.6,59.76],[10.54,59.7],[10.57,59.59],[10.4,59.52],[10.46,59.38],[10.43,59.28],[10.18,59.01],[9.84,58.96],[9.64,59.12],[9.56,59.11],[9.7,59.01],[9.66,58.97],[9.31,58.86],[9.39,58.81],[9.32,58.75],[8.17,58.14],[7.46,58.02],[7,58.02],[6.9,58.07],[6.88,58.15],[6.8,58.16],[6.73,58.07],[6.59,58.1],[6.55,58.12],[6.69,58.22],[6.66,58.26],[6.39,58.27],[6.05,58.38],[5.71,58.52],[5.52,58.73],[5.56,58.97],[5.61,59.01],[6.1,58.87],[6.36,59],[6.1,58.95],[5.89,59.1],[5.97,59.19],[5.95,59.3],[6.4,59.56],[5.56,59.29],[5.36,59.17],[5.17,59.16],[5.13,59.23],[5.19,59.45],[5.3,59.64],[5.47,59.71],[5.77,59.66],[5.87,59.73],[6.22,59.82],[5.83,59.8],[5.73,59.86],[6.07,60.08],[6.14,60.23],[6.52,60.41],[6.57,60.36],[6.53,60.15],[6.72,60.42],[7,60.51],[6.15,60.35],[5.91,60.15],[5.88,60.07],[5.7,60.01],[5.5,59.83],[5.15,59.64],[5.12,59.83],[5.22,59.98],[5.18,60.05],[5.21,60.09],[5.5,60.07],[5.69,60.12],[5.29,60.21],[5.14,60.44],[5.65,60.69],[5.24,60.57],[5.12,60.64],[5.05,60.71],[5.01,61.04],[5.99,61.12],[6.42,61.08],[6.78,61.14],[6.97,61.06],[7.04,60.95],[7.08,60.97],[7.04,61.09],[7.61,61.21],[7.4,61.22],[7.35,61.3],[7.44,61.43],[7.33,61.37],[7.28,61.18],[7.17,61.17],[6.66,61.21],[6.6,61.29],[6.49,61.15],[6.38,61.13],[6.08,61.17],[5.33,61.11],[5.11,61.19],[5.02,61.25],[5,61.43],[5.34,61.48],[4.93,61.71],[4.93,61.88],[5.47,61.9],[6.02,61.79],[6.73,61.87],[6.13,61.85],[5.27,61.94],[5.1,62.03],[5.14,62.16],[5.36,62.15],[5.54,62.31],[5.91,62.42],[6.08,62.35],[6.58,62.41],[6.69,62.47],[6.14,62.41],[6.12,62.45],[6.35,62.61],[6.96,62.63],[7.49,62.54],[7.69,62.59],[7.53,62.61],[7.54,62.67],[8.09,62.73],[8.04,62.77],[6.73,62.72],[6.94,62.93],[7.57,63.1],[8.1,63.09],[8.21,62.99],[8.62,62.85],[8.16,63.16],[8.27,63.29],[8.63,63.34],[8.6,63.43],[8.39,63.44],[8.36,63.5],[8.67,63.62],[9.14,63.59],[9.08,63.5],[9.16,63.46],[9.32,63.57],[9.7,63.63],[10.02,63.39],[10.19,63.46],[10.76,63.46],[10.67,63.56],[10.73,63.63],[11.37,63.81],[11.18,63.9],[11.43,64.02],[11.31,64.05],[11.08,63.99],[10.91,63.92],[11.05,63.85],[10.94,63.77],[10.06,63.51],[9.92,63.52],[9.77,63.7],[9.6,63.68],[9.61,63.8],[9.87,63.92],[10.01,64.08],[10.24,64.18],[10.56,64.42],[11.53,64.74],[11.63,64.81],[11.56,64.82],[11.3,64.76],[11.35,64.91],[11.49,64.98],[12.16,65.18],[12.31,65.09],[12.51,65.1],[12.74,65.21],[12.92,65.34],[12.42,65.18],[12.13,65.28],[12.12,65.36],[12.27,65.57],[12.63,65.81],[12.69,65.9],[13.03,65.96],[12.79,66.1],[13.67,66.18],[14.03,66.3],[13.12,66.23],[13.07,66.43],[13.11,66.54],[13.19,66.54],[13.21,66.64],[13.62,66.8],[13.96,66.8],[13.65,66.91],[13.88,66.97],[14.11,67.12],[15.42,67.2],[15.44,67.25],[15.3,67.26],[14.44,67.27],[14.75,67.5],[14.96,67.57],[15.41,67.47],[15.59,67.35],[15.58,67.44],[15.69,67.52],[15.49,67.52],[15.25,67.6],[15.22,67.66],[15.35,67.73],[15.31,67.77],[14.86,67.66],[14.78,67.68],[14.8,67.81],[15.13,67.97],[15.4,67.92],[15.62,67.95],[15.6,67.99],[15.36,68],[15.29,68.04],[15.32,68.07],[16.01,68.23],[16.07,68.2],[16.12,68.03],[16.31,67.88],[16.26,68],[16.39,68.09],[16.26,68.14],[16.17,68.28],[16.21,68.32],[16.39,68.39],[16.95,68.35],[17.55,68.43],[17.43,68.48],[16.58,68.47],[16.52,68.53],[16.65,68.63],[17.13,68.69],[17.39,68.8],[17.54,69],[17.7,69.1],[18.1,69.16],[18.08,69.32],[18.26,69.47],[18.48,69.36],[18.86,69.31],[18.92,69.33],[18.62,69.43],[18.61,69.49],[18.99,69.56],[19.04,69.66],[19.2,69.75],[19.69,69.81],[19.72,69.78],[19.64,69.42],[19.96,69.82],[20.32,69.95],[20.39,69.87],[20.34,69.62],[20.04,69.36],[20.11,69.34],[20.49,69.54],[20.74,69.52],[20.53,69.69],[20.55,69.85],[20.62,69.91],[21.16,69.89],[21.25,70],[21.43,70.01],[21.98,69.83],[21.89,70],[21.8,70.07],[21.4,70.18],[21.36,70.23],[21.78,70.23],[22.22,70.31],[22.32,70.27],[22.42,70.34],[22.69,70.37],[22.94,70.31],[23.05,70.1],[23.36,69.98],[23.4,70.02],[23.29,70.11],[23.38,70.25],[23.66,70.4],[24.04,70.49],[24.42,70.7],[24.27,70.77],[24.26,70.83],[24.66,71],[25.26,70.84],[25.44,70.91],[25.77,70.85],[25.78,70.82],[25.27,70.55],[25.15,70.32],[24.99,70.22],[24.98,70.14],[25.04,70.11],[25.21,70.14],[25.42,70.24],[25.47,70.34],[26.51,70.91],[26.66,70.94],[26.74,70.85],[26.56,70.67],[26.65,70.64],[26.58,70.41],[26.99,70.51],[27.18,70.74],[27.31,70.8],[27.55,70.8],[27.24,70.95],[27.6,71.09],[28.39,70.98],[28.38,70.87],[28.33,70.82],[27.9,70.68],[28.27,70.67],[28.2,70.58],[28.19,70.25],[28.61,70.76],[28.83,70.86],[29.1,70.86],[29.74,70.65],[30.07,70.7],[30.24,70.62],[30.21,70.54],[30.59,70.52],[30.93,70.4],[30.94,70.27],[30.26,70.12],[28.78,70.15],[28.81,70.09],[29.6,69.98],[29.65,69.94],[29.64,69.78],[29.79,69.73],[30.09,69.72],[30.24,69.86],[30.35,69.83],[30.43,69.72],[30.48,69.79],[30.87,69.78],[30.92,69.65],[30.9,69.56],[30.62,69.53],[30.16,69.63],[30.19,69.54],[30.09,69.43],[29.39,69.3],[29.17,69.07],[28.96,69.02],[28.83,69.12],[28.85,69.18],[29.33,69.47],[29.14,69.67],[28.41,69.82],[27.89,70.06],[27.75,70.06],[27.13,69.91],[26.53,69.91],[26.07,69.69],[25.77,69.28],[25.75,68.99],[25.58,68.89],[25.25,68.82],[25.09,68.64],[24.94,68.59],[24,68.8],[23.86,68.81],[23.71,68.71],[23.32,68.65],[22.41,68.72],[22.3,68.86],[21.59,69.27],[21.27,69.27],[21.07,69.21],[21.13,69.08],[21.07,69.04],[20.62,69.04]]]},{id:"578",name:"Norway",rings:[[[4.96,61.09],[4.8,61.08],[4.83,61.18],[4.92,61.2],[4.97,61.15],[4.96,61.09]]]},{id:"578",name:"Norway",rings:[[[5.09,60.31],[5.09,60.19],[4.96,60.24],[4.96,60.45],[5.09,60.31]]]},{id:"578",name:"Norway",rings:[[[29.96,69.8],[29.75,69.79],[29.84,69.91],[30.05,69.84],[29.96,69.8]]]},{id:"578",name:"Norway",rings:[[[11.97,65.63],[11.77,65.63],[11.87,65.71],[12,65.68],[11.97,65.63]]]},{id:"578",name:"Norway",rings:[[[8.47,63.67],[8.29,63.69],[8.73,63.8],[8.81,63.77],[8.79,63.7],[8.47,63.67]]]},{id:"578",name:"Norway",rings:[[[8.1,63.34],[7.89,63.35],[7.8,63.41],[8.07,63.47],[8.14,63.43],[8.1,63.34]]]},{id:"578",name:"Norway",rings:[[[23.44,70.82],[23.07,70.59],[22.83,70.54],[22.36,70.52],[21.99,70.66],[22.96,70.71],[23.2,70.82],[23.44,70.82]]]},{id:"578",name:"Norway",rings:[[[25.59,71.14],[26.15,71.04],[26.13,71],[26,70.98],[25.58,70.96],[25.31,71.05],[25.59,71.14]]]},{id:"578",name:"Norway",rings:[[[23.61,70.55],[23.64,70.46],[23.27,70.3],[23.1,70.3],[23.09,70.38],[22.92,70.39],[23.02,70.49],[23.25,70.5],[23.55,70.62],[23.61,70.55]]]},{id:"578",name:"Norway",rings:[[[24.02,70.57],[23.83,70.53],[23.67,70.6],[23.66,70.68],[23.78,70.75],[23.96,70.7],[24.08,70.65],[24.02,70.57]]]},{id:"578",name:"Norway",rings:[[[13.87,68.27],[14.12,68.25],[14.03,68.19],[13.49,68.05],[13.42,68.08],[13.39,68.02],[13.23,67.99],[13.2,68.09],[13.3,68.16],[13.43,68.16],[13.54,68.25],[13.87,68.27]]]},{id:"578",name:"Norway",rings:[[[12.97,67.87],[12.83,67.82],[12.96,68.02],[13.12,68.05],[13.1,67.96],[12.97,67.87]]]},{id:"578",name:"Norway",rings:[[[15.21,68.94],[15.4,68.78],[15.35,68.67],[15.22,68.62],[14.89,68.61],[14.74,68.68],[14.52,68.63],[14.37,68.71],[14.55,68.82],[14.8,68.79],[14.87,68.91],[15.04,68.89],[15.04,69],[15.21,68.94]]]},{id:"578",name:"Norway",rings:[[[19.77,70.22],[20.09,70.1],[19.78,70.08],[19.6,70.27],[19.77,70.22]]]},{id:"578",name:"Norway",rings:[[[20.78,70.09],[20.46,70.08],[20.41,70.15],[20.78,70.22],[20.82,70.2],[20.78,70.09]]]},{id:"578",name:"Norway",rings:[[[19.25,70.07],[19.34,70.01],[19.61,70.02],[19.59,69.97],[19.33,69.82],[19.01,69.76],[18.78,69.58],[18.28,69.54],[18.06,69.6],[18.23,69.64],[18.35,69.77],[18.68,69.78],[18.69,69.89],[18.88,70.01],[19.05,70.04],[19.06,70.17],[19.13,70.24],[19.21,70.25],[19.25,70.07]]]},{id:"578",name:"Norway",rings:[[[12.51,65.9],[12.43,65.9],[12.43,65.94],[12.55,66],[12.78,65.99],[12.51,65.9]]]},{id:"578",name:"Norway",rings:[[[12.42,66.04],[12.33,66.04],[12.46,66.19],[12.62,66.18],[12.58,66.07],[12.42,66.04]]]},{id:"578",name:"Norway",rings:[[[11.23,64.87],[10.74,64.87],[11.02,64.98],[11.13,64.98],[11.24,64.91],[11.23,64.87]]]},{id:"578",name:"Norway",rings:[[[17.5,69.6],[18.01,69.5],[18.08,69.4],[17.94,69.33],[17.95,69.2],[17.57,69.16],[17.49,69.2],[17.08,69.01],[16.81,69.07],[16.97,69.14],[17,69.36],[17.36,69.38],[17.37,69.44],[17.23,69.48],[17.45,69.53],[17.5,69.6]]]},{id:"578",name:"Norway",rings:[[[15.76,68.56],[16.06,68.68],[16.15,68.84],[16.33,68.88],[16.48,68.8],[16.55,68.72],[16.52,68.63],[16.19,68.54],[15.98,68.4],[15.76,68.41],[15.44,68.31],[15.28,68.37],[15.19,68.31],[14.93,68.31],[14.63,68.2],[14.26,68.19],[14.26,68.26],[14.59,68.4],[15.1,68.44],[15.41,68.62],[15.56,68.87],[15.44,68.92],[15.48,69.04],[15.96,69.3],[16.13,69.27],[16.12,69.22],[15.81,69.02],[15.91,68.91],[15.93,68.73],[15.76,68.56]]]},{id:"578",name:"Norway",rings:[[[-8.96,70.84],[-9.1,70.86],[-8.52,71.03],[-8.34,71.14],[-8,71.18],[-7.98,71.12],[-8,71.04],[-8.96,70.84]]]},{id:"528",name:"Netherlands",rings:[[[5.99,50.75],[5.75,50.76],[5.64,50.84],[5.75,50.95],[5.82,51.09],[5.8,51.15],[5.48,51.29],[5.21,51.28],[5.1,51.35],[5.03,51.47],[4.85,51.4],[4.76,51.49],[4.64,51.42],[4.5,51.47],[4.38,51.43],[4.37,51.36],[4.01,51.44],[3.82,51.41],[3.59,51.45],[3.45,51.54],[3.74,51.6],[4.14,51.46],[4.28,51.47],[4.01,51.6],[4.18,51.61],[3.95,51.81],[4.08,51.99],[4.48,52.31],[4.77,52.94],[4.89,52.91],[5.06,52.96],[5.36,53.1],[5.53,53.27],[5.87,53.38],[6.82,53.44],[6.97,53.33],[7.2,53.28],[7.19,53],[7.03,52.65],[6.75,52.63],[6.69,52.53],[6.75,52.46],[7,52.42],[7.02,52.27],[6.72,52.08],[6.8,51.98],[6.74,51.91],[6.36,51.82],[6.17,51.88],[5.95,51.8],[6.2,51.45],[6.08,51.22],[6.13,51.15],[5.86,51.03],[6.05,50.91],[5.99,50.75]]]},{id:"528",name:"Netherlands",rings:[[[4.22,51.39],[4.17,51.31],[3.9,51.21],[3.58,51.29],[3.43,51.25],[3.35,51.38],[4.22,51.39]]]},{id:"528",name:"Netherlands",rings:[[[4.89,53.07],[4.79,53],[4.71,53.04],[4.89,53.18],[4.89,53.07]]]},{id:"528",name:"Netherlands",rings:[[[3.95,51.74],[4.07,51.65],[3.95,51.63],[3.7,51.71],[3.95,51.74]]]},{id:"528",name:"Netherlands",rings:[[[6.73,53.58],[6.64,53.58],[6.76,53.63],[6.8,53.63],[6.73,53.58]]]},{id:"504",name:"Morocco",rings:[[[-2.22,35.1],[-2.13,34.97],[-1.79,34.75],[-1.85,34.61],[-1.73,34.47],[-1.79,34.37],[-1.71,34.18],[-1.72,33.78],[-1.63,33.57],[-1.68,33.32],[-1.45,32.79],[-1.06,32.47],[-1.24,32.34],[-1.23,32.11],[-2.45,32.13],[-2.86,32.08],[-2.93,32.04],[-3.02,31.83],[-3.44,31.71],[-3.77,31.69],[-3.85,31.62],[-3.79,31.36],[-3.83,31.2],[-3.62,31.07],[-3.67,30.96],[-3.99,30.91],[-4.32,30.7],[-4.97,30.47],[-5.18,30.17],[-5.45,29.96],[-6,29.83],[-6.48,29.82],[-6.52,29.66],[-6.64,29.57],[-7.16,29.61],[-7.49,29.39],[-7.68,29.35],[-8.66,28.72],[-8.69,27.66],[-8.82,27.66],[-8.75,27.19],[-8.79,27.12],[-9.41,27.09],[-9.82,26.85],[-10.03,26.91],[-10.25,26.86],[-10.76,27.02],[-11.39,26.88],[-11.32,26.75],[-11.34,26.63],[-11.64,26.3],[-11.72,26.1],[-12.05,26],[-14.51,26],[-14.41,26.25],[-13.58,26.74],[-13.18,27.65],[-12.95,27.91],[-11.99,28.13],[-11.55,28.31],[-11.08,28.71],[-10.49,29.06],[-10.2,29.38],[-9.67,30.11],[-9.65,30.45],[-9.88,30.72],[-9.81,31.42],[-9.68,31.71],[-9.35,32.09],[-9.25,32.57],[-8.51,33.25],[-6.9,33.97],[-6.35,34.78],[-5.92,35.79],[-5.62,35.83],[-5.4,35.93],[-5.28,35.9],[-5.34,35.86],[-5.34,35.74],[-5.25,35.61],[-4.84,35.28],[-4.63,35.21],[-4.33,35.16],[-3.69,35.28],[-3.39,35.21],[-3.21,35.24],[-2.97,35.41],[-2.84,35.13],[-2.22,35.1]]]},{id:"499",name:"Montenegro",rings:[[[19.19,43.53],[19.22,43.45],[19.61,43.17],[19.94,43.08],[20.35,42.85],[20.19,42.75],[20.05,42.76],[20.06,42.55],[19.79,42.48],[19.73,42.64],[19.65,42.63],[19.28,42.17],[19.36,42.07],[19.34,41.87],[19.19,41.95],[18.89,42.25],[18.63,42.38],[18.65,42.44],[18.52,42.43],[18.44,42.52],[18.55,42.64],[18.47,42.78],[18.46,43],[18.62,43.03],[18.68,43.23],[18.85,43.35],[19.03,43.29],[18.95,43.53],[19.19,43.53]]]},{id:"498",name:"Moldova",rings:[[[26.62,48.26],[26.85,48.39],[27.23,48.37],[27.55,48.48],[27.82,48.42],[28.09,48.26],[28.29,48.24],[28.35,48.21],[28.34,48.15],[28.46,48.09],[28.53,48.15],[28.77,48.12],[28.92,47.95],[29.13,47.96],[29.21,47.78],[29.13,47.49],[29.54,47.27],[29.51,47.09],[29.57,46.96],[29.88,46.83],[29.94,46.72],[29.93,46.54],[30.13,46.42],[29.84,46.35],[29.71,46.45],[29.62,46.4],[29.31,46.47],[29.21,46.38],[29.19,46.52],[28.96,46.46],[28.94,46.29],[29.01,46.18],[28.95,46.05],[28.74,45.94],[28.73,45.85],[28.49,45.67],[28.5,45.52],[28.21,45.45],[28.07,45.6],[28.16,45.65],[28.1,45.97],[28.24,46.45],[28.24,46.64],[28.07,46.98],[27.61,47.34],[26.98,48.16],[26.79,48.26],[26.62,48.26]]]},{id:"470",name:"Malta",rings:[[[14.57,35.85],[14.44,35.82],[14.35,35.87],[14.35,35.98],[14.57,35.85]]]},{id:"470",name:"Malta",rings:[[[14.31,36.03],[14.18,36.06],[14.26,36.08],[14.31,36.03]]]},{id:"807",name:"Macedonia",rings:[[[21.56,42.25],[22.28,42.35],[22.58,42.11],[22.8,42.03],[23,41.74],[22.93,41.36],[22.78,41.33],[22.73,41.18],[22.6,41.14],[21.99,41.13],[21.78,40.95],[21.58,40.87],[21.4,40.91],[20.96,40.85],[20.87,40.92],[20.74,40.91],[20.49,41.27],[20.45,41.52],[20.51,41.57],[20.55,41.86],[20.72,41.87],[20.78,42.07],[21.06,42.17],[21.29,42.1],[21.39,42.22],[21.56,42.25]]]},{id:"442",name:"Luxembourg",rings:[[[6.12,50.12],[6.11,50.03],[6.2,49.92],[6.49,49.8],[6.35,49.45],[6.18,49.5],[6.01,49.45],[5.79,49.54],[5.88,49.65],[5.73,49.81],[5.74,49.92],[5.98,50.17],[6.12,50.12]]]},{id:"440",name:"Lithuania",rings:[[[20.96,55.28],[20.9,55.29],[21.12,55.62],[21.11,55.49],[20.96,55.28]]]},{id:"440",name:"Lithuania",rings:[[[22.76,54.36],[22.69,54.56],[22.83,54.87],[22.63,54.97],[22.57,55.06],[22.07,55.06],[21.39,55.27],[21.23,55.26],[21.24,55.46],[21.06,55.81],[21.05,56.07],[21.65,56.31],[22.08,56.41],[22.88,56.4],[23.04,56.32],[23.2,56.37],[24.12,56.26],[24.47,56.28],[24.7,56.38],[24.9,56.4],[25.07,56.2],[25.66,56.1],[26.28,55.75],[26.6,55.67],[26.46,55.34],[26.78,55.27],[26.6,55.13],[26.29,55.14],[26.17,55],[25.86,54.92],[25.72,54.72],[25.72,54.56],[25.55,54.33],[25.75,54.26],[25.76,54.18],[25.68,54.14],[25.51,54.16],[25.46,54.29],[25.05,54.13],[24.87,54.14],[24.77,53.97],[24.32,53.89],[24.19,53.95],[23.56,53.92],[23.48,53.94],[23.48,54.08],[23.37,54.2],[22.89,54.39],[22.76,54.36]]]},{id:"438",name:"Liechtenstein",rings:[[[9.58,47.06],[9.49,47.06],[9.53,47.27],[9.61,47.11],[9.58,47.06]]]},{id:"434",name:"Libya",rings:[[[9.52,30.23],[9.89,30.39],[10.22,30.78],[10.26,30.94],[10.11,31.46],[10.28,31.68],[10.47,31.74],[10.61,31.93],[10.83,32.08],[11.5,32.41],[11.53,32.52],[11.45,32.64],[11.5,33.18],[11.81,33.09],[12.28,32.86],[12.75,32.8],[13.28,32.92],[14.16,32.71],[14.51,32.51],[15.18,32.39],[15.36,32.16],[15.36,31.97],[15.5,31.66],[15.71,31.43],[16.12,31.26],[16.78,31.21],[17.83,30.93],[18.19,30.78],[18.67,30.42],[18.94,30.29],[19.13,30.27],[19.29,30.29],[19.71,30.49],[20.11,30.96],[20.14,31.19],[19.96,31.56],[19.93,31.82],[20.03,32.11],[20.37,32.43],[21.06,32.78],[21.43,32.8],[21.63,32.94],[22.34,32.88],[23.09,32.62],[23.11,32.33],[23.29,32.21],[23.8,32.16],[24.13,32.01],[24.88,31.98],[25.03,31.88],[25.15,31.65],[24.85,31.34],[24.98,30.78],[24.88,30.46],[24.7,30.2],[24.98,29.18],[24.98,26],[9.5,26],[9.42,26.15],[9.49,26.33],[9.86,26.55],[9.88,26.63],[9.89,26.85],[9.79,27.04],[9.75,27.33],[9.92,27.79],[9.82,28.56],[9.84,28.97],[9.8,29.18],[9.64,29.64],[9.31,30.12],[9.52,30.23]]]},{id:"422",name:"Lebanon",rings:[[[35.98,34.63],[36.38,34.66],[36.43,34.61],[36.33,34.5],[36.51,34.43],[36.59,34.22],[36.3,33.96],[36.28,33.89],[36.37,33.84],[36.09,33.83],[36.02,33.78],[35.94,33.67],[36.02,33.56],[35.6,33.24],[35.53,33.25],[35.49,33.12],[35.41,33.07],[35.11,33.08],[35.61,34.03],[35.65,34.25],[35.8,34.44],[35.98,34.55],[35.98,34.63]]]},{id:"428",name:"Latvia",rings:[[[26.6,55.67],[26.28,55.75],[25.66,56.1],[25.07,56.2],[24.84,56.41],[24.47,56.28],[24.12,56.26],[23.2,56.37],[23.04,56.32],[22.88,56.4],[22.08,56.41],[21.65,56.31],[21.05,56.07],[21.03,56.64],[21.07,56.82],[21.35,57.02],[21.46,57.32],[21.73,57.57],[22.56,57.72],[22.65,57.6],[23.14,57.32],[23.29,57.09],[23.65,56.97],[23.93,57.01],[24.38,57.25],[24.32,57.87],[25.11,58.06],[25.26,58],[25.28,58.05],[25.99,57.84],[26.3,57.6],[26.46,57.54],[26.97,57.61],[27.47,57.52],[27.54,57.43],[27.83,57.29],[27.83,57.19],[27.64,56.85],[27.85,56.85],[28.01,56.6],[28.1,56.55],[28.2,56.26],[28.15,56.14],[27.89,56.08],[27.64,55.91],[27.58,55.8],[27.05,55.83],[26.82,55.71],[26.6,55.67]]]},{name:"Kosovo",rings:[[[20.35,42.83],[20.47,42.86],[20.48,42.95],[20.62,43.03],[20.66,43.1],[20.62,43.2],[20.8,43.26],[20.85,43.17],[21.06,43.09],[21.4,42.83],[21.39,42.75],[21.75,42.65],[21.61,42.39],[21.52,42.33],[21.56,42.25],[21.39,42.22],[21.29,42.1],[21.06,42.17],[20.78,42.07],[20.72,41.87],[20.58,41.87],[20.49,42.22],[20.24,42.34],[20.06,42.55],[20.05,42.76],[20.19,42.75],[20.35,42.83]]]},{id:"400",name:"Jordan",rings:[[[35.79,32.73],[35.89,32.71],[36.06,32.53],[36.37,32.39],[36.82,32.32],[38.77,33.37],[39.06,32.49],[38.98,32.47],[39.04,32.31],[39.25,32.35],[39.29,32.24],[38.96,32],[36.96,31.49],[37.98,30.5],[37.63,30.31],[37.47,30],[36.75,29.87],[36.48,29.5],[36.02,29.19],[34.95,29.35],[35.14,30.14],[35.14,30.42],[35.44,31.13],[35.4,31.23],[35.56,31.77],[35.57,32.64],[35.79,32.73]]]},{id:"380",name:"Italy",rings:[[[7.02,45.93],[7.13,45.88],[7.54,45.98],[7.79,45.92],[7.99,46.02],[8.12,46.16],[8.09,46.27],[8.42,46.45],[8.46,46.25],[8.64,46.11],[8.82,46.08],[8.78,46],[8.96,45.83],[9.05,45.88],[9,46.02],[9.25,46.29],[9.26,46.48],[9.3,46.5],[9.43,46.48],[9.53,46.31],[9.94,46.36],[10.08,46.23],[10.15,46.25],[10.04,46.48],[10.09,46.6],[10.2,46.62],[10.43,46.55],[10.4,46.66],[10.45,46.87],[10.99,46.78],[11.13,46.94],[11.24,46.98],[11.77,46.99],[12.17,47.08],[12.16,46.94],[12.39,46.7],[13.7,46.52],[13.38,46.26],[13.63,46.18],[13.49,45.99],[13.6,45.98],[13.58,45.81],[13.72,45.76],[13.88,45.61],[13.72,45.59],[13.78,45.63],[13.63,45.77],[13.47,45.71],[13.21,45.77],[13.03,45.64],[12.5,45.46],[12.43,45.47],[12.54,45.54],[12.49,45.55],[12.27,45.45],[12.22,45.24],[12.52,44.97],[12.39,44.8],[12.28,44.83],[12.25,44.72],[12.4,44.22],[12.69,43.99],[13.56,43.57],[13.8,43.18],[14.01,42.69],[14.54,42.24],[15.17,41.93],[15.96,41.94],[16.17,41.9],[16.15,41.76],[15.91,41.62],[15.9,41.51],[17.1,41.06],[17.47,40.84],[17.96,40.65],[18.46,40.22],[18.48,40.1],[18.39,39.9],[18.34,39.82],[18.08,39.94],[17.87,40.28],[17.48,40.31],[17.26,40.4],[17.18,40.5],[17.03,40.51],[16.93,40.46],[16.67,40.14],[16.52,39.75],[16.6,39.64],[16.82,39.58],[17.11,39.38],[17.17,39],[17.1,38.92],[16.95,38.94],[16.62,38.8],[16.56,38.72],[16.54,38.41],[16.28,38.25],[16.06,37.94],[15.72,37.94],[15.65,38.03],[15.64,38.18],[15.7,38.26],[15.82,38.3],[15.93,38.67],[16.2,38.76],[16.21,38.94],[16.11,39.02],[16.02,39.35],[15.69,39.99],[15.59,40.05],[15.29,40.07],[14.95,40.24],[14.93,40.31],[14.99,40.38],[14.95,40.47],[14.77,40.67],[14.34,40.6],[14.46,40.73],[14.31,40.81],[14.05,40.81],[13.86,41.13],[13.73,41.24],[13.04,41.27],[12.85,41.41],[12.63,41.47],[12.08,41.94],[11.81,42.08],[11.64,42.29],[11.3,42.42],[11.14,42.39],[11.1,42.42],[11.18,42.46],[11.17,42.53],[10.8,42.8],[10.71,42.94],[10.51,42.97],[10.52,43.2],[10.32,43.51],[10.25,43.85],[10.05,44.02],[9.73,44.1],[9.29,44.32],[8.76,44.42],[8.55,44.35],[8,43.88],[7.49,43.77],[7.48,43.86],[7.68,44.08],[7.64,44.16],[7.32,44.14],[6.9,44.34],[6.84,44.51],[7.03,44.72],[6.99,44.83],[6.74,44.92],[6.63,45.07],[6.69,45.14],[6.84,45.13],[7.08,45.24],[7.15,45.38],[6.79,45.74],[6.81,45.81],[7.02,45.93]],[[12.49,43.9],[12.5,43.99],[12.4,43.94],[12.49,43.9]]]},{id:"380",name:"Italy",rings:[[[10.4,42.86],[10.42,42.71],[10.33,42.76],[10.13,42.74],[10.11,42.78],[10.4,42.86]]]},{id:"380",name:"Italy",rings:[[[13.94,40.71],[13.87,40.71],[13.87,40.76],[13.96,40.74],[13.94,40.71]]]},{id:"380",name:"Italy",rings:[[[12.05,36.76],[11.94,36.78],[11.95,36.84],[12.05,36.76]]]},{id:"380",name:"Italy",rings:[[[15.58,38.22],[15.23,37.78],[15.1,37.46],[15.12,37.34],[15.23,37.24],[15.17,37.21],[15.29,37.06],[15.11,36.84],[15.11,36.69],[14.78,36.71],[14.5,36.8],[14.37,36.97],[14.14,37.1],[13.91,37.1],[13.17,37.48],[12.92,37.57],[12.64,37.59],[12.44,37.82],[12.55,38.05],[12.74,38.18],[12.9,38.03],[13.16,38.19],[13.35,38.18],[13.38,38.13],[13.79,37.98],[14.05,38.04],[14.51,38.05],[14.79,38.17],[15.12,38.15],[15.5,38.29],[15.63,38.27],[15.58,38.22]]]},{id:"380",name:"Italy",rings:[[[9.63,40.88],[9.8,40.5],[9.64,40.27],[9.71,40.02],[9.56,39.17],[9.49,39.14],[9.06,39.24],[8.97,38.96],[8.88,38.91],[8.65,38.93],[8.42,39.21],[8.4,39.48],[8.45,39.72],[8.54,39.73],[8.55,39.84],[8.41,39.92],[8.47,40.29],[8.35,40.5],[8.19,40.65],[8.2,40.87],[8.22,40.91],[8.47,40.83],[8.7,40.9],[9.23,41.26],[9.61,41.02],[9.55,40.93],[9.63,40.88]]]},{id:"380",name:"Italy",rings:[[[8.48,39.07],[8.42,38.97],[8.36,39.1],[8.48,39.07]]]},{id:"380",name:"Italy",rings:[[[8.29,41.04],[8.21,41],[8.27,41.1],[8.34,41.1],[8.29,41.04]]]},{id:"376",name:"Israel",rings:[[[35.87,33.43],[35.84,33.28],[35.91,32.95],[35.79,32.73],[35.57,32.64],[35.55,32.4],[35.19,32.54],[35.07,32.46],[34.95,32.16],[34.96,31.82],[35.13,31.82],[35.2,31.75],[34.95,31.6],[34.88,31.37],[35.1,31.37],[35.45,31.48],[35.4,31.23],[35.44,31.13],[35.17,30.52],[35.14,30.14],[34.97,29.55],[34.9,29.48],[34.25,31.21],[34.53,31.53],[34.48,31.59],[34.68,31.9],[35.11,33.08],[35.41,33.07],[35.49,33.12],[35.53,33.25],[35.6,33.24],[35.87,33.43]]]},{id:"372",name:"Ireland",rings:[[[-9.95,53.91],[-10.27,53.98],[-10,54],[-9.95,53.91]]]},{id:"372",name:"Ireland",rings:[[[-7.22,55.09],[-7.38,55.03],[-7.55,54.77],[-7.91,54.7],[-7.75,54.59],[-8.15,54.45],[-7.85,54.22],[-7.61,54.14],[-7.32,54.13],[-7.16,54.24],[-7.2,54.3],[-7.01,54.41],[-6.8,54.21],[-6.65,54.16],[-6.65,54.06],[-6.3,54.09],[-6.18,54.05],[-6.16,54.02],[-6.31,54.01],[-6.35,53.94],[-6.14,53.58],[-6.15,53.37],[-6.03,52.93],[-6.17,52.74],[-6.22,52.54],[-6.46,52.34],[-6.32,52.25],[-6.89,52.16],[-6.96,52.25],[-7,52.17],[-7.53,52.1],[-7.63,51.99],[-7.84,51.95],[-8.06,51.83],[-8.41,51.89],[-8.34,51.79],[-8.41,51.71],[-9.3,51.5],[-9.46,51.53],[-9.84,51.48],[-9.52,51.68],[-10.12,51.6],[-9.6,51.87],[-10.09,51.77],[-10.34,51.8],[-10.38,51.87],[-9.91,52.12],[-10.39,52.13],[-10.36,52.21],[-10.13,52.28],[-9.77,52.25],[-9.91,52.4],[-9.63,52.55],[-8.78,52.68],[-8.99,52.76],[-9.17,52.63],[-9.56,52.65],[-9.92,52.57],[-9.52,52.78],[-9.39,52.9],[-9.46,52.95],[-9.3,53.1],[-8.93,53.21],[-9.51,53.24],[-9.62,53.33],[-9.88,53.34],[-9.79,53.39],[-10.09,53.41],[-10.05,53.48],[-10.12,53.55],[-9.72,53.6],[-9.91,53.66],[-9.9,53.73],[-9.58,53.8],[-9.58,53.88],[-9.91,53.86],[-9.86,54.09],[-9.93,54.08],[-9.98,54.19],[-10.09,54.16],[-10.06,54.26],[-9.56,54.31],[-9.32,54.3],[-9.15,54.21],[-9,54.29],[-8.54,54.24],[-8.62,54.35],[-8.23,54.51],[-8.13,54.64],[-8.46,54.61],[-8.76,54.68],[-8.38,54.89],[-8.39,55.02],[-8.27,55.15],[-7.75,55.19],[-7.76,55.25],[-7.67,55.26],[-7.56,55.12],[-7.66,54.97],[-7.48,55.05],[-7.52,55.25],[-7.3,55.3],[-7.37,55.36],[-7.31,55.37],[-6.96,55.24],[-7.22,55.09]]]},{id:"368",name:"Iraq",rings:[[[42.36,37.11],[42.46,37.13],[42.77,37.37],[42.94,37.32],[43.09,37.37],[43.68,37.23],[44.11,37.3],[44.19,37.25],[44.2,37.05],[44.28,36.98],[44.61,37.18],[44.73,37.16],[44.88,36.8],[45.02,36.7],[45.05,36.47],[45.24,36.36],[45.36,36.02],[45.56,35.98],[45.78,35.82],[46.17,35.82],[46.27,35.77],[46,35.61],[45.97,35.48],[46.11,35.32],[46.13,35.13],[45.92,35.03],[45.68,34.8],[45.64,34.57],[45.5,34.58],[45.44,34.42],[45.54,34.22],[45.4,33.97],[45.74,33.6],[45.88,33.61],[45.87,33.49],[46.02,33.42],[46.15,33.23],[46.08,33.09],[46.11,32.96],[46.38,32.93],[47.12,32.47],[47.37,32.42],[47.51,32.15],[47.83,31.79],[47.68,31.4],[47.68,31],[48.01,30.99],[48.02,30.47],[48.33,30.29],[48.43,30.04],[48.54,29.96],[48.45,29.94],[48.07,30.04],[47.98,29.98],[47.67,30.1],[47.22,30.04],[47.1,29.94],[46.77,29.35],[46.53,29.1],[46.36,29.06],[44.72,29.19],[42.08,31.08],[40.37,31.94],[39.14,32.13],[39.29,32.24],[39.25,32.35],[39.04,32.31],[38.98,32.47],[39.06,32.49],[38.77,33.37],[40.69,34.33],[40.99,34.43],[41.19,34.77],[41.22,35.29],[41.36,35.64],[41.35,35.81],[41.24,36.07],[41.29,36.38],[41.42,36.51],[41.79,36.6],[42.36,37.11]]]},{id:"348",name:"Hungary",rings:[[[22.13,48.41],[22.25,48.41],[22.35,48.26],[22.58,48.13],[22.77,48.11],[22.88,47.95],[22.61,47.77],[22.29,47.73],[22,47.5],[21.99,47.4],[21.66,47.04],[21.48,46.75],[21.5,46.7],[21.3,46.57],[21.26,46.41],[21.04,46.24],[20.76,46.25],[20.66,46.15],[20.24,46.11],[19.61,46.17],[19.21,45.98],[19.09,46.02],[18.93,45.93],[18.66,45.91],[18.44,45.77],[17.81,45.79],[17.61,45.91],[17.31,46],[16.87,46.34],[16.52,46.5],[16.38,46.64],[16.28,46.86],[16.09,46.86],[16.25,46.97],[16.45,47.01],[16.49,47.12],[16.42,47.22],[16.46,47.27],[16.44,47.4],[16.62,47.45],[16.68,47.54],[16.64,47.61],[16.42,47.67],[16.59,47.75],[16.79,47.68],[17.07,47.71],[17.03,47.84],[17.15,48.01],[17.32,47.99],[17.76,47.77],[18.73,47.79],[18.79,48],[19.47,48.11],[19.63,48.22],[19.9,48.13],[20.33,48.3],[20.49,48.53],[21.07,48.51],[21.45,48.55],[21.72,48.35],[22.13,48.41]]]},{id:"300",name:"Greece",rings:[[[27.86,36.55],[27.79,36.61],[27.86,36.64],[27.86,36.55]]]},{id:"300",name:"Greece",rings:[[[20.61,38.38],[20.63,38.27],[20.79,38.14],[20.76,38.07],[20.52,38.11],[20.45,38.23],[20.35,38.18],[20.41,38.34],[20.52,38.33],[20.56,38.48],[20.61,38.38]]]},{id:"300",name:"Greece",rings:[[[20.89,37.81],[20.99,37.71],[20.91,37.73],[20.82,37.66],[20.62,37.85],[20.69,37.93],[20.89,37.81]]]},{id:"300",name:"Greece",rings:[[[20.69,38.61],[20.55,38.58],[20.59,38.76],[20.69,38.84],[20.69,38.61]]]},{id:"300",name:"Greece",rings:[[[20.76,38.33],[20.71,38.32],[20.62,38.48],[20.7,38.45],[20.76,38.33]]]},{id:"300",name:"Greece",rings:[[[20.08,39.43],[20.1,39.38],[19.88,39.46],[19.65,39.77],[19.84,39.82],[19.92,39.77],[19.85,39.67],[19.96,39.47],[20.08,39.43]]]},{id:"300",name:"Greece",rings:[[[23.42,38.96],[23.52,38.81],[24.13,38.65],[24.28,38.22],[24.36,38.16],[24.56,38.15],[24.58,38.02],[24.5,37.97],[24.36,38.02],[24.21,38.12],[24.04,38.39],[23.65,38.44],[23.62,38.55],[23.25,38.8],[23.03,38.87],[22.88,38.85],[23.26,39.03],[23.42,38.96]]]},{id:"300",name:"Greece",rings:[[[23.78,39.11],[23.66,39.1],[23.59,39.21],[23.78,39.11]]]},{id:"300",name:"Greece",rings:[[[23.89,39.16],[23.84,39.15],[23.89,39.23],[23.97,39.27],[23.89,39.16]]]},{id:"300",name:"Greece",rings:[[[24.68,38.81],[24.54,38.79],[24.56,38.83],[24.46,38.89],[24.49,38.98],[24.68,38.81]]]},{id:"300",name:"Greece",rings:[[[24.77,40.61],[24.65,40.58],[24.52,40.69],[24.62,40.79],[24.72,40.79],[24.79,40.7],[24.77,40.61]]]},{id:"300",name:"Greece",rings:[[[23.55,37.93],[23.42,37.93],[23.48,37.99],[23.55,37.93]]]},{id:"300",name:"Greece",rings:[[[23.05,36.19],[23.04,36.15],[22.91,36.22],[22.95,36.38],[23.1,36.25],[23.05,36.19]]]},{id:"300",name:"Greece",rings:[[[27.17,35.47],[27.14,35.41],[27.1,35.46],[27.07,35.6],[27.16,35.79],[27.22,35.82],[27.16,35.63],[27.23,35.48],[27.17,35.47]]]},{id:"300",name:"Greece",rings:[[[27.02,36.96],[26.92,36.94],[26.89,37.09],[27.04,37],[27.02,36.96]]]},{id:"300",name:"Greece",rings:[[[26.95,36.73],[26.96,36.77],[27.21,36.9],[27.35,36.87],[26.95,36.73]]]},{id:"300",name:"Greece",rings:[[[25.55,36.97],[25.46,36.93],[25.36,37.07],[25.53,37.2],[25.59,37.15],[25.55,36.97]]]},{id:"300",name:"Greece",rings:[[[25.28,37.07],[25.2,36.99],[25.1,37.03],[25.23,37.15],[25.28,37.07]]]},{id:"300",name:"Greece",rings:[[[25.48,36.39],[25.44,36.34],[25.37,36.36],[25.41,36.47],[25.48,36.39]]]},{id:"300",name:"Greece",rings:[[[25.38,36.67],[25.26,36.76],[25.3,36.79],[25.41,36.72],[25.38,36.67]]]},{id:"300",name:"Greece",rings:[[[26.83,37.81],[27.04,37.77],[27.06,37.71],[26.84,37.64],[26.58,37.72],[26.83,37.81]]]},{id:"300",name:"Greece",rings:[[[26.03,37.53],[25.98,37.53],[26,37.57],[26.09,37.64],[26.35,37.67],[26.21,37.57],[26.03,37.53]]]},{id:"300",name:"Greece",rings:[[[25.86,36.79],[25.74,36.79],[26,36.94],[26.07,36.9],[25.86,36.79]]]},{id:"300",name:"Greece",rings:[[[26.46,36.59],[26.33,36.51],[26.27,36.55],[26.27,36.6],[26.34,36.58],[26.37,36.64],[26.46,36.59]]]},{id:"300",name:"Greece",rings:[[[24.36,37.58],[24.29,37.53],[24.28,37.6],[24.38,37.68],[24.36,37.58]]]},{id:"300",name:"Greece",rings:[[[24.44,37.34],[24.38,37.31],[24.37,37.42],[24.43,37.48],[24.48,37.41],[24.44,37.34]]]},{id:"300",name:"Greece",rings:[[[24.54,36.76],[24.53,36.68],[24.33,36.66],[24.36,36.74],[24.42,36.71],[24.54,36.76]]]},{id:"300",name:"Greece",rings:[[[24.99,37.76],[24.96,37.69],[24.7,37.96],[24.79,37.99],[24.86,37.91],[24.96,37.9],[24.99,37.76]]]},{id:"300",name:"Greece",rings:[[[25.26,37.6],[25.22,37.53],[25.16,37.55],[25,37.68],[25.26,37.6]]]},{id:"300",name:"Greece",rings:[[[24.72,36.92],[24.68,37.02],[24.76,36.95],[24.72,36.92]]]},{id:"300",name:"Greece",rings:[[[26.09,38.22],[26,38.16],[25.89,38.24],[25.99,38.35],[25.85,38.57],[26.01,38.6],[26.16,38.54],[26.16,38.3],[26.09,38.22]]]},{id:"300",name:"Greece",rings:[[[26.41,39.33],[26.39,39.27],[26.6,39.05],[26.49,39.07],[26.55,38.99],[26.47,38.97],[26.16,39.03],[26.11,39.08],[26.27,39.2],[26.18,39.19],[26.07,39.1],[25.84,39.2],[25.91,39.29],[26.09,39.3],[26.17,39.37],[26.35,39.38],[26.41,39.33]]]},{id:"300",name:"Greece",rings:[[[25.68,40.43],[25.57,40.4],[25.45,40.48],[25.57,40.52],[25.68,40.43]]]},{id:"300",name:"Greece",rings:[[[25.44,39.98],[25.36,39.81],[25.26,39.82],[25.25,39.89],[25.18,39.83],[25.06,39.85],[25.06,40],[25.23,40.01],[25.28,39.96],[25.45,40.03],[25.44,39.98]]]},{id:"300",name:"Greece",rings:[[[25.4,37.42],[25.31,37.41],[25.31,37.49],[25.46,37.47],[25.4,37.42]]]},{id:"300",name:"Greece",rings:[[[24.53,37.13],[24.42,37.13],[24.44,37.19],[24.53,37.19],[24.53,37.13]]]},{id:"300",name:"Greece",rings:[[[27.84,35.93],[27.75,35.91],[27.71,35.96],[27.76,36.07],[27.71,36.17],[27.91,36.35],[28.23,36.43],[28.07,36.13],[28.09,36.07],[27.97,36.05],[27.84,35.93]]]},{id:"300",name:"Greece",rings:[[[23.85,35.53],[24.01,35.53],[24.17,35.6],[24.2,35.54],[24.11,35.49],[24.26,35.47],[24.31,35.36],[24.72,35.43],[25.48,35.31],[25.73,35.35],[25.75,35.14],[25.79,35.12],[26.17,35.22],[26.32,35.31],[26.25,35.05],[26.17,35.02],[24.8,34.93],[24.74,34.95],[24.71,35.09],[24.46,35.16],[23.59,35.26],[23.57,35.53],[23.61,35.57],[23.67,35.51],[23.74,35.65],[23.85,35.53]]]},{id:"300",name:"Greece",rings:[[[26.32,41.72],[26.58,41.6],[26.62,41.4],[26.33,41.24],[26.35,41],[26.11,40.75],[26.04,40.73],[25.86,40.84],[25.1,40.99],[24.79,40.86],[24.48,40.95],[24.08,40.72],[23.76,40.75],[23.74,40.68],[23.88,40.54],[23.83,40.48],[23.87,40.42],[24.21,40.33],[24.34,40.15],[24.16,40.28],[23.91,40.36],[23.73,40.33],[23.72,40.29],[23.97,40.11],[24,40.02],[23.95,39.97],[23.66,40.22],[23.43,40.26],[23.39,40.22],[23.47,40.07],[23.68,39.96],[23.63,39.92],[23.39,39.99],[23.31,40.22],[22.9,40.4],[22.85,40.49],[22.92,40.59],[22.63,40.5],[22.59,40.04],[22.84,39.8],[22.98,39.56],[23.23,39.36],[23.33,39.18],[23.15,39.1],[23.16,39.26],[22.99,39.33],[22.92,39.31],[22.84,39.26],[22.89,39.17],[22.97,39.03],[23.07,39.04],[22.8,38.9],[22.57,38.87],[23.25,38.66],[23.37,38.53],[23.57,38.49],[23.68,38.35],[23.97,38.27],[24.02,38.14],[24.05,37.71],[23.97,37.68],[23.5,38.03],[23.03,37.88],[23.15,37.8],[23.2,37.62],[23.39,37.58],[23.49,37.44],[23.16,37.33],[23.1,37.36],[23.1,37.44],[22.94,37.52],[22.78,37.59],[22.73,37.54],[23.06,36.85],[23.04,36.64],[23.16,36.45],[22.98,36.53],[22.78,36.79],[22.72,36.79],[22.61,36.78],[22.49,36.57],[22.49,36.45],[22.43,36.48],[22.38,36.51],[22.38,36.7],[22.08,37.03],[21.95,36.99],[21.89,36.74],[21.74,36.86],[21.58,37.08],[21.58,37.2],[21.69,37.31],[21.68,37.39],[21.57,37.54],[21.33,37.67],[21.29,37.77],[21.12,37.89],[21.31,38.03],[21.4,38.2],[21.66,38.18],[21.83,38.33],[21.95,38.32],[22.92,37.96],[22.89,38.05],[23.12,38.07],[23.18,38.13],[23.09,38.2],[22.83,38.23],[22.42,38.44],[22.32,38.36],[21.97,38.41],[21.47,38.32],[21.33,38.49],[21.3,38.37],[21.18,38.35],[21.11,38.39],[20.99,38.65],[20.78,38.81],[20.77,38.87],[20.78,38.93],[20.89,38.94],[21.11,38.9],[21.15,38.92],[21.12,39.03],[20.78,39.01],[20.3,39.33],[20.19,39.55],[20,39.71],[20.25,39.68],[20.31,39.8],[20.38,39.8],[20.31,39.98],[20.66,40.12],[20.81,40.45],[20.95,40.49],[21.03,40.62],[20.96,40.85],[21.4,40.91],[21.58,40.87],[21.78,40.95],[21.99,41.13],[22.49,41.12],[22.73,41.18],[22.78,41.33],[23.64,41.39],[24.01,41.46],[24.06,41.53],[24.52,41.55],[24.6,41.44],[24.77,41.36],[24.85,41.39],[24.99,41.36],[25.25,41.24],[25.92,41.31],[26.16,41.44],[26.08,41.7],[26.32,41.72]]]},{id:"276",name:"Germany",rings:[[[9.52,47.52],[9.18,47.67],[8.88,47.66],[8.57,47.78],[8.4,47.69],[8.56,47.62],[8.43,47.59],[7.93,47.56],[7.57,47.61],[7.53,47.67],[7.62,48.16],[7.84,48.64],[8.14,48.89],[8.13,48.97],[7.61,49.06],[7.45,49.15],[7.04,49.11],[7,49.18],[6.89,49.21],[6.73,49.16],[6.54,49.4],[6.35,49.45],[6.49,49.8],[6.26,49.87],[6.14,49.97],[6.11,50.09],[6.18,50.23],[6.36,50.32],[6.34,50.45],[6.18,50.52],[6.24,50.6],[5.99,50.75],[6.05,50.91],[5.86,51.03],[6.13,51.15],[6.08,51.22],[6.19,51.41],[6.19,51.49],[5.95,51.8],[6.17,51.88],[6.36,51.82],[6.74,51.91],[6.8,51.98],[6.72,52.08],[6.98,52.21],[7.04,52.38],[6.97,52.44],[6.75,52.46],[6.69,52.53],[6.75,52.63],[7.01,52.63],[7.18,52.97],[7.2,53.28],[7.05,53.38],[7.11,53.56],[7.21,53.66],[8.01,53.69],[8.17,53.54],[8.11,53.47],[8.25,53.45],[8.33,53.61],[8.49,53.51],[8.49,53.39],[8.53,53.78],[8.62,53.88],[9.21,53.86],[9.59,53.6],[9.78,53.55],[9.63,53.6],[9.31,53.86],[8.98,53.93],[8.9,54],[8.91,54.26],[8.78,54.31],[8.65,54.29],[8.65,54.4],[8.95,54.47],[8.96,54.54],[8.68,54.79],[8.67,54.9],[9.25,54.81],[9.62,54.85],[9.89,54.78],[10.02,54.67],[10.03,54.58],[9.87,54.47],[10.14,54.49],[10.21,54.41],[10.36,54.44],[10.73,54.32],[11.01,54.38],[11.06,54.28],[11.01,54.18],[10.81,54.08],[10.92,54],[11.4,53.95],[11.8,54.14],[12.11,54.17],[12.58,54.47],[13.03,54.41],[13.15,54.28],[13.45,54.14],[13.73,54.15],[13.87,53.85],[14.26,53.73],[14.41,53.22],[14.37,53.1],[14.13,52.88],[14.62,52.53],[14.55,52.36],[14.68,52.25],[14.75,52.08],[14.6,51.83],[14.74,51.63],[14.73,51.52],[14.93,51.43],[15.02,51.25],[14.96,51.09],[14.77,50.82],[14.61,50.86],[14.63,50.91],[14.55,50.99],[14.32,51.04],[14.25,51],[14.37,50.9],[13.56,50.7],[13.44,50.6],[13.38,50.62],[13.18,50.51],[13.02,50.49],[12.94,50.41],[12.55,50.39],[12.28,50.18],[12.13,50.31],[12.09,50.27],[12.21,50.1],[12.51,49.9],[12.39,49.74],[12.63,49.46],[13.29,49.1],[13.4,48.98],[13.55,48.96],[13.77,48.82],[13.82,48.77],[13.79,48.59],[13.67,48.52],[13.49,48.58],[13.38,48.36],[12.9,48.2],[12.76,48.11],[12.95,47.89],[12.9,47.72],[13.06,47.66],[13.02,47.48],[12.81,47.54],[12.77,47.64],[12.68,47.67],[12.48,47.64],[12.21,47.72],[12.18,47.62],[11.72,47.58],[11.3,47.42],[11.04,47.39],[10.87,47.52],[10.44,47.55],[10.37,47.37],[10.18,47.28],[10.2,47.36],[10.07,47.39],[9.97,47.5],[9.75,47.58],[9.52,47.52]]]},{id:"276",name:"Germany",rings:[[[13.71,54.38],[13.71,54.28],[13.48,54.34],[13.37,54.25],[13.16,54.37],[13.18,54.54],[13.24,54.64],[13.42,54.7],[13.49,54.62],[13.66,54.56],[13.58,54.46],[13.71,54.38]]]},{id:"276",name:"Germany",rings:[[[14.21,53.95],[14.21,53.87],[13.93,53.88],[13.92,54],[13.83,54.06],[13.83,54.13],[14.21,53.95]]]},{id:"276",name:"Germany",rings:[[[11.28,54.42],[11.01,54.47],[11.09,54.53],[11.23,54.5],[11.28,54.42]]]},{id:"276",name:"Germany",rings:[[[8.31,54.79],[8.3,54.91],[8.4,55.06],[8.45,55.05],[8.38,54.9],[8.63,54.89],[8.35,54.85],[8.31,54.79]]]},{id:"276",name:"Germany",rings:[[[8.59,54.71],[8.4,54.71],[8.51,54.76],[8.59,54.71]]]},{id:"268",name:"Georgia",rings:[[[43.44,41.11],[43.4,41.18],[43.15,41.24],[43.15,41.31],[42.76,41.58],[42.59,41.57],[42.47,41.44],[41.92,41.5],[41.82,41.43],[41.51,41.52],[41.7,41.7],[41.76,41.97],[41.49,42.66],[41.42,42.74],[41.13,42.83],[41.06,42.93],[40.84,43.06],[40.46,43.15],[39.98,43.42],[40.15,43.57],[40.65,43.53],[41.08,43.37],[41.36,43.33],[41.58,43.22],[42.42,43.22],[42.57,43.16],[42.76,43.17],[42.99,43.09],[43.09,42.99],[43.78,42.75],[43.74,42.62],[43.83,42.57],[43.96,42.57],[44.51,42.75],[44.65,42.73],[44.77,42.62],[44.87,42.76],[45.16,42.68],[45.34,42.53],[45.7,42.5],[45.64,42.2],[45.95,42.04],[46.43,41.89],[46.3,41.76],[46.2,41.74],[46.18,41.66],[46.31,41.51],[46.67,41.29],[46.54,41.09],[46.43,41.08],[46.17,41.2],[45.92,41.19],[45.73,41.26],[45.72,41.34],[45.28,41.45],[44.98,41.28],[44.81,41.26],[44.84,41.21],[44.23,41.21],[43.44,41.11]]]},{id:"250",name:"France",rings:[[[9.48,42.81],[9.46,42.66],[9.53,42.55],[9.56,42.16],[9.4,41.93],[9.37,41.68],[9.19,41.39],[8.81,41.59],[8.89,41.7],[8.72,41.76],[8.74,41.93],[8.62,41.93],[8.7,42.1],[8.59,42.16],[8.57,42.22],[8.67,42.28],[8.57,42.36],[8.81,42.61],[9.14,42.73],[9.32,42.71],[9.36,43.02],[9.46,42.98],[9.48,42.81]]]},{id:"250",name:"France",rings:[[[7.62,47.59],[7.34,47.43],[7.2,47.43],[7.14,47.49],[6.97,47.45],[6.9,47.39],[7,47.32],[6.67,47.03],[6.46,46.95],[6.41,46.75],[6.16,46.61],[6.07,46.46],[6.12,46.38],[6.1,46.28],[5.97,46.21],[6.01,46.14],[6.2,46.19],[6.27,46.25],[6.23,46.33],[6.43,46.43],[6.78,46.41],[6.82,46.28],[6.77,46.16],[7.02,45.93],[6.81,45.81],[6.79,45.74],[7.16,45.4],[7.08,45.24],[6.84,45.13],[6.69,45.14],[6.63,45.07],[6.74,44.92],[6.99,44.83],[7.03,44.72],[6.84,44.51],[6.9,44.34],[7.32,44.14],[7.64,44.16],[7.68,44.08],[7.48,43.86],[7.49,43.77],[7.18,43.66],[6.72,43.37],[6.57,43.2],[6.11,43.07],[5.81,43.1],[5.41,43.23],[5.32,43.35],[5.07,43.37],[5.06,43.44],[4.71,43.37],[4.22,43.48],[4.05,43.59],[3.91,43.56],[3.26,43.19],[3.05,42.91],[3.09,42.59],[3.21,42.43],[2.89,42.46],[2.67,42.39],[2.65,42.34],[2.2,42.42],[2.03,42.35],[1.7,42.5],[1.71,42.6],[1.5,42.64],[1.43,42.6],[1.35,42.69],[0.77,42.84],[0.67,42.84],[0.63,42.69],[-0.04,42.69],[-0.3,42.83],[-0.59,42.8],[-0.76,42.94],[-1.18,43.02],[-1.3,43.1],[-1.4,43.03],[-1.48,43.07],[-1.41,43.24],[-1.76,43.32],[-1.79,43.41],[-1.63,43.44],[-1.49,43.56],[-1.24,44.56],[-1.08,44.69],[-1.15,44.76],[-1.24,44.67],[-1.19,45.16],[-1.08,45.53],[-0.83,45.38],[-0.69,45.09],[-0.55,45],[-0.64,45.09],[-0.79,45.47],[-1.2,45.71],[-1.21,45.77],[-1.03,45.74],[-1.15,46.31],[-1.39,46.35],[-1.79,46.52],[-2.06,46.81],[-2.09,46.92],[-2.02,47.04],[-2.2,47.16],[-2.03,47.27],[-1.74,47.22],[-1.97,47.31],[-2.5,47.31],[-2.53,47.38],[-2.43,47.47],[-2.55,47.53],[-2.77,47.51],[-2.73,47.6],[-2.79,47.63],[-3.07,47.62],[-3.16,47.69],[-3.44,47.71],[-3.9,47.84],[-4.31,47.82],[-4.43,47.97],[-4.68,48.04],[-4.33,48.17],[-4.58,48.29],[-4.24,48.3],[-4.39,48.37],[-4.72,48.36],[-4.76,48.45],[-4.72,48.54],[-4.53,48.62],[-4.06,48.71],[-3.71,48.71],[-3.47,48.81],[-3.23,48.84],[-3,48.79],[-2.69,48.54],[-2.45,48.65],[-2.08,48.65],[-2,48.58],[-1.91,48.7],[-1.82,48.63],[-1.38,48.65],[-1.56,48.8],[-1.58,49.2],[-1.81,49.49],[-1.86,49.68],[-1.26,49.68],[-1.23,49.49],[-1.14,49.39],[-0.16,49.3],[0.42,49.45],[0.13,49.51],[0.19,49.7],[0.62,49.86],[1.24,50],[1.59,50.25],[1.55,50.29],[1.58,50.74],[1.67,50.88],[1.91,50.99],[2.53,51.1],[2.6,50.88],[2.76,50.75],[2.84,50.71],[3.11,50.78],[3.23,50.66],[3.27,50.53],[3.59,50.48],[3.69,50.31],[3.95,50.34],[4.17,50.25],[4.15,49.97],[4.55,49.96],[4.82,50.15],[4.86,50.14],[4.79,49.96],[4.87,49.79],[5.28,49.68],[5.51,49.51],[5.79,49.54],[6.01,49.45],[6.24,49.49],[6.54,49.4],[6.73,49.16],[6.89,49.21],[7,49.18],[7.04,49.11],[7.45,49.15],[7.61,49.06],[8.13,48.97],[8.14,48.89],[7.84,48.64],[7.62,48.16],[7.53,47.67],[7.62,47.59]]]},{id:"250",name:"France",rings:[[[-1.18,45.9],[-1.22,45.82],[-1.39,46.05],[-1.18,45.9]]]},{id:"248",name:"Åland",rings:[[[19.99,60.35],[20.24,60.28],[20.19,60.19],[20.04,60.18],[20.03,60.09],[19.74,60.1],[19.69,60.27],[19.78,60.29],[19.78,60.21],[19.85,60.22],[19.87,60.3],[19.79,60.35],[19.82,60.39],[19.99,60.35]]]},{id:"248",name:"Åland",rings:[[[19.66,60.19],[19.58,60.14],[19.52,60.18],[19.55,60.24],[19.63,60.25],[19.66,60.19]]]},{id:"246",name:"Finland",rings:[[[24.15,65.81],[24,66.06],[23.7,66.25],[23.7,66.48],[23.87,66.58],[23.99,66.81],[23.64,67.13],[23.63,67.23],[23.78,67.33],[23.73,67.42],[23.46,67.46],[23.54,67.61],[23.5,67.87],[23.64,67.95],[23.32,68.13],[23.18,68.14],[23.1,68.26],[22.85,68.37],[22,68.52],[20.92,68.91],[20.9,68.98],[20.62,69.04],[21.07,69.04],[21.13,69.08],[21.07,69.21],[21.27,69.27],[21.59,69.27],[22.3,68.86],[22.41,68.72],[23.32,68.65],[23.71,68.71],[23.86,68.81],[24,68.8],[24.94,68.59],[25.09,68.64],[25.25,68.82],[25.58,68.89],[25.75,68.99],[25.77,69.28],[26.01,69.65],[26.53,69.91],[27.13,69.91],[27.59,70.04],[27.89,70.06],[28.41,69.82],[29.14,69.67],[29.33,69.47],[28.85,69.18],[28.83,69.12],[28.96,69.02],[28.41,68.9],[28.77,68.84],[28.47,68.49],[28.69,68.19],[29.34,68.06],[29.99,67.67],[29.94,67.55],[29.24,67.1],[29.09,66.97],[29.06,66.89],[29.9,66.09],[30.09,65.79],[30.09,65.68],[29.72,65.63],[29.82,65.57],[29.73,65.47],[29.72,65.34],[29.61,65.25],[29.81,65.2],[29.83,65.15],[29.62,65.04],[29.6,64.97],[29.78,64.8],[30.11,64.73],[30.12,64.64],[29.99,64.52],[30.11,64.37],[30.49,64.24],[30.53,64.08],[30.21,63.8],[29.99,63.73],[30.42,63.5],[31.18,63.21],[31.53,62.89],[31.29,62.57],[30.94,62.32],[29.25,61.29],[28.41,60.9],[27.8,60.54],[27.46,60.47],[27.2,60.54],[26.53,60.41],[26.6,60.6],[26.57,60.63],[26.38,60.42],[26.21,60.41],[25.95,60.47],[26.04,60.34],[25.76,60.27],[25.66,60.33],[24.6,60.11],[24.45,60.02],[23.46,59.99],[23.18,59.84],[22.96,59.83],[23.2,60.02],[23.08,60.05],[22.87,60.22],[22.79,60.08],[22.46,60.03],[22.44,60.16],[22.59,60.23],[22.51,60.28],[22.58,60.38],[21.85,60.51],[21.8,60.59],[21.61,60.53],[21.44,60.6],[21.36,60.97],[21.51,61.28],[21.51,61.48],[21.57,61.48],[21.5,61.55],[21.61,61.59],[21.39,61.92],[21.26,61.99],[21.34,62.28],[21.32,62.34],[21.17,62.41],[21.11,62.62],[21.14,62.74],[21.46,62.95],[21.47,63.03],[21.65,63.04],[21.54,63.21],[21.9,63.21],[22.32,63.31],[22.24,63.44],[22.35,63.44],[22.32,63.5],[22.4,63.49],[22.53,63.58],[22.53,63.65],[22.76,63.68],[23.5,64.03],[23.6,64.04],[23.65,64.13],[24.28,64.52],[24.56,64.8],[24.94,64.88],[25.29,64.86],[25.23,64.95],[25.37,65.01],[25.26,65.14],[25.35,65.48],[25.24,65.55],[24.68,65.67],[24.58,65.76],[24.63,65.86],[24.4,65.78],[24.15,65.81]]]},{id:"246",name:"Finland",rings:[[[21.99,60.34],[21.82,60.38],[21.83,60.47],[21.99,60.34]]]},{id:"246",name:"Finland",rings:[[[21.22,63.24],[21.42,63.25],[21.41,63.2],[21.25,63.15],[21.08,63.28],[21.23,63.28],[21.22,63.24]]]},{id:"246",name:"Finland",rings:[[[22.17,60.37],[22.42,60.3],[22.31,60.27],[22.36,60.17],[22.26,60.17],[22.08,60.29],[22.17,60.37]]]},{id:"246",name:"Finland",rings:[[[21.45,60.53],[21.44,60.48],[21.3,60.48],[21.21,60.6],[21.27,60.64],[21.45,60.53]]]},{id:"246",name:"Finland",rings:[[[21.83,60.14],[21.7,60.11],[21.76,60.2],[21.86,60.2],[21.83,60.14]]]},{id:"246",name:"Finland",rings:[[[21.63,60.11],[21.49,60.13],[21.63,60.17],[21.63,60.11]]]},{id:"246",name:"Finland",rings:[[[24.85,64.99],[24.58,64.98],[24.58,65.04],[24.78,65.09],[24.97,65.06],[24.85,64.99]]]},{id:"233",name:"Estonia",rings:[[[27.35,57.53],[26.97,57.61],[26.46,57.54],[26.3,57.6],[25.99,57.84],[25.28,58.05],[25.26,58],[25.11,58.06],[24.32,57.87],[24.55,58.3],[24.53,58.35],[24.34,58.38],[24.11,58.27],[23.77,58.36],[23.69,58.51],[23.51,58.66],[23.68,58.79],[23.5,58.79],[23.43,58.92],[23.51,59],[23.47,59.03],[23.52,59.11],[23.5,59.19],[24.08,59.29],[24.05,59.37],[24.38,59.47],[25.44,59.52],[25.52,59.56],[25.51,59.64],[26.62,59.55],[26.97,59.45],[27.89,59.41],[28.01,59.48],[28.15,59.37],[27.9,59.28],[27.76,59.05],[27.43,58.79],[27.53,58.43],[27.5,58.22],[27.67,57.93],[27.78,57.87],[27.54,57.8],[27.4,57.67],[27.35,57.53]]]},{id:"233",name:"Estonia",rings:[[[22.62,58.62],[22.96,58.61],[23.32,58.45],[23.13,58.44],[22.73,58.23],[22.37,58.22],[22.27,58.16],[22.15,57.97],[22,57.93],[21.99,58],[22.19,58.16],[21.88,58.26],[21.85,58.3],[21.98,58.39],[21.86,58.5],[22.27,58.51],[22.33,58.58],[22.62,58.62]]]},{id:"233",name:"Estonia",rings:[[[22.92,58.83],[22.84,58.78],[22.77,58.82],[22.66,58.71],[22.54,58.69],[22.47,58.71],[22.41,58.86],[22.06,58.94],[22.46,58.97],[22.65,59.09],[22.73,59.01],[22.91,58.99],[23.01,58.83],[22.92,58.83]]]},{id:"233",name:"Estonia",rings:[[[23.34,58.55],[23.06,58.61],[23.16,58.68],[23.33,58.65],[23.34,58.55]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.62,61.81],[-6.67,61.77],[-6.89,61.9],[-6.66,61.86],[-6.62,61.81]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.7,61.44],[-6.89,61.54],[-6.94,61.63],[-6.74,61.57],[-6.7,61.44]]]},{id:"234",name:"Faeroe Is.",rings:[[[-7.19,62.14],[-7.07,62.07],[-7.18,62.04],[-7.38,62.07],[-7.42,62.14],[-7.19,62.14]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.63,62.23],[-6.65,62.09],[-6.84,62.12],[-6.73,61.95],[-7.01,62.09],[-7.17,62.28],[-6.96,62.32],[-6.63,62.23]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.41,62.26],[-6.45,62.19],[-6.54,62.21],[-6.55,62.36],[-6.41,62.26]]]},{id:"208",name:"Denmark",rings:[[[12.57,55.79],[12.54,55.66],[12.32,55.59],[12.22,55.47],[12.39,55.39],[12.41,55.29],[12.09,55.19],[12.05,54.81],[11.86,54.77],[11.74,54.92],[11.66,55.19],[11.29,55.2],[11.17,55.33],[11.19,55.47],[11.12,55.6],[11.01,55.64],[10.98,55.72],[11.32,55.75],[11.48,55.94],[11.63,55.96],[11.69,55.91],[11.69,55.73],[11.82,55.7],[11.94,55.9],[11.87,55.97],[12.22,56.12],[12.58,56.06],[12.61,56.03],[12.53,55.92],[12.57,55.79]]]},{id:"208",name:"Denmark",rings:[[[9.74,54.83],[9.25,54.81],[8.67,54.9],[8.57,55.13],[8.67,55.16],[8.62,55.42],[8.13,55.6],[8.2,55.98],[8.12,56.14],[8.16,56.61],[8.55,56.56],[8.67,56.5],[8.74,56.63],[8.89,56.73],[9.07,56.79],[9.2,56.7],[9.25,57.01],[8.99,57.02],[8.77,56.72],[8.47,56.66],[8.27,56.75],[8.29,56.85],[8.43,56.98],[8.62,57.11],[9.43,57.17],[9.96,57.58],[10.61,57.74],[10.46,57.62],[10.54,57.45],[10.52,57.24],[10.29,57],[10.28,56.62],[10.49,56.52],[10.85,56.52],[10.93,56.44],[10.86,56.3],[10.76,56.24],[10.54,56.2],[10.43,56.28],[10.37,56.25],[10.18,55.87],[9.91,55.84],[10.02,55.76],[9.59,55.49],[9.67,55.27],[9.46,55.04],[9.69,55],[9.74,54.83]]]},{id:"208",name:"Denmark",rings:[[[10.64,55.61],[10.82,55.32],[10.78,55.13],[10.63,55.05],[9.99,55.16],[9.86,55.36],[9.86,55.52],[10.29,55.61],[10.51,55.56],[10.64,55.61]]]},{id:"208",name:"Denmark",rings:[[[11.36,54.89],[11.74,54.81],[11.77,54.68],[11.46,54.63],[11.04,54.77],[11.06,54.94],[11.26,54.95],[11.36,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.73,54.75],[10.62,54.85],[10.95,55.16],[10.73,54.75]]]},{id:"208",name:"Denmark",rings:[[[12.55,54.97],[12.12,54.91],[12.27,55.06],[12.55,54.97]]]},{id:"208",name:"Denmark",rings:[[[12.67,55.6],[12.55,55.56],[12.52,55.62],[12.62,55.68],[12.67,55.6]]]},{id:"208",name:"Denmark",rings:[[[10.49,54.85],[10.34,54.86],[10.2,54.96],[10.49,54.85]]]},{id:"208",name:"Denmark",rings:[[[10.06,54.89],[9.8,54.91],[9.77,55.06],[10,54.99],[10.06,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.61,55.78],[10.53,55.78],[10.55,55.99],[10.66,55.88],[10.61,55.78]]]},{id:"208",name:"Denmark",rings:[[[11.05,57.25],[10.87,57.26],[11.09,57.33],[11.17,57.32],[11.05,57.25]]]},{id:"208",name:"Denmark",rings:[[[15.09,55.02],[14.68,55.1],[14.72,55.24],[14.77,55.3],[15.13,55.14],[15.09,55.02]]]},{id:"203",name:"Czechia",rings:[[[18.83,49.51],[18.6,49.49],[18.16,49.26],[18.08,49.07],[17.76,48.89],[17.48,48.83],[17.13,48.84],[16.95,48.6],[16.88,48.7],[16.54,48.8],[16.37,48.74],[16.06,48.75],[15.82,48.86],[14.99,49],[14.92,48.77],[14.79,48.75],[14.69,48.6],[14.19,48.58],[14.05,48.6],[13.99,48.69],[13.55,48.96],[13.44,48.96],[12.92,49.33],[12.81,49.33],[12.68,49.41],[12.39,49.74],[12.51,49.9],[12.21,50.1],[12.09,50.3],[12.28,50.18],[12.55,50.39],[12.94,50.41],[13.02,50.49],[13.18,50.51],[13.38,50.62],[13.44,50.6],[13.56,50.7],[14.37,50.9],[14.25,51],[14.28,51.03],[14.55,50.99],[14.63,50.91],[14.61,50.86],[14.72,50.82],[14.98,50.89],[14.99,51.01],[15.26,50.96],[15.36,50.81],[15.73,50.74],[16.01,50.61],[16.28,50.66],[16.36,50.62],[16.42,50.57],[16.38,50.52],[16.21,50.42],[16.64,50.1],[16.99,50.24],[16.88,50.43],[17.15,50.38],[17.42,50.25],[17.7,50.31],[17.74,50.23],[17.59,50.16],[17.63,50.12],[17.88,49.97],[18.03,50.04],[18.3,49.91],[18.56,49.88],[18.6,49.76],[18.81,49.61],[18.83,49.51]]]},{name:"N. Cyprus",rings:[[[34,35.06],[33.87,35.09],[33.47,35],[33.38,35.16],[33.19,35.17],[32.92,35.09],[32.71,35.17],[32.88,35.18],[32.94,35.39],[33.61,35.35],[34.55,35.66],[33.94,35.29],[33.91,35.2],[34,35.06]]]},{id:"196",name:"Cyprus",rings:[[[32.71,35.17],[32.92,35.09],[33.19,35.17],[33.38,35.16],[33.47,35],[33.87,35.09],[34,35.06],[34.05,34.99],[33.7,34.97],[33.41,34.75],[33.11,34.7],[33.01,34.57],[32.94,34.58],[32.87,34.66],[32.69,34.65],[32.45,34.73],[32.32,34.95],[32.3,35.08],[32.39,35.05],[32.56,35.16],[32.71,35.17]]]},{id:"100",name:"Bulgaria",rings:[[[28.01,41.97],[27.53,41.92],[27.24,42.09],[26.62,41.97],[26.51,41.83],[26.36,41.8],[26.32,41.72],[26.11,41.73],[26.07,41.67],[26.15,41.52],[26.13,41.39],[25.92,41.31],[25.25,41.24],[24.99,41.36],[24.85,41.39],[24.77,41.36],[24.49,41.56],[24.06,41.53],[24.01,41.46],[23.64,41.39],[22.92,41.34],[23,41.74],[22.84,41.99],[22.58,42.11],[22.34,42.31],[22.52,42.44],[22.44,42.63],[22.47,42.84],[22.71,42.88],[22.98,43.19],[22.5,43.52],[22.37,43.78],[22.4,43.97],[22.6,44.08],[22.63,44.19],[22.7,44.24],[23.03,44.08],[22.87,43.95],[22.92,43.83],[23.23,43.87],[25.5,43.67],[25.82,43.77],[26.22,44.01],[27.09,44.17],[27.43,44.02],[27.74,43.96],[27.88,43.99],[28.05,43.82],[28.22,43.77],[28.59,43.74],[28.56,43.5],[28.46,43.39],[28.32,43.43],[28.13,43.4],[27.93,43.19],[27.89,42.75],[27.75,42.71],[27.48,42.47],[27.71,42.35],[28.01,41.97]]]},{id:"070",name:"Bosnia and Herz.",rings:[[[19.19,43.53],[18.95,43.53],[19.03,43.29],[18.85,43.35],[18.68,43.23],[18.62,43.03],[18.46,43],[18.47,42.78],[18.55,42.64],[18.46,42.56],[18.12,42.69],[17.8,42.9],[17.67,42.9],[17.58,42.94],[17.66,42.98],[17.62,43.04],[17.29,43.31],[17.27,43.45],[17.08,43.52],[16.3,44.12],[16.21,44.21],[16.1,44.52],[15.74,44.77],[15.79,45.18],[15.96,45.21],[16.29,45.01],[16.53,45.22],[16.79,45.2],[16.92,45.28],[17.13,45.17],[17.5,45.12],[17.65,45.16],[17.81,45.08],[17.99,45.14],[18.66,45.08],[18.84,44.88],[19.35,44.88],[19.29,44.7],[19.15,44.53],[19.12,44.36],[19.58,44.01],[19.24,43.96],[19.5,43.64],[19.45,43.56],[19.3,43.59],[19.19,43.53]]]},{id:"056",name:"Belgium",rings:[[[4.22,51.39],[4.37,51.36],[4.38,51.43],[4.5,51.47],[4.64,51.42],[4.76,51.49],[4.85,51.4],[5.03,51.47],[5.1,51.35],[5.21,51.28],[5.48,51.29],[5.83,51.13],[5.64,50.84],[5.75,50.76],[5.99,50.75],[6.24,50.6],[6.18,50.52],[6.34,50.45],[6.36,50.32],[6.18,50.23],[6.12,50.12],[5.98,50.17],[5.74,49.92],[5.73,49.81],[5.88,49.65],[5.82,49.55],[5.51,49.51],[5.28,49.68],[4.87,49.79],[4.79,49.96],[4.86,50.14],[4.82,50.15],[4.55,49.96],[4.15,49.97],[4.17,50.25],[4.04,50.32],[3.79,50.35],[3.69,50.31],[3.59,50.48],[3.27,50.53],[3.23,50.66],[3.11,50.78],[2.84,50.71],[2.6,50.88],[2.53,51.1],[3.22,51.35],[3.35,51.38],[3.43,51.25],[3.58,51.29],[3.9,51.21],[4.17,51.31],[4.22,51.39]]]},{id:"112",name:"Belarus",rings:[[[31.76,52.1],[31.08,52.08],[30.76,51.89],[30.53,51.6],[30.63,51.36],[30.54,51.26],[30.33,51.33],[30.31,51.4],[30.16,51.48],[29.35,51.38],[29.1,51.63],[28.85,51.54],[28.73,51.43],[28.65,51.46],[28.6,51.54],[28.18,51.61],[28.01,51.56],[27.86,51.59],[27.7,51.48],[27.69,51.57],[27.3,51.6],[27.14,51.75],[25.79,51.92],[24.36,51.87],[23.98,51.59],[23.71,51.64],[23.61,51.61],[23.6,51.52],[23.55,51.71],[23.63,51.81],[23.65,52.04],[23.18,52.29],[23.41,52.52],[23.84,52.66],[23.92,52.77],[23.86,53.11],[23.6,53.6],[23.48,53.94],[24.19,53.95],[24.32,53.89],[24.77,53.97],[24.87,54.14],[25.05,54.13],[25.46,54.29],[25.51,54.16],[25.75,54.16],[25.75,54.26],[25.55,54.33],[25.72,54.56],[25.78,54.83],[25.86,54.92],[26.17,55],[26.25,55.12],[26.6,55.13],[26.78,55.27],[26.46,55.34],[26.6,55.67],[26.82,55.71],[27.05,55.83],[27.58,55.8],[27.64,55.91],[27.89,56.08],[28.12,56.15],[28.28,56.06],[28.56,56.09],[28.79,55.94],[29.09,56.02],[29.37,55.94],[29.35,55.78],[29.48,55.68],[29.94,55.85],[30.23,55.84],[30.91,55.57],[30.9,55.4],[30.81,55.28],[30.96,55.14],[30.98,55.05],[30.83,54.92],[30.8,54.78],[31.15,54.63],[31.07,54.49],[31.19,54.45],[31.4,54.2],[31.83,54.03],[31.75,53.81],[32.2,53.78],[32.45,53.69],[32.42,53.62],[32.47,53.55],[32.71,53.42],[32.7,53.34],[32.14,53.09],[31.85,53.11],[31.67,53.2],[31.42,53.2],[31.26,53.02],[31.56,52.76],[31.53,52.63],[31.62,52.55],[31.58,52.31],[31.76,52.1]]]},{id:"040",name:"Austria",rings:[[[9.53,47.27],[9.62,47.47],[9.52,47.52],[9.75,47.58],[10.2,47.36],[10.18,47.28],[10.37,47.37],[10.44,47.55],[10.87,47.52],[11.04,47.39],[11.3,47.42],[11.72,47.58],[12.18,47.62],[12.21,47.72],[12.48,47.64],[12.68,47.67],[12.77,47.64],[12.81,47.54],[13.02,47.48],[13.06,47.66],[12.9,47.72],[12.95,47.89],[12.76,48.08],[12.81,48.16],[13.38,48.36],[13.49,48.58],[13.73,48.54],[13.79,48.59],[13.82,48.77],[13.99,48.69],[14.05,48.6],[14.69,48.6],[14.79,48.75],[14.92,48.77],[14.99,49],[15.82,48.86],[16.06,48.75],[16.37,48.74],[16.54,48.8],[16.88,48.7],[16.95,48.6],[16.86,48.39],[17.15,48.01],[17.03,47.84],[17.07,47.71],[16.79,47.68],[16.59,47.75],[16.42,47.67],[16.64,47.61],[16.68,47.54],[16.62,47.45],[16.44,47.4],[16.46,47.27],[16.42,47.22],[16.49,47.12],[16.45,47.01],[16.33,47],[16.04,46.84],[15.98,46.8],[15.96,46.68],[15.76,46.71],[15.44,46.63],[14.89,46.61],[14.55,46.4],[12.48,46.67],[12.16,46.94],[12.17,47.08],[11.77,46.99],[11.24,46.98],[11.13,46.94],[10.99,46.78],[10.48,46.86],[10.35,46.99],[10.13,46.85],[9.88,46.94],[9.84,47.01],[9.58,47.06],[9.61,47.11],[9.53,47.27]]]},{id:"051",name:"Armenia",rings:[[[44.77,39.7],[44.29,40.04],[43.94,40.02],[43.67,40.13],[43.71,40.17],[43.57,40.48],[43.72,40.72],[43.63,40.93],[43.44,41.11],[44.23,41.21],[44.84,41.21],[44.81,41.26],[45,41.29],[45.19,41.15],[45.07,41.08],[45.42,40.99],[45.59,40.85],[45.38,40.64],[45.57,40.42],[45.96,40.23],[45.97,40.18],[45.88,40.02],[45.58,39.98],[46.2,39.59],[46.32,39.62],[46.48,39.56],[46.48,39.48],[46.37,39.4],[46.59,39.22],[46.4,39.19],[46.49,39.07],[46.49,38.91],[46.11,38.88],[45.95,39.18],[45.98,39.24],[45.77,39.38],[45.8,39.49],[45.75,39.56],[45.46,39.49],[45.25,39.6],[45.17,39.57],[45.12,39.7],[45.03,39.77],[44.77,39.7]]]},{id:"020",name:"Andorra",rings:[[[1.7,42.5],[1.45,42.44],[1.43,42.6],[1.5,42.64],[1.71,42.6],[1.7,42.5]]]},{id:"012",name:"Algeria",rings:[[[8.58,36.94],[8.6,36.83],[8.44,36.76],[8.37,36.63],[8.21,36.52],[8.35,36.37],[8.25,35.8],[8.39,35.2],[8.31,35.09],[8.25,34.73],[8.12,34.56],[7.84,34.41],[7.75,34.25],[7.52,34.08],[7.5,33.83],[7.73,33.27],[8.11,33.06],[8.21,32.93],[8.33,32.54],[9.05,32.07],[9.52,30.23],[9.31,30.12],[9.64,29.64],[9.8,29.18],[9.84,28.97],[9.82,28.56],[9.92,27.79],[9.75,27.33],[9.79,27.04],[9.89,26.85],[9.88,26.63],[9.86,26.55],[9.49,26.33],[9.42,26.15],[9.5,26],[-6.5,26],[-8.69,27.29],[-8.68,28.69],[-8.26,28.98],[-7.14,29.62],[-6.64,29.57],[-6.52,29.66],[-6.48,29.82],[-6,29.83],[-5.45,29.96],[-5.18,30.17],[-4.97,30.47],[-4.32,30.7],[-3.99,30.91],[-3.67,30.96],[-3.62,31.07],[-3.83,31.2],[-3.79,31.36],[-3.85,31.62],[-3.77,31.69],[-3.44,31.71],[-3.02,31.83],[-2.93,32.04],[-2.86,32.08],[-2.45,32.13],[-1.23,32.11],[-1.24,32.34],[-1.06,32.47],[-1.45,32.79],[-1.68,33.32],[-1.63,33.57],[-1.72,33.78],[-1.71,34.18],[-1.79,34.37],[-1.73,34.47],[-1.85,34.61],[-1.79,34.75],[-2.13,34.97],[-2.22,35.1],[-1.91,35.09],[-1.67,35.18],[-1.34,35.36],[-1.09,35.58],[-0.43,35.86],[-0.05,35.83],[0.31,36.16],[1.26,36.52],[2.59,36.6],[2.97,36.78],[3.52,36.8],[3.78,36.9],[4.76,36.9],[5.29,36.65],[6.06,36.86],[6.25,36.94],[6.33,37.05],[6.49,37.09],[6.58,37],[6.93,36.92],[7.24,36.97],[7.21,37.09],[7.43,37.06],[7.91,36.86],[8.58,36.94]]]},{id:"008",name:"Albania",rings:[[[19.34,41.87],[19.36,42.07],[19.28,42.17],[19.7,42.65],[19.79,42.48],[20.06,42.55],[20.24,42.34],[20.52,42.17],[20.58,41.92],[20.5,41.71],[20.51,41.57],[20.45,41.52],[20.49,41.27],[20.71,40.93],[20.93,40.9],[21.03,40.62],[20.95,40.49],[20.81,40.45],[20.66,40.12],[20.31,39.98],[20.38,39.8],[20.31,39.8],[20.21,39.65],[20,39.71],[19.85,40.04],[19.49,40.21],[19.32,40.41],[19.46,40.41],[19.34,40.66],[19.46,40.93],[19.44,41.43],[19.58,41.64],[19.58,41.79],[19.34,41.87]]]}],croatia:[[[16.358,46.555],[16.239,46.501],[16.295,46.38],[16.048,46.395],[16.066,46.342],[16.006,46.31],[15.775,46.26],[15.78,46.219],[15.633,46.21],[15.587,46.147],[15.714,46.045],[15.702,45.847],[15.531,45.849],[15.249,45.721],[15.319,45.674],[15.347,45.713],[15.336,45.67],[15.364,45.689],[15.394,45.648],[15.269,45.608],[15.374,45.485],[15.338,45.451],[15.148,45.424],[14.913,45.528],[14.896,45.479],[14.811,45.462],[14.679,45.532],[14.693,45.568],[14.564,45.675],[14.494,45.55],[14.312,45.474],[13.994,45.518],[13.977,45.45],[13.876,45.427],[13.499,45.51],[13.601,45.042],[13.639,45.061],[13.743,44.982],[13.786,44.857],[13.938,44.763],[14.053,44.941],[14.156,44.966],[14.149,45.071],[14.319,45.349],[14.546,45.274],[14.825,45.102],[14.906,44.941],[14.865,44.724],[14.965,44.573],[15.268,44.358],[15.527,44.249],[15.258,44.337],[15.284,44.251],[15.179,44.306],[15.186,44.251],[15.091,44.267],[15.123,44.195],[15.535,43.869],[15.59,43.769],[15.828,43.715],[15.913,43.518],[16.051,43.464],[16.185,43.469],[16.181,43.503],[16.201,43.47],[16.363,43.478],[16.271,43.519],[16.425,43.536],[16.376,43.5],[16.866,43.392],[17.522,42.927],[17.186,43.026],[16.985,43.052],[16.994,43.003],[17.212,42.97],[17.76,42.755],[17.813,42.795],[18.029,42.649],[18.196,42.612],[18.22,42.554],[18.525,42.386],[18.409,42.575],[18.345,42.616],[18.238,42.604],[17.882,42.813],[17.815,42.912],[17.685,42.924],[17.634,42.882],[17.53,42.929],[17.704,42.973],[17.665,43.054],[17.331,43.26],[17.246,43.403],[17.274,43.465],[17.005,43.573],[16.499,44.024],[16.306,44.115],[16.182,44.274],[16.205,44.344],[16.11,44.398],[16.164,44.404],[16.126,44.489],[15.998,44.583],[16.048,44.622],[15.891,44.744],[15.825,44.715],[15.717,44.83],[15.785,44.845],[15.731,44.937],[15.759,45.168],[15.822,45.22],[15.97,45.228],[16.101,45.097],[16.299,44.998],[16.503,45.221],[16.813,45.185],[16.924,45.276],[16.928,45.229],[17.013,45.235],[17.172,45.147],[17.24,45.149],[17.26,45.191],[17.33,45.146],[17.451,45.154],[17.474,45.111],[17.658,45.13],[17.833,45.047],[17.996,45.145],[18.125,45.081],[18.216,45.081],[18.251,45.136],[18.413,45.112],[18.496,45.054],[18.541,45.096],[18.646,45.055],[18.66,45.092],[18.719,44.998],[18.787,44.99],[18.761,44.897],[18.969,44.849],[19.012,44.856],[18.993,44.918],[19.056,44.901],[19.138,44.953],[19.042,44.977],[19.087,45.01],[19.077,45.141],[19.121,45.132],[19.164,45.198],[19.433,45.194],[19.405,45.237],[19.175,45.264],[18.981,45.359],[18.993,45.493],[19.087,45.496],[19.007,45.553],[18.873,45.565],[18.955,45.661],[18.898,45.707],[18.967,45.71],[18.894,45.713],[18.967,45.732],[18.951,45.769],[18.901,45.744],[18.839,45.772],[18.911,45.784],[18.888,45.827],[18.836,45.808],[18.894,45.918],[18.794,45.881],[18.65,45.919],[18.611,45.843],[18.437,45.739],[18.119,45.792],[17.9,45.797],[17.85,45.764],[17.821,45.805],[17.65,45.837],[17.554,45.938],[17.34,45.943],[17.381,45.964],[17.25,46.012],[17.284,46.029],[17.193,46.075],[17.225,46.101],[17.168,46.109],[17.147,46.169],[16.876,46.281],[16.855,46.353],[16.362,46.554]],[[14.319,45.178],[14.294,45.177],[14.25,45.125],[14.291,45.065],[14.337,45.04],[14.332,45.01],[14.375,44.967],[14.382,44.909],[14.309,44.956],[14.287,44.916],[14.313,44.823],[14.346,44.81],[14.378,44.74],[14.378,44.702],[14.329,44.716],[14.323,44.702],[14.376,44.603],[14.354,44.563],[14.396,44.549],[14.404,44.564],[14.434,44.527],[14.528,44.473],[14.525,44.445],[14.575,44.439],[14.518,44.517],[14.418,44.584],[14.39,44.631],[14.395,44.67],[14.488,44.599],[14.542,44.629],[14.474,44.698],[14.476,44.742],[14.445,44.789],[14.465,44.788],[14.442,44.875],[14.483,44.954],[14.465,44.982],[14.43,44.978],[14.396,45.013],[14.358,45.088],[14.362,45.158],[14.323,45.173]],[[14.83,44.19],[14.853,44.154],[14.823,44.157],[14.83,44.168],[14.808,44.147],[14.87,44.129],[14.902,44.091],[14.961,44.062],[15.111,43.911],[15.228,43.841],[15.207,43.839],[15.237,43.806],[15.273,43.79],[15.277,43.813],[15.317,43.782],[15.283,43.781],[15.486,43.674],[15.513,43.676],[15.476,43.689],[15.514,43.684],[15.466,43.717],[15.485,43.722],[15.473,43.733],[15.361,43.783],[15.232,43.882],[15.371,43.814],[15.333,43.878],[15.217,43.905],[15.081,44.005],[15.05,44.008],[15.004,44.084],[14.944,44.105],[14.842,44.189]],[[14.731,44.709],[14.721,44.694],[14.746,44.66],[14.903,44.516],[14.912,44.5],[14.885,44.503],[14.9,44.48],[14.963,44.459],[15.027,44.393],[15.073,44.396],[15.105,44.378],[15.077,44.361],[15.098,44.318],[15.168,44.288],[15.129,44.331],[15.23,44.295],[15.206,44.319],[15.23,44.319],[15.192,44.35],[15.248,44.321],[15.242,44.348],[15.067,44.473],[15.045,44.517],[14.994,44.535],[14.905,44.613],[14.86,44.615],[14.857,44.597]],[[14.554,45.258],[14.523,45.239],[14.539,45.214],[14.518,45.227],[14.532,45.168],[14.512,45.123],[14.466,45.13],[14.459,45.1],[14.421,45.095],[14.421,45.07],[14.486,45.023],[14.61,45.011],[14.603,44.981],[14.748,44.936],[14.746,44.969],[14.8,44.961],[14.815,44.979],[14.735,45.039],[14.731,45.071],[14.697,45.068],[14.659,45.093],[14.664,45.158],[14.657,45.149],[14.627,45.164],[14.574,45.23],[14.596,45.228],[14.56,45.254]],[[16.666,42.999],[16.593,42.98],[16.659,42.966],[16.625,42.92],[16.694,42.895],[16.672,42.919],[16.779,42.89],[16.9,42.898],[16.959,42.923],[17.096,42.904],[17.176,42.909],[17.197,42.914],[17.182,42.933],[17.204,42.941],[17.169,42.939],[17.172,42.962],[17.175,42.952],[17.208,42.962],[17.034,42.985],[16.806,42.969],[16.726,42.992]],[[16.55,43.239],[16.505,43.225],[16.568,43.186],[16.489,43.216],[16.447,43.214],[16.355,43.204],[16.381,43.172],[16.303,43.182],[16.292,43.171],[16.369,43.142],[16.477,43.155],[16.648,43.116],[16.74,43.125],[16.973,43.111],[17.194,43.125],[17.145,43.143],[16.719,43.167],[16.672,43.212],[16.573,43.222],[16.561,43.238]],[[15.675,43.727],[15.661,43.706],[15.623,43.713],[15.63,43.693],[15.717,43.653],[15.587,43.686],[15.651,43.628],[15.736,43.62],[15.713,43.644],[15.737,43.645],[15.737,43.663],[15.755,43.66],[15.766,43.677],[15.835,43.641],[15.81,43.673],[15.685,43.726]],[[14.715,44.857],[14.666,44.846],[14.686,44.797],[14.662,44.806],[14.638,44.792],[14.685,44.752],[14.756,44.747],[14.835,44.683],[14.864,44.701],[14.861,44.725],[14.743,44.816],[14.76,44.837],[14.748,44.852]],[[16.201,43.42],[16.153,43.409],[16.164,43.39],[16.533,43.264],[16.781,43.256],[16.875,43.277],[16.896,43.316],[16.771,43.363],[16.544,43.396],[16.412,43.397],[16.428,43.368],[16.412,43.338],[16.267,43.418]],[[14.979,44.19],[15.034,44.142],[15.055,44.148],[15.188,44.032],[15.225,44.024],[15.354,43.908],[15.447,43.888],[15.364,43.972],[15.265,44.018],[15.204,44.08],[15.045,44.168],[15.005,44.171]],[[14.745,44.299],[14.724,44.281],[14.741,44.244],[14.76,44.244],[14.762,44.265],[14.823,44.197],[14.812,44.228],[14.937,44.17],[14.877,44.239],[14.87,44.225],[14.801,44.266]],[[17.825,42.763],[17.826,42.743],[17.787,42.762],[17.771,42.753],[17.891,42.698],[17.928,42.702],[17.909,42.693],[17.924,42.674],[18.019,42.666],[17.849,42.756]],[[16.174,43.087],[16.024,43.057],[16.052,43.038],[16.072,43.044],[16.077,43.025],[16.051,43.006],[16.223,43.016],[16.253,43.032],[16.257,43.068],[16.194,43.082]],[[15.259,43.943],[15.272,43.929],[15.246,43.928],[15.253,43.907],[15.282,43.925],[15.343,43.896],[15.273,43.939]],[[13.711,44.946],[13.735,44.906],[13.722,44.921],[13.705,44.914],[13.743,44.885],[13.777,44.912],[13.74,44.941]],[[15.06,44.087],[15.062,44.07],[15.039,44.083],[15.098,44.019],[15.164,43.994],[15.171,44.012],[15.095,44.073]],[[14.273,44.691],[14.228,44.661],[14.219,44.626],[14.268,44.602],[14.261,44.648],[14.284,44.664]],[[15.476,43.872],[15.469,43.847],[15.492,43.824],[15.531,43.827],[15.495,43.865]],[[14.835,44.492],[14.93,44.405],[14.993,44.393],[14.867,44.458],[14.836,44.491]]],cities:[["Osijek",18.675555,45.560846,1],["Zagreb",15.98,45.81,1],["Split",16.44,43.51,1],["Rijeka",14.44,45.33,1],["Zadar",15.23,44.12,0],["Dubrovnik",18.09,42.65,0],["Pula",13.85,44.87,0],["Varaždin",16.34,46.31,0],["Slavonski Brod",18.01,45.16,0],["Vukovar",19,45.35,0],["Đakovo",18.41,45.31,0],["Vinkovci",18.8,45.29,0]],capitals:[["Beč",16.37,48.21],["Budimpešta",19.04,47.5],["München",11.58,48.14],["Ljubljana",14.51,46.06],["Beograd",20.46,44.79],["Sarajevo",18.41,43.86],["Milano",9.19,45.46],["Berlin",13.4,52.52],["Prag",14.42,50.08],["Varšava",21.01,52.23],["Pariz",2.35,48.86],["Amsterdam",4.9,52.37],["Rim",12.5,41.9],["Zürich",8.54,47.37],["Bratislava",17.11,48.15],["London",-0.13,51.51]],nodes:[[149.2,72],[116.8,71.8],[-105.7,71.7],[-53.2,71.6],[84.3,71.6],[136.8,71.4],[-85.7,71.4],[-33.2,71.3],[104.4,71.2],[71.9,71],[124.4,70.9],[-45.6,70.8],[92,70.7],[144.5,70.6],[-78,70.6],[112,70.4],[-110.5,70.4],[27,70.4],[79.6,70.2],[132.1,70.1],[-37.9,70],[99.6,69.9],[152.1,69.8],[-70.3,69.8],[67.2,69.8],[-155.3,69.7],[119.7,69.6],[-102.8,69.6],[172.2,69.5],[-50.3,69.5],[87.2,69.5],[139.7,69.4],[-82.7,69.3],[-30.2,69.2],[107.3,69.2],[22.3,69.1],[159.8,69.1],[-147.7,69],[127.3,68.9],[179.9,68.8],[-42.6,68.7],[94.9,68.7],[-127.6,68.7],[147.4,68.6],[-75.1,68.6],[62.4,68.5],[-160.1,68.5],[114.9,68.4],[-107.5,68.4],[30,68.4],[167.5,68.3],[82.5,68.3],[-140,68.2],[135,68.2],[50,68.1],[-35,68],[102.5,68],[-119.9,68],[17.6,67.9],[155.1,67.9],[-67.4,67.9],[70.1,67.8],[-152.4,67.8],[122.6,67.7],[-99.9,67.7],[37.6,67.7],[175.1,67.6],[-47.4,67.6],[90.1,67.6],[-132.3,67.5],[142.7,67.5],[57.7,67.4],[110.2,67.3],[-112.3,67.3],[25.2,67.2],[162.7,67.2],[77.7,67.1],[-144.7,67.1],[130.3,67],[-92.2,67],[45.3,67],[-177.2,66.9],[-39.7,66.9],[97.8,66.9],[-124.7,66.8],[150.3,66.8],[-72.2,66.7],[65.3,66.7],[-157.1,66.7],[117.9,66.6],[-104.6,66.6],[32.9,66.5],[170.4,66.5],[-52.1,66.5],[85.4,66.4],[-137.1,66.4],[137.9,66.3],[-84.6,66.3],[53,66.3],[105.5,66.2],[-117,66.2],[20.5,66.1],[158,66.1],[-64.5,66.1],[73,66],[-149.5,66],[125.5,65.9],[-97,65.9],[178.1,65.8],[-44.4,65.8],[93.1,65.8],[-129.4,65.8],[145.6,65.7],[60.6,65.6],[-161.9,65.6],[-24.4,65.6],[113.1,65.5],[-109.4,65.5],[28.2,65.5],[165.7,65.4],[80.7,65.4],[-141.8,65.4],[133.2,65.3],[-89.3,65.3],[48.2,65.2],[-174.3,65.2],[100.7,65.1],[-121.8,65.1],[15.8,65.1],[153.3,65],[-69.2,65],[68.3,65],[-154.2,65],[-16.7,64.9],[120.8,64.9],[-101.7,64.9],[173.3,64.8],[-49.2,64.8],[88.3,64.7],[-134.2,64.7],[140.9,64.7],[55.9,64.6],[108.4,64.5],[-114.1,64.5],[160.9,64.4],[75.9,64.4],[-146.6,64.3],[128.5,64.3],[-94,64.2],[43.5,64.2],[-41.5,64.2],[96,64.1],[-126.5,64.1],[11,64.1],[148.5,64],[63.5,64],[-159,64],[-21.4,63.9],[116.1,63.9],[-106.4,63.9],[31.1,63.8],[168.6,63.8],[83.6,63.8],[-138.9,63.7],[136.1,63.7],[51.1,63.6],[-171.4,63.6],[103.7,63.5],[-118.8,63.5],[18.7,63.5],[156.2,63.4],[-66.3,63.4],[71.2,63.4],[-151.3,63.4],[123.7,63.3],[-98.8,63.3],[38.7,63.2],[176.3,63.2],[-46.2,63.2],[91.3,63.2],[-131.2,63.1],[143.8,63.1],[58.8,63],[-163.7,63],[111.3,62.9],[-111.2,62.9],[26.3,62.9],[163.9,62.8],[78.9,62.8],[-143.6,62.8],[131.4,62.7],[46.4,62.6],[98.9,62.6],[-123.6,62.5],[13.9,62.5],[151.5,62.5],[66.5,62.4],[-156,62.4],[119,62.3],[-103.5,62.3],[34,62.3],[171.5,62.3],[86.5,62.2],[-136,62.2],[139.1,62.1],[54.1,62.1],[106.6,62],[-115.9,62],[21.6,61.9],[74.1,61.9],[-148.4,61.8],[126.7,61.8],[-95.8,61.7],[41.7,61.7],[-43.3,61.7],[94.2,61.6],[-128.3,61.6],[9.2,61.6],[146.7,61.6],[-75.8,61.5],[61.7,61.5],[-160.8,61.5],[114.3,61.4],[-108.2,61.4],[29.3,61.4],[166.8,61.3],[81.8,61.3],[-140.7,61.3],[134.3,61.2],[49.3,61.2],[101.9,61.1],[-120.6,61.1],[16.9,61],[154.4,61],[69.4,61],[-153.1,60.9],[121.9,60.9],[-100.6,60.8],[36.9,60.8],[-48.1,60.8],[89.5,60.7],[-133,60.7],[142,60.7],[57,60.6],[109.5,60.5],[-113,60.5],[24.5,60.5],[77.1,60.4],[129.6,60.3],[44.6,60.3],[97.1,60.2],[-125.4,60.2],[12.1,60.1],[149.6,60.1],[-72.8,60.1],[64.7,60.1],[-157.8,60],[117.2,60],[-105.3,60],[32.2,59.9],[84.7,59.9],[-137.8,59.8],[137.2,59.8],[52.3,59.7],[104.8,59.7],[-117.7,59.6],[-65.2,59.6],[72.3,59.5],[124.8,59.5],[-97.6,59.4],[39.9,59.4],[92.4,59.3],[-130.1,59.3],[7.4,59.3],[-77.6,59.2],[59.9,59.2],[112.4,59.1],[-110,59.1],[27.5,59.1],[80,59],[132.5,58.9],[47.5,58.9],[100,58.8],[-122.4,58.8],[15.1,58.8],[67.6,58.7],[-154.9,58.7],[120.1,58.6],[-102.4,58.6],[35.1,58.6],[87.6,58.5],[140.2,58.4],[55.2,58.4],[107.7,58.3],[-114.8,58.3],[22.7,58.3],[160.2,58.2],[75.2,58.2],[127.8,58.1],[-94.7,58.1],[42.8,58.1],[95.3,58],[-127.2,58],[-74.7,57.9],[62.8,57.9],[115.4,57.8],[-107.1,57.8],[30.4,57.8],[82.9,57.7],[-2.1,57.6],[135.4,57.6],[50.5,57.6],[103,57.5],[-119.5,57.5],[-67,57.4],[70.5,57.4],[123,57.3],[-99.5,57.3],[38.1,57.3],[90.6,57.2],[-131.9,57.2],[58.1,57.1],[110.6,57],[-111.9,57],[25.7,57],[78.2,56.9],[130.7,56.8],[-91.8,56.8],[45.7,56.8],[98.2,56.7],[-124.3,56.7],[13.3,56.6],[-71.7,56.6],[65.8,56.6],[118.3,56.5],[-104.2,56.5],[33.3,56.5],[85.8,56.4],[53.4,56.3],[105.9,56.2],[-116.6,56.2],[158.4,56.1],[-64.1,56.1],[73.4,56.1],[126,56],[-96.5,56],[41,56],[93.5,55.9],[-129,55.9],[8.5,55.9],[-76.5,55.8],[61,55.8],[-161.5,55.8],[113.6,55.7],[-108.9,55.7],[28.6,55.7],[81.1,55.6],[-3.9,55.6],[133.6,55.6],[-88.9,55.5],[48.6,55.5],[101.2,55.4],[-121.3,55.4],[-68.8,55.4],[68.7,55.3],[121.2,55.3],[-101.3,55.2],[36.2,55.2],[88.8,55.1],[56.3,55],[108.8,55],[-113.7,54.9],[23.8,54.9],[161.4,54.9],[-61.1,54.9],[76.4,54.9],[128.9,54.8],[-93.6,54.8],[43.9,54.8],[96.4,54.7],[-126.1,54.7],[11.4,54.6],[-73.5,54.6],[64,54.6],[116.5,54.5],[-106,54.5],[31.5,54.5],[84,54.4],[-1,54.4],[136.6,54.3],[-85.9,54.3],[51.6,54.3],[104.1,54.2],[-118.4,54.2],[19.1,54.2],[156.6,54.2],[-65.9,54.1],[71.6,54.1],[124.2,54.1],[-98.3,54],[39.2,54],[91.7,53.9],[-78.3,53.9],[59.2,53.8],[111.8,53.8],[-110.7,53.7],[26.8,53.7],[-58.2,53.7],[79.3,53.7],[131.8,53.6],[-90.7,53.6],[46.8,53.6],[99.4,53.5],[-123.1,53.5],[14.4,53.4],[-70.6,53.4],[66.9,53.4],[119.4,53.3],[-103.1,53.3],[34.4,53.3],[87,53.2],[139.5,53.1],[-83,53.1],[54.5,53.1],[107,53],[-115.5,53],[22,53],[-63,53],[74.6,52.9],[127.1,52.9],[-95.4,52.9],[42.1,52.8],[94.6,52.8],[-127.9,52.7],[9.6,52.7],[-75.3,52.7],[62.2,52.7],[114.7,52.6],[-107.8,52.6],[29.7,52.6],[82.2,52.5],[-2.8,52.5],[134.7,52.4],[-87.7,52.4],[49.8,52.4],[102.3,52.3],[-120.2,52.3],[17.3,52.3],[-67.7,52.2],[69.8,52.2],[122.3,52.2],[-100.1,52.1],[37.4,52.1],[89.9,52.1],[4.9,52],[142.4,52],[57.4,52],[109.9,51.9],[-112.5,51.9],[25,51.9],[-60,51.8],[77.5,51.8],[130,51.7],[-92.5,51.7],[45,51.7],[97.5,51.6],[-124.9,51.6],[12.6,51.6],[-72.4,51.5],[65.1,51.5],[117.6,51.5],[-104.9,51.4],[32.6,51.4],[85.1,51.4],[0.2,51.3],[137.7,51.3],[-84.8,51.3],[52.7,51.3],[105.2,51.2],[-117.3,51.2],[20.2,51.2],[-64.8,51.1],[72.7,51.1],[125.3,51],[-97.2,51],[40.3,51],[92.8,50.9],[7.8,50.9],[-77.2,50.9],[60.3,50.8],[112.9,50.8],[-109.6,50.8],[27.9,50.7],[-57.1,50.7],[80.4,50.7],[-4.6,50.6],[132.9,50.6],[-89.6,50.6],[48,50.6],[100.5,50.5],[-122,50.5],[15.5,50.5],[-69.5,50.4],[68,50.4],[120.5,50.4],[-102,50.3],[35.6,50.3],[88.1,50.3],[3.1,50.2],[-81.9,50.2],[55.6,50.2],[108.1,50.1],[-114.4,50.1],[23.2,50.1],[75.7,50],[128.2,49.9],[-94.3,49.9],[43.2,49.9],[95.7,49.8],[-126.8,49.8],[10.8,49.8],[-74.2,49.8],[63.3,49.7],[115.8,49.7],[-106.7,49.7],[30.8,49.6],[83.3,49.6],[-1.6,49.5],[135.9,49.5],[-86.6,49.5],[50.9,49.5],[103.4,49.4],[-119.1,49.4],[18.4,49.4],[70.9,49.3],[123.5,49.3],[-99,49.2],[38.5,49.2],[91,49.2],[6,49.1],[-79,49.1],[58.5,49.1],[111.1,49],[-111.4,49],[26.1,49],[78.6,48.9],[131.1,48.9],[-91.4,48.8],[46.1,48.8],[98.7,48.8],[-123.8,48.7],[13.7,48.7],[-71.3,48.7],[66.2,48.7],[118.7,48.6],[-103.8,48.6],[33.7,48.6],[86.3,48.5],[1.3,48.5],[138.8,48.5],[-83.7,48.4],[53.8,48.4],[106.3,48.4],[-116.2,48.3],[21.3,48.3],[73.9,48.3],[126.4,48.2],[-96.1,48.2],[41.4,48.2],[93.9,48.1],[8.9,48.1],[-76,48],[61.5,48],[114,48],[-108.5,47.9],[29,47.9],[-56,47.9],[81.5,47.9],[-3.5,47.8],[134.1,47.8],[-88.4,47.8],[49.1,47.8],[101.6,47.7],[-120.9,47.7],[16.6,47.7],[-68.4,47.6],[69.1,47.6],[121.7,47.6],[-100.8,47.5],[36.7,47.5],[89.2,47.5],[4.2,47.4],[-80.8,47.4],[56.7,47.4],[109.3,47.3],[-113.2,47.3],[24.3,47.3],[76.8,47.2],[129.3,47.2],[-93.2,47.1],[44.3,47.1],[96.9,47.1],[11.9,47],[-73.1,47],[64.4,47],[116.9,46.9],[-105.6,46.9],[-53.1,46.8],[84.5,46.8],[-0.5,46.8],[137,46.8],[-85.5,46.8],[104.5,46.7],[-118,46.7],[19.5,46.6],[-65.5,46.6],[72.1,46.6],[124.6,46.5],[-97.9,46.5],[39.6,46.5],[92.1,46.4],[7.1,46.4],[-77.8,46.4],[59.7,46.3],[112.2,46.3],[-110.3,46.3],[27.2,46.3],[79.7,46.2],[132.2,46.1],[-90.2,46.1],[47.3,46.1],[99.8,46.1],[-122.7,46],[14.8,46],[-70.2,46],[67.3,46],[119.8,45.9],[-102.6,45.9],[34.9,45.9],[87.4,45.8],[2.4,45.8],[-82.6,45.7],[54.9,45.7],[107.4,45.7],[-115,45.6],[22.5,45.6],[-62.5,45.6],[75,45.6],[127.5,45.5],[-95,45.5],[42.5,45.5],[95,45.4],[10.1,45.4],[-74.9,45.4],[62.6,45.3],[115.1,45.3],[-107.4,45.3],[82.6,45.2],[135.2,45.1],[-87.3,45.1],[102.7,45.1],[-119.8,45],[17.7,45],[-67.3,45],[70.2,45],[122.8,44.9],[-99.7,44.9],[37.8,44.9],[90.3,44.8],[5.3,44.8],[-79.7,44.7],[57.8,44.7],[110.4,44.7],[-112.1,44.7],[25.4,44.6],[77.9,44.6],[130.4,44.5],[-92.1,44.5],[45.5,44.5],[98,44.4],[-72,44.4],[65.5,44.4],[118,44.3],[-104.5,44.3],[85.6,44.2],[0.6,44.2],[-84.4,44.1],[53.1,44.1],[105.6,44.1],[-116.9,44.1],[20.7,44],[73.2,44],[125.7,43.9],[-96.8,43.9],[40.7,43.9],[93.2,43.8],[-76.7,43.8],[60.8,43.8],[113.3,43.7],[-109.2,43.7],[28.3,43.7],[80.8,43.6],[133.4,43.6],[-89.1,43.5],[100.9,43.5],[-121.6,43.5],[68.4,43.4],[121,43.3],[-101.5,43.3],[88.5,43.2],[141,43.2],[-81.5,43.2],[56,43.2],[108.6,43.1],[-113.9,43.1],[23.6,43.1],[76.1,43],[-8.9,43],[128.6,43],[-93.9,42.9],[43.6,42.9],[96.2,42.9],[11.2,42.8],[-73.8,42.8],[63.7,42.8],[116.2,42.7],[-106.3,42.7],[83.8,42.7],[-1.2,42.6],[-86.2,42.6],[103.8,42.5],[-118.7,42.5],[18.8,42.5],[71.4,42.4],[123.9,42.4],[-98.6,42.4],[91.4,42.3],[-78.5,42.2],[59,42.2],[111.5,42.2],[-111,42.1],[26.5,42.1],[79,42.1],[-6,42],[-90.9,42],[46.6,42],[99.1,41.9],[-123.4,41.9],[14.1,41.9],[-70.9,41.9],[66.6,41.8],[119.2,41.8],[-103.3,41.8],[34.2,41.8],[86.7,41.7],[1.7,41.7],[-83.3,41.6],[54.2,41.6],[106.8,41.6],[-115.7,41.6],[21.8,41.5],[74.3,41.5],[126.8,41.4],[-95.7,41.4],[41.8,41.4],[94.4,41.3],[-75.6,41.3],[61.9,41.3],[114.4,41.2],[-108.1,41.2],[29.4,41.2],[82,41.1],[-3,41.1],[-88,41.1],[102,41],[-120.5,41],[17,41],[69.6,40.9],[122.1,40.9],[-100.4,40.8],[37.1,40.8],[89.6,40.8],[-80.3,40.7],[57.2,40.7],[109.7,40.6],[-112.8,40.6],[24.7,40.6],[77.2,40.6],[-7.8,40.5],[-92.7,40.5],[44.8,40.5],[97.3,40.4],[64.8,40.3],[117.3,40.3],[-105.1,40.3],[32.4,40.3],[84.9,40.2],[-0.1,40.2],[-85.1,40.1],[104.9,40.1],[-117.5,40.1],[20,40],[72.5,40],[125,39.9],[-97.5,39.9],[40,39.9],[92.5,39.9],[-77.4,39.8],[60.1,39.8],[112.6,39.7],[-109.9,39.7],[27.6,39.7],[80.1,39.6],[-4.8,39.6],[-89.8,39.6],[47.7,39.6],[100.2,39.5],[-122.3,39.5],[67.7,39.4],[-102.2,39.4],[35.3,39.3],[87.8,39.3],[140.3,39.2],[-82.2,39.2],[55.3,39.2],[107.9,39.2],[-114.6,39.1],[22.9,39.1],[75.4,39.1],[-94.6,39],[43,39],[95.5,38.9],[63,38.9],[115.5,38.8],[-107,38.8],[30.6,38.8],[83.1,38.7],[-1.9,38.7],[-86.9,38.7],[103.1,38.6],[-119.4,38.6],[70.7,38.5],[-99.3,38.5],[38.2,38.4],[90.7,38.4],[-79.2,38.3],[58.3,38.3],[110.8,38.3],[-111.7,38.2],[78.3,38.2],[-6.6,38.2],[-91.6,38.1],[45.9,38.1],[98.4,38.1],[13.4,38],[65.9,38],[118.5,37.9],[-104,37.9],[33.5,37.9],[86,37.8],[-84,37.8],[106.1,37.7],[-116.4,37.7],[73.6,37.6],[-96.4,37.6],[41.1,37.6],[93.7,37.5],[-76.3,37.4],[61.2,37.4],[113.7,37.4],[-108.8,37.4],[28.7,37.3],[81.3,37.3],[-3.7,37.3],[-88.7,37.2],[48.8,37.2],[101.3,37.2],[-121.2,37.2],[68.9,37.1],[121.4,37],[-101.1,37],[36.4,37],[88.9,37],[-81,36.9],[56.5,36.9],[109,36.8],[-113.5,36.8],[76.5,36.8],[129.1,36.7],[-93.4,36.7],[44.1,36.7],[96.6,36.6],[64.1,36.5],[116.7,36.5],[-105.8,36.5],[84.2,36.4],[136.7,36.4],[-85.8,36.4],[51.7,36.3],[104.3,36.3],[-118.2,36.3],[71.8,36.2],[-98.2,36.2],[39.3,36.1],[91.9,36.1],[6.9,36.1],[-78.1,36],[59.4,36],[111.9,36],[-110.6,35.9],[79.5,35.9],[-5.5,35.9],[-90.5,35.8],[47,35.8],[99.5,35.8],[67.1,35.7],[119.6,35.6],[-102.9,35.6],[87.1,35.6],[2.1,35.5],[139.6,35.5],[-82.8,35.5],[54.7,35.5],[107.2,35.4],[-115.3,35.4],[74.7,35.4],[127.2,35.3],[-95.2,35.3],[42.3,35.3],[94.8,35.2],[9.8,35.2],[62.3,35.2],[114.8,35.1],[-107.6,35.1],[82.4,35],[-2.6,35],[134.9,35],[-87.6,35],[49.9,34.9],[102.4,34.9],[-120,34.9],[70,34.8],[-100,34.8],[37.5,34.7],[90,34.7],[5.1,34.7],[-79.9,34.6],[57.6,34.6],[110.1,34.6],[-112.4,34.6],[77.6,34.5],[-92.3,34.4],[45.2,34.4],[97.7,34.4],[65.2,34.3],[117.8,34.3],[-104.7,34.2],[85.3,34.2],[0.3,34.1],[-84.7,34.1],[52.8,34.1],[105.4,34.1],[-117.1,34],[72.9,34],[-97.1,33.9],[40.5,33.9],[93,33.9],[8,33.8],[60.5,33.8],[113,33.7],[-109.5,33.7],[80.6,33.7],[-4.4,33.6],[133.1,33.6],[-89.4,33.6],[48.1,33.6],[100.6,33.5],[68.2,33.5],[-101.8,33.4],[35.7,33.4],[88.2,33.3],[3.3,33.3],[-81.7,33.3],[55.8,33.3],[108.3,33.2],[-114.2,33.2],[75.8,33.1],[-94.1,33.1],[43.4,33.1],[95.9,33],[10.9,33],[63.4,32.9],[116,32.9],[-106.5,32.9],[83.5,32.8],[-1.5,32.8],[-86.5,32.8],[51,32.7],[103.6,32.7],[71.1,32.6],[-98.9,32.6],[38.6,32.5],[91.2,32.5],[6.2,32.5],[58.7,32.4],[111.2,32.4],[-111.3,32.4],[78.8,32.3],[-6.2,32.3],[131.3,32.3],[-91.2,32.2],[46.3,32.2],[98.8,32.2],[13.8,32.2],[66.4,32.1],[118.9,32.1],[-103.6,32],[86.4,32],[1.4,32],[-83.5,31.9],[54,31.9],[106.5,31.9],[-116,31.9],[21.5,31.8],[74,31.8],[-95.9,31.7],[41.6,31.7],[94.1,31.7],[9.1,31.6],[61.6,31.6],[114.2,31.6],[-108.3,31.5],[81.7,31.5],[-3.3,31.4],[-88.3,31.4],[49.2,31.4],[101.8,31.4],[69.3,31.3],[-100.7,31.2],[36.8,31.2],[89.4,31.2],[4.4,31.1],[56.9,31.1],[109.4,31],[-113.1,31],[24.4,31],[77,31],[-8,30.9],[-93,30.9],[44.5,30.9],[97,30.9],[12,30.8],[64.6,30.8],[117.1,30.7],[-105.4,30.7],[32.1,30.7],[84.6,30.7],[-0.4,30.6],[-85.3,30.6],[52.2,30.6],[104.7,30.5],[72.2,30.5],[-97.7,30.4],[39.8,30.4],[92.3,30.3],[7.3,30.3],[59.8,30.3],[112.3,30.2],[-110.1,30.2],[27.4,30.2],[79.9,30.2],[-5.1,30.1],[47.4,30.1],[99.9,30],[15,30],[67.5,30],[120,29.9],[-102.5,29.9],[35,29.9],[87.5,29.8],[2.6,29.8],[-82.4,29.8],[55.1,29.8],[107.6,29.7],[-114.9,29.7],[22.6,29.7],[75.1,29.7],[-9.8,29.6],[42.7,29.6],[95.2,29.5],[10.2,29.5],[62.7,29.5],[115.3,29.4],[-107.2,29.4],[30.3,29.4],[82.8,29.4],[-2.2,29.3],[102.9,29.2],[17.9,29.2],[70.4,29.2],[-99.6,29.1],[38,29.1],[90.5,29],[5.5,29],[58,29],[110.5,28.9],[-112,28.9],[25.6,28.9],[78.1,28.9],[-6.9,28.8],[45.6,28.8],[98.1,28.7],[13.2,28.7],[65.7,28.7],[118.2,28.6],[-104.3,28.6],[85.7,28.6],[0.8,28.5],[53.3,28.5],[105.8,28.4],[20.8,28.4],[73.3,28.4],[40.9,28.3],[93.4,28.2],[8.4,28.2],[60.9,28.2],[113.5,28.1],[-109,28.1],[28.5,28.1],[81,28.1],[-4,28],[48.5,28],[101.1,27.9],[16.1,27.9],[68.6,27.9],[-101.4,27.8],[36.1,27.8],[88.7,27.8],[3.7,27.7],[-81.3,27.7],[56.2,27.7],[108.7,27.6],[-113.8,27.6],[23.7,27.6],[76.3,27.6],[-8.7,27.5],[43.8,27.5],[96.3,27.5],[11.3,27.4],[63.9,27.4],[116.4,27.3],[-106.1,27.3],[31.4,27.3],[83.9,27.3],[-1.1,27.2],[104,27.2],[19,27.1],[71.5,27.1],[-98.4,27],[39.1,27],[91.6,27],[6.6,26.9],[59.1,26.9],[111.7,26.9],[26.7,26.8],[79.2,26.8],[-5.8,26.8],[46.7,26.7],[99.3,26.7],[14.3,26.6],[66.8,26.6],[119.3,26.6],[-103.2,26.5],[86.9,26.5],[1.9,26.5],[106.9,26.4],[21.9,26.3],[74.5,26.3],[-10.5,26.3],[42,26.2],[94.5,26.2],[9.5,26.2],[62.1,26.1],[114.6,26.1],[-107.9,26.1],[29.6,26],[82.1,26],[-2.9,26],[49.7,25.9],[102.2,25.9],[17.2,25.9],[69.7,25.8],[-100.2,25.8],[37.3,25.7],[89.8,25.7],[4.8,25.7],[109.8,25.6],[24.9,25.6],[77.4,25.5],[-7.6,25.5],[44.9,25.4],[97.4,25.4],[12.5,25.4],[65,25.3],[117.5,25.3],[-105,25.3],[32.5,25.3],[85,25.2],[0.1,25.2],[105.1,25.1],[20.1,25.1],[72.6,25],[-12.3,25],[40.2,25],[92.7,24.9],[7.7,24.9],[112.8,24.8],[27.8,24.8],[80.3,24.7],[-4.7,24.7],[47.8,24.7],[100.4,24.6],[15.4,24.6],[67.9,24.6],[-102.1,24.5],[88,24.5],[3,24.4],[55.5,24.4],[108,24.3],[23.1,24.3],[75.6,24.3],[-9.4,24.2],[43.1,24.2],[95.6,24.2],[10.7,24.1],[115.7,24],[-106.8,24],[30.7,24],[83.2,24],[-1.7,23.9],[50.8,23.9],[103.3,23.9],[18.3,23.8],[70.8,23.8],[-14.1,23.8],[-99.1,23.7],[90.9,23.7],[5.9,23.7],[58.4,23.6],[111,23.6],[26,23.5],[78.5,23.5],[-6.5,23.5],[46,23.4],[98.6,23.4],[13.6,23.4],[-103.9,23.3],[33.6,23.3],[86.2,23.2],[1.2,23.2],[53.7,23.1],[106.2,23.1],[21.2,23.1],[73.8,23],[-11.2,23],[41.3,23],[93.8,22.9],[8.8,22.9],[113.9,22.8],[28.9,22.8],[81.4,22.7],[-3.6,22.7],[49,22.7],[101.5,22.6],[16.5,22.6],[-16,22.5],[-100.9,22.5],[89.1,22.5],[4.1,22.4],[-80.9,22.4],[56.6,22.4],[109.2,22.3],[24.2,22.3],[76.7,22.3],[-8.3,22.2],[44.2,22.2],[96.8,22.2],[11.8,22.1],[31.8,22],[84.4,22],[-0.6,22],[51.9,21.9],[104.4,21.9],[19.4,21.8],[72,21.8],[-13,21.8],[-98,21.8],[39.5,21.7],[92,21.7],[7,21.7],[-78,21.6],[27.1,21.6],[79.6,21.5],[-5.4,21.5],[47.2,21.5],[99.7,21.4],[14.7,21.4],[-102.7,21.3],[34.8,21.3],[2.3,21.2],[54.8,21.2],[107.3,21.1],[22.4,21.1],[74.9,21.1],[-10.1,21],[42.4,21],[94.9,20.9],[10,20.9],[30,20.8],[82.5,20.8],[-2.4,20.7],[-87.4,20.7],[50.1,20.7],[102.6,20.7],[17.6,20.6],[-14.8,20.6],[-99.8,20.5],[5.2,20.5],[57.7,20.4],[110.3,20.4],[25.3,20.3],[77.8,20.3],[-7.2,20.3],[45.3,20.2],[97.9,20.2],[12.9,20.2],[-104.6,20.1],[33,20.1],[85.5,20],[0.5,20],[53,20],[105.5,19.9],[20.6,19.9],[73.1,19.8],[-11.9,19.8],[-96.9,19.8],[8.2,19.7],[28.2,19.6],[80.7,19.6],[-4.2,19.5],[-89.2,19.5],[48.3,19.5],[100.8,19.5],[15.8,19.4],[-101.6,19.3],[35.9,19.3],[3.4,19.3],[55.9,19.2],[23.5,19.1],[76,19.1],[-9,19.1],[43.5,19],[96.1,19],[11.1,19],[31.1,18.9],[83.7,18.8],[-1.3,18.8],[51.2,18.8],[103.7,18.7],[18.7,18.7],[-13.7,18.6],[-98.7,18.6],[6.3,18.5],[26.4,18.4],[78.9,18.4],[-6.1,18.3],[-91,18.3],[46.5,18.3],[99,18.3],[14,18.2],[34.1,18.1],[1.6,18.1],[54.1,18],[21.7,17.9],[74.2,17.9],[-10.8,17.9],[-95.8,17.9],[9.3,17.8],[29.3,17.7],[81.9,17.6],[-3.1,17.6],[49.4,17.6],[101.9,17.5],[16.9,17.5],[-15.5,17.4],[122,17.4],[-100.5,17.4],[37,17.4],[4.5,17.3],[24.6,17.2],[77.1,17.2],[-7.9,17.1],[-92.8,17.1],[44.7,17.1],[97.2,17.1],[12.2,17],[32.3,16.9],[-0.2,16.9],[52.3,16.8],[104.8,16.8],[19.9,16.8],[-12.6,16.7],[-97.6,16.7],[7.5,16.6],[27.5,16.5],[80,16.4],[-4.9,16.4],[-89.9,16.4],[47.6,16.4],[100.1,16.3],[15.1,16.3],[35.2,16.2],[2.7,16.1],[107.8,16.1],[22.8,16],[75.3,16],[-9.7,16],[42.8,15.9],[95.4,15.9],[10.4,15.9],[30.5,15.8],[-2,15.7],[-87,15.7],[50.5,15.6],[103,15.6],[18.1,15.6],[-14.4,15.5],[38.1,15.5],[5.7,15.4],[25.7,15.3],[78.2,15.3],[-6.7,15.2],[-91.7,15.2],[45.8,15.2],[98.3,15.2],[13.3,15.1],[33.4,15],[0.9,15],[-84.1,14.9],[106,14.9],[21,14.9],[-11.5,14.8],[8.6,14.7],[28.6,14.6],[-3.8,14.5],[-88.8,14.5],[48.7,14.5],[101.2,14.4],[16.2,14.4],[-16.2,14.3],[121.3,14.3],[36.3,14.3],[3.8,14.2],[108.9,14.2],[23.9,14.1],[76.4,14.1],[-8.6,14.1],[44,14],[11.5,14],[31.6,13.9],[-0.9,13.8],[-85.9,13.8],[104.2,13.7],[19.2,13.7],[-13.3,13.6],[124.2,13.6],[39.2,13.6],[6.8,13.5],[26.8,13.4],[79.4,13.4],[-5.6,13.3],[99.4,13.3],[14.4,13.2],[34.5,13.1],[2,13.1],[107.1,13],[22.1,13],[-10.4,12.9],[42.2,12.9],[9.7,12.8],[29.8,12.7],[-2.7,12.6],[102.3,12.5],[17.4,12.5],[-15.1,12.5],[37.4,12.4],[5,12.4],[25,12.2],[77.5,12.2],[-7.4,12.2],[12.6,12.1],[32.7,12],[0.2,11.9],[-84.8,11.9],[105.3,11.8],[20.3,11.8],[-12.2,11.7],[125.3,11.7],[40.3,11.7],[7.9,11.6],[28,11.5],[-4.5,11.5],[15.6,11.4],[-69.4,11.3],[35.6,11.3],[3.2,11.2],[108.2,11.1],[23.2,11.1],[-9.2,11],[43.3,11],[10.8,10.9],[-74.2,10.9],[30.9,10.8],[-1.6,10.8],[50.9,10.7],[18.5,10.6],[-66.5,10.6],[-14,10.6],[38.5,10.5],[6.1,10.5],[26.1,10.4],[78.7,10.3],[-6.3,10.3],[46.2,10.3],[98.7,10.2],[13.7,10.2],[-71.2,10.2],[33.8,10.1],[1.3,10],[-83.6,10],[21.4,9.9],[-63.6,9.9],[-11.1,9.9],[41.5,9.8],[9,9.8],[29.1,9.7],[-3.4,9.6],[49.1,9.6],[16.7,9.5],[-68.3,9.5],[36.7,9.4],[4.3,9.3],[24.3,9.2],[76.9,9.2],[-8.1,9.2],[44.4,9.1],[11.9,9.1],[-73.1,9],[32,9],[-0.5,8.9],[19.6,8.8],[-65.4,8.8],[-12.9,8.7],[39.7,8.7],[7.2,8.6],[-77.8,8.6],[27.3,8.5],[-5.2,8.5],[47.3,8.4],[99.8,8.4],[14.9,8.4],[-70.1,8.3],[34.9,8.2],[2.5,8.2],[22.5,8.1],[-62.5,8.1],[-9.9,8],[42.6,8],[10.1,7.9],[-74.9,7.9],[30.2,7.8],[-2.3,7.7],[17.8,7.6],[-67.2,7.6],[122.8,7.6],[37.8,7.5],[5.4,7.5],[25.5,7.4],[-59.5,7.3],[-7,7.3],[45.5,7.3],[13.1,7.2],[-71.9,7.2],[33.1,7.1],[0.7,7],[20.7,6.9],[158.2,6.9],[-64.3,6.9],[40.8,6.8],[8.3,6.8],[-76.7,6.7],[28.4,6.7],[80.9,6.6],[-4.1,6.6],[48.4,6.6],[101,6.5],[16,6.5],[-69,6.5],[36,6.4],[23.6,6.2],[-61.3,6.2],[-8.8,6.2],[43.7,6.1],[11.2,6.1],[-73.7,6],[116.3,6],[31.3,6],[-1.2,5.9],[18.9,5.8],[-66.1,5.8],[39,5.7],[6.5,5.6],[26.6,5.5],[-58.4,5.5],[-5.9,5.5],[46.6,5.4],[14.2,5.4],[-70.8,5.3],[119.2,5.3],[34.2,5.3],[21.8,5.1],[-63.2,5.1],[41.9,5],[9.4,4.9],[-75.6,4.9],[29.5,4.8],[-55.5,4.8],[102.1,4.7],[17.1,4.7],[-67.9,4.6],[37.2,4.6],[24.8,4.4],[-60.2,4.4],[44.8,4.3],[97.3,4.3],[12.4,4.2],[-72.6,4.2],[117.4,4.1],[32.4,4.1],[-52.6,4.1],[20,4],[-65,3.9],[40.1,3.9],[27.7,3.7],[-57.3,3.7],[15.3,3.5],[-69.7,3.5],[35.3,3.4],[23,3.3],[-62,3.2],[43,3.2],[10.6,3.1],[-74.4,3.1],[115.6,3],[30.6,3],[-54.4,3],[103.2,2.8],[18.2,2.8],[-66.8,2.8],[38.3,2.7],[25.9,2.6],[-59.1,2.5],[45.9,2.5],[98.5,2.4],[13.5,2.4],[-71.5,2.4],[33.5,2.3],[-51.4,2.3],[21.1,2.1],[-63.8,2.1],[41.2,2],[-76.2,1.9],[113.8,1.9],[28.8,1.9],[-56.2,1.8],[101.4,1.7],[16.4,1.7],[-68.6,1.7],[36.5,1.6],[24.1,1.4],[-60.9,1.4],[44.1,1.3],[11.7,1.3],[-73.3,1.2],[116.7,1.2],[31.7,1.2],[-53.3,1.1],[19.3,1],[-65.7,1],[124.4,0.9],[39.4,0.9],[-78.1,0.8],[112,0.7],[27,0.7],[-58,0.7],[99.6,0.6],[14.6,0.6],[-70.4,0.5],[34.7,0.5],[22.3,0.3],[-62.7,0.3],[42.3,0.2],[9.9,0.1],[-75.1,0.1],[114.9,0],[29.9,0],[-55.1,0],[102.5,-0.1],[17.5,-0.1],[-67.5,-0.2],[37.6,-0.2],[-79.9,-0.3],[110.2,-0.4],[25.2,-0.4],[-59.8,-0.4],[12.8,-0.6],[-72.2,-0.6],[32.8,-0.7],[-52.1,-0.7],[20.5,-0.8],[-64.5,-0.9],[40.5,-0.9],[-76.9,-1],[113.1,-1.1],[28.1,-1.1],[-56.9,-1.1],[133.2,-1.2],[100.7,-1.3],[15.7,-1.3],[-69.3,-1.3],[35.8,-1.4],[-49.2,-1.4],[23.4,-1.5],[-61.6,-1.6],[11,-1.7],[-74,-1.7],[116,-1.8],[31,-1.8],[-53.9,-1.8],[103.6,-2],[18.6,-2],[-66.3,-2],[38.7,-2.1],[-46.3,-2.1],[-78.7,-2.2],[111.3,-2.2],[26.3,-2.2],[-58.7,-2.3],[13.9,-2.4],[-71.1,-2.4],[34,-2.5],[-51,-2.5],[139,-2.6],[106.6,-2.7],[21.6,-2.7],[-63.4,-2.7],[-43.4,-2.8],[-75.8,-2.9],[114.2,-2.9],[29.2,-2.9],[-55.8,-3],[134.3,-3],[101.8,-3.1],[16.8,-3.1],[-68.2,-3.1],[121.9,-3.2],[36.9,-3.2],[-48.1,-3.2],[141.9,-3.3],[24.5,-3.4],[-60.5,-3.4],[-40.4,-3.5],[12.1,-3.5],[-72.9,-3.6],[32.2,-3.7],[-52.8,-3.7],[137.2,-3.7],[104.7,-3.8],[19.8,-3.8],[-65.2,-3.8],[-45.2,-3.9],[-77.6,-4],[27.4,-4.1],[-57.6,-4.1],[15,-4.3],[-70,-4.3],[120.1,-4.3],[35.1,-4.4],[-49.9,-4.4],[140.1,-4.4],[22.7,-4.5],[-62.3,-4.5],[-42.2,-4.6],[-74.7,-4.7],[30.3,-4.8],[-54.6,-4.8],[18,-5],[-67,-5],[38,-5.1],[-47,-5.1],[143.1,-5.1],[-79.4,-5.1],[25.6,-5.2],[-59.4,-5.2],[-39.3,-5.3],[13.2,-5.4],[-71.8,-5.4],[33.3,-5.5],[-51.7,-5.5],[138.3,-5.6],[20.9,-5.7],[-64.1,-5.7],[-44,-5.8],[146,-5.8],[-76.5,-5.8],[28.5,-5.9],[-56.4,-6],[-36.4,-6.1],[16.1,-6.1],[-68.8,-6.1],[36.2,-6.2],[-48.8,-6.2],[141.3,-6.3],[23.8,-6.4],[-61.2,-6.4],[-41.1,-6.5],[-73.6,-6.6],[31.5,-6.6],[-53.5,-6.7],[19.1,-6.8],[156.6,-6.8],[-65.9,-6.8],[39.1,-6.9],[-45.9,-6.9],[144.2,-7],[-78.3,-7],[111.7,-7],[26.7,-7.1],[-58.3,-7.1],[131.8,-7.1],[-38.2,-7.2],[14.3,-7.2],[-70.7,-7.3],[34.4,-7.3],[-50.6,-7.4],[139.4,-7.4],[22,-7.5],[-63,-7.5],[-42.9,-7.6],[147.1,-7.7],[-75.4,-7.7],[29.7,-7.8],[-55.3,-7.8],[-35.3,-7.9],[17.3,-7.9],[-67.7,-8],[37.3,-8],[-47.7,-8.1],[142.4,-8.1],[24.9,-8.2],[-60.1,-8.2],[-40,-8.3],[-72.5,-8.4],[117.6,-8.5],[32.6,-8.5],[-52.4,-8.5],[20.2,-8.6],[-64.8,-8.7],[125.2,-8.7],[-44.7,-8.8],[-77.2,-8.8],[27.8,-8.9],[-57.1,-8.9],[-37.1,-9],[15.5,-9.1],[153,-9.1],[-69.5,-9.1],[35.5,-9.2],[-49.5,-9.2],[23.1,-9.4],[-61.9,-9.4],[-41.8,-9.5],[148.2,-9.5],[-74.3,-9.5],[30.8,-9.6],[-54.2,-9.7],[18.4,-9.8],[-66.6,-9.8],[38.4,-9.9],[-46.5,-9.9],[26,-10.1],[-58.9,-10.1],[-38.9,-10.2],[13.6,-10.2],[-71.3,-10.3],[33.7,-10.3],[-51.3,-10.4],[21.3,-10.5],[-63.7,-10.5],[-43.6,-10.6],[-76.1,-10.7],[29,-10.8],[-56,-10.8],[16.6,-10.9],[-68.4,-11],[36.6,-11.1],[-48.4,-11.1],[24.2,-11.2],[-60.8,-11.2],[-40.7,-11.3],[-73.2,-11.4],[31.9,-11.5],[-53.1,-11.5],[19.5,-11.7],[-65.5,-11.7],[39.6,-11.8],[-45.4,-11.8],[27.2,-11.9],[-57.8,-12],[-37.8,-12.1],[14.8,-12.1],[-70.2,-12.1],[34.8,-12.2],[-50.2,-12.2],[22.4,-12.4],[-62.6,-12.4],[-42.5,-12.5],[-75,-12.6],[30.1,-12.7],[-54.9,-12.7],[135.1,-12.7],[17.7,-12.8],[-67.3,-12.8],[37.7,-12.9],[-47.2,-13],[142.8,-13],[25.3,-13.1],[-59.6,-13.1],[130.4,-13.2],[-39.6,-13.2],[13,-13.3],[-72,-13.3],[33,-13.4],[-52,-13.4],[20.6,-13.5],[-64.4,-13.6],[-44.3,-13.7],[28.3,-13.8],[-56.7,-13.8],[133.3,-13.9],[48.3,-13.9],[15.9,-14],[-69.1,-14],[35.9,-14.1],[-49,-14.1],[23.5,-14.3],[-61.4,-14.3],[-41.4,-14.4],[-73.8,-14.5],[31.2,-14.5],[-53.8,-14.6],[18.8,-14.7],[-66.2,-14.7],[38.9,-14.8],[-46.1,-14.8],[143.9,-14.9],[26.5,-15],[-58.5,-15],[131.5,-15.1],[14.1,-15.2],[-70.9,-15.2],[34.1,-15.3],[-50.9,-15.3],[21.7,-15.4],[-63.3,-15.5],[126.8,-15.5],[-43.2,-15.6],[29.4,-15.7],[-55.6,-15.7],[134.4,-15.8],[49.5,-15.8],[17,-15.9],[-68,-15.9],[37.1,-16],[-47.9,-16],[142.1,-16.1],[24.7,-16.2],[-60.3,-16.2],[129.7,-16.2],[44.7,-16.3],[-40.3,-16.3],[12.3,-16.3],[-72.7,-16.4],[32.3,-16.4],[-52.7,-16.5],[137.4,-16.5],[19.9,-16.6],[-65.1,-16.6],[125,-16.7],[-45,-16.7],[145,-16.8],[27.6,-16.9],[-57.4,-16.9],[132.6,-17],[47.6,-17],[15.2,-17.1],[-69.8,-17.1],[35.2,-17.2],[-49.7,-17.2],[22.8,-17.3],[-62.1,-17.4],[127.9,-17.4],[-42.1,-17.5],[30.5,-17.6],[-54.5,-17.7],[135.6,-17.7],[18.1,-17.8],[-66.9,-17.8],[123.2,-17.9],[-46.8,-17.9],[143.2,-18],[25.8,-18.1],[-59.2,-18.1],[130.8,-18.2],[45.8,-18.2],[13.4,-18.3],[33.4,-18.4],[-51.5,-18.4],[138.5,-18.4],[21,-18.5],[-63.9,-18.6],[126.1,-18.6],[-43.9,-18.7],[146.1,-18.7],[28.7,-18.8],[-56.3,-18.8],[133.8,-18.9],[48.8,-18.9],[16.3,-19],[-68.7,-19],[-48.6,-19.1],[141.4,-19.2],[24,-19.3],[-61,-19.3],[129,-19.4],[-41,-19.4],[31.6,-19.6],[-53.4,-19.6],[136.7,-19.6],[19.2,-19.7],[-65.8,-19.8],[124.3,-19.8],[-45.7,-19.9],[144.3,-19.9],[26.9,-20],[-58.1,-20],[131.9,-20.1],[47,-20.1],[14.5,-20.2],[119.5,-20.3],[34.6,-20.3],[-50.4,-20.3],[139.6,-20.4],[22.2,-20.5],[-62.8,-20.5],[127.2,-20.6],[-42.8,-20.6],[147.3,-20.7],[29.8,-20.8],[-55.2,-20.8],[134.9,-20.9],[17.4,-20.9],[-67.6,-21],[122.5,-21],[-47.5,-21.1],[142.5,-21.1],[25.1,-21.2],[-59.9,-21.3],[130.1,-21.3],[45.1,-21.3],[117.7,-21.5],[32.7,-21.5],[-52.2,-21.5],[137.8,-21.6],[20.3,-21.7],[-64.6,-21.7],[125.4,-21.8],[-44.6,-21.8],[145.5,-21.9],[28,-22],[-57,-22],[133.1,-22.1],[15.6,-22.2],[-69.4,-22.2],[120.7,-22.2],[-49.3,-22.3],[140.7,-22.4],[23.3,-22.5],[-61.7,-22.5],[128.3,-22.5],[43.3,-22.6],[148.4,-22.6],[115.9,-22.7],[30.9,-22.7],[-54,-22.8],[136,-22.8],[18.5,-22.9],[-66.4,-23],[123.6,-23],[-46.4,-23.1],[143.6,-23.1],[26.2,-23.2],[-58.8,-23.2],[131.3,-23.3],[46.3,-23.3],[118.9,-23.5],[33.9,-23.5],[-51.1,-23.5],[138.9,-23.6],[21.5,-23.7],[-63.5,-23.7],[126.5,-23.8],[146.6,-23.9],[114.1,-23.9],[29.1,-24],[-55.9,-24],[134.2,-24.1],[16.7,-24.2],[-68.3,-24.2],[121.8,-24.2],[-48.2,-24.3],[141.8,-24.4],[24.4,-24.5],[-60.6,-24.5],[129.4,-24.5],[44.5,-24.6],[149.5,-24.6],[117,-24.7],[32.1,-24.7],[-52.9,-24.8],[137.1,-24.8],[19.7,-24.9],[-65.3,-25],[124.7,-25],[144.8,-25.1],[27.3,-25.2],[-57.7,-25.3],[132.4,-25.3],[14.9,-25.4],[152.4,-25.4],[-70.1,-25.4],[120,-25.5],[-50,-25.5],[140,-25.6],[22.6,-25.7],[-62.4,-25.7],[127.6,-25.8],[147.7,-25.9],[115.2,-26],[30.2,-26],[-54.7,-26],[135.3,-26.1],[17.8,-26.2],[-67.1,-26.2],[122.9,-26.3],[143,-26.4],[25.5,-26.5],[-59.5,-26.5],[130.6,-26.6],[150.6,-26.7],[118.2,-26.8],[-51.8,-26.8],[138.2,-26.9],[20.8,-27],[-64.2,-27],[125.8,-27.1],[145.9,-27.2],[28.4,-27.3],[-56.5,-27.3],[133.5,-27.4],[16,-27.5],[-68.9,-27.5],[121.1,-27.5],[-48.9,-27.6],[141.1,-27.7],[23.7,-27.8],[-61.3,-27.8],[128.8,-27.8],[148.8,-28],[116.4,-28],[31.4,-28.1],[-53.6,-28.1],[136.4,-28.1],[19,-28.2],[-66,-28.3],[124,-28.3],[144.1,-28.4],[26.6,-28.6],[-58.4,-28.6],[131.7,-28.6],[151.7,-28.8],[-70.8,-28.8],[119.3,-28.8],[-50.7,-28.9],[139.3,-28.9],[21.9,-29],[-63.1,-29.1],[126.9,-29.1],[147,-29.2],[29.6,-29.4],[-55.4,-29.4],[134.6,-29.4],[17.2,-29.5],[-67.8,-29.6],[122.2,-29.6],[142.3,-29.7],[24.8,-29.8],[-60.2,-29.9],[129.9,-29.9],[149.9,-30.1],[117.5,-30.1],[-52.5,-30.2],[137.5,-30.2],[20.1,-30.3],[-64.9,-30.4],[125.1,-30.4],[145.2,-30.6],[27.7,-30.7],[-57.2,-30.7],[132.8,-30.7],[152.9,-30.9],[-69.6,-30.9],[120.4,-30.9],[140.5,-31.1],[23,-31.2],[-62,-31.2],[128.1,-31.3],[148.1,-31.4],[115.7,-31.4],[-54.3,-31.5],[135.7,-31.6],[18.3,-31.7],[-66.7,-31.7],[123.3,-31.8],[143.4,-31.9],[25.9,-32],[-59,-32],[151,-32.2],[-71.4,-32.2],[118.6,-32.3],[138.6,-32.4],[21.2,-32.5],[-63.8,-32.5],[146.3,-32.7],[-56.1,-32.8],[-68.5,-33],[121.5,-33.1],[141.6,-33.2],[24.1,-33.3],[-60.9,-33.4],[149.2,-33.5],[116.8,-33.6],[136.8,-33.7],[19.4,-33.9],[-65.6,-33.9],[144.5,-34.1],[-57.9,-34.2],[-70.3,-34.4],[139.8,-34.6],[-62.7,-34.7],[147.4,-34.9],[-67.4,-35.3],[142.7,-35.4],[-59.7,-35.6],[-72.1,-35.8],[-64.5,-36.1],[145.6,-36.3],[-56.8,-36.5],[-69.2,-36.7],[140.9,-36.9],[-61.5,-37],[148.5,-37.2],[-66.3,-37.5],[143.8,-37.7],[-58.6,-37.9],[-71,-38.1],[-63.4,-38.4],[146.7,-38.6],[-68.1,-39],[174.5,-39.1],[-72.8,-39.5],[-65.2,-39.9],[-69.9,-40.5],[172.7,-40.6],[147.9,-41],[-67,-41.4],[-71.7,-42],[-64,-42.3],[146,-42.5],[-68.8,-42.9],[-65.9,-43.9],[-70.6,-44.5],[167.2,-45.2],[-67.7,-45.5],[-72.4,-46.1],[-69.5,-47.1],[-74.2,-47.7],[-66.5,-48.1],[-71.3,-48.8],[-68.4,-49.9],[-73.1,-50.6],[-70.2,-51.7],[-72,-53.5],[-69,-54.7]]};var mn=Math.PI/180,an=[18.675555,45.560846],Xi=4,Ro=Math.cos(45*mn),To=Xi*180/Math.PI,sh=0.00003629632318246162,ms=0.00003598934715324264,v3=7,hr=1+Math.log(1/(ms*v3))/Math.log(500),ur=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),Co=(e,t,i)=>e+(t-e)*i,wt=(e,t,i)=>{let s=ur((i-e)/(t-e));return s*s*(3-2*s)};var Po=(e,t,i,s)=>e+(t-e)*(1-Math.exp(-i*s));function hi(e,t,i=1,s=new P){let r=t*mn,a=e*mn;return s.set(i*Math.cos(r)*Math.sin(a),i*Math.sin(r),i*Math.cos(r)*Math.cos(a))}function wi(e,t){return[(e-an[0])*Xi*Ro,-(t-an[1])*Xi]}function na(e){return e<1?Math.pow(22.5,e-1):Math.pow(500,e-1)}function kn(e=1){let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var As={value:0},dr={value:new P(0,1,0)},gs={value:new Fe(-0.12,0.38)},lr=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),fr=`
uniform float uBend;
vec3 sphereNormal(vec2 xz){
  float lat = (${lr(an[1])} - xz.y / ${lr(Xi)}) * 0.017453292519943295;
  float dl = xz.x / ${lr(Xi*Ro)} * 0.017453292519943295;
  float la0 = ${lr(an[1]*mn)};
  float cl = cos(lat), sl = sin(lat), cd = cos(dl);
  return vec3(cl * sin(dl), sl * sin(la0) + cl * cd * cos(la0), cl * cd * sin(la0) - sl * cos(la0));
}
vec3 bendPos(vec3 p){
  if (uBend < 1e-4) return p;
  vec3 e = sphereNormal(p.xz);
  return mix(p, e * (${lr(To)} + p.y) - vec3(0.0, ${lr(To)}, 0.0), uBend);
}
`,nh=512,ih=256;function tf(){let e=new Uint8Array(nh*ih*4),t=new os(e,nh,ih,Ln,Mn);t.colorSpace=Sn,t.minFilter=kt,t.magFilter=kt,t.generateMipmaps=!1,t.wrapS=ni,t.needsUpdate=!0;function i(s){let r=nh,a=ih,o;try{let v=document.createElement("canvas");v.width=r,v.height=a;let A=v.getContext("2d",{willReadFrequently:!0});A.imageSmoothingEnabled=!0,A.imageSmoothingQuality="high",A.drawImage(s,0,0,r,a),o=A.getImageData(0,0,r,a).data}catch{return}let c=new Float32Array(r*a);for(let v=0;v<r*a;v++)c[v]=o[v*4]/255;let l=new Float32Array(r*a),h=(v,A,m)=>{for(let E=0;E<a;E++){let T=(90-(E+0.5)*180/a)*mn,b=Math.min(r>>2,Math.max(1,Math.round(m/Math.max(Math.cos(T),0.18)))),S=E*r,R=0;for(let C=-b;C<=b;C++)R+=v[S+(C+r)%r];for(let C=0;C<r;C++)A[S+C]=R/(2*b+1),R+=v[S+(C+b+1)%r]-v[S+(C-b+r)%r]}},u=(v,A,m)=>{for(let E=0;E<r;E++)for(let T=0;T<a;T++){let b=0,S=0;for(let R=Math.max(0,T-m);R<=Math.min(a-1,T+m);R++)b+=v[R*r+E],S++;A[T*r+E]=b/S}},f=(v)=>{let A=Float32Array.from(c);for(let m=0;m<2;m++)h(A,l,v),u(l,A,Math.max(1,Math.round(v)));return A},d=f(0.7),p=f(2),g=f(8);for(let v=0;v<a;v++){let A=(a-1-v)*r;for(let m=0;m<r;m++){let E=v*r+m,T=(A+m)*4;e[T]=Math.round(p[E]*255),e[T+1]=Math.round(g[E]*255),e[T+2]=Math.round(d[E]*255),e[T+3]=255}}t.needsUpdate=!0}return{texture:t,fill:i}}var Io=`
uniform sampler2D uField;
float eHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float eNoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(eHash(i), eHash(i + vec2(1.0, 0.0)), f.x), mix(eHash(i + vec2(0.0, 1.0)), eHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// ocean: dubina iz udaljenosti od kopna; mu = kosinus kuta gledanja (rub je tamniji, središte bistrije)
vec3 oceanTone(vec4 F, float mu){
  float shelf = smoothstep(0.02, 0.42, F.r);
  float coastal = smoothstep(0.04, 0.5, F.b);
  vec3 c = mix(vec3(0.0042, 0.0095, 0.029), vec3(0.0075, 0.018, 0.048), smoothstep(0.0, 0.3, F.g));
  c = mix(c, vec3(0.014, 0.046, 0.098), shelf * 0.85);
  c = mix(c, vec3(0.020, 0.062, 0.118), coastal * 0.35);
  return c * (0.7 + 0.45 * mu * mu);
}
// kopno: obalni pojas, kontinentalna unutrašnjost, hladnije visoke širine, blaga tonska varijacija
vec3 landTone(vec4 F, float lat, float lon){
  float inland = smoothstep(0.62, 0.97, F.g);
  vec3 c = mix(vec3(0.046, 0.067, 0.102), vec3(0.029, 0.044, 0.073), inland);
  vec2 q = vec2(lon * cos(lat), lat) * 57.29578;
  float t = eNoise(q * 0.33) * 0.65 + eNoise(q * 1.3) * 0.35;
  c *= 0.86 + 0.28 * t;
  c = mix(c, vec3(0.074, 0.092, 0.126), smoothstep(1.03, 1.2, abs(lat)) * 0.75);
  return c;
}
// atmosferska izmaglica nad diskom (ostatak raspršenja koji ljuska atmosfere ne pokriva)
vec3 hazeTone(float mu, float ndl){
  float fres = pow(1.0 - mu, 2.6);
  return vec3(0.16, 0.42, 1.0) * fres * (0.1 + 0.8 * smoothstep(-0.2, 0.6, ndl));
}
// sumrak: tanki zlatni rub prelazi u ljubičastoplavu pa u noć
vec3 twilightTone(float ndl, float mid, float wid){
  float gold = exp(-pow((ndl - mid) / wid, 2.0));
  float blue = exp(-pow((ndl - mid + wid * 1.4) / (wid * 1.2), 2.0));
  return vec3(0.34, 0.15, 0.06) * gold + vec3(0.05, 0.05, 0.13) * blue;
}
`;function Gt({count:e,color:t="#7fa2ff",core:i="#ffffff",size:s=1,additive:r=!0,depthTest:a=!0,bend:o=!1,nightOnly:c=!1}){let l=new it,h=new Float32Array(e*3),u=new Float32Array(e).fill(1),f=new Float32Array(e).fill(1),d=new Float32Array(e);l.setAttribute("position",new ot(h,3)),l.setAttribute("aAlpha",new ot(u,1)),l.setAttribute("aSize",new ot(f,1)),l.setAttribute("aWake",new ot(d,1));let p={uColor:{value:new Oe(t)},uCore:{value:new Oe(i)},uSize:{value:s},uPR:{value:1},uOpacity:{value:1},uMax:{value:40},uMin:{value:0},uFall:{value:2},uWake:{value:1},uTime:{value:0},uFlick:{value:0},uBend:As,uSunMap:dr,uDayEdge:gs},g=new Mt({uniforms:p,transparent:!0,depthWrite:!1,depthTest:a,blending:r?Ht:ti,vertexShader:`
      attribute float aAlpha; attribute float aSize; attribute float aWake;
      uniform float uSize; uniform float uPR; uniform float uMax; uniform float uMin; uniform float uFall; uniform float uWake; uniform float uTime; uniform float uFlick;
      varying float vA; varying float vPx;
      ${o||c?fr:""}
      ${c?"uniform vec3 uSunMap; uniform vec2 uDayEdge;":""}
      void main(){
        vec4 mv = modelViewMatrix * vec4(${o?"bendPos(position)":"position"}, 1.0);
        float sc = length(modelMatrix[0].xyz);
        float px = aSize * uSize * uPR * 300.0 * sc / max(0.5, -mv.z);
        float lo = uMin * uPR;
        float al = aAlpha;
        // ispod najmanje veličine točka gubi svjetlinu (uFall 2 = razmjerno površini; manje za točkasta svjetla)
        if (px < lo) { al *= pow(px / lo, uFall); px = lo; }
        al *= smoothstep(aWake, aWake + 0.06, uWake);
        ${c?`// svjetla se pale tek kad nad njih padne noć (sumrak putuje preko karte)
        al *= 1.0 - smoothstep(uDayEdge.x, uDayEdge.y, dot(sphereNormal(position.xz), uSunMap) + 0.035 + aWake * 0.06);`:""}
        if (uFlick > 0.0) {
          float k = fract(sin(aWake * 913.7 + floor(uTime * 0.3 + aWake * 17.0) * 7.13) * 43758.5453);
          al *= 1.0 - uFlick * step(0.86, k);
        }
        vA = al;
        gl_PointSize = min(px, uMax * uPR);
        vPx = gl_PointSize;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uCore; uniform float uOpacity; varying float vA; varying float vPx;
      void main(){
        if (vA < 0.004) discard;
        float d = length(gl_PointCoord - 0.5);
        // točka od 1–3 px: profil sjaja bi se uzorkovao izvan središta (svjetlo bi gotovo nestalo) — tada je pun disk
        float k = clamp((vPx - 1.5) / 3.0, 0.0, 1.0);
        if (d > mix(0.75, 0.5, k)) discard;
        float halo = pow(max(1.0 - d * 2.0, 0.0), 2.0);
        float core = smoothstep(0.18, 0.0, d);
        float prof = mix(0.85, halo * 0.7 + core, k);
        gl_FragColor = vec4(mix(uColor, uCore, mix(0.35, core, k)), prof * vA * uOpacity);
      }`}),v=new ki(l,g);return v.frustumCulled=!1,{points:v,pos:h,alpha:u,size:f,wake:d,uniforms:p,geometry:l,material:g}}function Do(e="#8aa6ff",t=1,i=!1){return new Un({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:i?Ht:ti})}var nf=1.032;function sf({geo:e,lite:t,landUrl:i}){let s=new Lt;s.name="planet";let r=new Lt;s.add(r);let a=an[1]*mn,o=an[0]*mn,c=hi(an[0],an[1]),l=new P(-Math.sin(a)*Math.sin(o),Math.cos(a),-Math.sin(a)*Math.cos(o)).normalize(),h=new P().crossVectors(l,c).normalize(),u=new nt().makeBasis(h,c,l),f=new nt().makeBasis(new P(1,0,0),new P(0,1,0),new P(0,0,-1));s.quaternion.setFromRotationMatrix(new nt().multiplyMatrices(f,u.clone().transpose()));let d=tf(),p=new Wi().load(i,(D)=>d.fill(D.image));p.colorSpace=Sn,p.format=Js,p.minFilter=kt,p.generateMipmaps=!1,p.wrapS=ni;let g={uLand:{value:p},uField:{value:d.texture},uSun:{value:new P(0.78,0.46,-0.95).normalize()},uTime:{value:0},uAlpha:{value:1},uDots:{value:1},uNight:{value:1}},v=new Mt({uniforms:g,transparent:!0,vertexShader:`
      varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      void main(){
        vObj = position;
        vN = normalize(mat3(modelMatrix) * position);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uLand; uniform vec3 uSun; uniform float uTime; uniform float uAlpha; uniform float uDots; uniform float uNight;
      varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      ${Io}
      void main(){
        vec3 o = normalize(vObj);
        float lat = asin(clamp(o.y, -1.0, 1.0));
        float lon = atan(o.x, o.z);
        vec2 uv = vec2((lon + 3.14159265) / 6.2831853, (lat + 1.5707963) / 3.14159265);
        float land = smoothstep(0.25, 0.75, texture2D(uLand, uv).r);
        vec4 F = texture2D(uField, uv);
        // obala: kopno uz more — tamo su gradovi gušći
        float coast = land * (1.0 - smoothstep(0.55, 0.95, F.b));
        // digitalna matrica točaka na kopnu (razmak ~0,36°, ispravljen za širinu)
        vec2 g = vec2(lon * cos(lat), lat) / (0.36 * 0.0174533);
        vec2 f = fract(g) - 0.5;
        float aa = fwidth(length(f)) * 1.5;
        float dots = (1.0 - smoothstep(0.17 - aa, 0.17 + aa, length(f))) * land;
        vec3 n = normalize(vN);
        vec3 v = normalize(cameraPosition - vW);
        float mu = max(dot(n, v), 0.0);
        float ndl = dot(n, uSun);
        float day = smoothstep(-0.12, 0.38, ndl);
        vec3 landC = landTone(F, lat, lon) + dots * uDots * vec3(0.10, 0.2, 0.42);
        vec3 col = mix(oceanTone(F, mu), landC, land);
        col *= 0.2 + 1.35 * day;
        col += twilightTone(ndl, 0.03, 0.075) * (0.3 + 0.7 * land) * 0.42;
        // odsjaj sunca na moru: uska jezgra i široki mekani trag, jači pod kosim kutom (Fresnel)
        vec3 h = normalize(uSun + v);
        float nh = max(dot(n, h), 0.0);
        float fr = 0.02 + 0.98 * pow(1.0 - mu, 5.0);
        float glint = (pow(nh, 110.0) * 0.8 + pow(nh, 16.0) * 0.07) * (0.35 + 2.6 * fr);
        col += vec3(0.62, 0.72, 0.9) * glint * (1.0 - land) * smoothstep(-0.02, 0.22, ndl) * 0.62;
        // noćna strana: matrica i rijetka topla svjetla (gušća uz obalu)
        float night = 1.0 - smoothstep(-0.06, 0.2, ndl);
        col += dots * uDots * vec3(0.08, 0.16, 0.38) * (1.0 - day) * 0.45;
        float lit = step(1.0 - (0.07 + 0.38 * coast), eHash(floor(g))) * dots;
        col += vec3(1.0, 0.6, 0.26) * lit * night * 0.6 * uNight;
        col += hazeTone(mu, ndl);
        gl_FragColor = vec4(col, uAlpha);
      }`}),A=new yt(new ir(1,t?96:160,t?64:112),v);A.renderOrder=0,r.add(A);let m={uSun:g.uSun,uAlpha:{value:1}},E=new yt(new ir(nf,t?72:112,t?48:72),new Mt({uniforms:m,side:Qn,transparent:!0,depthWrite:!1,blending:Ht,vertexShader:`
        varying vec3 vW; varying vec3 vC; varying float vR;
        void main(){
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vC = modelMatrix[3].xyz;
          vR = length(modelMatrix[0].xyz);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform vec3 uSun; uniform float uAlpha;
        varying vec3 vW; varying vec3 vC; varying float vR;
        #define NV ${t?7:10}
        const float RA = ${nf.toFixed(3)};
        const float HR = 0.0072;
        const float HM = 0.0024;
        const vec3 BR = vec3(2.1, 4.9, 11.6);
        const float BM = 2.2;
        vec2 rsi(vec3 ro, vec3 rd, float r){
          float b = dot(ro, rd), c = dot(ro, ro) - r * r, d = b * b - c;
          if (d < 0.0) return vec2(1e5, -1e5);
          d = sqrt(d);
          return vec2(-b - d, -b + d);
        }
        // optička dubina prema suncu bez unutarnje petlje: Chapmanova funkcija (aproksimacija Schüler 2012)
        float chU(float X, float c){ float k = sqrt(1.5707963 * X); return k / ((k - 1.0) * c + 1.0); }
        float lightOD(float r, float c, float H){
          if (c >= 0.0) return H * exp(-(r - 1.0) / H) * chU(r / H, c);
          float rt = r * sqrt(max(1.0 - c * c, 0.0)); // najniža točka zrake prema suncu
          return H * (2.0 * sqrt(1.5707963 * rt / H) * exp(-max(rt - 1.0, -0.02) / H) - exp(-(r - 1.0) / H) * chU(r / H, -c));
        }
        void main(){
          vec3 ro = (cameraPosition - vC) / vR;
          vec3 rd = normalize(vW - cameraPosition);
          vec2 ta = rsi(ro, rd, RA);
          float t0 = max(ta.x, 0.0), t1 = ta.y;
          vec2 tp = rsi(ro, rd, 1.0);
          bool hit = tp.x < tp.y && tp.x > 0.0;
          if (hit) t1 = min(t1, tp.x);
          if (t1 <= t0) discard;
          // nad diskom je put kroz atmosferu kratak i jednoličan: dovoljno je manje uzoraka
          float inc = hit ? max(-dot(normalize(ro + rd * tp.x), rd), 0.0) : 0.0;
          int n = hit ? int(mix(float(NV), 4.0, smoothstep(0.12, 0.5, inc))) : NV;
          float ds = (t1 - t0) / float(n);
          vec3 sumR = vec3(0.0); vec3 sumM = vec3(0.0);
          float odR = 0.0, odM = 0.0;
          for (int i = 0; i < NV; i++){
            if (i >= n) break;
            vec3 p = ro + rd * (t0 + ds * (float(i) + 0.5));
            float r = length(p);
            float dR = exp(-(r - 1.0) / HR) * ds, dM = exp(-(r - 1.0) / HM) * ds;
            odR += dR; odM += dM;
            // sjena planeta: mekani rub (polusjena) umjesto tvrdog praga
            float along = dot(p, uSun);
            float lit = along > 0.0 ? 1.0 : smoothstep(0.985, 1.012, length(p - uSun * along));
            if (lit <= 0.0) continue;
            float cz = along / r;
            // ekstinkcija je ublažena (×0,55): pri tangencijalnom pogledu rub ostaje plavobijel, a ne maslinast
            vec3 tau = (BR * (odR + lightOD(r, cz, HR)) + BM * 1.1 * (odM + lightOD(r, cz, HM))) * 0.55;
            vec3 att = exp(-tau) * lit;
            sumR += dR * att; sumM += dM * att;
          }
          float c = dot(rd, uSun);
          float pR = 0.0597 * (1.0 + c * c);
          const float g = 0.78;
          float pM = 0.1194 * ((1.0 - g * g) * (1.0 + c * c)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * c, 1.5));
          vec3 L = 15.0 * (sumR * BR * pR + sumM * BM * pM);
          // nad diskom planeta raspršenje ostaje suzdržano (tamna kugla, čitljiva matrica);
          // prema rubu diska raste do pune vrijednosti pa između diska i ruba nema stepenice
          if (hit) L *= mix(0.45, 1.0, exp(-inc * 9.0));
          // tihi noćni sjaj gornje atmosfere: rub se nazire i na tamnoj strani
          float hmin = length(ro + rd * max(-dot(ro, rd), 0.0)) - 1.0;
          L += vec3(0.035, 0.07, 0.2) * exp(-pow((hmin - 0.012) / 0.007, 2.0)) * (hit ? 0.0 : 1.0);
          L = 1.0 - exp(-L * 1.15);
          gl_FragColor = vec4(L, uAlpha);
        }`}));E.renderOrder=1,s.add(E);let T=[],b=new P,S=new P,R=(D,F)=>{for(let G of D)for(let L=0;L<G.length-1;L++)hi(G[L][0],G[L][1],F,b),hi(G[L+1][0],G[L+1][1],F,S),T.push(b.x,b.y,b.z,S.x,S.y,S.z)};e.europe.forEach((D)=>R(D.rings,1.0012)),R(e.croatia,1.0016);let C=new it().setAttribute("position",new Qe(T,3)),_=Do("#5b7bd8",0.3,!0);r.add(new Jt(C,_));let M=hi(an[0],an[1]),B=Gt({count:1,color:"#ffb23f",core:"#fff3d6",size:0.05});return M.clone().multiplyScalar(1.004).toArray(B.pos,0),B.uniforms.uMin.value=4,r.add(B.points),{group:s,spin:r,sun:g.uSun.value,land:p,field:d.texture,update(D){if(s.visible=D.alpha>0.002,!s.visible)return;r.rotation.y=D.spin,g.uTime.value=D.time,g.uAlpha.value=D.alpha,g.uNight.value=1-D.dive,v.depthWrite=D.alpha>0.5,g.uDots.value=0.7+0.3*D.net,m.uAlpha.value=D.alpha*(1-D.dive*0.85),_.opacity=D.alpha*(0.12+0.3*D.dive+0.1*D.net)*(1-D.finale*0.5),B.uniforms.uPR.value=D.pr,B.uniforms.uOpacity.value=D.alpha*(0.35+0.65*Math.max(D.finale,D.net*0.6)),B.size[0]=(1+D.finale*1.8)*(0.85+0.15*Math.sin(D.time*2.2)),B.geometry.attributes.aSize.needsUpdate=!0},osijekWorld(D=new P){return D.copy(M).multiplyScalar(1.02).applyMatrix4(r.matrixWorld)},dispose(){A.geometry.dispose(),v.dispose(),p.dispose(),d.texture.dispose(),E.geometry.dispose(),E.material.dispose(),C.dispose(),_.dispose(),B.geometry.dispose(),B.material.dispose()}}}var rf=`
  attribute vec3 aA; attribute vec3 aB; attribute vec2 aTH; attribute vec4 aLife; attribute vec3 aPulse;
  uniform float uTime;
  vec3 arcPos(float t){
    float d = clamp(dot(aA, aB), -1.0, 1.0);
    float th = acos(d);
    vec3 p = th < 1e-4 ? aA : (sin((1.0 - t) * th) * aA + sin(t * th) * aB) / sin(th);
    return normalize(p) * (1.0 + aTH.y * sin(3.14159265 * t));
  }
`;function af({geo:e,lite:t}){let i=kn(4242),s=t?72:160,r=t?26:40,a=[hi(an[0],an[1])];e.capitals.forEach(([,ae,ge])=>a.push(hi(ae,ge))),e.cities.slice(1).forEach(([,ae,ge])=>a.push(hi(ae,ge)));let o=t?2:1;for(let ae=0;ae<e.nodes.length;ae+=o)a.push(hi(e.nodes[ae][0],e.nodes[ae][1]));let c=a.map((ae,ge)=>ge).filter((ae)=>a[ae].angleTo(a[0])<0.42),l=r*2,h=s*l,u=new Float32Array(h*3),f=new Float32Array(h*3),d=new Float32Array(h*2),p=new Float32Array(h*4),g=new Float32Array(h*3);for(let ae=0;ae<s;ae++)for(let ge=0;ge<r;ge++){let ke=ae*l+ge*2;d[ke*2]=ge/r,d[(ke+1)*2]=(ge+1)/r}let v=new it,A=(ae,ge)=>new ot(ae,ge).setUsage(dl),m={aA:A(u,3),aB:A(f,3),aTH:A(d,2),aLife:A(p,4),aPulse:A(g,3)};Object.entries(m).forEach(([ae,ge])=>v.setAttribute(ae,ge)),v.setAttribute("position",new ot(new Float32Array(h*3),3)),v.boundingSphere=new Yt(new P,2);let E={uTime:{value:0},uOpacity:{value:1},uConv:{value:0},uBase:{value:new Oe("#5a7fff")},uHot:{value:new Oe("#dfe8ff")},uGold:{value:new Oe("#ffb23f")}},T=new Mt({uniforms:E,transparent:!0,depthWrite:!1,blending:Ht,vertexShader:`${rf}
      varying float vA; varying float vG; varying float vTo;
      void main(){
        float t = aTH.x;
        vec3 p = arcPos(t);
        float age = uTime - aLife.x;
        float head = clamp(age / aLife.y, 0.0, 1.0);
        float fade = 1.0 - clamp((age - aLife.y - aLife.z) / aLife.w, 0.0, 1.0);
        float drawn = smoothstep(head + 0.02, head - 0.02, t);
        float live = step(0.0, age) * fade;
        // signal: impulsi putuju nakon iscrtavanja; sjaj vrha za vrijeme crtanja
        float pp = fract(max(age - aLife.y, 0.0) * aPulse.x + aPulse.y);
        float g = exp(-pow((t - pp) * 16.0, 2.0)) * step(aLife.y, age);
        g += exp(-pow((t - head) * 22.0, 2.0)) * (1.0 - step(1.0, head)) * 1.4;
        vA = drawn * live * aPulse.z;
        vG = g * live;
        vTo = aTH.y < 0.0 ? 1.0 : 0.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p * 1.003, 1.0);
      }`,fragmentShader:`
      uniform vec3 uBase; uniform vec3 uHot; uniform float uOpacity;
      varying float vA; varying float vG;
      void main(){
        vec3 c = mix(uBase, uHot, clamp(vG, 0.0, 1.0));
        float a = (vA * 0.6 + vG * 1.1 * vA) * uOpacity;
        if (a < 0.003) discard;
        gl_FragColor = vec4(c * a, a);
      }`}),b=new Jt(v,T);b.frustumCulled=!1,b.renderOrder=2;let S=2,R=s*S,C=new Float32Array(R*3),_=new Float32Array(R*3),M=new Float32Array(R*2),B=new Float32Array(R*4),D=new Float32Array(R*3),F=new Float32Array(R);for(let ae=0;ae<R;ae++)F[ae]=ae%S;let G=new it,L={aA:A(C,3),aB:A(_,3),aTH:A(M,2),aLife:A(B,4),aPulse:A(D,3)};Object.entries(L).forEach(([ae,ge])=>G.setAttribute(ae,ge)),G.setAttribute("aK",new ot(F,1)),G.setAttribute("position",new ot(new Float32Array(R*3),3)),G.boundingSphere=new Yt(new P,2);let W={...E,uPR:{value:1},uSize:{value:0.022}},ee=new Mt({uniforms:W,transparent:!0,depthWrite:!1,blending:Ht,vertexShader:`${rf}
      attribute float aK; uniform float uPR; uniform float uSize; varying float vA;
      void main(){
        float age = uTime - aLife.x;
        float head = clamp(age / aLife.y, 0.0, 1.0);
        float fade = 1.0 - clamp((age - aLife.y - aLife.z) / aLife.w, 0.0, 1.0);
        float live = step(0.0, age) * fade * aPulse.z;
        float t = aK < 0.5 ? fract(max(age - aLife.y, 0.0) * aPulse.x + aPulse.y) : head;
        float on = aK < 0.5 ? step(aLife.y, age) : (1.0 - step(1.0, head));
        vA = live * on * (0.35 + 0.65 * sin(3.14159 * t));
        vec4 mv = modelViewMatrix * vec4(arcPos(t) * 1.003, 1.0);
        float sc = length(modelMatrix[0].xyz);
        gl_PointSize = clamp(uSize * uPR * 300.0 * sc / max(0.5, -mv.z), 1.5 * uPR, 9.0 * uPR) * (aK < 0.5 ? 1.0 : 1.25);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uOpacity; varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = (pow(1.0 - d * 2.0, 2.0) * 0.7 + smoothstep(0.2, 0.0, d)) * vA * uOpacity;
        gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a, a);
      }`}),V=new ki(G,ee);V.frustumCulled=!1,V.renderOrder=3;let H=new Lt;H.add(b,V);let k=Array.from({length:s},()=>({end:0})),N=new P,ie=new P,Ce=new P,Me=new P,et=new nt,We=0,Y=new Set,ue=(ae)=>Me.copy(N).sub(ae).normalize().dot(ae)>0.08;function fe(ae,ge,ke=40){for(let He=0;He<ke;He++){let st=i()*a.length|0,at=a[st];if(!ue(at))continue;if(ae&&at.angleTo(ae)>ge)continue;return st}return 1+(i()*(a.length-1)|0)}function Xe(ae,ge,ke=!1){let He;if(We>0.5&&i()<We*0.6)He=c[i()*c.length|0];else He=fe(i()<0.7?Ce:null,0.95);let st;if(i()<We*0.85)st=0;else{let ve=[0.12,0.35,0.8,1.2][i()*4|0];st=fe(a[He],ve)}if(st===He)st=He===0?1:0;let at=a[He],ut=a[st],Q=at.angleTo(ut),de=Math.min(0.075,0.008+Q*0.07)*(0.7+i()*0.6),I=i()<0.22,Je=0.5+Q*0.9+i()*0.5,qe=I?14+i()*18:2.2+i()*6,Te=0.8+i()*1.1,y=ke?ge-i()*(Je+qe):ge+i()*0.4,x=0.22+i()*0.5,U=i(),K=(I?0.35:0.55+i()*0.45)*(st===0?1.25:1);k[ae].end=y+Je+qe+Te;let he=(ve,Re,te,oe,Ee,Be,Pe,ye)=>{for(let ne=Be;ne<Be+Pe;ne++){if(at.toArray(ve,ne*3),ut.toArray(Re,ne*3),te[ne*2+1]=de,!ye)te[ne*2]=0;oe[ne*4]=y,oe[ne*4+1]=Je,oe[ne*4+2]=qe,oe[ne*4+3]=Te,Ee[ne*3]=x,Ee[ne*3+1]=U,Ee[ne*3+2]=K}};he(u,f,d,p,g,ae*l,l,!0),he(C,_,M,B,D,ae*S,S,!1),Y.add(ae)}function J(){if(!Y.size)return;for(let ae of Y){for(let ge of Object.values(m))ge.addUpdateRange(ae*l*ge.itemSize,l*ge.itemSize);for(let ge of Object.values(L))ge.addUpdateRange(ae*S*ge.itemSize,S*ge.itemSize)}for(let ae of[...Object.values(m),...Object.values(L)])ae.needsUpdate=!0;Y=new Set}function we(ae,ge){et.copy(ge.matrixWorld).invert(),N.copy(ae.position).applyMatrix4(et),ae.getWorldDirection(ie),ie.transformDirection(et);let ke=N.dot(ie),He=N.lengthSq()-1,st=ke*ke-He;if(st>0)Ce.copy(ie).multiplyScalar(-ke-Math.sqrt(st)).add(N).normalize();else Ce.copy(ie).multiplyScalar(-ke).add(N).normalize()}let _e=!1;return{group:H,update(ae){if(H.visible=ae.alpha>0.002,!H.visible)return;if(We=ae.conv,we(ae.camera,ae.frame),!_e){_e=!0;for(let ge=0;ge<s;ge++)Xe(ge,ae.time,!0)}else{let ge=6;for(let ke=0;ke<s&&ge>0;ke++)if(ae.time>k[ke].end)Xe(ke,ae.time),ge--}J(),E.uTime.value=ae.time,E.uOpacity.value=ae.alpha,E.uConv.value=We,W.uPR.value=ae.pr},dispose(){v.dispose(),T.dispose(),G.dispose(),ee.dispose()}}}var ji=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),pr=[-30,25,60,75];function y3(e){let t=[],i=[],s=[],r=[],a=[],o=[];e.forEach((l,h)=>{let u=0,f=[0];for(let d=1;d<l.length;d++)u+=Math.hypot(l[d][0]-l[d-1][0],l[d][1]-l[d-1][1]),f.push(u);for(let d=0;d<l.length-1;d++){let p=l[d],g=l[d+1],v=f[d]/u,A=f[d+1]/u,m=[[p,g,-1,0,v],[p,g,1,0,v],[g,p,-1,1,A],[g,p,-1,1,A],[p,g,1,0,v],[g,p,1,1,A]];for(let[E,T,b,S,R]of m)t.push(E[0],0.05,E[1]),i.push(T[0],0.05,T[1]),s.push(b),r.push(S),a.push(R),o.push(h===0?0:1)}});let c=new it;return c.setAttribute("position",new Qe(t,3)),c.setAttribute("aQ",new Qe(i,3)),c.setAttribute("aSide",new Qe(s,1)),c.setAttribute("aEnd",new Qe(r,1)),c.setAttribute("aU",new Qe(a,1)),c.setAttribute("aIsl",new Qe(o,1)),c.boundingSphere=new Yt(new P,400),c}function of({geo:e,lite:t,landTex:i,fieldTex:s,landEuUrl:r}){let a=kn(11),o=new Lt;o.name="europa";let c=[],l=(Q)=>(c.push(Q),Q),h=new Wi,f={uLandW:{value:i},uLandE:{value:((Q)=>{let de=l(h.load(Q));return de.colorSpace=Sn,de.format=Js,de.generateMipmaps=!1,de.minFilter=kt,de})(r)},uField:{value:s},uBend:As,uSunMap:dr,uDayEdge:gs,uAlpha:{value:0},uDots:{value:1},uGrat:{value:0},uNightL:{value:1},uDim:{value:0}},d=-140,p=118,g=-118,v=84,A=l(new Bn(p-d,v-g,t?96:140,t?76:110).rotateX(-Math.PI/2).translate((d+p)/2,0,(g+v)/2)),m=l(new Mt({uniforms:f,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8,vertexShader:`
      ${fr}
      varying vec2 vXZ; varying vec3 vW;
      void main(){
        vXZ = position.xz;
        vec4 w = modelMatrix * vec4(bendPos(position), 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uLandW; uniform sampler2D uLandE; uniform vec3 uSunMap; uniform vec2 uDayEdge;
      uniform float uAlpha; uniform float uDots; uniform float uGrat; uniform float uNightL; uniform float uDim;
      ${fr}
      ${Io}
      varying vec2 vXZ; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float dotField(vec2 g, float r){
        vec2 q = fract(g) - 0.5;
        float aa = fwidth(length(q)) * 1.2;
        return 1.0 - smoothstep(r - aa, r + aa, length(q));
      }
      void main(){
        float latD = ${ji(an[1])} - vXZ.y / ${ji(Xi)};
        float lonD = ${ji(an[0])} + vXZ.x / ${ji(Xi*Ro)};
        vec2 uvE = vec2((lonD - ${ji(pr[0])}) / ${ji(pr[2]-pr[0])}, (latD - ${ji(pr[1])}) / ${ji(pr[3]-pr[1])});
        float inE = step(0.0, uvE.x) * step(uvE.x, 1.0) * step(0.0, uvE.y) * step(uvE.y, 1.0);
        vec2 uvW = vec2((lonD + 180.0) / 360.0, (latD + 90.0) / 180.0);
        float lw = texture2D(uLandW, uvW).r;
        float le = texture2D(uLandE, uvE).r;
        float land = smoothstep(0.25, 0.75, mix(lw, le, inE));
        // ista matrica kao na globusu (0,36°); kako se kamera spušta, ulaze 4× i 16× gušće razine,
        // pa točke na zaslonu ostaju sitne — detalj raste sa spuštanjem umjesto da se točke napuhuju
        float lat = latD * 0.0174533, lon = lonD * 0.0174533;
        vec2 g = vec2(lon * cos(lat), lat) / (0.36 * 0.0174533);
        float cellPx = 1.0 / max(length(fwidth(g)), 1e-5);
        float lev = clamp(log2(cellPx / 7.0) * 0.5, 0.0, 2.0);
        float l0 = floor(lev);
        float k0 = exp2(l0 * 2.0);
        float fr = smoothstep(0.55, 1.0, lev - l0);
        float rr = mix(0.17, 0.12, clamp(lev, 0.0, 1.0));
        float dots = mix(dotField(g * k0, rr), dotField(g * k0 * 4.0, rr), fr) * land * uDots;
        vec3 n = sphereNormal(vXZ);
        vec3 v = normalize(cameraPosition - vW);
        float ndl = dot(n, uSunMap);
        float day = smoothstep(uDayEdge.x, uDayEdge.y, ndl);
        float mu = max(dot(n, v), 0.0);
        vec4 F = texture2D(uField, uvW);
        vec3 landC = landTone(F, lat, lon) + dots * vec3(0.10, 0.2, 0.42);
        vec3 col = mix(oceanTone(F, mu), landC, land);
        col *= 0.2 + 1.35 * day;
        // sumrak: topla traka koja putuje preko karte
        float mid = (uDayEdge.x + uDayEdge.y) * 0.5, wid = (uDayEdge.y - uDayEdge.x) * 0.32;
        col += twilightTone(ndl, mid, wid) * (0.3 + 0.7 * land) * 0.3;
        // noćna strana (kao na globusu): tiha matrica i rijetka svjetla dok je pogled kontinentalan
        float night = 1.0 - day;
        col += dots * vec3(0.08, 0.16, 0.38) * night * 0.45;
        float lit = step(0.9, h21(floor(g))) * dots;
        col += vec3(1.0, 0.6, 0.26) * lit * night * 0.55 * uNightL;
        // geografska mreža (1°) — tanka, samo dok je pogled regionalan
        vec2 gl = vec2(lonD, latD);
        vec2 gd = abs(fract(gl - 0.5) - 0.5) / fwidth(gl);
        col += vec3(0.10, 0.16, 0.34) * (1.0 - min(min(gd.x, gd.y), 1.0)) * uGrat;
        col += hazeTone(mu, ndl) * (1.0 - uDim);
        col *= 1.0 - uDim * 0.55;
        // rubovi terena nestaju meko (nikad se ne vidi kraj karte)
        float r = length(vXZ * vec2(1.0, 1.15));
        float edge = 1.0 - smoothstep(85.0, 128.0, r);
        gl_FragColor = vec4(col, uAlpha * edge);
      }`})),E=new yt(A,m);E.renderOrder=1,E.frustumCulled=!1,o.add(E);let T=(Q,de=!0)=>{let I={uColor:{value:new Oe(Q)},uOpacity:{value:0},uBend:As},Je=new Mt({uniforms:I,transparent:!0,depthWrite:!1,depthTest:!1,blending:de?Ht:ti,vertexShader:`${fr}
        void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }"});return{m:l(Je),U:I}},b=[];for(let Q of e.europe)for(let de of Q.rings)for(let I=0;I<de.length-1;I++){let[Je,qe]=wi(de[I][0],de[I][1]),[Te,y]=wi(de[I+1][0],de[I+1][1]);b.push(Je,0.04,qe,Te,0.04,y)}let S=T("#4d68c4"),R=new Jt(l(new it().setAttribute("position",new Qe(b,3))),S.m);R.renderOrder=2,R.frustumCulled=!1,o.add(R);let C=e.croatia.map((Q)=>Q.map(([de,I])=>wi(de,I)));{let Q=C[0].slice(0,-1),de=0;for(let Te=0;Te<Q.length;Te++){let y=Q[Te],x=Q[(Te+1)%Q.length];de+=y[0]*x[1]-x[0]*y[1]}if(de>0)Q.reverse();let I=0,Je=1/0;Q.forEach(([Te,y],x)=>{let U=Te*Te+y*y;if(U<Je)Je=U,I=x});let qe=Q.slice(I).concat(Q.slice(0,I));qe.push(qe[0]),C[0]=qe}let _={uBend:As,uRes:{value:new Fe(1,1)},uWidth:{value:6},uCore:{value:0.2},uTrace:{value:0},uHL:{value:0},uOpacity:{value:0},uTime:{value:0}},M=l(new Mt({uniforms:_,transparent:!0,depthWrite:!1,depthTest:!1,side:Vt,blending:Ha,blendEquation:Ga,blendSrc:Fr,blendDst:Fr,vertexShader:`
      ${fr}
      attribute vec3 aQ; attribute float aSide; attribute float aEnd; attribute float aU; attribute float aIsl;
      uniform vec2 uRes; uniform float uWidth;
      varying float vS; varying float vU; varying float vIsl;
      void main(){
        vec4 cp = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0);
        vec4 cq = projectionMatrix * modelViewMatrix * vec4(bendPos(aQ), 1.0);
        vec2 sp = cp.xy / cp.w * uRes, sq = cq.xy / cq.w * uRes;
        float dirS = aEnd < 0.5 ? 1.0 : -1.0;
        vec2 dir = normalize((sq - sp) * dirS + vec2(1e-6, 0.0));
        vec2 nrm = vec2(-dir.y, dir.x);
        vec2 off = nrm * aSide * uWidth - dir * dirS * uWidth * 0.35;
        gl_Position = cp;
        gl_Position.xy += off / uRes * cp.w;
        vS = aSide; vU = aU; vIsl = aIsl;
      }`,fragmentShader:`
      uniform float uCore; uniform float uTrace; uniform float uHL; uniform float uOpacity; uniform float uTime;
      varying float vS; varying float vU; varying float vIsl;
      void main(){
        // otoci se iscrtavaju u drugoj polovici poteza, svi zajedno
        float tr = vIsl > 0.5 ? smoothstep(0.4, 0.98, uTrace) : uTrace;
        float drawn = smoothstep(tr + 0.0015, tr - 0.0015, vU) * step(0.0005, tr);
        float d = abs(vS);
        float aa = fwidth(d) * 1.2;
        float core = 1.0 - smoothstep(uCore - aa, uCore + aa, d);
        float halo = exp(-d * d * 7.0);
        // vrh pera: kratak svijetli rep dok potez putuje
        float live = (1.0 - smoothstep(0.96, 1.0, uTrace)) * step(vIsl, 0.5);
        float head = exp(-pow((tr - vU) * 70.0, 2.0)) * live;
        float tail = exp(-max(tr - vU, 0.0) * 18.0) * live;
        float glow = uHL * (0.55 + 0.45 * tail) + head * 1.6;
        vec3 cCore = mix(vec3(0.62, 0.72, 1.0), vec3(1.0, 0.92, 0.8), head);
        vec3 cHalo = vec3(0.18, 0.32, 1.0);
        vec3 c = cCore * core * (0.45 + 0.55 * glow) + cHalo * halo * glow * 0.5;
        gl_FragColor = vec4(c * drawn * uOpacity, 1.0);
      }`})),B=new yt(l(y3(C)),M);B.renderOrder=6,B.frustumCulled=!1,o.add(B);let D=C[0],F=[0];for(let Q=1;Q<D.length;Q++)F.push(F[Q-1]+Math.hypot(D[Q][0]-D[Q-1][0],D[Q][1]-D[Q-1][1]));let G=F[F.length-1],L=Gt({count:1,color:"#9cb4ff",core:"#ffffff",size:0.5,depthTest:!1,bend:!0});L.uniforms.uMin.value=7,L.uniforms.uMax.value=22,L.points.renderOrder=7,o.add(L.points);let W=(Q)=>new jr(Q.map(([de,I])=>new Fe(de,-I))),ee=l(new Kr(C.map(W),1).rotateX(-Math.PI/2));ee.translate(0,0.02,0);let V=T("#1d3bd6");V.m.side=Vt;let H=new yt(ee,V.m);H.renderOrder=3,H.frustumCulled=!1,o.add(H);let k=Gt({count:e.cities.length,color:"#6f93ff",core:"#ffffff",size:0.11,bend:!0,depthTest:!1});e.cities.forEach(([,Q,de,I],Je)=>{let[qe,Te]=wi(Q,de);k.pos[Je*3]=qe,k.pos[Je*3+1]=0.06,k.pos[Je*3+2]=Te,k.size[Je]=Je===0?2.6:I?1.3:0.8}),k.uniforms.uMin.value=2,k.points.renderOrder=8,o.add(k.points);let N=[],ie=[];e.capitals.forEach(([,Q,de])=>{let[I,Je]=wi(Q,de),qe=new P(0,0.06,0),Te=new P(I,0.06,Je),y=2+qe.distanceTo(Te)*0.22,x=[];for(let U=0;U<=36;U++){let K=U/36,he=qe.clone().lerp(Te,K);he.y+=Math.sin(Math.PI*K)*y,x.push(he)}for(let U=0;U<x.length-1;U++)ie.push(...x[U].toArray(),...x[U+1].toArray());N.push({pts:x,t:a(),speed:0.18+a()*0.12,dir:a()<0.5?1:-1})});let Ce=T("#4a6ff0"),Me=new Jt(l(new it().setAttribute("position",new Qe(ie,3))),Ce.m);Me.frustumCulled=!1,Me.renderOrder=4,o.add(Me);let et=Gt({count:e.capitals.length,color:"#4f7bff",core:"#dfe7ff",size:0.32,bend:!0});e.capitals.forEach(([,Q,de],I)=>{let[Je,qe]=wi(Q,de);et.pos[I*3]=Je,et.pos[I*3+1]=0.08,et.pos[I*3+2]=qe}),et.uniforms.uMin.value=1.5,o.add(et.points);let We=5,Y=Gt({count:N.length*We,color:"#7f9fff",core:"#ffffff",size:0.36,bend:!0});Y.uniforms.uMin.value=1.2,o.add(Y.points);let ue=[["Đakovo",18.41,45.31,1],["Vukovar",19,45.35,1],["Vinkovci",18.8,45.29,0.95],["Valpovo",18.42,45.66,0.6],["Belišće",18.4,45.68,0.5],["Našice",18.1,45.49,0.6],["Beli Manastir",18.6,45.77,0.6],["Donji Miholjac",18.17,45.76,0.5],["Čepin",18.565,45.524,0.45],["Tenja",18.749,45.497,0.35],["Bilje",18.743,45.606,0.35],["Darda",18.692,45.627,0.35]],fe=ue.map(([,Q,de,I])=>[...wi(Q,de),I]),Xe=e.cities.slice(1).map(([,Q,de,I])=>[...wi(Q,de),I?1.6:0.8]),J=Object.fromEntries(ue.map((Q,de)=>[Q[0],fe[de]])),we=[0,0],_e=[[we,J["Đakovo"]],[we,J.Vinkovci],[we,J.Vukovar],[we,J.Valpovo],[J.Valpovo,J["Donji Miholjac"]],[we,J["Našice"]],[we,J["Beli Manastir"]],[J.Vinkovci,J.Vukovar],[J["Đakovo"],J.Vinkovci],[J["Đakovo"],J["Našice"]],[J["Našice"],J["Donji Miholjac"]]],ae=t?1700:3200,ge=Gt({count:ae,color:"#ffae58",core:"#fff0d0",size:0.24,depthTest:!1,nightOnly:!0});ge.uniforms.uMin.value=1.1,ge.uniforms.uFall.value=1,ge.uniforms.uMax.value=9,ge.points.renderOrder=9;let ke=()=>Math.sqrt(-2*Math.log(a()+0.000001))*Math.cos(a()*Math.PI*2);for(let Q=0;Q<ae;Q++){let de,I,Je=1,qe=1,Te=a();if(Te<0.2){do de=ke()*0.3,I=ke()*0.22;while(Math.hypot(de,I*1.4)<0.12);Je=0.7}else if(Te<0.62){let y=fe[a()*fe.length|0],x=0.012+y[2]*0.028;de=y[0]+ke()*x,I=y[1]+ke()*x}else if(Te<0.86){let[y,x]=_e[a()*_e.length|0],U=0.08+a()*0.84,K=-(x[1]-y[1]),he=x[0]-y[0],ve=Math.hypot(K,he)||1,Re=Math.sin(U*9+y[0])*0.03+ke()*0.012;de=y[0]+(x[0]-y[0])*U+K/ve*Re+ke()*0.006,I=y[1]+(x[1]-y[1])*U+he/ve*Re+ke()*0.006,Je=0.55,qe=0.75}else{let y=Xe[a()*Xe.length|0],x=0.03+y[2]*0.05;de=y[0]+ke()*x,I=y[1]+ke()*x,qe=1.4}ge.pos[Q*3]=de,ge.pos[Q*3+1]=0.05,ge.pos[Q*3+2]=I,ge.alpha[Q]=(0.2+a()*0.8)*Je,ge.size[Q]=(0.5+a()*a()*1.8)*qe,ge.wake[Q]=a()*0.9}o.add(ge.points);let He={uOpacity:{value:0},uR:{value:1}},st=new yt(l(new Bn(2,2).rotateX(-Math.PI/2)),l(new Mt({uniforms:He,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ht,vertexShader:"uniform float uR; varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * uR, 0.03, position.z * uR, 1.0); }",fragmentShader:`uniform float uOpacity; varying vec2 vP;
        void main(){ float r = length(vP * vec2(1.0, 1.25)); float a = exp(-r * r * 5.5) * 0.8 + exp(-r * r * 26.0) * 0.6;
          gl_FragColor = vec4(vec3(1.0, 0.56, 0.24) * a * uOpacity, 1.0); }`})));st.renderOrder=5,st.frustumCulled=!1,o.add(st);let at=new P,ut=[k,et,Y,ge,L];return{group:o,towns:ue.map((Q)=>Q[0]),townWorld(Q,de=new P){return de.set(fe[Q][0],0.06,fe[Q][1]).applyMatrix4(o.matrixWorld)},cityWorld(Q,de=new P){return de.fromArray(k.pos,Q*3).applyMatrix4(o.matrixWorld)},update(Q){if(o.visible=Q.alpha>0.002,!o.visible)return;let{alpha:de,Z:I}=Q,Je=1-Q.mapFade;f.uAlpha.value=de,f.uDots.value=1-0.55*wt(0.9,1,I)-0.45*wt(1,1.3,I),f.uGrat.value=wt(0.94,1.05,I)*(1-wt(1.3,1.6,I))*0.5,f.uNightL.value=1-wt(0.9,0.99,I),f.uDim.value=wt(1.5,1.9,I),S.U.uOpacity.value=0.55*de*Je*(1-0.5*Q.hl),_.uRes.value.set(Q.res[0]/2,Q.res[1]/2),_.uWidth.value=7*Q.pr,_.uCore.value=0.16,_.uTrace.value=Q.trace,_.uHL.value=Q.hl,_.uOpacity.value=de*(1-wt(1.12,1.42,I)),_.uTime.value=Q.time;let qe=Q.trace>0.002&&Q.trace<0.985;if(qe){let Te=Q.trace*G,y=1;while(y<F.length-1&&F[y]<Te)y++;let x=(Te-F[y-1])/Math.max(0.000001,F[y]-F[y-1]);L.pos[0]=D[y-1][0]+(D[y][0]-D[y-1][0])*x,L.pos[1]=0.06,L.pos[2]=D[y-1][1]+(D[y][1]-D[y-1][1])*x,L.geometry.attributes.position.needsUpdate=!0}if(L.uniforms.uOpacity.value=qe?de*Math.min(1,Q.trace*30,(0.985-Q.trace)*30):0,V.U.uOpacity.value=de*(0.05+0.1*Q.hl)*wt(0.82,1,Q.trace)*(1-wt(1.25,1.6,I)),k.uniforms.uOpacity.value=de*wt(0.5,0.95,Q.trace)*Je,Ce.U.uOpacity.value=0.42*de*Q.net*Je,et.uniforms.uOpacity.value=de*Q.net*Je,Y.uniforms.uOpacity.value=de*Q.net*Je,ge.uniforms.uOpacity.value=de*(1-wt(1.78,1.97,I)),ge.uniforms.uWake.value=0.15+Q.night*1,He.uR.value=0.6,He.uOpacity.value=de*Q.night*wt(1.05,1.35,I)*(1-wt(1.6,1.8,I))*0.5,ut.forEach((Te)=>{Te.uniforms.uPR.value=Q.pr}),N.forEach((Te,y)=>{if(!Q.reduce)Te.t=(Te.t+Q.dt*Te.speed)%1;for(let x=0;x<We;x++){let U=Te.dir>0?Te.t-x*0.02:1-Te.t+x*0.02,K=Math.min(Te.pts.length-1.001,Math.max(0,U*(Te.pts.length-1))),he=Math.floor(K);at.copy(Te.pts[he]).lerp(Te.pts[he+1],K-he).toArray(Y.pos,(y*We+x)*3),Y.alpha[y*We+x]=(1-x/We)*Math.min(1,Te.t*6)*Math.min(1,(1-Te.t)*6)}}),Q.net*Je>0.01)Y.geometry.attributes.position.needsUpdate=!0,Y.geometry.attributes.aAlpha.needsUpdate=!0},dispose(){c.forEach((Q)=>Q.dispose()),ut.forEach((Q)=>{Q.geometry.dispose(),Q.material.dispose()})}}}function lf(e,t=!1){let i=e[0].index!==null,s=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},c=e[0].morphTargetsRelative,l=new it,h=0;for(let u=0;u<e.length;++u){let f=e[u],d=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(a[p]===void 0)a[p]=[];a[p].push(f.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(o[p]===void 0)o[p]=[];o[p].push(f.morphAttributes[p])}if(t){let p;if(i)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,u),h+=p}}if(i){let u=0,f=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=e[d].attributes.position.count}l.setIndex(f)}for(let u in a){let f=cf(a[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][d]);let g=cf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function cf(e){let t,i,s,r=-1,a=0;for(let h=0;h<e.length;++h){let u=e[h];if(t===void 0)t=u.array.constructor;if(t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=u.itemSize;if(i!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0)s=u.normalized;if(s!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=u.gpuType;if(r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*i}let o=new t(a),c=new ot(o,i,s),l=0;for(let h=0;h<e.length;++h){let u=e[h];if(u.isInterleavedBufferAttribute){let f=l/i;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<i;g++){let v=u.getComponent(d,g);c.setComponent(d+f,g,v)}}else o.set(u.array,l);l+=u.count*i}if(r!==void 0)c.gpuType=r;return c}function rh(e,t){if(t===ll)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Zs||t===Or){let i=e.getIndex();if(i===null){let a=[],o=e.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);e.setIndex(a),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let s=i.count-2,r=[];if(t===Zs)for(let a=1;a<=s;a++)r.push(i.getX(0)),r.push(i.getX(a)),r.push(i.getX(a+1));else for(let a=0;a<s;a++)if(a%2===0)r.push(i.getX(a)),r.push(i.getX(a+1)),r.push(i.getX(a+2));else r.push(i.getX(a+2)),r.push(i.getX(a+1)),r.push(i.getX(a));if(r.length/3!==s)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function hf(e){let t=new Map,i=new Map,s=e.clone();return uf(e,s,function(r,a){t.set(a,r),i.set(r,a)}),s.traverse(function(r){if(!r.isSkinnedMesh)return;let a=r,o=t.get(r),c=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=c.map(function(l){return i.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),s}function uf(e,t,i){i(e,t);for(let s=0;s<e.children.length;s++)uf(e.children[s],t.children[s],i)}class dh extends Si{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new lh(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new lh(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Df(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(s)s(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Lf){try{a[bt.KHR_BINARY_GLTF]=new Ff(e)}catch(u){if(s)s(u);return}r=JSON.parse(a[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(s)s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);if(!u.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case bt.KHR_MATERIALS_UNLIT:a[u]=new gf;break;case bt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nf(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:a[u]=new Uf;break;case bt.KHR_MESH_QUANTIZATION:a[u]=new Of;break;default:if(f.indexOf(u)>=0&&o[u]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function M3(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function qt(e,t,i){let s=e.json.materials[t];if(s.extensions&&s.extensions[i])return s.extensions[i];return null}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Af{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Oe(16777215);if(c.color!==void 0)h.setRGB(c.color[0],c.color[1],c.color[2],wn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new rr(h),l.distance=u;break;case"spot":l=new vo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}if(l.position.set(0,0,0),ui(l,c),c.intensity!==void 0)l.intensity=c.intensity;return l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class gf{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,i){let s=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}if(r.baseColorTexture!==void 0)s.push(i.assignTexture(e,"map",r.baseColorTexture,ri))}return Promise.all(s)}}class bf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class xf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(r,r)}}return Promise.all(s)}}class _f{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class vf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(t.iridescenceThicknessRange===void 0)t.iridescenceThicknessRange=[100,400];if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(s)}}class yf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,ri));if(i.sheenRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(s)}}class Mf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(s)}}class Sf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}}class wf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class Ef{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new Oe().setRGB(r[0],r[1],r[2],wn),i.specularColorTexture!==void 0)s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,ri));return Promise.all(s)}}class Tf{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(s)}}class Rf{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return qt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let i=qt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(s)}}class Cf{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,a)}}class Pf{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class If{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class lh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,{count:h,byteStride:u}=s,f=new Uint8Array(o,c,l);if(a.decodeGltfBufferAsync)return a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer});else return a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class Df{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then((h)=>(c[l]=h,c[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let g=new nt,v=new P,A=new Fn,m=new P(1,1,1),E=new co(p.geometry,p.material,f);for(let b=0;b<f;b++){if(c.TRANSLATION)v.fromBufferAttribute(c.TRANSLATION,b);if(c.ROTATION)A.fromBufferAttribute(c.ROTATION,b);if(c.SCALE)m.fromBufferAttribute(c.SCALE,b);E.setMatrixAt(b,g.compose(v,A,m))}let T=null;for(let b in c)if(b==="_COLOR_0"){let S=c[b];E.instanceColor=new Oi(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(T===null){let R=E.geometry;T=new it,T.name=R.name;for(let C in R.attributes)T.setAttribute(C,R.attributes[C]);for(let C in R.morphAttributes)T.morphAttributes[C]=R.morphAttributes[C];if(R.index!==null)T.setIndex(R.index);T.morphTargetsRelative=R.morphTargetsRelative;for(let C of R.groups)T.addGroup(C.start,C.count,C.materialIndex);if(R.boundingBox!==null)T.boundingBox=R.boundingBox.clone();if(R.boundingSphere!==null)T.boundingSphere=R.boundingSphere.clone();T.drawRange.start=R.drawRange.start,T.drawRange.count=R.drawRange.count,T.userData=Object.assign({},R.userData),E.geometry=T}let S=c[b];T.setAttribute(b,new Oi(S.array,S.itemSize,S.normalized))}Ut.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),d.push(E)}if(h.isGroup)return h.clear(),h.add(...d),h;return d[0]})}}var Lf="glTF",ia=12,df={JSON:1313821514,BIN:5130562};class Ff{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ia),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lf)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ia,r=new DataView(e,ia),a=0;while(a<s){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===df.JSON){let l=new Uint8Array(e,ia+a,o);this.content=i.decode(l)}else if(c===df.BIN){let l=ia+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Nf{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=hh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hh[h]||h.toLowerCase();if(a[h]!==void 0){let f=i.accessors[e.attributes[h]],d=mr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let g=d.attributes[p],v=c[p];if(v!==void 0)g.normalized=v}u(d)},o,l,wn,f)})})}}class Uf{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Of{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class fh extends Mi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(i-t)/h,f=u*u,d=f*u,p=e*l,g=p-l,v=-2*d+3*f,A=d-f,m=1-v,E=A-f+u;for(let T=0;T!==o;T++){let b=a[g+T+o],S=a[g+T+c]*h,R=a[p+T+o],C=a[p+T]*h;r[T]=m*b+E*S+v*R+A*C}return r}}var S3=new Fn;class Bf extends fh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return S3.fromArray(r).normalize().toArray(r),r}}var zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ff={9728:Xn,9729:kt,9984:Xa,9985:Ks,9986:is,9987:ii},pf={33071:js,33648:qa,10497:ni},ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w3={CUBICSPLINE:void 0,LINEAR:Qa,STEP:cl},oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E3(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn});return e.DefaultMaterial}function bs(e,t,i){for(let s in i.extensions)if(e[s]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=i.extensions[s]}function ui(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function T3(e,t,i){let s=!1,r=!1,a=!1;for(let h=0,u=t.length;h<u;h++){let f=t[h];if(f.POSITION!==void 0)s=!0;if(f.NORMAL!==void 0)r=!0;if(f.COLOR_0!==void 0)a=!0;if(s&&r&&a)break}if(!s&&!r&&!a)return Promise.resolve(e);let o=[],c=[],l=[];for(let h=0,u=t.length;h<u;h++){let f=t[h];if(s){let d=f.POSITION!==void 0?i.getDependency("accessor",f.POSITION):e.attributes.position;o.push(d)}if(r){let d=f.NORMAL!==void 0?i.getDependency("accessor",f.NORMAL):e.attributes.normal;c.push(d)}if(a){let d=f.COLOR_0!==void 0?i.getDependency("accessor",f.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(h){let u=h[0],f=h[1],d=h[2];if(s)e.morphAttributes.position=u;if(r)e.morphAttributes.normal=f;if(a)e.morphAttributes.color=d;return e.morphTargetsRelative=!0,e})}function R3(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,s=t.weights.length;i<s;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++)e.morphTargetDictionary[i[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C3(e){let t,i=e.extensions&&e.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+ch(i.attributes);else t=e.indices+":"+ch(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let s=0,r=e.targets.length;s<r;s++)t+=":"+ch(e.targets[s]);return t}function ch(e){let t="",i=Object.keys(e).sort();for(let s=0,r=i.length;s<r;s++)t+=i[s]+":"+e[i[s]]+";";return t}function uh(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P3(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var I3=new nt;class kf{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&s<17||r&&a<98)this.textureLoader=new Wi(this.options.manager);else this.textureLoader=new yo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return bs(r,o,s),ui(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];if(a.mesh!==void 0){if(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0)i[a.mesh].isSkinnedMesh=!0}if(a.camera!==void 0)this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);if(c!=null)this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ah[s.type],o=mr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new ot(l,a,c))}let r=[];if(s.bufferView!==void 0)r.push(this.getDependency("bufferView",s.bufferView));else r.push(null);if(s.sparse!==void 0)r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView));return Promise.all(r).then(function(a){let o=a[0],c=ah[s.type],l=mr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,g,v;if(d&&d!==u){let A=Math.floor(f/d),m="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,E=t.cache.get(m);if(!E)g=new l(o,A*d,s.count*d/h),E=new zr(g,d/h),t.cache.add(m,E);v=new $s(E,c,f%d/h,p)}else{if(o===null)g=new l(s.count*c);else g=new l(o,f,s.count*c);v=new ot(g,c,p)}if(s.sparse!==void 0){let A=ah.SCALAR,m=mr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,b=new m(a[1],E,s.sparse.count*A),S=new l(a[2],T,s.sparse.count*c);if(o!==null)v=new ot(v.array.slice(),v.itemSize,v.normalized);v.normalized=!1;for(let R=0,C=b.length;R<C;R++){let _=b[R];if(v.setX(_,S[R*c]),c>=2)v.setY(_,S[R*c+1]);if(c>=3)v.setZ(_,S[R*c+2]);if(c>=4)v.setW(_,S[R*c+3]);if(c>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=p}return v})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);if(c!==null)o=c}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){if(h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)h.name=o.uri;let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=ff[f.magFilter]||kt,h.minFilter=ff[f.minFilter]||ii,h.wrapS=pf[f.wrapS]||ni,h.wrapT=pf[f.wrapT]||ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xn&&h.minFilter!==kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((u)=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;if(t.isImageBitmapLoader===!0)p=function(g){let v=new Kt(g);v.needsUpdate=!0,f(v)};t.load(qi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){if(l===!0)o.revokeObjectURL(c);return ui(u,a),u.userData.mimeType=a.mimeType||P3(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0)a=a.clone(),a.channel=i.texCoord;if(r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}if(s!==void 0)a.colorSpace=s;return e[t]=a,a})}assignFinalMaterial(e){let{geometry:t,material:i}=e,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new Wr,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c);i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new Un,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c);i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";if(s)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(a)o+="flat-shading:";let c=this.cache.get(o);if(!c){if(c=i.clone(),r)c.vertexColors=!0;if(a)c.flatShading=!0;if(s){if(c.normalScale)c.normalScale.y*=-1;if(c.clearcoatNormalScale)c.clearcoatNormalScale.y*=-1}this.cache.add(o,c),this.associations.set(c,this.associations.get(i))}i=c}e.material=i}getMaterialType(){return yi}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let u=s[bt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],wn),o.opacity=f[3]}if(u.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",u.baseColorTexture,ri));if(o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture));a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Vt;let h=r.alphaMode||oh.OPAQUE;if(h===oh.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,h===oh.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&a!==pn){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0){let u=r.normalTexture.scale;o.normalScale.set(u,u)}}if(r.occlusionTexture!==void 0&&a!==pn){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&a!==pn){let u=r.emissiveFactor;o.emissive=new Oe().setRGB(u[0],u[1],u[2],wn)}if(r.emissiveTexture!==void 0&&a!==pn)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ri));return Promise.all(l).then(function(){let u=new a(o);if(r.name)u.name=r.name;if(ui(u,r),t.associations.set(u,{materials:e}),r.extensions)bs(s,u,r);return u})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return mf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=C3(l),u=s[h];if(u)a.push(u.promise);else{let f;if(l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION])f=r(l);else f=mf(new it,l,t);if(l.mode===zn.TRIANGLE_STRIP)f=f.then((d)=>rh(d,Or));else if(l.mode===zn.TRIANGLE_FAN)f=f.then((d)=>rh(d,Zs));s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?E3(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let g=h[d],v=a[d],A,m=l[d];if(v.mode===zn.TRIANGLES||v.mode===zn.TRIANGLE_STRIP||v.mode===zn.TRIANGLE_FAN||v.mode===void 0){let E=r.isSkinnedMesh===!0,T=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(E&&T===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(A=E&&T?new oo(g,m):new yt(g,m),A.isSkinnedMesh===!0)A.normalizeSkinWeights()}else if(v.mode===zn.LINES)A=new Jt(g,m);else if(v.mode===zn.LINE_STRIP)A=new er(g,m);else if(v.mode===zn.LINE_LOOP)A=new lo(g,m);else if(v.mode===zn.POINTS)A=new ki(g,m);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);if(Object.keys(A.geometry.morphAttributes).length>0)R3(A,r);if(A.name=t.createUniqueName(r.name||"mesh_"+e),ui(A,r),v.extensions)bs(s,A,v);t.assignFinalMaterial(A),u.push(A)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1){if(r.extensions)bs(s,u[0],r);return u[0]}let f=new Lt;if(r.extensions)bs(s,f,r);t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new Qt(Al.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2000000);else if(i.type==="orthographic")t=new ds(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar);if(i.name)t.name=this.createUniqueName(i.name);return ui(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new nt;if(r!==null)f.fromArray(r.array,l*16);c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Gr(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],g=d.target,v=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,m=s.parameters!==void 0?s.parameters[p.output]:p.output;if(g.node===void 0)continue;a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",m)),l.push(p),h.push(g)}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],g=u[3],v=u[4],A=[];for(let E=0,T=f.length;E<T;E++){let b=f[E],S=d[E],R=p[E],C=g[E],_=v[E];if(b===void 0)continue;if(b.updateMatrix)b.updateMatrix();let M=i._createAnimationTracks(b,S,R,C,_);if(M)for(let B=0;B<M.length;B++)A.push(M[B])}let m=new bo(r,void 0,A);return ui(m,s),m})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];if(s.mesh===void 0)return null;return i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);if(s.weights!==void 0)a.traverse(function(o){if(!o.isMesh)return;for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]});return a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];if(f!==null)h.traverse(function(d){if(!d.isSkinnedMesh)return;d.bind(f,I3)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(c)o.push(c);if(r.camera!==void 0)o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)}));return s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0)h=new Hr;else if(l.length>1)h=new Lt;else if(l.length===1)h=l[0];else h=new Ut;if(h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name)h.userData.name=r.name,h.name=a;if(ui(h,r),r.extensions)bs(i,h,r);if(r.matrix!==void 0){let u=new nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else{if(r.translation!==void 0)h.position.fromArray(r.translation);if(r.rotation!==void 0)h.quaternion.fromArray(r.rotation);if(r.scale!==void 0)h.scale.fromArray(r.scale)}if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Lt;if(i.name)r.name=s.createUniqueName(i.name);if(ui(r,i),i.extensions)bs(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];if(f.parent!==null)r.add(hf(f));else r.add(f)}let l=(h)=>{let u=new Map;for(let[f,d]of s.associations)if(f instanceof Tn||f instanceof Kt)u.set(f,d);return h.traverse((f)=>{let d=s.associations.get(f);if(d!=null)u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){if(d.morphTargetInfluences)c.push(d.name?d.name:d.uuid)}if(Ki[r.path]===Ki.weights){if(l(e),e.isGroup)e.children.forEach(l)}else c.push(o);let h;switch(Ki[r.path]){case Ki.weights:h=Hi;break;case Ki.rotation:h=Gi;break;case Ki.translation:case Ki.scale:h=us;break;default:switch(i.itemSize){case 1:h=Hi;break;case 2:case 3:default:h=us;break}break}let u=s.interpolation!==void 0?w3[s.interpolation]:Qa,f=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){let g=new h(c[d]+"."+Ki[r.path],t.array,f,u);if(s.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=uh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof Gi?Bf:fh)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D3(e,t,i){let s=t.attributes,r=new Nn;if(s.POSITION!==void 0){let c=i.json.accessors[s.POSITION],{min:l,max:h}=c;if(l!==void 0&&h!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(h[0],h[1],h[2])),c.normalized){let u=uh(mr[c.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=t.targets;if(a!==void 0){let c=new P,l=new P;for(let h=0,u=a.length;h<u;h++){let f=a[h];if(f.POSITION!==void 0){let d=i.json.accessors[f.POSITION],{min:p,max:g}=d;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let v=uh(mr[d.componentType]);l.multiplyScalar(v)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}e.boundingBox=r;let o=new Yt;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function mf(e,t,i){let s=t.attributes,r=[];function a(o,c){return i.getDependency("accessor",o).then(function(l){e.setAttribute(c,l)})}for(let o in s){let c=hh[o]||o.toLowerCase();if(c in e.attributes)continue;r.push(a(s[o],c))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(c){e.setIndex(c)});r.push(o)}if(At.workingColorSpace!==wn&&"COLOR_0"in s)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`);return ui(e,t),D3(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?T3(e,t.targets,i):e})}var zf=function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=="object")return{supported:!1};var r=WebAssembly.validate(i)?c(t):c(e),a,o=WebAssembly.instantiate(r,{}).then(function(m){a=m.instance,a.exports.__wasm_call_ctors()});function c(m){var E=new Uint8Array(m.length);for(var T=0;T<m.length;++T){var b=m.charCodeAt(T);E[T]=b>96?b-97:b>64?b-39:b+4}var S=0;for(var T=0;T<m.length;++T)E[S++]=E[T]<60?s[E[T]]:(E[T]-60)*64+E[++T];return E.buffer.slice(0,S)}function l(m,E,T,b,S,R,C){var _=m.exports.sbrk,M=b+3&-4,B=_(M*S),D=_(R.length),F=new Uint8Array(m.exports.memory.buffer);F.set(R,D);var G=E(B,b,S,D,R.length);if(G==0&&C)C(B,M,S);if(T.set(F.subarray(B,B+b*S)),_(B-_(0)),G!=0)throw Error("Malformed buffer data: "+G)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function p(m){var E={object:new Worker(m),pending:0,requests:{}};return E.object.onmessage=function(T){var b=T.data;E.pending-=b.count,E.requests[b.id][b.action](b.value),delete E.requests[b.id]},E}function g(m){var E="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+A.name+";"+l.toString()+A.toString(),T=new Blob([E],{type:"text/javascript"}),b=URL.createObjectURL(T);for(var S=f.length;S<m;++S)f[S]=p(b);for(var S=m;S<f.length;++S)f[S].object.postMessage({});f.length=m,URL.revokeObjectURL(b)}function v(m,E,T,b,S){var R=f[0];for(var C=1;C<f.length;++C)if(f[C].pending<R.pending)R=f[C];return new Promise(function(_,M){var B=new Uint8Array(T),D=++d;R.pending+=m,R.requests[D]={resolve:_,reject:M},R.object.postMessage({id:D,count:m,size:E,source:B,mode:b,filter:S},[B.buffer])})}function A(m){var E=m.data;self.ready.then(function(T){if(!E.id)return self.close();try{var b=new Uint8Array(E.count*E.size);l(T,T.exports[E.mode],b,E.count,E.size,E.source,T.exports[E.filter]),self.postMessage({id:E.id,count:E.count,action:"resolve",value:b},[b.buffer])}catch(S){self.postMessage({id:E.id,count:E.count,action:"reject",value:S})}})}return{ready:o,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,E,T,b,S){l(a,a.exports.meshopt_decodeVertexBuffer,m,E,T,b,a.exports[h[S]])},decodeIndexBuffer:function(m,E,T,b){l(a,a.exports.meshopt_decodeIndexBuffer,m,E,T,b)},decodeIndexSequence:function(m,E,T,b){l(a,a.exports.meshopt_decodeIndexSequence,m,E,T,b)},decodeGltfBuffer:function(m,E,T,b,S,R){l(a,a.exports[u[S]],m,E,T,b,a.exports[h[R]])},decodeGltfBufferAsync:function(m,E,T,b,S){if(f.length>0)return v(m,E,T,u[b],h[S]);return o.then(function(){var R=new Uint8Array(m*E);return l(a,a.exports[u[b]],R,m,E,T,a.exports[h[S]]),R})}}}();var St={brick:"#8e3825",brickDark:"#6c2a1b",trim:"#b4583a",roof:"#2b3244",spire:"#232a3a",dark:"#0b0d13",stone:"#c9b9a4"};function _s(e,t){let i=e.index?e.toNonIndexed():e;if(i!==e)e.dispose();i.deleteAttribute("uv");let s=new Oe(t),r=i.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)s.toArray(a,o*3);if(i.setAttribute("color",new ot(a,3)),!i.attributes.normal)i.computeVertexNormals();return i}function Zt(e,t,i,s,r,a,o){return _s(new ai(e,t,i).translate(s,r+t/2,a),o)}function ph(e,t,i,s,r,a,o,c){let l=e/2,h=t/2,u=[-l,0,-h,-l,0,h,-l,i,0,l,0,h,l,0,-h,l,i,0,-l,0,h,l,0,h,l,i,0,-l,0,h,l,i,0,-l,i,0,l,0,-h,-l,0,-h,-l,i,0,l,0,-h,-l,i,0,l,i,0],f=new it;if(f.setAttribute("position",new Qe(u,3)),o==="z")f.rotateY(Math.PI/2);return f.translate(s,r,a),f.computeVertexNormals(),_s(f,c)}function L3(e,t,i,s,r,a,o,c,l){let h=e/2,u=o,f=o+c*t,d=[-h,a+s,u,h,a+s,u,h,a+i,f,-h,a+s,u,h,a+i,f,-h,a+i,f],p=new it;return p.setAttribute("position",new Qe(d,3)),p.translate(r,0,0),p.computeVertexNormals(),_s(p,l)}function xs(e,t,i,s,r,a,o,c=0){return _s(new nr(e,t,i,1).rotateY(c).translate(s,r+t/2,a),o)}function Hf(e,t,i,s,r,a,o,c=0,l=Math.PI*2){return _s(new tr(e,e,t,i,1,!1,c,l).translate(s,r+t/2,a),o)}function Gf(){let e=[],t=(r)=>e.push(r);t(Zt(7.6,3.6,3,0.8,0,0,St.brick)),t(ph(7.8,3.2,2.5,0.8,3.6,0,"x",St.roof)),[-1,1].forEach((r)=>{t(Zt(6.6,2.3,1.1,0.3,0,r*2.05,St.brickDark)),t(L3(6.6,1.25,2.3,3.15,0.3,0,r*1.5,r,St.roof));for(let a=0;a<6;a++){let o=-2.6+a*1.18;if(t(Zt(0.26,2.75,0.42,o,0,r*2.75,St.brick)),t(xs(0.13,0.7,4,o,2.75,r*2.75,St.trim,Math.PI/4)),a<5)t(Zt(0.32,1.25,0.04,o+0.59,0.55,r*2.62,St.dark))}for(let a=0;a<5;a++)t(Zt(0.28,0.75,0.04,-2+a*1.18,2.55,r*1.52,St.dark))}),t(Zt(1.8,3.6,6.6,3.55,0,0,St.brick)),t(ph(6.8,2,2.3,3.55,3.6,0,"z",St.roof)),[-1,1].forEach((r)=>{t(Zt(0.7,1.9,0.04,3.55,1,r*3.32,St.dark)),t(xs(0.16,0.9,4,2.7,3.6,r*3.25,St.trim,Math.PI/4)),t(xs(0.16,0.9,4,4.4,3.6,r*3.25,St.trim,Math.PI/4))}),t(xs(0.22,1.6,6,3.55,6,0,St.spire)),t(Hf(1.5,3.4,8,4.6,0,0,St.brick,0,Math.PI)),t(_s(new nr(1.5,1.9,8,1,!1,0,Math.PI).translate(4.6,4.35,0),St.roof));for(let r=0;r<5;r++){let a=r/4*Math.PI;t(Zt(0.05,1.5,0.3,4.6+Math.sin(a)*1.48,0.8,Math.cos(a)*1.48,St.dark))}let i=-4.05;t(Zt(2.3,5.2,2.3,i,0,0,St.brick)),t(Zt(2,2,2,i,5.2,0,St.brickDark)),[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([r,a])=>{t(Zt(0.36,6.4,0.36,i+r*1.18,0,a*1.18,St.brick)),t(xs(0.2,1.1,4,i+r*1.18,6.4,a*1.18,St.trim,Math.PI/4))}),[[0,1.01],[0,-1.01]].forEach(([,r])=>{t(Zt(0.32,1.35,0.04,i-0.35,5.45,r,St.dark)),t(Zt(0.32,1.35,0.04,i+0.35,5.45,r,St.dark)),t(Zt(0.5,1.6,0.04,i,2.2,r*1.14,St.dark))}),[[-1.01],[1.01]].forEach(([r])=>{t(Zt(0.04,1.35,0.32,i+r,5.45,-0.35,St.dark)),t(Zt(0.04,1.35,0.32,i+r,5.45,0.35,St.dark))}),t(Zt(0.06,2,0.85,i-1.18,0,0,St.dark)),t(_s(new ls(0.42,8).rotateY(-Math.PI/2).translate(i-1.19,3.4,0),St.dark)),t(Zt(2.2,0.16,2.2,i,7.2,0,St.trim)),[0,Math.PI/2,Math.PI,-Math.PI/2].forEach((r)=>{let a=ph(0.9,0.18,0.95,0,0,0,"x",St.spire);a.rotateY(r),a.translate(i+Math.sin(r)*0.9,7.36,Math.cos(r)*0.9),t(a)}),t(xs(1,5.6,8,i,7.36,0,St.spire,Math.PI/8)),t(Zt(0.06,0.7,0.06,i,12.95,0,St.stone)),t(Zt(0.06,0.06,0.36,i,13.38,0,St.stone)),[-1,1].forEach((r)=>{t(Hf(0.34,3.4,8,-2.95,0,r*2.35,St.brick)),t(xs(0.42,1.5,8,-2.95,3.4,r*2.35,St.spire,Math.PI/8))});let s=lf(e,!1);return e.forEach((r)=>r.dispose()),s.computeBoundingBox(),s}var mh=3200;function F3(e){let t=new Int32Array(e,0,13),i=new Int16Array(e,52),s=0,r=(a,o)=>{let c=[];for(let l=0;l<a;l++){let h=[];for(let d=0;d<o;d++)h.push(i[s++]);let u=i[s++],f=new Float32Array(u*2);for(let d=0;d<u;d++)f[d*2]=i[s++]/2,f[d*2+1]=i[s++]/2;c.push({h,r:f})}return c};return{buildings:r(t[1],2),roads:r(t[3],1),water:r(t[5],1),areas:r(t[7],1),marks:r(t[9],1)}}var N3=(e)=>{let t=0,i=e.length/2;for(let s=0,r=i-1;s<i;r=s++)t+=(e[r*2]-e[s*2])*(e[r*2+1]+e[s*2+1]);return t/2},Lo=(e)=>{let t=0,i=0,s=e.length/2;for(let r=0;r<s;r++)t+=e[r*2],i+=e[r*2+1];return[t/s,i/s]},Fo=(e)=>{let t=[];for(let i=0;i<e.length;i+=2)t.push(new Fe(e[i],e[i+1]));return t};function U3(e,t,i){let s=!1;for(let r=0,a=i.length/2-1;r<i.length/2;a=r++){let o=i[r*2],c=i[r*2+1],l=i[a*2],h=i[a*2+1];if(c>t!==h>t&&e<(l-o)*(t-c)/(h-c)+o)s=!s}return s}function Vf(e,t){let i=e.length/2,s=new Float32Array(i*2);for(let r=0;r<i;r++){let a=(r+i-1)%i,o=(r+1)%i,c=e[r*2]-e[a*2],l=e[r*2+1]-e[a*2+1],h=e[o*2]-e[r*2],u=e[o*2+1]-e[r*2+1],f=Math.hypot(c,l)||1,d=Math.hypot(h,u)||1;c/=f,l/=f,h/=d,u/=d;let p=-l-u,g=c+h,v=Math.hypot(p,g);if(v<0.0001)p=-l,g=c;else p/=v,g/=v;let A=Math.max(0.45,p*-l+g*c);s[r*2]=e[r*2]+p*t/A,s[r*2+1]=e[r*2+1]+g*t/A}return s}function O3(e,t){let i=new yi(e);return i.onBeforeCompile=(s)=>{s.uniforms.uRise=t.uRise,s.uniforms.uDim=t.uDim,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uRise;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float dR = length(position.xz);
        transformed.y *= clamp((uRise * ${mh.toFixed(1)} - dR) / 260.0, 0.0, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb *= (1.0 - uDim * 0.8);`)},i.customProgramCacheKey=()=>"zaec-city-rise",i}function Wf({lite:e,dataUrl:t,modelUrl:i,onLines:s,onModel:r,onLoaded:a,prepare:o}){let c=kn(1945),l=new Lt;l.name="osijek";let h={uRise:{value:0},uDim:{value:0}},u=e?1400:2600,f=e?380:650,d=e?600:1100,p=[],g=(_e)=>(p.push(_e),_e),v=!1,A={cath:new P(30,99,-4),hotel:new P(329,66,-154),trg:new P(105,4,-78),drava:new P(80,4,-470)},m={uOpacity:{value:1}},E=new yt(g(new ls(5200,64).rotateX(-Math.PI/2)),g(new Mt({uniforms:m,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uOpacity; varying vec2 vP;
        float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
        void main(){ float d = length(vP); float a = 1.0 - smoothstep(2200.0, 5000.0, d);
          vec3 c = vec3(0.028, 0.04, 0.075) + grid(vP, 50.0) * 0.018 + grid(vP, 250.0) * 0.02;
          gl_FragColor = vec4(c, a * uOpacity); }`})));E.position.y=-0.4,E.renderOrder=-1,l.add(E);let T=g(O3({vertexColors:!0,flatShading:!0,roughness:0.86,metalness:0.04,transparent:!0},h)),b=null,S={uRise:h.uRise,uDim:h.uDim,uLines:{value:0.4},uColor:{value:new Oe("#5d7ed6")}},R=g(new Mt({uniforms:S,transparent:!0,depthWrite:!1,vertexShader:`uniform float uRise; varying float vF;
      void main(){ vec3 p = position; float dR = length(p.xz); float k = clamp((uRise * ${mh.toFixed(1)} - dR) / 260.0, 0.0, 1.0); p.y *= k; vF = (1.0 - smoothstep(300.0, 1100.0, dR)) * k;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uLines; varying float vF; void main(){ gl_FragColor = vec4(uColor, uLines * vF); }"})),C={uTime:{value:0},uOpacity:{value:1}},_=g(new Mt({uniforms:C,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform float uOpacity; varying vec2 vP;
      void main(){
        float s = sin(vP.x * 0.045 - uTime * 0.9 + sin(vP.y * 0.08) * 1.5) * sin(vP.x * 0.013 + uTime * 0.35);
        float glint = smoothstep(0.8, 1.0, s) * 0.45;
        float fade = 1.0 - smoothstep(2600.0, 3400.0, length(vP));
        gl_FragColor = vec4(vec3(0.05, 0.11, 0.26) + glint * vec3(0.45, 0.6, 1.0), 0.97 * fade * uOpacity); }`})),M=g(new pn({vertexColors:!0,transparent:!0,depthWrite:!1})),B=Gt({count:1,color:"#ffae55",core:"#fff1d6",size:0.9}),D=Gt({count:1,color:"#ffb35a",core:"#ffe2b0",size:0.5});B.points.renderOrder=4,D.points.renderOrder=4,B.uniforms.uMin.value=1.4,B.uniforms.uMax.value=6,D.uniforms.uMax.value=5;let F=B,G=D,L={uLift:{value:0},uGlow:{value:0.5},uAlpha:{value:1},uFocus:{value:0},uScan:{value:200},uScanOn:{value:0},uWin:{value:0.3}};function W(){let _e=new yi({vertexColors:!0,flatShading:!0,roughness:0.84,metalness:0.02,transparent:!0,side:Vt});return _e.forceSinglePass=!0,_e.depthWrite=!0,_e.onBeforeCompile=(ae)=>{Object.assign(ae.uniforms,L),ae.vertexShader=ae.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind; uniform float uLift; varying float vH; varying float vKind; varying vec3 vLoc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vKind = aKind; vLoc = position; transformed.y = transformed.y * uLift - (1.0 - uLift) * 3.0;`),ae.fragmentShader=ae.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uGlow; uniform float uAlpha; uniform float uFocus; uniform float uScan; uniform float uScanOn; uniform float uWin;
          varying float vH; varying float vKind; varying vec3 vLoc;
          float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
          // cigla: sljubnice svakih 36 cm, vidljive tek izbliza (nestaju prije nego što bi treperile)
          if (vKind < 0.5) {
            float cy = vH / 0.36;
            float w = fwidth(cy);
            float d = abs(fract(cy + 0.5) - 0.5);
            float line = 1.0 - smoothstep(0.07, 0.07 + w, d);
            diffuseColor.rgb *= 1.0 - 0.2 * line * (1.0 - smoothstep(0.12, 0.4, w));
          }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
          float glass = step(2.5, vKind) * step(vKind, 3.5);
          // reflektori odozdo (topli) i hladna noć prema vrhu
          // iz daljine zgrada dijeli noćnu paletu grada; reflektori i toplina rastu tek kad postane motiv (uFocus)
          float flood = 1.0 - smoothstep(4.0, 78.0, vH);
          float lit = clamp(flood * (0.5 + 0.5 * uGlow) * (0.3 + 0.7 * uFocus), 0.0, 1.0);
          vec3 night = mix(vec3(0.36, 0.40, 0.58), vec3(1.08, 0.88, 0.72), lit);
          gl_FragColor.rgb *= mix(vec3(1.0), night, 1.0 - glass);
          gl_FragColor.rgb += vec3(1.0, 0.5, 0.25) * uGlow * 0.05 * flood * (1.0 - glass);
          // vitraji: toplo žuto svjetlo iznutra (blaga razlika između prozora); sjaj oko njih je zasebna mreža
          float hw = hh(floor(vLoc * vec3(0.45, 0.2, 0.45)));
          vec3 sg = mix(vec3(1.0, 0.82, 0.38), vec3(1.0, 0.68, 0.26), hw);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, sg * (0.32 + 1.35 * uWin), glass);
          // vrh tornja hvata svjetlo kad zgrada postane glavni motiv
          gl_FragColor.rgb += vec3(1.0, 0.8, 0.58) * smoothstep(58.0, 90.0, vH) * uFocus * 0.14 * (1.0 - glass);
          // skener: iznad crte ostaje samo nacrt (linije), zgrada se čisto reže; na crti tanka svjetla traka
          if (uScanOn > 0.5 && vH > uScan) discard;
          float band = exp(-pow((vH - uScan) / 0.9, 2.0)) * uScanOn;
          gl_FragColor.rgb += vec3(0.45, 0.62, 1.0) * band * 1.2;
          gl_FragColor.a *= uAlpha;`)},_e.customProgramCacheKey=()=>"zaec-cath-v3",_e}let ee={uLift:L.uLift,uScan:L.uScan,uScanOn:L.uScanOn,uI:{value:0}},V=g(new Mt({uniforms:ee,transparent:!0,depthWrite:!1,blending:Ht,side:Vt,vertexShader:`attribute vec4 aGlow; uniform float uLift; varying vec4 vG; varying float vH;
      void main(){ vG = aGlow; vH = position.y; vec3 p = position; p.y = p.y * uLift - (1.0 - uLift) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uI; uniform float uScan; uniform float uScanOn; varying vec4 vG; varying float vH;
      void main(){
        float a = vG.a * vG.a * uI;
        if (uScanOn > 0.5 && vH > uScan) discard;
        if (a < 0.003) discard;
        gl_FragColor = vec4(vG.rgb * a, a);
      }`})),H=null,k=null,N=null,ie=null,Ce=0,Me=new P(33.8,90,1);function et(_e,ae,ge=null){let ke=++Ce;if(!_e.attributes.aKind)_e.setAttribute("aKind",new ot(new Float32Array(_e.attributes.position.count),1));let He=W(),st=new yt(_e,He);st.renderOrder=1;let at=new qr(_e,ae?22:30),ut=()=>{if(ke!==Ce){_e.dispose(),He.dispose(),at.dispose(),ge?.dispose();return}if(k)l.remove(k),k.geometry.dispose(),N.dispose(),ie?.dispose();if(H)l.remove(H),H.geometry.dispose(),H=null;if(ge)H=new yt(ge,V),H.renderOrder=5,H.frustumCulled=!1,l.add(H);let Q=_e.attributes.position,de=0;for(let I=1;I<Q.count;I++)if(Q.getY(I)>Q.getY(de))de=I;Me.set(Q.getX(de),Q.getY(de),Q.getZ(de)),A.cath.set(Me.x-4,Me.y*1.06,Me.z),k=st,N=He,ie=at,l.add(st),s?.(at,ae),r?.(st)};if(o)o(st).then(ut,ut);else ut()}{let _e=Gf();_e.scale(-7,7,7),_e.translate(2,0,-3.8),_e.deleteAttribute("normal"),et(_e,!0)}if(i){let _e=new dh;_e.setMeshoptDecoder(zf),_e.load(i,(ae)=>{let ge=(Q)=>{for(let de=Q;de;de=de.parent)if(de.name==="konkatedrala"||de.name==="sjaj")return de.name;return""},ke=null,He=null;if(ae.scene.updateMatrixWorld(!0),ae.scene.traverse((Q)=>{if(!Q.isMesh)return;if(ge(Q)==="sjaj")He=He||Q;else ke=ke||Q}),!ke)return;let st=(Q,de)=>{let I=new it,Je=Q.getAttribute("position"),qe=new Float32Array(Je.count*3);for(let y=0;y<Je.count;y++)qe[y*3]=Je.getX(y),qe[y*3+1]=Je.getY(y),qe[y*3+2]=Je.getZ(y);I.setAttribute("position",new ot(qe,3));let Te=Q.getAttribute("color");if(Te&&de){let y=new Float32Array(Te.count*3),x=new Float32Array(Te.count);for(let U=0;U<Te.count;U++)y[U*3]=Te.getX(U),y[U*3+1]=Te.getY(U),y[U*3+2]=Te.getZ(U),x[U]=Te.itemSize>3?Math.round(Te.getW(U)*4):0;I.setAttribute("color",new ot(y,3)),I.setAttribute("aKind",new ot(x,1))}else if(Te){let y=new Float32Array(Te.count*4);for(let x=0;x<Te.count;x++)y[x*4]=Te.getX(x),y[x*4+1]=Te.getY(x),y[x*4+2]=Te.getZ(x),y[x*4+3]=Te.itemSize>3?Te.getW(x):1;I.setAttribute("aGlow",new ot(y,4))}if(Q.index)I.setIndex(Q.index.clone());return I},at=st(ke.geometry,!0);at.applyMatrix4(ke.matrixWorld);let ut=null;if(He)ut=st(He.geometry,!1),ut.applyMatrix4(He.matrixWorld);ae.scene.traverse((Q)=>{if(Q.isMesh)Q.geometry.dispose(),Q.material.dispose?.()}),et(at,!1,ut)},void 0,(ae)=>console.warn("[ZAEC] model konkatedrale nije učitan, koristi se rezervni",ae))}let We=new rr("#ff9a5c",0,32,1.4),Y=new P(40,14,30),ue=new Lt,fe={uRise:h.uRise,uDim:h.uDim,uAlpha:{value:1}},Xe=g(new Mt({uniforms:fe,transparent:!0,vertexShader:`varying vec3 vL; varying vec3 vN; varying vec3 vW; uniform float uRise;
      void main(){ vL = position; vN = normalize(mat3(modelMatrix) * normal); vec3 p = position;
        float k = clamp((uRise * ${mh.toFixed(1)} - 360.0) / 260.0, 0.0, 1.0); p.y *= k;
        vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uDim; uniform float uAlpha; varying vec3 vL; varying vec3 vN; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      void main(){
        vec3 n = normalize(vN);
        float roof = step(0.6, n.y);
        float u = abs(n.x) > abs(n.z) ? vL.z : vL.x;
        vec2 cell = floor(vec2(u / 3.0, vL.y / 3.4));
        vec2 fc = fract(vec2(u / 3.0, vL.y / 3.4));
        float frame = step(0.08, fc.x) * step(0.14, fc.y);
        float lit = step(0.6, h21(cell + floor(vL.y / 30.0))) * frame;
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - abs(dot(n, v)), 2.0);
        vec3 glass = mix(vec3(0.03, 0.08, 0.30), vec3(0.18, 0.36, 0.95), fres * 0.7 + 0.15);
        vec3 c = glass * (0.55 + 0.45 * frame) + lit * vec3(0.95, 0.78, 0.5) * 0.55;
        c = mix(c, vec3(0.05, 0.06, 0.09), roof);
        c *= (1.0 - uDim * 0.8);
        gl_FragColor = vec4(c, uAlpha);
      }`}));l.add(ue);let J=[];async function we(){let _e=await(await fetch(t)).arrayBuffer(),ae=F3(_e),ge=[],ke=[],He=[],st=[[0.11,0.13,0.19],[0.13,0.145,0.205],[0.095,0.11,0.165],[0.15,0.15,0.19]],at=[[0.42,0.17,0.12],[0.36,0.15,0.11],[0.47,0.2,0.14]],ut=[[0.2,0.2,0.24],[0.17,0.18,0.22],[0.23,0.21,0.22]],Q=[[0.15,0.16,0.19],[0.13,0.14,0.17]],de=(ne,re,De,O)=>{ge.push(ne[0],ne[1],ne[2],re[0],re[1],re[2],De[0],De[1],De[2]),ke.push(...O,...O,...O)},I=(ne,re,De)=>{let O=Fo(ne),pe=[];try{pe=$n.triangulateShape(O,[])}catch(X){pe=[]}if(pe.length)for(let[X,se,xe]of pe)de([ne[X*2],re,-ne[X*2+1]],[ne[xe*2],re,-ne[xe*2+1]],[ne[se*2],re,-ne[se*2+1]],De);else{let[X,se]=Lo(ne);for(let xe=0,ce=ne.length/2;xe<ce;xe++){let Se=(xe+1)%ce;de([X,re,-se],[ne[Se*2],re,-ne[Se*2+1]],[ne[xe*2],re,-ne[xe*2+1]],De)}}};for(let ne of ae.buildings){let re=ne.r,De=re.length/2,[O,pe]=Lo(re),X=Math.hypot(O,pe);if(X>u)continue;let se=ne.h[0]/2,xe=ne.h[1],ce=Math.abs(N3(re)),Se=0;for(let le=0;le<De;le++){let me=(le+1)%De;Se+=Math.hypot(re[me*2]-re[le*2],re[me*2+1]-re[le*2+1])}let Ye=st[c()*st.length|0].map((le)=>le*(0.9+c()*0.2)),xt=se<=15&&(xe===0||xe===1||xe===3),_t=ce<420&&se<=13&&De<=10,sn=!_t&&se<=22&&(xe===0||xe===1||xe===3)&&ce<6000,Ei=!_t&&!sn&&xe!==4&&ce>120?0.9:0,gn=(xt?at[c()*at.length|0]:sn?ut[c()*ut.length|0]:Q[c()*Q.length|0]).map((le)=>le*(0.85+c()*0.3)),bn=se+Ei;for(let le=0;le<De;le++){let me=(le+1)%De,Ae=re[le*2],be=-re[le*2+1],Ie=re[me*2],ze=-re[me*2+1];de([Ae,0,be],[Ie,0,ze],[Ie,bn,ze],Ye),de([Ae,0,be],[Ie,bn,ze],[Ae,bn,be],Ye)}if(_t){let le=0,me=1,Ae=0;for(let ze=0;ze<De;ze++){let lt=(ze+1)%De,tt=re[lt*2]-re[ze*2],ht=re[lt*2+1]-re[ze*2+1],mt=Math.hypot(tt,ht);if(mt>le)le=mt,me=tt/mt,Ae=ht/mt}let be=Math.min(5.5,1.6+Math.sqrt(ce)*0.22),Ie=(ze,lt)=>{let tt=ze-O,ht=lt-pe,mt=tt*me+ht*Ae;return[O+me*mt*0.62,se+be,-(pe+Ae*mt*0.62)]};for(let ze=0;ze<De;ze++){let lt=(ze+1)%De,tt=[re[ze*2],se,-re[ze*2+1]],ht=[re[lt*2],se,-re[lt*2+1]],mt=Ie(re[ze*2],re[ze*2+1]),rn=Ie(re[lt*2],re[lt*2+1]);de(tt,ht,rn,gn),de(tt,rn,mt,gn)}}else if(sn){let le=2*ce/Math.max(1,Se),me=Math.min(Math.max(2.2,Math.sqrt(ce)*0.2),7,le*0.46),Ae=me*0.75,be=Vf(re,me);for(let Ie=0;Ie<De;Ie++){let ze=(Ie+1)%De,lt=[re[Ie*2],se,-re[Ie*2+1]],tt=[re[ze*2],se,-re[ze*2+1]],ht=[be[Ie*2],se+Ae,-be[Ie*2+1]],mt=[be[ze*2],se+Ae,-be[ze*2+1]];de(lt,tt,mt,gn),de(lt,mt,ht,gn)}I(be,se+Ae,gn.map((Ie)=>Ie*0.92))}else{if(Ei){let le=Vf(re,0.45),me=Ye.map((Ae)=>Ae*1.25);for(let Ae=0;Ae<De;Ae++){let be=(Ae+1)%De,Ie=[re[Ae*2],bn,-re[Ae*2+1]],ze=[re[be*2],bn,-re[be*2+1]],lt=[le[Ae*2],bn,-le[Ae*2+1]],tt=[le[be*2],bn,-le[be*2+1]];de(Ie,tt,ze,me),de(Ie,lt,tt,me);let ht=[le[Ae*2],se,-le[Ae*2+1]],mt=[le[be*2],se,-le[be*2+1]];de(mt,ht,lt,Ye),de(mt,lt,tt,Ye)}I(le,se,gn)}else I(re,se,gn);if(Ei&&ce>700&&c()<0.7){let le=2+c()*3,me=2+c()*3,Ae=2.2+c()*1.4,be=O+(c()-0.5)*Math.sqrt(ce)*0.25,Ie=pe+(c()-0.5)*Math.sqrt(ce)*0.25,ze=[be-le,Ie-me,be+le,Ie-me,be+le,Ie+me,be-le,Ie+me],lt=Q[0].map((tt)=>tt*1.3);for(let tt=0;tt<4;tt++){let ht=(tt+1)%4,mt=ze[tt*2],rn=-ze[tt*2+1],xn=ze[ht*2],$t=-ze[ht*2+1];de([mt,se,rn],[xn,se,$t],[xn,se+Ae,$t],lt),de([mt,se,rn],[xn,se+Ae,$t],[mt,se+Ae,rn],lt)}I(ze,se+Ae,lt.map((tt)=>tt*1.15))}}if(X<d)for(let le=0;le<De;le++){let me=(le+1)%De;J.push(re[le*2],se,-re[le*2+1],re[me*2],se,-re[me*2+1])}if(X<f&&se>4){let le=Math.min(16,Math.max(1,Math.round(se*Math.sqrt(ce)/70)));for(let me=0;me<le;me++){let Ae=c()*De|0,be=(Ae+1)%De,Ie=c(),ze=re[Ae*2]+(re[be*2]-re[Ae*2])*Ie,lt=re[Ae*2+1]+(re[be*2+1]-re[Ae*2+1])*Ie,tt=re[be*2]-re[Ae*2],ht=re[be*2+1]-re[Ae*2+1],mt=Math.hypot(tt,ht)||1;He.push(ze+ht/mt*0.4,2+c()*Math.max(1,se-3.5),-(lt-tt/mt*0.4))}}}let Je=new it;Je.setAttribute("position",new Qe(ge,3)),Je.setAttribute("color",new Qe(ke,3)),Je.computeBoundingSphere(),b=new yt(g(Je),T),l.add(b);let qe=g(new it().setAttribute("position",new Qe(J,3)));l.add(new Jt(qe,R));let Te=ae.water.filter((ne)=>ne.h[0]===0),y=ae.water.filter((ne)=>ne.h[0]===1),x=[];for(let ne of Te){let re=y.filter((pe)=>U3(pe.r[0],pe.r[1],ne.r)).map((pe)=>Fo(pe.r)),De=Fo(ne.r),O=De.concat(...re);for(let[pe,X,se]of $n.triangulateShape(De,re))x.push(O[pe].x,0.3,-O[pe].y,O[se].x,0.3,-O[se].y,O[X].x,0.3,-O[X].y)}let U=g(new it().setAttribute("position",new Qe(x,3))),K=new yt(U,_);K.renderOrder=0,l.add(K);let he=1e9;for(let ne of Te)for(let re=0;re<ne.r.length;re+=2){let De=Math.hypot(ne.r[re]-60,ne.r[re+1]-420);if(De<he)he=De,A.drava.set(ne.r[re],4,-ne.r[re+1]-40)}let ve=[],Re=[],te={0:[0.085,0.09,0.12],1:[0.03,0.075,0.06],2:[0.035,0.068,0.058],3:[0.13,0.13,0.15]};for(let ne of ae.areas){let[re,De]=Lo(ne.r);if(Math.hypot(re,De)>u)continue;let O=te[ne.h[0]]||te[2],pe=ne.h[0]===3?0.25:0.12,X=Fo(ne.r);for(let[se,xe,ce]of $n.triangulateShape(X,[]))ve.push(X[se].x,pe,-X[se].y,X[ce].x,pe,-X[ce].y,X[xe].x,pe,-X[xe].y),Re.push(...O,...O,...O);if(ne.h[0]===3)A.trg.set(re,4,-De)}let oe=g(new it);oe.setAttribute("position",new Qe(ve,3)),oe.setAttribute("color",new Qe(Re,3)),l.add(new yt(oe,M));let Ee=e?[30,34,42,60,26,0]:[20,22,27,40,17,34],Be=[],Pe=[];for(let ne of ae.roads){let re=ne.h[0],De=Ee[re];if(!De)continue;let O=ne.r;if(re>=4&&Math.hypot(O[0],O[1])>(e?450:800))continue;let pe=c()*De;for(let X=0;X<O.length/2-1;X++){let se=O[X*2],xe=O[X*2+1],ce=O[X*2+2],Se=O[X*2+3],Ye=Math.hypot(ce-se,Se-xe);while(pe<Ye){let xt=pe/Ye;Be.push(se+(ce-se)*xt,6,-(xe+(Se-xe)*xt)),Pe.push(re<=1?1.25:re<=2?0.95:0.75),pe+=De}pe-=Ye}}F=Gt({count:Be.length/3,color:"#ffae55",core:"#fff1d6",size:1.7}),F.pos.set(Be);for(let ne=0;ne<Pe.length;ne++)F.size[ne]=Pe[ne],F.alpha[ne]=0.55+c()*0.45,F.wake[ne]=0.1+c()*0.6+0.28*Math.min(1,Math.hypot(Be[ne*3],Be[ne*3+2])/2600);F.uniforms.uMin.value=1.3,F.uniforms.uFall.value=0.25,F.uniforms.uMax.value=6,F.points.renderOrder=4,F.material.depthWrite=!1,l.add(F.points),g(F.geometry),g(F.material),G=Gt({count:He.length/3,color:"#ffb35a",core:"#ffe2b0",size:0.5}),G.pos.set(He);for(let ne=0;ne<G.alpha.length;ne++)G.alpha[ne]=c()<0.62?0.25+c()*0.75:0,G.wake[ne]=c()*0.5;G.uniforms.uMax.value=5,G.uniforms.uMin.value=0.8,G.uniforms.uFall.value=1,G.uniforms.uWake.value=2,G.points.renderOrder=4,l.add(G.points),g(G.geometry),g(G.material);let ye=ae.marks.find((ne)=>ne.h[0]===2);if(ye){let ne=ye.r,[re,De]=Lo(ne),O=0,pe=0;for(let se=0;se<ne.length/2;se++){let xe=(se+1)%(ne.length/2),ce=ne[xe*2]-ne[se*2],Se=ne[xe*2+1]-ne[se*2+1],Ye=Math.hypot(ce,Se);if(Ye>O)O=Ye,pe=Math.atan2(Se,ce)}ue.position.set(re,0,-De),ue.rotation.y=pe;let X=(se,xe,ce,Se,Ye)=>{let xt=new yt(g(new ai(se,xe,ce).translate(Se,xe/2,Ye)),Xe);return ue.add(xt),xt};X(46,7.5,34,0,0),X(30,62,15,-5,-4),X(24,56,14,8,8),X(6,6,6,-10,-4).position.y=62,A.hotel.set(re,70,-De)}v=!0,a?.()}return we().catch((_e)=>console.warn("[ZAEC] podaci grada nisu učitani",_e)),{group:l,anchors:A,spire:Me,flood:We,floodLocal:Y,get cathedral(){return k},isLoaded:()=>v,update(_e){if(l.visible=_e.alpha>0.002||_e.lamps>0.002,We.intensity=0,!l.visible)return;h.uRise.value=_e.rise,h.uDim.value=_e.dim;let ae=_e.alpha;if(T.opacity=ae,b)b.visible=ae>0.01;S.uLines.value=ae*(0.25+0.55*_e.lines)*(1-_e.dim*0.75)*(_e.detail??1),m.uOpacity.value=ae*(1-_e.dim*0.75),C.uOpacity.value=Math.max(ae,_e.lamps*0.6)*(1-_e.dim*0.6),C.uTime.value=_e.time,M.opacity=ae*(1-_e.dim*0.6),ue.visible=ae>0.01,fe.uAlpha.value=ae;let ge=_e.scan>0.001?1:0;if(L.uLift.value=Math.max(0.001,_e.cath),L.uGlow.value=0.6+_e.glow,L.uFocus.value=_e.focus,L.uWin.value=0.25+0.75*_e.focus,L.uScanOn.value=ge,L.uScan.value=(Me.y+2)*(1-_e.scan)-1.5,L.uAlpha.value=ae*_e.cathSolid,k)k.visible=_e.cathSolid*ae>0.01;if(ee.uI.value=ae*_e.cathSolid*(0.12+0.88*_e.focus)*1.15,H)H.visible=ee.uI.value>0.004;We.intensity=14*_e.glow*ae*_e.cathSolid*(1-0.6*_e.scan)*(0.2+0.8*_e.focus),fe.uAlpha.value=ae*(1-0.45*_e.focus),F.uniforms.uPR.value=_e.pr,F.uniforms.uOpacity.value=_e.lamps*(1-_e.dim*0.7),F.uniforms.uWake.value=_e.wake,G.uniforms.uPR.value=_e.pr,G.uniforms.uOpacity.value=ae*Math.min(1,_e.rise*1.4)*(1-_e.dim*0.85)*(_e.detail??1),G.uniforms.uTime.value=_e.time,G.uniforms.uFlick.value=_e.reduce?0:0.6},dispose(){p.forEach((_e)=>_e.dispose?.()),k?.geometry.dispose(),N?.dispose(),ie?.dispose()}}}function Ah(){let e=new Lt;e.name="snop";let t={uLen:{value:0},uI:{value:0},uCore:{value:0.12},uTime:{value:0},uRep:{value:20},uWarm:{value:new Oe("#ffc58a")},uCool:{value:new Oe("#9fb9ff")}},i=new Bn(1,1,1,32).translate(0,0.5,0),s=new Mt({uniforms:t,transparent:!0,depthWrite:!1,blending:Ht,side:Vt,vertexShader:`
      varying vec2 vUv;
      void main(){
        vUv = uv;
        // snop se vrlo blago širi prema visini (raspršenje u zraku); vidljivi dio ostaje ravna zraka
        vec3 p = position;
        p.x *= mix(1.0, 1.5, uv.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uLen; uniform float uI; uniform float uCore; uniform float uTime; uniform float uRep; uniform vec3 uWarm; uniform vec3 uCool;
      varying vec2 vUv;
      void main(){
        float x = (vUv.x - 0.5) * 2.0;
        float y = vUv.y;
        float core = exp(-x * x / (uCore * uCore));
        float halo = exp(-x * x * 4.5) * 0.22 + exp(-x * x * 26.0) * 0.3;
        // rast: snop se izvlači iz vrha šiljka, s mekim vrhom
        float grow = smoothstep(uLen + 0.002, uLen - 0.06, y);
        // atmosferski pad svjetline s visinom; mekan početak na samom vrhu tornja
        float fall = smoothstep(0.0, 0.0012, y) * pow(1.0 - y, 1.6);
        // paketi svjetla putuju uvis (podaci), samo u jezgri
        float pk = exp(-pow((fract(y * uRep - uTime * 0.7) - 0.5) * 9.0, 2.0)) * 0.6;
        // toplo svjetlo grada samo u samom izvoru, odmah zatim hladno digitalno; jezgra gotovo bijela
        vec3 col = mix(uWarm, uCool, smoothstep(0.0, 0.006, y));
        col = mix(col, vec3(1.0), core * 0.55);
        float a = (core * (1.0 + pk) * 1.25 + halo) * grow * fall * uI;
        gl_FragColor = vec4(col * a, a);
      }`}),r=new yt(i,s);r.frustumCulled=!1,r.renderOrder=12,e.add(r);let a=Gt({count:2,color:"#ffd0a0",core:"#ffffff",size:1});a.size[0]=1.25,a.size[1]=0.36,a.alpha[0]=0.35,a.alpha[1]=1,a.uniforms.uMin.value=2,a.uniforms.uMax.value=26,a.points.renderOrder=13,e.add(a.points);let o=-1;return{group:e,update(c){let l=c.b*c.alpha;if(e.visible=l>0.002,!e.visible)return;e.position.copy(c.at);let h=c.drop??3;e.position.y-=h*c.unit;let u=c.camera.position.x-c.at.x,f=c.camera.position.z-c.at.z;r.rotation.y=Math.atan2(u,f);let d=900*c.unit,p=11*c.unit*(0.4+0.6*Math.min(1,l*1.4));if(r.scale.set(p,d,1),t.uLen.value=Math.min(1,l*1.6),t.uI.value=Math.min(1,l*1.25),t.uCore.value=0.06+0.05*Math.min(1,l*1.4),t.uRep.value=26.470588235294116,t.uTime.value=c.time,c.unit!==o)o=c.unit,a.pos[1]=a.pos[4]=(c.drop??3)*c.unit,a.geometry.attributes.position.needsUpdate=!0;a.uniforms.uPR.value=c.pr,a.uniforms.uOpacity.value=Math.min(1,l*2),a.uniforms.uSize.value=10*c.unit},dispose(){i.dispose(),s.dispose(),a.geometry.dispose(),a.material.dispose()}}}var No={x0:-5.6,y0:0.7,w:12,h:8},sa=(e,t,i=0,s=new P)=>s.set(No.x0+e*No.w,No.y0+t*No.h,i),Ot=(e,t,i,s)=>[[e,t,i,t],[i,t,i,s],[i,s,e,s],[e,s,e,t]],dt=(e,t,i,s)=>[[e,t,i,s]],jn=(e,t,i=0.008,s=8)=>{let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2,c=(a+1)/s*Math.PI*2;r.push([e+Math.cos(o)*i,t+Math.sin(o)*i*1.5,e+Math.cos(c)*i,t+Math.sin(c)*i*1.5])}return r},Xf={frame:[...Ot(0,0,1,1),...dt(0,0.925,1,0.925),...jn(0.025,0.962),...jn(0.045,0.962),...jn(0.065,0.962),...Ot(0.3,0.945,0.7,0.98)],nav:[...Ot(0.04,0.85,0.11,0.895),...dt(0.5,0.872,0.56,0.872),...dt(0.59,0.872,0.65,0.872),...dt(0.68,0.872,0.74,0.872),...Ot(0.84,0.85,0.96,0.895)],hero:[...Ot(0.05,0.72,0.52,0.785),...Ot(0.05,0.645,0.44,0.71),...dt(0.05,0.6,0.47,0.6),...dt(0.05,0.575,0.4,0.575),...Ot(0.05,0.49,0.19,0.545),...Ot(0.21,0.49,0.33,0.545)],visual:[...Ot(0.58,0.49,0.95,0.79),...dt(0.58,0.49,0.95,0.79),...dt(0.58,0.79,0.95,0.49)],proof:[0,1,2,3,4].flatMap((e)=>Ot(0.05+e*0.185,0.4,0.19+e*0.185,0.43)),cards:[0,1,2].flatMap((e)=>{let t=0.05+e*0.31;return[...Ot(t,0.14,t+0.28,0.34),...dt(t+0.02,0.3,t+0.2,0.3),...dt(t+0.02,0.27,t+0.25,0.27),...dt(t+0.02,0.245,t+0.22,0.245)]}),cta:[...Ot(0.32,0.025,0.68,0.085),...dt(0.05,0.11,0.95,0.11)]},B3={frame:Xf.frame,nav:[...Ot(0.4,0.835,0.6,0.9),...[0,1,2,3,4,5,6,7,8].flatMap((e)=>dt(0.05+e*0.1,0.81,0.12+e*0.1,0.81))],slider:[...Ot(0.03,0.44,0.97,0.78),...Ot(0.3,0.6,0.7,0.625),...jn(0.07,0.61,0.02),...jn(0.93,0.61,0.02),...[0.44,0.48,0.52,0.56].flatMap((e)=>jn(e,0.47,0.006,6))],wall:[0,1,2,3,4,5,6,7,8].flatMap((e)=>dt(0.05,0.38-e*0.026,0.95-e%3*0.04,0.38-e*0.026)),icons:[0,1,2,3,4,5].flatMap((e)=>jn(0.12+e*0.152,0.1,0.022)),cta:[...Ot(0.86,0.022,0.95,0.042),...dt(0.05,0.06,0.95,0.06)]},gh={entry:[0.07,0.9],message:[0.29,0.715],trust:[0.5,0.415],content:[0.5,0.24],cta:[0.5,0.055]},k3=(e)=>Object.values(e).flat();function qf(e,t){let i=k3(e).map(([o,c,l,h])=>({a:sa(o,c),b:sa(l,h)})),s=i.reduce((o,c)=>o+c.a.distanceTo(c.b),0),r=[],a=t;i.forEach((o,c)=>{let l=o.a.distanceTo(o.b),h=c===i.length-1?a:Math.max(1,Math.round(l/s*t));h=Math.max(0,Math.min(h,a-(i.length-1-c))),a-=h;for(let u=0;u<h;u++){let f=o.a.clone().lerp(o.b,u/h),d=o.a.clone().lerp(o.b,(u+1)/h);r.push({a:f,b:d,y:(f.y+d.y)/2,x:(f.x+d.x)/2})}});while(r.length<t)r.push(r[r.length-1]);return r.length=t,r.sort((o,c)=>c.y-o.y||o.x-c.x)}function z3(e){let t=1/0,i=-1/0,s=1/0,r=-1/0,a=0;for(let b of e)t=Math.min(t,b.a.x,b.b.x),i=Math.max(i,b.a.x,b.b.x),s=Math.min(s,b.a.y,b.b.y),r=Math.max(r,b.a.y,b.b.y),a+=b.a.z+b.b.z;a/=e.length*2;let o=i-t||1,c=r-s||1,l=128,h=new Float32Array(l),u=new Float32Array(l),f=(b)=>Math.min(l-1,Math.max(0,Math.floor(b*l))),d=[],p=[];e.forEach((b,S)=>{let R=Math.abs(b.b.x-b.a.x),C=Math.abs(b.b.y-b.a.y);if(C>=R)d.push(S),h[f((b.x-t)/o)]+=C;else p.push(S),u[f((b.y-s)/c)]+=R});let g=(b,S,R)=>{let C=[...b.keys()].sort((M,B)=>b[B]-b[M]),_=[0,l-1];for(let M of C){if(_.length>=S+2||b[M]<=0)break;if(_.every((B)=>Math.abs(B-M)>=R))_.push(M)}return _.map((M)=>(M+0.5)/l).sort((M,B)=>M-B)},v=g(h,10,7),A=g(u,8,7),m=Array(e.length),E=(b,S,R,C,_)=>{let M=S.map(()=>[]);for(let B of b){let D=R(e[B]),F=0;for(let G=1;G<S.length;G++)if(Math.abs(S[G]-D)<Math.abs(S[F]-D))F=G;M[F].push(B)}M.forEach((B,D)=>{if(!B.length)return;B.sort((L,W)=>_(e[L])-_(e[W]));let F=1/0,G=-1/0;for(let L of B){let W=T(e[L]);F=Math.min(F,W[0]),G=Math.max(G,W[1])}B.forEach((L,W)=>{m[L]=C(S[D],F+(G-F)*W/B.length,F+(G-F)*(W+1)/B.length)})})},T=(b)=>[Math.min(b.a.y,b.b.y),Math.max(b.a.y,b.b.y)];return E(d,v,(b)=>(b.x-t)/o,(b,S,R)=>({a:new P(t+b*o,S,a),b:new P(t+b*o,R,a)}),(b)=>b.y),T=(b)=>[Math.min(b.a.x,b.b.x),Math.max(b.a.x,b.b.x)],E(p,A,(b)=>(b.y-s)/c,(b,S,R)=>({a:new P(S,s+b*c,a),b:new P(R,s+b*c,a)}),(b)=>b.x),m}function jf(e,{max:t=6000}={}){let i=kn(303),s={uMorph:{value:0},uOpacity:{value:0},uTime:{value:0},uWarm:{value:new Oe("#ffc6a0")},uCool:{value:new Oe("#b8c8ff")},uGridCol:{value:new Oe("#7f9bff")},uBadCol:{value:new Oe("#ff7a66")},uBad:{value:0},uScanY:{value:1e4},uScanOn:{value:0}},r=new Mt({uniforms:s,transparent:!0,depthWrite:!1,blending:Ht,vertexShader:`
      attribute vec3 aFrom; attribute vec3 aGrid; attribute vec3 aTo; attribute vec3 aBad; attribute float aDelay; attribute float aSeed;
      uniform float uMorph; uniform float uTime; uniform float uBad; uniform float uScanY; uniform float uScanOn;
      varying float vS1; varying float vS2; varying float vFly; varying float vScan;
      float ease(float t){ return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0; }
      void main(){
        // 0 → 1: rubovi zgrade se odvajaju (najviši prvi) i slažu u mjernu mrežu
        float e1 = ease(clamp((uMorph - aDelay) / 0.4, 0.0, 1.0));
        // 1 → 2: mreža postaje okvir web stranice
        float e2 = ease(clamp((uMorph - 1.0 - aSeed * 0.45) / 0.45, 0.0, 1.0));
        float b = clamp(uBad * 1.5 - aSeed * 0.5, 0.0, 1.0);
        b = b * b * (3.0 - 2.0 * b);
        vec3 site = mix(aTo, aBad, b);
        vec3 p = mix(mix(aFrom, aGrid, e1), site, e2);
        float fly1 = sin(e1 * 3.14159);
        float fly2 = sin(e2 * 3.14159);
        p += vec3((aSeed - 0.5) * 0.5, (aSeed - 0.3) * 0.35, 0.5 + aSeed * 1.6) * fly1;
        p += vec3(0.0, 0.0, 0.6 + aSeed) * fly2 * 0.6;
        p += vec3(sin(uTime * 0.9 + aSeed * 30.0), cos(uTime * 0.7 + aSeed * 20.0), 0.0) * 0.03 * (fly1 + fly2);
        p.z += sin(b * 3.14159) * (0.5 + aSeed);
        vS1 = e1; vS2 = e2; vFly = max(fly1, fly2);
        // skener: crte nacrta postoje samo iznad crte koja se spušta niz zgradu; uz samu crtu su najsvjetlije
        float above = smoothstep(uScanY - 0.06, uScanY + 0.06, aFrom.y);
        float fresh = exp(-pow((aFrom.y - uScanY) / 0.35, 2.0));
        vScan = mix(1.0, above * (1.0 + fresh * 1.5), uScanOn);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCool; uniform vec3 uGridCol; uniform vec3 uBadCol; uniform float uBad;
      varying float vS1; varying float vS2; varying float vFly; varying float vScan;
      void main(){
        vec3 site = mix(uCool, uBadCol, uBad * 0.8);
        vec3 c = mix(mix(uWarm, uGridCol, vS1), site, vS2);
        float a = uOpacity * (0.52 + 0.33 * vS1 + 0.15 * vS2 + vFly * 0.45) * vScan;
        if (a < 0.003) discard;
        gl_FragColor = vec4(c + vFly * 0.3, a);
      }`}),a=new Jt(new it,r);a.frustumCulled=!1,a.renderOrder=3;function o(l){let h=l.attributes.position.array,u=[];for(let M=0;M<h.length;M+=6){let B=new P(h[M],h[M+1],h[M+2]),D=new P(h[M+3],h[M+4],h[M+5]),F=B.distanceTo(D);if(F>0.02)u.push({a:B,b:D,L:F})}u.sort((M,B)=>B.L-M.L),u=u.slice(0,t),u.forEach((M)=>{M.y=(M.a.y+M.b.y)/2,M.x=(M.a.x+M.b.x)/2}),u.sort((M,B)=>B.y-M.y||M.x-B.x);let f=u.length,d=z3(u),p=u.map((M,B)=>B).sort((M,B)=>{let D=d[M],F=d[B];return F.a.y+F.b.y-(D.a.y+D.b.y)||D.a.x+D.b.x-(F.a.x+F.b.x)}),g=qf(Xf,f),v=qf(B3,f),A=Array(f),m=Array(f);p.forEach((M,B)=>{A[M]=g[B],m[M]=v[B]});let E=new Float32Array(f*6),T=new Float32Array(f*6),b=new Float32Array(f*6),S=new Float32Array(f*6),R=new Float32Array(f*2),C=new Float32Array(f*2);for(let M=0;M<f;M++)E.set([...u[M].a.toArray(),...u[M].b.toArray()],M*6),T.set([...d[M].a.toArray(),...d[M].b.toArray()],M*6),b.set([...A[M].a.toArray(),...A[M].b.toArray()],M*6),S.set([...m[M].a.toArray(),...m[M].b.toArray()],M*6),R[M*2]=R[M*2+1]=M/f*0.5+i()*0.08,C[M*2]=C[M*2+1]=i();let _=new it;return _.setAttribute("position",new ot(E.slice(),3)),_.setAttribute("aFrom",new ot(E,3)),_.setAttribute("aGrid",new ot(T,3)),_.setAttribute("aTo",new ot(b,3)),_.setAttribute("aBad",new ot(S,3)),_.setAttribute("aDelay",new ot(R,1)),_.setAttribute("aSeed",new ot(C,1)),_.boundingSphere=new Yt(new P(0,5,0),40),a.geometry.dispose(),a.geometry=_,f}let c=e?o(e):0;return{object:a,get count(){return c},setSource(l){c=o(l)},update(l){a.visible=l.opacity>0.002&&c>0,s.uMorph.value=l.morph,s.uOpacity.value=l.opacity,s.uTime.value=l.time,s.uBad.value=l.bad||0,s.uScanY.value=l.scanY??1e4,s.uScanOn.value=l.scanOn||0},dispose(){a.geometry.dispose(),r.dispose()}}}var bh=[{code:"01",name:"Poruka",color:"#6f8cff"},{code:"02",name:"Struktura",color:"#7d93ff"},{code:"03",name:"UX",color:"#8f9bff"},{code:"04",name:"Tehnologija",color:"#a39cf5"},{code:"05",name:"SEO",color:"#c39bdc"},{code:"06",name:"Mjerenje",color:"#e3a3a0"},{code:"07",name:"Konverzija",color:"#ffb23f"}];function H3(e){switch(e){case 0:return[...Ot(0.1,0.62,0.78,0.78),...Ot(0.1,0.46,0.6,0.56),...dt(0.1,0.36,0.66,0.36),...dt(0.1,0.3,0.52,0.3),...Ot(0.1,0.12,0.34,0.22)];case 1:return[...Ot(0.42,0.78,0.58,0.9),...dt(0.5,0.78,0.5,0.68),...dt(0.18,0.68,0.82,0.68),...[0.18,0.5,0.82].flatMap((t)=>[...dt(t,0.68,t,0.6),...Ot(t-0.09,0.48,t+0.09,0.6),...dt(t,0.48,t,0.38),...Ot(t-0.06,0.26,t+0.06,0.38)])];case 2:return[...dt(0.1,0.78,0.36,0.78),...dt(0.36,0.78,0.36,0.5),...dt(0.36,0.5,0.64,0.5),...dt(0.64,0.5,0.64,0.22),...dt(0.64,0.22,0.88,0.22),...dt(0.83,0.27,0.88,0.22),...dt(0.83,0.17,0.88,0.22),...jn(0.1,0.78,0.025),...jn(0.36,0.5,0.025),...jn(0.64,0.22,0.025)];case 3:return[...dt(0.3,0.7,0.16,0.5),...dt(0.16,0.5,0.3,0.3),...dt(0.7,0.7,0.84,0.5),...dt(0.84,0.5,0.7,0.3),...dt(0.57,0.76,0.43,0.24)];case 4:return[...Ot(0.1,0.72,0.9,0.86),...jn(0.84,0.79,0.022),...Ot(0.1,0.5,0.9,0.62),...[0,1].flatMap((t)=>[...dt(0.14,0.42-t*0.16,0.6,0.42-t*0.16),...dt(0.14,0.37-t*0.16,0.8,0.37-t*0.16)])];case 5:return[...dt(0.12,0.16,0.88,0.16),...dt(0.12,0.16,0.12,0.84),...[0.22,0.34,0.3,0.46,0.42,0.6].flatMap((t,i)=>Ot(0.18+i*0.115,0.16,0.25+i*0.115,0.16+t))];default:return[...Ot(0.28,0.4,0.72,0.6),...dt(0.42,0.5,0.48,0.44),...dt(0.48,0.44,0.58,0.56),...dt(0.18,0.84,0.82,0.84),...dt(0.18,0.84,0.42,0.62),...dt(0.82,0.84,0.58,0.62)]}}function Kf(){let e=new Lt;e.name="slojevi",e.position.copy(sa(0.5,0.42));let t=11,i=7,s=(l,h)=>[(l-0.5)*t,0,-(h-0.5)*i],r=(l)=>{let h=[];return l.forEach(([u,f,d,p])=>h.push(...s(u,f),...s(d,p))),new it().setAttribute("position",new Qe(h,3))},a=(()=>[[0.035,0,0.965,0],[0.965,0,1,0.035],[1,0.035,1,0.965],[1,0.965,0.965,1],[0.965,1,0.035,1],[0.035,1,0,0.965],[0,0.965,0,0.035],[0,0.035,0.035,0]])(),o=bh.map((l,h)=>{let u=new Lt,f=r(a),d=r(H3(h)),p=new Un({color:l.color,transparent:!0,opacity:0,depthWrite:!1}),g=new Un({color:l.color,transparent:!0,opacity:0,depthWrite:!1,blending:Ht}),v=new Bn(t,i).rotateX(-Math.PI/2),A=new pn({color:l.color,transparent:!0,opacity:0,depthWrite:!1,side:Vt}),m=new yt(v,A);m.renderOrder=1;let E=new Jt(f,p),T=new Jt(d,g);return E.renderOrder=T.renderOrder=2,u.add(m,E,T),e.add(u),{g:u,fm:p,gm:g,pm:A,geos:[f,d,v],e:0,arr:0}}),c=new P;return{group:e,update(l){if(e.visible=l.alpha>0.002,!e.visible)return;let h=l.assemble||0,u=1.55+-1.3900000000000001*h,f=l.p*8,d=1-Math.exp(-(l.dt||0.016)*7);o.forEach((p,g)=>{let v=Math.max(Math.min(1,Math.max(0,f-g)),l.active>=g?1:0);p.arr+=(v-p.arr)*(l.reduce?1:d);let A=1-Math.pow(1-p.arr,3);p.e+=((l.active===g?1:0)-p.e)*(l.reduce?1:d);let m=p.e*(1-h);p.g.position.set(m*1.1,(3-g)*u+(1-A)*-4+m*0.35,m*0.9);let E=l.alpha*A;p.pm.opacity=E*(0.035+0.1*m+0.05*h),p.fm.opacity=E*(0.22+0.78*m+0.5*h),p.gm.opacity=E*(0.05+0.95*m+0.3*h)})},anchor(l,h=c){return h.set(-t/2,0,i*0.2).applyMatrix4(o[l].g.matrixWorld)},emphasis:(l)=>o[l].e,arrival:(l)=>o[l].arr,dispose(){o.forEach((l)=>{l.geos.forEach((h)=>h.dispose()),l.fm.dispose(),l.gm.dispose(),l.pm.dispose()})}}}var G3=["Google pretraga","Preporuka","Društvene mreže","Oglasi","AI pretraga"],V3=["Poziv","Upit","Rezervacija","Kupnja"];var Yf=-13.2,Jf=13.8,Zf=(e)=>8.3-e*1.65,$f=(e)=>7.1-e*1.65;function Qf(e,t,i,s,r,a){let o=r*r,c=o*r;return a.x=0.5*(2*t.x+(-e.x+i.x)*r+(2*e.x-5*t.x+4*i.x-s.x)*o+(-e.x+3*t.x-3*i.x+s.x)*c),a.y=0.5*(2*t.y+(-e.y+i.y)*r+(2*e.y-5*t.y+4*i.y-s.y)*o+(-e.y+3*t.y-3*i.y+s.y)*c),a.z=0.5*(2*t.z+(-e.z+i.z)*r+(2*e.z-5*t.z+4*i.z-s.z)*o+(-e.z+3*t.z-3*i.z+s.z)*c),a}function ep({lite:e}){let t=kn(2024),i=new Lt;i.name="tok";let s=e?90:170,r=3,a=G3.map((H,k)=>new P(Yf,Zf(k),0)),o=V3.map((H,k)=>new P(Jf,$f(k),0)),c=(H)=>sa(gh[H][0],gh[H][1],0.15),l=n.map((H)=>c(H.zone)),h=new P(8.2,2.2,0.15),u=new P,f=Do("#3d5ccc",0.25,!0),d=new Jt(new it,f);i.add(d);let p=!1;function g(){let H=[],k=(Ce,Me,et,We,Y=24)=>{let ue=Me.clone();for(let fe=1;fe<=Y;fe++)Qf(Ce,Me,et,We,fe/Y,u),H.push(ue.x,ue.y,ue.z,u.x,u.y,u.z),ue=u.clone()},N=p?new P(0,3,0):new P(-3,0,0),ie=p?new P(0,-3,0):new P(3,0,0);a.forEach((Ce)=>k(Ce.clone().add(N),Ce,l[0],l[1])),o.forEach((Ce)=>k(l[4],h,Ce,Ce.clone().add(ie))),d.geometry.dispose(),d.geometry=new it().setAttribute("position",new Qe(H,3))}let v=new it,A=[];for(let H=0;H<40;H++){let k=H/40*Math.PI*2,N=(H+1)/40*Math.PI*2;A.push(Math.cos(k),Math.sin(k),0,Math.cos(N),Math.sin(N),0)}v.setAttribute("position",new Qe(A,3));let m=l.map((H)=>{let k=new Un({color:"#7f9fff",transparent:!0,opacity:0,depthWrite:!1,blending:Ht}),N=new Jt(v,k);return N.position.copy(H),N.scale.setScalar(0.42),i.add(N),{r:N,m:k,hit:0}}),E=new Oe("#7f9fff"),T=new Oe("#ff6f5e"),b=Gt({count:a.length+o.length,color:"#4f7bff",core:"#ffffff",size:1.5});[...a,...o].forEach((H,k)=>{H.toArray(b.pos,k*3),b.size[k]=k<a.length?1:1.2}),i.add(b.points);let S=new Float32Array(o.length);function R(H){if(p=H,a.forEach((k,N)=>H?k.set(-4.6+N*2.5,11.4,0):k.set(Yf,Zf(N),0)),o.forEach((k,N)=>H?k.set(-3.5+N*2.6,-1.3,0):k.set(Jf,$f(N),0)),H)h.set(0.4,-0.4,0.15);else h.set(8.2,2.2,0.15);[...a,...o].forEach((k,N)=>k.toArray(b.pos,N*3)),b.geometry.attributes.position.needsUpdate=!0,g()}R(!1);let C=Gt({count:s*r,color:"#8fb0ff",core:"#ffffff",size:0.85}),_=Gt({count:s*r,color:"#ff6a55",core:"#ffd2c8",size:0.75}),M=Gt({count:s,color:"#ffb23f",core:"#fff3d6",size:1.6});i.add(C.points,_.points,M.points);let B=[];for(let H=0;H<s;H++){let k=Array.from({length:8},()=>new P);B.push({wp:k,s:0,speed:1,state:0,wait:t()*7,vel:new P,pos:new P,hist:[new P,new P,new P],life:0,out:0})}function D(H){let k=t()*a.length|0;H.out=t()*o.length|0,H.wp[0].copy(a[k]),n.forEach((N,ie)=>{H.wp[ie+1].copy(l[ie]).add(u.set((t()-0.5)*2*N.jx,(t()-0.5)*2*N.jy,(t()-0.5)*0.4))}),H.wp[6].copy(h).add(u.set(0,(t()-0.5)*1.4,0)),H.wp[7].copy(o[H.out]),H.s=0,H.speed=0.75+t()*0.5,H.state=1,H.pos.copy(H.wp[0]),H.hist.forEach((N)=>N.copy(H.pos))}let F=(H,k,N)=>{let ie=Math.min(6,Math.floor(k)),Ce=k-ie,Me=H.wp;return Qf(Me[Math.max(0,ie-1)],Me[ie],Me[ie+1],Me[Math.min(7,ie+2)],Ce,N)},G=[!1,!1,!1,!1,!1],L=0,W=0;function ee(H){for(let k=0;k<s;k++){let N=B[k];if(N.state===0){if(N.wait-=H,N.wait<=0)D(N),L++}else if(N.state===1){let ie=Math.floor(N.s);N.s+=H*N.speed*(N.s<1?0.7:1);let Ce=Math.floor(N.s);if(Ce!==ie&&Ce>=1&&Ce<=5){let Me=Ce-1,et=G[Me]?n[Me].good:n[Me].bad;if(t()>et)N.state=2,N.life=0,F(N,N.s,N.pos),N.vel.set((t()-0.5)*2.4+(N.pos.x>0.4?1.2:-1.2),0.6+t()*0.8,1+t()*2.5),m[Me].hit=1}if(N.state===1)if(N.s>=7)N.state=3,N.life=0,N.pos.copy(N.wp[7]),S[N.out]=1,W++;else F(N,N.s,N.pos)}else if(N.state===2){if(N.life+=H,N.vel.y-=H*3.2,N.pos.addScaledVector(N.vel,H),N.life>1.5)N.state=0,N.wait=0.2+t()*1.5}else if(N.state===3){if(N.life+=H,N.life>0.6)N.state=0,N.wait=0.2+t()*1.2}if(H>0)N.hist[2].copy(N.hist[1]),N.hist[1].copy(N.hist[0]),N.hist[0].copy(N.pos);for(let ie=0;ie<r;ie++){let Ce=k*r+ie,Me=N.hist[ie],et=1-ie*0.32,We=N.state===1,Y=N.state===2;(We?C:_).pos.set([Me.x,Me.y,Me.z],Ce*3),C.alpha[Ce]=We?et*Math.min(1,N.s*3):0,_.alpha[Ce]=Y?et*Math.max(0,1-N.life/1.5)*0.85:0,C.size[Ce]=_.size[Ce]=1-ie*0.25}if(M.alpha[k]=N.state===3?Math.max(0,1-N.life/0.6):0,M.size[k]=N.state===3?1+N.life*3:1,N.state===3)N.pos.toArray(M.pos,k*3)}[C,_,M].forEach((k)=>{k.geometry.attributes.position.needsUpdate=!0,k.geometry.attributes.aAlpha.needsUpdate=!0,k.geometry.attributes.aSize.needsUpdate=!0})}let V=!1;return{group:i,channelWorld:(H)=>a[H],outcomeWorld:(H)=>o[H],gateWorld:(H)=>l[H],setStates(H){G=H.slice()},setLayout(H){if(H!==p)R(H)},stats:()=>({emitted:L,converted:W}),update(H){if(i.visible=H.alpha>0.002,!i.visible)return;let k=H.reduce?0:Math.min(H.dt,0.05);if(!V){V=!0;for(let N=0;N<180;N++)ee(0.03333333333333333);L=W=0}f.opacity=0.22*H.alpha,[b,C,_,M].forEach((N)=>{N.uniforms.uPR.value=H.pr,N.uniforms.uOpacity.value=H.alpha}),ee(k),m.forEach((N,ie)=>{N.hit=Math.max(0,N.hit-k*2.5),N.m.color.copy(G[ie]?E:T);let Ce=H.focusGate===ie?1:0;N.m.opacity=H.alpha*(0.35+N.hit*0.6+Ce*0.5),N.r.scale.setScalar(0.42+N.hit*0.25+Ce*0.18+Math.sin(H.time*2+ie)*0.02)});for(let N=0;N<o.length;N++)S[N]=Math.max(0,S[N]-k*2),b.size[a.length+N]=1.2+S[N]*1.4;for(let N=0;N<a.length;N++)b.size[N]=0.9+Math.sin(H.time*1.7+N*1.3)*0.15;b.geometry.attributes.aSize.needsUpdate=!0},dispose(){i.traverse((H)=>{H.geometry?.dispose(),(Array.isArray(H.material)?H.material:H.material?[H.material]:[]).forEach((k)=>k.dispose())})}}}var tp={Z:0,tx:0,ty:0,tz:0,az:0,el:20,dist:30,fov:34,roll:0,sx:0,sy:0,fit:0,idle:0,net:0,conv:0,finale:0,trace:0,hl:0,dusk:0,focus:0,beam:0,scan:0,rise:0,cath:0,glow:0,dim:0,lines:0.4,cathSolid:1,morph:0,wire:0,flow:0,layers:0,layersA:0,assemble:0,labOsijek:0,labCities:0,labTowns:0,labCity:0,labFlow:0,labLayers:0,labFinale:0,stars:1},np=Object.keys(tp),W3=hr,aa={Z:W3,rise:1,cath:1,stars:0.35,trace:1,dusk:1},ra={...aa,dim:0.95,lines:0,cathSolid:0,wire:1,morph:2,glow:0,scan:1},xh={hero:{Z:0,tx:0,ty:0,tz:-2,az:4,el:9,dist:8.2,fov:44,roll:-21,sx:0.24,sy:-0.03,idle:1,net:0.85,m:{dist:11,fov:52,roll:-12,el:14,sx:0,sy:0.26}},world:{Z:0.12,tx:0,ty:-1.4,tz:-1.5,az:8,el:30,dist:21,fov:38,roll:-6,sx:-0.2,net:1,conv:0.18,labOsijek:1,fit:20,m:{dist:30,sx:0,sy:0.2,roll:0}},europe:{Z:0.94,tx:-6.5,ty:0,tz:-1,az:0,el:62,dist:50,sx:0.17,net:0.7,conv:0.4,trace:0.035,hl:0.35,fit:36,m:{dist:76,sx:0,sy:0.18}},croatia:{Z:1,tx:-6,ty:0.5,tz:4.2,az:-10,el:52,dist:31,sx:0.16,net:0.5,conv:0.6,trace:1,hl:1,dusk:0.42,labCities:1,fit:19,m:{dist:44,sx:0,sy:0.16}},slavonia:{Z:1.55,tx:4.2,ty:0,tz:9.5,az:10,el:56,dist:92,sx:-0.16,trace:1,hl:0.22,dusk:1,labTowns:1,stars:0.6,fit:100,m:{sx:0,sy:0.16}},osijek:{...aa,tx:21,ty:1,tz:-13,az:30,el:36,dist:100,sx:0.06,glow:0.3,focus:0.12,labCity:1,fit:62,m:{sx:0,sy:0.16}},cathedral:{...aa,tx:0.6,ty:7.4,tz:0.6,az:52,el:8,dist:32,sx:-0.18,glow:1,dim:0.35,lines:0.2,focus:1,beam:1,fit:13,m:{dist:36,sx:0,sy:0.14}},arch:{...aa,tx:0,ty:6.4,tz:0,az:0,el:4,dist:31,sx:0.17,glow:0.4,dim:0.8,lines:0,focus:0.5,beam:0.3,scan:1,wire:1,fit:14,m:{dist:44,sx:0,sy:0.16}},grid:{...aa,tx:0.2,ty:6.2,az:0,el:2,dist:30,sx:0.17,dim:0.92,lines:0,cathSolid:0,scan:1,wire:1,morph:1,glow:0,fit:14,m:{dist:44,sx:0,sy:0.16}},web:{...ra,tx:0.4,ty:4.7,az:0,el:0,dist:23,sx:0.15,fit:13.5,m:{dist:34,sx:0,sy:0.18}},flow:{...ra,fit:31,tx:0.3,ty:4.7,az:0,el:0,dist:42.5,sx:0,sy:0.085,flow:1,labFlow:1,m:{dist:57,fit:15,tx:0.4,ty:5,sy:0.235},t:{dist:43,sy:0.12}},"layers-a":{...ra,wire:0,tx:0.6,ty:4.2,az:-26,el:32,dist:35,sx:0.17,layers:0.14,layersA:1,labLayers:1,fit:15,m:{dist:54,sx:0,sy:0.17}},"layers-b":{...ra,wire:0,tx:0.6,ty:4.2,az:-22,el:30,dist:35,sx:0.17,layers:1,layersA:1,labLayers:1,fit:15,m:{dist:52,sx:0,sy:0.17}},"layers-c":{...ra,wire:0,tx:0.4,ty:4.2,az:-14,el:22,dist:33,sx:0.25,layers:1,layersA:1,assemble:1,labLayers:0,fit:14,m:{dist:46,sx:0,sy:0.17}},final:{Z:0,tx:0.2,ty:-0.4,tz:-2.2,az:28,el:16,dist:13.5,fov:40,roll:-10,sx:0.2,sy:-0.12,finale:1,net:1,conv:1,labFinale:1,m:{dist:15.5,fov:48,roll:-4,sx:0,sy:-0.03}}};function _h(e,t,i=!1){let s=xh[e];if(!s)return null;let r={...tp,...s,...t&&s.m?s.m:{},...t&&i&&s.t?s.t:{}};return delete r.m,delete r.t,r}var Uo=[...np.filter((e)=>!["dist","tx","ty","tz","fit"].includes(e)),"LA","mx","my","mz"],q3=0.9;function X3(e){let t=e.length,i=new Float64Array(t);for(let s=1;s<t-1;s++){let r=e[s]-e[s-1],a=e[s+1]-e[s];i[s]=r*a>0?q3*2*r*a/(r+a):0}return i}var Oo=(e,t,i,s,r)=>{let a=r*r,o=a*r;return(2*o-3*a+1)*e+(o-2*a+r)*t+(-2*o+3*a)*i+(o-a)*s};function H6({canvas:e,labelsRoot:t,assets:i={},onReady:s,onChapter:r,onFrame:a}){let o=document.documentElement,c=matchMedia("(prefers-reduced-motion: reduce)"),l=matchMedia("(hover: hover) and (pointer: fine)").matches,h=!l||innerWidth<760||(navigator.hardwareConcurrency||8)<=4,u=new th({canvas:e,antialias:!h,alpha:!1,powerPreference:"high-performance",stencil:!1});u.setClearColor("#03050b",1),u.outputColorSpace=ri;let f=h?1.35:1.75,d=Math.min(window.devicePixelRatio||1,f),p=new so,g=new Qt(34,1,0.1,6000),v=u.extensions.has("KHR_parallel_shader_compile"),A=(le,me)=>v?u.compileAsync(le,g,me):Promise.resolve(u.compile(le,g,me));p.add(new xo("#8ea3ff","#0a0e1a",0.6));let m=new fs("#dde5ff",1.45);m.position.set(-40,60,34),p.add(m);let E=new fs("#ff9d66",0.55);E.position.set(50,18,-40),p.add(E);let T=sf({geo:ta,lite:h,landUrl:i.land}),b=af({geo:ta,lite:h});T.spin.add(b.group);let S=of({geo:ta,lite:h,landTex:T.land,fieldTex:T.field,landEuUrl:i.landEu}),R=jf(null,{max:h?3200:6500}),C=na(hr),_=(le)=>{let me=le.clone();return me.scale(C*sh,C*ms,C*ms),me},M=!1,B=Wf({lite:h,dataUrl:i.city,modelUrl:i.model,onLines:(le)=>{let me=_(le);R.setSource(me),me.dispose()},prepare:(le)=>A(le,p).catch(()=>{}),onLoaded:()=>{M=!0}});p.add(B.flood);let D=Ah(),F=Ah(),G=Kf(),L=ep({lite:h});p.add(T.group,S.group,B.group,R.object,G.group,L.group,D.group,F.group);let W=kn(99),ee=Gt({count:h?260:480,color:"#8d9fd6",core:"#e6ebff",size:1.2,depthTest:!1});for(let le=0;le<ee.alpha.length;le++){let me=W()*2-1,Ae=W()*Math.PI*2,be=700+W()*300,Ie=Math.sqrt(1-me*me);ee.pos.set([Math.cos(Ae)*Ie*be,me*be,Math.sin(Ae)*Ie*be],le*3),ee.alpha[le]=0.08+W()*W()*0.6,ee.size[le]=0.45+W()*W()*1.8}ee.uniforms.uMin.value=1,ee.points.renderOrder=-10,p.add(ee.points);let V=Gt({count:2,color:"#9fc0ff",core:"#ffffff",size:1,depthTest:!0,additive:!0});V.size[0]=260,V.size[1]=40,V.alpha[0]=0.32,V.alpha[1]=0.9,V.uniforms.uMax.value=520,V.points.renderOrder=-5,p.add(V.points);let H=T.sun.clone(),k=new P(H.x,0,H.z).normalize(),N=Math.asin(H.y),ie={night:0};function Ce(le){let me=N-le*34*mn;dr.value.copy(k).multiplyScalar(Math.cos(me)),dr.value.y=Math.sin(me);let Ae=wt(0,0.3,le);gs.value.set(Co(-0.12,-0.07,Ae),Co(0.38,0.13,Ae)),ie.night=1-wt(gs.value.x,gs.value.y,Math.sin(me))}let Me=[],et=[],We=[],Y=!1,ue=0,fe=0,Xe=null,J={..._h("hero",!1)},we={target:0,smooth:0},_e="";function ae(){let le=et.length,me=ue/Math.max(1,fe),Ae={},be={};for(let Ie of Uo)Ae[Ie]=new Float64Array(le);et.forEach((Ie,ze)=>{let lt=na(Ie.Z),tt=Ie.fit>0?Ie.fit/(2*Math.tan(Ie.fov*mn/2)*me*0.92):0;for(let ht of Uo)if(ht==="LA")Ae.LA[ze]=Math.log(Math.max(Ie.dist,tt)/lt);else if(ht==="mx")Ae.mx[ze]=Ie.tx/lt;else if(ht==="my")Ae.my[ze]=Ie.ty/lt;else if(ht==="mz")Ae.mz[ze]=Ie.tz/lt;else Ae[ht][ze]=Ie[ht]});for(let Ie of Uo)be[Ie]=X3(Ae[Ie]);Xe={v:Ae,m:be,n:le}}function ge(){let le=window.scrollY;if(Y=innerWidth<760||innerWidth/innerHeight<0.82,Me=[...document.querySelectorAll("[data-cam]")].map((be)=>{let Ie=be.getBoundingClientRect(),ze=Ie.top+le,lt=be.dataset.camAt||"center",tt=lt==="top"?ze:lt==="bottom"?ze+Ie.height-innerHeight:ze+Ie.height/2-innerHeight/2;return{id:be.dataset.cam,y:Math.max(0,tt)}}).filter((be)=>xh[be.id]).sort((be,Ie)=>be.y-Ie.y),!Me.length)Me=[{id:"hero",y:0}];let me=Y&&innerWidth>=600;et=Me.map((be)=>_h(be.id,Y,me)),ae(),L.setLayout(Y),t?.classList.toggle("is-portrait",Y),We=[...document.querySelectorAll("[data-cover]")].map((be)=>{let Ie=be.getBoundingClientRect();return[Ie.top+le,Ie.bottom+le]}),We.sort((be,Ie)=>be[0]-Ie[0]);let Ae=[];We.forEach((be)=>{let Ie=Ae[Ae.length-1];if(Ie&&be[0]<=Ie[1]+2)Ie[1]=Math.max(Ie[1],be[1]);else Ae.push([be[0],be[1]])}),We=Ae}function ke(le){if(Me.length<2||le<=Me[0].y)return 0;for(let me=0;me<Me.length-1;me++){let Ae=Me[me].y,be=Me[me+1].y;if(le<be)return me+(be>Ae?(le-Ae)/(be-Ae):1)}return Me.length-1}function He(le,me){let{v:Ae,m:be,n:Ie}=Xe,ze=Math.min(Ie-2,Math.max(0,Math.floor(le))),lt=Ie<2?0:ur(le-ze);if(c.matches)lt=lt<0.5?0:1;let tt=Ie<2?0:ze+1;for(let $t of Uo)me[$t]=Oo(Ae[$t][ze],be[$t][ze],Ae[$t][tt],be[$t][tt],lt);let ht=Ae.LA[ze],mt=Ae.LA[tt],rn=Math.abs(mt-ht);if(rn>0.05&&lt>0&&lt<1){let $t=Math.exp(ht),vs=Math.exp(mt),Ti=Co(lt,ur((Math.exp(me.LA)-$t)/(vs-$t)),ur(rn/1.5));me.mx=Oo(Ae.mx[ze],be.mx[ze],Ae.mx[tt],be.mx[tt],Ti),me.my=Oo(Ae.my[ze],be.my[ze],Ae.my[tt],be.my[tt],Ti),me.mz=Oo(Ae.mz[ze],be.mz[ze],Ae.mz[tt],be.mz[tt],Ti)}let xn=na(me.Z);return me.dist=Math.exp(me.LA)*xn,me.tx=me.mx*xn,me.ty=me.my*xn,me.tz=me.mz*xn,me.chapter=lt<0.5?Me[ze].id:Me[tt].id,me}function st(le){for(let[me,Ae]of We)if(le>=me-1&&le+fe<=Ae+1)return!0;return!1}function at(le=!1){let me=e.clientWidth||innerWidth,Ae=e.clientHeight||innerHeight;if(!le&&me===ue&&Math.abs(Ae-fe)<120)return;ue=me,fe=Ae,u.setPixelRatio(d),u.setSize(me,Ae,!1),g.aspect=me/Ae,g.updateProjectionMatrix(),ge()}let ut={x:0,y:0,sx:0,sy:0},Q=(le)=>{if(le.pointerType!=="mouse")return;ut.x=le.clientX/innerWidth*2-1,ut.y=le.clientY/innerHeight*2-1};if(l)window.addEventListener("pointermove",Q,{passive:!0});let de=n.map(()=>!1),I=1,Je=-1,qe=-1;L.setStates(de);let Te=t?[...t.querySelectorAll("[data-l]")].map((le)=>({el:le,key:le.dataset.l,o:-1,x:-1e4,y:-1e4})):[],y=new P,x=new P,U=new P,K=(le)=>ta.cities.findIndex((me)=>me[0]===le);function he(le,me){let[Ae,be]=le.split("-"),Ie=+be;switch(Ae){case"osijek":case"you":return T.osijekWorld(y),x.copy(y).sub(me.globeCenter).normalize(),x.dot(U.copy(me.camPos).sub(y))>0?(Ae==="you"?J.labFinale:J.labOsijek)*me.globeA:0;case"city":return S.cityWorld(K(be),y),(be==="Osijek"?Math.max(J.labCities,J.labTowns)*(1-wt(1.62,1.8,J.Z)):J.labCities)*me.europeA;case"town":return S.townWorld(Ie,y),J.labTowns*me.europeA;case"cath":case"drava":case"hotel":case"trg":return y.copy(B.anchors[Ae]).applyMatrix4(B.group.matrixWorld),J.labCity*me.cityA*wt(hr-0.12,hr-0.01,J.Z);case"ch":return y.copy(L.channelWorld(Ie)),J.labFlow;case"out":return y.copy(L.outcomeWorld(Ie)),J.labFlow;case"gate":return y.copy(L.gateWorld(Ie)),J.labFlow;case"layer":return G.anchor(Ie,y),J.labLayers*J.layersA*G.arrival(Ie)*(0.38+0.62*G.emphasis(Ie));default:return 0}}function ve(le,me){for(let Ae of Te){let be=me?he(Ae.key,le):0;if(be>0.01)if(y.project(g),y.z>1||Math.abs(y.x)>1.15||Math.abs(y.y)>1.15)be=0;else{be*=1-wt(0.8,0.95,Math.abs(y.x));let Ie=Math.round((y.x*0.5+0.5)*ue),ze=Math.round((-y.y*0.5+0.5)*fe);if(Ie!==Ae.x||ze!==Ae.y)Ae.el.style.transform=`translate3d(${Ie}px, ${ze}px, 0)`,Ae.x=Ie,Ae.y=ze}if(be=Math.round(ur(be)*100)/100,be!==Ae.o){if(Ae.el.style.opacity=String(be),be>0.5!==Ae.o>0.5)Ae.el.classList.toggle("is-on",be>0.5);Ae.o=be}}}async function Re(){let le=[];p.traverse((me)=>{le.push([me,me.visible,me.frustumCulled]),me.visible=!0,me.frustumCulled=!1});try{await A(p)}catch(me){}u.setScissorTest(!0),u.setScissor(0,0,1,1),u.render(p,g),u.setScissorTest(!1);for(let[me,Ae,be]of le)me.visible=Ae,me.frustumCulled=be}let te=0,oe=performance.now(),Ee=0,Be=0,Pe=!1,ye=!1,ne=0,re=16,De=!1,O=null,pe=!1,X=!1,se={globeCenter:new P,camPos:new P,globeA:0,europeA:0,cityA:0},xe={},ce=new P,Se=new P;function Ye(le,me){let Ae=me??Math.min(0.05,Math.max(0.001,(le-oe)/1000));oe=le;let be=c.matches;if(!be)Ee+=Ae;let Ie=window.scrollY;if(we.target=ke(Ie),Math.abs(we.target-we.smooth)>1.1)we.smooth=we.target-Math.sign(we.target-we.smooth)*1.1;if(we.smooth=be?we.target:Po(we.smooth,we.target,4.6,Ae),Math.abs(we.smooth-we.target)<0.0001)we.smooth=we.target;if(He(we.smooth,J),O)Object.assign(J,O);if(He(we.target,xe),xe.chapter!==_e)_e=xe.chapter,r?.(_e);let ze=st(Ie);if(a?.({progress:we.smooth,covered:ze}),ze&&Pe){if(!De)ve(se,!1),De=!0;return}if(De=!1,l&&!be)ut.sx=Po(ut.sx,ut.x,2.5,Ae),ut.sy=Po(ut.sy,ut.y,2.5,Ae);let lt=(J.az+ut.sx*2.6)*mn,tt=(J.el-ut.sy*1.5)*mn;if(g.position.set(J.tx+J.dist*Math.cos(tt)*Math.sin(lt),J.ty+J.dist*Math.sin(tt),J.tz+J.dist*Math.cos(tt)*Math.cos(lt)),g.up.set(0,1,0),g.lookAt(J.tx,J.ty,J.tz),J.roll)g.rotateZ(J.roll*mn);if(Math.abs(g.fov-J.fov)>0.01)g.fov=J.fov;g.near=J.Z>1.5?0.5:0.05,g.far=J.Z>1.5?2400:6000,g.setViewOffset(ue,fe,-J.sx*ue,J.sy*fe,ue,fe),g.updateProjectionMatrix(),g.updateMatrixWorld();let ht=J.Z,mt=na(ht),rn=To*mt;if(T.group.scale.setScalar(rn),T.group.position.set(0,-rn,0),se.globeCenter.set(0,-rn,0),J.idle>0.985&&!be)Be+=Ae*0.012;let xn=Math.atan2(Math.sin(Be),Math.cos(Be)),$t=1-wt(0.86,0.94,ht);if(T.update({alpha:$t,spin:xn*J.idle,net:J.net,finale:J.finale,dive:wt(0.45,0.9,ht),time:Ee,pr:d,reduce:be}),T.group.updateMatrixWorld(),b.update({alpha:$t*(0.55+0.45*J.net),time:Ee,conv:J.conv,pr:d,camera:g,frame:T.spin}),J.finale>0.01)T.osijekWorld(Se).sub(se.globeCenter).multiplyScalar(0.9833333333333332).add(se.globeCenter);F.update({b:J.finale*0.85,alpha:$t,at:Se,unit:rn*0.0005,camera:g,time:Ee,pr:d,drop:0}),Ce(J.dusk),As.value=1-wt(0.86,0.97,ht);let vs=wt(0.78,0.87,ht)*(1-wt(1.8,1.97,ht));S.group.scale.set(mt,Math.min(mt,1),mt),S.update({alpha:vs,Z:ht,time:Ee,dt:Ae,pr:d,reduce:be,net:J.net,trace:J.trace,hl:J.hl,dusk:J.dusk,night:ie.night,mapFade:wt(1.06,1.4,ht),res:[ue*d,fe*d]}),B.group.scale.set(mt*sh,mt*ms,mt*ms),B.group.updateMatrixWorld();let Ti=wt(0.42,1,J.scan),ys=wt(1.72,2.05,ht),Ar=wt(1.04,1.28,ht);B.update({alpha:ys,lamps:Ar,wake:ie.night*1.12,detail:wt(1.95,2.25,ht),rise:J.rise,dim:J.dim,lines:J.lines,cath:wt(0.45,1,J.cath),glow:J.glow,cathSolid:J.cathSolid,focus:J.focus,scan:Ti,time:Ee,pr:d,reduce:be}),B.flood.position.copy(B.floodLocal).applyMatrix4(B.group.matrixWorld);let w=Ar>0.15;if(w!==pe)pe=w,o.classList.toggle("show-osm",w);let z=mt*ms;ce.copy(B.spire).applyMatrix4(B.group.matrixWorld),D.update({b:J.beam,alpha:ys,at:ce,unit:z,camera:g,time:Ee,pr:d});let Z=I*J.flow,j=((B.spire.y+2)*(1-Ti)-1.5)*z;R.update({morph:J.morph,opacity:J.wire*ys,time:Ee,bad:Z,scanY:j,scanOn:J.wire>0.001&&J.morph<0.999?1:0}),L.update({alpha:J.flow,time:Ee,dt:Ae,pr:d,reduce:be,focusGate:Je}),G.update({p:J.layers,alpha:J.layersA,assemble:J.assemble,active:J.assemble>0.5?-1:qe,dt:Ae,reduce:be});for(let q=0;q<2;q++)V.pos[q*3]=g.position.x+T.sun.x*900,V.pos[q*3+1]=g.position.y+T.sun.y*900,V.pos[q*3+2]=g.position.z+T.sun.z*900;if(V.geometry.attributes.position.needsUpdate=!0,V.uniforms.uPR.value=d,V.uniforms.uOpacity.value=(1-wt(0.25,0.8,ht))*(J.finale>0.5?0.7:1),V.points.visible=V.uniforms.uOpacity.value>0.002,ee.points.position.copy(g.position),ee.uniforms.uPR.value=d,ee.uniforms.uOpacity.value=J.stars*(1-wt(0.6,1,ht))+J.stars*0.25*wt(1.5,2,ht),ee.points.visible=ee.uniforms.uOpacity.value>0.002,p.updateMatrixWorld(),se.camPos.copy(g.position),se.globeA=$t,se.europeA=vs,se.cityA=ys,ve(se,!ze),u.render(p,g),!Pe)Pe=!0,s?.();if(M&&!X&&!me)M=!1,X=!0,(window.requestIdleCallback||((Le)=>setTimeout(Le,60)))(()=>Re().finally(()=>{X=!1}),{timeout:1200});if(!me)if(re=re*0.95+Ae*1000*0.05,re>24&&d>1){if(++ne>90)d=Math.max(1,d-0.25),ne=0,re=16,at(!0)}else ne=0}function xt(le){if(te=requestAnimationFrame(xt),!ye||document.hidden||window.__zaecFreeze){oe=le;return}Ye(le)}let _t=new ResizeObserver(()=>at());_t.observe(e);let sn=new ResizeObserver(()=>ge());sn.observe(document.body);let An=()=>{oe=performance.now()};document.addEventListener("visibilitychange",An);let Ei=(le)=>{le.preventDefault(),ye=!1,o.classList.add("webgl-lost")};e.addEventListener("webglcontextlost",Ei),at(!0),we.smooth=we.target=ke(window.scrollY),He(we.smooth,J);let gn=!1,bn=()=>{if(gn)return;gn=!0,ye=!0,oe=performance.now(),te=requestAnimationFrame(xt)};return Promise.race([Re(),new Promise((le)=>setTimeout(le,2500))]).finally(bn),{lite:h,refresh:()=>ge(),setGates(le){de=le.slice(),I=de.filter((me)=>!me).length/de.length,L.setStates(de)},setFocusGate(le){Je=le},setLayerHover(le){qe=le},layerCount:bh.length,debugStep(le=1){for(let me=0;me<le;me++)Ye(performance.now(),0.016666666666666666);return this.debugCam()},debugCam(){return{progress:+we.smooth.toFixed(3),chapter:_e,Z:+J.Z.toFixed(3),cam:g.position.toArray().map((le)=>+le.toFixed(2)),target:[J.tx,J.ty,J.tz].map((le)=>+le.toFixed(2)),anchors:Me.map((le)=>`${le.id}@${Math.round(le.y)}`),dpr:d,lite:h,lines:R.count,cityLoaded:B.isLoaded(),night:+ie.night.toFixed(2)}},stats:()=>L.stats(),debugState:()=>({...J}),debug:{camera:g,scene:p,globe:T,europe:S,city:B,renderer:u,beam:D},debugOverride(le){return O=le,this.debugStep(1)},dispose(){cancelAnimationFrame(te),ye=!1,_t.disconnect(),sn.disconnect(),document.removeEventListener("visibilitychange",An),e.removeEventListener("webglcontextlost",Ei),window.removeEventListener("pointermove",Q),[T,b,S,B,R,G,L,D,F].forEach((le)=>le.dispose()),ee.geometry.dispose(),V.geometry.dispose(),V.material.dispose(),ee.material.dispose(),u.dispose()}}}export{H6 as createWorld3};
