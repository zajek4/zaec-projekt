import{n}from"./app-fjph34ja.js";var yh="186";var Mh=0,Rc=1,Sh=2;var Hr=1,wh=2,Qs=3,ci=0,yn=1,Qt=2,li=0,ui=1,Zt=2,Cc=3,Pc=4,Xi=5;var er=100,Eh=101,Th=102,Rh=103,Qa=104,Ch=200,hi=201,Ph=202,Ih=203,Dh=204,eo=205,Lh=206,Fh=207,Nh=208,Uh=209,Oh=210,Bh=211,kh=212,zh=213,Hh=214,Gh=0,Wh=1,Vh=2,Ic=3,jh=4,qh=5,Xh=6,Kh=7,Yh=0,Jh=1,Zh=2,Qn=0,Dc=1,Lc=2,Fc=3,Nc=4,Uc=5,Oc=6,Bc=7;var tr=301,As=302,to=303,no=304,Gr=306,ei=1000,Ki=1001,io=1002,ti=1003,so=1004;var gs=1005;var Gt=1006,nr=1007;var Bn=1008;var bn=1009,$h=1010,Qh=1011,Wr=1012,kc=1013,Yi=1014,Ci=1015,di=1016,zc=1017,Hc=1018,ir=1020,ed=35902,td=35899,nd=1021,id=1022,kn=1023,bs=1026,vs=1027,fi=1028,Gc=1029,xs=1030,Wc=1031;var Vc=1033,ro=33776,ao=33777,oo=33778,co=33779,jc=35840,qc=35841,Xc=35842,Kc=35843,Yc=36196,Jc=37492,Zc=37496,$c=37488,Qc=37489,lo=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,cl=37815,ll=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,ml=36492,Al=36494,gl=36495,bl=36283,vl=36284,uo=36285,xl=36286;var _l=2300,ho=2301;var yl=0,Vr=1,sr=2;var Ml=0,sd=1,Mn="",pi="srgb",Cn="srgb-linear",Sl="linear",Wt="srgb";var rd=512,ad=513,od=514,fo=515,cd=516,ld=517,po=518,ud=519;var wl=35048;var El="300 es",Tl=2000;function yp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Mp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Js(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function hd(){let e=Js("canvas");return e.style.display="block",e}var Du={},Zs=null;function Or(...e){let t="THREE."+e.shift();if(Zs)Zs("log",t,...e);else console.log(t,...e)}function dd(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function et(...e){e=dd(e);let t="THREE."+e.shift();if(Zs)Zs("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function ht(...e){e=dd(e);let t="THREE."+e.shift();if(Zs)Zs("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function fs(...e){let t=e.join(" ");if(t in Du)return;Du[t]=!0,et(...e)}function fd(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}var pd={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Pi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);if(r!==-1)s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}var An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,Ks=Math.PI/180,ps=180/Math.PI;function On(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[e&255]+An[e>>8&255]+An[e>>16&255]+An[e>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Rt(e,t,i){return Math.max(t,Math.min(i,e))}function Rl(e,t){return(e%t+t)%t}function Sp(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function wp(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Fr(e,t,i){return(1-i)*e+i*t}function Ep(e,t,i,s){return Fr(e,t,1-Math.exp(-i*s))}function Tp(e,t=1){return t-Math.abs(Rl(e,t*2)-t)}function Rp(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function Cp(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function Pp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ip(e,t){return e+Math.random()*(t-e)}function Dp(e){return e*(0.5-Math.random())}function Lp(e){if(e!==void 0)Lu=e;let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(e){return e*Ks}function Np(e){return e*ps}function Up(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Op(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Bp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function kp(e,t,i,s,r){let{cos:a,sin:o}=Math,c=a(i/2),l=o(i/2),u=a((t+s)/2),h=o((t+s)/2),f=a((t-s)/2),d=o((t-s)/2),p=a((s-t)/2),g=o((s-t)/2);switch(r){case"XYX":e.set(c*h,l*f,l*d,c*u);break;case"YZY":e.set(l*d,c*h,l*f,c*u);break;case"ZXZ":e.set(l*f,l*d,c*h,c*u);break;case"XZX":e.set(c*h,l*g,l*p,c*u);break;case"YXY":e.set(l*p,c*h,l*g,c*u);break;case"ZYZ":e.set(l*g,l*p,c*h,c*u);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Cl={DEG2RAD:Ks,RAD2DEG:ps,generateUUID:On,clamp:Rt,euclideanModulo:Rl,mapLinear:Sp,inverseLerp:wp,lerp:Fr,damp:Ep,pingpong:Tp,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Ip,randFloatSpread:Dp,seededRandom:Lp,degToRad:Fp,radToDeg:Np,isPowerOfTwo:Up,ceilPowerOfTwo:Op,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:kp,normalize:kt,denormalize:$n};class Oe{static{Oe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],g=r[a+3];if(h!==g||c!==f||l!==d||u!==p){let y=c*f+l*d+u*p+h*g;if(y<0)f=-f,d=-d,p=-p,g=-g,y=-y;let A=1-o;if(y<0.9995){let m=Math.acos(y),S=Math.sin(m);A=Math.sin(A*m)/S,o=Math.sin(o*m)/S,c=c*A+f*o,l=l*A+d*o,u=u*A+p*o,h=h*A+g*o}else{c=c*A+f*o,l=l*A+d*o,u=u*A+p*o,h=h*A+g*o;let m=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=m,l*=m,u*=m,h*=m}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-o*d,e[t+2]=l*p+u*d+o*f-c*h,e[t+3]=u*p-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:s,_z:r,_order:a}=e,{cos:o,sin:c}=Math,l=o(i/2),u=o(s/2),h=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){let d=0.5/Math.sqrt(f+1);this._w=0.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=0.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=0.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,{_x:o,_y:c,_z:l,_w:u}=t;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,o=this.dot(e);if(o<0)i=-i,s=-s,r=-r,a=-a,o=-o;let c=1-t;if(o<0.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,{x:r,y:a,z:o,w:c}=e,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:s,z:r}=e,{x:a,y:o,z:c}=t;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Zo=new P,Fu=new zn;class At{static{At.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],g=s[0],y=s[3],A=s[6],m=s[1],S=s[4],w=s[7],b=s[2],M=s[5],R=s[8];return r[0]=a*g+o*m+c*b,r[3]=a*y+o*S+c*M,r[6]=a*A+o*w+c*R,r[1]=l*g+u*m+h*b,r[4]=l*y+u*S+h*M,r[7]=l*A+u*w+h*R,r[2]=f*g+d*m+p*b,r[5]=f*y+d*S+p*M,r[8]=f*A+d*w+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(s*l-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=f*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($o.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($o.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var $o=new At,Nu=new At().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Uu=new At().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function zp(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,a,o){if(this.enabled===!1||a===o||!a||!o)return r;if(this.spaces[a].transfer==="srgb")r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b);if(this.spaces[a].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b);return r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r==="")return"linear";return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],s=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:s,transfer:"linear",toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:s,transfer:"srgb",toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var Tt=zp();function Ti(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Ys(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Fs;class Pl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Fs===void 0)Fs=Js("canvas");Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");if(e instanceof ImageData)s.putImageData(e,0,0);else s.drawImage(e,0,0,e.width,e.height);i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(Ti(t[i]/255)*255);else t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Hp=0;class jr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)if(s[a].isDataTexture)r.push(Qo(s[a].image));else r.push(Qo(s[a]))}else r=Qo(s);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function Qo(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Pl.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return et("Texture: Unable to serialize Texture."),{}}var Gp=0,ec=new P;class rn extends Pi{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=rn.DEFAULT_ANISOTROPY,u=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=On(),this.name="",this.source=new jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}if(s&&i&&(s.isVector2&&i.isVector2))s.copy(i);else if(s&&i&&(s.isVector3&&i.isVector3))s.copy(i);else if(s&&i&&(s.isMatrix3&&i.isMatrix3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=300;rn.DEFAULT_ANISOTROPY=1;class Ht{static{Ht.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=0.01,o=0.1,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],g=c[2],y=c[6],A=c[10];if(Math.abs(u-f)<0.01&&Math.abs(h-g)<0.01&&Math.abs(p-y)<0.01){if(Math.abs(u+f)<0.1&&Math.abs(h+g)<0.1&&Math.abs(p+y)<0.1&&Math.abs(l+d+A-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,w=(d+1)/2,b=(A+1)/2,M=(u+f)/4,R=(h+g)/4,C=(p+y)/4;if(S>w&&S>b)if(S<0.01)i=0,s=0.707106781,r=0.707106781;else i=Math.sqrt(S),s=M/i,r=R/i;else if(w>b)if(w<0.01)i=0.707106781,s=0,r=0.707106781;else s=Math.sqrt(w),i=M/s,r=C/s;else if(b<0.01)i=0.707106781,s=0.707106781,r=0;else r=Math.sqrt(b),i=R/r,s=C/r;return this.set(i,s,r,t),this}let m=Math.sqrt((y-p)*(y-p)+(h-g)*(h-g)+(f-u)*(f-u));if(Math.abs(m)<0.001)m=1;return this.x=(y-p)/m,this.y=(h-g)/m,this.z=(f-u)/m,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Il extends Pi{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new rn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)if(this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0)this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new jr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Il{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class mo extends rn{constructor(e=null,t=1,i=1,s=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dl extends rn{constructor(e=null,t=1,i=1,s=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class at{static{at.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,u,h,f,d,p,g,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,s,r,a,o,c,l,u,h,f,d,p,g,y)}set(e,t,i,s,r,a,o,c,l,u,h,f,d,p,g,y){let A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=u,A[10]=h,A[14]=f,A[3]=d,A[7]=p,A[11]=g,A[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:s,z:r}=e,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,p=l*u,g=l*h;t[0]=f+g*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,p=l*u,g=l*h;t[0]=f-g*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=g-f*h,t[8]=p*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-g*h}else if(e.order==="XZY"){let f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,Vp)}lookAt(e,t,i){let s=this.elements;if(En.subVectors(e,t),En.lengthSq()===0)En.z=1;if(En.normalize(),zi.crossVectors(i,En),zi.lengthSq()===0){if(Math.abs(i.z)===1)En.x+=0.0001;else En.z+=0.0001;En.normalize(),zi.crossVectors(i,En)}return zi.normalize(),va.crossVectors(En,zi),s[0]=zi.x,s[4]=va.x,s[8]=En.x,s[1]=zi.y,s[5]=va.y,s[9]=En.y,s[2]=zi.z,s[6]=va.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],g=i[6],y=i[10],A=i[14],m=i[3],S=i[7],w=i[11],b=i[15],M=s[0],R=s[4],C=s[8],v=s[12],T=s[1],I=s[5],N=s[9],F=s[13],z=s[2],B=s[6],j=s[10],ie=s[14],J=s[3],W=s[7],H=s[11],U=s[15];return r[0]=a*M+o*T+c*z+l*J,r[4]=a*R+o*I+c*B+l*W,r[8]=a*C+o*N+c*j+l*H,r[12]=a*v+o*F+c*ie+l*U,r[1]=u*M+h*T+f*z+d*J,r[5]=u*R+h*I+f*B+d*W,r[9]=u*C+h*N+f*j+d*H,r[13]=u*v+h*F+f*ie+d*U,r[2]=p*M+g*T+y*z+A*J,r[6]=p*R+g*I+y*B+A*W,r[10]=p*C+g*N+y*j+A*H,r[14]=p*v+g*F+y*ie+A*U,r[3]=m*M+S*T+w*z+b*J,r[7]=m*R+S*I+w*B+b*W,r[11]=m*C+S*N+w*j+b*H,r[15]=m*v+S*F+w*ie+b*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],g=e[7],y=e[11],A=e[15],m=c*d-l*f,S=o*d-l*h,w=o*f-c*h,b=a*d-l*u,M=a*f-c*u,R=a*h-o*u;return t*(g*m-y*S+A*w)-i*(p*m-y*b+A*M)+s*(p*S-g*b+A*R)-r*(p*w-g*M+y*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;if(e.isVector3)s[12]=e.x,s[13]=e.y,s[14]=e.z;else s[12]=e,s[13]=t,s[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],g=e[13],y=e[14],A=e[15],m=t*o-i*a,S=t*c-s*a,w=t*l-r*a,b=i*c-s*o,M=i*l-r*o,R=s*l-r*c,C=u*g-h*p,v=u*y-f*p,T=u*A-d*p,I=h*y-f*g,N=h*A-d*g,F=f*A-d*y,z=m*F-S*N+w*I+b*T-M*v+R*C;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/z;return e[0]=(o*F-c*N+l*I)*B,e[1]=(s*N-i*F-r*I)*B,e[2]=(g*R-y*M+A*b)*B,e[3]=(f*M-h*R-d*b)*B,e[4]=(c*T-a*F-l*v)*B,e[5]=(t*F-s*T+r*v)*B,e[6]=(y*w-p*R-A*S)*B,e[7]=(u*R-f*w+d*S)*B,e[8]=(a*N-o*T+l*C)*B,e[9]=(i*T-t*N-r*C)*B,e[10]=(p*M-g*w+A*m)*B,e[11]=(h*w-u*M-d*m)*B,e[12]=(o*v-a*I-c*C)*B,e[13]=(t*I-i*v+s*C)*B,e[14]=(g*S-p*b-y*m)*B,e[15]=(u*b-h*S+f*m)*B,this}scale(e){let t=this.elements,{x:i,y:s,z:r}=e;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,{x:a,y:o,z:c}=e,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,{_x:r,_y:a,_z:o,_w:c}=t,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,p=r*h,g=a*u,y=a*h,A=o*h,m=c*l,S=c*u,w=c*h,{x:b,y:M,z:R}=i;return s[0]=(1-(g+A))*b,s[1]=(d+w)*b,s[2]=(p-S)*b,s[3]=0,s[4]=(d-w)*M,s[5]=(1-(f+A))*M,s[6]=(y+m)*M,s[7]=0,s[8]=(p+S)*R,s[9]=(y-m)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),c=Ns.set(s[8],s[9],s[10]).length();if(r<0)a=-a;Yn.copy(this);let l=1/a,u=1/o,h=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=2000,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===2000)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===2001)p=-a/(a-r),g=-a*r/(a-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2000,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===2000)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===2001)p=-1/(a-r),g=-r/(a-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Ns=new P,Yn=new at,Wp=new P(0,0,0),Vp=new P(1,1,1),zi=new P,va=new P,En=new P,Ou=new at,Bu=new zn;class Ri{constructor(e=0,t=0,i=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":if(this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(o,d),this._z=Math.atan2(c,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l);else this._y=0,this._z=Math.atan2(c,r);break;case"ZYX":if(this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(f,d),this._z=Math.atan2(c,r);else this._x=0,this._z=Math.atan2(-a,l);break;case"YZX":if(this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<0.9999999)this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,d);break;case"XZY":if(this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-u,d),this._y=0;break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var jp=0,ku=new P,Us=new zn,_i=new at,xa=new P,wr=new P,qp=new P,Xp=new zn,zu=new P(1,0,0),Hu=new P(0,1,0),Gu=new P(0,0,1),Wu={type:"added"},Kp={type:"removed"},Os={type:"childadded",child:null},tc={type:"childremoved",child:null};class jt extends Pi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();let e=new P,t=new Ri,i=new zn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new At}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)xa.copy(e);else xa.set(e,t,i);let s=this.parent;if(this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)_i.lookAt(wr,xa,this.up);else _i.lookAt(xa,wr,this.up);if(this.quaternion.setFromRotationMatrix(_i),s)_i.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(_i),this.quaternion.premultiply(Us.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return ht("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Os.child=e,this.dispatchEvent(Os),Os.child=null;else ht("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),tc.child=e,this.dispatchEvent(tc),tc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld);return e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:s}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null)s.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let s={};if(s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)s.userData=this.userData;if(s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null)s.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)s.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)s.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map((o)=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)s.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)s.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)s.boundingBox=this.boundingBox.toJSON()}function r(o,c){if(o[c.uuid]===void 0)o[c.uuid]=c.toJSON(e);return c.uuid}if(this.isScene){if(this.background){if(this.background.isColor)s.background=this.background.toJSON();else if(this.background.isTexture)s.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)s.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh){if(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);if(o.length>0)i.geometries=o;if(c.length>0)i.materials=c;if(l.length>0)i.textures=l;if(u.length>0)i.images=u;if(h.length>0)i.shapes=h;if(f.length>0)i.skeletons=f;if(d.length>0)i.animations=d;if(p.length>0)i.nodes=p}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.DEFAULT_UP=new P(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends jt{constructor(){super();this.isGroup=!0,this.type="Group"}}var Yp={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let y=t.getJointPose(g,i),A=this._getHandJoint(l,g);if(y!==null)A.matrix.fromArray(y.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=y.radius;A.visible=y!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=0.02,p=0.005;if(l.inputState.pinching&&f>d+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=d-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(c!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity)c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity);else c.hasLinearVelocity=!1;if(r.angularVelocity)c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity);else c.hasAngularVelocity=!1;if(c.eventsEnabled)c.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null)s=r;if(s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Yp)}}}if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;if(l!==null)l.visible=a!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function nc(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;if(s&&s.isColor)this.copy(s);else if(typeof s==="number")this.setHex(s);else if(typeof s==="string")this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=Rl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=nc(a,r,e+0.3333333333333333),this.g=nc(a,r,e),this.b=nc(a,r,e-0.3333333333333333)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t="srgb"){function i(r){if(r===void 0)return;if(parseFloat(r)<1)et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(a===6)return this.setHex(parseInt(r,16),t);else et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=md[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else et("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Tt.workingToColorSpace(gn.copy(this),e),Math.round(Rt(gn.r*255,0,255))*65536+Math.round(Rt(gn.g*255,0,255))*256+Math.round(Rt(gn.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(gn.copy(this),t);let{r:i,g:s,b:r}=gn,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=0.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e="srgb"){Tt.workingToColorSpace(gn.copy(this),e);let{r:t,g:i,b:s}=gn;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(_a);let i=Fr(Hi.h,_a.h,t),s=Fr(Hi.s,_a.s,t),r=Fr(Hi.l,_a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var gn=new Be;Be.NAMES=md;class go extends jt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Jn=new P,yi=new P,ic=new P,Mi=new P,Bs=new P,ks=new P,Vu=new P,sc=new P,rc=new P,ac=new P,oc=new Ht,cc=new Ht,lc=new Ht;class Rn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();if(r>0)return s.multiplyScalar(1/Math.sqrt(r));return s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),yi.subVectors(i,t),ic.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(yi),c=Jn.dot(ic),l=yi.dot(yi),u=yi.dot(ic),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,p=(a*u-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){if(this.getBarycoord(e,t,i,s,Mi)===null)return!1;return Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){if(this.getBarycoord(e,t,i,s,Mi)===null){if(c.x=0,c.y=0,"z"in c)c.z=0;if("w"in c)c.w=0;return null}return c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c}static getInterpolatedAttribute(e,t,i,s,r,a){return oc.setScalar(0),cc.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,i),lc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),yi.subVectors(e,t),Jn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Jn.cross(yi).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,i),ks.subVectors(r,i),sc.subVectors(e,i);let c=Bs.dot(sc),l=ks.dot(sc);if(c<=0&&l<=0)return t.copy(i);rc.subVectors(e,s);let u=Bs.dot(rc),h=ks.dot(rc);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Bs,a);ac.subVectors(e,r);let d=Bs.dot(ac),p=ks.dot(ac);if(p>=0&&d<=p)return t.copy(r);let g=d*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(ks,o);let y=u*p-d*h;if(y<=0&&h-u>=0&&d-p>=0)return Vu.subVectors(r,s),o=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Vu,o);let A=1/(y+g+f);return a=g*A,o=f*A,t.copy(i).addScaledVector(Bs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++){if(e.isMesh===!0)e.getVertexPosition(a,Zn);else Zn.fromBufferAttribute(r,a);Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();ya.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();ya.copy(i.boundingBox)}ya.applyMatrix4(e.matrixWorld),this.union(ya)}}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Ma.subVectors(this.max,Er),zs.subVectors(e.a,Er),Hs.subVectors(e.b,Er),Gs.subVectors(e.c,Er),Gi.subVectors(Hs,zs),Wi.subVectors(Gs,Hs),ls.subVectors(zs,Gs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ls.z,ls.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ls.z,0,-ls.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ls.y,ls.x,0];if(!uc(t,zs,Hs,Gs,Ma))return!1;if(t=[1,0,0,0,1,0,0,0,1],!uc(t,zs,Hs,Gs,Ma))return!1;return Sa.crossVectors(Gi,Wi),t=[Sa.x,Sa.y,Sa.z],uc(t,zs,Hs,Gs,Ma)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Zn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Si=[new P,new P,new P,new P,new P,new P,new P,new P],Zn=new P,ya=new Sn,zs=new P,Hs=new P,Gs=new P,Gi=new P,Wi=new P,ls=new P,Er=new P,Ma=new P,Sa=new P,us=new P;function uc(e,t,i,s,r){for(let a=0,o=e.length-3;a<=o;a+=3){us.fromArray(e,a);let c=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),l=t.dot(us),u=i.dot(us),h=s.dot(us);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return!1}return!0}var sn=new P,wa=new Oe,Jp=0;class ut extends Pi{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=$n(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=kt(i,this.array);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=$n(t,this.array);return t}setX(e,t){if(this.normalized)t=kt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=$n(t,this.array);return t}setY(e,t){if(this.normalized)t=kt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=$n(t,this.array);return t}setZ(e,t){if(this.normalized)t=kt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=$n(t,this.array);return t}setW(e,t){if(this.normalized)t=kt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=kt(t,this.array),i=kt(i,this.array);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){if(e*=this.itemSize,this.normalized)t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e*=this.itemSize,this.normalized)t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vo extends ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Zp=new Sn,Tr=new P,hc=new P;class an{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Zp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*0.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(hc)),this.expandByPoint(Tr.copy(e.center).sub(hc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var $p=0,Un=new at,dc=new jt,Ws=new P,Tn=new Sn,Rr=new Sn,dn=new P;class it extends Pi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((yp(e))?vo:bo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new At().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;if(s!==void 0)s.transformDirection(e),s.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}if(e.length>t.count)et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Sn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];if(Tn.setFromBufferAttribute(r),this.morphTargetsRelative)dn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(dn);else this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new an;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];if(Rr.setFromBufferAttribute(o),this.morphTargetsRelative)dn.addVectors(Tn.min,Rr.min),Tn.expandByPoint(dn),dn.addVectors(Tn.max,Rr.max),Tn.expandByPoint(dn);else Tn.expandByPoint(Rr.min),Tn.expandByPoint(Rr.max)}Tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++){if(dn.fromBufferAttribute(o,l),c)Ws.fromBufferAttribute(e,l),dn.add(Ws);s=Math.max(s,i.distanceToSquared(dn))}}if(this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius))ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:s,uv:r}=t,a=this.getAttribute("tangent");if(a===void 0||a.count!==i.count)a=new ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",a);let o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new P,c[C]=new P;let l=new P,u=new P,h=new P,f=new Oe,d=new Oe,p=new Oe,g=new P,y=new P;function A(C,v,T){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,v),p.fromBufferAttribute(r,T),u.sub(l),h.sub(l),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);if(!isFinite(I))return;g.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(I),y.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(I),o[C].add(g),o[v].add(g),o[T].add(g),c[C].add(y),c[v].add(y),c[T].add(y)}let m=this.groups;if(m.length===0)m=[{start:0,count:e.count}];for(let C=0,v=m.length;C<v;++C){let T=m[C],{start:I,count:N}=T;for(let F=I,z=I+N;F<z;F+=3)A(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new P,w=new P,b=new P,M=new P;function R(C){b.fromBufferAttribute(s,C),M.copy(b);let v=o[C];S.copy(v),S.sub(b.multiplyScalar(b.dot(v))).normalize(),w.crossVectors(M,v);let I=w.dot(c[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,v=m.length;C<v;++C){let T=m[C],{start:I,count:N}=T;for(let F=I,z=I+N;F<z;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,c){let{array:l,itemSize:u,normalized:h}=o,f=new l.constructor(c.length*u),d=0,p=0;for(let g=0,y=c.length;g<y;g++){if(o.isInterleavedBufferAttribute)d=c[g]*o.data.stride+o.offset;else d=c[g]*u;for(let A=0;A<u;A++)f[p++]=l[d++]}return new ut(f,u,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new it,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)if(c[l]!==void 0)e[l]=c[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}if(u.length>0)s[c]=u,r=!0}if(r)e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;if(a.length>0)e.data.groups=JSON.parse(JSON.stringify(a));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let c=e.boundingSphere;if(c!==null)this.boundingSphere=c.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=On();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=On();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}var xn=new P;class rr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=$n(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=kt(i,this.array);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=kt(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=kt(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=kt(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=kt(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=$n(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=$n(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=$n(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=$n(t,this.array);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=kt(t,this.array),i=kt(i,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e=e*this.data.stride+this.offset,this.normalized)t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var fc=new P,Qp=new P,e0=new At;class ri{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fc.subVectors(i,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(fc),r=this.normal.dot(s);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let a=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(a<0||a>1))return null;return t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||e0.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var t0=0;class In extends Pi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=On(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(s&&s.isColor)s.set(i);else if(s&&s.isVector2&&(i&&i.isVector2)||s&&s.isEuler&&(i&&i.isEuler)||s&&s.isVector3&&(i&&i.isVector3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)i.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);if(r.length>0)i.textures=r;if(a.length>0)i.images=a}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Be().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new ri().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new Oe().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var wi=new P,pc=new P,Ea=new P,Ta=new P;class ar{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e)}distanceSqToSegment(e,t,i,s){pc.copy(e).add(t).multiplyScalar(0.5),Ea.copy(t).sub(e).normalize(),Ta.copy(this.origin).sub(pc);let r=e.distanceTo(t)*0.5,a=-this.direction.dot(Ea),o=Ta.dot(this.direction),c=-Ta.dot(Ea),l=Ta.lengthSq(),u=Math.abs(1-a*a),h,f,d,p;if(u>0)if(h=a*c-o,f=a*o-c,p=r*u,h>=0)if(f>=-p)if(f<=p){let g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else if(f<=-p)h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l;else if(f<=p)h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l;else h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l;else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(s)s.copy(pc).addScaledVector(Ea,f);return d}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;if(c<0)return null;if(o<0)return this.at(c,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l;if(u>=0)r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u;else r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u;if(i>a||r>s)return null;if(r>i||isNaN(i))i=r;if(a<s||isNaN(s))s=a;if(h>=0)o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h;else o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h;if(i>c||o>s)return null;if(o>i||i!==i)i=o;if(c<s||s!==s)s=c;if(s<0)return null;return this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,{x:c,y:l,z:u}=o,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,g=t.y-a.y,y=t.z-a.z,A=i.x-a.x,m=i.y-a.y,S=i.z-a.z,w=Math.abs(c),b=Math.abs(l),M=Math.abs(u),R,C,v,T,I,N,F,z,B,j,ie,J;if(w>=b&&w>=M)if(v=c,N=h,B=p,J=A,c>=0)R=l,C=u,T=f,I=d,F=g,z=y,j=m,ie=S;else R=u,C=l,T=d,I=f,F=y,z=g,j=S,ie=m;else if(b>=M)if(v=l,N=f,B=g,J=m,l>=0)R=u,C=c,T=d,I=h,F=y,z=p,j=S,ie=A;else R=c,C=u,T=h,I=d,F=p,z=y,j=A,ie=S;else if(v=u,N=d,B=y,J=S,u>=0)R=c,C=l,T=h,I=f,F=p,z=g,j=A,ie=m;else R=l,C=c,T=f,I=h,F=g,z=p,j=m,ie=A;if(v===0)return null;let W=R/v,H=C/v,U=1/v,oe=T-W*N,we=I-H*N,Le=F-W*B,dt=z-H*B,Ge=j-W*J,ne=ie-H*J,pe=Ge*dt-ne*Le,ve=oe*ne-we*Ge,qe=Le*we-dt*oe;if(s){if(pe<0||ve<0||qe<0)return null}else if((pe<0||ve<0||qe<0)&&(pe>0||ve>0||qe>0))return null;let Je=pe+ve+qe;if(Je===0)return null;let Q=U*(pe*N+ve*B+qe*J);if(Je>0?Q<0:Q>0)return null;return this.at(Q/Je,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends In{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var ju=new at,hs=new ar,Ra=new an,qu=new P,Ca=new P,Pa=new P,Ia=new P,mc=new P,Da=new P,Xu=new P,La=new P;class Pt extends jt{constructor(e=new it,t=new Hn){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];if(u===0)continue;if(mc.fromBufferAttribute(h,e),a)Da.addScaledVector(mc,u);else Da.addScaledVector(mc.sub(t),u)}t.add(Da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),hs.copy(e.ray).recast(e.near),Ra.containsPoint(hs.origin)===!1){if(hs.intersectSphere(Ra,qu)===null)return;if(hs.origin.distanceToSquared(qu)>(e.far-e.near)**2)return}if(ju.copy(r).invert(),hs.copy(e.ray).applyMatrix4(ju),i.boundingBox!==null){if(hs.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,hs)}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,{groups:f,drawRange:d}=r;if(o!==null)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){let y=f[p],A=a[y.materialIndex],m=Math.max(y.start,d.start),S=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let w=m,b=S;w<b;w+=3){let M=o.getX(w),R=o.getX(w+1),C=o.getX(w+2);if(s=Fa(this,A,e,i,l,u,h,M,R,C),s)s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let y=p,A=g;y<A;y+=3){let m=o.getX(y),S=o.getX(y+1),w=o.getX(y+2);if(s=Fa(this,a,e,i,l,u,h,m,S,w),s)s.faceIndex=Math.floor(y/3),t.push(s)}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){let y=f[p],A=a[y.materialIndex],m=Math.max(y.start,d.start),S=Math.min(c.count,Math.min(y.start+y.count,d.start+d.count));for(let w=m,b=S;w<b;w+=3){let M=w,R=w+1,C=w+2;if(s=Fa(this,A,e,i,l,u,h,M,R,C),s)s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let y=p,A=g;y<A;y+=3){let m=y,S=y+1,w=y+2;if(s=Fa(this,a,e,i,l,u,h,m,S,w),s)s.faceIndex=Math.floor(y/3),t.push(s)}}}}function n0(e,t,i,s,r,a,o,c){let l;if(t.side===1)l=s.intersectTriangle(o,a,r,!0,c);else l=s.intersectTriangle(r,a,o,t.side===0,c);if(l===null)return null;La.copy(c),La.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(La);if(u<i.near||u>i.far)return null;return{distance:u,point:La.clone(),object:e}}function Fa(e,t,i,s,r,a,o,c,l,u){e.getVertexPosition(c,Ca),e.getVertexPosition(l,Pa),e.getVertexPosition(u,Ia);let h=n0(e,t,i,s,Ca,Pa,Ia,Xu);if(h){let f=new P;if(Rn.getBarycoord(Xu,Ca,Pa,Ia,f),r)h.uv=Rn.getInterpolatedAttribute(r,c,l,u,f,new Oe);if(a)h.uv1=Rn.getInterpolatedAttribute(a,c,l,u,f,new Oe);if(o){if(h.normal=Rn.getInterpolatedAttribute(o,c,l,u,f,new P),h.normal.dot(s.direction)>0)h.normal.multiplyScalar(-1)}let d={a:c,b:l,c:u,normal:new P,materialIndex:0};Rn.getNormal(Ca,Pa,Ia,d.normal),h.face=d,h.barycoord=f}return h}var Cr=new Ht,Ku=new Ht,Yu=new Ht,i0=new Ht,Ju=new at,Na=new P,Ac=new an,Zu=new at,gc=new ar;class xo extends Pt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new Sn;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Na),this.boundingBox.expandByPoint(Na)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new an;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Na),this.boundingSphere.expandByPoint(Na)}copy(e,t){if(super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){let i=this.material,s=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ac.copy(this.boundingSphere),Ac.applyMatrix4(s),e.ray.intersectsSphere(Ac)===!1)return;if(Zu.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Zu),this.boundingBox!==null){if(gc.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,gc)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;if(Ku.fromBufferAttribute(s.attributes.skinIndex,e),Yu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4)Cr.copy(t),t.set(0,0,0,0);else Cr.set(...t,1),t.set(0,0,0);Cr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Yu.getComponent(r);if(a!==0){let o=Ku.getComponent(r);Ju.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(i0.copy(Cr).applyMatrix4(Ju),a)}}if(t.isVector4)t.w=Cr.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Kr extends jt{constructor(){super();this.isBone=!0,this.type="Bone"}}class mi extends rn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=1003,u=1003,h,f){super(null,a,o,c,l,u,s,r,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $u=new at,s0=new at;class Yr{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:s0;$u.multiplyMatrices(o,t[r]),$u.toArray(i,r*16)}if(s!==null)s.needsUpdate=!0}clone(){return new Yr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new mi(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];if(a===void 0)et("Skeleton: No bone found with UUID:",r),a=new Kr;this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}}class qi extends ut{constructor(e,t,i,s=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Vs=new at,Qu=new at,Ua=[],eh=new Sn,r0=new at,Pr=new Pt,Ir=new an;class _o extends Pt{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,r0)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Sn;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),eh.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(eh)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new an;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Ir.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Ir)}copy(e,t){if(super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();if(this.count=e.count,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)===!1)return;for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Qu.multiplyMatrices(i,Vs),Pr.matrixWorld=Qu,Pr.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){let c=Ua[a];c.instanceId=r,c.object=this,t.push(c)}Ua.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;if(this.morphTexture===null)this.morphTexture=new mi(new Float32Array(s*this.count),s,this.count,1028,1015);let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ds=new an,a0=new Oe(0.5,0.5),Oa=new P;class Jr{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2000,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],A=r[11],m=r[12],S=r[13],w=r[14],b=r[15];if(s[0].setComponents(l-a,d-u,A-p,b-m).normalize(),s[1].setComponents(l+a,d+u,A+p,b+m).normalize(),s[2].setComponents(l+o,d+h,A+g,b+S).normalize(),s[3].setComponents(l-o,d-h,A-g,b-S).normalize(),i)s[4].setComponents(c,f,y,w).normalize(),s[5].setComponents(l-c,d-f,A-y,b-w).normalize();else if(s[4].setComponents(l-c,d-f,A-y,b-w).normalize(),t===2000)s[5].setComponents(l+c,d+f,A+y,b+w).normalize();else if(t===2001)s[5].setComponents(c,f,y,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=a0.distanceTo(e.center);return ds.radius=0.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gn extends In{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Ja=new P,Za=new P,th=new at,Dr=new ar,Ba=new an,bc=new P,nh=new P;class or extends jt{constructor(e=new it,t=new Gn){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ja.fromBufferAttribute(t,s-1),Za.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ja.distanceTo(Za);e.setAttribute("lineDistance",new tt(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;th.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p-1;g<y;g+=l){let A=u.getX(g),m=u.getX(g+1),S=ka(this,e,Dr,c,A,m,g);if(S)t.push(S)}if(this.isLineLoop){let g=u.getX(p-1),y=u.getX(d),A=ka(this,e,Dr,c,g,y,p-1);if(A)t.push(A)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,y=p-1;g<y;g+=l){let A=ka(this,e,Dr,c,g,g+1,g);if(A)t.push(A)}if(this.isLineLoop){let g=ka(this,e,Dr,c,p-1,d,p-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ka(e,t,i,s,r,a,o){let c=e.geometry.attributes.position;if(Ja.fromBufferAttribute(c,r),Za.fromBufferAttribute(c,a),i.distanceSqToSegment(Ja,Za,bc,nh)>s)return;bc.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(bc);if(u<t.near||u>t.far)return;return{distance:u,point:nh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ih=new P,sh=new P;class en extends or{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ih.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ih.distanceTo(sh);e.setAttribute("lineDistance",new tt(i,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yo extends or{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Zr extends In{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var rh=new at,wc=new ar,za=new an,Ha=new P;class Ji extends jt{constructor(e=new it,t=new Zr){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;rh.copy(s).invert(),wc.copy(e.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,g=d;p<g;p++){let y=l.getX(p);Ha.fromBufferAttribute(h,y),ah(Ha,y,c,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,g=d;p<g;p++)Ha.fromBufferAttribute(h,p),ah(Ha,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ah(e,t,i,s,r,a,o){let c=wc.distanceSqToPoint(e);if(c<i){let l=new P;wc.closestPointToPoint(e,l),l.applyMatrix4(s);let u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Mo extends rn{constructor(e=[],t=301,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _s extends rn{constructor(e,t,i=1014,s,r,a,o=1003,c=1003,l,u=1026,h=1){if(u!==1026&&u!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ll extends _s{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,c,l=1026){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class So extends rn{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ai extends it{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function p(g,y,A,m,S,w,b,M,R,C,v){let T=w/R,I=b/C,N=w/2,F=b/2,z=M/2,B=R+1,j=C+1,ie=0,J=0,W=new P;for(let H=0;H<j;H++){let U=H*I-F;for(let oe=0;oe<B;oe++){let we=oe*T-N;W[g]=we*m,W[y]=U*S,W[A]=z,l.push(W.x,W.y,W.z),W[g]=0,W[y]=0,W[A]=M>0?1:-1,u.push(W.x,W.y,W.z),h.push(oe/R),h.push(1-H/C),ie+=1}}for(let H=0;H<C;H++)for(let U=0;U<R;U++){let oe=f+U+B*H,we=f+U+B*(H+1),Le=f+(U+1)+B*(H+1),dt=f+(U+1)+B*H;c.push(oe,we,dt),c.push(we,Le,dt),J+=6}o.addGroup(d,J,v),d+=J,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ys extends it{constructor(e=1,t=32,i=0,s=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,u=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(0.5,0.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class cr extends it{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,g=[],y=i/2,A=0;if(m(),a===!1){if(e>0)S(!0);if(t>0)S(!1)}this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function m(){let w=new P,b=new P,M=0,R=(t-e)/i;for(let C=0;C<=r;C++){let v=[],T=C/r,I=T*(t-e)+e;for(let N=0;N<=s;N++){let F=N/s,z=F*c+o,B=Math.sin(z),j=Math.cos(z);b.x=I*B,b.y=-T*i+y,b.z=I*j,h.push(b.x,b.y,b.z),w.set(B,R,j).normalize(),f.push(w.x,w.y,w.z),d.push(F,1-T),v.push(p++)}g.push(v)}for(let C=0;C<s;C++)for(let v=0;v<r;v++){let T=g[v][C],I=g[v+1][C],N=g[v+1][C+1],F=g[v][C+1];if(e>0||v!==0)u.push(T,I,F),M+=3;if(t>0||v!==r-1)u.push(I,N,F),M+=3}l.addGroup(A,M,0),A+=M}function S(w){let b=p,M=new Oe,R=new P,C=0,v=w===!0?e:t,T=w===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,y*T,0),f.push(0,T,0),d.push(0.5,0.5),p++;let I=p;for(let N=0;N<=s;N++){let z=N/s*c+o,B=Math.cos(z),j=Math.sin(z);R.x=v*j,R.y=y*T,R.z=v*B,h.push(R.x,R.y,R.z),f.push(0,T,0),M.x=B*0.5+0.5,M.y=j*0.5*T+0.5,d.push(M.x,M.y),p++}for(let N=0;N<s;N++){let F=b+N,z=I+N;if(w===!0)u.push(z,z+1,F);else u.push(z+1,z,F);C+=3}l.addGroup(A,C,w===!0?1:2),A+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends cr{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var Ga=new P,Wa=new P,vc=new P,Va=new Rn;class $r extends it{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ks*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=[,,,],f={},d=[];for(let p=0;p<c;p+=3){if(a)l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:g,b:y,c:A}=Va;if(g.fromBufferAttribute(o,l[0]),y.fromBufferAttribute(o,l[1]),A.fromBufferAttribute(o,l[2]),Va.getNormal(vc),h[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,h[2]=`${Math.round(A.x*s)},${Math.round(A.y*s)},${Math.round(A.z*s)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let m=0;m<3;m++){let S=(m+1)%3,w=h[m],b=h[S],M=Va[u[m]],R=Va[u[S]],C=`${w}_${b}`,v=`${b}_${w}`;if(v in f&&f[v]){if(vc.dot(f[v].normal)<=r)d.push(M.x,M.y,M.z),d.push(R.x,R.y,R.z);f[v]=null}else if(!(C in f))f[C]={index0:l[m],index1:l[S],normal:vc.clone()}}}for(let p in f)if(f[p]){let{index0:g,index1:y}=f[p];Ga.fromBufferAttribute(o,g),Wa.fromBufferAttribute(o,y),d.push(Ga.x,Ga.y,Ga.z),d.push(Wa.x,Wa.y,Wa.z)}this.setAttribute("position",new tt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;if(t)a=t;else a=e*i[r-1];let o=0,c=r-1,l;while(o<=c)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-0.0001,r=e+0.0001;if(s<0)s=0;if(r>1)r=1;let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Oe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,c=new at;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);if(u<=l)l=u,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));if(d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0)d=-d;for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qr extends Wn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;while(r<0)r+=s;while(r>s)r-=s;if(r<Number.EPSILON)if(a)r=0;else r=s;if(this.aClockwise===!0&&!a)if(r===s)r=-s;else r=r-s;let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fl extends Qr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a);this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let e=0,t=0,i=0,s=0;function r(a,o,c,l){e=a,t=c,i=-3*a+3*o-2*c-l,s=2*a-2*o+c+l}return{initCatmullRom:function(a,o,c,l,u){r(o,c,u*(c-a),u*(l-o))},initNonuniformCatmullRom:function(a,o,c,l,u,h,f){let d=(o-a)/u-(c-a)/(u+h)+(c-o)/h,p=(c-o)/h-(l-o)/(h+f)+(l-c)/f;d*=h,p*=h,r(o,c,d,p)},calc:function(a){let o=a*a,c=o*a;return e+t*a+i*o+s*c}}}var oh=new P,ch=new P,xc=new Nl,_c=new Nl,yc=new Nl;class Ul extends Wn{constructor(e=[],t=!1,i="centripetal",s=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(c===0&&o===r-1)o=r-2,c=1;let l,u;if(this.closed||o>0)l=s[(o-1)%r];else ch.subVectors(s[0],s[1]).add(s[0]),l=ch;let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r)u=s[(o+2)%r];else oh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=oh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d);if(g<0.0001)g=1;if(p<0.0001)p=g;if(y<0.0001)y=g;xc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,g,y),_c.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,g,y),yc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,g,y)}else if(this.curveType==="catmullrom")xc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_c.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),yc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension);return i.set(xc.calc(c),_c.calc(c),yc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lh(e,t,i,s,r){let a=(s-t)*0.5,o=(r-i)*0.5,c=e*e,l=e*c;return(2*i-2*s+a+o)*l+(-3*i+3*s-2*a-o)*c+a*e+i}function o0(e,t){let i=1-e;return i*i*t}function c0(e,t){return 2*(1-e)*e*t}function l0(e,t){return e*e*t}function Nr(e,t,i,s){return o0(e,t)+c0(e,i)+l0(e,s)}function u0(e,t){let i=1-e;return i*i*i*t}function h0(e,t){let i=1-e;return 3*i*i*e*t}function d0(e,t){return 3*(1-e)*e*e*t}function f0(e,t){return e*e*e*t}function Ur(e,t,i,s,r){return u0(e,t)+h0(e,i)+d0(e,s)+f0(e,r)}class wo extends Wn{constructor(e=new Oe,t=new Oe,i=new Oe,s=new Oe){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Oe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ol extends Wn{constructor(e=new P,t=new P,i=new P,s=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y),Ur(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eo extends Wn{constructor(e=new Oe,t=new Oe){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends Wn{constructor(e=new P,t=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class To extends Wn{constructor(e=new Oe,t=new Oe,i=new Oe){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Oe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kl extends Wn{constructor(e=new P,t=new P,i=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y),Nr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ro extends Wn{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(lh(o,c.x,l.x,u.x,h.x),lh(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Ul,CubicBezierCurve:wo,CubicBezierCurve3:Ol,EllipseCurve:Qr,LineCurve:Eo,LineCurve3:Bl,QuadraticBezierCurve:To,QuadraticBezierCurve3:kl,SplineCurve:Ro});class zl extends Wn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;while(r<s.length){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];if(i&&i.equals(u))continue;t.push(u),i=u}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new uh[s.type]().fromJSON(s))}return this}}class $a extends zl{constructor(e){super();if(this.type="Path",this.currentPoint=new Oe,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Eo(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new To(this.currentPoint.clone(),new Oe(e,t),new Oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new wo(this.currentPoint.clone(),new Oe(e,t),new Oe(i,s),new Oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ro(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Qr(e,t,i,s,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ea extends $a{constructor(e){super(e);this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $a().fromJSON(s))}return this}}function p0(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=Ad(e,0,r,i,!0),o=[];if(!a||a.next===a.prev)return o;let c,l,u;if(s)a=v0(e,t,a,i);if(e.length>80*i){c=e[0],l=e[1];let h=c,f=l;for(let d=i;d<r;d+=i){let p=e[d],g=e[d+1];if(p<c)c=p;if(g<l)l=g;if(p>h)h=p;if(g>f)f=g}u=Math.max(h-c,f-l),u=u!==0?32767/u:0}return Br(a,o,i,c,l,u,0),o}function Ad(e,t,i,s,r){let a;if(r===P0(e,t,i,s)>0)for(let o=t;o<i;o+=s)a=hh(o/s|0,e[o],e[o+1],a);else for(let o=i-s;o>=t;o-=s)a=hh(o/s|0,e[o],e[o+1],a);if(a&&$s(a,a.next))zr(a),a=a.next;return a}function ms(e,t){if(!e)return e;if(!t)t=e;let i=e,s;do if(s=!1,!i.steiner&&($s(i,i.next)||Jt(i.prev,i,i.next)===0)){if(zr(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Br(e,t,i,s,r,a,o){if(!e)return;if(!o&&a)S0(e,s,r,a);let c=e;while(e.prev!==e.next){let l=e.prev,u=e.next;if(a?A0(e,s,r,a):m0(e)){t.push(l.i,e.i,u.i),zr(e),e=u.next,c=u.next;continue}if(e=u,e===c){if(!o)Br(ms(e),t,i,s,r,a,1);else if(o===1)e=g0(ms(e),t),Br(e,t,i,s,r,a,2);else if(o===2)b0(e,t,i,s,r,a);break}}}function m0(e){let t=e.prev,i=e,s=e.next;if(Jt(t,i,s)>=0)return!1;let r=t.x,a=i.x,o=s.x,c=t.y,l=i.y,u=s.y,h=Math.min(r,a,o),f=Math.min(c,l,u),d=Math.max(r,a,o),p=Math.max(c,l,u),g=s.next;while(g!==t){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&Lr(r,c,a,l,o,u,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function A0(e,t,i,s){let r=e.prev,a=e,o=e.next;if(Jt(r,a,o)>=0)return!1;let c=r.x,l=a.x,u=o.x,h=r.y,f=a.y,d=o.y,p=Math.min(c,l,u),g=Math.min(h,f,d),y=Math.max(c,l,u),A=Math.max(h,f,d),m=Ec(p,g,t,i,s),S=Ec(y,A,t,i,s),{prevZ:w,nextZ:b}=e;while(w&&w.z>=m&&b&&b.z<=S){if(w.x>=p&&w.x<=y&&w.y>=g&&w.y<=A&&w!==r&&w!==o&&Lr(c,h,l,f,u,d,w.x,w.y)&&Jt(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,b.x>=p&&b.x<=y&&b.y>=g&&b.y<=A&&b!==r&&b!==o&&Lr(c,h,l,f,u,d,b.x,b.y)&&Jt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}while(w&&w.z>=m){if(w.x>=p&&w.x<=y&&w.y>=g&&w.y<=A&&w!==r&&w!==o&&Lr(c,h,l,f,u,d,w.x,w.y)&&Jt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}while(b&&b.z<=S){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=A&&b!==r&&b!==o&&Lr(c,h,l,f,u,d,b.x,b.y)&&Jt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function g0(e,t){let i=e;do{let s=i.prev,r=i.next.next;if(!$s(s,r)&&bd(s,i,i.next,r)&&kr(s,r)&&kr(r,s))t.push(s.i,i.i,r.i),zr(i),zr(i.next),i=e=r;i=i.next}while(i!==e);return ms(i)}function b0(e,t,i,s,r,a){let o=e;do{let c=o.next.next;while(c!==o.prev){if(o.i!==c.i&&T0(o,c)){let l=vd(o,c);o=ms(o,o.next),l=ms(l,l.next),Br(o,t,i,s,r,a,0),Br(l,t,i,s,r,a,0);return}c=c.next}o=o.next}while(o!==e)}function v0(e,t,i,s){let r=[];for(let a=0,o=t.length;a<o;a++){let c=t[a]*s,l=a<o-1?t[a+1]*s:e.length,u=Ad(e,c,l,s,!1);if(u===u.next)u.steiner=!0;r.push(E0(u))}r.sort(x0);for(let a=0;a<r.length;a++)i=_0(r[a],i);return i}function x0(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}}return i}function _0(e,t){let i=y0(e,t);if(!i)return t;let s=vd(i,e);return ms(s,s.next),ms(i,i.next)}function y0(e,t){let i=t,{x:s,y:r}=e,a=-1/0,o;if($s(e,i))return i;do{if($s(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=s&&f>a){if(a=f,o=i.x<i.next.x?i:i.next,f===s)return o}}i=i.next}while(i!==t);if(!o)return null;let c=o,l=o.x,u=o.y,h=1/0;i=o;do{if(s>=i.x&&i.x>=l&&s!==i.x&&gd(r<u?s:a,r,l,u,r<u?a:s,r,i.x,i.y)){let f=Math.abs(r-i.y)/(s-i.x);if(kr(i,e)&&(f<h||f===h&&(i.x>o.x||i.x===o.x&&M0(o,i))))o=i,h=f}i=i.next}while(i!==c);return o}function M0(e,t){return Jt(e.prev,e,t.prev)<0&&Jt(t.next,e,e.next)<0}function S0(e,t,i,s){let r=e;do{if(r.z===0)r.z=Ec(r.x,r.y,t,i,s);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,w0(r)}function w0(e){let t,i=1;do{let s=e,r;e=null;let a=null;t=0;while(s){t++;let o=s,c=0;for(let u=0;u<i;u++)if(c++,o=o.nextZ,!o)break;let l=i;while(c>0||l>0&&o){if(c!==0&&(l===0||!o||s.z<=o.z))r=s,s=s.nextZ,c--;else r=o,o=o.nextZ,l--;if(a)a.nextZ=r;else e=r;r.prevZ=a,a=r}s=o}a.nextZ=null,i*=2}while(t>1);return e}function Ec(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function E0(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function gd(e,t,i,s,r,a,o,c){return(r-o)*(t-c)>=(e-o)*(a-c)&&(e-o)*(s-c)>=(i-o)*(t-c)&&(i-o)*(a-c)>=(r-o)*(s-c)}function Lr(e,t,i,s,r,a,o,c){return!(e===o&&t===c)&&gd(e,t,i,s,r,a,o,c)}function T0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!R0(e,t)&&(kr(e,t)&&kr(t,e)&&C0(e,t)&&(Jt(e.prev,e,t.prev)||Jt(e,t.prev,t))||$s(e,t)&&Jt(e.prev,e,e.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function $s(e,t){return e.x===t.x&&e.y===t.y}function bd(e,t,i,s){let r=qa(Jt(e,t,i)),a=qa(Jt(e,t,s)),o=qa(Jt(i,s,e)),c=qa(Jt(i,s,t));if(r!==a&&o!==c)return!0;if(r===0&&ja(e,i,t))return!0;if(a===0&&ja(e,s,t))return!0;if(o===0&&ja(i,e,s))return!0;if(c===0&&ja(i,t,s))return!0;return!1}function ja(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function qa(e){return e>0?1:e<0?-1:0}function R0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&bd(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function kr(e,t){return Jt(e.prev,e,e.next)<0?Jt(e,t,e.next)>=0&&Jt(e,e.prev,t)>=0:Jt(e,t,e.prev)<0||Jt(e,e.next,t)<0}function C0(e,t){let i=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do{if(i.y>a!==i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x)s=!s;i=i.next}while(i!==e);return s}function vd(e,t){let i=Tc(e.i,e.x,e.y),s=Tc(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function hh(e,t,i,s){let r=Tc(e,t,i);if(!s)r.prev=r,r.next=r;else r.next=s.next,r.prev=s,s.next.prev=r,s.next=r;return r}function zr(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Tc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P0(e,t,i,s){let r=0;for(let a=t,o=i-s;a<i;a+=s)r+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return r}class xd{static triangulate(e,t,i=2){return p0(e,t,i)}}class oi{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*0.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];dh(e),fh(i,e);let a=e.length;t.forEach(dh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,fh(i,t[c]);let o=xd.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function dh(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function fh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Vn extends it{constructor(e=1,t=1,i=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],p=[],g=[],y=[];for(let A=0;A<u;A++){let m=A*f-a;for(let S=0;S<l;S++){let w=S*h-r;p.push(w,-m,0),g.push(0,0,1),y.push(S/o),y.push(1-A/c)}}for(let A=0;A<c;A++)for(let m=0;m<o;m++){let S=m+l*A,w=m+l*(A+1),b=m+1+l*(A+1),M=m+1+l*A;d.push(S,w,M),d.push(w,b,M)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ta extends it{constructor(e=new ea([new Oe(0,0.5),new Oe(-0.5,-0.5),new Oe(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function l(u){let h=s.length/3,f=u.extractPoints(t),{shape:d,holes:p}=f;if(oi.isClockWise(d)===!1)d=d.reverse();for(let y=0,A=p.length;y<A;y++){let m=p[y];if(oi.isClockWise(m)===!0)p[y]=m.reverse()}let g=oi.triangulateShape(d,p);for(let y=0,A=p.length;y<A;y++){let m=p[y];d=d.concat(m)}for(let y=0,A=d.length;y<A;y++){let m=d[y];s.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let y=0,A=g.length;y<A;y++){let m=g[y],S=m[0]+h,w=m[1]+h,b=m[2]+h;i.push(S,w,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return I0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new ta(i,e.curveSegments)}}function I0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class ur extends it{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new P,f=new P,d=[],p=[],g=[],y=[];for(let A=0;A<=i;A++){let m=[],S=A/i,w=a+S*o,b=e*Math.cos(w),M=Math.sqrt(e*e-b*b),R=0;if(A===0&&a===0)R=0.5/t;else if(A===i&&c===Math.PI)R=-0.5/t;for(let C=0;C<=t;C++){let v=C/t,T=s+v*r;h.x=-M*Math.cos(T),h.y=b,h.z=M*Math.sin(T),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),y.push(v+R,1-S),m.push(l++)}u.push(m)}for(let A=0;A<i;A++)for(let m=0;m<t;m++){let S=u[A][m+1],w=u[A][m],b=u[A+1][m],M=u[A+1][m+1];if(A!==0||a>0)d.push(S,w,M);if(A!==i-1||c<Math.PI)d.push(w,b,M)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ms(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(ph(r))if(r.isRenderTargetTexture)et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null;else t[i][s]=r.clone();else if(Array.isArray(r))if(ph(r[0])){let a=[];for(let o=0,c=r.length;o<c;o++)a[o]=r[o].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function vn(e){let t={};for(let i=0;i<e.length;i++){let s=Ms(e[i]);for(let r in s)t[r]=s[r]}return t}function ph(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function D0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Hl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Tt.workingColorSpace}var _d={clone:Ms,merge:vn},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends In{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;if(a&&a.isTexture)t.uniforms[s]={type:"t",value:a.toJSON(e).uuid};else if(a&&a.isColor)t.uniforms[s]={type:"c",value:a.getHex()};else if(a&&a.isVector2)t.uniforms[s]={type:"v2",value:a.toArray()};else if(a&&a.isVector3)t.uniforms[s]={type:"v3",value:a.toArray()};else if(a&&a.isVector4)t.uniforms[s]={type:"v4",value:a.toArray()};else if(a&&a.isMatrix3)t.uniforms[s]={type:"m3",value:a.toArray()};else if(a&&a.isMatrix4)t.uniforms[s]={type:"m4",value:a.toArray()};else t.uniforms[s]={value:a}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)if(this.extensions[s]===!0)i[s]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m3":this.uniforms[i].value=new At().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Gl extends wt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zi extends In{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Zi{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wl extends In{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vl extends In{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ji(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ya(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function N0(e){function t(r,a){return e[r]-e[a]}let i=e.length,s=Array(i);for(let r=0;r!==i;++r)s[r]=r;return s.sort(t),s}function mh(e,t,i){let s=e.length,r=new e.constructor(s);for(let a=0,o=0;o!==s;++a){let c=i[a]*t;for(let l=0;l!==t;++l)r[o++]=e[c+l]}return r}function U0(e,t,i,s){let r=1,a=e[0];while(a!==void 0&&a[s]===void 0)a=e[r++];if(a===void 0)return;let o=a[s];if(o===void 0)return;if(Array.isArray(o))do{if(o=a[s],o!==void 0)t.push(a.time),i.push(...o);a=e[r++]}while(a!==void 0);else if(o.toArray!==void 0)do{if(o=a[s],o!==void 0)t.push(a.time),o.toArray(i,i.length);a=e[r++]}while(a!==void 0);else do{if(o=a[s],o!==void 0)t.push(a.time),i.push(o);a=e[r++]}while(a!==void 0)}class Ii{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}while(i<a){let o=i+a>>>1;if(e<t[o])a=o;else i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class jl extends Ii{constructor(e,t,i,s){super(e,t,i,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-i;break;case 2402:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*i-t;break;case 2402:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*0.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),g=p*p,y=g*p,A=-f*y+2*f*g-f*p,m=(1+f)*y+(-1.5-2*f)*g+(-0.5+f)*p+1,S=(-1-d)*y+(1.5+d)*g+0.5*p,w=d*y-d*g;for(let b=0;b!==o;++b)r[b]=A*a[u+b]+m*a[l+b]+S*a[c+b]+w*a[h+b];return r}}class ql extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Xl extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kl extends Ii{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),g=1-p;for(let y=0;y!==o;++y)r[y]=a[l+y]*g+a[c+y]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let g=a[l+p],y=a[c+p],A=d*f+p*2,m=h[A],S=h[A+1],w=e*f+p*2,b=u[w],M=u[w+1],R=B0(i,t,m,b,s);r[p]=yd(R,g,S,M,y)}return r}}function yd(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function O0(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function B0(e,t,i,s,r){let a=(e-t)/(r-t);for(let o=0;o<8;o++){let c=yd(a,t,i,s,r)-e;if(Math.abs(c)<0.0000000001)break;let l=O0(a,t,i,s,r);if(Math.abs(l)<0.0000000001)break;a=Math.max(0,Math.min(1,a-c/l))}return a}class Ln{constructor(e,t,i,s){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();if(s!==e.DefaultInterpolation)i.interpolation=s;if(Ya(e.settings))i.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;if(Ya(this.settings))Ah(this.settings.inTangents,e),Ah(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;while(r!==s&&i[r]<e)++r;while(a!==-1&&i[a]>t)--a;if(++a,r!==0||a!==s){if(r>=a)a=Math.max(a,1),r=a-1;let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)ht("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,s=this.values,r=i.length;if(r===0)ht("KeyframeTrack: Track is empty.",this),e=!1;let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c==="number"&&isNaN(c)){ht("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ht("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0){if(Mp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ht("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(!s){let h=o*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[f+p]||g!==t[d+p]){c=!0;break}}}else c=!0;if(c){if(o!==a){e[a]=e[o];let h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}if(a!==e.length)this.times=e.slice(0,a),this.values=t.slice(0,a*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),s=new this.constructor(this.name,e,t);if(s.createInterpolant=this.createInterpolant,Ya(this.settings))s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return s}}function Ah(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=2301;class $i extends Ln{constructor(e,t,i){super(e,t,i)}}$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=2300;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Ln{constructor(e,t,i,s){super(e,t,i,s)}}Co.prototype.ValueTypeName="color";class Qi extends Ln{constructor(e,t,i,s){super(e,t,i,s)}}Qi.prototype.ValueTypeName="number";class Yl extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class es extends Ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends Ln{constructor(e,t,i){super(e,t,i)}}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=2300;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Ln{constructor(e,t,i,s){super(e,t,i,s)}}Ss.prototype.ValueTypeName="vector";class Po{constructor(e="",t=-1,i=[],s=2500){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=On(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(z0(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Ln.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=N0(c);if(c=mh(c,1,u),l=mh(l,1,u),!s&&c[0]===0)c.push(r),l.push(l[0]);a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];if(!f)s[h]=f=[];f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function k0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Co;case"quaternion":return es;case"bool":case"boolean":return $i;case"string":return ts}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function z0(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=k0(e.type);if(e.times===void 0){let s=[],r=[];U0(e.keys,s,r,"value"),e.times=s,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(Ya(e.settings))i.settings={inTangents:ji(e.settings.inTangents,Float32Array),outTangents:ji(e.settings.outTangents,Float32Array)};return i}var ai={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(gh(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(gh(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function gh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Jl{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){if(o++,r===!1){if(s.onStart!==void 0)s.onStart(u,a,o)}r=!0},this.itemEnd=function(u){if(a++,s.onProgress!==void 0)s.onProgress(u,a,o);if(a===o){if(r=!1,s.onLoad!==void 0)s.onLoad()}},this.itemError=function(u){if(s.onError!==void 0)s.onError(u)},this.resolveURL=function(u){if(u=u.normalize("NFC"),c)return c(u);return u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],p=l[h+1];if(d.global)d.lastIndex=0;if(d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Md=new Jl;class Di{constructor(e){if(this.manager=e!==void 0?e:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={};class Sd extends Error{constructor(e,t){super(e);this.response=t}}class na extends Di{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:i,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)et("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ei[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,g=0,y=new ReadableStream({start(A){m();function m(){h.read().then(({done:S,value:w})=>{if(S)A.close();else{g+=w.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let M=0,R=u.length;M<R;M++){let C=u[M];if(C.onProgress)C.onProgress(b)}A.enqueue(w),m()}},(S)=>{A.error(S)})}}});return new Response(y)}else throw new Sd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((u)=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then((p)=>d.decode(p))}}}).then((l)=>{ai.add(`file:${e}`,l);let u=Ei[e];delete Ei[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];if(d.onLoad)d.onLoad(l)}}).catch((l)=>{let u=Ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];if(d.onError)d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var js=new WeakMap;class Zl extends Di{constructor(e){super(e)}load(e,t,i,s){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=ai.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);else{let h=js.get(a);if(h===void 0)h=[],js.set(a,h);h.push({onLoad:t,onError:s})}return a}let o=Js("img");function c(){if(u(),t)t(this);let h=js.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];if(d.onLoad)d.onLoad(this)}js.delete(this),r.manager.itemEnd(e)}function l(h){if(u(),s)s(h);ai.remove(`image:${e}`);let f=js.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];if(p.onError)p.onError(h)}js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return ai.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Li extends Di{constructor(e){super(e)}load(e,t,i,s){let r=new rn,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,s),r}}class hr extends jt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Io extends hr{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Mc=new at,bh=new P,vh=new P;class ia{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;if(e.coordinateSystem===2001||e.reversedDepth)t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Xa=new P,Ka=new zn,si=new P;class Do extends jt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,Ka,si),si.x===1&&si.y===1&&si.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Xa,Ka,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xa,Ka,si),si.x===1&&si.y===1&&si.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Xa,Ka,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Vi=new P,xh=new Oe,_h=new Oe;class ln extends Do{constructor(e=50,t=1,i=0.1,s=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ks*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Ks*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,_h),t.subVectors(_h,xh)}setViewOffset(e,t,i,s,r,a){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ks*0.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-0.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:c,fullHeight:l}=a;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wd extends ia{constructor(){super(new ln(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||s!==t.aspect||r!==t.far)t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Lo extends hr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Ed extends ia{constructor(){super(new ln(90,1,0.5,500));this.isPointLightShadow=!0}}class dr extends hr{constructor(e,t,i=0,s=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ed}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ws extends Do{constructor(e=-1,t=1,i=1,s=-1,r=0.1,a=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Td extends ia{constructor(){super(new ws(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Es extends hr{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ns{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var Sc=new WeakMap;class Fo extends Di{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")et("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")et("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=ai.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then((l)=>{if(Sc.has(a)===!0){if(s)s(Sc.get(a));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(ai.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(s)s(l);Sc.set(c,l),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var qs=-90,Xs=1;class $l extends jt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(qs,Xs,e,t);s.layers=this.layers,this.add(s);let r=new ln(qs,Xs,e,t);r.layers=this.layers,this.add(r);let a=new ln(qs,Xs,e,t);a.layers=this.layers,this.add(a);let o=new ln(qs,Xs,e,t);o.layers=this.layers,this.add(o);let c=new ln(qs,Xs,e,t);c.layers=this.layers,this.add(c);let l=new ln(qs,Xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===2000)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;if(e.isWebGLRenderer===!0)y=e.state.buffers.depth.getReversed();else y=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,s),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,s),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,2,s),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,s),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,c),e.setRenderTarget(i,4,s),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),y&&e.autoClear===!1)e.clearDepth();e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ql extends ln{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}var eu="\\[\\]\\.:\\/",H0=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",G0="[^"+eu.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",tu),V0=/(WCOD+)?/.source.replace("WCOD",G0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),X0=new RegExp("^"+W0+V0+j0+q0+"$"),K0=["material","materials","bones","map"];class Rd{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];if(s!==void 0)s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Bt{constructor(e,t,i){this.path=t,this.parsedPath=i||Bt.parseTrackName(t),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Bt(e,t,i);else return new Bt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(e){let t=X0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);if(K0.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,s),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:s,propertyIndex:r}=t;if(!e)e=Bt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else if(a.fromArray!==void 0&&a.toArray!==void 0)c=this.BindingType.HasFromToArray,this.resolvedProperty=a;else if(Array.isArray(a))c=this.BindingType.EntireArray,this.resolvedProperty=a;else this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=Rd;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m4=new Float32Array(1);class nu{static{nu.prototype.isMatrix2=!0}constructor(e,t,i,s){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}function iu(e,t,i,s){let r=Y0(s);switch(i){case 1021:return e*t;case 1028:return e*t/r.components*r.byteLength;case 1029:return e*t/r.components*r.byteLength;case 1030:return e*t*2/r.components*r.byteLength;case 1031:return e*t*2/r.components*r.byteLength;case 1022:return e*t*3/r.components*r.byteLength;case 1023:return e*t*4/r.components*r.byteLength;case 1033:return e*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Y0(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)et("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Jd(){let e=null,t=!1,i=null,s=null;function r(a,o){s=e.requestAnimationFrame(r),i(a,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;s=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(s);t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function J0(e){let t=new WeakMap;function i(c,l){let{array:u,usage:h}=c,f=u.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,u,h),c.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=e.HALF_FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,l,u){let{array:h,updateRanges:f}=l;if(e.bindBuffer(u,c),f.length===0)e.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],y=f[p];if(y.start<=g.start+g.count+1)g.count=Math.max(g.count,y.start+y.count-g.start);else++d,f[d]=y}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];e.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){if(c.isInterleavedBufferAttribute)c=c.data;return t.get(c)}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;let l=t.get(c);if(l)e.deleteBuffer(l.buffer),t.delete(c)}function o(c,l){if(c.isInterleavedBufferAttribute)c=c.data;if(c.isGLBufferAttribute){let h=t.get(c);if(!h||h.version<c.version)t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,i(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:r,remove:a,update:o}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u1=`#ifdef USE_IRIDESCENCE
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
#endif`,h1=`#ifdef USE_BUMPMAP
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y1=`vec3 transformedNormal = objectNormal;
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
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
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
#endif`,Y1=`uniform sampler2D dfgLUT;
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
}`,J1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`#include <common>
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
}`,s2=`#if DEPTH_PACKING == 3200
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
}`,r2=`#define DISTANCE
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
}`,a2=`#define DISTANCE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`uniform float scale;
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
}`,u2=`uniform vec3 diffuse;
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
}`,h2=`#include <common>
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
}`,d2=`uniform vec3 diffuse;
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
}`,f2=`#define LAMBERT
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
}`,p2=`#define LAMBERT
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
}`,m2=`#define MATCAP
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
}`,A2=`#define MATCAP
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
}`,g2=`#define NORMAL
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
}`,b2=`#define NORMAL
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
}`,v2=`#define PHONG
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
}`,x2=`#define PHONG
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
}`,_2=`#define STANDARD
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
}`,y2=`#define STANDARD
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
}`,M2=`#define TOON
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
}`,S2=`#define TOON
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
}`,w2=`uniform float size;
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,R2=`uniform vec3 color;
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
}`,C2=`uniform float rotation;
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
}`,P2=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Z0,alphahash_pars_fragment:$0,alphamap_fragment:Q0,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:s1,batching_pars_vertex:r1,batching_vertex:a1,begin_vertex:o1,beginnormal_vertex:c1,bsdfs:l1,iridescence_fragment:u1,bumpmap_pars_fragment:h1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:A1,color_pars_fragment:g1,color_pars_vertex:b1,color_vertex:v1,common:x1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:y1,displacementmap_pars_vertex:M1,displacementmap_vertex:S1,emissivemap_fragment:w1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:P1,envmap_pars_fragment:I1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:W1,envmap_vertex:L1,fog_vertex:F1,fog_pars_vertex:N1,fog_fragment:U1,fog_pars_fragment:O1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:k1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:H1,lights_pars_begin:G1,lights_toon_fragment:V1,lights_toon_pars_fragment:j1,lights_phong_fragment:q1,lights_phong_pars_fragment:X1,lights_physical_fragment:K1,lights_physical_pars_fragment:Y1,lights_fragment_begin:J1,lights_fragment_maps:Z1,lights_fragment_end:$1,lightprobes_pars_fragment:Q1,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:cm,metalnessmap_pars_fragment:lm,morphinstance_vertex:um,morphcolor_vertex:hm,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:Am,normal_pars_fragment:gm,normal_pars_vertex:bm,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:wm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Om,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:zm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Vm,transmission_fragment:jm,transmission_pars_fragment:qm,uv_pars_fragment:Xm,uv_pars_vertex:Km,uv_vertex:Ym,worldpos_vertex:Jm,background_vert:Zm,background_frag:$m,backgroundCube_vert:Qm,backgroundCube_frag:e2,cube_vert:t2,cube_frag:n2,depth_vert:i2,depth_frag:s2,distance_vert:r2,distance_frag:a2,equirect_vert:o2,equirect_frag:c2,linedashed_vert:l2,linedashed_frag:u2,meshbasic_vert:h2,meshbasic_frag:d2,meshlambert_vert:f2,meshlambert_frag:p2,meshmatcap_vert:m2,meshmatcap_frag:A2,meshnormal_vert:g2,meshnormal_frag:b2,meshphong_vert:v2,meshphong_frag:x2,meshphysical_vert:_2,meshphysical_frag:y2,meshtoon_vert:M2,meshtoon_frag:S2,points_vert:w2,points_frag:E2,shadow_vert:T2,shadow_frag:R2,sprite_vert:C2,sprite_frag:P2},He={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},bi={basic:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:vn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:vn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Be(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:vn([He.points,He.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:vn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:vn([He.common,He.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:vn([He.sprite,He.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:vn([He.common,He.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:vn([He.lights,He.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};bi.physical={uniforms:vn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var No={r:0,b:0,g:0},I2=new at,Zd=new At;Zd.set(-1,0,0,0,1,0,0,0,1);function D2(e,t,i,s,r,a){let o=new Be(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let b=S.backgroundBlurriness>0;w=t.get(w,b)}return w}function g(S){let w=!1,b=p(S);if(b===null)A(o,c);else if(b&&b.isColor)A(b,1),w=!0;let M=e.xr.getEnvironmentBlendMode();if(M==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(M==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||w)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function y(S,w){let b=p(w);if(b&&(b.isCubeTexture||b.mapping===Gr)){if(u===void 0)u=new Pt(new Ai(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Ms(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u);if(u.material.uniforms.envMap.value=b,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(I2.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1)u.material.uniforms.backgroundRotation.value.premultiply(Zd);if(u.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Wt,h!==b||f!==b.version||d!==e.toneMapping)u.material.needsUpdate=!0,h=b,f=b.version,d=e.toneMapping;u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new Pt(new Vn(2,2),new wt({name:"BackgroundMaterial",uniforms:Ms(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Wt,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),h!==b||f!==b.version||d!==e.toneMapping)l.material.needsUpdate=!0,h=b,f=b.version,d=e.toneMapping;l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)}}function A(S,w){S.getRGB(No,Hl(e)),i.buffers.color.setClear(No.r,No.g,No.b,w,a)}function m(){if(u!==void 0)u.geometry.dispose(),u.material.dispose(),u=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),c=w,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,A(o,c)},render:g,addToRenderList:y,dispose:m}}function L2(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=d(null),a=r,o=!1;function c(N,F,z,B,j){let ie=!1,J=f(N,B,z,F);if(a!==J)a=J,u(a.object);if(ie=p(N,B,z,j),ie)g(N,B,z,j);if(j!==null)t.update(j,e.ELEMENT_ARRAY_BUFFER);if(ie||o){if(o=!1,b(N,F,z,B),j!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer)}}function l(){return e.createVertexArray()}function u(N){return e.bindVertexArray(N)}function h(N){return e.deleteVertexArray(N)}function f(N,F,z,B){let j=B.wireframe===!0,ie=s[F.id];if(ie===void 0)ie={},s[F.id]=ie;let J=N.isInstancedMesh===!0?N.id:0,W=ie[J];if(W===void 0)W={},ie[J]=W;let H=W[z.id];if(H===void 0)H={},W[z.id]=H;let U=H[j];if(U===void 0)U=d(l()),H[j]=U;return U}function d(N){let F=[],z=[],B=[];for(let j=0;j<i;j++)F[j]=0,z[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:B,object:N,attributes:{},index:null}}function p(N,F,z,B){let j=a.attributes,ie=F.attributes,J=0,W=z.getAttributes();for(let H in W)if(W[H].location>=0){let oe=j[H],we=ie[H];if(we===void 0){if(H==="instanceMatrix"&&N.instanceMatrix)we=N.instanceMatrix;if(H==="instanceColor"&&N.instanceColor)we=N.instanceColor}if(oe===void 0)return!0;if(oe.attribute!==we)return!0;if(we&&oe.data!==we.data)return!0;J++}if(a.attributesNum!==J)return!0;if(a.index!==B)return!0;return!1}function g(N,F,z,B){let j={},ie=F.attributes,J=0,W=z.getAttributes();for(let H in W)if(W[H].location>=0){let oe=ie[H];if(oe===void 0){if(H==="instanceMatrix"&&N.instanceMatrix)oe=N.instanceMatrix;if(H==="instanceColor"&&N.instanceColor)oe=N.instanceColor}let we={};if(we.attribute=oe,oe&&oe.data)we.data=oe.data;j[H]=we,J++}a.attributes=j,a.attributesNum=J,a.index=B}function y(){let N=a.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function A(N){m(N,0)}function m(N,F){let z=a.newAttributes,B=a.enabledAttributes,j=a.attributeDivisors;if(z[N]=1,B[N]===0)e.enableVertexAttribArray(N),B[N]=1;if(j[N]!==F)e.vertexAttribDivisor(N,F),j[N]=F}function S(){let N=a.newAttributes,F=a.enabledAttributes;for(let z=0,B=F.length;z<B;z++)if(F[z]!==N[z])e.disableVertexAttribArray(z),F[z]=0}function w(N,F,z,B,j,ie,J){if(J===!0)e.vertexAttribIPointer(N,F,z,j,ie);else e.vertexAttribPointer(N,F,z,B,j,ie)}function b(N,F,z,B){y();let j=B.attributes,ie=z.getAttributes(),J=F.defaultAttributeValues;for(let W in ie){let H=ie[W];if(H.location>=0){let U=j[W];if(U===void 0){if(W==="instanceMatrix"&&N.instanceMatrix)U=N.instanceMatrix;if(W==="instanceColor"&&N.instanceColor)U=N.instanceColor}if(U!==void 0){let oe=U.normalized,we=U.itemSize,Le=t.get(U);if(Le===void 0)continue;let{buffer:dt,type:Ge,bytesPerElement:ne}=Le,pe=Ge===e.INT||Ge===e.UNSIGNED_INT||U.gpuType===kc;if(U.isInterleavedBufferAttribute){let ve=U.data,qe=ve.stride,Je=U.offset;if(ve.isInstancedInterleavedBuffer){for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q,ve.meshPerAttribute);if(N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0)B._maxInstanceCount=ve.meshPerAttribute*ve.count}else for(let Q=0;Q<H.locationSize;Q++)A(H.location+Q);e.bindBuffer(e.ARRAY_BUFFER,dt);for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,we/H.locationSize,Ge,oe,qe*ne,(Je+we/H.locationSize*Q)*ne,pe)}else{if(U.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve,U.meshPerAttribute);if(N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0)B._maxInstanceCount=U.meshPerAttribute*U.count}else for(let ve=0;ve<H.locationSize;ve++)A(H.location+ve);e.bindBuffer(e.ARRAY_BUFFER,dt);for(let ve=0;ve<H.locationSize;ve++)w(H.location+ve,we/H.locationSize,Ge,oe,we*ne,we/H.locationSize*ve*ne,pe)}}else if(J!==void 0){let oe=J[W];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(H.location,oe);break;case 3:e.vertexAttrib3fv(H.location,oe);break;case 4:e.vertexAttrib4fv(H.location,oe);break;default:e.vertexAttrib1fv(H.location,oe)}}}}S()}function M(){T();for(let N in s){let F=s[N];for(let z in F){let B=F[z];for(let j in B){let ie=B[j];for(let J in ie)h(ie[J].object),delete ie[J];delete B[j]}}delete s[N]}}function R(N){if(s[N.id]===void 0)return;let F=s[N.id];for(let z in F){let B=F[z];for(let j in B){let ie=B[j];for(let J in ie)h(ie[J].object),delete ie[J];delete B[j]}}delete s[N.id]}function C(N){for(let F in s){let z=s[F];for(let B in z){let j=z[B];if(j[N.id]===void 0)continue;let ie=j[N.id];for(let J in ie)h(ie[J].object),delete ie[J];delete j[N.id]}}}function v(N){for(let F in s){let z=s[F],B=N.isInstancedMesh===!0?N.id:0,j=z[B];if(j===void 0)continue;for(let ie in j){let J=j[ie];for(let W in J)h(J[W].object),delete J[W];delete j[ie]}if(delete z[B],Object.keys(z).length===0)delete s[F]}}function T(){if(I(),o=!0,a===r)return;a=r,u(a.object)}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:T,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:A,disableUnusedAttributes:S}}function F2(e,t,i){let s;function r(l){s=l}function a(l,u){e.drawArrays(s,l,u),i.update(u,s,1)}function o(l,u,h){if(h===0)return;e.drawArraysInstanced(s,l,u,h),i.update(u,s,h)}function c(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c}function N2(e,t,i,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){if(C!==kn&&s.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function c(C){let v=C===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(C!==bn&&C!==Ci&&!v&&s.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let u=i.precision!==void 0?i.precision:"highp",h=l(u);if(h!==u)et("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h;let f=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(i.reversedDepthBuffer===!0&&d===!1)et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),A=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:A,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:M,samples:R}}function U2(e){let t=this,i=null,s=0,r=!1,a=!1,o=new ri,c=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||s!==0||r;return r=d,s=f.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){i=h(f,d,0)},this.setState=function(f,d,p){let{clippingPlanes:g,clipIntersection:y,clipShadows:A}=f,m=e.get(f);if(!r||g===null||g.length===0||a&&!A)if(a)h(null);else u();else{let S=a?0:s,w=S*4,b=m.clippingState||null;l.value=b,b=h(g,d,w,p);for(let M=0;M!==w;++M)b[M]=i[M];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){if(l.value!==i)l.value=i,l.needsUpdate=s>0;t.numPlanes=s,t.numIntersection=0}function h(f,d,p,g){let y=f!==null?f.length:0,A=null;if(y!==0){if(A=l.value,g!==!0||A===null){let m=p+y*4,S=d.matrixWorldInverse;if(c.getNormalMatrix(S),A===null||A.length<m)A=new Float32Array(m);for(let w=0,b=p;w!==y;++w,b+=4)o.copy(f[w]).applyMatrix4(S,c),o.normal.toArray(A,b),A[b+3]=o.constant}l.value=A,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,A}}var pr=4,O2=6,B2=20,k2=256,sa=new ws,Cd=new Be,su=null,ru=0,au=0,ou=!1,z2=new P,Ts=new P;class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=0.1,s=100,r={}){let{size:a=256,position:o=z2}=r;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();if(c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0)this._blur(c,0,0,t);return this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ru,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===tr||e.mapping===As)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:di,format:kn,colorSpace:Cn,depthBuffer:!1},s=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Pd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=H2(r)),this._blurMaterial=W2(r,e,t),this._ggxMaterial=G2(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new it,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,s,r){let c=new ln(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:f,toneMapping:d}=h;if(h.getClearColor(Cd),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Pt(new Ai,new Hn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,y=g.material,A=!1,m=e.background;if(m){if(m.isColor)y.color.copy(m),e.background=null,A=!0}else y.color.copy(Cd),A=!0;for(let S=0;S<6;S++){let w=S%3;if(w===0)c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z);else if(w===1)c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z);else c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]);let b=this._cubeSize;if(fr(s,w*b,S>2?b:0,b,b),h.setRenderTarget(s),A)h.render(g,c);h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===tr||e.mapping===As;if(s){if(this._cubemapMaterial===null)this._cubemapMaterial=Dd();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Id();let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;fr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,sa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:p}=this,g=this._sizeLods[i],y=3*g*(i>p-pr?i-p+pr:0),A=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,fr(r,y,A,3*g,2*g),s.setRenderTarget(r),s.render(o,sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,fr(e,y,A,3*g,2*g),s.setRenderTarget(e),s.render(o,sa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-pr?s-this._lodMax+pr:0),f=4*(this._cubeSize-u);fr(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,sa)}}function H2(e){let t=[],i=[],s=e,r=e-pr+1+O2;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/(o-2),l=-c,u=1+c,h=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,d=6,p=3,g=new Float32Array(p*d*f),y=new Float32Array(p*d*f);for(let m=0;m<f;m++){let S=m%3*2/3-1,w=m>2?0:-1,b=[S,w,0,S+0.6666666666666666,w,0,S+0.6666666666666666,w+1,0,S,w,0,S+0.6666666666666666,w+1,0,S,w+1,0];g.set(b,p*d*m);for(let M=0;M<d;M++){let R=h[M*2]*2-1,C=h[M*2+1]*2-1;if(m===0)Ts.set(1,C,R);else if(m===1)Ts.set(-R,1,-C);else if(m===2)Ts.set(-R,C,1);else if(m===3)Ts.set(-1,C,-R);else if(m===4)Ts.set(-R,-1,C);else Ts.set(R,C,-1);Ts.toArray(y,(m*d+M)*p)}}let A=new it;if(A.setAttribute("position",new ut(g,p)),A.setAttribute("outputDirection",new ut(y,p)),i.push(new Pt(A,null)),s>pr)s--}return{lodMeshes:i,sizeLods:t}}function Pd(e,t,i){let s=new Pn(e,t,i);return s.texture.mapping=Gr,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fr(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function G2(e,t,i){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function W2(e,t,i){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:B2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Id(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Dd(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fu extends Pn{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:li});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;if(t.minFilter===Bn)t.minFilter=Gt;return new $l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function V2(e){let t=new WeakMap,i=new WeakMap,s=null;function r(d,p=!1){if(d===null||d===void 0)return null;if(p)return o(d);return a(d)}function a(d){if(d&&d.isTexture){let p=d.mapping;if(p===to||p===no)if(t.has(d)){let g=t.get(d).texture;return c(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new fu(g.height);return y.fromEquirectangularTexture(e,d),t.set(d,y),d.addEventListener("dispose",u),c(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,g=p===to||p===no,y=p===tr||p===As;if(g||y){let A=i.get(d),m=A!==void 0?A.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m){if(s===null)s=new uu(e);return A=g?s.fromEquirectangular(d,A):s.fromCubemap(d,A),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),A.texture}else if(A!==void 0)return A.texture;else{let S=d.image;if(g&&S&&S.height>0||y&&S&&l(S)){if(s===null)s=new uu(e);return A=g?s.fromEquirectangular(d):s.fromCubemap(d),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),d.addEventListener("dispose",h),A.texture}else return null}}}return d}function c(d,p){if(p===to)d.mapping=tr;else if(p===no)d.mapping=As;return d}function l(d){let p=0,g=6;for(let y=0;y<g;y++)if(d[y]!==void 0)p++;return p===g}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=t.get(p);if(g!==void 0)t.delete(p),g.dispose()}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=i.get(p);if(g!==void 0)i.delete(p),g.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,s!==null)s.dispose(),s=null}return{get:r,dispose:f}}function j2(e){let t={};function i(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);if(r===null)fs("WebGLRenderer: "+s+" extension not supported.");return r}}}function q2(e,t,i,s){let r={},a=new WeakMap;function o(f){let d=f.target;if(d.index!==null)t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=a.get(d);if(p)t.remove(p),a.delete(d);if(s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;i.memory.geometries--}function c(f,d){if(r[d.id]===!0)return d;return d.addEventListener("dispose",o),r[d.id]=!0,i.memory.geometries++,d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],e.ARRAY_BUFFER)}function u(f){let d=[],p=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(p!==null){let S=p.array;y=p.version;for(let w=0,b=S.length;w<b;w+=3){let M=S[w+0],R=S[w+1],C=S[w+2];d.push(M,R,R,C,C,M)}}else{let S=g.array;y=g.version;for(let w=0,b=S.length/3-1;w<b;w+=3){let M=w+0,R=w+1,C=w+2;d.push(M,R,R,C,C,M)}}let A=new(g.count>=65535?vo:bo)(d,1);A.version=y;let m=a.get(f);if(m)t.remove(m);a.set(f,A)}function h(f){let d=a.get(f);if(d){let p=f.index;if(p!==null){if(d.version<p.version)u(f)}}else u(f);return a.get(f)}return{get:c,update:l,getWireframeAttribute:h}}function X2(e,t,i){let s;function r(f){s=f}let a,o;function c(f){a=f.type,o=f.bytesPerElement}function l(f,d){e.drawElements(s,d,a,f*o),i.update(d,s,1)}function u(f,d,p){if(p===0)return;e.drawElementsInstanced(s,d,a,f*o,p),i.update(d,s,p)}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,d,0,a,f,0,p);let y=0;for(let A=0;A<p;A++)y+=d[A];i.update(y,s,1)}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function K2(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,o,c){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=c*(a/3);break;case e.LINES:i.lines+=c*(a/2);break;case e.LINE_STRIP:i.lines+=c*(a-1);break;case e.LINE_LOOP:i.lines+=c*a;break;case e.POINTS:i.points+=c*a;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:s}}function Y2(e,t,i){let s=new WeakMap,r=new Ht;function a(o,c,l){let u=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=h!==void 0?h.length:0,d=s.get(c);if(d===void 0||d.count!==f){let T=function(){C.dispose(),s.delete(c),c.removeEventListener("dispose",T)};if(d!==void 0)d.texture.dispose();let p=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],w=0;if(p===!0)w=1;if(g===!0)w=2;if(y===!0)w=3;let b=c.attributes.position.count*w,M=1;if(b>t.maxTextureSize)M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let R=new Float32Array(b*M*4*f),C=new mo(R,b,M,f);C.type=Ci,C.needsUpdate=!0;let v=w*4;for(let I=0;I<f;I++){let N=A[I],F=m[I],z=S[I],B=b*M*4*I;for(let j=0;j<N.count;j++){let ie=j*v;if(p===!0)r.fromBufferAttribute(N,j),R[B+ie+0]=r.x,R[B+ie+1]=r.y,R[B+ie+2]=r.z,R[B+ie+3]=0;if(g===!0)r.fromBufferAttribute(F,j),R[B+ie+4]=r.x,R[B+ie+5]=r.y,R[B+ie+6]=r.z,R[B+ie+7]=0;if(y===!0)r.fromBufferAttribute(z,j),R[B+ie+8]=r.x,R[B+ie+9]=r.y,R[B+ie+10]=r.z,R[B+ie+11]=z.itemSize===4?r.w:1}}d={count:f,texture:C,size:new Oe(b,M)},s.set(c,d),c.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let g=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function J2(e,t,i,s,r){let a=new WeakMap;function o(u){let h=r.render.frame,f=u.geometry,d=t.get(u,f);if(a.get(d)!==h)t.update(d),a.set(d,h);if(u.isInstancedMesh){if(u.hasEventListener("dispose",l)===!1)u.addEventListener("dispose",l);if(a.get(u)!==h){if(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null)i.update(u.instanceColor,e.ARRAY_BUFFER);a.set(u,h)}}if(u.isSkinnedMesh){let p=u.skeleton;if(a.get(p)!==h)p.update(),a.set(p,h)}return d}function c(){a=new WeakMap}function l(u){let h=u.target;if(h.removeEventListener("dispose",l),s.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:c}}var Z2={[Dc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function $2(e,t,i,s,r,a){let o=new Pn(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=new it;u.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new tt([0,2,0,0,2,0],2));let h=new Gl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(u,h),d=new ws(-1,1,1,-1,0,1),p=null,g=null,y=!1,A,m=null,S=[],w=!1;this.setSize=function(b,M){if(o.setSize(b,M),c!==null)c.setSize(b,M);if(l!==null)l.setSize(b,M);for(let R=0;R<S.length;R++){let C=S[R];if(C.setSize)C.setSize(b,M)}},this.setEffects=function(b){S=b,w=S.length>0&&S[0].isRenderPass===!0;let{width:M,height:R}=o;if(S.length>0&&c===null)c=new Pn(M,R,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(M,R,{type:di,depthBuffer:!1,stencilBuffer:!1});for(let C=0;C<S.length;C++){let v=S[C];if(v.setSize)v.setSize(M,R)}},this.begin=function(b,M){if(y)return!1;if(b.toneMapping===Qn&&S.length===0)return!1;if(m=M,M!==null){let{width:R,height:C}=M;if(o.width!==R||o.height!==C)this.setSize(R,C)}if(w===!1)b.setRenderTarget(o);return A=b.toneMapping,b.toneMapping=Qn,!0},this.hasRenderPass=function(){return w},this.end=function(b,M){b.toneMapping=A,y=!0;let R=o,C=c;for(let v=0;v<S.length;v++){let T=S[v];if(T.enabled===!1)continue;if(T.render(b,C,R,M),T.needsSwap!==!1)R=C,C=C===c?l:c}if(p!==b.outputColorSpace||g!==b.toneMapping){if(p=b.outputColorSpace,g=b.toneMapping,h.defines={},Tt.getTransfer(p)===Wt)h.defines.SRGB_TRANSFER="";let v=Z2[g];if(v)h.defines[v]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(m),b.render(f,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){if(o.dispose(),c!==null)c.dispose();if(l!==null)l.dispose();u.dispose(),h.dispose()}}var $d=new rn,hu=new _s(1,1),Qd=new mo,ef=new Dl,tf=new Mo,Ld=[],Fd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Od=new Float32Array(4);function mr(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=Ld[r];if(a===void 0)a=new Float32Array(r),Ld[r]=a;if(t!==0){s.toArray(a,0);for(let o=1,c=0;o!==t;++o)c+=i,e[o].toArray(a,c)}return a}function un(e,t){if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return!1;return!0}function hn(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function Bo(e,t){let i=Fd[t];if(i===void 0)i=new Int32Array(t),Fd[t]=i;for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function Q2(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function eA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(un(i,t))return;e.uniform2fv(this.addr,t),hn(i,t)}}function tA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(un(i,t))return;e.uniform3fv(this.addr,t),hn(i,t)}}function nA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(un(i,t))return;e.uniform4fv(this.addr,t),hn(i,t)}}function iA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(un(i,s))return;Od.set(s),e.uniformMatrix2fv(this.addr,!1,Od),hn(i,s)}}function sA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(un(i,s))return;Ud.set(s),e.uniformMatrix3fv(this.addr,!1,Ud),hn(i,s)}}function rA(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(un(i,s))return;Nd.set(s),e.uniformMatrix4fv(this.addr,!1,Nd),hn(i,s)}}function aA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function oA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(un(i,t))return;e.uniform2iv(this.addr,t),hn(i,t)}}function cA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(un(i,t))return;e.uniform3iv(this.addr,t),hn(i,t)}}function lA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(un(i,t))return;e.uniform4iv(this.addr,t),hn(i,t)}}function uA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function hA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(un(i,t))return;e.uniform2uiv(this.addr,t),hn(i,t)}}function dA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(un(i,t))return;e.uniform3uiv(this.addr,t),hn(i,t)}}function fA(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(un(i,t))return;e.uniform4uiv(this.addr,t),hn(i,t)}}function pA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;let a;if(this.type===e.SAMPLER_2D_SHADOW)hu.compareFunction=i.isReversedDepthBuffer()?po:fo,a=hu;else a=$d;i.setTexture2D(t||a,r)}function mA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture3D(t||ef,r)}function AA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTextureCube(t||tf,r)}function gA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture2DArray(t||Qd,r)}function bA(e){switch(e){case 5126:return Q2;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return sA;case 35676:return rA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return cA;case 35669:case 35673:return lA;case 5125:return uA;case 36294:return hA;case 36295:return dA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(e,t){e.uniform1fv(this.addr,t)}function xA(e,t){let i=mr(t,this.size,2);e.uniform2fv(this.addr,i)}function _A(e,t){let i=mr(t,this.size,3);e.uniform3fv(this.addr,i)}function yA(e,t){let i=mr(t,this.size,4);e.uniform4fv(this.addr,i)}function MA(e,t){let i=mr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function SA(e,t){let i=mr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function wA(e,t){let i=mr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function EA(e,t){e.uniform1iv(this.addr,t)}function TA(e,t){e.uniform2iv(this.addr,t)}function RA(e,t){e.uniform3iv(this.addr,t)}function CA(e,t){e.uniform4iv(this.addr,t)}function PA(e,t){e.uniform1uiv(this.addr,t)}function IA(e,t){e.uniform2uiv(this.addr,t)}function DA(e,t){e.uniform3uiv(this.addr,t)}function LA(e,t){e.uniform4uiv(this.addr,t)}function FA(e,t,i){let s=this.cache,r=t.length,a=Bo(i,r);if(!un(s,a))e.uniform1iv(this.addr,a),hn(s,a);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=hu;else o=$d;for(let c=0;c!==r;++c)i.setTexture2D(t[c]||o,a[c])}function NA(e,t,i){let s=this.cache,r=t.length,a=Bo(i,r);if(!un(s,a))e.uniform1iv(this.addr,a),hn(s,a);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||ef,a[o])}function UA(e,t,i){let s=this.cache,r=t.length,a=Bo(i,r);if(!un(s,a))e.uniform1iv(this.addr,a),hn(s,a);for(let o=0;o!==r;++o)i.setTextureCube(t[o]||tf,a[o])}function OA(e,t,i){let s=this.cache,r=t.length,a=Bo(i,r);if(!un(s,a))e.uniform1iv(this.addr,a),hn(s,a);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||Qd,a[o])}function BA(e){switch(e){case 5126:return vA;case 35664:return xA;case 35665:return _A;case 35666:return yA;case 35674:return MA;case 35675:return SA;case 35676:return wA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return PA;case 36294:return IA;case 36295:return DA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}class nf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bA(t.type)}}class sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BA(t.type)}}class rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}}var cu=/(\w+)(\])?(\[|\.)?/g;function Bd(e,t){e.seq.push(t),e.map[t.id]=t}function kA(e,t,i){let s=e.name,r=s.length;cu.lastIndex=0;while(!0){let a=cu.exec(s),o=cu.lastIndex,c=a[1],l=a[2]==="]",u=a[3];if(l)c=c|0;if(u===void 0||u==="["&&o+2===r){Bd(i,u===void 0?new nf(c,e,t):new sf(c,e,t));break}else{let f=i.map[c];if(f===void 0)f=new rf(c),Bd(i,f);i=f}}}class oa{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);kA(o,c,this)}let s=[],r=[];for(let a of this.seq)if(a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW)s.push(a);else r.push(a);if(s.length>0)this.seq=s.concat(r)}setValue(e,t,i,s){let r=this.map[t];if(r!==void 0)r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];if(s!==void 0)this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];if(c.needsUpdate!==!1)o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];if(a.id in t)i.push(a)}return i}}function kd(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}var zA=37297,HA=0;function GA(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let o=r;o<a;o++){let c=o+1;s.push(`${c===t?">":" "} ${c}: ${i[o]}`)}return s.join(`
`)}var zd=new At;function WA(e){Tt._getMatrix(zd,Tt.workingColorSpace,e);let t=`mat3( ${zd.elements.map((i)=>i.toFixed(4))} )`;switch(Tt.getTransfer(e)){case Sl:return[t,"LinearTransferOETF"];case Wt:return[t,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Hd(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(s&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let c=parseInt(o[1]);return i.toUpperCase()+`

`+a+`

`+GA(e.getShaderSource(t),c)}else return a}function VA(e,t){let i=WA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var jA={[Dc]:"Linear",[Lc]:"Reinhard",[Fc]:"Cineon",[Nc]:"ACESFilmic",[Oc]:"AgX",[Bc]:"Neutral",[Uc]:"Custom"};function qA(e,t){let i=jA[t];if(i===void 0)return et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Uo=new P;function XA(){Tt.getLuminanceCoefficients(Uo);let e=Uo.x.toFixed(4),t=Uo.y.toFixed(4),i=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function KA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function YA(e){let t=[];for(let i in e){let s=e[i];if(s===!1)continue;t.push("#define "+i+" "+s)}return t.join(`
`)}function JA(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),o=a.name,c=1;if(a.type===e.FLOAT_MAT2)c=2;if(a.type===e.FLOAT_MAT3)c=3;if(a.type===e.FLOAT_MAT4)c=4;i[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:c}}return i}function aa(e){return e!==""}function Gd(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(e){return e.replace(ZA,QA)}var $A=new Map;function QA(e,t){let i=Et[t];if(i===void 0){let s=$A.get(t);if(s!==void 0)i=Et[s],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return du(i)}var e3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(e){return e.replace(e3,t3)}function t3(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function jd(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var n3={[Hr]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function i3(e){return n3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var s3={[tr]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function r3(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return s3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var a3={[As]:"ENVMAP_MODE_REFRACTION"};function o3(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return a3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c3={[Yh]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function l3(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return c3[e.combine]||"ENVMAP_BLENDING_NONE"}function u3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function h3(e,t,i,s){let r=e.getContext(),{defines:a,vertexShader:o,fragmentShader:c}=i,l=i3(i),u=r3(i),h=o3(i),f=l3(i),d=u3(i),p=KA(i),g=YA(a),y=r.createProgram(),A,m,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(aa).join(`
`),A.length>0)A+=`
`;if(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(aa).join(`
`),m.length>0)m+=`
`}else A=[jd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[jd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qn?"#define TONE_MAPPING":"",i.toneMapping!==Qn?Et.tonemapping_pars_fragment:"",i.toneMapping!==Qn?qA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,VA("linearToOutputTexel",i.outputColorSpace),XA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(aa).join(`
`);if(o=du(o),o=Gd(o,i),o=Wd(o,i),c=du(c),c=Gd(c,i),c=Wd(c,i),o=Vd(o),c=Vd(c),i.isRawShaderMaterial!==!0)S=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",i.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let w=S+A+o,b=S+m+c,M=kd(r,r.VERTEX_SHADER,w),R=kd(r,r.FRAGMENT_SHADER,b);if(r.attachShader(y,M),r.attachShader(y,R),i.index0AttributeName!==void 0)r.bindAttribLocation(y,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(y,0,"position");r.linkProgram(y);function C(N){if(e.debug.checkShaderErrors){let F=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(M)||"",B=r.getShaderInfoLog(R)||"",j=F.trim(),ie=z.trim(),J=B.trim(),W=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,y,M,R);else{let U=Hd(r,M,"vertex"),oe=Hd(r,R,"fragment");ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+U+`
`+oe)}else if(j!=="")et("WebGLProgram: Program Info Log:",j);else if(ie===""||J==="")H=!1;if(H)N.diagnostics={runnable:W,programLog:j,vertexShader:{log:ie,prefix:A},fragmentShader:{log:J,prefix:m}}}r.deleteShader(M),r.deleteShader(R),v=new oa(r,y),T=JA(r,y)}let v;this.getUniforms=function(){if(v===void 0)C(this);return v};let T;this.getAttributes=function(){if(T===void 0)C(this);return T};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=r.getProgramParameter(y,zA);return I},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=R,this}var d3=0;class af{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);if(s.has(t)===!1)s.add(t),t.usedTimes++;if(s.has(i)===!1)s.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new of(e),t.set(e,i);return i}}class of{constructor(e){this.id=d3++,this.code=e,this.usedTimes=0}}function f3(e){return e===xs||e===lo||e===uo}function p3(e,t,i,s,r,a){let o=new Ao,c=new af,l=new Set,u=[],h=new Map,{logarithmicDepthBuffer:f,precision:d}=s,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){if(l.add(v),v===0)return"uv";return`uv${v}`}function y(v,T,I,N,F,z){let B=N.fog,j=F.geometry,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=t.get(v.envMap||ie,J),H=!!W&&W.mapping===Gr?W.image.height:null,U=p[v.type];if(v.precision!==null){if(d=s.getMaxPrecision(v.precision),d!==v.precision)et("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead.")}let oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=oe!==void 0?oe.length:0,Le=0;if(j.morphAttributes.position!==void 0)Le=1;if(j.morphAttributes.normal!==void 0)Le=2;if(j.morphAttributes.color!==void 0)Le=3;let dt,Ge,ne,pe;if(U){let Lt=bi[U];dt=Lt.vertexShader,Ge=Lt.fragmentShader}else{dt=v.vertexShader,Ge=v.fragmentShader;let Lt=c.getVertexShaderStage(v),gt=c.getFragmentShaderStage(v);c.update(v,Lt,gt),ne=Lt.id,pe=gt.id}let ve=e.getRenderTarget(),qe=e.state.buffers.depth.getReversed(),Je=F.isInstancedMesh===!0,Q=F.isBatchedMesh===!0,Ze=!!v.map,k=!!v.matcap,me=!!W,Ie=!!v.aoMap,Xe=!!v.lightMap,st=!!v.bumpMap&&v.wireframe===!1,rt=!!v.normalMap,ot=!!v.displacementMap,pt=!!v.emissiveMap,le=!!v.metalnessMap,D=!!v.roughnessMap,Ue=v.anisotropy>0,Ee=v.clearcoat>0,je=v.dispersion>0,E=v.retroreflectivity>0,x=v.iridescence>0,O=v.sheen>0,K=v.transmission>0,fe=Ue&&!!v.anisotropyMap,ge=Ee&&!!v.clearcoatMap,be=Ee&&!!v.clearcoatNormalMap,re=Ee&&!!v.clearcoatRoughnessMap,ue=x&&!!v.iridescenceMap,De=x&&!!v.iridescenceThicknessMap,Ye=O&&!!v.sheenColorMap,Ce=O&&!!v.sheenRoughnessMap,Se=!!v.specularMap,ze=!!v.specularColorMap,Qe=!!v.specularIntensityMap,mt=K&&!!v.transmissionMap,V=K&&!!v.thicknessMap,Pe=!!v.gradientMap,ce=!!v.alphaMap,Re=v.alphaTest>0,We=!!v.alphaHash,Ae=!!v.extensions,Ne=Qn;if(v.toneMapped){if(ve===null||ve.isXRRenderTarget===!0)Ne=e.toneMapping}let ct={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:dt,fragmentShader:Ge,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Q,batchingColor:Q&&F._colorsTexture!==null,instancing:Je,instancingColor:Je&&F.instanceColor!==null,instancingMorph:Je&&F.morphTexture!==null,outputColorSpace:ve===null?e.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:k,envMap:me,envMapMode:me&&W.mapping,envMapCubeUVHeight:H,aoMap:Ie,lightMap:Xe,bumpMap:st,normalMap:rt,displacementMap:ot,emissiveMap:pt,normalMapObjectSpace:rt&&v.normalMapType===sd,normalMapTangentSpace:rt&&v.normalMapType===Ml,packedNormalMap:rt&&v.normalMapType===Ml&&f3(v.normalMap.format),metalnessMap:le,roughnessMap:D,anisotropy:Ue,anisotropyMap:fe,clearcoat:Ee,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:re,dispersion:je,retroreflection:E,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:De,sheen:O,sheenColorMap:Ye,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:ze,specularIntensityMap:Qe,transmission:K,transmissionMap:mt,thicknessMap:V,gradientMap:Pe,opaque:v.transparent===!1&&v.blending===ui&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Re,alphaHash:We,combine:v.combine,mapUv:Ze&&g(v.map.channel),aoMapUv:Ie&&g(v.aoMap.channel),lightMapUv:Xe&&g(v.lightMap.channel),bumpMapUv:st&&g(v.bumpMap.channel),normalMapUv:rt&&g(v.normalMap.channel),displacementMapUv:ot&&g(v.displacementMap.channel),emissiveMapUv:pt&&g(v.emissiveMap.channel),metalnessMapUv:le&&g(v.metalnessMap.channel),roughnessMapUv:D&&g(v.roughnessMap.channel),anisotropyMapUv:fe&&g(v.anisotropyMap.channel),clearcoatMapUv:ge&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(v.sheenRoughnessMap.channel),specularMapUv:Se&&g(v.specularMap.channel),specularColorMapUv:ze&&g(v.specularColorMap.channel),specularIntensityMapUv:Qe&&g(v.specularIntensityMap.channel),transmissionMapUv:mt&&g(v.transmissionMap.channel),thicknessMapUv:V&&g(v.thicknessMap.channel),alphaMapUv:ce&&g(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(rt||Ue),vertexNormals:!!j.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Ze||ce),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||j.attributes.normal===void 0&&rt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:qe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Le,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&Tt.getTransfer(v.map.colorSpace)===Wt,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(v.emissiveMap.colorSpace)===Wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function A(v){let T=[];if(v.shaderID)T.push(v.shaderID);else T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID);if(v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);if(v.isRawShaderMaterial===!1)m(T,v),S(T,v),T.push(e.outputColorSpace);return T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){if(o.disableAll(),T.instancing)o.enable(0);if(T.instancingColor)o.enable(1);if(T.instancingMorph)o.enable(2);if(T.matcap)o.enable(3);if(T.envMap)o.enable(4);if(T.normalMapObjectSpace)o.enable(5);if(T.normalMapTangentSpace)o.enable(6);if(T.clearcoat)o.enable(7);if(T.iridescence)o.enable(8);if(T.alphaTest)o.enable(9);if(T.vertexColors)o.enable(10);if(T.vertexAlphas)o.enable(11);if(T.vertexUv1s)o.enable(12);if(T.vertexUv2s)o.enable(13);if(T.vertexUv3s)o.enable(14);if(T.vertexTangents)o.enable(15);if(T.anisotropy)o.enable(16);if(T.alphaHash)o.enable(17);if(T.batching)o.enable(18);if(T.dispersion)o.enable(19);if(T.retroreflection)o.enable(24);if(T.batchingColor)o.enable(20);if(T.gradientMap)o.enable(21);if(T.packedNormalMap)o.enable(22);if(T.vertexNormals)o.enable(23);if(v.push(o.mask),o.disableAll(),T.fog)o.enable(0);if(T.useFog)o.enable(1);if(T.flatShading)o.enable(2);if(T.logarithmicDepthBuffer)o.enable(3);if(T.reversedDepthBuffer)o.enable(4);if(T.skinning)o.enable(5);if(T.morphTargets)o.enable(6);if(T.morphNormals)o.enable(7);if(T.morphColors)o.enable(8);if(T.premultipliedAlpha)o.enable(9);if(T.shadowMapEnabled)o.enable(10);if(T.doubleSided)o.enable(11);if(T.flipSided)o.enable(12);if(T.useDepthPacking)o.enable(13);if(T.dithering)o.enable(14);if(T.transmission)o.enable(15);if(T.sheen)o.enable(16);if(T.opaque)o.enable(17);if(T.pointsUvs)o.enable(18);if(T.decodeVideoTexture)o.enable(19);if(T.decodeVideoTextureEmissive)o.enable(20);if(T.alphaToCoverage)o.enable(21);if(T.numLightProbeGrids>0)o.enable(22);if(T.hasPositionAttribute)o.enable(23);v.push(o.mask)}function w(v){let T=p[v.type],I;if(T){let N=bi[T];I=_d.clone(N.uniforms)}else I=v.uniforms;return I}function b(v,T){let I=h.get(T);if(I!==void 0)++I.usedTimes;else I=new h3(e,T,v,r),u.push(I),h.set(T,I);return I}function M(v){if(--v.usedTimes===0){let T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){c.remove(v)}function C(){c.dispose()}return{getParameters:y,getProgramCacheKey:A,getUniforms:w,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:C}}function m3(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let c=e.get(o);if(c===void 0)c={},e.set(o,c);return c}function s(o){e.delete(o)}function r(o,c,l){e.get(o)[c]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function A3(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function qd(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Xd(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function o(d){let p=0;if(d.isInstancedMesh)p+=2;if(d.isSkinnedMesh)p+=1;return p}function c(d,p,g,y,A,m){let S=e[t];if(S===void 0)S={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:A,group:m},e[t]=S;else S.id=d.id,S.object=d,S.geometry=p,S.material=g,S.materialVariant=o(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=A,S.group=m;return t++,S}function l(d,p,g,y,A,m,S){if(S.reversedDepth===!0)A=-A;let w=c(d,p,g,y,A,m);if(g.transmission>0)s.push(w);else if(g.transparent===!0)r.push(w);else i.push(w)}function u(d,p,g,y,A,m){let S=c(d,p,g,y,A,m);if(g.transmission>0)s.unshift(S);else if(g.transparent===!0)r.unshift(S);else i.unshift(S)}function h(d,p){if(i.length>1)i.sort(d||A3);if(s.length>1)s.sort(p||qd);if(r.length>1)r.sort(p||qd)}function f(){for(let d=t,p=e.length;d<p;d++){let g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:l,unshift:u,finish:f,sort:h}}function g3(){let e=new WeakMap;function t(s,r){let a=e.get(s),o;if(a===void 0)o=new Xd,e.set(s,[o]);else if(r>=a.length)o=new Xd,a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function b3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new Be};break;case"SpotLight":i={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function v3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var x3=0;function _3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function y3(e){let t=new b3,i=v3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);let r=new P,a=new at,o=new at;function c(u){let h=0,f=0,d=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let p=0,g=0,y=0,A=0,m=0,S=0,w=0,b=0,M=0,R=0,C=0,v=0,T=0,I=0;u.sort(_3);for(let F=0,z=u.length;F<z;F++){let B=u[F],{color:j,intensity:ie,distance:J}=B,W=null;if(B.shadow&&B.shadow.map)if(B.shadow.map.texture.format===xs)W=B.shadow.map.texture;else W=B.shadow.map.depthTexture||B.shadow.map.texture;if(B.isAmbientLight)h+=j.r*ie,f+=j.g*ie,d+=j.b*ie;else if(B.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(B.sh.coefficients[H],ie);I++}else if(B.isSunLight){let H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let U=B.shadow,oe=i.get(B);oe.shadowIntensity=U.intensity,oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),s.sunShadow[g]=oe,s.sunShadowMap[g]=W;let we=U.getViewportCount();for(let Le=0;Le<we;Le++)s.sunShadowMatrix[y+Le]=U.getMatrix(Le),s.sunShadowCascade[y+Le]=U._cascadeData[Le];y+=we,g++}s.sun[p]=H,p++}else if(B.isDirectionalLight){let H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let U=B.shadow,oe=i.get(B);oe.shadowIntensity=U.intensity,oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,s.directionalShadow[A]=oe,s.directionalShadowMap[A]=W,s.directionalShadowMatrix[A]=B.shadow.matrix,M++}s.directional[A]=H,A++}else if(B.isSpotLight){let H=t.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(j).multiplyScalar(ie),H.distance=J,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,s.spot[S]=H;let U=B.shadow;if(B.map){if(s.spotLightMap[v]=B.map,v++,U.updateMatrices(B),B.castShadow)T++}if(s.spotLightMatrix[S]=U.matrix,B.castShadow){let oe=i.get(B);oe.shadowIntensity=U.intensity,oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,s.spotShadow[S]=oe,s.spotShadowMap[S]=W,C++}S++}else if(B.isRectAreaLight){let H=t.get(B);H.color.copy(j).multiplyScalar(ie),H.halfWidth.set(B.width*0.5,0,0),H.halfHeight.set(0,B.height*0.5,0),s.rectArea[w]=H,w++}else if(B.isPointLight){let H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){let U=B.shadow,oe=i.get(B);oe.shadowIntensity=U.intensity,oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,oe.shadowCameraNear=U.camera.near,oe.shadowCameraFar=U.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=W,s.pointShadowMatrix[m]=B.shadow.matrix,R++}s.point[m]=H,m++}else if(B.isHemisphereLight){let H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(ie),H.groundColor.copy(B.groundColor).multiplyScalar(ie),s.hemi[b]=H,b++}}if(w>0)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2;else s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2;s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=d;let N=s.hash;if(N.sunLength!==p||N.directionalLength!==A||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==M||N.numPointShadows!==R||N.numSpotShadows!==C||N.numSpotMaps!==v||N.numLightProbes!==I)s.sun.length=p,s.directional.length=A,s.spot.length=S,s.rectArea.length=w,s.point.length=m,s.hemi.length=b,s.sunShadow.length=g,s.sunShadowMap.length=g,s.sunShadowMatrix.length=y,s.sunShadowCascade.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.directionalShadowMatrix.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.pointShadowMatrix.length=R,s.spotShadow.length=C,s.spotShadowMap.length=C,s.spotLightMatrix.length=C+v-T,s.spotLightMap.length=v,s.numSpotLightShadowsWithMaps=T,s.numLightProbes=I,N.sunLength=p,N.directionalLength=A,N.pointLength=m,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=M,N.numPointShadows=R,N.numSpotShadows=C,N.numSpotMaps=v,N.numLightProbes=I,s.version=x3++}function l(u,h){let f=0,d=0,p=0,g=0,y=0,A=0,m=h.matrixWorldInverse;for(let S=0,w=u.length;S<w;S++){let b=u[S];if(b.isSunLight){let M=s.sun[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),f++}else if(b.isDirectionalLight){let M=s.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=s.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let M=s.rectArea[y];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(b.width*0.5,0,0),M.halfHeight.set(0,b.height*0.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let M=s.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let M=s.hemi[A];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),A++}}}return{setup:c,setupView:l,state:s}}function Kd(e){let t=new y3(e),i=[],s=[],r=[];function a(d){f.camera=d,i.length=0,s.length=0,r.length=0}function o(d){i.push(d)}function c(d){s.push(d)}function l(d){r.push(d)}function u(){t.setup(i)}function h(d){t.setupView(i,d)}let f={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:c,pushLightProbeGrid:l}}function M3(e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;if(o===void 0)c=new Kd(e),t.set(r,[c]);else if(a>=o.length)c=new Kd(e),o.push(c);else c=o[a];return c}function s(){t=new WeakMap}return{get:i,dispose:s}}var S3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
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
}`,E3=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],T3=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Yd=new at,ra=new P,lu=new P;function R3(e,t,i){let s=new Jr,r=new Oe,a=new Oe,o=new Ht,c=new Wl,l=new Vl,u={},h=i.maxTextureSize,f={[ci]:yn,[yn]:ci,[Qt]:Qt},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:S3,fragmentShader:w3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new it;g.setAttribute("position",new ut(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new Pt(g,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let m=this.type;this.render=function(R,C,v){if(A.enabled===!1)return;if(A.autoUpdate===!1&&A.needsUpdate===!1)return;if(R.length===0)return;if(this.type===wh)et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hr;let T=e.getRenderTarget(),I=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),F=e.state;if(F.setBlending(li),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=m!==this.type;if(z)C.traverse(function(B){if(B.material)if(Array.isArray(B.material))B.material.forEach((j)=>j.needsUpdate=!0);else B.material.needsUpdate=!0});for(let B=0,j=R.length;B<j;B++){let ie=R[B],J=ie.shadow;if(J===void 0){et("WebGLShadowMap:",ie,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let W=J.getFrameExtents();if(r.multiply(W),a.copy(J.mapSize),r.x>h||r.y>h){if(r.x>h)a.x=Math.floor(h/W.x),r.x=a.x*W.x,J.mapSize.x=a.x;if(r.y>h)a.y=Math.floor(h/W.y),r.y=a.y*W.y,J.mapSize.y=a.y}let H=e.state.buffers.depth.getReversed();if(J.camera._reversedDepth=H,J.map===null||z===!0){if(J.map!==null){if(J.map.depthTexture!==null)J.map.depthTexture.dispose(),J.map.depthTexture=null;J.map.dispose()}if(this.type===Qs){if(ie.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Pn(r.x,r.y,{format:xs,type:di,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),J.map.texture.name=ie.name+".shadowMap",J.map.depthTexture=new _s(r.x,r.y,Ci),J.map.depthTexture.name=ie.name+".shadowMapDepth",J.map.depthTexture.format=bs,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ti,J.map.depthTexture.magFilter=ti}else{if(ie.isPointLight)J.map=new fu(r.x),J.map.depthTexture=new Ll(r.x,Yi);else J.map=new Pn(r.x,r.y),J.map.depthTexture=new _s(r.x,r.y,Yi);if(J.map.depthTexture.name=ie.name+".shadowMap",J.map.depthTexture.format=bs,this.type===Hr)J.map.depthTexture.compareFunction=H?po:fo,J.map.depthTexture.minFilter=Gt,J.map.depthTexture.magFilter=Gt;else J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ti,J.map.depthTexture.magFilter=ti}J.camera.updateProjectionMatrix()}if(J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y))J.map.setSize(r.x,r.y);let U=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();if(ie.isPointLight!==!0)J.updateMatrices(ie,v);for(let oe=0;oe<U;oe++){let we=J.getCamera(oe);if(ie.isPointLight){let{camera:Le,matrix:dt}=J,Ge=ie.distance||Le.far;if(Ge!==Le.far)Le.far=Ge,Le.updateProjectionMatrix();ra.setFromMatrixPosition(ie.matrixWorld),Le.position.copy(ra),lu.copy(Le.position),lu.add(E3[oe]),Le.up.copy(T3[oe]),Le.lookAt(lu),Le.updateMatrixWorld(),dt.makeTranslation(-ra.x,-ra.y,-ra.z),Yd.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Yd,Le.coordinateSystem,Le.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)e.setRenderTarget(J.map,oe),e.clear();else{if(oe===0)e.setRenderTarget(J.map),e.clear();let Le=J.getViewport(oe);o.set(a.x*Le.x,a.y*Le.y,a.x*Le.z,a.y*Le.w),F.viewport(o)}s=J.getFrustum(oe),b(C,v,we,ie,this.type)}if(J.isPointLightShadow!==!0&&this.type===Qs)S(J,v);J.needsUpdate=!1}m=this.type,A.needsUpdate=!1,e.setRenderTarget(T,I,N)};function S(R,C){let v=t.update(y);if(d.defines.VSM_SAMPLES!==R.blurSamples)d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Pn(r.x,r.y,{format:xs,type:di});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(C,null,v,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(C,null,v,p,y,null)}function w(R,C,v,T){let I=null,N=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?l:c,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,z=C.uuid,B=u[F];if(B===void 0)B={},u[F]=B;let j=B[z];if(j===void 0)j=I.clone(),B[z]=j,C.addEventListener("dispose",M);I=j}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Qs)I.side=C.shadowSide!==null?C.shadowSide:C.side;else I.side=C.shadowSide!==null?C.shadowSide:f[C.side];if(I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=e.properties.get(I);F.light=v}return I}function b(R,C,v,T,I){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&I===Qs)&&(!R.frustumCulled||R.intersectsFrustum(s))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);let z=t.update(R),B=R.material;if(Array.isArray(B)){let j=z.groups;for(let ie=0,J=j.length;ie<J;ie++){let W=j[ie],H=B[W.materialIndex];if(H&&H.visible){let U=w(R,H,T,I);R.onBeforeShadow(e,R,C,v,z,U,W),e.renderBufferDirect(v,null,z,U,R,W),R.onAfterShadow(e,R,C,v,z,U,W)}}}else if(B.visible){let j=w(R,B,T,I);R.onBeforeShadow(e,R,C,v,z,j,null),e.renderBufferDirect(v,null,z,j,R,null),R.onAfterShadow(e,R,C,v,z,j,null)}}}let F=R.children;for(let z=0,B=F.length;z<B;z++)b(F[z],C,v,T,I)}function M(R){R.target.removeEventListener("dispose",M);for(let v in u){let T=u[v],I=R.target.uuid;if(I in T)T[I].dispose(),delete T[I]}}}function C3(e,t){function i(){let V=!1,Pe=new Ht,ce=null,Re=new Ht(0,0,0,0);return{setMask:function(We){if(ce!==We&&!V)e.colorMask(We,We,We,We),ce=We},setLocked:function(We){V=We},setClear:function(We,Ae,Ne,ct,Lt){if(Lt===!0)We*=ct,Ae*=ct,Ne*=ct;if(Pe.set(We,Ae,Ne,ct),Re.equals(Pe)===!1)e.clearColor(We,Ae,Ne,ct),Re.copy(Pe)},reset:function(){V=!1,ce=null,Re.set(-1,0,0,0)}}}function s(){let V=!1,Pe=!1,ce=null,Re=null,We=null;return{setReversed:function(Ae){if(Pe!==Ae){let Ne=t.get("EXT_clip_control");if(Ae)Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT);else Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);Pe=Ae;let ct=We;We=null,this.setClear(ct)}},getReversed:function(){return Pe},setTest:function(Ae){if(Ae)ve(e.DEPTH_TEST);else qe(e.DEPTH_TEST)},setMask:function(Ae){if(ce!==Ae&&!V)e.depthMask(Ae),ce=Ae},setFunc:function(Ae){if(Pe)Ae=pd[Ae];if(Re!==Ae){switch(Ae){case Gh:e.depthFunc(e.NEVER);break;case Wh:e.depthFunc(e.ALWAYS);break;case Vh:e.depthFunc(e.LESS);break;case Ic:e.depthFunc(e.LEQUAL);break;case jh:e.depthFunc(e.EQUAL);break;case qh:e.depthFunc(e.GEQUAL);break;case Xh:e.depthFunc(e.GREATER);break;case Kh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=Ae}},setLocked:function(Ae){V=Ae},setClear:function(Ae){if(We!==Ae){if(We=Ae,Pe)Ae=1-Ae;e.clearDepth(Ae)}},reset:function(){V=!1,ce=null,Re=null,We=null,Pe=!1}}}function r(){let V=!1,Pe=null,ce=null,Re=null,We=null,Ae=null,Ne=null,ct=null,Lt=null;return{setTest:function(gt){if(!V)if(gt)ve(e.STENCIL_TEST);else qe(e.STENCIL_TEST)},setMask:function(gt){if(Pe!==gt&&!V)e.stencilMask(gt),Pe=gt},setFunc:function(gt,mn,_n){if(ce!==gt||Re!==mn||We!==_n)e.stencilFunc(gt,mn,_n),ce=gt,Re=mn,We=_n},setOp:function(gt,mn,_n){if(Ae!==gt||Ne!==mn||ct!==_n)e.stencilOp(gt,mn,_n),Ae=gt,Ne=mn,ct=_n},setLocked:function(gt){V=gt},setClear:function(gt){if(Lt!==gt)e.clearStencil(gt),Lt=gt},reset:function(){V=!1,Pe=null,ce=null,Re=null,We=null,Ae=null,Ne=null,ct=null,Lt=null}}}let a=new i,o=new s,c=new r,l=new WeakMap,u=new WeakMap,h={},f={},d={},p=new WeakMap,g=[],y=null,A=!1,m=null,S=null,w=null,b=null,M=null,R=null,C=null,v=new Be(0,0,0),T=0,I=!1,N=null,F=null,z=null,B=null,j=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,H=e.getParameter(e.VERSION);if(H.indexOf("WebGL")!==-1)W=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=W>=1;else if(H.indexOf("OpenGL ES")!==-1)W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=W>=2;let U=null,oe={},we=e.getParameter(e.SCISSOR_BOX),Le=e.getParameter(e.VIEWPORT),dt=new Ht().fromArray(we),Ge=new Ht().fromArray(Le);function ne(V,Pe,ce,Re){let We=new Uint8Array(4),Ae=e.createTexture();e.bindTexture(V,Ae),e.texParameteri(V,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(V,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ne=0;Ne<ce;Ne++)if(V===e.TEXTURE_3D||V===e.TEXTURE_2D_ARRAY)e.texImage3D(Pe,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,We);else e.texImage2D(Pe+Ne,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,We);return Ae}let pe={};pe[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ve(e.DEPTH_TEST),o.setFunc(Ic),st(!1),rt(Rc),ve(e.CULL_FACE),Ie(li);function ve(V){if(h[V]!==!0)e.enable(V),h[V]=!0}function qe(V){if(h[V]!==!1)e.disable(V),h[V]=!1}function Je(V,Pe){if(d[V]!==Pe){if(e.bindFramebuffer(V,Pe),d[V]=Pe,V===e.DRAW_FRAMEBUFFER)d[e.FRAMEBUFFER]=Pe;if(V===e.FRAMEBUFFER)d[e.DRAW_FRAMEBUFFER]=Pe;return!0}return!1}function Q(V,Pe){let ce=g,Re=!1;if(V){if(ce=p.get(Pe),ce===void 0)ce=[],p.set(Pe,ce);let We=V.textures;if(ce.length!==We.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let Ae=0,Ne=We.length;Ae<Ne;Ae++)ce[Ae]=e.COLOR_ATTACHMENT0+Ae;ce.length=We.length,Re=!0}}else if(ce[0]!==e.BACK)ce[0]=e.BACK,Re=!0;if(Re)e.drawBuffers(ce)}function Ze(V){if(y!==V)return e.useProgram(V),y=V,!0;return!1}let k={[er]:e.FUNC_ADD,[Eh]:e.FUNC_SUBTRACT,[Th]:e.FUNC_REVERSE_SUBTRACT};k[Rh]=e.MIN,k[Qa]=e.MAX;let me={[Ch]:e.ZERO,[hi]:e.ONE,[Ph]:e.SRC_COLOR,[Dh]:e.SRC_ALPHA,[Oh]:e.SRC_ALPHA_SATURATE,[Nh]:e.DST_COLOR,[Lh]:e.DST_ALPHA,[Ih]:e.ONE_MINUS_SRC_COLOR,[eo]:e.ONE_MINUS_SRC_ALPHA,[Uh]:e.ONE_MINUS_DST_COLOR,[Fh]:e.ONE_MINUS_DST_ALPHA,[Bh]:e.CONSTANT_COLOR,[kh]:e.ONE_MINUS_CONSTANT_COLOR,[zh]:e.CONSTANT_ALPHA,[Hh]:e.ONE_MINUS_CONSTANT_ALPHA};function Ie(V,Pe,ce,Re,We,Ae,Ne,ct,Lt,gt){if(V===li){if(A===!0)qe(e.BLEND),A=!1;return}if(A===!1)ve(e.BLEND),A=!0;if(V!==Xi){if(V!==m||gt!==I){if(S!==er||M!==er)e.blendEquation(e.FUNC_ADD),S=er,M=er;if(gt)switch(V){case ui:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zt:e.blendFunc(e.ONE,e.ONE);break;case Cc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Pc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ht("WebGLState: Invalid blending: ",V);break}else switch(V){case ui:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Cc:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",V);break}w=null,b=null,R=null,C=null,v.set(0,0,0),T=0,m=V,I=gt}return}if(We=We||Pe,Ae=Ae||ce,Ne=Ne||Re,Pe!==S||We!==M)e.blendEquationSeparate(k[Pe],k[We]),S=Pe,M=We;if(ce!==w||Re!==b||Ae!==R||Ne!==C)e.blendFuncSeparate(me[ce],me[Re],me[Ae],me[Ne]),w=ce,b=Re,R=Ae,C=Ne;if(ct.equals(v)===!1||Lt!==T)e.blendColor(ct.r,ct.g,ct.b,Lt),v.copy(ct),T=Lt;m=V,I=!1}function Xe(V,Pe){V.side===Qt?qe(e.CULL_FACE):ve(e.CULL_FACE);let ce=V.side===yn;if(Pe)ce=!ce;st(ce),V.blending===ui&&V.transparent===!1?Ie(li):Ie(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),a.setMask(V.colorWrite);let Re=V.stencilWrite;if(c.setTest(Re),Re)c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass);pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):qe(e.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){if(N!==V){if(V)e.frontFace(e.CW);else e.frontFace(e.CCW);N=V}}function rt(V){if(V!==Mh){if(ve(e.CULL_FACE),V!==F)if(V===Rc)e.cullFace(e.BACK);else if(V===Sh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else qe(e.CULL_FACE);F=V}function ot(V){if(V!==z){if(J)e.lineWidth(V);z=V}}function pt(V,Pe,ce){if(V){if(ve(e.POLYGON_OFFSET_FILL),B!==Pe||j!==ce){if(B=Pe,j=ce,o.getReversed())Pe=-Pe;e.polygonOffset(Pe,ce)}}else qe(e.POLYGON_OFFSET_FILL)}function le(V){if(V)ve(e.SCISSOR_TEST);else qe(e.SCISSOR_TEST)}function D(V){if(V===void 0)V=e.TEXTURE0+ie-1;if(U!==V)e.activeTexture(V),U=V}function Ue(V,Pe,ce){if(ce===void 0)if(U===null)ce=e.TEXTURE0+ie-1;else ce=U;let Re=oe[ce];if(Re===void 0)Re={type:void 0,texture:void 0},oe[ce]=Re;if(Re.type!==V||Re.texture!==Pe){if(U!==ce)e.activeTexture(ce),U=ce;e.bindTexture(V,Pe||pe[V]),Re.type=V,Re.texture=Pe}}function Ee(){let V=oe[U];if(V!==void 0&&V.type!==void 0)e.bindTexture(V.type,null),V.type=void 0,V.texture=void 0}function je(){try{e.compressedTexImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function x(){try{e.texSubImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function O(){try{e.texSubImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function fe(){try{e.compressedTexSubImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function ge(){try{e.texStorage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function be(){try{e.texStorage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function re(){try{e.texImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function ue(){try{e.texImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function De(V){if(f[V]!==void 0)return f[V];else return e.getParameter(V)}function Ye(V,Pe){if(f[V]!==Pe)e.pixelStorei(V,Pe),f[V]=Pe}function Ce(V){if(dt.equals(V)===!1)e.scissor(V.x,V.y,V.z,V.w),dt.copy(V)}function Se(V){if(Ge.equals(V)===!1)e.viewport(V.x,V.y,V.z,V.w),Ge.copy(V)}function ze(V,Pe){let ce=u.get(Pe);if(ce===void 0)ce=new WeakMap,u.set(Pe,ce);let Re=ce.get(V);if(Re===void 0)Re=e.getUniformBlockIndex(Pe,V.name),ce.set(V,Re)}function Qe(V,Pe){let Re=u.get(Pe).get(V);if(l.get(Pe)!==Re)e.uniformBlockBinding(Pe,Re,V.__bindingPointIndex),l.set(Pe,Re)}function mt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},U=null,oe={},d={},p=new WeakMap,g=[],y=null,A=!1,m=null,S=null,w=null,b=null,M=null,R=null,C=null,v=new Be(0,0,0),T=0,I=!1,N=null,F=null,z=null,B=null,j=null,dt.set(0,0,e.canvas.width,e.canvas.height),Ge.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:ve,disable:qe,bindFramebuffer:Je,drawBuffers:Q,useProgram:Ze,setBlending:Ie,setMaterial:Xe,setFlipSided:st,setCullFace:rt,setLineWidth:ot,setPolygonOffset:pt,setScissorTest:le,activeTexture:D,bindTexture:Ue,unbindTexture:Ee,compressedTexImage2D:je,compressedTexImage3D:E,texImage2D:re,texImage3D:ue,pixelStorei:Ye,getParameter:De,updateUBOMapping:ze,uniformBlockBinding:Qe,texStorage2D:ge,texStorage3D:be,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:fe,scissor:Ce,viewport:Se,reset:mt}}function P3(e,t,i,s,r,a,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Oe,h=new WeakMap,f=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function y(E,x){return g?new OffscreenCanvas(E,x):Js("canvas")}function A(E,x,O){let K=1,fe=je(E);if(fe.width>O||fe.height>O)K=O/Math.max(fe.width,fe.height);if(K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ge=Math.floor(K*fe.width),be=Math.floor(K*fe.height);if(d===void 0)d=y(ge,be);let re=x?y(ge,be):d;return re.width=ge,re.height=be,re.getContext("2d").drawImage(E,0,0,ge,be),et("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ge+"x"+be+")."),re}else{if("data"in E)et("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+").");return E}return E}function m(E){return E.generateMipmaps}function S(E){e.generateMipmap(E)}function w(E){if(E.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function b(E,x,O,K,fe,ge=!1){if(E!==null){if(e[E]!==void 0)return e[E];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let be;if(K){if(be=t.get("EXT_texture_norm16"),!be)et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let re=x;if(x===e.RED){if(O===e.FLOAT)re=e.R32F;if(O===e.HALF_FLOAT)re=e.R16F;if(O===e.UNSIGNED_BYTE)re=e.R8;if(O===e.UNSIGNED_SHORT&&be)re=be.R16_EXT;if(O===e.SHORT&&be)re=be.R16_SNORM_EXT}if(x===e.RED_INTEGER){if(O===e.UNSIGNED_BYTE)re=e.R8UI;if(O===e.UNSIGNED_SHORT)re=e.R16UI;if(O===e.UNSIGNED_INT)re=e.R32UI;if(O===e.BYTE)re=e.R8I;if(O===e.SHORT)re=e.R16I;if(O===e.INT)re=e.R32I}if(x===e.RG){if(O===e.FLOAT)re=e.RG32F;if(O===e.HALF_FLOAT)re=e.RG16F;if(O===e.UNSIGNED_BYTE)re=e.RG8;if(O===e.UNSIGNED_SHORT&&be)re=be.RG16_EXT;if(O===e.SHORT&&be)re=be.RG16_SNORM_EXT}if(x===e.RG_INTEGER){if(O===e.UNSIGNED_BYTE)re=e.RG8UI;if(O===e.UNSIGNED_SHORT)re=e.RG16UI;if(O===e.UNSIGNED_INT)re=e.RG32UI;if(O===e.BYTE)re=e.RG8I;if(O===e.SHORT)re=e.RG16I;if(O===e.INT)re=e.RG32I}if(x===e.RGB_INTEGER){if(O===e.UNSIGNED_BYTE)re=e.RGB8UI;if(O===e.UNSIGNED_SHORT)re=e.RGB16UI;if(O===e.UNSIGNED_INT)re=e.RGB32UI;if(O===e.BYTE)re=e.RGB8I;if(O===e.SHORT)re=e.RGB16I;if(O===e.INT)re=e.RGB32I}if(x===e.RGBA_INTEGER){if(O===e.UNSIGNED_BYTE)re=e.RGBA8UI;if(O===e.UNSIGNED_SHORT)re=e.RGBA16UI;if(O===e.UNSIGNED_INT)re=e.RGBA32UI;if(O===e.BYTE)re=e.RGBA8I;if(O===e.SHORT)re=e.RGBA16I;if(O===e.INT)re=e.RGBA32I}if(x===e.RGB){if(O===e.UNSIGNED_SHORT&&be)re=be.RGB16_EXT;if(O===e.SHORT&&be)re=be.RGB16_SNORM_EXT;if(O===e.UNSIGNED_INT_5_9_9_9_REV)re=e.RGB9_E5;if(O===e.UNSIGNED_INT_10F_11F_11F_REV)re=e.R11F_G11F_B10F}if(x===e.RGBA){let ue=ge?Sl:Tt.getTransfer(fe);if(O===e.FLOAT)re=e.RGBA32F;if(O===e.HALF_FLOAT)re=e.RGBA16F;if(O===e.UNSIGNED_BYTE)re=ue===Wt?e.SRGB8_ALPHA8:e.RGBA8;if(O===e.UNSIGNED_SHORT&&be)re=be.RGBA16_EXT;if(O===e.SHORT&&be)re=be.RGBA16_SNORM_EXT;if(O===e.UNSIGNED_SHORT_4_4_4_4)re=e.RGBA4;if(O===e.UNSIGNED_SHORT_5_5_5_1)re=e.RGB5_A1}if(re===e.R16F||re===e.R32F||re===e.RG16F||re===e.RG32F||re===e.RGBA16F||re===e.RGBA32F)t.get("EXT_color_buffer_float");return re}function M(E,x){let O;if(E){if(x===null||x===Yi||x===ir)O=e.DEPTH24_STENCIL8;else if(x===Ci)O=e.DEPTH32F_STENCIL8;else if(x===Wr)O=e.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Yi||x===ir)O=e.DEPTH_COMPONENT24;else if(x===Ci)O=e.DEPTH_COMPONENT32F;else if(x===Wr)O=e.DEPTH_COMPONENT16;return O}function R(E,x){if(m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ti&&E.minFilter!==Gt)return Math.log2(Math.max(x.width,x.height))+1;else if(E.mipmaps!==void 0&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return x.mipmaps.length;else return 1}function C(E){let x=E.target;if(x.removeEventListener("dispose",C),T(x),x.isVideoTexture)h.delete(x);if(x.isHTMLTexture)f.delete(x)}function v(E){let x=E.target;x.removeEventListener("dispose",v),N(x)}function T(E){let x=s.get(E);if(x.__webglInit===void 0)return;let O=E.source,K=p.get(O);if(K){let fe=K[x.__cacheKey];if(fe.usedTimes--,fe.usedTimes===0)I(E);if(Object.keys(K).length===0)p.delete(O)}s.remove(E)}function I(E){let x=s.get(E);e.deleteTexture(x.__webglTexture);let O=E.source,K=p.get(O);delete K[x.__cacheKey],o.memory.textures--}function N(E){let x=s.get(E);if(E.depthTexture)E.depthTexture.dispose(),s.remove(E.depthTexture);if(E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let fe=0;fe<x.__webglFramebuffer[K].length;fe++)e.deleteFramebuffer(x.__webglFramebuffer[K][fe]);else e.deleteFramebuffer(x.__webglFramebuffer[K]);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)e.deleteFramebuffer(x.__webglFramebuffer[K]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)e.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let K=0;K<x.__webglColorRenderbuffer.length;K++)if(x.__webglColorRenderbuffer[K])e.deleteRenderbuffer(x.__webglColorRenderbuffer[K])}if(x.__webglDepthRenderbuffer)e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let K=0,fe=O.length;K<fe;K++){let ge=s.get(O[K]);if(ge.__webglTexture)e.deleteTexture(ge.__webglTexture),o.memory.textures--;s.remove(O[K])}s.remove(E)}let F=0;function z(){F=0}function B(){return F}function j(E){F=E}function ie(){let E=F;if(E>=r.maxTextures)et("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures);return F+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function W(E,x){let O=s.get(E);if(E.isVideoTexture)Ue(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let K=E.image;if(K===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(O,E,x);return}}else if(E.isExternalTexture)O.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+x)}function H(E,x){let O=s.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){qe(O,E,x);return}else if(E.isExternalTexture)O.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+x)}function U(E,x){let O=s.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){qe(O,E,x);return}i.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+x)}function oe(E,x){let O=s.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Je(O,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+x)}let we={[ei]:e.REPEAT,[Ki]:e.CLAMP_TO_EDGE,[io]:e.MIRRORED_REPEAT},Le={[ti]:e.NEAREST,[so]:e.NEAREST_MIPMAP_NEAREST,[gs]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[nr]:e.LINEAR_MIPMAP_NEAREST,[Bn]:e.LINEAR_MIPMAP_LINEAR},dt={[rd]:e.NEVER,[ud]:e.ALWAYS,[ad]:e.LESS,[fo]:e.LEQUAL,[od]:e.EQUAL,[po]:e.GEQUAL,[cd]:e.GREATER,[ld]:e.NOTEQUAL};function Ge(E,x){if(x.type===Ci&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===nr||x.magFilter===gs||x.magFilter===Bn||x.minFilter===Gt||x.minFilter===nr||x.minFilter===gs||x.minFilter===Bn))et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(E,e.TEXTURE_WRAP_S,we[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,we[x.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,we[x.wrapR]);if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,Le[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Le[x.minFilter]),x.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,dt[x.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ti)return;if(x.minFilter!==gs&&x.minFilter!==Bn)return;if(x.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function ne(E,x){let O=!1;if(E.__webglInit===void 0)E.__webglInit=!0,x.addEventListener("dispose",C);let K=x.source,fe=p.get(K);if(fe===void 0)fe={},p.set(K,fe);let ge=J(x);if(ge!==E.__cacheKey){if(fe[ge]===void 0)fe[ge]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,O=!0;fe[ge].usedTimes++;let be=fe[E.__cacheKey];if(be!==void 0){if(fe[E.__cacheKey].usedTimes--,be.usedTimes===0)I(x)}E.__cacheKey=ge,E.__webglTexture=fe[ge].texture}return O}function pe(E,x,O){return Math.floor(Math.floor(E/O)/x)}function ve(E,x,O,K){let ge=E.updateRanges;if(ge.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,O,K,x.data);else{ge.sort((Ye,Ce)=>Ye.start-Ce.start);let be=0;for(let Ye=1;Ye<ge.length;Ye++){let Ce=ge[be],Se=ge[Ye],ze=Ce.start+Ce.count,Qe=pe(Se.start,x.width,4),mt=pe(Ce.start,x.width,4);if(Se.start<=ze+1&&Qe===mt&&pe(Se.start+Se.count-1,x.width,4)===Qe)Ce.count=Math.max(Ce.count,Se.start+Se.count-Ce.start);else++be,ge[be]=Se}ge.length=be+1;let re=i.getParameter(e.UNPACK_ROW_LENGTH),ue=i.getParameter(e.UNPACK_SKIP_PIXELS),De=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Ye=0,Ce=ge.length;Ye<Ce;Ye++){let Se=ge[Ye],ze=Math.floor(Se.start/4),Qe=Math.ceil(Se.count/4),mt=ze%x.width,V=Math.floor(ze/x.width),Pe=Qe,ce=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(e.UNPACK_SKIP_ROWS,V),i.texSubImage2D(e.TEXTURE_2D,0,mt,V,Pe,1,O,K,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,re),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(e.UNPACK_SKIP_ROWS,De)}}function qe(E,x,O){let K=e.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)K=e.TEXTURE_2D_ARRAY;if(x.isData3DTexture)K=e.TEXTURE_3D;let fe=ne(E,x),ge=x.source;i.bindTexture(K,E.__webglTexture,e.TEXTURE0+O);let be=s.get(ge);if(ge.version!==be.__version||fe===!0){if(i.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ce=Tt.getPrimaries(Tt.workingColorSpace),Re=x.colorSpace===Mn?null:Tt.getPrimaries(x.colorSpace),We=x.colorSpace===Mn||ce===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let ue=A(x.image,!1,r.maxTextureSize);ue=Ee(x,ue);let De=a.convert(x.format,x.colorSpace),Ye=a.convert(x.type),Ce=b(x.internalFormat,De,Ye,x.normalized,x.colorSpace,x.isVideoTexture);Ge(K,x);let Se,ze=x.mipmaps,Qe=x.isVideoTexture!==!0,mt=be.__version===void 0||fe===!0,V=ge.dataReady,Pe=R(x,ue);if(x.isDepthTexture){if(Ce=M(x.format===vs,x.type),mt)if(Qe)i.texStorage2D(e.TEXTURE_2D,1,Ce,ue.width,ue.height);else i.texImage2D(e.TEXTURE_2D,0,Ce,ue.width,ue.height,0,De,Ye,null)}else if(x.isDataTexture)if(ze.length>0){if(Qe&&mt)i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ze[0].width,ze[0].height);for(let ce=0,Re=ze.length;ce<Re;ce++)if(Se=ze[ce],Qe){if(V)i.texSubImage2D(e.TEXTURE_2D,ce,0,0,Se.width,Se.height,De,Ye,Se.data)}else i.texImage2D(e.TEXTURE_2D,ce,Ce,Se.width,Se.height,0,De,Ye,Se.data);x.generateMipmaps=!1}else if(Qe){if(mt)i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ue.width,ue.height);if(V)ve(x,ue,De,Ye)}else i.texImage2D(e.TEXTURE_2D,0,Ce,ue.width,ue.height,0,De,Ye,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(Qe&&mt)i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,Ce,ze[0].width,ze[0].height,ue.depth);for(let ce=0,Re=ze.length;ce<Re;ce++)if(Se=ze[ce],x.format!==kn)if(De!==null)if(Qe){if(V)if(x.layerUpdates.size>0){let We=iu(Se.width,Se.height,x.format,x.type);for(let Ae of x.layerUpdates){let Ne=Se.data.subarray(Ae*We/Se.data.BYTES_PER_ELEMENT,(Ae+1)*We/Se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,Ae,Se.width,Se.height,1,De,Ne)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ue.depth,De,Se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ce,Ce,Se.width,Se.height,ue.depth,0,Se.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Qe){if(V)i.texSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ue.depth,De,Ye,Se.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,ce,Ce,Se.width,Se.height,ue.depth,0,De,Ye,Se.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(Qe&&mt)i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ze[0].width,ze[0].height);for(let ce=0,Re=ze.length;ce<Re;ce++)if(Se=ze[ce],x.format!==kn)if(De!==null)if(Qe){if(V)i.compressedTexSubImage2D(e.TEXTURE_2D,ce,0,0,Se.width,Se.height,De,Se.data)}else i.compressedTexImage2D(e.TEXTURE_2D,ce,Ce,Se.width,Se.height,0,Se.data);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Qe){if(V)i.texSubImage2D(e.TEXTURE_2D,ce,0,0,Se.width,Se.height,De,Ye,Se.data)}else i.texImage2D(e.TEXTURE_2D,ce,Ce,Se.width,Se.height,0,De,Ye,Se.data)}else if(x.isDataArrayTexture)if(Qe){if(mt)i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,Ce,ue.width,ue.height,ue.depth);if(V)if(x.layerUpdates.size>0){let ce=iu(ue.width,ue.height,x.format,x.type);for(let Re of x.layerUpdates){let We=ue.data.subarray(Re*ce/ue.data.BYTES_PER_ELEMENT,(Re+1)*ce/ue.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Re,ue.width,ue.height,1,De,Ye,We)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,De,Ye,ue.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,De,Ye,ue.data);else if(x.isData3DTexture)if(Qe){if(mt)i.texStorage3D(e.TEXTURE_3D,Pe,Ce,ue.width,ue.height,ue.depth);if(V)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,De,Ye,ue.data)}else i.texImage3D(e.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,De,Ye,ue.data);else if(x.isFramebufferTexture){if(mt)if(Qe)i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ue.width,ue.height);else{let ce=ue.width,Re=ue.height;for(let We=0;We<Pe;We++)i.texImage2D(e.TEXTURE_2D,We,Ce,ce,Re,0,De,Ye,null),ce>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let ce=e.canvas;if(!ce.hasAttribute("layoutsubtree"))ce.setAttribute("layoutsubtree","true");if(ue.parentNode!==ce){ce.appendChild(ue),f.add(x),ce.onpaint=(Re)=>{let We=Re.changedElements;for(let Ae of f)if(We.includes(Ae.image))Ae.needsUpdate=!0},ce.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ue);else{let{RGBA:We,RGBA:Ae,UNSIGNED_BYTE:Ne}=e;e.texElementImage2D(e.TEXTURE_2D,0,We,Ae,Ne,ue)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Qe&&mt){let ce=je(ze[0]);i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ce.width,ce.height)}for(let ce=0,Re=ze.length;ce<Re;ce++)if(Se=ze[ce],Qe){if(V)i.texSubImage2D(e.TEXTURE_2D,ce,0,0,De,Ye,Se)}else i.texImage2D(e.TEXTURE_2D,ce,Ce,De,Ye,Se);x.generateMipmaps=!1}else if(Qe){if(mt){let ce=je(ue);i.texStorage2D(e.TEXTURE_2D,Pe,Ce,ce.width,ce.height)}if(V)i.texSubImage2D(e.TEXTURE_2D,0,0,0,De,Ye,ue)}else i.texImage2D(e.TEXTURE_2D,0,Ce,De,Ye,ue);if(m(x))S(K);if(be.__version=ge.version,x.onUpdate)x.onUpdate(x)}E.__version=x.version}function Je(E,x,O){if(x.image.length!==6)return;let K=ne(E,x),fe=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+O);let ge=s.get(fe);if(fe.version!==ge.__version||K===!0){i.activeTexture(e.TEXTURE0+O);let be=Tt.getPrimaries(Tt.workingColorSpace),re=x.colorSpace===Mn?null:Tt.getPrimaries(x.colorSpace),ue=x.colorSpace===Mn||be===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let De=x.isCompressedTexture||x.image[0].isCompressedTexture,Ye=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let Ae=0;Ae<6;Ae++){if(!De&&!Ye)Ce[Ae]=A(x.image[Ae],!0,r.maxCubemapSize);else Ce[Ae]=Ye?x.image[Ae].image:x.image[Ae];Ce[Ae]=Ee(x,Ce[Ae])}let Se=Ce[0],ze=a.convert(x.format,x.colorSpace),Qe=a.convert(x.type),mt=b(x.internalFormat,ze,Qe,x.normalized,x.colorSpace),V=x.isVideoTexture!==!0,Pe=ge.__version===void 0||K===!0,ce=fe.dataReady,Re=R(x,Se);Ge(e.TEXTURE_CUBE_MAP,x);let We;if(De){if(V&&Pe)i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,mt,Se.width,Se.height);for(let Ae=0;Ae<6;Ae++){We=Ce[Ae].mipmaps;for(let Ne=0;Ne<We.length;Ne++){let ct=We[Ne];if(x.format!==kn)if(ze!==null)if(V){if(ce)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,0,0,ct.width,ct.height,ze,ct.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,mt,ct.width,ct.height,0,ct.data);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(V){if(ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,0,0,ct.width,ct.height,ze,Qe,ct.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,mt,ct.width,ct.height,0,ze,Qe,ct.data)}}}else{if(We=x.mipmaps,V&&Pe){if(We.length>0)Re++;let Ae=je(Ce[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ye){if(V){if(ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ce[Ae].width,Ce[Ae].height,ze,Qe,Ce[Ae].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Ce[Ae].width,Ce[Ae].height,0,ze,Qe,Ce[Ae].data);for(let Ne=0;Ne<We.length;Ne++){let Lt=We[Ne].image[Ae].image;if(V){if(ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,0,0,Lt.width,Lt.height,ze,Qe,Lt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,mt,Lt.width,Lt.height,0,ze,Qe,Lt.data)}}else{if(V){if(ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze,Qe,Ce[Ae])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,ze,Qe,Ce[Ae]);for(let Ne=0;Ne<We.length;Ne++){let ct=We[Ne];if(V){if(ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,0,0,ze,Qe,ct.image[Ae])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,mt,ze,Qe,ct.image[Ae])}}}if(m(x))S(e.TEXTURE_CUBE_MAP);if(ge.__version=fe.version,x.onUpdate)x.onUpdate(x)}E.__version=x.version}function Q(E,x,O,K,fe,ge){let be=a.convert(O.format,O.colorSpace),re=a.convert(O.type),ue=b(O.internalFormat,be,re,O.normalized,O.colorSpace),De=s.get(x),Ye=s.get(O);if(Ye.__renderTarget=x,!De.__hasExternalTextures){let Ce=Math.max(1,x.width>>ge),Se=Math.max(1,x.height>>ge);if(fe===e.TEXTURE_3D||fe===e.TEXTURE_2D_ARRAY)i.texImage3D(fe,ge,ue,Ce,Se,x.depth,0,be,re,null);else i.texImage2D(fe,ge,ue,Ce,Se,0,be,re,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,E),D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,fe,Ye.__webglTexture,0,le(x));else if(fe===e.TEXTURE_2D||fe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,K,fe,Ye.__webglTexture,ge);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(E,x,O){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){let K=x.depthTexture,fe=K&&K.isDepthTexture?K.type:null,ge=M(x.stencilBuffer,fe),be=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(D(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(x),ge,x.width,x.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,le(x),ge,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,ge,x.width,x.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,be,e.RENDERBUFFER,E)}else{let K=x.textures;for(let fe=0;fe<K.length;fe++){let ge=K[fe],be=a.convert(ge.format,ge.colorSpace),re=a.convert(ge.type),ue=b(ge.internalFormat,be,re,ge.normalized,ge.colorSpace);if(D(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(x),ue,x.width,x.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,le(x),ue,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function k(E,x,O){let K=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=s.get(x.depthTexture);if(fe.__renderTarget=x,!fe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(K){if(fe.__webglInit===void 0)fe.__webglInit=!0,x.depthTexture.addEventListener("dispose",C);if(fe.__webglTexture===void 0){fe.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,fe.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,x.depthTexture);let De=a.convert(x.depthTexture.format),Ye=a.convert(x.depthTexture.type),Ce;if(x.depthTexture.format===bs)Ce=e.DEPTH_COMPONENT24;else if(x.depthTexture.format===vs)Ce=e.DEPTH24_STENCIL8;for(let Se=0;Se<6;Se++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ce,x.width,x.height,0,De,Ye,null)}}else W(x.depthTexture,0);let ge=fe.__webglTexture,be=le(x),re=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,ue=x.depthTexture.format===vs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===bs)if(D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,re,ge,0,be);else e.framebufferTexture2D(e.FRAMEBUFFER,ue,re,ge,0);else if(x.depthTexture.format===vs)if(D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,re,ge,0,be);else e.framebufferTexture2D(e.FRAMEBUFFER,ue,re,ge,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(E){let x=s.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(K){let fe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",fe)};K.addEventListener("dispose",fe),x.__depthDisposeCallback=fe}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)k(x.__webglFramebuffer[K],E,K);else{let K=E.texture.mipmaps;if(K&&K.length>0)k(x.__webglFramebuffer[0],E,0);else k(x.__webglFramebuffer,E,0)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=e.createRenderbuffer(),Ze(x.__webglDepthbuffer[K],E,!1);else{let fe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ge),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,ge)}}else{let K=E.texture.mipmaps;if(K&&K.length>0)i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ze(x.__webglDepthbuffer,E,!1);else{let fe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ge),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,ge)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(E,x,O){let K=s.get(E);if(x!==void 0)Q(K.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(O!==void 0)me(E)}function Xe(E){let x=E.texture,O=s.get(E),K=s.get(x);E.addEventListener("dispose",v);let fe=E.textures,ge=E.isWebGLCubeRenderTarget===!0,be=fe.length>1;if(!be){if(K.__webglTexture===void 0)K.__webglTexture=e.createTexture();K.__version=x.version,o.memory.textures++}if(ge){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ue=0;ue<x.mipmaps.length;ue++)O.__webglFramebuffer[re][ue]=e.createFramebuffer()}else O.__webglFramebuffer[re]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)O.__webglFramebuffer[re]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(be)for(let re=0,ue=fe.length;re<ue;re++){let De=s.get(fe[re]);if(De.__webglTexture===void 0)De.__webglTexture=e.createTexture(),o.memory.textures++}if(E.samples>0&&D(E)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<fe.length;re++){let ue=fe[re];O.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[re]);let De=a.convert(ue.format,ue.colorSpace),Ye=a.convert(ue.type),Ce=b(ue.internalFormat,De,Ye,ue.normalized,ue.colorSpace,E.isXRRenderTarget===!0),Se=le(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Se,Ce,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,O.__webglColorRenderbuffer[re])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ze(O.__webglDepthRenderbuffer,E,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ge){i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Q(O.__webglFramebuffer[re][ue],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else Q(O.__webglFramebuffer[re],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);if(m(x))S(e.TEXTURE_CUBE_MAP);i.unbindTexture()}else if(be){for(let re=0,ue=fe.length;re<ue;re++){let De=fe[re],Ye=s.get(De),Ce=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)Ce=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Ce,Ye.__webglTexture),Ge(Ce,De),Q(O.__webglFramebuffer,E,De,e.COLOR_ATTACHMENT0+re,Ce,0),m(De))S(Ce)}i.unbindTexture()}else{let re=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)re=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(re,K.__webglTexture),Ge(re,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Q(O.__webglFramebuffer[ue],E,x,e.COLOR_ATTACHMENT0,re,ue);else Q(O.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,re,0);if(m(x))S(re);i.unbindTexture()}if(E.depthBuffer)me(E)}function st(E){let x=E.textures;for(let O=0,K=x.length;O<K;O++){let fe=x[O];if(m(fe)){let ge=w(E),be=s.get(fe).__webglTexture;i.bindTexture(ge,be),S(ge),i.unbindTexture()}}}let rt=[],ot=[];function pt(E){if(E.samples>0){if(D(E)===!1){let{textures:x,width:O,height:K}=E,fe=e.COLOR_BUFFER_BIT,ge=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,be=s.get(E),re=x.length>1;if(re)for(let De=0;De<x.length;De++)i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+De,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+De,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ue=E.texture.mipmaps;if(ue&&ue.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<x.length;De++){if(E.resolveDepthBuffer){if(E.depthBuffer)fe|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)fe|=e.STENCIL_BUFFER_BIT}if(re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,be.__webglColorRenderbuffer[De]);let Ye=s.get(x[De]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ye,0)}if(e.blitFramebuffer(0,0,O,K,0,0,O,K,fe,e.NEAREST),l===!0){if(rt.length=0,ot.length=0,rt.push(e.COLOR_ATTACHMENT0+De),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1)rt.push(ge),ot.push(ge),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ot);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,rt)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<x.length;De++){i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+De,e.RENDERBUFFER,be.__webglColorRenderbuffer[De]);let Ye=s.get(x[De]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+De,e.TEXTURE_2D,Ye,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function le(E){return Math.min(r.maxSamples,E.samples)}function D(E){let x=s.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(E){let x=o.render.frame;if(h.get(E)!==x)h.set(E,x),E.update()}function Ee(E,x){let{colorSpace:O,format:K,type:fe}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return x;if(O!==Cn&&O!==Mn)if(Tt.getTransfer(O)===Wt){if(K!==kn||fe!==bn)et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else ht("WebGLTextures: Unsupported texture color space:",O);return x}function je(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)u.width=E.displayWidth,u.height=E.displayHeight;else u.width=E.width,u.height=E.height;return u}this.allocateTextureUnit=ie,this.resetTextureUnits=z,this.getTextureUnits=B,this.setTextureUnits=j,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=oe,this.rebindTextures=Ie,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function I3(e,t){function i(s,r=Mn){let a,o=Tt.getTransfer(r);if(s===bn)return e.UNSIGNED_BYTE;if(s===zc)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Hc)return e.UNSIGNED_SHORT_5_5_5_1;if(s===ed)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===td)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===$h)return e.BYTE;if(s===Qh)return e.SHORT;if(s===Wr)return e.UNSIGNED_SHORT;if(s===kc)return e.INT;if(s===Yi)return e.UNSIGNED_INT;if(s===Ci)return e.FLOAT;if(s===di)return e.HALF_FLOAT;if(s===nd)return e.ALPHA;if(s===id)return e.RGB;if(s===kn)return e.RGBA;if(s===bs)return e.DEPTH_COMPONENT;if(s===vs)return e.DEPTH_STENCIL;if(s===fi)return e.RED;if(s===Gc)return e.RED_INTEGER;if(s===xs)return e.RG;if(s===Wc)return e.RG_INTEGER;if(s===Vc)return e.RGBA_INTEGER;if(s===ro||s===ao||s===oo||s===co)if(o===Wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jc||s===qc||s===Xc||s===Kc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yc||s===Jc||s===Zc||s===$c||s===Qc||s===lo||s===el)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yc||s===Jc)return o===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zc)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===$c)return a.COMPRESSED_R11_EAC;if(s===Qc)return a.COMPRESSED_SIGNED_R11_EAC;if(s===lo)return a.COMPRESSED_RG11_EAC;if(s===el)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===tl||s===nl||s===il||s===sl||s===rl||s===al||s===ol||s===cl||s===ll||s===ul||s===hl||s===dl||s===fl||s===pl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===il)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===al)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ol)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ll)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ml||s===Al||s===gl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ml)return o===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bl||s===vl||s===uo||s===xl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===bl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(s===ir)return e.UNSIGNED_INT_24_8;return e[s]!==void 0?e[s]:null}return{convert:i}}var D3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L3=`
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

}`;class cf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new So(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:D3,fragmentShader:L3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Vn(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lf extends Pi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",y=new cf,A={},m=t.getContextAttributes(),S=null,w=null,b=[],M=[],R=new Oe,C=null,v=null,T=new ln;T.viewport=new Ht;let I=new ln;I.viewport=new Ht;let N=[T,I],F=new Ql,z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=b[ne];if(pe===void 0)pe=new qr,b[ne]=pe;return pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=b[ne];if(pe===void 0)pe=new qr,b[ne]=pe;return pe.getGripSpace()},this.getHand=function(ne){let pe=b[ne];if(pe===void 0)pe=new qr,b[ne]=pe;return pe.getHandSpace()};function j(ne){let pe=M.indexOf(ne.inputSource);if(pe===-1)return;let ve=b[pe];if(ve!==void 0)ve.update(ne.inputSource,ne.frame,l||a),ve.dispatchEvent({type:ne.type,data:ne.inputSource})}function ie(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",J);for(let ne=0;ne<b.length;ne++){let pe=M[ne];if(pe===null)continue;M[ne]=null,b[ne].disconnect(pe)}z=null,B=null,y.reset();for(let ne in A)delete A[ne];if(e.setRenderTarget(S),d=null,f=null,h=null,s=null,w=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),v!==null){let ne=v.camera;ne.fov=v.fov,ne.zoom=v.zoom,ne.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){if(r=ne,i.isPresenting===!0)et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){if(o=ne,i.isPresenting===!0)et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(s,t);return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0)await t.makeXRCompatible();if(C=e.getPixelRatio(),e.getSize(R),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Pn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve=null,qe=null,Je=null;if(m.depth)Je=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?vs:bs,qe=m.stencil?ir:Yi;let Q={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Pn(f.textureWidth,f.textureHeight,{format:kn,type:bn,depthTexture:new _s(f.textureWidth,f.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(ne){for(let pe=0;pe<ne.removed.length;pe++){let ve=ne.removed[pe],qe=M.indexOf(ve);if(qe>=0)M[qe]=null,b[qe].disconnect(ve)}for(let pe=0;pe<ne.added.length;pe++){let ve=ne.added[pe],qe=M.indexOf(ve);if(qe===-1){for(let Q=0;Q<b.length;Q++)if(Q>=M.length){M.push(ve),qe=Q;break}else if(M[Q]===null){M[Q]=ve,qe=Q;break}if(qe===-1)break}let Je=b[qe];if(Je)Je.connect(ve)}}let W=new P,H=new P;function U(ne,pe,ve){W.setFromMatrixPosition(pe.matrixWorld),H.setFromMatrixPosition(ve.matrixWorld);let qe=W.distanceTo(H),Je=pe.projectionMatrix.elements,Q=ve.projectionMatrix.elements,Ze=Je[14]/(Je[10]-1),k=Je[14]/(Je[10]+1),me=(Je[9]+1)/Je[5],Ie=(Je[9]-1)/Je[5],Xe=(Je[8]-1)/Je[0],st=(Q[8]+1)/Q[0],rt=Ze*Xe,ot=Ze*st,pt=qe/(-Xe+st),le=pt*-Xe;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(le),ne.translateZ(pt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Je[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let D=Ze+pt,Ue=k+pt,Ee=rt-le,je=ot+(qe-le),E=me*k/Ue*D,x=Ie*k/Ue*D;ne.projectionMatrix.makePerspective(Ee,je,E,x,D,Ue),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,pe){if(pe===null)ne.matrixWorld.copy(ne.matrix);else ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix);ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let{near:pe,far:ve}=ne;if(y.texture!==null){if(y.depthNear>0)pe=y.depthNear;if(y.depthFar>0)ve=y.depthFar}if(F.near=I.near=T.near=pe,F.far=I.far=T.far=ve,z!==F.near||B!==F.far)s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,B=F.far;F.layers.mask=ne.layers.mask|6,T.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let qe=ne.parent,Je=F.cameras;oe(F,qe);for(let Q=0;Q<Je.length;Q++)oe(Je[Q],qe);if(Je.length===2)U(F,T,I);else F.projectionMatrix.copy(T.projectionMatrix);if(v===null&&ne.isPerspectiveCamera)v={camera:ne,fov:ne.fov,zoom:ne.zoom};we(ne,F,qe)};function we(ne,pe,ve){if(ve===null)ne.matrix.copy(pe.matrixWorld);else ne.matrix.copy(ve.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld);if(ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera)ne.fov=ps*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(f===null&&d===null)return;return c},this.setFoveation=function(ne){if(c=ne,f!==null)f.fixedFoveation=ne;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=ne},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(F)},this.getCameraTexture=function(ne){return A[ne]};let Le=null;function dt(ne,pe){if(u=pe.getViewerPose(l||a),p=pe,u!==null){let ve=u.views;if(d!==null)e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w);let qe=!1;if(ve.length!==F.cameras.length)F.cameras.length=0,qe=!0;for(let k=0;k<ve.length;k++){let me=ve[k],Ie=null;if(d!==null)Ie=d.getViewport(me);else{let st=h.getViewSubImage(f,me);if(Ie=st.viewport,k===0)e.setRenderTargetTextures(w,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(w)}let Xe=N[k];if(Xe===void 0)Xe=new ln,Xe.layers.enable(k),Xe.viewport=new Ht,N[k]=Xe;if(Xe.matrix.fromArray(me.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(me.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),k===0)F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(qe===!0)F.cameras.push(Xe)}let Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let k=h.getDepthInformation(ve[0]);if(k&&k.isValid&&k.texture)y.init(k,s.renderState)}if(Je&&Je.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let k=0;k<ve.length;k++){let me=ve[k].camera;if(me){let Ie=A[me];if(!Ie)Ie=new So,A[me]=Ie;let Xe=h.getCameraImage(me);Ie.sourceTexture=Xe}}}}for(let ve=0;ve<b.length;ve++){let qe=M[ve],Je=b[ve];if(qe!==null&&Je!==void 0)Je.update(qe,pe,l||a)}if(Le)Le(ne,pe);if(pe.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:pe});p=null}let Ge=new Jd;Ge.setAnimationLoop(dt),this.setAnimationLoop=function(ne){Le=ne},this.dispose=function(){}}}var F3=new at,uf=new At;uf.set(-1,0,0,0,1,0,0,0,1);function N3(e,t){function i(A,m){if(A.matrixAutoUpdate===!0)A.updateMatrix();m.value.copy(A.matrix)}function s(A,m){if(m.color.getRGB(A.fogColor.value,Hl(e)),m.isFog)A.fogNear.value=m.near,A.fogFar.value=m.far;else if(m.isFogExp2)A.fogDensity.value=m.density}function r(A,m,S,w,b){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)a(A,m);else if(m.isMeshLambertMaterial){if(a(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)a(A,m),f(A,m);else if(m.isMeshPhongMaterial){if(a(A,m),h(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(a(A,m),d(A,m),m.isMeshPhysicalMaterial)p(A,m,b)}else if(m.isMeshMatcapMaterial)a(A,m),g(A,m);else if(m.isMeshDepthMaterial)a(A,m);else if(m.isMeshDistanceMaterial)a(A,m),y(A,m);else if(m.isMeshNormalMaterial)a(A,m);else if(m.isLineBasicMaterial){if(o(A,m),m.isLineDashedMaterial)c(A,m)}else if(m.isPointsMaterial)l(A,m,S,w);else if(m.isSpriteMaterial)u(A,m);else if(m.isShadowMaterial)A.color.value.copy(m.color),A.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function a(A,m){if(A.opacity.value=m.opacity,m.color)A.diffuse.value.copy(m.color);if(m.emissive)A.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.bumpMap){if(A.bumpMap.value=m.bumpMap,i(m.bumpMap,A.bumpMapTransform),A.bumpScale.value=m.bumpScale,m.side===yn)A.bumpScale.value*=-1}if(m.normalMap){if(A.normalMap.value=m.normalMap,i(m.normalMap,A.normalMapTransform),A.normalScale.value.copy(m.normalScale),m.side===yn)A.normalScale.value.negate()}if(m.displacementMap)A.displacementMap.value=m.displacementMap,i(m.displacementMap,A.displacementMapTransform),A.displacementScale.value=m.displacementScale,A.displacementBias.value=m.displacementBias;if(m.emissiveMap)A.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,A.emissiveMapTransform);if(m.specularMap)A.specularMap.value=m.specularMap,i(m.specularMap,A.specularMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest;let S=t.get(m),{envMap:w,envMapRotation:b}=S;if(w){if(A.envMap.value=w,A.envMapRotation.value.setFromMatrix4(F3.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)A.envMapRotation.value.premultiply(uf);A.reflectivity.value=m.reflectivity,A.ior.value=m.ior,A.refractionRatio.value=m.refractionRatio}if(m.lightMap)A.lightMap.value=m.lightMap,A.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,A.lightMapTransform);if(m.aoMap)A.aoMap.value=m.aoMap,A.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,A.aoMapTransform)}function o(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,m.map)A.map.value=m.map,i(m.map,A.mapTransform)}function c(A,m){A.dashSize.value=m.dashSize,A.totalSize.value=m.dashSize+m.gapSize,A.scale.value=m.scale}function l(A,m,S,w){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.size.value=m.size*S,A.scale.value=w*0.5,m.map)A.map.value=m.map,i(m.map,A.uvTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function u(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.rotation.value=m.rotation,m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function h(A,m){A.specular.value.copy(m.specular),A.shininess.value=Math.max(m.shininess,0.0001)}function f(A,m){if(m.gradientMap)A.gradientMap.value=m.gradientMap}function d(A,m){if(A.metalness.value=m.metalness,m.metalnessMap)A.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,A.metalnessMapTransform);if(A.roughness.value=m.roughness,m.roughnessMap)A.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,A.roughnessMapTransform);if(m.envMap)A.envMapIntensity.value=m.envMapIntensity}function p(A,m,S){if(A.ior.value=m.ior,m.sheen>0){if(A.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),A.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)A.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,A.sheenColorMapTransform);if(m.sheenRoughnessMap)A.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,A.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(A.clearcoat.value=m.clearcoat,A.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)A.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,A.clearcoatMapTransform);if(m.clearcoatRoughnessMap)A.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(A.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn)A.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)A.dispersion.value=m.dispersion;if(m.retroreflectivity>0)A.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(A.iridescence.value=m.iridescence,A.iridescenceIOR.value=m.iridescenceIOR,A.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)A.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,A.iridescenceMapTransform);if(m.iridescenceThicknessMap)A.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,A.iridescenceThicknessMapTransform)}if(m.transmission>0){if(A.transmission.value=m.transmission,A.transmissionSamplerMap.value=S.texture,A.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap)A.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,A.transmissionMapTransform);if(A.thickness.value=m.thickness,m.thicknessMap)A.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,A.thicknessMapTransform);A.attenuationDistance.value=m.attenuationDistance,A.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(A.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)A.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,A.anisotropyMapTransform)}if(A.specularIntensity.value=m.specularIntensity,A.specularColor.value.copy(m.specularColor),m.specularColorMap)A.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,A.specularColorMapTransform);if(m.specularIntensityMap)A.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,A.specularIntensityMapTransform)}function g(A,m){if(m.matcap)A.matcap.value=m.matcap}function y(A,m){let S=t.get(m).light;A.referencePosition.value.setFromMatrixPosition(S.matrixWorld),A.nearDistance.value=S.shadow.camera.near,A.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function U3(e,t,i,s){let r={},a={},o=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let R=M.program;s.uniformBlockBinding(b,R)}function u(b,M){let R=r[b.id];if(R===void 0)A(b),R=h(b),r[b.id]=R,b.addEventListener("dispose",S);let C=M.program;s.updateUBOMapping(b,C);let v=t.render.frame;if(a[b.id]!==v)d(b),a[b.id]=v}function h(b){let M=f();b.__bindingPointIndex=M;let R=e.createBuffer(),{__size:C,usage:v}=b;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,C,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,R),R}function f(){for(let b=0;b<c;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=r[b.id],{uniforms:R,__cache:C}=b;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let v=0,T=R.length;v<T;v++){let I=R[v];if(Array.isArray(I))for(let N=0,F=I.length;N<F;N++)p(I[N],v,N,C);else p(I,v,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(b,M,R,C){if(y(b,M,R,C)===!0){let{__offset:v,value:T}=b;if(Array.isArray(T)){let I=0;for(let N=0;N<T.length;N++){let F=T[N],z=m(F);if(g(F,b.__data,I),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))I+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else g(T,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,b.__data)}}function g(b,M,R){if(typeof b==="number"||typeof b==="boolean")M[0]=b;else if(b.isMatrix3)M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0;else if(ArrayBuffer.isView(b))M.set(new b.constructor(b.buffer,b.byteOffset,M.length));else b.toArray(M,R)}function y(b,M,R,C){let v=b.value,T=M+"_"+R;if(C[T]===void 0){if(typeof v==="number"||typeof v==="boolean")C[T]=v;else if(ArrayBuffer.isView(v))C[T]=v.slice();else C[T]=v.clone();return!0}else{let I=C[T];if(typeof v==="number"||typeof v==="boolean"){if(I!==v)return C[T]=v,!0}else if(ArrayBuffer.isView(v))return!0;else if(I.equals(v)===!1)return I.copy(v),!0}return!1}function A(b){let M=b.uniforms,R=0,C=16;for(let T=0,I=M.length;T<I;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,z=N.length;F<z;F++){let B=N[F],j=Array.isArray(B.value)?B.value:[B.value];for(let ie=0,J=j.length;ie<J;ie++){let W=j[ie],H=m(W),U=R%C,oe=U%H.boundary,we=U+oe;if(R+=oe,we!==0&&C-we<H.storage)R+=C-we;B.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=H.storage}}}let v=R%C;if(v>0)R+=C-v;return b.__size=R,b.__cache={},this}function m(b){let M={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")M.boundary=4,M.storage=4;else if(b.isVector2)M.boundary=8,M.storage=8;else if(b.isVector3||b.isColor)M.boundary=16,M.storage=12;else if(b.isVector4)M.boundary=16,M.storage=16;else if(b.isMatrix3)M.boundary=48,M.storage=48;else if(b.isMatrix4)M.boundary=64,M.storage=64;else if(b.isTexture)et("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))M.boundary=16,M.storage=b.byteLength;else et("WebGLRenderer: Unsupported uniform value type.",b);return M}function S(b){let M=b.target;M.removeEventListener("dispose",S);let R=o.indexOf(M.__bindingPointIndex);o.splice(R,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function w(){for(let b in r)e.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:l,update:u,dispose:w}}var O3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function B3(){if(gi===null)gi=new mi(O3,16,16,xs,di),gi.name="DFG_LUT",gi.minFilter=Gt,gi.magFilter=Gt,gi.wrapS=Ki,gi.wrapT=Ki,gi.generateMipmaps=!1,gi.needsUpdate=!0;return gi}class pu{constructor(e={}){let{canvas:t=hd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=d,y=new Set([Vc,Wc,Gc]),A=new Set([bn,Yi,Wr,ir,zc,Hc]),m=new Uint32Array(4),S=new Int32Array(4),w=new P,b=null,M=null,R=[],C=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,N=null,F=null,z=null,B=null;this._outputColorSpace=pi;let j=0,ie=0,J=null,W=-1,H=null,U=new Ht,oe=new Ht,we=null,Le=new Be(0),dt=0,{width:Ge,height:ne}=t,pe=1,ve=null,qe=null,Je=new Ht(0,0,Ge,ne),Q=new Ht(0,0,Ge,ne),Ze=!1,k=new Jr,me=!1,Ie=!1,Xe=new at,st=new P,rt=new Ht,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function le(){return J===null?pe:1}let D=i;function Ue(_,L){return t.getContext(_,L)}let Ee,je,E,x,O,K,fe,ge,be,re,ue,De,Ye,Ce,Se,ze,Qe,mt,V,Pe,ce,Re,We;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${yh}`);if(t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),D===null){if(D=Ue("webgl2",_),D===null)if(Ue("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(_){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),ht("WebGLRenderer: "+_.message),_}function Ae(){if(Ee=new j2(D),Ee.init(),ce=new I3(D,Ee),je=new N2(D,Ee,e,ce),E=new C3(D,Ee),je.reversedDepthBuffer&&f)E.buffers.depth.setReversed(!0);F=D.createFramebuffer(),z=D.createFramebuffer(),B=D.createFramebuffer(),x=new K2(D),O=new m3,K=new P3(D,Ee,E,O,je,ce,x),fe=new V2(T),ge=new J0(D),Re=new L2(D,ge),be=new q2(D,ge,x,Re),re=new J2(D,be,ge,Re,x),mt=new Y2(D,je,K),Se=new U2(O),ue=new p3(T,fe,Ee,je,Re,Se),De=new N3(T,O),Ye=new g3,Ce=new M3(Ee),Qe=new D2(T,fe,E,re,p,c),ze=new R3(T,re,je),We=new U3(D,x,je,E),V=new F2(D,Ee,x),Pe=new X2(D,Ee,x),x.programs=ue.programs,T.capabilities=je,T.extensions=Ee,T.properties=O,T.renderLists=Ye,T.shadowMap=ze,T.state=E,T.info=x}if(g!==bn)v=new $2(g,t.width,t.height,o,s,r);let Ne=new lf(T,D);this.xr=Ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=Ee.get("WEBGL_lose_context");if(_)_.loseContext()},this.forceContextRestore=function(){let _=Ee.get("WEBGL_lose_context");if(_)_.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(_){if(_===void 0)return;pe=_,this.setSize(Ge,ne,!1)},this.getSize=function(_){return _.set(Ge,ne)},this.setSize=function(_,L,Y=!0){if(Ne.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ge=_,ne=L,t.width=Math.floor(_*pe),t.height=Math.floor(L*pe),Y===!0)t.style.width=_+"px",t.style.height=L+"px";if(v!==null)v.setSize(t.width,t.height);this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(Ge*pe,ne*pe).floor()},this.setDrawingBufferSize=function(_,L,Y){Ge=_,ne=L,pe=Y,t.width=Math.floor(_*Y),t.height=Math.floor(L*Y),this.setViewport(0,0,_,L)},this.setEffects=function(_){if(g===bn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let L=0;L<_.length;L++)if(_[L].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(U)},this.getViewport=function(_){return _.copy(Je)},this.setViewport=function(_,L,Y,X){if(_.isVector4)Je.set(_.x,_.y,_.z,_.w);else Je.set(_,L,Y,X);E.viewport(U.copy(Je).multiplyScalar(pe).round())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,L,Y,X){if(_.isVector4)Q.set(_.x,_.y,_.z,_.w);else Q.set(_,L,Y,X);E.scissor(oe.copy(Q).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(_){E.setScissorTest(Ze=_)},this.setOpaqueSort=function(_){ve=_},this.setTransparentSort=function(_){qe=_},this.getClearColor=function(_){return _.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,Y=!0){let X=0;if(_){let G=!1;if(J!==null){let ye=J.texture.format;G=y.has(ye)}if(G){let ye=J.texture.type,Te=A.has(ye),Me=Qe.getClearColor(),ke=Qe.getClearAlpha(),{r:Ke,g:lt,b:ft}=Me;if(Te)m[0]=Ke,m[1]=lt,m[2]=ft,m[3]=ke,D.clearBufferuiv(D.COLOR,0,m);else S[0]=Ke,S[1]=lt,S[2]=ft,S[3]=ke,D.clearBufferiv(D.COLOR,0,S)}else X|=D.COLOR_BUFFER_BIT}if(L)X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(X!==0)D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),N=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Qe.dispose(),Ye.dispose(),Ce.dispose(),O.dispose(),fe.dispose(),re.dispose(),Re.dispose(),We.dispose(),ue.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Oi),Ne.removeEventListener("sessionend",cs),Nn.stop()};function ct(_){_.preventDefault(),Or("WebGLRenderer: Context Lost."),I=!0}function Lt(){Or("WebGLRenderer: Context Restored."),I=!1;let _=x.autoReset,L=ze.enabled,Y=ze.autoUpdate,X=ze.needsUpdate,G=ze.type;Ae(),x.autoReset=_,ze.enabled=L,ze.autoUpdate=Y,ze.needsUpdate=X,ze.type=G}function gt(_){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function mn(_){let L=_.target;L.removeEventListener("dispose",mn),_n(L)}function _n(_){os(_),O.remove(_)}function os(_){let L=O.get(_).programs;if(L!==void 0){if(L.forEach(function(Y){ue.releaseProgram(Y)}),_.isShaderMaterial)ue.releaseShaderCache(_)}}this.renderBufferDirect=function(_,L,Y,X,G,ye){if(L===null)L=ot;let Te=G.isMesh&&G.matrixWorld.determinantAffine()<0,Me=he(_,L,Y,X,G);E.setMaterial(X,Te);let ke=Y.index,Ke=1;if(X.wireframe===!0){if(ke=be.getWireframeAttribute(Y),ke===void 0)return;Ke=2}let lt=Y.drawRange,ft=Y.attributes.position,Fe=lt.start*Ke,St=(lt.start+lt.count)*Ke;if(ye!==null)Fe=Math.max(Fe,ye.start*Ke),St=Math.min(St,(ye.start+ye.count)*Ke);if(ke!==null)Fe=Math.max(Fe,0),St=Math.min(St,ke.count);else if(ft!==void 0&&ft!==null)Fe=Math.max(Fe,0),St=Math.min(St,ft.count);let Ft=St-Fe;if(Ft<0||Ft===1/0)return;Re.setup(G,X,Me,Y,ke);let bt,Dt=V;if(ke!==null)bt=ge.get(ke),Dt=Pe,Dt.setIndex(bt);if(G.isMesh)if(X.wireframe===!0)E.setLineWidth(X.wireframeLinewidth*le()),Dt.setMode(D.LINES);else Dt.setMode(D.TRIANGLES);else if(G.isLine){let Kt=X.linewidth;if(Kt===void 0)Kt=1;if(E.setLineWidth(Kt*le()),G.isLineSegments)Dt.setMode(D.LINES);else if(G.isLineLoop)Dt.setMode(D.LINE_LOOP);else Dt.setMode(D.LINE_STRIP)}else if(G.isPoints)Dt.setMode(D.POINTS);else if(G.isSprite)Dt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(!Ee.get("WEBGL_multi_draw")){let{_multiDrawStarts:Kt,_multiDrawCounts:xe,_multiDrawCount:xt}=G,$e=ke?ge.get(ke).bytesPerElement:1,Nt=O.get(X).currentProgram.getUniforms();for(let _t=0;_t<xt;_t++)Nt.setValue(D,"_gl_DrawID",_t),Dt.render(Kt[_t]/$e,xe[_t])}else Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Dt.renderInstances(Fe,Ft,G.count);else if(Y.isInstancedBufferGeometry){let Kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Kt);Dt.renderInstances(Fe,Ft,xe)}else Dt.render(Fe,Ft)};function Fn(_,L,Y,X){if(N!==null&&_.isNodeMaterial)N.setObject(X,_);if(me===!0)Se.setState(_,Y,!1);if(_.transparent===!0&&_.side===Qt&&_.forceSinglePass===!1)_.side=yn,_.needsUpdate=!0,te(_,L,X),_.side=ci,_.needsUpdate=!0,te(_,L,X),_.side=Qt;else te(_,L,X)}this.compile=function(_,L,Y=null){if(Y===null)Y=_;if(N!==null)N.renderStart(_,L,Y);if(M=Ce.get(Y),M.init(L),C.push(M),Y.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(M.pushLight(G),G.castShadow)M.pushShadow(G)}}),_!==Y)_.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(M.pushLight(G),G.castShadow)M.pushShadow(G)}});if(M.setupLights(),N!==null)N.updateLights(M.state.lightsArray);if(Ie=this.localClippingEnabled,me=Se.init(this.clippingPlanes,Ie),me===!0)Se.setGlobalState(this.clippingPlanes,L);if(N!==null)ze.render(M.state.shadowsArray,Y,L);let X=new Set;if(_.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Me=ye[Te];Fn(Me,Y,L,G),X.add(Me)}else Fn(ye,Y,L,G),X.add(ye)}),M=C.pop(),N!==null)N.renderEnd();return X},this.compileAsync=function(_,L,Y=null){let X=this.compile(_,L,Y);return new Promise((G)=>{function ye(){if(X.forEach(function(Te){let ke=O.get(Te).currentProgram;if(ke===void 0||ke.isReady())X.delete(Te)}),X.size===0){G(_);return}setTimeout(ye,10)}if(Ee.get("KHR_parallel_shader_compile")!==null)ye();else setTimeout(ye,10)})};let ii=null;function Ui(_){if(ii)ii(_)}function Oi(){Nn.stop()}function cs(){Nn.start()}let Nn=new Jd;if(Nn.setAnimationLoop(Ui),typeof self<"u")Nn.setContext(self);this.setAnimationLoop=function(_){ii=_,Ne.setAnimationLoop(_),_===null?Nn.stop():Nn.start()},Ne.addEventListener("sessionstart",Oi),Ne.addEventListener("sessionend",cs),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(N!==null)N.renderStart(_,L);let Y=Ne.enabled===!0&&Ne.isPresenting===!0,X=v!==null&&(J===null||Y)&&v.begin(T,J);if(_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(Ne.enabled===!0&&Ne.isPresenting===!0&&(v===null||v.isCompositing()===!1)){if(Ne.cameraAutoUpdate===!0)Ne.updateCamera(L);L=Ne.getCamera()}if(_.isScene===!0)_.onBeforeRender(T,_,L,J);if(M=Ce.get(_,C.length),M.init(L),M.state.textureUnits=K.getTextureUnits(),C.push(M),Xe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(Xe,Tl,L.reversedDepth),Ie=this.localClippingEnabled,me=Se.init(this.clippingPlanes,Ie),b=Ye.get(_,R.length),b.init(),R.push(b),Ne.enabled===!0&&Ne.isPresenting===!0){let Te=T.xr.getDepthSensingMesh();if(Te!==null)Bi(Te,L,-1/0,T.sortObjects)}if(Bi(_,L,0,T.sortObjects),b.finish(),N!==null)N.updateLights(M.state.lightsArray);if(T.sortObjects===!0)b.sort(ve,qe);if(pt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,pt)Qe.addToRenderList(b,_);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(me===!0)Se.beginShadows();let G=M.state.shadowsArray;if(ze.render(G,_,L),me===!0)Se.endShadows();if((X&&v.hasRenderPass())===!1){let Te=b.opaque,Me=b.transmissive;if(M.setupLights(),L.isArrayCamera){let ke=L.cameras;if(Me.length>0)for(let Ke=0,lt=ke.length;Ke<lt;Ke++){let ft=ke[Ke];de(Te,Me,_,ft)}if(pt)Qe.render(_);for(let Ke=0,lt=ke.length;Ke<lt;Ke++){let ft=ke[Ke];ki(b,_,ft,ft.viewport)}}else{if(Me.length>0)de(Te,Me,_,L);if(pt)Qe.render(_);ki(b,_,L)}}if(J!==null&&ie===0)K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J);if(X)v.end(T);if(_.isScene===!0)_.onAfterRender(T,_,L);if(Re.resetDefaultState(),W=-1,H=null,C.pop(),C.length>0){if(M=C[C.length-1],K.setTextureUnits(M.state.textureUnits),me===!0)Se.setGlobalState(T.clippingPlanes,M.state.camera)}else M=null;if(R.pop(),R.length>0)b=R[R.length-1];else b=null;if(N!==null)N.renderEnd()};function Bi(_,L,Y,X){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)Y=_.renderOrder;else if(_.isLOD){if(_.autoUpdate===!0)_.update(L)}else if(_.isLightProbeGrid)M.pushLightProbeGrid(_);else if(_.isLight){if(M.pushLight(_),_.castShadow)M.pushShadow(_)}else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(k)){if(X)rt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Xe);let Te=re.update(_),Me=_.material;if(Me.visible)b.push(_,Te,Me,Y,rt.z,null,L)}}else if(_.isMesh||_.isLine||_.isPoints){if(!_.frustumCulled||_.intersectsFrustum(k)){let Te=re.update(_),Me=_.material;if(X){if(_.boundingSphere!==void 0){if(_.boundingSphere===null)_.computeBoundingSphere();rt.copy(_.boundingSphere.center)}else{if(Te.boundingSphere===null)Te.computeBoundingSphere();rt.copy(Te.boundingSphere.center)}rt.applyMatrix4(_.matrixWorld).applyMatrix4(Xe)}if(Array.isArray(Me)){let ke=Te.groups;for(let Ke=0,lt=ke.length;Ke<lt;Ke++){let ft=ke[Ke],Fe=Me[ft.materialIndex];if(Fe&&Fe.visible)b.push(_,Te,Fe,Y,rt.z,ft,L)}}else if(Me.visible)b.push(_,Te,Me,Y,rt.z,null,L)}}}let ye=_.children;for(let Te=0,Me=ye.length;Te<Me;Te++)Bi(ye[Te],L,Y,X)}function ki(_,L,Y,X){let{opaque:G,transmissive:ye,transparent:Te}=_;if(M.setupLightsView(Y),me===!0)Se.setGlobalState(T.clippingPlanes,Y);if(X)E.viewport(U.copy(X));if(G.length>0)se(G,L,Y);if(ye.length>0)se(ye,L,Y);if(Te.length>0)se(Te,L,Y);E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function de(_,L,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Fe=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Pn(1,1,{generateMipmaps:!0,type:Fe?di:bn,minFilter:Bn,samples:Math.max(4,je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let ye=M.state.transmissionRenderTarget[X.id],Te=X.viewport||U;ye.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);let Me=T.getRenderTarget(),ke=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();if(T.setRenderTarget(ye),T.getClearColor(Le),dt=T.getClearAlpha(),dt<1)T.setClearColor(16777215,0.5);if(T.clear(),pt)Qe.render(Y);let lt=T.toneMapping;T.toneMapping=Qn;let ft=X.viewport;if(X.viewport!==void 0)X.viewport=void 0;if(M.setupLightsView(X),me===!0)Se.setGlobalState(T.clippingPlanes,X);if(se(_,Y,X),K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let St=0,Ft=L.length;St<Ft;St++){let bt=L[St],{object:Dt,geometry:Kt,material:xe,group:xt}=bt;if(xe.side===Qt&&Dt.layers.test(X.layers)){let $e=xe.side;xe.side=yn,xe.needsUpdate=!0,q(Dt,Y,X,Kt,xe,xt),xe.side=$e,xe.needsUpdate=!0,Fe=!0}}if(Fe===!0)K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye)}if(T.setRenderTarget(Me,ke,Ke),T.setClearColor(Le,dt),ft!==void 0)X.viewport=ft;T.toneMapping=lt}function se(_,L,Y){let X=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ye=_.length;G<ye;G++){let Te=_[G],{object:Me,geometry:ke,group:Ke}=Te,lt=Te.material;if(lt.allowOverride===!0&&X!==null)lt=X;if(Me.layers.test(Y.layers))q(Me,L,Y,ke,lt,Ke)}}function q(_,L,Y,X,G,ye){if(N!==null&&G.isNodeMaterial)N.setObject(_,G);if(_.onBeforeRender(T,L,Y,X,G,ye),_.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(T,L,Y,X,_,ye),G.transparent===!0&&G.side===Qt&&G.forceSinglePass===!1)G.side=yn,G.needsUpdate=!0,T.renderBufferDirect(Y,L,X,G,_,ye),G.side=ci,G.needsUpdate=!0,T.renderBufferDirect(Y,L,X,G,_,ye),G.side=Qt;else T.renderBufferDirect(Y,L,X,G,_,ye);_.onAfterRender(T,L,Y,X,G,ye)}function te(_,L,Y){if(L.isScene!==!0)L=ot;let X=O.get(_),G=M.state.lights,ye=M.state.shadowsArray,Te=G.state.version,Me=ue.getParameters(_,G.state,ye,L,Y,M.state.lightProbeGridArray),ke=ue.getProgramCacheKey(Me),Ke=X.programs;X.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,X.fog=L.fog;let lt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;if(X.envMap=fe.get(_.envMap||X.environment,lt),X.envMapRotation=X.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Ke===void 0)_.addEventListener("dispose",mn),Ke=new Map,X.programs=Ke;let ft=Ke.get(ke);if(ft!==void 0){if(X.currentProgram===ft&&X.lightsStateVersion===Te)return Z(_,Me),ft}else{if(Me.uniforms=ue.getUniforms(_),N!==null&&_.isNodeMaterial)N.build(_,Y,Me);_.onBeforeCompile(Me,T),ft=ue.acquireProgram(Me,ke),Ke.set(ke,ft),X.uniforms=Me.uniforms}let Fe=X.uniforms;if(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)Fe.clippingPlanes=Se.uniform;if(Z(_,Me),X.needsLights=Ve(_),X.lightsStateVersion=Te,X.needsLights)Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.sunLights.value=G.state.sun,Fe.sunLightShadows.value=G.state.sunShadow,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.sunShadowMatrix.value=G.state.sunShadowMatrix,Fe.sunShadowCascade.value=G.state.sunShadowCascade,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix;return X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=ft,X.uniformsList=null,ft}function ae(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=oa.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Z(_,L){let Y=O.get(_);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function ee(_,L){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;w.setFromMatrixPosition(L.matrixWorld);for(let Y=0,X=_.length;Y<X;Y++){let G=_[Y];if(G.texture!==null&&G.boundingBox.containsPoint(w))return G}return null}function he(_,L,Y,X,G){if(L.isScene!==!0)L=ot;K.resetTextureUnits();let ye=L.fog,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?L.environment:null,Me=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Tt.workingColorSpace,ke=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ke=fe.get(X.envMap||Te,ke),lt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ft=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color,bt=Qn;if(X.toneMapped){if(J===null||J.isXRRenderTarget===!0)bt=T.toneMapping}let Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=Dt!==void 0?Dt.length:0,xe=O.get(X),xt=M.state.lights;if(me===!0){if(Ie===!0||_!==H){let Ot=_===H&&X.id===W;Se.setState(X,_,Ot)}}let $e=!1;if(X.version===xe.__version){if(xe.needsLights&&xe.lightsStateVersion!==xt.state.version)$e=!0;else if(xe.outputColorSpace!==Me)$e=!0;else if(G.isBatchedMesh&&xe.batching===!1)$e=!0;else if(!G.isBatchedMesh&&xe.batching===!0)$e=!0;else if(G.isBatchedMesh&&xe.batchingColor===!0&&G._colorsTexture===null)$e=!0;else if(G.isBatchedMesh&&xe.batchingColor===!1&&G._colorsTexture!==null)$e=!0;else if(G.isInstancedMesh&&xe.instancing===!1)$e=!0;else if(!G.isInstancedMesh&&xe.instancing===!0)$e=!0;else if(G.isSkinnedMesh&&xe.skinning===!1)$e=!0;else if(!G.isSkinnedMesh&&xe.skinning===!0)$e=!0;else if(G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null)$e=!0;else if(G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null)$e=!0;else if(G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null)$e=!0;else if(G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null)$e=!0;else if(xe.envMap!==Ke)$e=!0;else if(X.fog===!0&&xe.fog!==ye)$e=!0;else if(xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Se.numPlanes||xe.numIntersection!==Se.numIntersection))$e=!0;else if(xe.vertexAlphas!==lt)$e=!0;else if(xe.vertexTangents!==ft)$e=!0;else if(xe.morphTargets!==Fe)$e=!0;else if(xe.morphNormals!==St)$e=!0;else if(xe.morphColors!==Ft)$e=!0;else if(xe.toneMapping!==bt)$e=!0;else if(xe.morphTargetsCount!==Kt)$e=!0;else if(!!xe.lightProbeGrid!==M.state.lightProbeGridArray.length>0)$e=!0}else $e=!0,xe.__version=X.version;let Nt=xe.currentProgram;if($e===!0){if(Nt=te(X,L,G),N&&X.isNodeMaterial)N.onUpdateProgram(X,Nt,xe)}let _t=!1,Xt=!1,Yt=!1,yt=Nt.getUniforms(),Ut=xe.uniforms;if(E.useProgram(Nt.program))_t=!0,Xt=!0,Yt=!0;if(X.id!==W)W=X.id,Xt=!0;if(xe.needsLights){let Ot=ee(M.state.lightProbeGridArray,G);if(xe.lightProbeGrid!==Ot)xe.lightProbeGrid=Ot,Xt=!0}if(_t||H!==_){if(E.buffers.depth.getReversed()&&_.reversedDepth!==!0)_._reversedDepth=!0,_.updateProjectionMatrix();yt.setValue(D,"projectionMatrix",_.projectionMatrix),yt.setValue(D,"viewMatrix",_.matrixWorldInverse);let Vt=yt.map.cameraPosition;if(Vt!==void 0)Vt.setValue(D,st.setFromMatrixPosition(_.matrixWorld));if(je.logarithmicDepthBuffer)yt.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2));if(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)yt.setValue(D,"isOrthographic",_.isOrthographicCamera===!0);if(H!==_)H=_,Xt=!0,Yt=!0}if(xe.needsLights){if(xt.state.sunShadowMap.length>0)yt.setValue(D,"sunShadowMap",xt.state.sunShadowMap,K);if(xt.state.directionalShadowMap.length>0)yt.setValue(D,"directionalShadowMap",xt.state.directionalShadowMap,K);if(xt.state.spotShadowMap.length>0)yt.setValue(D,"spotShadowMap",xt.state.spotShadowMap,K);if(xt.state.pointShadowMap.length>0)yt.setValue(D,"pointShadowMap",xt.state.pointShadowMap,K)}if(G.isSkinnedMesh){yt.setOptional(D,G,"bindMatrix"),yt.setOptional(D,G,"bindMatrixInverse");let Ot=G.skeleton;if(Ot){if(Ot.boneTexture===null)Ot.computeBoneTexture();yt.setValue(D,"boneTexture",Ot.boneTexture,K)}}if(G.isBatchedMesh){if(yt.setOptional(D,G,"batchingTexture"),yt.setValue(D,"batchingTexture",G._matricesTexture,K),yt.setOptional(D,G,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",G._indirectTexture,K),yt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null)yt.setValue(D,"batchingColorTexture",G._colorsTexture,K)}let fn=Y.morphAttributes;if(fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)mt.update(G,Y,Nt);if(Xt||xe.receiveShadow!==G.receiveShadow)xe.receiveShadow=G.receiveShadow,yt.setValue(D,"receiveShadow",G.receiveShadow);if((X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&L.environment!==null)Ut.envMapIntensity.value=L.environmentIntensity;if(Ut.dfgLUT!==void 0)Ut.dfgLUT.value=B3();if(Xt){if(yt.setValue(D,"toneMappingExposure",T.toneMappingExposure),xe.needsLights)_e(Ut,Yt);if(ye&&X.fog===!0)De.refreshFogUniforms(Ut,ye);if(De.refreshMaterialUniforms(Ut,X,pe,ne,M.state.transmissionRenderTarget[_.id]),xe.needsLights&&xe.lightProbeGrid){let Ot=xe.lightProbeGrid;Ut.probesSH.value=Ot.texture,Ut.probesMin.value.copy(Ot.boundingBox.min),Ut.probesMax.value.copy(Ot.boundingBox.max),Ut.probesResolution.value.copy(Ot.resolution)}oa.upload(D,ae(xe),Ut,K)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0)oa.upload(D,ae(xe),Ut,K),X.uniformsNeedUpdate=!1;if(X.isSpriteMaterial)yt.setValue(D,"center",G.center);if(yt.setValue(D,"modelViewMatrix",G.modelViewMatrix),yt.setValue(D,"normalMatrix",G.normalMatrix),yt.setValue(D,"modelMatrix",G.matrixWorld),X.uniformsGroups!==void 0){let Ot=X.uniformsGroups;for(let Vt=0,cn=Ot.length;Vt<cn;Vt++){let Kn=Ot[Vt];We.update(Kn,Nt),We.bind(Kn,Nt)}}return Nt}function _e(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.sunLights.needsUpdate=L,_.sunLightShadows.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Ve(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(_,L,Y){let X=O.get(_);if(X.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1)X.__useRenderToTexture=!1;O.get(_.texture).__webglTexture=L,O.get(_.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){let Y=O.get(_);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,Y=0){J=_,j=L,ie=Y;let X=null,G=!1,ye=!1;if(_){let Me=O.get(_);if(Me.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),U.copy(_.viewport),oe.copy(_.scissor),we=_.scissorTest,E.viewport(U),E.scissor(oe),E.setScissorTest(we),W=-1;return}else if(Me.__webglFramebuffer===void 0)K.setupRenderTarget(_);else if(Me.__hasExternalTextures)K.rebindTextures(_,O.get(_.texture).__webglTexture,O.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let lt=_.depthTexture;if(Me.__boundDepthTexture!==lt){if(lt!==null&&O.has(lt)&&(_.width!==lt.image.width||_.height!==lt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(_)}}let ke=_.texture;if(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)ye=!0;let Ke=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget){if(Array.isArray(Ke[L]))X=Ke[L][Y];else X=Ke[L];G=!0}else if(_.samples>0&&K.useMultisampledRTT(_)===!1)X=O.get(_).__webglMultisampledFramebuffer;else if(Array.isArray(Ke))X=Ke[Y];else X=Ke;U.copy(_.viewport),oe.copy(_.scissor),we=_.scissorTest}else U.copy(Je).multiplyScalar(pe).floor(),oe.copy(Q).multiplyScalar(pe).floor(),we=Ze;if(Y!==0)X=F;if(E.bindFramebuffer(D.FRAMEBUFFER,X))E.drawBuffers(_,X);if(E.viewport(U),E.scissor(oe),E.setScissorTest(we),G){let Me=O.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,Y)}else if(ye){let Me=L;for(let ke=0;ke<_.textures.length;ke++){let Ke=O.get(_.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,Ke.__webglTexture,Y,Me)}}else if(_!==null&&Y!==0){let Me=O.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,Y)}W=-1};function nt(_){let L=O.get(_);if(L.__readFormat!==_.format||L.__readType!==_.type)L.__readFormat=_.format,L.__readType=_.type,L.__formatReadable=je.textureFormatReadable(_.format),L.__typeReadable=je.textureTypeReadable(_.type);return L}if(this.readRenderTargetPixels=function(_,L,Y,X,G,ye,Te,Me=0){if(!(_&&_.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Te!==void 0)ke=ke[Te];if(ke){E.bindFramebuffer(D.FRAMEBUFFER,ke);try{let Ke=_.textures[Me],{format:lt,type:ft}=Ke;if(_.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+Me);let Fe=nt(Ke);if(Fe.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=_.width-X&&(Y>=0&&Y<=_.height-G))D.readPixels(L,Y,X,G,ce.convert(lt),ce.convert(ft),ye)}finally{let Ke=J!==null?O.get(J).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(_,L,Y,X,G,ye,Te,Me=0){if(!(_&&_.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Te!==void 0)ke=ke[Te];if(ke)if(L>=0&&L<=_.width-X&&(Y>=0&&Y<=_.height-G)){E.bindFramebuffer(D.FRAMEBUFFER,ke);let Ke=_.textures[Me],{format:lt,type:ft}=Ke;if(_.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+Me);let Fe=nt(Ke);if(Fe.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(L,Y,X,G,ce.convert(lt),ce.convert(ft),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ft=J!==null?O.get(J).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Ft);let bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fd(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(St),D.deleteSync(bt),ye}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,Y=0){let X=Math.pow(2,-Y),G=Math.floor(_.image.width*X),ye=Math.floor(_.image.height*X),Te=L!==null?L.x:0,Me=L!==null?L.y:0;K.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Te,Me,G,ye),E.unbindTexture()},this.copyTextureToTexture=function(_,L,Y=null,X=null,G=0,ye=0){let Te,Me,ke,Ke,lt,ft,Fe,St,Ft,bt=_.isCompressedTexture?_.mipmaps[ye]:_.image;if(Y!==null)Te=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,ke=Y.isBox3?Y.max.z-Y.min.z:1,Ke=Y.min.x,lt=Y.min.y,ft=Y.isBox3?Y.min.z:0;else{let Ut=Math.pow(2,-G);if(Te=Math.floor(bt.width*Ut),Me=Math.floor(bt.height*Ut),_.isDataArrayTexture)ke=bt.depth;else if(_.isData3DTexture)ke=Math.floor(bt.depth*Ut);else ke=1;Ke=0,lt=0,ft=0}if(X!==null)Fe=X.x,St=X.y,Ft=X.z;else Fe=0,St=0,Ft=0;let Dt=ce.convert(L.format),Kt=ce.convert(L.type),xe;if(L.isData3DTexture)K.setTexture3D(L,0),xe=D.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)K.setTexture2DArray(L,0),xe=D.TEXTURE_2D_ARRAY;else K.setTexture2D(L,0),xe=D.TEXTURE_2D;E.activeTexture(D.TEXTURE0),E.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),E.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),E.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let xt=E.getParameter(D.UNPACK_ROW_LENGTH),$e=E.getParameter(D.UNPACK_IMAGE_HEIGHT),Nt=E.getParameter(D.UNPACK_SKIP_PIXELS),_t=E.getParameter(D.UNPACK_SKIP_ROWS),Xt=E.getParameter(D.UNPACK_SKIP_IMAGES);E.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),E.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),E.pixelStorei(D.UNPACK_SKIP_ROWS,lt),E.pixelStorei(D.UNPACK_SKIP_IMAGES,ft);let Yt=_.isDataArrayTexture||_.isData3DTexture,yt=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){let Ut=O.get(_),fn=O.get(L),Ot=O.get(Ut.__renderTarget),Vt=O.get(fn.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,Ot.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let cn=0;cn<ke;cn++){if(Yt)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,O.get(_).__webglTexture,G,ft+cn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,O.get(L).__webglTexture,ye,Ft+cn);D.blitFramebuffer(Ke,lt,Te,Me,Fe,St,Te,Me,D.DEPTH_BUFFER_BIT,D.NEAREST)}E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||_.isRenderTargetTexture||O.has(_)){let Ut=O.get(_),fn=O.get(L);E.bindFramebuffer(D.READ_FRAMEBUFFER,z),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Ot=0;Ot<ke;Ot++){if(Yt)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,G,ft+Ot);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,G);if(yt)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fn.__webglTexture,ye,Ft+Ot);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fn.__webglTexture,ye);if(G!==0)D.blitFramebuffer(Ke,lt,Te,Me,Fe,St,Te,Me,D.COLOR_BUFFER_BIT,D.NEAREST);else if(yt)D.copyTexSubImage3D(xe,ye,Fe,St,Ft+Ot,Ke,lt,Te,Me);else D.copyTexSubImage2D(xe,ye,Fe,St,Ke,lt,Te,Me)}E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(yt)if(_.isDataTexture||_.isData3DTexture)D.texSubImage3D(xe,ye,Fe,St,Ft,Te,Me,ke,Dt,Kt,bt.data);else if(L.isCompressedArrayTexture)D.compressedTexSubImage3D(xe,ye,Fe,St,Ft,Te,Me,ke,Dt,bt.data);else D.texSubImage3D(xe,ye,Fe,St,Ft,Te,Me,ke,Dt,Kt,bt);else if(_.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,ye,Fe,St,Te,Me,Dt,Kt,bt.data);else if(_.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Fe,St,bt.width,bt.height,Dt,bt.data);else D.texSubImage2D(D.TEXTURE_2D,ye,Fe,St,Te,Me,Dt,Kt,bt);if(E.pixelStorei(D.UNPACK_ROW_LENGTH,xt),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),E.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),E.pixelStorei(D.UNPACK_SKIP_ROWS,_t),E.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt),ye===0&&L.generateMipmaps)D.generateMipmap(xe);E.unbindTexture()},this.initRenderTarget=function(_){if(O.get(_).__webglFramebuffer===void 0)K.setupRenderTarget(_)},this.initTexture=function(_){if(_.isCubeTexture)K.setTextureCube(_,0);else if(_.isData3DTexture)K.setTexture3D(_,0);else if(_.isDataArrayTexture||_.isCompressedArrayTexture)K.setTexture2DArray(_,0);else K.setTexture2D(_,0);E.unbindTexture()},this.resetState=function(){j=0,ie=0,J=null,E.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}var ca={globe:{d48:"wP///wEAAAAAQP3/AQL//wEAAAAAAPj/AOj/fwAAAAAAAPAf4P//AQAAAAAAAP6A//8HAAAAAAAA+P3/3wMAAAAAAADw///7BgAAAAAAAPD/vzsAAAAAAAAA///CAAAAAAAAAPD/gQAAAAAAAAD+/wgAAAAAAACA+ucAAAAAAAAAAP8HAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAPiAf/+5///v//AeAHAAAAAAAAwP/4A+ABAAAAAAAA+P/5AQoXAA8AAAAA/D8+IPgB+AAAAAAA/+Hx/AP4AQAAAAD4AW/AH/wDAAAAAPgAT+QDfwAAAAzWP8BPB/AfAABgzv8BMj7Q/wAAgDz/B+Af8P/gAeB+/w/8Afx/8AC86v/zH+D/DwQAAP6/AsD/HwAAAPz/P+j/DwAAAPx/FP7/AQAA0f8/8/8fAAA+4f95/x8AAPyV////BwAA/p//f/4BAMD/4D/ACwAAfwT+AQAAAP4A/wMAKICf3/8BAALg//c/ADAA/v//AQAA+P//AwAA4PX/AQgAcP4/AAAA+P8BAAD8/wOACvj/AQzE/z8AAPz/AQD6/wN4/v8BuP///////+//////////////////////////A/wfyDQAAICA////B//vKgAAAADC///////LEwAAAAD+/////x9BBgAAAMD//////3wIAAAAAP//////+8EAAAAA+P/////+AwAAAAD/////3zIAAAAA8P////9DAAAAgPD/////DwAAAODg/////w8AAABk/v////8BAAAA/P////8vAAAA/P//////FQAA/P//////DwDg////////AVD///////8H+P///////wf/////////+////3+g/wPj////A/w/gf/3HwDgP4D+gQEA+g0A9AMAAAEAAOABAAgAAMAPABAAAAAfAAAAAAAPAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///38AAAAAAAAA4P///38AAAAAAAAA+P///w8AAAAAAAAA/////wQAAAAAAAD4////AwAAAAAAAPD///8DAAAAAAAA+P///wEAAAAAAAD///8PAAAAAAAA+P//CwAAAAAAAPD//wsAAAAAAAD4//8HAAAAAAAA//9/AAAAAAAA+P//AwAAAAAA8P//AwAAAAAA+P//AQAAAAAA//8fAAAAAAD4/z8AAAAAAPD/PwAAAAAA+P8PAAAAAAD/fwAAAAAA+H8AAAAAAPA/AAAAAAD4DwAAAAAATwAAAAAAmAAAAAAA0AAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////fw4AAAAAwP///////wgAAAAA8P//////fwQAAAAA/v//////DwAAAADw//////8/AAAAAOD//////38AAAAA8P//////vwAAAAD+//////8fAAAA8P//////fwAAAOD//////n8AAADw////B/QfAAAA/v//PwD8AQAA8P///wDgBwAA4P//HwDABwAA8P//AwBwAAAA/v8/AIADAADw/38AuB8AAAD8YAD8HwAAAABwAPQHAAAAAA4DOAAAAAAAAvgAAAAAFAH4AAAAAGAAfgAAAAAGgA8AAACYADAAAACIADAAAAAAAAwAABAAsAAAcABAAAAwAMAAAATA/wAQgP9fTQD8/x8A//8PwP//Afz/D/j/H/z/z////f//////////////////////////cRz8////////////cwD///////////9/DPD////////////nQP///////////x82+P///////3/8PxDw//////+/CPgPAP7//////0+AwwDw//////8/AI0C4P/////BP/gfAOD///9/4Yf/R1D8////P/7/H4D/////f/j/CwD/////P/j/E+D/////P/7/Afz/////wf9/+P/////P/////////////9//////////8////////x////////9//P///3/+f/z///+P/w////9//P/4//+/+P/H//8P8P+H///w///wX4D//w8fgP//PzwA//8/HgD//58DQP//HQCA+jIAAAAQAAAAAQDwHwCAPwAAHwCAAwAAAAAAAAAAAAAAwP//LwAAAAAAAAD+////fwAAAAAAAAD+/////wAAAAAAAAD/////PwAAAAAAAPj/////AAAAAAAAgP////8BAAAAAADg/////wAAAAAAAP7///8fAAAAAAD4/////wEAAAAA8P////8BAAAAAPz///9/AAAAAKD/////BwAAAAD/////DwAAAAD+////DwAAAAD/////AwAAAOD///8/AAAAAP7//38AAAAA8P//PwAAAACA/v8FAAAAAAD8AQAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////8DAAAAAAAAAP////8HAAAAAAAAgP////8AAAAAAAAA8P///z8AAAAAAACA/////wAAAAAAAAD///9/AAAAAAAAgP///w8AAAAAAADw//9/AAAAAAAAgP///wAAAAAAAAD//38AAAAAAACA//8PAAAAAAAA8P//AAAAAAAAgP//AAAAAAAAAP9/AAAAAAAAgP8DAAAAAAAA8B8AAAAAAACAfwAAAAAAAAB/AAAAAAAAgB8AAAAAAADwAwAAAAAAgA8AAAAAAAAPAAAAAACABwAAAAAA8AAAAAAAgAMAAAAAAAMAAAAAgAEAAAAAEAAAAACAAAAAAAABAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////wMAAAAAAAD4/////wEAAAAAAHz/////PwAAAAAA4P//////AQAAAABg/v////8DAAAAAED//////wEAAAAAyP////8/AAAAAAD8/////wEAAADg4P////8DAAAAwOD/////AQAAACD4////PwAAAIAD/f///wEAAAAG4P///wMAAAAG4P///wEAAMAH4P//PwAAAHiAJ///AQAAgAcP+P8DAAAAiof5/wEAAACEgP8/AAAAYAD4/wEAAAAA8P8DAAAAAPz/AQAAAAD/PwAAAAD4/wEAAADg/wMAAADA/wEAAADwPwAAAGD+AQAAgOADAAAAwAEAAAAAAAAAAAAAAAcAAAADAADAAABABQAgCADgAgBiAOAAwAuAEQAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAD8AQAAAAAAAAD+AQAAAAAAAPD/AAAAAAAAAP4/AAAAAAAA4A8AAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAB8AAAAAAAAwAMAAAAAAIAHAAAAAADgAwAAAAD4fwAAAADA/wMAAAD4/wcAAAD8/wMAAOD/fwAAAP//AwAA/v8HAAD+/wMAgP9/AAD8/wMA+P8HAOD/AwDAfwAA4AMAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAwAcAAAAAAAAAPuD/AAAAAAAAAPiX/x8AAAAAAADwP/8/AAAAAAAA+N//fwAAAAAAAP///w8AAAAAAPj//38BAAAAAPD///8DAAAAAPj///8BAAAAAP///z8AAAAA+P///wEAAADw////AwAAAPj///8AAAAA////HwAAAPj//z8AAADw//8HAAAA+P//AAAAAP//DwAAAPj/DAAAAPB/AAAAAPjPAQAAAD8AAAAA+AEAAADwAQAAAHgAAAAAvz8AAPj/BwDw5w8I+Og2AAcAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAA8P///////w8AAAAA/P//////fwsAAADA//////v/IwAAAID/////8/8PAAAAAP7//z/g/w8AAAAA////B8D/AwAAAPD//z8A/AcAAABA////APgPAAAAAPz//wCIAAAAAAD//x8AAAAAAADg//8BAAAAAAAA/v8PAAAAAAAA/P8fAAAAAAAA8H8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAADgAAMABAIADAMACAGAA4AHABzABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAADgAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAwP8BAAAAAAAA4P8fAAAAAAAA+P8fAAAAAADA//8DAAAAAED+/x8AAAAAwP//PwAAAADw//8PAAAAwP//fwDA//////8DwP//////AfD/////fwD//////wP8/////wf+/////4////////P///9/3////3/4////P7D///8HAPD//wCA/v8PAHz8AQAAEAAAAAAAAAAAAABgBQAAAAMAAAAAQICBIQwAAAAAAAAAAACAwA8AAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAMAAEAAAAAAAAAAAAIF/AAAAAAAAAACAAT8AAAAAAAAAAGDgBwAAAAAAAAAAAz8AAAAAAAAAAAR8AAAAAAAAAAAGOAAAAAAAAACAAQQAAAAAAAAAEAAAAAAAAAAAwAcAAAAAAAAAwAcAAAAAAAAA8AEAAAAAAAAAPgAAAAAAAABwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////PwAAAAAAAID/////fwAAAAAAAMD/////HwAAAAAAAPj/////AQAAAAAA4P////8PAAAAAADg/////w8AAAAAAPj/////HwAAAACA//////8/AAAAAPz///////8HAADw////////PwAA+P///////w8AAPz//////38AAPD///////8AAPD//////38AAPD//////w8AAP//////fwAA/P//////AAD8/////38AgP//////DwD4/////38A4P//////AID/////fwCA/////w8A+P///38A/P////8A/v///3+A/////w/+//////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBwAAAAAAAAAAAMABAAAAAAAAAAAADuAAAAAAAAAAAPADAAAAAAAAAADADwAAAAAAAAAAwH8AAAAAAAAAAPA/AAAAAAAAAAD/AQAAAAAAAAD4DwAAAAAAAADgHwAAAAAAAAD0HwAAAAAAAMD/BwAAAAAAAP6/AgAAAAAA/v8PAAAAAAD//wMAAAAA4P/fBwAAAAD///8AAAAA/v//BwAAAP///wMAAOD//38AAAD///+vCgD+////HwD/////H+D/////B/////8//v///3////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAgB8AAAAAAAAYgAEAgAMAAAAAAAAIAAAgAAAAAAAAAAAgwAF8AAAAAAAAAMDA9/8DAAAAFAAAAIDj/0cBAAAAAAAAAPD/fwEAAAAAAAAA4H8AAAAAAAAAAAAACAAAAAAAAAAAAAAAACAAAAAAAAAIAAQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A/x8GAAAAAAAAgH+A/R8AAAAAAAAAcA4A/gMAAAAAAADA8QAAPwAAAAAAAIDiAwD4AQAAAAwAAGAAAHAAAAAAAwAABQAACAAAABMAAHAgAAAAAAAeAADAgAMAAAAAPgAAgPAPAAAAwB8AALD/BwAAAPwBAID/fwAAAPgHAED+/wAAAPw/AOD+fwAAAP8/APz/AwAA8P8P4P8fBgDA///A//8gAPj//+///xsA////////f/j///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8P",d30:"cP8fAAAA8B/w/wEAAAD44P8BAAAA4P3/AQAAAOD/9wAAAADg/wgAAAAA/gMAAAAA4B8AAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCQ8/3/AQ8AAAAA/zxQAAoAAPDPIQ88AACADx8+PgAAAA8egx8AMP5BOfwBAN0PPPCPAa9/FfgfAYD/TP8DAPDf/B8AWv//HwB4+/8PAPz5gQLAAz8AAt75ARz89wMA+P8BAMw/AAD/ART+A4H/AeA/sP/////+////////g/9aAQDj/3//twAAAP///6cVAAD+////GQAA+P//0wMAAP7//wkAAPH//z8AAID//z8AAPz///8CgP////8A/P///4f/////8///Az/k/1fgB/4ZQAVADAABADwAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA8P//AwAAAAD//x8AAAAA+P9/AQAAAPD/fwAAAAD4/x8AAAAA/38AAAAA+P8DAAAA8P8DAAAA+P8BAAAA/x8AAAD4fwAAAPB/AAAA+A8AAAA/AAAAuAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///08AAAD+////CQAA8P///w8AAOD///8fAADw////HwAA/v///wEA8P//8QcA4P9/gAcA8P8XwAEA/j8ADADQ/wA/AACCgT4AAMAEBgAAInAAAIDAAwBAAAIAEAABAAAIAAYQAAB/AOD/Af8P/h//7///////////////TPz//////2/g//////+/yf/////fP4T/////ghjw////jx6B//9/Hn8A//9//B/w//+P/wH////xP/7///f////////3//////z///vP///nP///4T//r/3PF/5/HPj/MeD/GwC6AwAAAD8AHAACAAAAwP8fAAAAAPj//wcAAACA//9/AAAAAPz/fwAAAAD//z8AAADw//8PAACA//8/AACA//8/AADg//8HAAD4/38AAOD//wEAAP//AAAA6AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//HwAAAADw//8BAAAAgP//DwAAAAD//wcAAACA//8AAAAA8P8HAAAAgP8fAAAAAP8PAAAAgP8AAAAA8AMAAACADwAAAAAPAAAAgAcAAABwAAAAgAEAAAADAACAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8/AAAAoP7//wEAAED///8DAACA////AQAA4P//PwAAcPz//wEAAPH//wMAgMD//wEAIOD/PwAAB9b/AQBwDv4DAMCE/wEAIMA/AACA/wEAAP4DAAD+AQCAPwAA9AEAgAMAAAAAAQAQACgADEAQHgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAADwAAAAD+AQAAAOALAAAAAAAAAAAAgAMAAABwAAAAgAMAAPAHAAD/AwDwfwDA/wMA/wcA/wPgfwD4AwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUPAHAAAAAD//AAAAAPj9HwAAAPD/PwAAAPj/PwAAAP//DwAA+P8/AADw/z8AAPj/DwAA/38AAPj/AADwbwAA+AUAAA8AADgAALAIAPgfAO9DGCAAAAAAAAAAAADA/////wEAAPz///8fAADw///7HwAA4P9/+B8AAPj/D/gFAAD+/+APAADw/wEAAADg/wEAAADQ/wAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAYACAAOAADGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAACAAAAAAA+AAAAAMB/AAAAAP4/AAAA/P8BAAD8/wEQwf9/gP///wP+//8P/v//h/////v///3//yP1/wHo/wAEAwAAAAAYDAAAQSQAAAAAAADAAwAAAAAAAAAAAAAAACBoAAAAAAAgPAAAAAAAhAcAAAAAQDgAAAAAgEEAAAAAAAUAAAAAwAEAAAAAGAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//fwAAAAD8//8HAAAA4P//HwAAAOD//z8AAAD4//9/AQAA/////w8A+P////8AwP///38A4P///w8A/v//fwD4////APj//38A////D8D//38A/v//gP//f/D//4////////////////////////////////8AAAAAAAAAAAAAAAAAAAAACAAAAAAAAAcAAAAAAOBBAAAAAAAeAAAAAAD4AQAAAAD4AAAAAAD8AAAAAMAPAAAAAP8LAAAA/h8AAAD/PwAA4P8fAAD//wEA/v9XAP///+D//x/////+//////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAIAAIQAAAAAg+n4AAAgAAIh/BAAAAABAfwAAAAAAABAAMAAAAICAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz4nwAAAACwAX4AAAAAMAfgAQCAAAABgAEAJAAwAAAAwAEA4AAEgAcA3A8AgA8A/AcA8Afg/wAA/wP+BwD8H/6fgP/////z//////////////////////////////////////////////////////////8P"},europe:[{id:"832",name:"Jersey",rings:[[[-2.02,49.23],[-2.05,49.17],[-2.24,49.18],[-2.22,49.27],[-2.02,49.23]]]},{id:"831",name:"Guernsey",rings:[[[-2.51,49.49],[-2.55,49.43],[-2.65,49.47],[-2.51,49.49]]]},{id:"833",name:"Isle of Man",rings:[[[-4.41,54.18],[-4.61,54.06],[-4.79,54.07],[-4.7,54.22],[-4.43,54.41],[-4.34,54.27],[-4.41,54.18]]]},{id:"826",name:"United Kingdom",rings:[[[-2.67,51.62],[-3.29,51.39],[-3.56,51.41],[-3.89,51.59],[-4.24,51.57],[-4.09,51.66],[-4.39,51.74],[-4.6,51.74],[-4.9,51.63],[-5.12,51.71],[-5.2,51.86],[-5.26,51.88],[-5.09,52],[-4.38,52.2],[-4.15,52.33],[-3.98,52.54],[-4.08,52.61],[-4.04,52.7],[-4.12,52.82],[-4.1,52.92],[-4.68,52.81],[-4.64,52.89],[-4.27,53.14],[-3.81,53.3],[-3.43,53.34],[-3.1,53.26],[-3.17,53.39],[-3.07,53.43],[-2.92,53.3],[-2.75,53.31],[-2.91,53.35],[-3.07,53.51],[-2.93,53.73],[-3.03,53.77],[-3.03,53.91],[-2.9,53.96],[-2.87,54.18],[-3.17,54.13],[-3.57,54.47],[-3.59,54.56],[-3.47,54.77],[-3.27,54.91],[-3.04,54.95],[-3.55,54.95],[-3.96,54.78],[-4.13,54.78],[-4.25,54.85],[-4.52,54.76],[-4.82,54.85],[-4.91,54.69],[-5.14,54.86],[-5.17,54.99],[-5.06,54.99],[-4.68,55.5],[-4.73,55.6],[-4.89,55.7],[-4.83,55.93],[-4.58,55.94],[-4.84,56.05],[-4.8,56.16],[-4.93,56.03],[-5.23,55.89],[-5.22,56.07],[-5,56.23],[-5.38,56.02],[-5.42,55.97],[-5.39,55.77],[-5.56,55.39],[-5.65,55.33],[-5.77,55.36],[-5.68,55.62],[-5.51,55.8],[-5.62,55.81],[-5.61,56.05],[-5.54,56.25],[-5.19,56.76],[-5.65,56.53],[-5.87,56.56],[-5.97,56.69],[-6.13,56.72],[-5.73,56.85],[-5.86,56.9],[-5.59,57.1],[-5.56,57.23],[-5.82,57.44],[-5.58,57.55],[-5.68,57.57],[-5.74,57.67],[-5.61,57.88],[-5.16,57.88],[-5.41,58.07],[-5.34,58.24],[-5.01,58.26],[-5.09,58.38],[-5.07,58.52],[-4.98,58.58],[-4.81,58.57],[-4.71,58.51],[-4.49,58.57],[-4.43,58.51],[-3.05,58.63],[-3.11,58.41],[-3.21,58.32],[-3.99,57.96],[-4.03,57.85],[-3.86,57.82],[-4.08,57.68],[-4.13,57.58],[-3.3,57.71],[-3.04,57.67],[-2.08,57.7],[-1.87,57.61],[-1.78,57.47],[-2.02,57.26],[-2.26,56.86],[-2.5,56.64],[-2.68,56.51],[-3.31,56.36],[-2.89,56.4],[-2.65,56.32],[-2.67,56.25],[-2.98,56.19],[-3.36,56.03],[-3.79,56.09],[-3.61,56.02],[-3.05,55.95],[-2.84,56.03],[-2.6,56.03],[-2.15,55.9],[-1.65,55.57],[-1.23,54.7],[-0.67,54.5],[-0.08,54.12],[-0.21,54.02],[0.12,53.61],[-0.27,53.74],[-0.66,53.72],[-0.29,53.69],[0.27,53.34],[0.35,53.16],[0.05,52.91],[0.28,52.81],[0.38,52.83],[0.56,52.97],[1.06,52.96],[1.38,52.89],[1.72,52.68],[1.75,52.47],[1.56,52.09],[1.32,51.96],[1.23,51.97],[1.28,51.84],[1.19,51.8],[0.96,51.81],[0.75,51.73],[0.9,51.69],[0.89,51.57],[0.42,51.47],[0.53,51.49],[0.69,51.39],[0.89,51.36],[1.42,51.36],[1.4,51.18],[1.05,51.05],[0.96,50.93],[0.77,50.93],[0.2,50.76],[-0.2,50.82],[-0.79,50.76],[-1.42,50.9],[-1.33,50.82],[-1.52,50.75],[-2.03,50.72],[-1.96,50.63],[-2.04,50.6],[-2.35,50.64],[-2.43,50.6],[-3,50.72],[-3.4,50.63],[-3.68,50.24],[-3.79,50.23],[-4.2,50.39],[-4.73,50.29],[-5.01,50.16],[-5.12,50.04],[-5.23,50.02],[-5.43,50.11],[-5.62,50.05],[-5.66,50.13],[-5.34,50.25],[-4.89,50.53],[-4.58,50.78],[-4.52,50.98],[-4.3,51.03],[-4.19,51.19],[-3.84,51.23],[-3.14,51.21],[-2.43,51.74],[-2.67,51.62]]]},{id:"826",name:"United Kingdom",rings:[[[-4.2,53.32],[-4.05,53.31],[-4.08,53.26],[-4.37,53.13],[-4.55,53.26],[-4.57,53.39],[-4.31,53.42],[-4.2,53.32]]]},{id:"826",name:"United Kingdom",rings:[[[-2.55,59.23],[-2.66,59.23],[-2.6,59.29],[-2.41,59.3],[-2.55,59.23]]]},{id:"826",name:"United Kingdom",rings:[[[-1.04,60.51],[-1.16,60.6],[-1.09,60.72],[-0.99,60.69],[-1.05,60.65],[-1.04,60.51]]]},{id:"826",name:"United Kingdom",rings:[[[-1.31,60.54],[-1.29,60.47],[-1.16,60.42],[-1.05,60.44],[-1.2,60.01],[-1.3,59.88],[-1.36,59.91],[-1.29,60.15],[-1.48,60.17],[-1.67,60.28],[-1.37,60.33],[-1.45,60.47],[-1.57,60.5],[-1.36,60.61],[-1.3,60.61],[-1.31,60.54]]]},{id:"826",name:"United Kingdom",rings:[[[-0.78,60.81],[-0.83,60.68],[-0.92,60.7],[-0.92,60.81],[-0.78,60.81]]]},{id:"826",name:"United Kingdom",rings:[[[-3.17,58.79],[-3.28,58.78],[-3.39,58.91],[-3.27,58.9],[-3.17,58.79]]]},{id:"826",name:"United Kingdom",rings:[[[-2.93,58.74],[-3.04,58.82],[-2.9,58.83],[-2.93,58.74]]]},{id:"826",name:"United Kingdom",rings:[[[-3.06,59.03],[-2.76,58.96],[-2.83,58.89],[-3.2,58.93],[-3.24,59],[-3.35,58.99],[-3.31,59.13],[-3.05,59.1],[-3.02,59.06],[-3.06,59.03]]]},{id:"826",name:"United Kingdom",rings:[[[-2.73,59.19],[-2.82,59.16],[-2.86,59.25],[-3.05,59.32],[-2.98,59.35],[-2.73,59.19]]]},{id:"826",name:"United Kingdom",rings:[[[-6.61,56.59],[-6.67,56.59],[-6.57,56.66],[-6.49,56.67],[-6.61,56.59]]]},{id:"826",name:"United Kingdom",rings:[[[-5.11,55.45],[-5.33,55.48],[-5.37,55.67],[-5.19,55.69],[-5.11,55.57],[-5.11,55.45]]]},{id:"826",name:"United Kingdom",rings:[[[-5.78,56.34],[-6.31,56.29],[-6.19,56.36],[-6.14,56.49],[-6.32,56.57],[-6.1,56.65],[-5.95,56.54],[-5.76,56.49],[-5.78,56.34]]]},{id:"826",name:"United Kingdom",rings:[[[-6.13,55.93],[-6.06,55.72],[-6.09,55.66],[-6.31,55.61],[-6.3,55.78],[-6.49,55.7],[-6.41,55.85],[-6.13,55.93]]]},{id:"826",name:"United Kingdom",rings:[[[-5.97,55.81],[-6.04,55.81],[-6.07,55.89],[-5.91,55.97],[-5.97,55.99],[-5.94,56.05],[-5.73,56.12],[-5.97,55.81]]]},{id:"826",name:"United Kingdom",rings:[[[-6.2,58.36],[-6.33,58.19],[-6.55,58.09],[-6.4,58.08],[-6.42,58.02],[-6.96,57.75],[-7.08,57.81],[-6.86,57.92],[-7.06,58],[-6.99,58.05],[-7.09,58.1],[-7.03,58.22],[-6.73,58.19],[-6.78,58.3],[-6.24,58.5],[-6.2,58.36]]]},{id:"826",name:"United Kingdom",rings:[[[-6.28,56.96],[-6.43,57.02],[-6.32,57.05],[-6.26,57.01],[-6.28,56.96]]]},{id:"826",name:"United Kingdom",rings:[[[-6.14,57.51],[-6.14,57.31],[-5.67,57.25],[-5.95,57.05],[-6.01,57.05],[-6.04,57.2],[-6.32,57.2],[-6.44,57.33],[-6.68,57.36],[-6.76,57.44],[-6.58,57.51],[-6.62,57.56],[-6.38,57.6],[-6.36,57.67],[-6.25,57.65],[-6.14,57.51]]]},{id:"826",name:"United Kingdom",rings:[[[-7.21,57.68],[-7.09,57.63],[-7.18,57.53],[-7.52,57.6],[-7.47,57.65],[-7.21,57.68]]]},{id:"826",name:"United Kingdom",rings:[[[-7.25,57.12],[-7.38,57.13],[-7.41,57.38],[-7.27,57.37],[-7.25,57.12]]]},{id:"826",name:"United Kingdom",rings:[[[-7.42,56.97],[-7.54,56.97],[-7.45,57.02],[-7.42,56.97]]]},{id:"826",name:"United Kingdom",rings:[[[-6.22,54.09],[-6.65,54.06],[-6.67,54.18],[-6.8,54.21],[-6.94,54.37],[-7.05,54.41],[-7.2,54.3],[-7.16,54.24],[-7.32,54.13],[-7.61,54.14],[-7.85,54.22],[-8.15,54.45],[-7.75,54.59],[-7.91,54.7],[-7.55,54.77],[-7.38,55.03],[-7.22,55.09],[-7.1,55.05],[-6.95,55.18],[-6.47,55.24],[-6.13,55.22],[-5.87,54.92],[-5.72,54.82],[-5.71,54.76],[-5.88,54.68],[-5.88,54.64],[-5.58,54.66],[-5.47,54.5],[-5.48,54.44],[-5.67,54.55],[-5.66,54.38],[-5.56,54.37],[-5.61,54.27],[-5.83,54.24],[-6.02,54.05],[-6.22,54.09]]]},{id:"826",name:"United Kingdom",rings:[[[-1.06,50.69],[-1.25,50.59],[-1.56,50.67],[-1.31,50.77],[-1.06,50.69]]]},{id:"804",name:"Ukraine",rings:[[[38.21,47.09],[37.54,47.07],[37.34,46.92],[37.05,46.88],[36.79,46.71],[36.56,46.76],[36.28,46.66],[35.83,46.62],[35.4,46.38],[35.26,46.2],[35.06,46.1],[35.28,46.28],[35.29,46.37],[35.23,46.44],[35.06,46.27],[34.85,46.19],[34.86,45.99],[35,45.73],[34.95,45.73],[34.8,45.79],[34.79,45.89],[34.69,45.98],[34.45,45.97],[34.35,46.06],[34.03,46.11],[33.81,46.21],[33.66,46.22],[33.59,46.1],[33.43,46.06],[33.2,46.18],[32.48,46.08],[32.03,46.26],[31.83,46.28],[31.78,46.32],[31.99,46.36],[32.01,46.43],[31.71,46.47],[31.56,46.56],[32.36,46.48],[32.58,46.62],[32.36,46.57],[32.05,46.64],[31.94,46.78],[31.94,46.98],[31.76,47.21],[31.91,46.93],[31.87,46.65],[31.53,46.66],[31.56,46.78],[31.4,46.63],[30.8,46.55],[30.66,46.27],[30.22,45.87],[29.82,45.73],[29.63,45.72],[29.6,45.6],[29.67,45.54],[29.71,45.26],[29.4,45.42],[28.9,45.29],[28.78,45.31],[28.76,45.23],[28.32,45.35],[28.21,45.45],[28.5,45.52],[28.49,45.67],[28.73,45.85],[28.74,45.94],[28.95,46.05],[29.01,46.18],[28.94,46.29],[28.96,46.46],[29.19,46.52],[29.21,46.38],[29.31,46.47],[29.62,46.4],[29.71,46.45],[29.84,46.35],[30.13,46.42],[29.93,46.54],[29.94,46.72],[29.88,46.83],[29.57,46.96],[29.51,47.09],[29.54,47.27],[29.13,47.49],[29.21,47.78],[29.13,47.96],[28.92,47.95],[28.77,48.12],[28.53,48.15],[28.46,48.09],[28.34,48.15],[28.35,48.21],[28.29,48.24],[28.09,48.26],[27.82,48.42],[27.55,48.48],[27.23,48.37],[26.85,48.39],[26.62,48.26],[26.31,48.2],[26.16,47.99],[25.46,47.91],[24.89,47.72],[24.49,47.95],[24.18,47.91],[23.41,47.99],[23.14,48.09],[22.88,47.95],[22.77,48.11],[22.58,48.13],[22.35,48.26],[22.25,48.41],[22.13,48.41],[22.14,48.57],[22.3,48.69],[22.54,49.07],[22.84,49.04],[22.71,49.17],[22.73,49.29],[22.65,49.54],[22.71,49.61],[23.71,50.38],[23.97,50.41],[24.09,50.53],[24.09,50.62],[23.98,50.79],[24.1,50.87],[23.66,51.31],[23.61,51.61],[23.71,51.64],[23.98,51.59],[24.36,51.87],[25.27,51.94],[25.93,51.91],[27.14,51.75],[27.3,51.6],[27.69,51.57],[27.7,51.48],[27.86,51.59],[28.01,51.56],[28.18,51.61],[28.6,51.54],[28.65,51.46],[28.73,51.43],[28.85,51.54],[29.1,51.63],[29.35,51.38],[30.16,51.48],[30.31,51.4],[30.33,51.33],[30.54,51.26],[30.63,51.36],[30.53,51.6],[30.58,51.69],[30.76,51.89],[30.98,52.05],[31.57,52.11],[32.12,52.05],[32.28,52.11],[32.36,52.27],[32.43,52.31],[32.81,52.25],[33.15,52.34],[33.73,52.34],[33.92,52.25],[34.11,51.98],[34.4,51.78],[34.38,51.72],[34.12,51.68],[34.28,51.31],[34.21,51.26],[34.76,51.17],[35.06,51.2],[35.16,51.06],[35.31,51.04],[35.44,50.73],[35.41,50.54],[35.59,50.37],[35.67,50.35],[35.89,50.44],[36.12,50.41],[36.3,50.28],[36.5,50.28],[36.62,50.21],[36.76,50.29],[37.42,50.41],[37.58,50.29],[37.7,50.11],[38.05,49.92],[38.15,49.94],[38.18,50.03],[38.26,50.05],[38.92,49.82],[39.17,49.86],[39.3,49.74],[39.46,49.73],[39.78,49.57],[40.08,49.58],[40.11,49.25],[39.89,49.06],[39.68,49.01],[39.75,48.91],[40.01,48.82],[39.79,48.81],[39.7,48.74],[39.65,48.59],[39.84,48.54],[39.89,48.36],[39.85,48.3],[39.96,48.27],[39.77,47.96],[39.78,47.89],[39.66,47.84],[38.9,47.86],[38.64,47.67],[38.37,47.61],[38.29,47.56],[38.2,47.32],[38.28,47.28],[38.2,47.17],[38.21,47.09]]]},{id:"804",name:"Ukraine",rings:[[[32.01,46.2],[32.15,46.15],[32.01,46.17],[31.56,46.26],[31.51,46.37],[31.64,46.27],[32.01,46.2]]]},{id:"792",name:"Turkey",rings:[[[25.97,40.14],[25.67,40.14],[25.92,40.24],[25.97,40.14]]]},{id:"792",name:"Turkey",rings:[[[41.51,41.52],[41.82,41.43],[41.92,41.5],[42.47,41.44],[42.61,41.58],[42.79,41.56],[42.82,41.49],[43.15,41.31],[43.21,41.2],[43.43,41.16],[43.45,41.06],[43.63,40.93],[43.72,40.72],[43.57,40.48],[43.71,40.17],[43.67,40.13],[43.94,40.02],[44.29,40.04],[44.4,40],[44.82,39.65],[44.59,39.77],[44.46,39.67],[44.39,39.42],[44.02,39.38],[44.08,39.22],[44.18,39.14],[44.17,38.93],[44.27,38.84],[44.3,38.39],[44.45,38.34],[44.21,37.91],[44.56,37.74],[44.57,37.44],[44.8,37.27],[44.76,37.14],[44.61,37.18],[44.28,36.98],[44.2,37.05],[44.19,37.25],[44.11,37.3],[43.68,37.23],[43.09,37.37],[42.94,37.32],[42.77,37.37],[42.46,37.13],[42.36,37.11],[42.31,37.23],[42.2,37.3],[42.06,37.21],[41.51,37.09],[40.71,37.1],[40.02,36.83],[39.36,36.68],[38.77,36.69],[38.44,36.86],[38.19,36.9],[37.43,36.64],[37.07,36.65],[36.94,36.76],[36.66,36.8],[36.54,36.46],[36.64,36.23],[36.38,36.17],[36.35,36],[36.2,35.94],[36.13,35.83],[35.89,35.92],[35.96,36],[35.81,36.31],[36.19,36.66],[36.18,36.81],[36.05,36.91],[35.66,36.72],[35.54,36.6],[35.39,36.57],[34.7,36.82],[34.3,36.6],[33.95,36.3],[33.69,36.18],[32.93,36.1],[32.79,36.04],[32.38,36.18],[32.02,36.53],[31.35,36.8],[30.65,36.87],[30.58,36.8],[30.56,36.53],[30.45,36.27],[30.39,36.24],[30.23,36.31],[29.69,36.16],[29.22,36.32],[29.14,36.4],[29.04,36.69],[28.97,36.72],[28.82,36.68],[28.49,36.8],[28.31,36.81],[28.2,36.69],[28.02,36.63],[28.09,36.75],[27.66,36.68],[27.46,36.71],[27.63,36.79],[28.01,36.83],[28.24,37.03],[27.35,37.02],[27.26,36.98],[27.25,37.08],[27.3,37.13],[27.53,37.16],[27.52,37.25],[27.22,37.39],[27.15,37.6],[27.07,37.66],[27.23,37.73],[27.23,37.98],[26.88,38.06],[26.68,38.2],[26.58,38.15],[26.29,38.28],[26.34,38.37],[26.42,38.37],[26.37,38.56],[26.38,38.62],[26.44,38.64],[26.59,38.56],[26.6,38.42],[26.67,38.34],[26.73,38.42],[26.86,38.37],[27.14,38.45],[26.91,38.48],[26.76,38.71],[27.01,38.89],[26.81,38.96],[26.85,39.12],[26.68,39.29],[26.9,39.55],[26.11,39.47],[26.18,39.99],[26.31,40.02],[26.74,40.4],[27.28,40.46],[27.33,40.38],[27.48,40.32],[27.73,40.33],[27.85,40.38],[27.73,40.48],[27.87,40.51],[27.99,40.49],[27.93,40.38],[27.96,40.37],[29.01,40.39],[29.05,40.42],[28.79,40.53],[28.96,40.63],[29.85,40.74],[29.36,40.81],[29.12,40.94],[29.05,41.01],[29.15,41.22],[29.92,41.15],[30.35,41.2],[30.81,41.08],[31.25,41.11],[31.46,41.32],[32.3,41.73],[33.28,42],[34.75,41.96],[35,42.06],[35.16,42.03],[35.12,41.89],[35.3,41.73],[35.56,41.63],[35.92,41.71],[36.05,41.68],[36.18,41.43],[36.41,41.27],[36.51,41.26],[36.65,41.35],[36.78,41.36],[36.99,41.28],[37.07,41.18],[38.38,40.93],[39.43,41.11],[39.81,40.98],[40.26,40.96],[41.08,41.26],[41.51,41.52]]]},{id:"792",name:"Turkey",rings:[[[28.01,41.97],[27.99,41.86],[28.2,41.56],[29.06,41.23],[28.96,41.01],[28.78,40.97],[28.17,41.08],[27.92,40.99],[27.5,40.97],[27.26,40.69],[26.77,40.5],[26.33,40.12],[26.2,40.07],[26.25,40.31],[26.79,40.63],[26.11,40.61],[26.04,40.73],[26.33,40.95],[26.33,41.24],[26.62,41.4],[26.58,41.6],[26.32,41.72],[26.33,41.77],[26.51,41.83],[26.62,41.97],[27.24,42.09],[27.53,41.92],[28.01,41.97]]]},{id:"788",name:"Tunisia",rings:[[[11.5,33.18],[11.45,32.78],[11.45,32.64],[11.53,32.52],[11.5,32.41],[10.83,32.08],[10.61,31.93],[10.47,31.74],[10.28,31.68],[10.11,31.46],[10.26,30.94],[10.22,30.78],[9.89,30.39],[9.52,30.23],[9.05,32.07],[8.33,32.54],[8.21,32.93],[8.11,33.06],[7.73,33.27],[7.5,33.83],[7.52,34.08],[7.75,34.25],[7.84,34.41],[8.12,34.56],[8.25,34.73],[8.31,35.09],[8.39,35.2],[8.25,35.8],[8.35,36.37],[8.21,36.52],[8.37,36.63],[8.44,36.76],[8.6,36.83],[8.58,36.94],[8.82,37],[9.14,37.19],[9.69,37.34],[9.84,37.31],[9.78,37.21],[9.83,37.14],[9.89,37.18],[9.88,37.25],[10.2,37.21],[10.19,37.03],[10.33,36.86],[10.29,36.78],[10.41,36.73],[10.57,36.88],[11.05,37.07],[11.13,36.87],[10.97,36.74],[10.8,36.49],[10.52,36.32],[10.48,36.18],[10.59,35.89],[11,35.63],[11.04,35.34],[11.12,35.24],[10.69,34.68],[10.12,34.28],[10.04,34.14],[10.16,33.85],[10.31,33.73],[10.45,33.66],[10.71,33.69],[10.72,33.51],[10.9,33.53],[10.96,33.63],[11.09,33.56],[11.15,33.37],[11.26,33.31],[11.2,33.25],[11.5,33.18]]]},{id:"788",name:"Tunisia",rings:[[[11.28,34.75],[11.12,34.68],[11.26,34.82],[11.28,34.75]]]},{id:"788",name:"Tunisia",rings:[[[10.96,33.72],[10.86,33.69],[10.72,33.74],[10.74,33.89],[10.92,33.89],[11.02,33.82],[11.04,33.78],[10.96,33.72]]]},{id:"760",name:"Syria",rings:[[[35.89,35.92],[36.15,35.83],[36.2,35.94],[36.35,36],[36.38,36.17],[36.64,36.23],[36.54,36.46],[36.66,36.8],[36.94,36.76],[37.07,36.65],[37.43,36.64],[38.19,36.9],[38.44,36.86],[38.77,36.69],[39.36,36.68],[40.02,36.83],[40.71,37.1],[41.51,37.09],[42.06,37.21],[42.2,37.3],[42.31,37.23],[42.36,37.11],[41.79,36.6],[41.42,36.51],[41.29,36.38],[41.24,36.07],[41.35,35.81],[41.36,35.64],[41.22,35.29],[41.19,34.77],[40.99,34.43],[40.69,34.33],[39.05,33.51],[36.82,32.32],[36.37,32.39],[36.06,32.53],[35.89,32.71],[35.79,32.73],[35.91,32.95],[35.84,33.33],[35.87,33.43],[36.03,33.59],[35.94,33.67],[35.97,33.73],[36.09,33.83],[36.37,33.84],[36.28,33.89],[36.3,33.96],[36.59,34.22],[36.51,34.43],[36.33,34.5],[36.43,34.61],[36.38,34.66],[35.98,34.63],[35.89,34.95],[35.94,35.22],[35.9,35.42],[35.76,35.57],[35.89,35.92]]]},{id:"756",name:"Switzerland",rings:[[[9.52,47.52],[9.62,47.47],[9.48,47.17],[9.49,47.06],[9.84,47.01],[9.88,46.94],[10.13,46.85],[10.35,46.99],[10.46,46.9],[10.4,46.66],[10.43,46.55],[10.2,46.62],[10.09,46.6],[10.04,46.48],[10.13,46.24],[10.04,46.24],[9.94,46.36],[9.53,46.31],[9.43,46.48],[9.3,46.5],[9.26,46.48],[9.25,46.29],[9,46.02],[9.05,45.88],[8.96,45.83],[8.78,46],[8.82,46.08],[8.64,46.11],[8.46,46.25],[8.42,46.45],[8.09,46.27],[8.12,46.16],[7.99,46.02],[7.79,45.92],[7.54,45.98],[7.13,45.88],[7.05,45.9],[6.77,46.16],[6.82,46.28],[6.76,46.42],[6.43,46.43],[6.23,46.33],[6.27,46.25],[6.2,46.19],[5.97,46.15],[5.97,46.21],[6.1,46.28],[6.12,46.38],[6.06,46.43],[6.16,46.61],[6.41,46.75],[6.46,46.95],[6.67,47.03],[6.95,47.27],[7,47.34],[6.9,47.39],[7.05,47.49],[7.27,47.43],[7.42,47.46],[7.62,47.59],[8.43,47.59],[8.56,47.62],[8.4,47.69],[8.57,47.78],[8.88,47.66],[9.18,47.67],[9.52,47.52]]]},{id:"752",name:"Sweden",rings:[[[19.07,57.84],[18.82,57.71],[18.79,57.48],[18.91,57.4],[18.78,57.36],[18.7,57.24],[18.48,57.16],[18.34,56.98],[18.15,56.92],[18.29,57.08],[18.11,57.27],[18.15,57.34],[18.14,57.56],[18.54,57.83],[18.8,57.83],[18.9,57.92],[19.07,57.84]]]},{id:"752",name:"Sweden",rings:[[[16.53,56.29],[16.43,56.24],[16.4,56.31],[16.41,56.57],[16.63,56.88],[16.73,56.9],[17,57.32],[17.12,57.32],[16.78,56.8],[16.53,56.29]]]},{id:"752",name:"Sweden",rings:[[[11.39,59.04],[11.47,58.91],[11.64,58.93],[11.8,59.29],[11.68,59.59],[11.84,59.7],[11.93,59.86],[12.17,59.91],[12.49,60.11],[12.59,60.45],[12.31,60.89],[12.3,61],[12.71,61.06],[12.88,61.35],[12.59,61.54],[12.16,61.72],[12.3,62.28],[12.12,62.59],[12.11,62.92],[12.22,63],[12,63.29],[12.21,63.49],[12.17,63.6],[12.79,64],[13.2,64.07],[13.96,64.01],[14.14,64.17],[14.08,64.46],[13.65,64.58],[14.48,65.3],[14.55,65.65],[14.64,65.79],[14.54,66.13],[15.04,66.17],[15.49,66.31],[15.42,66.49],[16.4,67.06],[16.44,67.15],[16.13,67.43],[16.19,67.51],[16.46,67.55],[16.59,67.63],[16.79,67.9],[17.33,68.1],[17.92,67.97],[18.18,68.2],[18.16,68.53],[18.38,68.56],[19.97,68.36],[20.24,68.48],[19.97,68.54],[20.24,68.67],[20.35,68.85],[20.12,69.02],[20.62,69.04],[20.9,68.98],[20.92,68.91],[22,68.52],[22.85,68.37],[23.1,68.26],[23.18,68.14],[23.32,68.13],[23.64,67.95],[23.5,67.87],[23.54,67.61],[23.46,67.46],[23.73,67.42],[23.78,67.33],[23.63,67.23],[23.64,67.13],[23.99,66.81],[23.87,66.58],[23.7,66.48],[23.7,66.25],[24,66.06],[24.15,65.81],[23.89,65.78],[23.69,65.83],[23.1,65.74],[22.75,65.87],[22.54,65.8],[22.4,65.86],[22.29,65.75],[22.25,65.6],[22.09,65.61],[22.15,65.55],[21.92,65.53],[21.95,65.47],[21.88,65.42],[21.57,65.41],[21.52,65.36],[21.61,65.26],[21.41,65.32],[21.57,65.13],[21.14,64.81],[21.52,64.46],[21.47,64.38],[21.02,64.18],[20.76,63.87],[20.21,63.66],[19.91,63.61],[19.72,63.46],[19.5,63.51],[19.5,63.42],[19.36,63.48],[19.04,63.24],[18.82,63.26],[18.86,63.21],[18.61,63.18],[18.53,63.06],[18.31,63],[18.5,62.99],[18.46,62.9],[18.17,62.79],[17.88,62.87],[17.97,62.72],[17.9,62.66],[18.04,62.6],[17.65,62.45],[17.41,62.51],[17.38,62.46],[17.43,62.34],[17.63,62.23],[17.51,62.17],[17.38,61.87],[17.47,61.68],[17.2,61.72],[17.22,61.66],[17.13,61.57],[17.14,61.38],[17.2,61.31],[17.16,61.28],[17.2,60.95],[17.28,60.81],[17.25,60.7],[17.36,60.64],[17.56,60.64],[17.66,60.54],[17.96,60.59],[18.16,60.41],[18.56,60.25],[18.53,60.15],[18.79,60.08],[18.99,59.83],[18.97,59.76],[18.58,59.57],[17.97,59.36],[18.13,59.32],[18.56,59.39],[18.62,59.33],[18.42,59.29],[18.29,59.11],[17.76,58.97],[16.98,58.65],[16.21,58.64],[16.79,58.59],[16.93,58.49],[16.65,58.43],[16.77,58.21],[16.7,58.16],[16.7,57.92],[16.6,57.91],[16.55,57.81],[16.65,57.5],[16.48,57.26],[16.53,57.07],[16.35,56.71],[15.92,56.17],[15.83,56.13],[15.63,56.19],[14.72,56.13],[14.75,56.03],[14.56,56.05],[14.21,55.83],[14.2,55.73],[14.34,55.53],[14.18,55.4],[13.81,55.43],[13.32,55.35],[12.89,55.41],[12.94,55.48],[12.97,55.75],[12.47,56.29],[12.71,56.23],[12.8,56.26],[12.66,56.44],[12.86,56.45],[12.92,56.52],[12.88,56.62],[12.72,56.66],[12.42,56.91],[12.15,57.23],[12.05,57.45],[11.96,57.43],[11.88,57.68],[11.73,57.72],[11.7,57.97],[11.55,58],[11.45,58.12],[11.43,58.34],[11.25,58.37],[11.21,58.87],[11.15,58.99],[11.19,59.08],[11.39,59.04]]]},{id:"752",name:"Sweden",rings:[[[19.16,57.92],[19.14,57.86],[19.04,57.91],[19.14,57.98],[19.33,57.96],[19.16,57.92]]]},{id:"752",name:"Sweden",rings:[[[18.42,59.03],[18.35,59.02],[18.38,59.07],[18.48,59.1],[18.42,59.03]]]},{id:"752",name:"Sweden",rings:[[[18.6,59.47],[18.57,59.44],[18.55,59.48],[18.57,59.53],[18.7,59.54],[18.6,59.47]]]},{id:"724",name:"Spain",rings:[[[1.59,38.67],[1.41,38.67],[1.4,38.71],[1.43,38.77],[1.59,38.67]]]},{id:"724",name:"Spain",rings:[[[3.14,39.79],[3.45,39.76],[3.46,39.7],[3.25,39.39],[3.07,39.3],[2.8,39.39],[2.7,39.54],[2.5,39.48],[2.37,39.57],[2.9,39.91],[3.2,39.96],[3.14,39.79]]]},{id:"724",name:"Spain",rings:[[[4.29,39.84],[3.87,39.96],[3.85,40.06],[4.22,40.03],[4.32,39.9],[4.29,39.84]]]},{id:"724",name:"Spain",rings:[[[1.45,38.92],[1.41,38.86],[1.22,38.9],[1.35,39.08],[1.56,39.12],[1.61,39.09],[1.63,39.04],[1.45,38.92]]]},{id:"724",name:"Spain",rings:[[[-1.79,43.41],[-1.76,43.32],[-1.41,43.24],[-1.48,43.07],[-1.43,43.04],[-1.3,43.1],[-1.18,43.02],[-0.76,42.94],[-0.59,42.8],[-0.3,42.83],[-0.04,42.69],[0.63,42.69],[0.7,42.85],[1.35,42.69],[1.43,42.6],[1.45,42.44],[1.7,42.5],[1.99,42.36],[2.2,42.42],[2.65,42.34],[2.67,42.39],[2.89,42.46],[3.21,42.43],[3.31,42.29],[3.17,42.26],[3.15,42.16],[3.24,42.08],[3.25,41.94],[3,41.77],[2.31,41.47],[2.08,41.29],[1.03,41.06],[0.71,40.82],[0.89,40.72],[0.6,40.61],[0.04,40.01],[-0.33,39.52],[-0.2,39.06],[-0.03,38.89],[0.16,38.82],[0.2,38.76],[-0.52,38.32],[-0.82,37.77],[-0.82,37.71],[-0.72,37.63],[-0.82,37.58],[-1.33,37.56],[-1.64,37.39],[-2.11,36.78],[-2.19,36.74],[-2.45,36.83],[-2.79,36.72],[-3.15,36.76],[-3.43,36.71],[-3.83,36.76],[-4.37,36.72],[-4.67,36.51],[-4.93,36.5],[-5.17,36.42],[-5.36,36.14],[-5.45,36.15],[-5.46,36.07],[-5.63,36.03],[-6.04,36.19],[-6.23,36.43],[-6.27,36.6],[-6.38,36.64],[-6.41,36.73],[-6.22,36.91],[-6.32,36.91],[-6.4,36.83],[-6.49,36.95],[-6.89,37.19],[-6.86,37.28],[-6.98,37.2],[-7.41,37.18],[-7.5,37.59],[-7.44,37.73],[-7.18,38.01],[-7.02,38.05],[-6.96,38.19],[-7.1,38.18],[-7.34,38.46],[-7.28,38.72],[-7.05,38.91],[-7,39.06],[-7.17,39.14],[-7.34,39.47],[-7.54,39.66],[-7.12,39.68],[-6.98,39.8],[-6.9,40.02],[-7.03,40.17],[-6.81,40.34],[-6.85,40.44],[-6.83,40.78],[-6.93,41.01],[-6.21,41.53],[-6.31,41.64],[-6.54,41.67],[-6.56,41.87],[-6.62,41.94],[-7.15,41.98],[-7.21,41.9],[-7.4,41.83],[-7.92,41.88],[-8.15,41.81],[-8.22,41.9],[-8.14,42.04],[-8.27,42.14],[-8.85,41.93],[-8.89,42.11],[-8.69,42.27],[-8.81,42.28],[-8.73,42.41],[-8.81,42.47],[-8.81,42.64],[-9.03,42.59],[-8.93,42.8],[-9.04,42.81],[-9.24,42.98],[-9.18,43.17],[-8.87,43.33],[-8.54,43.34],[-8.25,43.44],[-8.26,43.58],[-7.7,43.77],[-7.5,43.74],[-7.26,43.6],[-7.06,43.55],[-5.85,43.65],[-4.52,43.42],[-3.61,43.52],[-3.04,43.37],[-2.87,43.45],[-2.34,43.33],[-1.79,43.41]]]},{id:"703",name:"Slovakia",rings:[[[22.54,49.07],[22.3,48.69],[22.14,48.57],[22.11,48.39],[21.72,48.35],[21.45,48.55],[21.07,48.51],[20.49,48.53],[20.33,48.3],[19.9,48.13],[19.63,48.22],[19.47,48.11],[18.79,48],[18.73,47.79],[17.76,47.77],[17.63,47.81],[17.32,47.99],[17.09,48.04],[16.86,48.39],[16.99,48.68],[17.13,48.84],[17.48,48.83],[17.76,48.89],[18.08,49.07],[18.16,49.26],[18.6,49.49],[18.94,49.5],[18.97,49.4],[19.15,49.4],[19.25,49.51],[19.44,49.6],[19.63,49.41],[19.77,49.37],[19.76,49.2],[19.8,49.19],[20.06,49.18],[20.16,49.32],[20.36,49.38],[20.62,49.39],[20.95,49.32],[21.08,49.42],[21.35,49.43],[21.89,49.34],[22.02,49.21],[22.54,49.07]]]},{id:"705",name:"Slovenia",rings:[[[16.52,46.5],[16.32,46.53],[16.24,46.48],[16.23,46.37],[16.07,46.37],[15.93,46.28],[15.64,46.2],[15.59,46.14],[15.67,46.05],[15.65,45.86],[15.28,45.73],[15.36,45.65],[15.28,45.58],[15.34,45.47],[15.24,45.44],[14.79,45.48],[14.57,45.66],[14.37,45.48],[13.99,45.51],[13.88,45.43],[13.61,45.48],[13.58,45.52],[13.88,45.61],[13.72,45.76],[13.58,45.81],[13.6,45.98],[13.49,45.99],[13.63,46.18],[13.38,46.26],[13.7,46.52],[14.55,46.4],[14.89,46.61],[15.44,46.63],[15.76,46.71],[15.96,46.68],[15.98,46.8],[16.09,46.86],[16.28,46.86],[16.38,46.64],[16.52,46.5]]]},{id:"688",name:"Serbia",rings:[[[22.7,44.24],[22.63,44.19],[22.6,44.08],[22.42,44.01],[22.37,43.78],[22.56,43.45],[22.98,43.19],[22.94,43.1],[22.71,42.88],[22.47,42.84],[22.44,42.63],[22.53,42.48],[22.42,42.33],[22.24,42.36],[21.56,42.25],[21.52,42.33],[21.61,42.39],[21.75,42.67],[21.39,42.75],[21.4,42.83],[21.06,43.09],[20.85,43.17],[20.8,43.26],[20.62,43.2],[20.66,43.1],[20.62,43.03],[20.48,42.95],[20.47,42.86],[20.35,42.83],[20.27,42.94],[19.61,43.17],[19.22,43.45],[19.19,43.52],[19.25,43.58],[19.45,43.56],[19.5,43.64],[19.24,43.96],[19.55,43.99],[19.58,44.04],[19.12,44.36],[19.15,44.53],[19.29,44.7],[19.35,44.88],[19,44.9],[19.09,44.93],[19.06,45.14],[19.14,45.2],[19.39,45.17],[19.4,45.21],[19.01,45.4],[19.06,45.52],[18.92,45.6],[18.95,45.66],[18.84,45.84],[18.91,45.93],[19.07,46.01],[19.28,46],[19.53,46.16],[20.21,46.13],[20.71,45.74],[20.77,45.75],[20.77,45.48],[21.02,45.32],[21.49,45.15],[21.35,45.01],[21.53,44.9],[21.36,44.83],[21.91,44.67],[22.09,44.54],[22.5,44.71],[22.64,44.65],[22.74,44.57],[22.55,44.54],[22.49,44.44],[22.7,44.24]]]},{id:"674",name:"San Marino",rings:[[[12.49,43.9],[12.4,43.94],[12.5,43.99],[12.49,43.9]]]},{id:"643",name:"Russia",rings:[[[62,53.98],[61.93,53.95],[61.33,54.05],[61.23,54.02],[61.14,53.96],[61.11,53.75],[60.98,53.62],[61.25,53.55],[61.52,53.55],[61.5,53.49],[61.23,53.45],[61.16,53.34],[61.2,53.29],[61.66,53.23],[62,53.11],[62,52.95],[61.05,52.97],[60.77,52.68],[60.99,52.34],[60.67,52.15],[60.42,52.13],[60.03,51.93],[60.39,51.77],[60.46,51.65],[61.36,51.44],[61.56,51.32],[61.58,51.23],[61.39,50.86],[60.94,50.7],[60.42,50.68],[60.29,50.7],[60.06,50.85],[59.96,50.8],[59.81,50.58],[59.52,50.49],[59.52,50.58],[59.45,50.62],[58.88,50.69],[58.36,51.06],[57.84,51.09],[57.65,50.92],[57.44,50.89],[57.18,51.04],[57.01,51.07],[56.62,50.98],[56.49,51.02],[56.14,50.84],[56.05,50.71],[55.69,50.58],[55.36,50.67],[54.64,51.01],[54.55,50.95],[54.65,50.66],[54.56,50.54],[54.47,50.58],[54.42,50.78],[54.14,51.04],[53.34,51.48],[52.57,51.48],[52.33,51.68],[52.22,51.71],[52.01,51.67],[51.61,51.48],[51.35,51.47],[51.27,51.59],[51.16,51.65],[50.79,51.73],[50.25,51.29],[49.82,51.13],[49.5,51.08],[49.32,50.85],[48.81,50.6],[48.62,50.61],[48.84,50.01],[48.76,49.93],[48.43,49.83],[48.22,49.93],[47.71,50.38],[47.5,50.4],[47.37,50.32],[47.3,50.22],[47.3,50.06],[46.99,49.85],[46.89,49.7],[46.8,49.37],[47.03,49.15],[46.7,48.8],[46.61,48.57],[46.66,48.41],[47.07,48.23],[47.12,48.13],[47.09,47.95],[47.29,47.74],[47.48,47.8],[48.17,47.71],[48.6,47.26],[48.96,46.77],[48.88,46.71],[48.56,46.76],[48.5,46.7],[48.54,46.61],[49.23,46.34],[49.25,46.29],[49.12,46.28],[49.08,46.19],[48.69,46.09],[48.73,45.9],[48.49,45.94],[48.16,45.74],[47.83,45.66],[47.7,45.69],[47.63,45.58],[47.46,45.68],[47.53,45.6],[47.52,45.49],[47.41,45.42],[47.39,45.29],[47.08,44.82],[47,44.88],[46.96,44.78],[46.76,44.66],[46.72,44.56],[46.75,44.42],[47.02,44.34],[47.31,44.1],[47.46,43.56],[47.56,43.83],[47.65,43.89],[47.51,43.51],[47.46,43.03],[47.63,42.9],[47.73,42.68],[48.08,42.35],[48.38,41.95],[48.57,41.85],[48.39,41.6],[48.06,41.46],[47.86,41.21],[47.59,41.22],[47.26,41.32],[47.21,41.46],[46.75,41.81],[46.57,41.8],[46.54,41.87],[45.95,42.04],[45.64,42.2],[45.73,42.48],[45.65,42.52],[45.34,42.53],[45.16,42.68],[44.87,42.76],[44.77,42.62],[44.65,42.73],[44.51,42.75],[43.96,42.57],[43.83,42.57],[43.74,42.62],[43.78,42.75],[43.09,42.99],[42.99,43.09],[42.76,43.17],[42.57,43.16],[42.42,43.22],[41.58,43.22],[41.36,43.33],[41.08,43.37],[40.65,43.53],[40.15,43.57],[39.98,43.42],[38.72,44.29],[38.18,44.42],[37.85,44.7],[37.7,44.66],[37.5,44.7],[37.2,44.97],[36.65,45.13],[36.62,45.19],[36.94,45.29],[36.72,45.37],[36.79,45.41],[36.87,45.43],[37.22,45.27],[37.65,45.38],[37.67,45.49],[37.61,45.5],[37.61,45.57],[37.84,45.8],[37.93,46],[38.01,46.05],[38.08,45.94],[38.18,46.09],[38.49,46.09],[38.08,46.39],[37.91,46.41],[37.77,46.64],[37.97,46.62],[38.23,46.7],[38.5,46.66],[38.44,46.81],[39.27,47.04],[39.29,47.11],[39.2,47.27],[39.02,47.27],[38.93,47.18],[38.67,47.14],[38.55,47.15],[38.76,47.26],[38.58,47.24],[38.21,47.09],[38.2,47.17],[38.28,47.28],[38.2,47.32],[38.29,47.56],[38.64,47.67],[38.82,47.84],[39.74,47.84],[39.78,47.89],[39.77,47.96],[39.96,48.27],[39.85,48.3],[39.89,48.36],[39.84,48.54],[39.65,48.59],[39.7,48.74],[39.79,48.81],[40.01,48.82],[39.75,48.91],[39.68,49.01],[39.89,49.06],[40.11,49.25],[40.08,49.58],[39.78,49.57],[39.46,49.73],[39.3,49.74],[39.17,49.86],[38.92,49.82],[38.26,50.05],[38.18,50.03],[38.15,49.94],[38.05,49.92],[37.7,50.11],[37.58,50.29],[37.42,50.41],[36.76,50.29],[36.62,50.21],[36.5,50.28],[36.3,50.28],[36.12,50.41],[35.89,50.44],[35.67,50.35],[35.59,50.37],[35.41,50.54],[35.44,50.73],[35.31,51.04],[35.16,51.06],[35.06,51.2],[34.76,51.17],[34.21,51.26],[34.28,51.31],[34.12,51.68],[34.38,51.72],[34.4,51.78],[34.11,51.98],[33.92,52.25],[33.73,52.34],[33.15,52.34],[32.81,52.25],[32.43,52.31],[32.36,52.27],[32.28,52.11],[32.12,52.05],[31.76,52.1],[31.58,52.31],[31.62,52.55],[31.53,52.63],[31.56,52.76],[31.26,53.02],[31.42,53.2],[31.67,53.2],[31.85,53.11],[32.14,53.09],[32.7,53.34],[32.69,53.45],[32.47,53.55],[32.42,53.62],[32.45,53.69],[32.2,53.78],[31.75,53.81],[31.83,54.03],[31.4,54.2],[31.19,54.45],[31.07,54.49],[31.15,54.63],[30.8,54.78],[30.83,54.92],[30.98,55.05],[30.96,55.14],[30.81,55.28],[30.9,55.4],[30.88,55.6],[30.23,55.84],[29.94,55.85],[29.48,55.68],[29.35,55.78],[29.37,55.94],[29.09,56.02],[28.79,55.94],[28.56,56.09],[28.28,56.06],[28.15,56.14],[28.2,56.26],[28.1,56.55],[28.01,56.6],[27.85,56.85],[27.64,56.85],[27.83,57.19],[27.83,57.29],[27.54,57.43],[27.51,57.51],[27.35,57.53],[27.4,57.67],[27.54,57.8],[27.78,57.86],[27.67,57.93],[27.5,58.22],[27.53,58.43],[27.43,58.79],[27.76,59.05],[27.9,59.28],[28.15,59.37],[28.01,59.48],[28.06,59.55],[28.01,59.72],[28.06,59.78],[28.33,59.69],[28.52,59.85],[28.95,59.83],[29.15,60],[30.12,59.87],[30.17,59.96],[29.72,60.19],[29.07,60.19],[28.64,60.38],[28.49,60.54],[28.62,60.49],[28.65,60.61],[28.51,60.68],[28.18,60.57],[27.8,60.54],[28.41,60.9],[29.25,61.29],[30.94,62.32],[31.29,62.57],[31.53,62.89],[31.18,63.21],[30.42,63.5],[29.99,63.73],[30.21,63.8],[30.53,64.08],[30.49,64.24],[30.11,64.37],[29.99,64.52],[30.12,64.64],[30.11,64.73],[29.78,64.8],[29.6,64.97],[29.62,65.04],[29.83,65.15],[29.81,65.2],[29.61,65.25],[29.72,65.34],[29.73,65.47],[29.82,65.57],[29.72,65.63],[30.09,65.68],[30.09,65.79],[29.9,66.09],[29.06,66.89],[29.09,66.97],[29.24,67.1],[29.94,67.55],[29.99,67.67],[29.34,68.06],[28.69,68.19],[28.47,68.49],[28.78,68.81],[28.41,68.9],[29.12,69.05],[29.39,69.3],[29.99,69.39],[30.16,69.5],[30.16,69.63],[30.62,69.53],[30.86,69.54],[30.92,69.61],[30.87,69.78],[31.55,69.7],[31.79,69.82],[32,69.81],[31.98,69.95],[33.01,69.72],[33,69.63],[32.91,69.6],[32.18,69.67],[32.09,69.63],[32.33,69.55],[32.38,69.48],[33,69.47],[32.94,69.38],[32.98,69.37],[33.45,69.43],[33.33,69.15],[33.14,69.07],[33.44,69.13],[33.68,69.31],[34.23,69.31],[35.01,69.22],[35.29,69.28],[35.86,69.19],[37.73,68.69],[38.43,68.36],[38.83,68.32],[39.57,68.07],[39.82,68.06],[39.75,68.16],[39.81,68.15],[40.38,67.83],[40.97,67.71],[41.06,67.44],[41.13,67.39],[41.13,67.27],[41.36,67.21],[41.28,66.91],[41.19,66.83],[40.52,66.45],[40.1,66.3],[39.29,66.13],[38.66,66.07],[37.9,66.1],[36.98,66.27],[35.51,66.4],[34.82,66.61],[34.48,66.55],[34.4,66.61],[34.45,66.65],[33.15,66.84],[32.85,67.02],[32.93,67.09],[31.89,67.16],[32.5,67],[32.46,66.92],[32.86,66.72],[33.18,66.68],[33.22,66.53],[33.65,66.44],[33.36,66.33],[34.11,66.23],[34.4,66.13],[34.69,65.95],[34.79,65.86],[34.78,65.77],[34.62,65.51],[34.41,65.4],[34.8,64.99],[34.83,64.8],[34.95,64.76],[34.86,64.71],[34.87,64.56],[35.03,64.44],[35.43,64.35],[35.65,64.38],[36.15,64.19],[36.37,64],[37.44,63.81],[37.97,63.95],[38.07,64.03],[38.06,64.09],[37.95,64.32],[37.74,64.4],[37.18,64.41],[36.58,64.79],[36.53,64.94],[36.79,64.99],[36.88,65.17],[37.14,65.19],[37.53,65.11],[38.01,64.88],[38.41,64.86],[39.57,64.57],[39.76,64.58],[39.85,64.69],[40.06,64.77],[40.44,64.78],[40.28,65],[39.8,65.35],[39.75,65.45],[39.82,65.6],[40.33,65.75],[40.69,65.96],[41.47,66.12],[42.21,66.52],[42.6,66.42],[43.23,66.41],[43.65,66.25],[43.54,66.12],[43.84,66.14],[44.11,66.01],[44.15,66.11],[44.1,66.23],[44.49,66.67],[44.43,66.94],[44.29,67.1],[43.85,67.19],[43.78,67.26],[44.22,68],[44.2,68.25],[44.17,68.33],[43.33,68.67],[44.05,68.55],[45.08,68.58],[45.89,68.48],[46.68,67.97],[46.69,67.85],[45.53,67.76],[44.94,67.48],[44.9,67.41],[44.94,67.35],[45.56,67.19],[45.88,66.89],[46.49,66.8],[47.66,66.98],[47.77,67.28],[47.91,67.45],[47.88,67.58],[48.83,67.68],[48.88,67.73],[48.7,67.87],[48.75,67.9],[49.16,67.87],[50.84,68.35],[51.99,68.54],[52.29,68.46],[52.18,68.37],[52.4,68.35],[52.72,68.48],[52.55,68.59],[52.34,68.61],[53.8,69],[54.49,68.99],[53.8,68.91],[53.97,68.84],[53.76,68.63],[53.92,68.54],[53.93,68.44],[53.83,68.38],[53.34,68.34],[53.26,68.27],[53.97,68.23],[54.48,68.3],[54.72,68.18],[54.86,68.2],[54.92,68.37],[55.42,68.57],[56.04,68.65],[57.13,68.55],[58.17,68.89],[58.24,68.83],[58.35,68.92],[59.06,69.01],[59.11,68.9],[59.37,68.74],[59.11,68.62],[59.1,68.44],[59.73,68.35],[59.92,68.47],[59.87,68.61],[59.9,68.71],[60.49,68.73],[60.93,68.99],[60.86,69.15],[60.67,69.11],[60.17,69.59],[60.91,69.85],[62,69.76],[62,69],[-32,69],[-32,65.05],[62,65.05],[62,53.98]]]},{id:"643",name:"Russia",rings:[[[35.81,65.18],[35.86,65.08],[35.84,65],[35.78,64.98],[35.53,65.15],[35.81,65.18]]]},{id:"643",name:"Russia",rings:[[[42.71,66.7],[42.46,66.77],[42.63,66.78],[42.71,66.7]]]},{id:"643",name:"Russia",rings:[[[20.96,55.28],[20.59,54.98],[20.89,54.91],[21.19,54.93],[21.23,55.26],[21.39,55.27],[22.07,55.06],[22.57,55.06],[22.63,54.97],[22.83,54.87],[22.69,54.56],[22.76,54.36],[19.6,54.46],[19.86,54.63],[19.97,54.92],[20.52,55],[20.9,55.29],[20.96,55.28]]]},{id:"643",name:"Russia",rings:[[[33.59,46.1],[33.66,46.22],[33.81,46.21],[34.03,46.11],[34.35,46.06],[34.45,45.97],[34.69,45.98],[34.79,45.89],[34.8,45.79],[35,45.73],[35.26,45.45],[35.46,45.32],[35.83,45.4],[36.01,45.37],[36.17,45.45],[36.57,45.39],[36.39,45.07],[35.87,45],[35.68,45.1],[35.47,45.1],[35.09,44.8],[34.72,44.81],[34.47,44.72],[34.08,44.42],[33.76,44.4],[33.45,44.55],[33.61,44.91],[33.55,45.1],[33.39,45.19],[33.19,45.19],[32.92,45.35],[32.61,45.33],[32.51,45.4],[33.14,45.75],[33.67,45.95],[33.59,46.1]]]},{id:"642",name:"Romania",rings:[[[28.21,45.45],[28.32,45.35],[28.76,45.23],[28.78,45.31],[28.9,45.29],[29.4,45.42],[29.71,45.26],[29.56,44.84],[29.05,44.76],[29.05,44.92],[29.09,44.98],[28.98,44.99],[28.89,44.92],[28.92,44.81],[28.81,44.57],[28.89,44.57],[28.64,44.3],[28.66,43.98],[28.59,43.74],[28.22,43.77],[28.05,43.82],[27.88,43.99],[27.74,43.96],[27.43,44.02],[27.09,44.17],[26.22,44.01],[25.82,43.77],[25.5,43.67],[23.23,43.87],[22.92,43.83],[22.87,43.95],[23.03,44.08],[22.7,44.24],[22.49,44.44],[22.55,44.54],[22.7,44.56],[22.72,44.61],[22.5,44.71],[22.09,44.54],[21.91,44.67],[21.36,44.83],[21.53,44.9],[21.35,45.01],[21.49,45.15],[21.02,45.32],[20.77,45.48],[20.77,45.75],[20.71,45.74],[20.24,46.11],[20.51,46.17],[20.61,46.13],[20.76,46.25],[21.12,46.28],[21.26,46.41],[21.32,46.61],[21.5,46.7],[21.48,46.75],[21.66,47.04],[21.99,47.4],[22,47.5],[22.29,47.73],[22.61,47.77],[23.14,48.09],[23.41,47.99],[24.18,47.91],[24.58,47.93],[24.89,47.72],[25.46,47.91],[26.16,47.99],[26.31,48.2],[26.71,48.26],[26.98,48.16],[27.61,47.34],[28.07,46.98],[28.24,46.64],[28.24,46.45],[28.1,45.97],[28.16,45.65],[28.07,45.6],[28.21,45.45]]]},{id:"620",name:"Portugal",rings:[[[-8.78,41.94],[-8.59,42.05],[-8.27,42.14],[-8.14,42.04],[-8.22,41.9],[-8.15,41.81],[-7.92,41.88],[-7.4,41.83],[-7.21,41.9],[-7.15,41.98],[-6.62,41.94],[-6.56,41.87],[-6.54,41.67],[-6.31,41.64],[-6.21,41.53],[-6.93,41.01],[-6.83,40.78],[-6.85,40.44],[-6.81,40.34],[-7.03,40.17],[-6.9,40.02],[-6.98,39.8],[-7.12,39.68],[-7.54,39.66],[-7.34,39.47],[-7.17,39.14],[-7,39.06],[-7.05,38.91],[-7.28,38.72],[-7.34,38.46],[-7.1,38.18],[-6.96,38.19],[-7.02,38.05],[-7.18,38.01],[-7.44,37.73],[-7.5,37.59],[-7.41,37.18],[-7.84,37.01],[-8.6,37.12],[-9,37.03],[-8.81,37.43],[-8.79,37.73],[-8.88,37.96],[-8.81,38.3],[-8.88,38.45],[-8.67,38.42],[-8.8,38.52],[-9.21,38.45],[-9.25,38.66],[-9.02,38.75],[-8.94,39],[-8.79,39.08],[-8.96,39.02],[-9.14,38.74],[-9.36,38.7],[-9.47,38.73],[-9.35,39.25],[-9.38,39.34],[-9.15,39.54],[-8.84,40.12],[-8.87,40.26],[-8.69,40.75],[-8.66,41.09],[-8.81,41.65],[-8.76,41.7],[-8.85,41.7],[-8.89,41.77],[-8.78,41.94]]]},{id:"616",name:"Poland",rings:[[[23.6,51.52],[23.68,51.4],[23.66,51.31],[24.1,50.87],[23.98,50.79],[24.09,50.62],[24.09,50.53],[23.97,50.41],[23.71,50.38],[23.41,50.17],[22.65,49.54],[22.73,49.29],[22.71,49.17],[22.85,49.08],[22.81,49.02],[22.02,49.21],[21.89,49.34],[21.64,49.41],[21.08,49.42],[21,49.34],[20.87,49.32],[20.62,49.39],[20.36,49.38],[20.16,49.32],[20.06,49.18],[19.76,49.2],[19.77,49.37],[19.63,49.41],[19.44,49.6],[19.25,49.51],[19.15,49.4],[18.97,49.4],[18.94,49.5],[18.83,49.51],[18.81,49.61],[18.6,49.76],[18.56,49.88],[18.3,49.91],[18.03,50.04],[17.88,49.97],[17.63,50.12],[17.59,50.16],[17.74,50.23],[17.7,50.31],[17.42,50.25],[17.15,50.38],[16.88,50.43],[16.99,50.24],[16.64,50.1],[16.21,50.42],[16.42,50.57],[16.28,50.66],[16.01,50.61],[15.73,50.74],[15.36,50.81],[15.26,50.96],[14.99,51.01],[14.98,50.89],[14.81,50.86],[15.02,51.25],[14.91,51.46],[14.73,51.52],[14.74,51.63],[14.6,51.83],[14.75,52.08],[14.68,52.25],[14.55,52.36],[14.62,52.53],[14.13,52.88],[14.37,53.1],[14.41,53.22],[14.26,53.73],[14.58,53.64],[14.56,53.82],[14.21,53.87],[14.2,53.92],[16.19,54.29],[16.56,54.55],[16.89,54.6],[17.26,54.73],[18.08,54.84],[18.32,54.84],[18.76,54.68],[18.8,54.63],[18.44,54.75],[18.59,54.51],[18.67,54.43],[18.98,54.35],[19.41,54.39],[19.6,54.46],[22.17,54.36],[22.89,54.39],[23.45,54.14],[23.6,53.6],[23.89,53.03],[23.9,52.7],[23.41,52.52],[23.18,52.29],[23.65,52.04],[23.63,51.81],[23.55,51.71],[23.6,51.52]]]},{id:"578",name:"Norway",rings:[[[20.62,69.04],[20.12,69.02],[20.35,68.85],[20.24,68.67],[19.97,68.54],[20.24,68.48],[19.97,68.36],[18.3,68.56],[18.16,68.53],[18.18,68.2],[17.92,67.97],[17.33,68.1],[16.79,67.9],[16.59,67.63],[16.19,67.51],[16.13,67.43],[16.44,67.15],[16.4,67.06],[15.42,66.49],[15.49,66.31],[15.04,66.17],[14.54,66.13],[14.64,65.79],[14.55,65.65],[14.48,65.3],[13.65,64.58],[14.08,64.46],[14.15,64.26],[14.14,64.17],[14.06,64.1],[13.96,64.01],[13.2,64.07],[12.79,64],[12.17,63.6],[12.21,63.49],[12,63.29],[12.22,63],[12.11,62.92],[12.12,62.59],[12.3,62.28],[12.16,61.72],[12.59,61.54],[12.88,61.35],[12.71,61.06],[12.3,61],[12.31,60.89],[12.59,60.45],[12.49,60.11],[12.17,59.91],[11.93,59.86],[11.84,59.7],[11.68,59.59],[11.8,59.29],[11.64,58.93],[11.47,58.91],[11.37,59.1],[10.83,59.18],[10.64,59.39],[10.6,59.76],[10.54,59.7],[10.57,59.59],[10.4,59.52],[10.46,59.38],[10.43,59.28],[10.18,59.01],[9.84,58.96],[9.64,59.12],[9.56,59.11],[9.7,59.01],[9.66,58.97],[9.31,58.86],[9.39,58.81],[9.32,58.75],[8.17,58.14],[7.46,58.02],[7,58.02],[6.9,58.07],[6.88,58.15],[6.8,58.16],[6.73,58.07],[6.59,58.1],[6.55,58.12],[6.69,58.22],[6.66,58.26],[6.39,58.27],[6.05,58.38],[5.71,58.52],[5.52,58.73],[5.56,58.97],[5.61,59.01],[6.1,58.87],[6.36,59],[6.1,58.95],[5.89,59.1],[5.97,59.19],[5.95,59.3],[6.4,59.56],[5.56,59.29],[5.36,59.17],[5.17,59.16],[5.13,59.23],[5.19,59.45],[5.3,59.64],[5.47,59.71],[5.77,59.66],[5.87,59.73],[6.22,59.82],[5.83,59.8],[5.73,59.86],[6.07,60.08],[6.14,60.23],[6.52,60.41],[6.57,60.36],[6.53,60.15],[6.72,60.42],[7,60.51],[6.15,60.35],[5.91,60.15],[5.88,60.07],[5.7,60.01],[5.5,59.83],[5.15,59.64],[5.12,59.83],[5.22,59.98],[5.18,60.05],[5.21,60.09],[5.5,60.07],[5.69,60.12],[5.29,60.21],[5.14,60.44],[5.65,60.69],[5.24,60.57],[5.12,60.64],[5.05,60.71],[5.01,61.04],[5.99,61.12],[6.42,61.08],[6.78,61.14],[6.97,61.06],[7.04,60.95],[7.08,60.97],[7.04,61.09],[7.61,61.21],[7.4,61.22],[7.35,61.3],[7.44,61.43],[7.33,61.37],[7.28,61.18],[7.17,61.17],[6.66,61.21],[6.6,61.29],[6.49,61.15],[6.38,61.13],[6.08,61.17],[5.33,61.11],[5.11,61.19],[5.02,61.25],[5,61.43],[5.34,61.48],[4.93,61.71],[4.93,61.88],[5.47,61.9],[6.02,61.79],[6.73,61.87],[6.13,61.85],[5.27,61.94],[5.1,62.03],[5.14,62.16],[5.36,62.15],[5.54,62.31],[5.91,62.42],[6.08,62.35],[6.58,62.41],[6.69,62.47],[6.14,62.41],[6.12,62.45],[6.35,62.61],[6.96,62.63],[7.49,62.54],[7.69,62.59],[7.53,62.61],[7.54,62.67],[8.09,62.73],[8.04,62.77],[6.73,62.72],[6.94,62.93],[7.57,63.1],[8.1,63.09],[8.21,62.99],[8.62,62.85],[8.16,63.16],[8.27,63.29],[8.63,63.34],[8.6,63.43],[8.39,63.44],[8.36,63.5],[8.67,63.62],[9.14,63.59],[9.08,63.5],[9.16,63.46],[9.32,63.57],[9.7,63.63],[10.02,63.39],[10.19,63.46],[10.76,63.46],[10.67,63.56],[10.73,63.63],[11.37,63.81],[11.18,63.9],[11.43,64.02],[11.31,64.05],[11.08,63.99],[10.91,63.92],[11.05,63.85],[10.94,63.77],[10.06,63.51],[9.92,63.52],[9.77,63.7],[9.6,63.68],[9.61,63.8],[9.87,63.92],[10.01,64.08],[10.24,64.18],[10.56,64.42],[11.53,64.74],[11.63,64.81],[11.56,64.82],[11.3,64.76],[11.35,64.91],[11.49,64.98],[12.16,65.18],[12.31,65.09],[12.51,65.1],[12.74,65.21],[12.92,65.34],[12.42,65.18],[12.13,65.28],[12.12,65.36],[12.27,65.57],[12.63,65.81],[12.69,65.9],[13.03,65.96],[12.79,66.1],[13.67,66.18],[14.03,66.3],[13.12,66.23],[13.07,66.43],[13.11,66.54],[13.19,66.54],[13.21,66.64],[13.62,66.8],[13.96,66.8],[13.65,66.91],[13.88,66.97],[14.11,67.12],[15.42,67.2],[15.44,67.25],[15.3,67.26],[14.44,67.27],[14.75,67.5],[14.96,67.57],[15.41,67.47],[15.59,67.35],[15.58,67.44],[15.69,67.52],[15.49,67.52],[15.25,67.6],[15.22,67.66],[15.35,67.73],[15.31,67.77],[14.86,67.66],[14.78,67.68],[14.8,67.81],[15.13,67.97],[15.4,67.92],[15.62,67.95],[15.6,67.99],[15.36,68],[15.29,68.04],[15.32,68.07],[16.01,68.23],[16.07,68.2],[16.12,68.03],[16.31,67.88],[16.26,68],[16.39,68.09],[16.26,68.14],[16.17,68.28],[16.21,68.32],[16.39,68.39],[16.95,68.35],[17.55,68.43],[17.43,68.48],[16.58,68.47],[16.52,68.53],[16.65,68.63],[17.13,68.69],[17.39,68.8],[17.54,69],[17.7,69.1],[18.1,69.16],[18.08,69.32],[18.26,69.47],[18.48,69.36],[18.86,69.31],[18.92,69.33],[18.62,69.43],[18.61,69.49],[18.99,69.56],[19.04,69.66],[19.2,69.75],[19.69,69.81],[19.72,69.78],[19.64,69.42],[19.96,69.82],[20.32,69.95],[20.39,69.87],[20.34,69.62],[20.04,69.36],[20.11,69.34],[20.49,69.54],[20.74,69.52],[20.53,69.69],[20.55,69.85],[20.62,69.91],[21.16,69.89],[21.25,70],[21.43,70.01],[21.98,69.83],[21.89,70],[21.8,70.07],[21.4,70.18],[21.36,70.23],[21.78,70.23],[22.22,70.31],[22.32,70.27],[22.42,70.34],[22.69,70.37],[22.94,70.31],[23.05,70.1],[23.36,69.98],[23.4,70.02],[23.29,70.11],[23.38,70.25],[23.66,70.4],[24.04,70.49],[24.42,70.7],[24.27,70.77],[24.26,70.83],[24.66,71],[25.26,70.84],[25.44,70.91],[25.77,70.85],[25.78,70.82],[25.27,70.55],[25.15,70.32],[24.99,70.22],[24.98,70.14],[25.04,70.11],[25.21,70.14],[25.42,70.24],[25.47,70.34],[26.51,70.91],[26.66,70.94],[26.74,70.85],[26.56,70.67],[26.65,70.64],[26.58,70.41],[26.99,70.51],[27.18,70.74],[27.31,70.8],[27.55,70.8],[27.24,70.95],[27.6,71.09],[28.39,70.98],[28.38,70.87],[28.33,70.82],[27.9,70.68],[28.27,70.67],[28.2,70.58],[28.19,70.25],[28.61,70.76],[28.83,70.86],[29.1,70.86],[29.74,70.65],[30.07,70.7],[30.24,70.62],[30.21,70.54],[30.59,70.52],[30.93,70.4],[30.94,70.27],[30.26,70.12],[28.78,70.15],[28.81,70.09],[29.6,69.98],[29.65,69.94],[29.64,69.78],[29.79,69.73],[30.09,69.72],[30.24,69.86],[30.35,69.83],[30.43,69.72],[30.48,69.79],[30.87,69.78],[30.92,69.65],[30.9,69.56],[30.62,69.53],[30.16,69.63],[30.19,69.54],[30.09,69.43],[29.39,69.3],[29.17,69.07],[28.96,69.02],[28.83,69.12],[28.85,69.18],[29.33,69.47],[29.14,69.67],[28.41,69.82],[27.89,70.06],[27.75,70.06],[27.13,69.91],[26.53,69.91],[26.07,69.69],[25.77,69.28],[25.75,68.99],[25.58,68.89],[25.25,68.82],[25.09,68.64],[24.94,68.59],[24,68.8],[23.86,68.81],[23.71,68.71],[23.32,68.65],[22.41,68.72],[22.3,68.86],[21.59,69.27],[21.27,69.27],[21.07,69.21],[21.13,69.08],[21.07,69.04],[20.62,69.04]]]},{id:"578",name:"Norway",rings:[[[4.96,61.09],[4.8,61.08],[4.83,61.18],[4.92,61.2],[4.97,61.15],[4.96,61.09]]]},{id:"578",name:"Norway",rings:[[[5.09,60.31],[5.09,60.19],[4.96,60.24],[4.96,60.45],[5.09,60.31]]]},{id:"578",name:"Norway",rings:[[[29.96,69.8],[29.75,69.79],[29.84,69.91],[30.05,69.84],[29.96,69.8]]]},{id:"578",name:"Norway",rings:[[[11.97,65.63],[11.77,65.63],[11.87,65.71],[12,65.68],[11.97,65.63]]]},{id:"578",name:"Norway",rings:[[[8.47,63.67],[8.29,63.69],[8.73,63.8],[8.81,63.77],[8.79,63.7],[8.47,63.67]]]},{id:"578",name:"Norway",rings:[[[8.1,63.34],[7.89,63.35],[7.8,63.41],[8.07,63.47],[8.14,63.43],[8.1,63.34]]]},{id:"578",name:"Norway",rings:[[[23.44,70.82],[23.07,70.59],[22.83,70.54],[22.36,70.52],[21.99,70.66],[22.96,70.71],[23.2,70.82],[23.44,70.82]]]},{id:"578",name:"Norway",rings:[[[25.59,71.14],[26.15,71.04],[26.13,71],[26,70.98],[25.58,70.96],[25.31,71.05],[25.59,71.14]]]},{id:"578",name:"Norway",rings:[[[23.61,70.55],[23.64,70.46],[23.27,70.3],[23.1,70.3],[23.09,70.38],[22.92,70.39],[23.02,70.49],[23.25,70.5],[23.55,70.62],[23.61,70.55]]]},{id:"578",name:"Norway",rings:[[[24.02,70.57],[23.83,70.53],[23.67,70.6],[23.66,70.68],[23.78,70.75],[23.96,70.7],[24.08,70.65],[24.02,70.57]]]},{id:"578",name:"Norway",rings:[[[13.87,68.27],[14.12,68.25],[14.03,68.19],[13.49,68.05],[13.42,68.08],[13.39,68.02],[13.23,67.99],[13.2,68.09],[13.3,68.16],[13.43,68.16],[13.54,68.25],[13.87,68.27]]]},{id:"578",name:"Norway",rings:[[[12.97,67.87],[12.83,67.82],[12.96,68.02],[13.12,68.05],[13.1,67.96],[12.97,67.87]]]},{id:"578",name:"Norway",rings:[[[15.21,68.94],[15.4,68.78],[15.35,68.67],[15.22,68.62],[14.89,68.61],[14.74,68.68],[14.52,68.63],[14.37,68.71],[14.55,68.82],[14.8,68.79],[14.87,68.91],[15.04,68.89],[15.04,69],[15.21,68.94]]]},{id:"578",name:"Norway",rings:[[[19.77,70.22],[20.09,70.1],[19.78,70.08],[19.6,70.27],[19.77,70.22]]]},{id:"578",name:"Norway",rings:[[[20.78,70.09],[20.46,70.08],[20.41,70.15],[20.78,70.22],[20.82,70.2],[20.78,70.09]]]},{id:"578",name:"Norway",rings:[[[19.25,70.07],[19.34,70.01],[19.61,70.02],[19.59,69.97],[19.33,69.82],[19.01,69.76],[18.78,69.58],[18.28,69.54],[18.06,69.6],[18.23,69.64],[18.35,69.77],[18.68,69.78],[18.69,69.89],[18.88,70.01],[19.05,70.04],[19.06,70.17],[19.13,70.24],[19.21,70.25],[19.25,70.07]]]},{id:"578",name:"Norway",rings:[[[12.51,65.9],[12.43,65.9],[12.43,65.94],[12.55,66],[12.78,65.99],[12.51,65.9]]]},{id:"578",name:"Norway",rings:[[[12.42,66.04],[12.33,66.04],[12.46,66.19],[12.62,66.18],[12.58,66.07],[12.42,66.04]]]},{id:"578",name:"Norway",rings:[[[11.23,64.87],[10.74,64.87],[11.02,64.98],[11.13,64.98],[11.24,64.91],[11.23,64.87]]]},{id:"578",name:"Norway",rings:[[[17.5,69.6],[18.01,69.5],[18.08,69.4],[17.94,69.33],[17.95,69.2],[17.57,69.16],[17.49,69.2],[17.08,69.01],[16.81,69.07],[16.97,69.14],[17,69.36],[17.36,69.38],[17.37,69.44],[17.23,69.48],[17.45,69.53],[17.5,69.6]]]},{id:"578",name:"Norway",rings:[[[15.76,68.56],[16.06,68.68],[16.15,68.84],[16.33,68.88],[16.48,68.8],[16.55,68.72],[16.52,68.63],[16.19,68.54],[15.98,68.4],[15.76,68.41],[15.44,68.31],[15.28,68.37],[15.19,68.31],[14.93,68.31],[14.63,68.2],[14.26,68.19],[14.26,68.26],[14.59,68.4],[15.1,68.44],[15.41,68.62],[15.56,68.87],[15.44,68.92],[15.48,69.04],[15.96,69.3],[16.13,69.27],[16.12,69.22],[15.81,69.02],[15.91,68.91],[15.93,68.73],[15.76,68.56]]]},{id:"578",name:"Norway",rings:[[[-8.96,70.84],[-9.1,70.86],[-8.52,71.03],[-8.34,71.14],[-8,71.18],[-7.98,71.12],[-8,71.04],[-8.96,70.84]]]},{id:"528",name:"Netherlands",rings:[[[5.99,50.75],[5.75,50.76],[5.64,50.84],[5.75,50.95],[5.82,51.09],[5.8,51.15],[5.48,51.29],[5.21,51.28],[5.1,51.35],[5.03,51.47],[4.85,51.4],[4.76,51.49],[4.64,51.42],[4.5,51.47],[4.38,51.43],[4.37,51.36],[4.01,51.44],[3.82,51.41],[3.59,51.45],[3.45,51.54],[3.74,51.6],[4.14,51.46],[4.28,51.47],[4.01,51.6],[4.18,51.61],[3.95,51.81],[4.08,51.99],[4.48,52.31],[4.77,52.94],[4.89,52.91],[5.06,52.96],[5.36,53.1],[5.53,53.27],[5.87,53.38],[6.82,53.44],[6.97,53.33],[7.2,53.28],[7.19,53],[7.03,52.65],[6.75,52.63],[6.69,52.53],[6.75,52.46],[7,52.42],[7.02,52.27],[6.72,52.08],[6.8,51.98],[6.74,51.91],[6.36,51.82],[6.17,51.88],[5.95,51.8],[6.2,51.45],[6.08,51.22],[6.13,51.15],[5.86,51.03],[6.05,50.91],[5.99,50.75]]]},{id:"528",name:"Netherlands",rings:[[[4.22,51.39],[4.17,51.31],[3.9,51.21],[3.58,51.29],[3.43,51.25],[3.35,51.38],[4.22,51.39]]]},{id:"528",name:"Netherlands",rings:[[[4.89,53.07],[4.79,53],[4.71,53.04],[4.89,53.18],[4.89,53.07]]]},{id:"528",name:"Netherlands",rings:[[[3.95,51.74],[4.07,51.65],[3.95,51.63],[3.7,51.71],[3.95,51.74]]]},{id:"528",name:"Netherlands",rings:[[[6.73,53.58],[6.64,53.58],[6.76,53.63],[6.8,53.63],[6.73,53.58]]]},{id:"504",name:"Morocco",rings:[[[-2.22,35.1],[-2.13,34.97],[-1.79,34.75],[-1.85,34.61],[-1.73,34.47],[-1.79,34.37],[-1.71,34.18],[-1.72,33.78],[-1.63,33.57],[-1.68,33.32],[-1.45,32.79],[-1.06,32.47],[-1.24,32.34],[-1.23,32.11],[-2.45,32.13],[-2.86,32.08],[-2.93,32.04],[-3.02,31.83],[-3.44,31.71],[-3.77,31.69],[-3.85,31.62],[-3.79,31.36],[-3.83,31.2],[-3.62,31.07],[-3.67,30.96],[-3.99,30.91],[-4.32,30.7],[-4.97,30.47],[-5.18,30.17],[-5.45,29.96],[-6,29.83],[-6.48,29.82],[-6.52,29.66],[-6.64,29.57],[-7.16,29.61],[-7.49,29.39],[-7.68,29.35],[-8.66,28.72],[-8.69,27.66],[-8.82,27.66],[-8.75,27.19],[-8.79,27.12],[-9.41,27.09],[-9.82,26.85],[-10.03,26.91],[-10.25,26.86],[-10.76,27.02],[-11.39,26.88],[-11.32,26.75],[-11.34,26.63],[-11.64,26.3],[-11.72,26.1],[-12.05,26],[-14.51,26],[-14.41,26.25],[-13.58,26.74],[-13.18,27.65],[-12.95,27.91],[-11.99,28.13],[-11.55,28.31],[-11.08,28.71],[-10.49,29.06],[-10.2,29.38],[-9.67,30.11],[-9.65,30.45],[-9.88,30.72],[-9.81,31.42],[-9.68,31.71],[-9.35,32.09],[-9.25,32.57],[-8.51,33.25],[-6.9,33.97],[-6.35,34.78],[-5.92,35.79],[-5.62,35.83],[-5.4,35.93],[-5.28,35.9],[-5.34,35.86],[-5.34,35.74],[-5.25,35.61],[-4.84,35.28],[-4.63,35.21],[-4.33,35.16],[-3.69,35.28],[-3.39,35.21],[-3.21,35.24],[-2.97,35.41],[-2.84,35.13],[-2.22,35.1]]]},{id:"499",name:"Montenegro",rings:[[[19.19,43.53],[19.22,43.45],[19.61,43.17],[19.94,43.08],[20.35,42.85],[20.19,42.75],[20.05,42.76],[20.06,42.55],[19.79,42.48],[19.73,42.64],[19.65,42.63],[19.28,42.17],[19.36,42.07],[19.34,41.87],[19.19,41.95],[18.89,42.25],[18.63,42.38],[18.65,42.44],[18.52,42.43],[18.44,42.52],[18.55,42.64],[18.47,42.78],[18.46,43],[18.62,43.03],[18.68,43.23],[18.85,43.35],[19.03,43.29],[18.95,43.53],[19.19,43.53]]]},{id:"498",name:"Moldova",rings:[[[26.62,48.26],[26.85,48.39],[27.23,48.37],[27.55,48.48],[27.82,48.42],[28.09,48.26],[28.29,48.24],[28.35,48.21],[28.34,48.15],[28.46,48.09],[28.53,48.15],[28.77,48.12],[28.92,47.95],[29.13,47.96],[29.21,47.78],[29.13,47.49],[29.54,47.27],[29.51,47.09],[29.57,46.96],[29.88,46.83],[29.94,46.72],[29.93,46.54],[30.13,46.42],[29.84,46.35],[29.71,46.45],[29.62,46.4],[29.31,46.47],[29.21,46.38],[29.19,46.52],[28.96,46.46],[28.94,46.29],[29.01,46.18],[28.95,46.05],[28.74,45.94],[28.73,45.85],[28.49,45.67],[28.5,45.52],[28.21,45.45],[28.07,45.6],[28.16,45.65],[28.1,45.97],[28.24,46.45],[28.24,46.64],[28.07,46.98],[27.61,47.34],[26.98,48.16],[26.79,48.26],[26.62,48.26]]]},{id:"470",name:"Malta",rings:[[[14.57,35.85],[14.44,35.82],[14.35,35.87],[14.35,35.98],[14.57,35.85]]]},{id:"470",name:"Malta",rings:[[[14.31,36.03],[14.18,36.06],[14.26,36.08],[14.31,36.03]]]},{id:"807",name:"Macedonia",rings:[[[21.56,42.25],[22.28,42.35],[22.58,42.11],[22.8,42.03],[23,41.74],[22.93,41.36],[22.78,41.33],[22.73,41.18],[22.6,41.14],[21.99,41.13],[21.78,40.95],[21.58,40.87],[21.4,40.91],[20.96,40.85],[20.87,40.92],[20.74,40.91],[20.49,41.27],[20.45,41.52],[20.51,41.57],[20.55,41.86],[20.72,41.87],[20.78,42.07],[21.06,42.17],[21.29,42.1],[21.39,42.22],[21.56,42.25]]]},{id:"442",name:"Luxembourg",rings:[[[6.12,50.12],[6.11,50.03],[6.2,49.92],[6.49,49.8],[6.35,49.45],[6.18,49.5],[6.01,49.45],[5.79,49.54],[5.88,49.65],[5.73,49.81],[5.74,49.92],[5.98,50.17],[6.12,50.12]]]},{id:"440",name:"Lithuania",rings:[[[20.96,55.28],[20.9,55.29],[21.12,55.62],[21.11,55.49],[20.96,55.28]]]},{id:"440",name:"Lithuania",rings:[[[22.76,54.36],[22.69,54.56],[22.83,54.87],[22.63,54.97],[22.57,55.06],[22.07,55.06],[21.39,55.27],[21.23,55.26],[21.24,55.46],[21.06,55.81],[21.05,56.07],[21.65,56.31],[22.08,56.41],[22.88,56.4],[23.04,56.32],[23.2,56.37],[24.12,56.26],[24.47,56.28],[24.7,56.38],[24.9,56.4],[25.07,56.2],[25.66,56.1],[26.28,55.75],[26.6,55.67],[26.46,55.34],[26.78,55.27],[26.6,55.13],[26.29,55.14],[26.17,55],[25.86,54.92],[25.72,54.72],[25.72,54.56],[25.55,54.33],[25.75,54.26],[25.76,54.18],[25.68,54.14],[25.51,54.16],[25.46,54.29],[25.05,54.13],[24.87,54.14],[24.77,53.97],[24.32,53.89],[24.19,53.95],[23.56,53.92],[23.48,53.94],[23.48,54.08],[23.37,54.2],[22.89,54.39],[22.76,54.36]]]},{id:"438",name:"Liechtenstein",rings:[[[9.58,47.06],[9.49,47.06],[9.53,47.27],[9.61,47.11],[9.58,47.06]]]},{id:"434",name:"Libya",rings:[[[9.52,30.23],[9.89,30.39],[10.22,30.78],[10.26,30.94],[10.11,31.46],[10.28,31.68],[10.47,31.74],[10.61,31.93],[10.83,32.08],[11.5,32.41],[11.53,32.52],[11.45,32.64],[11.5,33.18],[11.81,33.09],[12.28,32.86],[12.75,32.8],[13.28,32.92],[14.16,32.71],[14.51,32.51],[15.18,32.39],[15.36,32.16],[15.36,31.97],[15.5,31.66],[15.71,31.43],[16.12,31.26],[16.78,31.21],[17.83,30.93],[18.19,30.78],[18.67,30.42],[18.94,30.29],[19.13,30.27],[19.29,30.29],[19.71,30.49],[20.11,30.96],[20.14,31.19],[19.96,31.56],[19.93,31.82],[20.03,32.11],[20.37,32.43],[21.06,32.78],[21.43,32.8],[21.63,32.94],[22.34,32.88],[23.09,32.62],[23.11,32.33],[23.29,32.21],[23.8,32.16],[24.13,32.01],[24.88,31.98],[25.03,31.88],[25.15,31.65],[24.85,31.34],[24.98,30.78],[24.88,30.46],[24.7,30.2],[24.98,29.18],[24.98,26],[9.5,26],[9.42,26.15],[9.49,26.33],[9.86,26.55],[9.88,26.63],[9.89,26.85],[9.79,27.04],[9.75,27.33],[9.92,27.79],[9.82,28.56],[9.84,28.97],[9.8,29.18],[9.64,29.64],[9.31,30.12],[9.52,30.23]]]},{id:"422",name:"Lebanon",rings:[[[35.98,34.63],[36.38,34.66],[36.43,34.61],[36.33,34.5],[36.51,34.43],[36.59,34.22],[36.3,33.96],[36.28,33.89],[36.37,33.84],[36.09,33.83],[36.02,33.78],[35.94,33.67],[36.02,33.56],[35.6,33.24],[35.53,33.25],[35.49,33.12],[35.41,33.07],[35.11,33.08],[35.61,34.03],[35.65,34.25],[35.8,34.44],[35.98,34.55],[35.98,34.63]]]},{id:"428",name:"Latvia",rings:[[[26.6,55.67],[26.28,55.75],[25.66,56.1],[25.07,56.2],[24.84,56.41],[24.47,56.28],[24.12,56.26],[23.2,56.37],[23.04,56.32],[22.88,56.4],[22.08,56.41],[21.65,56.31],[21.05,56.07],[21.03,56.64],[21.07,56.82],[21.35,57.02],[21.46,57.32],[21.73,57.57],[22.56,57.72],[22.65,57.6],[23.14,57.32],[23.29,57.09],[23.65,56.97],[23.93,57.01],[24.38,57.25],[24.32,57.87],[25.11,58.06],[25.26,58],[25.28,58.05],[25.99,57.84],[26.3,57.6],[26.46,57.54],[26.97,57.61],[27.47,57.52],[27.54,57.43],[27.83,57.29],[27.83,57.19],[27.64,56.85],[27.85,56.85],[28.01,56.6],[28.1,56.55],[28.2,56.26],[28.15,56.14],[27.89,56.08],[27.64,55.91],[27.58,55.8],[27.05,55.83],[26.82,55.71],[26.6,55.67]]]},{name:"Kosovo",rings:[[[20.35,42.83],[20.47,42.86],[20.48,42.95],[20.62,43.03],[20.66,43.1],[20.62,43.2],[20.8,43.26],[20.85,43.17],[21.06,43.09],[21.4,42.83],[21.39,42.75],[21.75,42.65],[21.61,42.39],[21.52,42.33],[21.56,42.25],[21.39,42.22],[21.29,42.1],[21.06,42.17],[20.78,42.07],[20.72,41.87],[20.58,41.87],[20.49,42.22],[20.24,42.34],[20.06,42.55],[20.05,42.76],[20.19,42.75],[20.35,42.83]]]},{id:"400",name:"Jordan",rings:[[[35.79,32.73],[35.89,32.71],[36.06,32.53],[36.37,32.39],[36.82,32.32],[38.77,33.37],[39.06,32.49],[38.98,32.47],[39.04,32.31],[39.25,32.35],[39.29,32.24],[38.96,32],[36.96,31.49],[37.98,30.5],[37.63,30.31],[37.47,30],[36.75,29.87],[36.48,29.5],[36.02,29.19],[34.95,29.35],[35.14,30.14],[35.14,30.42],[35.44,31.13],[35.4,31.23],[35.56,31.77],[35.57,32.64],[35.79,32.73]]]},{id:"380",name:"Italy",rings:[[[7.02,45.93],[7.13,45.88],[7.54,45.98],[7.79,45.92],[7.99,46.02],[8.12,46.16],[8.09,46.27],[8.42,46.45],[8.46,46.25],[8.64,46.11],[8.82,46.08],[8.78,46],[8.96,45.83],[9.05,45.88],[9,46.02],[9.25,46.29],[9.26,46.48],[9.3,46.5],[9.43,46.48],[9.53,46.31],[9.94,46.36],[10.08,46.23],[10.15,46.25],[10.04,46.48],[10.09,46.6],[10.2,46.62],[10.43,46.55],[10.4,46.66],[10.45,46.87],[10.99,46.78],[11.13,46.94],[11.24,46.98],[11.77,46.99],[12.17,47.08],[12.16,46.94],[12.39,46.7],[13.7,46.52],[13.38,46.26],[13.63,46.18],[13.49,45.99],[13.6,45.98],[13.58,45.81],[13.72,45.76],[13.88,45.61],[13.72,45.59],[13.78,45.63],[13.63,45.77],[13.47,45.71],[13.21,45.77],[13.03,45.64],[12.5,45.46],[12.43,45.47],[12.54,45.54],[12.49,45.55],[12.27,45.45],[12.22,45.24],[12.52,44.97],[12.39,44.8],[12.28,44.83],[12.25,44.72],[12.4,44.22],[12.69,43.99],[13.56,43.57],[13.8,43.18],[14.01,42.69],[14.54,42.24],[15.17,41.93],[15.96,41.94],[16.17,41.9],[16.15,41.76],[15.91,41.62],[15.9,41.51],[17.1,41.06],[17.47,40.84],[17.96,40.65],[18.46,40.22],[18.48,40.1],[18.39,39.9],[18.34,39.82],[18.08,39.94],[17.87,40.28],[17.48,40.31],[17.26,40.4],[17.18,40.5],[17.03,40.51],[16.93,40.46],[16.67,40.14],[16.52,39.75],[16.6,39.64],[16.82,39.58],[17.11,39.38],[17.17,39],[17.1,38.92],[16.95,38.94],[16.62,38.8],[16.56,38.72],[16.54,38.41],[16.28,38.25],[16.06,37.94],[15.72,37.94],[15.65,38.03],[15.64,38.18],[15.7,38.26],[15.82,38.3],[15.93,38.67],[16.2,38.76],[16.21,38.94],[16.11,39.02],[16.02,39.35],[15.69,39.99],[15.59,40.05],[15.29,40.07],[14.95,40.24],[14.93,40.31],[14.99,40.38],[14.95,40.47],[14.77,40.67],[14.34,40.6],[14.46,40.73],[14.31,40.81],[14.05,40.81],[13.86,41.13],[13.73,41.24],[13.04,41.27],[12.85,41.41],[12.63,41.47],[12.08,41.94],[11.81,42.08],[11.64,42.29],[11.3,42.42],[11.14,42.39],[11.1,42.42],[11.18,42.46],[11.17,42.53],[10.8,42.8],[10.71,42.94],[10.51,42.97],[10.52,43.2],[10.32,43.51],[10.25,43.85],[10.05,44.02],[9.73,44.1],[9.29,44.32],[8.76,44.42],[8.55,44.35],[8,43.88],[7.49,43.77],[7.48,43.86],[7.68,44.08],[7.64,44.16],[7.32,44.14],[6.9,44.34],[6.84,44.51],[7.03,44.72],[6.99,44.83],[6.74,44.92],[6.63,45.07],[6.69,45.14],[6.84,45.13],[7.08,45.24],[7.15,45.38],[6.79,45.74],[6.81,45.81],[7.02,45.93]],[[12.49,43.9],[12.5,43.99],[12.4,43.94],[12.49,43.9]]]},{id:"380",name:"Italy",rings:[[[10.4,42.86],[10.42,42.71],[10.33,42.76],[10.13,42.74],[10.11,42.78],[10.4,42.86]]]},{id:"380",name:"Italy",rings:[[[13.94,40.71],[13.87,40.71],[13.87,40.76],[13.96,40.74],[13.94,40.71]]]},{id:"380",name:"Italy",rings:[[[12.05,36.76],[11.94,36.78],[11.95,36.84],[12.05,36.76]]]},{id:"380",name:"Italy",rings:[[[15.58,38.22],[15.23,37.78],[15.1,37.46],[15.12,37.34],[15.23,37.24],[15.17,37.21],[15.29,37.06],[15.11,36.84],[15.11,36.69],[14.78,36.71],[14.5,36.8],[14.37,36.97],[14.14,37.1],[13.91,37.1],[13.17,37.48],[12.92,37.57],[12.64,37.59],[12.44,37.82],[12.55,38.05],[12.74,38.18],[12.9,38.03],[13.16,38.19],[13.35,38.18],[13.38,38.13],[13.79,37.98],[14.05,38.04],[14.51,38.05],[14.79,38.17],[15.12,38.15],[15.5,38.29],[15.63,38.27],[15.58,38.22]]]},{id:"380",name:"Italy",rings:[[[9.63,40.88],[9.8,40.5],[9.64,40.27],[9.71,40.02],[9.56,39.17],[9.49,39.14],[9.06,39.24],[8.97,38.96],[8.88,38.91],[8.65,38.93],[8.42,39.21],[8.4,39.48],[8.45,39.72],[8.54,39.73],[8.55,39.84],[8.41,39.92],[8.47,40.29],[8.35,40.5],[8.19,40.65],[8.2,40.87],[8.22,40.91],[8.47,40.83],[8.7,40.9],[9.23,41.26],[9.61,41.02],[9.55,40.93],[9.63,40.88]]]},{id:"380",name:"Italy",rings:[[[8.48,39.07],[8.42,38.97],[8.36,39.1],[8.48,39.07]]]},{id:"380",name:"Italy",rings:[[[8.29,41.04],[8.21,41],[8.27,41.1],[8.34,41.1],[8.29,41.04]]]},{id:"376",name:"Israel",rings:[[[35.87,33.43],[35.84,33.28],[35.91,32.95],[35.79,32.73],[35.57,32.64],[35.55,32.4],[35.19,32.54],[35.07,32.46],[34.95,32.16],[34.96,31.82],[35.13,31.82],[35.2,31.75],[34.95,31.6],[34.88,31.37],[35.1,31.37],[35.45,31.48],[35.4,31.23],[35.44,31.13],[35.17,30.52],[35.14,30.14],[34.97,29.55],[34.9,29.48],[34.25,31.21],[34.53,31.53],[34.48,31.59],[34.68,31.9],[35.11,33.08],[35.41,33.07],[35.49,33.12],[35.53,33.25],[35.6,33.24],[35.87,33.43]]]},{id:"372",name:"Ireland",rings:[[[-9.95,53.91],[-10.27,53.98],[-10,54],[-9.95,53.91]]]},{id:"372",name:"Ireland",rings:[[[-7.22,55.09],[-7.38,55.03],[-7.55,54.77],[-7.91,54.7],[-7.75,54.59],[-8.15,54.45],[-7.85,54.22],[-7.61,54.14],[-7.32,54.13],[-7.16,54.24],[-7.2,54.3],[-7.01,54.41],[-6.8,54.21],[-6.65,54.16],[-6.65,54.06],[-6.3,54.09],[-6.18,54.05],[-6.16,54.02],[-6.31,54.01],[-6.35,53.94],[-6.14,53.58],[-6.15,53.37],[-6.03,52.93],[-6.17,52.74],[-6.22,52.54],[-6.46,52.34],[-6.32,52.25],[-6.89,52.16],[-6.96,52.25],[-7,52.17],[-7.53,52.1],[-7.63,51.99],[-7.84,51.95],[-8.06,51.83],[-8.41,51.89],[-8.34,51.79],[-8.41,51.71],[-9.3,51.5],[-9.46,51.53],[-9.84,51.48],[-9.52,51.68],[-10.12,51.6],[-9.6,51.87],[-10.09,51.77],[-10.34,51.8],[-10.38,51.87],[-9.91,52.12],[-10.39,52.13],[-10.36,52.21],[-10.13,52.28],[-9.77,52.25],[-9.91,52.4],[-9.63,52.55],[-8.78,52.68],[-8.99,52.76],[-9.17,52.63],[-9.56,52.65],[-9.92,52.57],[-9.52,52.78],[-9.39,52.9],[-9.46,52.95],[-9.3,53.1],[-8.93,53.21],[-9.51,53.24],[-9.62,53.33],[-9.88,53.34],[-9.79,53.39],[-10.09,53.41],[-10.05,53.48],[-10.12,53.55],[-9.72,53.6],[-9.91,53.66],[-9.9,53.73],[-9.58,53.8],[-9.58,53.88],[-9.91,53.86],[-9.86,54.09],[-9.93,54.08],[-9.98,54.19],[-10.09,54.16],[-10.06,54.26],[-9.56,54.31],[-9.32,54.3],[-9.15,54.21],[-9,54.29],[-8.54,54.24],[-8.62,54.35],[-8.23,54.51],[-8.13,54.64],[-8.46,54.61],[-8.76,54.68],[-8.38,54.89],[-8.39,55.02],[-8.27,55.15],[-7.75,55.19],[-7.76,55.25],[-7.67,55.26],[-7.56,55.12],[-7.66,54.97],[-7.48,55.05],[-7.52,55.25],[-7.3,55.3],[-7.37,55.36],[-7.31,55.37],[-6.96,55.24],[-7.22,55.09]]]},{id:"368",name:"Iraq",rings:[[[42.36,37.11],[42.46,37.13],[42.77,37.37],[42.94,37.32],[43.09,37.37],[43.68,37.23],[44.11,37.3],[44.19,37.25],[44.2,37.05],[44.28,36.98],[44.61,37.18],[44.73,37.16],[44.88,36.8],[45.02,36.7],[45.05,36.47],[45.24,36.36],[45.36,36.02],[45.56,35.98],[45.78,35.82],[46.17,35.82],[46.27,35.77],[46,35.61],[45.97,35.48],[46.11,35.32],[46.13,35.13],[45.92,35.03],[45.68,34.8],[45.64,34.57],[45.5,34.58],[45.44,34.42],[45.54,34.22],[45.4,33.97],[45.74,33.6],[45.88,33.61],[45.87,33.49],[46.02,33.42],[46.15,33.23],[46.08,33.09],[46.11,32.96],[46.38,32.93],[47.12,32.47],[47.37,32.42],[47.51,32.15],[47.83,31.79],[47.68,31.4],[47.68,31],[48.01,30.99],[48.02,30.47],[48.33,30.29],[48.43,30.04],[48.54,29.96],[48.45,29.94],[48.07,30.04],[47.98,29.98],[47.67,30.1],[47.22,30.04],[47.1,29.94],[46.77,29.35],[46.53,29.1],[46.36,29.06],[44.72,29.19],[42.08,31.08],[40.37,31.94],[39.14,32.13],[39.29,32.24],[39.25,32.35],[39.04,32.31],[38.98,32.47],[39.06,32.49],[38.77,33.37],[40.69,34.33],[40.99,34.43],[41.19,34.77],[41.22,35.29],[41.36,35.64],[41.35,35.81],[41.24,36.07],[41.29,36.38],[41.42,36.51],[41.79,36.6],[42.36,37.11]]]},{id:"348",name:"Hungary",rings:[[[22.13,48.41],[22.25,48.41],[22.35,48.26],[22.58,48.13],[22.77,48.11],[22.88,47.95],[22.61,47.77],[22.29,47.73],[22,47.5],[21.99,47.4],[21.66,47.04],[21.48,46.75],[21.5,46.7],[21.3,46.57],[21.26,46.41],[21.04,46.24],[20.76,46.25],[20.66,46.15],[20.24,46.11],[19.61,46.17],[19.21,45.98],[19.09,46.02],[18.93,45.93],[18.66,45.91],[18.44,45.77],[17.81,45.79],[17.61,45.91],[17.31,46],[16.87,46.34],[16.52,46.5],[16.38,46.64],[16.28,46.86],[16.09,46.86],[16.25,46.97],[16.45,47.01],[16.49,47.12],[16.42,47.22],[16.46,47.27],[16.44,47.4],[16.62,47.45],[16.68,47.54],[16.64,47.61],[16.42,47.67],[16.59,47.75],[16.79,47.68],[17.07,47.71],[17.03,47.84],[17.15,48.01],[17.32,47.99],[17.76,47.77],[18.73,47.79],[18.79,48],[19.47,48.11],[19.63,48.22],[19.9,48.13],[20.33,48.3],[20.49,48.53],[21.07,48.51],[21.45,48.55],[21.72,48.35],[22.13,48.41]]]},{id:"300",name:"Greece",rings:[[[27.86,36.55],[27.79,36.61],[27.86,36.64],[27.86,36.55]]]},{id:"300",name:"Greece",rings:[[[20.61,38.38],[20.63,38.27],[20.79,38.14],[20.76,38.07],[20.52,38.11],[20.45,38.23],[20.35,38.18],[20.41,38.34],[20.52,38.33],[20.56,38.48],[20.61,38.38]]]},{id:"300",name:"Greece",rings:[[[20.89,37.81],[20.99,37.71],[20.91,37.73],[20.82,37.66],[20.62,37.85],[20.69,37.93],[20.89,37.81]]]},{id:"300",name:"Greece",rings:[[[20.69,38.61],[20.55,38.58],[20.59,38.76],[20.69,38.84],[20.69,38.61]]]},{id:"300",name:"Greece",rings:[[[20.76,38.33],[20.71,38.32],[20.62,38.48],[20.7,38.45],[20.76,38.33]]]},{id:"300",name:"Greece",rings:[[[20.08,39.43],[20.1,39.38],[19.88,39.46],[19.65,39.77],[19.84,39.82],[19.92,39.77],[19.85,39.67],[19.96,39.47],[20.08,39.43]]]},{id:"300",name:"Greece",rings:[[[23.42,38.96],[23.52,38.81],[24.13,38.65],[24.28,38.22],[24.36,38.16],[24.56,38.15],[24.58,38.02],[24.5,37.97],[24.36,38.02],[24.21,38.12],[24.04,38.39],[23.65,38.44],[23.62,38.55],[23.25,38.8],[23.03,38.87],[22.88,38.85],[23.26,39.03],[23.42,38.96]]]},{id:"300",name:"Greece",rings:[[[23.78,39.11],[23.66,39.1],[23.59,39.21],[23.78,39.11]]]},{id:"300",name:"Greece",rings:[[[23.89,39.16],[23.84,39.15],[23.89,39.23],[23.97,39.27],[23.89,39.16]]]},{id:"300",name:"Greece",rings:[[[24.68,38.81],[24.54,38.79],[24.56,38.83],[24.46,38.89],[24.49,38.98],[24.68,38.81]]]},{id:"300",name:"Greece",rings:[[[24.77,40.61],[24.65,40.58],[24.52,40.69],[24.62,40.79],[24.72,40.79],[24.79,40.7],[24.77,40.61]]]},{id:"300",name:"Greece",rings:[[[23.55,37.93],[23.42,37.93],[23.48,37.99],[23.55,37.93]]]},{id:"300",name:"Greece",rings:[[[23.05,36.19],[23.04,36.15],[22.91,36.22],[22.95,36.38],[23.1,36.25],[23.05,36.19]]]},{id:"300",name:"Greece",rings:[[[27.17,35.47],[27.14,35.41],[27.1,35.46],[27.07,35.6],[27.16,35.79],[27.22,35.82],[27.16,35.63],[27.23,35.48],[27.17,35.47]]]},{id:"300",name:"Greece",rings:[[[27.02,36.96],[26.92,36.94],[26.89,37.09],[27.04,37],[27.02,36.96]]]},{id:"300",name:"Greece",rings:[[[26.95,36.73],[26.96,36.77],[27.21,36.9],[27.35,36.87],[26.95,36.73]]]},{id:"300",name:"Greece",rings:[[[25.55,36.97],[25.46,36.93],[25.36,37.07],[25.53,37.2],[25.59,37.15],[25.55,36.97]]]},{id:"300",name:"Greece",rings:[[[25.28,37.07],[25.2,36.99],[25.1,37.03],[25.23,37.15],[25.28,37.07]]]},{id:"300",name:"Greece",rings:[[[25.48,36.39],[25.44,36.34],[25.37,36.36],[25.41,36.47],[25.48,36.39]]]},{id:"300",name:"Greece",rings:[[[25.38,36.67],[25.26,36.76],[25.3,36.79],[25.41,36.72],[25.38,36.67]]]},{id:"300",name:"Greece",rings:[[[26.83,37.81],[27.04,37.77],[27.06,37.71],[26.84,37.64],[26.58,37.72],[26.83,37.81]]]},{id:"300",name:"Greece",rings:[[[26.03,37.53],[25.98,37.53],[26,37.57],[26.09,37.64],[26.35,37.67],[26.21,37.57],[26.03,37.53]]]},{id:"300",name:"Greece",rings:[[[25.86,36.79],[25.74,36.79],[26,36.94],[26.07,36.9],[25.86,36.79]]]},{id:"300",name:"Greece",rings:[[[26.46,36.59],[26.33,36.51],[26.27,36.55],[26.27,36.6],[26.34,36.58],[26.37,36.64],[26.46,36.59]]]},{id:"300",name:"Greece",rings:[[[24.36,37.58],[24.29,37.53],[24.28,37.6],[24.38,37.68],[24.36,37.58]]]},{id:"300",name:"Greece",rings:[[[24.44,37.34],[24.38,37.31],[24.37,37.42],[24.43,37.48],[24.48,37.41],[24.44,37.34]]]},{id:"300",name:"Greece",rings:[[[24.54,36.76],[24.53,36.68],[24.33,36.66],[24.36,36.74],[24.42,36.71],[24.54,36.76]]]},{id:"300",name:"Greece",rings:[[[24.99,37.76],[24.96,37.69],[24.7,37.96],[24.79,37.99],[24.86,37.91],[24.96,37.9],[24.99,37.76]]]},{id:"300",name:"Greece",rings:[[[25.26,37.6],[25.22,37.53],[25.16,37.55],[25,37.68],[25.26,37.6]]]},{id:"300",name:"Greece",rings:[[[24.72,36.92],[24.68,37.02],[24.76,36.95],[24.72,36.92]]]},{id:"300",name:"Greece",rings:[[[26.09,38.22],[26,38.16],[25.89,38.24],[25.99,38.35],[25.85,38.57],[26.01,38.6],[26.16,38.54],[26.16,38.3],[26.09,38.22]]]},{id:"300",name:"Greece",rings:[[[26.41,39.33],[26.39,39.27],[26.6,39.05],[26.49,39.07],[26.55,38.99],[26.47,38.97],[26.16,39.03],[26.11,39.08],[26.27,39.2],[26.18,39.19],[26.07,39.1],[25.84,39.2],[25.91,39.29],[26.09,39.3],[26.17,39.37],[26.35,39.38],[26.41,39.33]]]},{id:"300",name:"Greece",rings:[[[25.68,40.43],[25.57,40.4],[25.45,40.48],[25.57,40.52],[25.68,40.43]]]},{id:"300",name:"Greece",rings:[[[25.44,39.98],[25.36,39.81],[25.26,39.82],[25.25,39.89],[25.18,39.83],[25.06,39.85],[25.06,40],[25.23,40.01],[25.28,39.96],[25.45,40.03],[25.44,39.98]]]},{id:"300",name:"Greece",rings:[[[25.4,37.42],[25.31,37.41],[25.31,37.49],[25.46,37.47],[25.4,37.42]]]},{id:"300",name:"Greece",rings:[[[24.53,37.13],[24.42,37.13],[24.44,37.19],[24.53,37.19],[24.53,37.13]]]},{id:"300",name:"Greece",rings:[[[27.84,35.93],[27.75,35.91],[27.71,35.96],[27.76,36.07],[27.71,36.17],[27.91,36.35],[28.23,36.43],[28.07,36.13],[28.09,36.07],[27.97,36.05],[27.84,35.93]]]},{id:"300",name:"Greece",rings:[[[23.85,35.53],[24.01,35.53],[24.17,35.6],[24.2,35.54],[24.11,35.49],[24.26,35.47],[24.31,35.36],[24.72,35.43],[25.48,35.31],[25.73,35.35],[25.75,35.14],[25.79,35.12],[26.17,35.22],[26.32,35.31],[26.25,35.05],[26.17,35.02],[24.8,34.93],[24.74,34.95],[24.71,35.09],[24.46,35.16],[23.59,35.26],[23.57,35.53],[23.61,35.57],[23.67,35.51],[23.74,35.65],[23.85,35.53]]]},{id:"300",name:"Greece",rings:[[[26.32,41.72],[26.58,41.6],[26.62,41.4],[26.33,41.24],[26.35,41],[26.11,40.75],[26.04,40.73],[25.86,40.84],[25.1,40.99],[24.79,40.86],[24.48,40.95],[24.08,40.72],[23.76,40.75],[23.74,40.68],[23.88,40.54],[23.83,40.48],[23.87,40.42],[24.21,40.33],[24.34,40.15],[24.16,40.28],[23.91,40.36],[23.73,40.33],[23.72,40.29],[23.97,40.11],[24,40.02],[23.95,39.97],[23.66,40.22],[23.43,40.26],[23.39,40.22],[23.47,40.07],[23.68,39.96],[23.63,39.92],[23.39,39.99],[23.31,40.22],[22.9,40.4],[22.85,40.49],[22.92,40.59],[22.63,40.5],[22.59,40.04],[22.84,39.8],[22.98,39.56],[23.23,39.36],[23.33,39.18],[23.15,39.1],[23.16,39.26],[22.99,39.33],[22.92,39.31],[22.84,39.26],[22.89,39.17],[22.97,39.03],[23.07,39.04],[22.8,38.9],[22.57,38.87],[23.25,38.66],[23.37,38.53],[23.57,38.49],[23.68,38.35],[23.97,38.27],[24.02,38.14],[24.05,37.71],[23.97,37.68],[23.5,38.03],[23.03,37.88],[23.15,37.8],[23.2,37.62],[23.39,37.58],[23.49,37.44],[23.16,37.33],[23.1,37.36],[23.1,37.44],[22.94,37.52],[22.78,37.59],[22.73,37.54],[23.06,36.85],[23.04,36.64],[23.16,36.45],[22.98,36.53],[22.78,36.79],[22.72,36.79],[22.61,36.78],[22.49,36.57],[22.49,36.45],[22.43,36.48],[22.38,36.51],[22.38,36.7],[22.08,37.03],[21.95,36.99],[21.89,36.74],[21.74,36.86],[21.58,37.08],[21.58,37.2],[21.69,37.31],[21.68,37.39],[21.57,37.54],[21.33,37.67],[21.29,37.77],[21.12,37.89],[21.31,38.03],[21.4,38.2],[21.66,38.18],[21.83,38.33],[21.95,38.32],[22.92,37.96],[22.89,38.05],[23.12,38.07],[23.18,38.13],[23.09,38.2],[22.83,38.23],[22.42,38.44],[22.32,38.36],[21.97,38.41],[21.47,38.32],[21.33,38.49],[21.3,38.37],[21.18,38.35],[21.11,38.39],[20.99,38.65],[20.78,38.81],[20.77,38.87],[20.78,38.93],[20.89,38.94],[21.11,38.9],[21.15,38.92],[21.12,39.03],[20.78,39.01],[20.3,39.33],[20.19,39.55],[20,39.71],[20.25,39.68],[20.31,39.8],[20.38,39.8],[20.31,39.98],[20.66,40.12],[20.81,40.45],[20.95,40.49],[21.03,40.62],[20.96,40.85],[21.4,40.91],[21.58,40.87],[21.78,40.95],[21.99,41.13],[22.49,41.12],[22.73,41.18],[22.78,41.33],[23.64,41.39],[24.01,41.46],[24.06,41.53],[24.52,41.55],[24.6,41.44],[24.77,41.36],[24.85,41.39],[24.99,41.36],[25.25,41.24],[25.92,41.31],[26.16,41.44],[26.08,41.7],[26.32,41.72]]]},{id:"276",name:"Germany",rings:[[[9.52,47.52],[9.18,47.67],[8.88,47.66],[8.57,47.78],[8.4,47.69],[8.56,47.62],[8.43,47.59],[7.93,47.56],[7.57,47.61],[7.53,47.67],[7.62,48.16],[7.84,48.64],[8.14,48.89],[8.13,48.97],[7.61,49.06],[7.45,49.15],[7.04,49.11],[7,49.18],[6.89,49.21],[6.73,49.16],[6.54,49.4],[6.35,49.45],[6.49,49.8],[6.26,49.87],[6.14,49.97],[6.11,50.09],[6.18,50.23],[6.36,50.32],[6.34,50.45],[6.18,50.52],[6.24,50.6],[5.99,50.75],[6.05,50.91],[5.86,51.03],[6.13,51.15],[6.08,51.22],[6.19,51.41],[6.19,51.49],[5.95,51.8],[6.17,51.88],[6.36,51.82],[6.74,51.91],[6.8,51.98],[6.72,52.08],[6.98,52.21],[7.04,52.38],[6.97,52.44],[6.75,52.46],[6.69,52.53],[6.75,52.63],[7.01,52.63],[7.18,52.97],[7.2,53.28],[7.05,53.38],[7.11,53.56],[7.21,53.66],[8.01,53.69],[8.17,53.54],[8.11,53.47],[8.25,53.45],[8.33,53.61],[8.49,53.51],[8.49,53.39],[8.53,53.78],[8.62,53.88],[9.21,53.86],[9.59,53.6],[9.78,53.55],[9.63,53.6],[9.31,53.86],[8.98,53.93],[8.9,54],[8.91,54.26],[8.78,54.31],[8.65,54.29],[8.65,54.4],[8.95,54.47],[8.96,54.54],[8.68,54.79],[8.67,54.9],[9.25,54.81],[9.62,54.85],[9.89,54.78],[10.02,54.67],[10.03,54.58],[9.87,54.47],[10.14,54.49],[10.21,54.41],[10.36,54.44],[10.73,54.32],[11.01,54.38],[11.06,54.28],[11.01,54.18],[10.81,54.08],[10.92,54],[11.4,53.95],[11.8,54.14],[12.11,54.17],[12.58,54.47],[13.03,54.41],[13.15,54.28],[13.45,54.14],[13.73,54.15],[13.87,53.85],[14.26,53.73],[14.41,53.22],[14.37,53.1],[14.13,52.88],[14.62,52.53],[14.55,52.36],[14.68,52.25],[14.75,52.08],[14.6,51.83],[14.74,51.63],[14.73,51.52],[14.93,51.43],[15.02,51.25],[14.96,51.09],[14.77,50.82],[14.61,50.86],[14.63,50.91],[14.55,50.99],[14.32,51.04],[14.25,51],[14.37,50.9],[13.56,50.7],[13.44,50.6],[13.38,50.62],[13.18,50.51],[13.02,50.49],[12.94,50.41],[12.55,50.39],[12.28,50.18],[12.13,50.31],[12.09,50.27],[12.21,50.1],[12.51,49.9],[12.39,49.74],[12.63,49.46],[13.29,49.1],[13.4,48.98],[13.55,48.96],[13.77,48.82],[13.82,48.77],[13.79,48.59],[13.67,48.52],[13.49,48.58],[13.38,48.36],[12.9,48.2],[12.76,48.11],[12.95,47.89],[12.9,47.72],[13.06,47.66],[13.02,47.48],[12.81,47.54],[12.77,47.64],[12.68,47.67],[12.48,47.64],[12.21,47.72],[12.18,47.62],[11.72,47.58],[11.3,47.42],[11.04,47.39],[10.87,47.52],[10.44,47.55],[10.37,47.37],[10.18,47.28],[10.2,47.36],[10.07,47.39],[9.97,47.5],[9.75,47.58],[9.52,47.52]]]},{id:"276",name:"Germany",rings:[[[13.71,54.38],[13.71,54.28],[13.48,54.34],[13.37,54.25],[13.16,54.37],[13.18,54.54],[13.24,54.64],[13.42,54.7],[13.49,54.62],[13.66,54.56],[13.58,54.46],[13.71,54.38]]]},{id:"276",name:"Germany",rings:[[[14.21,53.95],[14.21,53.87],[13.93,53.88],[13.92,54],[13.83,54.06],[13.83,54.13],[14.21,53.95]]]},{id:"276",name:"Germany",rings:[[[11.28,54.42],[11.01,54.47],[11.09,54.53],[11.23,54.5],[11.28,54.42]]]},{id:"276",name:"Germany",rings:[[[8.31,54.79],[8.3,54.91],[8.4,55.06],[8.45,55.05],[8.38,54.9],[8.63,54.89],[8.35,54.85],[8.31,54.79]]]},{id:"276",name:"Germany",rings:[[[8.59,54.71],[8.4,54.71],[8.51,54.76],[8.59,54.71]]]},{id:"268",name:"Georgia",rings:[[[43.44,41.11],[43.4,41.18],[43.15,41.24],[43.15,41.31],[42.76,41.58],[42.59,41.57],[42.47,41.44],[41.92,41.5],[41.82,41.43],[41.51,41.52],[41.7,41.7],[41.76,41.97],[41.49,42.66],[41.42,42.74],[41.13,42.83],[41.06,42.93],[40.84,43.06],[40.46,43.15],[39.98,43.42],[40.15,43.57],[40.65,43.53],[41.08,43.37],[41.36,43.33],[41.58,43.22],[42.42,43.22],[42.57,43.16],[42.76,43.17],[42.99,43.09],[43.09,42.99],[43.78,42.75],[43.74,42.62],[43.83,42.57],[43.96,42.57],[44.51,42.75],[44.65,42.73],[44.77,42.62],[44.87,42.76],[45.16,42.68],[45.34,42.53],[45.7,42.5],[45.64,42.2],[45.95,42.04],[46.43,41.89],[46.3,41.76],[46.2,41.74],[46.18,41.66],[46.31,41.51],[46.67,41.29],[46.54,41.09],[46.43,41.08],[46.17,41.2],[45.92,41.19],[45.73,41.26],[45.72,41.34],[45.28,41.45],[44.98,41.28],[44.81,41.26],[44.84,41.21],[44.23,41.21],[43.44,41.11]]]},{id:"250",name:"France",rings:[[[9.48,42.81],[9.46,42.66],[9.53,42.55],[9.56,42.16],[9.4,41.93],[9.37,41.68],[9.19,41.39],[8.81,41.59],[8.89,41.7],[8.72,41.76],[8.74,41.93],[8.62,41.93],[8.7,42.1],[8.59,42.16],[8.57,42.22],[8.67,42.28],[8.57,42.36],[8.81,42.61],[9.14,42.73],[9.32,42.71],[9.36,43.02],[9.46,42.98],[9.48,42.81]]]},{id:"250",name:"France",rings:[[[7.62,47.59],[7.34,47.43],[7.2,47.43],[7.14,47.49],[6.97,47.45],[6.9,47.39],[7,47.32],[6.67,47.03],[6.46,46.95],[6.41,46.75],[6.16,46.61],[6.07,46.46],[6.12,46.38],[6.1,46.28],[5.97,46.21],[6.01,46.14],[6.2,46.19],[6.27,46.25],[6.23,46.33],[6.43,46.43],[6.78,46.41],[6.82,46.28],[6.77,46.16],[7.02,45.93],[6.81,45.81],[6.79,45.74],[7.16,45.4],[7.08,45.24],[6.84,45.13],[6.69,45.14],[6.63,45.07],[6.74,44.92],[6.99,44.83],[7.03,44.72],[6.84,44.51],[6.9,44.34],[7.32,44.14],[7.64,44.16],[7.68,44.08],[7.48,43.86],[7.49,43.77],[7.18,43.66],[6.72,43.37],[6.57,43.2],[6.11,43.07],[5.81,43.1],[5.41,43.23],[5.32,43.35],[5.07,43.37],[5.06,43.44],[4.71,43.37],[4.22,43.48],[4.05,43.59],[3.91,43.56],[3.26,43.19],[3.05,42.91],[3.09,42.59],[3.21,42.43],[2.89,42.46],[2.67,42.39],[2.65,42.34],[2.2,42.42],[2.03,42.35],[1.7,42.5],[1.71,42.6],[1.5,42.64],[1.43,42.6],[1.35,42.69],[0.77,42.84],[0.67,42.84],[0.63,42.69],[-0.04,42.69],[-0.3,42.83],[-0.59,42.8],[-0.76,42.94],[-1.18,43.02],[-1.3,43.1],[-1.4,43.03],[-1.48,43.07],[-1.41,43.24],[-1.76,43.32],[-1.79,43.41],[-1.63,43.44],[-1.49,43.56],[-1.24,44.56],[-1.08,44.69],[-1.15,44.76],[-1.24,44.67],[-1.19,45.16],[-1.08,45.53],[-0.83,45.38],[-0.69,45.09],[-0.55,45],[-0.64,45.09],[-0.79,45.47],[-1.2,45.71],[-1.21,45.77],[-1.03,45.74],[-1.15,46.31],[-1.39,46.35],[-1.79,46.52],[-2.06,46.81],[-2.09,46.92],[-2.02,47.04],[-2.2,47.16],[-2.03,47.27],[-1.74,47.22],[-1.97,47.31],[-2.5,47.31],[-2.53,47.38],[-2.43,47.47],[-2.55,47.53],[-2.77,47.51],[-2.73,47.6],[-2.79,47.63],[-3.07,47.62],[-3.16,47.69],[-3.44,47.71],[-3.9,47.84],[-4.31,47.82],[-4.43,47.97],[-4.68,48.04],[-4.33,48.17],[-4.58,48.29],[-4.24,48.3],[-4.39,48.37],[-4.72,48.36],[-4.76,48.45],[-4.72,48.54],[-4.53,48.62],[-4.06,48.71],[-3.71,48.71],[-3.47,48.81],[-3.23,48.84],[-3,48.79],[-2.69,48.54],[-2.45,48.65],[-2.08,48.65],[-2,48.58],[-1.91,48.7],[-1.82,48.63],[-1.38,48.65],[-1.56,48.8],[-1.58,49.2],[-1.81,49.49],[-1.86,49.68],[-1.26,49.68],[-1.23,49.49],[-1.14,49.39],[-0.16,49.3],[0.42,49.45],[0.13,49.51],[0.19,49.7],[0.62,49.86],[1.24,50],[1.59,50.25],[1.55,50.29],[1.58,50.74],[1.67,50.88],[1.91,50.99],[2.53,51.1],[2.6,50.88],[2.76,50.75],[2.84,50.71],[3.11,50.78],[3.23,50.66],[3.27,50.53],[3.59,50.48],[3.69,50.31],[3.95,50.34],[4.17,50.25],[4.15,49.97],[4.55,49.96],[4.82,50.15],[4.86,50.14],[4.79,49.96],[4.87,49.79],[5.28,49.68],[5.51,49.51],[5.79,49.54],[6.01,49.45],[6.24,49.49],[6.54,49.4],[6.73,49.16],[6.89,49.21],[7,49.18],[7.04,49.11],[7.45,49.15],[7.61,49.06],[8.13,48.97],[8.14,48.89],[7.84,48.64],[7.62,48.16],[7.53,47.67],[7.62,47.59]]]},{id:"250",name:"France",rings:[[[-1.18,45.9],[-1.22,45.82],[-1.39,46.05],[-1.18,45.9]]]},{id:"248",name:"Åland",rings:[[[19.99,60.35],[20.24,60.28],[20.19,60.19],[20.04,60.18],[20.03,60.09],[19.74,60.1],[19.69,60.27],[19.78,60.29],[19.78,60.21],[19.85,60.22],[19.87,60.3],[19.79,60.35],[19.82,60.39],[19.99,60.35]]]},{id:"248",name:"Åland",rings:[[[19.66,60.19],[19.58,60.14],[19.52,60.18],[19.55,60.24],[19.63,60.25],[19.66,60.19]]]},{id:"246",name:"Finland",rings:[[[24.15,65.81],[24,66.06],[23.7,66.25],[23.7,66.48],[23.87,66.58],[23.99,66.81],[23.64,67.13],[23.63,67.23],[23.78,67.33],[23.73,67.42],[23.46,67.46],[23.54,67.61],[23.5,67.87],[23.64,67.95],[23.32,68.13],[23.18,68.14],[23.1,68.26],[22.85,68.37],[22,68.52],[20.92,68.91],[20.9,68.98],[20.62,69.04],[21.07,69.04],[21.13,69.08],[21.07,69.21],[21.27,69.27],[21.59,69.27],[22.3,68.86],[22.41,68.72],[23.32,68.65],[23.71,68.71],[23.86,68.81],[24,68.8],[24.94,68.59],[25.09,68.64],[25.25,68.82],[25.58,68.89],[25.75,68.99],[25.77,69.28],[26.01,69.65],[26.53,69.91],[27.13,69.91],[27.59,70.04],[27.89,70.06],[28.41,69.82],[29.14,69.67],[29.33,69.47],[28.85,69.18],[28.83,69.12],[28.96,69.02],[28.41,68.9],[28.77,68.84],[28.47,68.49],[28.69,68.19],[29.34,68.06],[29.99,67.67],[29.94,67.55],[29.24,67.1],[29.09,66.97],[29.06,66.89],[29.9,66.09],[30.09,65.79],[30.09,65.68],[29.72,65.63],[29.82,65.57],[29.73,65.47],[29.72,65.34],[29.61,65.25],[29.81,65.2],[29.83,65.15],[29.62,65.04],[29.6,64.97],[29.78,64.8],[30.11,64.73],[30.12,64.64],[29.99,64.52],[30.11,64.37],[30.49,64.24],[30.53,64.08],[30.21,63.8],[29.99,63.73],[30.42,63.5],[31.18,63.21],[31.53,62.89],[31.29,62.57],[30.94,62.32],[29.25,61.29],[28.41,60.9],[27.8,60.54],[27.46,60.47],[27.2,60.54],[26.53,60.41],[26.6,60.6],[26.57,60.63],[26.38,60.42],[26.21,60.41],[25.95,60.47],[26.04,60.34],[25.76,60.27],[25.66,60.33],[24.6,60.11],[24.45,60.02],[23.46,59.99],[23.18,59.84],[22.96,59.83],[23.2,60.02],[23.08,60.05],[22.87,60.22],[22.79,60.08],[22.46,60.03],[22.44,60.16],[22.59,60.23],[22.51,60.28],[22.58,60.38],[21.85,60.51],[21.8,60.59],[21.61,60.53],[21.44,60.6],[21.36,60.97],[21.51,61.28],[21.51,61.48],[21.57,61.48],[21.5,61.55],[21.61,61.59],[21.39,61.92],[21.26,61.99],[21.34,62.28],[21.32,62.34],[21.17,62.41],[21.11,62.62],[21.14,62.74],[21.46,62.95],[21.47,63.03],[21.65,63.04],[21.54,63.21],[21.9,63.21],[22.32,63.31],[22.24,63.44],[22.35,63.44],[22.32,63.5],[22.4,63.49],[22.53,63.58],[22.53,63.65],[22.76,63.68],[23.5,64.03],[23.6,64.04],[23.65,64.13],[24.28,64.52],[24.56,64.8],[24.94,64.88],[25.29,64.86],[25.23,64.95],[25.37,65.01],[25.26,65.14],[25.35,65.48],[25.24,65.55],[24.68,65.67],[24.58,65.76],[24.63,65.86],[24.4,65.78],[24.15,65.81]]]},{id:"246",name:"Finland",rings:[[[21.99,60.34],[21.82,60.38],[21.83,60.47],[21.99,60.34]]]},{id:"246",name:"Finland",rings:[[[21.22,63.24],[21.42,63.25],[21.41,63.2],[21.25,63.15],[21.08,63.28],[21.23,63.28],[21.22,63.24]]]},{id:"246",name:"Finland",rings:[[[22.17,60.37],[22.42,60.3],[22.31,60.27],[22.36,60.17],[22.26,60.17],[22.08,60.29],[22.17,60.37]]]},{id:"246",name:"Finland",rings:[[[21.45,60.53],[21.44,60.48],[21.3,60.48],[21.21,60.6],[21.27,60.64],[21.45,60.53]]]},{id:"246",name:"Finland",rings:[[[21.83,60.14],[21.7,60.11],[21.76,60.2],[21.86,60.2],[21.83,60.14]]]},{id:"246",name:"Finland",rings:[[[21.63,60.11],[21.49,60.13],[21.63,60.17],[21.63,60.11]]]},{id:"246",name:"Finland",rings:[[[24.85,64.99],[24.58,64.98],[24.58,65.04],[24.78,65.09],[24.97,65.06],[24.85,64.99]]]},{id:"233",name:"Estonia",rings:[[[27.35,57.53],[26.97,57.61],[26.46,57.54],[26.3,57.6],[25.99,57.84],[25.28,58.05],[25.26,58],[25.11,58.06],[24.32,57.87],[24.55,58.3],[24.53,58.35],[24.34,58.38],[24.11,58.27],[23.77,58.36],[23.69,58.51],[23.51,58.66],[23.68,58.79],[23.5,58.79],[23.43,58.92],[23.51,59],[23.47,59.03],[23.52,59.11],[23.5,59.19],[24.08,59.29],[24.05,59.37],[24.38,59.47],[25.44,59.52],[25.52,59.56],[25.51,59.64],[26.62,59.55],[26.97,59.45],[27.89,59.41],[28.01,59.48],[28.15,59.37],[27.9,59.28],[27.76,59.05],[27.43,58.79],[27.53,58.43],[27.5,58.22],[27.67,57.93],[27.78,57.87],[27.54,57.8],[27.4,57.67],[27.35,57.53]]]},{id:"233",name:"Estonia",rings:[[[22.62,58.62],[22.96,58.61],[23.32,58.45],[23.13,58.44],[22.73,58.23],[22.37,58.22],[22.27,58.16],[22.15,57.97],[22,57.93],[21.99,58],[22.19,58.16],[21.88,58.26],[21.85,58.3],[21.98,58.39],[21.86,58.5],[22.27,58.51],[22.33,58.58],[22.62,58.62]]]},{id:"233",name:"Estonia",rings:[[[22.92,58.83],[22.84,58.78],[22.77,58.82],[22.66,58.71],[22.54,58.69],[22.47,58.71],[22.41,58.86],[22.06,58.94],[22.46,58.97],[22.65,59.09],[22.73,59.01],[22.91,58.99],[23.01,58.83],[22.92,58.83]]]},{id:"233",name:"Estonia",rings:[[[23.34,58.55],[23.06,58.61],[23.16,58.68],[23.33,58.65],[23.34,58.55]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.62,61.81],[-6.67,61.77],[-6.89,61.9],[-6.66,61.86],[-6.62,61.81]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.7,61.44],[-6.89,61.54],[-6.94,61.63],[-6.74,61.57],[-6.7,61.44]]]},{id:"234",name:"Faeroe Is.",rings:[[[-7.19,62.14],[-7.07,62.07],[-7.18,62.04],[-7.38,62.07],[-7.42,62.14],[-7.19,62.14]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.63,62.23],[-6.65,62.09],[-6.84,62.12],[-6.73,61.95],[-7.01,62.09],[-7.17,62.28],[-6.96,62.32],[-6.63,62.23]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.41,62.26],[-6.45,62.19],[-6.54,62.21],[-6.55,62.36],[-6.41,62.26]]]},{id:"208",name:"Denmark",rings:[[[12.57,55.79],[12.54,55.66],[12.32,55.59],[12.22,55.47],[12.39,55.39],[12.41,55.29],[12.09,55.19],[12.05,54.81],[11.86,54.77],[11.74,54.92],[11.66,55.19],[11.29,55.2],[11.17,55.33],[11.19,55.47],[11.12,55.6],[11.01,55.64],[10.98,55.72],[11.32,55.75],[11.48,55.94],[11.63,55.96],[11.69,55.91],[11.69,55.73],[11.82,55.7],[11.94,55.9],[11.87,55.97],[12.22,56.12],[12.58,56.06],[12.61,56.03],[12.53,55.92],[12.57,55.79]]]},{id:"208",name:"Denmark",rings:[[[9.74,54.83],[9.25,54.81],[8.67,54.9],[8.57,55.13],[8.67,55.16],[8.62,55.42],[8.13,55.6],[8.2,55.98],[8.12,56.14],[8.16,56.61],[8.55,56.56],[8.67,56.5],[8.74,56.63],[8.89,56.73],[9.07,56.79],[9.2,56.7],[9.25,57.01],[8.99,57.02],[8.77,56.72],[8.47,56.66],[8.27,56.75],[8.29,56.85],[8.43,56.98],[8.62,57.11],[9.43,57.17],[9.96,57.58],[10.61,57.74],[10.46,57.62],[10.54,57.45],[10.52,57.24],[10.29,57],[10.28,56.62],[10.49,56.52],[10.85,56.52],[10.93,56.44],[10.86,56.3],[10.76,56.24],[10.54,56.2],[10.43,56.28],[10.37,56.25],[10.18,55.87],[9.91,55.84],[10.02,55.76],[9.59,55.49],[9.67,55.27],[9.46,55.04],[9.69,55],[9.74,54.83]]]},{id:"208",name:"Denmark",rings:[[[10.64,55.61],[10.82,55.32],[10.78,55.13],[10.63,55.05],[9.99,55.16],[9.86,55.36],[9.86,55.52],[10.29,55.61],[10.51,55.56],[10.64,55.61]]]},{id:"208",name:"Denmark",rings:[[[11.36,54.89],[11.74,54.81],[11.77,54.68],[11.46,54.63],[11.04,54.77],[11.06,54.94],[11.26,54.95],[11.36,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.73,54.75],[10.62,54.85],[10.95,55.16],[10.73,54.75]]]},{id:"208",name:"Denmark",rings:[[[12.55,54.97],[12.12,54.91],[12.27,55.06],[12.55,54.97]]]},{id:"208",name:"Denmark",rings:[[[12.67,55.6],[12.55,55.56],[12.52,55.62],[12.62,55.68],[12.67,55.6]]]},{id:"208",name:"Denmark",rings:[[[10.49,54.85],[10.34,54.86],[10.2,54.96],[10.49,54.85]]]},{id:"208",name:"Denmark",rings:[[[10.06,54.89],[9.8,54.91],[9.77,55.06],[10,54.99],[10.06,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.61,55.78],[10.53,55.78],[10.55,55.99],[10.66,55.88],[10.61,55.78]]]},{id:"208",name:"Denmark",rings:[[[11.05,57.25],[10.87,57.26],[11.09,57.33],[11.17,57.32],[11.05,57.25]]]},{id:"208",name:"Denmark",rings:[[[15.09,55.02],[14.68,55.1],[14.72,55.24],[14.77,55.3],[15.13,55.14],[15.09,55.02]]]},{id:"203",name:"Czechia",rings:[[[18.83,49.51],[18.6,49.49],[18.16,49.26],[18.08,49.07],[17.76,48.89],[17.48,48.83],[17.13,48.84],[16.95,48.6],[16.88,48.7],[16.54,48.8],[16.37,48.74],[16.06,48.75],[15.82,48.86],[14.99,49],[14.92,48.77],[14.79,48.75],[14.69,48.6],[14.19,48.58],[14.05,48.6],[13.99,48.69],[13.55,48.96],[13.44,48.96],[12.92,49.33],[12.81,49.33],[12.68,49.41],[12.39,49.74],[12.51,49.9],[12.21,50.1],[12.09,50.3],[12.28,50.18],[12.55,50.39],[12.94,50.41],[13.02,50.49],[13.18,50.51],[13.38,50.62],[13.44,50.6],[13.56,50.7],[14.37,50.9],[14.25,51],[14.28,51.03],[14.55,50.99],[14.63,50.91],[14.61,50.86],[14.72,50.82],[14.98,50.89],[14.99,51.01],[15.26,50.96],[15.36,50.81],[15.73,50.74],[16.01,50.61],[16.28,50.66],[16.36,50.62],[16.42,50.57],[16.38,50.52],[16.21,50.42],[16.64,50.1],[16.99,50.24],[16.88,50.43],[17.15,50.38],[17.42,50.25],[17.7,50.31],[17.74,50.23],[17.59,50.16],[17.63,50.12],[17.88,49.97],[18.03,50.04],[18.3,49.91],[18.56,49.88],[18.6,49.76],[18.81,49.61],[18.83,49.51]]]},{name:"N. Cyprus",rings:[[[34,35.06],[33.87,35.09],[33.47,35],[33.38,35.16],[33.19,35.17],[32.92,35.09],[32.71,35.17],[32.88,35.18],[32.94,35.39],[33.61,35.35],[34.55,35.66],[33.94,35.29],[33.91,35.2],[34,35.06]]]},{id:"196",name:"Cyprus",rings:[[[32.71,35.17],[32.92,35.09],[33.19,35.17],[33.38,35.16],[33.47,35],[33.87,35.09],[34,35.06],[34.05,34.99],[33.7,34.97],[33.41,34.75],[33.11,34.7],[33.01,34.57],[32.94,34.58],[32.87,34.66],[32.69,34.65],[32.45,34.73],[32.32,34.95],[32.3,35.08],[32.39,35.05],[32.56,35.16],[32.71,35.17]]]},{id:"100",name:"Bulgaria",rings:[[[28.01,41.97],[27.53,41.92],[27.24,42.09],[26.62,41.97],[26.51,41.83],[26.36,41.8],[26.32,41.72],[26.11,41.73],[26.07,41.67],[26.15,41.52],[26.13,41.39],[25.92,41.31],[25.25,41.24],[24.99,41.36],[24.85,41.39],[24.77,41.36],[24.49,41.56],[24.06,41.53],[24.01,41.46],[23.64,41.39],[22.92,41.34],[23,41.74],[22.84,41.99],[22.58,42.11],[22.34,42.31],[22.52,42.44],[22.44,42.63],[22.47,42.84],[22.71,42.88],[22.98,43.19],[22.5,43.52],[22.37,43.78],[22.4,43.97],[22.6,44.08],[22.63,44.19],[22.7,44.24],[23.03,44.08],[22.87,43.95],[22.92,43.83],[23.23,43.87],[25.5,43.67],[25.82,43.77],[26.22,44.01],[27.09,44.17],[27.43,44.02],[27.74,43.96],[27.88,43.99],[28.05,43.82],[28.22,43.77],[28.59,43.74],[28.56,43.5],[28.46,43.39],[28.32,43.43],[28.13,43.4],[27.93,43.19],[27.89,42.75],[27.75,42.71],[27.48,42.47],[27.71,42.35],[28.01,41.97]]]},{id:"070",name:"Bosnia and Herz.",rings:[[[19.19,43.53],[18.95,43.53],[19.03,43.29],[18.85,43.35],[18.68,43.23],[18.62,43.03],[18.46,43],[18.47,42.78],[18.55,42.64],[18.46,42.56],[18.12,42.69],[17.8,42.9],[17.67,42.9],[17.58,42.94],[17.66,42.98],[17.62,43.04],[17.29,43.31],[17.27,43.45],[17.08,43.52],[16.3,44.12],[16.21,44.21],[16.1,44.52],[15.74,44.77],[15.79,45.18],[15.96,45.21],[16.29,45.01],[16.53,45.22],[16.79,45.2],[16.92,45.28],[17.13,45.17],[17.5,45.12],[17.65,45.16],[17.81,45.08],[17.99,45.14],[18.66,45.08],[18.84,44.88],[19.35,44.88],[19.29,44.7],[19.15,44.53],[19.12,44.36],[19.58,44.01],[19.24,43.96],[19.5,43.64],[19.45,43.56],[19.3,43.59],[19.19,43.53]]]},{id:"056",name:"Belgium",rings:[[[4.22,51.39],[4.37,51.36],[4.38,51.43],[4.5,51.47],[4.64,51.42],[4.76,51.49],[4.85,51.4],[5.03,51.47],[5.1,51.35],[5.21,51.28],[5.48,51.29],[5.83,51.13],[5.64,50.84],[5.75,50.76],[5.99,50.75],[6.24,50.6],[6.18,50.52],[6.34,50.45],[6.36,50.32],[6.18,50.23],[6.12,50.12],[5.98,50.17],[5.74,49.92],[5.73,49.81],[5.88,49.65],[5.82,49.55],[5.51,49.51],[5.28,49.68],[4.87,49.79],[4.79,49.96],[4.86,50.14],[4.82,50.15],[4.55,49.96],[4.15,49.97],[4.17,50.25],[4.04,50.32],[3.79,50.35],[3.69,50.31],[3.59,50.48],[3.27,50.53],[3.23,50.66],[3.11,50.78],[2.84,50.71],[2.6,50.88],[2.53,51.1],[3.22,51.35],[3.35,51.38],[3.43,51.25],[3.58,51.29],[3.9,51.21],[4.17,51.31],[4.22,51.39]]]},{id:"112",name:"Belarus",rings:[[[31.76,52.1],[31.08,52.08],[30.76,51.89],[30.53,51.6],[30.63,51.36],[30.54,51.26],[30.33,51.33],[30.31,51.4],[30.16,51.48],[29.35,51.38],[29.1,51.63],[28.85,51.54],[28.73,51.43],[28.65,51.46],[28.6,51.54],[28.18,51.61],[28.01,51.56],[27.86,51.59],[27.7,51.48],[27.69,51.57],[27.3,51.6],[27.14,51.75],[25.79,51.92],[24.36,51.87],[23.98,51.59],[23.71,51.64],[23.61,51.61],[23.6,51.52],[23.55,51.71],[23.63,51.81],[23.65,52.04],[23.18,52.29],[23.41,52.52],[23.84,52.66],[23.92,52.77],[23.86,53.11],[23.6,53.6],[23.48,53.94],[24.19,53.95],[24.32,53.89],[24.77,53.97],[24.87,54.14],[25.05,54.13],[25.46,54.29],[25.51,54.16],[25.75,54.16],[25.75,54.26],[25.55,54.33],[25.72,54.56],[25.78,54.83],[25.86,54.92],[26.17,55],[26.25,55.12],[26.6,55.13],[26.78,55.27],[26.46,55.34],[26.6,55.67],[26.82,55.71],[27.05,55.83],[27.58,55.8],[27.64,55.91],[27.89,56.08],[28.12,56.15],[28.28,56.06],[28.56,56.09],[28.79,55.94],[29.09,56.02],[29.37,55.94],[29.35,55.78],[29.48,55.68],[29.94,55.85],[30.23,55.84],[30.91,55.57],[30.9,55.4],[30.81,55.28],[30.96,55.14],[30.98,55.05],[30.83,54.92],[30.8,54.78],[31.15,54.63],[31.07,54.49],[31.19,54.45],[31.4,54.2],[31.83,54.03],[31.75,53.81],[32.2,53.78],[32.45,53.69],[32.42,53.62],[32.47,53.55],[32.71,53.42],[32.7,53.34],[32.14,53.09],[31.85,53.11],[31.67,53.2],[31.42,53.2],[31.26,53.02],[31.56,52.76],[31.53,52.63],[31.62,52.55],[31.58,52.31],[31.76,52.1]]]},{id:"040",name:"Austria",rings:[[[9.53,47.27],[9.62,47.47],[9.52,47.52],[9.75,47.58],[10.2,47.36],[10.18,47.28],[10.37,47.37],[10.44,47.55],[10.87,47.52],[11.04,47.39],[11.3,47.42],[11.72,47.58],[12.18,47.62],[12.21,47.72],[12.48,47.64],[12.68,47.67],[12.77,47.64],[12.81,47.54],[13.02,47.48],[13.06,47.66],[12.9,47.72],[12.95,47.89],[12.76,48.08],[12.81,48.16],[13.38,48.36],[13.49,48.58],[13.73,48.54],[13.79,48.59],[13.82,48.77],[13.99,48.69],[14.05,48.6],[14.69,48.6],[14.79,48.75],[14.92,48.77],[14.99,49],[15.82,48.86],[16.06,48.75],[16.37,48.74],[16.54,48.8],[16.88,48.7],[16.95,48.6],[16.86,48.39],[17.15,48.01],[17.03,47.84],[17.07,47.71],[16.79,47.68],[16.59,47.75],[16.42,47.67],[16.64,47.61],[16.68,47.54],[16.62,47.45],[16.44,47.4],[16.46,47.27],[16.42,47.22],[16.49,47.12],[16.45,47.01],[16.33,47],[16.04,46.84],[15.98,46.8],[15.96,46.68],[15.76,46.71],[15.44,46.63],[14.89,46.61],[14.55,46.4],[12.48,46.67],[12.16,46.94],[12.17,47.08],[11.77,46.99],[11.24,46.98],[11.13,46.94],[10.99,46.78],[10.48,46.86],[10.35,46.99],[10.13,46.85],[9.88,46.94],[9.84,47.01],[9.58,47.06],[9.61,47.11],[9.53,47.27]]]},{id:"051",name:"Armenia",rings:[[[44.77,39.7],[44.29,40.04],[43.94,40.02],[43.67,40.13],[43.71,40.17],[43.57,40.48],[43.72,40.72],[43.63,40.93],[43.44,41.11],[44.23,41.21],[44.84,41.21],[44.81,41.26],[45,41.29],[45.19,41.15],[45.07,41.08],[45.42,40.99],[45.59,40.85],[45.38,40.64],[45.57,40.42],[45.96,40.23],[45.97,40.18],[45.88,40.02],[45.58,39.98],[46.2,39.59],[46.32,39.62],[46.48,39.56],[46.48,39.48],[46.37,39.4],[46.59,39.22],[46.4,39.19],[46.49,39.07],[46.49,38.91],[46.11,38.88],[45.95,39.18],[45.98,39.24],[45.77,39.38],[45.8,39.49],[45.75,39.56],[45.46,39.49],[45.25,39.6],[45.17,39.57],[45.12,39.7],[45.03,39.77],[44.77,39.7]]]},{id:"020",name:"Andorra",rings:[[[1.7,42.5],[1.45,42.44],[1.43,42.6],[1.5,42.64],[1.71,42.6],[1.7,42.5]]]},{id:"012",name:"Algeria",rings:[[[8.58,36.94],[8.6,36.83],[8.44,36.76],[8.37,36.63],[8.21,36.52],[8.35,36.37],[8.25,35.8],[8.39,35.2],[8.31,35.09],[8.25,34.73],[8.12,34.56],[7.84,34.41],[7.75,34.25],[7.52,34.08],[7.5,33.83],[7.73,33.27],[8.11,33.06],[8.21,32.93],[8.33,32.54],[9.05,32.07],[9.52,30.23],[9.31,30.12],[9.64,29.64],[9.8,29.18],[9.84,28.97],[9.82,28.56],[9.92,27.79],[9.75,27.33],[9.79,27.04],[9.89,26.85],[9.88,26.63],[9.86,26.55],[9.49,26.33],[9.42,26.15],[9.5,26],[-6.5,26],[-8.69,27.29],[-8.68,28.69],[-8.26,28.98],[-7.14,29.62],[-6.64,29.57],[-6.52,29.66],[-6.48,29.82],[-6,29.83],[-5.45,29.96],[-5.18,30.17],[-4.97,30.47],[-4.32,30.7],[-3.99,30.91],[-3.67,30.96],[-3.62,31.07],[-3.83,31.2],[-3.79,31.36],[-3.85,31.62],[-3.77,31.69],[-3.44,31.71],[-3.02,31.83],[-2.93,32.04],[-2.86,32.08],[-2.45,32.13],[-1.23,32.11],[-1.24,32.34],[-1.06,32.47],[-1.45,32.79],[-1.68,33.32],[-1.63,33.57],[-1.72,33.78],[-1.71,34.18],[-1.79,34.37],[-1.73,34.47],[-1.85,34.61],[-1.79,34.75],[-2.13,34.97],[-2.22,35.1],[-1.91,35.09],[-1.67,35.18],[-1.34,35.36],[-1.09,35.58],[-0.43,35.86],[-0.05,35.83],[0.31,36.16],[1.26,36.52],[2.59,36.6],[2.97,36.78],[3.52,36.8],[3.78,36.9],[4.76,36.9],[5.29,36.65],[6.06,36.86],[6.25,36.94],[6.33,37.05],[6.49,37.09],[6.58,37],[6.93,36.92],[7.24,36.97],[7.21,37.09],[7.43,37.06],[7.91,36.86],[8.58,36.94]]]},{id:"008",name:"Albania",rings:[[[19.34,41.87],[19.36,42.07],[19.28,42.17],[19.7,42.65],[19.79,42.48],[20.06,42.55],[20.24,42.34],[20.52,42.17],[20.58,41.92],[20.5,41.71],[20.51,41.57],[20.45,41.52],[20.49,41.27],[20.71,40.93],[20.93,40.9],[21.03,40.62],[20.95,40.49],[20.81,40.45],[20.66,40.12],[20.31,39.98],[20.38,39.8],[20.31,39.8],[20.21,39.65],[20,39.71],[19.85,40.04],[19.49,40.21],[19.32,40.41],[19.46,40.41],[19.34,40.66],[19.46,40.93],[19.44,41.43],[19.58,41.64],[19.58,41.79],[19.34,41.87]]]}],croatia:[[[16.358,46.555],[16.239,46.501],[16.295,46.38],[16.048,46.395],[16.066,46.342],[16.006,46.31],[15.775,46.26],[15.78,46.219],[15.633,46.21],[15.587,46.147],[15.714,46.045],[15.702,45.847],[15.531,45.849],[15.249,45.721],[15.319,45.674],[15.347,45.713],[15.336,45.67],[15.364,45.689],[15.394,45.648],[15.269,45.608],[15.374,45.485],[15.338,45.451],[15.148,45.424],[14.913,45.528],[14.896,45.479],[14.811,45.462],[14.679,45.532],[14.693,45.568],[14.564,45.675],[14.494,45.55],[14.312,45.474],[13.994,45.518],[13.977,45.45],[13.876,45.427],[13.499,45.51],[13.601,45.042],[13.639,45.061],[13.743,44.982],[13.786,44.857],[13.938,44.763],[14.053,44.941],[14.156,44.966],[14.149,45.071],[14.319,45.349],[14.546,45.274],[14.825,45.102],[14.906,44.941],[14.865,44.724],[14.965,44.573],[15.268,44.358],[15.527,44.249],[15.258,44.337],[15.284,44.251],[15.179,44.306],[15.186,44.251],[15.091,44.267],[15.123,44.195],[15.535,43.869],[15.59,43.769],[15.828,43.715],[15.913,43.518],[16.051,43.464],[16.185,43.469],[16.181,43.503],[16.201,43.47],[16.363,43.478],[16.271,43.519],[16.425,43.536],[16.376,43.5],[16.866,43.392],[17.522,42.927],[17.186,43.026],[16.985,43.052],[16.994,43.003],[17.212,42.97],[17.76,42.755],[17.813,42.795],[18.029,42.649],[18.196,42.612],[18.22,42.554],[18.525,42.386],[18.409,42.575],[18.345,42.616],[18.238,42.604],[17.882,42.813],[17.815,42.912],[17.685,42.924],[17.634,42.882],[17.53,42.929],[17.704,42.973],[17.665,43.054],[17.331,43.26],[17.246,43.403],[17.274,43.465],[17.005,43.573],[16.499,44.024],[16.306,44.115],[16.182,44.274],[16.205,44.344],[16.11,44.398],[16.164,44.404],[16.126,44.489],[15.998,44.583],[16.048,44.622],[15.891,44.744],[15.825,44.715],[15.717,44.83],[15.785,44.845],[15.731,44.937],[15.759,45.168],[15.822,45.22],[15.97,45.228],[16.101,45.097],[16.299,44.998],[16.503,45.221],[16.813,45.185],[16.924,45.276],[16.928,45.229],[17.013,45.235],[17.172,45.147],[17.24,45.149],[17.26,45.191],[17.33,45.146],[17.451,45.154],[17.474,45.111],[17.658,45.13],[17.833,45.047],[17.996,45.145],[18.125,45.081],[18.216,45.081],[18.251,45.136],[18.413,45.112],[18.496,45.054],[18.541,45.096],[18.646,45.055],[18.66,45.092],[18.719,44.998],[18.787,44.99],[18.761,44.897],[18.969,44.849],[19.012,44.856],[18.993,44.918],[19.056,44.901],[19.138,44.953],[19.042,44.977],[19.087,45.01],[19.077,45.141],[19.121,45.132],[19.164,45.198],[19.433,45.194],[19.405,45.237],[19.175,45.264],[18.981,45.359],[18.993,45.493],[19.087,45.496],[19.007,45.553],[18.873,45.565],[18.955,45.661],[18.898,45.707],[18.967,45.71],[18.894,45.713],[18.967,45.732],[18.951,45.769],[18.901,45.744],[18.839,45.772],[18.911,45.784],[18.888,45.827],[18.836,45.808],[18.894,45.918],[18.794,45.881],[18.65,45.919],[18.611,45.843],[18.437,45.739],[18.119,45.792],[17.9,45.797],[17.85,45.764],[17.821,45.805],[17.65,45.837],[17.554,45.938],[17.34,45.943],[17.381,45.964],[17.25,46.012],[17.284,46.029],[17.193,46.075],[17.225,46.101],[17.168,46.109],[17.147,46.169],[16.876,46.281],[16.855,46.353],[16.362,46.554]],[[14.319,45.178],[14.294,45.177],[14.25,45.125],[14.291,45.065],[14.337,45.04],[14.332,45.01],[14.375,44.967],[14.382,44.909],[14.309,44.956],[14.287,44.916],[14.313,44.823],[14.346,44.81],[14.378,44.74],[14.378,44.702],[14.329,44.716],[14.323,44.702],[14.376,44.603],[14.354,44.563],[14.396,44.549],[14.404,44.564],[14.434,44.527],[14.528,44.473],[14.525,44.445],[14.575,44.439],[14.518,44.517],[14.418,44.584],[14.39,44.631],[14.395,44.67],[14.488,44.599],[14.542,44.629],[14.474,44.698],[14.476,44.742],[14.445,44.789],[14.465,44.788],[14.442,44.875],[14.483,44.954],[14.465,44.982],[14.43,44.978],[14.396,45.013],[14.358,45.088],[14.362,45.158],[14.323,45.173]],[[14.83,44.19],[14.853,44.154],[14.823,44.157],[14.83,44.168],[14.808,44.147],[14.87,44.129],[14.902,44.091],[14.961,44.062],[15.111,43.911],[15.228,43.841],[15.207,43.839],[15.237,43.806],[15.273,43.79],[15.277,43.813],[15.317,43.782],[15.283,43.781],[15.486,43.674],[15.513,43.676],[15.476,43.689],[15.514,43.684],[15.466,43.717],[15.485,43.722],[15.473,43.733],[15.361,43.783],[15.232,43.882],[15.371,43.814],[15.333,43.878],[15.217,43.905],[15.081,44.005],[15.05,44.008],[15.004,44.084],[14.944,44.105],[14.842,44.189]],[[14.731,44.709],[14.721,44.694],[14.746,44.66],[14.903,44.516],[14.912,44.5],[14.885,44.503],[14.9,44.48],[14.963,44.459],[15.027,44.393],[15.073,44.396],[15.105,44.378],[15.077,44.361],[15.098,44.318],[15.168,44.288],[15.129,44.331],[15.23,44.295],[15.206,44.319],[15.23,44.319],[15.192,44.35],[15.248,44.321],[15.242,44.348],[15.067,44.473],[15.045,44.517],[14.994,44.535],[14.905,44.613],[14.86,44.615],[14.857,44.597]],[[14.554,45.258],[14.523,45.239],[14.539,45.214],[14.518,45.227],[14.532,45.168],[14.512,45.123],[14.466,45.13],[14.459,45.1],[14.421,45.095],[14.421,45.07],[14.486,45.023],[14.61,45.011],[14.603,44.981],[14.748,44.936],[14.746,44.969],[14.8,44.961],[14.815,44.979],[14.735,45.039],[14.731,45.071],[14.697,45.068],[14.659,45.093],[14.664,45.158],[14.657,45.149],[14.627,45.164],[14.574,45.23],[14.596,45.228],[14.56,45.254]],[[16.666,42.999],[16.593,42.98],[16.659,42.966],[16.625,42.92],[16.694,42.895],[16.672,42.919],[16.779,42.89],[16.9,42.898],[16.959,42.923],[17.096,42.904],[17.176,42.909],[17.197,42.914],[17.182,42.933],[17.204,42.941],[17.169,42.939],[17.172,42.962],[17.175,42.952],[17.208,42.962],[17.034,42.985],[16.806,42.969],[16.726,42.992]],[[16.55,43.239],[16.505,43.225],[16.568,43.186],[16.489,43.216],[16.447,43.214],[16.355,43.204],[16.381,43.172],[16.303,43.182],[16.292,43.171],[16.369,43.142],[16.477,43.155],[16.648,43.116],[16.74,43.125],[16.973,43.111],[17.194,43.125],[17.145,43.143],[16.719,43.167],[16.672,43.212],[16.573,43.222],[16.561,43.238]],[[15.675,43.727],[15.661,43.706],[15.623,43.713],[15.63,43.693],[15.717,43.653],[15.587,43.686],[15.651,43.628],[15.736,43.62],[15.713,43.644],[15.737,43.645],[15.737,43.663],[15.755,43.66],[15.766,43.677],[15.835,43.641],[15.81,43.673],[15.685,43.726]],[[14.715,44.857],[14.666,44.846],[14.686,44.797],[14.662,44.806],[14.638,44.792],[14.685,44.752],[14.756,44.747],[14.835,44.683],[14.864,44.701],[14.861,44.725],[14.743,44.816],[14.76,44.837],[14.748,44.852]],[[16.201,43.42],[16.153,43.409],[16.164,43.39],[16.533,43.264],[16.781,43.256],[16.875,43.277],[16.896,43.316],[16.771,43.363],[16.544,43.396],[16.412,43.397],[16.428,43.368],[16.412,43.338],[16.267,43.418]],[[14.979,44.19],[15.034,44.142],[15.055,44.148],[15.188,44.032],[15.225,44.024],[15.354,43.908],[15.447,43.888],[15.364,43.972],[15.265,44.018],[15.204,44.08],[15.045,44.168],[15.005,44.171]],[[14.745,44.299],[14.724,44.281],[14.741,44.244],[14.76,44.244],[14.762,44.265],[14.823,44.197],[14.812,44.228],[14.937,44.17],[14.877,44.239],[14.87,44.225],[14.801,44.266]],[[17.825,42.763],[17.826,42.743],[17.787,42.762],[17.771,42.753],[17.891,42.698],[17.928,42.702],[17.909,42.693],[17.924,42.674],[18.019,42.666],[17.849,42.756]],[[16.174,43.087],[16.024,43.057],[16.052,43.038],[16.072,43.044],[16.077,43.025],[16.051,43.006],[16.223,43.016],[16.253,43.032],[16.257,43.068],[16.194,43.082]],[[15.259,43.943],[15.272,43.929],[15.246,43.928],[15.253,43.907],[15.282,43.925],[15.343,43.896],[15.273,43.939]],[[13.711,44.946],[13.735,44.906],[13.722,44.921],[13.705,44.914],[13.743,44.885],[13.777,44.912],[13.74,44.941]],[[15.06,44.087],[15.062,44.07],[15.039,44.083],[15.098,44.019],[15.164,43.994],[15.171,44.012],[15.095,44.073]],[[14.273,44.691],[14.228,44.661],[14.219,44.626],[14.268,44.602],[14.261,44.648],[14.284,44.664]],[[15.476,43.872],[15.469,43.847],[15.492,43.824],[15.531,43.827],[15.495,43.865]],[[14.835,44.492],[14.93,44.405],[14.993,44.393],[14.867,44.458],[14.836,44.491]]],cities:[["Osijek",18.675555,45.560846,1],["Zagreb",15.98,45.81,1],["Split",16.44,43.51,1],["Rijeka",14.44,45.33,1],["Zadar",15.23,44.12,0],["Dubrovnik",18.09,42.65,0],["Pula",13.85,44.87,0],["Varaždin",16.34,46.31,0],["Slavonski Brod",18.01,45.16,0],["Vukovar",19,45.35,0],["Đakovo",18.41,45.31,0],["Vinkovci",18.8,45.29,0]],capitals:[["Beč",16.37,48.21],["Budimpešta",19.04,47.5],["München",11.58,48.14],["Ljubljana",14.51,46.06],["Beograd",20.46,44.79],["Sarajevo",18.41,43.86],["Milano",9.19,45.46],["Berlin",13.4,52.52],["Prag",14.42,50.08],["Varšava",21.01,52.23],["Pariz",2.35,48.86],["Amsterdam",4.9,52.37],["Rim",12.5,41.9],["Zürich",8.54,47.37],["Bratislava",17.11,48.15],["London",-0.13,51.51]],nodes:[[149.2,72],[116.8,71.8],[-105.7,71.7],[-53.2,71.6],[84.3,71.6],[136.8,71.4],[-85.7,71.4],[-33.2,71.3],[104.4,71.2],[71.9,71],[124.4,70.9],[-45.6,70.8],[92,70.7],[144.5,70.6],[-78,70.6],[112,70.4],[-110.5,70.4],[27,70.4],[79.6,70.2],[132.1,70.1],[-37.9,70],[99.6,69.9],[152.1,69.8],[-70.3,69.8],[67.2,69.8],[-155.3,69.7],[119.7,69.6],[-102.8,69.6],[172.2,69.5],[-50.3,69.5],[87.2,69.5],[139.7,69.4],[-82.7,69.3],[-30.2,69.2],[107.3,69.2],[22.3,69.1],[159.8,69.1],[-147.7,69],[127.3,68.9],[179.9,68.8],[-42.6,68.7],[94.9,68.7],[-127.6,68.7],[147.4,68.6],[-75.1,68.6],[62.4,68.5],[-160.1,68.5],[114.9,68.4],[-107.5,68.4],[30,68.4],[167.5,68.3],[82.5,68.3],[-140,68.2],[135,68.2],[50,68.1],[-35,68],[102.5,68],[-119.9,68],[17.6,67.9],[155.1,67.9],[-67.4,67.9],[70.1,67.8],[-152.4,67.8],[122.6,67.7],[-99.9,67.7],[37.6,67.7],[175.1,67.6],[-47.4,67.6],[90.1,67.6],[-132.3,67.5],[142.7,67.5],[57.7,67.4],[110.2,67.3],[-112.3,67.3],[25.2,67.2],[162.7,67.2],[77.7,67.1],[-144.7,67.1],[130.3,67],[-92.2,67],[45.3,67],[-177.2,66.9],[-39.7,66.9],[97.8,66.9],[-124.7,66.8],[150.3,66.8],[-72.2,66.7],[65.3,66.7],[-157.1,66.7],[117.9,66.6],[-104.6,66.6],[32.9,66.5],[170.4,66.5],[-52.1,66.5],[85.4,66.4],[-137.1,66.4],[137.9,66.3],[-84.6,66.3],[53,66.3],[105.5,66.2],[-117,66.2],[20.5,66.1],[158,66.1],[-64.5,66.1],[73,66],[-149.5,66],[125.5,65.9],[-97,65.9],[178.1,65.8],[-44.4,65.8],[93.1,65.8],[-129.4,65.8],[145.6,65.7],[60.6,65.6],[-161.9,65.6],[-24.4,65.6],[113.1,65.5],[-109.4,65.5],[28.2,65.5],[165.7,65.4],[80.7,65.4],[-141.8,65.4],[133.2,65.3],[-89.3,65.3],[48.2,65.2],[-174.3,65.2],[100.7,65.1],[-121.8,65.1],[15.8,65.1],[153.3,65],[-69.2,65],[68.3,65],[-154.2,65],[-16.7,64.9],[120.8,64.9],[-101.7,64.9],[173.3,64.8],[-49.2,64.8],[88.3,64.7],[-134.2,64.7],[140.9,64.7],[55.9,64.6],[108.4,64.5],[-114.1,64.5],[160.9,64.4],[75.9,64.4],[-146.6,64.3],[128.5,64.3],[-94,64.2],[43.5,64.2],[-41.5,64.2],[96,64.1],[-126.5,64.1],[11,64.1],[148.5,64],[63.5,64],[-159,64],[-21.4,63.9],[116.1,63.9],[-106.4,63.9],[31.1,63.8],[168.6,63.8],[83.6,63.8],[-138.9,63.7],[136.1,63.7],[51.1,63.6],[-171.4,63.6],[103.7,63.5],[-118.8,63.5],[18.7,63.5],[156.2,63.4],[-66.3,63.4],[71.2,63.4],[-151.3,63.4],[123.7,63.3],[-98.8,63.3],[38.7,63.2],[176.3,63.2],[-46.2,63.2],[91.3,63.2],[-131.2,63.1],[143.8,63.1],[58.8,63],[-163.7,63],[111.3,62.9],[-111.2,62.9],[26.3,62.9],[163.9,62.8],[78.9,62.8],[-143.6,62.8],[131.4,62.7],[46.4,62.6],[98.9,62.6],[-123.6,62.5],[13.9,62.5],[151.5,62.5],[66.5,62.4],[-156,62.4],[119,62.3],[-103.5,62.3],[34,62.3],[171.5,62.3],[86.5,62.2],[-136,62.2],[139.1,62.1],[54.1,62.1],[106.6,62],[-115.9,62],[21.6,61.9],[74.1,61.9],[-148.4,61.8],[126.7,61.8],[-95.8,61.7],[41.7,61.7],[-43.3,61.7],[94.2,61.6],[-128.3,61.6],[9.2,61.6],[146.7,61.6],[-75.8,61.5],[61.7,61.5],[-160.8,61.5],[114.3,61.4],[-108.2,61.4],[29.3,61.4],[166.8,61.3],[81.8,61.3],[-140.7,61.3],[134.3,61.2],[49.3,61.2],[101.9,61.1],[-120.6,61.1],[16.9,61],[154.4,61],[69.4,61],[-153.1,60.9],[121.9,60.9],[-100.6,60.8],[36.9,60.8],[-48.1,60.8],[89.5,60.7],[-133,60.7],[142,60.7],[57,60.6],[109.5,60.5],[-113,60.5],[24.5,60.5],[77.1,60.4],[129.6,60.3],[44.6,60.3],[97.1,60.2],[-125.4,60.2],[12.1,60.1],[149.6,60.1],[-72.8,60.1],[64.7,60.1],[-157.8,60],[117.2,60],[-105.3,60],[32.2,59.9],[84.7,59.9],[-137.8,59.8],[137.2,59.8],[52.3,59.7],[104.8,59.7],[-117.7,59.6],[-65.2,59.6],[72.3,59.5],[124.8,59.5],[-97.6,59.4],[39.9,59.4],[92.4,59.3],[-130.1,59.3],[7.4,59.3],[-77.6,59.2],[59.9,59.2],[112.4,59.1],[-110,59.1],[27.5,59.1],[80,59],[132.5,58.9],[47.5,58.9],[100,58.8],[-122.4,58.8],[15.1,58.8],[67.6,58.7],[-154.9,58.7],[120.1,58.6],[-102.4,58.6],[35.1,58.6],[87.6,58.5],[140.2,58.4],[55.2,58.4],[107.7,58.3],[-114.8,58.3],[22.7,58.3],[160.2,58.2],[75.2,58.2],[127.8,58.1],[-94.7,58.1],[42.8,58.1],[95.3,58],[-127.2,58],[-74.7,57.9],[62.8,57.9],[115.4,57.8],[-107.1,57.8],[30.4,57.8],[82.9,57.7],[-2.1,57.6],[135.4,57.6],[50.5,57.6],[103,57.5],[-119.5,57.5],[-67,57.4],[70.5,57.4],[123,57.3],[-99.5,57.3],[38.1,57.3],[90.6,57.2],[-131.9,57.2],[58.1,57.1],[110.6,57],[-111.9,57],[25.7,57],[78.2,56.9],[130.7,56.8],[-91.8,56.8],[45.7,56.8],[98.2,56.7],[-124.3,56.7],[13.3,56.6],[-71.7,56.6],[65.8,56.6],[118.3,56.5],[-104.2,56.5],[33.3,56.5],[85.8,56.4],[53.4,56.3],[105.9,56.2],[-116.6,56.2],[158.4,56.1],[-64.1,56.1],[73.4,56.1],[126,56],[-96.5,56],[41,56],[93.5,55.9],[-129,55.9],[8.5,55.9],[-76.5,55.8],[61,55.8],[-161.5,55.8],[113.6,55.7],[-108.9,55.7],[28.6,55.7],[81.1,55.6],[-3.9,55.6],[133.6,55.6],[-88.9,55.5],[48.6,55.5],[101.2,55.4],[-121.3,55.4],[-68.8,55.4],[68.7,55.3],[121.2,55.3],[-101.3,55.2],[36.2,55.2],[88.8,55.1],[56.3,55],[108.8,55],[-113.7,54.9],[23.8,54.9],[161.4,54.9],[-61.1,54.9],[76.4,54.9],[128.9,54.8],[-93.6,54.8],[43.9,54.8],[96.4,54.7],[-126.1,54.7],[11.4,54.6],[-73.5,54.6],[64,54.6],[116.5,54.5],[-106,54.5],[31.5,54.5],[84,54.4],[-1,54.4],[136.6,54.3],[-85.9,54.3],[51.6,54.3],[104.1,54.2],[-118.4,54.2],[19.1,54.2],[156.6,54.2],[-65.9,54.1],[71.6,54.1],[124.2,54.1],[-98.3,54],[39.2,54],[91.7,53.9],[-78.3,53.9],[59.2,53.8],[111.8,53.8],[-110.7,53.7],[26.8,53.7],[-58.2,53.7],[79.3,53.7],[131.8,53.6],[-90.7,53.6],[46.8,53.6],[99.4,53.5],[-123.1,53.5],[14.4,53.4],[-70.6,53.4],[66.9,53.4],[119.4,53.3],[-103.1,53.3],[34.4,53.3],[87,53.2],[139.5,53.1],[-83,53.1],[54.5,53.1],[107,53],[-115.5,53],[22,53],[-63,53],[74.6,52.9],[127.1,52.9],[-95.4,52.9],[42.1,52.8],[94.6,52.8],[-127.9,52.7],[9.6,52.7],[-75.3,52.7],[62.2,52.7],[114.7,52.6],[-107.8,52.6],[29.7,52.6],[82.2,52.5],[-2.8,52.5],[134.7,52.4],[-87.7,52.4],[49.8,52.4],[102.3,52.3],[-120.2,52.3],[17.3,52.3],[-67.7,52.2],[69.8,52.2],[122.3,52.2],[-100.1,52.1],[37.4,52.1],[89.9,52.1],[4.9,52],[142.4,52],[57.4,52],[109.9,51.9],[-112.5,51.9],[25,51.9],[-60,51.8],[77.5,51.8],[130,51.7],[-92.5,51.7],[45,51.7],[97.5,51.6],[-124.9,51.6],[12.6,51.6],[-72.4,51.5],[65.1,51.5],[117.6,51.5],[-104.9,51.4],[32.6,51.4],[85.1,51.4],[0.2,51.3],[137.7,51.3],[-84.8,51.3],[52.7,51.3],[105.2,51.2],[-117.3,51.2],[20.2,51.2],[-64.8,51.1],[72.7,51.1],[125.3,51],[-97.2,51],[40.3,51],[92.8,50.9],[7.8,50.9],[-77.2,50.9],[60.3,50.8],[112.9,50.8],[-109.6,50.8],[27.9,50.7],[-57.1,50.7],[80.4,50.7],[-4.6,50.6],[132.9,50.6],[-89.6,50.6],[48,50.6],[100.5,50.5],[-122,50.5],[15.5,50.5],[-69.5,50.4],[68,50.4],[120.5,50.4],[-102,50.3],[35.6,50.3],[88.1,50.3],[3.1,50.2],[-81.9,50.2],[55.6,50.2],[108.1,50.1],[-114.4,50.1],[23.2,50.1],[75.7,50],[128.2,49.9],[-94.3,49.9],[43.2,49.9],[95.7,49.8],[-126.8,49.8],[10.8,49.8],[-74.2,49.8],[63.3,49.7],[115.8,49.7],[-106.7,49.7],[30.8,49.6],[83.3,49.6],[-1.6,49.5],[135.9,49.5],[-86.6,49.5],[50.9,49.5],[103.4,49.4],[-119.1,49.4],[18.4,49.4],[70.9,49.3],[123.5,49.3],[-99,49.2],[38.5,49.2],[91,49.2],[6,49.1],[-79,49.1],[58.5,49.1],[111.1,49],[-111.4,49],[26.1,49],[78.6,48.9],[131.1,48.9],[-91.4,48.8],[46.1,48.8],[98.7,48.8],[-123.8,48.7],[13.7,48.7],[-71.3,48.7],[66.2,48.7],[118.7,48.6],[-103.8,48.6],[33.7,48.6],[86.3,48.5],[1.3,48.5],[138.8,48.5],[-83.7,48.4],[53.8,48.4],[106.3,48.4],[-116.2,48.3],[21.3,48.3],[73.9,48.3],[126.4,48.2],[-96.1,48.2],[41.4,48.2],[93.9,48.1],[8.9,48.1],[-76,48],[61.5,48],[114,48],[-108.5,47.9],[29,47.9],[-56,47.9],[81.5,47.9],[-3.5,47.8],[134.1,47.8],[-88.4,47.8],[49.1,47.8],[101.6,47.7],[-120.9,47.7],[16.6,47.7],[-68.4,47.6],[69.1,47.6],[121.7,47.6],[-100.8,47.5],[36.7,47.5],[89.2,47.5],[4.2,47.4],[-80.8,47.4],[56.7,47.4],[109.3,47.3],[-113.2,47.3],[24.3,47.3],[76.8,47.2],[129.3,47.2],[-93.2,47.1],[44.3,47.1],[96.9,47.1],[11.9,47],[-73.1,47],[64.4,47],[116.9,46.9],[-105.6,46.9],[-53.1,46.8],[84.5,46.8],[-0.5,46.8],[137,46.8],[-85.5,46.8],[104.5,46.7],[-118,46.7],[19.5,46.6],[-65.5,46.6],[72.1,46.6],[124.6,46.5],[-97.9,46.5],[39.6,46.5],[92.1,46.4],[7.1,46.4],[-77.8,46.4],[59.7,46.3],[112.2,46.3],[-110.3,46.3],[27.2,46.3],[79.7,46.2],[132.2,46.1],[-90.2,46.1],[47.3,46.1],[99.8,46.1],[-122.7,46],[14.8,46],[-70.2,46],[67.3,46],[119.8,45.9],[-102.6,45.9],[34.9,45.9],[87.4,45.8],[2.4,45.8],[-82.6,45.7],[54.9,45.7],[107.4,45.7],[-115,45.6],[22.5,45.6],[-62.5,45.6],[75,45.6],[127.5,45.5],[-95,45.5],[42.5,45.5],[95,45.4],[10.1,45.4],[-74.9,45.4],[62.6,45.3],[115.1,45.3],[-107.4,45.3],[82.6,45.2],[135.2,45.1],[-87.3,45.1],[102.7,45.1],[-119.8,45],[17.7,45],[-67.3,45],[70.2,45],[122.8,44.9],[-99.7,44.9],[37.8,44.9],[90.3,44.8],[5.3,44.8],[-79.7,44.7],[57.8,44.7],[110.4,44.7],[-112.1,44.7],[25.4,44.6],[77.9,44.6],[130.4,44.5],[-92.1,44.5],[45.5,44.5],[98,44.4],[-72,44.4],[65.5,44.4],[118,44.3],[-104.5,44.3],[85.6,44.2],[0.6,44.2],[-84.4,44.1],[53.1,44.1],[105.6,44.1],[-116.9,44.1],[20.7,44],[73.2,44],[125.7,43.9],[-96.8,43.9],[40.7,43.9],[93.2,43.8],[-76.7,43.8],[60.8,43.8],[113.3,43.7],[-109.2,43.7],[28.3,43.7],[80.8,43.6],[133.4,43.6],[-89.1,43.5],[100.9,43.5],[-121.6,43.5],[68.4,43.4],[121,43.3],[-101.5,43.3],[88.5,43.2],[141,43.2],[-81.5,43.2],[56,43.2],[108.6,43.1],[-113.9,43.1],[23.6,43.1],[76.1,43],[-8.9,43],[128.6,43],[-93.9,42.9],[43.6,42.9],[96.2,42.9],[11.2,42.8],[-73.8,42.8],[63.7,42.8],[116.2,42.7],[-106.3,42.7],[83.8,42.7],[-1.2,42.6],[-86.2,42.6],[103.8,42.5],[-118.7,42.5],[18.8,42.5],[71.4,42.4],[123.9,42.4],[-98.6,42.4],[91.4,42.3],[-78.5,42.2],[59,42.2],[111.5,42.2],[-111,42.1],[26.5,42.1],[79,42.1],[-6,42],[-90.9,42],[46.6,42],[99.1,41.9],[-123.4,41.9],[14.1,41.9],[-70.9,41.9],[66.6,41.8],[119.2,41.8],[-103.3,41.8],[34.2,41.8],[86.7,41.7],[1.7,41.7],[-83.3,41.6],[54.2,41.6],[106.8,41.6],[-115.7,41.6],[21.8,41.5],[74.3,41.5],[126.8,41.4],[-95.7,41.4],[41.8,41.4],[94.4,41.3],[-75.6,41.3],[61.9,41.3],[114.4,41.2],[-108.1,41.2],[29.4,41.2],[82,41.1],[-3,41.1],[-88,41.1],[102,41],[-120.5,41],[17,41],[69.6,40.9],[122.1,40.9],[-100.4,40.8],[37.1,40.8],[89.6,40.8],[-80.3,40.7],[57.2,40.7],[109.7,40.6],[-112.8,40.6],[24.7,40.6],[77.2,40.6],[-7.8,40.5],[-92.7,40.5],[44.8,40.5],[97.3,40.4],[64.8,40.3],[117.3,40.3],[-105.1,40.3],[32.4,40.3],[84.9,40.2],[-0.1,40.2],[-85.1,40.1],[104.9,40.1],[-117.5,40.1],[20,40],[72.5,40],[125,39.9],[-97.5,39.9],[40,39.9],[92.5,39.9],[-77.4,39.8],[60.1,39.8],[112.6,39.7],[-109.9,39.7],[27.6,39.7],[80.1,39.6],[-4.8,39.6],[-89.8,39.6],[47.7,39.6],[100.2,39.5],[-122.3,39.5],[67.7,39.4],[-102.2,39.4],[35.3,39.3],[87.8,39.3],[140.3,39.2],[-82.2,39.2],[55.3,39.2],[107.9,39.2],[-114.6,39.1],[22.9,39.1],[75.4,39.1],[-94.6,39],[43,39],[95.5,38.9],[63,38.9],[115.5,38.8],[-107,38.8],[30.6,38.8],[83.1,38.7],[-1.9,38.7],[-86.9,38.7],[103.1,38.6],[-119.4,38.6],[70.7,38.5],[-99.3,38.5],[38.2,38.4],[90.7,38.4],[-79.2,38.3],[58.3,38.3],[110.8,38.3],[-111.7,38.2],[78.3,38.2],[-6.6,38.2],[-91.6,38.1],[45.9,38.1],[98.4,38.1],[13.4,38],[65.9,38],[118.5,37.9],[-104,37.9],[33.5,37.9],[86,37.8],[-84,37.8],[106.1,37.7],[-116.4,37.7],[73.6,37.6],[-96.4,37.6],[41.1,37.6],[93.7,37.5],[-76.3,37.4],[61.2,37.4],[113.7,37.4],[-108.8,37.4],[28.7,37.3],[81.3,37.3],[-3.7,37.3],[-88.7,37.2],[48.8,37.2],[101.3,37.2],[-121.2,37.2],[68.9,37.1],[121.4,37],[-101.1,37],[36.4,37],[88.9,37],[-81,36.9],[56.5,36.9],[109,36.8],[-113.5,36.8],[76.5,36.8],[129.1,36.7],[-93.4,36.7],[44.1,36.7],[96.6,36.6],[64.1,36.5],[116.7,36.5],[-105.8,36.5],[84.2,36.4],[136.7,36.4],[-85.8,36.4],[51.7,36.3],[104.3,36.3],[-118.2,36.3],[71.8,36.2],[-98.2,36.2],[39.3,36.1],[91.9,36.1],[6.9,36.1],[-78.1,36],[59.4,36],[111.9,36],[-110.6,35.9],[79.5,35.9],[-5.5,35.9],[-90.5,35.8],[47,35.8],[99.5,35.8],[67.1,35.7],[119.6,35.6],[-102.9,35.6],[87.1,35.6],[2.1,35.5],[139.6,35.5],[-82.8,35.5],[54.7,35.5],[107.2,35.4],[-115.3,35.4],[74.7,35.4],[127.2,35.3],[-95.2,35.3],[42.3,35.3],[94.8,35.2],[9.8,35.2],[62.3,35.2],[114.8,35.1],[-107.6,35.1],[82.4,35],[-2.6,35],[134.9,35],[-87.6,35],[49.9,34.9],[102.4,34.9],[-120,34.9],[70,34.8],[-100,34.8],[37.5,34.7],[90,34.7],[5.1,34.7],[-79.9,34.6],[57.6,34.6],[110.1,34.6],[-112.4,34.6],[77.6,34.5],[-92.3,34.4],[45.2,34.4],[97.7,34.4],[65.2,34.3],[117.8,34.3],[-104.7,34.2],[85.3,34.2],[0.3,34.1],[-84.7,34.1],[52.8,34.1],[105.4,34.1],[-117.1,34],[72.9,34],[-97.1,33.9],[40.5,33.9],[93,33.9],[8,33.8],[60.5,33.8],[113,33.7],[-109.5,33.7],[80.6,33.7],[-4.4,33.6],[133.1,33.6],[-89.4,33.6],[48.1,33.6],[100.6,33.5],[68.2,33.5],[-101.8,33.4],[35.7,33.4],[88.2,33.3],[3.3,33.3],[-81.7,33.3],[55.8,33.3],[108.3,33.2],[-114.2,33.2],[75.8,33.1],[-94.1,33.1],[43.4,33.1],[95.9,33],[10.9,33],[63.4,32.9],[116,32.9],[-106.5,32.9],[83.5,32.8],[-1.5,32.8],[-86.5,32.8],[51,32.7],[103.6,32.7],[71.1,32.6],[-98.9,32.6],[38.6,32.5],[91.2,32.5],[6.2,32.5],[58.7,32.4],[111.2,32.4],[-111.3,32.4],[78.8,32.3],[-6.2,32.3],[131.3,32.3],[-91.2,32.2],[46.3,32.2],[98.8,32.2],[13.8,32.2],[66.4,32.1],[118.9,32.1],[-103.6,32],[86.4,32],[1.4,32],[-83.5,31.9],[54,31.9],[106.5,31.9],[-116,31.9],[21.5,31.8],[74,31.8],[-95.9,31.7],[41.6,31.7],[94.1,31.7],[9.1,31.6],[61.6,31.6],[114.2,31.6],[-108.3,31.5],[81.7,31.5],[-3.3,31.4],[-88.3,31.4],[49.2,31.4],[101.8,31.4],[69.3,31.3],[-100.7,31.2],[36.8,31.2],[89.4,31.2],[4.4,31.1],[56.9,31.1],[109.4,31],[-113.1,31],[24.4,31],[77,31],[-8,30.9],[-93,30.9],[44.5,30.9],[97,30.9],[12,30.8],[64.6,30.8],[117.1,30.7],[-105.4,30.7],[32.1,30.7],[84.6,30.7],[-0.4,30.6],[-85.3,30.6],[52.2,30.6],[104.7,30.5],[72.2,30.5],[-97.7,30.4],[39.8,30.4],[92.3,30.3],[7.3,30.3],[59.8,30.3],[112.3,30.2],[-110.1,30.2],[27.4,30.2],[79.9,30.2],[-5.1,30.1],[47.4,30.1],[99.9,30],[15,30],[67.5,30],[120,29.9],[-102.5,29.9],[35,29.9],[87.5,29.8],[2.6,29.8],[-82.4,29.8],[55.1,29.8],[107.6,29.7],[-114.9,29.7],[22.6,29.7],[75.1,29.7],[-9.8,29.6],[42.7,29.6],[95.2,29.5],[10.2,29.5],[62.7,29.5],[115.3,29.4],[-107.2,29.4],[30.3,29.4],[82.8,29.4],[-2.2,29.3],[102.9,29.2],[17.9,29.2],[70.4,29.2],[-99.6,29.1],[38,29.1],[90.5,29],[5.5,29],[58,29],[110.5,28.9],[-112,28.9],[25.6,28.9],[78.1,28.9],[-6.9,28.8],[45.6,28.8],[98.1,28.7],[13.2,28.7],[65.7,28.7],[118.2,28.6],[-104.3,28.6],[85.7,28.6],[0.8,28.5],[53.3,28.5],[105.8,28.4],[20.8,28.4],[73.3,28.4],[40.9,28.3],[93.4,28.2],[8.4,28.2],[60.9,28.2],[113.5,28.1],[-109,28.1],[28.5,28.1],[81,28.1],[-4,28],[48.5,28],[101.1,27.9],[16.1,27.9],[68.6,27.9],[-101.4,27.8],[36.1,27.8],[88.7,27.8],[3.7,27.7],[-81.3,27.7],[56.2,27.7],[108.7,27.6],[-113.8,27.6],[23.7,27.6],[76.3,27.6],[-8.7,27.5],[43.8,27.5],[96.3,27.5],[11.3,27.4],[63.9,27.4],[116.4,27.3],[-106.1,27.3],[31.4,27.3],[83.9,27.3],[-1.1,27.2],[104,27.2],[19,27.1],[71.5,27.1],[-98.4,27],[39.1,27],[91.6,27],[6.6,26.9],[59.1,26.9],[111.7,26.9],[26.7,26.8],[79.2,26.8],[-5.8,26.8],[46.7,26.7],[99.3,26.7],[14.3,26.6],[66.8,26.6],[119.3,26.6],[-103.2,26.5],[86.9,26.5],[1.9,26.5],[106.9,26.4],[21.9,26.3],[74.5,26.3],[-10.5,26.3],[42,26.2],[94.5,26.2],[9.5,26.2],[62.1,26.1],[114.6,26.1],[-107.9,26.1],[29.6,26],[82.1,26],[-2.9,26],[49.7,25.9],[102.2,25.9],[17.2,25.9],[69.7,25.8],[-100.2,25.8],[37.3,25.7],[89.8,25.7],[4.8,25.7],[109.8,25.6],[24.9,25.6],[77.4,25.5],[-7.6,25.5],[44.9,25.4],[97.4,25.4],[12.5,25.4],[65,25.3],[117.5,25.3],[-105,25.3],[32.5,25.3],[85,25.2],[0.1,25.2],[105.1,25.1],[20.1,25.1],[72.6,25],[-12.3,25],[40.2,25],[92.7,24.9],[7.7,24.9],[112.8,24.8],[27.8,24.8],[80.3,24.7],[-4.7,24.7],[47.8,24.7],[100.4,24.6],[15.4,24.6],[67.9,24.6],[-102.1,24.5],[88,24.5],[3,24.4],[55.5,24.4],[108,24.3],[23.1,24.3],[75.6,24.3],[-9.4,24.2],[43.1,24.2],[95.6,24.2],[10.7,24.1],[115.7,24],[-106.8,24],[30.7,24],[83.2,24],[-1.7,23.9],[50.8,23.9],[103.3,23.9],[18.3,23.8],[70.8,23.8],[-14.1,23.8],[-99.1,23.7],[90.9,23.7],[5.9,23.7],[58.4,23.6],[111,23.6],[26,23.5],[78.5,23.5],[-6.5,23.5],[46,23.4],[98.6,23.4],[13.6,23.4],[-103.9,23.3],[33.6,23.3],[86.2,23.2],[1.2,23.2],[53.7,23.1],[106.2,23.1],[21.2,23.1],[73.8,23],[-11.2,23],[41.3,23],[93.8,22.9],[8.8,22.9],[113.9,22.8],[28.9,22.8],[81.4,22.7],[-3.6,22.7],[49,22.7],[101.5,22.6],[16.5,22.6],[-16,22.5],[-100.9,22.5],[89.1,22.5],[4.1,22.4],[-80.9,22.4],[56.6,22.4],[109.2,22.3],[24.2,22.3],[76.7,22.3],[-8.3,22.2],[44.2,22.2],[96.8,22.2],[11.8,22.1],[31.8,22],[84.4,22],[-0.6,22],[51.9,21.9],[104.4,21.9],[19.4,21.8],[72,21.8],[-13,21.8],[-98,21.8],[39.5,21.7],[92,21.7],[7,21.7],[-78,21.6],[27.1,21.6],[79.6,21.5],[-5.4,21.5],[47.2,21.5],[99.7,21.4],[14.7,21.4],[-102.7,21.3],[34.8,21.3],[2.3,21.2],[54.8,21.2],[107.3,21.1],[22.4,21.1],[74.9,21.1],[-10.1,21],[42.4,21],[94.9,20.9],[10,20.9],[30,20.8],[82.5,20.8],[-2.4,20.7],[-87.4,20.7],[50.1,20.7],[102.6,20.7],[17.6,20.6],[-14.8,20.6],[-99.8,20.5],[5.2,20.5],[57.7,20.4],[110.3,20.4],[25.3,20.3],[77.8,20.3],[-7.2,20.3],[45.3,20.2],[97.9,20.2],[12.9,20.2],[-104.6,20.1],[33,20.1],[85.5,20],[0.5,20],[53,20],[105.5,19.9],[20.6,19.9],[73.1,19.8],[-11.9,19.8],[-96.9,19.8],[8.2,19.7],[28.2,19.6],[80.7,19.6],[-4.2,19.5],[-89.2,19.5],[48.3,19.5],[100.8,19.5],[15.8,19.4],[-101.6,19.3],[35.9,19.3],[3.4,19.3],[55.9,19.2],[23.5,19.1],[76,19.1],[-9,19.1],[43.5,19],[96.1,19],[11.1,19],[31.1,18.9],[83.7,18.8],[-1.3,18.8],[51.2,18.8],[103.7,18.7],[18.7,18.7],[-13.7,18.6],[-98.7,18.6],[6.3,18.5],[26.4,18.4],[78.9,18.4],[-6.1,18.3],[-91,18.3],[46.5,18.3],[99,18.3],[14,18.2],[34.1,18.1],[1.6,18.1],[54.1,18],[21.7,17.9],[74.2,17.9],[-10.8,17.9],[-95.8,17.9],[9.3,17.8],[29.3,17.7],[81.9,17.6],[-3.1,17.6],[49.4,17.6],[101.9,17.5],[16.9,17.5],[-15.5,17.4],[122,17.4],[-100.5,17.4],[37,17.4],[4.5,17.3],[24.6,17.2],[77.1,17.2],[-7.9,17.1],[-92.8,17.1],[44.7,17.1],[97.2,17.1],[12.2,17],[32.3,16.9],[-0.2,16.9],[52.3,16.8],[104.8,16.8],[19.9,16.8],[-12.6,16.7],[-97.6,16.7],[7.5,16.6],[27.5,16.5],[80,16.4],[-4.9,16.4],[-89.9,16.4],[47.6,16.4],[100.1,16.3],[15.1,16.3],[35.2,16.2],[2.7,16.1],[107.8,16.1],[22.8,16],[75.3,16],[-9.7,16],[42.8,15.9],[95.4,15.9],[10.4,15.9],[30.5,15.8],[-2,15.7],[-87,15.7],[50.5,15.6],[103,15.6],[18.1,15.6],[-14.4,15.5],[38.1,15.5],[5.7,15.4],[25.7,15.3],[78.2,15.3],[-6.7,15.2],[-91.7,15.2],[45.8,15.2],[98.3,15.2],[13.3,15.1],[33.4,15],[0.9,15],[-84.1,14.9],[106,14.9],[21,14.9],[-11.5,14.8],[8.6,14.7],[28.6,14.6],[-3.8,14.5],[-88.8,14.5],[48.7,14.5],[101.2,14.4],[16.2,14.4],[-16.2,14.3],[121.3,14.3],[36.3,14.3],[3.8,14.2],[108.9,14.2],[23.9,14.1],[76.4,14.1],[-8.6,14.1],[44,14],[11.5,14],[31.6,13.9],[-0.9,13.8],[-85.9,13.8],[104.2,13.7],[19.2,13.7],[-13.3,13.6],[124.2,13.6],[39.2,13.6],[6.8,13.5],[26.8,13.4],[79.4,13.4],[-5.6,13.3],[99.4,13.3],[14.4,13.2],[34.5,13.1],[2,13.1],[107.1,13],[22.1,13],[-10.4,12.9],[42.2,12.9],[9.7,12.8],[29.8,12.7],[-2.7,12.6],[102.3,12.5],[17.4,12.5],[-15.1,12.5],[37.4,12.4],[5,12.4],[25,12.2],[77.5,12.2],[-7.4,12.2],[12.6,12.1],[32.7,12],[0.2,11.9],[-84.8,11.9],[105.3,11.8],[20.3,11.8],[-12.2,11.7],[125.3,11.7],[40.3,11.7],[7.9,11.6],[28,11.5],[-4.5,11.5],[15.6,11.4],[-69.4,11.3],[35.6,11.3],[3.2,11.2],[108.2,11.1],[23.2,11.1],[-9.2,11],[43.3,11],[10.8,10.9],[-74.2,10.9],[30.9,10.8],[-1.6,10.8],[50.9,10.7],[18.5,10.6],[-66.5,10.6],[-14,10.6],[38.5,10.5],[6.1,10.5],[26.1,10.4],[78.7,10.3],[-6.3,10.3],[46.2,10.3],[98.7,10.2],[13.7,10.2],[-71.2,10.2],[33.8,10.1],[1.3,10],[-83.6,10],[21.4,9.9],[-63.6,9.9],[-11.1,9.9],[41.5,9.8],[9,9.8],[29.1,9.7],[-3.4,9.6],[49.1,9.6],[16.7,9.5],[-68.3,9.5],[36.7,9.4],[4.3,9.3],[24.3,9.2],[76.9,9.2],[-8.1,9.2],[44.4,9.1],[11.9,9.1],[-73.1,9],[32,9],[-0.5,8.9],[19.6,8.8],[-65.4,8.8],[-12.9,8.7],[39.7,8.7],[7.2,8.6],[-77.8,8.6],[27.3,8.5],[-5.2,8.5],[47.3,8.4],[99.8,8.4],[14.9,8.4],[-70.1,8.3],[34.9,8.2],[2.5,8.2],[22.5,8.1],[-62.5,8.1],[-9.9,8],[42.6,8],[10.1,7.9],[-74.9,7.9],[30.2,7.8],[-2.3,7.7],[17.8,7.6],[-67.2,7.6],[122.8,7.6],[37.8,7.5],[5.4,7.5],[25.5,7.4],[-59.5,7.3],[-7,7.3],[45.5,7.3],[13.1,7.2],[-71.9,7.2],[33.1,7.1],[0.7,7],[20.7,6.9],[158.2,6.9],[-64.3,6.9],[40.8,6.8],[8.3,6.8],[-76.7,6.7],[28.4,6.7],[80.9,6.6],[-4.1,6.6],[48.4,6.6],[101,6.5],[16,6.5],[-69,6.5],[36,6.4],[23.6,6.2],[-61.3,6.2],[-8.8,6.2],[43.7,6.1],[11.2,6.1],[-73.7,6],[116.3,6],[31.3,6],[-1.2,5.9],[18.9,5.8],[-66.1,5.8],[39,5.7],[6.5,5.6],[26.6,5.5],[-58.4,5.5],[-5.9,5.5],[46.6,5.4],[14.2,5.4],[-70.8,5.3],[119.2,5.3],[34.2,5.3],[21.8,5.1],[-63.2,5.1],[41.9,5],[9.4,4.9],[-75.6,4.9],[29.5,4.8],[-55.5,4.8],[102.1,4.7],[17.1,4.7],[-67.9,4.6],[37.2,4.6],[24.8,4.4],[-60.2,4.4],[44.8,4.3],[97.3,4.3],[12.4,4.2],[-72.6,4.2],[117.4,4.1],[32.4,4.1],[-52.6,4.1],[20,4],[-65,3.9],[40.1,3.9],[27.7,3.7],[-57.3,3.7],[15.3,3.5],[-69.7,3.5],[35.3,3.4],[23,3.3],[-62,3.2],[43,3.2],[10.6,3.1],[-74.4,3.1],[115.6,3],[30.6,3],[-54.4,3],[103.2,2.8],[18.2,2.8],[-66.8,2.8],[38.3,2.7],[25.9,2.6],[-59.1,2.5],[45.9,2.5],[98.5,2.4],[13.5,2.4],[-71.5,2.4],[33.5,2.3],[-51.4,2.3],[21.1,2.1],[-63.8,2.1],[41.2,2],[-76.2,1.9],[113.8,1.9],[28.8,1.9],[-56.2,1.8],[101.4,1.7],[16.4,1.7],[-68.6,1.7],[36.5,1.6],[24.1,1.4],[-60.9,1.4],[44.1,1.3],[11.7,1.3],[-73.3,1.2],[116.7,1.2],[31.7,1.2],[-53.3,1.1],[19.3,1],[-65.7,1],[124.4,0.9],[39.4,0.9],[-78.1,0.8],[112,0.7],[27,0.7],[-58,0.7],[99.6,0.6],[14.6,0.6],[-70.4,0.5],[34.7,0.5],[22.3,0.3],[-62.7,0.3],[42.3,0.2],[9.9,0.1],[-75.1,0.1],[114.9,0],[29.9,0],[-55.1,0],[102.5,-0.1],[17.5,-0.1],[-67.5,-0.2],[37.6,-0.2],[-79.9,-0.3],[110.2,-0.4],[25.2,-0.4],[-59.8,-0.4],[12.8,-0.6],[-72.2,-0.6],[32.8,-0.7],[-52.1,-0.7],[20.5,-0.8],[-64.5,-0.9],[40.5,-0.9],[-76.9,-1],[113.1,-1.1],[28.1,-1.1],[-56.9,-1.1],[133.2,-1.2],[100.7,-1.3],[15.7,-1.3],[-69.3,-1.3],[35.8,-1.4],[-49.2,-1.4],[23.4,-1.5],[-61.6,-1.6],[11,-1.7],[-74,-1.7],[116,-1.8],[31,-1.8],[-53.9,-1.8],[103.6,-2],[18.6,-2],[-66.3,-2],[38.7,-2.1],[-46.3,-2.1],[-78.7,-2.2],[111.3,-2.2],[26.3,-2.2],[-58.7,-2.3],[13.9,-2.4],[-71.1,-2.4],[34,-2.5],[-51,-2.5],[139,-2.6],[106.6,-2.7],[21.6,-2.7],[-63.4,-2.7],[-43.4,-2.8],[-75.8,-2.9],[114.2,-2.9],[29.2,-2.9],[-55.8,-3],[134.3,-3],[101.8,-3.1],[16.8,-3.1],[-68.2,-3.1],[121.9,-3.2],[36.9,-3.2],[-48.1,-3.2],[141.9,-3.3],[24.5,-3.4],[-60.5,-3.4],[-40.4,-3.5],[12.1,-3.5],[-72.9,-3.6],[32.2,-3.7],[-52.8,-3.7],[137.2,-3.7],[104.7,-3.8],[19.8,-3.8],[-65.2,-3.8],[-45.2,-3.9],[-77.6,-4],[27.4,-4.1],[-57.6,-4.1],[15,-4.3],[-70,-4.3],[120.1,-4.3],[35.1,-4.4],[-49.9,-4.4],[140.1,-4.4],[22.7,-4.5],[-62.3,-4.5],[-42.2,-4.6],[-74.7,-4.7],[30.3,-4.8],[-54.6,-4.8],[18,-5],[-67,-5],[38,-5.1],[-47,-5.1],[143.1,-5.1],[-79.4,-5.1],[25.6,-5.2],[-59.4,-5.2],[-39.3,-5.3],[13.2,-5.4],[-71.8,-5.4],[33.3,-5.5],[-51.7,-5.5],[138.3,-5.6],[20.9,-5.7],[-64.1,-5.7],[-44,-5.8],[146,-5.8],[-76.5,-5.8],[28.5,-5.9],[-56.4,-6],[-36.4,-6.1],[16.1,-6.1],[-68.8,-6.1],[36.2,-6.2],[-48.8,-6.2],[141.3,-6.3],[23.8,-6.4],[-61.2,-6.4],[-41.1,-6.5],[-73.6,-6.6],[31.5,-6.6],[-53.5,-6.7],[19.1,-6.8],[156.6,-6.8],[-65.9,-6.8],[39.1,-6.9],[-45.9,-6.9],[144.2,-7],[-78.3,-7],[111.7,-7],[26.7,-7.1],[-58.3,-7.1],[131.8,-7.1],[-38.2,-7.2],[14.3,-7.2],[-70.7,-7.3],[34.4,-7.3],[-50.6,-7.4],[139.4,-7.4],[22,-7.5],[-63,-7.5],[-42.9,-7.6],[147.1,-7.7],[-75.4,-7.7],[29.7,-7.8],[-55.3,-7.8],[-35.3,-7.9],[17.3,-7.9],[-67.7,-8],[37.3,-8],[-47.7,-8.1],[142.4,-8.1],[24.9,-8.2],[-60.1,-8.2],[-40,-8.3],[-72.5,-8.4],[117.6,-8.5],[32.6,-8.5],[-52.4,-8.5],[20.2,-8.6],[-64.8,-8.7],[125.2,-8.7],[-44.7,-8.8],[-77.2,-8.8],[27.8,-8.9],[-57.1,-8.9],[-37.1,-9],[15.5,-9.1],[153,-9.1],[-69.5,-9.1],[35.5,-9.2],[-49.5,-9.2],[23.1,-9.4],[-61.9,-9.4],[-41.8,-9.5],[148.2,-9.5],[-74.3,-9.5],[30.8,-9.6],[-54.2,-9.7],[18.4,-9.8],[-66.6,-9.8],[38.4,-9.9],[-46.5,-9.9],[26,-10.1],[-58.9,-10.1],[-38.9,-10.2],[13.6,-10.2],[-71.3,-10.3],[33.7,-10.3],[-51.3,-10.4],[21.3,-10.5],[-63.7,-10.5],[-43.6,-10.6],[-76.1,-10.7],[29,-10.8],[-56,-10.8],[16.6,-10.9],[-68.4,-11],[36.6,-11.1],[-48.4,-11.1],[24.2,-11.2],[-60.8,-11.2],[-40.7,-11.3],[-73.2,-11.4],[31.9,-11.5],[-53.1,-11.5],[19.5,-11.7],[-65.5,-11.7],[39.6,-11.8],[-45.4,-11.8],[27.2,-11.9],[-57.8,-12],[-37.8,-12.1],[14.8,-12.1],[-70.2,-12.1],[34.8,-12.2],[-50.2,-12.2],[22.4,-12.4],[-62.6,-12.4],[-42.5,-12.5],[-75,-12.6],[30.1,-12.7],[-54.9,-12.7],[135.1,-12.7],[17.7,-12.8],[-67.3,-12.8],[37.7,-12.9],[-47.2,-13],[142.8,-13],[25.3,-13.1],[-59.6,-13.1],[130.4,-13.2],[-39.6,-13.2],[13,-13.3],[-72,-13.3],[33,-13.4],[-52,-13.4],[20.6,-13.5],[-64.4,-13.6],[-44.3,-13.7],[28.3,-13.8],[-56.7,-13.8],[133.3,-13.9],[48.3,-13.9],[15.9,-14],[-69.1,-14],[35.9,-14.1],[-49,-14.1],[23.5,-14.3],[-61.4,-14.3],[-41.4,-14.4],[-73.8,-14.5],[31.2,-14.5],[-53.8,-14.6],[18.8,-14.7],[-66.2,-14.7],[38.9,-14.8],[-46.1,-14.8],[143.9,-14.9],[26.5,-15],[-58.5,-15],[131.5,-15.1],[14.1,-15.2],[-70.9,-15.2],[34.1,-15.3],[-50.9,-15.3],[21.7,-15.4],[-63.3,-15.5],[126.8,-15.5],[-43.2,-15.6],[29.4,-15.7],[-55.6,-15.7],[134.4,-15.8],[49.5,-15.8],[17,-15.9],[-68,-15.9],[37.1,-16],[-47.9,-16],[142.1,-16.1],[24.7,-16.2],[-60.3,-16.2],[129.7,-16.2],[44.7,-16.3],[-40.3,-16.3],[12.3,-16.3],[-72.7,-16.4],[32.3,-16.4],[-52.7,-16.5],[137.4,-16.5],[19.9,-16.6],[-65.1,-16.6],[125,-16.7],[-45,-16.7],[145,-16.8],[27.6,-16.9],[-57.4,-16.9],[132.6,-17],[47.6,-17],[15.2,-17.1],[-69.8,-17.1],[35.2,-17.2],[-49.7,-17.2],[22.8,-17.3],[-62.1,-17.4],[127.9,-17.4],[-42.1,-17.5],[30.5,-17.6],[-54.5,-17.7],[135.6,-17.7],[18.1,-17.8],[-66.9,-17.8],[123.2,-17.9],[-46.8,-17.9],[143.2,-18],[25.8,-18.1],[-59.2,-18.1],[130.8,-18.2],[45.8,-18.2],[13.4,-18.3],[33.4,-18.4],[-51.5,-18.4],[138.5,-18.4],[21,-18.5],[-63.9,-18.6],[126.1,-18.6],[-43.9,-18.7],[146.1,-18.7],[28.7,-18.8],[-56.3,-18.8],[133.8,-18.9],[48.8,-18.9],[16.3,-19],[-68.7,-19],[-48.6,-19.1],[141.4,-19.2],[24,-19.3],[-61,-19.3],[129,-19.4],[-41,-19.4],[31.6,-19.6],[-53.4,-19.6],[136.7,-19.6],[19.2,-19.7],[-65.8,-19.8],[124.3,-19.8],[-45.7,-19.9],[144.3,-19.9],[26.9,-20],[-58.1,-20],[131.9,-20.1],[47,-20.1],[14.5,-20.2],[119.5,-20.3],[34.6,-20.3],[-50.4,-20.3],[139.6,-20.4],[22.2,-20.5],[-62.8,-20.5],[127.2,-20.6],[-42.8,-20.6],[147.3,-20.7],[29.8,-20.8],[-55.2,-20.8],[134.9,-20.9],[17.4,-20.9],[-67.6,-21],[122.5,-21],[-47.5,-21.1],[142.5,-21.1],[25.1,-21.2],[-59.9,-21.3],[130.1,-21.3],[45.1,-21.3],[117.7,-21.5],[32.7,-21.5],[-52.2,-21.5],[137.8,-21.6],[20.3,-21.7],[-64.6,-21.7],[125.4,-21.8],[-44.6,-21.8],[145.5,-21.9],[28,-22],[-57,-22],[133.1,-22.1],[15.6,-22.2],[-69.4,-22.2],[120.7,-22.2],[-49.3,-22.3],[140.7,-22.4],[23.3,-22.5],[-61.7,-22.5],[128.3,-22.5],[43.3,-22.6],[148.4,-22.6],[115.9,-22.7],[30.9,-22.7],[-54,-22.8],[136,-22.8],[18.5,-22.9],[-66.4,-23],[123.6,-23],[-46.4,-23.1],[143.6,-23.1],[26.2,-23.2],[-58.8,-23.2],[131.3,-23.3],[46.3,-23.3],[118.9,-23.5],[33.9,-23.5],[-51.1,-23.5],[138.9,-23.6],[21.5,-23.7],[-63.5,-23.7],[126.5,-23.8],[146.6,-23.9],[114.1,-23.9],[29.1,-24],[-55.9,-24],[134.2,-24.1],[16.7,-24.2],[-68.3,-24.2],[121.8,-24.2],[-48.2,-24.3],[141.8,-24.4],[24.4,-24.5],[-60.6,-24.5],[129.4,-24.5],[44.5,-24.6],[149.5,-24.6],[117,-24.7],[32.1,-24.7],[-52.9,-24.8],[137.1,-24.8],[19.7,-24.9],[-65.3,-25],[124.7,-25],[144.8,-25.1],[27.3,-25.2],[-57.7,-25.3],[132.4,-25.3],[14.9,-25.4],[152.4,-25.4],[-70.1,-25.4],[120,-25.5],[-50,-25.5],[140,-25.6],[22.6,-25.7],[-62.4,-25.7],[127.6,-25.8],[147.7,-25.9],[115.2,-26],[30.2,-26],[-54.7,-26],[135.3,-26.1],[17.8,-26.2],[-67.1,-26.2],[122.9,-26.3],[143,-26.4],[25.5,-26.5],[-59.5,-26.5],[130.6,-26.6],[150.6,-26.7],[118.2,-26.8],[-51.8,-26.8],[138.2,-26.9],[20.8,-27],[-64.2,-27],[125.8,-27.1],[145.9,-27.2],[28.4,-27.3],[-56.5,-27.3],[133.5,-27.4],[16,-27.5],[-68.9,-27.5],[121.1,-27.5],[-48.9,-27.6],[141.1,-27.7],[23.7,-27.8],[-61.3,-27.8],[128.8,-27.8],[148.8,-28],[116.4,-28],[31.4,-28.1],[-53.6,-28.1],[136.4,-28.1],[19,-28.2],[-66,-28.3],[124,-28.3],[144.1,-28.4],[26.6,-28.6],[-58.4,-28.6],[131.7,-28.6],[151.7,-28.8],[-70.8,-28.8],[119.3,-28.8],[-50.7,-28.9],[139.3,-28.9],[21.9,-29],[-63.1,-29.1],[126.9,-29.1],[147,-29.2],[29.6,-29.4],[-55.4,-29.4],[134.6,-29.4],[17.2,-29.5],[-67.8,-29.6],[122.2,-29.6],[142.3,-29.7],[24.8,-29.8],[-60.2,-29.9],[129.9,-29.9],[149.9,-30.1],[117.5,-30.1],[-52.5,-30.2],[137.5,-30.2],[20.1,-30.3],[-64.9,-30.4],[125.1,-30.4],[145.2,-30.6],[27.7,-30.7],[-57.2,-30.7],[132.8,-30.7],[152.9,-30.9],[-69.6,-30.9],[120.4,-30.9],[140.5,-31.1],[23,-31.2],[-62,-31.2],[128.1,-31.3],[148.1,-31.4],[115.7,-31.4],[-54.3,-31.5],[135.7,-31.6],[18.3,-31.7],[-66.7,-31.7],[123.3,-31.8],[143.4,-31.9],[25.9,-32],[-59,-32],[151,-32.2],[-71.4,-32.2],[118.6,-32.3],[138.6,-32.4],[21.2,-32.5],[-63.8,-32.5],[146.3,-32.7],[-56.1,-32.8],[-68.5,-33],[121.5,-33.1],[141.6,-33.2],[24.1,-33.3],[-60.9,-33.4],[149.2,-33.5],[116.8,-33.6],[136.8,-33.7],[19.4,-33.9],[-65.6,-33.9],[144.5,-34.1],[-57.9,-34.2],[-70.3,-34.4],[139.8,-34.6],[-62.7,-34.7],[147.4,-34.9],[-67.4,-35.3],[142.7,-35.4],[-59.7,-35.6],[-72.1,-35.8],[-64.5,-36.1],[145.6,-36.3],[-56.8,-36.5],[-69.2,-36.7],[140.9,-36.9],[-61.5,-37],[148.5,-37.2],[-66.3,-37.5],[143.8,-37.7],[-58.6,-37.9],[-71,-38.1],[-63.4,-38.4],[146.7,-38.6],[-68.1,-39],[174.5,-39.1],[-72.8,-39.5],[-65.2,-39.9],[-69.9,-40.5],[172.7,-40.6],[147.9,-41],[-67,-41.4],[-71.7,-42],[-64,-42.3],[146,-42.5],[-68.8,-42.9],[-65.9,-43.9],[-70.6,-44.5],[167.2,-45.2],[-67.7,-45.5],[-72.4,-46.1],[-69.5,-47.1],[-74.2,-47.7],[-66.5,-48.1],[-71.3,-48.8],[-68.4,-49.9],[-73.1,-50.6],[-70.2,-51.7],[-72,-53.5],[-69,-54.7]]};var wn=Math.PI/180,pn=[18.675555,45.560846],is=4,Go=Math.cos(45*wn),Ho=is*180/Math.PI,Wo=0.00003629632318246162,Fi=0.00003598934715324264,z3=7,gr=1+Math.log(1/(Fi*z3))/Math.log(500),ss=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),la=(e,t,i)=>e+(t-e)*i,vt=(e,t,i)=>{let s=ss((i-e)/(t-e));return s*s*(3-2*s)};var ua=(e,t,i,s)=>e+(t-e)*(1-Math.exp(-i*s));function vi(e,t,i=1,s=new P){let r=t*wn,a=e*wn;return s.set(i*Math.cos(r)*Math.sin(a),i*Math.sin(r),i*Math.cos(r)*Math.cos(a))}function Ni(e,t){return[(e-pn[0])*is*Go,-(t-pn[1])*is]}function ha(e){return e<1?Math.pow(22.5,e-1):Math.pow(500,e-1)}function qn(e=1){let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Rs={value:0},br={value:new P(0,1,0)},Cs={value:new Oe(-0.12,0.38)},Ar=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),vr=`
uniform float uBend;
vec3 sphereNormal(vec2 xz){
  float lat = (${Ar(pn[1])} - xz.y / ${Ar(is)}) * 0.017453292519943295;
  float dl = xz.x / ${Ar(is*Go)} * 0.017453292519943295;
  float la0 = ${Ar(pn[1]*wn)};
  float cl = cos(lat), sl = sin(lat), cd = cos(dl);
  return vec3(cl * sin(dl), sl * sin(la0) + cl * cd * cos(la0), cl * cd * sin(la0) - sl * cos(la0));
}
vec3 bendPos(vec3 p){
  if (uBend < 1e-4) return p;
  vec3 e = sphereNormal(p.xz);
  return mix(p, e * (${Ar(Ho)} + p.y) - vec3(0.0, ${Ar(Ho)}, 0.0), uBend);
}
`,ko=512,zo=256;function hf(){let e=new Uint8Array(ko*zo*4),t=new mi(e,ko,zo,kn,bn);t.colorSpace=Mn,t.minFilter=Gt,t.magFilter=Gt,t.generateMipmaps=!1,t.wrapS=ei,t.needsUpdate=!0;function i(r){let a=ko,o=zo,c;try{let A=document.createElement("canvas");A.width=a,A.height=o;let m=A.getContext("2d",{willReadFrequently:!0});m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(r,0,0,a,o),c=m.getImageData(0,0,a,o).data}catch{return}let l=new Float32Array(a*o);for(let A=0;A<a*o;A++)l[A]=c[A*4]/255;let u=new Float32Array(a*o),h=(A,m,S)=>{for(let w=0;w<o;w++){let b=(90-(w+0.5)*180/o)*wn,M=Math.min(a>>2,Math.max(1,Math.round(S/Math.max(Math.cos(b),0.18)))),R=w*a,C=0;for(let v=-M;v<=M;v++)C+=A[R+(v+a)%a];for(let v=0;v<a;v++)m[R+v]=C/(2*M+1),C+=A[R+(v+M+1)%a]-A[R+(v-M+a)%a]}},f=(A,m,S)=>{for(let w=0;w<a;w++)for(let b=0;b<o;b++){let M=0,R=0;for(let C=Math.max(0,b-S);C<=Math.min(o-1,b+S);C++)M+=A[C*a+w],R++;m[b*a+w]=M/R}},d=(A)=>{let m=Float32Array.from(l);for(let S=0;S<2;S++)h(m,u,A),f(u,m,Math.max(1,Math.round(A)));return m},p=d(0.7),g=d(2),y=d(8);for(let A=0;A<o;A++){let m=(o-1-A)*a;for(let S=0;S<a;S++){let w=A*a+S,b=(m+S)*4;e[b]=Math.round(g[w]*255),e[b+1]=Math.round(y[w]*255),e[b+2]=Math.round(p[w]*255)}}t.needsUpdate=!0}function s(r){let a=ko,o=zo,c;try{let l=document.createElement("canvas");l.width=a,l.height=o;let u=l.getContext("2d",{willReadFrequently:!0});u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(r,0,0,a,o),c=u.getImageData(0,0,a,o).data}catch{return}for(let l=0;l<o;l++){let u=(o-1-l)*a;for(let h=0;h<a;h++){let f=Math.min(1,c[(l*a+h)*4]/255*2.2);e[(u+h)*4+3]=Math.round(Math.sqrt(f)*255)}}t.needsUpdate=!0}return{texture:t,fill:i,fillLights:s}}var xr={value:0},Vo=`
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
// noćna svjetla iz snimke NASA/NOAA (tools/build-lights.py): stvarna geografija, stiliziran prikaz.
// Odluka se donosi po ćeliji matrice (uv središta ćelije, hash ćelije), pa svijetle cijele točke, a ne mrlje.
// Vjerojatnost i jačina rastu s gustoćom; jezgre metropola su toplobijele, predgrađa i sela natrijeva
// narančasta, rijetke točke u velikim gradovima hladni LED. Ispod praga snimke ostaje tiha pozadina
// rijetkih slabih svjetala (manja mjesta), rjeđa u dubokoj unutrašnjosti kontinenata; ambK je stišava
// na finijim razinama matrice, da se izbliza ne pretvori u posipanje.
// Vraća rgb noćnog svjetla (s regionalnim sjajem iz polja, kanal A) i a = maska dnevnog sloja: samo gusta
// urbana područja (viši prag), da se danju čitaju gradovi i koridori, a ne posipanje po cijelom kopnu.
uniform sampler2D uLights; uniform float uCivic;
vec4 cityLights(vec2 cellUv, float hc, float dm, vec4 F, float ambK){
  float L = texture2D(uLights, cellUv).r;
  float on = step(hc, smoothstep(0.012, 0.5, L));
  float inten = 0.3 + 0.7 * smoothstep(0.04, 0.85, L);
  vec3 c = mix(vec3(1.0, 0.57, 0.23), vec3(1.0, 0.84, 0.62), smoothstep(0.32, 0.95, L));
  c = mix(c, vec3(0.84, 0.9, 1.0), step(0.94, fract(hc * 7.31)) * smoothstep(0.4, 0.9, L) * 0.65);
  float amb = (1.0 - on) * step(fract(hc * 13.7), (0.08 + 0.3 * (1.0 - smoothstep(0.5, 0.95, F.b))) * (1.0 - 0.45 * smoothstep(0.86, 0.99, F.g)) * ambK);
  vec3 rgb = (c * on * inten + vec3(1.0, 0.6, 0.26) * amb * 0.45) * dm + vec3(1.0, 0.52, 0.2) * F.a * F.a * 0.15;
  float civ = step(hc, smoothstep(0.22, 0.75, L));
  return vec4(rgb, civ * dm);
}
// danja boja točke naselja: jantar jednake težine kao plava točka matrice (ljudi i tvrtke u mreži)
vec3 civicTone(float day){ return vec3(0.6, 0.36, 0.15) * (0.22 + 1.0 * day); }
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
`;function tn({count:e,color:t="#7fa2ff",core:i="#ffffff",size:s=1,additive:r=!0,depthTest:a=!0,bend:o=!1,nightOnly:c=!1,tint:l=null}){let u=new it,h=new Float32Array(e*3),f=new Float32Array(e).fill(1),d=new Float32Array(e).fill(1),p=new Float32Array(e),g=l?new Float32Array(e):null;if(u.setAttribute("position",new ut(h,3)),u.setAttribute("aAlpha",new ut(f,1)),u.setAttribute("aSize",new ut(d,1)),u.setAttribute("aWake",new ut(p,1)),g)u.setAttribute("aTint",new ut(g,1));let y={uColor:{value:new Be(t)},uCore:{value:new Be(i)},uColor2:{value:new Be(l?.color||t)},uCore2:{value:new Be(l?.core||i)},uSize:{value:s},uPR:{value:1},uOpacity:{value:1},uMax:{value:40},uMin:{value:0},uFall:{value:2},uWake:{value:1},uTime:{value:0},uFlick:{value:0},uBend:Rs,uSunMap:br,uDayEdge:Cs},A=new wt({uniforms:y,transparent:!0,depthWrite:!1,depthTest:a,blending:r?Zt:ui,vertexShader:`
      attribute float aAlpha; attribute float aSize; attribute float aWake;
      ${g?"attribute float aTint; varying float vT;":""}
      uniform float uSize; uniform float uPR; uniform float uMax; uniform float uMin; uniform float uFall; uniform float uWake; uniform float uTime; uniform float uFlick;
      varying float vA; varying float vPx;
      ${o||c?vr:""}
      ${c?"uniform vec3 uSunMap; uniform vec2 uDayEdge;":""}
      void main(){
        ${g?"vT = aTint;":""}
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
      uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uColor2; uniform vec3 uCore2; uniform float uOpacity; varying float vA; varying float vPx;
      ${g?"varying float vT;":""}
      void main(){
        vec3 cA = ${g?"mix(uColor, uColor2, vT)":"uColor"};
        vec3 cB = ${g?"mix(uCore, uCore2, vT)":"uCore"};
        if (vA < 0.004) discard;
        float d = length(gl_PointCoord - 0.5);
        // točka od 1–3 px: profil sjaja bi se uzorkovao izvan središta (svjetlo bi gotovo nestalo) — tada je pun disk
        float k = clamp((vPx - 1.5) / 3.0, 0.0, 1.0);
        if (d > mix(0.75, 0.5, k)) discard;
        float halo = pow(max(1.0 - d * 2.0, 0.0), 2.0);
        float core = smoothstep(0.18, 0.0, d);
        float prof = mix(0.85, halo * 0.7 + core, k);
        gl_FragColor = vec4(mix(cA, cB, mix(0.35, core, k)), prof * vA * uOpacity);
      }`}),m=new Ji(u,A);return m.frustumCulled=!1,{points:m,pos:h,alpha:f,size:d,wake:p,tint:g,uniforms:y,geometry:u,material:A}}function jo(e="#8aa6ff",t=1,i=!1){return new Gn({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:i?Zt:ui})}var df=1.032;function ff({geo:e,lite:t,landUrl:i,lightsUrl:s}){let r=new zt;r.name="planet";let a=new zt;r.add(a);let o=pn[1]*wn,c=pn[0]*wn,l=vi(pn[0],pn[1]),u=new P(-Math.sin(o)*Math.sin(c),Math.cos(o),-Math.sin(o)*Math.cos(c)).normalize(),h=new P().crossVectors(u,l).normalize(),f=new at().makeBasis(h,l,u),d=new at().makeBasis(new P(1,0,0),new P(0,1,0),new P(0,0,-1));r.quaternion.setFromRotationMatrix(new at().multiplyMatrices(d,f.clone().transpose()));let p=hf(),g=new Li().load(i,(z)=>p.fill(z.image));g.colorSpace=Mn,g.format=fi,g.minFilter=Gt,g.generateMipmaps=!1,g.wrapS=ei;let y=new Li().load(s,(z)=>p.fillLights(z.image));y.colorSpace=Mn,y.format=fi,y.minFilter=Gt,y.generateMipmaps=!1,y.wrapS=ei;let A={uLand:{value:g},uField:{value:p.texture},uLights:{value:y},uCivic:xr,uSun:{value:new P(0.78,0.46,-0.95).normalize()},uTime:{value:0},uAlpha:{value:1},uDots:{value:1},uNight:{value:1}},m=new wt({uniforms:A,transparent:!0,vertexShader:`
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
      ${Vo}
      void main(){
        vec3 o = normalize(vObj);
        float lat = asin(clamp(o.y, -1.0, 1.0));
        float lon = atan(o.x, o.z);
        vec2 uv = vec2((lon + 3.14159265) / 6.2831853, (lat + 1.5707963) / 3.14159265);
        float land = smoothstep(0.25, 0.75, texture2D(uLand, uv).r);
        vec4 F = texture2D(uField, uv);
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
        // noćna strana: tiha matrica i svjetla naselja prema stvarnoj snimci; približavanjem Europi
        // gustoća naselja nazire se i danju (uCivic), kao tihi topli sloj u matrici
        float night = 1.0 - smoothstep(-0.06, 0.2, ndl);
        col += dots * uDots * vec3(0.08, 0.16, 0.38) * (1.0 - day) * 0.45;
        vec2 gc = floor(g) + 0.5;
        float latc = gc.y * 0.0062832;
        vec2 uvc = vec2((gc.x * 0.0062832 / max(cos(latc), 0.05) + 3.14159265) / 6.2831853, (latc + 1.5707963) / 3.14159265);
        vec4 cl = cityLights(uvc, eHash(floor(g)), dots, F, 1.0);
        float civ = uCivic * (1.0 - night);
        // danju je naselje jantarna točka u plavoj matrici (podatkovni sloj), noću stvarno svjetlo
        col = mix(col, civicTone(day), clamp(cl.a * civ, 0.0, 1.0));
        col += cl.rgb * night * uNight;
        col += hazeTone(mu, ndl);
        gl_FragColor = vec4(col, uAlpha);
      }`}),S=new Pt(new ur(1,t?96:160,t?64:112),m);S.renderOrder=0,a.add(S);let w={uSun:A.uSun,uAlpha:{value:1}},b=new Pt(new ur(df,t?72:112,t?48:72),new wt({uniforms:w,side:ci,transparent:!0,depthWrite:!1,blending:Zt,vertexShader:`
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
        const float RA = ${df.toFixed(3)};
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
        }`}));b.renderOrder=1,r.add(b);let M=[],R=new P,C=new P,v=(z,B)=>{for(let j of z)for(let ie=0;ie<j.length-1;ie++)vi(j[ie][0],j[ie][1],B,R),vi(j[ie+1][0],j[ie+1][1],B,C),M.push(R.x,R.y,R.z,C.x,C.y,C.z)};e.europe.forEach((z)=>v(z.rings,1.0012)),v(e.croatia,1.0016);let T=new it().setAttribute("position",new tt(M,3)),I=jo("#5b7bd8",0.3,!0);a.add(new en(T,I));let N=vi(pn[0],pn[1]),F=tn({count:1,color:"#ffb23f",core:"#fff3d6",size:0.05});return N.clone().multiplyScalar(1.004).toArray(F.pos,0),F.uniforms.uMin.value=4,a.add(F.points),{group:r,spin:a,sun:A.uSun.value,land:g,lights:y,field:p.texture,update(z){if(r.visible=z.alpha>0.002,!r.visible)return;a.rotation.y=z.spin,A.uTime.value=z.time,A.uAlpha.value=z.alpha,A.uNight.value=1-z.dive,m.depthWrite=z.alpha>0.5,A.uDots.value=0.7+0.3*z.net,w.uAlpha.value=z.alpha*(1-z.dive*0.85),I.opacity=z.alpha*(0.12+0.3*z.dive+0.1*z.net)*(1-z.finale*0.5),F.uniforms.uPR.value=z.pr,F.uniforms.uOpacity.value=z.alpha*(0.35+0.65*Math.max(z.finale,z.net*0.6)),F.size[0]=(1+z.finale*1.8)*(0.85+0.15*Math.sin(z.time*2.2)),F.geometry.attributes.aSize.needsUpdate=!0},osijekWorld(z=new P){return z.copy(N).multiplyScalar(1.02).applyMatrix4(a.matrixWorld)},dispose(){S.geometry.dispose(),m.dispose(),g.dispose(),y.dispose(),p.texture.dispose(),b.geometry.dispose(),b.material.dispose(),T.dispose(),I.dispose(),F.geometry.dispose(),F.material.dispose()}}}var pf=`
  attribute vec3 aA; attribute vec3 aB; attribute vec2 aTH; attribute vec4 aLife; attribute vec3 aPulse;
  uniform float uTime;
  vec3 arcPos(float t){
    float d = clamp(dot(aA, aB), -1.0, 1.0);
    float th = acos(d);
    vec3 p = th < 1e-4 ? aA : (sin((1.0 - t) * th) * aA + sin(t * th) * aB) / sin(th);
    return normalize(p) * (1.0 + aTH.y * sin(3.14159265 * t));
  }
`;function mf({geo:e,lite:t}){let i=qn(4242),s=t?72:160,r=t?26:40,a=[vi(pn[0],pn[1])];e.capitals.forEach(([,k,me])=>a.push(vi(k,me))),e.cities.slice(1).forEach(([,k,me])=>a.push(vi(k,me)));let o=t?2:1;for(let k=0;k<e.nodes.length;k+=o)a.push(vi(e.nodes[k][0],e.nodes[k][1]));let c=a.map((k,me)=>me).filter((k)=>a[k].angleTo(a[0])<0.42),l=r*2,u=s*l,h=new Float32Array(u*3),f=new Float32Array(u*3),d=new Float32Array(u*2),p=new Float32Array(u*4),g=new Float32Array(u*3);for(let k=0;k<s;k++)for(let me=0;me<r;me++){let Ie=k*l+me*2;d[Ie*2]=me/r,d[(Ie+1)*2]=(me+1)/r}let y=new it,A=(k,me)=>new ut(k,me).setUsage(wl),m={aA:A(h,3),aB:A(f,3),aTH:A(d,2),aLife:A(p,4),aPulse:A(g,3)};Object.entries(m).forEach(([k,me])=>y.setAttribute(k,me)),y.setAttribute("position",new ut(new Float32Array(u*3),3)),y.boundingSphere=new an(new P,2);let S={uTime:{value:0},uOpacity:{value:1},uConv:{value:0},uBase:{value:new Be("#5a7fff")},uHot:{value:new Be("#dfe8ff")},uGold:{value:new Be("#ffb23f")}},w=new wt({uniforms:S,transparent:!0,depthWrite:!1,blending:Zt,vertexShader:`${pf}
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
      }`}),b=new en(y,w);b.frustumCulled=!1,b.renderOrder=2;let M=2,R=s*M,C=new Float32Array(R*3),v=new Float32Array(R*3),T=new Float32Array(R*2),I=new Float32Array(R*4),N=new Float32Array(R*3),F=new Float32Array(R);for(let k=0;k<R;k++)F[k]=k%M;let z=new it,B={aA:A(C,3),aB:A(v,3),aTH:A(T,2),aLife:A(I,4),aPulse:A(N,3)};Object.entries(B).forEach(([k,me])=>z.setAttribute(k,me)),z.setAttribute("aK",new ut(F,1)),z.setAttribute("position",new ut(new Float32Array(R*3),3)),z.boundingSphere=new an(new P,2);let j={...S,uPR:{value:1},uSize:{value:0.022}},ie=new wt({uniforms:j,transparent:!0,depthWrite:!1,blending:Zt,vertexShader:`${pf}
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
      }`}),J=new Ji(z,ie);J.frustumCulled=!1,J.renderOrder=3;let W=new zt;W.add(b,J);let H=Array.from({length:s},()=>({end:0})),U=new P,oe=new P,we=new P,Le=new P,dt=new at,Ge=0,ne=new Set,pe=(k)=>Le.copy(U).sub(k).normalize().dot(k)>0.08;function ve(k,me,Ie=40){for(let Xe=0;Xe<Ie;Xe++){let st=i()*a.length|0,rt=a[st];if(!pe(rt))continue;if(k&&rt.angleTo(k)>me)continue;return st}return 1+(i()*(a.length-1)|0)}function qe(k,me,Ie=!1){let Xe;if(Ge>0.5&&i()<Ge*0.6)Xe=c[i()*c.length|0];else Xe=ve(i()<0.7?we:null,0.95);let st;if(i()<Ge*0.85)st=0;else{let ge=[0.12,0.35,0.8,1.2][i()*4|0];st=ve(a[Xe],ge)}if(st===Xe)st=Xe===0?1:0;let rt=a[Xe],ot=a[st],pt=rt.angleTo(ot),le=Math.min(0.075,0.008+pt*0.07)*(0.7+i()*0.6),D=i()<0.22,Ue=0.5+pt*0.9+i()*0.5,Ee=D?14+i()*18:2.2+i()*6,je=0.8+i()*1.1,E=Ie?me-i()*(Ue+Ee):me+i()*0.4,x=0.22+i()*0.5,O=i(),K=(D?0.35:0.55+i()*0.45)*(st===0?1.25:1);H[k].end=E+Ue+Ee+je;let fe=(ge,be,re,ue,De,Ye,Ce,Se)=>{for(let ze=Ye;ze<Ye+Ce;ze++){if(rt.toArray(ge,ze*3),ot.toArray(be,ze*3),re[ze*2+1]=le,!Se)re[ze*2]=0;ue[ze*4]=E,ue[ze*4+1]=Ue,ue[ze*4+2]=Ee,ue[ze*4+3]=je,De[ze*3]=x,De[ze*3+1]=O,De[ze*3+2]=K}};fe(h,f,d,p,g,k*l,l,!0),fe(C,v,T,I,N,k*M,M,!1),ne.add(k)}function Je(){if(!ne.size)return;for(let k of ne){for(let me of Object.values(m))me.addUpdateRange(k*l*me.itemSize,l*me.itemSize);for(let me of Object.values(B))me.addUpdateRange(k*M*me.itemSize,M*me.itemSize)}for(let k of[...Object.values(m),...Object.values(B)])k.needsUpdate=!0;ne=new Set}function Q(k,me){dt.copy(me.matrixWorld).invert(),U.copy(k.position).applyMatrix4(dt),k.getWorldDirection(oe),oe.transformDirection(dt);let Ie=U.dot(oe),Xe=U.lengthSq()-1,st=Ie*Ie-Xe;if(st>0)we.copy(oe).multiplyScalar(-Ie-Math.sqrt(st)).add(U).normalize();else we.copy(oe).multiplyScalar(-Ie).add(U).normalize()}let Ze=!1;return{group:W,update(k){if(W.visible=k.alpha>0.002,!W.visible)return;if(Ge=k.conv,Q(k.camera,k.frame),!Ze){Ze=!0;for(let me=0;me<s;me++)qe(me,k.time,!0)}else{let me=6;for(let Ie=0;Ie<s&&me>0;Ie++)if(k.time>H[Ie].end)qe(Ie,k.time),me--}Je(),S.uTime.value=k.time,S.uOpacity.value=k.alpha,S.uConv.value=Ge,j.uPR.value=k.pr},dispose(){y.dispose(),w.dispose(),z.dispose(),ie.dispose()}}}var rs=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),_r=[-30,25,60,75];function H3(e){let t=[],i=[],s=[],r=[],a=[],o=[];e.forEach((l,u)=>{let h=0,f=[0];for(let d=1;d<l.length;d++)h+=Math.hypot(l[d][0]-l[d-1][0],l[d][1]-l[d-1][1]),f.push(h);for(let d=0;d<l.length-1;d++){let p=l[d],g=l[d+1],y=f[d]/h,A=f[d+1]/h,m=[[p,g,-1,0,y],[p,g,1,0,y],[g,p,-1,1,A],[g,p,-1,1,A],[p,g,1,0,y],[g,p,1,1,A]];for(let[S,w,b,M,R]of m)t.push(S[0],0.05,S[1]),i.push(w[0],0.05,w[1]),s.push(b),r.push(M),a.push(R),o.push(u===0?0:1)}});let c=new it;return c.setAttribute("position",new tt(t,3)),c.setAttribute("aQ",new tt(i,3)),c.setAttribute("aSide",new tt(s,1)),c.setAttribute("aEnd",new tt(r,1)),c.setAttribute("aU",new tt(a,1)),c.setAttribute("aIsl",new tt(o,1)),c.boundingSphere=new an(new P,400),c}function Af({geo:e,lite:t,landTex:i,fieldTex:s,lightsTex:r,landEuUrl:a}){let o=qn(11),c=new zt;c.name="europa";let l=[],u=(le)=>(l.push(le),le),h=new Li,d={uLandW:{value:i},uLandE:{value:((le)=>{let D=u(h.load(le));return D.colorSpace=Mn,D.format=fi,D.generateMipmaps=!1,D.minFilter=Gt,D})(a)},uField:{value:s},uLights:{value:r},uCivic:xr,uBend:Rs,uSunMap:br,uDayEdge:Cs,uAlpha:{value:0},uDots:{value:1},uGrat:{value:0},uNightL:{value:1},uDim:{value:0}},p=-140,g=118,y=-118,A=84,m=u(new Vn(g-p,A-y,t?96:140,t?76:110).rotateX(-Math.PI/2).translate((p+g)/2,0,(y+A)/2)),S=u(new wt({uniforms:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8,vertexShader:`
      ${vr}
      varying vec2 vXZ; varying vec3 vW;
      void main(){
        vXZ = position.xz;
        vec4 w = modelMatrix * vec4(bendPos(position), 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uLandW; uniform sampler2D uLandE; uniform vec3 uSunMap; uniform vec2 uDayEdge;
      uniform float uAlpha; uniform float uDots; uniform float uGrat; uniform float uNightL; uniform float uDim;
      ${vr}
      ${Vo}
      varying vec2 vXZ; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float dotField(vec2 g, float r){
        vec2 q = fract(g) - 0.5;
        float aa = fwidth(length(q)) * 1.2;
        return 1.0 - smoothstep(r - aa, r + aa, length(q));
      }
      void main(){
        float latD = ${rs(pn[1])} - vXZ.y / ${rs(is)};
        float lonD = ${rs(pn[0])} + vXZ.x / ${rs(is*Go)};
        vec2 uvE = vec2((lonD - ${rs(_r[0])}) / ${rs(_r[2]-_r[0])}, (latD - ${rs(_r[1])}) / ${rs(_r[3]-_r[1])});
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
        float dm = mix(dotField(g * k0, rr), dotField(g * k0 * 4.0, rr), fr) * land;
        float dots = dm * uDots;
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
        // noćna strana (kao na globusu): tiha matrica i svjetla naselja iz snimke; svaka razina matrice
        // ima svoje ćelije (središte ćelije → uv), pa spuštanjem gradovi dobivaju sve finiju strukturu
        float night = 1.0 - day;
        col += dots * vec3(0.08, 0.16, 0.38) * night * 0.45;
        vec2 c0 = (floor(g * k0) + 0.5) / k0, c1 = (floor(g * k0 * 4.0) + 0.5) / (k0 * 4.0);
        float la0 = c0.y * 0.0062832, la1 = c1.y * 0.0062832;
        vec2 u0 = vec2((c0.x * 0.0062832 / cos(la0) + 3.14159265) / 6.2831853, (la0 + 1.5707963) / 3.14159265);
        vec2 u1 = vec2((c1.x * 0.0062832 / cos(la1) + 3.14159265) / 6.2831853, (la1 + 1.5707963) / 3.14159265);
        float ambK = 1.0 - 0.75 * smoothstep(0.0, 1.0, lev);
        vec4 cl = mix(cityLights(u0, h21(floor(g * k0) + k0 - 1.0), dotField(g * k0, rr) * land, F, ambK), cityLights(u1, h21(floor(g * k0 * 4.0) + k0 * 4.0 - 1.0), dotField(g * k0 * 4.0, rr) * land, F, ambK), fr);
        float civ = uCivic * day;
        col = mix(col, civicTone(day) * (1.0 - uDim * 0.55), clamp(cl.a * civ * uNightL, 0.0, 1.0));
        col += cl.rgb * night * 1.3 * uNightL;
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
      }`})),w=new Pt(m,S);w.renderOrder=1,w.frustumCulled=!1,c.add(w);let b=(le,D=!0)=>{let Ue={uColor:{value:new Be(le)},uOpacity:{value:0},uBend:Rs},Ee=new wt({uniforms:Ue,transparent:!0,depthWrite:!1,depthTest:!1,blending:D?Zt:ui,vertexShader:`${vr}
        void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }"});return{m:u(Ee),U:Ue}},M=[];for(let le of e.europe)for(let D of le.rings)for(let Ue=0;Ue<D.length-1;Ue++){let[Ee,je]=Ni(D[Ue][0],D[Ue][1]),[E,x]=Ni(D[Ue+1][0],D[Ue+1][1]);M.push(Ee,0.04,je,E,0.04,x)}let R=b("#4d68c4"),C=new en(u(new it().setAttribute("position",new tt(M,3))),R.m);C.renderOrder=2,C.frustumCulled=!1,c.add(C);let v=e.croatia.map((le)=>le.map(([D,Ue])=>Ni(D,Ue)));{let le=v[0].slice(0,-1),D=0;for(let E=0;E<le.length;E++){let x=le[E],O=le[(E+1)%le.length];D+=x[0]*O[1]-O[0]*x[1]}if(D>0)le.reverse();let Ue=0,Ee=1/0;le.forEach(([E,x],O)=>{let K=E*E+x*x;if(K<Ee)Ee=K,Ue=O});let je=le.slice(Ue).concat(le.slice(0,Ue));je.push(je[0]),v[0]=je}let T={uBend:Rs,uRes:{value:new Oe(1,1)},uWidth:{value:6},uCore:{value:0.2},uTrace:{value:0},uHL:{value:0},uOpacity:{value:0},uTime:{value:0}},I=u(new wt({uniforms:T,transparent:!0,depthWrite:!1,depthTest:!1,side:Qt,blending:Xi,blendEquation:Qa,blendSrc:hi,blendDst:hi,vertexShader:`
      ${vr}
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
      }`})),N=new Pt(u(H3(v)),I);N.renderOrder=6,N.frustumCulled=!1,c.add(N);let F=v[0],z=[0];for(let le=1;le<F.length;le++)z.push(z[le-1]+Math.hypot(F[le][0]-F[le-1][0],F[le][1]-F[le-1][1]));let B=z[z.length-1],j=tn({count:1,color:"#9cb4ff",core:"#ffffff",size:0.5,depthTest:!1,bend:!0});j.uniforms.uMin.value=7,j.uniforms.uMax.value=22,j.points.renderOrder=7,c.add(j.points);let ie=(le)=>new ea(le.map(([D,Ue])=>new Oe(D,-Ue))),J=u(new ta(v.map(ie),1).rotateX(-Math.PI/2));J.translate(0,0.02,0);let W=b("#1d3bd6");W.m.side=Qt;let H=new Pt(J,W.m);H.renderOrder=3,H.frustumCulled=!1,c.add(H);let U=tn({count:e.cities.length,color:"#6f93ff",core:"#ffffff",size:0.11,bend:!0,depthTest:!1});e.cities.forEach(([,le,D,Ue],Ee)=>{let[je,E]=Ni(le,D);U.pos[Ee*3]=je,U.pos[Ee*3+1]=0.06,U.pos[Ee*3+2]=E,U.size[Ee]=Ee===0?2.6:Ue?1.3:0.8}),U.uniforms.uMin.value=2,U.points.renderOrder=8,c.add(U.points);let oe=[],we=[];e.capitals.forEach(([,le,D])=>{let[Ue,Ee]=Ni(le,D),je=new P(0,0.06,0),E=new P(Ue,0.06,Ee),x=2+je.distanceTo(E)*0.22,O=[];for(let K=0;K<=36;K++){let fe=K/36,ge=je.clone().lerp(E,fe);ge.y+=Math.sin(Math.PI*fe)*x,O.push(ge)}for(let K=0;K<O.length-1;K++)we.push(...O[K].toArray(),...O[K+1].toArray());oe.push({pts:O,t:o(),speed:0.18+o()*0.12,dir:o()<0.5?1:-1})});let Le=b("#4a6ff0"),dt=new en(u(new it().setAttribute("position",new tt(we,3))),Le.m);dt.frustumCulled=!1,dt.renderOrder=4,c.add(dt);let Ge=tn({count:e.capitals.length,color:"#4f7bff",core:"#dfe7ff",size:0.32,bend:!0});e.capitals.forEach(([,le,D],Ue)=>{let[Ee,je]=Ni(le,D);Ge.pos[Ue*3]=Ee,Ge.pos[Ue*3+1]=0.08,Ge.pos[Ue*3+2]=je}),Ge.uniforms.uMin.value=1.5,c.add(Ge.points);let ne=5,pe=tn({count:oe.length*ne,color:"#7f9fff",core:"#ffffff",size:0.36,bend:!0});pe.uniforms.uMin.value=1.2,c.add(pe.points);let ve=[["Đakovo",18.41,45.31,1],["Vukovar",19,45.35,1],["Vinkovci",18.8,45.29,0.95],["Valpovo",18.42,45.66,0.6],["Belišće",18.4,45.68,0.5],["Našice",18.1,45.49,0.6],["Beli Manastir",18.6,45.77,0.6],["Donji Miholjac",18.17,45.76,0.5],["Čepin",18.565,45.524,0.45],["Tenja",18.749,45.497,0.35],["Bilje",18.743,45.606,0.35],["Darda",18.692,45.627,0.35]],qe=ve.map(([,le,D,Ue])=>[...Ni(le,D),Ue]),Je=e.cities.slice(1).map(([,le,D,Ue])=>[...Ni(le,D),Ue?1.6:0.8]),Q=Object.fromEntries(ve.map((le,D)=>[le[0],qe[D]])),Ze=[0,0],k=[[Ze,Q["Đakovo"]],[Ze,Q.Vinkovci],[Ze,Q.Vukovar],[Ze,Q.Valpovo],[Q.Valpovo,Q["Donji Miholjac"]],[Ze,Q["Našice"]],[Ze,Q["Beli Manastir"]],[Q.Vinkovci,Q.Vukovar],[Q["Đakovo"],Q.Vinkovci],[Q["Đakovo"],Q["Našice"]],[Q["Našice"],Q["Donji Miholjac"]]],me=t?1700:3200,Ie=tn({count:me,color:"#ffae58",core:"#fff0d0",size:0.24,depthTest:!1,nightOnly:!0});Ie.uniforms.uMin.value=1.1,Ie.uniforms.uFall.value=1,Ie.uniforms.uMax.value=9,Ie.points.renderOrder=9;let Xe=()=>Math.sqrt(-2*Math.log(o()+0.000001))*Math.cos(o()*Math.PI*2);for(let le=0;le<me;le++){let D,Ue,Ee=1,je=1,E=o();if(E<0.2){do D=Xe()*0.3,Ue=Xe()*0.22;while(Math.hypot(D,Ue*1.4)<0.12);Ee=0.7}else if(E<0.62){let x=qe[o()*qe.length|0],O=0.012+x[2]*0.028;D=x[0]+Xe()*O,Ue=x[1]+Xe()*O}else if(E<0.86){let[x,O]=k[o()*k.length|0],K=0.08+o()*0.84,fe=-(O[1]-x[1]),ge=O[0]-x[0],be=Math.hypot(fe,ge)||1,re=Math.sin(K*9+x[0])*0.03+Xe()*0.012;D=x[0]+(O[0]-x[0])*K+fe/be*re+Xe()*0.006,Ue=x[1]+(O[1]-x[1])*K+ge/be*re+Xe()*0.006,Ee=0.55,je=0.75}else{let x=Je[o()*Je.length|0],O=0.03+x[2]*0.05;D=x[0]+Xe()*O,Ue=x[1]+Xe()*O,je=1.4}Ie.pos[le*3]=D,Ie.pos[le*3+1]=0.05,Ie.pos[le*3+2]=Ue,Ie.alpha[le]=(0.2+o()*0.8)*Ee,Ie.size[le]=(0.5+o()*o()*1.8)*je,Ie.wake[le]=o()*0.9}c.add(Ie.points);let st={uOpacity:{value:0},uR:{value:1}},rt=new Pt(u(new Vn(2,2).rotateX(-Math.PI/2)),u(new wt({uniforms:st,transparent:!0,depthWrite:!1,depthTest:!1,blending:Zt,vertexShader:"uniform float uR; varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * uR, 0.03, position.z * uR, 1.0); }",fragmentShader:`uniform float uOpacity; varying vec2 vP;
        void main(){ float r = length(vP * vec2(1.0, 1.25)); float a = exp(-r * r * 5.5) * 0.8 + exp(-r * r * 26.0) * 0.6;
          gl_FragColor = vec4(vec3(1.0, 0.56, 0.24) * a * uOpacity, 1.0); }`})));rt.renderOrder=5,rt.frustumCulled=!1,c.add(rt);let ot=new P,pt=[U,Ge,pe,Ie,j];return{group:c,towns:ve.map((le)=>le[0]),townWorld(le,D=new P){return D.set(qe[le][0],0.06,qe[le][1]).applyMatrix4(c.matrixWorld)},cityWorld(le,D=new P){return D.fromArray(U.pos,le*3).applyMatrix4(c.matrixWorld)},update(le){if(c.visible=le.alpha>0.002,!c.visible)return;let{alpha:D,Z:Ue}=le,Ee=1-le.mapFade;d.uAlpha.value=D,d.uDots.value=1-0.55*vt(0.9,1,Ue)-0.45*vt(1,1.3,Ue),d.uGrat.value=vt(0.94,1.05,Ue)*(1-vt(1.3,1.6,Ue))*0.5,d.uNightL.value=1-vt(1.2,1.5,Ue),d.uDim.value=vt(1.5,1.9,Ue),R.U.uOpacity.value=0.55*D*Ee*(1-0.5*le.hl),T.uRes.value.set(le.res[0]/2,le.res[1]/2),T.uWidth.value=7*le.pr,T.uCore.value=0.16,T.uTrace.value=le.trace,T.uHL.value=le.hl,T.uOpacity.value=D*(1-vt(1.12,1.42,Ue)),T.uTime.value=le.time;let je=le.trace>0.002&&le.trace<0.985;if(je){let E=le.trace*B,x=1;while(x<z.length-1&&z[x]<E)x++;let O=(E-z[x-1])/Math.max(0.000001,z[x]-z[x-1]);j.pos[0]=F[x-1][0]+(F[x][0]-F[x-1][0])*O,j.pos[1]=0.06,j.pos[2]=F[x-1][1]+(F[x][1]-F[x-1][1])*O,j.geometry.attributes.position.needsUpdate=!0}if(j.uniforms.uOpacity.value=je?D*Math.min(1,le.trace*30,(0.985-le.trace)*30):0,W.U.uOpacity.value=D*(0.05+0.1*le.hl)*vt(0.82,1,le.trace)*(1-vt(1.25,1.6,Ue)),U.uniforms.uOpacity.value=D*vt(0.5,0.95,le.trace)*Ee,Le.U.uOpacity.value=0.42*D*le.net*Ee,Ge.uniforms.uOpacity.value=D*le.net*Ee,pe.uniforms.uOpacity.value=D*le.net*Ee,Ie.uniforms.uOpacity.value=D*(1-vt(1.78,1.97,Ue)),Ie.uniforms.uWake.value=0.15+le.night*1,st.uR.value=0.6,st.uOpacity.value=D*le.night*vt(1.05,1.35,Ue)*(1-vt(1.6,1.8,Ue))*0.5,pt.forEach((E)=>{E.uniforms.uPR.value=le.pr}),oe.forEach((E,x)=>{if(!le.reduce)E.t=(E.t+le.dt*E.speed)%1;for(let O=0;O<ne;O++){let K=E.dir>0?E.t-O*0.02:1-E.t+O*0.02,fe=Math.min(E.pts.length-1.001,Math.max(0,K*(E.pts.length-1))),ge=Math.floor(fe);ot.copy(E.pts[ge]).lerp(E.pts[ge+1],fe-ge).toArray(pe.pos,(x*ne+O)*3),pe.alpha[x*ne+O]=(1-O/ne)*Math.min(1,E.t*6)*Math.min(1,(1-E.t)*6)}}),le.net*Ee>0.01)pe.geometry.attributes.position.needsUpdate=!0,pe.geometry.attributes.aAlpha.needsUpdate=!0},dispose(){l.forEach((le)=>le.dispose()),pt.forEach((le)=>{le.geometry.dispose(),le.material.dispose()})}}}function bf(e,t=!1){let i=e[0].index!==null,s=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},c=e[0].morphTargetsRelative,l=new it,u=0;for(let h=0;h<e.length;++h){let f=e[h],d=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(a[p]===void 0)a[p]=[];a[p].push(f.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(o[p]===void 0)o[p]=[];o[p].push(f.morphAttributes[p])}if(t){let p;if(i)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,h),u+=p}}if(i){let h=0,f=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=e[d].attributes.position.count}l.setIndex(f)}for(let h in a){let f=gf(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=gf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function gf(e){let t,i,s,r=-1,a=0;for(let u=0;u<e.length;++u){let h=e[u];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0)s=h.normalized;if(s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*i}let o=new t(a),c=new ut(o,i,s),l=0;for(let u=0;u<e.length;++u){let h=e[u];if(h.isInterleavedBufferAttribute){let f=l/i;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<i;g++){let y=h.getComponent(d,g);c.setComponent(d+f,g,y)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)c.gpuType=r;return c}function mu(e,t){if(t===yl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===sr||t===Vr){let i=e.getIndex();if(i===null){let a=[],o=e.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);e.setIndex(a),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let s=i.count-2,r=[];if(t===sr)for(let a=1;a<=s;a++)r.push(i.getX(0)),r.push(i.getX(a)),r.push(i.getX(a+1));else for(let a=0;a<s;a++)if(a%2===0)r.push(i.getX(a)),r.push(i.getX(a+1)),r.push(i.getX(a+2));else r.push(i.getX(a+2)),r.push(i.getX(a+1)),r.push(i.getX(a));if(r.length/3!==s)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function vf(e){let t=new Map,i=new Map,s=e.clone();return xf(e,s,function(r,a){t.set(a,r),i.set(r,a)}),s.traverse(function(r){if(!r.isSkinnedMesh)return;let a=r,o=t.get(r),c=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=c.map(function(l){return i.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),s}function xf(e,t,i){i(e,t);for(let s=0;s<e.children.length;s++)xf(e.children[s],t.children[s],i)}class yu extends Di{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new vu(t,Ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new vu(t,Ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hf(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ns.extractUrlBase(e);a=ns.resolveURL(l,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(s)s(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},c=new na(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gf){try{a[Ct.KHR_BINARY_GLTF]=new Wf(e)}catch(h){if(s)s(h);return}r=JSON.parse(a[Ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(s)s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Kf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ct.KHR_MATERIALS_UNLIT:a[h]=new Ef;break;case Ct.KHR_DRACO_MESH_COMPRESSION:a[h]=new Vf(r,this.dracoLoader);break;case Ct.KHR_TEXTURE_TRANSFORM:a[h]=new jf;break;case Ct.KHR_MESH_QUANTIZATION:a[h]=new qf;break;default:if(f.indexOf(h)>=0&&o[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function G3(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function nn(e,t,i){let s=e.json.materials[t];if(s.extensions&&s.extensions[i])return s.extensions[i];return null}var Ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wf{constructor(e){this.parser=e,this.name=Ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Be(16777215);if(c.color!==void 0)u.setRGB(c.color[0],c.color[1],c.color[2],Cn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Es(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dr(u),l.distance=h;break;case"spot":l=new Lo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}if(l.position.set(0,0,0),xi(l,c),c.intensity!==void 0)l.intensity=c.intensity;return l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class Ef{constructor(){this.name=Ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,i){let s=[];e.color=new Be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}if(r.baseColorTexture!==void 0)s.push(i.assignTexture(e,"map",r.baseColorTexture,pi))}return Promise.all(s)}}class Tf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class Rf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}}return Promise.all(s)}}class Cf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class Pf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(t.iridescenceThicknessRange===void 0)t.iridescenceThicknessRange=[100,400];if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(s)}}class If{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Cn)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,pi));if(i.sheenRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(s)}}class Df{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(s)}}class Lf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(r[0],r[1],r[2],Cn),Promise.all(s)}}class Ff{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IOR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class Nf{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new Be().setRGB(r[0],r[1],r[2],Cn),i.specularColorTexture!==void 0)s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,pi));return Promise.all(s)}}class Uf{constructor(e){this.parser=e,this.name=Ct.EXT_MATERIALS_BUMP}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(s)}}class Of{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return nn(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(s)}}class Bf{constructor(e){this.parser=e,this.name=Ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,a)}}class kf{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class zf{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class vu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,{count:u,byteStride:h}=s,f=new Uint8Array(o,c,l);if(a.decodeGltfBufferAsync)return a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer});else return a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class Hf{constructor(e){this.name=Ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then((u)=>(c[l]=u,c[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let p of h){let g=new at,y=new P,A=new zn,m=new P(1,1,1),S=new _o(p.geometry,p.material,f);for(let b=0;b<f;b++){if(c.TRANSLATION)y.fromBufferAttribute(c.TRANSLATION,b);if(c.ROTATION)A.fromBufferAttribute(c.ROTATION,b);if(c.SCALE)m.fromBufferAttribute(c.SCALE,b);S.setMatrixAt(b,g.compose(y,A,m))}let w=null;for(let b in c)if(b==="_COLOR_0"){let M=c[b];S.instanceColor=new qi(M.array,M.itemSize,M.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(w===null){let R=S.geometry;w=new it,w.name=R.name;for(let C in R.attributes)w.setAttribute(C,R.attributes[C]);for(let C in R.morphAttributes)w.morphAttributes[C]=R.morphAttributes[C];if(R.index!==null)w.setIndex(R.index);w.morphTargetsRelative=R.morphTargetsRelative;for(let C of R.groups)w.addGroup(C.start,C.count,C.materialIndex);if(R.boundingBox!==null)w.boundingBox=R.boundingBox.clone();if(R.boundingSphere!==null)w.boundingSphere=R.boundingSphere.clone();w.drawRange.start=R.drawRange.start,w.drawRange.count=R.drawRange.count,w.userData=Object.assign({},R.userData),S.geometry=w}let M=c[b];w.setAttribute(b,new qi(M.array,M.itemSize,M.normalized))}jt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),d.push(S)}if(u.isGroup)return u.clear(),u.add(...d),u;return d[0]})}}var Gf="glTF",da=12,_f={JSON:1313821514,BIN:5130562};class Wf{constructor(e){this.name=Ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,da),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-da,r=new DataView(e,da),a=0;while(a<s){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===_f.JSON){let l=new Uint8Array(e,da+a,o);this.content=i.decode(l)}else if(c===_f.BIN){let l=da+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Vf{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=xu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=xu[u]||u.toLowerCase();if(a[u]!==void 0){let f=i.accessors[e.attributes[u]],d=yr[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let g=d.attributes[p],y=c[p];if(y!==void 0)g.normalized=y}h(d)},o,l,Cn,f)})})}}class jf{constructor(){this.name=Ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class qf{constructor(){this.name=Ct.KHR_MESH_QUANTIZATION}}class Mu extends Ii{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*l,g=p-l,y=-2*d+3*f,A=d-f,m=1-y,S=A-f+h;for(let w=0;w!==o;w++){let b=a[g+w+o],M=a[g+w+c]*u,R=a[p+w+o],C=a[p+w]*u;r[w]=m*b+S*M+y*R+A*C}return r}}var W3=new zn;class Xf extends Mu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return W3.fromArray(r).normalize().toArray(r),r}}var Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:ti,9729:Gt,9984:so,9985:nr,9986:gs,9987:Bn},Mf={33071:Ki,33648:io,10497:ei},Au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V3={CUBICSPLINE:void 0,LINEAR:ho,STEP:_l},gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function j3(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new Zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci});return e.DefaultMaterial}function Ps(e,t,i){for(let s in i.extensions)if(e[s]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=i.extensions[s]}function xi(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function q3(e,t,i){let s=!1,r=!1,a=!1;for(let u=0,h=t.length;u<h;u++){let f=t[u];if(f.POSITION!==void 0)s=!0;if(f.NORMAL!==void 0)r=!0;if(f.COLOR_0!==void 0)a=!0;if(s&&r&&a)break}if(!s&&!r&&!a)return Promise.resolve(e);let o=[],c=[],l=[];for(let u=0,h=t.length;u<h;u++){let f=t[u];if(s){let d=f.POSITION!==void 0?i.getDependency("accessor",f.POSITION):e.attributes.position;o.push(d)}if(r){let d=f.NORMAL!==void 0?i.getDependency("accessor",f.NORMAL):e.attributes.normal;c.push(d)}if(a){let d=f.COLOR_0!==void 0?i.getDependency("accessor",f.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(u){let h=u[0],f=u[1],d=u[2];if(s)e.morphAttributes.position=h;if(r)e.morphAttributes.normal=f;if(a)e.morphAttributes.color=d;return e.morphTargetsRelative=!0,e})}function X3(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,s=t.weights.length;i<s;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++)e.morphTargetDictionary[i[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function K3(e){let t,i=e.extensions&&e.extensions[Ct.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+bu(i.attributes);else t=e.indices+":"+bu(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let s=0,r=e.targets.length;s<r;s++)t+=":"+bu(e.targets[s]);return t}function bu(e){let t="",i=Object.keys(e).sort();for(let s=0,r=i.length;s<r;s++)t+=i[s]+":"+e[i[s]]+";";return t}function _u(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y3(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var J3=new at;class Kf{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&s<17||r&&a<98)this.textureLoader=new Li(this.options.manager);else this.textureLoader=new Fo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new na(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ps(r,o,s),xi(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];if(a.mesh!==void 0){if(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0)i[a.mesh].isSkinnedMesh=!0}if(a.camera!==void 0)this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);if(c!=null)this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ct.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Au[s.type],o=yr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new ut(l,a,c))}let r=[];if(s.bufferView!==void 0)r.push(this.getDependency("bufferView",s.bufferView));else r.push(null);if(s.sparse!==void 0)r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView));return Promise.all(r).then(function(a){let o=a[0],c=Au[s.type],l=yr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,g,y;if(d&&d!==h){let A=Math.floor(f/d),m="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,S=t.cache.get(m);if(!S)g=new l(o,A*d,s.count*d/u),S=new Xr(g,d/u),t.cache.add(m,S);y=new rr(S,c,f%d/u,p)}else{if(o===null)g=new l(s.count*c);else g=new l(o,f,s.count*c);y=new ut(g,c,p)}if(s.sparse!==void 0){let A=Au.SCALAR,m=yr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,b=new m(a[1],S,s.sparse.count*A),M=new l(a[2],w,s.sparse.count*c);if(o!==null)y=new ut(y.array.slice(),y.itemSize,y.normalized);y.normalized=!1;for(let R=0,C=b.length;R<C;R++){let v=b[R];if(y.setX(v,M[R*c]),c>=2)y.setY(v,M[R*c+1]);if(c>=3)y.setZ(v,M[R*c+2]);if(c>=4)y.setW(v,M[R*c+3]);if(c>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=p}return y})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);if(c!==null)o=c}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){if(u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)u.name=o.uri;let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=yf[f.magFilter]||Gt,u.minFilter=yf[f.minFilter]||Bn,u.wrapS=Mf[f.wrapS]||ei,u.wrapT=Mf[f.wrapT]||ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ti&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((h)=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let p=f;if(t.isImageBitmapLoader===!0)p=function(g){let y=new rn(g);y.needsUpdate=!0,f(y)};t.load(ns.resolveURL(h,r.path),p,void 0,d)})}).then(function(h){if(l===!0)o.revokeObjectURL(c);return xi(h,a),h.userData.mimeType=a.mimeType||Y3(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0)a=a.clone(),a.channel=i.texCoord;if(r.extensions[Ct.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}if(s!==void 0)a.colorSpace=s;return e[t]=a,a})}assignFinalMaterial(e){let{geometry:t,material:i}=e,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new Zr,In.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c);i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new Gn,In.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c);i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";if(s)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(a)o+="flat-shading:";let c=this.cache.get(o);if(!c){if(c=i.clone(),r)c.vertexColors=!0;if(a)c.flatShading=!0;if(s){if(c.normalScale)c.normalScale.y*=-1;if(c.clearcoatNormalScale)c.clearcoatNormalScale.y*=-1}this.cache.add(o,c),this.associations.set(c,this.associations.get(i))}i=c}e.material=i}getMaterialType(){return Zi}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ct.KHR_MATERIALS_UNLIT]){let h=s[Ct.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Cn),o.opacity=f[3]}if(h.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",h.baseColorTexture,pi));if(o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Qt;let u=r.alphaMode||gu.OPAQUE;if(u===gu.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,u===gu.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&a!==Hn){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0){let h=r.normalTexture.scale;o.normalScale.set(h,h)}}if(r.occlusionTexture!==void 0&&a!==Hn){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&a!==Hn){let h=r.emissiveFactor;o.emissive=new Be().setRGB(h[0],h[1],h[2],Cn)}if(r.emissiveTexture!==void 0&&a!==Hn)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pi));return Promise.all(l).then(function(){let h=new a(o);if(r.name)h.name=r.name;if(xi(h,r),t.associations.set(h,{materials:e}),r.extensions)Ps(s,h,r);return h})}createUniqueName(e){let t=Bt.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=K3(l),h=s[u];if(h)a.push(h.promise);else{let f;if(l.extensions&&l.extensions[Ct.KHR_DRACO_MESH_COMPRESSION])f=r(l);else f=Sf(new it,l,t);if(l.mode===Xn.TRIANGLE_STRIP)f=f.then((d)=>mu(d,Vr));else if(l.mode===Xn.TRIANGLE_FAN)f=f.then((d)=>mu(d,sr));s[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?j3(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let g=u[d],y=a[d],A,m=l[d];if(y.mode===Xn.TRIANGLES||y.mode===Xn.TRIANGLE_STRIP||y.mode===Xn.TRIANGLE_FAN||y.mode===void 0){let S=r.isSkinnedMesh===!0,w=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(S&&w===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(A=S&&w?new xo(g,m):new Pt(g,m),A.isSkinnedMesh===!0)A.normalizeSkinWeights()}else if(y.mode===Xn.LINES)A=new en(g,m);else if(y.mode===Xn.LINE_STRIP)A=new or(g,m);else if(y.mode===Xn.LINE_LOOP)A=new yo(g,m);else if(y.mode===Xn.POINTS)A=new Ji(g,m);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);if(Object.keys(A.geometry.morphAttributes).length>0)X3(A,r);if(A.name=t.createUniqueName(r.name||"mesh_"+e),xi(A,r),y.extensions)Ps(s,A,y);t.assignFinalMaterial(A),h.push(A)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1){if(r.extensions)Ps(s,h[0],r);return h[0]}let f=new zt;if(r.extensions)Ps(s,f,r);t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new ln(Cl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2000000);else if(i.type==="orthographic")t=new ws(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar);if(i.name)t.name=this.createUniqueName(i.name);return xi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new at;if(r!==null)f.fromArray(r.array,l*16);c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yr(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],g=d.target,y=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,m=s.parameters!==void 0?s.parameters[p.output]:p.output;if(g.node===void 0)continue;a.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",m)),l.push(p),u.push(g)}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],g=h[3],y=h[4],A=[];for(let S=0,w=f.length;S<w;S++){let b=f[S],M=d[S],R=p[S],C=g[S],v=y[S];if(b===void 0)continue;if(b.updateMatrix)b.updateMatrix();let T=i._createAnimationTracks(b,M,R,C,v);if(T)for(let I=0;I<T.length;I++)A.push(T[I])}let m=new Po(r,void 0,A);return xi(m,s),m})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];if(s.mesh===void 0)return null;return i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);if(s.weights!==void 0)a.traverse(function(o){if(!o.isMesh)return;for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]});return a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];if(f!==null)u.traverse(function(d){if(!d.isSkinnedMesh)return;d.bind(f,J3)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new P().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(c)o.push(c);if(r.camera!==void 0)o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)}));return s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0)u=new Kr;else if(l.length>1)u=new zt;else if(l.length===1)u=l[0];else u=new jt;if(u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name)u.userData.name=r.name,u.name=a;if(xi(u,r),r.extensions)Ps(i,u,r);if(r.matrix!==void 0){let h=new at;h.fromArray(r.matrix),u.applyMatrix4(h)}else{if(r.translation!==void 0)u.position.fromArray(r.translation);if(r.rotation!==void 0)u.quaternion.fromArray(r.rotation);if(r.scale!==void 0)u.scale.fromArray(r.scale)}if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new zt;if(i.name)r.name=s.createUniqueName(i.name);if(xi(r,i),i.extensions)Ps(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];if(f.parent!==null)r.add(vf(f));else r.add(f)}let l=(u)=>{let h=new Map;for(let[f,d]of s.associations)if(f instanceof In||f instanceof rn)h.set(f,d);return u.traverse((f)=>{let d=s.associations.get(f);if(d!=null)h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){if(d.morphTargetInfluences)c.push(d.name?d.name:d.uuid)}if(as[r.path]===as.weights){if(l(e),e.isGroup)e.children.forEach(l)}else c.push(o);let u;switch(as[r.path]){case as.weights:u=Qi;break;case as.rotation:u=es;break;case as.translation:case as.scale:u=Ss;break;default:switch(i.itemSize){case 1:u=Qi;break;case 2:case 3:default:u=Ss;break}break}let h=s.interpolation!==void 0?V3[s.interpolation]:ho,f=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){let g=new u(c[d]+"."+as[r.path],t.array,f,h);if(s.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=_u(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof es?Xf:Mu)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Z3(e,t,i){let s=t.attributes,r=new Sn;if(s.POSITION!==void 0){let c=i.json.accessors[s.POSITION],{min:l,max:u}=c;if(l!==void 0&&u!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(u[0],u[1],u[2])),c.normalized){let h=_u(yr[c.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=t.targets;if(a!==void 0){let c=new P,l=new P;for(let u=0,h=a.length;u<h;u++){let f=a[u];if(f.POSITION!==void 0){let d=i.json.accessors[f.POSITION],{min:p,max:g}=d;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let y=_u(yr[d.componentType]);l.multiplyScalar(y)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}e.boundingBox=r;let o=new an;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Sf(e,t,i){let s=t.attributes,r=[];function a(o,c){return i.getDependency("accessor",o).then(function(l){e.setAttribute(c,l)})}for(let o in s){let c=xu[o]||o.toLowerCase();if(c in e.attributes)continue;r.push(a(s[o],c))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(c){e.setIndex(c)});r.push(o)}if(Tt.workingColorSpace!==Cn&&"COLOR_0"in s)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`);return xi(e,t),Z3(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?q3(e,t.targets,i):e})}var Yf=function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=="object")return{supported:!1};var r=WebAssembly.validate(i)?c(t):c(e),a,o=WebAssembly.instantiate(r,{}).then(function(m){a=m.instance,a.exports.__wasm_call_ctors()});function c(m){var S=new Uint8Array(m.length);for(var w=0;w<m.length;++w){var b=m.charCodeAt(w);S[w]=b>96?b-97:b>64?b-39:b+4}var M=0;for(var w=0;w<m.length;++w)S[M++]=S[w]<60?s[S[w]]:(S[w]-60)*64+S[++w];return S.buffer.slice(0,M)}function l(m,S,w,b,M,R,C){var v=m.exports.sbrk,T=b+3&-4,I=v(T*M),N=v(R.length),F=new Uint8Array(m.exports.memory.buffer);F.set(R,N);var z=S(I,b,M,N,R.length);if(z==0&&C)C(I,T,M);if(w.set(F.subarray(I,I+b*M)),v(I-v(0)),z!=0)throw Error("Malformed buffer data: "+z)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function p(m){var S={object:new Worker(m),pending:0,requests:{}};return S.object.onmessage=function(w){var b=w.data;S.pending-=b.count,S.requests[b.id][b.action](b.value),delete S.requests[b.id]},S}function g(m){var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+A.name+";"+l.toString()+A.toString(),w=new Blob([S],{type:"text/javascript"}),b=URL.createObjectURL(w);for(var M=f.length;M<m;++M)f[M]=p(b);for(var M=m;M<f.length;++M)f[M].object.postMessage({});f.length=m,URL.revokeObjectURL(b)}function y(m,S,w,b,M){var R=f[0];for(var C=1;C<f.length;++C)if(f[C].pending<R.pending)R=f[C];return new Promise(function(v,T){var I=new Uint8Array(w),N=++d;R.pending+=m,R.requests[N]={resolve:v,reject:T},R.object.postMessage({id:N,count:m,size:S,source:I,mode:b,filter:M},[I.buffer])})}function A(m){var S=m.data;self.ready.then(function(w){if(!S.id)return self.close();try{var b=new Uint8Array(S.count*S.size);l(w,w.exports[S.mode],b,S.count,S.size,S.source,w.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:b},[b.buffer])}catch(M){self.postMessage({id:S.id,count:S.count,action:"reject",value:M})}})}return{ready:o,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,S,w,b,M){l(a,a.exports.meshopt_decodeVertexBuffer,m,S,w,b,a.exports[u[M]])},decodeIndexBuffer:function(m,S,w,b){l(a,a.exports.meshopt_decodeIndexBuffer,m,S,w,b)},decodeIndexSequence:function(m,S,w,b){l(a,a.exports.meshopt_decodeIndexSequence,m,S,w,b)},decodeGltfBuffer:function(m,S,w,b,M,R){l(a,a.exports[h[M]],m,S,w,b,a.exports[u[R]])},decodeGltfBufferAsync:function(m,S,w,b,M){if(f.length>0)return y(m,S,w,h[b],u[M]);return o.then(function(){var R=new Uint8Array(m*S);return l(a,a.exports[h[b]],R,m,S,w,a.exports[u[M]]),R})}}}();var It={brick:"#8e3825",brickDark:"#6c2a1b",trim:"#b4583a",roof:"#2b3244",spire:"#232a3a",dark:"#0b0d13",stone:"#c9b9a4"};function Ds(e,t){let i=e.index?e.toNonIndexed():e;if(i!==e)e.dispose();i.deleteAttribute("uv");let s=new Be(t),r=i.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)s.toArray(a,o*3);if(i.setAttribute("color",new ut(a,3)),!i.attributes.normal)i.computeVertexNormals();return i}function on(e,t,i,s,r,a,o){return Ds(new Ai(e,t,i).translate(s,r+t/2,a),o)}function Su(e,t,i,s,r,a,o,c){let l=e/2,u=t/2,h=[-l,0,-u,-l,0,u,-l,i,0,l,0,u,l,0,-u,l,i,0,-l,0,u,l,0,u,l,i,0,-l,0,u,l,i,0,-l,i,0,l,0,-u,-l,0,-u,-l,i,0,l,0,-u,-l,i,0,l,i,0],f=new it;if(f.setAttribute("position",new tt(h,3)),o==="z")f.rotateY(Math.PI/2);return f.translate(s,r,a),f.computeVertexNormals(),Ds(f,c)}function $3(e,t,i,s,r,a,o,c,l){let u=e/2,h=o,f=o+c*t,d=[-u,a+s,h,u,a+s,h,u,a+i,f,-u,a+s,h,u,a+i,f,-u,a+i,f],p=new it;return p.setAttribute("position",new tt(d,3)),p.translate(r,0,0),p.computeVertexNormals(),Ds(p,l)}function Is(e,t,i,s,r,a,o,c=0){return Ds(new lr(e,t,i,1).rotateY(c).translate(s,r+t/2,a),o)}function Jf(e,t,i,s,r,a,o,c=0,l=Math.PI*2){return Ds(new cr(e,e,t,i,1,!1,c,l).translate(s,r+t/2,a),o)}function Zf(){let e=[],t=(r)=>e.push(r);t(on(7.6,3.6,3,0.8,0,0,It.brick)),t(Su(7.8,3.2,2.5,0.8,3.6,0,"x",It.roof)),[-1,1].forEach((r)=>{t(on(6.6,2.3,1.1,0.3,0,r*2.05,It.brickDark)),t($3(6.6,1.25,2.3,3.15,0.3,0,r*1.5,r,It.roof));for(let a=0;a<6;a++){let o=-2.6+a*1.18;if(t(on(0.26,2.75,0.42,o,0,r*2.75,It.brick)),t(Is(0.13,0.7,4,o,2.75,r*2.75,It.trim,Math.PI/4)),a<5)t(on(0.32,1.25,0.04,o+0.59,0.55,r*2.62,It.dark))}for(let a=0;a<5;a++)t(on(0.28,0.75,0.04,-2+a*1.18,2.55,r*1.52,It.dark))}),t(on(1.8,3.6,6.6,3.55,0,0,It.brick)),t(Su(6.8,2,2.3,3.55,3.6,0,"z",It.roof)),[-1,1].forEach((r)=>{t(on(0.7,1.9,0.04,3.55,1,r*3.32,It.dark)),t(Is(0.16,0.9,4,2.7,3.6,r*3.25,It.trim,Math.PI/4)),t(Is(0.16,0.9,4,4.4,3.6,r*3.25,It.trim,Math.PI/4))}),t(Is(0.22,1.6,6,3.55,6,0,It.spire)),t(Jf(1.5,3.4,8,4.6,0,0,It.brick,0,Math.PI)),t(Ds(new lr(1.5,1.9,8,1,!1,0,Math.PI).translate(4.6,4.35,0),It.roof));for(let r=0;r<5;r++){let a=r/4*Math.PI;t(on(0.05,1.5,0.3,4.6+Math.sin(a)*1.48,0.8,Math.cos(a)*1.48,It.dark))}let i=-4.05;t(on(2.3,5.2,2.3,i,0,0,It.brick)),t(on(2,2,2,i,5.2,0,It.brickDark)),[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([r,a])=>{t(on(0.36,6.4,0.36,i+r*1.18,0,a*1.18,It.brick)),t(Is(0.2,1.1,4,i+r*1.18,6.4,a*1.18,It.trim,Math.PI/4))}),[[0,1.01],[0,-1.01]].forEach(([,r])=>{t(on(0.32,1.35,0.04,i-0.35,5.45,r,It.dark)),t(on(0.32,1.35,0.04,i+0.35,5.45,r,It.dark)),t(on(0.5,1.6,0.04,i,2.2,r*1.14,It.dark))}),[[-1.01],[1.01]].forEach(([r])=>{t(on(0.04,1.35,0.32,i+r,5.45,-0.35,It.dark)),t(on(0.04,1.35,0.32,i+r,5.45,0.35,It.dark))}),t(on(0.06,2,0.85,i-1.18,0,0,It.dark)),t(Ds(new ys(0.42,8).rotateY(-Math.PI/2).translate(i-1.19,3.4,0),It.dark)),t(on(2.2,0.16,2.2,i,7.2,0,It.trim)),[0,Math.PI/2,Math.PI,-Math.PI/2].forEach((r)=>{let a=Su(0.9,0.18,0.95,0,0,0,"x",It.spire);a.rotateY(r),a.translate(i+Math.sin(r)*0.9,7.36,Math.cos(r)*0.9),t(a)}),t(Is(1,5.6,8,i,7.36,0,It.spire,Math.PI/8)),t(on(0.06,0.7,0.06,i,12.95,0,It.stone)),t(on(0.06,0.06,0.36,i,13.38,0,It.stone)),[-1,1].forEach((r)=>{t(Jf(0.34,3.4,8,-2.95,0,r*2.35,It.brick)),t(Is(0.42,1.5,8,-2.95,3.4,r*2.35,It.spire,Math.PI/8))});let s=bf(e,!1);return e.forEach((r)=>r.dispose()),s.computeBoundingBox(),s}var Ls=2600,Q3=3200;function $f({roads:e,lamps:t,lampK:i,squares:s,shops:r,riverside:a=[],zone:o,lite:c}){let l=c?1024:2048,u=l/(2*Ls),h=document.createElement("canvas");h.width=h.height=l;let f=h.getContext("2d",{willReadFrequently:!0});f.fillStyle="#000",f.fillRect(0,0,l,l),f.globalCompositeOperation="lighter",f.lineCap="round",f.lineJoin="round";let d=(M)=>(M+Ls)*u,p=(M)=>(Ls-M)*u,g=(M,R)=>{f.beginPath(),f.moveTo(d(M[0]),p(M[1]));for(let C=2;C<M.length;C+=2)f.lineTo(d(M[C]),p(M[C+1]));if(R)f.closePath()},y=[[11,0.2,30,0.07],[9,0.17,24,0.06],[6.5,0.11,15,0.04],[4,0.05,8,0.02],[7,0.2,18,0.07],[2.4,0.035,0,0]],A=(M)=>`rgba(255,255,255,${Math.min(1,M).toFixed(4)})`;for(let M of e){let R=y[M.c];if(!R)continue;let C=M.r,v=o(C[0],C[1])*(M.w?1.8:1);if(M.c===5&&v<0.7)continue;if(g(C,!1),R[2])f.lineWidth=R[2]*u,f.strokeStyle=A(R[3]*v),f.stroke();f.lineWidth=R[0]*u,f.strokeStyle=A(R[1]*v),f.stroke()}for(let M of s)g(M,!0),f.fillStyle=A(0.1),f.fill();f.lineWidth=5*u;for(let M of r)g(M,!0),f.strokeStyle=A(0.07),f.stroke();f.lineWidth=6*u;for(let M of a)g(M,!0),f.strokeStyle=A(0.13),f.stroke();let m=13*u;for(let M=0,R=t.length/3;M<R;M++){let C=d(t[M*3]),v=p(-t[M*3+2]),T=0.3*i[M],I=f.createRadialGradient(C,v,0,C,v,m);I.addColorStop(0,A(T)),I.addColorStop(0.45,A(T*0.35)),I.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=I,f.fillRect(C-m,v-m,m*2,m*2)}let S=f.getImageData(0,0,l,l).data,w=new Uint8Array(l*l);for(let M=0;M<l*l;M++)w[M]=S[M*4];let b=new mi(w,l,l,fi,bn);return b.wrapS=b.wrapT=Ki,b.magFilter=Gt,b.minFilter=Bn,b.generateMipmaps=!0,b.anisotropy=4,b.needsUpdate=!0,b}function e4(){let e=new mi(new Uint8Array(4),2,2,fi,bn);return e.needsUpdate=!0,e}var qo=`
  uniform sampler2D uLM;
  uniform vec2 uFog;      // početak magle (m), 1 / duljina (1/m)
  uniform vec3 uFogCol;   // linearno
  uniform vec3 uCamL;     // kamera u lokalnim metrima
  uniform float uLamp;    // jačina uličnog svjetla 0…1
  float lmAt(vec2 p){
    vec2 uv = (vec2(p.x, p.y) + ${Ls.toFixed(1)}) / ${(2*Ls).toFixed(1)};
    float m = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    return texture2D(uLM, clamp(uv, 0.0, 1.0)).r * m;
  }
  // natrij u sjeni prelazi u toplo bijelo gdje je svjetla najviše (LED glavnih ulica)
  // oštro uzorkovanje (bez mipmapa): pojedine svjetiljke ostaju zasebne pruge u odsjaju
  float lmSharp(vec2 p){
    vec2 uv = (p + ${Ls.toFixed(1)}) / ${(2*Ls).toFixed(1)};
    float m = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    return textureLod(uLM, clamp(uv, 0.0, 1.0), 0.5).r * m;
  }
  vec3 lampTone(float L){ return vec3(1.0, 0.42, 0.13) * L + vec3(1.0, 0.72, 0.42) * L * L * 1.4; }
  vec3 fogIt(vec3 c, vec3 p){ float d = length(p - uCamL); float f = 1.0 - exp(-max(d - uFog.x, 0.0) * uFog.y); return mix(c, uFogCol, f); }
  float ch(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
  vec3 toOut(vec3 c){ return pow(max(c, 0.0), vec3(0.4545)); }
  float dith(){ return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
`;function Qf(){return{uLM:{value:e4()},uFog:{value:new Oe(1e5,0)},uFogCol:{value:new P(0.0027,0.004,0.0085)},uCamL:{value:new P},uLamp:{value:0},uMoon:{value:new P(-40,60,34).normalize()},uRise:{value:0},uDim:{value:0},uTime:{value:0}}}function ep(e,{lite:t}){let i=Object.assign({uAlpha:{value:1},uWinI:{value:1},uShop:{value:1}},e);return new wt({uniforms:i,transparent:!0,vertexShader:`
      attribute vec4 aCol; attribute vec4 aWin;
      uniform float uRise;
      varying vec3 vL; varying vec3 vP; varying vec4 vWin; varying vec4 vCol;
      void main(){
        vec3 p = position;
        p.y *= clamp((uRise * ${Q3.toFixed(1)} - length(p.xz)) / 260.0, 0.0, 1.0);
        vL = position; vP = p; vWin = aWin; vCol = aCol;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      ${qo}
      uniform vec3 uMoon; uniform float uAlpha; uniform float uDim; uniform float uTime; uniform float uWinI; uniform float uShop;
      varying vec3 vL; varying vec3 vP; varying vec4 vWin; varying vec4 vCol;
      void main(){
        vec3 n = normalize(cross(dFdx(vP), dFdy(vP)));
        vec3 V = normalize(uCamL - vP);
        float ty = floor(vCol.a * 255.0 / 40.0 + 0.5);
        float wall = step(abs(n.y), 0.3);
        vec3 alb = vCol.rgb;
        // mjesečina i nebo (hladno), svjetlo ulice odozdo (toplo, iz karte svjetla ispred plohe)
        float up = n.y * 0.5 + 0.5;
        vec3 amb = mix(vec3(0.0035, 0.0042, 0.0068), vec3(0.019, 0.025, 0.045), up);
        vec3 moon = vec3(0.05, 0.063, 0.105) * max(dot(n, uMoon), 0.0) * (1.0 + 0.5 * (1.0 - wall));
        float L = lmAt(vL.xz + n.xz * 4.0) * uLamp;
        float low = exp(-max(vL.y, 0.0) / 6.0);
        vec3 bounce = lampTone(L) * (wall * (0.05 + 0.5 * low) + (1.0 - wall) * 0.03);
        vec3 col = alb * (amb + moon + bounce);
        // crijep i škriljevac: redovi pokrova (sjena preklopa), nestaju prije nego što bi treperili
        if (ty > 0.5 && ty < 2.5) {
          float per = ty < 1.5 ? 0.36 : 0.28;
          float cy = vL.y / per;
          float k = 1.0 - smoothstep(0.18, 0.5, fwidth(cy));
          col *= mix(1.0, 0.74 + 0.3 * fract(cy), k);
          vec3 R = reflect(-V, n);
          col += vec3(0.05, 0.06, 0.09) * pow(max(dot(R, uMoon), 0.0), ty < 1.5 ? 6.0 : 22.0) * (ty < 1.5 ? 0.12 : 0.5);
        }
        // prozori: mreža po katovima, upaljeni prema profilu; izdaleka prelaze u prosječan topli sjaj
        float prof = floor(vWin.w + 0.001);
        if (wall > 0.5 && prof > 0.5) {
          // sjeme je kvantizirano (središte razreda): interpolacija konstante smije malo odstupiti, a hash ne smije
          float seed = floor(fract(vWin.w) * 1000.0) / 1000.0;
          vec4 P = prof < 1.5 ? vec4(3.6, 3.0, 0.17, 0.7) : prof < 2.5 ? vec4(3.0, 2.85, 0.28, 0.7) : prof < 3.5 ? vec4(3.4, 3.7, 0.2, 4.3) : vec4(6.0, 4.5, 0.06, 1.2);
          vec2 gq = vec2(vWin.x / P.x, (vL.y - P.w) / P.y);
          vec2 c = floor(gq), e = fract(gq);
          vec2 fw = max(fwidth(gq), vec2(1e-4));
          float row = step(0.0, vWin.x) * step(vWin.x, vWin.z);
          float inC = row * step(0.0, gq.y) * step((c.y + 0.84) * P.y + P.w, vWin.y);
          float wx = clamp((0.24 - abs(e.x - 0.5)) / fw.x + 0.5, 0.0, 1.0);
          float wy = clamp((0.25 - abs(e.y - 0.56)) / fw.y + 0.5, 0.0, 1.0);
          float win = wx * wy * inC;
          // Noćna raspodjela (nije svaki prozor upaljen): zgrada ima svoju "budnost" — dio kuća je potpuno taman,
          // većina je mirna, poneka vrlo živa. Svjetla se pale po stanovima/uredima (skupina susjednih prozora na
          // katu), a ne pojedinačno. Uz glavne ulice (karta svjetla) grad je budniji nego na rubu.
          float hb = ch(vec3(seed * 91.0, 3.3, 7.7));
          float act = hb < 0.22 ? 0.08 : hb < 0.82 ? 0.7 + 0.6 * (hb - 0.22) / 0.6 : 1.6;
          act *= mix(0.7, 1.2, smoothstep(0.04, 0.35, lmAt(vL.xz + n.xz * 4.0)));
          float uw = prof < 2.5 ? 2.0 : prof < 3.5 ? 3.0 : 4.0;
          vec2 unit = vec2(floor(c.x / uw), c.y);
          float h0 = ch(vec3(unit, seed * 517.0 + 9.0));
          // poneki stan se s vremena na vrijeme upali ili ugasi (grad živi), bez treperenja
          float ep = floor(uTime / 140.0 + h0 * 9.0) * step(0.88, fract(h0 * 31.7));
          float pOcc = clamp(P.z * act * 1.1, 0.0, 0.9);
          float occ = step(ch(vec3(unit + ep * 3.1, seed * 517.0 + 4.1)), pOcc);
          float h1 = ch(vec3(c, seed * 517.0 + 1.7));
          float lit = occ * step(h1, 0.62);
          // vrsta svjetla: prigušeno (zastor, dublja soba), toplo unutarnje, hladno (ekran, ured, stubište)
          float hk = fract(h1 * 53.3 + seed * 7.0);
          float hi = fract(h1 * 91.7);
          float coolP = prof > 2.5 ? 0.2 : 0.07;
          vec3 wc = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.76, 0.5), fract(h1 * 13.1));
          float wi = 0.42 + 0.5 * hi;
          if (hk < coolP) { wc = vec3(0.52, 0.64, 1.0); wi = 0.12 + 0.16 * hi; }
          else if (hk < coolP + 0.36) { wc = vec3(1.0, 0.52, 0.24); wi = 0.05 + 0.11 * hi; }
          wi *= uWinI;
          vec3 glass = vec3(0.0012, 0.0016, 0.003) + vec3(0.01, 0.013, 0.022) * pow(1.0 - abs(dot(n, V)), 3.0);
          vec3 wcol = mix(glass, wc * wi, lit);
          float lod = smoothstep(0.2, 0.5, max(fw.x, fw.y));
          float band = row * step(0.0, gq.y) * step(vL.y, vWin.y - 0.6);
          // izdaleka: očekivani sjaj baš ove zgrade (ne jednolika traka), s razlikom po katovima dok se katovi još vide
          float pLit = pOcc * 0.62;
          float meanI = coolP * 0.2 + 0.36 * 0.1 + (0.64 - coolP) * 0.67;
          float fk = mix(1.0, mix(0.25, 1.75, ch(vec3(c.y, 5.0, seed * 517.0))), 1.0 - smoothstep(0.35, 0.9, fw.y));
          vec3 avg = mix(col, vec3(1.0, 0.62, 0.32) * meanI * uWinI * pLit * fk + glass * (1.0 - pLit), 0.24 * band);
          col = mix(mix(col, wcol, win), avg, lod);
          // izlozi u prizemlju: širi, svjetliji, toplo bijeli — svako svjetlo je nečiji posao
          if (prof > 2.5 && prof < 3.5) {
            float sy = (vL.y - 0.45) / 3.2;
            float fy = max(fwidth(sy), 1e-4);
            float sh = clamp((0.42 - abs(e.x - 0.5)) / fw.x + 0.5, 0.0, 1.0) * clamp((0.5 - abs(sy - 0.5)) / fy + 0.5, 0.0, 1.0) * row;
            float hs = ch(vec3(c.x, 9.0, seed * 211.0));
            // navečer je dio izloga zatvoren (samo noćno svjetlo u dubini), ostali su različito jaki i topli
            float on = step(hs, 0.62);
            float open = step(hs, 0.4);
            vec3 shop = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.78, 0.56), fract(hs * 7.0)) * mix(0.1 + 0.08 * fract(hs * 17.0), 0.4 + 0.5 * fract(hs * 17.0), open) * uShop;
            float sl = smoothstep(0.25, 0.6, max(fw.x, fy));
            col = mix(col, mix(glass, shop, on), sh * (1.0 - sl));
            col += shop * on * 0.3 * sl * row * step(0.45, vL.y) * step(vL.y, 3.65);
          }
        }
        col = fogIt(col, vP);
        col *= pow(1.0 - uDim * 0.82, 2.2); // zatamnjenje u izlaznom (percepcijskom) prostoru, kao prije
        gl_FragColor = vec4(toOut(col) + dith(), uAlpha);
      }`})}function tp(e){let t=Object.assign({uOpacity:{value:1},uGlow:{value:0}},e);return new wt({uniforms:t,transparent:!0,depthWrite:!1,blending:Xi,blendSrc:hi,blendDst:eo,vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${qo}
      uniform float uOpacity; uniform float uGlow; varying vec3 vL;
      float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main(){
        float d = length(vL.xz);
        float a = (1.0 - smoothstep(2200.0, 5000.0, d)) * uOpacity;
        // tlo između ulica ostaje tamno: slabi oreoli se potiskuju, svijetle same ulice i lokve svjetiljki
        float L = lmAt(vL.xz);
        // izbliza se slabi oreoli potiskuju; izdaleka (mipmape usrednjuju ulice) mreža ostaje cijela
        float mpp = length(fwidth(vL.xz));
        L *= mix(smoothstep(0.035, 0.32, L), 1.0, smoothstep(1.5, 6.0, mpp));
        vec3 base = vec3(0.0021, 0.0033, 0.0068) + vec3(0.0016, 0.0024, 0.0048) * (grid(vL.xz, 50.0) * 0.6 + grid(vL.xz, 250.0));
        vec3 lit = lampTone(L) * 0.16;
        vec3 g = fogIt(base + lit * uLamp * uOpacity, vL);
        vec3 glow = toOut(lampTone(L) * 0.24) * uGlow * (1.0 - uOpacity) * (1.0 - smoothstep(2000.0, 2600.0, d));
        gl_FragColor = vec4(toOut(g) * a + glow + dith(), a);
      }`})}function np(e){let t=Object.assign({uOpacity:{value:1}},e);return new wt({uniforms:t,transparent:!0,depthWrite:!1,vertexShader:"attribute vec3 aCol; varying vec3 vL; varying vec3 vC; void main(){ vL = position; vC = aCol; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${qo}
      uniform float uOpacity; uniform float uDim; varying vec3 vL; varying vec3 vC;
      void main(){
        float L = lmAt(vL.xz) * uLamp;
        vec3 c = vC * (0.07 + lampTone(L) * 1.25);
        c = fogIt(c, vL) * pow(1.0 - uDim * 0.6, 2.2);
        gl_FragColor = vec4(toOut(c) + dith(), uOpacity);
      }`})}function ip(e,{lite:t}){let i=Object.assign({uOpacity:{value:1}},e),s=t?4:7;return new wt({uniforms:i,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${qo}
      uniform float uOpacity; uniform float uTime; uniform float uDim; uniform vec3 uMoon; varying vec3 vL;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        float a = ch(vec3(i, 0.0)), b = ch(vec3(i + vec2(1.0, 0.0), 0.0)), c = ch(vec3(i + vec2(0.0, 1.0), 0.0)), d = ch(vec3(i + 1.0, 0.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
      // valići (tri oktave) teku nizvodno; oktava koja bi na zaslonu bila sitnija od nekoliko piksela se gasi
      vec3 oK;
      float wav(vec2 p){ vec2 q = p - vec2(uTime * 0.6, 0.0); return vn(q * vec2(0.05, 0.11)) * 0.6 * oK.x + vn(q * vec2(0.13, 0.31) + 3.7) * 0.3 * oK.y + vn(q * vec2(0.4, 0.9) - 1.3) * 0.1 * oK.z; }
      void main(){
        vec2 p = vL.xz;
        float fw = length(fwidth(p));
        oK = 1.0 - smoothstep(0.08, 0.3, fw * vec3(0.11, 0.31, 0.9));
        float e = max(1.5, fw);
        float h0 = wav(p);
        vec2 gr = vec2(wav(p + vec2(e, 0.0)) - h0, wav(p + vec2(0.0, e)) - h0) / e;
        vec3 V = normalize(uCamL - vL);
        vec3 N = normalize(vec3(-gr.x * 7.0, 1.0, -gr.y * 7.0));
        float fres = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 deep = vec3(0.0011, 0.0021, 0.0048);
        vec3 sky = vec3(0.011, 0.016, 0.034);
        vec3 col = mix(deep, sky, fres);
        // mjesečina: sitno svjetlucanje samo na finim valićima (krupni valovi daju tek blagi sjaj)
        vec3 R = reflect(-V, N);
        col += vec3(0.05, 0.065, 0.11) * pow(max(dot(R, uMoon), 0.0), 60.0) * 0.35;
        // odsjaji svjetla: uzorci iza točke (od kamere prema dalje), razvučeni pod kosim kutom
        vec2 away = normalize(p - uCamL.xz + 1e-3);
        vec2 side = vec2(-away.y, away.x);
        // valovita voda razvlači odsjaj prema promatraču: što je pogled kosiji, to je trag dulji
        float st = clamp(0.4 / max(V.y, 0.04), 1.0, 12.0) * 6.0;
        float acc = 0.0;
        for (int i = 1; i <= ${s}; i++) {
          float t = float(i);
          acc += lmSharp(p + away * t * st + side * dot(gr, side) * 60.0) * (1.0 - t / ${(s+1).toFixed(1)});
        }
        acc /= ${(s*0.5).toFixed(1)};
        col += lampTone(acc * 1.6) * 0.75 * (0.3 + 0.7 * fres) * uLamp;
        col += lampTone(lmAt(p)) * 0.05 * uLamp;
        float fade = 1.0 - smoothstep(2600.0, 3400.0, length(p));
        col = fogIt(col, vL) * pow(1.0 - uDim * 0.6, 2.2);
        gl_FragColor = vec4(toOut(col) + dith(), 0.98 * fade * uOpacity);
      }`})}var sp=3200;function t4(e){let t=new Int32Array(e,0,13),i=new Int16Array(e,52),s=0,r=(a,o)=>{let c=[];for(let l=0;l<a;l++){let u=[];for(let d=0;d<o;d++)u.push(i[s++]);let h=i[s++],f=new Float32Array(h*2);for(let d=0;d<h;d++)f[d*2]=i[s++]/2,f[d*2+1]=i[s++]/2;c.push({h:u,r:f})}return c};return{buildings:r(t[1],2),roads:r(t[3],1),water:r(t[5],1),areas:r(t[7],1),marks:r(t[9],1)}}var n4=(e)=>{let t=0,i=e.length/2;for(let s=0,r=i-1;s<i;r=s++)t+=(e[r*2]-e[s*2])*(e[r*2+1]+e[s*2+1]);return t/2},Xo=(e)=>{let t=0,i=0,s=e.length/2;for(let r=0;r<s;r++)t+=e[r*2],i+=e[r*2+1];return[t/s,i/s]},Ko=(e)=>{let t=[];for(let i=0;i<e.length;i+=2)t.push(new Oe(e[i],e[i+1]));return t};function wu(e,t,i){let s=!1;for(let r=0,a=i.length/2-1;r<i.length/2;a=r++){let o=i[r*2],c=i[r*2+1],l=i[a*2],u=i[a*2+1];if(c>t!==u>t&&e<(l-o)*(t-c)/(u-c)+o)s=!s}return s}function fa(e,t){let i=e.length/2,s=new Float32Array(i*2);for(let r=0;r<i;r++){let a=(r+i-1)%i,o=(r+1)%i,c=e[r*2]-e[a*2],l=e[r*2+1]-e[a*2+1],u=e[o*2]-e[r*2],h=e[o*2+1]-e[r*2+1],f=Math.hypot(c,l)||1,d=Math.hypot(u,h)||1;c/=f,l/=f,u/=d,h/=d;let p=-l-h,g=c+u,y=Math.hypot(p,g);if(y<0.0001)p=-l,g=c;else p/=y,g/=y;let A=Math.max(0.45,p*-l+g*c);s[r*2]=e[r*2]+p*t/A,s[r*2+1]=e[r*2+1]+g*t/A}return s}class rp{constructor(e){this.n=0,this.alloc(e)}alloc(e){let t=new Float32Array(e*3),i=new Uint8Array(e*4),s=new Float32Array(e*4);if(this.p)t.set(this.p),i.set(this.c),s.set(this.w);this.p=t,this.c=i,this.w=s,this.cap=e}v(e,t,i,s,r,a){if(this.n===this.cap)this.alloc(this.cap*2);let o=this.n++;if(this.p[o*3]=e,this.p[o*3+1]=t,this.p[o*3+2]=i,this.c[o*4]=Math.min(255,s[0]*255+0.5),this.c[o*4+1]=Math.min(255,s[1]*255+0.5),this.c[o*4+2]=Math.min(255,s[2]*255+0.5),this.c[o*4+3]=r*40,a)this.w[o*4]=a[0],this.w[o*4+1]=a[1],this.w[o*4+2]=a[2],this.w[o*4+3]=a[3]}tri(e,t,i,s,r){this.v(e[0],e[1],e[2],s,r),this.v(t[0],t[1],t[2],s,r),this.v(i[0],i[1],i[2],s,r)}triUp(e,t,i,s,r){let a=t[0]-e[0],o=t[2]-e[2],c=i[0]-e[0],l=i[2]-e[2];if(o*c-a*l>=0)this.tri(e,t,i,s,r);else this.tri(e,i,t,s,r)}geometry(){let e=this.n,t=new it;return t.setAttribute("position",new ut(this.p.slice(0,e*3),3)),t.setAttribute("aCol",new ut(this.c.slice(0,e*4),4,!0)),t.setAttribute("aWin",new ut(this.w.slice(0,e*4),4)),t.computeBoundingSphere(),t}}function ap({lite:e,dataUrl:t,modelUrl:i,onLines:s,onModel:r,onLoaded:a,prepare:o}){let c=qn(1945),l=new zt;l.name="osijek";let u=Qf(),h=u,f=e?1400:2600,d=e?380:650,p=e?600:1100,g=[],y=(Q)=>(g.push(Q),Q),A=!1,m={cath:new P(30,99,-4),hotel:new P(329,66,-154),trg:new P(105,4,-78),drava:new P(80,4,-470)},S=y(tp(u)),w=new Pt(y(new ys(5200,64).rotateX(-Math.PI/2)),S);w.position.y=-0.4,w.renderOrder=-1,l.add(w);let b=y(ep(u,{lite:e})),M=null,R={uRise:h.uRise,uDim:h.uDim,uLines:{value:0.4},uColor:{value:new Be("#5d7ed6")}},C=y(new wt({uniforms:R,transparent:!0,depthWrite:!1,vertexShader:`uniform float uRise; varying float vF;
      void main(){ vec3 p = position; float dR = length(p.xz); float k = clamp((uRise * ${sp.toFixed(1)} - dR) / 260.0, 0.0, 1.0); p.y *= k; vF = (1.0 - smoothstep(300.0, 1100.0, dR)) * k;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uLines; varying float vF; void main(){ gl_FragColor = vec4(uColor, uLines * vF); }"})),v=y(ip(u,{lite:e})),T=y(np(u)),I=tn({count:1,color:"#ffae55",core:"#fff1d6",size:0.9});I.points.renderOrder=4;let N=new P,F=new P,z={uLift:{value:0},uGlow:{value:0.5},uAlpha:{value:1},uFocus:{value:0},uScan:{value:200},uScanOn:{value:0},uWin:{value:0.3}};function B(){let Q=new Zi({vertexColors:!0,flatShading:!0,roughness:0.84,metalness:0.02,transparent:!0,side:Qt});return Q.forceSinglePass=!0,Q.depthWrite=!0,Q.onBeforeCompile=(Ze)=>{Object.assign(Ze.uniforms,z),Ze.vertexShader=Ze.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind; uniform float uLift; varying float vH; varying float vKind; varying vec3 vLoc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vKind = aKind; vLoc = position; transformed.y = transformed.y * uLift - (1.0 - uLift) * 3.0;`),Ze.fragmentShader=Ze.fragmentShader.replace("#include <common>",`#include <common>
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
          // ravna normala u prostoru modela (okrenuta kameri): razlikuje zid od krova i daje smjer zida.
          // Strmi gotički krov ima |n.y| ≈ 0,5, plohe šiljka i fijala ≈ 0,15 (za reflektore su zid)
          vec3 nL = normalize(cross(dFdx(vLoc), dFdy(vLoc)));
          float wall = 1.0 - smoothstep(0.22, 0.42, abs(nL.y));
          float tc = dot(vLoc.xz, normalize(vec2(-nL.z, nL.x) + 1e-5));
          // reflektori odozdo (topli) i hladna noć prema vrhu
          // iz daljine zgrada dijeli noćnu paletu grada; reflektori i toplina rastu tek kad postane motiv (uFocus)
          float flood = 1.0 - smoothstep(4.0, 78.0, vH);
          // reflektori u tlu svakih ~5,5 m: u podnožju lepeze svjetla, koje se s visinom šire i stapaju
          float pu = fract(tc / 5.5 + 0.5) - 0.5;
          float psp = 0.13 + vH * 0.018;
          float pool = exp(-pu * pu / (psp * psp));
          float fm = mix(1.0, 0.7 + 0.45 * pool, (1.0 - smoothstep(1.5, 24.0, vH)) * wall * (0.4 + 0.6 * uFocus));
          // glavni reflektori stoje na trgu ispred tornja (+x): to pročelje svjetlije, bočna i stražnja tamnija;
          // krovove svjetlo odozdo ne hvata, pa ostaju u hladnoj noći (topli zidovi, tamni krovovi)
          fm *= mix(0.3, 0.8 + 0.28 * smoothstep(-0.3, 0.9, nL.x), wall);
          float lit = clamp(flood * (0.5 + 0.5 * uGlow) * (0.3 + 0.7 * uFocus), 0.0, 1.0) * fm;
          vec3 night = mix(vec3(0.36, 0.40, 0.58), vec3(1.08, 0.88, 0.72), lit);
          gl_FragColor.rgb *= mix(vec3(1.0), night, 1.0 - glass);
          gl_FragColor.rgb += vec3(1.0, 0.5, 0.25) * uGlow * 0.05 * flood * (1.0 - glass);
          // vitraji: toplo svjetlo iznutra, olovni okviri i blaga razlika stakala (jantar, ponegdje crveno-jantarno
          // ili prigušeno plavo); okviri nestaju iz daljine prije nego što bi treperili. Sjaj oko njih je zasebna mreža
          float hw = hh(floor(vLoc * vec3(0.45, 0.2, 0.45)));
          vec2 gc = vec2(tc / 0.4, vH / 0.52);
          vec2 gw = fwidth(gc);
          vec2 gd = abs(fract(gc) - 0.5);
          vec2 ld = smoothstep(0.44 - gw, vec2(0.44), gd) * (1.0 - smoothstep(0.15, 0.45, gw));
          float hc = hh(vec3(floor(gc), 17.0 + hw * 31.0));
          vec3 sg = mix(vec3(1.0, 0.8, 0.4), vec3(1.0, 0.64, 0.26), hw) * (0.82 + 0.3 * fract(hc * 7.3));
          if (hc > 0.87) sg = vec3(0.95, 0.42, 0.24);
          else if (hc < 0.07) sg = vec3(0.32, 0.4, 0.7);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, sg * (0.22 + 0.8 * uWin) * (1.0 - 0.7 * max(ld.x, ld.y)), glass);
          // zvonik iznad sata: iza žaluzina tek naslutljivo toplo svjetlo, jače pri dnu otvora. Otvori su u modelu
          // tamna "vrata" (vrsta 2 kao cigla i škriljevac): od cigle ih dijeli tama, od škriljevca topliji ton
          float bel = step(1.5, vKind) * step(vKind, 2.5) * step(vColor.r, 0.03) * step(vColor.b * 1.05, vColor.r) * step(48.5, vH) * step(vH, 61.4);
          float sl = vH / 0.46;
          float sw = fwidth(sl);
          float gap = mix(1.0 - smoothstep(0.15, 0.15 + sw, abs(fract(sl) - 0.8)), 0.3, smoothstep(0.3, 0.8, sw));
          gl_FragColor.rgb += vec3(1.0, 0.6, 0.3) * bel * gap * (0.35 + 0.65 * (1.0 - smoothstep(49.2, 59.5, vH))) * (0.03 + 0.15 * uFocus);
          // vrh tornja hvata svjetlo kad zgrada postane glavni motiv
          gl_FragColor.rgb += vec3(1.0, 0.8, 0.58) * smoothstep(58.0, 90.0, vH) * uFocus * 0.14 * (1.0 - glass);
          // skener: iznad crte ostaje samo nacrt (linije), zgrada se čisto reže; na crti tanka svjetla traka
          if (uScanOn > 0.5 && vH > uScan) discard;
          float band = exp(-pow((vH - uScan) / 0.9, 2.0)) * uScanOn;
          gl_FragColor.rgb += vec3(0.45, 0.62, 1.0) * band * 1.2;
          gl_FragColor.a *= uAlpha;`)},Q.customProgramCacheKey=()=>"zaec-cath-v4",Q}let j={uLift:z.uLift,uScan:z.uScan,uScanOn:z.uScanOn,uI:{value:0}},ie=y(new wt({uniforms:j,transparent:!0,depthWrite:!1,blending:Zt,side:Qt,vertexShader:`attribute vec4 aGlow; uniform float uLift; varying vec4 vG; varying float vH;
      void main(){ vG = aGlow; vH = position.y; vec3 p = position; p.y = p.y * uLift - (1.0 - uLift) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uI; uniform float uScan; uniform float uScanOn; varying vec4 vG; varying float vH;
      void main(){
        float a = vG.a * vG.a * uI;
        if (uScanOn > 0.5 && vH > uScan) discard;
        if (a < 0.003) discard;
        gl_FragColor = vec4(vG.rgb * a, a);
      }`})),J=null,W=null,H=null,U=null,oe=0,we=new P(33.8,90,1);function Le(Q,Ze,k=null){let me=++oe;if(!Q.attributes.aKind)Q.setAttribute("aKind",new ut(new Float32Array(Q.attributes.position.count),1));let Ie=B(),Xe=new Pt(Q,Ie);Xe.renderOrder=1;let st=new $r(Q,Ze?22:30),rt=()=>{if(me!==oe){Q.dispose(),Ie.dispose(),st.dispose(),k?.dispose();return}if(W)l.remove(W),W.geometry.dispose(),H.dispose(),U?.dispose();if(J)l.remove(J),J.geometry.dispose(),J=null;if(k)J=new Pt(k,ie),J.renderOrder=5,J.frustumCulled=!1,l.add(J);let ot=Q.attributes.position,pt=0;for(let le=1;le<ot.count;le++)if(ot.getY(le)>ot.getY(pt))pt=le;we.set(ot.getX(pt),ot.getY(pt),ot.getZ(pt)),m.cath.set(we.x-4,we.y*1.06,we.z),W=Xe,H=Ie,U=st,l.add(Xe),s?.(st,Ze),r?.(Xe)};if(o)o(Xe).then(rt,rt);else rt()}{let Q=Zf();Q.scale(-7,7,7),Q.translate(2,0,-3.8),Q.deleteAttribute("normal"),Le(Q,!0)}if(i){let Q=new yu;Q.setMeshoptDecoder(Yf),Q.load(i,(Ze)=>{let k=(ot)=>{for(let pt=ot;pt;pt=pt.parent)if(pt.name==="konkatedrala"||pt.name==="sjaj")return pt.name;return""},me=null,Ie=null;if(Ze.scene.updateMatrixWorld(!0),Ze.scene.traverse((ot)=>{if(!ot.isMesh)return;if(k(ot)==="sjaj")Ie=Ie||ot;else me=me||ot}),!me)return;let Xe=(ot,pt)=>{let le=new it,D=ot.getAttribute("position"),Ue=new Float32Array(D.count*3);for(let je=0;je<D.count;je++)Ue[je*3]=D.getX(je),Ue[je*3+1]=D.getY(je),Ue[je*3+2]=D.getZ(je);le.setAttribute("position",new ut(Ue,3));let Ee=ot.getAttribute("color");if(Ee&&pt){let je=new Float32Array(Ee.count*3),E=new Float32Array(Ee.count);for(let x=0;x<Ee.count;x++)je[x*3]=Ee.getX(x),je[x*3+1]=Ee.getY(x),je[x*3+2]=Ee.getZ(x),E[x]=Ee.itemSize>3?Math.round(Ee.getW(x)*4):0;le.setAttribute("color",new ut(je,3)),le.setAttribute("aKind",new ut(E,1))}else if(Ee){let je=new Float32Array(Ee.count*4);for(let E=0;E<Ee.count;E++)je[E*4]=Ee.getX(E),je[E*4+1]=Ee.getY(E),je[E*4+2]=Ee.getZ(E),je[E*4+3]=Ee.itemSize>3?Ee.getW(E):1;le.setAttribute("aGlow",new ut(je,4))}if(ot.index)le.setIndex(ot.index.clone());return le},st=Xe(me.geometry,!0);st.applyMatrix4(me.matrixWorld);let rt=null;if(Ie)rt=Xe(Ie.geometry,!1),rt.applyMatrix4(Ie.matrixWorld);Ze.scene.traverse((ot)=>{if(ot.isMesh)ot.geometry.dispose(),ot.material.dispose?.()}),Le(st,!1,rt)},void 0,(Ze)=>console.warn("[ZAEC] model konkatedrale nije učitan, koristi se rezervni",Ze))}let dt=new dr("#ff9a5c",0,32,1.4),Ge=new P(40,14,30),ne=new zt,pe={uRise:h.uRise,uDim:h.uDim,uAlpha:{value:1}},ve=y(new wt({uniforms:pe,transparent:!0,vertexShader:`varying vec3 vL; varying vec3 vN; varying vec3 vW; uniform float uRise;
      void main(){ vL = position; vN = normalize(mat3(modelMatrix) * normal); vec3 p = position;
        float k = clamp((uRise * ${sp.toFixed(1)} - 360.0) / 260.0, 0.0, 1.0); p.y *= k;
        vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uDim; uniform float uAlpha; varying vec3 vL; varying vec3 vN; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      void main(){
        vec3 n = normalize(vN);
        float roof = step(0.6, n.y);
        float u = abs(n.x) > abs(n.z) ? vL.z : vL.x;
        vec2 cell = floor(vec2(u / 3.0, vL.y / 3.4));
        vec2 fc = fract(vec2(u / 3.0, vL.y / 3.4));
        float frame = step(0.1, fc.x) * step(0.22, fc.y) * step(fc.y, 0.9);
        float lit = step(0.72, h21(cell + floor(vL.y / 30.0))) * frame;
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - abs(dot(n, v)), 2.0);
        // noćno staklo: tamno plavo-sivo s hladnim odsjajem neba; sobe tople, ponegdje hladni zaslon
        vec3 glass = mix(vec3(0.016, 0.026, 0.055), vec3(0.07, 0.11, 0.24), fres * 0.8 + 0.1);
        float hc = h21(cell * 1.7 + 3.0);
        vec3 wc = hc < 0.78 ? vec3(0.98, 0.72, 0.44) : vec3(0.6, 0.7, 0.95);
        vec3 c = glass * (0.6 + 0.4 * frame) + lit * wc * (0.42 + 0.3 * h21(cell + 7.0));
        c = mix(c, vec3(0.04, 0.045, 0.06), roof);
        c *= (1.0 - uDim * 0.8);
        gl_FragColor = vec4(c, uAlpha);
      }`}));l.add(ne);let qe=[];async function Je(){let Q=await(await fetch(t)).arrayBuffer(),Ze=t4(Q),k=new rp(262144),me=Math.PI/180,Ie=Ze.water.filter((de)=>de.h[0]===0),Xe=Ze.water.filter((de)=>de.h[0]===1),st=(de,se)=>Ie.some((q)=>wu(de,se,q.r))&&!Xe.some((q)=>wu(de,se,q.r)),rt=(de,se,q=45)=>st(de+q,se)||st(de-q,se)||st(de,se+q)||st(de,se-q),ot=[],pt=(de,se)=>0.45+0.55*Math.exp(-Math.hypot(de-112,se-53)/900)+0.4*Math.exp(-Math.hypot(de-1550,se-20)/420),le=(de,se)=>Math.min(Math.hypot(de-112,se-53)/900,Math.hypot(de-1550,se-20)/450),D=[[0.56,0.46,0.3],[0.6,0.52,0.38],[0.5,0.41,0.28],[0.55,0.5,0.42],[0.44,0.45,0.42],[0.52,0.37,0.29],[0.41,0.45,0.37],[0.62,0.58,0.5]],Ue=[[0.36,0.37,0.38],[0.44,0.43,0.4],[0.3,0.31,0.33],[0.5,0.47,0.42]],Ee=[[0.27,0.27,0.28],[0.3,0.16,0.11],[0.34,0.33,0.31]],je=[[0.4,0.13,0.07],[0.33,0.11,0.06],[0.45,0.17,0.09],[0.3,0.14,0.09],[0.38,0.18,0.12]],E=[[0.1,0.11,0.13],[0.13,0.14,0.16],[0.16,0.15,0.15]],x=[[0.09,0.09,0.095],[0.12,0.12,0.12],[0.07,0.075,0.08]],O=[0.3,0.12,0.08],K=(de)=>de[c()*de.length|0],fe=(de,se)=>de.map((q)=>q*(1-se+c()*2*se)),ge=[0,3.6,3,3.4,6],be=[],re=(de,se,q,te,ae,Z)=>{for(let ee=0;ee<se;ee++){let he=(ee+1)%se,_e=de[ee*2],Ve=-de[ee*2+1],nt=de[he*2],_=-de[he*2+1],L=null,Y=null;if(Z){let X=Math.hypot(nt-_e,_-Ve),G=ge[Z.prof],ye=Math.floor(X/G);if(ye>=1){let Te=(X-ye*G)/2,Me=Z.prof+Z.seed;L=[-Te,Z.top,ye*G,Me],Y=[X-Te,Z.top,ye*G,Me]}}k.v(_e,q,Ve,ae,0,L),k.v(nt,q,_,ae,0,Y),k.v(nt,te,_,ae,0,Y),k.v(_e,q,Ve,ae,0,L),k.v(nt,te,_,ae,0,Y),k.v(_e,te,Ve,ae,0,L)}},ue=(de,se,q,te,ae,Z)=>{for(let ee=0,he=de.length/2;ee<he;ee++){let _e=(ee+1)%he,Ve=[de[ee*2],q,-de[ee*2+1]],nt=[de[_e*2],q,-de[_e*2+1]],_=[se[ee*2],te,-se[ee*2+1]],L=[se[_e*2],te,-se[_e*2+1]];k.tri(Ve,nt,L,ae,Z),k.tri(Ve,L,_,ae,Z)}},De=(de,se,q,te)=>{let ae=Ko(de),Z=[];try{Z=oi.triangulateShape(ae,[])}catch(ee){Z=[]}if(Z.length)for(let[ee,he,_e]of Z)k.triUp([de[ee*2],se,-de[ee*2+1]],[de[he*2],se,-de[he*2+1]],[de[_e*2],se,-de[_e*2+1]],q,te);else{let[ee,he]=Xo(de);for(let _e=0,Ve=de.length/2;_e<Ve;_e++){let nt=(_e+1)%Ve;k.triUp([ee,se,-he],[de[nt*2],se,-de[nt*2+1]],[de[_e*2],se,-de[_e*2+1]],q,te)}}},Ye=(de,se,q,te,ae,Z,ee,he,_e,Ve)=>{let nt=-Z,_=ae,L=[de-ae*q-nt*te,se-Z*q-_*te,de+ae*q-nt*te,se+Z*q-_*te,de+ae*q+nt*te,se+Z*q+_*te,de-ae*q+nt*te,se-Z*q+_*te];for(let Y=0;Y<4;Y++){let X=(Y+1)%4,G=L[Y*2],ye=-L[Y*2+1],Te=L[X*2],Me=-L[X*2+1];k.tri([G,ee,ye],[Te,ee,Me],[Te,he,Me],_e,Ve),k.tri([G,ee,ye],[Te,he,Me],[G,he,ye],_e,Ve)}k.triUp([L[0],he,-L[1]],[L[2],he,-L[3]],[L[4],he,-L[5]],_e,Ve),k.triUp([L[0],he,-L[1]],[L[4],he,-L[5]],[L[6],he,-L[7]],_e,Ve)};for(let de of Ze.buildings){let se=de.r,q=se.length/2,[te,ae]=Xo(se),Z=Math.hypot(te,ae);if(Z>f)continue;let ee=de.h[0]/2,he=de.h[1],_e=Math.abs(n4(se)),Ve=0,nt=0,_=1,L=0;for(let xe=0;xe<q;xe++){let xt=(xe+1)%q,$e=se[xt*2]-se[xe*2],Nt=se[xt*2+1]-se[xe*2+1],_t=Math.hypot($e,Nt);if(Ve+=_t,_t>nt)nt=_t,_=$e/_t,L=Nt/_t}let Y=-L,X=_,G=1e9,ye=-1e9,Te=1e9,Me=-1e9;for(let xe=0;xe<q;xe++){let xt=se[xe*2]-te,$e=se[xe*2+1]-ae,Nt=xt*_+$e*L,_t=xt*Y+$e*X;G=Math.min(G,Nt),ye=Math.max(ye,Nt),Te=Math.min(Te,_t),Me=Math.max(Me,_t)}let ke=Me-Te,Ke=ye-G,lt=_e/Math.max(1,ke*Ke)>0.8,ft=((c()*997|0)+0.5)/1000,Fe;if(he===3||he===4||ee<3.2)Fe=0;else if(he===5)Fe=ee>9?2:4;else if(he===2)Fe=2;else if(he===1)Fe=ee>10?2:1;else Fe=le(te,ae)<1&&ee>=7.5?3:ee>11?2:1;if(Fe===3)be.push(se);if(Fe&&Z<2600&&rt(te,ae,70))ot.push(se);let St=ee<=15&&(he===0||he===1||he===3),Ft=fe(he===5||he===4?K(Ee):he===2||ee>15?K(Ue):K(D),0.08),bt=_e<420&&ee<=13&&q<=10&&lt,Dt=!bt&&ee<=22&&(he===0||he===1||he===3||_e<420&&ee<=13)&&_e<6000,Kt=!bt&&!Dt&&he!==4&&_e>120?0.9:0;if(re(se,q,0,ee+Kt,Ft,Fe?{prof:Fe,seed:ft,top:ee}:null),bt){let xe=c()<0.88,xt=fe(xe?K(je):K(E),0.1),$e=xe?1:2,Nt=Math.min(6.5,Math.max(1.6,ke/2*Math.tan((38+c()*8)*me))),_t=c(),Xt=_t<0.45?1:_t<0.7?0.8:Math.max(0,(Ke-ke)/Math.max(Ke,1)),Yt=(G+ye)/2,yt=(Te+Me)/2,Ut=te+Y*yt,fn=ae+X*yt,Ot=(Vt,cn)=>{let Kn=Yt+((Vt-te)*_+(cn-ae)*L-Yt)*Xt;return[Ut+_*Kn,ee+Nt,-(fn+L*Kn)]};for(let Vt=0;Vt<q;Vt++){let cn=(Vt+1)%q,Kn=[se[Vt*2],ee,-se[Vt*2+1]],ba=[se[cn*2],ee,-se[cn*2+1]],Mr=Ot(se[Vt*2],se[Vt*2+1]),Sr=Ot(se[cn*2],se[cn*2+1]),Pu=se[cn*2]-se[Vt*2],Iu=se[cn*2+1]-se[Vt*2+1];if(Math.abs((Pu*_+Iu*L)/(Math.hypot(Pu,Iu)||1))<0.35&&Xt>0.99){k.tri(Kn,ba,Sr,Ft,0);continue}if(k.tri(Kn,ba,Sr,xt,$e),Math.hypot(Mr[0]-Sr[0],Mr[2]-Sr[2])>0.05)k.tri(Kn,Sr,Mr,xt,$e)}if(Z<d&&c()<0.7&&ke>4){let Vt=Yt+(c()-0.5)*Ke*0.5*Math.max(Xt,0.4),cn=(c()<0.5?-1:1)*Math.min(ke*0.22,0.6+c()*1.1),Kn=Ut+_*Vt+Y*cn,ba=fn+L*Vt+X*cn,Mr=ee+Nt*(1-(Math.abs(cn)+0.4)/(ke/2))-0.1;Ye(Kn,ba,0.32,0.32,_,L,Mr,ee+Nt+0.5+c()*0.5,c()<0.6?O:Ft,4)}}else if(Dt){let xe=St?c()<0.25:c()<0.6,xt=fe(xe?K(E):K(je),0.1),$e=xe?2:1,Nt=2*_e/Math.max(1,Ve);if(xe&&_e>300&&ee>=9&&Z<1600&&c()<0.5){let _t=Math.min(1.1,Nt*0.2),Yt=fa(se,_t);ue(se,Yt,ee,ee+2.8,xt,$e);let yt=Math.min(Math.max(1.5,Math.sqrt(_e)*0.12),5,Nt*0.4-_t);if(yt>0.6){let Ut=fa(Yt,yt);ue(Yt,Ut,ee+2.8,ee+2.8+yt*0.4,xt,$e),De(Ut,ee+2.8+yt*0.4,xt.map((fn)=>fn*0.94),$e)}else De(Yt,ee+2.8,xt,$e)}else{let _t=Math.min(Math.max(2.2,Math.sqrt(_e)*0.2),7,Nt*0.46),Xt=_t*Math.tan((30+c()*12)*me),Yt=fa(se,_t);ue(se,Yt,ee,ee+Xt,xt,$e),De(Yt,ee+Xt,xt.map((yt)=>yt*0.92),$e)}}else{let xe=fe(K(x),0.1),xt=ee+Kt;if(Kt){let $e=fa(se,0.45),Nt=Ft.map((_t)=>_t*0.85);for(let _t=0;_t<q;_t++){let Xt=(_t+1)%q,Yt=[se[_t*2],xt,-se[_t*2+1]],yt=[se[Xt*2],xt,-se[Xt*2+1]],Ut=[$e[_t*2],xt,-$e[_t*2+1]],fn=[$e[Xt*2],xt,-$e[Xt*2+1]];k.tri(Yt,fn,yt,Nt,4),k.tri(Yt,Ut,fn,Nt,4);let Ot=[$e[_t*2],ee,-$e[_t*2+1]],Vt=[$e[Xt*2],ee,-$e[Xt*2+1]];k.tri(Vt,Ot,Ut,Ft,4),k.tri(Vt,Ut,fn,Ft,4)}De($e,ee,xe,3)}else De(se,ee,xe,3);if(Kt&&_e>700&&c()<0.7){let $e=2+c()*3,Nt=2+c()*3,_t=2.2+c()*1.4,Xt=te+(c()-0.5)*Math.sqrt(_e)*0.25,Yt=ae+(c()-0.5)*Math.sqrt(_e)*0.25;Ye(Xt,Yt,$e,Nt,_,L,ee,ee+_t,x[1].map((yt)=>yt*1.6),4)}}if(Z<p)for(let xe=0;xe<q;xe++){let xt=(xe+1)%q;qe.push(se[xe*2],ee,-se[xe*2+1],se[xt*2],ee,-se[xt*2+1])}}let Ce=-2.4,Se=9,ze=[];for(let de of Ie){let se=Xe.filter((ae)=>wu(ae.r[0],ae.r[1],de.r)).map((ae)=>Ko(ae.r)),q=Ko(de.r),te=q.concat(...se);for(let[ae,Z,ee]of oi.triangulateShape(q,se)){let he=(te[Z].x-te[ae].x)*(te[ee].y-te[ae].y)-(te[ee].x-te[ae].x)*(te[Z].y-te[ae].y)>0,[_e,Ve]=he?[Z,ee]:[ee,Z];ze.push(te[ae].x,Ce,-te[ae].y,te[_e].x,Ce,-te[_e].y,te[Ve].x,Ce,-te[Ve].y)}}let Qe=y(new it().setAttribute("position",new tt(ze,3))),mt=new Pt(Qe,v);mt.renderOrder=0,l.add(mt);let V=[0.075,0.085,0.07],Pe=(de,se)=>Math.abs(de)>3390||Math.abs(se)>2590;for(let de of Ze.water){let se=de.r,q=fa(se,-Se),te=se.length/2;for(let ae=0;ae<te;ae++){let Z=(ae+1)%te;if(Pe(se[ae*2],se[ae*2+1])&&Pe(se[Z*2],se[Z*2+1]))continue;let ee=[se[ae*2],Ce,-se[ae*2+1]],he=[se[Z*2],Ce,-se[Z*2+1]],_e=[q[ae*2],0.15,-q[ae*2+1]],Ve=[q[Z*2],0.15,-q[Z*2+1]],nt=fe(V,0.15);k.triUp(ee,he,Ve,nt,5),k.triUp(ee,Ve,_e,nt,5)}}let ce=[];for(let de of[...Ze.roads].sort((se,q)=>se.h[0]-q.h[0])){let se=de.h[0];if(se>2&&se!==5)continue;let q=de.r,te=0,ae=0;for(let he=0;he<q.length/2-1;he++){let _e=Math.hypot(q[he*2+2]-q[he*2],q[he*2+3]-q[he*2+1]);if(ae+=_e,st((q[he*2]+q[he*2+2])/2,(q[he*2+1]+q[he*2+3])/2))te+=_e}if(te<60)continue;let Z=(q[0]+q[q.length-2])/2,ee=(q[1]+q[q.length-1])/2;if(ce.some((he)=>Math.hypot(he.mx-Z,he.my-ee)<30))continue;ce.push({r:q,c:se,tot:ae,mx:Z,my:ee})}let Re=[0.2,0.2,0.21];for(let de of ce){let se=de.c<=2?8:2.4,q=de.c<=2?2.2:3,ae=de.r,Z=[],ee=0;for(let he=0;he<ae.length/2-1;he++){let _e=ae[he*2],Ve=ae[he*2+1],nt=ae[he*2+2],_=ae[he*2+3],L=Math.hypot(nt-_e,_-Ve),Y=Math.max(1,Math.ceil(L/8));for(let X=0;X<Y;X++){let G=X/Y;Z.push([_e+(nt-_e)*G,Ve+(_-Ve)*G,(ee+L*G)/de.tot])}ee+=L}Z.push([ae[ae.length-2],ae[ae.length-1],1]);for(let he=0;he<Z.length-1;he++){let[_e,Ve,nt]=Z[he],[_,L,Y]=Z[he+1],X=Math.hypot(_-_e,L-Ve)||1,G=-(L-Ve)/X,ye=(_-_e)/X,Te=0.6+q*Math.sin(Math.PI*nt),Me=0.6+q*Math.sin(Math.PI*Y),ke=[_e+G*se,Te,-(Ve+ye*se)],Ke=[_e-G*se,Te,-(Ve-ye*se)],lt=[_+G*se,Me,-(L+ye*se)],ft=[_-G*se,Me,-(L-ye*se)];k.triUp(ke,Ke,ft,Re,6),k.triUp(ke,ft,lt,Re,6);for(let[Fe,St]of[[ke,lt],[ft,Ke]]){let Ft=[Fe[0],Fe[1]-1.6,Fe[2]],bt=[St[0],St[1]-1.6,St[2]];k.tri(Fe,Ft,bt,Re,6),k.tri(Fe,bt,St,Re,6),k.tri(Fe,bt,Ft,Re,6),k.tri(Fe,St,bt,Re,6)}}}M=new Pt(y(k.geometry()),b),l.add(M);let We=y(new it().setAttribute("position",new tt(qe,3)));l.add(new en(We,C));let Ae=1e9;for(let de of Ie)for(let se=0;se<de.r.length;se+=2){let q=Math.hypot(de.r[se]-60,de.r[se+1]-420);if(q<Ae)Ae=q,m.drava.set(de.r[se],4,-de.r[se+1]-40)}let Ne=[],ct=[],Lt={0:[0.085,0.09,0.12],1:[0.03,0.075,0.06],2:[0.035,0.068,0.058],3:[0.13,0.13,0.15]};for(let de of Ze.areas){let[se,q]=Xo(de.r);if(Math.hypot(se,q)>f)continue;let te=Lt[de.h[0]]||Lt[2],ae=de.h[0]===3?0.25:0.12,Z=Ko(de.r);for(let[ee,he,_e]of oi.triangulateShape(Z,[])){let Ve=(Z[he].x-Z[ee].x)*(Z[_e].y-Z[ee].y)-(Z[_e].x-Z[ee].x)*(Z[he].y-Z[ee].y)>0,[nt,_]=Ve?[he,_e]:[_e,he];Ne.push(Z[ee].x,ae,-Z[ee].y,Z[nt].x,ae,-Z[nt].y,Z[_].x,ae,-Z[_].y),ct.push(...te,...te,...te)}if(de.h[0]===3)m.trg.set(se,4,-q)}let gt=y(new it);gt.setAttribute("position",new tt(Ne,3)),gt.setAttribute("aCol",new tt(ct,3)),l.add(new Pt(gt,T));for(let de of Ze.roads){let se=de.r,q=se.length/4|0;de.w=de.h[0]>=2&&Math.hypot(se[q*2],se[q*2+1])<3000&&(rt(se[0],se[1])||rt(se[q*2],se[q*2+1])||rt(se[se.length-2],se[se.length-1]))}let mn=e?[30,34,42,60,26,0]:[20,22,27,40,17,34],_n=[0.9,0.8,0.15,0.1,0.65,0.5],os=[1,0.9,0.7,0.45,0.95,0.4],Fn=[],ii=[],Ui=[],Oi=[];for(let de of Ze.roads){let se=de.h[0],q=mn[se];if(!q)continue;let te=de.r;if(se>=4&&!de.w&&Math.hypot(te[0],te[1])>(e?450:800))continue;if(de.w&&Math.hypot(te[0],te[1])>(e?1400:2600))continue;let ae=c()*q;for(let Z=0;Z<te.length/2-1;Z++){let ee=te[Z*2],he=te[Z*2+1],_e=te[Z*2+2],Ve=te[Z*2+3],nt=Math.hypot(_e-ee,Ve-he);while(ae<nt){let _=ae/nt,L=ee+(_e-ee)*_,Y=he+(Ve-he)*_;Fn.push(L,6,-Y),ii.push(se<=1?1.25:se<=2?0.95:0.75),Ui.push(os[se]*pt(L,Y)*(de.w?2.4:1)),Oi.push(Math.min(1,Math.max(0,_n[se]+(c()-0.5)*0.25))),ae+=q}ae-=nt}}I=tn({count:Fn.length/3,color:"#ff9440",core:"#ffd6a6",size:1.7,tint:{color:"#ffd09a",core:"#fff4e6"}}),I.pos.set(Fn),I.tint.set(Oi);for(let de=0;de<ii.length;de++)I.size[de]=ii[de],I.alpha[de]=(0.5+c()*0.4)*Math.min(1.15,0.55+0.5*Ui[de]),I.wake[de]=0.1+c()*0.6+0.28*Math.min(1,Math.hypot(Fn[de*3],Fn[de*3+2])/2600);I.uniforms.uMin.value=1.3,I.uniforms.uFall.value=0.25,I.uniforms.uMax.value=6,I.points.renderOrder=4,I.material.depthWrite=!1,l.add(I.points),y(I.geometry),y(I.material);let cs=Ze.areas.filter((de)=>de.h[0]===0||de.h[0]===3).map((de)=>de.r),Nn=y($f({roads:Ze.roads.map((de)=>({c:de.h[0],r:de.r,w:de.w})),lamps:Fn,lampK:Ui,squares:cs,shops:be,riverside:ot,zone:pt,lite:e})),Bi=u.uLM.value;u.uLM.value=Nn,Bi.dispose();let ki=Ze.marks.find((de)=>de.h[0]===2);if(ki){let de=ki.r,[se,q]=Xo(de),te=0,ae=0;for(let ee=0;ee<de.length/2;ee++){let he=(ee+1)%(de.length/2),_e=de[he*2]-de[ee*2],Ve=de[he*2+1]-de[ee*2+1],nt=Math.hypot(_e,Ve);if(nt>te)te=nt,ae=Math.atan2(Ve,_e)}ne.position.set(se,0,-q),ne.rotation.y=ae;let Z=(ee,he,_e,Ve,nt)=>{let _=new Pt(y(new Ai(ee,he,_e).translate(Ve,he/2,nt)),ve);return ne.add(_),_};Z(46,7.5,34,0,0),Z(30,62,15,-5,-4),Z(24,56,14,8,8),Z(6,6,6,-10,-4).position.y=62,m.hotel.set(se,70,-q)}A=!0,a?.()}return Je().catch((Q)=>console.warn("[ZAEC] podaci grada nisu učitani",Q)),{group:l,anchors:m,spire:we,flood:dt,floodLocal:Ge,get cathedral(){return W},isLoaded:()=>A,update(Q){let Ze=Q.streets??Q.lamps;if(l.visible=Q.alpha>0.002||Q.lamps>0.002||Ze>0.002,dt.intensity=0,!l.visible)return;if(h.uRise.value=Q.rise,h.uDim.value=Q.dim,u.uTime.value=Q.reduce?0:Q.time,u.uLamp.value=Q.lamps,Q.camera){N.copy(Q.camera.position),l.worldToLocal(N),u.uCamL.value.copy(N),Q.camera.getWorldDirection(F),F.divide(l.scale).normalize();let Ie=F.y<-0.03?N.y/-F.y:Math.abs(N.y)*6+80;u.uFog.value.set(Ie*0.85,1/(Ie*2.6))}let k=Q.alpha;if(b.uniforms.uAlpha.value=k,b.uniforms.uShop.value=Q.shop??1,M)M.visible=k>0.01;R.uLines.value=k*(0.25+0.55*Q.lines)*(1-Q.dim*0.75)*(Q.detail??1),S.uniforms.uOpacity.value=k*(1-Q.dim*0.75),S.uniforms.uGlow.value=Ze*(1-Q.dim*0.75),w.visible=k>0.002||Ze>0.002,v.uniforms.uOpacity.value=Math.max(k,Q.lamps*0.6)*(1-Q.dim*0.6),T.uniforms.uOpacity.value=k*(1-Q.dim*0.6),ne.visible=k>0.01,pe.uAlpha.value=k;let me=Q.scan>0.001?1:0;if(z.uLift.value=Math.max(0.001,Q.cath),z.uGlow.value=0.6+Q.glow,z.uFocus.value=Q.focus,z.uWin.value=0.25+0.75*Q.focus,z.uScanOn.value=me,z.uScan.value=(we.y+2)*(1-Q.scan)-1.5,z.uAlpha.value=k*Q.cathSolid,W)W.visible=Q.cathSolid*k>0.01;if(j.uI.value=k*Q.cathSolid*(0.12+0.88*Q.focus)*0.85,J)J.visible=j.uI.value>0.004;dt.intensity=14*Q.glow*k*Q.cathSolid*(1-0.6*Q.scan)*(0.2+0.8*Q.focus),pe.uAlpha.value=k*(1-0.45*Q.focus),I.uniforms.uPR.value=Q.pr,I.uniforms.uOpacity.value=Q.lamps*(1-Q.dim*0.7),I.uniforms.uWake.value=Q.wake},dispose(){g.forEach((Q)=>Q.dispose?.()),W?.geometry.dispose(),H?.dispose(),U?.dispose()}}}function Eu(){let e=new zt;e.name="snop";let t={uLen:{value:0},uI:{value:0},uCore:{value:0.12},uTime:{value:0},uRep:{value:20},uWarm:{value:new Be("#ffc58a")},uCool:{value:new Be("#9fb9ff")}},i=new Vn(1,1,1,32).translate(0,0.5,0),s=new wt({uniforms:t,transparent:!0,depthWrite:!1,blending:Zt,side:Qt,vertexShader:`
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
        // atmosferski pad svjetline s visinom; mekan početak na samom vrhu tornja. Iznad ~100 m snop se
        // stanji u tihu nit: signal, a ne reflektor koji nadjača toranj
        float fall = smoothstep(0.0, 0.0012, y) * pow(1.0 - y, 2.2) * mix(1.0, 0.42, smoothstep(0.0, 0.12, y));
        // paketi svjetla putuju uvis (podaci), samo u jezgri
        float pk = exp(-pow((fract(y * uRep - uTime * 0.7) - 0.5) * 9.0, 2.0)) * 0.6;
        // toplo svjetlo grada samo u samom izvoru, odmah zatim hladno digitalno; jezgra gotovo bijela
        vec3 col = mix(uWarm, uCool, smoothstep(0.0, 0.006, y));
        col = mix(col, vec3(1.0), core * 0.3);
        float a = (core * (1.0 + pk) * 1.25 + halo) * grow * fall * uI;
        gl_FragColor = vec4(col * a, a);
      }`}),r=new Pt(i,s);r.frustumCulled=!1,r.renderOrder=12,e.add(r);let a=tn({count:2,color:"#ffd0a0",core:"#ffffff",size:1});a.size[0]=1.25,a.size[1]=0.36,a.alpha[0]=0.35,a.alpha[1]=1,a.uniforms.uMin.value=2,a.uniforms.uMax.value=26,a.points.renderOrder=13,e.add(a.points);let o=-1;return{group:e,update(c){let l=c.b*c.alpha;if(e.visible=l>0.002,!e.visible)return;e.position.copy(c.at);let u=c.drop??3;e.position.y-=u*c.unit;let h=c.camera.position.x-c.at.x,f=c.camera.position.z-c.at.z;r.rotation.y=Math.atan2(h,f);let d=900*c.unit,p=8*c.unit*(0.4+0.6*Math.min(1,l*1.4));if(r.scale.set(p,d,1),t.uLen.value=Math.min(1,l*1.6),t.uI.value=Math.min(0.62,l*0.8),t.uCore.value=0.045+0.035*Math.min(1,l*1.4),t.uRep.value=26.470588235294116,t.uTime.value=c.time,c.unit!==o)o=c.unit,a.pos[1]=a.pos[4]=(c.drop??3)*c.unit,a.geometry.attributes.position.needsUpdate=!0;a.uniforms.uPR.value=c.pr,a.uniforms.uOpacity.value=Math.min(0.65,l*2),a.uniforms.uSize.value=10*c.unit},dispose(){i.dispose(),s.dispose(),a.geometry.dispose(),a.material.dispose()}}}var $t={x0:-5.6,y0:0.7,w:12,h:8},pa=(e,t,i=0,s=new P)=>s.set($t.x0+e*$t.w,$t.y0+t*$t.h,i),qt=(e,t,i,s)=>[[e,t,i,t],[i,t,i,s],[i,s,e,s],[e,s,e,t]],Mt=(e,t,i,s)=>[[e,t,i,s]],ni=(e,t,i=0.008,s=8)=>{let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2,c=(a+1)/s*Math.PI*2;r.push([e+Math.cos(o)*i,t+Math.sin(o)*i*1.5,e+Math.cos(c)*i,t+Math.sin(c)*i*1.5])}return r},cp={frame:[...qt(0,0,1,1),...Mt(0,0.925,1,0.925),...ni(0.025,0.962),...ni(0.045,0.962),...ni(0.065,0.962),...qt(0.3,0.945,0.7,0.98)],nav:[...qt(0.04,0.85,0.11,0.895),...Mt(0.5,0.872,0.56,0.872),...Mt(0.59,0.872,0.65,0.872),...Mt(0.68,0.872,0.74,0.872),...qt(0.84,0.85,0.96,0.895)],hero:[...qt(0.05,0.72,0.52,0.785),...qt(0.05,0.645,0.44,0.71),...Mt(0.05,0.6,0.47,0.6),...Mt(0.05,0.575,0.4,0.575),...qt(0.05,0.49,0.19,0.545),...qt(0.21,0.49,0.33,0.545)],visual:[...qt(0.58,0.49,0.95,0.79),...Mt(0.58,0.49,0.95,0.79),...Mt(0.58,0.79,0.95,0.49)],proof:[0,1,2,3,4].flatMap((e)=>qt(0.05+e*0.185,0.4,0.19+e*0.185,0.43)),cards:[0,1,2].flatMap((e)=>{let t=0.05+e*0.31;return[...qt(t,0.14,t+0.28,0.34),...Mt(t+0.02,0.3,t+0.2,0.3),...Mt(t+0.02,0.27,t+0.25,0.27),...Mt(t+0.02,0.245,t+0.22,0.245)]}),cta:[...qt(0.32,0.025,0.68,0.085),...Mt(0.05,0.11,0.95,0.11)]},i4={frame:cp.frame,nav:[...qt(0.4,0.835,0.6,0.9),...[0,1,2,3,4,5,6,7,8].flatMap((e)=>Mt(0.05+e*0.1,0.81,0.12+e*0.1,0.81))],slider:[...qt(0.03,0.44,0.97,0.78),...qt(0.3,0.6,0.7,0.625),...ni(0.07,0.61,0.02),...ni(0.93,0.61,0.02),...[0.44,0.48,0.52,0.56].flatMap((e)=>ni(e,0.47,0.006,6))],wall:[0,1,2,3,4,5,6,7,8].flatMap((e)=>Mt(0.05,0.38-e*0.026,0.95-e%3*0.04,0.38-e*0.026)),icons:[0,1,2,3,4,5].flatMap((e)=>ni(0.12+e*0.152,0.1,0.022)),cta:[...qt(0.86,0.022,0.95,0.042),...Mt(0.05,0.06,0.95,0.06)]},Tu={entry:[0.07,0.9],message:[0.29,0.715],trust:[0.5,0.415],content:[0.5,0.24],cta:[0.5,0.055]},s4=(e)=>Object.values(e).flat();function op(e,t){let i=s4(e).map(([o,c,l,u])=>({a:pa(o,c),b:pa(l,u)})),s=i.reduce((o,c)=>o+c.a.distanceTo(c.b),0),r=[],a=t;i.forEach((o,c)=>{let l=o.a.distanceTo(o.b),u=c===i.length-1?a:Math.max(1,Math.round(l/s*t));u=Math.max(0,Math.min(u,a-(i.length-1-c))),a-=u;for(let h=0;h<u;h++){let f=o.a.clone().lerp(o.b,h/u),d=o.a.clone().lerp(o.b,(h+1)/u);r.push({a:f,b:d,y:(f.y+d.y)/2,x:(f.x+d.x)/2})}});while(r.length<t)r.push(r[r.length-1]);return r.length=t,r.sort((o,c)=>c.y-o.y||o.x-c.x)}function r4(e){let t=1/0,i=-1/0,s=1/0,r=-1/0,a=0;for(let b of e)t=Math.min(t,b.a.x,b.b.x),i=Math.max(i,b.a.x,b.b.x),s=Math.min(s,b.a.y,b.b.y),r=Math.max(r,b.a.y,b.b.y),a+=b.a.z+b.b.z;a/=e.length*2;let o=i-t||1,c=r-s||1,l=128,u=new Float32Array(l),h=new Float32Array(l),f=(b)=>Math.min(l-1,Math.max(0,Math.floor(b*l))),d=[],p=[];e.forEach((b,M)=>{let R=Math.abs(b.b.x-b.a.x),C=Math.abs(b.b.y-b.a.y);if(C>=R)d.push(M),u[f((b.x-t)/o)]+=C;else p.push(M),h[f((b.y-s)/c)]+=R});let g=(b,M,R)=>{let C=[...b.keys()].sort((T,I)=>b[I]-b[T]),v=[0,l-1];for(let T of C){if(v.length>=M+2||b[T]<=0)break;if(v.every((I)=>Math.abs(I-T)>=R))v.push(T)}return v.map((T)=>(T+0.5)/l).sort((T,I)=>T-I)},y=g(u,10,7),A=g(h,8,7),m=Array(e.length),S=(b,M,R,C,v)=>{let T=M.map(()=>[]);for(let I of b){let N=R(e[I]),F=0;for(let z=1;z<M.length;z++)if(Math.abs(M[z]-N)<Math.abs(M[F]-N))F=z;T[F].push(I)}T.forEach((I,N)=>{if(!I.length)return;I.sort((B,j)=>v(e[B])-v(e[j]));let F=1/0,z=-1/0;for(let B of I){let j=w(e[B]);F=Math.min(F,j[0]),z=Math.max(z,j[1])}I.forEach((B,j)=>{m[B]=C(M[N],F+(z-F)*j/I.length,F+(z-F)*(j+1)/I.length)})})},w=(b)=>[Math.min(b.a.y,b.b.y),Math.max(b.a.y,b.b.y)];return S(d,y,(b)=>(b.x-t)/o,(b,M,R)=>({a:new P(t+b*o,M,a),b:new P(t+b*o,R,a)}),(b)=>b.y),w=(b)=>[Math.min(b.a.x,b.b.x),Math.max(b.a.x,b.b.x)],S(p,A,(b)=>(b.y-s)/c,(b,M,R)=>({a:new P(M,s+b*c,a),b:new P(R,s+b*c,a)}),(b)=>b.x),m.lines={xs:y.map((b)=>t+b*o),ys:A.map((b)=>s+b*c),z:a,x0:t,x1:i,y0:s,y1:r},m}function lp(e,{max:t=6000}={}){let i=qn(303),s={uMorph:{value:0},uOpacity:{value:0},uTime:{value:0},uWarm:{value:new Be("#ffc6a0")},uCool:{value:new Be("#b8c8ff")},uGridCol:{value:new Be("#7f9bff")},uBadCol:{value:new Be("#ff7a66")},uBad:{value:0},uScanY:{value:1e4},uScanOn:{value:0}},r=new wt({uniforms:s,transparent:!0,depthWrite:!1,blending:Zt,vertexShader:`
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
      }`}),a=new en(new it,r);a.frustumCulled=!1,a.renderOrder=3;function o(u){let h=u.attributes.position.array,f=[];for(let I=0;I<h.length;I+=6){let N=new P(h[I],h[I+1],h[I+2]),F=new P(h[I+3],h[I+4],h[I+5]),z=N.distanceTo(F);if(z>0.02)f.push({a:N,b:F,L:z})}f.sort((I,N)=>N.L-I.L),f=f.slice(0,t),f.forEach((I)=>{I.y=(I.a.y+I.b.y)/2,I.x=(I.a.x+I.b.x)/2}),f.sort((I,N)=>N.y-I.y||I.x-N.x);let d=f.length,p=r4(f);c=p.lines;let g=f.map((I,N)=>N).sort((I,N)=>{let F=p[I],z=p[N];return z.a.y+z.b.y-(F.a.y+F.b.y)||F.a.x+F.b.x-(z.a.x+z.b.x)}),y=op(cp,d),A=op(i4,d),m=Array(d),S=Array(d);g.forEach((I,N)=>{m[I]=y[N],S[I]=A[N]});let w=new Float32Array(d*6),b=new Float32Array(d*6),M=new Float32Array(d*6),R=new Float32Array(d*6),C=new Float32Array(d*2),v=new Float32Array(d*2);for(let I=0;I<d;I++)w.set([...f[I].a.toArray(),...f[I].b.toArray()],I*6),b.set([...p[I].a.toArray(),...p[I].b.toArray()],I*6),M.set([...m[I].a.toArray(),...m[I].b.toArray()],I*6),R.set([...S[I].a.toArray(),...S[I].b.toArray()],I*6),C[I*2]=C[I*2+1]=I/d*0.5+i()*0.08,v[I*2]=v[I*2+1]=i();let T=new it;return T.setAttribute("position",new ut(w.slice(),3)),T.setAttribute("aFrom",new ut(w,3)),T.setAttribute("aGrid",new ut(b,3)),T.setAttribute("aTo",new ut(M,3)),T.setAttribute("aBad",new ut(R,3)),T.setAttribute("aDelay",new ut(C,1)),T.setAttribute("aSeed",new ut(v,1)),T.boundingSphere=new an(new P(0,5,0),40),a.geometry.dispose(),a.geometry=T,d}let c=null,l=e?o(e):0;return{object:a,get count(){return l},get gridInfo(){return c},setSource(u){l=o(u)},update(u){a.visible=u.opacity>0.002&&l>0,s.uMorph.value=u.morph,s.uOpacity.value=u.opacity,s.uTime.value=u.time,s.uBad.value=u.bad||0,s.uScanY.value=u.scanY??1e4,s.uScanOn.value=u.scanOn||0},dispose(){a.geometry.dispose(),r.dispose()}}}var Ru=[{code:"01",name:"Poruka",color:"#6f8cff"},{code:"02",name:"Struktura",color:"#7d93ff"},{code:"03",name:"UX",color:"#8f9bff"},{code:"04",name:"Tehnologija",color:"#a39cf5"},{code:"05",name:"SEO",color:"#c39bdc"},{code:"06",name:"Mjerenje",color:"#e3a3a0"},{code:"07",name:"Konverzija",color:"#ffb23f"}];function a4(e){switch(e){case 0:return[...qt(0.1,0.62,0.78,0.78),...qt(0.1,0.46,0.6,0.56),...Mt(0.1,0.36,0.66,0.36),...Mt(0.1,0.3,0.52,0.3),...qt(0.1,0.12,0.34,0.22)];case 1:return[...qt(0.42,0.78,0.58,0.9),...Mt(0.5,0.78,0.5,0.68),...Mt(0.18,0.68,0.82,0.68),...[0.18,0.5,0.82].flatMap((t)=>[...Mt(t,0.68,t,0.6),...qt(t-0.09,0.48,t+0.09,0.6),...Mt(t,0.48,t,0.38),...qt(t-0.06,0.26,t+0.06,0.38)])];case 2:return[...Mt(0.1,0.78,0.36,0.78),...Mt(0.36,0.78,0.36,0.5),...Mt(0.36,0.5,0.64,0.5),...Mt(0.64,0.5,0.64,0.22),...Mt(0.64,0.22,0.88,0.22),...Mt(0.83,0.27,0.88,0.22),...Mt(0.83,0.17,0.88,0.22),...ni(0.1,0.78,0.025),...ni(0.36,0.5,0.025),...ni(0.64,0.22,0.025)];case 3:return[...Mt(0.3,0.7,0.16,0.5),...Mt(0.16,0.5,0.3,0.3),...Mt(0.7,0.7,0.84,0.5),...Mt(0.84,0.5,0.7,0.3),...Mt(0.57,0.76,0.43,0.24)];case 4:return[...qt(0.1,0.72,0.9,0.86),...ni(0.84,0.79,0.022),...qt(0.1,0.5,0.9,0.62),...[0,1].flatMap((t)=>[...Mt(0.14,0.42-t*0.16,0.6,0.42-t*0.16),...Mt(0.14,0.37-t*0.16,0.8,0.37-t*0.16)])];case 5:return[...Mt(0.12,0.16,0.88,0.16),...Mt(0.12,0.16,0.12,0.84),...[0.22,0.34,0.3,0.46,0.42,0.6].flatMap((t,i)=>qt(0.18+i*0.115,0.16,0.25+i*0.115,0.16+t))];default:return[...qt(0.28,0.4,0.72,0.6),...Mt(0.42,0.5,0.48,0.44),...Mt(0.48,0.44,0.58,0.56),...Mt(0.18,0.84,0.82,0.84),...Mt(0.18,0.84,0.42,0.62),...Mt(0.82,0.84,0.58,0.62)]}}function up(){let e=new zt;e.name="slojevi",e.position.copy(pa(0.5,0.42));let t=11,i=7,s=(l,u)=>[(l-0.5)*t,0,-(u-0.5)*i],r=(l)=>{let u=[];return l.forEach(([h,f,d,p])=>u.push(...s(h,f),...s(d,p))),new it().setAttribute("position",new tt(u,3))},a=(()=>[[0.035,0,0.965,0],[0.965,0,1,0.035],[1,0.035,1,0.965],[1,0.965,0.965,1],[0.965,1,0.035,1],[0.035,1,0,0.965],[0,0.965,0,0.035],[0,0.035,0.035,0]])(),o=Ru.map((l,u)=>{let h=new zt,f=r(a),d=r(a4(u)),p=new Gn({color:l.color,transparent:!0,opacity:0,depthWrite:!1}),g=new Gn({color:l.color,transparent:!0,opacity:0,depthWrite:!1,blending:Zt}),y=new Vn(t,i).rotateX(-Math.PI/2),A=new Hn({color:l.color,transparent:!0,opacity:0,depthWrite:!1,side:Qt}),m=new Pt(y,A);m.renderOrder=1;let S=new en(f,p),w=new en(d,g);return S.renderOrder=w.renderOrder=2,h.add(m,S,w),e.add(h),{g:h,fm:p,gm:g,pm:A,geos:[f,d,y],e:0,arr:0}}),c=new P;return{group:e,update(l){if(e.visible=l.alpha>0.002,!e.visible)return;let u=l.assemble||0,h=1.55+-1.3900000000000001*u,f=l.p*8,d=1-Math.exp(-(l.dt||0.016)*7);o.forEach((p,g)=>{let y=Math.max(Math.min(1,Math.max(0,f-g)),l.active>=g?1:0);p.arr+=(y-p.arr)*(l.reduce?1:d);let A=1-Math.pow(1-p.arr,3);p.e+=((l.active===g?1:0)-p.e)*(l.reduce?1:d);let m=p.e*(1-u);p.g.position.set(m*1.1,(3-g)*h+(1-A)*-4+m*0.35,m*0.9);let S=l.alpha*A;p.pm.opacity=S*(0.035+0.1*m+0.05*u),p.fm.opacity=S*(0.22+0.78*m+0.5*u),p.gm.opacity=S*(0.05+0.95*m+0.3*u)})},anchor(l,u=c){return u.set(-t/2,0,i*0.2).applyMatrix4(o[l].g.matrixWorld)},emphasis:(l)=>o[l].e,arrival:(l)=>o[l].arr,dispose(){o.forEach((l)=>{l.geos.forEach((u)=>u.dispose()),l.fm.dispose(),l.gm.dispose(),l.pm.dispose()})}}}var o4=`
  attribute float aT; attribute float aD; attribute float aDash; attribute vec3 aTo;
  uniform float uMix;
  varying float vT; varying float vD; varying float vDash;
  void main(){
    vT = aT; vD = aD; vDash = aDash;
    float e = uMix * uMix * (3.0 - 2.0 * uMix);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(mix(position, aTo, e), 1.0);
  }`,c4=`
  uniform vec3 uColor; uniform float uOpacity; uniform float uDraw;
  varying float vT; varying float vD; varying float vDash;
  void main(){
    // crta se otkriva redom (aT), pa se kotna linija "povlači" kao pero
    if (vT > uDraw) discard;
    float a = uOpacity;
    if (vDash > 0.5) {
      // crtkano (2) ili crta-točka (3), duljine u metrima
      float f = fract(vD / (vDash > 2.5 ? 9.0 : 4.0));
      float on = vDash > 2.5 ? step(f, 0.62) + step(0.74, f) * step(f, 0.8) : step(f, 0.55);
      if (on < 0.5) discard;
    }
    // svjež kraj pera je svjetliji
    a *= 1.0 + 1.4 * exp(-pow((uDraw - vT) / 0.04, 2.0)) * step(uDraw, 0.999);
    gl_FragColor = vec4(uColor * a, a);
  }`;function hp(e){let t={uColor:{value:new Be(e)},uOpacity:{value:0},uDraw:{value:0},uMix:{value:0}},i=new wt({uniforms:t,vertexShader:o4,fragmentShader:c4,transparent:!0,depthWrite:!1,depthTest:!1,blending:Xi,blendSrc:hi,blendDst:hi}),s=new en(new it,i);return s.frustumCulled=!1,s.renderOrder=4,s.visible=!1,{obj:s,mat:i,uniforms:t}}function dp(){let e=[],t=[],i=[],s=[],r=[];return{add(a,o,c,l,u=0,h=a,f=o){e.push(...a,...o),t.push(c,l);let d=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]);i.push(0,d),s.push(u,u),r.push(...h,...f)},geometry(){let a=new it;return a.setAttribute("position",new tt(e,3)),a.setAttribute("aT",new tt(t,1)),a.setAttribute("aD",new tt(i,1)),a.setAttribute("aDash",new tt(s,1)),a.setAttribute("aTo",new tt(r,3)),a}}}function fp({height:e=90}={}){let t=new zt;t.name="nacrt";let i=hp("#b4c4ff"),s=hp("#7f9bff");t.add(i.obj,s.obj);let r={dim:new P,lvl:new P},a=null;function o(l){let u=l.attributes.position,h=new Sn,f=new P,d=new P(0,-1e9,0);for(let w=0;w<u.count;w++)if(f.set(u.getX(w),u.getY(w),u.getZ(w)),h.expandByPoint(f),f.y>d.y)d.copy(f);a=h;let p=d.z,g=h.min.x-10,y=Math.min(e,h.max.y),A=dp(),m=(h.min.x+h.max.x)/2;A.add([m,0,p],[h.min.x-30,0,p],0,0.22),A.add([m,0,p],[h.max.x+24,0,p],0,0.22),A.add([d.x,-6,p],[d.x,h.max.y+10,p],0.12,0.5,3),A.add([d.x-2,y,p],[g-4,y,p],0.45,0.68,2),A.add([g,0,p],[g,y,p],0.5,0.92);let S=2.2;A.add([g-S,-S,p],[g+S,S,p],0.5,0.56),A.add([g-S,y-S,p],[g+S,y+S,p],0.88,0.94),A.add([g-4,0,p],[h.min.x-30,0,p],0.4,0.5),i.obj.geometry.dispose(),i.obj.geometry=A.geometry(),r.dim.set(g+2.5,y*0.5,p),r.lvl.set(g-3,y,p)}function c(l,u){if(!l)return;let h=1/u.x,f=1/u.y,d=1/u.z,p=[...l.xs].sort((I,N)=>I-N),g=[...l.ys].sort((I,N)=>I-N),y=l.x1-l.x0,A=l.y1-l.y0,m=l.x0-y*0.06,S=l.x1+y*0.22,w=l.y0-A*0.04,b=l.y1+A*0.12,M=l.z,R=0.02,C=dp(),v=(I,N,F)=>[I*h,N*f,F*d];p.forEach((I,N)=>{let z=0.05+0.9*(p.length>1?N/(p.length-1):0.5),B=$t.x0+z*$t.w,j=(w+b)/2,ie=0.08*(N%3);C.add(v(I,j,M),v(I,b,M),ie,0.6+ie,2,v(B,$t.y0+$t.h*0.5,R),v(B,$t.y0+$t.h*0.92,R)),C.add(v(I,j,M),v(I,w,M),ie,0.6+ie,2,v(B,$t.y0+$t.h*0.5,R),v(B,$t.y0,R))});let T=[0.11,0.34,0.43,0.49,0.6,0.79,0.85,0.925];g.forEach((I,N)=>{let F=T[Math.round(N/Math.max(1,g.length-1)*(T.length-1))],z=$t.y0+F*$t.h,B=(m+S)/2,j=0.15+0.06*(N%2);C.add(v(B,I,M),v(S,I,M),j,0.75+j*0.3,2,v($t.x0+$t.w*0.5,z,R),v($t.x0+$t.w,z,R)),C.add(v(B,I,M),v(m,I,M),j,0.75+j*0.3,2,v($t.x0+$t.w*0.5,z,R),v($t.x0,z,R))}),s.obj.geometry.dispose(),s.obj.geometry=C.geometry()}return{group:t,setCathedral:o,setGrid:c,anchor(l,u){return u.copy(r[l]).applyMatrix4(t.matrixWorld)},update(l){let u=!!a;i.obj.visible=u&&l.notesA>0.002&&l.notes>0.001,i.uniforms.uDraw.value=l.notes,i.uniforms.uOpacity.value=0.55*l.notesA,s.obj.visible=l.rulesA>0.002&&l.rules>0.001&&s.obj.geometry.attributes.position?.count>0,s.uniforms.uDraw.value=l.rules,s.uniforms.uMix.value=l.toSite,s.uniforms.uOpacity.value=l.rulesA*(0.3-0.14*l.toSite)},dispose(){i.obj.geometry.dispose(),s.obj.geometry.dispose(),i.mat.dispose(),s.mat.dispose()}}}var l4=["Google pretraga","Preporuka","Društvene mreže","Oglasi","AI pretraga"],u4=["Poziv","Upit","Rezervacija","Kupnja"];var pp=-13.2,mp=13.8,Ap=(e)=>8.3-e*1.65,gp=(e)=>7.1-e*1.65;function bp(e,t,i,s,r,a){let o=r*r,c=o*r;return a.x=0.5*(2*t.x+(-e.x+i.x)*r+(2*e.x-5*t.x+4*i.x-s.x)*o+(-e.x+3*t.x-3*i.x+s.x)*c),a.y=0.5*(2*t.y+(-e.y+i.y)*r+(2*e.y-5*t.y+4*i.y-s.y)*o+(-e.y+3*t.y-3*i.y+s.y)*c),a.z=0.5*(2*t.z+(-e.z+i.z)*r+(2*e.z-5*t.z+4*i.z-s.z)*o+(-e.z+3*t.z-3*i.z+s.z)*c),a}function vp({lite:e}){let t=qn(2024),i=new zt;i.name="tok";let s=e?90:170,r=3,a=l4.map((W,H)=>new P(pp,Ap(H),0)),o=u4.map((W,H)=>new P(mp,gp(H),0)),c=(W)=>pa(Tu[W][0],Tu[W][1],0.15),l=n.map((W)=>c(W.zone)),u=new P(8.2,2.2,0.15),h=new P,f=jo("#3d5ccc",0.25,!0),d=new en(new it,f);i.add(d);let p=!1;function g(){let W=[],H=(we,Le,dt,Ge,ne=24)=>{let pe=Le.clone();for(let ve=1;ve<=ne;ve++)bp(we,Le,dt,Ge,ve/ne,h),W.push(pe.x,pe.y,pe.z,h.x,h.y,h.z),pe=h.clone()},U=p?new P(0,3,0):new P(-3,0,0),oe=p?new P(0,-3,0):new P(3,0,0);a.forEach((we)=>H(we.clone().add(U),we,l[0],l[1])),o.forEach((we)=>H(l[4],u,we,we.clone().add(oe))),d.geometry.dispose(),d.geometry=new it().setAttribute("position",new tt(W,3))}let y=new it,A=[];for(let W=0;W<40;W++){let H=W/40*Math.PI*2,U=(W+1)/40*Math.PI*2;A.push(Math.cos(H),Math.sin(H),0,Math.cos(U),Math.sin(U),0)}y.setAttribute("position",new tt(A,3));let m=l.map((W)=>{let H=new Gn({color:"#7f9fff",transparent:!0,opacity:0,depthWrite:!1,blending:Zt}),U=new en(y,H);return U.position.copy(W),U.scale.setScalar(0.42),i.add(U),{r:U,m:H,hit:0}}),S=new Be("#7f9fff"),w=new Be("#ff6f5e"),b=tn({count:a.length+o.length,color:"#4f7bff",core:"#ffffff",size:1.5});[...a,...o].forEach((W,H)=>{W.toArray(b.pos,H*3),b.size[H]=H<a.length?1:1.2}),i.add(b.points);let M=new Float32Array(o.length);function R(W){if(p=W,a.forEach((H,U)=>W?H.set(-4.6+U*2.5,11.4,0):H.set(pp,Ap(U),0)),o.forEach((H,U)=>W?H.set(-3.5+U*2.6,-1.3,0):H.set(mp,gp(U),0)),W)u.set(0.4,-0.4,0.15);else u.set(8.2,2.2,0.15);[...a,...o].forEach((H,U)=>H.toArray(b.pos,U*3)),b.geometry.attributes.position.needsUpdate=!0,g()}R(!1);let C=tn({count:s*r,color:"#8fb0ff",core:"#ffffff",size:0.85}),v=tn({count:s*r,color:"#ff6a55",core:"#ffd2c8",size:0.75}),T=tn({count:s,color:"#ffb23f",core:"#fff3d6",size:1.6});i.add(C.points,v.points,T.points);let I=[];for(let W=0;W<s;W++){let H=Array.from({length:8},()=>new P);I.push({wp:H,s:0,speed:1,state:0,wait:t()*7,vel:new P,pos:new P,hist:[new P,new P,new P],life:0,out:0})}function N(W){let H=t()*a.length|0;W.out=t()*o.length|0,W.wp[0].copy(a[H]),n.forEach((U,oe)=>{W.wp[oe+1].copy(l[oe]).add(h.set((t()-0.5)*2*U.jx,(t()-0.5)*2*U.jy,(t()-0.5)*0.4))}),W.wp[6].copy(u).add(h.set(0,(t()-0.5)*1.4,0)),W.wp[7].copy(o[W.out]),W.s=0,W.speed=0.75+t()*0.5,W.state=1,W.pos.copy(W.wp[0]),W.hist.forEach((U)=>U.copy(W.pos))}let F=(W,H,U)=>{let oe=Math.min(6,Math.floor(H)),we=H-oe,Le=W.wp;return bp(Le[Math.max(0,oe-1)],Le[oe],Le[oe+1],Le[Math.min(7,oe+2)],we,U)},z=[!1,!1,!1,!1,!1],B=0,j=0;function ie(W){for(let H=0;H<s;H++){let U=I[H];if(U.state===0){if(U.wait-=W,U.wait<=0)N(U),B++}else if(U.state===1){let oe=Math.floor(U.s);U.s+=W*U.speed*(U.s<1?0.7:1);let we=Math.floor(U.s);if(we!==oe&&we>=1&&we<=5){let Le=we-1,dt=z[Le]?n[Le].good:n[Le].bad;if(t()>dt)U.state=2,U.life=0,F(U,U.s,U.pos),U.vel.set((t()-0.5)*2.4+(U.pos.x>0.4?1.2:-1.2),0.6+t()*0.8,1+t()*2.5),m[Le].hit=1}if(U.state===1)if(U.s>=7)U.state=3,U.life=0,U.pos.copy(U.wp[7]),M[U.out]=1,j++;else F(U,U.s,U.pos)}else if(U.state===2){if(U.life+=W,U.vel.y-=W*3.2,U.pos.addScaledVector(U.vel,W),U.life>1.5)U.state=0,U.wait=0.2+t()*1.5}else if(U.state===3){if(U.life+=W,U.life>0.6)U.state=0,U.wait=0.2+t()*1.2}if(W>0)U.hist[2].copy(U.hist[1]),U.hist[1].copy(U.hist[0]),U.hist[0].copy(U.pos);for(let oe=0;oe<r;oe++){let we=H*r+oe,Le=U.hist[oe],dt=1-oe*0.32,Ge=U.state===1,ne=U.state===2;(Ge?C:v).pos.set([Le.x,Le.y,Le.z],we*3),C.alpha[we]=Ge?dt*Math.min(1,U.s*3):0,v.alpha[we]=ne?dt*Math.max(0,1-U.life/1.5)*0.85:0,C.size[we]=v.size[we]=1-oe*0.25}if(T.alpha[H]=U.state===3?Math.max(0,1-U.life/0.6):0,T.size[H]=U.state===3?1+U.life*3:1,U.state===3)U.pos.toArray(T.pos,H*3)}[C,v,T].forEach((H)=>{H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.aAlpha.needsUpdate=!0,H.geometry.attributes.aSize.needsUpdate=!0})}let J=!1;return{group:i,channelWorld:(W)=>a[W],outcomeWorld:(W)=>o[W],gateWorld:(W)=>l[W],setStates(W){z=W.slice()},setLayout(W){if(W!==p)R(W)},stats:()=>({emitted:B,converted:j}),update(W){if(i.visible=W.alpha>0.002,!i.visible)return;let H=W.reduce?0:Math.min(W.dt,0.05);if(!J){J=!0;for(let U=0;U<180;U++)ie(0.03333333333333333);B=j=0}f.opacity=0.22*W.alpha,[b,C,v,T].forEach((U)=>{U.uniforms.uPR.value=W.pr,U.uniforms.uOpacity.value=W.alpha}),ie(H),m.forEach((U,oe)=>{U.hit=Math.max(0,U.hit-H*2.5),U.m.color.copy(z[oe]?S:w);let we=W.focusGate===oe?1:0;U.m.opacity=W.alpha*(0.35+U.hit*0.6+we*0.5),U.r.scale.setScalar(0.42+U.hit*0.25+we*0.18+Math.sin(W.time*2+oe)*0.02)});for(let U=0;U<o.length;U++)M[U]=Math.max(0,M[U]-H*2),b.size[a.length+U]=1.2+M[U]*1.4;for(let U=0;U<a.length;U++)b.size[U]=0.9+Math.sin(W.time*1.7+U*1.3)*0.15;b.geometry.attributes.aSize.needsUpdate=!0},dispose(){i.traverse((W)=>{W.geometry?.dispose(),(Array.isArray(W.material)?W.material:W.material?[W.material]:[]).forEach((H)=>H.dispose())})}}}var xp={Z:0,tx:0,ty:0,tz:0,az:0,el:20,dist:30,fov:34,roll:0,sx:0,sy:0,fit:0,idle:0,net:0,conv:0,finale:0,trace:0,hl:0,dusk:0,focus:0,beam:0,scan:0,rise:0,cath:0,glow:0,dim:0,lines:0.4,cathSolid:1,morph:0,wire:0,flow:0,layers:0,layersA:0,assemble:0,labOsijek:0,labCities:0,labTowns:0,labCity:0,labFlow:0,labLayers:0,labFinale:0,stars:1},_p=Object.keys(xp),h4=gr,Aa={Z:h4,rise:1,cath:1,stars:0.35,trace:1,dusk:1},ma={...Aa,dim:0.95,lines:0,cathSolid:0,wire:1,morph:2,glow:0,scan:1},Yo={hero:{Z:0,tx:0,ty:0,tz:-2,az:4,el:9,dist:8.2,fov:44,roll:-21,sx:0.24,sy:-0.03,idle:1,net:0.85,m:{dist:11,fov:52,roll:-12,el:14,sx:0,sy:0.26}},world:{Z:0.12,tx:0,ty:-1.4,tz:-1.5,az:8,el:30,dist:21,fov:38,roll:-6,sx:-0.2,net:1,conv:0.18,labOsijek:1,fit:20,m:{dist:30,sx:0,sy:0.2,roll:0}},europe:{Z:0.94,tx:-6.5,ty:0,tz:-1,az:0,el:62,dist:50,sx:0.17,net:0.7,conv:0.4,trace:0.035,hl:0.35,dusk:0.1,fit:36,m:{dist:76,sx:0,sy:0.18}},croatia:{Z:1,tx:-6,ty:0.5,tz:4.2,az:-10,el:52,dist:31,sx:0.16,net:0.5,conv:0.6,trace:1,hl:1,dusk:0.6,labCities:1,fit:19,m:{dist:44,sx:0,sy:0.16}},slavonia:{Z:1.55,tx:4.2,ty:0,tz:9.5,az:10,el:56,dist:92,sx:-0.16,trace:1,hl:0.22,dusk:1,labTowns:1,stars:0.6,fit:100,m:{sx:0,sy:0.16}},osijek:{...Aa,tx:21,ty:1,tz:-13,az:30,el:36,dist:100,sx:0.06,glow:0.3,focus:0.12,labCity:1,fit:62,m:{sx:0,sy:0.16}},cathedral:{...Aa,tx:0.6,ty:7.4,tz:0.6,az:52,el:8,dist:32,sx:-0.18,glow:1,dim:0.35,lines:0.2,focus:1,beam:1,fit:13,m:{dist:36,sx:0,sy:0.14}},arch:{...Aa,tx:0,ty:6.4,tz:0,az:0,el:4,dist:31,sx:0.17,hold:{sx:0.42},glow:0.4,dim:0.8,lines:0,focus:0.5,beam:0.3,scan:1,wire:1,fit:14,m:{dist:44,sx:0,sy:0.16}},grid:{...Aa,tx:0.2,ty:6.2,az:0,el:2,dist:30,sx:0.17,dim:0.92,lines:0,cathSolid:0,scan:1,wire:1,morph:1,glow:0,fit:14,m:{dist:44,sx:0,sy:0.16}},web:{...ma,tx:0.4,ty:4.7,az:0,el:0,dist:23,sx:0.15,fit:13.5,m:{dist:34,sx:0,sy:0.18}},flow:{...ma,fit:31,tx:0.3,ty:4.7,az:0,el:0,dist:42.5,sx:0,sy:0.085,flow:1,labFlow:1,m:{dist:57,fit:15,tx:0.4,ty:5,sy:0.235},t:{dist:43,sy:0.12}},"layers-a":{...ma,wire:0,tx:0.6,ty:4.2,az:-26,el:32,dist:35,sx:0.17,layers:0.14,layersA:1,labLayers:1,fit:15,m:{dist:54,sx:0,sy:0.17}},"layers-b":{...ma,wire:0,tx:0.6,ty:4.2,az:-22,el:30,dist:35,sx:0.17,layers:1,layersA:1,labLayers:1,fit:15,m:{dist:52,sx:0,sy:0.17}},"layers-c":{...ma,wire:0,tx:0.4,ty:4.2,az:-14,el:22,dist:33,sx:0.25,layers:1,layersA:1,assemble:1,labLayers:0,fit:14,m:{dist:46,sx:0,sy:0.17}},final:{Z:0,tx:0.2,ty:-0.4,tz:-2.2,az:28,el:16,dist:13.5,fov:40,roll:-10,sx:0.2,sy:-0.12,finale:1,net:1,conv:1,labFinale:1,m:{dist:15.5,fov:48,roll:-4,sx:0,sy:-0.03}}};function Cu(e,t,i=!1){let s=Yo[e];if(!s)return null;let r={...xp,...s,...t&&s.m?s.m:{},...t&&i&&s.t?s.t:{}};return delete r.m,delete r.t,delete r.hold,r}var Jo=[..._p.filter((e)=>!["dist","tx","ty","tz","fit"].includes(e)),"LA","mx","my","mz"],d4=0.9;function f4(e){let t=e.length,i=new Float64Array(t);for(let s=1;s<t-1;s++){let r=e[s]-e[s-1],a=e[s+1]-e[s];i[s]=r*a>0?d4*2*r*a/(r+a):0}return i}var ga=(e,t,i,s,r)=>{let a=r*r,o=a*r;return(2*o-3*a+1)*e+(o-2*a+r)*t+(-2*o+3*a)*i+(o-a)*s};function pb({canvas:e,labelsRoot:t,assets:i={},onReady:s,onChapter:r,onFrame:a}){let o=document.documentElement,c=matchMedia("(prefers-reduced-motion: reduce)"),l=matchMedia("(hover: hover) and (pointer: fine)").matches,u=!l||innerWidth<760||(navigator.hardwareConcurrency||8)<=4,h=new pu({canvas:e,antialias:!u,alpha:!1,powerPreference:"high-performance",stencil:!1});h.setClearColor("#03050b",1),h.outputColorSpace=pi;let f=u?1.35:1.75,d=Math.min(window.devicePixelRatio||1,f),p=new go,g=new ln(34,1,0.1,6000),y=h.extensions.has("KHR_parallel_shader_compile"),A=(q,te)=>y?h.compileAsync(q,g,te):Promise.resolve(h.compile(q,g,te));p.add(new Io("#8ea3ff","#0a0e1a",0.6));let m=new Es("#dde5ff",1.45);m.position.set(-40,60,34),p.add(m);let S=new Es("#ff9d66",0.55);S.position.set(50,18,-40),p.add(S);let w=ff({geo:ca,lite:u,landUrl:i.land,lightsUrl:i.lights}),b=mf({geo:ca,lite:u});w.spin.add(b.group);let M=Af({geo:ca,lite:u,landTex:w.land,fieldTex:w.field,lightsTex:w.lights,landEuUrl:i.landEu}),R=lp(null,{max:u?3200:6500}),C=ha(gr),v=(q)=>{let te=q.clone();return te.scale(C*Wo,C*Fi,C*Fi),te},T=!1,I=fp(),N=new P(C*Wo,C*Fi,C*Fi),F=ap({lite:u,dataUrl:i.city,modelUrl:i.model,onLines:(q)=>{let te=v(q);R.setSource(te),te.dispose(),I.setCathedral(q),I.setGrid(R.gridInfo,N)},prepare:(q)=>A(q,p).catch(()=>{}),onLoaded:()=>{T=!0}});p.add(F.flood),F.group.add(I.group);let z=Eu(),B=Eu(),j=up(),ie=vp({lite:u});p.add(w.group,M.group,F.group,R.object,j.group,ie.group,z.group,B.group);let J=qn(99),W=tn({count:u?260:480,color:"#8d9fd6",core:"#e6ebff",size:1.2,depthTest:!1});for(let q=0;q<W.alpha.length;q++){let te=J()*2-1,ae=J()*Math.PI*2,Z=700+J()*300,ee=Math.sqrt(1-te*te);W.pos.set([Math.cos(ae)*ee*Z,te*Z,Math.sin(ae)*ee*Z],q*3),W.alpha[q]=0.08+J()*J()*0.6,W.size[q]=0.45+J()*J()*1.8}W.uniforms.uMin.value=1,W.points.renderOrder=-10,p.add(W.points);let H=tn({count:2,color:"#9fc0ff",core:"#ffffff",size:1,depthTest:!0,additive:!0});H.size[0]=260,H.size[1]=40,H.alpha[0]=0.32,H.alpha[1]=0.9,H.uniforms.uMax.value=520,H.points.renderOrder=-5,p.add(H.points);let U=w.sun.clone(),oe=new P(U.x,0,U.z).normalize(),we=Math.asin(U.y),Le={night:0};function dt(q){let te=we-q*34*wn;br.value.copy(oe).multiplyScalar(Math.cos(te)),br.value.y=Math.sin(te);let ae=vt(0,0.3,q);Cs.value.set(la(-0.12,-0.07,ae),la(0.38,0.13,ae)),Le.night=1-vt(Cs.value.x,Cs.value.y,Math.sin(te))}let Ge=[],ne=[],pe=[],ve=[],qe=!1,Je=0,Q=0,Ze=null,k={...Cu("hero",!1)},me={target:0,smooth:0},Ie="";function Xe(){let q=ne.length,te=Je/Math.max(1,Q),ae={},Z={};for(let he of Jo)ae[he]=new Float64Array(q);ne.forEach((he,_e)=>{let Ve=ha(he.Z),nt=he.fit>0?he.fit/(2*Math.tan(he.fov*wn/2)*te*0.92):0;for(let _ of Jo)if(_==="LA")ae.LA[_e]=Math.log(Math.max(he.dist,nt)/Ve);else if(_==="mx")ae.mx[_e]=he.tx/Ve;else if(_==="my")ae.my[_e]=he.ty/Ve;else if(_==="mz")ae.mz[_e]=he.tz/Ve;else ae[_][_e]=he[_]});for(let he of Jo)Z[he]=f4(ae[he]);let ee=Ge.map((he)=>Yo[he.id]?.hold||null);Ze={v:ae,m:Z,n:q,hold:ee}}function st(){let q=window.scrollY;if(O.forEach((Z)=>{Z.w=0}),qe=innerWidth<760||innerWidth/innerHeight<0.82,Ge=[...document.querySelectorAll("[data-cam]")].map((Z)=>{let ee=Z.getBoundingClientRect(),he=ee.top+q,_e=Z.dataset.camAt||"center",Ve=_e==="top"?he:_e==="bottom"?he+ee.height-innerHeight:he+ee.height/2-innerHeight/2;return{id:Z.dataset.cam,y:Math.max(0,Ve)}}).filter((Z)=>Yo[Z.id]).sort((Z,ee)=>Z.y-ee.y),!Ge.length)Ge=[{id:"hero",y:0}];let te=qe&&innerWidth>=600;ne=Ge.map((Z)=>Cu(Z.id,qe,te)),Xe(),ie.setLayout(qe),t?.classList.toggle("is-portrait",qe),pe=[...document.querySelectorAll("[data-cover]")].map((Z)=>{let ee=Z.getBoundingClientRect();return[ee.top+q,ee.bottom+q]}),ve=qe?[...document.querySelectorAll("[data-lens] .cine-copy")].map((Z)=>{let ee=Z.children;return[ee[0].getBoundingClientRect().top+q,ee[ee.length-1].getBoundingClientRect().bottom+q]}):[],pe.sort((Z,ee)=>Z[0]-ee[0]);let ae=[];pe.forEach((Z)=>{let ee=ae[ae.length-1];if(ee&&Z[0]<=ee[1]+2)ee[1]=Math.max(ee[1],Z[1]);else ae.push([Z[0],Z[1]])}),pe=ae}function rt(q){if(Ge.length<2||q<=Ge[0].y)return 0;for(let te=0;te<Ge.length-1;te++){let ae=Ge[te].y,Z=Ge[te+1].y;if(q<Z)return te+(Z>ae?(q-ae)/(Z-ae):1)}return Ge.length-1}function ot(q,te){let{v:ae,m:Z,n:ee}=Ze,he=Math.min(ee-2,Math.max(0,Math.floor(q))),_e=ee<2?0:ss(q-he);if(c.matches)_e=_e<0.5?0:1;let Ve=ee<2?0:he+1;for(let G of Jo)te[G]=ga(ae[G][he],Z[G][he],ae[G][Ve],Z[G][Ve],_e);let nt=Ze.hold[Ve];if(nt&&_e>0&&_e<1)for(let G in nt)te[G]=ga(ae[G][he],Z[G][he],ae[G][Ve],Z[G][Ve],ss((_e-nt[G])/(1-nt[G])));let _=ae.LA[he],L=ae.LA[Ve],Y=Math.abs(L-_);if(Y>0.05&&_e>0&&_e<1){let G=Math.exp(_),ye=Math.exp(L),Te=la(_e,ss((Math.exp(te.LA)-G)/(ye-G)),ss(Y/1.5));te.mx=ga(ae.mx[he],Z.mx[he],ae.mx[Ve],Z.mx[Ve],Te),te.my=ga(ae.my[he],Z.my[he],ae.my[Ve],Z.my[Ve],Te),te.mz=ga(ae.mz[he],Z.mz[he],ae.mz[Ve],Z.mz[Ve],Te)}let X=ha(te.Z);return te.dist=Math.exp(te.LA)*X,te.tx=te.mx*X,te.ty=te.my*X,te.tz=te.mz*X,te.chapter=_e<0.5?Ge[he].id:Ge[Ve].id,te}function pt(q){for(let[te,ae]of pe)if(q>=te-1&&q+Q<=ae+1)return!0;return!1}function le(q=!1){let te=e.clientWidth||innerWidth,ae=e.clientHeight||innerHeight;if(!q&&te===Je&&Math.abs(ae-Q)<120)return;Je=te,Q=ae,h.setPixelRatio(d),h.setSize(te,ae,!1),g.aspect=te/ae,g.updateProjectionMatrix(),st()}let D={x:0,y:0,sx:0,sy:0},Ue=(q)=>{if(q.pointerType!=="mouse")return;D.x=q.clientX/innerWidth*2-1,D.y=q.clientY/innerHeight*2-1};if(l)window.addEventListener("pointermove",Ue,{passive:!0});let Ee=n.map(()=>!1),je=1,E=-1,x=-1;ie.setStates(Ee);let O=t?[...t.querySelectorAll("[data-l]")].map((q)=>({el:q,key:q.dataset.l,o:-1,x:-1e4,y:-1e4,hide:0,w:0,h:0})):[],K=(q)=>q.el.classList.contains("sl--home")?0:q.key.startsWith("city-")?1:q.key.startsWith("town-")?2+ +q.key.slice(5)*0.01:-1;O.forEach((q)=>{q.p=K(q)});let fe=O.filter((q)=>q.p>=0).sort((q,te)=>q.p-te.p),ge=[],be=new P,re=new P,ue=new P,De=(q)=>ca.cities.findIndex((te)=>te[0]===q);function Ye(q,te){let[ae,Z]=q.split("-"),ee=+Z;switch(ae){case"osijek":case"you":return w.osijekWorld(be),re.copy(be).sub(te.globeCenter).normalize(),re.dot(ue.copy(te.camPos).sub(be))>0?(ae==="you"?k.labFinale:k.labOsijek)*te.globeA:0;case"city":return M.cityWorld(De(Z),be),(Z==="Osijek"?Math.max(k.labCities,k.labTowns)*(1-vt(1.62,1.8,k.Z)):k.labCities)*te.europeA;case"town":return M.townWorld(ee,be),k.labTowns*te.europeA;case"cath":case"drava":case"hotel":case"trg":return be.copy(F.anchors[ae]).applyMatrix4(F.group.matrixWorld),k.labCity*te.cityA*vt(gr-0.12,gr-0.01,k.Z);case"dim":return I.anchor("dim",be),Fn;case"ch":return be.copy(ie.channelWorld(ee)),k.labFlow;case"out":return be.copy(ie.outcomeWorld(ee)),k.labFlow;case"gate":return be.copy(ie.gateWorld(ee)),k.labFlow;case"layer":return j.anchor(ee,be),k.labLayers*k.layersA*j.arrival(ee)*(0.38+0.62*j.emphasis(ee));default:return 0}}function Ce(q,te,ae=0.016){for(let Z of O){let ee=te?Ye(Z.key,q):0;if(ee>0.01)if(be.project(g),be.z>1||Math.abs(be.x)>1.15||Math.abs(be.y)>1.15)ee=0;else{ee*=1-vt(0.8,0.95,Math.abs(be.x));let he=Math.round((be.x*0.5+0.5)*Je),_e=Math.round((-be.y*0.5+0.5)*Q);if(he!==Z.x||_e!==Z.y)Z.el.style.transform=`translate3d(${he}px, ${_e}px, 0)`,Z.x=he,Z.y=_e}Z.want=ee}ge.length=0;for(let Z of fe){let ee=!1;if(Z.want>0.05){if(!Z.w)Z.w=Z.el.offsetWidth,Z.h=Z.el.offsetHeight;let he=Z.x-Z.w/2-3,_e=Z.x+Z.w/2+3,Ve=Z.y-Z.h-9,nt=Z.y+2;for(let _ of ge)if(he<_[2]&&_e>_[0]&&Ve<_[3]&&nt>_[1]){ee=!0;break}if(!ee)ge.push([he,Ve,_e,nt])}Z.hide=c.matches?+ee:ua(Z.hide,ee?1:0,10,ae)}for(let Z of O){let ee=Z.want*(1-Z.hide);if(ee=Math.round(ss(ee)*100)/100,ee!==Z.o){if(Z.el.style.opacity=String(ee),ee>0.5!==Z.o>0.5)Z.el.classList.toggle("is-on",ee>0.5);Z.o=ee}}}async function Se(){let q=[];p.traverse((te)=>{q.push([te,te.visible,te.frustumCulled]),te.visible=!0,te.frustumCulled=!1});try{await A(p)}catch(te){}h.setScissorTest(!0),h.setScissor(0,0,1,1),h.render(p,g),h.setScissorTest(!1);for(let[te,ae,Z]of q)te.visible=ae,te.frustumCulled=Z}let ze=0,Qe=performance.now(),mt=0,V=0,Pe=!1,ce=!1,Re=0,We=16,Ae=!1,Ne=null,ct=!1,Lt=!1,gt={globeCenter:new P,camPos:new P,globeA:0,europeA:0,cityA:0},mn={},_n=new P,os=0,Fn=0,ii=new P;function Ui(q,te){let ae=te??Math.min(0.05,Math.max(0.001,(q-Qe)/1000));Qe=q;let Z=c.matches;if(!Z)mt+=ae;let ee=window.scrollY;if(me.target=rt(ee),Math.abs(me.target-me.smooth)>1.1)me.smooth=me.target-Math.sign(me.target-me.smooth)*1.1;if(me.smooth=Z?me.target:ua(me.smooth,me.target,4.6,ae),Math.abs(me.smooth-me.target)<0.0001)me.smooth=me.target;if(ot(me.smooth,k),Ne)Object.assign(k,Ne);if(ot(me.target,mn),mn.chapter!==Ie)Ie=mn.chapter,r?.(Ie);let he=pt(ee);if(a?.({progress:me.smooth,covered:he}),he&&Pe){if(!Ae)Ce(gt,!1),Ae=!0;return}if(Ae=!1,l&&!Z)D.sx=ua(D.sx,D.x,2.5,ae),D.sy=ua(D.sy,D.y,2.5,ae);let _e=(k.az+D.sx*2.6)*wn,Ve=(k.el-D.sy*1.5)*wn;if(g.position.set(k.tx+k.dist*Math.cos(Ve)*Math.sin(_e),k.ty+k.dist*Math.sin(Ve),k.tz+k.dist*Math.cos(Ve)*Math.cos(_e)),g.up.set(0,1,0),g.lookAt(k.tx,k.ty,k.tz),k.roll)g.rotateZ(k.roll*wn);if(Math.abs(g.fov-k.fov)>0.01)g.fov=k.fov;g.near=k.Z>1.5?0.5:0.05,g.far=k.Z>1.5?2400:6000;let nt=k.sy;for(let[bt,Dt]of ve){let Kt=(bt-ee)/Q,xe=(Dt-ee)/Q;if(xe<-0.05||Kt>1)continue;let xt=vt(0.5,0.3,(Kt+xe)/2)*vt(-0.05,0.2,xe);if(xt>0)nt=la(nt,ss(0.5-(Math.max(xe,0)+0.9)/2,-0.3,0.3),xt)}g.setViewOffset(Je,Q,-k.sx*Je,nt*Q,Je,Q),g.updateProjectionMatrix(),g.updateMatrixWorld();let _=k.Z,L=ha(_),Y=Ho*L;if(w.group.scale.setScalar(Y),w.group.position.set(0,-Y,0),gt.globeCenter.set(0,-Y,0),k.idle>0.985&&!Z)V+=ae*0.012;let X=Math.atan2(Math.sin(V),Math.cos(V)),G=1-vt(0.86,0.94,_);if(w.update({alpha:G,spin:X*k.idle,net:k.net,finale:k.finale,dive:vt(0.45,0.9,_),time:mt,pr:d,reduce:Z}),w.group.updateMatrixWorld(),b.update({alpha:G*(0.55+0.45*k.net),time:mt,conv:k.conv,pr:d,camera:g,frame:w.spin}),k.finale>0.01)w.osijekWorld(ii).sub(gt.globeCenter).multiplyScalar(0.9833333333333332).add(gt.globeCenter);B.update({b:k.finale*0.85,alpha:G,at:ii,unit:Y*0.0005,camera:g,time:mt,pr:d,drop:0}),dt(k.dusk),xr.value=vt(0.3,0.95,_),Rs.value=1-vt(0.86,0.97,_);let ye=vt(0.78,0.87,_)*(1-vt(1.8,1.97,_));M.group.scale.set(L,Math.min(L,1),L),M.update({alpha:ye,Z:_,time:mt,dt:ae,pr:d,reduce:Z,net:k.net,trace:k.trace,hl:k.hl,dusk:k.dusk,night:Le.night,mapFade:vt(1.06,1.4,_),res:[Je*d,Q*d]}),F.group.scale.set(L*Wo,L*Fi,L*Fi),F.group.updateMatrixWorld();let Te=vt(0.38,0.88,k.scan),Me=vt(1.72,2.05,_),ke=vt(1.04,1.28,_),Ke=vt(1.3,1.8,_);F.update({alpha:Me,lamps:ke,streets:Ke,wake:Le.night*1.12,detail:vt(1.95,2.25,_),rise:k.rise,dim:k.dim,lines:k.lines,cath:vt(0.45,1,k.cath),glow:k.glow,cathSolid:k.cathSolid,focus:k.focus,scan:Te,time:mt,pr:d,reduce:Z,camera:g}),F.flood.position.copy(F.floodLocal).applyMatrix4(F.group.matrixWorld);let lt=ke>0.15;if(lt!==ct)ct=lt,o.classList.toggle("show-osm",lt);let ft=L*Fi;_n.copy(F.spire).applyMatrix4(F.group.matrixWorld),z.update({b:k.beam,alpha:Me,at:_n,unit:ft,camera:g,time:mt,pr:d});let Fe=je*k.flow,St=((F.spire.y+2)*(1-Te)-1.5)*ft;R.update({morph:k.morph,opacity:k.wire*Me,time:mt,bad:Fe,scanY:St,scanOn:k.wire>0.001&&k.morph<0.999?1:0}),os=k.wire*Me*(1-vt(0.25,0.7,k.morph));let Ft=vt(0.8,1,k.scan);Fn=os*vt(0.9,1,Ft),I.update({notes:Ft,notesA:os,rules:vt(0.15,1,k.morph),rulesA:k.wire*Me*(1-k.flow),toSite:vt(1.05,1.8,k.morph)}),ie.update({alpha:k.flow,time:mt,dt:ae,pr:d,reduce:Z,focusGate:E}),j.update({p:k.layers,alpha:k.layersA,assemble:k.assemble,active:k.assemble>0.5?-1:x,dt:ae,reduce:Z});for(let bt=0;bt<2;bt++)H.pos[bt*3]=g.position.x+w.sun.x*900,H.pos[bt*3+1]=g.position.y+w.sun.y*900,H.pos[bt*3+2]=g.position.z+w.sun.z*900;if(H.geometry.attributes.position.needsUpdate=!0,H.uniforms.uPR.value=d,H.uniforms.uOpacity.value=(1-vt(0.25,0.8,_))*(k.finale>0.5?0.7:1),H.points.visible=H.uniforms.uOpacity.value>0.002,W.points.position.copy(g.position),W.uniforms.uPR.value=d,W.uniforms.uOpacity.value=k.stars*(1-vt(0.6,1,_))+k.stars*0.25*vt(1.5,2,_),W.points.visible=W.uniforms.uOpacity.value>0.002,p.updateMatrixWorld(),gt.camPos.copy(g.position),gt.globeA=G,gt.europeA=ye,gt.cityA=Me,Ce(gt,!he,ae),h.render(p,g),!Pe)Pe=!0,s?.();if(T&&!Lt&&!te)T=!1,Lt=!0,(window.requestIdleCallback||((Dt)=>setTimeout(Dt,60)))(()=>Se().finally(()=>{Lt=!1}),{timeout:1200});if(!te)if(We=We*0.95+ae*1000*0.05,We>24&&d>1){if(++Re>90)d=Math.max(1,d-0.25),Re=0,We=16,le(!0)}else Re=0}function Oi(q){if(ze=requestAnimationFrame(Oi),!ce||document.hidden||window.__zaecFreeze){Qe=q;return}Ui(q)}let cs=new ResizeObserver(()=>le());cs.observe(e);let Nn=new ResizeObserver(()=>st());Nn.observe(document.body);let Bi=()=>{Qe=performance.now()};document.addEventListener("visibilitychange",Bi);let ki=(q)=>{q.preventDefault(),ce=!1,o.classList.add("webgl-lost")};e.addEventListener("webglcontextlost",ki),le(!0),me.smooth=me.target=rt(window.scrollY),ot(me.smooth,k);let de=!1,se=()=>{if(de)return;de=!0,ce=!0,Qe=performance.now(),ze=requestAnimationFrame(Oi)};return Promise.race([Se(),new Promise((q)=>setTimeout(q,2500))]).finally(se),{lite:u,refresh:()=>st(),setGates(q){Ee=q.slice(),je=Ee.filter((te)=>!te).length/Ee.length,ie.setStates(Ee)},setFocusGate(q){E=q},setLayerHover(q){x=q},layerCount:Ru.length,debugStep(q=1){for(let te=0;te<q;te++)Ui(performance.now(),0.016666666666666666);return this.debugCam()},debugCam(){return{progress:+me.smooth.toFixed(3),chapter:Ie,Z:+k.Z.toFixed(3),cam:g.position.toArray().map((q)=>+q.toFixed(2)),target:[k.tx,k.ty,k.tz].map((q)=>+q.toFixed(2)),anchors:Ge.map((q)=>`${q.id}@${Math.round(q.y)}`),dpr:d,lite:u,lines:R.count,cityLoaded:F.isLoaded(),night:+Le.night.toFixed(2)}},stats:()=>ie.stats(),debugState:()=>({...k}),debug:{camera:g,scene:p,globe:w,europe:M,city:F,renderer:h,beam:z},debugOverride(q){return Ne=q,this.debugStep(1)},dispose(){cancelAnimationFrame(ze),ce=!1,cs.disconnect(),Nn.disconnect(),document.removeEventListener("visibilitychange",Bi),e.removeEventListener("webglcontextlost",ki),window.removeEventListener("pointermove",Ue),[w,b,M,F,R,j,ie,z,B].forEach((q)=>q.dispose()),W.geometry.dispose(),H.geometry.dispose(),H.material.dispose(),W.material.dispose(),h.dispose()}}}export{pb as createWorld3};
