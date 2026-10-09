import{n}from"./app-fjph34ja.js";var yh="186";var Mh=0,Cc=1,Sh=2;var Vr=1,wh=2,tr=3,ui=0,Sn=1,Qt=2,hi=0,di=1,Zt=2,Pc=3,Ic=4,Ji=5;var nr=100,Eh=101,Th=102,Rh=103,to=104,Ch=200,fi=201,Ph=202,Ih=203,Dh=204,no=205,Lh=206,Fh=207,Nh=208,Uh=209,Oh=210,Bh=211,kh=212,zh=213,Hh=214,Gh=0,Wh=1,Vh=2,Dc=3,jh=4,qh=5,Xh=6,Kh=7,Yh=0,Jh=1,Zh=2,ti=0,Lc=1,Fc=2,Nc=3,Uc=4,Oc=5,Bc=6,kc=7;var ir=301,bs=302,io=303,so=304,jr=306,ni=1000,Zi=1001,ro=1002,ii=1003,ao=1004;var vs=1005;var Wt=1006,sr=1007;var Hn=1008;var _n=1009,$h=1010,Qh=1011,qr=1012,zc=1013,$i=1014,Di=1015,pi=1016,Hc=1017,Gc=1018,rr=1020,ed=35902,td=35899,nd=1021,id=1022,Gn=1023,xs=1026,_s=1027,mi=1028,Wc=1029,ys=1030,Vc=1031;var jc=1033,oo=33776,co=33777,lo=33778,uo=33779,qc=35840,Xc=35841,Kc=35842,Yc=35843,Jc=36196,Zc=37492,$c=37496,Qc=37488,el=37489,ho=37490,tl=37491,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,cl=37814,ll=37815,ul=37816,hl=37817,dl=37818,fl=37819,pl=37820,ml=37821,Al=36492,gl=36494,bl=36495,vl=36283,xl=36284,fo=36285,_l=36286;var yl=2300,po=2301;var Ml=0,Xr=1,ar=2;var Sl=0,sd=1,wn="",Ai="srgb",Ln="srgb-linear",wl="linear",Vt="srgb";var rd=512,ad=513,od=514,mo=515,cd=516,ld=517,Ao=518,ud=519;var El=35048;var Tl="300 es",Rl=2000;function Sp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return true;return false}function wp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $s(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function hd(){let e=$s("canvas");return e.style.display="block",e}var Du={},Qs=null;function zr(...e){let t="THREE."+e.shift();if(Qs)Qs("log",t,...e);else console.log(t,...e)}function dd(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function tt(...e){e=dd(e);let t="THREE."+e.shift();if(Qs)Qs("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function mt(...e){e=dd(e);let t="THREE."+e.shift();if(Qs)Qs("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function ms(...e){let t=e.join(" ");if(t in Du)return;Du[t]=true,tt(...e)}function fd(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}var pd={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Li{addEventListener(e,t){if(this._listeners===undefined)this._listeners={};let i=this._listeners;if(i[e]===undefined)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===undefined)return false;return i[e]!==undefined&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===undefined)return;let s=i[e];if(s!==undefined){let r=s.indexOf(t);if(r!==-1)s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===undefined)return;let i=t[e.type];if(i!==undefined){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}var vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,Js=Math.PI/180,As=180/Math.PI;function zn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[e&255]+vn[e>>8&255]+vn[e>>16&255]+vn[e>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[i&63|128]+vn[i>>8&255]+"-"+vn[i>>16&255]+vn[i>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function Rt(e,t,i){return Math.max(t,Math.min(i,e))}function Cl(e,t){return(e%t+t)%t}function Ep(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function Tp(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Or(e,t,i){return(1-i)*e+i*t}function Rp(e,t,i,s){return Or(e,t,1-Math.exp(-i*s))}function Cp(e,t=1){return t-Math.abs(Cl(e,t*2)-t)}function Pp(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function Ip(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function Dp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Lp(e,t){return e+Math.random()*(t-e)}function Fp(e){return e*(0.5-Math.random())}function Np(e){if(e!==undefined)Lu=e;let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(e){return e*Js}function Op(e){return e*As}function Bp(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function kp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function zp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Hp(e,t,i,s,r){let{cos:a,sin:o}=Math,c=a(i/2),l=o(i/2),u=a((t+s)/2),h=o((t+s)/2),f=a((t-s)/2),d=o((t-s)/2),p=a((s-t)/2),b=o((s-t)/2);switch(r){case"XYX":e.set(c*h,l*f,l*d,c*u);break;case"YZY":e.set(l*d,c*h,l*f,c*u);break;case"ZXZ":e.set(l*f,l*d,c*h,c*u);break;case"XZX":e.set(c*h,l*b,l*p,c*u);break;case"YXY":e.set(l*p,c*h,l*b,c*u);break;case"ZYZ":e.set(l*b,l*p,c*h,c*u);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Pl={DEG2RAD:Js,RAD2DEG:As,generateUUID:zn,clamp:Rt,euclideanModulo:Cl,mapLinear:Ep,inverseLerp:Tp,lerp:Or,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Ip,randInt:Dp,randFloat:Lp,randFloatSpread:Fp,seededRandom:Np,degToRad:Up,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:kp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Hp,normalize:zt,denormalize:ei};class ze{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}(()=>{ze.prototype.isVector2=true})();class Wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=true,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],b=r[a+3];if(h!==b||c!==f||l!==d||u!==p){let y=c*f+l*d+u*p+h*b;if(y<0)f=-f,d=-d,p=-p,b=-b,y=-y;let A=1-o;if(y<0.9995){let m=Math.acos(y),w=Math.sin(m);A=Math.sin(A*m)/w,o=Math.sin(o*m)/w,c=c*A+f*o,l=l*A+d*o,u=u*A+p*o,h=h*A+b*o}else{c=c*A+f*o,l=l*A+d*o,u=u*A+p*o,h=h*A+b*o;let m=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=m,l*=m,u*=m,h*=m}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-o*d,e[t+2]=l*p+u*d+o*f-c*h,e[t+3]=u*p-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=true){let{_x:i,_y:s,_z:r,_order:a}=e,{cos:o,sin:c}=Math,l=o(i/2),u=o(s/2),h=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}if(t===true)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){let d=0.5/Math.sqrt(f+1);this._w=0.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=0.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=0.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,{_x:o,_y:c,_z:l,_w:u}=t;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:s,_z:r,_w:a}=e,o=this.dot(e);if(o<0)i=-i,s=-s,r=-r,a=-a,o=-o;let c=1-t;if(o<0.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===undefined)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,{x:r,y:a,z:o,w:c}=e,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:s,z:r}=e,{x:a,y:o,z:c}=t;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}(()=>{I.prototype.isVector3=true})();var $o=new I,Fu=new Wn;class gt{constructor(e,t,i,s,r,a,o,c,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==undefined)this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],b=s[0],y=s[3],A=s[6],m=s[1],w=s[4],C=s[7],g=s[2],M=s[5],S=s[8];return r[0]=a*b+o*m+c*g,r[3]=a*y+o*w+c*M,r[6]=a*A+o*C+c*S,r[1]=l*b+u*m+h*g,r[4]=l*y+u*w+h*M,r[7]=l*A+u*C+h*S,r[2]=f*b+d*m+p*g,r[5]=f*y+d*w+p*M,r[8]=f*A+d*C+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=h*b,e[1]=(s*l-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=f*b,e[4]=(u*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=d*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return false;return true}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}(()=>{gt.prototype.isMatrix3=true})();var Qo=new gt,Nu=new gt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Uu=new gt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Gp(){let e={enabled:true,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,a,o){if(this.enabled===false||a===o||!a||!o)return r;if(this.spaces[a].transfer==="srgb")r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b);if(this.spaces[a].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b);return r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r==="")return"linear";return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],s=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:s,transfer:"linear",toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:s,transfer:"srgb",toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var Tt=Gp();function Pi(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Zs(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Us;class Il{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Us===undefined)Us=$s("canvas");Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");if(e instanceof ImageData)s.putImageData(e,0,0);else s.drawImage(e,0,0,e.width,e.height);i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(Pi(t[i]/255)*255);else t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Wp=0;class Kr{constructor(e=null){this.isTextureSource=true,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=zn(),this.data=e,this.dataReady=true,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===true)this.version++}toJSON(e){let t=e===undefined||typeof e==="string";if(!t&&e.images[this.uuid]!==undefined)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)if(s[a].isDataTexture)r.push(ec(s[a].image));else r.push(ec(s[a]))}else r=ec(s);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function ec(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Il.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return tt("Texture: Unable to serialize Texture."),{}}var Vp=0,tc=new I;class an extends Li{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=an.DEFAULT_ANISOTROPY,u=""){super();this.isTexture=true,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=zn(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=true,this.matrix=new gt,this.generateMipmaps=true,this.premultiplyAlpha=false,this.flipY=true,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=false,this.isArrayTexture=e&&e.depth&&e.depth>1?true:false,this.pmremVersion=0,this.normalized=false}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=true,this}setValues(e){for(let t in e){let i=e[t];if(i===undefined){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===undefined){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}if(s&&i&&(s.isVector2&&i.isVector2))s.copy(i);else if(s&&i&&(s.isVector3&&i.isVector3))s.copy(i);else if(s&&i&&(s.isMatrix3&&i.isMatrix3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===undefined||typeof e==="string";if(!t&&e.textures[this.uuid]!==undefined)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===true)this.version++,this.source.needsUpdate=true}set needsPMREMUpdate(e){if(e===true)this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=300;an.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==undefined?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=0.01,o=0.1,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],b=c[2],y=c[6],A=c[10];if(Math.abs(u-f)<0.01&&Math.abs(h-b)<0.01&&Math.abs(p-y)<0.01){if(Math.abs(u+f)<0.1&&Math.abs(h+b)<0.1&&Math.abs(p+y)<0.1&&Math.abs(l+d+A-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,C=(d+1)/2,g=(A+1)/2,M=(u+f)/4,S=(h+b)/4,P=(p+y)/4;if(w>C&&w>g)if(w<0.01)i=0,s=0.707106781,r=0.707106781;else i=Math.sqrt(w),s=M/i,r=S/i;else if(C>g)if(C<0.01)i=0.707106781,s=0,r=0.707106781;else s=Math.sqrt(C),i=M/s,r=P/s;else if(g<0.01)i=0.707106781,s=0.707106781,r=0;else r=Math.sqrt(g),i=S/r,s=P/r;return this.set(i,s,r,t),this}let m=Math.sqrt((y-p)*(y-p)+(h-b)*(h-b)+(f-u)*(f-u));if(Math.abs(m)<0.001)m=1;return this.x=(y-p)/m,this.y=(h-b)/m,this.z=(f-u)/m,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}(()=>{Gt.prototype.isVector4=true})();class Dl extends Li{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:false,internalFormat:null,minFilter:1006,depthBuffer:true,stencilBuffer:false,resolveColorBuffer:true,resolveDepthBuffer:true,resolveStencilBuffer:true,storeMultisampledColorBuffer:true,storeMultisampledDepthBuffer:true,storeMultisampledStencilBuffer:true,depthTexture:null,samples:0,count:1,depth:1,multiview:false,useArrayDepthTexture:false},i),this.isRenderTarget=true,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=false,this.viewport=new Gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new an(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=true,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:false,flipY:false,internalFormat:null};if(e.mapping!==undefined)t.mapping=e.mapping;if(e.wrapS!==undefined)t.wrapS=e.wrapS;if(e.wrapT!==undefined)t.wrapT=e.wrapT;if(e.wrapR!==undefined)t.wrapR=e.wrapR;if(e.magFilter!==undefined)t.magFilter=e.magFilter;if(e.minFilter!==undefined)t.minFilter=e.minFilter;if(e.format!==undefined)t.format=e.format;if(e.type!==undefined)t.type=e.type;if(e.anisotropy!==undefined)t.anisotropy=e.anisotropy;if(e.colorSpace!==undefined)t.colorSpace=e.colorSpace;if(e.flipY!==undefined)t.flipY=e.flipY;if(e.generateMipmaps!==undefined)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==undefined)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)if(this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==true)this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=true,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Dl{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=true}}class go extends an{constructor(e=null,t=1,i=1,s=1){super(null);this.isDataArrayTexture=true,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ll extends an{constructor(e=null,t=1,i=1,s=1){super(null);this.isData3DTexture=true,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class dt{constructor(e,t,i,s,r,a,o,c,l,u,h,f,d,p,b,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==undefined)this.set(e,t,i,s,r,a,o,c,l,u,h,f,d,p,b,y)}set(e,t,i,s,r,a,o,c,l,u,h,f,d,p,b,y){let A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=u,A[10]=h,A[14]=f,A[3]=d,A[7]=p,A[11]=b,A[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:s,z:r}=e,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*h,p=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,p=l*u,b=l*h;t[0]=f+b*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,p=l*u,b=l*h;t[0]=f-b*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,p=o*u,b=o*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+b,t[1]=c*h,t[5]=b*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,p=o*c,b=o*l;t[0]=c*u,t[4]=b-f*h,t[8]=p*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-b*h}else if(e.order==="XZY"){let f=a*c,d=a*l,p=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+b,t[5]=a*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,qp)}lookAt(e,t,i){let s=this.elements;if(Pn.subVectors(e,t),Pn.lengthSq()===0)Pn.z=1;if(Pn.normalize(),Wi.crossVectors(i,Pn),Wi.lengthSq()===0){if(Math.abs(i.z)===1)Pn.x+=0.0001;else Pn.z+=0.0001;Pn.normalize(),Wi.crossVectors(i,Pn)}return Wi.normalize(),_a.crossVectors(Pn,Wi),s[0]=Wi.x,s[4]=_a.x,s[8]=Pn.x,s[1]=Wi.y,s[5]=_a.y,s[9]=Pn.y,s[2]=Wi.z,s[6]=_a.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],b=i[6],y=i[10],A=i[14],m=i[3],w=i[7],C=i[11],g=i[15],M=s[0],S=s[4],P=s[8],_=s[12],T=s[1],F=s[5],L=s[9],k=s[13],G=s[2],B=s[6],V=s[10],te=s[14],Y=s[3],q=s[7],W=s[11],U=s[15];return r[0]=a*M+o*T+c*G+l*Y,r[4]=a*S+o*F+c*B+l*q,r[8]=a*P+o*L+c*V+l*W,r[12]=a*_+o*k+c*te+l*U,r[1]=u*M+h*T+f*G+d*Y,r[5]=u*S+h*F+f*B+d*q,r[9]=u*P+h*L+f*V+d*W,r[13]=u*_+h*k+f*te+d*U,r[2]=p*M+b*T+y*G+A*Y,r[6]=p*S+b*F+y*B+A*q,r[10]=p*P+b*L+y*V+A*W,r[14]=p*_+b*k+y*te+A*U,r[3]=m*M+w*T+C*G+g*Y,r[7]=m*S+w*F+C*B+g*q,r[11]=m*P+w*L+C*V+g*W,r[15]=m*_+w*k+C*te+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],b=e[7],y=e[11],A=e[15],m=c*d-l*f,w=o*d-l*h,C=o*f-c*h,g=a*d-l*u,M=a*f-c*u,S=a*h-o*u;return t*(b*m-y*w+A*C)-i*(p*m-y*g+A*M)+s*(p*w-b*g+A*S)-r*(p*C-b*M+y*S)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;if(e.isVector3)s[12]=e.x,s[13]=e.y,s[14]=e.z;else s[12]=e,s[13]=t,s[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],b=e[13],y=e[14],A=e[15],m=t*o-i*a,w=t*c-s*a,C=t*l-r*a,g=i*c-s*o,M=i*l-r*o,S=s*l-r*c,P=u*b-h*p,_=u*y-f*p,T=u*A-d*p,F=h*y-f*b,L=h*A-d*b,k=f*A-d*y,G=m*k-w*L+C*F+g*T-M*_+S*P;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/G;return e[0]=(o*k-c*L+l*F)*B,e[1]=(s*L-i*k-r*F)*B,e[2]=(b*S-y*M+A*g)*B,e[3]=(f*M-h*S-d*g)*B,e[4]=(c*T-a*k-l*_)*B,e[5]=(t*k-s*T+r*_)*B,e[6]=(y*C-p*S-A*w)*B,e[7]=(u*S-f*C+d*w)*B,e[8]=(a*L-o*T+l*P)*B,e[9]=(i*T-t*L-r*P)*B,e[10]=(p*M-b*C+A*m)*B,e[11]=(h*C-u*M-d*m)*B,e[12]=(o*_-a*F-c*P)*B,e[13]=(t*F-i*_+s*P)*B,e[14]=(b*w-p*g-y*m)*B,e[15]=(u*g-h*w+f*m)*B,this}scale(e){let t=this.elements,{x:i,y:s,z:r}=e;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,{x:a,y:o,z:c}=e,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,{_x:r,_y:a,_z:o,_w:c}=t,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,p=r*h,b=a*u,y=a*h,A=o*h,m=c*l,w=c*u,C=c*h,{x:g,y:M,z:S}=i;return s[0]=(1-(b+A))*g,s[1]=(d+C)*g,s[2]=(p-w)*g,s[3]=0,s[4]=(d-C)*M,s[5]=(1-(f+A))*M,s[6]=(y+m)*M,s[7]=0,s[8]=(p+w)*S,s[9]=(y-m)*S,s[10]=(1-(f+b))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),c=Os.set(s[8],s[9],s[10]).length();if(r<0)a=-a;Zn.copy(this);let l=1/a,u=1/o,h=1/c;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=2000,c=false){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,b;if(c)p=r/(a-r),b=a*r/(a-r);else if(o===2000)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===2001)p=-a/(a-r),b=-a*r/(a-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2000,c=false){let l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,b;if(c)p=1/(a-r),b=a/(a-r);else if(o===2000)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===2001)p=-1/(a-r),b=-r/(a-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return false;return true}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}(()=>{dt.prototype.isMatrix4=true})();var Os=new I,Zn=new dt,jp=new I(0,0,0),qp=new I(1,1,1),Wi=new I,_a=new I,Pn=new I,Ou=new dt,Bu=new Wn;class Ii{constructor(e=0,t=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=true,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=true){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":if(this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(o,d),this._z=Math.atan2(c,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l);else this._y=0,this._z=Math.atan2(c,r);break;case"ZYX":if(this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(f,d),this._z=Math.atan2(c,r);else this._x=0,this._z=Math.atan2(-a,l);break;case"YZX":if(this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<0.9999999)this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,d);break;case"XZY":if(this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-u,d),this._y=0;break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===true)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==undefined)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Xp=0,ku=new I,Bs=new Wn,Si=new dt,ya=new I,Rr=new I,Kp=new I,Yp=new Wn,zu=new I(1,0,0),Hu=new I(0,1,0),Gu=new I(0,0,1),Wu={type:"added"},Jp={type:"removed"},ks={type:"childadded",child:null},nc={type:"childremoved",child:null};class jt extends Li{constructor(){super();this.isObject3D=true,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();let e=new I,t=new Ii,i=new Wn,s=new I(1,1,1);function r(){i.setFromEuler(t,false)}function a(){t.setFromQuaternion(i,undefined,false)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:true,enumerable:true,value:e},rotation:{configurable:true,enumerable:true,value:t},quaternion:{configurable:true,enumerable:true,value:i},scale:{configurable:true,enumerable:true,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new gt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=false,this.layers=new bo,this.visible=true,this.castShadow=false,this.receiveShadow=false,this.frustumCulled=true,this.renderOrder=0,this.animations=[],this.customDepthMaterial=undefined,this.customDistanceMaterial=undefined,this.static=false,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,true)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(true,false),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(true,false),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)ya.copy(e);else ya.set(e,t,i);let s=this.parent;if(this.updateWorldMatrix(true,false),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Si.lookAt(Rr,ya,this.up);else Si.lookAt(ya,Rr,this.up);if(this.quaternion.setFromRotationMatrix(Si),s)Si.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Si),this.quaternion.premultiply(Bs.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return mt("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),ks.child=e,this.dispatchEvent(ks),ks.child=null;else mt("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),nc.child=e,this.dispatchEvent(nc),nc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(true,false),Si.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(true,false),Si.multiply(e.parent.matrixWorld);return e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(false,true),e.dispatchEvent(Wu),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==undefined)return a}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(true,false),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(true,false),this.matrixWorld.decompose(Rr,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(true,false),this.matrixWorld.decompose(Rr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(true,false);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===false)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:s}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=true}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===true)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=false,e=true}let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=false){let s=this.parent;if(e===true&&s!==null)s.updateWorldMatrix(true,false);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===true)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=false,i=true}if(t===true){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(false,true,i)}}toJSON(e){let t=e===undefined||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let s={};if(s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)s.userData=this.userData;if(s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null)s.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==undefined)s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==undefined)s.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)s.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():undefined,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():undefined})),s.instanceInfo=this._instanceInfo.map((o)=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)s.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)s.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)s.boundingBox=this.boundingBox.toJSON()}function r(o,c){if(o[c.uuid]===undefined)o[c.uuid]=c.toJSON(e);return c.uuid}if(this.isScene){if(this.background){if(this.background.isColor)s.background=this.background.toJSON();else if(this.background.isTexture)s.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==true)s.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==undefined&&o.shapes!==undefined){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh){if(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==undefined)r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid}if(this.material!==undefined)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);if(o.length>0)i.geometries=o;if(c.length>0)i.materials=c;if(l.length>0)i.textures=l;if(u.length>0)i.images=u;if(h.length>0)i.shapes=h;if(f.length>0)i.skeletons=f;if(d.length>0)i.animations=d;if(p.length>0)i.nodes=p}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=true){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===true)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.DEFAULT_UP=new I(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=true;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=true;class Ht extends jt{constructor(){super();this.isGroup=true,this.type="Group"}}var Zp={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ht,this._hand.matrixAutoUpdate=false,this._hand.visible=false,this._hand.joints={},this._hand.inputState={pinching:false};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=false,this._targetRay.visible=false,this._targetRay.hasLinearVelocity=false,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=false,this._targetRay.angularVelocity=new I;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ht,this._grip.matrixAutoUpdate=false,this._grip.visible=false,this._grip.hasLinearVelocity=false,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=false,this._grip.angularVelocity=new I,this._grip.eventsEnabled=false;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=false;if(this._grip!==null)this._grip.visible=false;if(this._hand!==null)this._hand.visible=false;return this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=true;for(let b of e.hand.values()){let y=t.getJointPose(b,i),A=this._getHandJoint(l,b);if(y!==null)A.matrix.fromArray(y.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=true,A.jointRadius=y.radius;A.visible=y!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=0.02,p=0.005;if(l.inputState.pinching&&f>d+p)l.inputState.pinching=false,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=d-p)l.inputState.pinching=true,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(c!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=true,r.linearVelocity)c.hasLinearVelocity=true,c.linearVelocity.copy(r.linearVelocity);else c.hasLinearVelocity=false;if(r.angularVelocity)c.hasAngularVelocity=true,c.angularVelocity.copy(r.angularVelocity);else c.hasAngularVelocity=false;if(c.eventsEnabled)c.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null)s=r;if(s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=true,s.linearVelocity)o.hasLinearVelocity=true,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=false;if(s.angularVelocity)o.hasAngularVelocity=true,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=false;this.dispatchEvent(Zp)}}}if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;if(l!==null)l.visible=a!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===undefined){let i=new Ht;i.matrixAutoUpdate=false,i.visible=false,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ic(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class He{constructor(e,t,i){return this.isColor=true,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===undefined&&i===undefined){let s=e;if(s&&s.isColor)this.copy(s);else if(typeof s==="number")this.setHex(s);else if(typeof s==="string")this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=Cl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ic(a,r,e+0.3333333333333333),this.g=ic(a,r,e),this.b=ic(a,r,e-0.3333333333333333)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t="srgb"){function i(r){if(r===undefined)return;if(parseFloat(r)<1)tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(a===6)return this.setHex(parseInt(r,16),t);else tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=md[e.toLowerCase()];if(i!==undefined)this.setHex(i,t);else tt("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(Rt(xn.r*255,0,255))*65536+Math.round(Rt(xn.g*255,0,255))*256+Math.round(Rt(xn.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),t);let{r:i,g:s,b:r}=xn,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=0.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e="srgb"){Tt.workingToColorSpace(xn.copy(this),e);let{r:t,g:i,b:s}=xn;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Ma);let i=Or(Vi.h,Ma.h,t),s=Or(Vi.s,Ma.s,t),r=Or(Vi.l,Ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var xn=new He;He.NAMES=md;class vo extends jt{constructor(){super();if(this.isScene=true,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var $n=new I,wi=new I,sc=new I,Ei=new I,zs=new I,Hs=new I,Vu=new I,rc=new I,ac=new I,oc=new I,cc=new Gt,lc=new Gt,uc=new Gt;class Dn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();if(r>0)return s.multiplyScalar(1/Math.sqrt(r));return s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),wi.subVectors(i,t),sc.subVectors(e,t);let a=$n.dot($n),o=$n.dot(wi),c=$n.dot(sc),l=wi.dot(wi),u=wi.dot(sc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,p=(a*u-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){if(this.getBarycoord(e,t,i,s,Ei)===null)return false;return Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){if(this.getBarycoord(e,t,i,s,Ei)===null){if(c.x=0,c.y=0,"z"in c)c.z=0;if("w"in c)c.w=0;return null}return c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c}static getInterpolatedAttribute(e,t,i,s,r,a){return cc.setScalar(0),lc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),wi.subVectors(e,t),$n.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,i),Hs.subVectors(r,i),rc.subVectors(e,i);let c=zs.dot(rc),l=Hs.dot(rc);if(c<=0&&l<=0)return t.copy(i);ac.subVectors(e,s);let u=zs.dot(ac),h=Hs.dot(ac);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(zs,a);oc.subVectors(e,r);let d=zs.dot(oc),p=Hs.dot(oc);if(p>=0&&d<=p)return t.copy(r);let b=d*l-c*p;if(b<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(Hs,o);let y=u*p-d*h;if(y<=0&&h-u>=0&&d-p>=0)return Vu.subVectors(r,s),o=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Vu,o);let A=1/(y+b+f);return a=b*A,o=f*A,t.copy(i).addScaledVector(zs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class En{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=true,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=false){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=false){e.updateWorldMatrix(false,false);let i=e.geometry;if(i!==undefined){let r=i.getAttribute("position");if(t===true&&r!==undefined&&e.isInstancedMesh!==true)for(let a=0,o=r.count;a<o;a++){if(e.isMesh===true)e.getVertexPosition(a,Qn);else Qn.fromBufferAttribute(r,a);Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else{if(e.boundingBox!==undefined){if(e.boundingBox===null)e.computeBoundingBox();Sa.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Sa.copy(i.boundingBox)}Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return false;this.getCenter(Cr),wa.subVectors(this.max,Cr),Gs.subVectors(e.a,Cr),Ws.subVectors(e.b,Cr),Vs.subVectors(e.c,Cr),ji.subVectors(Ws,Gs),qi.subVectors(Vs,Ws),hs.subVectors(Gs,Vs);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-hs.z,hs.y,ji.z,0,-ji.x,qi.z,0,-qi.x,hs.z,0,-hs.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-hs.y,hs.x,0];if(!hc(t,Gs,Ws,Vs,wa))return false;if(t=[1,0,0,0,1,0,0,0,1],!hc(t,Gs,Ws,Vs,wa))return false;return Ea.crossVectors(ji,qi),t=[Ea.x,Ea.y,Ea.z],hc(t,Gs,Ws,Vs,wa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Qn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Ti=[new I,new I,new I,new I,new I,new I,new I,new I],Qn=new I,Sa=new En,Gs=new I,Ws=new I,Vs=new I,ji=new I,qi=new I,hs=new I,Cr=new I,wa=new I,Ea=new I,ds=new I;function hc(e,t,i,s,r){for(let a=0,o=e.length-3;a<=o;a+=3){ds.fromArray(e,a);let c=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),l=t.dot(ds),u=i.dot(ds),h=s.dot(ds);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return false}return true}var rn=new I,Ta=new ze,$p=0;class pt extends Li{constructor(e,t,i=false){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=true,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==undefined?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===true)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=ei(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=zt(i,this.array);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=ei(t,this.array);return t}setX(e,t){if(this.normalized)t=zt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=ei(t,this.array);return t}setY(e,t){if(this.normalized)t=zt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=ei(t,this.array);return t}setZ(e,t){if(this.normalized)t=zt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=ei(t,this.array);return t}setW(e,t){if(this.normalized)t=zt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=zt(t,this.array),i=zt(i,this.array);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){if(e*=this.itemSize,this.normalized)t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e*=this.itemSize,this.normalized)t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xo extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _o extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Qp=new En,Pr=new I,dc=new I;class on{constructor(e=new I,t=-1){this.isSphere=true,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==undefined)i.copy(t);else Qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*0.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===true)this.radius=Math.max(this.radius,e.radius);else dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(dc)),this.expandByPoint(Pr.copy(e.center).sub(dc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var e0=0,kn=new dt,fc=new jt,js=new I,In=new En,Ir=new En,pn=new I;class ct extends Li{constructor(){super();this.isBufferGeometry=true,Object.defineProperty(this,"id",{value:e0++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=false,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=false}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Sp(e))?_o:xo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==undefined}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==undefined)t.applyMatrix4(e),t.needsUpdate=true;let i=this.attributes.normal;if(i!==undefined){let r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=true}let s=this.attributes.tangent;if(s!==undefined)s.transformDirection(e),s.needsUpdate=true;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=true,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===undefined){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}if(e.length>t.count)tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=true}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new En;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==undefined){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];if(In.setFromBufferAttribute(r),this.morphTargetsRelative)pn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(pn);else this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new on;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];if(Ir.setFromBufferAttribute(o),this.morphTargetsRelative)pn.addVectors(In.min,Ir.min),In.expandByPoint(pn),pn.addVectors(In.max,Ir.max),In.expandByPoint(pn);else In.expandByPoint(Ir.min),In.expandByPoint(Ir.max)}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++){if(pn.fromBufferAttribute(o,l),c)js.fromBufferAttribute(e,l),pn.add(js);s=Math.max(s,i.distanceToSquared(pn))}}if(this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius))mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===undefined||t.normal===undefined||t.uv===undefined){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:s,uv:r}=t,a=this.getAttribute("tangent");if(a===undefined||a.count!==i.count)a=new pt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a);let o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new I,c[P]=new I;let l=new I,u=new I,h=new I,f=new ze,d=new ze,p=new ze,b=new I,y=new I;function A(P,_,T){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),u.sub(l),h.sub(l),d.sub(f),p.sub(f);let F=1/(d.x*p.y-p.x*d.y);if(!isFinite(F))return;b.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(F),y.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(F),o[P].add(b),o[_].add(b),o[T].add(b),c[P].add(y),c[_].add(y),c[T].add(y)}let m=this.groups;if(m.length===0)m=[{start:0,count:e.count}];for(let P=0,_=m.length;P<_;++P){let T=m[P],{start:F,count:L}=T;for(let k=F,G=F+L;k<G;k+=3)A(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new I,C=new I,g=new I,M=new I;function S(P){g.fromBufferAttribute(s,P),M.copy(g);let _=o[P];w.copy(_),w.sub(g.multiplyScalar(g.dot(_))).normalize(),C.crossVectors(M,_);let F=C.dot(c[P])<0?-1:1;a.setXYZW(P,w.x,w.y,w.z,F)}for(let P=0,_=m.length;P<_;++P){let T=m[P],{start:F,count:L}=T;for(let k=F,G=F+L;k<G;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}this._transformed=true}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==undefined){let i=this.getAttribute("normal");if(i===undefined||i.count!==t.count)i=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),b=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,y),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,y),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=true}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,c){let{array:l,itemSize:u,normalized:h}=o,f=new l.constructor(c.length*u),d=0,p=0;for(let b=0,y=c.length;b<y;b++){if(o.isInterleavedBufferAttribute)d=c[b]*o.data.stride+o.offset;else d=c[b]*u;for(let A=0;A<u;A++)f[p++]=l[d++]}return new pt(f,u,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ct,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==undefined&&this._transformed===true?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==undefined&&this._transformed!==true){let c=this.parameters;for(let l in c)if(c[l]!==undefined)e[l]=c[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=false;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}if(u.length>0)s[c]=u,r=true}if(r)e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;if(a.length>0)e.data.groups=JSON.parse(JSON.stringify(a));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let c=e.boundingSphere;if(c!==null)this.boundingSphere=c.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr{constructor(e,t){this.isInterleavedBuffer=true,this.array=e,this.stride=t,this.count=e!==undefined?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){if(e===true)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===undefined)e.arrayBuffers={};if(this.array.buffer._uuid===undefined)this.array.buffer._uuid=zn();if(e.arrayBuffers[this.array.buffer._uuid]===undefined)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===undefined)e.arrayBuffers={};if(this.array.buffer._uuid===undefined)this.array.buffer._uuid=zn();if(e.arrayBuffers[this.array.buffer._uuid]===undefined)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}var Mn=new I;class or{constructor(e,t,i,s=false){this.isInterleavedBufferAttribute=true,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=ei(i,this.array);return i}setComponent(e,t,i){if(this.normalized)i=zt(i,this.array);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=zt(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=zt(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=zt(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=zt(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=ei(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=ei(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=ei(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=ei(t,this.array);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=zt(t,this.array),i=zt(i,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){if(e=e*this.data.stride+this.offset,this.normalized)t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===undefined){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===undefined)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===undefined)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===undefined){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===undefined)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===undefined)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:true,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var pc=new I,t0=new I,n0=new gt;class oi{constructor(e=new I(1,0,0),t=0){this.isPlane=true,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=pc.subVectors(i,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=true){let s=e.delta(pc),r=this.normal.dot(s);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let a=-(e.start.dot(this.normal)+this.constant)/r;if(i===true&&(a<0||a>1))return null;return t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||n0.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var i0=0;class Nn extends Li{constructor(){super();this.isMaterial=true,Object.defineProperty(this,"id",{value:i0++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=false,this.opacity=1,this.transparent=false,this.alphaHash=false,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=true,this.depthWrite=true,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=false,this.clippingPlanes=null,this.clipIntersection=false,this.clipShadows=false,this.shadowSide=null,this.colorWrite=true,this.precision=null,this.polygonOffset=false,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=false,this.alphaToCoverage=false,this.premultipliedAlpha=false,this.forceSinglePass=false,this.allowOverride=true,this.visible=true,this.toneMapped=true,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===undefined)return;for(let t in e){let i=e[t];if(i===undefined){tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===undefined){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(s&&s.isColor)s.set(i);else if(s&&s.isVector2&&(i&&i.isVector2)||s&&s.isEuler&&(i&&i.isEuler)||s&&s.isVector3&&(i&&i.isVector3))s.copy(i);else this[t]=i}}toJSON(e){let t=e===undefined||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==undefined)i.roughness=this.roughness;if(this.metalness!==undefined)i.metalness=this.metalness;if(this.sheen!==undefined)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==undefined)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==undefined)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==undefined)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==undefined)i.shininess=this.shininess;if(this.clearcoat!==undefined)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==undefined)i.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==undefined)i.dispersion=this.dispersion;if(this.retroreflectivity!==undefined)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==undefined)i.iridescence=this.iridescence;if(this.iridescenceIOR!==undefined)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==undefined)i.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==undefined)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==undefined)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==undefined)i.combine=this.combine}if(this.envMapRotation!==undefined)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==undefined)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==undefined)i.reflectivity=this.reflectivity;if(this.refractionRatio!==undefined)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==undefined)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==undefined)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==undefined)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==undefined)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==undefined)i.size=this.size;if(this.sizeAttenuation!==undefined)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==undefined)i.rotation=this.rotation;if(this.depthPacking!==undefined)i.depthPacking=this.depthPacking;if(this.linewidth!==undefined)i.linewidth=this.linewidth;if(this.linecap!==undefined)i.linecap=this.linecap;if(this.linejoin!==undefined)i.linejoin=this.linejoin;if(this.dashSize!==undefined)i.dashSize=this.dashSize;if(this.gapSize!==undefined)i.gapSize=this.gapSize;if(this.scale!==undefined)i.scale=this.scale;if(this.wireframe!==undefined)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==undefined)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==undefined)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==undefined)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==undefined)i.flatShading=this.flatShading;if(this.fog!==undefined)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);if(r.length>0)i.textures=r;if(a.length>0)i.images=a}return i}fromJSON(e,t){if(e.uuid!==undefined)this.uuid=e.uuid;if(e.name!==undefined)this.name=e.name;if(e.color!==undefined&&this.color!==undefined)this.color.setHex(e.color);if(e.roughness!==undefined)this.roughness=e.roughness;if(e.metalness!==undefined)this.metalness=e.metalness;if(e.sheen!==undefined)this.sheen=e.sheen;if(e.sheenColor!==undefined)this.sheenColor=new He().setHex(e.sheenColor);if(e.sheenRoughness!==undefined)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==undefined&&this.emissive!==undefined)this.emissive.setHex(e.emissive);if(e.specular!==undefined&&this.specular!==undefined)this.specular.setHex(e.specular);if(e.specularIntensity!==undefined)this.specularIntensity=e.specularIntensity;if(e.specularColor!==undefined&&this.specularColor!==undefined)this.specularColor.setHex(e.specularColor);if(e.shininess!==undefined)this.shininess=e.shininess;if(e.clearcoat!==undefined)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==undefined)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==undefined)this.dispersion=e.dispersion;if(e.retroreflectivity!==undefined)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==undefined)this.iridescence=e.iridescence;if(e.iridescenceIOR!==undefined)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==undefined)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==undefined)this.transmission=e.transmission;if(e.thickness!==undefined)this.thickness=e.thickness;if(e.attenuationDistance!==undefined)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==undefined&&this.attenuationColor!==undefined)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==undefined)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==undefined)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==undefined)this.fog=e.fog;if(e.flatShading!==undefined)this.flatShading=e.flatShading;if(e.blending!==undefined)this.blending=e.blending;if(e.combine!==undefined)this.combine=e.combine;if(e.side!==undefined)this.side=e.side;if(e.shadowSide!==undefined)this.shadowSide=e.shadowSide;if(e.opacity!==undefined)this.opacity=e.opacity;if(e.transparent!==undefined)this.transparent=e.transparent;if(e.alphaTest!==undefined)this.alphaTest=e.alphaTest;if(e.alphaHash!==undefined)this.alphaHash=e.alphaHash;if(e.depthFunc!==undefined)this.depthFunc=e.depthFunc;if(e.depthTest!==undefined)this.depthTest=e.depthTest;if(e.depthWrite!==undefined)this.depthWrite=e.depthWrite;if(e.colorWrite!==undefined)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==undefined)this.clippingPlanes=e.clippingPlanes.map((i)=>new oi().fromJSON(i));if(e.clipIntersection!==undefined)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==undefined)this.clipShadows=e.clipShadows;if(e.depthPacking!==undefined)this.depthPacking=e.depthPacking;if(e.blendSrc!==undefined)this.blendSrc=e.blendSrc;if(e.blendDst!==undefined)this.blendDst=e.blendDst;if(e.blendEquation!==undefined)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==undefined)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==undefined)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==undefined)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==undefined&&this.blendColor!==undefined)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==undefined)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==undefined)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==undefined)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==undefined)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==undefined)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==undefined)this.stencilFail=e.stencilFail;if(e.stencilZFail!==undefined)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==undefined)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==undefined)this.stencilWrite=e.stencilWrite;if(e.wireframe!==undefined)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==undefined)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==undefined)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==undefined)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==undefined)this.rotation=e.rotation;if(e.linewidth!==undefined)this.linewidth=e.linewidth;if(e.linecap!==undefined)this.linecap=e.linecap;if(e.linejoin!==undefined)this.linejoin=e.linejoin;if(e.dashSize!==undefined)this.dashSize=e.dashSize;if(e.gapSize!==undefined)this.gapSize=e.gapSize;if(e.scale!==undefined)this.scale=e.scale;if(e.polygonOffset!==undefined)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==undefined)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==undefined)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==undefined)this.dithering=e.dithering;if(e.alphaToCoverage!==undefined)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==undefined)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==undefined)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==undefined)this.allowOverride=e.allowOverride;if(e.visible!==undefined)this.visible=e.visible;if(e.toneMapped!==undefined)this.toneMapped=e.toneMapped;if(e.userData!==undefined)this.userData=e.userData;if(e.vertexColors!==undefined)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==undefined)this.size=e.size;if(e.sizeAttenuation!==undefined)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==undefined)this.map=t[e.map]||null;if(e.matcap!==undefined)this.matcap=t[e.matcap]||null;if(e.alphaMap!==undefined)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==undefined)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==undefined)this.bumpScale=e.bumpScale;if(e.normalMap!==undefined)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==undefined)this.normalMapType=e.normalMapType;if(e.normalScale!==undefined){let i=e.normalScale;if(Array.isArray(i)===false)i=[i,i];this.normalScale=new ze().fromArray(i)}if(e.displacementMap!==undefined)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==undefined)this.displacementScale=e.displacementScale;if(e.displacementBias!==undefined)this.displacementBias=e.displacementBias;if(e.roughnessMap!==undefined)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==undefined)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==undefined)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==undefined)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==undefined)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==undefined)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==undefined)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==undefined)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==undefined)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==undefined)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==undefined)this.reflectivity=e.reflectivity;if(e.refractionRatio!==undefined)this.refractionRatio=e.refractionRatio;if(e.lightMap!==undefined)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==undefined)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==undefined)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==undefined)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==undefined)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==undefined)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==undefined)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==undefined)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==undefined)this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==undefined)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==undefined)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==undefined)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==undefined)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==undefined)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==undefined)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==undefined)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===true)this.version++}}var Ri=new I,mc=new I,Ra=new I,Ca=new I;class cr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e)}distanceSqToSegment(e,t,i,s){mc.copy(e).add(t).multiplyScalar(0.5),Ra.copy(t).sub(e).normalize(),Ca.copy(this.origin).sub(mc);let r=e.distanceTo(t)*0.5,a=-this.direction.dot(Ra),o=Ca.dot(this.direction),c=-Ca.dot(Ra),l=Ca.lengthSq(),u=Math.abs(1-a*a),h,f,d,p;if(u>0)if(h=a*c-o,f=a*o-c,p=r*u,h>=0)if(f>=-p)if(f<=p){let b=1/u;h*=b,f*=b,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else if(f<=-p)h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l;else if(f<=p)h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l;else h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l;else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(s)s.copy(mc).addScaledVector(Ra,f);return d}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;if(c<0)return null;if(o<0)return this.at(c,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return false;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return true;if(e.normal.dot(this.direction)*t<0)return true;return false}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l;if(u>=0)r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u;else r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u;if(i>a||r>s)return null;if(r>i||isNaN(i))i=r;if(a<s||isNaN(s))s=a;if(h>=0)o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h;else o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h;if(i>c||o>s)return null;if(o>i||i!==i)i=o;if(c<s||s!==s)s=c;if(s<0)return null;return this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,{x:c,y:l,z:u}=o,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,b=t.y-a.y,y=t.z-a.z,A=i.x-a.x,m=i.y-a.y,w=i.z-a.z,C=Math.abs(c),g=Math.abs(l),M=Math.abs(u),S,P,_,T,F,L,k,G,B,V,te,Y;if(C>=g&&C>=M)if(_=c,L=h,B=p,Y=A,c>=0)S=l,P=u,T=f,F=d,k=b,G=y,V=m,te=w;else S=u,P=l,T=d,F=f,k=y,G=b,V=w,te=m;else if(g>=M)if(_=l,L=f,B=b,Y=m,l>=0)S=u,P=c,T=d,F=h,k=y,G=p,V=w,te=A;else S=c,P=u,T=h,F=d,k=p,G=y,V=A,te=w;else if(_=u,L=d,B=y,Y=w,u>=0)S=c,P=l,T=h,F=f,k=p,G=b,V=A,te=m;else S=l,P=c,T=f,F=h,k=b,G=p,V=m,te=A;if(_===0)return null;let q=S/_,W=P/_,U=1/_,Z=T-q*L,be=F-W*L,Te=k-q*B,ft=G-W*B,Qe=V-q*Y,Q=te-W*Y,ge=Qe*ft-Q*Te,fe=Z*Q-be*Qe,Ye=Te*be-ft*Z;if(s){if(ge<0||fe<0||Ye<0)return null}else if((ge<0||fe<0||Ye<0)&&(ge>0||fe>0||Ye>0))return null;let et=ge+fe+Ye;if(et===0)return null;let Ne=U*(ge*L+fe*B+Ye*Y);if(et>0?Ne<0:Ne>0)return null;return this.at(Ne/et,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends Nn{constructor(e){super();this.isMeshBasicMaterial=true,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=false,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=true,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var ju=new dt,fs=new cr,Pa=new on,qu=new I,Ia=new I,Da=new I,La=new I,Ac=new I,Fa=new I,Xu=new I,Na=new I;class Ft extends jt{constructor(e=new ct,t=new Vn){super();this.isMesh=true,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=undefined,this.morphTargetInfluences=undefined,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==undefined)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==undefined)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==undefined){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];if(u===0)continue;if(Ac.fromBufferAttribute(h,e),a)Fa.addScaledVector(Ac,u);else Fa.addScaledVector(Ac.sub(t),u)}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s===undefined)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),fs.copy(e.ray).recast(e.near),Pa.containsPoint(fs.origin)===false){if(fs.intersectSphere(Pa,qu)===null)return;if(fs.origin.distanceToSquared(qu)>(e.far-e.near)**2)return}if(ju.copy(r).invert(),fs.copy(e.ray).applyMatrix4(ju),i.boundingBox!==null){if(fs.intersectsBox(i.boundingBox)===false)return}this._computeIntersections(e,t,fs)}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,{groups:f,drawRange:d}=r;if(o!==null)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let y=f[p],A=a[y.materialIndex],m=Math.max(y.start,d.start),w=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let C=m,g=w;C<g;C+=3){let M=o.getX(C),S=o.getX(C+1),P=o.getX(C+2);if(s=Ua(this,A,e,i,l,u,h,M,S,P),s)s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let y=p,A=b;y<A;y+=3){let m=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);if(s=Ua(this,a,e,i,l,u,h,m,w,C),s)s.faceIndex=Math.floor(y/3),t.push(s)}}else if(c!==undefined)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let y=f[p],A=a[y.materialIndex],m=Math.max(y.start,d.start),w=Math.min(c.count,Math.min(y.start+y.count,d.start+d.count));for(let C=m,g=w;C<g;C+=3){let M=C,S=C+1,P=C+2;if(s=Ua(this,A,e,i,l,u,h,M,S,P),s)s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s)}}else{let p=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let y=p,A=b;y<A;y+=3){let m=y,w=y+1,C=y+2;if(s=Ua(this,a,e,i,l,u,h,m,w,C),s)s.faceIndex=Math.floor(y/3),t.push(s)}}}}function s0(e,t,i,s,r,a,o,c){let l;if(t.side===1)l=s.intersectTriangle(o,a,r,true,c);else l=s.intersectTriangle(r,a,o,t.side===0,c);if(l===null)return null;Na.copy(c),Na.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(Na);if(u<i.near||u>i.far)return null;return{distance:u,point:Na.clone(),object:e}}function Ua(e,t,i,s,r,a,o,c,l,u){e.getVertexPosition(c,Ia),e.getVertexPosition(l,Da),e.getVertexPosition(u,La);let h=s0(e,t,i,s,Ia,Da,La,Xu);if(h){let f=new I;if(Dn.getBarycoord(Xu,Ia,Da,La,f),r)h.uv=Dn.getInterpolatedAttribute(r,c,l,u,f,new ze);if(a)h.uv1=Dn.getInterpolatedAttribute(a,c,l,u,f,new ze);if(o){if(h.normal=Dn.getInterpolatedAttribute(o,c,l,u,f,new I),h.normal.dot(s.direction)>0)h.normal.multiplyScalar(-1)}let d={a:c,b:l,c:u,normal:new I,materialIndex:0};Dn.getNormal(Ia,Da,La,d.normal),h.face=d,h.barycoord=f}return h}var Dr=new Gt,Ku=new Gt,Yu=new Gt,r0=new Gt,Ju=new dt,Oa=new I,gc=new on,Zu=new dt,bc=new cr;class yo extends Ft{constructor(e,t){super(e,t);this.isSkinnedMesh=true,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new En;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oa),this.boundingBox.expandByPoint(Oa)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new on;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oa),this.boundingSphere.expandByPoint(Oa)}copy(e,t){if(super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){let i=this.material,s=this.matrixWorld;if(i===undefined)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(gc.copy(this.boundingSphere),gc.applyMatrix4(s),e.ray.intersectsSphere(gc)===false)return;if(Zu.copy(s).invert(),bc.copy(e.ray).applyMatrix4(Zu),this.boundingBox!==null){if(bc.intersectsBox(this.boundingBox)===false)return}this._computeIntersections(e,t,bc)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===undefined)this.updateMatrixWorld(true),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Gt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;if(Ku.fromBufferAttribute(s.attributes.skinIndex,e),Yu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4)Dr.copy(t),t.set(0,0,0,0);else Dr.set(...t,1),t.set(0,0,0);Dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Yu.getComponent(r);if(a!==0){let o=Ku.getComponent(r);Ju.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(r0.copy(Dr).applyMatrix4(Ju),a)}}if(t.isVector4)t.w=Dr.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Zr extends jt{constructor(){super();this.isBone=true,this.type="Bone"}}class gi extends an{constructor(e=null,t=1,i=1,s,r,a,o,c,l=1003,u=1003,h,f){super(null,a,o,c,l,u,s,r,h,f);this.isDataTexture=true,this.image={data:e,width:t,height:i},this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1}}var $u=new dt,a0=new dt;class $r{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new dt;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:a0;$u.multiplyMatrices(o,t[r]),$u.toArray(i,r*16)}if(s!==null)s.needsUpdate=true}clone(){return new $r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new gi(t,e,e,1023,1015);return i.needsUpdate=true,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];if(a===undefined)tt("Skeleton: No bone found with UUID:",r),a=new Zr;this.bones.push(a),this.boneInverses.push(new dt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}}class Yi extends pt{constructor(e,t,i,s=1){super(e,t,i);this.isInstancedBufferAttribute=true,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=true,e}}var qs=new dt,Qu=new dt,Ba=[],eh=new En,o0=new dt,Lr=new Ft,Fr=new on;class Mo extends Ft{constructor(e,t,i){super(e,t);this.isInstancedMesh=true,this.instanceMatrix=new Yi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,o0)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new En;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),eh.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(eh)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new on;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Fr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Fr)}copy(e,t){if(super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();if(this.count=e.count,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material===undefined)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)===false)return;for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Qu.multiplyMatrices(i,qs),Lr.matrixWorld=Qu,Lr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let c=Ba[a];c.instanceId=r,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;if(this.morphTexture===null)this.morphTexture=new gi(new Float32Array(s*this.count),s,this.count,1028,1015);let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ps=new on,c0=new ze(0.5,0.5),ka=new I;class Qr{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2000,i=false){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],b=r[9],y=r[10],A=r[11],m=r[12],w=r[13],C=r[14],g=r[15];if(s[0].setComponents(l-a,d-u,A-p,g-m).normalize(),s[1].setComponents(l+a,d+u,A+p,g+m).normalize(),s[2].setComponents(l+o,d+h,A+b,g+w).normalize(),s[3].setComponents(l-o,d-h,A-b,g-w).normalize(),i)s[4].setComponents(c,f,y,C).normalize(),s[5].setComponents(l-c,d-f,A-y,g-C).normalize();else if(s[4].setComponents(l-c,d-f,A-y,g-C).normalize(),t===2000)s[5].setComponents(l+c,d+f,A+y,g+C).normalize();else if(t===2001)s[5].setComponents(c,f,y,C).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==undefined){if(e.boundingSphere===null)e.computeBoundingSphere();ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=c0.distanceTo(e.center);return ps.radius=0.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return false;return true}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return false}return true}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return false;return true}clone(){return new this.constructor().copy(this)}}class jn extends Nn{constructor(e){super();this.isLineBasicMaterial=true,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=true,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var $a=new I,Qa=new I,th=new dt,Nr=new cr,za=new on,vc=new I,nh=new I;class lr extends jt{constructor(e=new ct,t=new jn){super();this.isLine=true,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=undefined,this.morphTargetInfluences=undefined,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Qa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$a.distanceTo(Qa);e.setAttribute("lineDistance",new it(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===false)return;th.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=d,y=p-1;b<y;b+=l){let A=u.getX(b),m=u.getX(b+1),w=Ha(this,e,Nr,c,A,m,b);if(w)t.push(w)}if(this.isLineLoop){let b=u.getX(p-1),y=u.getX(d),A=Ha(this,e,Nr,c,b,y,p-1);if(A)t.push(A)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let b=d,y=p-1;b<y;b+=l){let A=Ha(this,e,Nr,c,b,b+1,b);if(A)t.push(A)}if(this.isLineLoop){let b=Ha(this,e,Nr,c,p-1,d,p-1);if(b)t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==undefined){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ha(e,t,i,s,r,a,o){let c=e.geometry.attributes.position;if($a.fromBufferAttribute(c,r),Qa.fromBufferAttribute(c,a),i.distanceSqToSegment($a,Qa,vc,nh)>s)return;vc.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(vc);if(u<t.near||u>t.far)return;return{distance:u,point:nh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ih=new I,sh=new I;class en extends lr{constructor(e,t){super(e,t);this.isLineSegments=true,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ih.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ih.distanceTo(sh);e.setAttribute("lineDistance",new it(i,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class So extends lr{constructor(e,t){super(e,t);this.isLineLoop=true,this.type="LineLoop"}}class ea extends Nn{constructor(e){super();this.isPointsMaterial=true,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=true,this.fog=true,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var rh=new dt,Ec=new cr,Ga=new on,Wa=new I;class Qi extends jt{constructor(e=new ct,t=new ea){super();this.isPoints=true,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=undefined,this.morphTargetInfluences=undefined,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===false)return;rh.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,b=d;p<b;p++){let y=l.getX(p);Wa.fromBufferAttribute(h,y),ah(Wa,y,c,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,b=d;p<b;p++)Wa.fromBufferAttribute(h,p),ah(Wa,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==undefined){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ah(e,t,i,s,r,a,o){let c=Ec.distanceSqToPoint(e);if(c<i){let l=new I;Ec.closestPointToPoint(e,l),l.applyMatrix4(s);let u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wo extends an{constructor(e=[],t=301,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u);this.isCubeTexture=true,this.flipY=false}get images(){return this.image}set images(e){this.image=e}}class Ms extends an{constructor(e,t,i=1014,s,r,a,o=1003,c=1003,l,u=1026,h=1){if(u!==1026&&u!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,i,l);this.isDepthTexture=true,this.flipY=false,this.generateMipmaps=false,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fl extends Ms{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,c,l=1026){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l);this.image=h,this.isCubeDepthTexture=true,this.isCubeTexture=true}get images(){return this.image}set images(e){this.image=e}}class Eo extends an{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=true}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bi extends ct{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function p(b,y,A,m,w,C,g,M,S,P,_){let T=C/S,F=g/P,L=C/2,k=g/2,G=M/2,B=S+1,V=P+1,te=0,Y=0,q=new I;for(let W=0;W<V;W++){let U=W*F-k;for(let Z=0;Z<B;Z++){let be=Z*T-L;q[b]=be*m,q[y]=U*w,q[A]=G,l.push(q.x,q.y,q.z),q[b]=0,q[y]=0,q[A]=M>0?1:-1,u.push(q.x,q.y,q.z),h.push(Z/S),h.push(1-W/P),te+=1}}for(let W=0;W<P;W++)for(let U=0;U<S;U++){let Z=f+U+B*W,be=f+U+B*(W+1),Te=f+(U+1)+B*(W+1),ft=f+(U+1)+B*W;c.push(Z,be,ft),c.push(be,Te,ft),Y+=6}o.addGroup(d,Y,_),d+=Y,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ss extends ct{constructor(e=1,t=32,i=0,s=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,u=new ze;a.push(0,0,0),o.push(0,0,1),c.push(0.5,0.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ur extends ct{constructor(e=1,t=1,i=1,s=32,r=1,a=false,o=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,b=[],y=i/2,A=0;if(m(),a===false){if(e>0)w(true);if(t>0)w(false)}this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function m(){let C=new I,g=new I,M=0,S=(t-e)/i;for(let P=0;P<=r;P++){let _=[],T=P/r,F=T*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,G=k*c+o,B=Math.sin(G),V=Math.cos(G);g.x=F*B,g.y=-T*i+y,g.z=F*V,h.push(g.x,g.y,g.z),C.set(B,S,V).normalize(),f.push(C.x,C.y,C.z),d.push(k,1-T),_.push(p++)}b.push(_)}for(let P=0;P<s;P++)for(let _=0;_<r;_++){let T=b[_][P],F=b[_+1][P],L=b[_+1][P+1],k=b[_][P+1];if(e>0||_!==0)u.push(T,F,k),M+=3;if(t>0||_!==r-1)u.push(F,L,k),M+=3}l.addGroup(A,M,0),A+=M}function w(C){let g=p,M=new ze,S=new I,P=0,_=C===true?e:t,T=C===true?1:-1;for(let L=1;L<=s;L++)h.push(0,y*T,0),f.push(0,T,0),d.push(0.5,0.5),p++;let F=p;for(let L=0;L<=s;L++){let G=L/s*c+o,B=Math.cos(G),V=Math.sin(G);S.x=_*V,S.y=y*T,S.z=_*B,h.push(S.x,S.y,S.z),f.push(0,T,0),M.x=B*0.5+0.5,M.y=V*0.5*T+0.5,d.push(M.x,M.y),p++}for(let L=0;L<s;L++){let k=g+L,G=F+L;if(C===true)u.push(G,G+1,k);else u.push(G+1,G,k);P+=3}l.addGroup(A,P,C===true?1:2),A+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hr extends ur{constructor(e=1,t=1,i=32,s=1,r=false,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var Va=new I,ja=new I,xc=new I,qa=new Dn;class dr extends ct{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Js*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=[,,,],f={},d=[];for(let p=0;p<c;p+=3){if(a)l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:b,b:y,c:A}=qa;if(b.fromBufferAttribute(o,l[0]),y.fromBufferAttribute(o,l[1]),A.fromBufferAttribute(o,l[2]),qa.getNormal(xc),h[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,h[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,h[2]=`${Math.round(A.x*s)},${Math.round(A.y*s)},${Math.round(A.z*s)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let m=0;m<3;m++){let w=(m+1)%3,C=h[m],g=h[w],M=qa[u[m]],S=qa[u[w]],P=`${C}_${g}`,_=`${g}_${C}`;if(_ in f&&f[_]){if(xc.dot(f[_].normal)<=r)d.push(M.x,M.y,M.z),d.push(S.x,S.y,S.z);f[_]=null}else if(!(P in f))f[P]={index0:l[m],index1:l[w],normal:xc.clone()}}}for(let p in f)if(f[p]){let{index0:b,index1:y}=f[p];Va.fromBufferAttribute(o,b),ja.fromBufferAttribute(o,y),d.push(Va.x,Va.y,Va.z),d.push(ja.x,ja.y,ja.z)}this.setAttribute("position",new it(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=false,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=false;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=true,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;if(t)a=t;else a=e*i[r-1];let o=0,c=r-1,l;while(o<=c)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-0.0001,r=e+0.0001;if(s<0)s=0;if(r>1)r=1;let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ze:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=false){let i=new I,s=[],r=[],a=[],o=new I,c=new dt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);if(u<=l)l=u,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===true){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));if(d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0)d=-d;for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ta extends qn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=false,c=0){super();this.isEllipseCurve=true,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ze){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;while(r<0)r+=s;while(r>s)r-=s;if(r<Number.EPSILON)if(a)r=0;else r=s;if(this.aClockwise===true&&!a)if(r===s)r=-s;else r=r-s;let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nl extends ta{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a);this.isArcCurve=true,this.type="ArcCurve"}}function Ul(){let e=0,t=0,i=0,s=0;function r(a,o,c,l){e=a,t=c,i=-3*a+3*o-2*c-l,s=2*a-2*o+c+l}return{initCatmullRom:function(a,o,c,l,u){r(o,c,u*(c-a),u*(l-o))},initNonuniformCatmullRom:function(a,o,c,l,u,h,f){let d=(o-a)/u-(c-a)/(u+h)+(c-o)/h,p=(c-o)/h-(l-o)/(h+f)+(l-c)/f;d*=h,p*=h,r(o,c,d,p)},calc:function(a){let o=a*a,c=o*a;return e+t*a+i*o+s*c}}}var oh=new I,ch=new I,_c=new Ul,yc=new Ul,Mc=new Ul;class Ol extends qn{constructor(e=[],t=false,i="centripetal",s=0.5){super();this.isCatmullRomCurve3=true,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(c===0&&o===r-1)o=r-2,c=1;let l,u;if(this.closed||o>0)l=s[(o-1)%r];else ch.subVectors(s[0],s[1]).add(s[0]),l=ch;let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r)u=s[(o+2)%r];else oh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=oh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(h),d),b=Math.pow(h.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d);if(b<0.0001)b=1;if(p<0.0001)p=b;if(y<0.0001)y=b;_c.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,b,y),yc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,b,y),Mc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,b,y)}else if(this.curveType==="catmullrom")_c.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),yc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Mc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension);return i.set(_c.calc(c),yc.calc(c),Mc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lh(e,t,i,s,r){let a=(s-t)*0.5,o=(r-i)*0.5,c=e*e,l=e*c;return(2*i-2*s+a+o)*l+(-3*i+3*s-2*a-o)*c+a*e+i}function l0(e,t){let i=1-e;return i*i*t}function u0(e,t){return 2*(1-e)*e*t}function h0(e,t){return e*e*t}function Br(e,t,i,s){return l0(e,t)+u0(e,i)+h0(e,s)}function d0(e,t){let i=1-e;return i*i*i*t}function f0(e,t){let i=1-e;return 3*i*i*e*t}function p0(e,t){return 3*(1-e)*e*e*t}function m0(e,t){return e*e*e*t}function kr(e,t,i,s,r){return d0(e,t)+f0(e,i)+p0(e,s)+m0(e,r)}class To extends qn{constructor(e=new ze,t=new ze,i=new ze,s=new ze){super();this.isCubicBezierCurve=true,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ze){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bl extends qn{constructor(e=new I,t=new I,i=new I,s=new I){super();this.isCubicBezierCurve3=true,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y),kr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ro extends qn{constructor(e=new ze,t=new ze){super();this.isLineCurve=true,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kl extends qn{constructor(e=new I,t=new I){super();this.isLineCurve3=true,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Co extends qn{constructor(e=new ze,t=new ze,i=new ze){super();this.isQuadraticBezierCurve=true,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zl extends qn{constructor(e=new I,t=new I,i=new I){super();this.isQuadraticBezierCurve3=true,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y),Br(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Po extends qn{constructor(e=[]){super();this.isSplineCurve=true,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(lh(o,c.x,l.x,u.x,h.x),lh(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ze().fromArray(s))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:Nl,CatmullRomCurve3:Ol,CubicBezierCurve:To,CubicBezierCurve3:Bl,EllipseCurve:ta,LineCurve:Ro,LineCurve3:kl,QuadraticBezierCurve:Co,QuadraticBezierCurve3:zl,SplineCurve:Po});class Hl extends qn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=false}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===true?"LineCurve":"LineCurve3";this.curves.push(new uh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;while(r<s.length){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=true,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];if(i&&i.equals(u))continue;t.push(u),i=u}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new uh[s.type]().fromJSON(s))}return this}}class eo extends Hl{constructor(e){super();if(this.type="Path",this.currentPoint=new ze,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ro(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Co(this.currentPoint.clone(),new ze(e,t),new ze(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new To(this.currentPoint.clone(),new ze(e,t),new ze(i,s),new ze(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Po(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new ta(e,t,i,s,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class na extends eo{constructor(e){super(e);this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new eo().fromJSON(s))}return this}}function A0(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=Ad(e,0,r,i,true),o=[];if(!a||a.next===a.prev)return o;let c,l,u;if(s)a=_0(e,t,a,i);if(e.length>80*i){c=e[0],l=e[1];let h=c,f=l;for(let d=i;d<r;d+=i){let p=e[d],b=e[d+1];if(p<c)c=p;if(b<l)l=b;if(p>h)h=p;if(b>f)f=b}u=Math.max(h-c,f-l),u=u!==0?32767/u:0}return Hr(a,o,i,c,l,u,0),o}function Ad(e,t,i,s,r){let a;if(r===D0(e,t,i,s)>0)for(let o=t;o<i;o+=s)a=hh(o/s|0,e[o],e[o+1],a);else for(let o=i-s;o>=t;o-=s)a=hh(o/s|0,e[o],e[o+1],a);if(a&&er(a,a.next))Wr(a),a=a.next;return a}function gs(e,t){if(!e)return e;if(!t)t=e;let i=e,s;do if(s=false,!i.steiner&&(er(i,i.next)||Jt(i.prev,i,i.next)===0)){if(Wr(i),i=t=i.prev,i===i.next)break;s=true}else i=i.next;while(s||i!==t);return t}function Hr(e,t,i,s,r,a,o){if(!e)return;if(!o&&a)E0(e,s,r,a);let c=e;while(e.prev!==e.next){let l=e.prev,u=e.next;if(a?b0(e,s,r,a):g0(e)){t.push(l.i,e.i,u.i),Wr(e),e=u.next,c=u.next;continue}if(e=u,e===c){if(!o)Hr(gs(e),t,i,s,r,a,1);else if(o===1)e=v0(gs(e),t),Hr(e,t,i,s,r,a,2);else if(o===2)x0(e,t,i,s,r,a);break}}}function g0(e){let t=e.prev,i=e,s=e.next;if(Jt(t,i,s)>=0)return false;let r=t.x,a=i.x,o=s.x,c=t.y,l=i.y,u=s.y,h=Math.min(r,a,o),f=Math.min(c,l,u),d=Math.max(r,a,o),p=Math.max(c,l,u),b=s.next;while(b!==t){if(b.x>=h&&b.x<=d&&b.y>=f&&b.y<=p&&Ur(r,c,a,l,o,u,b.x,b.y)&&Jt(b.prev,b,b.next)>=0)return false;b=b.next}return true}function b0(e,t,i,s){let r=e.prev,a=e,o=e.next;if(Jt(r,a,o)>=0)return false;let c=r.x,l=a.x,u=o.x,h=r.y,f=a.y,d=o.y,p=Math.min(c,l,u),b=Math.min(h,f,d),y=Math.max(c,l,u),A=Math.max(h,f,d),m=Tc(p,b,t,i,s),w=Tc(y,A,t,i,s),{prevZ:C,nextZ:g}=e;while(C&&C.z>=m&&g&&g.z<=w){if(C.x>=p&&C.x<=y&&C.y>=b&&C.y<=A&&C!==r&&C!==o&&Ur(c,h,l,f,u,d,C.x,C.y)&&Jt(C.prev,C,C.next)>=0)return false;if(C=C.prevZ,g.x>=p&&g.x<=y&&g.y>=b&&g.y<=A&&g!==r&&g!==o&&Ur(c,h,l,f,u,d,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return false;g=g.nextZ}while(C&&C.z>=m){if(C.x>=p&&C.x<=y&&C.y>=b&&C.y<=A&&C!==r&&C!==o&&Ur(c,h,l,f,u,d,C.x,C.y)&&Jt(C.prev,C,C.next)>=0)return false;C=C.prevZ}while(g&&g.z<=w){if(g.x>=p&&g.x<=y&&g.y>=b&&g.y<=A&&g!==r&&g!==o&&Ur(c,h,l,f,u,d,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return false;g=g.nextZ}return true}function v0(e,t){let i=e;do{let s=i.prev,r=i.next.next;if(!er(s,r)&&bd(s,i,i.next,r)&&Gr(s,r)&&Gr(r,s))t.push(s.i,i.i,r.i),Wr(i),Wr(i.next),i=e=r;i=i.next}while(i!==e);return gs(i)}function x0(e,t,i,s,r,a){let o=e;do{let c=o.next.next;while(c!==o.prev){if(o.i!==c.i&&C0(o,c)){let l=vd(o,c);o=gs(o,o.next),l=gs(l,l.next),Hr(o,t,i,s,r,a,0),Hr(l,t,i,s,r,a,0);return}c=c.next}o=o.next}while(o!==e)}function _0(e,t,i,s){let r=[];for(let a=0,o=t.length;a<o;a++){let c=t[a]*s,l=a<o-1?t[a+1]*s:e.length,u=Ad(e,c,l,s,false);if(u===u.next)u.steiner=true;r.push(R0(u))}r.sort(y0);for(let a=0;a<r.length;a++)i=M0(r[a],i);return i}function y0(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}}return i}function M0(e,t){let i=S0(e,t);if(!i)return t;let s=vd(i,e);return gs(s,s.next),gs(i,i.next)}function S0(e,t){let i=t,{x:s,y:r}=e,a=-1/0,o;if(er(e,i))return i;do{if(er(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=s&&f>a){if(a=f,o=i.x<i.next.x?i:i.next,f===s)return o}}i=i.next}while(i!==t);if(!o)return null;let c=o,l=o.x,u=o.y,h=1/0;i=o;do{if(s>=i.x&&i.x>=l&&s!==i.x&&gd(r<u?s:a,r,l,u,r<u?a:s,r,i.x,i.y)){let f=Math.abs(r-i.y)/(s-i.x);if(Gr(i,e)&&(f<h||f===h&&(i.x>o.x||i.x===o.x&&w0(o,i))))o=i,h=f}i=i.next}while(i!==c);return o}function w0(e,t){return Jt(e.prev,e,t.prev)<0&&Jt(t.next,e,e.next)<0}function E0(e,t,i,s){let r=e;do{if(r.z===0)r.z=Tc(r.x,r.y,t,i,s);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,T0(r)}function T0(e){let t,i=1;do{let s=e,r;e=null;let a=null;t=0;while(s){t++;let o=s,c=0;for(let u=0;u<i;u++)if(c++,o=o.nextZ,!o)break;let l=i;while(c>0||l>0&&o){if(c!==0&&(l===0||!o||s.z<=o.z))r=s,s=s.nextZ,c--;else r=o,o=o.nextZ,l--;if(a)a.nextZ=r;else e=r;r.prevZ=a,a=r}s=o}a.nextZ=null,i*=2}while(t>1);return e}function Tc(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function R0(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function gd(e,t,i,s,r,a,o,c){return(r-o)*(t-c)>=(e-o)*(a-c)&&(e-o)*(s-c)>=(i-o)*(t-c)&&(i-o)*(a-c)>=(r-o)*(s-c)}function Ur(e,t,i,s,r,a,o,c){return!(e===o&&t===c)&&gd(e,t,i,s,r,a,o,c)}function C0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!P0(e,t)&&(Gr(e,t)&&Gr(t,e)&&I0(e,t)&&(Jt(e.prev,e,t.prev)||Jt(e,t.prev,t))||er(e,t)&&Jt(e.prev,e,e.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function er(e,t){return e.x===t.x&&e.y===t.y}function bd(e,t,i,s){let r=Ka(Jt(e,t,i)),a=Ka(Jt(e,t,s)),o=Ka(Jt(i,s,e)),c=Ka(Jt(i,s,t));if(r!==a&&o!==c)return true;if(r===0&&Xa(e,i,t))return true;if(a===0&&Xa(e,s,t))return true;if(o===0&&Xa(i,e,s))return true;if(c===0&&Xa(i,t,s))return true;return false}function Xa(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Ka(e){return e>0?1:e<0?-1:0}function P0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&bd(i,i.next,e,t))return true;i=i.next}while(i!==e);return false}function Gr(e,t){return Jt(e.prev,e,e.next)<0?Jt(e,t,e.next)>=0&&Jt(e,e.prev,t)>=0:Jt(e,t,e.prev)<0||Jt(e,e.next,t)<0}function I0(e,t){let i=e,s=false,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do{if(i.y>a!==i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x)s=!s;i=i.next}while(i!==e);return s}function vd(e,t){let i=Rc(e.i,e.x,e.y),s=Rc(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function hh(e,t,i,s){let r=Rc(e,t,i);if(!s)r.prev=r,r.next=r;else r.next=s.next,r.prev=s,s.next.prev=r,s.next=r;return r}function Wr(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Rc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:false}}function D0(e,t,i,s){let r=0;for(let a=t,o=i-s;a<i;a+=s)r+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return r}class xd{static triangulate(e,t,i=2){return A0(e,t,i)}}class li{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*0.5}static isClockWise(e){return li.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];dh(e),fh(i,e);let a=e.length;t.forEach(dh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,fh(i,t[c]);let o=xd.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function dh(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function fh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Xn extends ct{constructor(e=1,t=1,i=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],p=[],b=[],y=[];for(let A=0;A<u;A++){let m=A*f-a;for(let w=0;w<l;w++){let C=w*h-r;p.push(C,-m,0),b.push(0,0,1),y.push(w/o),y.push(1-A/c)}}for(let A=0;A<c;A++)for(let m=0;m<o;m++){let w=m+l*A,C=m+l*(A+1),g=m+1+l*(A+1),M=m+1+l*A;d.push(w,C,M),d.push(C,g,M)}this.setIndex(d),this.setAttribute("position",new it(p,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ia extends ct{constructor(e=new na([new ze(0,0.5),new ze(-0.5,-0.5),new ze(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===false)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(a,2));function l(u){let h=s.length/3,f=u.extractPoints(t),{shape:d,holes:p}=f;if(li.isClockWise(d)===false)d=d.reverse();for(let y=0,A=p.length;y<A;y++){let m=p[y];if(li.isClockWise(m)===true)p[y]=m.reverse()}let b=li.triangulateShape(d,p);for(let y=0,A=p.length;y<A;y++){let m=p[y];d=d.concat(m)}for(let y=0,A=d.length;y<A;y++){let m=d[y];s.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let y=0,A=b.length;y<A;y++){let m=b[y],w=m[0]+h,C=m[1]+h,g=m[2]+h;i.push(w,C,g),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return L0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new ia(i,e.curveSegments)}}function L0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class fr extends ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new I,f=new I,d=[],p=[],b=[],y=[];for(let A=0;A<=i;A++){let m=[],w=A/i,C=a+w*o,g=e*Math.cos(C),M=Math.sqrt(e*e-g*g),S=0;if(A===0&&a===0)S=0.5/t;else if(A===i&&c===Math.PI)S=-0.5/t;for(let P=0;P<=t;P++){let _=P/t,T=s+_*r;h.x=-M*Math.cos(T),h.y=g,h.z=M*Math.sin(T),p.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),y.push(_+S,1-w),m.push(l++)}u.push(m)}for(let A=0;A<i;A++)for(let m=0;m<t;m++){let w=u[A][m+1],C=u[A][m],g=u[A+1][m],M=u[A+1][m+1];if(A!==0||a>0)d.push(w,C,M);if(A!==i-1||c<Math.PI)d.push(C,g,M)}this.setIndex(d),this.setAttribute("position",new it(p,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ws(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(ph(r))if(r.isRenderTargetTexture)tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null;else t[i][s]=r.clone();else if(Array.isArray(r))if(ph(r[0])){let a=[];for(let o=0,c=r.length;o<c;o++)a[o]=r[o].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function yn(e){let t={};for(let i=0;i<e.length;i++){let s=ws(e[i]);for(let r in s)t[r]=s[r]}return t}function ph(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function F0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Gl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===true)return t.texture.colorSpace;return Tt.workingColorSpace}var _d={clone:ws,merge:yn},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends Nn{constructor(e){super();if(this.isShaderMaterial=true,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=false,this.wireframeLinewidth=1,this.fog=false,this.lights=false,this.clipping=false,this.forceSinglePass=true,this.extensions={clipCullDistance:false,multiDraw:false},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=undefined,this.uniformsNeedUpdate=false,this.glslVersion=null,e!==undefined)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;if(a&&a.isTexture)t.uniforms[s]={type:"t",value:a.toJSON(e).uuid};else if(a&&a.isColor)t.uniforms[s]={type:"c",value:a.getHex()};else if(a&&a.isVector2)t.uniforms[s]={type:"v2",value:a.toArray()};else if(a&&a.isVector3)t.uniforms[s]={type:"v3",value:a.toArray()};else if(a&&a.isVector4)t.uniforms[s]={type:"v4",value:a.toArray()};else if(a&&a.isMatrix3)t.uniforms[s]={type:"m3",value:a.toArray()};else if(a&&a.isMatrix4)t.uniforms[s]={type:"m4",value:a.toArray()};else t.uniforms[s]={value:a}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)if(this.extensions[s]===true)i[s]=true;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==undefined)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(s.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==undefined)this.defines=e.defines;if(e.vertexShader!==undefined)this.vertexShader=e.vertexShader;if(e.fragmentShader!==undefined)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==undefined)this.glslVersion=e.glslVersion;if(e.extensions!==undefined)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==undefined)this.lights=e.lights;if(e.clipping!==undefined)this.clipping=e.clipping;return this}}class Wl extends wt{constructor(e){super(e);this.isRawShaderMaterial=true,this.type="RawShaderMaterial"}}class es extends Nn{constructor(e){super();this.isMeshStandardMaterial=true,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=false,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=false,this.fog=true,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends es{constructor(e){super();this.isMeshPhysicalMaterial=true,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vl extends Nn{constructor(e){super();this.isMeshDepthMaterial=true,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=false,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jl extends Nn{constructor(e){super();this.isMeshDistanceMaterial=true,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ki(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Za(e){return e!==undefined&&e.inTangents!==undefined&&e.outTangents!==undefined}function O0(e){function t(r,a){return e[r]-e[a]}let i=e.length,s=Array(i);for(let r=0;r!==i;++r)s[r]=r;return s.sort(t),s}function mh(e,t,i){let s=e.length,r=new e.constructor(s);for(let a=0,o=0;o!==s;++a){let c=i[a]*t;for(let l=0;l!==t;++l)r[o++]=e[c+l]}return r}function B0(e,t,i,s){let r=1,a=e[0];while(a!==undefined&&a[s]===undefined)a=e[r++];if(a===undefined)return;let o=a[s];if(o===undefined)return;if(Array.isArray(o))do{if(o=a[s],o!==undefined)t.push(a.time),i.push(...o);a=e[r++]}while(a!==undefined);else if(o.toArray!==undefined)do{if(o=a[s],o!==undefined)t.push(a.time),o.toArray(i,i.length);a=e[r++]}while(a!==undefined);else do{if(o=a[s],o!==undefined)t.push(a.time),i.push(o);a=e[r++]}while(a!==undefined)}class Fi{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==undefined?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===undefined){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let c=i-2;;){if(r===undefined)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}while(i<a){let o=i+a>>>1;if(e<t[o])a=o;else i=o+1}if(s=t[i],r=t[i-1],r===undefined)return this._cachedIndex=0,this.copySampleValue_(0);if(s===undefined)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class ql extends Fi{constructor(e,t,i,s){super(e,t,i,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===undefined)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-i;break;case 2402:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===undefined)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*i-t;break;case 2402:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*0.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),b=p*p,y=b*p,A=-f*y+2*f*b-f*p,m=(1+f)*y+(-1.5-2*f)*b+(-0.5+f)*p+1,w=(-1-d)*y+(1.5+d)*b+0.5*p,C=d*y-d*b;for(let g=0;g!==o;++g)r[g]=A*a[u+g]+m*a[l+g]+w*a[c+g]+C*a[h+g];return r}}class Xl extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Kl extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yl extends Fi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),b=1-p;for(let y=0;y!==o;++y)r[y]=a[l+y]*b+a[c+y]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let b=a[l+p],y=a[c+p],A=d*f+p*2,m=h[A],w=h[A+1],C=e*f+p*2,g=u[C],M=u[C+1],S=z0(i,t,m,g,s);r[p]=yd(S,b,w,M,y)}return r}}function yd(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function k0(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function z0(e,t,i,s,r){let a=(e-t)/(r-t);for(let o=0;o<8;o++){let c=yd(a,t,i,s,r)-e;if(Math.abs(c)<0.0000000001)break;let l=k0(a,t,i,s,r);if(Math.abs(l)<0.0000000001)break;a=Math.max(0,Math.min(1,a-c/l))}return a}class On{constructor(e,t,i,s){if(e===undefined)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===undefined||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let s=e.getInterpolation();if(s!==e.DefaultInterpolation)i.interpolation=s;if(Za(e.settings))i.settings={inTangents:Ki(e.settings.inTangents,Array),outTangents:Ki(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===undefined){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===undefined)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return tt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;if(Za(this.settings))Ah(this.settings.inTangents,e),Ah(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;while(r!==s&&i[r]<e)++r;while(a!==-1&&i[a]>t)--a;if(++a,r!==0||a!==s){if(r>=a)a=Math.max(a,1),r=a-1;let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=true,t=this.getValueSize();if(t-Math.floor(t)!==0)mt("KeyframeTrack: Invalid value size in track.",this),e=false;let i=this.times,s=this.values,r=i.length;if(r===0)mt("KeyframeTrack: Track is empty.",this),e=false;let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c==="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,o,c),e=false;break}if(a!==null&&a>c){mt("KeyframeTrack: Out of order keys.",this,o,c,a),e=false;break}a=c}if(s!==undefined){if(wp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){mt("KeyframeTrack: Value is not a valid number.",this,o,l),e=false;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=false,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(!s){let h=o*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let b=t[h+p];if(b!==t[f+p]||b!==t[d+p]){c=true;break}}}else c=true;if(c){if(o!==a){e[a]=e[o];let h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}if(a!==e.length)this.times=e.slice(0,a),this.values=t.slice(0,a*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),s=new this.constructor(this.name,e,t);if(s.createInterpolant=this.createInterpolant,Za(this.settings))s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return s}}function Ah(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=2301;class ts extends On{constructor(e,t,i){super(e,t,i)}}ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=2300;ts.prototype.InterpolantFactoryMethodLinear=undefined;ts.prototype.InterpolantFactoryMethodSmooth=undefined;class Io extends On{constructor(e,t,i,s){super(e,t,i,s)}}Io.prototype.ValueTypeName="color";class ns extends On{constructor(e,t,i,s){super(e,t,i,s)}}ns.prototype.ValueTypeName="number";class Jl extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Wn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class is extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=undefined;class ss extends On{constructor(e,t,i){super(e,t,i)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=2300;ss.prototype.InterpolantFactoryMethodLinear=undefined;ss.prototype.InterpolantFactoryMethodSmooth=undefined;class Es extends On{constructor(e,t,i,s){super(e,t,i,s)}}Es.prototype.ValueTypeName="vector";class Do{constructor(e="",t=-1,i=[],s=2500){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=zn(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(G0(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(On.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=O0(c);if(c=mh(c,1,u),l=mh(l,1,u),!s&&c[0]===0)c.push(r),l.push(l[0]);a.push(new ns(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];if(!f)s[h]=f=[];f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=true;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function H0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Io;case"quaternion":return is;case"bool":case"boolean":return ts;case"string":return ss}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function G0(e){if(e.type===undefined)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=H0(e.type);if(e.times===undefined){let s=[],r=[];B0(e.keys,s,r,"value"),e.times=s,e.values=r}let i;if(t.parse!==undefined)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(Za(e.settings))i.settings={inTangents:Ki(e.settings.inTangents,Float32Array),outTangents:Ki(e.settings.outTangents,Float32Array)};return i}var ci={enabled:false,files:{},add:function(e,t){if(this.enabled===false)return;if(gh(e))return;this.files[e]=t},get:function(e){if(this.enabled===false)return;if(gh(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function gh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return false}}class Zl{constructor(e,t,i){let s=this,r=false,a=0,o=0,c=undefined,l=[];this.onStart=undefined,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){if(o++,r===false){if(s.onStart!==undefined)s.onStart(u,a,o)}r=true},this.itemEnd=function(u){if(a++,s.onProgress!==undefined)s.onProgress(u,a,o);if(a===o){if(r=false,s.onLoad!==undefined)s.onLoad()}},this.itemError=function(u){if(s.onError!==undefined)s.onError(u)},this.resolveURL=function(u){if(u=u.normalize("NFC"),c)return c(u);return u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],p=l[h+1];if(d.global)d.lastIndex=0;if(d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Md=new Zl;class Ni{constructor(e){if(this.manager=e!==undefined?e:Md,this.crossOrigin="anonymous",this.withCredentials=false,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={};class Sd extends Error{constructor(e,t){super(e);this.response=t}}class sa extends Ni{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){if(e===undefined)e="";if(this.path!==undefined)e=this.path+e;e=this.manager.resolveURL(e);let r=ci.get(`file:${e}`);if(r!==undefined){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Ci[e]!==undefined){Ci[e].push({onLoad:t,onProgress:i,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)tt("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===undefined||l.body.getReader===undefined)return l;let u=Ci[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,b=0,y=new ReadableStream({start(A){m();function m(){h.read().then(({done:w,value:C})=>{if(w)A.close();else{b+=C.byteLength;let g=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:d});for(let M=0,S=u.length;M<S;M++){let P=u[M];if(P.onProgress)P.onProgress(g)}A.enqueue(C),m()}},(w)=>{A.error(w)})}}});return new Response(y)}else throw new Sd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((u)=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():undefined,d=new TextDecoder(f);return l.arrayBuffer().then((p)=>d.decode(p))}}}).then((l)=>{ci.add(`file:${e}`,l);let u=Ci[e];delete Ci[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];if(d.onLoad)d.onLoad(l)}}).catch((l)=>{let u=Ci[e];if(u===undefined)throw this.manager.itemError(e),l;delete Ci[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];if(d.onError)d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Xs=new WeakMap;class $l extends Ni{constructor(e){super(e)}load(e,t,i,s){if(this.path!==undefined)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=ci.get(`image:${e}`);if(a!==undefined){if(a.complete===true)r.manager.itemStart(e),setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);else{let h=Xs.get(a);if(h===undefined)h=[],Xs.set(a,h);h.push({onLoad:t,onError:s})}return a}let o=$s("img");function c(){if(u(),t)t(this);let h=Xs.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];if(d.onLoad)d.onLoad(this)}Xs.delete(this),r.manager.itemEnd(e)}function l(h){if(u(),s)s(h);ci.remove(`image:${e}`);let f=Xs.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];if(p.onError)p.onError(h)}Xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,false),o.removeEventListener("error",l,false)}if(o.addEventListener("load",c,false),o.addEventListener("error",l,false),e.slice(0,5)!=="data:"){if(this.crossOrigin!==undefined)o.crossOrigin=this.crossOrigin}return ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ui extends Ni{constructor(e){super(e)}load(e,t,i,s){let r=new an,a=new $l(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){if(r.image=o,r.needsUpdate=true,t!==undefined)t(r)},i,s),r}}class pr extends jt{constructor(e,t=1){super();this.isLight=true,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Lo extends pr{constructor(e,t,i){super(e,i);this.isHemisphereLight=true,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Sc=new dt,bh=new I,vh=new I;class ra{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=true,this.needsUpdate=false,this._frustum=new Qr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;if(e.coordinateSystem===2001||e.reversedDepth)t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*a,0,0,0.5*a+c,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(false).object,delete e.camera.matrix,e}}var Ya=new I,Ja=new Wn,ai=new I;class Fo extends jt{constructor(){super();this.isCamera=true,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=2000,this._reversedDepth=false}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Ja,ai),ai.x===1&&ai.y===1&&ai.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ya,Ja,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=false){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ya,Ja,ai),ai.x===1&&ai.y===1&&ai.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ya,Ja,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Xi=new I,xh=new ze,_h=new ze;class hn extends Fo{constructor(e=50,t=1,i=0.1,s=2000){super();this.isPerspectiveCamera=true,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Js*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,_h),t.subVectors(_h,xh)}setViewOffset(e,t,i,s,r,a){if(this.aspect=e/t,this.view===null)this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=true,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=false;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*0.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-0.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:c,fullHeight:l}=a;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wd extends ra{constructor(){super(new hn(50,1,0.5,500));this.isSpotLightShadow=true,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||s!==t.aspect||r!==t.far)t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class No extends pr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t);this.isSpotLight=true,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Ed extends ra{constructor(){super(new hn(90,1,0.5,500));this.isPointLightShadow=true}}class mr extends pr{constructor(e,t,i=0,s=2){super(e,t);this.isPointLight=true,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ed}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ts extends Fo{constructor(e=-1,t=1,i=1,s=-1,r=0.1,a=2000){super();this.isOrthographicCamera=true,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){if(this.view===null)this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=true,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=false;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Td extends ra{constructor(){super(new Ts(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=true}}class Rs extends pr{constructor(e,t){super(e,t);this.isDirectionalLight=true,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rs{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var wc=new WeakMap;class Uo extends Ni{constructor(e){super(e);if(this.isImageBitmapLoader=true,typeof createImageBitmap>"u")tt("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")tt("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){if(e===undefined)e="";if(this.path!==undefined)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=ci.get(`image-bitmap:${e}`);if(a!==undefined){if(r.manager.itemStart(e),a.then){a.then((l)=>{if(wc.has(a)===true){if(s)s(wc.get(a));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(ci.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(s)s(l);wc.set(c,l),ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Ks=-90,Ys=1;class Ql extends jt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Ks,Ys,e,t);s.layers=this.layers,this.add(s);let r=new hn(Ks,Ys,e,t);r.layers=this.layers,this.add(r);let a=new hn(Ks,Ys,e,t);a.layers=this.layers,this.add(a);let o=new hn(Ks,Ys,e,t);o.layers=this.layers,this.add(o);let c=new hn(Ks,Ys,e,t);c.layers=this.layers,this.add(c);let l=new hn(Ks,Ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===2000)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=false;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=false;let y=false;if(e.isWebGLRenderer===true)y=e.state.buffers.depth.getReversed();else y=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,s),y&&e.autoClear===false)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,s),y&&e.autoClear===false)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,2,s),y&&e.autoClear===false)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,s),y&&e.autoClear===false)e.clearDepth();if(e.render(t,c),e.setRenderTarget(i,4,s),y&&e.autoClear===false)e.clearDepth();if(e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),y&&e.autoClear===false)e.clearDepth();e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=true}}class eu extends hn{constructor(e=[]){super();this.isArrayCamera=true,this.isMultiViewCamera=false,this.cameras=e}}var tu="\\[\\]\\.:\\/",W0=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",V0="[^"+tu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",nu),q0=/(WCOD+)?/.source.replace("WCOD",V0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Y0=new RegExp("^"+j0+q0+X0+K0+"$"),J0=["material","materials","bones","map"];class Rd{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];if(s!==undefined)s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class kt{constructor(e,t,i){this.path=t,this.parsedPath=i||kt.parseTrackName(t),this.node=kt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new kt(e,t,i);else return new kt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==undefined&&s!==-1){let r=i.nodeName.substring(s+1);if(J0.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,s),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===undefined||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==undefined)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=true}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=true}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=true}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=true}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=true}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=true}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=true}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=true}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:s,propertyIndex:r}=t;if(!e)e=kt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===undefined){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==undefined){if(e[l]===undefined){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===undefined){let l=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===true)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===true)o=this.Versioning.MatrixWorldNeedsUpdate;let c=this.BindingType.Direct;if(r!==undefined){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==undefined)r=e.morphTargetDictionary[r]}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else if(a.fromArray!==undefined&&a.toArray!==undefined)c=this.BindingType.HasFromToArray,this.resolvedProperty=a;else if(Array.isArray(a))c=this.BindingType.EntireArray,this.resolvedProperty=a;else this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=Rd;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v4=new Float32Array(1);class iu{constructor(e,t,i,s){if(this.elements=[1,0,0,1],e!==undefined)this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}(()=>{iu.prototype.isMatrix2=true})();function su(e,t,i,s){let r=Z0(s);switch(i){case 1021:return e*t;case 1028:return e*t/r.components*r.byteLength;case 1029:return e*t/r.components*r.byteLength;case 1030:return e*t*2/r.components*r.byteLength;case 1031:return e*t*2/r.components*r.byteLength;case 1022:return e*t*3/r.components*r.byteLength;case 1023:return e*t*4/r.components*r.byteLength;case 1033:return e*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Z0(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)tt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Jd(){let e=null,t=false,i=null,s=null;function r(a,o){s=e.requestAnimationFrame(r),i(a,o)}return{start:function(){if(t===true)return;if(i===null)return;if(e===null)return;s=e.requestAnimationFrame(r),t=true},stop:function(){if(e!==null)e.cancelAnimationFrame(s);t=false},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function $0(e){let t=new WeakMap;function i(c,l){let{array:u,usage:h}=c,f=u.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,u,h),c.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=e.HALF_FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,l,u){let{array:h,updateRanges:f}=l;if(e.bindBuffer(u,c),f.length===0)e.bufferSubData(u,0,h);else{f.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<f.length;p++){let b=f[d],y=f[p];if(y.start<=b.start+b.count+1)b.count=Math.max(b.count,y.start+y.count-b.start);else++d,f[d]=y}f.length=d+1;for(let p=0,b=f.length;p<b;p++){let y=f[p];e.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){if(c.isInterleavedBufferAttribute)c=c.data;return t.get(c)}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;let l=t.get(c);if(l)e.deleteBuffer(l.buffer),t.delete(c)}function o(c,l){if(c.isInterleavedBufferAttribute)c=c.data;if(c.isGLBufferAttribute){let h=t.get(c);if(!h||h.version<c.version)t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===undefined)t.set(c,i(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:r,remove:a,update:o}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
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
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y1=`#define PI 3.141592653589793
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S1=`vec3 transformedNormal = objectNormal;
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
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j1=`#ifdef USE_ENVMAP
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
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
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
#endif`,Z1=`uniform sampler2D dfgLUT;
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
}`,$1=`
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var $m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e2=`uniform sampler2D t2D;
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,o2=`#define DISTANCE
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
}`,c2=`#define DISTANCE
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`uniform float scale;
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
}`,d2=`uniform vec3 diffuse;
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
}`,f2=`#include <common>
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#define LAMBERT
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
}`,A2=`#define LAMBERT
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
}`,g2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,v2=`#define NORMAL
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
}`,x2=`#define NORMAL
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
}`,_2=`#define PHONG
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
}`,y2=`#define PHONG
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
}`,M2=`#define STANDARD
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
}`,S2=`#define STANDARD
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
}`,w2=`#define TOON
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
}`,E2=`#define TOON
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
}`,T2=`uniform float size;
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
}`,R2=`uniform vec3 diffuse;
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
}`,C2=`#include <common>
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
}`,P2=`uniform vec3 color;
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
}`,I2=`uniform float rotation;
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
}`,D2=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Q0,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:s1,aomap_fragment:r1,aomap_pars_fragment:a1,batching_pars_vertex:o1,batching_vertex:c1,begin_vertex:l1,beginnormal_vertex:u1,bsdfs:h1,iridescence_fragment:d1,bumpmap_pars_fragment:f1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:g1,color_fragment:b1,color_pars_fragment:v1,color_pars_vertex:x1,color_vertex:_1,common:y1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:S1,displacementmap_pars_vertex:w1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:R1,colorspace_fragment:C1,colorspace_pars_fragment:P1,envmap_fragment:I1,envmap_common_pars_fragment:D1,envmap_pars_fragment:L1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:j1,envmap_vertex:N1,fog_vertex:U1,fog_pars_vertex:O1,fog_fragment:B1,fog_pars_fragment:k1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:V1,lights_toon_fragment:q1,lights_toon_pars_fragment:X1,lights_phong_fragment:K1,lights_phong_pars_fragment:Y1,lights_physical_fragment:J1,lights_physical_pars_fragment:Z1,lights_fragment_begin:$1,lights_fragment_maps:Q1,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:cm,map_particle_pars_fragment:lm,metalnessmap_fragment:um,metalnessmap_pars_fragment:hm,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:Am,normal_fragment_begin:gm,normal_fragment_maps:bm,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Um,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:km,skinning_pars_vertex:zm,skinning_vertex:Hm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Vm,tonemapping_fragment:jm,tonemapping_pars_fragment:qm,transmission_fragment:Xm,transmission_pars_fragment:Km,uv_pars_fragment:Ym,uv_pars_vertex:Jm,uv_vertex:Zm,worldpos_vertex:$m,background_vert:Qm,background_frag:e2,backgroundCube_vert:t2,backgroundCube_frag:n2,cube_vert:i2,cube_frag:s2,depth_vert:r2,depth_frag:a2,distance_vert:o2,distance_frag:c2,equirect_vert:l2,equirect_frag:u2,linedashed_vert:h2,linedashed_frag:d2,meshbasic_vert:f2,meshbasic_frag:p2,meshlambert_vert:m2,meshlambert_frag:A2,meshmatcap_vert:g2,meshmatcap_frag:b2,meshnormal_vert:v2,meshnormal_frag:x2,meshphong_vert:_2,meshphong_frag:y2,meshphysical_vert:M2,meshphysical_frag:S2,meshtoon_vert:w2,meshtoon_frag:E2,points_vert:T2,points_frag:R2,shadow_vert:C2,shadow_frag:P2,sprite_vert:I2,sprite_frag:D2},Ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},xi={basic:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:yn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:yn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:yn([Ve.points,Ve.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:yn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:yn([Ve.common,Ve.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:yn([Ve.sprite,Ve.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:yn([Ve.common,Ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:yn([Ve.lights,Ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};xi.physical={uniforms:yn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Oo={r:0,b:0,g:0},L2=new dt,Zd=new gt;Zd.set(-1,0,0,0,1,0,0,0,1);function F2(e,t,i,s,r,a){let o=new He(0),c=r===true?0:1,l,u,h=null,f=0,d=null;function p(w){let C=w.isScene===true?w.background:null;if(C&&C.isTexture){let g=w.backgroundBlurriness>0;C=t.get(C,g)}return C}function b(w){let C=false,g=p(w);if(g===null)A(o,c);else if(g&&g.isColor)A(g,1),C=true;let M=e.xr.getEnvironmentBlendMode();if(M==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(M==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||C)i.buffers.depth.setTest(true),i.buffers.depth.setMask(true),i.buffers.color.setMask(true),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function y(w,C){let g=p(C);if(g&&(g.isCubeTexture||g.mapping===jr)){if(u===undefined)u=new Ft(new bi(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:ws(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Sn,depthTest:false,depthWrite:false,fog:false,allowOverride:false})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u);if(u.material.uniforms.envMap.value=g,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L2.makeRotationFromEuler(C.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===false)u.material.uniforms.backgroundRotation.value.premultiply(Zd);if(u.material.toneMapped=Tt.getTransfer(g.colorSpace)!==Vt,h!==g||f!==g.version||d!==e.toneMapping)u.material.needsUpdate=true,h=g,f=g.version,d=e.toneMapping;u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)}else if(g&&g.isTexture){if(l===undefined)l=new Ft(new Xn(2,2),new wt({name:"BackgroundMaterial",uniforms:ws(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ui,depthTest:false,depthWrite:false,fog:false,allowOverride:false})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l);if(l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(g.colorSpace)!==Vt,g.matrixAutoUpdate===true)g.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(g.matrix),h!==g||f!==g.version||d!==e.toneMapping)l.material.needsUpdate=true,h=g,f=g.version,d=e.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function A(w,C){w.getRGB(Oo,Gl(e)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,C,a)}function m(){if(u!==undefined)u.geometry.dispose(),u.material.dispose(),u=undefined;if(l!==undefined)l.geometry.dispose(),l.material.dispose(),l=undefined}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),c=C,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,A(o,c)},render:b,addToRenderList:y,dispose:m}}function N2(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=d(null),a=r,o=false;function c(L,k,G,B,V){let te=false,Y=f(L,B,G,k);if(a!==Y)a=Y,u(a.object);if(te=p(L,B,G,V),te)b(L,B,G,V);if(V!==null)t.update(V,e.ELEMENT_ARRAY_BUFFER);if(te||o){if(o=false,g(L,k,G,B),V!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer)}}function l(){return e.createVertexArray()}function u(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function f(L,k,G,B){let V=B.wireframe===true,te=s[k.id];if(te===undefined)te={},s[k.id]=te;let Y=L.isInstancedMesh===true?L.id:0,q=te[Y];if(q===undefined)q={},te[Y]=q;let W=q[G.id];if(W===undefined)W={},q[G.id]=W;let U=W[V];if(U===undefined)U=d(l()),W[V]=U;return U}function d(L){let k=[],G=[],B=[];for(let V=0;V<i;V++)k[V]=0,G[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:false,newAttributes:k,enabledAttributes:G,attributeDivisors:B,object:L,attributes:{},index:null}}function p(L,k,G,B){let V=a.attributes,te=k.attributes,Y=0,q=G.getAttributes();for(let W in q)if(q[W].location>=0){let Z=V[W],be=te[W];if(be===undefined){if(W==="instanceMatrix"&&L.instanceMatrix)be=L.instanceMatrix;if(W==="instanceColor"&&L.instanceColor)be=L.instanceColor}if(Z===undefined)return true;if(Z.attribute!==be)return true;if(be&&Z.data!==be.data)return true;Y++}if(a.attributesNum!==Y)return true;if(a.index!==B)return true;return false}function b(L,k,G,B){let V={},te=k.attributes,Y=0,q=G.getAttributes();for(let W in q)if(q[W].location>=0){let Z=te[W];if(Z===undefined){if(W==="instanceMatrix"&&L.instanceMatrix)Z=L.instanceMatrix;if(W==="instanceColor"&&L.instanceColor)Z=L.instanceColor}let be={};if(be.attribute=Z,Z&&Z.data)be.data=Z.data;V[W]=be,Y++}a.attributes=V,a.attributesNum=Y,a.index=B}function y(){let L=a.newAttributes;for(let k=0,G=L.length;k<G;k++)L[k]=0}function A(L){m(L,0)}function m(L,k){let G=a.newAttributes,B=a.enabledAttributes,V=a.attributeDivisors;if(G[L]=1,B[L]===0)e.enableVertexAttribArray(L),B[L]=1;if(V[L]!==k)e.vertexAttribDivisor(L,k),V[L]=k}function w(){let L=a.newAttributes,k=a.enabledAttributes;for(let G=0,B=k.length;G<B;G++)if(k[G]!==L[G])e.disableVertexAttribArray(G),k[G]=0}function C(L,k,G,B,V,te,Y){if(Y===true)e.vertexAttribIPointer(L,k,G,V,te);else e.vertexAttribPointer(L,k,G,B,V,te)}function g(L,k,G,B){y();let V=B.attributes,te=G.getAttributes(),Y=k.defaultAttributeValues;for(let q in te){let W=te[q];if(W.location>=0){let U=V[q];if(U===undefined){if(q==="instanceMatrix"&&L.instanceMatrix)U=L.instanceMatrix;if(q==="instanceColor"&&L.instanceColor)U=L.instanceColor}if(U!==undefined){let Z=U.normalized,be=U.itemSize,Te=t.get(U);if(Te===undefined)continue;let{buffer:ft,type:Qe,bytesPerElement:Q}=Te,ge=Qe===e.INT||Qe===e.UNSIGNED_INT||U.gpuType===zc;if(U.isInterleavedBufferAttribute){let fe=U.data,Ye=fe.stride,et=U.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<W.locationSize;Ne++)m(W.location+Ne,fe.meshPerAttribute);if(L.isInstancedMesh!==true&&B._maxInstanceCount===undefined)B._maxInstanceCount=fe.meshPerAttribute*fe.count}else for(let Ne=0;Ne<W.locationSize;Ne++)A(W.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let Ne=0;Ne<W.locationSize;Ne++)C(W.location+Ne,be/W.locationSize,Qe,Z,Ye*Q,(et+be/W.locationSize*Ne)*Q,ge)}else{if(U.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)m(W.location+fe,U.meshPerAttribute);if(L.isInstancedMesh!==true&&B._maxInstanceCount===undefined)B._maxInstanceCount=U.meshPerAttribute*U.count}else for(let fe=0;fe<W.locationSize;fe++)A(W.location+fe);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let fe=0;fe<W.locationSize;fe++)C(W.location+fe,be/W.locationSize,Qe,Z,be*Q,be/W.locationSize*fe*Q,ge)}}else if(Y!==undefined){let Z=Y[q];if(Z!==undefined)switch(Z.length){case 2:e.vertexAttrib2fv(W.location,Z);break;case 3:e.vertexAttrib3fv(W.location,Z);break;case 4:e.vertexAttrib4fv(W.location,Z);break;default:e.vertexAttrib1fv(W.location,Z)}}}}w()}function M(){T();for(let L in s){let k=s[L];for(let G in k){let B=k[G];for(let V in B){let te=B[V];for(let Y in te)h(te[Y].object),delete te[Y];delete B[V]}}delete s[L]}}function S(L){if(s[L.id]===undefined)return;let k=s[L.id];for(let G in k){let B=k[G];for(let V in B){let te=B[V];for(let Y in te)h(te[Y].object),delete te[Y];delete B[V]}}delete s[L.id]}function P(L){for(let k in s){let G=s[k];for(let B in G){let V=G[B];if(V[L.id]===undefined)continue;let te=V[L.id];for(let Y in te)h(te[Y].object),delete te[Y];delete V[L.id]}}}function _(L){for(let k in s){let G=s[k],B=L.isInstancedMesh===true?L.id:0,V=G[B];if(V===undefined)continue;for(let te in V){let Y=V[te];for(let q in Y)h(Y[q].object),delete Y[q];delete V[te]}if(delete G[B],Object.keys(G).length===0)delete s[k]}}function T(){if(F(),o=true,a===r)return;a=r,u(a.object)}function F(){r.geometry=null,r.program=null,r.wireframe=false}return{setup:c,reset:T,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:A,disableUnusedAttributes:w}}function U2(e,t,i){let s;function r(l){s=l}function a(l,u){e.drawArrays(s,l,u),i.update(u,s,1)}function o(l,u,h){if(h===0)return;e.drawArraysInstanced(s,l,u,h),i.update(u,s,h)}function c(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c}function O2(e,t,i,s){let r;function a(){if(r!==undefined)return r;if(t.has("EXT_texture_filter_anisotropic")===true){let P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){if(P!==Gn&&s.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return false;return true}function c(P){let _=P===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(P!==_n&&P!==Di&&!_&&s.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return false;return true}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let u=i.precision!==undefined?i.precision:"highp",h=l(u);if(h!==u)tt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h;let f=i.logarithmicDepthBuffer===true,d=i.reversedDepthBuffer===true&&t.has("EXT_clip_control");if(i.reversedDepthBuffer===true&&d===false)tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),A=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),C=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:true,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:b,maxTextureSize:y,maxCubemapSize:A,maxAttributes:m,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:g,maxSamples:M,samples:S}}function B2(e){let t=this,i=null,s=0,r=false,a=false,o=new oi,c=new gt,l={value:null,needsUpdate:false};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||s!==0||r;return r=d,s=f.length,p},this.beginShadows=function(){a=true,h(null)},this.endShadows=function(){a=false},this.setGlobalState=function(f,d){i=h(f,d,0)},this.setState=function(f,d,p){let{clippingPlanes:b,clipIntersection:y,clipShadows:A}=f,m=e.get(f);if(!r||b===null||b.length===0||a&&!A)if(a)h(null);else u();else{let w=a?0:s,C=w*4,g=m.clippingState||null;l.value=g,g=h(b,d,C,p);for(let M=0;M!==C;++M)g[M]=i[M];m.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){if(l.value!==i)l.value=i,l.needsUpdate=s>0;t.numPlanes=s,t.numIntersection=0}function h(f,d,p,b){let y=f!==null?f.length:0,A=null;if(y!==0){if(A=l.value,b!==true||A===null){let m=p+y*4,w=d.matrixWorldInverse;if(c.getNormalMatrix(w),A===null||A.length<m)A=new Float32Array(m);for(let C=0,g=p;C!==y;++C,g+=4)o.copy(f[C]).applyMatrix4(w,c),o.normal.toArray(A,g),A[g+3]=o.constant}l.value=A,l.needsUpdate=true}return t.numPlanes=y,t.numIntersection=0,A}}var gr=4,k2=6,z2=20,H2=256,aa=new Ts,Cd=new He,ru=null,au=0,ou=0,cu=false,G2=new I,Cs=new I;class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=0.1,s=100,r={}){let{size:a=256,position:o=G2}=r;ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=false,this._setSize(a);let c=this._allocateTargets();if(c.depthBuffer=true,this._sceneToCubeUV(e,i,s,c,o),t>0)this._blur(c,0,0,t);return this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,au,ou),this._renderer.xr.enabled=cu,e.scissorTest=false,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===ir||e.mapping===bs)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=false;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:false,type:pi,format:Gn,colorSpace:Ln,depthBuffer:false},s=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Pd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=W2(r)),this._blurMaterial=j2(r,e,t),this._ggxMaterial=V2(r,e,t)}return s}_compileMaterial(e){let t=new Ft(new ct,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,i,s,r){let c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:f,toneMapping:d}=h;if(h.getClearColor(Cd),h.toneMapping=ti,h.autoClear=false,h.state.buffers.depth.getReversed())h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Ft(new bi,new Vn({name:"PMREM.Background",side:Sn,depthWrite:false,depthTest:false}));let b=this._backgroundBox,y=b.material,A=false,m=e.background;if(m){if(m.isColor)y.color.copy(m),e.background=null,A=true}else y.color.copy(Cd),A=true;for(let w=0;w<6;w++){let C=w%3;if(C===0)c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z);else if(C===1)c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z);else c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]);let g=this._cubeSize;if(Ar(s,C*g,w>2?g:0,g,g),h.setRenderTarget(s),A)h.render(b,c);h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ir||e.mapping===bs;if(s){if(this._cubemapMaterial===null)this._cubemapMaterial=Dd();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===false?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Id();let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ar(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,aa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=false;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:p}=this,b=this._sizeLods[i],y=3*b*(i>p-gr?i-p+gr:0),A=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,Ar(r,y,A,3*b,2*b),s.setRenderTarget(r),s.render(o,aa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Ar(e,y,A,3*b,2*b),s.setRenderTarget(e),s.render(o,aa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-gr?s-this._lodMax+gr:0),f=4*(this._cubeSize-u);Ar(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,aa)}}function W2(e){let t=[],i=[],s=e,r=e-gr+1+k2;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/(o-2),l=-c,u=1+c,h=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,d=6,p=3,b=new Float32Array(p*d*f),y=new Float32Array(p*d*f);for(let m=0;m<f;m++){let w=m%3*2/3-1,C=m>2?0:-1,g=[w,C,0,w+0.6666666666666666,C,0,w+0.6666666666666666,C+1,0,w,C,0,w+0.6666666666666666,C+1,0,w,C+1,0];b.set(g,p*d*m);for(let M=0;M<d;M++){let S=h[M*2]*2-1,P=h[M*2+1]*2-1;if(m===0)Cs.set(1,P,S);else if(m===1)Cs.set(-S,1,-P);else if(m===2)Cs.set(-S,P,1);else if(m===3)Cs.set(-1,P,-S);else if(m===4)Cs.set(-S,-1,P);else Cs.set(S,P,-1);Cs.toArray(y,(m*d+M)*p)}}let A=new ct;if(A.setAttribute("position",new pt(b,p)),A.setAttribute("outputDirection",new pt(y,p)),i.push(new Ft(A,null)),s>gr)s--}return{lodMeshes:i,sizeLods:t}}function Pd(e,t,i){let s=new Fn(e,t,i);return s.texture.mapping=jr,s.texture.name="PMREM.cubeUv",s.scissorTest=true,s}function Ar(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function V2(e,t,i){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:hi,depthTest:false,depthWrite:false})}function j2(e,t,i){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:hi,depthTest:false,depthWrite:false})}function Id(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:hi,depthTest:false,depthWrite:false})}function Dd(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:false,depthWrite:false})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pu extends Fn{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=true;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=true}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:hi});r.uniforms.tEquirect.value=t;let a=new Ft(s,r),o=t.minFilter;if(t.minFilter===Hn)t.minFilter=Wt;return new Ql(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=true,i=true,s=true){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function q2(e){let t=new WeakMap,i=new WeakMap,s=null;function r(d,p=false){if(d===null||d===undefined)return null;if(p)return o(d);return a(d)}function a(d){if(d&&d.isTexture){let p=d.mapping;if(p===io||p===so)if(t.has(d)){let b=t.get(d).texture;return c(b,d.mapping)}else{let b=d.image;if(b&&b.height>0){let y=new pu(b.height);return y.fromEquirectangularTexture(e,d),t.set(d,y),d.addEventListener("dispose",u),c(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,b=p===io||p===so,y=p===ir||p===bs;if(b||y){let A=i.get(d),m=A!==undefined?A.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m){if(s===null)s=new hu(e);return A=b?s.fromEquirectangular(d,A):s.fromCubemap(d,A),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),A.texture}else if(A!==undefined)return A.texture;else{let w=d.image;if(b&&w&&w.height>0||y&&w&&l(w)){if(s===null)s=new hu(e);return A=b?s.fromEquirectangular(d):s.fromCubemap(d),A.texture.pmremVersion=d.pmremVersion,i.set(d,A),d.addEventListener("dispose",h),A.texture}else return null}}}return d}function c(d,p){if(p===io)d.mapping=ir;else if(p===so)d.mapping=bs;return d}function l(d){let p=0,b=6;for(let y=0;y<b;y++)if(d[y]!==undefined)p++;return p===b}function u(d){let p=d.target;p.removeEventListener("dispose",u);let b=t.get(p);if(b!==undefined)t.delete(p),b.dispose()}function h(d){let p=d.target;p.removeEventListener("dispose",h);let b=i.get(p);if(b!==undefined)i.delete(p),b.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,s!==null)s.dispose(),s=null}return{get:r,dispose:f}}function X2(e){let t={};function i(s){if(t[s]!==undefined)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);if(r===null)ms("WebGLRenderer: "+s+" extension not supported.");return r}}}function K2(e,t,i,s){let r={},a=new WeakMap;function o(f){let d=f.target;if(d.index!==null)t.remove(d.index);for(let b in d.attributes)t.remove(d.attributes[b]);d.removeEventListener("dispose",o),delete r[d.id];let p=a.get(d);if(p)t.remove(p),a.delete(d);if(s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===true)delete d._maxInstanceCount;i.memory.geometries--}function c(f,d){if(r[d.id]===true)return d;return d.addEventListener("dispose",o),r[d.id]=true,i.memory.geometries++,d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],e.ARRAY_BUFFER)}function u(f){let d=[],p=f.index,b=f.attributes.position,y=0;if(b===undefined)return;if(p!==null){let w=p.array;y=p.version;for(let C=0,g=w.length;C<g;C+=3){let M=w[C+0],S=w[C+1],P=w[C+2];d.push(M,S,S,P,P,M)}}else{let w=b.array;y=b.version;for(let C=0,g=w.length/3-1;C<g;C+=3){let M=C+0,S=C+1,P=C+2;d.push(M,S,S,P,P,M)}}let A=new(b.count>=65535?_o:xo)(d,1);A.version=y;let m=a.get(f);if(m)t.remove(m);a.set(f,A)}function h(f){let d=a.get(f);if(d){let p=f.index;if(p!==null){if(d.version<p.version)u(f)}}else u(f);return a.get(f)}return{get:c,update:l,getWireframeAttribute:h}}function Y2(e,t,i){let s;function r(f){s=f}let a,o;function c(f){a=f.type,o=f.bytesPerElement}function l(f,d){e.drawElements(s,d,a,f*o),i.update(d,s,1)}function u(f,d,p){if(p===0)return;e.drawElementsInstanced(s,d,a,f*o,p),i.update(d,s,p)}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,d,0,a,f,0,p);let y=0;for(let A=0;A<p;A++)y+=d[A];i.update(y,s,1)}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function J2(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,o,c){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=c*(a/3);break;case e.LINES:i.lines+=c*(a/2);break;case e.LINE_STRIP:i.lines+=c*(a-1);break;case e.LINE_LOOP:i.lines+=c*a;break;case e.POINTS:i.points+=c*a;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:true,reset:r,update:s}}function Z2(e,t,i){let s=new WeakMap,r=new Gt;function a(o,c,l){let u=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=h!==undefined?h.length:0,d=s.get(c);if(d===undefined||d.count!==f){let T=function(){P.dispose(),s.delete(c),c.removeEventListener("dispose",T)};if(d!==undefined)d.texture.dispose();let p=c.morphAttributes.position!==undefined,b=c.morphAttributes.normal!==undefined,y=c.morphAttributes.color!==undefined,A=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],C=0;if(p===true)C=1;if(b===true)C=2;if(y===true)C=3;let g=c.attributes.position.count*C,M=1;if(g>t.maxTextureSize)M=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize;let S=new Float32Array(g*M*4*f),P=new go(S,g,M,f);P.type=Di,P.needsUpdate=true;let _=C*4;for(let F=0;F<f;F++){let L=A[F],k=m[F],G=w[F],B=g*M*4*F;for(let V=0;V<L.count;V++){let te=V*_;if(p===true)r.fromBufferAttribute(L,V),S[B+te+0]=r.x,S[B+te+1]=r.y,S[B+te+2]=r.z,S[B+te+3]=0;if(b===true)r.fromBufferAttribute(k,V),S[B+te+4]=r.x,S[B+te+5]=r.y,S[B+te+6]=r.z,S[B+te+7]=0;if(y===true)r.fromBufferAttribute(G,V),S[B+te+8]=r.x,S[B+te+9]=r.y,S[B+te+10]=r.z,S[B+te+11]=G.itemSize===4?r.w:1}}d={count:f,texture:P,size:new ze(g,M)},s.set(c,d),c.addEventListener("dispose",T)}if(o.isInstancedMesh===true&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let b=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",b),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function $2(e,t,i,s,r){let a=new WeakMap;function o(u){let h=r.render.frame,f=u.geometry,d=t.get(u,f);if(a.get(d)!==h)t.update(d),a.set(d,h);if(u.isInstancedMesh){if(u.hasEventListener("dispose",l)===false)u.addEventListener("dispose",l);if(a.get(u)!==h){if(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null)i.update(u.instanceColor,e.ARRAY_BUFFER);a.set(u,h)}}if(u.isSkinnedMesh){let p=u.skeleton;if(a.get(p)!==h)p.update(),a.set(p,h)}return d}function c(){a=new WeakMap}function l(u){let h=u.target;if(h.removeEventListener("dispose",l),s.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:c}}var Q2={[Lc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function eA(e,t,i,s,r,a){let o=new Fn(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:false,storeMultisampledStencilBuffer:false,resolveDepthBuffer:false,resolveStencilBuffer:false}),c=null,l=null,u=new ct;u.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new it([0,2,0,0,2,0],2));let h=new Wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:false,depthWrite:false}),f=new Ft(u,h),d=new Ts(-1,1,1,-1,0,1),p=null,b=null,y=false,A,m=null,w=[],C=false;this.setSize=function(g,M){if(o.setSize(g,M),c!==null)c.setSize(g,M);if(l!==null)l.setSize(g,M);for(let S=0;S<w.length;S++){let P=w[S];if(P.setSize)P.setSize(g,M)}},this.setEffects=function(g){w=g,C=w.length>0&&w[0].isRenderPass===true;let{width:M,height:S}=o;if(w.length>0&&c===null)c=new Fn(M,S,{type:pi,depthBuffer:false,stencilBuffer:false}),l=new Fn(M,S,{type:pi,depthBuffer:false,stencilBuffer:false});for(let P=0;P<w.length;P++){let _=w[P];if(_.setSize)_.setSize(M,S)}},this.begin=function(g,M){if(y)return false;if(g.toneMapping===ti&&w.length===0)return false;if(m=M,M!==null){let{width:S,height:P}=M;if(o.width!==S||o.height!==P)this.setSize(S,P)}if(C===false)g.setRenderTarget(o);return A=g.toneMapping,g.toneMapping=ti,true},this.hasRenderPass=function(){return C},this.end=function(g,M){g.toneMapping=A,y=true;let S=o,P=c;for(let _=0;_<w.length;_++){let T=w[_];if(T.enabled===false)continue;if(T.render(g,P,S,M),T.needsSwap!==false)S=P,P=P===c?l:c}if(p!==g.outputColorSpace||b!==g.toneMapping){if(p=g.outputColorSpace,b=g.toneMapping,h.defines={},Tt.getTransfer(p)===Vt)h.defines.SRGB_TRANSFER="";let _=Q2[b];if(_)h.defines[_]="";h.needsUpdate=true}h.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(m),g.render(f,d),m=null,y=false},this.isCompositing=function(){return y},this.dispose=function(){if(o.dispose(),c!==null)c.dispose();if(l!==null)l.dispose();u.dispose(),h.dispose()}}var $d=new an,du=new Ms(1,1),Qd=new go,ef=new Ll,tf=new wo,Ld=[],Fd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Od=new Float32Array(4);function br(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=Ld[r];if(a===undefined)a=new Float32Array(r),Ld[r]=a;if(t!==0){s.toArray(a,0);for(let o=1,c=0;o!==t;++o)c+=i,e[o].toArray(a,c)}return a}function dn(e,t){if(e.length!==t.length)return false;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return false;return true}function fn(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function zo(e,t){let i=Fd[t];if(i===undefined)i=new Int32Array(t),Fd[t]=i;for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function tA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function nA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(dn(i,t))return;e.uniform2fv(this.addr,t),fn(i,t)}}function iA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==undefined){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(dn(i,t))return;e.uniform3fv(this.addr,t),fn(i,t)}}function sA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(dn(i,t))return;e.uniform4fv(this.addr,t),fn(i,t)}}function rA(e,t){let i=this.cache,s=t.elements;if(s===undefined){if(dn(i,t))return;e.uniformMatrix2fv(this.addr,false,t),fn(i,t)}else{if(dn(i,s))return;Od.set(s),e.uniformMatrix2fv(this.addr,false,Od),fn(i,s)}}function aA(e,t){let i=this.cache,s=t.elements;if(s===undefined){if(dn(i,t))return;e.uniformMatrix3fv(this.addr,false,t),fn(i,t)}else{if(dn(i,s))return;Ud.set(s),e.uniformMatrix3fv(this.addr,false,Ud),fn(i,s)}}function oA(e,t){let i=this.cache,s=t.elements;if(s===undefined){if(dn(i,t))return;e.uniformMatrix4fv(this.addr,false,t),fn(i,t)}else{if(dn(i,s))return;Nd.set(s),e.uniformMatrix4fv(this.addr,false,Nd),fn(i,s)}}function cA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function lA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(dn(i,t))return;e.uniform2iv(this.addr,t),fn(i,t)}}function uA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(dn(i,t))return;e.uniform3iv(this.addr,t),fn(i,t)}}function hA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(dn(i,t))return;e.uniform4iv(this.addr,t),fn(i,t)}}function dA(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function fA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(dn(i,t))return;e.uniform2uiv(this.addr,t),fn(i,t)}}function pA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(dn(i,t))return;e.uniform3uiv(this.addr,t),fn(i,t)}}function mA(e,t){let i=this.cache;if(t.x!==undefined){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(dn(i,t))return;e.uniform4uiv(this.addr,t),fn(i,t)}}function AA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;let a;if(this.type===e.SAMPLER_2D_SHADOW)du.compareFunction=i.isReversedDepthBuffer()?Ao:mo,a=du;else a=$d;i.setTexture2D(t||a,r)}function gA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture3D(t||ef,r)}function bA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTextureCube(t||tf,r)}function vA(e,t,i){let s=this.cache,r=i.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;i.setTexture2DArray(t||Qd,r)}function xA(e){switch(e){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return sA;case 35674:return rA;case 35675:return aA;case 35676:return oA;case 5124:case 35670:return cA;case 35667:case 35671:return lA;case 35668:case 35672:return uA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return fA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return vA}}function _A(e,t){e.uniform1fv(this.addr,t)}function yA(e,t){let i=br(t,this.size,2);e.uniform2fv(this.addr,i)}function MA(e,t){let i=br(t,this.size,3);e.uniform3fv(this.addr,i)}function SA(e,t){let i=br(t,this.size,4);e.uniform4fv(this.addr,i)}function wA(e,t){let i=br(t,this.size,4);e.uniformMatrix2fv(this.addr,false,i)}function EA(e,t){let i=br(t,this.size,9);e.uniformMatrix3fv(this.addr,false,i)}function TA(e,t){let i=br(t,this.size,16);e.uniformMatrix4fv(this.addr,false,i)}function RA(e,t){e.uniform1iv(this.addr,t)}function CA(e,t){e.uniform2iv(this.addr,t)}function PA(e,t){e.uniform3iv(this.addr,t)}function IA(e,t){e.uniform4iv(this.addr,t)}function DA(e,t){e.uniform1uiv(this.addr,t)}function LA(e,t){e.uniform2uiv(this.addr,t)}function FA(e,t){e.uniform3uiv(this.addr,t)}function NA(e,t){e.uniform4uiv(this.addr,t)}function UA(e,t,i){let s=this.cache,r=t.length,a=zo(i,r);if(!dn(s,a))e.uniform1iv(this.addr,a),fn(s,a);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=du;else o=$d;for(let c=0;c!==r;++c)i.setTexture2D(t[c]||o,a[c])}function OA(e,t,i){let s=this.cache,r=t.length,a=zo(i,r);if(!dn(s,a))e.uniform1iv(this.addr,a),fn(s,a);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||ef,a[o])}function BA(e,t,i){let s=this.cache,r=t.length,a=zo(i,r);if(!dn(s,a))e.uniform1iv(this.addr,a),fn(s,a);for(let o=0;o!==r;++o)i.setTextureCube(t[o]||tf,a[o])}function kA(e,t,i){let s=this.cache,r=t.length,a=zo(i,r);if(!dn(s,a))e.uniform1iv(this.addr,a),fn(s,a);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||Qd,a[o])}function zA(e){switch(e){case 5126:return _A;case 35664:return yA;case 35665:return MA;case 35666:return SA;case 35674:return wA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return PA;case 35669:case 35673:return IA;case 5125:return DA;case 36294:return LA;case 36295:return FA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return kA}}class nf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}}var lu=/(\w+)(\])?(\[|\.)?/g;function Bd(e,t){e.seq.push(t),e.map[t.id]=t}function HA(e,t,i){let s=e.name,r=s.length;lu.lastIndex=0;while(true){let a=lu.exec(s),o=lu.lastIndex,c=a[1],l=a[2]==="]",u=a[3];if(l)c=c|0;if(u===undefined||u==="["&&o+2===r){Bd(i,u===undefined?new nf(c,e,t):new sf(c,e,t));break}else{let f=i.map[c];if(f===undefined)f=new rf(c),Bd(i,f);i=f}}}class la{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);HA(o,c,this)}let s=[],r=[];for(let a of this.seq)if(a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW)s.push(a);else r.push(a);if(s.length>0)this.seq=s.concat(r)}setValue(e,t,i,s){let r=this.map[t];if(r!==undefined)r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];if(s!==undefined)this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];if(c.needsUpdate!==false)o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];if(a.id in t)i.push(a)}return i}}function kd(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}var GA=37297,WA=0;function VA(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let o=r;o<a;o++){let c=o+1;s.push(`${c===t?">":" "} ${c}: ${i[o]}`)}return s.join(`
`)}var zd=new gt;function jA(e){Tt._getMatrix(zd,Tt.workingColorSpace,e);let t=`mat3( ${zd.elements.map((i)=>i.toFixed(4))} )`;switch(Tt.getTransfer(e)){case wl:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Hd(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(s&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let c=parseInt(o[1]);return i.toUpperCase()+`

`+a+`

`+VA(e.getShaderSource(t),c)}else return a}function qA(e,t){let i=jA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var XA={[Lc]:"Linear",[Fc]:"Reinhard",[Nc]:"Cineon",[Uc]:"ACESFilmic",[Bc]:"AgX",[kc]:"Neutral",[Oc]:"Custom"};function KA(e,t){let i=XA[t];if(i===undefined)return tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Bo=new I;function YA(){Tt.getLuminanceCoefficients(Bo);let e=Bo.x.toFixed(4),t=Bo.y.toFixed(4),i=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function JA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function ZA(e){let t=[];for(let i in e){let s=e[i];if(s===false)continue;t.push("#define "+i+" "+s)}return t.join(`
`)}function $A(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),o=a.name,c=1;if(a.type===e.FLOAT_MAT2)c=2;if(a.type===e.FLOAT_MAT3)c=3;if(a.type===e.FLOAT_MAT4)c=4;i[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:c}}return i}function ca(e){return e!==""}function Gd(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(e){return e.replace(QA,t3)}var e3=new Map;function t3(e,t){let i=Et[t];if(i===undefined){let s=e3.get(t);if(s!==undefined)i=Et[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fu(i)}var n3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(e){return e.replace(n3,i3)}function i3(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function jd(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var s3={[Vr]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function r3(e){return s3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a3={[ir]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function o3(e){if(e.envMap===false)return"ENVMAP_TYPE_CUBE";return a3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var c3={[bs]:"ENVMAP_MODE_REFRACTION"};function l3(e){if(e.envMap===false)return"ENVMAP_MODE_REFLECTION";return c3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u3={[Yh]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function h3(e){if(e.envMap===false)return"ENVMAP_BLENDING_NONE";return u3[e.combine]||"ENVMAP_BLENDING_NONE"}function d3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function f3(e,t,i,s){let r=e.getContext(),{defines:a,vertexShader:o,fragmentShader:c}=i,l=r3(i),u=o3(i),h=l3(i),f=h3(i),d=d3(i),p=JA(i),b=ZA(a),y=r.createProgram(),A,m,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ca).join(`
`),A.length>0)A+=`
`;if(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ca).join(`
`),m.length>0)m+=`
`}else A=[jd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===false?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===false?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[jd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===false?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ti?"#define TONE_MAPPING":"",i.toneMapping!==ti?Et.tonemapping_pars_fragment:"",i.toneMapping!==ti?KA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,qA("linearToOutputTexel",i.outputColorSpace),YA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ca).join(`
`);if(o=fu(o),o=Gd(o,i),o=Wd(o,i),c=fu(c),c=Gd(c,i),c=Wd(c,i),o=Vd(o),c=Vd(c),i.isRawShaderMaterial!==true)w=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",i.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let C=w+A+o,g=w+m+c,M=kd(r,r.VERTEX_SHADER,C),S=kd(r,r.FRAGMENT_SHADER,g);if(r.attachShader(y,M),r.attachShader(y,S),i.index0AttributeName!==undefined)r.bindAttribLocation(y,0,i.index0AttributeName);else if(i.hasPositionAttribute===true)r.bindAttribLocation(y,0,"position");r.linkProgram(y);function P(L){if(e.debug.checkShaderErrors){let k=r.getProgramInfoLog(y)||"",G=r.getShaderInfoLog(M)||"",B=r.getShaderInfoLog(S)||"",V=k.trim(),te=G.trim(),Y=B.trim(),q=true,W=true;if(r.getProgramParameter(y,r.LINK_STATUS)===false)if(q=false,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,y,M,S);else{let U=Hd(r,M,"vertex"),Z=Hd(r,S,"fragment");mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+U+`
`+Z)}else if(V!=="")tt("WebGLProgram: Program Info Log:",V);else if(te===""||Y==="")W=false;if(W)L.diagnostics={runnable:q,programLog:V,vertexShader:{log:te,prefix:A},fragmentShader:{log:Y,prefix:m}}}r.deleteShader(M),r.deleteShader(S),_=new la(r,y),T=$A(r,y)}let _;this.getUniforms=function(){if(_===undefined)P(this);return _};let T;this.getAttributes=function(){if(T===undefined)P(this);return T};let F=i.rendererExtensionParallelShaderCompile===false;return this.isReady=function(){if(F===false)F=r.getProgramParameter(y,GA);return F},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=undefined},this.type=i.shaderType,this.name=i.shaderName,this.id=WA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=S,this}var p3=0;class af{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);if(s.has(t)===false)s.add(t),t.usedTimes++;if(s.has(i)===false)s.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===undefined)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===undefined)i=new of(e),t.set(e,i);return i}}class of{constructor(e){this.id=p3++,this.code=e,this.usedTimes=0}}function m3(e){return e===ys||e===ho||e===fo}function A3(e,t,i,s,r,a){let o=new bo,c=new af,l=new Set,u=[],h=new Map,{logarithmicDepthBuffer:f,precision:d}=s,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function y(_,T,F,L,k,G){let B=L.fog,V=k.geometry,te=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=t.get(_.envMap||te,Y),W=!!q&&q.mapping===jr?q.image.height:null,U=p[_.type];if(_.precision!==null){if(d=s.getMaxPrecision(_.precision),d!==_.precision)tt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead.")}let Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=Z!==undefined?Z.length:0,Te=0;if(V.morphAttributes.position!==undefined)Te=1;if(V.morphAttributes.normal!==undefined)Te=2;if(V.morphAttributes.color!==undefined)Te=3;let ft,Qe,Q,ge;if(U){let Ut=xi[U];ft=Ut.vertexShader,Qe=Ut.fragmentShader}else{ft=_.vertexShader,Qe=_.fragmentShader;let Ut=c.getVertexShaderStage(_),Pt=c.getFragmentShaderStage(_);c.update(_,Ut,Pt),Q=Ut.id,ge=Pt.id}let fe=e.getRenderTarget(),Ye=e.state.buffers.depth.getReversed(),et=k.isInstancedMesh===true,Ne=k.isBatchedMesh===true,Ct=!!_.map,K=!!_.matcap,he=!!q,pe=!!_.aoMap,J=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===false,ut=!!_.normalMap,Lt=!!_.displacementMap,xt=!!_.emissiveMap,ie=!!_.metalnessMap,D=!!_.roughnessMap,Ce=_.anisotropy>0,Pe=_.clearcoat>0,$e=_.dispersion>0,E=_.retroreflectivity>0,x=_.iridescence>0,N=_.sheen>0,X=_.transmission>0,de=Ce&&!!_.anisotropyMap,me=Pe&&!!_.clearcoatMap,Se=Pe&&!!_.clearcoatNormalMap,ne=Pe&&!!_.clearcoatRoughnessMap,re=x&&!!_.iridescenceMap,Ue=x&&!!_.iridescenceThicknessMap,Xe=N&&!!_.sheenColorMap,ve=N&&!!_.sheenRoughnessMap,ye=!!_.specularMap,Ge=!!_.specularColorMap,st=!!_.specularIntensityMap,Dt=X&&!!_.transmissionMap,j=X&&!!_.thicknessMap,Ie=!!_.gradientMap,ae=!!_.alphaMap,Re=_.alphaTest>0,De=!!_.alphaHash,Ae=!!_.extensions,Le=ti;if(_.toneMapped){if(fe===null||fe.isXRRenderTarget===true)Le=e.toneMapping}let lt={shaderID:U,shaderType:_.type,shaderName:_.name,vertexShader:ft,fragmentShader:Qe,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===true,glslVersion:_.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:et,instancingColor:et&&k.instanceColor!==null,instancingMorph:et&&k.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===true?fe.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:K,envMap:he,envMapMode:he&&q.mapping,envMapCubeUVHeight:W,aoMap:pe,lightMap:J,bumpMap:je,normalMap:ut,displacementMap:Lt,emissiveMap:xt,normalMapObjectSpace:ut&&_.normalMapType===sd,normalMapTangentSpace:ut&&_.normalMapType===Sl,packedNormalMap:ut&&_.normalMapType===Sl&&m3(_.normalMap.format),metalnessMap:ie,roughnessMap:D,anisotropy:Ce,anisotropyMap:de,clearcoat:Pe,clearcoatMap:me,clearcoatNormalMap:Se,clearcoatRoughnessMap:ne,dispersion:$e,retroreflection:E,iridescence:x,iridescenceMap:re,iridescenceThicknessMap:Ue,sheen:N,sheenColorMap:Xe,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:Ge,specularIntensityMap:st,transmission:X,transmissionMap:Dt,thicknessMap:j,gradientMap:Ie,opaque:_.transparent===false&&_.blending===di&&_.alphaToCoverage===false,alphaMap:ae,alphaTest:Re,alphaHash:De,combine:_.combine,mapUv:Ct&&b(_.map.channel),aoMapUv:pe&&b(_.aoMap.channel),lightMapUv:J&&b(_.lightMap.channel),bumpMapUv:je&&b(_.bumpMap.channel),normalMapUv:ut&&b(_.normalMap.channel),displacementMapUv:Lt&&b(_.displacementMap.channel),emissiveMapUv:xt&&b(_.emissiveMap.channel),metalnessMapUv:ie&&b(_.metalnessMap.channel),roughnessMapUv:D&&b(_.roughnessMap.channel),anisotropyMapUv:de&&b(_.anisotropyMap.channel),clearcoatMapUv:me&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:Se&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&b(_.sheenRoughnessMap.channel),specularMapUv:ye&&b(_.specularMap.channel),specularColorMapUv:Ge&&b(_.specularColorMap.channel),specularIntensityMapUv:st&&b(_.specularIntensityMap.channel),transmissionMapUv:Dt&&b(_.transmissionMap.channel),thicknessMapUv:j&&b(_.thicknessMap.channel),alphaMapUv:ae&&b(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ut||Ce),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===true&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===true&&!!V.attributes.uv&&(Ct||ae),fog:!!B,useFog:_.fog===true,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===false&&(_.flatShading===true||V.attributes.normal===undefined&&ut===false&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===true,logarithmicDepthBuffer:f,reversedDepthBuffer:Ye,skinning:k.isSkinnedMesh===true,hasPositionAttribute:V.attributes.position!==undefined,morphTargets:V.morphAttributes.position!==undefined,morphNormals:V.morphAttributes.normal!==undefined,morphColors:V.morphAttributes.color!==undefined,morphTargetsCount:be,morphTextureStride:Te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ct&&_.map.isVideoTexture===true&&Tt.getTransfer(_.map.colorSpace)===Vt,decodeVideoTextureEmissive:xt&&_.emissiveMap.isVideoTexture===true&&Tt.getTransfer(_.emissiveMap.colorSpace)===Vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qt,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===true&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===true||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function A(_){let T=[];if(_.shaderID)T.push(_.shaderID);else T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID);if(_.defines!==undefined)for(let F in _.defines)T.push(F),T.push(_.defines[F]);if(_.isRawShaderMaterial===false)m(T,_),w(T,_),T.push(e.outputColorSpace);return T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){if(o.disableAll(),T.instancing)o.enable(0);if(T.instancingColor)o.enable(1);if(T.instancingMorph)o.enable(2);if(T.matcap)o.enable(3);if(T.envMap)o.enable(4);if(T.normalMapObjectSpace)o.enable(5);if(T.normalMapTangentSpace)o.enable(6);if(T.clearcoat)o.enable(7);if(T.iridescence)o.enable(8);if(T.alphaTest)o.enable(9);if(T.vertexColors)o.enable(10);if(T.vertexAlphas)o.enable(11);if(T.vertexUv1s)o.enable(12);if(T.vertexUv2s)o.enable(13);if(T.vertexUv3s)o.enable(14);if(T.vertexTangents)o.enable(15);if(T.anisotropy)o.enable(16);if(T.alphaHash)o.enable(17);if(T.batching)o.enable(18);if(T.dispersion)o.enable(19);if(T.retroreflection)o.enable(24);if(T.batchingColor)o.enable(20);if(T.gradientMap)o.enable(21);if(T.packedNormalMap)o.enable(22);if(T.vertexNormals)o.enable(23);if(_.push(o.mask),o.disableAll(),T.fog)o.enable(0);if(T.useFog)o.enable(1);if(T.flatShading)o.enable(2);if(T.logarithmicDepthBuffer)o.enable(3);if(T.reversedDepthBuffer)o.enable(4);if(T.skinning)o.enable(5);if(T.morphTargets)o.enable(6);if(T.morphNormals)o.enable(7);if(T.morphColors)o.enable(8);if(T.premultipliedAlpha)o.enable(9);if(T.shadowMapEnabled)o.enable(10);if(T.doubleSided)o.enable(11);if(T.flipSided)o.enable(12);if(T.useDepthPacking)o.enable(13);if(T.dithering)o.enable(14);if(T.transmission)o.enable(15);if(T.sheen)o.enable(16);if(T.opaque)o.enable(17);if(T.pointsUvs)o.enable(18);if(T.decodeVideoTexture)o.enable(19);if(T.decodeVideoTextureEmissive)o.enable(20);if(T.alphaToCoverage)o.enable(21);if(T.numLightProbeGrids>0)o.enable(22);if(T.hasPositionAttribute)o.enable(23);_.push(o.mask)}function C(_){let T=p[_.type],F;if(T){let L=xi[T];F=_d.clone(L.uniforms)}else F=_.uniforms;return F}function g(_,T){let F=h.get(T);if(F!==undefined)++F.usedTimes;else F=new f3(e,T,_,r),u.push(F),h.set(T,F);return F}function M(_){if(--_.usedTimes===0){let T=u.indexOf(_);u[T]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){c.remove(_)}function P(){c.dispose()}return{getParameters:y,getProgramCacheKey:A,getUniforms:C,acquireProgram:g,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:P}}function g3(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let c=e.get(o);if(c===undefined)c={},e.set(o,c);return c}function s(o){e.delete(o)}function r(o,c,l){e.get(o)[c]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function b3(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function qd(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Xd(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function o(d){let p=0;if(d.isInstancedMesh)p+=2;if(d.isSkinnedMesh)p+=1;return p}function c(d,p,b,y,A,m){let w=e[t];if(w===undefined)w={id:d.id,object:d,geometry:p,material:b,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:A,group:m},e[t]=w;else w.id=d.id,w.object=d,w.geometry=p,w.material=b,w.materialVariant=o(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=A,w.group=m;return t++,w}function l(d,p,b,y,A,m,w){if(w.reversedDepth===true)A=-A;let C=c(d,p,b,y,A,m);if(b.transmission>0)s.push(C);else if(b.transparent===true)r.push(C);else i.push(C)}function u(d,p,b,y,A,m){let w=c(d,p,b,y,A,m);if(b.transmission>0)s.unshift(w);else if(b.transparent===true)r.unshift(w);else i.unshift(w)}function h(d,p){if(i.length>1)i.sort(d||b3);if(s.length>1)s.sort(p||qd);if(r.length>1)r.sort(p||qd)}function f(){for(let d=t,p=e.length;d<p;d++){let b=e[d];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:l,unshift:u,finish:f,sort:h}}function v3(){let e=new WeakMap;function t(s,r){let a=e.get(s),o;if(a===undefined)o=new Xd,e.set(s,[o]);else if(r>=a.length)o=new Xd,a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function x3(){let e={};return{get:function(t){if(e[t.id]!==undefined)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new I,color:new He};break;case"SpotLight":i={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=i,i}}}function _3(){let e={};return{get:function(t){if(e[t.id]!==undefined)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var y3=0;function M3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function S3(e){let t=new x3,i=_3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);let r=new I,a=new dt,o=new dt;function c(u){let h=0,f=0,d=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let p=0,b=0,y=0,A=0,m=0,w=0,C=0,g=0,M=0,S=0,P=0,_=0,T=0,F=0;u.sort(M3);for(let k=0,G=u.length;k<G;k++){let B=u[k],{color:V,intensity:te,distance:Y}=B,q=null;if(B.shadow&&B.shadow.map)if(B.shadow.map.texture.format===ys)q=B.shadow.map.texture;else q=B.shadow.map.depthTexture||B.shadow.map.texture;if(B.isAmbientLight)h+=V.r*te,f+=V.g*te,d+=V.b*te;else if(B.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(B.sh.coefficients[W],te);F++}else if(B.isSunLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let U=B.shadow,Z=i.get(B);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),s.sunShadow[b]=Z,s.sunShadowMap[b]=q;let be=U.getViewportCount();for(let Te=0;Te<be;Te++)s.sunShadowMatrix[y+Te]=U.getMatrix(Te),s.sunShadowCascade[y+Te]=U._cascadeData[Te];y+=be,b++}s.sun[p]=W,p++}else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let U=B.shadow,Z=i.get(B);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,s.directionalShadow[A]=Z,s.directionalShadowMap[A]=q,s.directionalShadowMatrix[A]=B.shadow.matrix,M++}s.directional[A]=W,A++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(V).multiplyScalar(te),W.distance=Y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,s.spot[w]=W;let U=B.shadow;if(B.map){if(s.spotLightMap[_]=B.map,_++,U.updateMatrices(B),B.castShadow)T++}if(s.spotLightMatrix[w]=U.matrix,B.castShadow){let Z=i.get(B);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=q,P++}w++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy(V).multiplyScalar(te),W.halfWidth.set(B.width*0.5,0,0),W.halfHeight.set(0,B.height*0.5,0),s.rectArea[C]=W,C++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){let U=B.shadow,Z=i.get(B);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=B.shadow.matrix,S++}s.point[m]=W,m++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(te),W.groundColor.copy(B.groundColor).multiplyScalar(te),s.hemi[g]=W,g++}}if(C>0)if(e.has("OES_texture_float_linear")===true)s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2;else s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2;s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=d;let L=s.hash;if(L.sunLength!==p||L.directionalLength!==A||L.pointLength!==m||L.spotLength!==w||L.rectAreaLength!==C||L.hemiLength!==g||L.numSunShadows!==b||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==P||L.numSpotMaps!==_||L.numLightProbes!==F)s.sun.length=p,s.directional.length=A,s.spot.length=w,s.rectArea.length=C,s.point.length=m,s.hemi.length=g,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=y,s.sunShadowCascade.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.directionalShadowMatrix.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.pointShadowMatrix.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+_-T,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=T,s.numLightProbes=F,L.sunLength=p,L.directionalLength=A,L.pointLength=m,L.spotLength=w,L.rectAreaLength=C,L.hemiLength=g,L.numSunShadows=b,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=P,L.numSpotMaps=_,L.numLightProbes=F,s.version=y3++}function l(u,h){let f=0,d=0,p=0,b=0,y=0,A=0,m=h.matrixWorldInverse;for(let w=0,C=u.length;w<C;w++){let g=u[w];if(g.isSunLight){let M=s.sun[f];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),f++}else if(g.isDirectionalLight){let M=s.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(g.isSpotLight){let M=s.spot[b];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),b++}else if(g.isRectAreaLight){let M=s.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(g.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(g.width*0.5,0,0),M.halfHeight.set(0,g.height*0.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){let M=s.point[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),p++}else if(g.isHemisphereLight){let M=s.hemi[A];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),A++}}}return{setup:c,setupView:l,state:s}}function Kd(e){let t=new S3(e),i=[],s=[],r=[];function a(d){f.camera=d,i.length=0,s.length=0,r.length=0}function o(d){i.push(d)}function c(d){s.push(d)}function l(d){r.push(d)}function u(){t.setup(i)}function h(d){t.setupView(i,d)}let f={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:c,pushLightProbeGrid:l}}function w3(e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;if(o===undefined)c=new Kd(e),t.set(r,[c]);else if(a>=o.length)c=new Kd(e),o.push(c);else c=o[a];return c}function s(){t=new WeakMap}return{get:i,dispose:s}}var E3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T3=`uniform sampler2D shadow_pass;
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
}`,R3=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],C3=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Yd=new dt,oa=new I,uu=new I;function P3(e,t,i){let s=new Qr,r=new ze,a=new ze,o=new Gt,c=new Vl,l=new jl,u={},h=i.maxTextureSize,f={[ui]:Sn,[Sn]:ui,[Qt]:Qt},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:E3,fragmentShader:T3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new ct;b.setAttribute("position",new pt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new Ft(b,d),A=this;this.enabled=false,this.autoUpdate=true,this.needsUpdate=false,this.type=Vr;let m=this.type;this.render=function(S,P,_){if(A.enabled===false)return;if(A.autoUpdate===false&&A.needsUpdate===false)return;if(S.length===0)return;if(this.type===wh)tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr;let T=e.getRenderTarget(),F=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),k=e.state;if(k.setBlending(hi),k.buffers.depth.getReversed()===true)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(true),k.setScissorTest(false);let G=m!==this.type;if(G)P.traverse(function(B){if(B.material)if(Array.isArray(B.material))B.material.forEach((V)=>V.needsUpdate=true);else B.material.needsUpdate=true});for(let B=0,V=S.length;B<V;B++){let te=S[B],Y=te.shadow;if(Y===undefined){tt("WebGLShadowMap:",te,"has no shadow.");continue}if(Y.autoUpdate===false&&Y.needsUpdate===false)continue;r.copy(Y.mapSize);let q=Y.getFrameExtents();if(r.multiply(q),a.copy(Y.mapSize),r.x>h||r.y>h){if(r.x>h)a.x=Math.floor(h/q.x),r.x=a.x*q.x,Y.mapSize.x=a.x;if(r.y>h)a.y=Math.floor(h/q.y),r.y=a.y*q.y,Y.mapSize.y=a.y}let W=e.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||G===true){if(Y.map!==null){if(Y.map.depthTexture!==null)Y.map.depthTexture.dispose(),Y.map.depthTexture=null;Y.map.dispose()}if(this.type===tr){if(te.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Fn(r.x,r.y,{format:ys,type:pi,minFilter:Wt,magFilter:Wt,generateMipmaps:false}),Y.map.texture.name=te.name+".shadowMap",Y.map.depthTexture=new Ms(r.x,r.y,Di),Y.map.depthTexture.name=te.name+".shadowMapDepth",Y.map.depthTexture.format=xs,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ii,Y.map.depthTexture.magFilter=ii}else{if(te.isPointLight)Y.map=new pu(r.x),Y.map.depthTexture=new Fl(r.x,$i);else Y.map=new Fn(r.x,r.y),Y.map.depthTexture=new Ms(r.x,r.y,$i);if(Y.map.depthTexture.name=te.name+".shadowMap",Y.map.depthTexture.format=xs,this.type===Vr)Y.map.depthTexture.compareFunction=W?Ao:mo,Y.map.depthTexture.minFilter=Wt,Y.map.depthTexture.magFilter=Wt;else Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ii,Y.map.depthTexture.magFilter=ii}Y.camera.updateProjectionMatrix()}if(Y.map.isWebGLCubeRenderTarget!==true&&(Y.map.width!==r.x||Y.map.height!==r.y))Y.map.setSize(r.x,r.y);let U=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();if(te.isPointLight!==true)Y.updateMatrices(te,_);for(let Z=0;Z<U;Z++){let be=Y.getCamera(Z);if(te.isPointLight){let{camera:Te,matrix:ft}=Y,Qe=te.distance||Te.far;if(Qe!==Te.far)Te.far=Qe,Te.updateProjectionMatrix();oa.setFromMatrixPosition(te.matrixWorld),Te.position.copy(oa),uu.copy(Te.position),uu.add(R3[Z]),Te.up.copy(C3[Z]),Te.lookAt(uu),Te.updateMatrixWorld(),ft.makeTranslation(-oa.x,-oa.y,-oa.z),Yd.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Yd,Te.coordinateSystem,Te.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)e.setRenderTarget(Y.map,Z),e.clear();else{if(Z===0)e.setRenderTarget(Y.map),e.clear();let Te=Y.getViewport(Z);o.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),k.viewport(o)}s=Y.getFrustum(Z),g(P,_,be,te,this.type)}if(Y.isPointLightShadow!==true&&this.type===tr)w(Y,_);Y.needsUpdate=false}m=this.type,A.needsUpdate=false,e.setRenderTarget(T,F,L)};function w(S,P){let _=t.update(y);if(d.defines.VSM_SAMPLES!==S.blurSamples)d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=true,p.needsUpdate=true;if(S.mapPass===null)S.mapPass=new Fn(r.x,r.y,{format:ys,type:pi});else if(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)S.mapPass.setSize(S.map.width,S.map.height);d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(P,null,_,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(P,null,_,p,y,null)}function C(S,P,_,T){let F=null,L=_.isPointLight===true?S.customDistanceMaterial:S.customDepthMaterial;if(L!==undefined)F=L;else if(F=_.isPointLight===true?l:c,e.localClippingEnabled&&P.clipShadows===true&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===true){let k=F.uuid,G=P.uuid,B=u[k];if(B===undefined)B={},u[k]=B;let V=B[G];if(V===undefined)V=F.clone(),B[G]=V,P.addEventListener("dispose",M);F=V}if(F.visible=P.visible,F.wireframe=P.wireframe,T===tr)F.side=P.shadowSide!==null?P.shadowSide:P.side;else F.side=P.shadowSide!==null?P.shadowSide:f[P.side];if(F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===true?0.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,_.isPointLight===true&&F.isMeshDistanceMaterial===true){let k=e.properties.get(F);k.light=_}return F}function g(S,P,_,T,F){if(S.visible===false)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)){if((S.castShadow||S.receiveShadow&&F===tr)&&(!S.frustumCulled||S.intersectsFrustum(s))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let G=t.update(S),B=S.material;if(Array.isArray(B)){let V=G.groups;for(let te=0,Y=V.length;te<Y;te++){let q=V[te],W=B[q.materialIndex];if(W&&W.visible){let U=C(S,W,T,F);S.onBeforeShadow(e,S,P,_,G,U,q),e.renderBufferDirect(_,null,G,U,S,q),S.onAfterShadow(e,S,P,_,G,U,q)}}}else if(B.visible){let V=C(S,B,T,F);S.onBeforeShadow(e,S,P,_,G,V,null),e.renderBufferDirect(_,null,G,V,S,null),S.onAfterShadow(e,S,P,_,G,V,null)}}}let k=S.children;for(let G=0,B=k.length;G<B;G++)g(k[G],P,_,T,F)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in u){let T=u[_],F=S.target.uuid;if(F in T)T[F].dispose(),delete T[F]}}}function I3(e,t){function i(){let j=false,Ie=new Gt,ae=null,Re=new Gt(0,0,0,0);return{setMask:function(De){if(ae!==De&&!j)e.colorMask(De,De,De,De),ae=De},setLocked:function(De){j=De},setClear:function(De,Ae,Le,lt,Ut){if(Ut===true)De*=lt,Ae*=lt,Le*=lt;if(Ie.set(De,Ae,Le,lt),Re.equals(Ie)===false)e.clearColor(De,Ae,Le,lt),Re.copy(Ie)},reset:function(){j=false,ae=null,Re.set(-1,0,0,0)}}}function s(){let j=false,Ie=false,ae=null,Re=null,De=null;return{setReversed:function(Ae){if(Ie!==Ae){let Le=t.get("EXT_clip_control");if(Ae)Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT);else Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);Ie=Ae;let lt=De;De=null,this.setClear(lt)}},getReversed:function(){return Ie},setTest:function(Ae){if(Ae)fe(e.DEPTH_TEST);else Ye(e.DEPTH_TEST)},setMask:function(Ae){if(ae!==Ae&&!j)e.depthMask(Ae),ae=Ae},setFunc:function(Ae){if(Ie)Ae=pd[Ae];if(Re!==Ae){switch(Ae){case Gh:e.depthFunc(e.NEVER);break;case Wh:e.depthFunc(e.ALWAYS);break;case Vh:e.depthFunc(e.LESS);break;case Dc:e.depthFunc(e.LEQUAL);break;case jh:e.depthFunc(e.EQUAL);break;case qh:e.depthFunc(e.GEQUAL);break;case Xh:e.depthFunc(e.GREATER);break;case Kh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=Ae}},setLocked:function(Ae){j=Ae},setClear:function(Ae){if(De!==Ae){if(De=Ae,Ie)Ae=1-Ae;e.clearDepth(Ae)}},reset:function(){j=false,ae=null,Re=null,De=null,Ie=false}}}function r(){let j=false,Ie=null,ae=null,Re=null,De=null,Ae=null,Le=null,lt=null,Ut=null;return{setTest:function(Pt){if(!j)if(Pt)fe(e.STENCIL_TEST);else Ye(e.STENCIL_TEST)},setMask:function(Pt){if(Ie!==Pt&&!j)e.stencilMask(Pt),Ie=Pt},setFunc:function(Pt,An,ln){if(ae!==Pt||Re!==An||De!==ln)e.stencilFunc(Pt,An,ln),ae=Pt,Re=An,De=ln},setOp:function(Pt,An,ln){if(Ae!==Pt||Le!==An||lt!==ln)e.stencilOp(Pt,An,ln),Ae=Pt,Le=An,lt=ln},setLocked:function(Pt){j=Pt},setClear:function(Pt){if(Ut!==Pt)e.clearStencil(Pt),Ut=Pt},reset:function(){j=false,Ie=null,ae=null,Re=null,De=null,Ae=null,Le=null,lt=null,Ut=null}}}let a=new i,o=new s,c=new r,l=new WeakMap,u=new WeakMap,h={},f={},d={},p=new WeakMap,b=[],y=null,A=false,m=null,w=null,C=null,g=null,M=null,S=null,P=null,_=new He(0,0,0),T=0,F=false,L=null,k=null,G=null,B=null,V=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=false,q=0,W=e.getParameter(e.VERSION);if(W.indexOf("WebGL")!==-1)q=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=q>=1;else if(W.indexOf("OpenGL ES")!==-1)q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=q>=2;let U=null,Z={},be=e.getParameter(e.SCISSOR_BOX),Te=e.getParameter(e.VIEWPORT),ft=new Gt().fromArray(be),Qe=new Gt().fromArray(Te);function Q(j,Ie,ae,Re){let De=new Uint8Array(4),Ae=e.createTexture();e.bindTexture(j,Ae),e.texParameteri(j,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(j,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<ae;Le++)if(j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY)e.texImage3D(Ie,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,De);else e.texImage2D(Ie+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,De);return Ae}let ge={};ge[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),fe(e.DEPTH_TEST),o.setFunc(Dc),je(false),ut(Cc),fe(e.CULL_FACE),pe(hi);function fe(j){if(h[j]!==true)e.enable(j),h[j]=true}function Ye(j){if(h[j]!==false)e.disable(j),h[j]=false}function et(j,Ie){if(d[j]!==Ie){if(e.bindFramebuffer(j,Ie),d[j]=Ie,j===e.DRAW_FRAMEBUFFER)d[e.FRAMEBUFFER]=Ie;if(j===e.FRAMEBUFFER)d[e.DRAW_FRAMEBUFFER]=Ie;return true}return false}function Ne(j,Ie){let ae=b,Re=false;if(j){if(ae=p.get(Ie),ae===undefined)ae=[],p.set(Ie,ae);let De=j.textures;if(ae.length!==De.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let Ae=0,Le=De.length;Ae<Le;Ae++)ae[Ae]=e.COLOR_ATTACHMENT0+Ae;ae.length=De.length,Re=true}}else if(ae[0]!==e.BACK)ae[0]=e.BACK,Re=true;if(Re)e.drawBuffers(ae)}function Ct(j){if(y!==j)return e.useProgram(j),y=j,true;return false}let K={[nr]:e.FUNC_ADD,[Eh]:e.FUNC_SUBTRACT,[Th]:e.FUNC_REVERSE_SUBTRACT};K[Rh]=e.MIN,K[to]=e.MAX;let he={[Ch]:e.ZERO,[fi]:e.ONE,[Ph]:e.SRC_COLOR,[Dh]:e.SRC_ALPHA,[Oh]:e.SRC_ALPHA_SATURATE,[Nh]:e.DST_COLOR,[Lh]:e.DST_ALPHA,[Ih]:e.ONE_MINUS_SRC_COLOR,[no]:e.ONE_MINUS_SRC_ALPHA,[Uh]:e.ONE_MINUS_DST_COLOR,[Fh]:e.ONE_MINUS_DST_ALPHA,[Bh]:e.CONSTANT_COLOR,[kh]:e.ONE_MINUS_CONSTANT_COLOR,[zh]:e.CONSTANT_ALPHA,[Hh]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(j,Ie,ae,Re,De,Ae,Le,lt,Ut,Pt){if(j===hi){if(A===true)Ye(e.BLEND),A=false;return}if(A===false)fe(e.BLEND),A=true;if(j!==Ji){if(j!==m||Pt!==F){if(w!==nr||M!==nr)e.blendEquation(e.FUNC_ADD),w=nr,M=nr;if(Pt)switch(j){case di:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zt:e.blendFunc(e.ONE,e.ONE);break;case Pc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ic:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:mt("WebGLState: Invalid blending: ",j);break}else switch(j){case di:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Pc:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",j);break}C=null,g=null,S=null,P=null,_.set(0,0,0),T=0,m=j,F=Pt}return}if(De=De||Ie,Ae=Ae||ae,Le=Le||Re,Ie!==w||De!==M)e.blendEquationSeparate(K[Ie],K[De]),w=Ie,M=De;if(ae!==C||Re!==g||Ae!==S||Le!==P)e.blendFuncSeparate(he[ae],he[Re],he[Ae],he[Le]),C=ae,g=Re,S=Ae,P=Le;if(lt.equals(_)===false||Ut!==T)e.blendColor(lt.r,lt.g,lt.b,Ut),_.copy(lt),T=Ut;m=j,F=false}function J(j,Ie){j.side===Qt?Ye(e.CULL_FACE):fe(e.CULL_FACE);let ae=j.side===Sn;if(Ie)ae=!ae;je(ae),j.blending===di&&j.transparent===false?pe(hi):pe(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),a.setMask(j.colorWrite);let Re=j.stencilWrite;if(c.setTest(Re),Re)c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);xt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===true?fe(e.SAMPLE_ALPHA_TO_COVERAGE):Ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function je(j){if(L!==j){if(j)e.frontFace(e.CW);else e.frontFace(e.CCW);L=j}}function ut(j){if(j!==Mh){if(fe(e.CULL_FACE),j!==k)if(j===Cc)e.cullFace(e.BACK);else if(j===Sh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Ye(e.CULL_FACE);k=j}function Lt(j){if(j!==G){if(Y)e.lineWidth(j);G=j}}function xt(j,Ie,ae){if(j){if(fe(e.POLYGON_OFFSET_FILL),B!==Ie||V!==ae){if(B=Ie,V=ae,o.getReversed())Ie=-Ie;e.polygonOffset(Ie,ae)}}else Ye(e.POLYGON_OFFSET_FILL)}function ie(j){if(j)fe(e.SCISSOR_TEST);else Ye(e.SCISSOR_TEST)}function D(j){if(j===undefined)j=e.TEXTURE0+te-1;if(U!==j)e.activeTexture(j),U=j}function Ce(j,Ie,ae){if(ae===undefined)if(U===null)ae=e.TEXTURE0+te-1;else ae=U;let Re=Z[ae];if(Re===undefined)Re={type:undefined,texture:undefined},Z[ae]=Re;if(Re.type!==j||Re.texture!==Ie){if(U!==ae)e.activeTexture(ae),U=ae;e.bindTexture(j,Ie||ge[j]),Re.type=j,Re.texture=Ie}}function Pe(){let j=Z[U];if(j!==undefined&&j.type!==undefined)e.bindTexture(j.type,null),j.type=undefined,j.texture=undefined}function $e(){try{e.compressedTexImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function x(){try{e.texSubImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function N(){try{e.texSubImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function de(){try{e.compressedTexSubImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function me(){try{e.texStorage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function Se(){try{e.texStorage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function ne(){try{e.texImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function re(){try{e.texImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function Ue(j){if(f[j]!==undefined)return f[j];else return e.getParameter(j)}function Xe(j,Ie){if(f[j]!==Ie)e.pixelStorei(j,Ie),f[j]=Ie}function ve(j){if(ft.equals(j)===false)e.scissor(j.x,j.y,j.z,j.w),ft.copy(j)}function ye(j){if(Qe.equals(j)===false)e.viewport(j.x,j.y,j.z,j.w),Qe.copy(j)}function Ge(j,Ie){let ae=u.get(Ie);if(ae===undefined)ae=new WeakMap,u.set(Ie,ae);let Re=ae.get(j);if(Re===undefined)Re=e.getUniformBlockIndex(Ie,j.name),ae.set(j,Re)}function st(j,Ie){let Re=u.get(Ie).get(j);if(l.get(Ie)!==Re)e.uniformBlockBinding(Ie,Re,j.__bindingPointIndex),l.set(Ie,Re)}function Dt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(true,true,true,true),e.clearColor(0,0,0,0),e.depthMask(true),e.depthFunc(e.LESS),o.setReversed(false),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,false),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},U=null,Z={},d={},p=new WeakMap,b=[],y=null,A=false,m=null,w=null,C=null,g=null,M=null,S=null,P=null,_=new He(0,0,0),T=0,F=false,L=null,k=null,G=null,B=null,V=null,ft.set(0,0,e.canvas.width,e.canvas.height),Qe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:fe,disable:Ye,bindFramebuffer:et,drawBuffers:Ne,useProgram:Ct,setBlending:pe,setMaterial:J,setFlipSided:je,setCullFace:ut,setLineWidth:Lt,setPolygonOffset:xt,setScissorTest:ie,activeTexture:D,bindTexture:Ce,unbindTexture:Pe,compressedTexImage2D:$e,compressedTexImage3D:E,texImage2D:ne,texImage3D:re,pixelStorei:Xe,getParameter:Ue,updateUBOMapping:Ge,uniformBlockBinding:st,texStorage2D:me,texStorage3D:Se,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:X,compressedTexSubImage3D:de,scissor:ve,viewport:ye,reset:Dt}}function D3(e,t,i,s,r,a,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?false:/OculusBrowser/g.test(navigator.userAgent),u=new ze,h=new WeakMap,f=new Set,d,p=new WeakMap,b=false;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function y(E,x){return b?new OffscreenCanvas(E,x):$s("canvas")}function A(E,x,N){let X=1,de=$e(E);if(de.width>N||de.height>N)X=N/Math.max(de.width,de.height);if(X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let me=Math.floor(X*de.width),Se=Math.floor(X*de.height);if(d===undefined)d=y(me,Se);let ne=x?y(me,Se):d;return ne.width=me,ne.height=Se,ne.getContext("2d").drawImage(E,0,0,me,Se),tt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+me+"x"+Se+")."),ne}else{if("data"in E)tt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+").");return E}return E}function m(E){return E.generateMipmaps}function w(E){e.generateMipmap(E)}function C(E){if(E.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function g(E,x,N,X,de,me=false){if(E!==null){if(e[E]!==undefined)return e[E];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Se;if(X){if(Se=t.get("EXT_texture_norm16"),!Se)tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let ne=x;if(x===e.RED){if(N===e.FLOAT)ne=e.R32F;if(N===e.HALF_FLOAT)ne=e.R16F;if(N===e.UNSIGNED_BYTE)ne=e.R8;if(N===e.UNSIGNED_SHORT&&Se)ne=Se.R16_EXT;if(N===e.SHORT&&Se)ne=Se.R16_SNORM_EXT}if(x===e.RED_INTEGER){if(N===e.UNSIGNED_BYTE)ne=e.R8UI;if(N===e.UNSIGNED_SHORT)ne=e.R16UI;if(N===e.UNSIGNED_INT)ne=e.R32UI;if(N===e.BYTE)ne=e.R8I;if(N===e.SHORT)ne=e.R16I;if(N===e.INT)ne=e.R32I}if(x===e.RG){if(N===e.FLOAT)ne=e.RG32F;if(N===e.HALF_FLOAT)ne=e.RG16F;if(N===e.UNSIGNED_BYTE)ne=e.RG8;if(N===e.UNSIGNED_SHORT&&Se)ne=Se.RG16_EXT;if(N===e.SHORT&&Se)ne=Se.RG16_SNORM_EXT}if(x===e.RG_INTEGER){if(N===e.UNSIGNED_BYTE)ne=e.RG8UI;if(N===e.UNSIGNED_SHORT)ne=e.RG16UI;if(N===e.UNSIGNED_INT)ne=e.RG32UI;if(N===e.BYTE)ne=e.RG8I;if(N===e.SHORT)ne=e.RG16I;if(N===e.INT)ne=e.RG32I}if(x===e.RGB_INTEGER){if(N===e.UNSIGNED_BYTE)ne=e.RGB8UI;if(N===e.UNSIGNED_SHORT)ne=e.RGB16UI;if(N===e.UNSIGNED_INT)ne=e.RGB32UI;if(N===e.BYTE)ne=e.RGB8I;if(N===e.SHORT)ne=e.RGB16I;if(N===e.INT)ne=e.RGB32I}if(x===e.RGBA_INTEGER){if(N===e.UNSIGNED_BYTE)ne=e.RGBA8UI;if(N===e.UNSIGNED_SHORT)ne=e.RGBA16UI;if(N===e.UNSIGNED_INT)ne=e.RGBA32UI;if(N===e.BYTE)ne=e.RGBA8I;if(N===e.SHORT)ne=e.RGBA16I;if(N===e.INT)ne=e.RGBA32I}if(x===e.RGB){if(N===e.UNSIGNED_SHORT&&Se)ne=Se.RGB16_EXT;if(N===e.SHORT&&Se)ne=Se.RGB16_SNORM_EXT;if(N===e.UNSIGNED_INT_5_9_9_9_REV)ne=e.RGB9_E5;if(N===e.UNSIGNED_INT_10F_11F_11F_REV)ne=e.R11F_G11F_B10F}if(x===e.RGBA){let re=me?wl:Tt.getTransfer(de);if(N===e.FLOAT)ne=e.RGBA32F;if(N===e.HALF_FLOAT)ne=e.RGBA16F;if(N===e.UNSIGNED_BYTE)ne=re===Vt?e.SRGB8_ALPHA8:e.RGBA8;if(N===e.UNSIGNED_SHORT&&Se)ne=Se.RGBA16_EXT;if(N===e.SHORT&&Se)ne=Se.RGBA16_SNORM_EXT;if(N===e.UNSIGNED_SHORT_4_4_4_4)ne=e.RGBA4;if(N===e.UNSIGNED_SHORT_5_5_5_1)ne=e.RGB5_A1}if(ne===e.R16F||ne===e.R32F||ne===e.RG16F||ne===e.RG32F||ne===e.RGBA16F||ne===e.RGBA32F)t.get("EXT_color_buffer_float");return ne}function M(E,x){let N;if(E){if(x===null||x===$i||x===rr)N=e.DEPTH24_STENCIL8;else if(x===Di)N=e.DEPTH32F_STENCIL8;else if(x===qr)N=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===$i||x===rr)N=e.DEPTH_COMPONENT24;else if(x===Di)N=e.DEPTH_COMPONENT32F;else if(x===qr)N=e.DEPTH_COMPONENT16;return N}function S(E,x){if(m(E)===true||E.isFramebufferTexture&&E.minFilter!==ii&&E.minFilter!==Wt)return Math.log2(Math.max(x.width,x.height))+1;else if(E.mipmaps!==undefined&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return x.mipmaps.length;else return 1}function P(E){let x=E.target;if(x.removeEventListener("dispose",P),T(x),x.isVideoTexture)h.delete(x);if(x.isHTMLTexture)f.delete(x)}function _(E){let x=E.target;x.removeEventListener("dispose",_),L(x)}function T(E){let x=s.get(E);if(x.__webglInit===undefined)return;let N=E.source,X=p.get(N);if(X){let de=X[x.__cacheKey];if(de.usedTimes--,de.usedTimes===0)F(E);if(Object.keys(X).length===0)p.delete(N)}s.remove(E)}function F(E){let x=s.get(E);e.deleteTexture(x.__webglTexture);let N=E.source,X=p.get(N);delete X[x.__cacheKey],o.memory.textures--}function L(E){let x=s.get(E);if(E.depthTexture)E.depthTexture.dispose(),s.remove(E.depthTexture);if(E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let de=0;de<x.__webglFramebuffer[X].length;de++)e.deleteFramebuffer(x.__webglFramebuffer[X][de]);else e.deleteFramebuffer(x.__webglFramebuffer[X]);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)e.deleteFramebuffer(x.__webglFramebuffer[X]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)e.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let X=0;X<x.__webglColorRenderbuffer.length;X++)if(x.__webglColorRenderbuffer[X])e.deleteRenderbuffer(x.__webglColorRenderbuffer[X])}if(x.__webglDepthRenderbuffer)e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=E.textures;for(let X=0,de=N.length;X<de;X++){let me=s.get(N[X]);if(me.__webglTexture)e.deleteTexture(me.__webglTexture),o.memory.textures--;s.remove(N[X])}s.remove(E)}let k=0;function G(){k=0}function B(){return k}function V(E){k=E}function te(){let E=k;if(E>=r.maxTextures)tt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures);return k+=1,E}function Y(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function q(E,x){let N=s.get(E);if(E.isVideoTexture)Ce(E);if(E.isRenderTargetTexture===false&&E.isExternalTexture!==true&&E.version>0&&N.__version!==E.version){let X=E.image;if(X===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===false)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(N,E,x);return}}else if(E.isExternalTexture)N.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+x)}function W(E,x){let N=s.get(E);if(E.isRenderTargetTexture===false&&E.version>0&&N.__version!==E.version){Ye(N,E,x);return}else if(E.isExternalTexture)N.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+x)}function U(E,x){let N=s.get(E);if(E.isRenderTargetTexture===false&&E.version>0&&N.__version!==E.version){Ye(N,E,x);return}i.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+x)}function Z(E,x){let N=s.get(E);if(E.isCubeDepthTexture!==true&&E.version>0&&N.__version!==E.version){et(N,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+x)}let be={[ni]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[ro]:e.MIRRORED_REPEAT},Te={[ii]:e.NEAREST,[ao]:e.NEAREST_MIPMAP_NEAREST,[vs]:e.NEAREST_MIPMAP_LINEAR,[Wt]:e.LINEAR,[sr]:e.LINEAR_MIPMAP_NEAREST,[Hn]:e.LINEAR_MIPMAP_LINEAR},ft={[rd]:e.NEVER,[ud]:e.ALWAYS,[ad]:e.LESS,[mo]:e.LEQUAL,[od]:e.EQUAL,[Ao]:e.GEQUAL,[cd]:e.GREATER,[ld]:e.NOTEQUAL};function Qe(E,x){if(x.type===Di&&t.has("OES_texture_float_linear")===false&&(x.magFilter===Wt||x.magFilter===sr||x.magFilter===vs||x.magFilter===Hn||x.minFilter===Wt||x.minFilter===sr||x.minFilter===vs||x.minFilter===Hn))tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(E,e.TEXTURE_WRAP_S,be[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,be[x.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,be[x.wrapR]);if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,Te[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,ft[x.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===true){if(x.magFilter===ii)return;if(x.minFilter!==vs&&x.minFilter!==Hn)return;if(x.type===Di&&t.has("OES_texture_float_linear")===false)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function Q(E,x){let N=false;if(E.__webglInit===undefined)E.__webglInit=true,x.addEventListener("dispose",P);let X=x.source,de=p.get(X);if(de===undefined)de={},p.set(X,de);let me=Y(x);if(me!==E.__cacheKey){if(de[me]===undefined)de[me]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,N=true;de[me].usedTimes++;let Se=de[E.__cacheKey];if(Se!==undefined){if(de[E.__cacheKey].usedTimes--,Se.usedTimes===0)F(x)}E.__cacheKey=me,E.__webglTexture=de[me].texture}return N}function ge(E,x,N){return Math.floor(Math.floor(E/N)/x)}function fe(E,x,N,X){let me=E.updateRanges;if(me.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,N,X,x.data);else{me.sort((Xe,ve)=>Xe.start-ve.start);let Se=0;for(let Xe=1;Xe<me.length;Xe++){let ve=me[Se],ye=me[Xe],Ge=ve.start+ve.count,st=ge(ye.start,x.width,4),Dt=ge(ve.start,x.width,4);if(ye.start<=Ge+1&&st===Dt&&ge(ye.start+ye.count-1,x.width,4)===st)ve.count=Math.max(ve.count,ye.start+ye.count-ve.start);else++Se,me[Se]=ye}me.length=Se+1;let ne=i.getParameter(e.UNPACK_ROW_LENGTH),re=i.getParameter(e.UNPACK_SKIP_PIXELS),Ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Xe=0,ve=me.length;Xe<ve;Xe++){let ye=me[Xe],Ge=Math.floor(ye.start/4),st=Math.ceil(ye.count/4),Dt=Ge%x.width,j=Math.floor(Ge/x.width),Ie=st,ae=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(e.UNPACK_SKIP_ROWS,j),i.texSubImage2D(e.TEXTURE_2D,0,Dt,j,Ie,1,N,X,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ne),i.pixelStorei(e.UNPACK_SKIP_PIXELS,re),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ue)}}function Ye(E,x,N){let X=e.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)X=e.TEXTURE_2D_ARRAY;if(x.isData3DTexture)X=e.TEXTURE_3D;let de=Q(E,x),me=x.source;i.bindTexture(X,E.__webglTexture,e.TEXTURE0+N);let Se=s.get(me);if(me.version!==Se.__version||de===true){if(i.activeTexture(e.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===false){let ae=Tt.getPrimaries(Tt.workingColorSpace),Re=x.colorSpace===wn?null:Tt.getPrimaries(x.colorSpace),De=x.colorSpace===wn||ae===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let re=A(x.image,false,r.maxTextureSize);re=Pe(x,re);let Ue=a.convert(x.format,x.colorSpace),Xe=a.convert(x.type),ve=g(x.internalFormat,Ue,Xe,x.normalized,x.colorSpace,x.isVideoTexture);Qe(X,x);let ye,Ge=x.mipmaps,st=x.isVideoTexture!==true,Dt=Se.__version===undefined||de===true,j=me.dataReady,Ie=S(x,re);if(x.isDepthTexture){if(ve=M(x.format===_s,x.type),Dt)if(st)i.texStorage2D(e.TEXTURE_2D,1,ve,re.width,re.height);else i.texImage2D(e.TEXTURE_2D,0,ve,re.width,re.height,0,Ue,Xe,null)}else if(x.isDataTexture)if(Ge.length>0){if(st&&Dt)i.texStorage2D(e.TEXTURE_2D,Ie,ve,Ge[0].width,Ge[0].height);for(let ae=0,Re=Ge.length;ae<Re;ae++)if(ye=Ge[ae],st){if(j)i.texSubImage2D(e.TEXTURE_2D,ae,0,0,ye.width,ye.height,Ue,Xe,ye.data)}else i.texImage2D(e.TEXTURE_2D,ae,ve,ye.width,ye.height,0,Ue,Xe,ye.data);x.generateMipmaps=false}else if(st){if(Dt)i.texStorage2D(e.TEXTURE_2D,Ie,ve,re.width,re.height);if(j)fe(x,re,Ue,Xe)}else i.texImage2D(e.TEXTURE_2D,0,ve,re.width,re.height,0,Ue,Xe,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(st&&Dt)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ie,ve,Ge[0].width,Ge[0].height,re.depth);for(let ae=0,Re=Ge.length;ae<Re;ae++)if(ye=Ge[ae],x.format!==Gn)if(Ue!==null)if(st){if(j)if(x.layerUpdates.size>0){let De=su(ye.width,ye.height,x.format,x.type);for(let Ae of x.layerUpdates){let Le=ye.data.subarray(Ae*De/ye.data.BYTES_PER_ELEMENT,(Ae+1)*De/ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,Ae,ye.width,ye.height,1,Ue,Le)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,Ue,ye.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ae,ve,ye.width,ye.height,re.depth,0,ye.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(st){if(j)i.texSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,Ue,Xe,ye.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,ae,ve,ye.width,ye.height,re.depth,0,Ue,Xe,ye.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(st&&Dt)i.texStorage2D(e.TEXTURE_2D,Ie,ve,Ge[0].width,Ge[0].height);for(let ae=0,Re=Ge.length;ae<Re;ae++)if(ye=Ge[ae],x.format!==Gn)if(Ue!==null)if(st){if(j)i.compressedTexSubImage2D(e.TEXTURE_2D,ae,0,0,ye.width,ye.height,Ue,ye.data)}else i.compressedTexImage2D(e.TEXTURE_2D,ae,ve,ye.width,ye.height,0,ye.data);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(st){if(j)i.texSubImage2D(e.TEXTURE_2D,ae,0,0,ye.width,ye.height,Ue,Xe,ye.data)}else i.texImage2D(e.TEXTURE_2D,ae,ve,ye.width,ye.height,0,Ue,Xe,ye.data)}else if(x.isDataArrayTexture)if(st){if(Dt)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ie,ve,re.width,re.height,re.depth);if(j)if(x.layerUpdates.size>0){let ae=su(re.width,re.height,x.format,x.type);for(let Re of x.layerUpdates){let De=re.data.subarray(Re*ae/re.data.BYTES_PER_ELEMENT,(Re+1)*ae/re.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Re,re.width,re.height,1,Ue,Xe,De)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ue,Xe,re.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,Ue,Xe,re.data);else if(x.isData3DTexture)if(st){if(Dt)i.texStorage3D(e.TEXTURE_3D,Ie,ve,re.width,re.height,re.depth);if(j)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ue,Xe,re.data)}else i.texImage3D(e.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,Ue,Xe,re.data);else if(x.isFramebufferTexture){if(Dt)if(st)i.texStorage2D(e.TEXTURE_2D,Ie,ve,re.width,re.height);else{let ae=re.width,Re=re.height;for(let De=0;De<Ie;De++)i.texImage2D(e.TEXTURE_2D,De,ve,ae,Re,0,Ue,Xe,null),ae>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let ae=e.canvas;if(!ae.hasAttribute("layoutsubtree"))ae.setAttribute("layoutsubtree","true");if(re.parentNode!==ae){ae.appendChild(re),f.add(x),ae.onpaint=(Re)=>{let De=Re.changedElements;for(let Ae of f)if(De.includes(Ae.image))Ae.needsUpdate=true},ae.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,re);else{let{RGBA:De,RGBA:Ae,UNSIGNED_BYTE:Le}=e;e.texElementImage2D(e.TEXTURE_2D,0,De,Ae,Le,re)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(st&&Dt){let ae=$e(Ge[0]);i.texStorage2D(e.TEXTURE_2D,Ie,ve,ae.width,ae.height)}for(let ae=0,Re=Ge.length;ae<Re;ae++)if(ye=Ge[ae],st){if(j)i.texSubImage2D(e.TEXTURE_2D,ae,0,0,Ue,Xe,ye)}else i.texImage2D(e.TEXTURE_2D,ae,ve,Ue,Xe,ye);x.generateMipmaps=false}else if(st){if(Dt){let ae=$e(re);i.texStorage2D(e.TEXTURE_2D,Ie,ve,ae.width,ae.height)}if(j)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Ue,Xe,re)}else i.texImage2D(e.TEXTURE_2D,0,ve,Ue,Xe,re);if(m(x))w(X);if(Se.__version=me.version,x.onUpdate)x.onUpdate(x)}E.__version=x.version}function et(E,x,N){if(x.image.length!==6)return;let X=Q(E,x),de=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+N);let me=s.get(de);if(de.version!==me.__version||X===true){i.activeTexture(e.TEXTURE0+N);let Se=Tt.getPrimaries(Tt.workingColorSpace),ne=x.colorSpace===wn?null:Tt.getPrimaries(x.colorSpace),re=x.colorSpace===wn||Se===ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Xe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Ae=0;Ae<6;Ae++){if(!Ue&&!Xe)ve[Ae]=A(x.image[Ae],true,r.maxCubemapSize);else ve[Ae]=Xe?x.image[Ae].image:x.image[Ae];ve[Ae]=Pe(x,ve[Ae])}let ye=ve[0],Ge=a.convert(x.format,x.colorSpace),st=a.convert(x.type),Dt=g(x.internalFormat,Ge,st,x.normalized,x.colorSpace),j=x.isVideoTexture!==true,Ie=me.__version===undefined||X===true,ae=de.dataReady,Re=S(x,ye);Qe(e.TEXTURE_CUBE_MAP,x);let De;if(Ue){if(j&&Ie)i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Dt,ye.width,ye.height);for(let Ae=0;Ae<6;Ae++){De=ve[Ae].mipmaps;for(let Le=0;Le<De.length;Le++){let lt=De[Le];if(x.format!==Gn)if(Ge!==null)if(j){if(ae)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le,0,0,lt.width,lt.height,Ge,lt.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le,Dt,lt.width,lt.height,0,lt.data);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le,0,0,lt.width,lt.height,Ge,st,lt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le,Dt,lt.width,lt.height,0,Ge,st,lt.data)}}}else{if(De=x.mipmaps,j&&Ie){if(De.length>0)Re++;let Ae=$e(ve[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Dt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Xe){if(j){if(ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ve[Ae].width,ve[Ae].height,Ge,st,ve[Ae].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Dt,ve[Ae].width,ve[Ae].height,0,Ge,st,ve[Ae].data);for(let Le=0;Le<De.length;Le++){let Ut=De[Le].image[Ae].image;if(j){if(ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le+1,0,0,Ut.width,Ut.height,Ge,st,Ut.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le+1,Dt,Ut.width,Ut.height,0,Ge,st,Ut.data)}}else{if(j){if(ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ge,st,ve[Ae])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Dt,Ge,st,ve[Ae]);for(let Le=0;Le<De.length;Le++){let lt=De[Le];if(j){if(ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le+1,0,0,Ge,st,lt.image[Ae])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le+1,Dt,Ge,st,lt.image[Ae])}}}if(m(x))w(e.TEXTURE_CUBE_MAP);if(me.__version=de.version,x.onUpdate)x.onUpdate(x)}E.__version=x.version}function Ne(E,x,N,X,de,me){let Se=a.convert(N.format,N.colorSpace),ne=a.convert(N.type),re=g(N.internalFormat,Se,ne,N.normalized,N.colorSpace),Ue=s.get(x),Xe=s.get(N);if(Xe.__renderTarget=x,!Ue.__hasExternalTextures){let ve=Math.max(1,x.width>>me),ye=Math.max(1,x.height>>me);if(de===e.TEXTURE_3D||de===e.TEXTURE_2D_ARRAY)i.texImage3D(de,me,re,ve,ye,x.depth,0,Se,ne,null);else i.texImage2D(de,me,re,ve,ye,0,Se,ne,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,E),D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,de,Xe.__webglTexture,0,ie(x));else if(de===e.TEXTURE_2D||de>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,X,de,Xe.__webglTexture,me);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(E,x,N){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){let X=x.depthTexture,de=X&&X.isDepthTexture?X.type:null,me=M(x.stencilBuffer,de),Se=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(D(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(x),me,x.width,x.height);else if(N)e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(x),me,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,me,x.width,x.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,E)}else{let X=x.textures;for(let de=0;de<X.length;de++){let me=X[de],Se=a.convert(me.format,me.colorSpace),ne=a.convert(me.type),re=g(me.internalFormat,Se,ne,me.normalized,me.colorSpace);if(D(x))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(x),re,x.width,x.height);else if(N)e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(x),re,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,re,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function K(E,x,N){let X=x.isWebGLCubeRenderTarget===true;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=s.get(x.depthTexture);if(de.__renderTarget=x,!de.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=true;if(X){if(de.__webglInit===undefined)de.__webglInit=true,x.depthTexture.addEventListener("dispose",P);if(de.__webglTexture===undefined){de.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,de.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,x.depthTexture);let Ue=a.convert(x.depthTexture.format),Xe=a.convert(x.depthTexture.type),ve;if(x.depthTexture.format===xs)ve=e.DEPTH_COMPONENT24;else if(x.depthTexture.format===_s)ve=e.DEPTH24_STENCIL8;for(let ye=0;ye<6;ye++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,x.width,x.height,0,Ue,Xe,null)}}else q(x.depthTexture,0);let me=de.__webglTexture,Se=ie(x),ne=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,re=x.depthTexture.format===_s?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===xs)if(D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,ne,me,0,Se);else e.framebufferTexture2D(e.FRAMEBUFFER,re,ne,me,0);else if(x.depthTexture.format===_s)if(D(x))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,ne,me,0,Se);else e.framebufferTexture2D(e.FRAMEBUFFER,re,ne,me,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(E){let x=s.get(E),N=E.isWebGLCubeRenderTarget===true;if(x.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(X){let de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",de)};X.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=X}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)K(x.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;if(X&&X.length>0)K(x.__webglFramebuffer[0],E,0);else K(x.__webglFramebuffer,E,0)}else if(N){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===undefined)x.__webglDepthbuffer[X]=e.createRenderbuffer(),Ct(x.__webglDepthbuffer[X],E,false);else{let de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,me)}}else{let X=E.texture.mipmaps;if(X&&X.length>0)i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===undefined)x.__webglDepthbuffer=e.createRenderbuffer(),Ct(x.__webglDepthbuffer,E,false);else{let de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,me)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(E,x,N){let X=s.get(E);if(x!==undefined)Ne(X.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(N!==undefined)he(E)}function J(E){let x=E.texture,N=s.get(E),X=s.get(x);E.addEventListener("dispose",_);let de=E.textures,me=E.isWebGLCubeRenderTarget===true,Se=de.length>1;if(!Se){if(X.__webglTexture===undefined)X.__webglTexture=e.createTexture();X.__version=x.version,o.memory.textures++}if(me){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let re=0;re<x.mipmaps.length;re++)N.__webglFramebuffer[ne][re]=e.createFramebuffer()}else N.__webglFramebuffer[ne]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)N.__webglFramebuffer[ne]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(Se)for(let ne=0,re=de.length;ne<re;ne++){let Ue=s.get(de[ne]);if(Ue.__webglTexture===undefined)Ue.__webglTexture=e.createTexture(),o.memory.textures++}if(E.samples>0&&D(E)===false){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<de.length;ne++){let re=de[ne];N.__webglColorRenderbuffer[ne]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);let Ue=a.convert(re.format,re.colorSpace),Xe=a.convert(re.type),ve=g(re.internalFormat,Ue,Xe,re.normalized,re.colorSpace,E.isXRRenderTarget===true),ye=ie(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ve,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)N.__webglDepthRenderbuffer=e.createRenderbuffer(),Ct(N.__webglDepthRenderbuffer,E,true);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Ne(N.__webglFramebuffer[ne][re],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else Ne(N.__webglFramebuffer[ne],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);if(m(x))w(e.TEXTURE_CUBE_MAP);i.unbindTexture()}else if(Se){for(let ne=0,re=de.length;ne<re;ne++){let Ue=de[ne],Xe=s.get(Ue),ve=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)ve=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ve,Xe.__webglTexture),Qe(ve,Ue),Ne(N.__webglFramebuffer,E,Ue,e.COLOR_ATTACHMENT0+ne,ve,0),m(Ue))w(ve)}i.unbindTexture()}else{let ne=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)ne=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ne,X.__webglTexture),Qe(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Ne(N.__webglFramebuffer[re],E,x,e.COLOR_ATTACHMENT0,ne,re);else Ne(N.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,ne,0);if(m(x))w(ne);i.unbindTexture()}if(E.depthBuffer)he(E)}function je(E){let x=E.textures;for(let N=0,X=x.length;N<X;N++){let de=x[N];if(m(de)){let me=C(E),Se=s.get(de).__webglTexture;i.bindTexture(me,Se),w(me),i.unbindTexture()}}}let ut=[],Lt=[];function xt(E){if(E.samples>0){if(D(E)===false){let{textures:x,width:N,height:X}=E,de=e.COLOR_BUFFER_BIT,me=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=s.get(E),ne=x.length>1;if(ne)for(let Ue=0;Ue<x.length;Ue++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let re=E.texture.mipmaps;if(re&&re.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(E.resolveDepthBuffer){if(E.depthBuffer)de|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)de|=e.STENCIL_BUFFER_BIT}if(ne){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);let Xe=s.get(x[Ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Xe,0)}if(e.blitFramebuffer(0,0,N,X,0,0,N,X,de,e.NEAREST),l===true){if(ut.length=0,Lt.length=0,ut.push(e.COLOR_ATTACHMENT0+Ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===false)ut.push(me),Lt.push(me),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Lt);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ne)for(let Ue=0;Ue<x.length;Ue++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);let Xe=s.get(x[Ue]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.TEXTURE_2D,Xe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===false&&l){let x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ie(E){return Math.min(r.maxSamples,E.samples)}function D(E){let x=s.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===true&&x.__useRenderToTexture!==false}function Ce(E){let x=o.render.frame;if(h.get(E)!==x)h.set(E,x),E.update()}function Pe(E,x){let{colorSpace:N,format:X,type:de}=E;if(E.isCompressedTexture===true||E.isVideoTexture===true)return x;if(N!==Ln&&N!==wn)if(Tt.getTransfer(N)===Vt){if(X!==Gn||de!==_n)tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else mt("WebGLTextures: Unsupported texture color space:",N);return x}function $e(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)u.width=E.displayWidth,u.height=E.displayHeight;else u.width=E.width,u.height=E.height;return u}this.allocateTextureUnit=te,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=pe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function L3(e,t){function i(s,r=wn){let a,o=Tt.getTransfer(r);if(s===_n)return e.UNSIGNED_BYTE;if(s===Hc)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Gc)return e.UNSIGNED_SHORT_5_5_5_1;if(s===ed)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===td)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===$h)return e.BYTE;if(s===Qh)return e.SHORT;if(s===qr)return e.UNSIGNED_SHORT;if(s===zc)return e.INT;if(s===$i)return e.UNSIGNED_INT;if(s===Di)return e.FLOAT;if(s===pi)return e.HALF_FLOAT;if(s===nd)return e.ALPHA;if(s===id)return e.RGB;if(s===Gn)return e.RGBA;if(s===xs)return e.DEPTH_COMPONENT;if(s===_s)return e.DEPTH_STENCIL;if(s===mi)return e.RED;if(s===Wc)return e.RED_INTEGER;if(s===ys)return e.RG;if(s===Vc)return e.RG_INTEGER;if(s===jc)return e.RGBA_INTEGER;if(s===oo||s===co||s===lo||s===uo)if(o===Vt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qc||s===Xc||s===Kc||s===Yc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jc||s===Zc||s===$c||s===Qc||s===el||s===ho||s===tl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jc||s===Zc)return o===Vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$c)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===Qc)return a.COMPRESSED_R11_EAC;if(s===el)return a.COMPRESSED_SIGNED_R11_EAC;if(s===ho)return a.COMPRESSED_RG11_EAC;if(s===tl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===nl||s===il||s===sl||s===rl||s===al||s===ol||s===cl||s===ll||s===ul||s===hl||s===dl||s===fl||s===pl||s===ml)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ol)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ll)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ul)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ml)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Al||s===gl||s===bl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Al)return o===Vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vl||s===xl||s===fo||s===_l)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===vl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(s===rr)return e.UNSIGNED_INT_24_8;return e[s]!==undefined?e[s]:null}return{convert:i}}var F3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N3=`
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

}`;class cf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Eo(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:F3,fragmentShader:N3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Xn(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lf extends Li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",y=new cf,A={},m=t.getContextAttributes(),w=null,C=null,g=[],M=[],S=new ze,P=null,_=null,T=new hn;T.viewport=new Gt;let F=new hn;F.viewport=new Gt;let L=[T,F],k=new eu,G=null,B=null;this.cameraAutoUpdate=true,this.enabled=false,this.isPresenting=false,this.getController=function(Q){let ge=g[Q];if(ge===undefined)ge=new Yr,g[Q]=ge;return ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=g[Q];if(ge===undefined)ge=new Yr,g[Q]=ge;return ge.getGripSpace()},this.getHand=function(Q){let ge=g[Q];if(ge===undefined)ge=new Yr,g[Q]=ge;return ge.getHandSpace()};function V(Q){let ge=M.indexOf(Q.inputSource);if(ge===-1)return;let fe=g[ge];if(fe!==undefined)fe.update(Q.inputSource,Q.frame,l||a),fe.dispatchEvent({type:Q.type,data:Q.inputSource})}function te(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<g.length;Q++){let ge=M[Q];if(ge===null)continue;M[Q]=null,g[Q].disconnect(ge)}G=null,B=null,y.reset();for(let Q in A)delete A[Q];if(e.setRenderTarget(w),d=null,f=null,h=null,s=null,C=null,Qe.stop(),i.isPresenting=false,e.setPixelRatio(P),e.setSize(S.width,S.height,false),_!==null){let Q=_.camera;Q.fov=_.fov,Q.zoom=_.zoom,Q.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){if(r=Q,i.isPresenting===true)tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){if(o=Q,i.isPresenting===true)tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){if(h===null&&b)h=new XRWebGLBinding(s,t);return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",te),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==true)await t.makeXRCompatible();if(P=e.getPixelRatio(),e.getSize(S),!(b&&("createProjectionLayer"in XRWebGLBinding.prototype))){let fe={antialias:m.antialias,alpha:true,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,false),C=new Fn(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===false,resolveStencilBuffer:d.ignoreDepthValues===false,storeMultisampledDepthBuffer:d.ignoreDepthValues===false,storeMultisampledStencilBuffer:d.ignoreDepthValues===false})}else{let fe=null,Ye=null,et=null;if(m.depth)et=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?_s:xs,Ye=m.stencil?rr:$i;let Ne={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,false),C=new Fn(f.textureWidth,f.textureHeight,{format:Gn,type:_n,depthTexture:new Ms(f.textureWidth,f.textureHeight,Ye,undefined,undefined,undefined,undefined,undefined,undefined,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===false,resolveStencilBuffer:f.ignoreDepthValues===false,storeMultisampledDepthBuffer:f.ignoreDepthValues===false,storeMultisampledStencilBuffer:f.ignoreDepthValues===false})}C.isXRRenderTarget=true,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=true,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(Q){for(let ge=0;ge<Q.removed.length;ge++){let fe=Q.removed[ge],Ye=M.indexOf(fe);if(Ye>=0)M[Ye]=null,g[Ye].disconnect(fe)}for(let ge=0;ge<Q.added.length;ge++){let fe=Q.added[ge],Ye=M.indexOf(fe);if(Ye===-1){for(let Ne=0;Ne<g.length;Ne++)if(Ne>=M.length){M.push(fe),Ye=Ne;break}else if(M[Ne]===null){M[Ne]=fe,Ye=Ne;break}if(Ye===-1)break}let et=g[Ye];if(et)et.connect(fe)}}let q=new I,W=new I;function U(Q,ge,fe){q.setFromMatrixPosition(ge.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);let Ye=q.distanceTo(W),et=ge.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,Ct=et[14]/(et[10]-1),K=et[14]/(et[10]+1),he=(et[9]+1)/et[5],pe=(et[9]-1)/et[5],J=(et[8]-1)/et[0],je=(Ne[8]+1)/Ne[0],ut=Ct*J,Lt=Ct*je,xt=Ye/(-J+je),ie=xt*-J;if(ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ie),Q.translateZ(xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),et[10]===-1)Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let D=Ct+xt,Ce=K+xt,Pe=ut-ie,$e=Lt+(Ye-ie),E=he*K/Ce*D,x=pe*K/Ce*D;Q.projectionMatrix.makePerspective(Pe,$e,E,x,D,Ce),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Z(Q,ge){if(ge===null)Q.matrixWorld.copy(Q.matrix);else Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix);Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let{near:ge,far:fe}=Q;if(y.texture!==null){if(y.depthNear>0)ge=y.depthNear;if(y.depthFar>0)fe=y.depthFar}if(k.near=F.near=T.near=ge,k.far=F.far=T.far=fe,G!==k.near||B!==k.far)s.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,B=k.far;k.layers.mask=Q.layers.mask|6,T.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let Ye=Q.parent,et=k.cameras;Z(k,Ye);for(let Ne=0;Ne<et.length;Ne++)Z(et[Ne],Ye);if(et.length===2)U(k,T,F);else k.projectionMatrix.copy(T.projectionMatrix);if(_===null&&Q.isPerspectiveCamera)_={camera:Q,fov:Q.fov,zoom:Q.zoom};be(Q,k,Ye)};function be(Q,ge,fe){if(fe===null)Q.matrix.copy(ge.matrixWorld);else Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld);if(Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(true),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera)Q.fov=As*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1}this.getCamera=function(){return k},this.getFoveation=function(){if(f===null&&d===null)return;return c},this.setFoveation=function(Q){if(c=Q,f!==null)f.fixedFoveation=Q;if(d!==null&&d.fixedFoveation!==undefined)d.fixedFoveation=Q},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(Q){return A[Q]};let Te=null;function ft(Q,ge){if(u=ge.getViewerPose(l||a),p=ge,u!==null){let fe=u.views;if(d!==null)e.setRenderTargetFramebuffer(C,d.framebuffer),e.setRenderTarget(C);let Ye=false;if(fe.length!==k.cameras.length)k.cameras.length=0,Ye=true;for(let K=0;K<fe.length;K++){let he=fe[K],pe=null;if(d!==null)pe=d.getViewport(he);else{let je=h.getViewSubImage(f,he);if(pe=je.viewport,K===0)e.setRenderTargetTextures(C,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(C)}let J=L[K];if(J===undefined)J=new hn,J.layers.enable(K),J.viewport=new Gt,L[K]=J;if(J.matrix.fromArray(he.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(he.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(pe.x,pe.y,pe.width,pe.height),K===0)k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);if(Ye===true)k.cameras.push(J)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=i.getBinding();let K=h.getDepthInformation(fe[0]);if(K&&K.isValid&&K.texture)y.init(K,s.renderState)}if(et&&et.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let K=0;K<fe.length;K++){let he=fe[K].camera;if(he){let pe=A[he];if(!pe)pe=new Eo,A[he]=pe;let J=h.getCameraImage(he);pe.sourceTexture=J}}}}for(let fe=0;fe<g.length;fe++){let Ye=M[fe],et=g[fe];if(Ye!==null&&et!==undefined)et.update(Ye,ge,l||a)}if(Te)Te(Q,ge);if(ge.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ge});p=null}let Qe=new Jd;Qe.setAnimationLoop(ft),this.setAnimationLoop=function(Q){Te=Q},this.dispose=function(){}}}var U3=new dt,uf=new gt;uf.set(-1,0,0,0,1,0,0,0,1);function O3(e,t){function i(A,m){if(A.matrixAutoUpdate===true)A.updateMatrix();m.value.copy(A.matrix)}function s(A,m){if(m.color.getRGB(A.fogColor.value,Gl(e)),m.isFog)A.fogNear.value=m.near,A.fogFar.value=m.far;else if(m.isFogExp2)A.fogDensity.value=m.density}function r(A,m,w,C,g){if(m.isNodeMaterial)m.uniformsNeedUpdate=false;else if(m.isMeshBasicMaterial)a(A,m);else if(m.isMeshLambertMaterial){if(a(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)a(A,m),f(A,m);else if(m.isMeshPhongMaterial){if(a(A,m),h(A,m),m.envMap)A.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(a(A,m),d(A,m),m.isMeshPhysicalMaterial)p(A,m,g)}else if(m.isMeshMatcapMaterial)a(A,m),b(A,m);else if(m.isMeshDepthMaterial)a(A,m);else if(m.isMeshDistanceMaterial)a(A,m),y(A,m);else if(m.isMeshNormalMaterial)a(A,m);else if(m.isLineBasicMaterial){if(o(A,m),m.isLineDashedMaterial)c(A,m)}else if(m.isPointsMaterial)l(A,m,w,C);else if(m.isSpriteMaterial)u(A,m);else if(m.isShadowMaterial)A.color.value.copy(m.color),A.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=false}function a(A,m){if(A.opacity.value=m.opacity,m.color)A.diffuse.value.copy(m.color);if(m.emissive)A.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.bumpMap){if(A.bumpMap.value=m.bumpMap,i(m.bumpMap,A.bumpMapTransform),A.bumpScale.value=m.bumpScale,m.side===Sn)A.bumpScale.value*=-1}if(m.normalMap){if(A.normalMap.value=m.normalMap,i(m.normalMap,A.normalMapTransform),A.normalScale.value.copy(m.normalScale),m.side===Sn)A.normalScale.value.negate()}if(m.displacementMap)A.displacementMap.value=m.displacementMap,i(m.displacementMap,A.displacementMapTransform),A.displacementScale.value=m.displacementScale,A.displacementBias.value=m.displacementBias;if(m.emissiveMap)A.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,A.emissiveMapTransform);if(m.specularMap)A.specularMap.value=m.specularMap,i(m.specularMap,A.specularMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest;let w=t.get(m),{envMap:C,envMapRotation:g}=w;if(C){if(A.envMap.value=C,A.envMapRotation.value.setFromMatrix4(U3.makeRotationFromEuler(g)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===false)A.envMapRotation.value.premultiply(uf);A.reflectivity.value=m.reflectivity,A.ior.value=m.ior,A.refractionRatio.value=m.refractionRatio}if(m.lightMap)A.lightMap.value=m.lightMap,A.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,A.lightMapTransform);if(m.aoMap)A.aoMap.value=m.aoMap,A.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,A.aoMapTransform)}function o(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,m.map)A.map.value=m.map,i(m.map,A.mapTransform)}function c(A,m){A.dashSize.value=m.dashSize,A.totalSize.value=m.dashSize+m.gapSize,A.scale.value=m.scale}function l(A,m,w,C){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.size.value=m.size*w,A.scale.value=C*0.5,m.map)A.map.value=m.map,i(m.map,A.uvTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function u(A,m){if(A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.rotation.value=m.rotation,m.map)A.map.value=m.map,i(m.map,A.mapTransform);if(m.alphaMap)A.alphaMap.value=m.alphaMap,i(m.alphaMap,A.alphaMapTransform);if(m.alphaTest>0)A.alphaTest.value=m.alphaTest}function h(A,m){A.specular.value.copy(m.specular),A.shininess.value=Math.max(m.shininess,0.0001)}function f(A,m){if(m.gradientMap)A.gradientMap.value=m.gradientMap}function d(A,m){if(A.metalness.value=m.metalness,m.metalnessMap)A.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,A.metalnessMapTransform);if(A.roughness.value=m.roughness,m.roughnessMap)A.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,A.roughnessMapTransform);if(m.envMap)A.envMapIntensity.value=m.envMapIntensity}function p(A,m,w){if(A.ior.value=m.ior,m.sheen>0){if(A.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),A.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)A.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,A.sheenColorMapTransform);if(m.sheenRoughnessMap)A.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,A.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(A.clearcoat.value=m.clearcoat,A.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)A.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,A.clearcoatMapTransform);if(m.clearcoatRoughnessMap)A.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(A.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn)A.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)A.dispersion.value=m.dispersion;if(m.retroreflectivity>0)A.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(A.iridescence.value=m.iridescence,A.iridescenceIOR.value=m.iridescenceIOR,A.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)A.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,A.iridescenceMapTransform);if(m.iridescenceThicknessMap)A.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,A.iridescenceThicknessMapTransform)}if(m.transmission>0){if(A.transmission.value=m.transmission,A.transmissionSamplerMap.value=w.texture,A.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap)A.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,A.transmissionMapTransform);if(A.thickness.value=m.thickness,m.thicknessMap)A.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,A.thicknessMapTransform);A.attenuationDistance.value=m.attenuationDistance,A.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(A.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)A.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,A.anisotropyMapTransform)}if(A.specularIntensity.value=m.specularIntensity,A.specularColor.value.copy(m.specularColor),m.specularColorMap)A.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,A.specularColorMapTransform);if(m.specularIntensityMap)A.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,A.specularIntensityMapTransform)}function b(A,m){if(m.matcap)A.matcap.value=m.matcap}function y(A,m){let w=t.get(m).light;A.referencePosition.value.setFromMatrixPosition(w.matrixWorld),A.nearDistance.value=w.shadow.camera.near,A.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function B3(e,t,i,s){let r={},a={},o=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,M){let S=M.program;s.uniformBlockBinding(g,S)}function u(g,M){let S=r[g.id];if(S===undefined)A(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",w);let P=M.program;s.updateUBOMapping(g,P);let _=t.render.frame;if(a[g.id]!==_)d(g),a[g.id]=_}function h(g){let M=f();g.__bindingPointIndex=M;let S=e.createBuffer(),{__size:P,usage:_}=g;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,P,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,S),S}function f(){for(let g=0;g<c;g++)if(o.indexOf(g)===-1)return o.push(g),g;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){let M=r[g.id],{uniforms:S,__cache:P}=g;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let _=0,T=S.length;_<T;_++){let F=S[_];if(Array.isArray(F))for(let L=0,k=F.length;L<k;L++)p(F[L],_,L,P);else p(F,_,0,P)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,M,S,P){if(y(g,M,S,P)===true){let{__offset:_,value:T}=g;if(Array.isArray(T)){let F=0;for(let L=0;L<T.length;L++){let k=T[L],G=m(k);if(b(k,g.__data,F),typeof k!=="number"&&typeof k!=="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k))F+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else b(T,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,g.__data)}}function b(g,M,S){if(typeof g==="number"||typeof g==="boolean")M[0]=g;else if(g.isMatrix3)M[0]=g.elements[0],M[1]=g.elements[1],M[2]=g.elements[2],M[3]=0,M[4]=g.elements[3],M[5]=g.elements[4],M[6]=g.elements[5],M[7]=0,M[8]=g.elements[6],M[9]=g.elements[7],M[10]=g.elements[8],M[11]=0;else if(ArrayBuffer.isView(g))M.set(new g.constructor(g.buffer,g.byteOffset,M.length));else g.toArray(M,S)}function y(g,M,S,P){let _=g.value,T=M+"_"+S;if(P[T]===undefined){if(typeof _==="number"||typeof _==="boolean")P[T]=_;else if(ArrayBuffer.isView(_))P[T]=_.slice();else P[T]=_.clone();return true}else{let F=P[T];if(typeof _==="number"||typeof _==="boolean"){if(F!==_)return P[T]=_,true}else if(ArrayBuffer.isView(_))return true;else if(F.equals(_)===false)return F.copy(_),true}return false}function A(g){let M=g.uniforms,S=0,P=16;for(let T=0,F=M.length;T<F;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let k=0,G=L.length;k<G;k++){let B=L[k],V=Array.isArray(B.value)?B.value:[B.value];for(let te=0,Y=V.length;te<Y;te++){let q=V[te],W=m(q),U=S%P,Z=U%W.boundary,be=U+Z;if(S+=Z,be!==0&&P-be<W.storage)S+=P-be;B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=W.storage}}}let _=S%P;if(_>0)S+=P-_;return g.__size=S,g.__cache={},this}function m(g){let M={boundary:0,storage:0};if(typeof g==="number"||typeof g==="boolean")M.boundary=4,M.storage=4;else if(g.isVector2)M.boundary=8,M.storage=8;else if(g.isVector3||g.isColor)M.boundary=16,M.storage=12;else if(g.isVector4)M.boundary=16,M.storage=16;else if(g.isMatrix3)M.boundary=48,M.storage=48;else if(g.isMatrix4)M.boundary=64,M.storage=64;else if(g.isTexture)tt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(g))M.boundary=16,M.storage=g.byteLength;else tt("WebGLRenderer: Unsupported uniform value type.",g);return M}function w(g){let M=g.target;M.removeEventListener("dispose",w);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function C(){for(let g in r)e.deleteBuffer(r[g]);o=[],r={},a={}}return{bind:l,update:u,dispose:C}}var k3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function z3(){if(vi===null)vi=new gi(k3,16,16,ys,pi),vi.name="DFG_LUT",vi.minFilter=Wt,vi.magFilter=Wt,vi.wrapS=Zi,vi.wrapT=Zi,vi.generateMipmaps=false,vi.needsUpdate=true;return vi}class mu{constructor(e={}){let{canvas:t=hd(),context:i=null,depth:s=true,stencil:r=false,alpha:a=false,antialias:o=false,premultipliedAlpha:c=true,preserveDrawingBuffer:l=false,powerPreference:u="default",failIfMajorPerformanceCaveat:h=false,reversedDepthBuffer:f=false,outputBufferType:d=_n}=e;this.isWebGLRenderer=true;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let b=d,y=new Set([jc,Vc,Wc]),A=new Set([_n,$i,qr,rr,Hc,Gc]),m=new Uint32Array(4),w=new Int32Array(4),C=new I,g=null,M=null,S=[],P=[],_=null;this.domElement=t,this.debug={checkShaderErrors:true,diagnostics:{keywords:false},onShaderError:null},this.autoClear=true,this.autoClearColor=true,this.autoClearDepth=true,this.autoClearStencil=true,this.sortObjects=true,this.clippingPlanes=[],this.localClippingEnabled=false,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,F=false,L=null,k=null,G=null,B=null;this._outputColorSpace=Ai;let V=0,te=0,Y=null,q=-1,W=null,U=new Gt,Z=new Gt,be=null,Te=new He(0),ft=0,{width:Qe,height:Q}=t,ge=1,fe=null,Ye=null,et=new Gt(0,0,Qe,Q),Ne=new Gt(0,0,Qe,Q),Ct=false,K=new Qr,he=false,pe=false,J=new dt,je=new I,ut=new Gt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:true},xt=false;function ie(){return Y===null?ge:1}let D=i;function Ce(v,R){return t.getContext(v,R)}let Pe,$e,E,x,N,X,de,me,Se,ne,re,Ue,Xe,ve,ye,Ge,st,Dt,j,Ie,ae,Re,De;try{let v={alpha:true,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${yh}`);if(t.addEventListener("webglcontextlost",lt,false),t.addEventListener("webglcontextrestored",Ut,false),t.addEventListener("webglcontextcreationerror",Pt,false),D===null){if(D=Ce("webgl2",v),D===null)if(Ce("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",lt,false),t.removeEventListener("webglcontextrestored",Ut,false),t.removeEventListener("webglcontextcreationerror",Pt,false),mt("WebGLRenderer: "+v.message),v}function Ae(){if(Pe=new X2(D),Pe.init(),ae=new L3(D,Pe),$e=new O2(D,Pe,e,ae),E=new I3(D,Pe),$e.reversedDepthBuffer&&f)E.buffers.depth.setReversed(true);k=D.createFramebuffer(),G=D.createFramebuffer(),B=D.createFramebuffer(),x=new J2(D),N=new g3,X=new D3(D,Pe,E,N,$e,ae,x),de=new q2(T),me=new $0(D),Re=new N2(D,me),Se=new K2(D,me,x,Re),ne=new $2(D,Se,me,Re,x),Dt=new Z2(D,$e,X),ye=new B2(N),re=new A3(T,de,Pe,$e,Re,ye),Ue=new O3(T,N),Xe=new v3,ve=new w3(Pe),st=new F2(T,de,E,ne,p,c),Ge=new P3(T,ne,$e),De=new B3(D,x,$e,E),j=new U2(D,Pe,x),Ie=new Y2(D,Pe,x),x.programs=re.programs,T.capabilities=$e,T.extensions=Pe,T.properties=N,T.renderLists=Xe,T.shadowMap=Ge,T.state=E,T.info=x}if(b!==_n)_=new eA(b,t.width,t.height,o,s,r);let Le=new lf(T,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Pe.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Pe.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(v){if(v===undefined)return;ge=v,this.setSize(Qe,Q,false)},this.getSize=function(v){return v.set(Qe,Q)},this.setSize=function(v,R,O=true){if(Le.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Qe=v,Q=R,t.width=Math.floor(v*ge),t.height=Math.floor(R*ge),O===true)t.style.width=v+"px",t.style.height=R+"px";if(_!==null)_.setSize(t.width,t.height);this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(Qe*ge,Q*ge).floor()},this.setDrawingBufferSize=function(v,R,O){Qe=v,Q=R,ge=O,t.width=Math.floor(v*O),t.height=Math.floor(R*O),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(b===_n){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===true){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(U)},this.getViewport=function(v){return v.copy(et)},this.setViewport=function(v,R,O,z){if(v.isVector4)et.set(v.x,v.y,v.z,v.w);else et.set(v,R,O,z);E.viewport(U.copy(et).multiplyScalar(ge).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,R,O,z){if(v.isVector4)Ne.set(v.x,v.y,v.z,v.w);else Ne.set(v,R,O,z);E.scissor(Z.copy(Ne).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(v){E.setScissorTest(Ct=v)},this.setOpaqueSort=function(v){fe=v},this.setTransparentSort=function(v){Ye=v},this.getClearColor=function(v){return v.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(v=true,R=true,O=true){let z=0;if(v){let H=false;if(Y!==null){let ue=Y.texture.format;H=y.has(ue)}if(H){let ue=Y.texture.type,_e=A.has(ue),le=st.getClearColor(),we=st.getClearAlpha(),{r:Be,g:rt,b:Ze}=le;if(_e)m[0]=Be,m[1]=rt,m[2]=Ze,m[3]=we,D.clearBufferuiv(D.COLOR,0,m);else w[0]=Be,w[1]=rt,w[2]=Ze,w[3]=we,D.clearBufferiv(D.COLOR,0,w)}else z|=D.COLOR_BUFFER_BIT}if(R)z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(true);if(O)z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)D.clear(z)},this.clearColor=function(){this.clear(true,false,false)},this.clearDepth=function(){this.clear(false,true,false)},this.clearStencil=function(){this.clear(false,false,true)},this.setNodesHandler=function(v){v.setRenderer(this),L=v},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,false),t.removeEventListener("webglcontextrestored",Ut,false),t.removeEventListener("webglcontextcreationerror",Pt,false),st.dispose(),Xe.dispose(),ve.dispose(),N.dispose(),de.dispose(),ne.dispose(),Re.dispose(),De.dispose(),re.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",gn),Le.removeEventListener("sessionend",ri),Cn.stop()};function lt(v){v.preventDefault(),zr("WebGLRenderer: Context Lost."),F=true}function Ut(){zr("WebGLRenderer: Context Restored."),F=false;let v=x.autoReset,R=Ge.enabled,O=Ge.autoUpdate,z=Ge.needsUpdate,H=Ge.type;Ae(),x.autoReset=v,Ge.enabled=R,Ge.autoUpdate=O,Ge.needsUpdate=z,Ge.type=H}function Pt(v){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function An(v){let R=v.target;R.removeEventListener("dispose",An),ln(R)}function ln(v){us(v),N.remove(v)}function us(v){let R=N.get(v).programs;if(R!==undefined){if(R.forEach(function(O){re.releaseProgram(O)}),v.isShaderMaterial)re.releaseShaderCache(v)}}this.renderBufferDirect=function(v,R,O,z,H,ue){if(R===null)R=Lt;let _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,le=Me(v,R,O,z,H);E.setMaterial(z,_e);let we=O.index,Be=1;if(z.wireframe===true){if(we=Se.getWireframeAttribute(O),we===undefined)return;Be=2}let rt=O.drawRange,Ze=O.attributes.position,ke=rt.start*Be,ot=(rt.start+rt.count)*Be;if(ue!==null)ke=Math.max(ke,ue.start*Be),ot=Math.min(ot,(ue.start+ue.count)*Be);if(we!==null)ke=Math.max(ke,0),ot=Math.min(ot,we.count);else if(Ze!==undefined&&Ze!==null)ke=Math.max(ke,0),ot=Math.min(ot,Ze.count);let Bt=ot-ke;if(Bt<0||Bt===1/0)return;Re.setup(H,z,le,O,we);let St,Ot=j;if(we!==null)St=me.get(we),Ot=Ie,Ot.setIndex(St);if(H.isMesh)if(z.wireframe===true)E.setLineWidth(z.wireframeLinewidth*ie()),Ot.setMode(D.LINES);else Ot.setMode(D.TRIANGLES);else if(H.isLine){let Kt=z.linewidth;if(Kt===undefined)Kt=1;if(E.setLineWidth(Kt*ie()),H.isLineSegments)Ot.setMode(D.LINES);else if(H.isLineLoop)Ot.setMode(D.LINE_LOOP);else Ot.setMode(D.LINE_STRIP)}else if(H.isPoints)Ot.setMode(D.POINTS);else if(H.isSprite)Ot.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(!Pe.get("WEBGL_multi_draw")){let{_multiDrawStarts:Kt,_multiDrawCounts:We,_multiDrawCount:at}=H,Ke=we?me.get(we).bytesPerElement:1,_t=N.get(z).currentProgram.getUniforms();for(let At=0;At<at;At++)_t.setValue(D,"_gl_DrawID",At),Ot.render(Kt[At]/Ke,We[At])}else Ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ot.renderInstances(ke,Bt,H.count);else if(O.isInstancedBufferGeometry){let Kt=O._maxInstanceCount!==undefined?O._maxInstanceCount:1/0,We=Math.min(O.instanceCount,Kt);Ot.renderInstances(ke,Bt,We)}else Ot.render(ke,Bt)};function ki(v,R,O,z){if(L!==null&&v.isNodeMaterial)L.setObject(z,v);if(he===true)ye.setState(v,O,false);if(v.transparent===true&&v.side===Qt&&v.forceSinglePass===false)v.side=Sn,v.needsUpdate=true,qe(v,R,z),v.side=ui,v.needsUpdate=true,qe(v,R,z),v.side=Qt;else qe(v,R,z)}this.compile=function(v,R,O=null){if(O===null)O=v;if(L!==null)L.renderStart(v,R,O);if(M=ve.get(O),M.init(R),P.push(M),O.traverseVisible(function(H){if(H.isLight&&H.layers.test(R.layers)){if(M.pushLight(H),H.castShadow)M.pushShadow(H)}}),v!==O)v.traverseVisible(function(H){if(H.isLight&&H.layers.test(R.layers)){if(M.pushLight(H),H.castShadow)M.pushShadow(H)}});if(M.setupLights(),L!==null)L.updateLights(M.state.lightsArray);if(pe=this.localClippingEnabled,he=ye.init(this.clippingPlanes,pe),he===true)ye.setGlobalState(this.clippingPlanes,R);if(L!==null)Ge.render(M.state.shadowsArray,O,R);let z=new Set;if(v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ue=H.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let le=ue[_e];ki(le,O,R,H),z.add(le)}else ki(ue,O,R,H),z.add(ue)}),M=P.pop(),L!==null)L.renderEnd();return z},this.compileAsync=function(v,R,O=null){let z=this.compile(v,R,O);return new Promise((H)=>{function ue(){if(z.forEach(function(_e){let we=N.get(_e).currentProgram;if(we===undefined||we.isReady())z.delete(_e)}),z.size===0){H(v);return}setTimeout(ue,10)}if(Pe.get("KHR_parallel_shader_compile")!==null)ue();else setTimeout(ue,10)})};let zi=null;function Rn(v){if(zi)zi(v)}function gn(){Cn.stop()}function ri(){Cn.start()}let Cn=new Jd;if(Cn.setAnimationLoop(Rn),typeof self<"u")Cn.setContext(self);this.setAnimationLoop=function(v){zi=v,Le.setAnimationLoop(v),v===null?Cn.stop():Cn.start()},Le.addEventListener("sessionstart",gn),Le.addEventListener("sessionend",ri),this.render=function(v,R){if(R!==undefined&&R.isCamera!==true){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===true)return;if(L!==null)L.renderStart(v,R);let O=Le.enabled===true&&Le.isPresenting===true,z=_!==null&&(Y===null||O)&&_.begin(T,Y);if(v.matrixWorldAutoUpdate===true)v.updateMatrixWorld();if(R.parent===null&&R.matrixWorldAutoUpdate===true)R.updateMatrixWorld();if(Le.enabled===true&&Le.isPresenting===true&&(_===null||_.isCompositing()===false)){if(Le.cameraAutoUpdate===true)Le.updateCamera(R);R=Le.getCamera()}if(v.isScene===true)v.onBeforeRender(T,v,R,Y);if(M=ve.get(v,P.length),M.init(R),M.state.textureUnits=X.getTextureUnits(),P.push(M),J.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),K.setFromProjectionMatrix(J,Rl,R.reversedDepth),pe=this.localClippingEnabled,he=ye.init(this.clippingPlanes,pe),g=Xe.get(v,S.length),g.init(),S.push(g),Le.enabled===true&&Le.isPresenting===true){let _e=T.xr.getDepthSensingMesh();if(_e!==null)Mi(_e,R,-1/0,T.sortObjects)}if(Mi(v,R,0,T.sortObjects),g.finish(),L!==null)L.updateLights(M.state.lightsArray);if(T.sortObjects===true)g.sort(fe,Ye);if(xt=Le.enabled===false||Le.isPresenting===false||Le.hasDepthSensing()===false,xt)st.addToRenderList(g,v);if(this.info.render.frame++,this.info.autoReset===true)this.info.reset();if(he===true)ye.beginShadows();let H=M.state.shadowsArray;if(Ge.render(H,v,R),he===true)ye.endShadows();if((z&&_.hasRenderPass())===false){let _e=g.opaque,le=g.transmissive;if(M.setupLights(),R.isArrayCamera){let we=R.cameras;if(le.length>0)for(let Be=0,rt=we.length;Be<rt;Be++){let Ze=we[Be];oe(_e,le,v,Ze)}if(xt)st.render(v);for(let Be=0,rt=we.length;Be<rt;Be++){let Ze=we[Be];Hi(g,v,Ze,Ze.viewport)}}else{if(le.length>0)oe(_e,le,v,R);if(xt)st.render(v);Hi(g,v,R)}}if(Y!==null&&te===0)X.updateMultisampleRenderTarget(Y),X.updateRenderTargetMipmap(Y);if(z)_.end(T);if(v.isScene===true)v.onAfterRender(T,v,R);if(Re.resetDefaultState(),q=-1,W=null,P.pop(),P.length>0){if(M=P[P.length-1],X.setTextureUnits(M.state.textureUnits),he===true)ye.setGlobalState(T.clippingPlanes,M.state.camera)}else M=null;if(S.pop(),S.length>0)g=S[S.length-1];else g=null;if(L!==null)L.renderEnd()};function Mi(v,R,O,z){if(v.visible===false)return;if(v.layers.test(R.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===true)v.update(R)}else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight){if(M.pushLight(v),v.castShadow)M.pushShadow(v)}else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(K)){if(z)ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);let _e=ne.update(v),le=v.material;if(le.visible)g.push(v,_e,le,O,ut.z,null,R)}}else if(v.isMesh||v.isLine||v.isPoints){if(!v.frustumCulled||v.intersectsFrustum(K)){let _e=ne.update(v),le=v.material;if(z){if(v.boundingSphere!==undefined){if(v.boundingSphere===null)v.computeBoundingSphere();ut.copy(v.boundingSphere.center)}else{if(_e.boundingSphere===null)_e.computeBoundingSphere();ut.copy(_e.boundingSphere.center)}ut.applyMatrix4(v.matrixWorld).applyMatrix4(J)}if(Array.isArray(le)){let we=_e.groups;for(let Be=0,rt=we.length;Be<rt;Be++){let Ze=we[Be],ke=le[Ze.materialIndex];if(ke&&ke.visible)g.push(v,_e,ke,O,ut.z,Ze,R)}}else if(le.visible)g.push(v,_e,le,O,ut.z,null,R)}}}let ue=v.children;for(let _e=0,le=ue.length;_e<le;_e++)Mi(ue[_e],R,O,z)}function Hi(v,R,O,z){let{opaque:H,transmissive:ue,transparent:_e}=v;if(M.setupLightsView(O),he===true)ye.setGlobalState(T.clippingPlanes,O);if(z)E.viewport(U.copy(z));if(H.length>0)se(H,R,O);if(ue.length>0)se(ue,R,O);if(_e.length>0)se(_e,R,O);E.buffers.depth.setTest(true),E.buffers.depth.setMask(true),E.buffers.color.setMask(true),E.setPolygonOffset(false)}function oe(v,R,O,z){if((O.isScene===true?O.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[z.id]===undefined){let ke=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[z.id]=new Fn(1,1,{generateMipmaps:true,type:ke?pi:_n,minFilter:Hn,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:false,resolveStencilBuffer:false,storeMultisampledDepthBuffer:false,storeMultisampledStencilBuffer:false,colorSpace:Tt.workingColorSpace})}let ue=M.state.transmissionRenderTarget[z.id],_e=z.viewport||U;ue.setSize(_e.z*T.transmissionResolutionScale,_e.w*T.transmissionResolutionScale);let le=T.getRenderTarget(),we=T.getActiveCubeFace(),Be=T.getActiveMipmapLevel();if(T.setRenderTarget(ue),T.getClearColor(Te),ft=T.getClearAlpha(),ft<1)T.setClearColor(16777215,0.5);if(T.clear(),xt)st.render(O);let rt=T.toneMapping;T.toneMapping=ti;let Ze=z.viewport;if(z.viewport!==undefined)z.viewport=undefined;if(M.setupLightsView(z),he===true)ye.setGlobalState(T.clippingPlanes,z);if(se(v,O,z),X.updateMultisampleRenderTarget(ue),X.updateRenderTargetMipmap(ue),Pe.has("WEBGL_multisampled_render_to_texture")===false){let ke=false;for(let ot=0,Bt=R.length;ot<Bt;ot++){let St=R[ot],{object:Ot,geometry:Kt,material:We,group:at}=St;if(We.side===Qt&&Ot.layers.test(z.layers)){let Ke=We.side;We.side=Sn,We.needsUpdate=true,Ee(Ot,O,z,Kt,We,at),We.side=Ke,We.needsUpdate=true,ke=true}}if(ke===true)X.updateMultisampleRenderTarget(ue),X.updateRenderTargetMipmap(ue)}if(T.setRenderTarget(le,we,Be),T.setClearColor(Te,ft),Ze!==undefined)z.viewport=Ze;T.toneMapping=rt}function se(v,R,O){let z=R.isScene===true?R.overrideMaterial:null;for(let H=0,ue=v.length;H<ue;H++){let _e=v[H],{object:le,geometry:we,group:Be}=_e,rt=_e.material;if(rt.allowOverride===true&&z!==null)rt=z;if(le.layers.test(O.layers))Ee(le,R,O,we,rt,Be)}}function Ee(v,R,O,z,H,ue){if(L!==null&&H.isNodeMaterial)L.setObject(v,H);if(v.onBeforeRender(T,R,O,z,H,ue),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(T,R,O,z,v,ue),H.transparent===true&&H.side===Qt&&H.forceSinglePass===false)H.side=Sn,H.needsUpdate=true,T.renderBufferDirect(O,R,z,H,v,ue),H.side=ui,H.needsUpdate=true,T.renderBufferDirect(O,R,z,H,v,ue),H.side=Qt;else T.renderBufferDirect(O,R,z,H,v,ue);v.onAfterRender(T,R,O,z,H,ue)}function qe(v,R,O){if(R.isScene!==true)R=Lt;let z=N.get(v),H=M.state.lights,ue=M.state.shadowsArray,_e=H.state.version,le=re.getParameters(v,H.state,ue,R,O,M.state.lightProbeGridArray),we=re.getProgramCacheKey(le),Be=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z.fog=R.fog;let rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(z.envMap=de.get(v.envMap||z.environment,rt),z.envMapRotation=z.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Be===undefined)v.addEventListener("dispose",An),Be=new Map,z.programs=Be;let Ze=Be.get(we);if(Ze!==undefined){if(z.currentProgram===Ze&&z.lightsStateVersion===_e)return Oe(v,le),Ze}else{if(le.uniforms=re.getUniforms(v),L!==null&&v.isNodeMaterial)L.build(v,O,le);v.onBeforeCompile(le,T),Ze=re.acquireProgram(le,we),Be.set(we,Ze),z.uniforms=le.uniforms}let ke=z.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===true)ke.clippingPlanes=ye.uniform;if(Oe(v,le),z.needsLights=ee(v),z.lightsStateVersion=_e,z.needsLights)ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.sunLights.value=H.state.sun,ke.sunLightShadows.value=H.state.sunShadow,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.sunShadowMatrix.value=H.state.sunShadowMatrix,ke.sunShadowCascade.value=H.state.sunShadowCascade,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix;return z.lightProbeGrid=M.state.lightProbeGridArray.length>0,z.currentProgram=Ze,z.uniformsList=null,Ze}function Fe(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=la.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function Oe(v,R){let O=N.get(v);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.batchingColor=R.batchingColor,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.instancingMorph=R.instancingMorph,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function xe(v,R){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;C.setFromMatrixPosition(R.matrixWorld);for(let O=0,z=v.length;O<z;O++){let H=v[O];if(H.texture!==null&&H.boundingBox.containsPoint(C))return H}return null}function Me(v,R,O,z,H){if(R.isScene!==true)R=Lt;X.resetTextureUnits();let ue=R.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?R.environment:null,le=Y===null?T.outputColorSpace:Y.isXRRenderTarget===true?Y.texture.colorSpace:Tt.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Be=de.get(z.envMap||_e,we),rt=z.vertexColors===true&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ze=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ke=!!O.morphAttributes.position,ot=!!O.morphAttributes.normal,Bt=!!O.morphAttributes.color,St=ti;if(z.toneMapped){if(Y===null||Y.isXRRenderTarget===true)St=T.toneMapping}let Ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Kt=Ot!==undefined?Ot.length:0,We=N.get(z),at=M.state.lights;if(he===true){if(pe===true||v!==W){let bt=v===W&&z.id===q;ye.setState(z,v,bt)}}let Ke=false;if(z.version===We.__version){if(We.needsLights&&We.lightsStateVersion!==at.state.version)Ke=true;else if(We.outputColorSpace!==le)Ke=true;else if(H.isBatchedMesh&&We.batching===false)Ke=true;else if(!H.isBatchedMesh&&We.batching===true)Ke=true;else if(H.isBatchedMesh&&We.batchingColor===true&&H._colorsTexture===null)Ke=true;else if(H.isBatchedMesh&&We.batchingColor===false&&H._colorsTexture!==null)Ke=true;else if(H.isInstancedMesh&&We.instancing===false)Ke=true;else if(!H.isInstancedMesh&&We.instancing===true)Ke=true;else if(H.isSkinnedMesh&&We.skinning===false)Ke=true;else if(!H.isSkinnedMesh&&We.skinning===true)Ke=true;else if(H.isInstancedMesh&&We.instancingColor===true&&H.instanceColor===null)Ke=true;else if(H.isInstancedMesh&&We.instancingColor===false&&H.instanceColor!==null)Ke=true;else if(H.isInstancedMesh&&We.instancingMorph===true&&H.morphTexture===null)Ke=true;else if(H.isInstancedMesh&&We.instancingMorph===false&&H.morphTexture!==null)Ke=true;else if(We.envMap!==Be)Ke=true;else if(z.fog===true&&We.fog!==ue)Ke=true;else if(We.numClippingPlanes!==undefined&&(We.numClippingPlanes!==ye.numPlanes||We.numIntersection!==ye.numIntersection))Ke=true;else if(We.vertexAlphas!==rt)Ke=true;else if(We.vertexTangents!==Ze)Ke=true;else if(We.morphTargets!==ke)Ke=true;else if(We.morphNormals!==ot)Ke=true;else if(We.morphColors!==Bt)Ke=true;else if(We.toneMapping!==St)Ke=true;else if(We.morphTargetsCount!==Kt)Ke=true;else if(!!We.lightProbeGrid!==M.state.lightProbeGridArray.length>0)Ke=true}else Ke=true,We.__version=z.version;let _t=We.currentProgram;if(Ke===true){if(_t=qe(z,R,H),L&&z.isNodeMaterial)L.onUpdateProgram(z,_t,We)}let At=false,yt=false,tn=false,nt=_t.getUniforms(),ht=We.uniforms;if(E.useProgram(_t.program))At=true,yt=true,tn=true;if(z.id!==q)q=z.id,yt=true;if(We.needsLights){let bt=xe(M.state.lightProbeGridArray,H);if(We.lightProbeGrid!==bt)We.lightProbeGrid=bt,yt=true}if(At||W!==v){if(E.buffers.depth.getReversed()&&v.reversedDepth!==true)v._reversedDepth=true,v.updateProjectionMatrix();nt.setValue(D,"projectionMatrix",v.projectionMatrix),nt.setValue(D,"viewMatrix",v.matrixWorldInverse);let bn=nt.map.cameraPosition;if(bn!==undefined)bn.setValue(D,je.setFromMatrixPosition(v.matrixWorld));if($e.logarithmicDepthBuffer)nt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)nt.setValue(D,"isOrthographic",v.isOrthographicCamera===true);if(W!==v)W=v,yt=true,tn=true}if(We.needsLights){if(at.state.sunShadowMap.length>0)nt.setValue(D,"sunShadowMap",at.state.sunShadowMap,X);if(at.state.directionalShadowMap.length>0)nt.setValue(D,"directionalShadowMap",at.state.directionalShadowMap,X);if(at.state.spotShadowMap.length>0)nt.setValue(D,"spotShadowMap",at.state.spotShadowMap,X);if(at.state.pointShadowMap.length>0)nt.setValue(D,"pointShadowMap",at.state.pointShadowMap,X)}if(H.isSkinnedMesh){nt.setOptional(D,H,"bindMatrix"),nt.setOptional(D,H,"bindMatrixInverse");let bt=H.skeleton;if(bt){if(bt.boneTexture===null)bt.computeBoneTexture();nt.setValue(D,"boneTexture",bt.boneTexture,X)}}if(H.isBatchedMesh){if(nt.setOptional(D,H,"batchingTexture"),nt.setValue(D,"batchingTexture",H._matricesTexture,X),nt.setOptional(D,H,"batchingIdTexture"),nt.setValue(D,"batchingIdTexture",H._indirectTexture,X),nt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null)nt.setValue(D,"batchingColorTexture",H._colorsTexture,X)}let Xt=O.morphAttributes;if(Xt.position!==undefined||Xt.normal!==undefined||Xt.color!==undefined)Dt.update(H,O,_t);if(yt||We.receiveShadow!==H.receiveShadow)We.receiveShadow=H.receiveShadow,nt.setValue(D,"receiveShadow",H.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&R.environment!==null)ht.envMapIntensity.value=R.environmentIntensity;if(ht.dfgLUT!==undefined)ht.dfgLUT.value=z3();if(yt){if(nt.setValue(D,"toneMappingExposure",T.toneMappingExposure),We.needsLights)Je(ht,tn);if(ue&&z.fog===true)Ue.refreshFogUniforms(ht,ue);if(Ue.refreshMaterialUniforms(ht,z,ge,Q,M.state.transmissionRenderTarget[v.id]),We.needsLights&&We.lightProbeGrid){let bt=We.lightProbeGrid;ht.probesSH.value=bt.texture,ht.probesMin.value.copy(bt.boundingBox.min),ht.probesMax.value.copy(bt.boundingBox.max),ht.probesResolution.value.copy(bt.resolution)}la.upload(D,Fe(We),ht,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===true)la.upload(D,Fe(We),ht,X),z.uniformsNeedUpdate=false;if(z.isSpriteMaterial)nt.setValue(D,"center",H.center);if(nt.setValue(D,"modelViewMatrix",H.modelViewMatrix),nt.setValue(D,"normalMatrix",H.normalMatrix),nt.setValue(D,"modelMatrix",H.matrixWorld),z.uniformsGroups!==undefined){let bt=z.uniformsGroups;for(let bn=0,Yt=bt.length;bn<Yt;bn++){let un=bt[bn];De.update(un,_t),De.bind(un,_t)}}return _t}function Je(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function ee(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===true}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(v,R,O){let z=N.get(v);if(z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===false,z.__autoAllocateDepthBuffer===false)z.__useRenderToTexture=false;N.get(v.texture).__webglTexture=R,N.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?undefined:O,z.__hasExternalTextures=true},this.setRenderTargetFramebuffer=function(v,R){let O=N.get(v);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===undefined},this.setRenderTarget=function(v,R=0,O=0){Y=v,V=R,te=O;let z=null,H=false,ue=false;if(v){let le=N.get(v);if(le.__useDefaultFramebuffer!==undefined){E.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),U.copy(v.viewport),Z.copy(v.scissor),be=v.scissorTest,E.viewport(U),E.scissor(Z),E.setScissorTest(be),q=-1;return}else if(le.__webglFramebuffer===undefined)X.setupRenderTarget(v);else if(le.__hasExternalTextures)X.rebindTextures(v,N.get(v.texture).__webglTexture,N.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let rt=v.depthTexture;if(le.__boundDepthTexture!==rt){if(rt!==null&&N.has(rt)&&(v.width!==rt.image.width||v.height!==rt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let we=v.texture;if(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)ue=true;let Be=N.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Be[R]))z=Be[R][O];else z=Be[R];H=true}else if(v.samples>0&&X.useMultisampledRTT(v)===false)z=N.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Be))z=Be[O];else z=Be;U.copy(v.viewport),Z.copy(v.scissor),be=v.scissorTest}else U.copy(et).multiplyScalar(ge).floor(),Z.copy(Ne).multiplyScalar(ge).floor(),be=Ct;if(O!==0)z=k;if(E.bindFramebuffer(D.FRAMEBUFFER,z))E.drawBuffers(v,z);if(E.viewport(U),E.scissor(Z),E.setScissorTest(be),H){let le=N.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,le.__webglTexture,O)}else if(ue){let le=R;for(let we=0;we<v.textures.length;we++){let Be=N.get(v.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Be.__webglTexture,O,le)}}else if(v!==null&&O!==0){let le=N.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,O)}q=-1};function ce(v){let R=N.get(v);if(R.__readFormat!==v.format||R.__readType!==v.type)R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=$e.textureFormatReadable(v.format),R.__typeReadable=$e.textureTypeReadable(v.type);return R}if(this.readRenderTargetPixels=function(v,R,O,z,H,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=N.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==undefined)we=we[_e];if(we){E.bindFramebuffer(D.FRAMEBUFFER,we);try{let Be=v.textures[le],{format:rt,type:Ze}=Be;if(v.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+le);let ke=ce(Be);if(ke.__formatReadable===false){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===false){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(R>=0&&R<=v.width-z&&(O>=0&&O<=v.height-H))D.readPixels(R,O,z,H,ae.convert(rt),ae.convert(Ze),ue)}finally{let Be=Y!==null?N.get(Y).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(v,R,O,z,H,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=N.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==undefined)we=we[_e];if(we)if(R>=0&&R<=v.width-z&&(O>=0&&O<=v.height-H)){E.bindFramebuffer(D.FRAMEBUFFER,we);let Be=v.textures[le],{format:rt,type:Ze}=Be;if(v.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+le);let ke=ce(Be);if(ke.__formatReadable===false)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===false)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ot),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(R,O,z,H,ae.convert(rt),ae.convert(Ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Bt=Y!==null?N.get(Y).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Bt);let St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fd(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ot),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ot),D.deleteSync(St),ue}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,O=0){let z=Math.pow(2,-O),H=Math.floor(v.image.width*z),ue=Math.floor(v.image.height*z),_e=R!==null?R.x:0,le=R!==null?R.y:0;X.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,_e,le,H,ue),E.unbindTexture()},this.copyTextureToTexture=function(v,R,O=null,z=null,H=0,ue=0){let _e,le,we,Be,rt,Ze,ke,ot,Bt,St=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(O!==null)_e=O.max.x-O.min.x,le=O.max.y-O.min.y,we=O.isBox3?O.max.z-O.min.z:1,Be=O.min.x,rt=O.min.y,Ze=O.isBox3?O.min.z:0;else{let ht=Math.pow(2,-H);if(_e=Math.floor(St.width*ht),le=Math.floor(St.height*ht),v.isDataArrayTexture)we=St.depth;else if(v.isData3DTexture)we=Math.floor(St.depth*ht);else we=1;Be=0,rt=0,Ze=0}if(z!==null)ke=z.x,ot=z.y,Bt=z.z;else ke=0,ot=0,Bt=0;let Ot=ae.convert(R.format),Kt=ae.convert(R.type),We;if(R.isData3DTexture)X.setTexture3D(R,0),We=D.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)X.setTexture2DArray(R,0),We=D.TEXTURE_2D_ARRAY;else X.setTexture2D(R,0),We=D.TEXTURE_2D;E.activeTexture(D.TEXTURE0),E.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),E.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),E.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);let at=E.getParameter(D.UNPACK_ROW_LENGTH),Ke=E.getParameter(D.UNPACK_IMAGE_HEIGHT),_t=E.getParameter(D.UNPACK_SKIP_PIXELS),At=E.getParameter(D.UNPACK_SKIP_ROWS),yt=E.getParameter(D.UNPACK_SKIP_IMAGES);E.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),E.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(D.UNPACK_SKIP_ROWS,rt),E.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);let tn=v.isDataArrayTexture||v.isData3DTexture,nt=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){let ht=N.get(v),Xt=N.get(R),bt=N.get(ht.__renderTarget),bn=N.get(Xt.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Yt=0;Yt<we;Yt++){if(tn)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(v).__webglTexture,H,Ze+Yt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ue,Bt+Yt);D.blitFramebuffer(Be,rt,_e,le,ke,ot,_e,le,D.DEPTH_BUFFER_BIT,D.NEAREST)}E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||N.has(v)){let ht=N.get(v),Xt=N.get(R);E.bindFramebuffer(D.READ_FRAMEBUFFER,G),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let bt=0;bt<we;bt++){if(tn)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,H,Ze+bt);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,H);if(nt)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,ue,Bt+bt);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,ue);if(H!==0)D.blitFramebuffer(Be,rt,_e,le,ke,ot,_e,le,D.COLOR_BUFFER_BIT,D.NEAREST);else if(nt)D.copyTexSubImage3D(We,ue,ke,ot,Bt+bt,Be,rt,_e,le);else D.copyTexSubImage2D(We,ue,ke,ot,Be,rt,_e,le)}E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(nt)if(v.isDataTexture||v.isData3DTexture)D.texSubImage3D(We,ue,ke,ot,Bt,_e,le,we,Ot,Kt,St.data);else if(R.isCompressedArrayTexture)D.compressedTexSubImage3D(We,ue,ke,ot,Bt,_e,le,we,Ot,St.data);else D.texSubImage3D(We,ue,ke,ot,Bt,_e,le,we,Ot,Kt,St);else if(v.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,ue,ke,ot,_e,le,Ot,Kt,St.data);else if(v.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,ue,ke,ot,St.width,St.height,Ot,St.data);else D.texSubImage2D(D.TEXTURE_2D,ue,ke,ot,_e,le,Ot,Kt,St);if(E.pixelStorei(D.UNPACK_ROW_LENGTH,at),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),E.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),E.pixelStorei(D.UNPACK_SKIP_ROWS,At),E.pixelStorei(D.UNPACK_SKIP_IMAGES,yt),ue===0&&R.generateMipmaps)D.generateMipmap(We);E.unbindTexture()},this.initRenderTarget=function(v){if(N.get(v).__webglFramebuffer===undefined)X.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)X.setTextureCube(v,0);else if(v.isData3DTexture)X.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)X.setTexture2DArray(v,0);else X.setTexture2D(v,0);E.unbindTexture()},this.resetState=function(){V=0,te=0,Y=null,E.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}var ua={globe:{d48:"wP///wEAAAAAQP3/AQL//wEAAAAAAPj/AOj/fwAAAAAAAPAf4P//AQAAAAAAAP6A//8HAAAAAAAA+P3/3wMAAAAAAADw///7BgAAAAAAAPD/vzsAAAAAAAAA///CAAAAAAAAAPD/gQAAAAAAAAD+/wgAAAAAAACA+ucAAAAAAAAAAP8HAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAPiAf/+5///v//AeAHAAAAAAAAwP/4A+ABAAAAAAAA+P/5AQoXAA8AAAAA/D8+IPgB+AAAAAAA/+Hx/AP4AQAAAAD4AW/AH/wDAAAAAPgAT+QDfwAAAAzWP8BPB/AfAABgzv8BMj7Q/wAAgDz/B+Af8P/gAeB+/w/8Afx/8AC86v/zH+D/DwQAAP6/AsD/HwAAAPz/P+j/DwAAAPx/FP7/AQAA0f8/8/8fAAA+4f95/x8AAPyV////BwAA/p//f/4BAMD/4D/ACwAAfwT+AQAAAP4A/wMAKICf3/8BAALg//c/ADAA/v//AQAA+P//AwAA4PX/AQgAcP4/AAAA+P8BAAD8/wOACvj/AQzE/z8AAPz/AQD6/wN4/v8BuP///////+//////////////////////////A/wfyDQAAICA////B//vKgAAAADC///////LEwAAAAD+/////x9BBgAAAMD//////3wIAAAAAP//////+8EAAAAA+P/////+AwAAAAD/////3zIAAAAA8P////9DAAAAgPD/////DwAAAODg/////w8AAABk/v////8BAAAA/P////8vAAAA/P//////FQAA/P//////DwDg////////AVD///////8H+P///////wf/////////+////3+g/wPj////A/w/gf/3HwDgP4D+gQEA+g0A9AMAAAEAAOABAAgAAMAPABAAAAAfAAAAAAAPAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///38AAAAAAAAA4P///38AAAAAAAAA+P///w8AAAAAAAAA/////wQAAAAAAAD4////AwAAAAAAAPD///8DAAAAAAAA+P///wEAAAAAAAD///8PAAAAAAAA+P//CwAAAAAAAPD//wsAAAAAAAD4//8HAAAAAAAA//9/AAAAAAAA+P//AwAAAAAA8P//AwAAAAAA+P//AQAAAAAA//8fAAAAAAD4/z8AAAAAAPD/PwAAAAAA+P8PAAAAAAD/fwAAAAAA+H8AAAAAAPA/AAAAAAD4DwAAAAAATwAAAAAAmAAAAAAA0AAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////fw4AAAAAwP///////wgAAAAA8P//////fwQAAAAA/v//////DwAAAADw//////8/AAAAAOD//////38AAAAA8P//////vwAAAAD+//////8fAAAA8P//////fwAAAOD//////n8AAADw////B/QfAAAA/v//PwD8AQAA8P///wDgBwAA4P//HwDABwAA8P//AwBwAAAA/v8/AIADAADw/38AuB8AAAD8YAD8HwAAAABwAPQHAAAAAA4DOAAAAAAAAvgAAAAAFAH4AAAAAGAAfgAAAAAGgA8AAACYADAAAACIADAAAAAAAAwAABAAsAAAcABAAAAwAMAAAATA/wAQgP9fTQD8/x8A//8PwP//Afz/D/j/H/z/z////f//////////////////////////cRz8////////////cwD///////////9/DPD////////////nQP///////////x82+P///////3/8PxDw//////+/CPgPAP7//////0+AwwDw//////8/AI0C4P/////BP/gfAOD///9/4Yf/R1D8////P/7/H4D/////f/j/CwD/////P/j/E+D/////P/7/Afz/////wf9/+P/////P/////////////9//////////8////////x////////9//P///3/+f/z///+P/w////9//P/4//+/+P/H//8P8P+H///w///wX4D//w8fgP//PzwA//8/HgD//58DQP//HQCA+jIAAAAQAAAAAQDwHwCAPwAAHwCAAwAAAAAAAAAAAAAAwP//LwAAAAAAAAD+////fwAAAAAAAAD+/////wAAAAAAAAD/////PwAAAAAAAPj/////AAAAAAAAgP////8BAAAAAADg/////wAAAAAAAP7///8fAAAAAAD4/////wEAAAAA8P////8BAAAAAPz///9/AAAAAKD/////BwAAAAD/////DwAAAAD+////DwAAAAD/////AwAAAOD///8/AAAAAP7//38AAAAA8P//PwAAAACA/v8FAAAAAAD8AQAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////8DAAAAAAAAAP////8HAAAAAAAAgP////8AAAAAAAAA8P///z8AAAAAAACA/////wAAAAAAAAD///9/AAAAAAAAgP///w8AAAAAAADw//9/AAAAAAAAgP///wAAAAAAAAD//38AAAAAAACA//8PAAAAAAAA8P//AAAAAAAAgP//AAAAAAAAAP9/AAAAAAAAgP8DAAAAAAAA8B8AAAAAAACAfwAAAAAAAAB/AAAAAAAAgB8AAAAAAADwAwAAAAAAgA8AAAAAAAAPAAAAAACABwAAAAAA8AAAAAAAgAMAAAAAAAMAAAAAgAEAAAAAEAAAAACAAAAAAAABAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////wMAAAAAAAD4/////wEAAAAAAHz/////PwAAAAAA4P//////AQAAAABg/v////8DAAAAAED//////wEAAAAAyP////8/AAAAAAD8/////wEAAADg4P////8DAAAAwOD/////AQAAACD4////PwAAAIAD/f///wEAAAAG4P///wMAAAAG4P///wEAAMAH4P//PwAAAHiAJ///AQAAgAcP+P8DAAAAiof5/wEAAACEgP8/AAAAYAD4/wEAAAAA8P8DAAAAAPz/AQAAAAD/PwAAAAD4/wEAAADg/wMAAADA/wEAAADwPwAAAGD+AQAAgOADAAAAwAEAAAAAAAAAAAAAAAcAAAADAADAAABABQAgCADgAgBiAOAAwAuAEQAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAD8AQAAAAAAAAD+AQAAAAAAAPD/AAAAAAAAAP4/AAAAAAAA4A8AAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAB8AAAAAAAAwAMAAAAAAIAHAAAAAADgAwAAAAD4fwAAAADA/wMAAAD4/wcAAAD8/wMAAOD/fwAAAP//AwAA/v8HAAD+/wMAgP9/AAD8/wMA+P8HAOD/AwDAfwAA4AMAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAwAcAAAAAAAAAPuD/AAAAAAAAAPiX/x8AAAAAAADwP/8/AAAAAAAA+N//fwAAAAAAAP///w8AAAAAAPj//38BAAAAAPD///8DAAAAAPj///8BAAAAAP///z8AAAAA+P///wEAAADw////AwAAAPj///8AAAAA////HwAAAPj//z8AAADw//8HAAAA+P//AAAAAP//DwAAAPj/DAAAAPB/AAAAAPjPAQAAAD8AAAAA+AEAAADwAQAAAHgAAAAAvz8AAPj/BwDw5w8I+Og2AAcAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAA8P///////w8AAAAA/P//////fwsAAADA//////v/IwAAAID/////8/8PAAAAAP7//z/g/w8AAAAA////B8D/AwAAAPD//z8A/AcAAABA////APgPAAAAAPz//wCIAAAAAAD//x8AAAAAAADg//8BAAAAAAAA/v8PAAAAAAAA/P8fAAAAAAAA8H8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAADgAAMABAIADAMACAGAA4AHABzABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAADgAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAwP8BAAAAAAAA4P8fAAAAAAAA+P8fAAAAAADA//8DAAAAAED+/x8AAAAAwP//PwAAAADw//8PAAAAwP//fwDA//////8DwP//////AfD/////fwD//////wP8/////wf+/////4////////P///9/3////3/4////P7D///8HAPD//wCA/v8PAHz8AQAAEAAAAAAAAAAAAABgBQAAAAMAAAAAQICBIQwAAAAAAAAAAACAwA8AAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAMAAEAAAAAAAAAAAAIF/AAAAAAAAAACAAT8AAAAAAAAAAGDgBwAAAAAAAAAAAz8AAAAAAAAAAAR8AAAAAAAAAAAGOAAAAAAAAACAAQQAAAAAAAAAEAAAAAAAAAAAwAcAAAAAAAAAwAcAAAAAAAAA8AEAAAAAAAAAPgAAAAAAAABwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////PwAAAAAAAID/////fwAAAAAAAMD/////HwAAAAAAAPj/////AQAAAAAA4P////8PAAAAAADg/////w8AAAAAAPj/////HwAAAACA//////8/AAAAAPz///////8HAADw////////PwAA+P///////w8AAPz//////38AAPD///////8AAPD//////38AAPD//////w8AAP//////fwAA/P//////AAD8/////38AgP//////DwD4/////38A4P//////AID/////fwCA/////w8A+P///38A/P////8A/v///3+A/////w/+//////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBwAAAAAAAAAAAMABAAAAAAAAAAAADuAAAAAAAAAAAPADAAAAAAAAAADADwAAAAAAAAAAwH8AAAAAAAAAAPA/AAAAAAAAAAD/AQAAAAAAAAD4DwAAAAAAAADgHwAAAAAAAAD0HwAAAAAAAMD/BwAAAAAAAP6/AgAAAAAA/v8PAAAAAAD//wMAAAAA4P/fBwAAAAD///8AAAAA/v//BwAAAP///wMAAOD//38AAAD///+vCgD+////HwD/////H+D/////B/////8//v///3////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAgB8AAAAAAAAYgAEAgAMAAAAAAAAIAAAgAAAAAAAAAAAgwAF8AAAAAAAAAMDA9/8DAAAAFAAAAIDj/0cBAAAAAAAAAPD/fwEAAAAAAAAA4H8AAAAAAAAAAAAACAAAAAAAAAAAAAAAACAAAAAAAAAIAAQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A/x8GAAAAAAAAgH+A/R8AAAAAAAAAcA4A/gMAAAAAAADA8QAAPwAAAAAAAIDiAwD4AQAAAAwAAGAAAHAAAAAAAwAABQAACAAAABMAAHAgAAAAAAAeAADAgAMAAAAAPgAAgPAPAAAAwB8AALD/BwAAAPwBAID/fwAAAPgHAED+/wAAAPw/AOD+fwAAAP8/APz/AwAA8P8P4P8fBgDA///A//8gAPj//+///xsA////////f/j///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8P",d30:"cP8fAAAA8B/w/wEAAAD44P8BAAAA4P3/AQAAAOD/9wAAAADg/wgAAAAA/gMAAAAA4B8AAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCQ8/3/AQ8AAAAA/zxQAAoAAPDPIQ88AACADx8+PgAAAA8egx8AMP5BOfwBAN0PPPCPAa9/FfgfAYD/TP8DAPDf/B8AWv//HwB4+/8PAPz5gQLAAz8AAt75ARz89wMA+P8BAMw/AAD/ART+A4H/AeA/sP/////+////////g/9aAQDj/3//twAAAP///6cVAAD+////GQAA+P//0wMAAP7//wkAAPH//z8AAID//z8AAPz///8CgP////8A/P///4f/////8///Az/k/1fgB/4ZQAVADAABADwAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA8P//AwAAAAD//x8AAAAA+P9/AQAAAPD/fwAAAAD4/x8AAAAA/38AAAAA+P8DAAAA8P8DAAAA+P8BAAAA/x8AAAD4fwAAAPB/AAAA+A8AAAA/AAAAuAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///08AAAD+////CQAA8P///w8AAOD///8fAADw////HwAA/v///wEA8P//8QcA4P9/gAcA8P8XwAEA/j8ADADQ/wA/AACCgT4AAMAEBgAAInAAAIDAAwBAAAIAEAABAAAIAAYQAAB/AOD/Af8P/h//7///////////////TPz//////2/g//////+/yf/////fP4T/////ghjw////jx6B//9/Hn8A//9//B/w//+P/wH////xP/7///f////////3//////z///vP///nP///4T//r/3PF/5/HPj/MeD/GwC6AwAAAD8AHAACAAAAwP8fAAAAAPj//wcAAACA//9/AAAAAPz/fwAAAAD//z8AAADw//8PAACA//8/AACA//8/AADg//8HAAD4/38AAOD//wEAAP//AAAA6AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//HwAAAADw//8BAAAAgP//DwAAAAD//wcAAACA//8AAAAA8P8HAAAAgP8fAAAAAP8PAAAAgP8AAAAA8AMAAACADwAAAAAPAAAAgAcAAABwAAAAgAEAAAADAACAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8/AAAAoP7//wEAAED///8DAACA////AQAA4P//PwAAcPz//wEAAPH//wMAgMD//wEAIOD/PwAAB9b/AQBwDv4DAMCE/wEAIMA/AACA/wEAAP4DAAD+AQCAPwAA9AEAgAMAAAAAAQAQACgADEAQHgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAADwAAAAD+AQAAAOALAAAAAAAAAAAAgAMAAABwAAAAgAMAAPAHAAD/AwDwfwDA/wMA/wcA/wPgfwD4AwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUPAHAAAAAD//AAAAAPj9HwAAAPD/PwAAAPj/PwAAAP//DwAA+P8/AADw/z8AAPj/DwAA/38AAPj/AADwbwAA+AUAAA8AADgAALAIAPgfAO9DGCAAAAAAAAAAAADA/////wEAAPz///8fAADw///7HwAA4P9/+B8AAPj/D/gFAAD+/+APAADw/wEAAADg/wEAAADQ/wAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAYACAAOAADGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAACAAAAAAA+AAAAAMB/AAAAAP4/AAAA/P8BAAD8/wEQwf9/gP///wP+//8P/v//h/////v///3//yP1/wHo/wAEAwAAAAAYDAAAQSQAAAAAAADAAwAAAAAAAAAAAAAAACBoAAAAAAAgPAAAAAAAhAcAAAAAQDgAAAAAgEEAAAAAAAUAAAAAwAEAAAAAGAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//fwAAAAD8//8HAAAA4P//HwAAAOD//z8AAAD4//9/AQAA/////w8A+P////8AwP///38A4P///w8A/v//fwD4////APj//38A////D8D//38A/v//gP//f/D//4////////////////////////////////8AAAAAAAAAAAAAAAAAAAAACAAAAAAAAAcAAAAAAOBBAAAAAAAeAAAAAAD4AQAAAAD4AAAAAAD8AAAAAMAPAAAAAP8LAAAA/h8AAAD/PwAA4P8fAAD//wEA/v9XAP///+D//x/////+//////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAIAAIQAAAAAg+n4AAAgAAIh/BAAAAABAfwAAAAAAABAAMAAAAICAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz4nwAAAACwAX4AAAAAMAfgAQCAAAABgAEAJAAwAAAAwAEA4AAEgAcA3A8AgA8A/AcA8Afg/wAA/wP+BwD8H/6fgP/////z//////////////////////////////////////////////////////////8P"},europe:[{id:"832",name:"Jersey",rings:[[[-2.02,49.23],[-2.05,49.17],[-2.24,49.18],[-2.22,49.27],[-2.02,49.23]]]},{id:"831",name:"Guernsey",rings:[[[-2.51,49.49],[-2.55,49.43],[-2.65,49.47],[-2.51,49.49]]]},{id:"833",name:"Isle of Man",rings:[[[-4.41,54.18],[-4.61,54.06],[-4.79,54.07],[-4.7,54.22],[-4.43,54.41],[-4.34,54.27],[-4.41,54.18]]]},{id:"826",name:"United Kingdom",rings:[[[-2.67,51.62],[-3.29,51.39],[-3.56,51.41],[-3.89,51.59],[-4.24,51.57],[-4.09,51.66],[-4.39,51.74],[-4.6,51.74],[-4.9,51.63],[-5.12,51.71],[-5.2,51.86],[-5.26,51.88],[-5.09,52],[-4.38,52.2],[-4.15,52.33],[-3.98,52.54],[-4.08,52.61],[-4.04,52.7],[-4.12,52.82],[-4.1,52.92],[-4.68,52.81],[-4.64,52.89],[-4.27,53.14],[-3.81,53.3],[-3.43,53.34],[-3.1,53.26],[-3.17,53.39],[-3.07,53.43],[-2.92,53.3],[-2.75,53.31],[-2.91,53.35],[-3.07,53.51],[-2.93,53.73],[-3.03,53.77],[-3.03,53.91],[-2.9,53.96],[-2.87,54.18],[-3.17,54.13],[-3.57,54.47],[-3.59,54.56],[-3.47,54.77],[-3.27,54.91],[-3.04,54.95],[-3.55,54.95],[-3.96,54.78],[-4.13,54.78],[-4.25,54.85],[-4.52,54.76],[-4.82,54.85],[-4.91,54.69],[-5.14,54.86],[-5.17,54.99],[-5.06,54.99],[-4.68,55.5],[-4.73,55.6],[-4.89,55.7],[-4.83,55.93],[-4.58,55.94],[-4.84,56.05],[-4.8,56.16],[-4.93,56.03],[-5.23,55.89],[-5.22,56.07],[-5,56.23],[-5.38,56.02],[-5.42,55.97],[-5.39,55.77],[-5.56,55.39],[-5.65,55.33],[-5.77,55.36],[-5.68,55.62],[-5.51,55.8],[-5.62,55.81],[-5.61,56.05],[-5.54,56.25],[-5.19,56.76],[-5.65,56.53],[-5.87,56.56],[-5.97,56.69],[-6.13,56.72],[-5.73,56.85],[-5.86,56.9],[-5.59,57.1],[-5.56,57.23],[-5.82,57.44],[-5.58,57.55],[-5.68,57.57],[-5.74,57.67],[-5.61,57.88],[-5.16,57.88],[-5.41,58.07],[-5.34,58.24],[-5.01,58.26],[-5.09,58.38],[-5.07,58.52],[-4.98,58.58],[-4.81,58.57],[-4.71,58.51],[-4.49,58.57],[-4.43,58.51],[-3.05,58.63],[-3.11,58.41],[-3.21,58.32],[-3.99,57.96],[-4.03,57.85],[-3.86,57.82],[-4.08,57.68],[-4.13,57.58],[-3.3,57.71],[-3.04,57.67],[-2.08,57.7],[-1.87,57.61],[-1.78,57.47],[-2.02,57.26],[-2.26,56.86],[-2.5,56.64],[-2.68,56.51],[-3.31,56.36],[-2.89,56.4],[-2.65,56.32],[-2.67,56.25],[-2.98,56.19],[-3.36,56.03],[-3.79,56.09],[-3.61,56.02],[-3.05,55.95],[-2.84,56.03],[-2.6,56.03],[-2.15,55.9],[-1.65,55.57],[-1.23,54.7],[-0.67,54.5],[-0.08,54.12],[-0.21,54.02],[0.12,53.61],[-0.27,53.74],[-0.66,53.72],[-0.29,53.69],[0.27,53.34],[0.35,53.16],[0.05,52.91],[0.28,52.81],[0.38,52.83],[0.56,52.97],[1.06,52.96],[1.38,52.89],[1.72,52.68],[1.75,52.47],[1.56,52.09],[1.32,51.96],[1.23,51.97],[1.28,51.84],[1.19,51.8],[0.96,51.81],[0.75,51.73],[0.9,51.69],[0.89,51.57],[0.42,51.47],[0.53,51.49],[0.69,51.39],[0.89,51.36],[1.42,51.36],[1.4,51.18],[1.05,51.05],[0.96,50.93],[0.77,50.93],[0.2,50.76],[-0.2,50.82],[-0.79,50.76],[-1.42,50.9],[-1.33,50.82],[-1.52,50.75],[-2.03,50.72],[-1.96,50.63],[-2.04,50.6],[-2.35,50.64],[-2.43,50.6],[-3,50.72],[-3.4,50.63],[-3.68,50.24],[-3.79,50.23],[-4.2,50.39],[-4.73,50.29],[-5.01,50.16],[-5.12,50.04],[-5.23,50.02],[-5.43,50.11],[-5.62,50.05],[-5.66,50.13],[-5.34,50.25],[-4.89,50.53],[-4.58,50.78],[-4.52,50.98],[-4.3,51.03],[-4.19,51.19],[-3.84,51.23],[-3.14,51.21],[-2.43,51.74],[-2.67,51.62]]]},{id:"826",name:"United Kingdom",rings:[[[-4.2,53.32],[-4.05,53.31],[-4.08,53.26],[-4.37,53.13],[-4.55,53.26],[-4.57,53.39],[-4.31,53.42],[-4.2,53.32]]]},{id:"826",name:"United Kingdom",rings:[[[-2.55,59.23],[-2.66,59.23],[-2.6,59.29],[-2.41,59.3],[-2.55,59.23]]]},{id:"826",name:"United Kingdom",rings:[[[-1.04,60.51],[-1.16,60.6],[-1.09,60.72],[-0.99,60.69],[-1.05,60.65],[-1.04,60.51]]]},{id:"826",name:"United Kingdom",rings:[[[-1.31,60.54],[-1.29,60.47],[-1.16,60.42],[-1.05,60.44],[-1.2,60.01],[-1.3,59.88],[-1.36,59.91],[-1.29,60.15],[-1.48,60.17],[-1.67,60.28],[-1.37,60.33],[-1.45,60.47],[-1.57,60.5],[-1.36,60.61],[-1.3,60.61],[-1.31,60.54]]]},{id:"826",name:"United Kingdom",rings:[[[-0.78,60.81],[-0.83,60.68],[-0.92,60.7],[-0.92,60.81],[-0.78,60.81]]]},{id:"826",name:"United Kingdom",rings:[[[-3.17,58.79],[-3.28,58.78],[-3.39,58.91],[-3.27,58.9],[-3.17,58.79]]]},{id:"826",name:"United Kingdom",rings:[[[-2.93,58.74],[-3.04,58.82],[-2.9,58.83],[-2.93,58.74]]]},{id:"826",name:"United Kingdom",rings:[[[-3.06,59.03],[-2.76,58.96],[-2.83,58.89],[-3.2,58.93],[-3.24,59],[-3.35,58.99],[-3.31,59.13],[-3.05,59.1],[-3.02,59.06],[-3.06,59.03]]]},{id:"826",name:"United Kingdom",rings:[[[-2.73,59.19],[-2.82,59.16],[-2.86,59.25],[-3.05,59.32],[-2.98,59.35],[-2.73,59.19]]]},{id:"826",name:"United Kingdom",rings:[[[-6.61,56.59],[-6.67,56.59],[-6.57,56.66],[-6.49,56.67],[-6.61,56.59]]]},{id:"826",name:"United Kingdom",rings:[[[-5.11,55.45],[-5.33,55.48],[-5.37,55.67],[-5.19,55.69],[-5.11,55.57],[-5.11,55.45]]]},{id:"826",name:"United Kingdom",rings:[[[-5.78,56.34],[-6.31,56.29],[-6.19,56.36],[-6.14,56.49],[-6.32,56.57],[-6.1,56.65],[-5.95,56.54],[-5.76,56.49],[-5.78,56.34]]]},{id:"826",name:"United Kingdom",rings:[[[-6.13,55.93],[-6.06,55.72],[-6.09,55.66],[-6.31,55.61],[-6.3,55.78],[-6.49,55.7],[-6.41,55.85],[-6.13,55.93]]]},{id:"826",name:"United Kingdom",rings:[[[-5.97,55.81],[-6.04,55.81],[-6.07,55.89],[-5.91,55.97],[-5.97,55.99],[-5.94,56.05],[-5.73,56.12],[-5.97,55.81]]]},{id:"826",name:"United Kingdom",rings:[[[-6.2,58.36],[-6.33,58.19],[-6.55,58.09],[-6.4,58.08],[-6.42,58.02],[-6.96,57.75],[-7.08,57.81],[-6.86,57.92],[-7.06,58],[-6.99,58.05],[-7.09,58.1],[-7.03,58.22],[-6.73,58.19],[-6.78,58.3],[-6.24,58.5],[-6.2,58.36]]]},{id:"826",name:"United Kingdom",rings:[[[-6.28,56.96],[-6.43,57.02],[-6.32,57.05],[-6.26,57.01],[-6.28,56.96]]]},{id:"826",name:"United Kingdom",rings:[[[-6.14,57.51],[-6.14,57.31],[-5.67,57.25],[-5.95,57.05],[-6.01,57.05],[-6.04,57.2],[-6.32,57.2],[-6.44,57.33],[-6.68,57.36],[-6.76,57.44],[-6.58,57.51],[-6.62,57.56],[-6.38,57.6],[-6.36,57.67],[-6.25,57.65],[-6.14,57.51]]]},{id:"826",name:"United Kingdom",rings:[[[-7.21,57.68],[-7.09,57.63],[-7.18,57.53],[-7.52,57.6],[-7.47,57.65],[-7.21,57.68]]]},{id:"826",name:"United Kingdom",rings:[[[-7.25,57.12],[-7.38,57.13],[-7.41,57.38],[-7.27,57.37],[-7.25,57.12]]]},{id:"826",name:"United Kingdom",rings:[[[-7.42,56.97],[-7.54,56.97],[-7.45,57.02],[-7.42,56.97]]]},{id:"826",name:"United Kingdom",rings:[[[-6.22,54.09],[-6.65,54.06],[-6.67,54.18],[-6.8,54.21],[-6.94,54.37],[-7.05,54.41],[-7.2,54.3],[-7.16,54.24],[-7.32,54.13],[-7.61,54.14],[-7.85,54.22],[-8.15,54.45],[-7.75,54.59],[-7.91,54.7],[-7.55,54.77],[-7.38,55.03],[-7.22,55.09],[-7.1,55.05],[-6.95,55.18],[-6.47,55.24],[-6.13,55.22],[-5.87,54.92],[-5.72,54.82],[-5.71,54.76],[-5.88,54.68],[-5.88,54.64],[-5.58,54.66],[-5.47,54.5],[-5.48,54.44],[-5.67,54.55],[-5.66,54.38],[-5.56,54.37],[-5.61,54.27],[-5.83,54.24],[-6.02,54.05],[-6.22,54.09]]]},{id:"826",name:"United Kingdom",rings:[[[-1.06,50.69],[-1.25,50.59],[-1.56,50.67],[-1.31,50.77],[-1.06,50.69]]]},{id:"804",name:"Ukraine",rings:[[[38.21,47.09],[37.54,47.07],[37.34,46.92],[37.05,46.88],[36.79,46.71],[36.56,46.76],[36.28,46.66],[35.83,46.62],[35.4,46.38],[35.26,46.2],[35.06,46.1],[35.28,46.28],[35.29,46.37],[35.23,46.44],[35.06,46.27],[34.85,46.19],[34.86,45.99],[35,45.73],[34.95,45.73],[34.8,45.79],[34.79,45.89],[34.69,45.98],[34.45,45.97],[34.35,46.06],[34.03,46.11],[33.81,46.21],[33.66,46.22],[33.59,46.1],[33.43,46.06],[33.2,46.18],[32.48,46.08],[32.03,46.26],[31.83,46.28],[31.78,46.32],[31.99,46.36],[32.01,46.43],[31.71,46.47],[31.56,46.56],[32.36,46.48],[32.58,46.62],[32.36,46.57],[32.05,46.64],[31.94,46.78],[31.94,46.98],[31.76,47.21],[31.91,46.93],[31.87,46.65],[31.53,46.66],[31.56,46.78],[31.4,46.63],[30.8,46.55],[30.66,46.27],[30.22,45.87],[29.82,45.73],[29.63,45.72],[29.6,45.6],[29.67,45.54],[29.71,45.26],[29.4,45.42],[28.9,45.29],[28.78,45.31],[28.76,45.23],[28.32,45.35],[28.21,45.45],[28.5,45.52],[28.49,45.67],[28.73,45.85],[28.74,45.94],[28.95,46.05],[29.01,46.18],[28.94,46.29],[28.96,46.46],[29.19,46.52],[29.21,46.38],[29.31,46.47],[29.62,46.4],[29.71,46.45],[29.84,46.35],[30.13,46.42],[29.93,46.54],[29.94,46.72],[29.88,46.83],[29.57,46.96],[29.51,47.09],[29.54,47.27],[29.13,47.49],[29.21,47.78],[29.13,47.96],[28.92,47.95],[28.77,48.12],[28.53,48.15],[28.46,48.09],[28.34,48.15],[28.35,48.21],[28.29,48.24],[28.09,48.26],[27.82,48.42],[27.55,48.48],[27.23,48.37],[26.85,48.39],[26.62,48.26],[26.31,48.2],[26.16,47.99],[25.46,47.91],[24.89,47.72],[24.49,47.95],[24.18,47.91],[23.41,47.99],[23.14,48.09],[22.88,47.95],[22.77,48.11],[22.58,48.13],[22.35,48.26],[22.25,48.41],[22.13,48.41],[22.14,48.57],[22.3,48.69],[22.54,49.07],[22.84,49.04],[22.71,49.17],[22.73,49.29],[22.65,49.54],[22.71,49.61],[23.71,50.38],[23.97,50.41],[24.09,50.53],[24.09,50.62],[23.98,50.79],[24.1,50.87],[23.66,51.31],[23.61,51.61],[23.71,51.64],[23.98,51.59],[24.36,51.87],[25.27,51.94],[25.93,51.91],[27.14,51.75],[27.3,51.6],[27.69,51.57],[27.7,51.48],[27.86,51.59],[28.01,51.56],[28.18,51.61],[28.6,51.54],[28.65,51.46],[28.73,51.43],[28.85,51.54],[29.1,51.63],[29.35,51.38],[30.16,51.48],[30.31,51.4],[30.33,51.33],[30.54,51.26],[30.63,51.36],[30.53,51.6],[30.58,51.69],[30.76,51.89],[30.98,52.05],[31.57,52.11],[32.12,52.05],[32.28,52.11],[32.36,52.27],[32.43,52.31],[32.81,52.25],[33.15,52.34],[33.73,52.34],[33.92,52.25],[34.11,51.98],[34.4,51.78],[34.38,51.72],[34.12,51.68],[34.28,51.31],[34.21,51.26],[34.76,51.17],[35.06,51.2],[35.16,51.06],[35.31,51.04],[35.44,50.73],[35.41,50.54],[35.59,50.37],[35.67,50.35],[35.89,50.44],[36.12,50.41],[36.3,50.28],[36.5,50.28],[36.62,50.21],[36.76,50.29],[37.42,50.41],[37.58,50.29],[37.7,50.11],[38.05,49.92],[38.15,49.94],[38.18,50.03],[38.26,50.05],[38.92,49.82],[39.17,49.86],[39.3,49.74],[39.46,49.73],[39.78,49.57],[40.08,49.58],[40.11,49.25],[39.89,49.06],[39.68,49.01],[39.75,48.91],[40.01,48.82],[39.79,48.81],[39.7,48.74],[39.65,48.59],[39.84,48.54],[39.89,48.36],[39.85,48.3],[39.96,48.27],[39.77,47.96],[39.78,47.89],[39.66,47.84],[38.9,47.86],[38.64,47.67],[38.37,47.61],[38.29,47.56],[38.2,47.32],[38.28,47.28],[38.2,47.17],[38.21,47.09]]]},{id:"804",name:"Ukraine",rings:[[[32.01,46.2],[32.15,46.15],[32.01,46.17],[31.56,46.26],[31.51,46.37],[31.64,46.27],[32.01,46.2]]]},{id:"792",name:"Turkey",rings:[[[25.97,40.14],[25.67,40.14],[25.92,40.24],[25.97,40.14]]]},{id:"792",name:"Turkey",rings:[[[41.51,41.52],[41.82,41.43],[41.92,41.5],[42.47,41.44],[42.61,41.58],[42.79,41.56],[42.82,41.49],[43.15,41.31],[43.21,41.2],[43.43,41.16],[43.45,41.06],[43.63,40.93],[43.72,40.72],[43.57,40.48],[43.71,40.17],[43.67,40.13],[43.94,40.02],[44.29,40.04],[44.4,40],[44.82,39.65],[44.59,39.77],[44.46,39.67],[44.39,39.42],[44.02,39.38],[44.08,39.22],[44.18,39.14],[44.17,38.93],[44.27,38.84],[44.3,38.39],[44.45,38.34],[44.21,37.91],[44.56,37.74],[44.57,37.44],[44.8,37.27],[44.76,37.14],[44.61,37.18],[44.28,36.98],[44.2,37.05],[44.19,37.25],[44.11,37.3],[43.68,37.23],[43.09,37.37],[42.94,37.32],[42.77,37.37],[42.46,37.13],[42.36,37.11],[42.31,37.23],[42.2,37.3],[42.06,37.21],[41.51,37.09],[40.71,37.1],[40.02,36.83],[39.36,36.68],[38.77,36.69],[38.44,36.86],[38.19,36.9],[37.43,36.64],[37.07,36.65],[36.94,36.76],[36.66,36.8],[36.54,36.46],[36.64,36.23],[36.38,36.17],[36.35,36],[36.2,35.94],[36.13,35.83],[35.89,35.92],[35.96,36],[35.81,36.31],[36.19,36.66],[36.18,36.81],[36.05,36.91],[35.66,36.72],[35.54,36.6],[35.39,36.57],[34.7,36.82],[34.3,36.6],[33.95,36.3],[33.69,36.18],[32.93,36.1],[32.79,36.04],[32.38,36.18],[32.02,36.53],[31.35,36.8],[30.65,36.87],[30.58,36.8],[30.56,36.53],[30.45,36.27],[30.39,36.24],[30.23,36.31],[29.69,36.16],[29.22,36.32],[29.14,36.4],[29.04,36.69],[28.97,36.72],[28.82,36.68],[28.49,36.8],[28.31,36.81],[28.2,36.69],[28.02,36.63],[28.09,36.75],[27.66,36.68],[27.46,36.71],[27.63,36.79],[28.01,36.83],[28.24,37.03],[27.35,37.02],[27.26,36.98],[27.25,37.08],[27.3,37.13],[27.53,37.16],[27.52,37.25],[27.22,37.39],[27.15,37.6],[27.07,37.66],[27.23,37.73],[27.23,37.98],[26.88,38.06],[26.68,38.2],[26.58,38.15],[26.29,38.28],[26.34,38.37],[26.42,38.37],[26.37,38.56],[26.38,38.62],[26.44,38.64],[26.59,38.56],[26.6,38.42],[26.67,38.34],[26.73,38.42],[26.86,38.37],[27.14,38.45],[26.91,38.48],[26.76,38.71],[27.01,38.89],[26.81,38.96],[26.85,39.12],[26.68,39.29],[26.9,39.55],[26.11,39.47],[26.18,39.99],[26.31,40.02],[26.74,40.4],[27.28,40.46],[27.33,40.38],[27.48,40.32],[27.73,40.33],[27.85,40.38],[27.73,40.48],[27.87,40.51],[27.99,40.49],[27.93,40.38],[27.96,40.37],[29.01,40.39],[29.05,40.42],[28.79,40.53],[28.96,40.63],[29.85,40.74],[29.36,40.81],[29.12,40.94],[29.05,41.01],[29.15,41.22],[29.92,41.15],[30.35,41.2],[30.81,41.08],[31.25,41.11],[31.46,41.32],[32.3,41.73],[33.28,42],[34.75,41.96],[35,42.06],[35.16,42.03],[35.12,41.89],[35.3,41.73],[35.56,41.63],[35.92,41.71],[36.05,41.68],[36.18,41.43],[36.41,41.27],[36.51,41.26],[36.65,41.35],[36.78,41.36],[36.99,41.28],[37.07,41.18],[38.38,40.93],[39.43,41.11],[39.81,40.98],[40.26,40.96],[41.08,41.26],[41.51,41.52]]]},{id:"792",name:"Turkey",rings:[[[28.01,41.97],[27.99,41.86],[28.2,41.56],[29.06,41.23],[28.96,41.01],[28.78,40.97],[28.17,41.08],[27.92,40.99],[27.5,40.97],[27.26,40.69],[26.77,40.5],[26.33,40.12],[26.2,40.07],[26.25,40.31],[26.79,40.63],[26.11,40.61],[26.04,40.73],[26.33,40.95],[26.33,41.24],[26.62,41.4],[26.58,41.6],[26.32,41.72],[26.33,41.77],[26.51,41.83],[26.62,41.97],[27.24,42.09],[27.53,41.92],[28.01,41.97]]]},{id:"788",name:"Tunisia",rings:[[[11.5,33.18],[11.45,32.78],[11.45,32.64],[11.53,32.52],[11.5,32.41],[10.83,32.08],[10.61,31.93],[10.47,31.74],[10.28,31.68],[10.11,31.46],[10.26,30.94],[10.22,30.78],[9.89,30.39],[9.52,30.23],[9.05,32.07],[8.33,32.54],[8.21,32.93],[8.11,33.06],[7.73,33.27],[7.5,33.83],[7.52,34.08],[7.75,34.25],[7.84,34.41],[8.12,34.56],[8.25,34.73],[8.31,35.09],[8.39,35.2],[8.25,35.8],[8.35,36.37],[8.21,36.52],[8.37,36.63],[8.44,36.76],[8.6,36.83],[8.58,36.94],[8.82,37],[9.14,37.19],[9.69,37.34],[9.84,37.31],[9.78,37.21],[9.83,37.14],[9.89,37.18],[9.88,37.25],[10.2,37.21],[10.19,37.03],[10.33,36.86],[10.29,36.78],[10.41,36.73],[10.57,36.88],[11.05,37.07],[11.13,36.87],[10.97,36.74],[10.8,36.49],[10.52,36.32],[10.48,36.18],[10.59,35.89],[11,35.63],[11.04,35.34],[11.12,35.24],[10.69,34.68],[10.12,34.28],[10.04,34.14],[10.16,33.85],[10.31,33.73],[10.45,33.66],[10.71,33.69],[10.72,33.51],[10.9,33.53],[10.96,33.63],[11.09,33.56],[11.15,33.37],[11.26,33.31],[11.2,33.25],[11.5,33.18]]]},{id:"788",name:"Tunisia",rings:[[[11.28,34.75],[11.12,34.68],[11.26,34.82],[11.28,34.75]]]},{id:"788",name:"Tunisia",rings:[[[10.96,33.72],[10.86,33.69],[10.72,33.74],[10.74,33.89],[10.92,33.89],[11.02,33.82],[11.04,33.78],[10.96,33.72]]]},{id:"760",name:"Syria",rings:[[[35.89,35.92],[36.15,35.83],[36.2,35.94],[36.35,36],[36.38,36.17],[36.64,36.23],[36.54,36.46],[36.66,36.8],[36.94,36.76],[37.07,36.65],[37.43,36.64],[38.19,36.9],[38.44,36.86],[38.77,36.69],[39.36,36.68],[40.02,36.83],[40.71,37.1],[41.51,37.09],[42.06,37.21],[42.2,37.3],[42.31,37.23],[42.36,37.11],[41.79,36.6],[41.42,36.51],[41.29,36.38],[41.24,36.07],[41.35,35.81],[41.36,35.64],[41.22,35.29],[41.19,34.77],[40.99,34.43],[40.69,34.33],[39.05,33.51],[36.82,32.32],[36.37,32.39],[36.06,32.53],[35.89,32.71],[35.79,32.73],[35.91,32.95],[35.84,33.33],[35.87,33.43],[36.03,33.59],[35.94,33.67],[35.97,33.73],[36.09,33.83],[36.37,33.84],[36.28,33.89],[36.3,33.96],[36.59,34.22],[36.51,34.43],[36.33,34.5],[36.43,34.61],[36.38,34.66],[35.98,34.63],[35.89,34.95],[35.94,35.22],[35.9,35.42],[35.76,35.57],[35.89,35.92]]]},{id:"756",name:"Switzerland",rings:[[[9.52,47.52],[9.62,47.47],[9.48,47.17],[9.49,47.06],[9.84,47.01],[9.88,46.94],[10.13,46.85],[10.35,46.99],[10.46,46.9],[10.4,46.66],[10.43,46.55],[10.2,46.62],[10.09,46.6],[10.04,46.48],[10.13,46.24],[10.04,46.24],[9.94,46.36],[9.53,46.31],[9.43,46.48],[9.3,46.5],[9.26,46.48],[9.25,46.29],[9,46.02],[9.05,45.88],[8.96,45.83],[8.78,46],[8.82,46.08],[8.64,46.11],[8.46,46.25],[8.42,46.45],[8.09,46.27],[8.12,46.16],[7.99,46.02],[7.79,45.92],[7.54,45.98],[7.13,45.88],[7.05,45.9],[6.77,46.16],[6.82,46.28],[6.76,46.42],[6.43,46.43],[6.23,46.33],[6.27,46.25],[6.2,46.19],[5.97,46.15],[5.97,46.21],[6.1,46.28],[6.12,46.38],[6.06,46.43],[6.16,46.61],[6.41,46.75],[6.46,46.95],[6.67,47.03],[6.95,47.27],[7,47.34],[6.9,47.39],[7.05,47.49],[7.27,47.43],[7.42,47.46],[7.62,47.59],[8.43,47.59],[8.56,47.62],[8.4,47.69],[8.57,47.78],[8.88,47.66],[9.18,47.67],[9.52,47.52]]]},{id:"752",name:"Sweden",rings:[[[19.07,57.84],[18.82,57.71],[18.79,57.48],[18.91,57.4],[18.78,57.36],[18.7,57.24],[18.48,57.16],[18.34,56.98],[18.15,56.92],[18.29,57.08],[18.11,57.27],[18.15,57.34],[18.14,57.56],[18.54,57.83],[18.8,57.83],[18.9,57.92],[19.07,57.84]]]},{id:"752",name:"Sweden",rings:[[[16.53,56.29],[16.43,56.24],[16.4,56.31],[16.41,56.57],[16.63,56.88],[16.73,56.9],[17,57.32],[17.12,57.32],[16.78,56.8],[16.53,56.29]]]},{id:"752",name:"Sweden",rings:[[[11.39,59.04],[11.47,58.91],[11.64,58.93],[11.8,59.29],[11.68,59.59],[11.84,59.7],[11.93,59.86],[12.17,59.91],[12.49,60.11],[12.59,60.45],[12.31,60.89],[12.3,61],[12.71,61.06],[12.88,61.35],[12.59,61.54],[12.16,61.72],[12.3,62.28],[12.12,62.59],[12.11,62.92],[12.22,63],[12,63.29],[12.21,63.49],[12.17,63.6],[12.79,64],[13.2,64.07],[13.96,64.01],[14.14,64.17],[14.08,64.46],[13.65,64.58],[14.48,65.3],[14.55,65.65],[14.64,65.79],[14.54,66.13],[15.04,66.17],[15.49,66.31],[15.42,66.49],[16.4,67.06],[16.44,67.15],[16.13,67.43],[16.19,67.51],[16.46,67.55],[16.59,67.63],[16.79,67.9],[17.33,68.1],[17.92,67.97],[18.18,68.2],[18.16,68.53],[18.38,68.56],[19.97,68.36],[20.24,68.48],[19.97,68.54],[20.24,68.67],[20.35,68.85],[20.12,69.02],[20.62,69.04],[20.9,68.98],[20.92,68.91],[22,68.52],[22.85,68.37],[23.1,68.26],[23.18,68.14],[23.32,68.13],[23.64,67.95],[23.5,67.87],[23.54,67.61],[23.46,67.46],[23.73,67.42],[23.78,67.33],[23.63,67.23],[23.64,67.13],[23.99,66.81],[23.87,66.58],[23.7,66.48],[23.7,66.25],[24,66.06],[24.15,65.81],[23.89,65.78],[23.69,65.83],[23.1,65.74],[22.75,65.87],[22.54,65.8],[22.4,65.86],[22.29,65.75],[22.25,65.6],[22.09,65.61],[22.15,65.55],[21.92,65.53],[21.95,65.47],[21.88,65.42],[21.57,65.41],[21.52,65.36],[21.61,65.26],[21.41,65.32],[21.57,65.13],[21.14,64.81],[21.52,64.46],[21.47,64.38],[21.02,64.18],[20.76,63.87],[20.21,63.66],[19.91,63.61],[19.72,63.46],[19.5,63.51],[19.5,63.42],[19.36,63.48],[19.04,63.24],[18.82,63.26],[18.86,63.21],[18.61,63.18],[18.53,63.06],[18.31,63],[18.5,62.99],[18.46,62.9],[18.17,62.79],[17.88,62.87],[17.97,62.72],[17.9,62.66],[18.04,62.6],[17.65,62.45],[17.41,62.51],[17.38,62.46],[17.43,62.34],[17.63,62.23],[17.51,62.17],[17.38,61.87],[17.47,61.68],[17.2,61.72],[17.22,61.66],[17.13,61.57],[17.14,61.38],[17.2,61.31],[17.16,61.28],[17.2,60.95],[17.28,60.81],[17.25,60.7],[17.36,60.64],[17.56,60.64],[17.66,60.54],[17.96,60.59],[18.16,60.41],[18.56,60.25],[18.53,60.15],[18.79,60.08],[18.99,59.83],[18.97,59.76],[18.58,59.57],[17.97,59.36],[18.13,59.32],[18.56,59.39],[18.62,59.33],[18.42,59.29],[18.29,59.11],[17.76,58.97],[16.98,58.65],[16.21,58.64],[16.79,58.59],[16.93,58.49],[16.65,58.43],[16.77,58.21],[16.7,58.16],[16.7,57.92],[16.6,57.91],[16.55,57.81],[16.65,57.5],[16.48,57.26],[16.53,57.07],[16.35,56.71],[15.92,56.17],[15.83,56.13],[15.63,56.19],[14.72,56.13],[14.75,56.03],[14.56,56.05],[14.21,55.83],[14.2,55.73],[14.34,55.53],[14.18,55.4],[13.81,55.43],[13.32,55.35],[12.89,55.41],[12.94,55.48],[12.97,55.75],[12.47,56.29],[12.71,56.23],[12.8,56.26],[12.66,56.44],[12.86,56.45],[12.92,56.52],[12.88,56.62],[12.72,56.66],[12.42,56.91],[12.15,57.23],[12.05,57.45],[11.96,57.43],[11.88,57.68],[11.73,57.72],[11.7,57.97],[11.55,58],[11.45,58.12],[11.43,58.34],[11.25,58.37],[11.21,58.87],[11.15,58.99],[11.19,59.08],[11.39,59.04]]]},{id:"752",name:"Sweden",rings:[[[19.16,57.92],[19.14,57.86],[19.04,57.91],[19.14,57.98],[19.33,57.96],[19.16,57.92]]]},{id:"752",name:"Sweden",rings:[[[18.42,59.03],[18.35,59.02],[18.38,59.07],[18.48,59.1],[18.42,59.03]]]},{id:"752",name:"Sweden",rings:[[[18.6,59.47],[18.57,59.44],[18.55,59.48],[18.57,59.53],[18.7,59.54],[18.6,59.47]]]},{id:"724",name:"Spain",rings:[[[1.59,38.67],[1.41,38.67],[1.4,38.71],[1.43,38.77],[1.59,38.67]]]},{id:"724",name:"Spain",rings:[[[3.14,39.79],[3.45,39.76],[3.46,39.7],[3.25,39.39],[3.07,39.3],[2.8,39.39],[2.7,39.54],[2.5,39.48],[2.37,39.57],[2.9,39.91],[3.2,39.96],[3.14,39.79]]]},{id:"724",name:"Spain",rings:[[[4.29,39.84],[3.87,39.96],[3.85,40.06],[4.22,40.03],[4.32,39.9],[4.29,39.84]]]},{id:"724",name:"Spain",rings:[[[1.45,38.92],[1.41,38.86],[1.22,38.9],[1.35,39.08],[1.56,39.12],[1.61,39.09],[1.63,39.04],[1.45,38.92]]]},{id:"724",name:"Spain",rings:[[[-1.79,43.41],[-1.76,43.32],[-1.41,43.24],[-1.48,43.07],[-1.43,43.04],[-1.3,43.1],[-1.18,43.02],[-0.76,42.94],[-0.59,42.8],[-0.3,42.83],[-0.04,42.69],[0.63,42.69],[0.7,42.85],[1.35,42.69],[1.43,42.6],[1.45,42.44],[1.7,42.5],[1.99,42.36],[2.2,42.42],[2.65,42.34],[2.67,42.39],[2.89,42.46],[3.21,42.43],[3.31,42.29],[3.17,42.26],[3.15,42.16],[3.24,42.08],[3.25,41.94],[3,41.77],[2.31,41.47],[2.08,41.29],[1.03,41.06],[0.71,40.82],[0.89,40.72],[0.6,40.61],[0.04,40.01],[-0.33,39.52],[-0.2,39.06],[-0.03,38.89],[0.16,38.82],[0.2,38.76],[-0.52,38.32],[-0.82,37.77],[-0.82,37.71],[-0.72,37.63],[-0.82,37.58],[-1.33,37.56],[-1.64,37.39],[-2.11,36.78],[-2.19,36.74],[-2.45,36.83],[-2.79,36.72],[-3.15,36.76],[-3.43,36.71],[-3.83,36.76],[-4.37,36.72],[-4.67,36.51],[-4.93,36.5],[-5.17,36.42],[-5.36,36.14],[-5.45,36.15],[-5.46,36.07],[-5.63,36.03],[-6.04,36.19],[-6.23,36.43],[-6.27,36.6],[-6.38,36.64],[-6.41,36.73],[-6.22,36.91],[-6.32,36.91],[-6.4,36.83],[-6.49,36.95],[-6.89,37.19],[-6.86,37.28],[-6.98,37.2],[-7.41,37.18],[-7.5,37.59],[-7.44,37.73],[-7.18,38.01],[-7.02,38.05],[-6.96,38.19],[-7.1,38.18],[-7.34,38.46],[-7.28,38.72],[-7.05,38.91],[-7,39.06],[-7.17,39.14],[-7.34,39.47],[-7.54,39.66],[-7.12,39.68],[-6.98,39.8],[-6.9,40.02],[-7.03,40.17],[-6.81,40.34],[-6.85,40.44],[-6.83,40.78],[-6.93,41.01],[-6.21,41.53],[-6.31,41.64],[-6.54,41.67],[-6.56,41.87],[-6.62,41.94],[-7.15,41.98],[-7.21,41.9],[-7.4,41.83],[-7.92,41.88],[-8.15,41.81],[-8.22,41.9],[-8.14,42.04],[-8.27,42.14],[-8.85,41.93],[-8.89,42.11],[-8.69,42.27],[-8.81,42.28],[-8.73,42.41],[-8.81,42.47],[-8.81,42.64],[-9.03,42.59],[-8.93,42.8],[-9.04,42.81],[-9.24,42.98],[-9.18,43.17],[-8.87,43.33],[-8.54,43.34],[-8.25,43.44],[-8.26,43.58],[-7.7,43.77],[-7.5,43.74],[-7.26,43.6],[-7.06,43.55],[-5.85,43.65],[-4.52,43.42],[-3.61,43.52],[-3.04,43.37],[-2.87,43.45],[-2.34,43.33],[-1.79,43.41]]]},{id:"703",name:"Slovakia",rings:[[[22.54,49.07],[22.3,48.69],[22.14,48.57],[22.11,48.39],[21.72,48.35],[21.45,48.55],[21.07,48.51],[20.49,48.53],[20.33,48.3],[19.9,48.13],[19.63,48.22],[19.47,48.11],[18.79,48],[18.73,47.79],[17.76,47.77],[17.63,47.81],[17.32,47.99],[17.09,48.04],[16.86,48.39],[16.99,48.68],[17.13,48.84],[17.48,48.83],[17.76,48.89],[18.08,49.07],[18.16,49.26],[18.6,49.49],[18.94,49.5],[18.97,49.4],[19.15,49.4],[19.25,49.51],[19.44,49.6],[19.63,49.41],[19.77,49.37],[19.76,49.2],[19.8,49.19],[20.06,49.18],[20.16,49.32],[20.36,49.38],[20.62,49.39],[20.95,49.32],[21.08,49.42],[21.35,49.43],[21.89,49.34],[22.02,49.21],[22.54,49.07]]]},{id:"705",name:"Slovenia",rings:[[[16.52,46.5],[16.32,46.53],[16.24,46.48],[16.23,46.37],[16.07,46.37],[15.93,46.28],[15.64,46.2],[15.59,46.14],[15.67,46.05],[15.65,45.86],[15.28,45.73],[15.36,45.65],[15.28,45.58],[15.34,45.47],[15.24,45.44],[14.79,45.48],[14.57,45.66],[14.37,45.48],[13.99,45.51],[13.88,45.43],[13.61,45.48],[13.58,45.52],[13.88,45.61],[13.72,45.76],[13.58,45.81],[13.6,45.98],[13.49,45.99],[13.63,46.18],[13.38,46.26],[13.7,46.52],[14.55,46.4],[14.89,46.61],[15.44,46.63],[15.76,46.71],[15.96,46.68],[15.98,46.8],[16.09,46.86],[16.28,46.86],[16.38,46.64],[16.52,46.5]]]},{id:"688",name:"Serbia",rings:[[[22.7,44.24],[22.63,44.19],[22.6,44.08],[22.42,44.01],[22.37,43.78],[22.56,43.45],[22.98,43.19],[22.94,43.1],[22.71,42.88],[22.47,42.84],[22.44,42.63],[22.53,42.48],[22.42,42.33],[22.24,42.36],[21.56,42.25],[21.52,42.33],[21.61,42.39],[21.75,42.67],[21.39,42.75],[21.4,42.83],[21.06,43.09],[20.85,43.17],[20.8,43.26],[20.62,43.2],[20.66,43.1],[20.62,43.03],[20.48,42.95],[20.47,42.86],[20.35,42.83],[20.27,42.94],[19.61,43.17],[19.22,43.45],[19.19,43.52],[19.25,43.58],[19.45,43.56],[19.5,43.64],[19.24,43.96],[19.55,43.99],[19.58,44.04],[19.12,44.36],[19.15,44.53],[19.29,44.7],[19.35,44.88],[19,44.9],[19.09,44.93],[19.06,45.14],[19.14,45.2],[19.39,45.17],[19.4,45.21],[19.01,45.4],[19.06,45.52],[18.92,45.6],[18.95,45.66],[18.84,45.84],[18.91,45.93],[19.07,46.01],[19.28,46],[19.53,46.16],[20.21,46.13],[20.71,45.74],[20.77,45.75],[20.77,45.48],[21.02,45.32],[21.49,45.15],[21.35,45.01],[21.53,44.9],[21.36,44.83],[21.91,44.67],[22.09,44.54],[22.5,44.71],[22.64,44.65],[22.74,44.57],[22.55,44.54],[22.49,44.44],[22.7,44.24]]]},{id:"674",name:"San Marino",rings:[[[12.49,43.9],[12.4,43.94],[12.5,43.99],[12.49,43.9]]]},{id:"643",name:"Russia",rings:[[[62,53.98],[61.93,53.95],[61.33,54.05],[61.23,54.02],[61.14,53.96],[61.11,53.75],[60.98,53.62],[61.25,53.55],[61.52,53.55],[61.5,53.49],[61.23,53.45],[61.16,53.34],[61.2,53.29],[61.66,53.23],[62,53.11],[62,52.95],[61.05,52.97],[60.77,52.68],[60.99,52.34],[60.67,52.15],[60.42,52.13],[60.03,51.93],[60.39,51.77],[60.46,51.65],[61.36,51.44],[61.56,51.32],[61.58,51.23],[61.39,50.86],[60.94,50.7],[60.42,50.68],[60.29,50.7],[60.06,50.85],[59.96,50.8],[59.81,50.58],[59.52,50.49],[59.52,50.58],[59.45,50.62],[58.88,50.69],[58.36,51.06],[57.84,51.09],[57.65,50.92],[57.44,50.89],[57.18,51.04],[57.01,51.07],[56.62,50.98],[56.49,51.02],[56.14,50.84],[56.05,50.71],[55.69,50.58],[55.36,50.67],[54.64,51.01],[54.55,50.95],[54.65,50.66],[54.56,50.54],[54.47,50.58],[54.42,50.78],[54.14,51.04],[53.34,51.48],[52.57,51.48],[52.33,51.68],[52.22,51.71],[52.01,51.67],[51.61,51.48],[51.35,51.47],[51.27,51.59],[51.16,51.65],[50.79,51.73],[50.25,51.29],[49.82,51.13],[49.5,51.08],[49.32,50.85],[48.81,50.6],[48.62,50.61],[48.84,50.01],[48.76,49.93],[48.43,49.83],[48.22,49.93],[47.71,50.38],[47.5,50.4],[47.37,50.32],[47.3,50.22],[47.3,50.06],[46.99,49.85],[46.89,49.7],[46.8,49.37],[47.03,49.15],[46.7,48.8],[46.61,48.57],[46.66,48.41],[47.07,48.23],[47.12,48.13],[47.09,47.95],[47.29,47.74],[47.48,47.8],[48.17,47.71],[48.6,47.26],[48.96,46.77],[48.88,46.71],[48.56,46.76],[48.5,46.7],[48.54,46.61],[49.23,46.34],[49.25,46.29],[49.12,46.28],[49.08,46.19],[48.69,46.09],[48.73,45.9],[48.49,45.94],[48.16,45.74],[47.83,45.66],[47.7,45.69],[47.63,45.58],[47.46,45.68],[47.53,45.6],[47.52,45.49],[47.41,45.42],[47.39,45.29],[47.08,44.82],[47,44.88],[46.96,44.78],[46.76,44.66],[46.72,44.56],[46.75,44.42],[47.02,44.34],[47.31,44.1],[47.46,43.56],[47.56,43.83],[47.65,43.89],[47.51,43.51],[47.46,43.03],[47.63,42.9],[47.73,42.68],[48.08,42.35],[48.38,41.95],[48.57,41.85],[48.39,41.6],[48.06,41.46],[47.86,41.21],[47.59,41.22],[47.26,41.32],[47.21,41.46],[46.75,41.81],[46.57,41.8],[46.54,41.87],[45.95,42.04],[45.64,42.2],[45.73,42.48],[45.65,42.52],[45.34,42.53],[45.16,42.68],[44.87,42.76],[44.77,42.62],[44.65,42.73],[44.51,42.75],[43.96,42.57],[43.83,42.57],[43.74,42.62],[43.78,42.75],[43.09,42.99],[42.99,43.09],[42.76,43.17],[42.57,43.16],[42.42,43.22],[41.58,43.22],[41.36,43.33],[41.08,43.37],[40.65,43.53],[40.15,43.57],[39.98,43.42],[38.72,44.29],[38.18,44.42],[37.85,44.7],[37.7,44.66],[37.5,44.7],[37.2,44.97],[36.65,45.13],[36.62,45.19],[36.94,45.29],[36.72,45.37],[36.79,45.41],[36.87,45.43],[37.22,45.27],[37.65,45.38],[37.67,45.49],[37.61,45.5],[37.61,45.57],[37.84,45.8],[37.93,46],[38.01,46.05],[38.08,45.94],[38.18,46.09],[38.49,46.09],[38.08,46.39],[37.91,46.41],[37.77,46.64],[37.97,46.62],[38.23,46.7],[38.5,46.66],[38.44,46.81],[39.27,47.04],[39.29,47.11],[39.2,47.27],[39.02,47.27],[38.93,47.18],[38.67,47.14],[38.55,47.15],[38.76,47.26],[38.58,47.24],[38.21,47.09],[38.2,47.17],[38.28,47.28],[38.2,47.32],[38.29,47.56],[38.64,47.67],[38.82,47.84],[39.74,47.84],[39.78,47.89],[39.77,47.96],[39.96,48.27],[39.85,48.3],[39.89,48.36],[39.84,48.54],[39.65,48.59],[39.7,48.74],[39.79,48.81],[40.01,48.82],[39.75,48.91],[39.68,49.01],[39.89,49.06],[40.11,49.25],[40.08,49.58],[39.78,49.57],[39.46,49.73],[39.3,49.74],[39.17,49.86],[38.92,49.82],[38.26,50.05],[38.18,50.03],[38.15,49.94],[38.05,49.92],[37.7,50.11],[37.58,50.29],[37.42,50.41],[36.76,50.29],[36.62,50.21],[36.5,50.28],[36.3,50.28],[36.12,50.41],[35.89,50.44],[35.67,50.35],[35.59,50.37],[35.41,50.54],[35.44,50.73],[35.31,51.04],[35.16,51.06],[35.06,51.2],[34.76,51.17],[34.21,51.26],[34.28,51.31],[34.12,51.68],[34.38,51.72],[34.4,51.78],[34.11,51.98],[33.92,52.25],[33.73,52.34],[33.15,52.34],[32.81,52.25],[32.43,52.31],[32.36,52.27],[32.28,52.11],[32.12,52.05],[31.76,52.1],[31.58,52.31],[31.62,52.55],[31.53,52.63],[31.56,52.76],[31.26,53.02],[31.42,53.2],[31.67,53.2],[31.85,53.11],[32.14,53.09],[32.7,53.34],[32.69,53.45],[32.47,53.55],[32.42,53.62],[32.45,53.69],[32.2,53.78],[31.75,53.81],[31.83,54.03],[31.4,54.2],[31.19,54.45],[31.07,54.49],[31.15,54.63],[30.8,54.78],[30.83,54.92],[30.98,55.05],[30.96,55.14],[30.81,55.28],[30.9,55.4],[30.88,55.6],[30.23,55.84],[29.94,55.85],[29.48,55.68],[29.35,55.78],[29.37,55.94],[29.09,56.02],[28.79,55.94],[28.56,56.09],[28.28,56.06],[28.15,56.14],[28.2,56.26],[28.1,56.55],[28.01,56.6],[27.85,56.85],[27.64,56.85],[27.83,57.19],[27.83,57.29],[27.54,57.43],[27.51,57.51],[27.35,57.53],[27.4,57.67],[27.54,57.8],[27.78,57.86],[27.67,57.93],[27.5,58.22],[27.53,58.43],[27.43,58.79],[27.76,59.05],[27.9,59.28],[28.15,59.37],[28.01,59.48],[28.06,59.55],[28.01,59.72],[28.06,59.78],[28.33,59.69],[28.52,59.85],[28.95,59.83],[29.15,60],[30.12,59.87],[30.17,59.96],[29.72,60.19],[29.07,60.19],[28.64,60.38],[28.49,60.54],[28.62,60.49],[28.65,60.61],[28.51,60.68],[28.18,60.57],[27.8,60.54],[28.41,60.9],[29.25,61.29],[30.94,62.32],[31.29,62.57],[31.53,62.89],[31.18,63.21],[30.42,63.5],[29.99,63.73],[30.21,63.8],[30.53,64.08],[30.49,64.24],[30.11,64.37],[29.99,64.52],[30.12,64.64],[30.11,64.73],[29.78,64.8],[29.6,64.97],[29.62,65.04],[29.83,65.15],[29.81,65.2],[29.61,65.25],[29.72,65.34],[29.73,65.47],[29.82,65.57],[29.72,65.63],[30.09,65.68],[30.09,65.79],[29.9,66.09],[29.06,66.89],[29.09,66.97],[29.24,67.1],[29.94,67.55],[29.99,67.67],[29.34,68.06],[28.69,68.19],[28.47,68.49],[28.78,68.81],[28.41,68.9],[29.12,69.05],[29.39,69.3],[29.99,69.39],[30.16,69.5],[30.16,69.63],[30.62,69.53],[30.86,69.54],[30.92,69.61],[30.87,69.78],[31.55,69.7],[31.79,69.82],[32,69.81],[31.98,69.95],[33.01,69.72],[33,69.63],[32.91,69.6],[32.18,69.67],[32.09,69.63],[32.33,69.55],[32.38,69.48],[33,69.47],[32.94,69.38],[32.98,69.37],[33.45,69.43],[33.33,69.15],[33.14,69.07],[33.44,69.13],[33.68,69.31],[34.23,69.31],[35.01,69.22],[35.29,69.28],[35.86,69.19],[37.73,68.69],[38.43,68.36],[38.83,68.32],[39.57,68.07],[39.82,68.06],[39.75,68.16],[39.81,68.15],[40.38,67.83],[40.97,67.71],[41.06,67.44],[41.13,67.39],[41.13,67.27],[41.36,67.21],[41.28,66.91],[41.19,66.83],[40.52,66.45],[40.1,66.3],[39.29,66.13],[38.66,66.07],[37.9,66.1],[36.98,66.27],[35.51,66.4],[34.82,66.61],[34.48,66.55],[34.4,66.61],[34.45,66.65],[33.15,66.84],[32.85,67.02],[32.93,67.09],[31.89,67.16],[32.5,67],[32.46,66.92],[32.86,66.72],[33.18,66.68],[33.22,66.53],[33.65,66.44],[33.36,66.33],[34.11,66.23],[34.4,66.13],[34.69,65.95],[34.79,65.86],[34.78,65.77],[34.62,65.51],[34.41,65.4],[34.8,64.99],[34.83,64.8],[34.95,64.76],[34.86,64.71],[34.87,64.56],[35.03,64.44],[35.43,64.35],[35.65,64.38],[36.15,64.19],[36.37,64],[37.44,63.81],[37.97,63.95],[38.07,64.03],[38.06,64.09],[37.95,64.32],[37.74,64.4],[37.18,64.41],[36.58,64.79],[36.53,64.94],[36.79,64.99],[36.88,65.17],[37.14,65.19],[37.53,65.11],[38.01,64.88],[38.41,64.86],[39.57,64.57],[39.76,64.58],[39.85,64.69],[40.06,64.77],[40.44,64.78],[40.28,65],[39.8,65.35],[39.75,65.45],[39.82,65.6],[40.33,65.75],[40.69,65.96],[41.47,66.12],[42.21,66.52],[42.6,66.42],[43.23,66.41],[43.65,66.25],[43.54,66.12],[43.84,66.14],[44.11,66.01],[44.15,66.11],[44.1,66.23],[44.49,66.67],[44.43,66.94],[44.29,67.1],[43.85,67.19],[43.78,67.26],[44.22,68],[44.2,68.25],[44.17,68.33],[43.33,68.67],[44.05,68.55],[45.08,68.58],[45.89,68.48],[46.68,67.97],[46.69,67.85],[45.53,67.76],[44.94,67.48],[44.9,67.41],[44.94,67.35],[45.56,67.19],[45.88,66.89],[46.49,66.8],[47.66,66.98],[47.77,67.28],[47.91,67.45],[47.88,67.58],[48.83,67.68],[48.88,67.73],[48.7,67.87],[48.75,67.9],[49.16,67.87],[50.84,68.35],[51.99,68.54],[52.29,68.46],[52.18,68.37],[52.4,68.35],[52.72,68.48],[52.55,68.59],[52.34,68.61],[53.8,69],[54.49,68.99],[53.8,68.91],[53.97,68.84],[53.76,68.63],[53.92,68.54],[53.93,68.44],[53.83,68.38],[53.34,68.34],[53.26,68.27],[53.97,68.23],[54.48,68.3],[54.72,68.18],[54.86,68.2],[54.92,68.37],[55.42,68.57],[56.04,68.65],[57.13,68.55],[58.17,68.89],[58.24,68.83],[58.35,68.92],[59.06,69.01],[59.11,68.9],[59.37,68.74],[59.11,68.62],[59.1,68.44],[59.73,68.35],[59.92,68.47],[59.87,68.61],[59.9,68.71],[60.49,68.73],[60.93,68.99],[60.86,69.15],[60.67,69.11],[60.17,69.59],[60.91,69.85],[62,69.76],[62,69],[-32,69],[-32,65.05],[62,65.05],[62,53.98]]]},{id:"643",name:"Russia",rings:[[[35.81,65.18],[35.86,65.08],[35.84,65],[35.78,64.98],[35.53,65.15],[35.81,65.18]]]},{id:"643",name:"Russia",rings:[[[42.71,66.7],[42.46,66.77],[42.63,66.78],[42.71,66.7]]]},{id:"643",name:"Russia",rings:[[[20.96,55.28],[20.59,54.98],[20.89,54.91],[21.19,54.93],[21.23,55.26],[21.39,55.27],[22.07,55.06],[22.57,55.06],[22.63,54.97],[22.83,54.87],[22.69,54.56],[22.76,54.36],[19.6,54.46],[19.86,54.63],[19.97,54.92],[20.52,55],[20.9,55.29],[20.96,55.28]]]},{id:"643",name:"Russia",rings:[[[33.59,46.1],[33.66,46.22],[33.81,46.21],[34.03,46.11],[34.35,46.06],[34.45,45.97],[34.69,45.98],[34.79,45.89],[34.8,45.79],[35,45.73],[35.26,45.45],[35.46,45.32],[35.83,45.4],[36.01,45.37],[36.17,45.45],[36.57,45.39],[36.39,45.07],[35.87,45],[35.68,45.1],[35.47,45.1],[35.09,44.8],[34.72,44.81],[34.47,44.72],[34.08,44.42],[33.76,44.4],[33.45,44.55],[33.61,44.91],[33.55,45.1],[33.39,45.19],[33.19,45.19],[32.92,45.35],[32.61,45.33],[32.51,45.4],[33.14,45.75],[33.67,45.95],[33.59,46.1]]]},{id:"642",name:"Romania",rings:[[[28.21,45.45],[28.32,45.35],[28.76,45.23],[28.78,45.31],[28.9,45.29],[29.4,45.42],[29.71,45.26],[29.56,44.84],[29.05,44.76],[29.05,44.92],[29.09,44.98],[28.98,44.99],[28.89,44.92],[28.92,44.81],[28.81,44.57],[28.89,44.57],[28.64,44.3],[28.66,43.98],[28.59,43.74],[28.22,43.77],[28.05,43.82],[27.88,43.99],[27.74,43.96],[27.43,44.02],[27.09,44.17],[26.22,44.01],[25.82,43.77],[25.5,43.67],[23.23,43.87],[22.92,43.83],[22.87,43.95],[23.03,44.08],[22.7,44.24],[22.49,44.44],[22.55,44.54],[22.7,44.56],[22.72,44.61],[22.5,44.71],[22.09,44.54],[21.91,44.67],[21.36,44.83],[21.53,44.9],[21.35,45.01],[21.49,45.15],[21.02,45.32],[20.77,45.48],[20.77,45.75],[20.71,45.74],[20.24,46.11],[20.51,46.17],[20.61,46.13],[20.76,46.25],[21.12,46.28],[21.26,46.41],[21.32,46.61],[21.5,46.7],[21.48,46.75],[21.66,47.04],[21.99,47.4],[22,47.5],[22.29,47.73],[22.61,47.77],[23.14,48.09],[23.41,47.99],[24.18,47.91],[24.58,47.93],[24.89,47.72],[25.46,47.91],[26.16,47.99],[26.31,48.2],[26.71,48.26],[26.98,48.16],[27.61,47.34],[28.07,46.98],[28.24,46.64],[28.24,46.45],[28.1,45.97],[28.16,45.65],[28.07,45.6],[28.21,45.45]]]},{id:"620",name:"Portugal",rings:[[[-8.78,41.94],[-8.59,42.05],[-8.27,42.14],[-8.14,42.04],[-8.22,41.9],[-8.15,41.81],[-7.92,41.88],[-7.4,41.83],[-7.21,41.9],[-7.15,41.98],[-6.62,41.94],[-6.56,41.87],[-6.54,41.67],[-6.31,41.64],[-6.21,41.53],[-6.93,41.01],[-6.83,40.78],[-6.85,40.44],[-6.81,40.34],[-7.03,40.17],[-6.9,40.02],[-6.98,39.8],[-7.12,39.68],[-7.54,39.66],[-7.34,39.47],[-7.17,39.14],[-7,39.06],[-7.05,38.91],[-7.28,38.72],[-7.34,38.46],[-7.1,38.18],[-6.96,38.19],[-7.02,38.05],[-7.18,38.01],[-7.44,37.73],[-7.5,37.59],[-7.41,37.18],[-7.84,37.01],[-8.6,37.12],[-9,37.03],[-8.81,37.43],[-8.79,37.73],[-8.88,37.96],[-8.81,38.3],[-8.88,38.45],[-8.67,38.42],[-8.8,38.52],[-9.21,38.45],[-9.25,38.66],[-9.02,38.75],[-8.94,39],[-8.79,39.08],[-8.96,39.02],[-9.14,38.74],[-9.36,38.7],[-9.47,38.73],[-9.35,39.25],[-9.38,39.34],[-9.15,39.54],[-8.84,40.12],[-8.87,40.26],[-8.69,40.75],[-8.66,41.09],[-8.81,41.65],[-8.76,41.7],[-8.85,41.7],[-8.89,41.77],[-8.78,41.94]]]},{id:"616",name:"Poland",rings:[[[23.6,51.52],[23.68,51.4],[23.66,51.31],[24.1,50.87],[23.98,50.79],[24.09,50.62],[24.09,50.53],[23.97,50.41],[23.71,50.38],[23.41,50.17],[22.65,49.54],[22.73,49.29],[22.71,49.17],[22.85,49.08],[22.81,49.02],[22.02,49.21],[21.89,49.34],[21.64,49.41],[21.08,49.42],[21,49.34],[20.87,49.32],[20.62,49.39],[20.36,49.38],[20.16,49.32],[20.06,49.18],[19.76,49.2],[19.77,49.37],[19.63,49.41],[19.44,49.6],[19.25,49.51],[19.15,49.4],[18.97,49.4],[18.94,49.5],[18.83,49.51],[18.81,49.61],[18.6,49.76],[18.56,49.88],[18.3,49.91],[18.03,50.04],[17.88,49.97],[17.63,50.12],[17.59,50.16],[17.74,50.23],[17.7,50.31],[17.42,50.25],[17.15,50.38],[16.88,50.43],[16.99,50.24],[16.64,50.1],[16.21,50.42],[16.42,50.57],[16.28,50.66],[16.01,50.61],[15.73,50.74],[15.36,50.81],[15.26,50.96],[14.99,51.01],[14.98,50.89],[14.81,50.86],[15.02,51.25],[14.91,51.46],[14.73,51.52],[14.74,51.63],[14.6,51.83],[14.75,52.08],[14.68,52.25],[14.55,52.36],[14.62,52.53],[14.13,52.88],[14.37,53.1],[14.41,53.22],[14.26,53.73],[14.58,53.64],[14.56,53.82],[14.21,53.87],[14.2,53.92],[16.19,54.29],[16.56,54.55],[16.89,54.6],[17.26,54.73],[18.08,54.84],[18.32,54.84],[18.76,54.68],[18.8,54.63],[18.44,54.75],[18.59,54.51],[18.67,54.43],[18.98,54.35],[19.41,54.39],[19.6,54.46],[22.17,54.36],[22.89,54.39],[23.45,54.14],[23.6,53.6],[23.89,53.03],[23.9,52.7],[23.41,52.52],[23.18,52.29],[23.65,52.04],[23.63,51.81],[23.55,51.71],[23.6,51.52]]]},{id:"578",name:"Norway",rings:[[[20.62,69.04],[20.12,69.02],[20.35,68.85],[20.24,68.67],[19.97,68.54],[20.24,68.48],[19.97,68.36],[18.3,68.56],[18.16,68.53],[18.18,68.2],[17.92,67.97],[17.33,68.1],[16.79,67.9],[16.59,67.63],[16.19,67.51],[16.13,67.43],[16.44,67.15],[16.4,67.06],[15.42,66.49],[15.49,66.31],[15.04,66.17],[14.54,66.13],[14.64,65.79],[14.55,65.65],[14.48,65.3],[13.65,64.58],[14.08,64.46],[14.15,64.26],[14.14,64.17],[14.06,64.1],[13.96,64.01],[13.2,64.07],[12.79,64],[12.17,63.6],[12.21,63.49],[12,63.29],[12.22,63],[12.11,62.92],[12.12,62.59],[12.3,62.28],[12.16,61.72],[12.59,61.54],[12.88,61.35],[12.71,61.06],[12.3,61],[12.31,60.89],[12.59,60.45],[12.49,60.11],[12.17,59.91],[11.93,59.86],[11.84,59.7],[11.68,59.59],[11.8,59.29],[11.64,58.93],[11.47,58.91],[11.37,59.1],[10.83,59.18],[10.64,59.39],[10.6,59.76],[10.54,59.7],[10.57,59.59],[10.4,59.52],[10.46,59.38],[10.43,59.28],[10.18,59.01],[9.84,58.96],[9.64,59.12],[9.56,59.11],[9.7,59.01],[9.66,58.97],[9.31,58.86],[9.39,58.81],[9.32,58.75],[8.17,58.14],[7.46,58.02],[7,58.02],[6.9,58.07],[6.88,58.15],[6.8,58.16],[6.73,58.07],[6.59,58.1],[6.55,58.12],[6.69,58.22],[6.66,58.26],[6.39,58.27],[6.05,58.38],[5.71,58.52],[5.52,58.73],[5.56,58.97],[5.61,59.01],[6.1,58.87],[6.36,59],[6.1,58.95],[5.89,59.1],[5.97,59.19],[5.95,59.3],[6.4,59.56],[5.56,59.29],[5.36,59.17],[5.17,59.16],[5.13,59.23],[5.19,59.45],[5.3,59.64],[5.47,59.71],[5.77,59.66],[5.87,59.73],[6.22,59.82],[5.83,59.8],[5.73,59.86],[6.07,60.08],[6.14,60.23],[6.52,60.41],[6.57,60.36],[6.53,60.15],[6.72,60.42],[7,60.51],[6.15,60.35],[5.91,60.15],[5.88,60.07],[5.7,60.01],[5.5,59.83],[5.15,59.64],[5.12,59.83],[5.22,59.98],[5.18,60.05],[5.21,60.09],[5.5,60.07],[5.69,60.12],[5.29,60.21],[5.14,60.44],[5.65,60.69],[5.24,60.57],[5.12,60.64],[5.05,60.71],[5.01,61.04],[5.99,61.12],[6.42,61.08],[6.78,61.14],[6.97,61.06],[7.04,60.95],[7.08,60.97],[7.04,61.09],[7.61,61.21],[7.4,61.22],[7.35,61.3],[7.44,61.43],[7.33,61.37],[7.28,61.18],[7.17,61.17],[6.66,61.21],[6.6,61.29],[6.49,61.15],[6.38,61.13],[6.08,61.17],[5.33,61.11],[5.11,61.19],[5.02,61.25],[5,61.43],[5.34,61.48],[4.93,61.71],[4.93,61.88],[5.47,61.9],[6.02,61.79],[6.73,61.87],[6.13,61.85],[5.27,61.94],[5.1,62.03],[5.14,62.16],[5.36,62.15],[5.54,62.31],[5.91,62.42],[6.08,62.35],[6.58,62.41],[6.69,62.47],[6.14,62.41],[6.12,62.45],[6.35,62.61],[6.96,62.63],[7.49,62.54],[7.69,62.59],[7.53,62.61],[7.54,62.67],[8.09,62.73],[8.04,62.77],[6.73,62.72],[6.94,62.93],[7.57,63.1],[8.1,63.09],[8.21,62.99],[8.62,62.85],[8.16,63.16],[8.27,63.29],[8.63,63.34],[8.6,63.43],[8.39,63.44],[8.36,63.5],[8.67,63.62],[9.14,63.59],[9.08,63.5],[9.16,63.46],[9.32,63.57],[9.7,63.63],[10.02,63.39],[10.19,63.46],[10.76,63.46],[10.67,63.56],[10.73,63.63],[11.37,63.81],[11.18,63.9],[11.43,64.02],[11.31,64.05],[11.08,63.99],[10.91,63.92],[11.05,63.85],[10.94,63.77],[10.06,63.51],[9.92,63.52],[9.77,63.7],[9.6,63.68],[9.61,63.8],[9.87,63.92],[10.01,64.08],[10.24,64.18],[10.56,64.42],[11.53,64.74],[11.63,64.81],[11.56,64.82],[11.3,64.76],[11.35,64.91],[11.49,64.98],[12.16,65.18],[12.31,65.09],[12.51,65.1],[12.74,65.21],[12.92,65.34],[12.42,65.18],[12.13,65.28],[12.12,65.36],[12.27,65.57],[12.63,65.81],[12.69,65.9],[13.03,65.96],[12.79,66.1],[13.67,66.18],[14.03,66.3],[13.12,66.23],[13.07,66.43],[13.11,66.54],[13.19,66.54],[13.21,66.64],[13.62,66.8],[13.96,66.8],[13.65,66.91],[13.88,66.97],[14.11,67.12],[15.42,67.2],[15.44,67.25],[15.3,67.26],[14.44,67.27],[14.75,67.5],[14.96,67.57],[15.41,67.47],[15.59,67.35],[15.58,67.44],[15.69,67.52],[15.49,67.52],[15.25,67.6],[15.22,67.66],[15.35,67.73],[15.31,67.77],[14.86,67.66],[14.78,67.68],[14.8,67.81],[15.13,67.97],[15.4,67.92],[15.62,67.95],[15.6,67.99],[15.36,68],[15.29,68.04],[15.32,68.07],[16.01,68.23],[16.07,68.2],[16.12,68.03],[16.31,67.88],[16.26,68],[16.39,68.09],[16.26,68.14],[16.17,68.28],[16.21,68.32],[16.39,68.39],[16.95,68.35],[17.55,68.43],[17.43,68.48],[16.58,68.47],[16.52,68.53],[16.65,68.63],[17.13,68.69],[17.39,68.8],[17.54,69],[17.7,69.1],[18.1,69.16],[18.08,69.32],[18.26,69.47],[18.48,69.36],[18.86,69.31],[18.92,69.33],[18.62,69.43],[18.61,69.49],[18.99,69.56],[19.04,69.66],[19.2,69.75],[19.69,69.81],[19.72,69.78],[19.64,69.42],[19.96,69.82],[20.32,69.95],[20.39,69.87],[20.34,69.62],[20.04,69.36],[20.11,69.34],[20.49,69.54],[20.74,69.52],[20.53,69.69],[20.55,69.85],[20.62,69.91],[21.16,69.89],[21.25,70],[21.43,70.01],[21.98,69.83],[21.89,70],[21.8,70.07],[21.4,70.18],[21.36,70.23],[21.78,70.23],[22.22,70.31],[22.32,70.27],[22.42,70.34],[22.69,70.37],[22.94,70.31],[23.05,70.1],[23.36,69.98],[23.4,70.02],[23.29,70.11],[23.38,70.25],[23.66,70.4],[24.04,70.49],[24.42,70.7],[24.27,70.77],[24.26,70.83],[24.66,71],[25.26,70.84],[25.44,70.91],[25.77,70.85],[25.78,70.82],[25.27,70.55],[25.15,70.32],[24.99,70.22],[24.98,70.14],[25.04,70.11],[25.21,70.14],[25.42,70.24],[25.47,70.34],[26.51,70.91],[26.66,70.94],[26.74,70.85],[26.56,70.67],[26.65,70.64],[26.58,70.41],[26.99,70.51],[27.18,70.74],[27.31,70.8],[27.55,70.8],[27.24,70.95],[27.6,71.09],[28.39,70.98],[28.38,70.87],[28.33,70.82],[27.9,70.68],[28.27,70.67],[28.2,70.58],[28.19,70.25],[28.61,70.76],[28.83,70.86],[29.1,70.86],[29.74,70.65],[30.07,70.7],[30.24,70.62],[30.21,70.54],[30.59,70.52],[30.93,70.4],[30.94,70.27],[30.26,70.12],[28.78,70.15],[28.81,70.09],[29.6,69.98],[29.65,69.94],[29.64,69.78],[29.79,69.73],[30.09,69.72],[30.24,69.86],[30.35,69.83],[30.43,69.72],[30.48,69.79],[30.87,69.78],[30.92,69.65],[30.9,69.56],[30.62,69.53],[30.16,69.63],[30.19,69.54],[30.09,69.43],[29.39,69.3],[29.17,69.07],[28.96,69.02],[28.83,69.12],[28.85,69.18],[29.33,69.47],[29.14,69.67],[28.41,69.82],[27.89,70.06],[27.75,70.06],[27.13,69.91],[26.53,69.91],[26.07,69.69],[25.77,69.28],[25.75,68.99],[25.58,68.89],[25.25,68.82],[25.09,68.64],[24.94,68.59],[24,68.8],[23.86,68.81],[23.71,68.71],[23.32,68.65],[22.41,68.72],[22.3,68.86],[21.59,69.27],[21.27,69.27],[21.07,69.21],[21.13,69.08],[21.07,69.04],[20.62,69.04]]]},{id:"578",name:"Norway",rings:[[[4.96,61.09],[4.8,61.08],[4.83,61.18],[4.92,61.2],[4.97,61.15],[4.96,61.09]]]},{id:"578",name:"Norway",rings:[[[5.09,60.31],[5.09,60.19],[4.96,60.24],[4.96,60.45],[5.09,60.31]]]},{id:"578",name:"Norway",rings:[[[29.96,69.8],[29.75,69.79],[29.84,69.91],[30.05,69.84],[29.96,69.8]]]},{id:"578",name:"Norway",rings:[[[11.97,65.63],[11.77,65.63],[11.87,65.71],[12,65.68],[11.97,65.63]]]},{id:"578",name:"Norway",rings:[[[8.47,63.67],[8.29,63.69],[8.73,63.8],[8.81,63.77],[8.79,63.7],[8.47,63.67]]]},{id:"578",name:"Norway",rings:[[[8.1,63.34],[7.89,63.35],[7.8,63.41],[8.07,63.47],[8.14,63.43],[8.1,63.34]]]},{id:"578",name:"Norway",rings:[[[23.44,70.82],[23.07,70.59],[22.83,70.54],[22.36,70.52],[21.99,70.66],[22.96,70.71],[23.2,70.82],[23.44,70.82]]]},{id:"578",name:"Norway",rings:[[[25.59,71.14],[26.15,71.04],[26.13,71],[26,70.98],[25.58,70.96],[25.31,71.05],[25.59,71.14]]]},{id:"578",name:"Norway",rings:[[[23.61,70.55],[23.64,70.46],[23.27,70.3],[23.1,70.3],[23.09,70.38],[22.92,70.39],[23.02,70.49],[23.25,70.5],[23.55,70.62],[23.61,70.55]]]},{id:"578",name:"Norway",rings:[[[24.02,70.57],[23.83,70.53],[23.67,70.6],[23.66,70.68],[23.78,70.75],[23.96,70.7],[24.08,70.65],[24.02,70.57]]]},{id:"578",name:"Norway",rings:[[[13.87,68.27],[14.12,68.25],[14.03,68.19],[13.49,68.05],[13.42,68.08],[13.39,68.02],[13.23,67.99],[13.2,68.09],[13.3,68.16],[13.43,68.16],[13.54,68.25],[13.87,68.27]]]},{id:"578",name:"Norway",rings:[[[12.97,67.87],[12.83,67.82],[12.96,68.02],[13.12,68.05],[13.1,67.96],[12.97,67.87]]]},{id:"578",name:"Norway",rings:[[[15.21,68.94],[15.4,68.78],[15.35,68.67],[15.22,68.62],[14.89,68.61],[14.74,68.68],[14.52,68.63],[14.37,68.71],[14.55,68.82],[14.8,68.79],[14.87,68.91],[15.04,68.89],[15.04,69],[15.21,68.94]]]},{id:"578",name:"Norway",rings:[[[19.77,70.22],[20.09,70.1],[19.78,70.08],[19.6,70.27],[19.77,70.22]]]},{id:"578",name:"Norway",rings:[[[20.78,70.09],[20.46,70.08],[20.41,70.15],[20.78,70.22],[20.82,70.2],[20.78,70.09]]]},{id:"578",name:"Norway",rings:[[[19.25,70.07],[19.34,70.01],[19.61,70.02],[19.59,69.97],[19.33,69.82],[19.01,69.76],[18.78,69.58],[18.28,69.54],[18.06,69.6],[18.23,69.64],[18.35,69.77],[18.68,69.78],[18.69,69.89],[18.88,70.01],[19.05,70.04],[19.06,70.17],[19.13,70.24],[19.21,70.25],[19.25,70.07]]]},{id:"578",name:"Norway",rings:[[[12.51,65.9],[12.43,65.9],[12.43,65.94],[12.55,66],[12.78,65.99],[12.51,65.9]]]},{id:"578",name:"Norway",rings:[[[12.42,66.04],[12.33,66.04],[12.46,66.19],[12.62,66.18],[12.58,66.07],[12.42,66.04]]]},{id:"578",name:"Norway",rings:[[[11.23,64.87],[10.74,64.87],[11.02,64.98],[11.13,64.98],[11.24,64.91],[11.23,64.87]]]},{id:"578",name:"Norway",rings:[[[17.5,69.6],[18.01,69.5],[18.08,69.4],[17.94,69.33],[17.95,69.2],[17.57,69.16],[17.49,69.2],[17.08,69.01],[16.81,69.07],[16.97,69.14],[17,69.36],[17.36,69.38],[17.37,69.44],[17.23,69.48],[17.45,69.53],[17.5,69.6]]]},{id:"578",name:"Norway",rings:[[[15.76,68.56],[16.06,68.68],[16.15,68.84],[16.33,68.88],[16.48,68.8],[16.55,68.72],[16.52,68.63],[16.19,68.54],[15.98,68.4],[15.76,68.41],[15.44,68.31],[15.28,68.37],[15.19,68.31],[14.93,68.31],[14.63,68.2],[14.26,68.19],[14.26,68.26],[14.59,68.4],[15.1,68.44],[15.41,68.62],[15.56,68.87],[15.44,68.92],[15.48,69.04],[15.96,69.3],[16.13,69.27],[16.12,69.22],[15.81,69.02],[15.91,68.91],[15.93,68.73],[15.76,68.56]]]},{id:"578",name:"Norway",rings:[[[-8.96,70.84],[-9.1,70.86],[-8.52,71.03],[-8.34,71.14],[-8,71.18],[-7.98,71.12],[-8,71.04],[-8.96,70.84]]]},{id:"528",name:"Netherlands",rings:[[[5.99,50.75],[5.75,50.76],[5.64,50.84],[5.75,50.95],[5.82,51.09],[5.8,51.15],[5.48,51.29],[5.21,51.28],[5.1,51.35],[5.03,51.47],[4.85,51.4],[4.76,51.49],[4.64,51.42],[4.5,51.47],[4.38,51.43],[4.37,51.36],[4.01,51.44],[3.82,51.41],[3.59,51.45],[3.45,51.54],[3.74,51.6],[4.14,51.46],[4.28,51.47],[4.01,51.6],[4.18,51.61],[3.95,51.81],[4.08,51.99],[4.48,52.31],[4.77,52.94],[4.89,52.91],[5.06,52.96],[5.36,53.1],[5.53,53.27],[5.87,53.38],[6.82,53.44],[6.97,53.33],[7.2,53.28],[7.19,53],[7.03,52.65],[6.75,52.63],[6.69,52.53],[6.75,52.46],[7,52.42],[7.02,52.27],[6.72,52.08],[6.8,51.98],[6.74,51.91],[6.36,51.82],[6.17,51.88],[5.95,51.8],[6.2,51.45],[6.08,51.22],[6.13,51.15],[5.86,51.03],[6.05,50.91],[5.99,50.75]]]},{id:"528",name:"Netherlands",rings:[[[4.22,51.39],[4.17,51.31],[3.9,51.21],[3.58,51.29],[3.43,51.25],[3.35,51.38],[4.22,51.39]]]},{id:"528",name:"Netherlands",rings:[[[4.89,53.07],[4.79,53],[4.71,53.04],[4.89,53.18],[4.89,53.07]]]},{id:"528",name:"Netherlands",rings:[[[3.95,51.74],[4.07,51.65],[3.95,51.63],[3.7,51.71],[3.95,51.74]]]},{id:"528",name:"Netherlands",rings:[[[6.73,53.58],[6.64,53.58],[6.76,53.63],[6.8,53.63],[6.73,53.58]]]},{id:"504",name:"Morocco",rings:[[[-2.22,35.1],[-2.13,34.97],[-1.79,34.75],[-1.85,34.61],[-1.73,34.47],[-1.79,34.37],[-1.71,34.18],[-1.72,33.78],[-1.63,33.57],[-1.68,33.32],[-1.45,32.79],[-1.06,32.47],[-1.24,32.34],[-1.23,32.11],[-2.45,32.13],[-2.86,32.08],[-2.93,32.04],[-3.02,31.83],[-3.44,31.71],[-3.77,31.69],[-3.85,31.62],[-3.79,31.36],[-3.83,31.2],[-3.62,31.07],[-3.67,30.96],[-3.99,30.91],[-4.32,30.7],[-4.97,30.47],[-5.18,30.17],[-5.45,29.96],[-6,29.83],[-6.48,29.82],[-6.52,29.66],[-6.64,29.57],[-7.16,29.61],[-7.49,29.39],[-7.68,29.35],[-8.66,28.72],[-8.69,27.66],[-8.82,27.66],[-8.75,27.19],[-8.79,27.12],[-9.41,27.09],[-9.82,26.85],[-10.03,26.91],[-10.25,26.86],[-10.76,27.02],[-11.39,26.88],[-11.32,26.75],[-11.34,26.63],[-11.64,26.3],[-11.72,26.1],[-12.05,26],[-14.51,26],[-14.41,26.25],[-13.58,26.74],[-13.18,27.65],[-12.95,27.91],[-11.99,28.13],[-11.55,28.31],[-11.08,28.71],[-10.49,29.06],[-10.2,29.38],[-9.67,30.11],[-9.65,30.45],[-9.88,30.72],[-9.81,31.42],[-9.68,31.71],[-9.35,32.09],[-9.25,32.57],[-8.51,33.25],[-6.9,33.97],[-6.35,34.78],[-5.92,35.79],[-5.62,35.83],[-5.4,35.93],[-5.28,35.9],[-5.34,35.86],[-5.34,35.74],[-5.25,35.61],[-4.84,35.28],[-4.63,35.21],[-4.33,35.16],[-3.69,35.28],[-3.39,35.21],[-3.21,35.24],[-2.97,35.41],[-2.84,35.13],[-2.22,35.1]]]},{id:"499",name:"Montenegro",rings:[[[19.19,43.53],[19.22,43.45],[19.61,43.17],[19.94,43.08],[20.35,42.85],[20.19,42.75],[20.05,42.76],[20.06,42.55],[19.79,42.48],[19.73,42.64],[19.65,42.63],[19.28,42.17],[19.36,42.07],[19.34,41.87],[19.19,41.95],[18.89,42.25],[18.63,42.38],[18.65,42.44],[18.52,42.43],[18.44,42.52],[18.55,42.64],[18.47,42.78],[18.46,43],[18.62,43.03],[18.68,43.23],[18.85,43.35],[19.03,43.29],[18.95,43.53],[19.19,43.53]]]},{id:"498",name:"Moldova",rings:[[[26.62,48.26],[26.85,48.39],[27.23,48.37],[27.55,48.48],[27.82,48.42],[28.09,48.26],[28.29,48.24],[28.35,48.21],[28.34,48.15],[28.46,48.09],[28.53,48.15],[28.77,48.12],[28.92,47.95],[29.13,47.96],[29.21,47.78],[29.13,47.49],[29.54,47.27],[29.51,47.09],[29.57,46.96],[29.88,46.83],[29.94,46.72],[29.93,46.54],[30.13,46.42],[29.84,46.35],[29.71,46.45],[29.62,46.4],[29.31,46.47],[29.21,46.38],[29.19,46.52],[28.96,46.46],[28.94,46.29],[29.01,46.18],[28.95,46.05],[28.74,45.94],[28.73,45.85],[28.49,45.67],[28.5,45.52],[28.21,45.45],[28.07,45.6],[28.16,45.65],[28.1,45.97],[28.24,46.45],[28.24,46.64],[28.07,46.98],[27.61,47.34],[26.98,48.16],[26.79,48.26],[26.62,48.26]]]},{id:"470",name:"Malta",rings:[[[14.57,35.85],[14.44,35.82],[14.35,35.87],[14.35,35.98],[14.57,35.85]]]},{id:"470",name:"Malta",rings:[[[14.31,36.03],[14.18,36.06],[14.26,36.08],[14.31,36.03]]]},{id:"807",name:"Macedonia",rings:[[[21.56,42.25],[22.28,42.35],[22.58,42.11],[22.8,42.03],[23,41.74],[22.93,41.36],[22.78,41.33],[22.73,41.18],[22.6,41.14],[21.99,41.13],[21.78,40.95],[21.58,40.87],[21.4,40.91],[20.96,40.85],[20.87,40.92],[20.74,40.91],[20.49,41.27],[20.45,41.52],[20.51,41.57],[20.55,41.86],[20.72,41.87],[20.78,42.07],[21.06,42.17],[21.29,42.1],[21.39,42.22],[21.56,42.25]]]},{id:"442",name:"Luxembourg",rings:[[[6.12,50.12],[6.11,50.03],[6.2,49.92],[6.49,49.8],[6.35,49.45],[6.18,49.5],[6.01,49.45],[5.79,49.54],[5.88,49.65],[5.73,49.81],[5.74,49.92],[5.98,50.17],[6.12,50.12]]]},{id:"440",name:"Lithuania",rings:[[[20.96,55.28],[20.9,55.29],[21.12,55.62],[21.11,55.49],[20.96,55.28]]]},{id:"440",name:"Lithuania",rings:[[[22.76,54.36],[22.69,54.56],[22.83,54.87],[22.63,54.97],[22.57,55.06],[22.07,55.06],[21.39,55.27],[21.23,55.26],[21.24,55.46],[21.06,55.81],[21.05,56.07],[21.65,56.31],[22.08,56.41],[22.88,56.4],[23.04,56.32],[23.2,56.37],[24.12,56.26],[24.47,56.28],[24.7,56.38],[24.9,56.4],[25.07,56.2],[25.66,56.1],[26.28,55.75],[26.6,55.67],[26.46,55.34],[26.78,55.27],[26.6,55.13],[26.29,55.14],[26.17,55],[25.86,54.92],[25.72,54.72],[25.72,54.56],[25.55,54.33],[25.75,54.26],[25.76,54.18],[25.68,54.14],[25.51,54.16],[25.46,54.29],[25.05,54.13],[24.87,54.14],[24.77,53.97],[24.32,53.89],[24.19,53.95],[23.56,53.92],[23.48,53.94],[23.48,54.08],[23.37,54.2],[22.89,54.39],[22.76,54.36]]]},{id:"438",name:"Liechtenstein",rings:[[[9.58,47.06],[9.49,47.06],[9.53,47.27],[9.61,47.11],[9.58,47.06]]]},{id:"434",name:"Libya",rings:[[[9.52,30.23],[9.89,30.39],[10.22,30.78],[10.26,30.94],[10.11,31.46],[10.28,31.68],[10.47,31.74],[10.61,31.93],[10.83,32.08],[11.5,32.41],[11.53,32.52],[11.45,32.64],[11.5,33.18],[11.81,33.09],[12.28,32.86],[12.75,32.8],[13.28,32.92],[14.16,32.71],[14.51,32.51],[15.18,32.39],[15.36,32.16],[15.36,31.97],[15.5,31.66],[15.71,31.43],[16.12,31.26],[16.78,31.21],[17.83,30.93],[18.19,30.78],[18.67,30.42],[18.94,30.29],[19.13,30.27],[19.29,30.29],[19.71,30.49],[20.11,30.96],[20.14,31.19],[19.96,31.56],[19.93,31.82],[20.03,32.11],[20.37,32.43],[21.06,32.78],[21.43,32.8],[21.63,32.94],[22.34,32.88],[23.09,32.62],[23.11,32.33],[23.29,32.21],[23.8,32.16],[24.13,32.01],[24.88,31.98],[25.03,31.88],[25.15,31.65],[24.85,31.34],[24.98,30.78],[24.88,30.46],[24.7,30.2],[24.98,29.18],[24.98,26],[9.5,26],[9.42,26.15],[9.49,26.33],[9.86,26.55],[9.88,26.63],[9.89,26.85],[9.79,27.04],[9.75,27.33],[9.92,27.79],[9.82,28.56],[9.84,28.97],[9.8,29.18],[9.64,29.64],[9.31,30.12],[9.52,30.23]]]},{id:"422",name:"Lebanon",rings:[[[35.98,34.63],[36.38,34.66],[36.43,34.61],[36.33,34.5],[36.51,34.43],[36.59,34.22],[36.3,33.96],[36.28,33.89],[36.37,33.84],[36.09,33.83],[36.02,33.78],[35.94,33.67],[36.02,33.56],[35.6,33.24],[35.53,33.25],[35.49,33.12],[35.41,33.07],[35.11,33.08],[35.61,34.03],[35.65,34.25],[35.8,34.44],[35.98,34.55],[35.98,34.63]]]},{id:"428",name:"Latvia",rings:[[[26.6,55.67],[26.28,55.75],[25.66,56.1],[25.07,56.2],[24.84,56.41],[24.47,56.28],[24.12,56.26],[23.2,56.37],[23.04,56.32],[22.88,56.4],[22.08,56.41],[21.65,56.31],[21.05,56.07],[21.03,56.64],[21.07,56.82],[21.35,57.02],[21.46,57.32],[21.73,57.57],[22.56,57.72],[22.65,57.6],[23.14,57.32],[23.29,57.09],[23.65,56.97],[23.93,57.01],[24.38,57.25],[24.32,57.87],[25.11,58.06],[25.26,58],[25.28,58.05],[25.99,57.84],[26.3,57.6],[26.46,57.54],[26.97,57.61],[27.47,57.52],[27.54,57.43],[27.83,57.29],[27.83,57.19],[27.64,56.85],[27.85,56.85],[28.01,56.6],[28.1,56.55],[28.2,56.26],[28.15,56.14],[27.89,56.08],[27.64,55.91],[27.58,55.8],[27.05,55.83],[26.82,55.71],[26.6,55.67]]]},{name:"Kosovo",rings:[[[20.35,42.83],[20.47,42.86],[20.48,42.95],[20.62,43.03],[20.66,43.1],[20.62,43.2],[20.8,43.26],[20.85,43.17],[21.06,43.09],[21.4,42.83],[21.39,42.75],[21.75,42.65],[21.61,42.39],[21.52,42.33],[21.56,42.25],[21.39,42.22],[21.29,42.1],[21.06,42.17],[20.78,42.07],[20.72,41.87],[20.58,41.87],[20.49,42.22],[20.24,42.34],[20.06,42.55],[20.05,42.76],[20.19,42.75],[20.35,42.83]]]},{id:"400",name:"Jordan",rings:[[[35.79,32.73],[35.89,32.71],[36.06,32.53],[36.37,32.39],[36.82,32.32],[38.77,33.37],[39.06,32.49],[38.98,32.47],[39.04,32.31],[39.25,32.35],[39.29,32.24],[38.96,32],[36.96,31.49],[37.98,30.5],[37.63,30.31],[37.47,30],[36.75,29.87],[36.48,29.5],[36.02,29.19],[34.95,29.35],[35.14,30.14],[35.14,30.42],[35.44,31.13],[35.4,31.23],[35.56,31.77],[35.57,32.64],[35.79,32.73]]]},{id:"380",name:"Italy",rings:[[[7.02,45.93],[7.13,45.88],[7.54,45.98],[7.79,45.92],[7.99,46.02],[8.12,46.16],[8.09,46.27],[8.42,46.45],[8.46,46.25],[8.64,46.11],[8.82,46.08],[8.78,46],[8.96,45.83],[9.05,45.88],[9,46.02],[9.25,46.29],[9.26,46.48],[9.3,46.5],[9.43,46.48],[9.53,46.31],[9.94,46.36],[10.08,46.23],[10.15,46.25],[10.04,46.48],[10.09,46.6],[10.2,46.62],[10.43,46.55],[10.4,46.66],[10.45,46.87],[10.99,46.78],[11.13,46.94],[11.24,46.98],[11.77,46.99],[12.17,47.08],[12.16,46.94],[12.39,46.7],[13.7,46.52],[13.38,46.26],[13.63,46.18],[13.49,45.99],[13.6,45.98],[13.58,45.81],[13.72,45.76],[13.88,45.61],[13.72,45.59],[13.78,45.63],[13.63,45.77],[13.47,45.71],[13.21,45.77],[13.03,45.64],[12.5,45.46],[12.43,45.47],[12.54,45.54],[12.49,45.55],[12.27,45.45],[12.22,45.24],[12.52,44.97],[12.39,44.8],[12.28,44.83],[12.25,44.72],[12.4,44.22],[12.69,43.99],[13.56,43.57],[13.8,43.18],[14.01,42.69],[14.54,42.24],[15.17,41.93],[15.96,41.94],[16.17,41.9],[16.15,41.76],[15.91,41.62],[15.9,41.51],[17.1,41.06],[17.47,40.84],[17.96,40.65],[18.46,40.22],[18.48,40.1],[18.39,39.9],[18.34,39.82],[18.08,39.94],[17.87,40.28],[17.48,40.31],[17.26,40.4],[17.18,40.5],[17.03,40.51],[16.93,40.46],[16.67,40.14],[16.52,39.75],[16.6,39.64],[16.82,39.58],[17.11,39.38],[17.17,39],[17.1,38.92],[16.95,38.94],[16.62,38.8],[16.56,38.72],[16.54,38.41],[16.28,38.25],[16.06,37.94],[15.72,37.94],[15.65,38.03],[15.64,38.18],[15.7,38.26],[15.82,38.3],[15.93,38.67],[16.2,38.76],[16.21,38.94],[16.11,39.02],[16.02,39.35],[15.69,39.99],[15.59,40.05],[15.29,40.07],[14.95,40.24],[14.93,40.31],[14.99,40.38],[14.95,40.47],[14.77,40.67],[14.34,40.6],[14.46,40.73],[14.31,40.81],[14.05,40.81],[13.86,41.13],[13.73,41.24],[13.04,41.27],[12.85,41.41],[12.63,41.47],[12.08,41.94],[11.81,42.08],[11.64,42.29],[11.3,42.42],[11.14,42.39],[11.1,42.42],[11.18,42.46],[11.17,42.53],[10.8,42.8],[10.71,42.94],[10.51,42.97],[10.52,43.2],[10.32,43.51],[10.25,43.85],[10.05,44.02],[9.73,44.1],[9.29,44.32],[8.76,44.42],[8.55,44.35],[8,43.88],[7.49,43.77],[7.48,43.86],[7.68,44.08],[7.64,44.16],[7.32,44.14],[6.9,44.34],[6.84,44.51],[7.03,44.72],[6.99,44.83],[6.74,44.92],[6.63,45.07],[6.69,45.14],[6.84,45.13],[7.08,45.24],[7.15,45.38],[6.79,45.74],[6.81,45.81],[7.02,45.93]],[[12.49,43.9],[12.5,43.99],[12.4,43.94],[12.49,43.9]]]},{id:"380",name:"Italy",rings:[[[10.4,42.86],[10.42,42.71],[10.33,42.76],[10.13,42.74],[10.11,42.78],[10.4,42.86]]]},{id:"380",name:"Italy",rings:[[[13.94,40.71],[13.87,40.71],[13.87,40.76],[13.96,40.74],[13.94,40.71]]]},{id:"380",name:"Italy",rings:[[[12.05,36.76],[11.94,36.78],[11.95,36.84],[12.05,36.76]]]},{id:"380",name:"Italy",rings:[[[15.58,38.22],[15.23,37.78],[15.1,37.46],[15.12,37.34],[15.23,37.24],[15.17,37.21],[15.29,37.06],[15.11,36.84],[15.11,36.69],[14.78,36.71],[14.5,36.8],[14.37,36.97],[14.14,37.1],[13.91,37.1],[13.17,37.48],[12.92,37.57],[12.64,37.59],[12.44,37.82],[12.55,38.05],[12.74,38.18],[12.9,38.03],[13.16,38.19],[13.35,38.18],[13.38,38.13],[13.79,37.98],[14.05,38.04],[14.51,38.05],[14.79,38.17],[15.12,38.15],[15.5,38.29],[15.63,38.27],[15.58,38.22]]]},{id:"380",name:"Italy",rings:[[[9.63,40.88],[9.8,40.5],[9.64,40.27],[9.71,40.02],[9.56,39.17],[9.49,39.14],[9.06,39.24],[8.97,38.96],[8.88,38.91],[8.65,38.93],[8.42,39.21],[8.4,39.48],[8.45,39.72],[8.54,39.73],[8.55,39.84],[8.41,39.92],[8.47,40.29],[8.35,40.5],[8.19,40.65],[8.2,40.87],[8.22,40.91],[8.47,40.83],[8.7,40.9],[9.23,41.26],[9.61,41.02],[9.55,40.93],[9.63,40.88]]]},{id:"380",name:"Italy",rings:[[[8.48,39.07],[8.42,38.97],[8.36,39.1],[8.48,39.07]]]},{id:"380",name:"Italy",rings:[[[8.29,41.04],[8.21,41],[8.27,41.1],[8.34,41.1],[8.29,41.04]]]},{id:"376",name:"Israel",rings:[[[35.87,33.43],[35.84,33.28],[35.91,32.95],[35.79,32.73],[35.57,32.64],[35.55,32.4],[35.19,32.54],[35.07,32.46],[34.95,32.16],[34.96,31.82],[35.13,31.82],[35.2,31.75],[34.95,31.6],[34.88,31.37],[35.1,31.37],[35.45,31.48],[35.4,31.23],[35.44,31.13],[35.17,30.52],[35.14,30.14],[34.97,29.55],[34.9,29.48],[34.25,31.21],[34.53,31.53],[34.48,31.59],[34.68,31.9],[35.11,33.08],[35.41,33.07],[35.49,33.12],[35.53,33.25],[35.6,33.24],[35.87,33.43]]]},{id:"372",name:"Ireland",rings:[[[-9.95,53.91],[-10.27,53.98],[-10,54],[-9.95,53.91]]]},{id:"372",name:"Ireland",rings:[[[-7.22,55.09],[-7.38,55.03],[-7.55,54.77],[-7.91,54.7],[-7.75,54.59],[-8.15,54.45],[-7.85,54.22],[-7.61,54.14],[-7.32,54.13],[-7.16,54.24],[-7.2,54.3],[-7.01,54.41],[-6.8,54.21],[-6.65,54.16],[-6.65,54.06],[-6.3,54.09],[-6.18,54.05],[-6.16,54.02],[-6.31,54.01],[-6.35,53.94],[-6.14,53.58],[-6.15,53.37],[-6.03,52.93],[-6.17,52.74],[-6.22,52.54],[-6.46,52.34],[-6.32,52.25],[-6.89,52.16],[-6.96,52.25],[-7,52.17],[-7.53,52.1],[-7.63,51.99],[-7.84,51.95],[-8.06,51.83],[-8.41,51.89],[-8.34,51.79],[-8.41,51.71],[-9.3,51.5],[-9.46,51.53],[-9.84,51.48],[-9.52,51.68],[-10.12,51.6],[-9.6,51.87],[-10.09,51.77],[-10.34,51.8],[-10.38,51.87],[-9.91,52.12],[-10.39,52.13],[-10.36,52.21],[-10.13,52.28],[-9.77,52.25],[-9.91,52.4],[-9.63,52.55],[-8.78,52.68],[-8.99,52.76],[-9.17,52.63],[-9.56,52.65],[-9.92,52.57],[-9.52,52.78],[-9.39,52.9],[-9.46,52.95],[-9.3,53.1],[-8.93,53.21],[-9.51,53.24],[-9.62,53.33],[-9.88,53.34],[-9.79,53.39],[-10.09,53.41],[-10.05,53.48],[-10.12,53.55],[-9.72,53.6],[-9.91,53.66],[-9.9,53.73],[-9.58,53.8],[-9.58,53.88],[-9.91,53.86],[-9.86,54.09],[-9.93,54.08],[-9.98,54.19],[-10.09,54.16],[-10.06,54.26],[-9.56,54.31],[-9.32,54.3],[-9.15,54.21],[-9,54.29],[-8.54,54.24],[-8.62,54.35],[-8.23,54.51],[-8.13,54.64],[-8.46,54.61],[-8.76,54.68],[-8.38,54.89],[-8.39,55.02],[-8.27,55.15],[-7.75,55.19],[-7.76,55.25],[-7.67,55.26],[-7.56,55.12],[-7.66,54.97],[-7.48,55.05],[-7.52,55.25],[-7.3,55.3],[-7.37,55.36],[-7.31,55.37],[-6.96,55.24],[-7.22,55.09]]]},{id:"368",name:"Iraq",rings:[[[42.36,37.11],[42.46,37.13],[42.77,37.37],[42.94,37.32],[43.09,37.37],[43.68,37.23],[44.11,37.3],[44.19,37.25],[44.2,37.05],[44.28,36.98],[44.61,37.18],[44.73,37.16],[44.88,36.8],[45.02,36.7],[45.05,36.47],[45.24,36.36],[45.36,36.02],[45.56,35.98],[45.78,35.82],[46.17,35.82],[46.27,35.77],[46,35.61],[45.97,35.48],[46.11,35.32],[46.13,35.13],[45.92,35.03],[45.68,34.8],[45.64,34.57],[45.5,34.58],[45.44,34.42],[45.54,34.22],[45.4,33.97],[45.74,33.6],[45.88,33.61],[45.87,33.49],[46.02,33.42],[46.15,33.23],[46.08,33.09],[46.11,32.96],[46.38,32.93],[47.12,32.47],[47.37,32.42],[47.51,32.15],[47.83,31.79],[47.68,31.4],[47.68,31],[48.01,30.99],[48.02,30.47],[48.33,30.29],[48.43,30.04],[48.54,29.96],[48.45,29.94],[48.07,30.04],[47.98,29.98],[47.67,30.1],[47.22,30.04],[47.1,29.94],[46.77,29.35],[46.53,29.1],[46.36,29.06],[44.72,29.19],[42.08,31.08],[40.37,31.94],[39.14,32.13],[39.29,32.24],[39.25,32.35],[39.04,32.31],[38.98,32.47],[39.06,32.49],[38.77,33.37],[40.69,34.33],[40.99,34.43],[41.19,34.77],[41.22,35.29],[41.36,35.64],[41.35,35.81],[41.24,36.07],[41.29,36.38],[41.42,36.51],[41.79,36.6],[42.36,37.11]]]},{id:"348",name:"Hungary",rings:[[[22.13,48.41],[22.25,48.41],[22.35,48.26],[22.58,48.13],[22.77,48.11],[22.88,47.95],[22.61,47.77],[22.29,47.73],[22,47.5],[21.99,47.4],[21.66,47.04],[21.48,46.75],[21.5,46.7],[21.3,46.57],[21.26,46.41],[21.04,46.24],[20.76,46.25],[20.66,46.15],[20.24,46.11],[19.61,46.17],[19.21,45.98],[19.09,46.02],[18.93,45.93],[18.66,45.91],[18.44,45.77],[17.81,45.79],[17.61,45.91],[17.31,46],[16.87,46.34],[16.52,46.5],[16.38,46.64],[16.28,46.86],[16.09,46.86],[16.25,46.97],[16.45,47.01],[16.49,47.12],[16.42,47.22],[16.46,47.27],[16.44,47.4],[16.62,47.45],[16.68,47.54],[16.64,47.61],[16.42,47.67],[16.59,47.75],[16.79,47.68],[17.07,47.71],[17.03,47.84],[17.15,48.01],[17.32,47.99],[17.76,47.77],[18.73,47.79],[18.79,48],[19.47,48.11],[19.63,48.22],[19.9,48.13],[20.33,48.3],[20.49,48.53],[21.07,48.51],[21.45,48.55],[21.72,48.35],[22.13,48.41]]]},{id:"300",name:"Greece",rings:[[[27.86,36.55],[27.79,36.61],[27.86,36.64],[27.86,36.55]]]},{id:"300",name:"Greece",rings:[[[20.61,38.38],[20.63,38.27],[20.79,38.14],[20.76,38.07],[20.52,38.11],[20.45,38.23],[20.35,38.18],[20.41,38.34],[20.52,38.33],[20.56,38.48],[20.61,38.38]]]},{id:"300",name:"Greece",rings:[[[20.89,37.81],[20.99,37.71],[20.91,37.73],[20.82,37.66],[20.62,37.85],[20.69,37.93],[20.89,37.81]]]},{id:"300",name:"Greece",rings:[[[20.69,38.61],[20.55,38.58],[20.59,38.76],[20.69,38.84],[20.69,38.61]]]},{id:"300",name:"Greece",rings:[[[20.76,38.33],[20.71,38.32],[20.62,38.48],[20.7,38.45],[20.76,38.33]]]},{id:"300",name:"Greece",rings:[[[20.08,39.43],[20.1,39.38],[19.88,39.46],[19.65,39.77],[19.84,39.82],[19.92,39.77],[19.85,39.67],[19.96,39.47],[20.08,39.43]]]},{id:"300",name:"Greece",rings:[[[23.42,38.96],[23.52,38.81],[24.13,38.65],[24.28,38.22],[24.36,38.16],[24.56,38.15],[24.58,38.02],[24.5,37.97],[24.36,38.02],[24.21,38.12],[24.04,38.39],[23.65,38.44],[23.62,38.55],[23.25,38.8],[23.03,38.87],[22.88,38.85],[23.26,39.03],[23.42,38.96]]]},{id:"300",name:"Greece",rings:[[[23.78,39.11],[23.66,39.1],[23.59,39.21],[23.78,39.11]]]},{id:"300",name:"Greece",rings:[[[23.89,39.16],[23.84,39.15],[23.89,39.23],[23.97,39.27],[23.89,39.16]]]},{id:"300",name:"Greece",rings:[[[24.68,38.81],[24.54,38.79],[24.56,38.83],[24.46,38.89],[24.49,38.98],[24.68,38.81]]]},{id:"300",name:"Greece",rings:[[[24.77,40.61],[24.65,40.58],[24.52,40.69],[24.62,40.79],[24.72,40.79],[24.79,40.7],[24.77,40.61]]]},{id:"300",name:"Greece",rings:[[[23.55,37.93],[23.42,37.93],[23.48,37.99],[23.55,37.93]]]},{id:"300",name:"Greece",rings:[[[23.05,36.19],[23.04,36.15],[22.91,36.22],[22.95,36.38],[23.1,36.25],[23.05,36.19]]]},{id:"300",name:"Greece",rings:[[[27.17,35.47],[27.14,35.41],[27.1,35.46],[27.07,35.6],[27.16,35.79],[27.22,35.82],[27.16,35.63],[27.23,35.48],[27.17,35.47]]]},{id:"300",name:"Greece",rings:[[[27.02,36.96],[26.92,36.94],[26.89,37.09],[27.04,37],[27.02,36.96]]]},{id:"300",name:"Greece",rings:[[[26.95,36.73],[26.96,36.77],[27.21,36.9],[27.35,36.87],[26.95,36.73]]]},{id:"300",name:"Greece",rings:[[[25.55,36.97],[25.46,36.93],[25.36,37.07],[25.53,37.2],[25.59,37.15],[25.55,36.97]]]},{id:"300",name:"Greece",rings:[[[25.28,37.07],[25.2,36.99],[25.1,37.03],[25.23,37.15],[25.28,37.07]]]},{id:"300",name:"Greece",rings:[[[25.48,36.39],[25.44,36.34],[25.37,36.36],[25.41,36.47],[25.48,36.39]]]},{id:"300",name:"Greece",rings:[[[25.38,36.67],[25.26,36.76],[25.3,36.79],[25.41,36.72],[25.38,36.67]]]},{id:"300",name:"Greece",rings:[[[26.83,37.81],[27.04,37.77],[27.06,37.71],[26.84,37.64],[26.58,37.72],[26.83,37.81]]]},{id:"300",name:"Greece",rings:[[[26.03,37.53],[25.98,37.53],[26,37.57],[26.09,37.64],[26.35,37.67],[26.21,37.57],[26.03,37.53]]]},{id:"300",name:"Greece",rings:[[[25.86,36.79],[25.74,36.79],[26,36.94],[26.07,36.9],[25.86,36.79]]]},{id:"300",name:"Greece",rings:[[[26.46,36.59],[26.33,36.51],[26.27,36.55],[26.27,36.6],[26.34,36.58],[26.37,36.64],[26.46,36.59]]]},{id:"300",name:"Greece",rings:[[[24.36,37.58],[24.29,37.53],[24.28,37.6],[24.38,37.68],[24.36,37.58]]]},{id:"300",name:"Greece",rings:[[[24.44,37.34],[24.38,37.31],[24.37,37.42],[24.43,37.48],[24.48,37.41],[24.44,37.34]]]},{id:"300",name:"Greece",rings:[[[24.54,36.76],[24.53,36.68],[24.33,36.66],[24.36,36.74],[24.42,36.71],[24.54,36.76]]]},{id:"300",name:"Greece",rings:[[[24.99,37.76],[24.96,37.69],[24.7,37.96],[24.79,37.99],[24.86,37.91],[24.96,37.9],[24.99,37.76]]]},{id:"300",name:"Greece",rings:[[[25.26,37.6],[25.22,37.53],[25.16,37.55],[25,37.68],[25.26,37.6]]]},{id:"300",name:"Greece",rings:[[[24.72,36.92],[24.68,37.02],[24.76,36.95],[24.72,36.92]]]},{id:"300",name:"Greece",rings:[[[26.09,38.22],[26,38.16],[25.89,38.24],[25.99,38.35],[25.85,38.57],[26.01,38.6],[26.16,38.54],[26.16,38.3],[26.09,38.22]]]},{id:"300",name:"Greece",rings:[[[26.41,39.33],[26.39,39.27],[26.6,39.05],[26.49,39.07],[26.55,38.99],[26.47,38.97],[26.16,39.03],[26.11,39.08],[26.27,39.2],[26.18,39.19],[26.07,39.1],[25.84,39.2],[25.91,39.29],[26.09,39.3],[26.17,39.37],[26.35,39.38],[26.41,39.33]]]},{id:"300",name:"Greece",rings:[[[25.68,40.43],[25.57,40.4],[25.45,40.48],[25.57,40.52],[25.68,40.43]]]},{id:"300",name:"Greece",rings:[[[25.44,39.98],[25.36,39.81],[25.26,39.82],[25.25,39.89],[25.18,39.83],[25.06,39.85],[25.06,40],[25.23,40.01],[25.28,39.96],[25.45,40.03],[25.44,39.98]]]},{id:"300",name:"Greece",rings:[[[25.4,37.42],[25.31,37.41],[25.31,37.49],[25.46,37.47],[25.4,37.42]]]},{id:"300",name:"Greece",rings:[[[24.53,37.13],[24.42,37.13],[24.44,37.19],[24.53,37.19],[24.53,37.13]]]},{id:"300",name:"Greece",rings:[[[27.84,35.93],[27.75,35.91],[27.71,35.96],[27.76,36.07],[27.71,36.17],[27.91,36.35],[28.23,36.43],[28.07,36.13],[28.09,36.07],[27.97,36.05],[27.84,35.93]]]},{id:"300",name:"Greece",rings:[[[23.85,35.53],[24.01,35.53],[24.17,35.6],[24.2,35.54],[24.11,35.49],[24.26,35.47],[24.31,35.36],[24.72,35.43],[25.48,35.31],[25.73,35.35],[25.75,35.14],[25.79,35.12],[26.17,35.22],[26.32,35.31],[26.25,35.05],[26.17,35.02],[24.8,34.93],[24.74,34.95],[24.71,35.09],[24.46,35.16],[23.59,35.26],[23.57,35.53],[23.61,35.57],[23.67,35.51],[23.74,35.65],[23.85,35.53]]]},{id:"300",name:"Greece",rings:[[[26.32,41.72],[26.58,41.6],[26.62,41.4],[26.33,41.24],[26.35,41],[26.11,40.75],[26.04,40.73],[25.86,40.84],[25.1,40.99],[24.79,40.86],[24.48,40.95],[24.08,40.72],[23.76,40.75],[23.74,40.68],[23.88,40.54],[23.83,40.48],[23.87,40.42],[24.21,40.33],[24.34,40.15],[24.16,40.28],[23.91,40.36],[23.73,40.33],[23.72,40.29],[23.97,40.11],[24,40.02],[23.95,39.97],[23.66,40.22],[23.43,40.26],[23.39,40.22],[23.47,40.07],[23.68,39.96],[23.63,39.92],[23.39,39.99],[23.31,40.22],[22.9,40.4],[22.85,40.49],[22.92,40.59],[22.63,40.5],[22.59,40.04],[22.84,39.8],[22.98,39.56],[23.23,39.36],[23.33,39.18],[23.15,39.1],[23.16,39.26],[22.99,39.33],[22.92,39.31],[22.84,39.26],[22.89,39.17],[22.97,39.03],[23.07,39.04],[22.8,38.9],[22.57,38.87],[23.25,38.66],[23.37,38.53],[23.57,38.49],[23.68,38.35],[23.97,38.27],[24.02,38.14],[24.05,37.71],[23.97,37.68],[23.5,38.03],[23.03,37.88],[23.15,37.8],[23.2,37.62],[23.39,37.58],[23.49,37.44],[23.16,37.33],[23.1,37.36],[23.1,37.44],[22.94,37.52],[22.78,37.59],[22.73,37.54],[23.06,36.85],[23.04,36.64],[23.16,36.45],[22.98,36.53],[22.78,36.79],[22.72,36.79],[22.61,36.78],[22.49,36.57],[22.49,36.45],[22.43,36.48],[22.38,36.51],[22.38,36.7],[22.08,37.03],[21.95,36.99],[21.89,36.74],[21.74,36.86],[21.58,37.08],[21.58,37.2],[21.69,37.31],[21.68,37.39],[21.57,37.54],[21.33,37.67],[21.29,37.77],[21.12,37.89],[21.31,38.03],[21.4,38.2],[21.66,38.18],[21.83,38.33],[21.95,38.32],[22.92,37.96],[22.89,38.05],[23.12,38.07],[23.18,38.13],[23.09,38.2],[22.83,38.23],[22.42,38.44],[22.32,38.36],[21.97,38.41],[21.47,38.32],[21.33,38.49],[21.3,38.37],[21.18,38.35],[21.11,38.39],[20.99,38.65],[20.78,38.81],[20.77,38.87],[20.78,38.93],[20.89,38.94],[21.11,38.9],[21.15,38.92],[21.12,39.03],[20.78,39.01],[20.3,39.33],[20.19,39.55],[20,39.71],[20.25,39.68],[20.31,39.8],[20.38,39.8],[20.31,39.98],[20.66,40.12],[20.81,40.45],[20.95,40.49],[21.03,40.62],[20.96,40.85],[21.4,40.91],[21.58,40.87],[21.78,40.95],[21.99,41.13],[22.49,41.12],[22.73,41.18],[22.78,41.33],[23.64,41.39],[24.01,41.46],[24.06,41.53],[24.52,41.55],[24.6,41.44],[24.77,41.36],[24.85,41.39],[24.99,41.36],[25.25,41.24],[25.92,41.31],[26.16,41.44],[26.08,41.7],[26.32,41.72]]]},{id:"276",name:"Germany",rings:[[[9.52,47.52],[9.18,47.67],[8.88,47.66],[8.57,47.78],[8.4,47.69],[8.56,47.62],[8.43,47.59],[7.93,47.56],[7.57,47.61],[7.53,47.67],[7.62,48.16],[7.84,48.64],[8.14,48.89],[8.13,48.97],[7.61,49.06],[7.45,49.15],[7.04,49.11],[7,49.18],[6.89,49.21],[6.73,49.16],[6.54,49.4],[6.35,49.45],[6.49,49.8],[6.26,49.87],[6.14,49.97],[6.11,50.09],[6.18,50.23],[6.36,50.32],[6.34,50.45],[6.18,50.52],[6.24,50.6],[5.99,50.75],[6.05,50.91],[5.86,51.03],[6.13,51.15],[6.08,51.22],[6.19,51.41],[6.19,51.49],[5.95,51.8],[6.17,51.88],[6.36,51.82],[6.74,51.91],[6.8,51.98],[6.72,52.08],[6.98,52.21],[7.04,52.38],[6.97,52.44],[6.75,52.46],[6.69,52.53],[6.75,52.63],[7.01,52.63],[7.18,52.97],[7.2,53.28],[7.05,53.38],[7.11,53.56],[7.21,53.66],[8.01,53.69],[8.17,53.54],[8.11,53.47],[8.25,53.45],[8.33,53.61],[8.49,53.51],[8.49,53.39],[8.53,53.78],[8.62,53.88],[9.21,53.86],[9.59,53.6],[9.78,53.55],[9.63,53.6],[9.31,53.86],[8.98,53.93],[8.9,54],[8.91,54.26],[8.78,54.31],[8.65,54.29],[8.65,54.4],[8.95,54.47],[8.96,54.54],[8.68,54.79],[8.67,54.9],[9.25,54.81],[9.62,54.85],[9.89,54.78],[10.02,54.67],[10.03,54.58],[9.87,54.47],[10.14,54.49],[10.21,54.41],[10.36,54.44],[10.73,54.32],[11.01,54.38],[11.06,54.28],[11.01,54.18],[10.81,54.08],[10.92,54],[11.4,53.95],[11.8,54.14],[12.11,54.17],[12.58,54.47],[13.03,54.41],[13.15,54.28],[13.45,54.14],[13.73,54.15],[13.87,53.85],[14.26,53.73],[14.41,53.22],[14.37,53.1],[14.13,52.88],[14.62,52.53],[14.55,52.36],[14.68,52.25],[14.75,52.08],[14.6,51.83],[14.74,51.63],[14.73,51.52],[14.93,51.43],[15.02,51.25],[14.96,51.09],[14.77,50.82],[14.61,50.86],[14.63,50.91],[14.55,50.99],[14.32,51.04],[14.25,51],[14.37,50.9],[13.56,50.7],[13.44,50.6],[13.38,50.62],[13.18,50.51],[13.02,50.49],[12.94,50.41],[12.55,50.39],[12.28,50.18],[12.13,50.31],[12.09,50.27],[12.21,50.1],[12.51,49.9],[12.39,49.74],[12.63,49.46],[13.29,49.1],[13.4,48.98],[13.55,48.96],[13.77,48.82],[13.82,48.77],[13.79,48.59],[13.67,48.52],[13.49,48.58],[13.38,48.36],[12.9,48.2],[12.76,48.11],[12.95,47.89],[12.9,47.72],[13.06,47.66],[13.02,47.48],[12.81,47.54],[12.77,47.64],[12.68,47.67],[12.48,47.64],[12.21,47.72],[12.18,47.62],[11.72,47.58],[11.3,47.42],[11.04,47.39],[10.87,47.52],[10.44,47.55],[10.37,47.37],[10.18,47.28],[10.2,47.36],[10.07,47.39],[9.97,47.5],[9.75,47.58],[9.52,47.52]]]},{id:"276",name:"Germany",rings:[[[13.71,54.38],[13.71,54.28],[13.48,54.34],[13.37,54.25],[13.16,54.37],[13.18,54.54],[13.24,54.64],[13.42,54.7],[13.49,54.62],[13.66,54.56],[13.58,54.46],[13.71,54.38]]]},{id:"276",name:"Germany",rings:[[[14.21,53.95],[14.21,53.87],[13.93,53.88],[13.92,54],[13.83,54.06],[13.83,54.13],[14.21,53.95]]]},{id:"276",name:"Germany",rings:[[[11.28,54.42],[11.01,54.47],[11.09,54.53],[11.23,54.5],[11.28,54.42]]]},{id:"276",name:"Germany",rings:[[[8.31,54.79],[8.3,54.91],[8.4,55.06],[8.45,55.05],[8.38,54.9],[8.63,54.89],[8.35,54.85],[8.31,54.79]]]},{id:"276",name:"Germany",rings:[[[8.59,54.71],[8.4,54.71],[8.51,54.76],[8.59,54.71]]]},{id:"268",name:"Georgia",rings:[[[43.44,41.11],[43.4,41.18],[43.15,41.24],[43.15,41.31],[42.76,41.58],[42.59,41.57],[42.47,41.44],[41.92,41.5],[41.82,41.43],[41.51,41.52],[41.7,41.7],[41.76,41.97],[41.49,42.66],[41.42,42.74],[41.13,42.83],[41.06,42.93],[40.84,43.06],[40.46,43.15],[39.98,43.42],[40.15,43.57],[40.65,43.53],[41.08,43.37],[41.36,43.33],[41.58,43.22],[42.42,43.22],[42.57,43.16],[42.76,43.17],[42.99,43.09],[43.09,42.99],[43.78,42.75],[43.74,42.62],[43.83,42.57],[43.96,42.57],[44.51,42.75],[44.65,42.73],[44.77,42.62],[44.87,42.76],[45.16,42.68],[45.34,42.53],[45.7,42.5],[45.64,42.2],[45.95,42.04],[46.43,41.89],[46.3,41.76],[46.2,41.74],[46.18,41.66],[46.31,41.51],[46.67,41.29],[46.54,41.09],[46.43,41.08],[46.17,41.2],[45.92,41.19],[45.73,41.26],[45.72,41.34],[45.28,41.45],[44.98,41.28],[44.81,41.26],[44.84,41.21],[44.23,41.21],[43.44,41.11]]]},{id:"250",name:"France",rings:[[[9.48,42.81],[9.46,42.66],[9.53,42.55],[9.56,42.16],[9.4,41.93],[9.37,41.68],[9.19,41.39],[8.81,41.59],[8.89,41.7],[8.72,41.76],[8.74,41.93],[8.62,41.93],[8.7,42.1],[8.59,42.16],[8.57,42.22],[8.67,42.28],[8.57,42.36],[8.81,42.61],[9.14,42.73],[9.32,42.71],[9.36,43.02],[9.46,42.98],[9.48,42.81]]]},{id:"250",name:"France",rings:[[[7.62,47.59],[7.34,47.43],[7.2,47.43],[7.14,47.49],[6.97,47.45],[6.9,47.39],[7,47.32],[6.67,47.03],[6.46,46.95],[6.41,46.75],[6.16,46.61],[6.07,46.46],[6.12,46.38],[6.1,46.28],[5.97,46.21],[6.01,46.14],[6.2,46.19],[6.27,46.25],[6.23,46.33],[6.43,46.43],[6.78,46.41],[6.82,46.28],[6.77,46.16],[7.02,45.93],[6.81,45.81],[6.79,45.74],[7.16,45.4],[7.08,45.24],[6.84,45.13],[6.69,45.14],[6.63,45.07],[6.74,44.92],[6.99,44.83],[7.03,44.72],[6.84,44.51],[6.9,44.34],[7.32,44.14],[7.64,44.16],[7.68,44.08],[7.48,43.86],[7.49,43.77],[7.18,43.66],[6.72,43.37],[6.57,43.2],[6.11,43.07],[5.81,43.1],[5.41,43.23],[5.32,43.35],[5.07,43.37],[5.06,43.44],[4.71,43.37],[4.22,43.48],[4.05,43.59],[3.91,43.56],[3.26,43.19],[3.05,42.91],[3.09,42.59],[3.21,42.43],[2.89,42.46],[2.67,42.39],[2.65,42.34],[2.2,42.42],[2.03,42.35],[1.7,42.5],[1.71,42.6],[1.5,42.64],[1.43,42.6],[1.35,42.69],[0.77,42.84],[0.67,42.84],[0.63,42.69],[-0.04,42.69],[-0.3,42.83],[-0.59,42.8],[-0.76,42.94],[-1.18,43.02],[-1.3,43.1],[-1.4,43.03],[-1.48,43.07],[-1.41,43.24],[-1.76,43.32],[-1.79,43.41],[-1.63,43.44],[-1.49,43.56],[-1.24,44.56],[-1.08,44.69],[-1.15,44.76],[-1.24,44.67],[-1.19,45.16],[-1.08,45.53],[-0.83,45.38],[-0.69,45.09],[-0.55,45],[-0.64,45.09],[-0.79,45.47],[-1.2,45.71],[-1.21,45.77],[-1.03,45.74],[-1.15,46.31],[-1.39,46.35],[-1.79,46.52],[-2.06,46.81],[-2.09,46.92],[-2.02,47.04],[-2.2,47.16],[-2.03,47.27],[-1.74,47.22],[-1.97,47.31],[-2.5,47.31],[-2.53,47.38],[-2.43,47.47],[-2.55,47.53],[-2.77,47.51],[-2.73,47.6],[-2.79,47.63],[-3.07,47.62],[-3.16,47.69],[-3.44,47.71],[-3.9,47.84],[-4.31,47.82],[-4.43,47.97],[-4.68,48.04],[-4.33,48.17],[-4.58,48.29],[-4.24,48.3],[-4.39,48.37],[-4.72,48.36],[-4.76,48.45],[-4.72,48.54],[-4.53,48.62],[-4.06,48.71],[-3.71,48.71],[-3.47,48.81],[-3.23,48.84],[-3,48.79],[-2.69,48.54],[-2.45,48.65],[-2.08,48.65],[-2,48.58],[-1.91,48.7],[-1.82,48.63],[-1.38,48.65],[-1.56,48.8],[-1.58,49.2],[-1.81,49.49],[-1.86,49.68],[-1.26,49.68],[-1.23,49.49],[-1.14,49.39],[-0.16,49.3],[0.42,49.45],[0.13,49.51],[0.19,49.7],[0.62,49.86],[1.24,50],[1.59,50.25],[1.55,50.29],[1.58,50.74],[1.67,50.88],[1.91,50.99],[2.53,51.1],[2.6,50.88],[2.76,50.75],[2.84,50.71],[3.11,50.78],[3.23,50.66],[3.27,50.53],[3.59,50.48],[3.69,50.31],[3.95,50.34],[4.17,50.25],[4.15,49.97],[4.55,49.96],[4.82,50.15],[4.86,50.14],[4.79,49.96],[4.87,49.79],[5.28,49.68],[5.51,49.51],[5.79,49.54],[6.01,49.45],[6.24,49.49],[6.54,49.4],[6.73,49.16],[6.89,49.21],[7,49.18],[7.04,49.11],[7.45,49.15],[7.61,49.06],[8.13,48.97],[8.14,48.89],[7.84,48.64],[7.62,48.16],[7.53,47.67],[7.62,47.59]]]},{id:"250",name:"France",rings:[[[-1.18,45.9],[-1.22,45.82],[-1.39,46.05],[-1.18,45.9]]]},{id:"248",name:"Åland",rings:[[[19.99,60.35],[20.24,60.28],[20.19,60.19],[20.04,60.18],[20.03,60.09],[19.74,60.1],[19.69,60.27],[19.78,60.29],[19.78,60.21],[19.85,60.22],[19.87,60.3],[19.79,60.35],[19.82,60.39],[19.99,60.35]]]},{id:"248",name:"Åland",rings:[[[19.66,60.19],[19.58,60.14],[19.52,60.18],[19.55,60.24],[19.63,60.25],[19.66,60.19]]]},{id:"246",name:"Finland",rings:[[[24.15,65.81],[24,66.06],[23.7,66.25],[23.7,66.48],[23.87,66.58],[23.99,66.81],[23.64,67.13],[23.63,67.23],[23.78,67.33],[23.73,67.42],[23.46,67.46],[23.54,67.61],[23.5,67.87],[23.64,67.95],[23.32,68.13],[23.18,68.14],[23.1,68.26],[22.85,68.37],[22,68.52],[20.92,68.91],[20.9,68.98],[20.62,69.04],[21.07,69.04],[21.13,69.08],[21.07,69.21],[21.27,69.27],[21.59,69.27],[22.3,68.86],[22.41,68.72],[23.32,68.65],[23.71,68.71],[23.86,68.81],[24,68.8],[24.94,68.59],[25.09,68.64],[25.25,68.82],[25.58,68.89],[25.75,68.99],[25.77,69.28],[26.01,69.65],[26.53,69.91],[27.13,69.91],[27.59,70.04],[27.89,70.06],[28.41,69.82],[29.14,69.67],[29.33,69.47],[28.85,69.18],[28.83,69.12],[28.96,69.02],[28.41,68.9],[28.77,68.84],[28.47,68.49],[28.69,68.19],[29.34,68.06],[29.99,67.67],[29.94,67.55],[29.24,67.1],[29.09,66.97],[29.06,66.89],[29.9,66.09],[30.09,65.79],[30.09,65.68],[29.72,65.63],[29.82,65.57],[29.73,65.47],[29.72,65.34],[29.61,65.25],[29.81,65.2],[29.83,65.15],[29.62,65.04],[29.6,64.97],[29.78,64.8],[30.11,64.73],[30.12,64.64],[29.99,64.52],[30.11,64.37],[30.49,64.24],[30.53,64.08],[30.21,63.8],[29.99,63.73],[30.42,63.5],[31.18,63.21],[31.53,62.89],[31.29,62.57],[30.94,62.32],[29.25,61.29],[28.41,60.9],[27.8,60.54],[27.46,60.47],[27.2,60.54],[26.53,60.41],[26.6,60.6],[26.57,60.63],[26.38,60.42],[26.21,60.41],[25.95,60.47],[26.04,60.34],[25.76,60.27],[25.66,60.33],[24.6,60.11],[24.45,60.02],[23.46,59.99],[23.18,59.84],[22.96,59.83],[23.2,60.02],[23.08,60.05],[22.87,60.22],[22.79,60.08],[22.46,60.03],[22.44,60.16],[22.59,60.23],[22.51,60.28],[22.58,60.38],[21.85,60.51],[21.8,60.59],[21.61,60.53],[21.44,60.6],[21.36,60.97],[21.51,61.28],[21.51,61.48],[21.57,61.48],[21.5,61.55],[21.61,61.59],[21.39,61.92],[21.26,61.99],[21.34,62.28],[21.32,62.34],[21.17,62.41],[21.11,62.62],[21.14,62.74],[21.46,62.95],[21.47,63.03],[21.65,63.04],[21.54,63.21],[21.9,63.21],[22.32,63.31],[22.24,63.44],[22.35,63.44],[22.32,63.5],[22.4,63.49],[22.53,63.58],[22.53,63.65],[22.76,63.68],[23.5,64.03],[23.6,64.04],[23.65,64.13],[24.28,64.52],[24.56,64.8],[24.94,64.88],[25.29,64.86],[25.23,64.95],[25.37,65.01],[25.26,65.14],[25.35,65.48],[25.24,65.55],[24.68,65.67],[24.58,65.76],[24.63,65.86],[24.4,65.78],[24.15,65.81]]]},{id:"246",name:"Finland",rings:[[[21.99,60.34],[21.82,60.38],[21.83,60.47],[21.99,60.34]]]},{id:"246",name:"Finland",rings:[[[21.22,63.24],[21.42,63.25],[21.41,63.2],[21.25,63.15],[21.08,63.28],[21.23,63.28],[21.22,63.24]]]},{id:"246",name:"Finland",rings:[[[22.17,60.37],[22.42,60.3],[22.31,60.27],[22.36,60.17],[22.26,60.17],[22.08,60.29],[22.17,60.37]]]},{id:"246",name:"Finland",rings:[[[21.45,60.53],[21.44,60.48],[21.3,60.48],[21.21,60.6],[21.27,60.64],[21.45,60.53]]]},{id:"246",name:"Finland",rings:[[[21.83,60.14],[21.7,60.11],[21.76,60.2],[21.86,60.2],[21.83,60.14]]]},{id:"246",name:"Finland",rings:[[[21.63,60.11],[21.49,60.13],[21.63,60.17],[21.63,60.11]]]},{id:"246",name:"Finland",rings:[[[24.85,64.99],[24.58,64.98],[24.58,65.04],[24.78,65.09],[24.97,65.06],[24.85,64.99]]]},{id:"233",name:"Estonia",rings:[[[27.35,57.53],[26.97,57.61],[26.46,57.54],[26.3,57.6],[25.99,57.84],[25.28,58.05],[25.26,58],[25.11,58.06],[24.32,57.87],[24.55,58.3],[24.53,58.35],[24.34,58.38],[24.11,58.27],[23.77,58.36],[23.69,58.51],[23.51,58.66],[23.68,58.79],[23.5,58.79],[23.43,58.92],[23.51,59],[23.47,59.03],[23.52,59.11],[23.5,59.19],[24.08,59.29],[24.05,59.37],[24.38,59.47],[25.44,59.52],[25.52,59.56],[25.51,59.64],[26.62,59.55],[26.97,59.45],[27.89,59.41],[28.01,59.48],[28.15,59.37],[27.9,59.28],[27.76,59.05],[27.43,58.79],[27.53,58.43],[27.5,58.22],[27.67,57.93],[27.78,57.87],[27.54,57.8],[27.4,57.67],[27.35,57.53]]]},{id:"233",name:"Estonia",rings:[[[22.62,58.62],[22.96,58.61],[23.32,58.45],[23.13,58.44],[22.73,58.23],[22.37,58.22],[22.27,58.16],[22.15,57.97],[22,57.93],[21.99,58],[22.19,58.16],[21.88,58.26],[21.85,58.3],[21.98,58.39],[21.86,58.5],[22.27,58.51],[22.33,58.58],[22.62,58.62]]]},{id:"233",name:"Estonia",rings:[[[22.92,58.83],[22.84,58.78],[22.77,58.82],[22.66,58.71],[22.54,58.69],[22.47,58.71],[22.41,58.86],[22.06,58.94],[22.46,58.97],[22.65,59.09],[22.73,59.01],[22.91,58.99],[23.01,58.83],[22.92,58.83]]]},{id:"233",name:"Estonia",rings:[[[23.34,58.55],[23.06,58.61],[23.16,58.68],[23.33,58.65],[23.34,58.55]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.62,61.81],[-6.67,61.77],[-6.89,61.9],[-6.66,61.86],[-6.62,61.81]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.7,61.44],[-6.89,61.54],[-6.94,61.63],[-6.74,61.57],[-6.7,61.44]]]},{id:"234",name:"Faeroe Is.",rings:[[[-7.19,62.14],[-7.07,62.07],[-7.18,62.04],[-7.38,62.07],[-7.42,62.14],[-7.19,62.14]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.63,62.23],[-6.65,62.09],[-6.84,62.12],[-6.73,61.95],[-7.01,62.09],[-7.17,62.28],[-6.96,62.32],[-6.63,62.23]]]},{id:"234",name:"Faeroe Is.",rings:[[[-6.41,62.26],[-6.45,62.19],[-6.54,62.21],[-6.55,62.36],[-6.41,62.26]]]},{id:"208",name:"Denmark",rings:[[[12.57,55.79],[12.54,55.66],[12.32,55.59],[12.22,55.47],[12.39,55.39],[12.41,55.29],[12.09,55.19],[12.05,54.81],[11.86,54.77],[11.74,54.92],[11.66,55.19],[11.29,55.2],[11.17,55.33],[11.19,55.47],[11.12,55.6],[11.01,55.64],[10.98,55.72],[11.32,55.75],[11.48,55.94],[11.63,55.96],[11.69,55.91],[11.69,55.73],[11.82,55.7],[11.94,55.9],[11.87,55.97],[12.22,56.12],[12.58,56.06],[12.61,56.03],[12.53,55.92],[12.57,55.79]]]},{id:"208",name:"Denmark",rings:[[[9.74,54.83],[9.25,54.81],[8.67,54.9],[8.57,55.13],[8.67,55.16],[8.62,55.42],[8.13,55.6],[8.2,55.98],[8.12,56.14],[8.16,56.61],[8.55,56.56],[8.67,56.5],[8.74,56.63],[8.89,56.73],[9.07,56.79],[9.2,56.7],[9.25,57.01],[8.99,57.02],[8.77,56.72],[8.47,56.66],[8.27,56.75],[8.29,56.85],[8.43,56.98],[8.62,57.11],[9.43,57.17],[9.96,57.58],[10.61,57.74],[10.46,57.62],[10.54,57.45],[10.52,57.24],[10.29,57],[10.28,56.62],[10.49,56.52],[10.85,56.52],[10.93,56.44],[10.86,56.3],[10.76,56.24],[10.54,56.2],[10.43,56.28],[10.37,56.25],[10.18,55.87],[9.91,55.84],[10.02,55.76],[9.59,55.49],[9.67,55.27],[9.46,55.04],[9.69,55],[9.74,54.83]]]},{id:"208",name:"Denmark",rings:[[[10.64,55.61],[10.82,55.32],[10.78,55.13],[10.63,55.05],[9.99,55.16],[9.86,55.36],[9.86,55.52],[10.29,55.61],[10.51,55.56],[10.64,55.61]]]},{id:"208",name:"Denmark",rings:[[[11.36,54.89],[11.74,54.81],[11.77,54.68],[11.46,54.63],[11.04,54.77],[11.06,54.94],[11.26,54.95],[11.36,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.73,54.75],[10.62,54.85],[10.95,55.16],[10.73,54.75]]]},{id:"208",name:"Denmark",rings:[[[12.55,54.97],[12.12,54.91],[12.27,55.06],[12.55,54.97]]]},{id:"208",name:"Denmark",rings:[[[12.67,55.6],[12.55,55.56],[12.52,55.62],[12.62,55.68],[12.67,55.6]]]},{id:"208",name:"Denmark",rings:[[[10.49,54.85],[10.34,54.86],[10.2,54.96],[10.49,54.85]]]},{id:"208",name:"Denmark",rings:[[[10.06,54.89],[9.8,54.91],[9.77,55.06],[10,54.99],[10.06,54.89]]]},{id:"208",name:"Denmark",rings:[[[10.61,55.78],[10.53,55.78],[10.55,55.99],[10.66,55.88],[10.61,55.78]]]},{id:"208",name:"Denmark",rings:[[[11.05,57.25],[10.87,57.26],[11.09,57.33],[11.17,57.32],[11.05,57.25]]]},{id:"208",name:"Denmark",rings:[[[15.09,55.02],[14.68,55.1],[14.72,55.24],[14.77,55.3],[15.13,55.14],[15.09,55.02]]]},{id:"203",name:"Czechia",rings:[[[18.83,49.51],[18.6,49.49],[18.16,49.26],[18.08,49.07],[17.76,48.89],[17.48,48.83],[17.13,48.84],[16.95,48.6],[16.88,48.7],[16.54,48.8],[16.37,48.74],[16.06,48.75],[15.82,48.86],[14.99,49],[14.92,48.77],[14.79,48.75],[14.69,48.6],[14.19,48.58],[14.05,48.6],[13.99,48.69],[13.55,48.96],[13.44,48.96],[12.92,49.33],[12.81,49.33],[12.68,49.41],[12.39,49.74],[12.51,49.9],[12.21,50.1],[12.09,50.3],[12.28,50.18],[12.55,50.39],[12.94,50.41],[13.02,50.49],[13.18,50.51],[13.38,50.62],[13.44,50.6],[13.56,50.7],[14.37,50.9],[14.25,51],[14.28,51.03],[14.55,50.99],[14.63,50.91],[14.61,50.86],[14.72,50.82],[14.98,50.89],[14.99,51.01],[15.26,50.96],[15.36,50.81],[15.73,50.74],[16.01,50.61],[16.28,50.66],[16.36,50.62],[16.42,50.57],[16.38,50.52],[16.21,50.42],[16.64,50.1],[16.99,50.24],[16.88,50.43],[17.15,50.38],[17.42,50.25],[17.7,50.31],[17.74,50.23],[17.59,50.16],[17.63,50.12],[17.88,49.97],[18.03,50.04],[18.3,49.91],[18.56,49.88],[18.6,49.76],[18.81,49.61],[18.83,49.51]]]},{name:"N. Cyprus",rings:[[[34,35.06],[33.87,35.09],[33.47,35],[33.38,35.16],[33.19,35.17],[32.92,35.09],[32.71,35.17],[32.88,35.18],[32.94,35.39],[33.61,35.35],[34.55,35.66],[33.94,35.29],[33.91,35.2],[34,35.06]]]},{id:"196",name:"Cyprus",rings:[[[32.71,35.17],[32.92,35.09],[33.19,35.17],[33.38,35.16],[33.47,35],[33.87,35.09],[34,35.06],[34.05,34.99],[33.7,34.97],[33.41,34.75],[33.11,34.7],[33.01,34.57],[32.94,34.58],[32.87,34.66],[32.69,34.65],[32.45,34.73],[32.32,34.95],[32.3,35.08],[32.39,35.05],[32.56,35.16],[32.71,35.17]]]},{id:"100",name:"Bulgaria",rings:[[[28.01,41.97],[27.53,41.92],[27.24,42.09],[26.62,41.97],[26.51,41.83],[26.36,41.8],[26.32,41.72],[26.11,41.73],[26.07,41.67],[26.15,41.52],[26.13,41.39],[25.92,41.31],[25.25,41.24],[24.99,41.36],[24.85,41.39],[24.77,41.36],[24.49,41.56],[24.06,41.53],[24.01,41.46],[23.64,41.39],[22.92,41.34],[23,41.74],[22.84,41.99],[22.58,42.11],[22.34,42.31],[22.52,42.44],[22.44,42.63],[22.47,42.84],[22.71,42.88],[22.98,43.19],[22.5,43.52],[22.37,43.78],[22.4,43.97],[22.6,44.08],[22.63,44.19],[22.7,44.24],[23.03,44.08],[22.87,43.95],[22.92,43.83],[23.23,43.87],[25.5,43.67],[25.82,43.77],[26.22,44.01],[27.09,44.17],[27.43,44.02],[27.74,43.96],[27.88,43.99],[28.05,43.82],[28.22,43.77],[28.59,43.74],[28.56,43.5],[28.46,43.39],[28.32,43.43],[28.13,43.4],[27.93,43.19],[27.89,42.75],[27.75,42.71],[27.48,42.47],[27.71,42.35],[28.01,41.97]]]},{id:"070",name:"Bosnia and Herz.",rings:[[[19.19,43.53],[18.95,43.53],[19.03,43.29],[18.85,43.35],[18.68,43.23],[18.62,43.03],[18.46,43],[18.47,42.78],[18.55,42.64],[18.46,42.56],[18.12,42.69],[17.8,42.9],[17.67,42.9],[17.58,42.94],[17.66,42.98],[17.62,43.04],[17.29,43.31],[17.27,43.45],[17.08,43.52],[16.3,44.12],[16.21,44.21],[16.1,44.52],[15.74,44.77],[15.79,45.18],[15.96,45.21],[16.29,45.01],[16.53,45.22],[16.79,45.2],[16.92,45.28],[17.13,45.17],[17.5,45.12],[17.65,45.16],[17.81,45.08],[17.99,45.14],[18.66,45.08],[18.84,44.88],[19.35,44.88],[19.29,44.7],[19.15,44.53],[19.12,44.36],[19.58,44.01],[19.24,43.96],[19.5,43.64],[19.45,43.56],[19.3,43.59],[19.19,43.53]]]},{id:"056",name:"Belgium",rings:[[[4.22,51.39],[4.37,51.36],[4.38,51.43],[4.5,51.47],[4.64,51.42],[4.76,51.49],[4.85,51.4],[5.03,51.47],[5.1,51.35],[5.21,51.28],[5.48,51.29],[5.83,51.13],[5.64,50.84],[5.75,50.76],[5.99,50.75],[6.24,50.6],[6.18,50.52],[6.34,50.45],[6.36,50.32],[6.18,50.23],[6.12,50.12],[5.98,50.17],[5.74,49.92],[5.73,49.81],[5.88,49.65],[5.82,49.55],[5.51,49.51],[5.28,49.68],[4.87,49.79],[4.79,49.96],[4.86,50.14],[4.82,50.15],[4.55,49.96],[4.15,49.97],[4.17,50.25],[4.04,50.32],[3.79,50.35],[3.69,50.31],[3.59,50.48],[3.27,50.53],[3.23,50.66],[3.11,50.78],[2.84,50.71],[2.6,50.88],[2.53,51.1],[3.22,51.35],[3.35,51.38],[3.43,51.25],[3.58,51.29],[3.9,51.21],[4.17,51.31],[4.22,51.39]]]},{id:"112",name:"Belarus",rings:[[[31.76,52.1],[31.08,52.08],[30.76,51.89],[30.53,51.6],[30.63,51.36],[30.54,51.26],[30.33,51.33],[30.31,51.4],[30.16,51.48],[29.35,51.38],[29.1,51.63],[28.85,51.54],[28.73,51.43],[28.65,51.46],[28.6,51.54],[28.18,51.61],[28.01,51.56],[27.86,51.59],[27.7,51.48],[27.69,51.57],[27.3,51.6],[27.14,51.75],[25.79,51.92],[24.36,51.87],[23.98,51.59],[23.71,51.64],[23.61,51.61],[23.6,51.52],[23.55,51.71],[23.63,51.81],[23.65,52.04],[23.18,52.29],[23.41,52.52],[23.84,52.66],[23.92,52.77],[23.86,53.11],[23.6,53.6],[23.48,53.94],[24.19,53.95],[24.32,53.89],[24.77,53.97],[24.87,54.14],[25.05,54.13],[25.46,54.29],[25.51,54.16],[25.75,54.16],[25.75,54.26],[25.55,54.33],[25.72,54.56],[25.78,54.83],[25.86,54.92],[26.17,55],[26.25,55.12],[26.6,55.13],[26.78,55.27],[26.46,55.34],[26.6,55.67],[26.82,55.71],[27.05,55.83],[27.58,55.8],[27.64,55.91],[27.89,56.08],[28.12,56.15],[28.28,56.06],[28.56,56.09],[28.79,55.94],[29.09,56.02],[29.37,55.94],[29.35,55.78],[29.48,55.68],[29.94,55.85],[30.23,55.84],[30.91,55.57],[30.9,55.4],[30.81,55.28],[30.96,55.14],[30.98,55.05],[30.83,54.92],[30.8,54.78],[31.15,54.63],[31.07,54.49],[31.19,54.45],[31.4,54.2],[31.83,54.03],[31.75,53.81],[32.2,53.78],[32.45,53.69],[32.42,53.62],[32.47,53.55],[32.71,53.42],[32.7,53.34],[32.14,53.09],[31.85,53.11],[31.67,53.2],[31.42,53.2],[31.26,53.02],[31.56,52.76],[31.53,52.63],[31.62,52.55],[31.58,52.31],[31.76,52.1]]]},{id:"040",name:"Austria",rings:[[[9.53,47.27],[9.62,47.47],[9.52,47.52],[9.75,47.58],[10.2,47.36],[10.18,47.28],[10.37,47.37],[10.44,47.55],[10.87,47.52],[11.04,47.39],[11.3,47.42],[11.72,47.58],[12.18,47.62],[12.21,47.72],[12.48,47.64],[12.68,47.67],[12.77,47.64],[12.81,47.54],[13.02,47.48],[13.06,47.66],[12.9,47.72],[12.95,47.89],[12.76,48.08],[12.81,48.16],[13.38,48.36],[13.49,48.58],[13.73,48.54],[13.79,48.59],[13.82,48.77],[13.99,48.69],[14.05,48.6],[14.69,48.6],[14.79,48.75],[14.92,48.77],[14.99,49],[15.82,48.86],[16.06,48.75],[16.37,48.74],[16.54,48.8],[16.88,48.7],[16.95,48.6],[16.86,48.39],[17.15,48.01],[17.03,47.84],[17.07,47.71],[16.79,47.68],[16.59,47.75],[16.42,47.67],[16.64,47.61],[16.68,47.54],[16.62,47.45],[16.44,47.4],[16.46,47.27],[16.42,47.22],[16.49,47.12],[16.45,47.01],[16.33,47],[16.04,46.84],[15.98,46.8],[15.96,46.68],[15.76,46.71],[15.44,46.63],[14.89,46.61],[14.55,46.4],[12.48,46.67],[12.16,46.94],[12.17,47.08],[11.77,46.99],[11.24,46.98],[11.13,46.94],[10.99,46.78],[10.48,46.86],[10.35,46.99],[10.13,46.85],[9.88,46.94],[9.84,47.01],[9.58,47.06],[9.61,47.11],[9.53,47.27]]]},{id:"051",name:"Armenia",rings:[[[44.77,39.7],[44.29,40.04],[43.94,40.02],[43.67,40.13],[43.71,40.17],[43.57,40.48],[43.72,40.72],[43.63,40.93],[43.44,41.11],[44.23,41.21],[44.84,41.21],[44.81,41.26],[45,41.29],[45.19,41.15],[45.07,41.08],[45.42,40.99],[45.59,40.85],[45.38,40.64],[45.57,40.42],[45.96,40.23],[45.97,40.18],[45.88,40.02],[45.58,39.98],[46.2,39.59],[46.32,39.62],[46.48,39.56],[46.48,39.48],[46.37,39.4],[46.59,39.22],[46.4,39.19],[46.49,39.07],[46.49,38.91],[46.11,38.88],[45.95,39.18],[45.98,39.24],[45.77,39.38],[45.8,39.49],[45.75,39.56],[45.46,39.49],[45.25,39.6],[45.17,39.57],[45.12,39.7],[45.03,39.77],[44.77,39.7]]]},{id:"020",name:"Andorra",rings:[[[1.7,42.5],[1.45,42.44],[1.43,42.6],[1.5,42.64],[1.71,42.6],[1.7,42.5]]]},{id:"012",name:"Algeria",rings:[[[8.58,36.94],[8.6,36.83],[8.44,36.76],[8.37,36.63],[8.21,36.52],[8.35,36.37],[8.25,35.8],[8.39,35.2],[8.31,35.09],[8.25,34.73],[8.12,34.56],[7.84,34.41],[7.75,34.25],[7.52,34.08],[7.5,33.83],[7.73,33.27],[8.11,33.06],[8.21,32.93],[8.33,32.54],[9.05,32.07],[9.52,30.23],[9.31,30.12],[9.64,29.64],[9.8,29.18],[9.84,28.97],[9.82,28.56],[9.92,27.79],[9.75,27.33],[9.79,27.04],[9.89,26.85],[9.88,26.63],[9.86,26.55],[9.49,26.33],[9.42,26.15],[9.5,26],[-6.5,26],[-8.69,27.29],[-8.68,28.69],[-8.26,28.98],[-7.14,29.62],[-6.64,29.57],[-6.52,29.66],[-6.48,29.82],[-6,29.83],[-5.45,29.96],[-5.18,30.17],[-4.97,30.47],[-4.32,30.7],[-3.99,30.91],[-3.67,30.96],[-3.62,31.07],[-3.83,31.2],[-3.79,31.36],[-3.85,31.62],[-3.77,31.69],[-3.44,31.71],[-3.02,31.83],[-2.93,32.04],[-2.86,32.08],[-2.45,32.13],[-1.23,32.11],[-1.24,32.34],[-1.06,32.47],[-1.45,32.79],[-1.68,33.32],[-1.63,33.57],[-1.72,33.78],[-1.71,34.18],[-1.79,34.37],[-1.73,34.47],[-1.85,34.61],[-1.79,34.75],[-2.13,34.97],[-2.22,35.1],[-1.91,35.09],[-1.67,35.18],[-1.34,35.36],[-1.09,35.58],[-0.43,35.86],[-0.05,35.83],[0.31,36.16],[1.26,36.52],[2.59,36.6],[2.97,36.78],[3.52,36.8],[3.78,36.9],[4.76,36.9],[5.29,36.65],[6.06,36.86],[6.25,36.94],[6.33,37.05],[6.49,37.09],[6.58,37],[6.93,36.92],[7.24,36.97],[7.21,37.09],[7.43,37.06],[7.91,36.86],[8.58,36.94]]]},{id:"008",name:"Albania",rings:[[[19.34,41.87],[19.36,42.07],[19.28,42.17],[19.7,42.65],[19.79,42.48],[20.06,42.55],[20.24,42.34],[20.52,42.17],[20.58,41.92],[20.5,41.71],[20.51,41.57],[20.45,41.52],[20.49,41.27],[20.71,40.93],[20.93,40.9],[21.03,40.62],[20.95,40.49],[20.81,40.45],[20.66,40.12],[20.31,39.98],[20.38,39.8],[20.31,39.8],[20.21,39.65],[20,39.71],[19.85,40.04],[19.49,40.21],[19.32,40.41],[19.46,40.41],[19.34,40.66],[19.46,40.93],[19.44,41.43],[19.58,41.64],[19.58,41.79],[19.34,41.87]]]}],croatia:[[[16.358,46.555],[16.239,46.501],[16.295,46.38],[16.048,46.395],[16.066,46.342],[16.006,46.31],[15.775,46.26],[15.78,46.219],[15.633,46.21],[15.587,46.147],[15.714,46.045],[15.702,45.847],[15.531,45.849],[15.249,45.721],[15.319,45.674],[15.347,45.713],[15.336,45.67],[15.364,45.689],[15.394,45.648],[15.269,45.608],[15.374,45.485],[15.338,45.451],[15.148,45.424],[14.913,45.528],[14.896,45.479],[14.811,45.462],[14.679,45.532],[14.693,45.568],[14.564,45.675],[14.494,45.55],[14.312,45.474],[13.994,45.518],[13.977,45.45],[13.876,45.427],[13.499,45.51],[13.601,45.042],[13.639,45.061],[13.743,44.982],[13.786,44.857],[13.938,44.763],[14.053,44.941],[14.156,44.966],[14.149,45.071],[14.319,45.349],[14.546,45.274],[14.825,45.102],[14.906,44.941],[14.865,44.724],[14.965,44.573],[15.268,44.358],[15.527,44.249],[15.258,44.337],[15.284,44.251],[15.179,44.306],[15.186,44.251],[15.091,44.267],[15.123,44.195],[15.535,43.869],[15.59,43.769],[15.828,43.715],[15.913,43.518],[16.051,43.464],[16.185,43.469],[16.181,43.503],[16.201,43.47],[16.363,43.478],[16.271,43.519],[16.425,43.536],[16.376,43.5],[16.866,43.392],[17.522,42.927],[17.186,43.026],[16.985,43.052],[16.994,43.003],[17.212,42.97],[17.76,42.755],[17.813,42.795],[18.029,42.649],[18.196,42.612],[18.22,42.554],[18.525,42.386],[18.409,42.575],[18.345,42.616],[18.238,42.604],[17.882,42.813],[17.815,42.912],[17.685,42.924],[17.634,42.882],[17.53,42.929],[17.704,42.973],[17.665,43.054],[17.331,43.26],[17.246,43.403],[17.274,43.465],[17.005,43.573],[16.499,44.024],[16.306,44.115],[16.182,44.274],[16.205,44.344],[16.11,44.398],[16.164,44.404],[16.126,44.489],[15.998,44.583],[16.048,44.622],[15.891,44.744],[15.825,44.715],[15.717,44.83],[15.785,44.845],[15.731,44.937],[15.759,45.168],[15.822,45.22],[15.97,45.228],[16.101,45.097],[16.299,44.998],[16.503,45.221],[16.813,45.185],[16.924,45.276],[16.928,45.229],[17.013,45.235],[17.172,45.147],[17.24,45.149],[17.26,45.191],[17.33,45.146],[17.451,45.154],[17.474,45.111],[17.658,45.13],[17.833,45.047],[17.996,45.145],[18.125,45.081],[18.216,45.081],[18.251,45.136],[18.413,45.112],[18.496,45.054],[18.541,45.096],[18.646,45.055],[18.66,45.092],[18.719,44.998],[18.787,44.99],[18.761,44.897],[18.969,44.849],[19.012,44.856],[18.993,44.918],[19.056,44.901],[19.138,44.953],[19.042,44.977],[19.087,45.01],[19.077,45.141],[19.121,45.132],[19.164,45.198],[19.433,45.194],[19.405,45.237],[19.175,45.264],[18.981,45.359],[18.993,45.493],[19.087,45.496],[19.007,45.553],[18.873,45.565],[18.955,45.661],[18.898,45.707],[18.967,45.71],[18.894,45.713],[18.967,45.732],[18.951,45.769],[18.901,45.744],[18.839,45.772],[18.911,45.784],[18.888,45.827],[18.836,45.808],[18.894,45.918],[18.794,45.881],[18.65,45.919],[18.611,45.843],[18.437,45.739],[18.119,45.792],[17.9,45.797],[17.85,45.764],[17.821,45.805],[17.65,45.837],[17.554,45.938],[17.34,45.943],[17.381,45.964],[17.25,46.012],[17.284,46.029],[17.193,46.075],[17.225,46.101],[17.168,46.109],[17.147,46.169],[16.876,46.281],[16.855,46.353],[16.362,46.554]],[[14.319,45.178],[14.294,45.177],[14.25,45.125],[14.291,45.065],[14.337,45.04],[14.332,45.01],[14.375,44.967],[14.382,44.909],[14.309,44.956],[14.287,44.916],[14.313,44.823],[14.346,44.81],[14.378,44.74],[14.378,44.702],[14.329,44.716],[14.323,44.702],[14.376,44.603],[14.354,44.563],[14.396,44.549],[14.404,44.564],[14.434,44.527],[14.528,44.473],[14.525,44.445],[14.575,44.439],[14.518,44.517],[14.418,44.584],[14.39,44.631],[14.395,44.67],[14.488,44.599],[14.542,44.629],[14.474,44.698],[14.476,44.742],[14.445,44.789],[14.465,44.788],[14.442,44.875],[14.483,44.954],[14.465,44.982],[14.43,44.978],[14.396,45.013],[14.358,45.088],[14.362,45.158],[14.323,45.173]],[[14.83,44.19],[14.853,44.154],[14.823,44.157],[14.83,44.168],[14.808,44.147],[14.87,44.129],[14.902,44.091],[14.961,44.062],[15.111,43.911],[15.228,43.841],[15.207,43.839],[15.237,43.806],[15.273,43.79],[15.277,43.813],[15.317,43.782],[15.283,43.781],[15.486,43.674],[15.513,43.676],[15.476,43.689],[15.514,43.684],[15.466,43.717],[15.485,43.722],[15.473,43.733],[15.361,43.783],[15.232,43.882],[15.371,43.814],[15.333,43.878],[15.217,43.905],[15.081,44.005],[15.05,44.008],[15.004,44.084],[14.944,44.105],[14.842,44.189]],[[14.731,44.709],[14.721,44.694],[14.746,44.66],[14.903,44.516],[14.912,44.5],[14.885,44.503],[14.9,44.48],[14.963,44.459],[15.027,44.393],[15.073,44.396],[15.105,44.378],[15.077,44.361],[15.098,44.318],[15.168,44.288],[15.129,44.331],[15.23,44.295],[15.206,44.319],[15.23,44.319],[15.192,44.35],[15.248,44.321],[15.242,44.348],[15.067,44.473],[15.045,44.517],[14.994,44.535],[14.905,44.613],[14.86,44.615],[14.857,44.597]],[[14.554,45.258],[14.523,45.239],[14.539,45.214],[14.518,45.227],[14.532,45.168],[14.512,45.123],[14.466,45.13],[14.459,45.1],[14.421,45.095],[14.421,45.07],[14.486,45.023],[14.61,45.011],[14.603,44.981],[14.748,44.936],[14.746,44.969],[14.8,44.961],[14.815,44.979],[14.735,45.039],[14.731,45.071],[14.697,45.068],[14.659,45.093],[14.664,45.158],[14.657,45.149],[14.627,45.164],[14.574,45.23],[14.596,45.228],[14.56,45.254]],[[16.666,42.999],[16.593,42.98],[16.659,42.966],[16.625,42.92],[16.694,42.895],[16.672,42.919],[16.779,42.89],[16.9,42.898],[16.959,42.923],[17.096,42.904],[17.176,42.909],[17.197,42.914],[17.182,42.933],[17.204,42.941],[17.169,42.939],[17.172,42.962],[17.175,42.952],[17.208,42.962],[17.034,42.985],[16.806,42.969],[16.726,42.992]],[[16.55,43.239],[16.505,43.225],[16.568,43.186],[16.489,43.216],[16.447,43.214],[16.355,43.204],[16.381,43.172],[16.303,43.182],[16.292,43.171],[16.369,43.142],[16.477,43.155],[16.648,43.116],[16.74,43.125],[16.973,43.111],[17.194,43.125],[17.145,43.143],[16.719,43.167],[16.672,43.212],[16.573,43.222],[16.561,43.238]],[[15.675,43.727],[15.661,43.706],[15.623,43.713],[15.63,43.693],[15.717,43.653],[15.587,43.686],[15.651,43.628],[15.736,43.62],[15.713,43.644],[15.737,43.645],[15.737,43.663],[15.755,43.66],[15.766,43.677],[15.835,43.641],[15.81,43.673],[15.685,43.726]],[[14.715,44.857],[14.666,44.846],[14.686,44.797],[14.662,44.806],[14.638,44.792],[14.685,44.752],[14.756,44.747],[14.835,44.683],[14.864,44.701],[14.861,44.725],[14.743,44.816],[14.76,44.837],[14.748,44.852]],[[16.201,43.42],[16.153,43.409],[16.164,43.39],[16.533,43.264],[16.781,43.256],[16.875,43.277],[16.896,43.316],[16.771,43.363],[16.544,43.396],[16.412,43.397],[16.428,43.368],[16.412,43.338],[16.267,43.418]],[[14.979,44.19],[15.034,44.142],[15.055,44.148],[15.188,44.032],[15.225,44.024],[15.354,43.908],[15.447,43.888],[15.364,43.972],[15.265,44.018],[15.204,44.08],[15.045,44.168],[15.005,44.171]],[[14.745,44.299],[14.724,44.281],[14.741,44.244],[14.76,44.244],[14.762,44.265],[14.823,44.197],[14.812,44.228],[14.937,44.17],[14.877,44.239],[14.87,44.225],[14.801,44.266]],[[17.825,42.763],[17.826,42.743],[17.787,42.762],[17.771,42.753],[17.891,42.698],[17.928,42.702],[17.909,42.693],[17.924,42.674],[18.019,42.666],[17.849,42.756]],[[16.174,43.087],[16.024,43.057],[16.052,43.038],[16.072,43.044],[16.077,43.025],[16.051,43.006],[16.223,43.016],[16.253,43.032],[16.257,43.068],[16.194,43.082]],[[15.259,43.943],[15.272,43.929],[15.246,43.928],[15.253,43.907],[15.282,43.925],[15.343,43.896],[15.273,43.939]],[[13.711,44.946],[13.735,44.906],[13.722,44.921],[13.705,44.914],[13.743,44.885],[13.777,44.912],[13.74,44.941]],[[15.06,44.087],[15.062,44.07],[15.039,44.083],[15.098,44.019],[15.164,43.994],[15.171,44.012],[15.095,44.073]],[[14.273,44.691],[14.228,44.661],[14.219,44.626],[14.268,44.602],[14.261,44.648],[14.284,44.664]],[[15.476,43.872],[15.469,43.847],[15.492,43.824],[15.531,43.827],[15.495,43.865]],[[14.835,44.492],[14.93,44.405],[14.993,44.393],[14.867,44.458],[14.836,44.491]]],cities:[["Osijek",18.675555,45.560846,1],["Zagreb",15.98,45.81,1],["Split",16.44,43.51,1],["Rijeka",14.44,45.33,1],["Zadar",15.23,44.12,0],["Dubrovnik",18.09,42.65,0],["Pula",13.85,44.87,0],["Varaždin",16.34,46.31,0],["Slavonski Brod",18.01,45.16,0],["Vukovar",19,45.35,0],["Đakovo",18.41,45.31,0],["Vinkovci",18.8,45.29,0]],capitals:[["Beč",16.37,48.21],["Budimpešta",19.04,47.5],["München",11.58,48.14],["Ljubljana",14.51,46.06],["Beograd",20.46,44.79],["Sarajevo",18.41,43.86],["Milano",9.19,45.46],["Berlin",13.4,52.52],["Prag",14.42,50.08],["Varšava",21.01,52.23],["Pariz",2.35,48.86],["Amsterdam",4.9,52.37],["Rim",12.5,41.9],["Zürich",8.54,47.37],["Bratislava",17.11,48.15],["London",-0.13,51.51]],nodes:[[149.2,72],[116.8,71.8],[-105.7,71.7],[-53.2,71.6],[84.3,71.6],[136.8,71.4],[-85.7,71.4],[-33.2,71.3],[104.4,71.2],[71.9,71],[124.4,70.9],[-45.6,70.8],[92,70.7],[144.5,70.6],[-78,70.6],[112,70.4],[-110.5,70.4],[27,70.4],[79.6,70.2],[132.1,70.1],[-37.9,70],[99.6,69.9],[152.1,69.8],[-70.3,69.8],[67.2,69.8],[-155.3,69.7],[119.7,69.6],[-102.8,69.6],[172.2,69.5],[-50.3,69.5],[87.2,69.5],[139.7,69.4],[-82.7,69.3],[-30.2,69.2],[107.3,69.2],[22.3,69.1],[159.8,69.1],[-147.7,69],[127.3,68.9],[179.9,68.8],[-42.6,68.7],[94.9,68.7],[-127.6,68.7],[147.4,68.6],[-75.1,68.6],[62.4,68.5],[-160.1,68.5],[114.9,68.4],[-107.5,68.4],[30,68.4],[167.5,68.3],[82.5,68.3],[-140,68.2],[135,68.2],[50,68.1],[-35,68],[102.5,68],[-119.9,68],[17.6,67.9],[155.1,67.9],[-67.4,67.9],[70.1,67.8],[-152.4,67.8],[122.6,67.7],[-99.9,67.7],[37.6,67.7],[175.1,67.6],[-47.4,67.6],[90.1,67.6],[-132.3,67.5],[142.7,67.5],[57.7,67.4],[110.2,67.3],[-112.3,67.3],[25.2,67.2],[162.7,67.2],[77.7,67.1],[-144.7,67.1],[130.3,67],[-92.2,67],[45.3,67],[-177.2,66.9],[-39.7,66.9],[97.8,66.9],[-124.7,66.8],[150.3,66.8],[-72.2,66.7],[65.3,66.7],[-157.1,66.7],[117.9,66.6],[-104.6,66.6],[32.9,66.5],[170.4,66.5],[-52.1,66.5],[85.4,66.4],[-137.1,66.4],[137.9,66.3],[-84.6,66.3],[53,66.3],[105.5,66.2],[-117,66.2],[20.5,66.1],[158,66.1],[-64.5,66.1],[73,66],[-149.5,66],[125.5,65.9],[-97,65.9],[178.1,65.8],[-44.4,65.8],[93.1,65.8],[-129.4,65.8],[145.6,65.7],[60.6,65.6],[-161.9,65.6],[-24.4,65.6],[113.1,65.5],[-109.4,65.5],[28.2,65.5],[165.7,65.4],[80.7,65.4],[-141.8,65.4],[133.2,65.3],[-89.3,65.3],[48.2,65.2],[-174.3,65.2],[100.7,65.1],[-121.8,65.1],[15.8,65.1],[153.3,65],[-69.2,65],[68.3,65],[-154.2,65],[-16.7,64.9],[120.8,64.9],[-101.7,64.9],[173.3,64.8],[-49.2,64.8],[88.3,64.7],[-134.2,64.7],[140.9,64.7],[55.9,64.6],[108.4,64.5],[-114.1,64.5],[160.9,64.4],[75.9,64.4],[-146.6,64.3],[128.5,64.3],[-94,64.2],[43.5,64.2],[-41.5,64.2],[96,64.1],[-126.5,64.1],[11,64.1],[148.5,64],[63.5,64],[-159,64],[-21.4,63.9],[116.1,63.9],[-106.4,63.9],[31.1,63.8],[168.6,63.8],[83.6,63.8],[-138.9,63.7],[136.1,63.7],[51.1,63.6],[-171.4,63.6],[103.7,63.5],[-118.8,63.5],[18.7,63.5],[156.2,63.4],[-66.3,63.4],[71.2,63.4],[-151.3,63.4],[123.7,63.3],[-98.8,63.3],[38.7,63.2],[176.3,63.2],[-46.2,63.2],[91.3,63.2],[-131.2,63.1],[143.8,63.1],[58.8,63],[-163.7,63],[111.3,62.9],[-111.2,62.9],[26.3,62.9],[163.9,62.8],[78.9,62.8],[-143.6,62.8],[131.4,62.7],[46.4,62.6],[98.9,62.6],[-123.6,62.5],[13.9,62.5],[151.5,62.5],[66.5,62.4],[-156,62.4],[119,62.3],[-103.5,62.3],[34,62.3],[171.5,62.3],[86.5,62.2],[-136,62.2],[139.1,62.1],[54.1,62.1],[106.6,62],[-115.9,62],[21.6,61.9],[74.1,61.9],[-148.4,61.8],[126.7,61.8],[-95.8,61.7],[41.7,61.7],[-43.3,61.7],[94.2,61.6],[-128.3,61.6],[9.2,61.6],[146.7,61.6],[-75.8,61.5],[61.7,61.5],[-160.8,61.5],[114.3,61.4],[-108.2,61.4],[29.3,61.4],[166.8,61.3],[81.8,61.3],[-140.7,61.3],[134.3,61.2],[49.3,61.2],[101.9,61.1],[-120.6,61.1],[16.9,61],[154.4,61],[69.4,61],[-153.1,60.9],[121.9,60.9],[-100.6,60.8],[36.9,60.8],[-48.1,60.8],[89.5,60.7],[-133,60.7],[142,60.7],[57,60.6],[109.5,60.5],[-113,60.5],[24.5,60.5],[77.1,60.4],[129.6,60.3],[44.6,60.3],[97.1,60.2],[-125.4,60.2],[12.1,60.1],[149.6,60.1],[-72.8,60.1],[64.7,60.1],[-157.8,60],[117.2,60],[-105.3,60],[32.2,59.9],[84.7,59.9],[-137.8,59.8],[137.2,59.8],[52.3,59.7],[104.8,59.7],[-117.7,59.6],[-65.2,59.6],[72.3,59.5],[124.8,59.5],[-97.6,59.4],[39.9,59.4],[92.4,59.3],[-130.1,59.3],[7.4,59.3],[-77.6,59.2],[59.9,59.2],[112.4,59.1],[-110,59.1],[27.5,59.1],[80,59],[132.5,58.9],[47.5,58.9],[100,58.8],[-122.4,58.8],[15.1,58.8],[67.6,58.7],[-154.9,58.7],[120.1,58.6],[-102.4,58.6],[35.1,58.6],[87.6,58.5],[140.2,58.4],[55.2,58.4],[107.7,58.3],[-114.8,58.3],[22.7,58.3],[160.2,58.2],[75.2,58.2],[127.8,58.1],[-94.7,58.1],[42.8,58.1],[95.3,58],[-127.2,58],[-74.7,57.9],[62.8,57.9],[115.4,57.8],[-107.1,57.8],[30.4,57.8],[82.9,57.7],[-2.1,57.6],[135.4,57.6],[50.5,57.6],[103,57.5],[-119.5,57.5],[-67,57.4],[70.5,57.4],[123,57.3],[-99.5,57.3],[38.1,57.3],[90.6,57.2],[-131.9,57.2],[58.1,57.1],[110.6,57],[-111.9,57],[25.7,57],[78.2,56.9],[130.7,56.8],[-91.8,56.8],[45.7,56.8],[98.2,56.7],[-124.3,56.7],[13.3,56.6],[-71.7,56.6],[65.8,56.6],[118.3,56.5],[-104.2,56.5],[33.3,56.5],[85.8,56.4],[53.4,56.3],[105.9,56.2],[-116.6,56.2],[158.4,56.1],[-64.1,56.1],[73.4,56.1],[126,56],[-96.5,56],[41,56],[93.5,55.9],[-129,55.9],[8.5,55.9],[-76.5,55.8],[61,55.8],[-161.5,55.8],[113.6,55.7],[-108.9,55.7],[28.6,55.7],[81.1,55.6],[-3.9,55.6],[133.6,55.6],[-88.9,55.5],[48.6,55.5],[101.2,55.4],[-121.3,55.4],[-68.8,55.4],[68.7,55.3],[121.2,55.3],[-101.3,55.2],[36.2,55.2],[88.8,55.1],[56.3,55],[108.8,55],[-113.7,54.9],[23.8,54.9],[161.4,54.9],[-61.1,54.9],[76.4,54.9],[128.9,54.8],[-93.6,54.8],[43.9,54.8],[96.4,54.7],[-126.1,54.7],[11.4,54.6],[-73.5,54.6],[64,54.6],[116.5,54.5],[-106,54.5],[31.5,54.5],[84,54.4],[-1,54.4],[136.6,54.3],[-85.9,54.3],[51.6,54.3],[104.1,54.2],[-118.4,54.2],[19.1,54.2],[156.6,54.2],[-65.9,54.1],[71.6,54.1],[124.2,54.1],[-98.3,54],[39.2,54],[91.7,53.9],[-78.3,53.9],[59.2,53.8],[111.8,53.8],[-110.7,53.7],[26.8,53.7],[-58.2,53.7],[79.3,53.7],[131.8,53.6],[-90.7,53.6],[46.8,53.6],[99.4,53.5],[-123.1,53.5],[14.4,53.4],[-70.6,53.4],[66.9,53.4],[119.4,53.3],[-103.1,53.3],[34.4,53.3],[87,53.2],[139.5,53.1],[-83,53.1],[54.5,53.1],[107,53],[-115.5,53],[22,53],[-63,53],[74.6,52.9],[127.1,52.9],[-95.4,52.9],[42.1,52.8],[94.6,52.8],[-127.9,52.7],[9.6,52.7],[-75.3,52.7],[62.2,52.7],[114.7,52.6],[-107.8,52.6],[29.7,52.6],[82.2,52.5],[-2.8,52.5],[134.7,52.4],[-87.7,52.4],[49.8,52.4],[102.3,52.3],[-120.2,52.3],[17.3,52.3],[-67.7,52.2],[69.8,52.2],[122.3,52.2],[-100.1,52.1],[37.4,52.1],[89.9,52.1],[4.9,52],[142.4,52],[57.4,52],[109.9,51.9],[-112.5,51.9],[25,51.9],[-60,51.8],[77.5,51.8],[130,51.7],[-92.5,51.7],[45,51.7],[97.5,51.6],[-124.9,51.6],[12.6,51.6],[-72.4,51.5],[65.1,51.5],[117.6,51.5],[-104.9,51.4],[32.6,51.4],[85.1,51.4],[0.2,51.3],[137.7,51.3],[-84.8,51.3],[52.7,51.3],[105.2,51.2],[-117.3,51.2],[20.2,51.2],[-64.8,51.1],[72.7,51.1],[125.3,51],[-97.2,51],[40.3,51],[92.8,50.9],[7.8,50.9],[-77.2,50.9],[60.3,50.8],[112.9,50.8],[-109.6,50.8],[27.9,50.7],[-57.1,50.7],[80.4,50.7],[-4.6,50.6],[132.9,50.6],[-89.6,50.6],[48,50.6],[100.5,50.5],[-122,50.5],[15.5,50.5],[-69.5,50.4],[68,50.4],[120.5,50.4],[-102,50.3],[35.6,50.3],[88.1,50.3],[3.1,50.2],[-81.9,50.2],[55.6,50.2],[108.1,50.1],[-114.4,50.1],[23.2,50.1],[75.7,50],[128.2,49.9],[-94.3,49.9],[43.2,49.9],[95.7,49.8],[-126.8,49.8],[10.8,49.8],[-74.2,49.8],[63.3,49.7],[115.8,49.7],[-106.7,49.7],[30.8,49.6],[83.3,49.6],[-1.6,49.5],[135.9,49.5],[-86.6,49.5],[50.9,49.5],[103.4,49.4],[-119.1,49.4],[18.4,49.4],[70.9,49.3],[123.5,49.3],[-99,49.2],[38.5,49.2],[91,49.2],[6,49.1],[-79,49.1],[58.5,49.1],[111.1,49],[-111.4,49],[26.1,49],[78.6,48.9],[131.1,48.9],[-91.4,48.8],[46.1,48.8],[98.7,48.8],[-123.8,48.7],[13.7,48.7],[-71.3,48.7],[66.2,48.7],[118.7,48.6],[-103.8,48.6],[33.7,48.6],[86.3,48.5],[1.3,48.5],[138.8,48.5],[-83.7,48.4],[53.8,48.4],[106.3,48.4],[-116.2,48.3],[21.3,48.3],[73.9,48.3],[126.4,48.2],[-96.1,48.2],[41.4,48.2],[93.9,48.1],[8.9,48.1],[-76,48],[61.5,48],[114,48],[-108.5,47.9],[29,47.9],[-56,47.9],[81.5,47.9],[-3.5,47.8],[134.1,47.8],[-88.4,47.8],[49.1,47.8],[101.6,47.7],[-120.9,47.7],[16.6,47.7],[-68.4,47.6],[69.1,47.6],[121.7,47.6],[-100.8,47.5],[36.7,47.5],[89.2,47.5],[4.2,47.4],[-80.8,47.4],[56.7,47.4],[109.3,47.3],[-113.2,47.3],[24.3,47.3],[76.8,47.2],[129.3,47.2],[-93.2,47.1],[44.3,47.1],[96.9,47.1],[11.9,47],[-73.1,47],[64.4,47],[116.9,46.9],[-105.6,46.9],[-53.1,46.8],[84.5,46.8],[-0.5,46.8],[137,46.8],[-85.5,46.8],[104.5,46.7],[-118,46.7],[19.5,46.6],[-65.5,46.6],[72.1,46.6],[124.6,46.5],[-97.9,46.5],[39.6,46.5],[92.1,46.4],[7.1,46.4],[-77.8,46.4],[59.7,46.3],[112.2,46.3],[-110.3,46.3],[27.2,46.3],[79.7,46.2],[132.2,46.1],[-90.2,46.1],[47.3,46.1],[99.8,46.1],[-122.7,46],[14.8,46],[-70.2,46],[67.3,46],[119.8,45.9],[-102.6,45.9],[34.9,45.9],[87.4,45.8],[2.4,45.8],[-82.6,45.7],[54.9,45.7],[107.4,45.7],[-115,45.6],[22.5,45.6],[-62.5,45.6],[75,45.6],[127.5,45.5],[-95,45.5],[42.5,45.5],[95,45.4],[10.1,45.4],[-74.9,45.4],[62.6,45.3],[115.1,45.3],[-107.4,45.3],[82.6,45.2],[135.2,45.1],[-87.3,45.1],[102.7,45.1],[-119.8,45],[17.7,45],[-67.3,45],[70.2,45],[122.8,44.9],[-99.7,44.9],[37.8,44.9],[90.3,44.8],[5.3,44.8],[-79.7,44.7],[57.8,44.7],[110.4,44.7],[-112.1,44.7],[25.4,44.6],[77.9,44.6],[130.4,44.5],[-92.1,44.5],[45.5,44.5],[98,44.4],[-72,44.4],[65.5,44.4],[118,44.3],[-104.5,44.3],[85.6,44.2],[0.6,44.2],[-84.4,44.1],[53.1,44.1],[105.6,44.1],[-116.9,44.1],[20.7,44],[73.2,44],[125.7,43.9],[-96.8,43.9],[40.7,43.9],[93.2,43.8],[-76.7,43.8],[60.8,43.8],[113.3,43.7],[-109.2,43.7],[28.3,43.7],[80.8,43.6],[133.4,43.6],[-89.1,43.5],[100.9,43.5],[-121.6,43.5],[68.4,43.4],[121,43.3],[-101.5,43.3],[88.5,43.2],[141,43.2],[-81.5,43.2],[56,43.2],[108.6,43.1],[-113.9,43.1],[23.6,43.1],[76.1,43],[-8.9,43],[128.6,43],[-93.9,42.9],[43.6,42.9],[96.2,42.9],[11.2,42.8],[-73.8,42.8],[63.7,42.8],[116.2,42.7],[-106.3,42.7],[83.8,42.7],[-1.2,42.6],[-86.2,42.6],[103.8,42.5],[-118.7,42.5],[18.8,42.5],[71.4,42.4],[123.9,42.4],[-98.6,42.4],[91.4,42.3],[-78.5,42.2],[59,42.2],[111.5,42.2],[-111,42.1],[26.5,42.1],[79,42.1],[-6,42],[-90.9,42],[46.6,42],[99.1,41.9],[-123.4,41.9],[14.1,41.9],[-70.9,41.9],[66.6,41.8],[119.2,41.8],[-103.3,41.8],[34.2,41.8],[86.7,41.7],[1.7,41.7],[-83.3,41.6],[54.2,41.6],[106.8,41.6],[-115.7,41.6],[21.8,41.5],[74.3,41.5],[126.8,41.4],[-95.7,41.4],[41.8,41.4],[94.4,41.3],[-75.6,41.3],[61.9,41.3],[114.4,41.2],[-108.1,41.2],[29.4,41.2],[82,41.1],[-3,41.1],[-88,41.1],[102,41],[-120.5,41],[17,41],[69.6,40.9],[122.1,40.9],[-100.4,40.8],[37.1,40.8],[89.6,40.8],[-80.3,40.7],[57.2,40.7],[109.7,40.6],[-112.8,40.6],[24.7,40.6],[77.2,40.6],[-7.8,40.5],[-92.7,40.5],[44.8,40.5],[97.3,40.4],[64.8,40.3],[117.3,40.3],[-105.1,40.3],[32.4,40.3],[84.9,40.2],[-0.1,40.2],[-85.1,40.1],[104.9,40.1],[-117.5,40.1],[20,40],[72.5,40],[125,39.9],[-97.5,39.9],[40,39.9],[92.5,39.9],[-77.4,39.8],[60.1,39.8],[112.6,39.7],[-109.9,39.7],[27.6,39.7],[80.1,39.6],[-4.8,39.6],[-89.8,39.6],[47.7,39.6],[100.2,39.5],[-122.3,39.5],[67.7,39.4],[-102.2,39.4],[35.3,39.3],[87.8,39.3],[140.3,39.2],[-82.2,39.2],[55.3,39.2],[107.9,39.2],[-114.6,39.1],[22.9,39.1],[75.4,39.1],[-94.6,39],[43,39],[95.5,38.9],[63,38.9],[115.5,38.8],[-107,38.8],[30.6,38.8],[83.1,38.7],[-1.9,38.7],[-86.9,38.7],[103.1,38.6],[-119.4,38.6],[70.7,38.5],[-99.3,38.5],[38.2,38.4],[90.7,38.4],[-79.2,38.3],[58.3,38.3],[110.8,38.3],[-111.7,38.2],[78.3,38.2],[-6.6,38.2],[-91.6,38.1],[45.9,38.1],[98.4,38.1],[13.4,38],[65.9,38],[118.5,37.9],[-104,37.9],[33.5,37.9],[86,37.8],[-84,37.8],[106.1,37.7],[-116.4,37.7],[73.6,37.6],[-96.4,37.6],[41.1,37.6],[93.7,37.5],[-76.3,37.4],[61.2,37.4],[113.7,37.4],[-108.8,37.4],[28.7,37.3],[81.3,37.3],[-3.7,37.3],[-88.7,37.2],[48.8,37.2],[101.3,37.2],[-121.2,37.2],[68.9,37.1],[121.4,37],[-101.1,37],[36.4,37],[88.9,37],[-81,36.9],[56.5,36.9],[109,36.8],[-113.5,36.8],[76.5,36.8],[129.1,36.7],[-93.4,36.7],[44.1,36.7],[96.6,36.6],[64.1,36.5],[116.7,36.5],[-105.8,36.5],[84.2,36.4],[136.7,36.4],[-85.8,36.4],[51.7,36.3],[104.3,36.3],[-118.2,36.3],[71.8,36.2],[-98.2,36.2],[39.3,36.1],[91.9,36.1],[6.9,36.1],[-78.1,36],[59.4,36],[111.9,36],[-110.6,35.9],[79.5,35.9],[-5.5,35.9],[-90.5,35.8],[47,35.8],[99.5,35.8],[67.1,35.7],[119.6,35.6],[-102.9,35.6],[87.1,35.6],[2.1,35.5],[139.6,35.5],[-82.8,35.5],[54.7,35.5],[107.2,35.4],[-115.3,35.4],[74.7,35.4],[127.2,35.3],[-95.2,35.3],[42.3,35.3],[94.8,35.2],[9.8,35.2],[62.3,35.2],[114.8,35.1],[-107.6,35.1],[82.4,35],[-2.6,35],[134.9,35],[-87.6,35],[49.9,34.9],[102.4,34.9],[-120,34.9],[70,34.8],[-100,34.8],[37.5,34.7],[90,34.7],[5.1,34.7],[-79.9,34.6],[57.6,34.6],[110.1,34.6],[-112.4,34.6],[77.6,34.5],[-92.3,34.4],[45.2,34.4],[97.7,34.4],[65.2,34.3],[117.8,34.3],[-104.7,34.2],[85.3,34.2],[0.3,34.1],[-84.7,34.1],[52.8,34.1],[105.4,34.1],[-117.1,34],[72.9,34],[-97.1,33.9],[40.5,33.9],[93,33.9],[8,33.8],[60.5,33.8],[113,33.7],[-109.5,33.7],[80.6,33.7],[-4.4,33.6],[133.1,33.6],[-89.4,33.6],[48.1,33.6],[100.6,33.5],[68.2,33.5],[-101.8,33.4],[35.7,33.4],[88.2,33.3],[3.3,33.3],[-81.7,33.3],[55.8,33.3],[108.3,33.2],[-114.2,33.2],[75.8,33.1],[-94.1,33.1],[43.4,33.1],[95.9,33],[10.9,33],[63.4,32.9],[116,32.9],[-106.5,32.9],[83.5,32.8],[-1.5,32.8],[-86.5,32.8],[51,32.7],[103.6,32.7],[71.1,32.6],[-98.9,32.6],[38.6,32.5],[91.2,32.5],[6.2,32.5],[58.7,32.4],[111.2,32.4],[-111.3,32.4],[78.8,32.3],[-6.2,32.3],[131.3,32.3],[-91.2,32.2],[46.3,32.2],[98.8,32.2],[13.8,32.2],[66.4,32.1],[118.9,32.1],[-103.6,32],[86.4,32],[1.4,32],[-83.5,31.9],[54,31.9],[106.5,31.9],[-116,31.9],[21.5,31.8],[74,31.8],[-95.9,31.7],[41.6,31.7],[94.1,31.7],[9.1,31.6],[61.6,31.6],[114.2,31.6],[-108.3,31.5],[81.7,31.5],[-3.3,31.4],[-88.3,31.4],[49.2,31.4],[101.8,31.4],[69.3,31.3],[-100.7,31.2],[36.8,31.2],[89.4,31.2],[4.4,31.1],[56.9,31.1],[109.4,31],[-113.1,31],[24.4,31],[77,31],[-8,30.9],[-93,30.9],[44.5,30.9],[97,30.9],[12,30.8],[64.6,30.8],[117.1,30.7],[-105.4,30.7],[32.1,30.7],[84.6,30.7],[-0.4,30.6],[-85.3,30.6],[52.2,30.6],[104.7,30.5],[72.2,30.5],[-97.7,30.4],[39.8,30.4],[92.3,30.3],[7.3,30.3],[59.8,30.3],[112.3,30.2],[-110.1,30.2],[27.4,30.2],[79.9,30.2],[-5.1,30.1],[47.4,30.1],[99.9,30],[15,30],[67.5,30],[120,29.9],[-102.5,29.9],[35,29.9],[87.5,29.8],[2.6,29.8],[-82.4,29.8],[55.1,29.8],[107.6,29.7],[-114.9,29.7],[22.6,29.7],[75.1,29.7],[-9.8,29.6],[42.7,29.6],[95.2,29.5],[10.2,29.5],[62.7,29.5],[115.3,29.4],[-107.2,29.4],[30.3,29.4],[82.8,29.4],[-2.2,29.3],[102.9,29.2],[17.9,29.2],[70.4,29.2],[-99.6,29.1],[38,29.1],[90.5,29],[5.5,29],[58,29],[110.5,28.9],[-112,28.9],[25.6,28.9],[78.1,28.9],[-6.9,28.8],[45.6,28.8],[98.1,28.7],[13.2,28.7],[65.7,28.7],[118.2,28.6],[-104.3,28.6],[85.7,28.6],[0.8,28.5],[53.3,28.5],[105.8,28.4],[20.8,28.4],[73.3,28.4],[40.9,28.3],[93.4,28.2],[8.4,28.2],[60.9,28.2],[113.5,28.1],[-109,28.1],[28.5,28.1],[81,28.1],[-4,28],[48.5,28],[101.1,27.9],[16.1,27.9],[68.6,27.9],[-101.4,27.8],[36.1,27.8],[88.7,27.8],[3.7,27.7],[-81.3,27.7],[56.2,27.7],[108.7,27.6],[-113.8,27.6],[23.7,27.6],[76.3,27.6],[-8.7,27.5],[43.8,27.5],[96.3,27.5],[11.3,27.4],[63.9,27.4],[116.4,27.3],[-106.1,27.3],[31.4,27.3],[83.9,27.3],[-1.1,27.2],[104,27.2],[19,27.1],[71.5,27.1],[-98.4,27],[39.1,27],[91.6,27],[6.6,26.9],[59.1,26.9],[111.7,26.9],[26.7,26.8],[79.2,26.8],[-5.8,26.8],[46.7,26.7],[99.3,26.7],[14.3,26.6],[66.8,26.6],[119.3,26.6],[-103.2,26.5],[86.9,26.5],[1.9,26.5],[106.9,26.4],[21.9,26.3],[74.5,26.3],[-10.5,26.3],[42,26.2],[94.5,26.2],[9.5,26.2],[62.1,26.1],[114.6,26.1],[-107.9,26.1],[29.6,26],[82.1,26],[-2.9,26],[49.7,25.9],[102.2,25.9],[17.2,25.9],[69.7,25.8],[-100.2,25.8],[37.3,25.7],[89.8,25.7],[4.8,25.7],[109.8,25.6],[24.9,25.6],[77.4,25.5],[-7.6,25.5],[44.9,25.4],[97.4,25.4],[12.5,25.4],[65,25.3],[117.5,25.3],[-105,25.3],[32.5,25.3],[85,25.2],[0.1,25.2],[105.1,25.1],[20.1,25.1],[72.6,25],[-12.3,25],[40.2,25],[92.7,24.9],[7.7,24.9],[112.8,24.8],[27.8,24.8],[80.3,24.7],[-4.7,24.7],[47.8,24.7],[100.4,24.6],[15.4,24.6],[67.9,24.6],[-102.1,24.5],[88,24.5],[3,24.4],[55.5,24.4],[108,24.3],[23.1,24.3],[75.6,24.3],[-9.4,24.2],[43.1,24.2],[95.6,24.2],[10.7,24.1],[115.7,24],[-106.8,24],[30.7,24],[83.2,24],[-1.7,23.9],[50.8,23.9],[103.3,23.9],[18.3,23.8],[70.8,23.8],[-14.1,23.8],[-99.1,23.7],[90.9,23.7],[5.9,23.7],[58.4,23.6],[111,23.6],[26,23.5],[78.5,23.5],[-6.5,23.5],[46,23.4],[98.6,23.4],[13.6,23.4],[-103.9,23.3],[33.6,23.3],[86.2,23.2],[1.2,23.2],[53.7,23.1],[106.2,23.1],[21.2,23.1],[73.8,23],[-11.2,23],[41.3,23],[93.8,22.9],[8.8,22.9],[113.9,22.8],[28.9,22.8],[81.4,22.7],[-3.6,22.7],[49,22.7],[101.5,22.6],[16.5,22.6],[-16,22.5],[-100.9,22.5],[89.1,22.5],[4.1,22.4],[-80.9,22.4],[56.6,22.4],[109.2,22.3],[24.2,22.3],[76.7,22.3],[-8.3,22.2],[44.2,22.2],[96.8,22.2],[11.8,22.1],[31.8,22],[84.4,22],[-0.6,22],[51.9,21.9],[104.4,21.9],[19.4,21.8],[72,21.8],[-13,21.8],[-98,21.8],[39.5,21.7],[92,21.7],[7,21.7],[-78,21.6],[27.1,21.6],[79.6,21.5],[-5.4,21.5],[47.2,21.5],[99.7,21.4],[14.7,21.4],[-102.7,21.3],[34.8,21.3],[2.3,21.2],[54.8,21.2],[107.3,21.1],[22.4,21.1],[74.9,21.1],[-10.1,21],[42.4,21],[94.9,20.9],[10,20.9],[30,20.8],[82.5,20.8],[-2.4,20.7],[-87.4,20.7],[50.1,20.7],[102.6,20.7],[17.6,20.6],[-14.8,20.6],[-99.8,20.5],[5.2,20.5],[57.7,20.4],[110.3,20.4],[25.3,20.3],[77.8,20.3],[-7.2,20.3],[45.3,20.2],[97.9,20.2],[12.9,20.2],[-104.6,20.1],[33,20.1],[85.5,20],[0.5,20],[53,20],[105.5,19.9],[20.6,19.9],[73.1,19.8],[-11.9,19.8],[-96.9,19.8],[8.2,19.7],[28.2,19.6],[80.7,19.6],[-4.2,19.5],[-89.2,19.5],[48.3,19.5],[100.8,19.5],[15.8,19.4],[-101.6,19.3],[35.9,19.3],[3.4,19.3],[55.9,19.2],[23.5,19.1],[76,19.1],[-9,19.1],[43.5,19],[96.1,19],[11.1,19],[31.1,18.9],[83.7,18.8],[-1.3,18.8],[51.2,18.8],[103.7,18.7],[18.7,18.7],[-13.7,18.6],[-98.7,18.6],[6.3,18.5],[26.4,18.4],[78.9,18.4],[-6.1,18.3],[-91,18.3],[46.5,18.3],[99,18.3],[14,18.2],[34.1,18.1],[1.6,18.1],[54.1,18],[21.7,17.9],[74.2,17.9],[-10.8,17.9],[-95.8,17.9],[9.3,17.8],[29.3,17.7],[81.9,17.6],[-3.1,17.6],[49.4,17.6],[101.9,17.5],[16.9,17.5],[-15.5,17.4],[122,17.4],[-100.5,17.4],[37,17.4],[4.5,17.3],[24.6,17.2],[77.1,17.2],[-7.9,17.1],[-92.8,17.1],[44.7,17.1],[97.2,17.1],[12.2,17],[32.3,16.9],[-0.2,16.9],[52.3,16.8],[104.8,16.8],[19.9,16.8],[-12.6,16.7],[-97.6,16.7],[7.5,16.6],[27.5,16.5],[80,16.4],[-4.9,16.4],[-89.9,16.4],[47.6,16.4],[100.1,16.3],[15.1,16.3],[35.2,16.2],[2.7,16.1],[107.8,16.1],[22.8,16],[75.3,16],[-9.7,16],[42.8,15.9],[95.4,15.9],[10.4,15.9],[30.5,15.8],[-2,15.7],[-87,15.7],[50.5,15.6],[103,15.6],[18.1,15.6],[-14.4,15.5],[38.1,15.5],[5.7,15.4],[25.7,15.3],[78.2,15.3],[-6.7,15.2],[-91.7,15.2],[45.8,15.2],[98.3,15.2],[13.3,15.1],[33.4,15],[0.9,15],[-84.1,14.9],[106,14.9],[21,14.9],[-11.5,14.8],[8.6,14.7],[28.6,14.6],[-3.8,14.5],[-88.8,14.5],[48.7,14.5],[101.2,14.4],[16.2,14.4],[-16.2,14.3],[121.3,14.3],[36.3,14.3],[3.8,14.2],[108.9,14.2],[23.9,14.1],[76.4,14.1],[-8.6,14.1],[44,14],[11.5,14],[31.6,13.9],[-0.9,13.8],[-85.9,13.8],[104.2,13.7],[19.2,13.7],[-13.3,13.6],[124.2,13.6],[39.2,13.6],[6.8,13.5],[26.8,13.4],[79.4,13.4],[-5.6,13.3],[99.4,13.3],[14.4,13.2],[34.5,13.1],[2,13.1],[107.1,13],[22.1,13],[-10.4,12.9],[42.2,12.9],[9.7,12.8],[29.8,12.7],[-2.7,12.6],[102.3,12.5],[17.4,12.5],[-15.1,12.5],[37.4,12.4],[5,12.4],[25,12.2],[77.5,12.2],[-7.4,12.2],[12.6,12.1],[32.7,12],[0.2,11.9],[-84.8,11.9],[105.3,11.8],[20.3,11.8],[-12.2,11.7],[125.3,11.7],[40.3,11.7],[7.9,11.6],[28,11.5],[-4.5,11.5],[15.6,11.4],[-69.4,11.3],[35.6,11.3],[3.2,11.2],[108.2,11.1],[23.2,11.1],[-9.2,11],[43.3,11],[10.8,10.9],[-74.2,10.9],[30.9,10.8],[-1.6,10.8],[50.9,10.7],[18.5,10.6],[-66.5,10.6],[-14,10.6],[38.5,10.5],[6.1,10.5],[26.1,10.4],[78.7,10.3],[-6.3,10.3],[46.2,10.3],[98.7,10.2],[13.7,10.2],[-71.2,10.2],[33.8,10.1],[1.3,10],[-83.6,10],[21.4,9.9],[-63.6,9.9],[-11.1,9.9],[41.5,9.8],[9,9.8],[29.1,9.7],[-3.4,9.6],[49.1,9.6],[16.7,9.5],[-68.3,9.5],[36.7,9.4],[4.3,9.3],[24.3,9.2],[76.9,9.2],[-8.1,9.2],[44.4,9.1],[11.9,9.1],[-73.1,9],[32,9],[-0.5,8.9],[19.6,8.8],[-65.4,8.8],[-12.9,8.7],[39.7,8.7],[7.2,8.6],[-77.8,8.6],[27.3,8.5],[-5.2,8.5],[47.3,8.4],[99.8,8.4],[14.9,8.4],[-70.1,8.3],[34.9,8.2],[2.5,8.2],[22.5,8.1],[-62.5,8.1],[-9.9,8],[42.6,8],[10.1,7.9],[-74.9,7.9],[30.2,7.8],[-2.3,7.7],[17.8,7.6],[-67.2,7.6],[122.8,7.6],[37.8,7.5],[5.4,7.5],[25.5,7.4],[-59.5,7.3],[-7,7.3],[45.5,7.3],[13.1,7.2],[-71.9,7.2],[33.1,7.1],[0.7,7],[20.7,6.9],[158.2,6.9],[-64.3,6.9],[40.8,6.8],[8.3,6.8],[-76.7,6.7],[28.4,6.7],[80.9,6.6],[-4.1,6.6],[48.4,6.6],[101,6.5],[16,6.5],[-69,6.5],[36,6.4],[23.6,6.2],[-61.3,6.2],[-8.8,6.2],[43.7,6.1],[11.2,6.1],[-73.7,6],[116.3,6],[31.3,6],[-1.2,5.9],[18.9,5.8],[-66.1,5.8],[39,5.7],[6.5,5.6],[26.6,5.5],[-58.4,5.5],[-5.9,5.5],[46.6,5.4],[14.2,5.4],[-70.8,5.3],[119.2,5.3],[34.2,5.3],[21.8,5.1],[-63.2,5.1],[41.9,5],[9.4,4.9],[-75.6,4.9],[29.5,4.8],[-55.5,4.8],[102.1,4.7],[17.1,4.7],[-67.9,4.6],[37.2,4.6],[24.8,4.4],[-60.2,4.4],[44.8,4.3],[97.3,4.3],[12.4,4.2],[-72.6,4.2],[117.4,4.1],[32.4,4.1],[-52.6,4.1],[20,4],[-65,3.9],[40.1,3.9],[27.7,3.7],[-57.3,3.7],[15.3,3.5],[-69.7,3.5],[35.3,3.4],[23,3.3],[-62,3.2],[43,3.2],[10.6,3.1],[-74.4,3.1],[115.6,3],[30.6,3],[-54.4,3],[103.2,2.8],[18.2,2.8],[-66.8,2.8],[38.3,2.7],[25.9,2.6],[-59.1,2.5],[45.9,2.5],[98.5,2.4],[13.5,2.4],[-71.5,2.4],[33.5,2.3],[-51.4,2.3],[21.1,2.1],[-63.8,2.1],[41.2,2],[-76.2,1.9],[113.8,1.9],[28.8,1.9],[-56.2,1.8],[101.4,1.7],[16.4,1.7],[-68.6,1.7],[36.5,1.6],[24.1,1.4],[-60.9,1.4],[44.1,1.3],[11.7,1.3],[-73.3,1.2],[116.7,1.2],[31.7,1.2],[-53.3,1.1],[19.3,1],[-65.7,1],[124.4,0.9],[39.4,0.9],[-78.1,0.8],[112,0.7],[27,0.7],[-58,0.7],[99.6,0.6],[14.6,0.6],[-70.4,0.5],[34.7,0.5],[22.3,0.3],[-62.7,0.3],[42.3,0.2],[9.9,0.1],[-75.1,0.1],[114.9,0],[29.9,0],[-55.1,0],[102.5,-0.1],[17.5,-0.1],[-67.5,-0.2],[37.6,-0.2],[-79.9,-0.3],[110.2,-0.4],[25.2,-0.4],[-59.8,-0.4],[12.8,-0.6],[-72.2,-0.6],[32.8,-0.7],[-52.1,-0.7],[20.5,-0.8],[-64.5,-0.9],[40.5,-0.9],[-76.9,-1],[113.1,-1.1],[28.1,-1.1],[-56.9,-1.1],[133.2,-1.2],[100.7,-1.3],[15.7,-1.3],[-69.3,-1.3],[35.8,-1.4],[-49.2,-1.4],[23.4,-1.5],[-61.6,-1.6],[11,-1.7],[-74,-1.7],[116,-1.8],[31,-1.8],[-53.9,-1.8],[103.6,-2],[18.6,-2],[-66.3,-2],[38.7,-2.1],[-46.3,-2.1],[-78.7,-2.2],[111.3,-2.2],[26.3,-2.2],[-58.7,-2.3],[13.9,-2.4],[-71.1,-2.4],[34,-2.5],[-51,-2.5],[139,-2.6],[106.6,-2.7],[21.6,-2.7],[-63.4,-2.7],[-43.4,-2.8],[-75.8,-2.9],[114.2,-2.9],[29.2,-2.9],[-55.8,-3],[134.3,-3],[101.8,-3.1],[16.8,-3.1],[-68.2,-3.1],[121.9,-3.2],[36.9,-3.2],[-48.1,-3.2],[141.9,-3.3],[24.5,-3.4],[-60.5,-3.4],[-40.4,-3.5],[12.1,-3.5],[-72.9,-3.6],[32.2,-3.7],[-52.8,-3.7],[137.2,-3.7],[104.7,-3.8],[19.8,-3.8],[-65.2,-3.8],[-45.2,-3.9],[-77.6,-4],[27.4,-4.1],[-57.6,-4.1],[15,-4.3],[-70,-4.3],[120.1,-4.3],[35.1,-4.4],[-49.9,-4.4],[140.1,-4.4],[22.7,-4.5],[-62.3,-4.5],[-42.2,-4.6],[-74.7,-4.7],[30.3,-4.8],[-54.6,-4.8],[18,-5],[-67,-5],[38,-5.1],[-47,-5.1],[143.1,-5.1],[-79.4,-5.1],[25.6,-5.2],[-59.4,-5.2],[-39.3,-5.3],[13.2,-5.4],[-71.8,-5.4],[33.3,-5.5],[-51.7,-5.5],[138.3,-5.6],[20.9,-5.7],[-64.1,-5.7],[-44,-5.8],[146,-5.8],[-76.5,-5.8],[28.5,-5.9],[-56.4,-6],[-36.4,-6.1],[16.1,-6.1],[-68.8,-6.1],[36.2,-6.2],[-48.8,-6.2],[141.3,-6.3],[23.8,-6.4],[-61.2,-6.4],[-41.1,-6.5],[-73.6,-6.6],[31.5,-6.6],[-53.5,-6.7],[19.1,-6.8],[156.6,-6.8],[-65.9,-6.8],[39.1,-6.9],[-45.9,-6.9],[144.2,-7],[-78.3,-7],[111.7,-7],[26.7,-7.1],[-58.3,-7.1],[131.8,-7.1],[-38.2,-7.2],[14.3,-7.2],[-70.7,-7.3],[34.4,-7.3],[-50.6,-7.4],[139.4,-7.4],[22,-7.5],[-63,-7.5],[-42.9,-7.6],[147.1,-7.7],[-75.4,-7.7],[29.7,-7.8],[-55.3,-7.8],[-35.3,-7.9],[17.3,-7.9],[-67.7,-8],[37.3,-8],[-47.7,-8.1],[142.4,-8.1],[24.9,-8.2],[-60.1,-8.2],[-40,-8.3],[-72.5,-8.4],[117.6,-8.5],[32.6,-8.5],[-52.4,-8.5],[20.2,-8.6],[-64.8,-8.7],[125.2,-8.7],[-44.7,-8.8],[-77.2,-8.8],[27.8,-8.9],[-57.1,-8.9],[-37.1,-9],[15.5,-9.1],[153,-9.1],[-69.5,-9.1],[35.5,-9.2],[-49.5,-9.2],[23.1,-9.4],[-61.9,-9.4],[-41.8,-9.5],[148.2,-9.5],[-74.3,-9.5],[30.8,-9.6],[-54.2,-9.7],[18.4,-9.8],[-66.6,-9.8],[38.4,-9.9],[-46.5,-9.9],[26,-10.1],[-58.9,-10.1],[-38.9,-10.2],[13.6,-10.2],[-71.3,-10.3],[33.7,-10.3],[-51.3,-10.4],[21.3,-10.5],[-63.7,-10.5],[-43.6,-10.6],[-76.1,-10.7],[29,-10.8],[-56,-10.8],[16.6,-10.9],[-68.4,-11],[36.6,-11.1],[-48.4,-11.1],[24.2,-11.2],[-60.8,-11.2],[-40.7,-11.3],[-73.2,-11.4],[31.9,-11.5],[-53.1,-11.5],[19.5,-11.7],[-65.5,-11.7],[39.6,-11.8],[-45.4,-11.8],[27.2,-11.9],[-57.8,-12],[-37.8,-12.1],[14.8,-12.1],[-70.2,-12.1],[34.8,-12.2],[-50.2,-12.2],[22.4,-12.4],[-62.6,-12.4],[-42.5,-12.5],[-75,-12.6],[30.1,-12.7],[-54.9,-12.7],[135.1,-12.7],[17.7,-12.8],[-67.3,-12.8],[37.7,-12.9],[-47.2,-13],[142.8,-13],[25.3,-13.1],[-59.6,-13.1],[130.4,-13.2],[-39.6,-13.2],[13,-13.3],[-72,-13.3],[33,-13.4],[-52,-13.4],[20.6,-13.5],[-64.4,-13.6],[-44.3,-13.7],[28.3,-13.8],[-56.7,-13.8],[133.3,-13.9],[48.3,-13.9],[15.9,-14],[-69.1,-14],[35.9,-14.1],[-49,-14.1],[23.5,-14.3],[-61.4,-14.3],[-41.4,-14.4],[-73.8,-14.5],[31.2,-14.5],[-53.8,-14.6],[18.8,-14.7],[-66.2,-14.7],[38.9,-14.8],[-46.1,-14.8],[143.9,-14.9],[26.5,-15],[-58.5,-15],[131.5,-15.1],[14.1,-15.2],[-70.9,-15.2],[34.1,-15.3],[-50.9,-15.3],[21.7,-15.4],[-63.3,-15.5],[126.8,-15.5],[-43.2,-15.6],[29.4,-15.7],[-55.6,-15.7],[134.4,-15.8],[49.5,-15.8],[17,-15.9],[-68,-15.9],[37.1,-16],[-47.9,-16],[142.1,-16.1],[24.7,-16.2],[-60.3,-16.2],[129.7,-16.2],[44.7,-16.3],[-40.3,-16.3],[12.3,-16.3],[-72.7,-16.4],[32.3,-16.4],[-52.7,-16.5],[137.4,-16.5],[19.9,-16.6],[-65.1,-16.6],[125,-16.7],[-45,-16.7],[145,-16.8],[27.6,-16.9],[-57.4,-16.9],[132.6,-17],[47.6,-17],[15.2,-17.1],[-69.8,-17.1],[35.2,-17.2],[-49.7,-17.2],[22.8,-17.3],[-62.1,-17.4],[127.9,-17.4],[-42.1,-17.5],[30.5,-17.6],[-54.5,-17.7],[135.6,-17.7],[18.1,-17.8],[-66.9,-17.8],[123.2,-17.9],[-46.8,-17.9],[143.2,-18],[25.8,-18.1],[-59.2,-18.1],[130.8,-18.2],[45.8,-18.2],[13.4,-18.3],[33.4,-18.4],[-51.5,-18.4],[138.5,-18.4],[21,-18.5],[-63.9,-18.6],[126.1,-18.6],[-43.9,-18.7],[146.1,-18.7],[28.7,-18.8],[-56.3,-18.8],[133.8,-18.9],[48.8,-18.9],[16.3,-19],[-68.7,-19],[-48.6,-19.1],[141.4,-19.2],[24,-19.3],[-61,-19.3],[129,-19.4],[-41,-19.4],[31.6,-19.6],[-53.4,-19.6],[136.7,-19.6],[19.2,-19.7],[-65.8,-19.8],[124.3,-19.8],[-45.7,-19.9],[144.3,-19.9],[26.9,-20],[-58.1,-20],[131.9,-20.1],[47,-20.1],[14.5,-20.2],[119.5,-20.3],[34.6,-20.3],[-50.4,-20.3],[139.6,-20.4],[22.2,-20.5],[-62.8,-20.5],[127.2,-20.6],[-42.8,-20.6],[147.3,-20.7],[29.8,-20.8],[-55.2,-20.8],[134.9,-20.9],[17.4,-20.9],[-67.6,-21],[122.5,-21],[-47.5,-21.1],[142.5,-21.1],[25.1,-21.2],[-59.9,-21.3],[130.1,-21.3],[45.1,-21.3],[117.7,-21.5],[32.7,-21.5],[-52.2,-21.5],[137.8,-21.6],[20.3,-21.7],[-64.6,-21.7],[125.4,-21.8],[-44.6,-21.8],[145.5,-21.9],[28,-22],[-57,-22],[133.1,-22.1],[15.6,-22.2],[-69.4,-22.2],[120.7,-22.2],[-49.3,-22.3],[140.7,-22.4],[23.3,-22.5],[-61.7,-22.5],[128.3,-22.5],[43.3,-22.6],[148.4,-22.6],[115.9,-22.7],[30.9,-22.7],[-54,-22.8],[136,-22.8],[18.5,-22.9],[-66.4,-23],[123.6,-23],[-46.4,-23.1],[143.6,-23.1],[26.2,-23.2],[-58.8,-23.2],[131.3,-23.3],[46.3,-23.3],[118.9,-23.5],[33.9,-23.5],[-51.1,-23.5],[138.9,-23.6],[21.5,-23.7],[-63.5,-23.7],[126.5,-23.8],[146.6,-23.9],[114.1,-23.9],[29.1,-24],[-55.9,-24],[134.2,-24.1],[16.7,-24.2],[-68.3,-24.2],[121.8,-24.2],[-48.2,-24.3],[141.8,-24.4],[24.4,-24.5],[-60.6,-24.5],[129.4,-24.5],[44.5,-24.6],[149.5,-24.6],[117,-24.7],[32.1,-24.7],[-52.9,-24.8],[137.1,-24.8],[19.7,-24.9],[-65.3,-25],[124.7,-25],[144.8,-25.1],[27.3,-25.2],[-57.7,-25.3],[132.4,-25.3],[14.9,-25.4],[152.4,-25.4],[-70.1,-25.4],[120,-25.5],[-50,-25.5],[140,-25.6],[22.6,-25.7],[-62.4,-25.7],[127.6,-25.8],[147.7,-25.9],[115.2,-26],[30.2,-26],[-54.7,-26],[135.3,-26.1],[17.8,-26.2],[-67.1,-26.2],[122.9,-26.3],[143,-26.4],[25.5,-26.5],[-59.5,-26.5],[130.6,-26.6],[150.6,-26.7],[118.2,-26.8],[-51.8,-26.8],[138.2,-26.9],[20.8,-27],[-64.2,-27],[125.8,-27.1],[145.9,-27.2],[28.4,-27.3],[-56.5,-27.3],[133.5,-27.4],[16,-27.5],[-68.9,-27.5],[121.1,-27.5],[-48.9,-27.6],[141.1,-27.7],[23.7,-27.8],[-61.3,-27.8],[128.8,-27.8],[148.8,-28],[116.4,-28],[31.4,-28.1],[-53.6,-28.1],[136.4,-28.1],[19,-28.2],[-66,-28.3],[124,-28.3],[144.1,-28.4],[26.6,-28.6],[-58.4,-28.6],[131.7,-28.6],[151.7,-28.8],[-70.8,-28.8],[119.3,-28.8],[-50.7,-28.9],[139.3,-28.9],[21.9,-29],[-63.1,-29.1],[126.9,-29.1],[147,-29.2],[29.6,-29.4],[-55.4,-29.4],[134.6,-29.4],[17.2,-29.5],[-67.8,-29.6],[122.2,-29.6],[142.3,-29.7],[24.8,-29.8],[-60.2,-29.9],[129.9,-29.9],[149.9,-30.1],[117.5,-30.1],[-52.5,-30.2],[137.5,-30.2],[20.1,-30.3],[-64.9,-30.4],[125.1,-30.4],[145.2,-30.6],[27.7,-30.7],[-57.2,-30.7],[132.8,-30.7],[152.9,-30.9],[-69.6,-30.9],[120.4,-30.9],[140.5,-31.1],[23,-31.2],[-62,-31.2],[128.1,-31.3],[148.1,-31.4],[115.7,-31.4],[-54.3,-31.5],[135.7,-31.6],[18.3,-31.7],[-66.7,-31.7],[123.3,-31.8],[143.4,-31.9],[25.9,-32],[-59,-32],[151,-32.2],[-71.4,-32.2],[118.6,-32.3],[138.6,-32.4],[21.2,-32.5],[-63.8,-32.5],[146.3,-32.7],[-56.1,-32.8],[-68.5,-33],[121.5,-33.1],[141.6,-33.2],[24.1,-33.3],[-60.9,-33.4],[149.2,-33.5],[116.8,-33.6],[136.8,-33.7],[19.4,-33.9],[-65.6,-33.9],[144.5,-34.1],[-57.9,-34.2],[-70.3,-34.4],[139.8,-34.6],[-62.7,-34.7],[147.4,-34.9],[-67.4,-35.3],[142.7,-35.4],[-59.7,-35.6],[-72.1,-35.8],[-64.5,-36.1],[145.6,-36.3],[-56.8,-36.5],[-69.2,-36.7],[140.9,-36.9],[-61.5,-37],[148.5,-37.2],[-66.3,-37.5],[143.8,-37.7],[-58.6,-37.9],[-71,-38.1],[-63.4,-38.4],[146.7,-38.6],[-68.1,-39],[174.5,-39.1],[-72.8,-39.5],[-65.2,-39.9],[-69.9,-40.5],[172.7,-40.6],[147.9,-41],[-67,-41.4],[-71.7,-42],[-64,-42.3],[146,-42.5],[-68.8,-42.9],[-65.9,-43.9],[-70.6,-44.5],[167.2,-45.2],[-67.7,-45.5],[-72.4,-46.1],[-69.5,-47.1],[-74.2,-47.7],[-66.5,-48.1],[-71.3,-48.8],[-68.4,-49.9],[-73.1,-50.6],[-70.2,-51.7],[-72,-53.5],[-69,-54.7]]};var Tn=Math.PI/180,mn=[18.675555,45.560846],as=4,Vo=Math.cos(45*Tn),Wo=as*180/Math.PI,jo=0.00003629632318246162,Oi=0.00003598934715324264,G3=7,xr=1+Math.log(1/(Oi*G3))/Math.log(500),os=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),ha=(e,t,i)=>e+(t-e)*i,vt=(e,t,i)=>{let s=os((i-e)/(t-e));return s*s*(3-2*s)};var _r=(e,t,i,s)=>e+(t-e)*(1-Math.exp(-i*s));function _i(e,t,i=1,s=new I){let r=t*Tn,a=e*Tn;return s.set(i*Math.cos(r)*Math.sin(a),i*Math.sin(r),i*Math.cos(r)*Math.cos(a))}function Bi(e,t){return[(e-mn[0])*as*Vo,-(t-mn[1])*as]}function da(e){return e<1?Math.pow(22.5,e-1):Math.pow(500,e-1)}function Yn(e=1){let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Ps={value:0},yr={value:new I(0,1,0)},Is={value:new ze(-0.12,0.38)},vr=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),Mr=`
uniform float uBend;
vec3 sphereNormal(vec2 xz){
  float lat = (${vr(mn[1])} - xz.y / ${vr(as)}) * 0.017453292519943295;
  float dl = xz.x / ${vr(as*Vo)} * 0.017453292519943295;
  float la0 = ${vr(mn[1]*Tn)};
  float cl = cos(lat), sl = sin(lat), cd = cos(dl);
  return vec3(cl * sin(dl), sl * sin(la0) + cl * cd * cos(la0), cl * cd * sin(la0) - sl * cos(la0));
}
vec3 bendPos(vec3 p){
  if (uBend < 1e-4) return p;
  vec3 e = sphereNormal(p.xz);
  return mix(p, e * (${vr(Wo)} + p.y) - vec3(0.0, ${vr(Wo)}, 0.0), uBend);
}
`,Ho=512,Go=256;function hf(){let e=new Uint8Array(Ho*Go*4),t=new gi(e,Ho,Go,Gn,_n);t.colorSpace=wn,t.minFilter=Wt,t.magFilter=Wt,t.generateMipmaps=false,t.wrapS=ni,t.needsUpdate=true;function i(r){let a=Ho,o=Go,c;try{let A=document.createElement("canvas");A.width=a,A.height=o;let m=A.getContext("2d",{willReadFrequently:true});m.imageSmoothingEnabled=true,m.imageSmoothingQuality="high",m.drawImage(r,0,0,a,o),c=m.getImageData(0,0,a,o).data}catch{return}let l=new Float32Array(a*o);for(let A=0;A<a*o;A++)l[A]=c[A*4]/255;let u=new Float32Array(a*o),h=(A,m,w)=>{for(let C=0;C<o;C++){let g=(90-(C+0.5)*180/o)*Tn,M=Math.min(a>>2,Math.max(1,Math.round(w/Math.max(Math.cos(g),0.18)))),S=C*a,P=0;for(let _=-M;_<=M;_++)P+=A[S+(_+a)%a];for(let _=0;_<a;_++)m[S+_]=P/(2*M+1),P+=A[S+(_+M+1)%a]-A[S+(_-M+a)%a]}},f=(A,m,w)=>{for(let C=0;C<a;C++){let g=0,M=0;for(let S=0;S<=Math.min(o-1,w);S++)g+=A[S*a+C],M++;for(let S=0;S<o;S++){if(m[S*a+C]=g/M,S+w+1<o)g+=A[(S+w+1)*a+C],M++;if(S-w>=0)g-=A[(S-w)*a+C],M--}}},d=(A)=>{let m=Float32Array.from(l);for(let w=0;w<2;w++)h(m,u,A),f(u,m,Math.max(1,Math.round(A)));return m},p=d(0.7),b=d(2),y=d(8);for(let A=0;A<o;A++){let m=(o-1-A)*a;for(let w=0;w<a;w++){let C=A*a+w,g=(m+w)*4;e[g]=Math.round(b[C]*255),e[g+1]=Math.round(y[C]*255),e[g+2]=Math.round(p[C]*255)}}t.needsUpdate=true}function s(r){let a=Ho,o=Go,c;try{let l=document.createElement("canvas");l.width=a,l.height=o;let u=l.getContext("2d",{willReadFrequently:true});u.imageSmoothingEnabled=true,u.imageSmoothingQuality="high",u.drawImage(r,0,0,a,o),c=u.getImageData(0,0,a,o).data}catch{return}for(let l=0;l<o;l++){let u=(o-1-l)*a;for(let h=0;h<a;h++){let f=Math.min(1,c[(l*a+h)*4]/255*2.2);e[(u+h)*4+3]=Math.round(Math.sqrt(f)*255)}}t.needsUpdate=true}return{texture:t,fill:i,fillLights:s}}var Sr={value:0},qo=`
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
`;function nn({count:e,color:t="#7fa2ff",core:i="#ffffff",size:s=1,additive:r=true,depthTest:a=true,bend:o=false,nightOnly:c=false,tint:l=null}){let u=new ct,h=new Float32Array(e*3),f=new Float32Array(e).fill(1),d=new Float32Array(e).fill(1),p=new Float32Array(e),b=l?new Float32Array(e):null;if(u.setAttribute("position",new pt(h,3)),u.setAttribute("aAlpha",new pt(f,1)),u.setAttribute("aSize",new pt(d,1)),u.setAttribute("aWake",new pt(p,1)),b)u.setAttribute("aTint",new pt(b,1));let y={uColor:{value:new He(t)},uCore:{value:new He(i)},uColor2:{value:new He(l?.color||t)},uCore2:{value:new He(l?.core||i)},uSize:{value:s},uPR:{value:1},uOpacity:{value:1},uMax:{value:40},uMin:{value:0},uFall:{value:2},uWake:{value:1},uTime:{value:0},uFlick:{value:0},uBend:Ps,uSunMap:yr,uDayEdge:Is},A=new wt({uniforms:y,transparent:true,depthWrite:false,depthTest:a,blending:r?Zt:di,vertexShader:`
      attribute float aAlpha; attribute float aSize; attribute float aWake;
      ${b?"attribute float aTint; varying float vT;":""}
      uniform float uSize; uniform float uPR; uniform float uMax; uniform float uMin; uniform float uFall; uniform float uWake; uniform float uTime; uniform float uFlick;
      varying float vA; varying float vPx;
      ${o||c?Mr:""}
      ${c?"uniform vec3 uSunMap; uniform vec2 uDayEdge;":""}
      void main(){
        ${b?"vT = aTint;":""}
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
      ${b?"varying float vT;":""}
      void main(){
        vec3 cA = ${b?"mix(uColor, uColor2, vT)":"uColor"};
        vec3 cB = ${b?"mix(uCore, uCore2, vT)":"uCore"};
        if (vA < 0.004) discard;
        float d = length(gl_PointCoord - 0.5);
        // točka od 1–3 px: profil sjaja bi se uzorkovao izvan središta (svjetlo bi gotovo nestalo) — tada je pun disk
        float k = clamp((vPx - 1.5) / 3.0, 0.0, 1.0);
        if (d > mix(0.75, 0.5, k)) discard;
        float halo = pow(max(1.0 - d * 2.0, 0.0), 2.0);
        float core = smoothstep(0.18, 0.0, d);
        float prof = mix(0.85, halo * 0.7 + core, k);
        gl_FragColor = vec4(mix(cA, cB, mix(0.35, core, k)), prof * vA * uOpacity);
      }`}),m=new Qi(u,A);return m.frustumCulled=false,{points:m,pos:h,alpha:f,size:d,wake:p,tint:b,uniforms:y,geometry:u,material:A}}function Xo(e="#8aa6ff",t=1,i=false){return new jn({color:e,transparent:true,opacity:t,depthWrite:false,blending:i?Zt:di})}var df=1.032;function ff({geo:e,lite:t,landUrl:i,lightsUrl:s}){let r=new Ht;r.name="planet";let a=new Ht;r.add(a);let o=mn[1]*Tn,c=mn[0]*Tn,l=_i(mn[0],mn[1]),u=new I(-Math.sin(o)*Math.sin(c),Math.cos(o),-Math.sin(o)*Math.cos(c)).normalize(),h=new I().crossVectors(u,l).normalize(),f=new dt().makeBasis(h,l,u),d=new dt().makeBasis(new I(1,0,0),new I(0,1,0),new I(0,0,-1));r.quaternion.setFromRotationMatrix(new dt().multiplyMatrices(d,f.clone().transpose()));let p=hf(),b=new Ui().load(i,(G)=>p.fill(G.image));b.colorSpace=wn,b.format=mi,b.minFilter=Wt,b.generateMipmaps=false,b.wrapS=ni;let y=new Ui().load(s,(G)=>p.fillLights(G.image));y.colorSpace=wn,y.format=mi,y.minFilter=Wt,y.generateMipmaps=false,y.wrapS=ni;let A={uLand:{value:b},uField:{value:p.texture},uLights:{value:y},uCivic:Sr,uSun:{value:new I(0.78,0.46,-0.95).normalize()},uTime:{value:0},uAlpha:{value:1},uDots:{value:1},uNight:{value:1}},m=new wt({uniforms:A,transparent:true,vertexShader:`
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
      ${qo}
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
      }`}),w=new Ft(new fr(1,t?96:160,t?64:112),m);w.renderOrder=0,a.add(w);let C={uSun:A.uSun,uAlpha:{value:1}},g=new Ft(new fr(df,t?72:112,t?48:72),new wt({uniforms:C,side:ui,transparent:true,depthWrite:false,blending:Zt,vertexShader:`
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
        }`}));g.renderOrder=1,r.add(g);let M=[],S=new I,P=new I,_=(G,B)=>{for(let V of G)for(let te=0;te<V.length-1;te++)_i(V[te][0],V[te][1],B,S),_i(V[te+1][0],V[te+1][1],B,P),M.push(S.x,S.y,S.z,P.x,P.y,P.z)};e.europe.forEach((G)=>_(G.rings,1.0012)),_(e.croatia,1.0016);let T=new ct().setAttribute("position",new it(M,3)),F=Xo("#5b7bd8",0.3,true);a.add(new en(T,F));let L=_i(mn[0],mn[1]),k=nn({count:1,color:"#ffb23f",core:"#fff3d6",size:0.05});return L.clone().multiplyScalar(1.004).toArray(k.pos,0),k.uniforms.uMin.value=4,a.add(k.points),{group:r,spin:a,sun:A.uSun.value,land:b,lights:y,field:p.texture,update(G){if(r.visible=G.alpha>0.002,!r.visible)return;a.rotation.y=G.spin,A.uTime.value=G.time,A.uAlpha.value=G.alpha,A.uNight.value=1-G.dive,m.depthWrite=G.alpha>0.5,A.uDots.value=0.7+0.3*G.net,C.uAlpha.value=G.alpha*(1-G.dive*0.85),F.opacity=G.alpha*(0.12+0.3*G.dive+0.1*G.net)*(1-G.finale*0.5),k.uniforms.uPR.value=G.pr,k.uniforms.uOpacity.value=G.alpha*(0.35+0.65*Math.max(G.finale,G.net*0.6)),k.size[0]=(1+G.finale*1.8)*(0.85+0.15*Math.sin(G.time*2.2)),k.geometry.attributes.aSize.needsUpdate=true},osijekWorld(G=new I){return G.copy(L).multiplyScalar(1.02).applyMatrix4(a.matrixWorld)},dispose(){w.geometry.dispose(),m.dispose(),b.dispose(),y.dispose(),p.texture.dispose(),g.geometry.dispose(),g.material.dispose(),T.dispose(),F.dispose(),k.geometry.dispose(),k.material.dispose()}}}var pf=`
  attribute vec3 aA; attribute vec3 aB; attribute vec2 aTH; attribute vec4 aLife; attribute vec3 aPulse;
  uniform float uTime;
  vec3 arcPos(float t){
    float d = clamp(dot(aA, aB), -1.0, 1.0);
    float th = acos(d);
    vec3 p = th < 1e-4 ? aA : (sin((1.0 - t) * th) * aA + sin(t * th) * aB) / sin(th);
    return normalize(p) * (1.0 + aTH.y * sin(3.14159265 * t));
  }
`;function mf({geo:e,lite:t}){let i=Yn(4242),s=t?72:160,r=t?26:40,a=[_i(mn[0],mn[1])];e.capitals.forEach(([,K,he])=>a.push(_i(K,he))),e.cities.slice(1).forEach(([,K,he])=>a.push(_i(K,he)));let o=t?2:1;for(let K=0;K<e.nodes.length;K+=o)a.push(_i(e.nodes[K][0],e.nodes[K][1]));let c=a.map((K,he)=>he).filter((K)=>a[K].angleTo(a[0])<0.42),l=r*2,u=s*l,h=new Float32Array(u*3),f=new Float32Array(u*3),d=new Float32Array(u*2),p=new Float32Array(u*4),b=new Float32Array(u*3);for(let K=0;K<s;K++)for(let he=0;he<r;he++){let pe=K*l+he*2;d[pe*2]=he/r,d[(pe+1)*2]=(he+1)/r}let y=new ct,A=(K,he)=>new pt(K,he).setUsage(El),m={aA:A(h,3),aB:A(f,3),aTH:A(d,2),aLife:A(p,4),aPulse:A(b,3)};Object.entries(m).forEach(([K,he])=>y.setAttribute(K,he)),y.setAttribute("position",new pt(new Float32Array(u*3),3)),y.boundingSphere=new on(new I,2);let w={uTime:{value:0},uOpacity:{value:1},uConv:{value:0},uBase:{value:new He("#5a7fff")},uHot:{value:new He("#dfe8ff")},uGold:{value:new He("#ffb23f")}},C=new wt({uniforms:w,transparent:true,depthWrite:false,blending:Zt,vertexShader:`${pf}
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
      }`}),g=new en(y,C);g.frustumCulled=false,g.renderOrder=2;let M=2,S=s*M,P=new Float32Array(S*3),_=new Float32Array(S*3),T=new Float32Array(S*2),F=new Float32Array(S*4),L=new Float32Array(S*3),k=new Float32Array(S);for(let K=0;K<S;K++)k[K]=K%M;let G=new ct,B={aA:A(P,3),aB:A(_,3),aTH:A(T,2),aLife:A(F,4),aPulse:A(L,3)};Object.entries(B).forEach(([K,he])=>G.setAttribute(K,he)),G.setAttribute("aK",new pt(k,1)),G.setAttribute("position",new pt(new Float32Array(S*3),3)),G.boundingSphere=new on(new I,2);let V={...w,uPR:{value:1},uSize:{value:0.022}},te=new wt({uniforms:V,transparent:true,depthWrite:false,blending:Zt,vertexShader:`${pf}
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
      }`}),Y=new Qi(G,te);Y.frustumCulled=false,Y.renderOrder=3;let q=new Ht;q.add(g,Y);let W=Array.from({length:s},()=>({end:0})),U=new I,Z=new I,be=new I,Te=new I,ft=new dt,Qe=0,Q=new Set,ge=(K)=>Te.copy(U).sub(K).normalize().dot(K)>0.08;function fe(K,he,pe=40){for(let J=0;J<pe;J++){let je=i()*a.length|0,ut=a[je];if(!ge(ut))continue;if(K&&ut.angleTo(K)>he)continue;return je}return 1+(i()*(a.length-1)|0)}function Ye(K,he,pe=false){let J;if(Qe>0.5&&i()<Qe*0.6)J=c[i()*c.length|0];else J=fe(i()<0.7?be:null,0.95);let je;if(i()<Qe*0.85)je=0;else{let me=[0.12,0.35,0.8,1.2][i()*4|0];je=fe(a[J],me)}if(je===J)je=J===0?1:0;let ut=a[J],Lt=a[je],xt=ut.angleTo(Lt),ie=Math.min(0.075,0.008+xt*0.07)*(0.7+i()*0.6),D=i()<0.22,Ce=0.5+xt*0.9+i()*0.5,Pe=D?14+i()*18:2.2+i()*6,$e=0.8+i()*1.1,E=pe?he-i()*(Ce+Pe):he+i()*0.4,x=0.22+i()*0.5,N=i(),X=(D?0.35:0.55+i()*0.45)*(je===0?1.25:1);W[K].end=E+Ce+Pe+$e;let de=(me,Se,ne,re,Ue,Xe,ve,ye)=>{for(let Ge=Xe;Ge<Xe+ve;Ge++){if(ut.toArray(me,Ge*3),Lt.toArray(Se,Ge*3),ne[Ge*2+1]=ie,!ye)ne[Ge*2]=0;re[Ge*4]=E,re[Ge*4+1]=Ce,re[Ge*4+2]=Pe,re[Ge*4+3]=$e,Ue[Ge*3]=x,Ue[Ge*3+1]=N,Ue[Ge*3+2]=X}};de(h,f,d,p,b,K*l,l,true),de(P,_,T,F,L,K*M,M,false),Q.add(K)}function et(){if(!Q.size)return;for(let K of Q){for(let he of Object.values(m))he.addUpdateRange(K*l*he.itemSize,l*he.itemSize);for(let he of Object.values(B))he.addUpdateRange(K*M*he.itemSize,M*he.itemSize)}for(let K of[...Object.values(m),...Object.values(B)])K.needsUpdate=true;Q=new Set}function Ne(K,he){ft.copy(he.matrixWorld).invert(),U.copy(K.position).applyMatrix4(ft),K.getWorldDirection(Z),Z.transformDirection(ft);let pe=U.dot(Z),J=U.lengthSq()-1,je=pe*pe-J;if(je>0)be.copy(Z).multiplyScalar(-pe-Math.sqrt(je)).add(U).normalize();else be.copy(Z).multiplyScalar(-pe).add(U).normalize()}let Ct=false;return{group:q,update(K){if(q.visible=K.alpha>0.002,!q.visible)return;if(Qe=K.conv,Ne(K.camera,K.frame),!Ct){Ct=true;for(let he=0;he<s;he++)Ye(he,K.time,true)}else{let he=6;for(let pe=0;pe<s&&he>0;pe++)if(K.time>W[pe].end)Ye(pe,K.time),he--}et(),w.uTime.value=K.time,w.uOpacity.value=K.alpha,w.uConv.value=Qe,V.uPR.value=K.pr},dispose(){y.dispose(),C.dispose(),G.dispose(),te.dispose()}}}var cs=(e)=>Number.isInteger(e)?e.toFixed(1):String(e),wr=[-30,25,60,75];function W3(e){let t=[],i=[],s=[],r=[],a=[],o=[];e.forEach((l,u)=>{let h=0,f=[0];for(let d=1;d<l.length;d++)h+=Math.hypot(l[d][0]-l[d-1][0],l[d][1]-l[d-1][1]),f.push(h);for(let d=0;d<l.length-1;d++){let p=l[d],b=l[d+1],y=f[d]/h,A=f[d+1]/h,m=[[p,b,-1,0,y],[p,b,1,0,y],[b,p,-1,1,A],[b,p,-1,1,A],[p,b,1,0,y],[b,p,1,1,A]];for(let[w,C,g,M,S]of m)t.push(w[0],0.05,w[1]),i.push(C[0],0.05,C[1]),s.push(g),r.push(M),a.push(S),o.push(u===0?0:1)}});let c=new ct;return c.setAttribute("position",new it(t,3)),c.setAttribute("aQ",new it(i,3)),c.setAttribute("aSide",new it(s,1)),c.setAttribute("aEnd",new it(r,1)),c.setAttribute("aU",new it(a,1)),c.setAttribute("aIsl",new it(o,1)),c.boundingSphere=new on(new I,400),c}function Af({geo:e,lite:t,landTex:i,fieldTex:s,lightsTex:r,landEuUrl:a}){let o=Yn(11),c=new Ht;c.name="europa";let l=[],u=(ie)=>(l.push(ie),ie),h=new Ui,d={uLandW:{value:i},uLandE:{value:((ie)=>{let D=u(h.load(ie));return D.colorSpace=wn,D.format=mi,D.generateMipmaps=false,D.minFilter=Wt,D})(a)},uField:{value:s},uLights:{value:r},uCivic:Sr,uBend:Ps,uSunMap:yr,uDayEdge:Is,uAlpha:{value:0},uDots:{value:1},uGrat:{value:0},uNightL:{value:1},uDim:{value:0}},p=-140,b=118,y=-118,A=84,m=u(new Xn(b-p,A-y,t?96:140,t?76:110).rotateX(-Math.PI/2).translate((p+b)/2,0,(y+A)/2)),w=u(new wt({uniforms:d,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-8,vertexShader:`
      ${Mr}
      varying vec2 vXZ; varying vec3 vW;
      void main(){
        vXZ = position.xz;
        vec4 w = modelMatrix * vec4(bendPos(position), 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uLandW; uniform sampler2D uLandE; uniform vec3 uSunMap; uniform vec2 uDayEdge;
      uniform float uAlpha; uniform float uDots; uniform float uGrat; uniform float uNightL; uniform float uDim;
      ${Mr}
      ${qo}
      varying vec2 vXZ; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float dotField(vec2 g, float r){
        vec2 q = fract(g) - 0.5;
        float aa = fwidth(length(q)) * 1.2;
        return 1.0 - smoothstep(r - aa, r + aa, length(q));
      }
      void main(){
        float latD = ${cs(mn[1])} - vXZ.y / ${cs(as)};
        float lonD = ${cs(mn[0])} + vXZ.x / ${cs(as*Vo)};
        vec2 uvE = vec2((lonD - ${cs(wr[0])}) / ${cs(wr[2]-wr[0])}, (latD - ${cs(wr[1])}) / ${cs(wr[3]-wr[1])});
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
      }`})),C=new Ft(m,w);C.renderOrder=1,C.frustumCulled=false,c.add(C);let g=(ie,D=true)=>{let Ce={uColor:{value:new He(ie)},uOpacity:{value:0},uBend:Ps},Pe=new wt({uniforms:Ce,transparent:true,depthWrite:false,depthTest:false,blending:D?Zt:di,vertexShader:`${Mr}
        void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }"});return{m:u(Pe),U:Ce}},M=[];for(let ie of e.europe)for(let D of ie.rings)for(let Ce=0;Ce<D.length-1;Ce++){let[Pe,$e]=Bi(D[Ce][0],D[Ce][1]),[E,x]=Bi(D[Ce+1][0],D[Ce+1][1]);M.push(Pe,0.04,$e,E,0.04,x)}let S=g("#4d68c4"),P=new en(u(new ct().setAttribute("position",new it(M,3))),S.m);P.renderOrder=2,P.frustumCulled=false,c.add(P);let _=e.croatia.map((ie)=>ie.map(([D,Ce])=>Bi(D,Ce)));{let ie=_[0].slice(0,-1),D=0;for(let E=0;E<ie.length;E++){let x=ie[E],N=ie[(E+1)%ie.length];D+=x[0]*N[1]-N[0]*x[1]}if(D>0)ie.reverse();let Ce=0,Pe=1/0;ie.forEach(([E,x],N)=>{let X=E*E+x*x;if(X<Pe)Pe=X,Ce=N});let $e=ie.slice(Ce).concat(ie.slice(0,Ce));$e.push($e[0]),_[0]=$e}let T={uBend:Ps,uRes:{value:new ze(1,1)},uWidth:{value:6},uCore:{value:0.2},uTrace:{value:0},uHL:{value:0},uOpacity:{value:0},uTime:{value:0}},F=u(new wt({uniforms:T,transparent:true,depthWrite:false,depthTest:false,side:Qt,blending:Ji,blendEquation:to,blendSrc:fi,blendDst:fi,vertexShader:`
      ${Mr}
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
      }`})),L=new Ft(u(W3(_)),F);L.renderOrder=6,L.frustumCulled=false,c.add(L);let k=_[0],G=[0];for(let ie=1;ie<k.length;ie++)G.push(G[ie-1]+Math.hypot(k[ie][0]-k[ie-1][0],k[ie][1]-k[ie-1][1]));let B=G[G.length-1],V=nn({count:1,color:"#9cb4ff",core:"#ffffff",size:0.5,depthTest:false,bend:true});V.uniforms.uMin.value=7,V.uniforms.uMax.value=22,V.points.renderOrder=7,c.add(V.points);let te=(ie)=>new na(ie.map(([D,Ce])=>new ze(D,-Ce))),Y=u(new ia(_.map(te),1).rotateX(-Math.PI/2));Y.translate(0,0.02,0);let q=g("#1d3bd6");q.m.side=Qt;let W=new Ft(Y,q.m);W.renderOrder=3,W.frustumCulled=false,c.add(W);let U=nn({count:e.cities.length,color:"#6f93ff",core:"#ffffff",size:0.11,bend:true,depthTest:false});e.cities.forEach(([,ie,D,Ce],Pe)=>{let[$e,E]=Bi(ie,D);U.pos[Pe*3]=$e,U.pos[Pe*3+1]=0.06,U.pos[Pe*3+2]=E,U.size[Pe]=Pe===0?2.6:Ce?1.3:0.8}),U.uniforms.uMin.value=2,U.points.renderOrder=8,c.add(U.points);let Z=[],be=[];e.capitals.forEach(([,ie,D])=>{let[Ce,Pe]=Bi(ie,D),$e=new I(0,0.06,0),E=new I(Ce,0.06,Pe),x=2+$e.distanceTo(E)*0.22,N=[];for(let X=0;X<=36;X++){let de=X/36,me=$e.clone().lerp(E,de);me.y+=Math.sin(Math.PI*de)*x,N.push(me)}for(let X=0;X<N.length-1;X++)be.push(...N[X].toArray(),...N[X+1].toArray());Z.push({pts:N,t:o(),speed:0.18+o()*0.12,dir:o()<0.5?1:-1})});let Te=g("#4a6ff0"),ft=new en(u(new ct().setAttribute("position",new it(be,3))),Te.m);ft.frustumCulled=false,ft.renderOrder=4,c.add(ft);let Qe=nn({count:e.capitals.length,color:"#4f7bff",core:"#dfe7ff",size:0.32,bend:true});e.capitals.forEach(([,ie,D],Ce)=>{let[Pe,$e]=Bi(ie,D);Qe.pos[Ce*3]=Pe,Qe.pos[Ce*3+1]=0.08,Qe.pos[Ce*3+2]=$e}),Qe.uniforms.uMin.value=1.5,c.add(Qe.points);let Q=5,ge=nn({count:Z.length*Q,color:"#7f9fff",core:"#ffffff",size:0.36,bend:true});ge.uniforms.uMin.value=1.2,c.add(ge.points);let fe=[["Đakovo",18.41,45.31,1],["Vukovar",19,45.35,1],["Vinkovci",18.8,45.29,0.95],["Valpovo",18.42,45.66,0.6],["Belišće",18.4,45.68,0.5],["Našice",18.1,45.49,0.6],["Beli Manastir",18.6,45.77,0.6],["Donji Miholjac",18.17,45.76,0.5],["Čepin",18.565,45.524,0.45],["Tenja",18.749,45.497,0.35],["Bilje",18.743,45.606,0.35],["Darda",18.692,45.627,0.35]],Ye=fe.map(([,ie,D,Ce])=>[...Bi(ie,D),Ce]),et=e.cities.slice(1).map(([,ie,D,Ce])=>[...Bi(ie,D),Ce?1.6:0.8]),Ne=Object.fromEntries(fe.map((ie,D)=>[ie[0],Ye[D]])),Ct=[0,0],K=[[Ct,Ne["Đakovo"]],[Ct,Ne.Vinkovci],[Ct,Ne.Vukovar],[Ct,Ne.Valpovo],[Ne.Valpovo,Ne["Donji Miholjac"]],[Ct,Ne["Našice"]],[Ct,Ne["Beli Manastir"]],[Ne.Vinkovci,Ne.Vukovar],[Ne["Đakovo"],Ne.Vinkovci],[Ne["Đakovo"],Ne["Našice"]],[Ne["Našice"],Ne["Donji Miholjac"]]],he=t?1700:3200,pe=nn({count:he,color:"#ffae58",core:"#fff0d0",size:0.24,depthTest:false,nightOnly:true});pe.uniforms.uMin.value=1.1,pe.uniforms.uFall.value=1,pe.uniforms.uMax.value=9,pe.points.renderOrder=9;let J=()=>Math.sqrt(-2*Math.log(o()+0.000001))*Math.cos(o()*Math.PI*2);for(let ie=0;ie<he;ie++){let D,Ce,Pe=1,$e=1,E=o();if(E<0.2){do D=J()*0.3,Ce=J()*0.22;while(Math.hypot(D,Ce*1.4)<0.12);Pe=0.7}else if(E<0.62){let x=Ye[o()*Ye.length|0],N=0.012+x[2]*0.028;D=x[0]+J()*N,Ce=x[1]+J()*N}else if(E<0.86){let[x,N]=K[o()*K.length|0],X=0.08+o()*0.84,de=-(N[1]-x[1]),me=N[0]-x[0],Se=Math.hypot(de,me)||1,ne=Math.sin(X*9+x[0])*0.03+J()*0.012;D=x[0]+(N[0]-x[0])*X+de/Se*ne+J()*0.006,Ce=x[1]+(N[1]-x[1])*X+me/Se*ne+J()*0.006,Pe=0.55,$e=0.75}else{let x=et[o()*et.length|0],N=0.03+x[2]*0.05;D=x[0]+J()*N,Ce=x[1]+J()*N,$e=1.4}pe.pos[ie*3]=D,pe.pos[ie*3+1]=0.05,pe.pos[ie*3+2]=Ce,pe.alpha[ie]=(0.2+o()*0.8)*Pe,pe.size[ie]=(0.5+o()*o()*1.8)*$e,pe.wake[ie]=o()*0.9}c.add(pe.points);let je={uOpacity:{value:0},uR:{value:1}},ut=new Ft(u(new Xn(2,2).rotateX(-Math.PI/2)),u(new wt({uniforms:je,transparent:true,depthWrite:false,depthTest:false,blending:Zt,vertexShader:"uniform float uR; varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * uR, 0.03, position.z * uR, 1.0); }",fragmentShader:`uniform float uOpacity; varying vec2 vP;
        void main(){ float r = length(vP * vec2(1.0, 1.25)); float a = exp(-r * r * 5.5) * 0.8 + exp(-r * r * 26.0) * 0.6;
          gl_FragColor = vec4(vec3(1.0, 0.56, 0.24) * a * uOpacity, 1.0); }`})));ut.renderOrder=5,ut.frustumCulled=false,c.add(ut);let Lt=new I,xt=[U,Qe,ge,pe,V];return{group:c,towns:fe.map((ie)=>ie[0]),townWorld(ie,D=new I){return D.set(Ye[ie][0],0.06,Ye[ie][1]).applyMatrix4(c.matrixWorld)},cityWorld(ie,D=new I){return D.fromArray(U.pos,ie*3).applyMatrix4(c.matrixWorld)},update(ie){if(c.visible=ie.alpha>0.002,!c.visible)return;let{alpha:D,Z:Ce}=ie,Pe=1-ie.mapFade;d.uAlpha.value=D,d.uDots.value=1-0.55*vt(0.9,1,Ce)-0.45*vt(1,1.3,Ce),d.uGrat.value=vt(0.94,1.05,Ce)*(1-vt(1.3,1.6,Ce))*0.5,d.uNightL.value=1-vt(1.2,1.5,Ce),d.uDim.value=vt(1.5,1.9,Ce),S.U.uOpacity.value=0.55*D*Pe*(1-0.5*ie.hl),T.uRes.value.set(ie.res[0]/2,ie.res[1]/2),T.uWidth.value=7*ie.pr,T.uCore.value=0.16,T.uTrace.value=ie.trace,T.uHL.value=ie.hl,T.uOpacity.value=D*(1-vt(1.12,1.42,Ce)),T.uTime.value=ie.time;let $e=ie.trace>0.002&&ie.trace<0.985;if($e){let E=ie.trace*B,x=1;while(x<G.length-1&&G[x]<E)x++;let N=(E-G[x-1])/Math.max(0.000001,G[x]-G[x-1]);V.pos[0]=k[x-1][0]+(k[x][0]-k[x-1][0])*N,V.pos[1]=0.06,V.pos[2]=k[x-1][1]+(k[x][1]-k[x-1][1])*N,V.geometry.attributes.position.needsUpdate=true}if(V.uniforms.uOpacity.value=$e?D*Math.min(1,ie.trace*30,(0.985-ie.trace)*30):0,q.U.uOpacity.value=D*(0.05+0.1*ie.hl)*vt(0.82,1,ie.trace)*(1-vt(1.25,1.6,Ce)),U.uniforms.uOpacity.value=D*vt(0.5,0.95,ie.trace)*Pe,Te.U.uOpacity.value=0.42*D*ie.net*Pe,Qe.uniforms.uOpacity.value=D*ie.net*Pe,ge.uniforms.uOpacity.value=D*ie.net*Pe,pe.uniforms.uOpacity.value=D*(1-vt(1.78,1.97,Ce)),pe.uniforms.uWake.value=0.15+ie.night*1,je.uR.value=0.6,je.uOpacity.value=D*ie.night*vt(1.05,1.35,Ce)*(1-vt(1.6,1.8,Ce))*0.5,xt.forEach((E)=>{E.uniforms.uPR.value=ie.pr}),Z.forEach((E,x)=>{if(!ie.reduce)E.t=(E.t+ie.dt*E.speed)%1;for(let N=0;N<Q;N++){let X=E.dir>0?E.t-N*0.02:1-E.t+N*0.02,de=Math.min(E.pts.length-1.001,Math.max(0,X*(E.pts.length-1))),me=Math.floor(de);Lt.copy(E.pts[me]).lerp(E.pts[me+1],de-me).toArray(ge.pos,(x*Q+N)*3),ge.alpha[x*Q+N]=(1-N/Q)*Math.min(1,E.t*6)*Math.min(1,(1-E.t)*6)}}),ie.net*Pe>0.01)ge.geometry.attributes.position.needsUpdate=true,ge.geometry.attributes.aAlpha.needsUpdate=true},dispose(){l.forEach((ie)=>ie.dispose()),xt.forEach((ie)=>{ie.geometry.dispose(),ie.material.dispose()})}}}function bf(e,t=false){let i=e[0].index!==null,s=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},c=e[0].morphTargetsRelative,l=new ct,u=0;for(let h=0;h<e.length;++h){let f=e[h],d=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(a[p]===undefined)a[p]=[];a[p].push(f.attributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(o[p]===undefined)o[p]=[];o[p].push(f.morphAttributes[p])}if(t){let p;if(i)p=f.index.count;else if(f.attributes.position!==undefined)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,h),u+=p}}if(i){let h=0,f=[];for(let d=0;d<e.length;++d){let p=e[d].index;for(let b=0;b<p.count;++b)f.push(p.getX(b)+h);h+=e[d].attributes.position.count}l.setIndex(f)}for(let h in a){let f=gf(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let b=gf(p);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(b)}}return l}function gf(e){let t,i,s,r=-1,a=0;for(let u=0;u<e.length;++u){let h=e[u];if(t===undefined)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===undefined)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===undefined)s=h.normalized;if(s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*i}let o=new t(a),c=new pt(o,i,s),l=0;for(let u=0;u<e.length;++u){let h=e[u];if(h.isInterleavedBufferAttribute){let f=l/i;for(let d=0,p=h.count;d<p;d++)for(let b=0;b<i;b++){let y=h.getComponent(d,b);c.setComponent(d+f,b,y)}}else o.set(h.array,l);l+=h.count*i}if(r!==undefined)c.gpuType=r;return c}function Au(e,t){if(t===Ml)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===ar||t===Xr){let i=e.getIndex();if(i===null){let a=[],o=e.getAttribute("position");if(o!==undefined){for(let c=0;c<o.count;c++)a.push(c);e.setIndex(a),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let s=i.count-2,r=[];if(t===ar)for(let a=1;a<=s;a++)r.push(i.getX(0)),r.push(i.getX(a)),r.push(i.getX(a+1));else for(let a=0;a<s;a++)if(a%2===0)r.push(i.getX(a)),r.push(i.getX(a+1)),r.push(i.getX(a+2));else r.push(i.getX(a+2)),r.push(i.getX(a+1)),r.push(i.getX(a));if(r.length/3!==s)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function vf(e){let t=new Map,i=new Map,s=e.clone();return xf(e,s,function(r,a){t.set(a,r),i.set(r,a)}),s.traverse(function(r){if(!r.isSkinnedMesh)return;let a=r,o=t.get(r),c=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=c.map(function(l){return i.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),s}function xf(e,t,i){i(e,t);for(let s=0;s<e.children.length;s++)xf(e.children[s],t.children[s],i)}class Mu extends Ni{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new xu(t,It.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xu(t,It.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hf(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=rs.extractUrlBase(e);a=rs.resolveURL(l,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(s)s(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},c=new sa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gf){try{a[It.KHR_BINARY_GLTF]=new Wf(e)}catch(h){if(s)s(h);return}r=JSON.parse(a[It.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===undefined||r.asset.version[0]<2){if(s)s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Kf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,a[h.name]=true}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case It.KHR_MATERIALS_UNLIT:a[h]=new Ef;break;case It.KHR_DRACO_MESH_COMPRESSION:a[h]=new Vf(r,this.dracoLoader);break;case It.KHR_TEXTURE_TRANSFORM:a[h]=new jf;break;case It.KHR_MESH_QUANTIZATION:a[h]=new qf;break;default:if(f.indexOf(h)>=0&&o[h]===undefined)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function V3(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function sn(e,t,i){let s=e.json.materials[t];if(s.extensions&&s.extensions[i])return s.extensions[i];return null}var It={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wf{constructor(e){this.parser=e,this.name=It.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==undefined)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new He(16777215);if(c.color!==undefined)u.setRGB(c.color[0],c.color[1],c.color[2],Ln);let h=c.range!==undefined?c.range:0;switch(c.type){case"directional":l=new Rs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mr(u),l.distance=h;break;case"spot":l=new No(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==undefined?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==undefined?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}if(l.position.set(0,0,0),yi(l,c),c.intensity!==undefined)l.intensity=c.intensity;return l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===undefined)return null;return this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class Ef{constructor(){this.name=It.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(e,t,i){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}if(r.baseColorTexture!==undefined)s.push(i.assignTexture(e,"map",r.baseColorTexture,Ai))}return Promise.all(s)}}class Tf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==undefined)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class Rf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==undefined)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==undefined)s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==undefined)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==undefined)s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==undefined){if(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==undefined){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(r,r)}}return Promise.all(s)}}class Cf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_DISPERSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==undefined?i.dispersion:0,Promise.resolve()}}class Pf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.iridescenceFactor!==undefined)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==undefined)s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==undefined)t.iridescenceIOR=i.iridescenceIor;if(t.iridescenceThicknessRange===undefined)t.iridescenceThicknessRange=[100,400];if(i.iridescenceThicknessMinimum!==undefined)t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==undefined)t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==undefined)s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(s)}}class If{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SHEEN}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==undefined){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}if(i.sheenRoughnessFactor!==undefined)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==undefined)s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ai));if(i.sheenRoughnessTexture!==undefined)s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(s)}}class Df{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.transmissionFactor!==undefined)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==undefined)s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(s)}}class Lf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_VOLUME}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.thickness=i.thicknessFactor!==undefined?i.thicknessFactor:0,i.thicknessTexture!==undefined)s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}}class Ff{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IOR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==undefined?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class Nf{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SPECULAR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.specularIntensity=i.specularFactor!==undefined?i.specularFactor:1,i.specularTexture!==undefined)s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new He().setRGB(r[0],r[1],r[2],Ln),i.specularColorTexture!==undefined)s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ai));return Promise.all(s)}}class Uf{constructor(e){this.parser=e,this.name=It.EXT_MATERIALS_BUMP}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.bumpScale=i.bumpFactor!==undefined?i.bumpFactor:1,i.bumpTexture!==undefined)s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(s)}}class Of{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let i=sn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.anisotropyStrength!==undefined)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==undefined)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==undefined)s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(s)}}class Bf{constructor(e){this.parser=e,this.name=It.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,a)}}class kf{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class zf{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)c=l}return i.loadTextureImage(e,a.source,c)}}class xu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,{count:u,byteStride:h}=s,f=new Uint8Array(o,c,l);if(a.decodeGltfBufferAsync)return a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer});else return a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class Hf{constructor(e){this.name=It.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===undefined)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==undefined)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then((u)=>(c[l]=u,c[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let p of h){let b=new dt,y=new I,A=new Wn,m=new I(1,1,1),w=new Mo(p.geometry,p.material,f);for(let g=0;g<f;g++){if(c.TRANSLATION)y.fromBufferAttribute(c.TRANSLATION,g);if(c.ROTATION)A.fromBufferAttribute(c.ROTATION,g);if(c.SCALE)m.fromBufferAttribute(c.SCALE,g);w.setMatrixAt(g,b.compose(y,A,m))}let C=null;for(let g in c)if(g==="_COLOR_0"){let M=c[g];w.instanceColor=new Yi(M.array,M.itemSize,M.normalized)}else if(g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"){if(C===null){let S=w.geometry;C=new ct,C.name=S.name;for(let P in S.attributes)C.setAttribute(P,S.attributes[P]);for(let P in S.morphAttributes)C.morphAttributes[P]=S.morphAttributes[P];if(S.index!==null)C.setIndex(S.index);C.morphTargetsRelative=S.morphTargetsRelative;for(let P of S.groups)C.addGroup(P.start,P.count,P.materialIndex);if(S.boundingBox!==null)C.boundingBox=S.boundingBox.clone();if(S.boundingSphere!==null)C.boundingSphere=S.boundingSphere.clone();C.drawRange.start=S.drawRange.start,C.drawRange.count=S.drawRange.count,C.userData=Object.assign({},S.userData),w.geometry=C}let M=c[g];C.setAttribute(g,new Yi(M.array,M.itemSize,M.normalized))}jt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}if(u.isGroup)return u.clear(),u.add(...d),u;return d[0]})}}var Gf="glTF",fa=12,_f={JSON:1313821514,BIN:5130562};class Wf{constructor(e){this.name=It.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,true),length:t.getUint32(8,true)},this.header.magic!==Gf)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-fa,r=new DataView(e,fa),a=0;while(a<s){let o=r.getUint32(a,true);a+=4;let c=r.getUint32(a,true);if(a+=4,c===_f.JSON){let l=new Uint8Array(e,fa+a,o);this.content=i.decode(l)}else if(c===_f.BIN){let l=fa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Vf{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=It.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=_u[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=_u[u]||u.toLowerCase();if(a[u]!==undefined){let f=i.accessors[e.attributes[u]],d=Er[f.componentType];l[h]=d.name,c[h]=f.normalized===true}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let b=d.attributes[p],y=c[p];if(y!==undefined)b.normalized=y}h(d)},o,l,Ln,f)})})}}class jf{constructor(){this.name=It.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===undefined||t.texCoord===e.channel)&&t.offset===undefined&&t.rotation===undefined&&t.scale===undefined)return e;if(e=e.clone(),t.texCoord!==undefined)e.channel=t.texCoord;if(t.offset!==undefined)e.offset.fromArray(t.offset);if(t.rotation!==undefined)e.rotation=t.rotation;if(t.scale!==undefined)e.repeat.fromArray(t.scale);if(t.rotation!==undefined){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=false}return e.needsUpdate=true,e}}class qf{constructor(){this.name=It.KHR_MESH_QUANTIZATION}}class Su extends Fi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*l,b=p-l,y=-2*d+3*f,A=d-f,m=1-y,w=A-f+h;for(let C=0;C!==o;C++){let g=a[b+C+o],M=a[b+C+c]*u,S=a[p+C+o],P=a[p+C]*u;r[C]=m*g+w*M+y*S+A*P}return r}}var j3=new Wn;class Xf extends Su{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return j3.fromArray(r).normalize().toArray(r),r}}var Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:ii,9729:Wt,9984:ao,9985:sr,9986:vs,9987:Hn},Mf={33071:Zi,33648:ro,10497:ni},gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},q3={CUBICSPLINE:undefined,LINEAR:po,STEP:yl},bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X3(e){if(e.DefaultMaterial===undefined)e.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:false,depthTest:true,side:ui});return e.DefaultMaterial}function Ds(e,t,i){for(let s in i.extensions)if(e[s]===undefined)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=i.extensions[s]}function yi(e,t){if(t.extras!==undefined)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function K3(e,t,i){let s=false,r=false,a=false;for(let u=0,h=t.length;u<h;u++){let f=t[u];if(f.POSITION!==undefined)s=true;if(f.NORMAL!==undefined)r=true;if(f.COLOR_0!==undefined)a=true;if(s&&r&&a)break}if(!s&&!r&&!a)return Promise.resolve(e);let o=[],c=[],l=[];for(let u=0,h=t.length;u<h;u++){let f=t[u];if(s){let d=f.POSITION!==undefined?i.getDependency("accessor",f.POSITION):e.attributes.position;o.push(d)}if(r){let d=f.NORMAL!==undefined?i.getDependency("accessor",f.NORMAL):e.attributes.normal;c.push(d)}if(a){let d=f.COLOR_0!==undefined?i.getDependency("accessor",f.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(u){let h=u[0],f=u[1],d=u[2];if(s)e.morphAttributes.position=h;if(r)e.morphAttributes.normal=f;if(a)e.morphAttributes.color=d;return e.morphTargetsRelative=true,e})}function Y3(e,t){if(e.updateMorphTargets(),t.weights!==undefined)for(let i=0,s=t.weights.length;i<s;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++)e.morphTargetDictionary[i[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function J3(e){let t,i=e.extensions&&e.extensions[It.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+vu(i.attributes);else t=e.indices+":"+vu(e.attributes)+":"+e.mode;if(e.targets!==undefined)for(let s=0,r=e.targets.length;s<r;s++)t+=":"+vu(e.targets[s]);return t}function vu(e){let t="",i=Object.keys(e).sort();for(let s=0,r=i.length;s<r;s++)t+=i[s]+":"+e[i[s]]+";";return t}function yu(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z3(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var $3=new dt;class Kf{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=false,s=-1,r=false,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===true;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&s<17||r&&a<98)this.textureLoader=new Ui(this.options.manager);else this.textureLoader=new Uo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(true)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ds(r,o,s),yi(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=true}for(let s=0,r=e.length;s<r;s++){let a=e[s];if(a.mesh!==undefined){if(this._addNodeRef(this.meshCache,a.mesh),a.skin!==undefined)i[a.mesh].isSkinnedMesh=true}if(a.camera!==undefined)this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){if(t===undefined)return;if(e.refs[t]===undefined)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);if(c!=null)this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===undefined&&e===0)return Promise.resolve(this.extensions[It.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(rs.resolveURL(t.uri,s.path),r,undefined,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===undefined&&s.sparse===undefined){let a=gu[s.type],o=Er[s.componentType],c=s.normalized===true,l=new o(s.count*a);return Promise.resolve(new pt(l,a,c))}let r=[];if(s.bufferView!==undefined)r.push(this.getDependency("bufferView",s.bufferView));else r.push(null);if(s.sparse!==undefined)r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView));return Promise.all(r).then(function(a){let o=a[0],c=gu[s.type],l=Er[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==undefined?i.bufferViews[s.bufferView].byteStride:undefined,p=s.normalized===true,b,y;if(d&&d!==h){let A=Math.floor(f/d),m="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,w=t.cache.get(m);if(!w)b=new l(o,A*d,s.count*d/u),w=new Jr(b,d/u),t.cache.add(m,w);y=new or(w,c,f%d/u,p)}else{if(o===null)b=new l(s.count*c);else b=new l(o,f,s.count*c);y=new pt(b,c,p)}if(s.sparse!==undefined){let A=gu.SCALAR,m=Er[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,g=new m(a[1],w,s.sparse.count*A),M=new l(a[2],C,s.sparse.count*c);if(o!==null)y=new pt(y.array.slice(),y.itemSize,y.normalized);y.normalized=false;for(let S=0,P=g.length;S<P;S++){let _=g[S];if(y.setX(_,M[S*c]),c>=2)y.setY(_,M[S*c+1]);if(c>=3)y.setZ(_,M[S*c+2]);if(c>=4)y.setW(_,M[S*c+3]);if(c>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=p}return y})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);if(c!==null)o=c}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){if(u.flipY=false,u.name=a.name||o.name||"",u.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===false)u.name=o.uri;let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=yf[f.magFilter]||Wt,u.minFilter=yf[f.minFilter]||Hn,u.wrapS=Mf[f.wrapS]||ni,u.wrapT=Mf[f.wrapT]||ni,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ii&&u.minFilter!==Wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==undefined)return this.sourceCache[e].then((h)=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=false;if(a.bufferView!==undefined)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=true;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===undefined)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let p=f;if(t.isImageBitmapLoader===true)p=function(b){let y=new an(b);y.needsUpdate=true,f(y)};t.load(rs.resolveURL(h,r.path),p,undefined,d)})}).then(function(h){if(l===true)o.revokeObjectURL(c);return yi(h,a),h.userData.mimeType=a.mimeType||Z3(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==undefined&&i.texCoord>0)a=a.clone(),a.channel=i.texCoord;if(r.extensions[It.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==undefined?i.extensions[It.KHR_TEXTURE_TRANSFORM]:undefined;if(o){let c=r.associations.get(a);a=r.extensions[It.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}if(s!==undefined)a.colorSpace=s;return e[t]=a,a})}assignFinalMaterial(e){let{geometry:t,material:i}=e,s=t.attributes.tangent===undefined,r=t.attributes.color!==undefined,a=t.attributes.normal===undefined;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new ea,Nn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=false,this.cache.add(o,c);i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);if(!c)c=new jn,Nn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c);i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";if(s)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(a)o+="flat-shading:";let c=this.cache.get(o);if(!c){if(c=i.clone(),r)c.vertexColors=true;if(a)c.flatShading=true;if(s){if(c.normalScale)c.normalScale.y*=-1;if(c.clearcoatNormalScale)c.clearcoatNormalScale.y*=-1}this.cache.add(o,c),this.associations.set(c,this.associations.get(i))}i=c}e.material=i}getMaterialType(){return es}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[It.KHR_MATERIALS_UNLIT]){let h=s[It.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ln),o.opacity=f[3]}if(h.baseColorTexture!==undefined)l.push(t.assignTexture(o,"map",h.baseColorTexture,Ai));if(o.metalness=h.metallicFactor!==undefined?h.metallicFactor:1,o.roughness=h.roughnessFactor!==undefined?h.roughnessFactor:1,h.metallicRoughnessTexture!==undefined)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}if(r.doubleSided===true)o.side=Qt;let u=r.alphaMode||bu.OPAQUE;if(u===bu.BLEND)o.transparent=true,o.depthWrite=false;else if(o.transparent=false,u===bu.MASK)o.alphaTest=r.alphaCutoff!==undefined?r.alphaCutoff:0.5;if(r.normalTexture!==undefined&&a!==Vn){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==undefined){let h=r.normalTexture.scale;o.normalScale.set(h,h)}}if(r.occlusionTexture!==undefined&&a!==Vn){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==undefined)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==undefined&&a!==Vn){let h=r.emissiveFactor;o.emissive=new He().setRGB(h[0],h[1],h[2],Ln)}if(r.emissiveTexture!==undefined&&a!==Vn)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ai));return Promise.all(l).then(function(){let h=new a(o);if(r.name)h.name=r.name;if(yi(h,r),t.associations.set(h,{materials:e}),r.extensions)Ds(s,h,r);return h})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[It.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=J3(l),h=s[u];if(h)a.push(h.promise);else{let f;if(l.extensions&&l.extensions[It.KHR_DRACO_MESH_COMPRESSION])f=r(l);else f=Sf(new ct,l,t);if(l.mode===Jn.TRIANGLE_STRIP)f=f.then((d)=>Au(d,Xr));else if(l.mode===Jn.TRIANGLE_FAN)f=f.then((d)=>Au(d,ar));s[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===undefined?X3(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let b=u[d],y=a[d],A,m=l[d];if(y.mode===Jn.TRIANGLES||y.mode===Jn.TRIANGLE_STRIP||y.mode===Jn.TRIANGLE_FAN||y.mode===undefined){let w=r.isSkinnedMesh===true,C=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");if(w&&C===false)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(A=w&&C?new yo(b,m):new Ft(b,m),A.isSkinnedMesh===true)A.normalizeSkinWeights()}else if(y.mode===Jn.LINES)A=new en(b,m);else if(y.mode===Jn.LINE_STRIP)A=new lr(b,m);else if(y.mode===Jn.LINE_LOOP)A=new So(b,m);else if(y.mode===Jn.POINTS)A=new Qi(b,m);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);if(Object.keys(A.geometry.morphAttributes).length>0)Y3(A,r);if(A.name=t.createUniqueName(r.name||"mesh_"+e),yi(A,r),y.extensions)Ds(s,A,y);t.assignFinalMaterial(A),h.push(A)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1){if(r.extensions)Ds(s,h[0],r);return h[0]}let f=new Ht;if(r.extensions)Ds(s,f,r);t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new hn(Pl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2000000);else if(i.type==="orthographic")t=new Ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar);if(i.name)t.name=this.createUniqueName(i.name);return yi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));if(t.inverseBindMatrices!==undefined)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new dt;if(r!==null)f.fromArray(r.array,l*16);c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $r(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],b=d.target,y=b.node,A=s.parameters!==undefined?s.parameters[p.input]:p.input,m=s.parameters!==undefined?s.parameters[p.output]:p.output;if(b.node===undefined)continue;a.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",m)),l.push(p),u.push(b)}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],b=h[3],y=h[4],A=[];for(let w=0,C=f.length;w<C;w++){let g=f[w],M=d[w],S=p[w],P=b[w],_=y[w];if(g===undefined)continue;if(g.updateMatrix)g.updateMatrix();let T=i._createAnimationTracks(g,M,S,P,_);if(T)for(let F=0;F<T.length;F++)A.push(T[F])}let m=new Do(r,undefined,A);return yi(m,s),m})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];if(s.mesh===undefined)return null;return i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);if(s.weights!==undefined)a.traverse(function(o){if(!o.isMesh)return;for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]});return a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===undefined?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];if(f!==null)u.traverse(function(d){if(!d.isSkinnedMesh)return;d.bind(f,$3)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==undefined&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==undefined)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(c)o.push(c);if(r.camera!==undefined)o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)}));return s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===true)u=new Zr;else if(l.length>1)u=new Ht;else if(l.length===1)u=l[0];else u=new jt;if(u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name)u.userData.name=r.name,u.name=a;if(yi(u,r),r.extensions)Ds(i,u,r);if(r.matrix!==undefined){let h=new dt;h.fromArray(r.matrix),u.applyMatrix4(h)}else{if(r.translation!==undefined)u.position.fromArray(r.translation);if(r.rotation!==undefined)u.quaternion.fromArray(r.rotation);if(r.scale!==undefined)u.scale.fromArray(r.scale)}if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==undefined&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ht;if(i.name)r.name=s.createUniqueName(i.name);if(yi(r,i),i.extensions)Ds(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];if(f.parent!==null)r.add(vf(f));else r.add(f)}let l=(u)=>{let h=new Map;for(let[f,d]of s.associations)if(f instanceof Nn||f instanceof an)h.set(f,d);return u.traverse((f)=>{let d=s.associations.get(f);if(d!=null)h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){if(d.morphTargetInfluences)c.push(d.name?d.name:d.uuid)}if(ls[r.path]===ls.weights){if(l(e),e.isGroup)e.children.forEach(l)}else c.push(o);let u;switch(ls[r.path]){case ls.weights:u=ns;break;case ls.rotation:u=is;break;case ls.translation:case ls.scale:u=Es;break;default:switch(i.itemSize){case 1:u=ns;break;case 2:case 3:default:u=Es;break}break}let h=s.interpolation!==undefined?q3[s.interpolation]:po,f=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){let b=new u(c[d]+"."+ls[r.path],t.array,f,h);if(s.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(b);a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=yu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof is?Xf:Su)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=true}}function Q3(e,t,i){let s=t.attributes,r=new En;if(s.POSITION!==undefined){let c=i.json.accessors[s.POSITION],{min:l,max:u}=c;if(l!==undefined&&u!==undefined){if(r.set(new I(l[0],l[1],l[2]),new I(u[0],u[1],u[2])),c.normalized){let h=yu(Er[c.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=t.targets;if(a!==undefined){let c=new I,l=new I;for(let u=0,h=a.length;u<h;u++){let f=a[u];if(f.POSITION!==undefined){let d=i.json.accessors[f.POSITION],{min:p,max:b}=d;if(p!==undefined&&b!==undefined){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let y=yu(Er[d.componentType]);l.multiplyScalar(y)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}e.boundingBox=r;let o=new on;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Sf(e,t,i){let s=t.attributes,r=[];function a(o,c){return i.getDependency("accessor",o).then(function(l){e.setAttribute(c,l)})}for(let o in s){let c=_u[o]||o.toLowerCase();if(c in e.attributes)continue;r.push(a(s[o],c))}if(t.indices!==undefined&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(c){e.setIndex(c)});r.push(o)}if(Tt.workingColorSpace!==Ln&&"COLOR_0"in s)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`);return yi(e,t),Q3(e,t,i),Promise.all(r).then(function(){return t.targets!==undefined?K3(e,t.targets,i):e})}var Yf=function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=="object")return{supported:false};var r=WebAssembly.validate(i)?c(t):c(e),a,o=WebAssembly.instantiate(r,{}).then(function(m){a=m.instance,a.exports.__wasm_call_ctors()});function c(m){var w=new Uint8Array(m.length);for(var C=0;C<m.length;++C){var g=m.charCodeAt(C);w[C]=g>96?g-97:g>64?g-39:g+4}var M=0;for(var C=0;C<m.length;++C)w[M++]=w[C]<60?s[w[C]]:(w[C]-60)*64+w[++C];return w.buffer.slice(0,M)}function l(m,w,C,g,M,S,P){var _=m.exports.sbrk,T=g+3&-4,F=_(T*M),L=_(S.length),k=new Uint8Array(m.exports.memory.buffer);k.set(S,L);var G=w(F,g,M,L,S.length);if(G==0&&P)P(F,T,M);if(C.set(k.subarray(F,F+g*M)),_(F-_(0)),G!=0)throw Error("Malformed buffer data: "+G)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function p(m){var w={object:new Worker(m),pending:0,requests:{}};return w.object.onmessage=function(C){var g=C.data;w.pending-=g.count,w.requests[g.id][g.action](g.value),delete w.requests[g.id]},w}function b(m){var w="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+A.name+";"+l.toString()+A.toString(),C=new Blob([w],{type:"text/javascript"}),g=URL.createObjectURL(C);for(var M=f.length;M<m;++M)f[M]=p(g);for(var M=m;M<f.length;++M)f[M].object.postMessage({});f.length=m,URL.revokeObjectURL(g)}function y(m,w,C,g,M){var S=f[0];for(var P=1;P<f.length;++P)if(f[P].pending<S.pending)S=f[P];return new Promise(function(_,T){var F=new Uint8Array(C),L=++d;S.pending+=m,S.requests[L]={resolve:_,reject:T},S.object.postMessage({id:L,count:m,size:w,source:F,mode:g,filter:M},[F.buffer])})}function A(m){var w=m.data;self.ready.then(function(C){if(!w.id)return self.close();try{var g=new Uint8Array(w.count*w.size);l(C,C.exports[w.mode],g,w.count,w.size,w.source,C.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:g},[g.buffer])}catch(M){self.postMessage({id:w.id,count:w.count,action:"reject",value:M})}})}return{ready:o,supported:true,useWorkers:function(m){b(m)},decodeVertexBuffer:function(m,w,C,g,M){l(a,a.exports.meshopt_decodeVertexBuffer,m,w,C,g,a.exports[u[M]])},decodeIndexBuffer:function(m,w,C,g){l(a,a.exports.meshopt_decodeIndexBuffer,m,w,C,g)},decodeIndexSequence:function(m,w,C,g){l(a,a.exports.meshopt_decodeIndexSequence,m,w,C,g)},decodeGltfBuffer:function(m,w,C,g,M,S){l(a,a.exports[h[M]],m,w,C,g,a.exports[u[S]])},decodeGltfBufferAsync:function(m,w,C,g,M){if(f.length>0)return y(m,w,C,h[g],u[M]);return o.then(function(){var S=new Uint8Array(m*w);return l(a,a.exports[h[g]],S,m,w,C,a.exports[u[M]]),S})}}}();var Nt={brick:"#8e3825",brickDark:"#6c2a1b",trim:"#b4583a",roof:"#2b3244",spire:"#232a3a",dark:"#0b0d13",stone:"#c9b9a4"};function Fs(e,t){let i=e.index?e.toNonIndexed():e;if(i!==e)e.dispose();i.deleteAttribute("uv");let s=new He(t),r=i.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)s.toArray(a,o*3);if(i.setAttribute("color",new pt(a,3)),!i.attributes.normal)i.computeVertexNormals();return i}function cn(e,t,i,s,r,a,o){return Fs(new bi(e,t,i).translate(s,r+t/2,a),o)}function wu(e,t,i,s,r,a,o,c){let l=e/2,u=t/2,h=[-l,0,-u,-l,0,u,-l,i,0,l,0,u,l,0,-u,l,i,0,-l,0,u,l,0,u,l,i,0,-l,0,u,l,i,0,-l,i,0,l,0,-u,-l,0,-u,-l,i,0,l,0,-u,-l,i,0,l,i,0],f=new ct;if(f.setAttribute("position",new it(h,3)),o==="z")f.rotateY(Math.PI/2);return f.translate(s,r,a),f.computeVertexNormals(),Fs(f,c)}function e4(e,t,i,s,r,a,o,c,l){let u=e/2,h=o,f=o+c*t,d=[-u,a+s,h,u,a+s,h,u,a+i,f,-u,a+s,h,u,a+i,f,-u,a+i,f],p=new ct;return p.setAttribute("position",new it(d,3)),p.translate(r,0,0),p.computeVertexNormals(),Fs(p,l)}function Ls(e,t,i,s,r,a,o,c=0){return Fs(new hr(e,t,i,1).rotateY(c).translate(s,r+t/2,a),o)}function Jf(e,t,i,s,r,a,o,c=0,l=Math.PI*2){return Fs(new ur(e,e,t,i,1,false,c,l).translate(s,r+t/2,a),o)}function Zf(){let e=[],t=(r)=>e.push(r);t(cn(7.6,3.6,3,0.8,0,0,Nt.brick)),t(wu(7.8,3.2,2.5,0.8,3.6,0,"x",Nt.roof)),[-1,1].forEach((r)=>{t(cn(6.6,2.3,1.1,0.3,0,r*2.05,Nt.brickDark)),t(e4(6.6,1.25,2.3,3.15,0.3,0,r*1.5,r,Nt.roof));for(let a=0;a<6;a++){let o=-2.6+a*1.18;if(t(cn(0.26,2.75,0.42,o,0,r*2.75,Nt.brick)),t(Ls(0.13,0.7,4,o,2.75,r*2.75,Nt.trim,Math.PI/4)),a<5)t(cn(0.32,1.25,0.04,o+0.59,0.55,r*2.62,Nt.dark))}for(let a=0;a<5;a++)t(cn(0.28,0.75,0.04,-2+a*1.18,2.55,r*1.52,Nt.dark))}),t(cn(1.8,3.6,6.6,3.55,0,0,Nt.brick)),t(wu(6.8,2,2.3,3.55,3.6,0,"z",Nt.roof)),[-1,1].forEach((r)=>{t(cn(0.7,1.9,0.04,3.55,1,r*3.32,Nt.dark)),t(Ls(0.16,0.9,4,2.7,3.6,r*3.25,Nt.trim,Math.PI/4)),t(Ls(0.16,0.9,4,4.4,3.6,r*3.25,Nt.trim,Math.PI/4))}),t(Ls(0.22,1.6,6,3.55,6,0,Nt.spire)),t(Jf(1.5,3.4,8,4.6,0,0,Nt.brick,0,Math.PI)),t(Fs(new hr(1.5,1.9,8,1,false,0,Math.PI).translate(4.6,4.35,0),Nt.roof));for(let r=0;r<5;r++){let a=r/4*Math.PI;t(cn(0.05,1.5,0.3,4.6+Math.sin(a)*1.48,0.8,Math.cos(a)*1.48,Nt.dark))}let i=-4.05;t(cn(2.3,5.2,2.3,i,0,0,Nt.brick)),t(cn(2,2,2,i,5.2,0,Nt.brickDark)),[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([r,a])=>{t(cn(0.36,6.4,0.36,i+r*1.18,0,a*1.18,Nt.brick)),t(Ls(0.2,1.1,4,i+r*1.18,6.4,a*1.18,Nt.trim,Math.PI/4))}),[[0,1.01],[0,-1.01]].forEach(([,r])=>{t(cn(0.32,1.35,0.04,i-0.35,5.45,r,Nt.dark)),t(cn(0.32,1.35,0.04,i+0.35,5.45,r,Nt.dark)),t(cn(0.5,1.6,0.04,i,2.2,r*1.14,Nt.dark))}),[[-1.01],[1.01]].forEach(([r])=>{t(cn(0.04,1.35,0.32,i+r,5.45,-0.35,Nt.dark)),t(cn(0.04,1.35,0.32,i+r,5.45,0.35,Nt.dark))}),t(cn(0.06,2,0.85,i-1.18,0,0,Nt.dark)),t(Fs(new Ss(0.42,8).rotateY(-Math.PI/2).translate(i-1.19,3.4,0),Nt.dark)),t(cn(2.2,0.16,2.2,i,7.2,0,Nt.trim)),[0,Math.PI/2,Math.PI,-Math.PI/2].forEach((r)=>{let a=wu(0.9,0.18,0.95,0,0,0,"x",Nt.spire);a.rotateY(r),a.translate(i+Math.sin(r)*0.9,7.36,Math.cos(r)*0.9),t(a)}),t(Ls(1,5.6,8,i,7.36,0,Nt.spire,Math.PI/8)),t(cn(0.06,0.7,0.06,i,12.95,0,Nt.stone)),t(cn(0.06,0.06,0.36,i,13.38,0,Nt.stone)),[-1,1].forEach((r)=>{t(Jf(0.34,3.4,8,-2.95,0,r*2.35,Nt.brick)),t(Ls(0.42,1.5,8,-2.95,3.4,r*2.35,Nt.spire,Math.PI/8))});let s=bf(e,false);return e.forEach((r)=>r.dispose()),s.computeBoundingBox(),s}var pa=2600,t4=3200;function $f(e,t,i,s,r,a,o,c,l,u){let h=t/(2*i);e.width=e.height=t;let f=e.getContext("2d",{willReadFrequently:true});f.fillStyle="#000",f.fillRect(0,0,t,t),f.globalCompositeOperation="lighter",f.lineCap="round",f.lineJoin="round";let d=(g)=>(g+i)*h,p=(g)=>(i-g)*h,b=(g,M)=>{f.beginPath(),f.moveTo(d(g[0]),p(g[1]));for(let S=2;S<g.length;S+=2)f.lineTo(d(g[S]),p(g[S+1]));if(M)f.closePath()},y=[[11,0.2,30,0.07],[9,0.17,24,0.06],[6.5,0.11,15,0.04],[4,0.05,8,0.02],[7,0.2,18,0.07],[2.4,0.035,0,0]],A=(g)=>`rgba(255,255,255,${Math.min(1,g).toFixed(4)})`;for(let g=0;g<s.length;g++){let M=s[g],S=y[M.c];if(!S)continue;let P=r[g];if(M.c===5&&P<0.7)continue;if(b(M.r,false),S[2])f.lineWidth=S[2]*h,f.strokeStyle=A(S[3]*P),f.stroke();f.lineWidth=S[0]*h,f.strokeStyle=A(S[1]*P),f.stroke()}for(let g of c)b(g,true),f.fillStyle=A(0.1),f.fill();f.lineWidth=5*h;for(let g of l)b(g,true),f.strokeStyle=A(0.07),f.stroke();f.lineWidth=6*h;for(let g of u)b(g,true),f.strokeStyle=A(0.13),f.stroke();let m=13*h;for(let g=0,M=a.length/3;g<M;g++){let S=d(a[g*3]),P=p(-a[g*3+2]),_=0.3*o[g],T=f.createRadialGradient(S,P,0,S,P,m);T.addColorStop(0,A(_)),T.addColorStop(0.45,A(_*0.35)),T.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=T,f.fillRect(S-m,P-m,m*2,m*2)}let w=f.getImageData(0,0,t,t).data,C=new Uint8Array(t*t);for(let g=0;g<t*t;g++)C[g]=w[g*4];return C}function n4(e){if(typeof OffscreenCanvas>"u"||typeof Worker>"u")return Promise.reject(Error("bez OffscreenCanvas"));return new Promise((t,i)=>{let s=`const paint = ${$f.toString()};
onmessage = (e) => { const a = e.data; const d = paint(new OffscreenCanvas(1, 1), ...a); postMessage(d, [d.buffer]); };`,r=URL.createObjectURL(new Blob([s],{type:"text/javascript"})),a;try{a=new Worker(r)}catch(c){URL.revokeObjectURL(r),i(c);return}let o=()=>{a.terminate(),URL.revokeObjectURL(r)};a.onmessage=(c)=>{o(),t(c.data)},a.onerror=(c)=>{c.preventDefault?.(),o(),i(Error("worker"))},a.postMessage(e)})}async function Qf({roads:e,lamps:t,lampK:i,squares:s,shops:r,riverside:a=[],zone:o,lite:c}){let l=c?1024:2048,u=e.map((p)=>o(p.r[0],p.r[1])*(p.w?1.8:1)),h=[l,pa,e.map((p)=>({c:p.c,r:p.r})),u,t,i,s,r,a],f;try{f=await n4(h)}catch{f=$f(document.createElement("canvas"),...h)}let d=new gi(f,l,l,mi,_n);return d.wrapS=d.wrapT=Zi,d.magFilter=Wt,d.minFilter=Hn,d.generateMipmaps=true,d.anisotropy=4,d.needsUpdate=true,d}function i4(){let e=new gi(new Uint8Array(4),2,2,mi,_n);return e.needsUpdate=true,e}var Ko=`
  uniform sampler2D uLM;
  uniform vec2 uFog;      // početak magle (m), 1 / duljina (1/m)
  uniform vec3 uFogCol;   // linearno
  uniform vec3 uCamL;     // kamera u lokalnim metrima
  uniform float uLamp;    // jačina uličnog svjetla 0…1
  float lmAt(vec2 p){
    vec2 uv = (vec2(p.x, p.y) + ${pa.toFixed(1)}) / ${(2*pa).toFixed(1)};
    float m = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    return texture2D(uLM, clamp(uv, 0.0, 1.0)).r * m;
  }
  // natrij u sjeni prelazi u toplo bijelo gdje je svjetla najviše (LED glavnih ulica)
  // oštro uzorkovanje (bez mipmapa): pojedine svjetiljke ostaju zasebne pruge u odsjaju
  float lmSharp(vec2 p){
    vec2 uv = (p + ${pa.toFixed(1)}) / ${(2*pa).toFixed(1)};
    float m = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    return textureLod(uLM, clamp(uv, 0.0, 1.0), 0.5).r * m;
  }
  vec3 lampTone(float L){ return vec3(1.0, 0.42, 0.13) * L + vec3(1.0, 0.72, 0.42) * L * L * 1.4; }
  vec3 fogIt(vec3 c, vec3 p){ float d = length(p - uCamL); float f = 1.0 - exp(-max(d - uFog.x, 0.0) * uFog.y); return mix(c, uFogCol, f); }
  float ch(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
  vec3 toOut(vec3 c){ return pow(max(c, 0.0), vec3(0.4545)); }
  float dith(){ return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
`;function ep(){return{uLM:{value:i4()},uFog:{value:new ze(1e5,0)},uFogCol:{value:new I(0.0027,0.004,0.0085)},uCamL:{value:new I},uLamp:{value:0},uMoon:{value:new I(-40,60,34).normalize()},uRise:{value:0},uDim:{value:0},uTime:{value:0}}}function tp(e,{lite:t}){let i=Object.assign({uAlpha:{value:1},uWinI:{value:1},uShop:{value:1}},e);return new wt({uniforms:i,transparent:true,vertexShader:`
      attribute vec4 aCol; attribute vec4 aWin;
      uniform float uRise;
      varying vec3 vL; varying vec3 vP; varying vec4 vWin; varying vec4 vCol;
      void main(){
        vec3 p = position;
        p.y *= clamp((uRise * ${t4.toFixed(1)} - length(p.xz)) / 260.0, 0.0, 1.0);
        vL = position; vP = p; vWin = aWin; vCol = aCol;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      ${Ko}
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
      }`})}function np(e){let t=Object.assign({uOpacity:{value:1},uGlow:{value:0}},e);return new wt({uniforms:t,transparent:true,depthWrite:false,blending:Ji,blendSrc:fi,blendDst:no,vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${Ko}
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
      }`})}function ip(e){let t=Object.assign({uOpacity:{value:1}},e);return new wt({uniforms:t,transparent:true,depthWrite:false,vertexShader:"attribute vec3 aCol; varying vec3 vL; varying vec3 vC; void main(){ vL = position; vC = aCol; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${Ko}
      uniform float uOpacity; uniform float uDim; varying vec3 vL; varying vec3 vC;
      void main(){
        float L = lmAt(vL.xz) * uLamp;
        vec3 c = vC * (0.07 + lampTone(L) * 1.25);
        c = fogIt(c, vL) * pow(1.0 - uDim * 0.6, 2.2);
        gl_FragColor = vec4(toOut(c) + dith(), uOpacity);
      }`})}function sp(e,{lite:t}){let i=Object.assign({uOpacity:{value:1}},e),s=t?4:7;return new wt({uniforms:i,transparent:true,depthWrite:false,vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      ${Ko}
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
      }`})}var rp=3200;function s4(e){let t=new Int32Array(e,0,13),i=new Int16Array(e,52),s=0,r=(o,c)=>{let l=[];for(let u=0;u<o;u++){let h=[];for(let p=0;p<c;p++)h.push(i[s++]);let f=i[s++],d=new Float32Array(f*2);for(let p=0;p<f;p++)d[p*2]=i[s++]/2,d[p*2+1]=i[s++]/2;l.push({h,r:d})}return l},a=[];for(let o of r(t[1],2))if(o.h[1]&8)a[a.length-1]?.holes.push(o.r);else o.holes=[],a.push(o);return{buildings:a,roads:r(t[3],1),water:r(t[5],1),areas:r(t[7],1),marks:r(t[9],1)}}var ap=(e)=>{let t=0,i=e.length/2;for(let s=0,r=i-1;s<i;r=s++)t+=(e[r*2]-e[s*2])*(e[r*2+1]+e[s*2+1]);return t/2},Yo=(e)=>{let t=0,i=0,s=e.length/2;for(let r=0;r<s;r++)t+=e[r*2],i+=e[r*2+1];return[t/s,i/s]},ma=(e)=>{let t=[];for(let i=0;i<e.length;i+=2)t.push(new ze(e[i],e[i+1]));return t};function r4(e,t,i){let s=false;for(let r=0,a=i.length/2-1;r<i.length/2;a=r++){let o=i[r*2],c=i[r*2+1],l=i[a*2],u=i[a*2+1];if(c>t!==u>t&&e<(l-o)*(t-c)/(u-c)+o)s=!s}return s}function a4(e,t){let i=1/0,s=1/0,r=-1/0,a=-1/0;for(let h of e)for(let f=0;f<h.length;f+=2)i=Math.min(i,h[f]),r=Math.max(r,h[f]),s=Math.min(s,h[f+1]),a=Math.max(a,h[f+1]);if(!(r>i))return()=>false;let o=Math.ceil((r-i)/t)+1,c=Math.ceil((a-s)/t)+1,l=new Uint8Array(o*c),u=[];for(let h=0;h<c;h++){let f=s+(h+0.5)*t;u.length=0;for(let d of e){let p=d.length/2;for(let b=0,y=p-1;b<p;y=b++){let A=d[b*2+1],m=d[y*2+1];if(A>f!==m>f)u.push(d[b*2]+(d[y*2]-d[b*2])*(f-A)/(m-A))}}u.sort((d,p)=>d-p);for(let d=0;d+1<u.length;d+=2){let p=Math.max(0,Math.ceil((u[d]-i)/t-0.5)),b=Math.min(o-1,Math.floor((u[d+1]-i)/t-0.5));l.fill(1,h*o+p,h*o+b+1)}}return(h,f)=>{let d=Math.floor((h-i)/t),p=Math.floor((f-s)/t);return d>=0&&p>=0&&d<o&&p<c&&l[p*o+d]===1}}function Aa(e,t){let i=e.length/2,s=new Float32Array(i*2);for(let r=0;r<i;r++){let a=(r+i-1)%i,o=(r+1)%i,c=e[r*2]-e[a*2],l=e[r*2+1]-e[a*2+1],u=e[o*2]-e[r*2],h=e[o*2+1]-e[r*2+1],f=Math.hypot(c,l)||1,d=Math.hypot(u,h)||1;c/=f,l/=f,u/=d,h/=d;let p=-l-h,b=c+u,y=Math.hypot(p,b);if(y<0.0001)p=-l,b=c;else p/=y,b/=y;let A=Math.max(0.45,p*-l+b*c);s[r*2]=e[r*2]+p*t/A,s[r*2+1]=e[r*2+1]+b*t/A}return s}class op{constructor(e){this.n=0,this.alloc(e)}alloc(e){let t=new Float32Array(e*3),i=new Uint8Array(e*4),s=new Float32Array(e*4);if(this.p)t.set(this.p),i.set(this.c),s.set(this.w);this.p=t,this.c=i,this.w=s,this.cap=e}v(e,t,i,s,r,a){if(this.n===this.cap)this.alloc(this.cap*2);let o=this.n++;if(this.p[o*3]=e,this.p[o*3+1]=t,this.p[o*3+2]=i,this.c[o*4]=Math.min(255,s[0]*255+0.5),this.c[o*4+1]=Math.min(255,s[1]*255+0.5),this.c[o*4+2]=Math.min(255,s[2]*255+0.5),this.c[o*4+3]=r*40,a)this.w[o*4]=a[0],this.w[o*4+1]=a[1],this.w[o*4+2]=a[2],this.w[o*4+3]=a[3]}tri(e,t,i,s,r){this.v(e[0],e[1],e[2],s,r),this.v(t[0],t[1],t[2],s,r),this.v(i[0],i[1],i[2],s,r)}triUp(e,t,i,s,r){let a=t[0]-e[0],o=t[2]-e[2],c=i[0]-e[0],l=i[2]-e[2];if(o*c-a*l>=0)this.tri(e,t,i,s,r);else this.tri(e,i,t,s,r)}geometry(){let e=this.n,t=new ct;return t.setAttribute("position",new pt(this.p.slice(0,e*3),3)),t.setAttribute("aCol",new pt(this.c.slice(0,e*4),4,true)),t.setAttribute("aWin",new pt(this.w.slice(0,e*4),4)),t.computeBoundingSphere(),t}}function cp({lite:e,dataUrl:t,modelUrl:i,onLines:s,onModel:r,onLoaded:a,prepare:o}){let c=Yn(1945),l=new Ht;l.name="osijek";let u=ep(),h=u,f=e?1400:2600,d=e?380:650,p=e?600:1100,b=[],y=(K)=>(b.push(K),K),A=false,m=false,w={cath:new I(30,99,-4),hotel:new I(329,66,-154),trg:new I(105,4,-78),drava:new I(80,4,-470)},C=y(np(u)),g=new Ft(y(new Ss(5200,64).rotateX(-Math.PI/2)),C);g.position.y=-0.4,g.renderOrder=-1,l.add(g);let M=y(tp(u,{lite:e})),S=null,P={uRise:h.uRise,uDim:h.uDim,uLines:{value:0.4},uColor:{value:new He("#5d7ed6")}},_=y(new wt({uniforms:P,transparent:true,depthWrite:false,vertexShader:`uniform float uRise; varying float vF;
      void main(){ vec3 p = position; float dR = length(p.xz); float k = clamp((uRise * ${rp.toFixed(1)} - dR) / 260.0, 0.0, 1.0); p.y *= k; vF = (1.0 - smoothstep(300.0, 1100.0, dR)) * k;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform vec3 uColor; uniform float uLines; varying float vF; void main(){ gl_FragColor = vec4(uColor, uLines * vF); }"})),T=y(sp(u,{lite:e})),F=y(ip(u)),L=nn({count:1,color:"#ffae55",core:"#fff1d6",size:0.9});L.points.renderOrder=4;let k=new I,G=new I,B={uLift:{value:0},uGlow:{value:0.5},uAlpha:{value:1},uFocus:{value:0},uScan:{value:200},uScanOn:{value:0},uWin:{value:0.3}};function V(){let K=new es({vertexColors:true,flatShading:true,roughness:0.84,metalness:0.02,transparent:true,side:Qt});return K.forceSinglePass=true,K.depthWrite=true,K.onBeforeCompile=(he)=>{Object.assign(he.uniforms,B),he.vertexShader=he.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind; uniform float uLift; varying float vH; varying float vKind; varying vec3 vLoc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vKind = aKind; vLoc = position; transformed.y = transformed.y * uLift - (1.0 - uLift) * 3.0;`),he.fragmentShader=he.fragmentShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.a *= uAlpha;`)},K.customProgramCacheKey=()=>"zaec-cath-v4",K}let te={uLift:B.uLift,uScan:B.uScan,uScanOn:B.uScanOn,uI:{value:0}},Y=y(new wt({uniforms:te,transparent:true,depthWrite:false,blending:Zt,side:Qt,vertexShader:`attribute vec4 aGlow; uniform float uLift; varying vec4 vG; varying float vH;
      void main(){ vG = aGlow; vH = position.y; vec3 p = position; p.y = p.y * uLift - (1.0 - uLift) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uI; uniform float uScan; uniform float uScanOn; varying vec4 vG; varying float vH;
      void main(){
        float a = vG.a * vG.a * uI;
        if (uScanOn > 0.5 && vH > uScan) discard;
        if (a < 0.003) discard;
        gl_FragColor = vec4(vG.rgb * a, a);
      }`})),q=null,W=null,U=null,Z=null,be=0,Te=new I(33.8,90,1),ft=null;function Qe(K,he,pe=null,J=false){let je=++be;if(!K.attributes.aKind)K.setAttribute("aKind",new pt(new Float32Array(K.attributes.position.count),1));let ut=V(),Lt=new Ft(K,ut);Lt.renderOrder=1;let xt=J?null:new dr(K,he?22:30),ie=()=>{if(je!==be){K.dispose(),ut.dispose(),xt?.dispose(),pe?.dispose();return}if(clearTimeout(ft?.timer),ft=null,W)l.remove(W),W.geometry.dispose(),U.dispose(),Z?.dispose();if(q)l.remove(q),q.geometry.dispose(),q=null;if(pe)q=new Ft(pe,Y),q.renderOrder=5,q.frustumCulled=false,l.add(q);let D=K.attributes.position,Ce=0;for(let Pe=1;Pe<D.count;Pe++)if(D.getY(Pe)>D.getY(Ce))Ce=Pe;if(Te.set(D.getX(Ce),D.getY(Ce),D.getZ(Ce)),w.cath.set(Te.x-4,Te.y*1.06,Te.z),W=Lt,U=ut,Z=xt,l.add(Lt),xt)s?.(xt,he);else{let Pe=()=>{if(je!==be||Z)return;Z=new dr(K,22),s?.(Z,true)};ft={run:Pe,timer:setTimeout(Pe,6000)}}r?.(Lt)};if(o)o(Lt).then(ie,ie);else ie()}{let K=Zf();K.scale(-7,7,7),K.translate(2,0,-3.8),K.deleteAttribute("normal"),Qe(K,true,null,!!i)}if(i){let K=new Mu;K.setMeshoptDecoder(Yf),K.load(i,(he)=>{let pe=(ie)=>{for(let D=ie;D;D=D.parent)if(D.name==="konkatedrala"||D.name==="sjaj")return D.name;return""},J=null,je=null;if(he.scene.updateMatrixWorld(true),he.scene.traverse((ie)=>{if(!ie.isMesh)return;if(pe(ie)==="sjaj")je=je||ie;else J=J||ie}),!J)return;let ut=(ie,D)=>{let Ce=new ct,Pe=ie.getAttribute("position"),$e=new Float32Array(Pe.count*3);for(let x=0;x<Pe.count;x++)$e[x*3]=Pe.getX(x),$e[x*3+1]=Pe.getY(x),$e[x*3+2]=Pe.getZ(x);Ce.setAttribute("position",new pt($e,3));let E=ie.getAttribute("color");if(E&&D){let x=new Float32Array(E.count*3),N=new Float32Array(E.count);for(let X=0;X<E.count;X++)x[X*3]=E.getX(X),x[X*3+1]=E.getY(X),x[X*3+2]=E.getZ(X),N[X]=E.itemSize>3?Math.round(E.getW(X)*4):0;Ce.setAttribute("color",new pt(x,3)),Ce.setAttribute("aKind",new pt(N,1))}else if(E){let x=new Float32Array(E.count*4);for(let N=0;N<E.count;N++)x[N*4]=E.getX(N),x[N*4+1]=E.getY(N),x[N*4+2]=E.getZ(N),x[N*4+3]=E.itemSize>3?E.getW(N):1;Ce.setAttribute("aGlow",new pt(x,4))}if(ie.index)Ce.setIndex(ie.index.clone());return Ce},Lt=ut(J.geometry,true);Lt.applyMatrix4(J.matrixWorld);let xt=null;if(je)xt=ut(je.geometry,false),xt.applyMatrix4(je.matrixWorld);he.scene.traverse((ie)=>{if(ie.isMesh)ie.geometry.dispose(),ie.material.dispose?.()}),Qe(Lt,false,xt)},undefined,(he)=>{console.warn("[ZAEC] model konkatedrale nije učitan, koristi se rezervni",he),ft?.run()})}let Q=new mr("#ff9a5c",0,32,1.4),ge=new I(40,14,30),fe=new Ht,Ye={uRise:h.uRise,uDim:h.uDim,uAlpha:{value:1}},et=y(new wt({uniforms:Ye,transparent:true,vertexShader:`varying vec3 vL; varying vec3 vN; varying vec3 vW; uniform float uRise;
      void main(){ vL = position; vN = normalize(mat3(modelMatrix) * normal); vec3 p = position;
        float k = clamp((uRise * ${rp.toFixed(1)} - 360.0) / 260.0, 0.0, 1.0); p.y *= k;
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
      }`}));l.add(fe);let Ne=[];async function Ct(){let K=await(await fetch(t)).arrayBuffer(),he=s4(K),pe=new op(262144),J=Math.PI/180,je=he.water.filter((oe)=>oe.h[0]===0),ut=he.water.filter((oe)=>oe.h[0]===1),Lt=a4([...je,...ut].map((oe)=>oe.r),4),xt=(oe,se,Ee=45)=>Lt(oe+Ee,se)||Lt(oe-Ee,se)||Lt(oe,se+Ee)||Lt(oe,se-Ee),ie=[],D=(oe,se)=>0.45+0.55*Math.exp(-Math.hypot(oe-112,se-53)/900)+0.4*Math.exp(-Math.hypot(oe-1550,se-20)/420),Ce=(oe,se)=>Math.min(Math.hypot(oe-112,se-53)/900,Math.hypot(oe-1550,se-20)/450),Pe=[[0.56,0.46,0.3],[0.6,0.52,0.38],[0.5,0.41,0.28],[0.55,0.5,0.42],[0.44,0.45,0.42],[0.52,0.37,0.29],[0.41,0.45,0.37],[0.62,0.58,0.5]],$e=[[0.36,0.37,0.38],[0.44,0.43,0.4],[0.3,0.31,0.33],[0.5,0.47,0.42]],E=[[0.27,0.27,0.28],[0.3,0.16,0.11],[0.34,0.33,0.31]],x=[[0.4,0.13,0.07],[0.33,0.11,0.06],[0.45,0.17,0.09],[0.3,0.14,0.09],[0.38,0.18,0.12]],N=[[0.1,0.11,0.13],[0.13,0.14,0.16],[0.16,0.15,0.15]],X=[[0.09,0.09,0.095],[0.12,0.12,0.12],[0.07,0.075,0.08]],de=[0.3,0.12,0.08],me=(oe)=>oe[c()*oe.length|0],Se=(oe,se)=>oe.map((Ee)=>Ee*(1-se+c()*2*se)),ne=[0,3.6,3,3.4,6],re=[],Ue=(oe,se,Ee,qe,Fe,Oe)=>{for(let xe=0;xe<se;xe++){let Me=(xe+1)%se,Je=oe[xe*2],ee=-oe[xe*2+1],ce=oe[Me*2],v=-oe[Me*2+1],R=null,O=null;if(Oe){let z=Math.hypot(ce-Je,v-ee),H=ne[Oe.prof],ue=Math.floor(z/H);if(ue>=1){let _e=(z-ue*H)/2,le=Oe.prof+Oe.seed;R=[-_e,Oe.top,ue*H,le],O=[z-_e,Oe.top,ue*H,le]}}pe.v(Je,Ee,ee,Fe,0,R),pe.v(ce,Ee,v,Fe,0,O),pe.v(ce,qe,v,Fe,0,O),pe.v(Je,Ee,ee,Fe,0,R),pe.v(ce,qe,v,Fe,0,O),pe.v(Je,qe,ee,Fe,0,R)}},Xe=(oe,se,Ee,qe,Fe,Oe)=>{for(let xe=0,Me=oe.length/2;xe<Me;xe++){let Je=(xe+1)%Me,ee=[oe[xe*2],Ee,-oe[xe*2+1]],ce=[oe[Je*2],Ee,-oe[Je*2+1]],v=[se[xe*2],qe,-se[xe*2+1]],R=[se[Je*2],qe,-se[Je*2+1]];pe.tri(ee,ce,R,Fe,Oe),pe.tri(ee,R,v,Fe,Oe)}},ve=(oe,se,Ee,qe,Fe=[])=>{let Oe=ma(oe),xe=[];try{xe=li.triangulateShape(Oe,Fe.map(ma))}catch(Me){xe=[]}if(xe.length){let Me=Fe.length?Float32Array.from([...oe,...Fe.flatMap((Je)=>[...Je])]):oe;for(let[Je,ee,ce]of xe)pe.triUp([Me[Je*2],se,-Me[Je*2+1]],[Me[ee*2],se,-Me[ee*2+1]],[Me[ce*2],se,-Me[ce*2+1]],Ee,qe)}else{let[Me,Je]=Yo(oe);for(let ee=0,ce=oe.length/2;ee<ce;ee++){let v=(ee+1)%ce;pe.triUp([Me,se,-Je],[oe[v*2],se,-oe[v*2+1]],[oe[ee*2],se,-oe[ee*2+1]],Ee,qe)}}},ye=(oe,se,Ee,qe,Fe,Oe,xe,Me,Je,ee)=>{let ce=-Oe,v=Fe,R=[oe-Fe*Ee-ce*qe,se-Oe*Ee-v*qe,oe+Fe*Ee-ce*qe,se+Oe*Ee-v*qe,oe+Fe*Ee+ce*qe,se+Oe*Ee+v*qe,oe-Fe*Ee+ce*qe,se-Oe*Ee+v*qe];for(let O=0;O<4;O++){let z=(O+1)%4,H=R[O*2],ue=-R[O*2+1],_e=R[z*2],le=-R[z*2+1];pe.tri([H,xe,ue],[_e,xe,le],[_e,Me,le],Je,ee),pe.tri([H,xe,ue],[_e,Me,le],[H,Me,ue],Je,ee)}pe.triUp([R[0],Me,-R[1]],[R[2],Me,-R[3]],[R[4],Me,-R[5]],Je,ee),pe.triUp([R[0],Me,-R[1]],[R[4],Me,-R[5]],[R[6],Me,-R[7]],Je,ee)};for(let oe of he.buildings){let se=oe.r,Ee=se.length/2,[qe,Fe]=Yo(se),Oe=Math.hypot(qe,Fe);if(Oe>f)continue;let xe=oe.h[0]/2,Me=oe.h[1],Je=oe.holes,ee=0,ce=0,v=1,R=0;for(let at of Je)for(let Ke=0,_t=at.length/2;Ke<_t;Ke++){let At=(Ke+1)%_t;ee+=Math.hypot(at[At*2]-at[Ke*2],at[At*2+1]-at[Ke*2+1])}let O=Math.abs(ap(se))-Je.reduce((at,Ke)=>at+Math.abs(ap(Ke)),0);for(let at=0;at<Ee;at++){let Ke=(at+1)%Ee,_t=se[Ke*2]-se[at*2],At=se[Ke*2+1]-se[at*2+1],yt=Math.hypot(_t,At);if(ee+=yt,yt>ce)ce=yt,v=_t/yt,R=At/yt}let z=-R,H=v,ue=1e9,_e=-1e9,le=1e9,we=-1e9;for(let at=0;at<Ee;at++){let Ke=se[at*2]-qe,_t=se[at*2+1]-Fe,At=Ke*v+_t*R,yt=Ke*z+_t*H;ue=Math.min(ue,At),_e=Math.max(_e,At),le=Math.min(le,yt),we=Math.max(we,yt)}let Be=we-le,rt=_e-ue,Ze=O/Math.max(1,Be*rt)>0.8,ke=((c()*997|0)+0.5)/1000,ot;if(Me===3||Me===4||xe<3.2)ot=0;else if(Me===5)ot=xe>9?2:4;else if(Me===2)ot=2;else if(Me===1)ot=xe>10?2:1;else ot=Ce(qe,Fe)<1&&xe>=7.5?3:xe>11?2:1;if(ot===3)re.push(se);if(ot&&Oe<2600&&xt(qe,Fe,70))ie.push(se);let Bt=xe<=15&&(Me===0||Me===1||Me===3),St=Se(Me===5||Me===4?me(E):Me===2||xe>15?me($e):me(Pe),0.08),Ot=O<420&&xe<=13&&Ee<=10&&Ze&&!Je.length,Kt=!Ot&&xe<=22&&(Me===0||Me===1||Me===3||O<420&&xe<=13)&&O<6000,We=!Ot&&!Kt&&Me!==4&&O>120?0.9:0;for(let at of[se,...Je])Ue(at,at.length/2,0,xe+We,St,ot?{prof:ot,seed:ke,top:xe}:null);if(Ot){let at=c()<0.88,Ke=Se(at?me(x):me(N),0.1),_t=at?1:2,At=Math.min(6.5,Math.max(1.6,Be/2*Math.tan((38+c()*8)*J))),yt=c(),tn=yt<0.45?1:yt<0.7?0.8:Math.max(0,(rt-Be)/Math.max(rt,1)),nt=(ue+_e)/2,ht=(le+we)/2,Xt=qe+z*ht,bt=Fe+H*ht,bn=(Yt,un)=>{let Bn=nt+((Yt-qe)*v+(un-Fe)*R-nt)*tn;return[Xt+v*Bn,xe+At,-(bt+R*Bn)]};for(let Yt=0;Yt<Ee;Yt++){let un=(Yt+1)%Ee,Bn=[se[Yt*2],xe,-se[Yt*2+1]],Ns=[se[un*2],xe,-se[un*2+1]],Gi=bn(se[Yt*2],se[Yt*2+1]),Tr=bn(se[un*2],se[un*2+1]),Pu=se[un*2]-se[Yt*2],Iu=se[un*2+1]-se[Yt*2+1];if(Math.abs((Pu*v+Iu*R)/(Math.hypot(Pu,Iu)||1))<0.35&&tn>0.99){pe.tri(Bn,Ns,Tr,St,0);continue}if(pe.tri(Bn,Ns,Tr,Ke,_t),Math.hypot(Gi[0]-Tr[0],Gi[2]-Tr[2])>0.05)pe.tri(Bn,Tr,Gi,Ke,_t)}if(Oe<d&&c()<0.7&&Be>4){let Yt=nt+(c()-0.5)*rt*0.5*Math.max(tn,0.4),un=(c()<0.5?-1:1)*Math.min(Be*0.22,0.6+c()*1.1),Bn=Xt+v*Yt+z*un,Ns=bt+R*Yt+H*un,Gi=xe+At*(1-(Math.abs(un)+0.4)/(Be/2))-0.1;ye(Bn,Ns,0.32,0.32,v,R,Gi,xe+At+0.5+c()*0.5,c()<0.6?de:St,4)}}else if(Kt){let at=Bt?c()<0.25:c()<0.6,Ke=Se(at?me(N):me(x),0.1),_t=at?2:1,At=2*O/Math.max(1,ee);if(at&&O>300&&xe>=9&&Oe<1600&&c()<0.5){let yt=Math.min(1.1,At*0.2),nt=[se,...Je].map((Xt)=>Aa(Xt,yt));[se,...Je].forEach((Xt,bt)=>Xe(Xt,nt[bt],xe,xe+2.8,Ke,_t));let ht=Math.min(Math.max(1.5,Math.sqrt(O)*0.12),5,At*0.4-yt);if(ht>0.6){let Xt=nt.map((bt)=>Aa(bt,ht));nt.forEach((bt,bn)=>Xe(bt,Xt[bn],xe+2.8,xe+2.8+ht*0.4,Ke,_t)),ve(Xt[0],xe+2.8+ht*0.4,Ke.map((bt)=>bt*0.94),_t,Xt.slice(1))}else ve(nt[0],xe+2.8,Ke,_t,nt.slice(1))}else{let yt=Math.min(Math.max(2.2,Math.sqrt(O)*0.2),7,At*0.46),tn=yt*Math.tan((30+c()*12)*J),nt=[se,...Je].map((ht)=>Aa(ht,yt));[se,...Je].forEach((ht,Xt)=>Xe(ht,nt[Xt],xe,xe+tn,Ke,_t)),ve(nt[0],xe+tn,Ke.map((ht)=>ht*0.92),_t,nt.slice(1))}}else{let at=Se(me(X),0.1),Ke=xe+We;if(We){let _t=St.map((yt)=>yt*0.85),At=[se,...Je].map((yt)=>Aa(yt,0.45));[se,...Je].forEach((yt,tn)=>{let nt=At[tn];for(let ht=0,Xt=yt.length/2;ht<Xt;ht++){let bt=(ht+1)%Xt,bn=[yt[ht*2],Ke,-yt[ht*2+1]],Yt=[yt[bt*2],Ke,-yt[bt*2+1]],un=[nt[ht*2],Ke,-nt[ht*2+1]],Bn=[nt[bt*2],Ke,-nt[bt*2+1]];pe.tri(bn,Bn,Yt,_t,4),pe.tri(bn,un,Bn,_t,4);let Ns=[nt[ht*2],xe,-nt[ht*2+1]],Gi=[nt[bt*2],xe,-nt[bt*2+1]];pe.tri(Gi,Ns,un,St,4),pe.tri(Gi,un,Bn,St,4)}}),ve(At[0],xe,at,3,At.slice(1))}else ve(se,xe,at,3,Je);if(We&&O>700&&!Je.length&&c()<0.7){let _t=2+c()*3,At=2+c()*3,yt=2.2+c()*1.4,tn=qe+(c()-0.5)*Math.sqrt(O)*0.25,nt=Fe+(c()-0.5)*Math.sqrt(O)*0.25;ye(tn,nt,_t,At,v,R,xe,xe+yt,X[1].map((ht)=>ht*1.6),4)}}if(Oe<p)for(let at of[se,...Je])for(let Ke=0,_t=at.length/2;Ke<_t;Ke++){let At=(Ke+1)%_t;Ne.push(at[Ke*2],xe,-at[Ke*2+1],at[At*2],xe,-at[At*2+1])}}let Ge=-2.4,st=9,Dt=[];for(let oe of je){let se=ut.filter((Fe)=>r4(Fe.r[0],Fe.r[1],oe.r)).map((Fe)=>ma(Fe.r)),Ee=ma(oe.r),qe=Ee.concat(...se);for(let[Fe,Oe,xe]of li.triangulateShape(Ee,se)){let Me=(qe[Oe].x-qe[Fe].x)*(qe[xe].y-qe[Fe].y)-(qe[xe].x-qe[Fe].x)*(qe[Oe].y-qe[Fe].y)>0,[Je,ee]=Me?[Oe,xe]:[xe,Oe];Dt.push(qe[Fe].x,Ge,-qe[Fe].y,qe[Je].x,Ge,-qe[Je].y,qe[ee].x,Ge,-qe[ee].y)}}let j=y(new ct().setAttribute("position",new it(Dt,3))),Ie=new Ft(j,T);Ie.renderOrder=0,l.add(Ie);let ae=[0.075,0.085,0.07],Re=(oe,se)=>Math.abs(oe)>3390||Math.abs(se)>2590;for(let oe of he.water){let se=oe.r,Ee=Aa(se,-st),qe=se.length/2;for(let Fe=0;Fe<qe;Fe++){let Oe=(Fe+1)%qe;if(Re(se[Fe*2],se[Fe*2+1])&&Re(se[Oe*2],se[Oe*2+1]))continue;let xe=[se[Fe*2],Ge,-se[Fe*2+1]],Me=[se[Oe*2],Ge,-se[Oe*2+1]],Je=[Ee[Fe*2],0.15,-Ee[Fe*2+1]],ee=[Ee[Oe*2],0.15,-Ee[Oe*2+1]],ce=Se(ae,0.15);pe.triUp(xe,Me,ee,ce,5),pe.triUp(xe,ee,Je,ce,5)}}let De=[];for(let oe of[...he.roads].sort((se,Ee)=>se.h[0]-Ee.h[0])){let se=oe.h[0];if(se>2&&se!==5)continue;let Ee=oe.r,qe=0,Fe=0;for(let Me=0;Me<Ee.length/2-1;Me++){let Je=Math.hypot(Ee[Me*2+2]-Ee[Me*2],Ee[Me*2+3]-Ee[Me*2+1]);if(Fe+=Je,Lt((Ee[Me*2]+Ee[Me*2+2])/2,(Ee[Me*2+1]+Ee[Me*2+3])/2))qe+=Je}if(qe<60)continue;let Oe=(Ee[0]+Ee[Ee.length-2])/2,xe=(Ee[1]+Ee[Ee.length-1])/2;if(De.some((Me)=>Math.hypot(Me.mx-Oe,Me.my-xe)<30))continue;De.push({r:Ee,c:se,tot:Fe,mx:Oe,my:xe})}let Ae=[0.2,0.2,0.21];for(let oe of De){let se=oe.c<=2?8:2.4,Ee=oe.c<=2?2.2:3,Fe=oe.r,Oe=[],xe=0;for(let Me=0;Me<Fe.length/2-1;Me++){let Je=Fe[Me*2],ee=Fe[Me*2+1],ce=Fe[Me*2+2],v=Fe[Me*2+3],R=Math.hypot(ce-Je,v-ee),O=Math.max(1,Math.ceil(R/8));for(let z=0;z<O;z++){let H=z/O;Oe.push([Je+(ce-Je)*H,ee+(v-ee)*H,(xe+R*H)/oe.tot])}xe+=R}Oe.push([Fe[Fe.length-2],Fe[Fe.length-1],1]);for(let Me=0;Me<Oe.length-1;Me++){let[Je,ee,ce]=Oe[Me],[v,R,O]=Oe[Me+1],z=Math.hypot(v-Je,R-ee)||1,H=-(R-ee)/z,ue=(v-Je)/z,_e=0.6+Ee*Math.sin(Math.PI*ce),le=0.6+Ee*Math.sin(Math.PI*O),we=[Je+H*se,_e,-(ee+ue*se)],Be=[Je-H*se,_e,-(ee-ue*se)],rt=[v+H*se,le,-(R+ue*se)],Ze=[v-H*se,le,-(R-ue*se)];pe.triUp(we,Be,Ze,Ae,6),pe.triUp(we,Ze,rt,Ae,6);for(let[ke,ot]of[[we,rt],[Ze,Be]]){let Bt=[ke[0],ke[1]-1.6,ke[2]],St=[ot[0],ot[1]-1.6,ot[2]];pe.tri(ke,Bt,St,Ae,6),pe.tri(ke,St,ot,Ae,6),pe.tri(ke,St,Bt,Ae,6),pe.tri(ke,ot,St,Ae,6)}}}S=new Ft(y(pe.geometry()),M),l.add(S);let Le=y(new ct().setAttribute("position",new it(Ne,3)));l.add(new en(Le,_));let lt=1e9;for(let oe of je)for(let se=0;se<oe.r.length;se+=2){let Ee=Math.hypot(oe.r[se]-60,oe.r[se+1]-420);if(Ee<lt)lt=Ee,w.drava.set(oe.r[se],4,-oe.r[se+1]-40)}let Ut=[],Pt=[],An={0:[0.085,0.09,0.12],1:[0.03,0.075,0.06],2:[0.035,0.068,0.058],3:[0.13,0.13,0.15]};for(let oe of he.areas){let[se,Ee]=Yo(oe.r);if(Math.hypot(se,Ee)>f)continue;let qe=An[oe.h[0]]||An[2],Fe=oe.h[0]===3?0.25:0.12,Oe=ma(oe.r);for(let[xe,Me,Je]of li.triangulateShape(Oe,[])){let ee=(Oe[Me].x-Oe[xe].x)*(Oe[Je].y-Oe[xe].y)-(Oe[Je].x-Oe[xe].x)*(Oe[Me].y-Oe[xe].y)>0,[ce,v]=ee?[Me,Je]:[Je,Me];Ut.push(Oe[xe].x,Fe,-Oe[xe].y,Oe[ce].x,Fe,-Oe[ce].y,Oe[v].x,Fe,-Oe[v].y),Pt.push(...qe,...qe,...qe)}if(oe.h[0]===3)w.trg.set(se,4,-Ee)}let ln=y(new ct);ln.setAttribute("position",new it(Ut,3)),ln.setAttribute("aCol",new it(Pt,3)),l.add(new Ft(ln,F));for(let oe of he.roads){let se=oe.r,Ee=se.length/4|0;oe.w=oe.h[0]>=2&&Math.hypot(se[Ee*2],se[Ee*2+1])<3000&&(xt(se[0],se[1])||xt(se[Ee*2],se[Ee*2+1])||xt(se[se.length-2],se[se.length-1]))}let us=e?[30,34,42,60,26,0]:[20,22,27,40,17,34],ki=[0.9,0.8,0.15,0.1,0.65,0.5],zi=[1,0.9,0.7,0.45,0.95,0.4],Rn=[],gn=[],ri=[],Cn=[];for(let oe of he.roads){let se=oe.h[0],Ee=us[se];if(!Ee)continue;let qe=oe.r;if(se>=4&&!oe.w&&Math.hypot(qe[0],qe[1])>(e?450:800))continue;if(oe.w&&Math.hypot(qe[0],qe[1])>(e?1400:2600))continue;let Fe=c()*Ee;for(let Oe=0;Oe<qe.length/2-1;Oe++){let xe=qe[Oe*2],Me=qe[Oe*2+1],Je=qe[Oe*2+2],ee=qe[Oe*2+3],ce=Math.hypot(Je-xe,ee-Me);while(Fe<ce){let v=Fe/ce,R=xe+(Je-xe)*v,O=Me+(ee-Me)*v;Rn.push(R,6,-O),gn.push(se<=1?1.25:se<=2?0.95:0.75),ri.push(zi[se]*D(R,O)*(oe.w?2.4:1)),Cn.push(Math.min(1,Math.max(0,ki[se]+(c()-0.5)*0.25))),Fe+=Ee}Fe-=ce}}L=nn({count:Rn.length/3,color:"#ff9440",core:"#ffd6a6",size:1.7,tint:{color:"#ffd09a",core:"#fff4e6"}}),L.pos.set(Rn),L.tint.set(Cn);for(let oe=0;oe<gn.length;oe++)L.size[oe]=gn[oe],L.alpha[oe]=(0.5+c()*0.4)*Math.min(1.15,0.55+0.5*ri[oe]),L.wake[oe]=0.1+c()*0.6+0.28*Math.min(1,Math.hypot(Rn[oe*3],Rn[oe*3+2])/2600);L.uniforms.uMin.value=1.3,L.uniforms.uFall.value=0.25,L.uniforms.uMax.value=6,L.points.renderOrder=4,L.material.depthWrite=false,l.add(L.points),y(L.geometry),y(L.material);let Mi=he.areas.filter((oe)=>oe.h[0]===0||oe.h[0]===3).map((oe)=>oe.r);Qf({roads:he.roads.map((oe)=>({c:oe.h[0],r:oe.r,w:oe.w})),lamps:Rn,lampK:ri,squares:Mi,shops:re,riverside:ie,zone:D,lite:e}).then((oe)=>{if(m){oe.dispose();return}let se=u.uLM.value;u.uLM.value=y(oe),se.dispose()}).catch((oe)=>console.warn("[ZAEC] karta svjetla nije nacrtana",oe));let Hi=he.marks.find((oe)=>oe.h[0]===2);if(Hi){let oe=Hi.r,[se,Ee]=Yo(oe),qe=0,Fe=0;for(let xe=0;xe<oe.length/2;xe++){let Me=(xe+1)%(oe.length/2),Je=oe[Me*2]-oe[xe*2],ee=oe[Me*2+1]-oe[xe*2+1],ce=Math.hypot(Je,ee);if(ce>qe)qe=ce,Fe=Math.atan2(ee,Je)}fe.position.set(se,0,-Ee),fe.rotation.y=Fe;let Oe=(xe,Me,Je,ee,ce)=>{let v=new Ft(y(new bi(xe,Me,Je).translate(ee,Me/2,ce)),et);return fe.add(v),v};Oe(46,7.5,34,0,0),Oe(30,62,15,-5,-4),Oe(24,56,14,8,8),Oe(6,6,6,-10,-4).position.y=62,w.hotel.set(se,70,-Ee)}A=true,a?.()}return Ct().catch((K)=>console.warn("[ZAEC] podaci grada nisu učitani",K)),{group:l,anchors:w,spire:Te,flood:Q,floodLocal:ge,get cathedral(){return W},isLoaded:()=>A,update(K){let he=K.streets??K.lamps;if(l.visible=K.alpha>0.002||K.lamps>0.002||he>0.002,Q.intensity=0,!l.visible)return;if(h.uRise.value=K.rise,h.uDim.value=K.dim,u.uTime.value=K.reduce?0:K.time,u.uLamp.value=K.lamps,K.camera){k.copy(K.camera.position),l.worldToLocal(k),u.uCamL.value.copy(k),K.camera.getWorldDirection(G),G.divide(l.scale).normalize();let je=G.y<-0.03?k.y/-G.y:Math.abs(k.y)*6+80;u.uFog.value.set(je*0.85,1/(je*2.6))}let pe=K.alpha;if(M.uniforms.uAlpha.value=pe,M.uniforms.uShop.value=K.shop??1,S)S.visible=pe>0.01;P.uLines.value=pe*(0.25+0.55*K.lines)*(1-K.dim*0.75)*(K.detail??1),C.uniforms.uOpacity.value=pe*(1-K.dim*0.75),C.uniforms.uGlow.value=he*(1-K.dim*0.75),g.visible=pe>0.002||he>0.002,T.uniforms.uOpacity.value=Math.max(pe,K.lamps*0.6)*(1-K.dim*0.6),F.uniforms.uOpacity.value=pe*(1-K.dim*0.6),fe.visible=pe>0.01,Ye.uAlpha.value=pe;let J=K.scan>0.001?1:0;if(B.uLift.value=Math.max(0.001,K.cath),B.uGlow.value=0.6+K.glow,B.uFocus.value=K.focus,B.uWin.value=0.25+0.75*K.focus,B.uScanOn.value=J,B.uScan.value=(Te.y+2)*(1-K.scan)-1.5,B.uAlpha.value=pe*K.cathSolid,W)W.visible=K.cathSolid*pe>0.01;if(te.uI.value=pe*K.cathSolid*(0.12+0.88*K.focus)*0.85,q)q.visible=te.uI.value>0.004;Q.intensity=14*K.glow*pe*K.cathSolid*(1-0.6*K.scan)*(0.2+0.8*K.focus),Ye.uAlpha.value=pe*(1-0.45*K.focus),L.uniforms.uPR.value=K.pr,L.uniforms.uOpacity.value=K.lamps*(1-K.dim*0.7),L.uniforms.uWake.value=K.wake},dispose(){m=true,clearTimeout(ft?.timer),b.forEach((K)=>K.dispose?.()),W?.geometry.dispose(),U?.dispose(),Z?.dispose()}}}function Eu(){let e=new Ht;e.name="snop";let t={uLen:{value:0},uI:{value:0},uCore:{value:0.12},uTime:{value:0},uRep:{value:20},uWarm:{value:new He("#ffc58a")},uCool:{value:new He("#9fb9ff")}},i=new Xn(1,1,1,32).translate(0,0.5,0),s=new wt({uniforms:t,transparent:true,depthWrite:false,blending:Zt,side:Qt,vertexShader:`
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
      }`}),r=new Ft(i,s);r.frustumCulled=false,r.renderOrder=12,e.add(r);let a=nn({count:2,color:"#ffd0a0",core:"#ffffff",size:1});a.size[0]=1.25,a.size[1]=0.36,a.alpha[0]=0.35,a.alpha[1]=1,a.uniforms.uMin.value=2,a.uniforms.uMax.value=26,a.points.renderOrder=13,e.add(a.points);let o=-1;return{group:e,update(c){let l=c.b*c.alpha;if(e.visible=l>0.002,!e.visible)return;e.position.copy(c.at);let u=c.drop??3;e.position.y-=u*c.unit;let h=c.camera.position.x-c.at.x,f=c.camera.position.z-c.at.z;r.rotation.y=Math.atan2(h,f);let d=900*c.unit,p=8*c.unit*(0.4+0.6*Math.min(1,l*1.4));if(r.scale.set(p,d,1),t.uLen.value=Math.min(1,l*1.6),t.uI.value=Math.min(0.62,l*0.8),t.uCore.value=0.045+0.035*Math.min(1,l*1.4),t.uRep.value=26.470588235294116,t.uTime.value=c.time,c.unit!==o)o=c.unit,a.pos[1]=a.pos[4]=(c.drop??3)*c.unit,a.geometry.attributes.position.needsUpdate=true;a.uniforms.uPR.value=c.pr,a.uniforms.uOpacity.value=Math.min(0.65,l*2),a.uniforms.uSize.value=10*c.unit},dispose(){i.dispose(),s.dispose(),a.geometry.dispose(),a.material.dispose()}}}var $t={x0:-5.6,y0:0.7,w:12,h:8},ga=(e,t,i=0,s=new I)=>s.set($t.x0+e*$t.w,$t.y0+t*$t.h,i),qt=(e,t,i,s)=>[[e,t,i,t],[i,t,i,s],[i,s,e,s],[e,s,e,t]],Mt=(e,t,i,s)=>[[e,t,i,s]],si=(e,t,i=0.008,s=8)=>{let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2,c=(a+1)/s*Math.PI*2;r.push([e+Math.cos(o)*i,t+Math.sin(o)*i*1.5,e+Math.cos(c)*i,t+Math.sin(c)*i*1.5])}return r},up={frame:[...qt(0,0,1,1),...Mt(0,0.925,1,0.925),...si(0.025,0.962),...si(0.045,0.962),...si(0.065,0.962),...qt(0.3,0.945,0.7,0.98)],nav:[...qt(0.04,0.85,0.11,0.895),...Mt(0.5,0.872,0.56,0.872),...Mt(0.59,0.872,0.65,0.872),...Mt(0.68,0.872,0.74,0.872),...qt(0.84,0.85,0.96,0.895)],hero:[...qt(0.05,0.72,0.52,0.785),...qt(0.05,0.645,0.44,0.71),...Mt(0.05,0.6,0.47,0.6),...Mt(0.05,0.575,0.4,0.575),...qt(0.05,0.49,0.19,0.545),...qt(0.21,0.49,0.33,0.545)],visual:[...qt(0.58,0.49,0.95,0.79),...Mt(0.58,0.49,0.95,0.79),...Mt(0.58,0.79,0.95,0.49)],proof:[0,1,2,3,4].flatMap((e)=>qt(0.05+e*0.185,0.4,0.19+e*0.185,0.43)),cards:[0,1,2].flatMap((e)=>{let t=0.05+e*0.31;return[...qt(t,0.14,t+0.28,0.34),...Mt(t+0.02,0.3,t+0.2,0.3),...Mt(t+0.02,0.27,t+0.25,0.27),...Mt(t+0.02,0.245,t+0.22,0.245)]}),cta:[...qt(0.32,0.025,0.68,0.085),...Mt(0.05,0.11,0.95,0.11)]},o4={frame:up.frame,nav:[...qt(0.4,0.835,0.6,0.9),...[0,1,2,3,4,5,6,7,8].flatMap((e)=>Mt(0.05+e*0.1,0.81,0.12+e*0.1,0.81))],slider:[...qt(0.03,0.44,0.97,0.78),...qt(0.3,0.6,0.7,0.625),...si(0.07,0.61,0.02),...si(0.93,0.61,0.02),...[0.44,0.48,0.52,0.56].flatMap((e)=>si(e,0.47,0.006,6))],wall:[0,1,2,3,4,5,6,7,8].flatMap((e)=>Mt(0.05,0.38-e*0.026,0.95-e%3*0.04,0.38-e*0.026)),icons:[0,1,2,3,4,5].flatMap((e)=>si(0.12+e*0.152,0.1,0.022)),cta:[...qt(0.86,0.022,0.95,0.042),...Mt(0.05,0.06,0.95,0.06)]},Tu={entry:[0.07,0.9],message:[0.29,0.715],trust:[0.5,0.415],content:[0.5,0.24],cta:[0.5,0.055]},c4=(e)=>Object.values(e).flat();function lp(e,t){let i=c4(e).map(([o,c,l,u])=>({a:ga(o,c),b:ga(l,u)})),s=i.reduce((o,c)=>o+c.a.distanceTo(c.b),0),r=[],a=t;i.forEach((o,c)=>{let l=o.a.distanceTo(o.b),u=c===i.length-1?a:Math.max(1,Math.round(l/s*t));u=Math.max(0,Math.min(u,a-(i.length-1-c))),a-=u;for(let h=0;h<u;h++){let f=o.a.clone().lerp(o.b,h/u),d=o.a.clone().lerp(o.b,(h+1)/u);r.push({a:f,b:d,y:(f.y+d.y)/2,x:(f.x+d.x)/2})}});while(r.length<t)r.push(r[r.length-1]);return r.length=t,r.sort((o,c)=>c.y-o.y||o.x-c.x)}function l4(e){let t=1/0,i=-1/0,s=1/0,r=-1/0,a=0;for(let g of e)t=Math.min(t,g.a.x,g.b.x),i=Math.max(i,g.a.x,g.b.x),s=Math.min(s,g.a.y,g.b.y),r=Math.max(r,g.a.y,g.b.y),a+=g.a.z+g.b.z;a/=e.length*2;let o=i-t||1,c=r-s||1,l=128,u=new Float32Array(l),h=new Float32Array(l),f=(g)=>Math.min(l-1,Math.max(0,Math.floor(g*l))),d=[],p=[];e.forEach((g,M)=>{let S=Math.abs(g.b.x-g.a.x),P=Math.abs(g.b.y-g.a.y);if(P>=S)d.push(M),u[f((g.x-t)/o)]+=P;else p.push(M),h[f((g.y-s)/c)]+=S});let b=(g,M,S)=>{let P=[...g.keys()].sort((T,F)=>g[F]-g[T]),_=[0,l-1];for(let T of P){if(_.length>=M+2||g[T]<=0)break;if(_.every((F)=>Math.abs(F-T)>=S))_.push(T)}return _.map((T)=>(T+0.5)/l).sort((T,F)=>T-F)},y=b(u,10,7),A=b(h,8,7),m=Array(e.length),w=(g,M,S,P,_)=>{let T=M.map(()=>[]);for(let F of g){let L=S(e[F]),k=0;for(let G=1;G<M.length;G++)if(Math.abs(M[G]-L)<Math.abs(M[k]-L))k=G;T[k].push(F)}T.forEach((F,L)=>{if(!F.length)return;F.sort((B,V)=>_(e[B])-_(e[V]));let k=1/0,G=-1/0;for(let B of F){let V=C(e[B]);k=Math.min(k,V[0]),G=Math.max(G,V[1])}F.forEach((B,V)=>{m[B]=P(M[L],k+(G-k)*V/F.length,k+(G-k)*(V+1)/F.length)})})},C=(g)=>[Math.min(g.a.y,g.b.y),Math.max(g.a.y,g.b.y)];return w(d,y,(g)=>(g.x-t)/o,(g,M,S)=>({a:new I(t+g*o,M,a),b:new I(t+g*o,S,a)}),(g)=>g.y),C=(g)=>[Math.min(g.a.x,g.b.x),Math.max(g.a.x,g.b.x)],w(p,A,(g)=>(g.y-s)/c,(g,M,S)=>({a:new I(M,s+g*c,a),b:new I(S,s+g*c,a)}),(g)=>g.x),m.lines={xs:y.map((g)=>t+g*o),ys:A.map((g)=>s+g*c),z:a,x0:t,x1:i,y0:s,y1:r},m}function hp(e,{max:t=6000}={}){let i=Yn(303),s={uMorph:{value:0},uOpacity:{value:0},uTime:{value:0},uWarm:{value:new He("#ffc6a0")},uCool:{value:new He("#b8c8ff")},uGridCol:{value:new He("#7f9bff")},uBadCol:{value:new He("#ff7a66")},uBad:{value:0},uScanY:{value:1e4},uScanOn:{value:0}},r=new wt({uniforms:s,transparent:true,depthWrite:false,blending:Zt,vertexShader:`
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
      }`}),a=new en(new ct,r);a.frustumCulled=false,a.renderOrder=3;function o(u){let h=u.attributes.position.array,f=[];for(let F=0;F<h.length;F+=6){let L=new I(h[F],h[F+1],h[F+2]),k=new I(h[F+3],h[F+4],h[F+5]),G=L.distanceTo(k);if(G>0.02)f.push({a:L,b:k,L:G})}f.sort((F,L)=>L.L-F.L),f=f.slice(0,t),f.forEach((F)=>{F.y=(F.a.y+F.b.y)/2,F.x=(F.a.x+F.b.x)/2}),f.sort((F,L)=>L.y-F.y||F.x-L.x);let d=f.length,p=l4(f);c=p.lines;let b=f.map((F,L)=>L).sort((F,L)=>{let k=p[F],G=p[L];return G.a.y+G.b.y-(k.a.y+k.b.y)||k.a.x+k.b.x-(G.a.x+G.b.x)}),y=lp(up,d),A=lp(o4,d),m=Array(d),w=Array(d);b.forEach((F,L)=>{m[F]=y[L],w[F]=A[L]});let C=new Float32Array(d*6),g=new Float32Array(d*6),M=new Float32Array(d*6),S=new Float32Array(d*6),P=new Float32Array(d*2),_=new Float32Array(d*2);for(let F=0;F<d;F++)C.set([...f[F].a.toArray(),...f[F].b.toArray()],F*6),g.set([...p[F].a.toArray(),...p[F].b.toArray()],F*6),M.set([...m[F].a.toArray(),...m[F].b.toArray()],F*6),S.set([...w[F].a.toArray(),...w[F].b.toArray()],F*6),P[F*2]=P[F*2+1]=F/d*0.5+i()*0.08,_[F*2]=_[F*2+1]=i();let T=new ct;return T.setAttribute("position",new pt(C.slice(),3)),T.setAttribute("aFrom",new pt(C,3)),T.setAttribute("aGrid",new pt(g,3)),T.setAttribute("aTo",new pt(M,3)),T.setAttribute("aBad",new pt(S,3)),T.setAttribute("aDelay",new pt(P,1)),T.setAttribute("aSeed",new pt(_,1)),T.boundingSphere=new on(new I(0,5,0),40),a.geometry.dispose(),a.geometry=T,d}let c=null,l=e?o(e):0;return{object:a,get count(){return l},get gridInfo(){return c},setSource(u){l=o(u)},update(u){a.visible=u.opacity>0.002&&l>0,s.uMorph.value=u.morph,s.uOpacity.value=u.opacity,s.uTime.value=u.time,s.uBad.value=u.bad||0,s.uScanY.value=u.scanY??1e4,s.uScanOn.value=u.scanOn||0},dispose(){a.geometry.dispose(),r.dispose()}}}var Ru=[{code:"01",name:"Poruka",color:"#6f8cff"},{code:"02",name:"Struktura",color:"#7d93ff"},{code:"03",name:"UX",color:"#8f9bff"},{code:"04",name:"Tehnologija",color:"#a39cf5"},{code:"05",name:"SEO",color:"#c39bdc"},{code:"06",name:"Mjerenje",color:"#e3a3a0"},{code:"07",name:"Konverzija",color:"#ffb23f"}];function u4(e){switch(e){case 0:return[...qt(0.1,0.62,0.78,0.78),...qt(0.1,0.46,0.6,0.56),...Mt(0.1,0.36,0.66,0.36),...Mt(0.1,0.3,0.52,0.3),...qt(0.1,0.12,0.34,0.22)];case 1:return[...qt(0.42,0.78,0.58,0.9),...Mt(0.5,0.78,0.5,0.68),...Mt(0.18,0.68,0.82,0.68),...[0.18,0.5,0.82].flatMap((t)=>[...Mt(t,0.68,t,0.6),...qt(t-0.09,0.48,t+0.09,0.6),...Mt(t,0.48,t,0.38),...qt(t-0.06,0.26,t+0.06,0.38)])];case 2:return[...Mt(0.1,0.78,0.36,0.78),...Mt(0.36,0.78,0.36,0.5),...Mt(0.36,0.5,0.64,0.5),...Mt(0.64,0.5,0.64,0.22),...Mt(0.64,0.22,0.88,0.22),...Mt(0.83,0.27,0.88,0.22),...Mt(0.83,0.17,0.88,0.22),...si(0.1,0.78,0.025),...si(0.36,0.5,0.025),...si(0.64,0.22,0.025)];case 3:return[...Mt(0.3,0.7,0.16,0.5),...Mt(0.16,0.5,0.3,0.3),...Mt(0.7,0.7,0.84,0.5),...Mt(0.84,0.5,0.7,0.3),...Mt(0.57,0.76,0.43,0.24)];case 4:return[...qt(0.1,0.72,0.9,0.86),...si(0.84,0.79,0.022),...qt(0.1,0.5,0.9,0.62),...[0,1].flatMap((t)=>[...Mt(0.14,0.42-t*0.16,0.6,0.42-t*0.16),...Mt(0.14,0.37-t*0.16,0.8,0.37-t*0.16)])];case 5:return[...Mt(0.12,0.16,0.88,0.16),...Mt(0.12,0.16,0.12,0.84),...[0.22,0.34,0.3,0.46,0.42,0.6].flatMap((t,i)=>qt(0.18+i*0.115,0.16,0.25+i*0.115,0.16+t))];default:return[...qt(0.28,0.4,0.72,0.6),...Mt(0.42,0.5,0.48,0.44),...Mt(0.48,0.44,0.58,0.56),...Mt(0.18,0.84,0.82,0.84),...Mt(0.18,0.84,0.42,0.62),...Mt(0.82,0.84,0.58,0.62)]}}function dp(){let e=new Ht;e.name="slojevi",e.position.copy(ga(0.5,0.42));let t=11,i=7,s=(l,u)=>[(l-0.5)*t,0,-(u-0.5)*i],r=(l)=>{let u=[];return l.forEach(([h,f,d,p])=>u.push(...s(h,f),...s(d,p))),new ct().setAttribute("position",new it(u,3))},a=(()=>[[0.035,0,0.965,0],[0.965,0,1,0.035],[1,0.035,1,0.965],[1,0.965,0.965,1],[0.965,1,0.035,1],[0.035,1,0,0.965],[0,0.965,0,0.035],[0,0.035,0.035,0]])(),o=Ru.map((l,u)=>{let h=new Ht,f=r(a),d=r(u4(u)),p=new jn({color:l.color,transparent:true,opacity:0,depthWrite:false}),b=new jn({color:l.color,transparent:true,opacity:0,depthWrite:false,blending:Zt}),y=new Xn(t,i).rotateX(-Math.PI/2),A=new Vn({color:l.color,transparent:true,opacity:0,depthWrite:false,side:Qt}),m=new Ft(y,A);m.renderOrder=1;let w=new en(f,p),C=new en(d,b);return w.renderOrder=C.renderOrder=2,h.add(m,w,C),e.add(h),{g:h,fm:p,gm:b,pm:A,geos:[f,d,y],e:0,arr:0}}),c=new I;return{group:e,update(l){if(e.visible=l.alpha>0.002,!e.visible)return;let u=l.assemble||0,h=1.55+-1.3900000000000001*u,f=l.p*8,d=1-Math.exp(-(l.dt||0.016)*7);o.forEach((p,b)=>{let y=Math.max(Math.min(1,Math.max(0,f-b)),l.active>=b?1:0);p.arr+=(y-p.arr)*(l.reduce?1:d);let A=1-Math.pow(1-p.arr,3);p.e+=((l.active===b?1:0)-p.e)*(l.reduce?1:d);let m=p.e*(1-u);p.g.position.set(m*1.1,(3-b)*h+(1-A)*-4+m*0.35,m*0.9);let w=l.alpha*A;p.pm.opacity=w*(0.035+0.1*m+0.05*u),p.fm.opacity=w*(0.22+0.78*m+0.5*u),p.gm.opacity=w*(0.05+0.95*m+0.3*u)})},anchor(l,u=c){return u.set(-t/2,0,i*0.2).applyMatrix4(o[l].g.matrixWorld)},emphasis:(l)=>o[l].e,arrival:(l)=>o[l].arr,dispose(){o.forEach((l)=>{l.geos.forEach((u)=>u.dispose()),l.fm.dispose(),l.gm.dispose(),l.pm.dispose()})}}}var h4=`
  attribute float aT; attribute float aD; attribute float aDash; attribute vec3 aTo;
  uniform float uMix;
  varying float vT; varying float vD; varying float vDash;
  void main(){
    vT = aT; vD = aD; vDash = aDash;
    float e = uMix * uMix * (3.0 - 2.0 * uMix);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(mix(position, aTo, e), 1.0);
  }`,d4=`
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
  }`;function fp(e){let t={uColor:{value:new He(e)},uOpacity:{value:0},uDraw:{value:0},uMix:{value:0}},i=new wt({uniforms:t,vertexShader:h4,fragmentShader:d4,transparent:true,depthWrite:false,depthTest:false,blending:Ji,blendSrc:fi,blendDst:fi}),s=new en(new ct,i);return s.frustumCulled=false,s.renderOrder=4,s.visible=false,{obj:s,mat:i,uniforms:t}}function pp(){let e=[],t=[],i=[],s=[],r=[];return{add(a,o,c,l,u=0,h=a,f=o){e.push(...a,...o),t.push(c,l);let d=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]);i.push(0,d),s.push(u,u),r.push(...h,...f)},geometry(){let a=new ct;return a.setAttribute("position",new it(e,3)),a.setAttribute("aT",new it(t,1)),a.setAttribute("aD",new it(i,1)),a.setAttribute("aDash",new it(s,1)),a.setAttribute("aTo",new it(r,3)),a}}}function mp({height:e=90}={}){let t=new Ht;t.name="nacrt";let i=fp("#b4c4ff"),s=fp("#7f9bff");t.add(i.obj,s.obj);let r={dim:new I,lvl:new I},a=null;function o(l){let u=l.attributes.position,h=new En,f=new I,d=new I(0,-1e9,0);for(let C=0;C<u.count;C++)if(f.set(u.getX(C),u.getY(C),u.getZ(C)),h.expandByPoint(f),f.y>d.y)d.copy(f);a=h;let p=d.z,b=h.min.x-10,y=Math.min(e,h.max.y),A=pp(),m=(h.min.x+h.max.x)/2;A.add([m,0,p],[h.min.x-30,0,p],0,0.22),A.add([m,0,p],[h.max.x+24,0,p],0,0.22),A.add([d.x,-6,p],[d.x,h.max.y+10,p],0.12,0.5,3),A.add([d.x-2,y,p],[b-4,y,p],0.45,0.68,2),A.add([b,0,p],[b,y,p],0.5,0.92);let w=2.2;A.add([b-w,-w,p],[b+w,w,p],0.5,0.56),A.add([b-w,y-w,p],[b+w,y+w,p],0.88,0.94),A.add([b-4,0,p],[h.min.x-30,0,p],0.4,0.5),i.obj.geometry.dispose(),i.obj.geometry=A.geometry(),r.dim.set(b+2.5,y*0.5,p),r.lvl.set(b-3,y,p)}function c(l,u){if(!l)return;let h=1/u.x,f=1/u.y,d=1/u.z,p=[...l.xs].sort((F,L)=>F-L),b=[...l.ys].sort((F,L)=>F-L),y=l.x1-l.x0,A=l.y1-l.y0,m=l.x0-y*0.06,w=l.x1+y*0.22,C=l.y0-A*0.04,g=l.y1+A*0.12,M=l.z,S=0.02,P=pp(),_=(F,L,k)=>[F*h,L*f,k*d];p.forEach((F,L)=>{let G=0.05+0.9*(p.length>1?L/(p.length-1):0.5),B=$t.x0+G*$t.w,V=(C+g)/2,te=0.08*(L%3);P.add(_(F,V,M),_(F,g,M),te,0.6+te,2,_(B,$t.y0+$t.h*0.5,S),_(B,$t.y0+$t.h*0.92,S)),P.add(_(F,V,M),_(F,C,M),te,0.6+te,2,_(B,$t.y0+$t.h*0.5,S),_(B,$t.y0,S))});let T=[0.11,0.34,0.43,0.49,0.6,0.79,0.85,0.925];b.forEach((F,L)=>{let k=T[Math.round(L/Math.max(1,b.length-1)*(T.length-1))],G=$t.y0+k*$t.h,B=(m+w)/2,V=0.15+0.06*(L%2);P.add(_(B,F,M),_(w,F,M),V,0.75+V*0.3,2,_($t.x0+$t.w*0.5,G,S),_($t.x0+$t.w,G,S)),P.add(_(B,F,M),_(m,F,M),V,0.75+V*0.3,2,_($t.x0+$t.w*0.5,G,S),_($t.x0,G,S))}),s.obj.geometry.dispose(),s.obj.geometry=P.geometry()}return{group:t,setCathedral:o,setGrid:c,anchor(l,u){return u.copy(r[l]).applyMatrix4(t.matrixWorld)},update(l){let u=!!a;i.obj.visible=u&&l.notesA>0.002&&l.notes>0.001,i.uniforms.uDraw.value=l.notes,i.uniforms.uOpacity.value=0.55*l.notesA,s.obj.visible=l.rulesA>0.002&&l.rules>0.001&&s.obj.geometry.attributes.position?.count>0,s.uniforms.uDraw.value=l.rules,s.uniforms.uMix.value=l.toSite,s.uniforms.uOpacity.value=l.rulesA*(0.3-0.14*l.toSite)},dispose(){i.obj.geometry.dispose(),s.obj.geometry.dispose(),i.mat.dispose(),s.mat.dispose()}}}var f4=["Google pretraga","Preporuka","Društvene mreže","Oglasi","AI pretraga"],p4=["Poziv","Upit","Rezervacija","Kupnja"];var Ap=-13.2,gp=13.8,bp=(e)=>8.3-e*1.65,vp=(e)=>7.1-e*1.65;function xp(e,t,i,s,r,a){let o=r*r,c=o*r;return a.x=0.5*(2*t.x+(-e.x+i.x)*r+(2*e.x-5*t.x+4*i.x-s.x)*o+(-e.x+3*t.x-3*i.x+s.x)*c),a.y=0.5*(2*t.y+(-e.y+i.y)*r+(2*e.y-5*t.y+4*i.y-s.y)*o+(-e.y+3*t.y-3*i.y+s.y)*c),a.z=0.5*(2*t.z+(-e.z+i.z)*r+(2*e.z-5*t.z+4*i.z-s.z)*o+(-e.z+3*t.z-3*i.z+s.z)*c),a}function _p({lite:e}){let t=Yn(2024),i=new Ht;i.name="tok";let s=e?90:170,r=3,a=f4.map((q,W)=>new I(Ap,bp(W),0)),o=p4.map((q,W)=>new I(gp,vp(W),0)),c=(q)=>ga(Tu[q][0],Tu[q][1],0.15),l=n.map((q)=>c(q.zone)),u=new I(8.2,2.2,0.15),h=new I,f=Xo("#3d5ccc",0.25,true),d=new en(new ct,f);i.add(d);let p=false;function b(){let q=[],W=(be,Te,ft,Qe,Q=24)=>{let ge=Te.clone();for(let fe=1;fe<=Q;fe++)xp(be,Te,ft,Qe,fe/Q,h),q.push(ge.x,ge.y,ge.z,h.x,h.y,h.z),ge=h.clone()},U=p?new I(0,3,0):new I(-3,0,0),Z=p?new I(0,-3,0):new I(3,0,0);a.forEach((be)=>W(be.clone().add(U),be,l[0],l[1])),o.forEach((be)=>W(l[4],u,be,be.clone().add(Z))),d.geometry.dispose(),d.geometry=new ct().setAttribute("position",new it(q,3))}let y=new ct,A=[];for(let q=0;q<40;q++){let W=q/40*Math.PI*2,U=(q+1)/40*Math.PI*2;A.push(Math.cos(W),Math.sin(W),0,Math.cos(U),Math.sin(U),0)}y.setAttribute("position",new it(A,3));let m=l.map((q)=>{let W=new jn({color:"#7f9fff",transparent:true,opacity:0,depthWrite:false,blending:Zt}),U=new en(y,W);return U.position.copy(q),U.scale.setScalar(0.42),i.add(U),{r:U,m:W,hit:0}}),w=new He("#7f9fff"),C=new He("#ff6f5e"),g=nn({count:a.length+o.length,color:"#4f7bff",core:"#ffffff",size:1.5});[...a,...o].forEach((q,W)=>{q.toArray(g.pos,W*3),g.size[W]=W<a.length?1:1.2}),i.add(g.points);let M=new Float32Array(o.length);function S(q){if(p=q,a.forEach((W,U)=>q?W.set(-4.6+U*2.5,11.4,0):W.set(Ap,bp(U),0)),o.forEach((W,U)=>q?W.set(-3.5+U*2.6,-1.3,0):W.set(gp,vp(U),0)),q)u.set(0.4,-0.4,0.15);else u.set(8.2,2.2,0.15);[...a,...o].forEach((W,U)=>W.toArray(g.pos,U*3)),g.geometry.attributes.position.needsUpdate=true,b()}S(false);let P=nn({count:s*r,color:"#8fb0ff",core:"#ffffff",size:0.85}),_=nn({count:s*r,color:"#ff6a55",core:"#ffd2c8",size:0.75}),T=nn({count:s,color:"#ffb23f",core:"#fff3d6",size:1.6});i.add(P.points,_.points,T.points);let F=[];for(let q=0;q<s;q++){let W=Array.from({length:8},()=>new I);F.push({wp:W,s:0,speed:1,state:0,wait:t()*7,vel:new I,pos:new I,hist:[new I,new I,new I],life:0,out:0})}function L(q){let W=t()*a.length|0;q.out=t()*o.length|0,q.wp[0].copy(a[W]),n.forEach((U,Z)=>{q.wp[Z+1].copy(l[Z]).add(h.set((t()-0.5)*2*U.jx,(t()-0.5)*2*U.jy,(t()-0.5)*0.4))}),q.wp[6].copy(u).add(h.set(0,(t()-0.5)*1.4,0)),q.wp[7].copy(o[q.out]),q.s=0,q.speed=0.75+t()*0.5,q.state=1,q.pos.copy(q.wp[0]),q.hist.forEach((U)=>U.copy(q.pos))}let k=(q,W,U)=>{let Z=Math.min(6,Math.floor(W)),be=W-Z,Te=q.wp;return xp(Te[Math.max(0,Z-1)],Te[Z],Te[Z+1],Te[Math.min(7,Z+2)],be,U)},G=[false,false,false,false,false],B=0,V=0;function te(q){for(let W=0;W<s;W++){let U=F[W];if(U.state===0){if(U.wait-=q,U.wait<=0)L(U),B++}else if(U.state===1){let Z=Math.floor(U.s);U.s+=q*U.speed*(U.s<1?0.7:1);let be=Math.floor(U.s);if(be!==Z&&be>=1&&be<=5){let Te=be-1,ft=G[Te]?n[Te].good:n[Te].bad;if(t()>ft)U.state=2,U.life=0,k(U,U.s,U.pos),U.vel.set((t()-0.5)*2.4+(U.pos.x>0.4?1.2:-1.2),0.6+t()*0.8,1+t()*2.5),m[Te].hit=1}if(U.state===1)if(U.s>=7)U.state=3,U.life=0,U.pos.copy(U.wp[7]),M[U.out]=1,V++;else k(U,U.s,U.pos)}else if(U.state===2){if(U.life+=q,U.vel.y-=q*3.2,U.pos.addScaledVector(U.vel,q),U.life>1.5)U.state=0,U.wait=0.2+t()*1.5}else if(U.state===3){if(U.life+=q,U.life>0.6)U.state=0,U.wait=0.2+t()*1.2}if(q>0)U.hist[2].copy(U.hist[1]),U.hist[1].copy(U.hist[0]),U.hist[0].copy(U.pos);for(let Z=0;Z<r;Z++){let be=W*r+Z,Te=U.hist[Z],ft=1-Z*0.32,Qe=U.state===1,Q=U.state===2;(Qe?P:_).pos.set([Te.x,Te.y,Te.z],be*3),P.alpha[be]=Qe?ft*Math.min(1,U.s*3):0,_.alpha[be]=Q?ft*Math.max(0,1-U.life/1.5)*0.85:0,P.size[be]=_.size[be]=1-Z*0.25}if(T.alpha[W]=U.state===3?Math.max(0,1-U.life/0.6):0,T.size[W]=U.state===3?1+U.life*3:1,U.state===3)U.pos.toArray(T.pos,W*3)}[P,_,T].forEach((W)=>{W.geometry.attributes.position.needsUpdate=true,W.geometry.attributes.aAlpha.needsUpdate=true,W.geometry.attributes.aSize.needsUpdate=true})}let Y=false;return{group:i,channelWorld:(q)=>a[q],outcomeWorld:(q)=>o[q],gateWorld:(q)=>l[q],setStates(q){G=q.slice()},setLayout(q){if(q!==p)S(q)},stats:()=>({emitted:B,converted:V}),update(q){if(i.visible=q.alpha>0.002,!i.visible)return;let W=q.reduce?0:Math.min(q.dt,0.05);if(!Y){Y=true;for(let U=0;U<180;U++)te(0.03333333333333333);B=V=0}f.opacity=0.22*q.alpha,[g,P,_,T].forEach((U)=>{U.uniforms.uPR.value=q.pr,U.uniforms.uOpacity.value=q.alpha}),te(W),m.forEach((U,Z)=>{U.hit=Math.max(0,U.hit-W*2.5),U.m.color.copy(G[Z]?w:C);let be=q.focusGate===Z?1:0;U.m.opacity=q.alpha*(0.35+U.hit*0.6+be*0.5),U.r.scale.setScalar(0.42+U.hit*0.25+be*0.18+Math.sin(q.time*2+Z)*0.02)});for(let U=0;U<o.length;U++)M[U]=Math.max(0,M[U]-W*2),g.size[a.length+U]=1.2+M[U]*1.4;for(let U=0;U<a.length;U++)g.size[U]=0.9+Math.sin(q.time*1.7+U*1.3)*0.15;g.geometry.attributes.aSize.needsUpdate=true},dispose(){i.traverse((q)=>{q.geometry?.dispose(),(Array.isArray(q.material)?q.material:q.material?[q.material]:[]).forEach((W)=>W.dispose())})}}}var yp={Z:0,tx:0,ty:0,tz:0,az:0,el:20,dist:30,fov:34,roll:0,sx:0,sy:0,fit:0,idle:0,net:0,conv:0,finale:0,trace:0,hl:0,dusk:0,focus:0,beam:0,scan:0,rise:0,cath:0,glow:0,dim:0,lines:0.4,cathSolid:1,morph:0,wire:0,flow:0,layers:0,layersA:0,assemble:0,labOsijek:0,labCities:0,labTowns:0,labCity:0,labFlow:0,labLayers:0,labFinale:0,stars:1},Mp=Object.keys(yp),m4=xr,va={Z:m4,rise:1,cath:1,stars:0.35,trace:1,dusk:1},ba={...va,dim:0.95,lines:0,cathSolid:0,wire:1,morph:2,glow:0,scan:1},Jo={hero:{Z:0,tx:0,ty:0,tz:-2,az:4,el:9,dist:8.2,fov:44,roll:-21,sx:0.24,sy:-0.03,idle:1,net:0.85,m:{dist:11,fov:52,roll:-12,el:14,sx:0,sy:0.26}},world:{Z:0.12,tx:0,ty:-1.4,tz:-1.5,az:8,el:30,dist:21,fov:38,roll:-6,sx:-0.2,net:1,conv:0.18,labOsijek:1,fit:20,m:{dist:30,sx:0,sy:0.2,roll:0}},europe:{Z:0.94,tx:-6.5,ty:0,tz:-1,az:0,el:62,dist:50,sx:0.17,net:0.7,conv:0.4,trace:0.035,hl:0.35,dusk:0.1,fit:36,m:{dist:76,sx:0,sy:0.18}},croatia:{Z:1,tx:-6,ty:0.5,tz:4.2,az:-10,el:52,dist:31,sx:0.16,net:0.5,conv:0.6,trace:1,hl:1,dusk:0.6,labCities:1,fit:19,m:{dist:44,sx:0,sy:0.16}},slavonia:{Z:1.55,tx:4.2,ty:0,tz:9.5,az:10,el:56,dist:92,sx:-0.16,trace:1,hl:0.22,dusk:1,labTowns:1,stars:0.6,fit:100,m:{sx:0,sy:0.16}},osijek:{...va,tx:21,ty:1,tz:-13,az:30,el:36,dist:100,sx:0.06,glow:0.3,focus:0.12,labCity:1,fit:62,m:{sx:0,sy:0.16}},cathedral:{...va,tx:0.6,ty:7.4,tz:0.6,az:52,el:8,dist:32,sx:-0.18,glow:1,dim:0.35,lines:0.2,focus:1,beam:1,fit:13,m:{dist:36,sx:0,sy:0.14}},arch:{...va,tx:0,ty:6.4,tz:0,az:0,el:4,dist:31,sx:0.17,hold:{sx:0.42},glow:0.4,dim:0.8,lines:0,focus:0.5,beam:0.3,scan:1,wire:1,fit:14,m:{dist:44,sx:0,sy:0.16}},grid:{...va,tx:0.2,ty:6.2,az:0,el:2,dist:30,sx:0.17,dim:0.92,lines:0,cathSolid:0,scan:1,wire:1,morph:1,glow:0,fit:14,m:{dist:44,sx:0,sy:0.16}},web:{...ba,tx:0.4,ty:4.7,az:0,el:0,dist:23,sx:0.15,fit:13.5,m:{dist:34,sx:0,sy:0.18}},flow:{...ba,fit:35,tx:0.3,ty:4.7,az:0,el:0,dist:42.5,sx:0,sy:0.085,flow:1,labFlow:1,m:{dist:57,fit:15,tx:0.4,ty:5,sy:0.235},t:{dist:43,sy:0.12}},"layers-a":{...ba,wire:0,tx:0.6,ty:4.2,az:-26,el:32,dist:35,sx:0.17,layers:0.14,layersA:1,labLayers:1,fit:15,m:{dist:54,sx:0,sy:0.17}},"layers-b":{...ba,wire:0,tx:0.6,ty:4.2,az:-22,el:30,dist:35,sx:0.17,layers:1,layersA:1,labLayers:1,fit:15,m:{dist:52,sx:0,sy:0.17}},"layers-c":{...ba,wire:0,tx:0.4,ty:4.2,az:-14,el:22,dist:33,sx:0.25,layers:1,layersA:1,assemble:1,labLayers:0,fit:14,m:{dist:46,sx:0,sy:0.17}},final:{Z:0,tx:0.2,ty:-0.4,tz:-2.2,az:28,el:16,dist:13.5,fov:40,roll:-10,sx:0.2,sy:-0.12,finale:1,net:1,conv:1,labFinale:1,m:{dist:15.5,fov:48,roll:-4,sx:0,sy:-0.03}}};function Cu(e,t,i=false){let s=Jo[e];if(!s)return null;let r={...yp,...s,...t&&s.m?s.m:{},...t&&i&&s.t?s.t:{}};return delete r.m,delete r.t,delete r.hold,r}var Zo=[...Mp.filter((e)=>!["dist","tx","ty","tz","fit"].includes(e)),"LA","mx","my","mz"],A4=0.9;function g4(e){let t=e.length,i=new Float64Array(t);for(let s=1;s<t-1;s++){let r=e[s]-e[s-1],a=e[s+1]-e[s];i[s]=r*a>0?A4*2*r*a/(r+a):0}return i}var xa=(e,t,i,s,r)=>{let a=r*r,o=a*r;return(2*o-3*a+1)*e+(o-2*a+r)*t+(-2*o+3*a)*i+(o-a)*s};function bb({canvas:e,labelsRoot:t,assets:i={},onReady:s,onChapter:r,onFrame:a}){let o=document.documentElement,c=matchMedia("(prefers-reduced-motion: reduce)"),l=false,u=0,h=matchMedia("(hover: hover) and (pointer: fine)").matches,f=!h||innerWidth<760||(navigator.hardwareConcurrency||8)<=4,d=new mu({canvas:e,antialias:!f,alpha:false,powerPreference:"high-performance",stencil:false});d.setClearColor("#03050b",1),d.outputColorSpace=Ai;let p=f?1.35:1.75,b=Math.min(window.devicePixelRatio||1,p),y=b,A=new vo,m=new hn(34,1,0.1,6000),w=d.extensions.has("KHR_parallel_shader_compile"),C=(ee,ce)=>w?d.compileAsync(ee,m,ce):Promise.resolve(d.compile(ee,m,ce));A.add(new Lo("#8ea3ff","#0a0e1a",0.6));let g=new Rs("#dde5ff",1.45);g.position.set(-40,60,34),A.add(g);let M=new Rs("#ff9d66",0.55);M.position.set(50,18,-40),A.add(M);let S=ff({geo:ua,lite:f,landUrl:i.land,lightsUrl:i.lights}),P=mf({geo:ua,lite:f});S.spin.add(P.group);let _=Af({geo:ua,lite:f,landTex:S.land,fieldTex:S.field,lightsTex:S.lights,landEuUrl:i.landEu}),T=hp(null,{max:f?3200:6500}),F=da(xr),L=(ee)=>{let ce=ee.clone();return ce.scale(F*jo,F*Oi,F*Oi),ce},k=false,G=mp(),B=new I(F*jo,F*Oi,F*Oi),V=cp({lite:f,dataUrl:i.city,modelUrl:i.model,onLines:(ee)=>{let ce=window.requestIdleCallback||((R)=>setTimeout(R,200)),v=++u;ce(()=>{if(l||v!==u)return;let R=L(ee);T.setSource(R),R.dispose(),G.setCathedral(ee),G.setGrid(T.gridInfo,B)},{timeout:2500})},prepare:(ee)=>C(ee,A).catch(()=>{}),onLoaded:()=>{k=true}});A.add(V.flood),V.group.add(G.group);let te=Eu(),Y=Eu(),q=dp(),W=_p({lite:f});A.add(S.group,_.group,V.group,T.object,q.group,W.group,te.group,Y.group);let U=Yn(99),Z=nn({count:f?260:480,color:"#8d9fd6",core:"#e6ebff",size:1.2,depthTest:false});for(let ee=0;ee<Z.alpha.length;ee++){let ce=U()*2-1,v=U()*Math.PI*2,R=700+U()*300,O=Math.sqrt(1-ce*ce);Z.pos.set([Math.cos(v)*O*R,ce*R,Math.sin(v)*O*R],ee*3),Z.alpha[ee]=0.08+U()*U()*0.6,Z.size[ee]=0.45+U()*U()*1.8}Z.uniforms.uMin.value=1,Z.points.renderOrder=-10,A.add(Z.points);let be=nn({count:2,color:"#9fc0ff",core:"#ffffff",size:1,depthTest:true,additive:true});be.size[0]=260,be.size[1]=40,be.alpha[0]=0.32,be.alpha[1]=0.9,be.uniforms.uMax.value=520,be.points.renderOrder=-5,A.add(be.points);let Te=S.sun.clone(),ft=new I(Te.x,0,Te.z).normalize(),Qe=Math.asin(Te.y),Q={night:0};function ge(ee){let ce=Qe-ee*34*Tn;yr.value.copy(ft).multiplyScalar(Math.cos(ce)),yr.value.y=Math.sin(ce);let v=vt(0,0.3,ee);Is.value.set(ha(-0.12,-0.07,v),ha(0.38,0.13,v)),Q.night=1-vt(Is.value.x,Is.value.y,Math.sin(ce))}let fe=[],Ye=[],et=[],Ne=[],Ct=false,K=0,he=0,pe=null,J={...Cu("hero",false)},je={target:0,smooth:0},ut="";function Lt(){let ee=Ye.length,ce=K/Math.max(1,he),v={},R={};for(let z of Zo)v[z]=new Float64Array(ee);Ye.forEach((z,H)=>{let ue=da(z.Z),_e=z.fit>0?z.fit/(2*Math.tan(z.fov*Tn/2)*ce*0.92):0;for(let le of Zo)if(le==="LA")v.LA[H]=Math.log(Math.max(z.dist,_e)/ue);else if(le==="mx")v.mx[H]=z.tx/ue;else if(le==="my")v.my[H]=z.ty/ue;else if(le==="mz")v.mz[H]=z.tz/ue;else v[le][H]=z[le]});for(let z of Zo)R[z]=g4(v[z]);let O=fe.map((z)=>Jo[z.id]?.hold||null);pe={v,m:R,n:ee,hold:O}}function xt(){let ee=window.scrollY;if(me.forEach((R)=>{R.w=0}),Ct=innerWidth<760||innerWidth/innerHeight<0.82,fe=[...document.querySelectorAll("[data-cam]")].map((R)=>{let O=R.getBoundingClientRect(),z=O.top+ee,H=R.dataset.camAt||"center",ue=H==="top"?z:H==="bottom"?z+O.height-innerHeight:z+O.height/2-innerHeight/2;return{id:R.dataset.cam,y:Math.max(0,ue)}}).filter((R)=>Jo[R.id]).sort((R,O)=>R.y-O.y),!fe.length)fe=[{id:"hero",y:0}];let ce=Ct&&innerWidth>=600;Ye=fe.map((R)=>Cu(R.id,Ct,ce)),Lt(),W.setLayout(Ct),t?.classList.toggle("is-portrait",Ct),et=[...document.querySelectorAll("[data-cover]")].map((R)=>{let O=R.getBoundingClientRect();return[O.top+ee,O.bottom+ee]}),Ne=Ct?[...document.querySelectorAll("[data-lens] .cine-copy")].map((R)=>{let O=R.children;return[O[0].getBoundingClientRect().top+ee,O[O.length-1].getBoundingClientRect().bottom+ee]}):[],et.sort((R,O)=>R[0]-O[0]);let v=[];et.forEach((R)=>{let O=v[v.length-1];if(O&&R[0]<=O[1]+2)O[1]=Math.max(O[1],R[1]);else v.push([R[0],R[1]])}),et=v}function ie(ee){if(fe.length<2||ee<=fe[0].y)return 0;for(let ce=0;ce<fe.length-1;ce++){let v=fe[ce].y,R=fe[ce+1].y;if(ee<R)return ce+(R>v?(ee-v)/(R-v):1)}return fe.length-1}function D(ee,ce){let{v,m:R,n:O}=pe,z=Math.min(O-2,Math.max(0,Math.floor(ee))),H=O<2?0:os(ee-z);if(c.matches)H=H<0.5?0:1;let ue=O<2?0:z+1;for(let Ze of Zo)ce[Ze]=xa(v[Ze][z],R[Ze][z],v[Ze][ue],R[Ze][ue],H);let _e=pe.hold[ue];if(_e&&H>0&&H<1)for(let Ze in _e)ce[Ze]=xa(v[Ze][z],R[Ze][z],v[Ze][ue],R[Ze][ue],os((H-_e[Ze])/(1-_e[Ze])));let le=v.LA[z],we=v.LA[ue],Be=Math.abs(we-le);if(Be>0.05&&H>0&&H<1){let Ze=Math.exp(le),ke=Math.exp(we),ot=ha(H,os((Math.exp(ce.LA)-Ze)/(ke-Ze)),os(Be/1.5));ce.mx=xa(v.mx[z],R.mx[z],v.mx[ue],R.mx[ue],ot),ce.my=xa(v.my[z],R.my[z],v.my[ue],R.my[ue],ot),ce.mz=xa(v.mz[z],R.mz[z],v.mz[ue],R.mz[ue],ot)}let rt=da(ce.Z);return ce.dist=Math.exp(ce.LA)*rt,ce.tx=ce.mx*rt,ce.ty=ce.my*rt,ce.tz=ce.mz*rt,ce.chapter=H<0.5?fe[z].id:fe[ue].id,ce}function Ce(ee){for(let[ce,v]of et)if(ee>=ce-1&&ee+he<=v+1)return true;return false}function Pe(ee=false){let ce=e.clientWidth||innerWidth,v=e.clientHeight||innerHeight;if(!ee&&ce===K&&Math.abs(v-he)<120)return;K=ce,he=v,d.setPixelRatio(b),d.setSize(ce,v,false),m.aspect=ce/v,m.updateProjectionMatrix(),xt()}let $e={x:0,y:0,sx:0,sy:0},E=(ee)=>{if(ee.pointerType!=="mouse")return;$e.x=ee.clientX/innerWidth*2-1,$e.y=ee.clientY/innerHeight*2-1};if(h)window.addEventListener("pointermove",E,{passive:true});let x=n.map(()=>false),N=1,X=-1,de=-1;W.setStates(x);let me=t?[...t.querySelectorAll("[data-l]")].map((ee)=>({el:ee,key:ee.dataset.l,o:-1,x:-1e4,y:-1e4,hide:0,w:0,h:0})):[],Se=(ee)=>ee.el.classList.contains("sl--home")?0:ee.key.startsWith("city-")?1:ee.key.startsWith("town-")?2+ +ee.key.slice(5)*0.01:-1;me.forEach((ee)=>{ee.p=Se(ee),ee.mid=!/sl--(ch|out|gate|dim|layer|you)\b/.test(ee.el.className)});let ne=me.filter((ee)=>ee.p>=0).sort((ee,ce)=>ee.p-ce.p),re=[],Ue=[...document.querySelectorAll("[data-label-avoid]")],Xe=[],ve=new I,ye=new I,Ge=new I,st=(ee)=>ua.cities.findIndex((ce)=>ce[0]===ee);function Dt(ee,ce){let[v,R]=ee.split("-"),O=+R;switch(v){case"osijek":case"you":return S.osijekWorld(ve),ye.copy(ve).sub(ce.globeCenter).normalize(),ye.dot(Ge.copy(ce.camPos).sub(ve))>0?(v==="you"?J.labFinale:J.labOsijek)*ce.globeA:0;case"city":return _.cityWorld(st(R),ve),(R==="Osijek"?Math.max(J.labCities,J.labTowns)*(1-vt(1.62,1.8,J.Z)):J.labCities)*ce.europeA;case"town":return _.townWorld(O,ve),J.labTowns*ce.europeA;case"cath":case"drava":case"hotel":case"trg":return ve.copy(V.anchors[v]).applyMatrix4(V.group.matrixWorld),J.labCity*ce.cityA*vt(xr-0.12,xr-0.01,J.Z);case"dim":return G.anchor("dim",ve),Hi;case"ch":return ve.copy(W.channelWorld(O)),J.labFlow;case"out":return ve.copy(W.outcomeWorld(O)),J.labFlow;case"gate":return ve.copy(W.gateWorld(O)),J.labFlow;case"layer":return q.anchor(O,ve),J.labLayers*J.layersA*q.arrival(O)*(0.38+0.62*q.emphasis(O));default:return 0}}function j(ee,ce,v=0.016){if(Xe.length=0,ce)for(let R of Ue){let O=R.getBoundingClientRect();if(O.bottom>0&&O.top<he&&O.width)Xe.push([O.left,O.top,O.right,O.bottom])}for(let R of me){let O=ce?Dt(R.key,ee):0;if(O>0.01)if(ve.project(m),ve.z>1||Math.abs(ve.x)>1.15||Math.abs(ve.y)>1.15)O=0;else{O*=1-vt(0.8,0.95,Math.abs(ve.x));let z=Math.round((ve.x*0.5+0.5)*K),H=Math.round((-ve.y*0.5+0.5)*he);if(R.mid){if(!R.w)R.w=R.el.offsetWidth,R.h=R.el.offsetHeight;O*=vt(0,14,Math.min(z,K-z)-R.w/2)}if(z!==R.x||H!==R.y)R.el.style.transform=`translate3d(${z}px, ${H}px, 0)`,R.x=z,R.y=H}R.want=O}re.length=0;for(let R of ne){let O=false;if(R.want>0.05){if(!R.w)R.w=R.el.offsetWidth,R.h=R.el.offsetHeight;let z=R.x-R.w/2-3,H=R.x+R.w/2+3,ue=R.y-R.h-9,_e=R.y+2;for(let le of re)if(z<le[2]&&H>le[0]&&ue<le[3]&&_e>le[1]){O=true;break}if(!O)re.push([z,ue,H,_e])}R.hide=c.matches?+O:_r(R.hide,O?1:0,10,v)}for(let R of me){let O=false;if(R.want>0.05&&Xe.length){if(!R.w)R.w=R.el.offsetWidth,R.h=R.el.offsetHeight;let H=R.x-R.w/2,ue=R.x+R.w/2,_e=R.y-R.h,le=R.y;O=Xe.some((we)=>H<we[2]&&ue>we[0]&&_e<we[3]&&le>we[1])}R.block=c.matches?+O:_r(R.block||0,O?1:0,10,v);let z=R.want*(1-R.hide)*(1-R.block);if(z=Math.round(os(z)*100)/100,z!==R.o){if(R.el.style.opacity=String(z),z>0.5!==R.o>0.5)R.el.classList.toggle("is-on",z>0.5);R.o=z}}}async function Ie(){let ee=[];A.traverse((ce)=>{ee.push([ce,ce.visible,ce.frustumCulled]),ce.visible=true,ce.frustumCulled=false});try{await C(A)}catch(ce){}d.setScissorTest(true),d.setScissor(0,0,1,1),d.render(A,m),d.setScissorTest(false);for(let[ce,v,R]of ee)ce.visible=v,ce.frustumCulled=R}let ae=0,Re=performance.now(),De=0,Ae=0,Le=false,lt=false,Ut=0,Pt=0,An=0,ln=16,us=false,ki=null,zi=false,Rn=false,gn={globeCenter:new I,camPos:new I,globeA:0,europeA:0,cityA:0},ri={},Cn=new I,Mi=0,Hi=0,oe=new I;function se(ee,ce){let v=ce??Math.min(0.05,Math.max(0.001,(ee-Re)/1000));Re=ee;let R=c.matches;if(!R)De+=v;let O=window.scrollY;if(je.target=ie(O),Math.abs(je.target-je.smooth)>1.1)je.smooth=je.target-Math.sign(je.target-je.smooth)*1.1;if(je.smooth=R?je.target:_r(je.smooth,je.target,4.6,v),Math.abs(je.smooth-je.target)<0.0001)je.smooth=je.target;if(D(je.smooth,J),ki)Object.assign(J,ki);if(D(je.target,ri),ri.chapter!==ut)ut=ri.chapter,r?.(ut);let z=Ce(O);if(a?.({progress:je.smooth,covered:z}),z&&Le){if(!us)j(gn,false),us=true;return}if(us=false,h&&!R)$e.sx=_r($e.sx,$e.x,2.5,v),$e.sy=_r($e.sy,$e.y,2.5,v);let H=(J.az+$e.sx*2.6)*Tn,ue=(J.el-$e.sy*1.5)*Tn;if(m.position.set(J.tx+J.dist*Math.cos(ue)*Math.sin(H),J.ty+J.dist*Math.sin(ue),J.tz+J.dist*Math.cos(ue)*Math.cos(H)),m.up.set(0,1,0),m.lookAt(J.tx,J.ty,J.tz),J.roll)m.rotateZ(J.roll*Tn);if(Math.abs(m.fov-J.fov)>0.01)m.fov=J.fov;m.near=J.Z>1.5?0.5:0.05,m.far=J.Z>1.5?2400:6000;let _e=J.sy;for(let[At,yt]of Ne){let tn=(At-O)/he,nt=(yt-O)/he;if(nt<-0.05||tn>1)continue;let ht=vt(0.5,0.3,(tn+nt)/2)*vt(-0.05,0.2,nt);if(ht>0)_e=ha(_e,os(0.5-(Math.max(nt,0)+0.9)/2,-0.3,0.3),ht)}m.setViewOffset(K,he,-J.sx*K,_e*he,K,he),m.updateProjectionMatrix(),m.updateMatrixWorld();let le=J.Z,we=da(le),Be=Wo*we;if(S.group.scale.setScalar(Be),S.group.position.set(0,-Be,0),gn.globeCenter.set(0,-Be,0),J.idle>0.985&&!R)Ae+=v*0.012;let rt=Math.atan2(Math.sin(Ae),Math.cos(Ae)),Ze=1-vt(0.86,0.94,le);if(S.update({alpha:Ze,spin:rt*J.idle,net:J.net,finale:J.finale,dive:vt(0.45,0.9,le),time:De,pr:b,reduce:R}),S.group.updateMatrixWorld(),P.update({alpha:Ze*(0.55+0.45*J.net),time:De,conv:J.conv,pr:b,camera:m,frame:S.spin}),J.finale>0.01)S.osijekWorld(oe).sub(gn.globeCenter).multiplyScalar(0.9833333333333332).add(gn.globeCenter);Y.update({b:J.finale*0.85,alpha:Ze,at:oe,unit:Be*0.0005,camera:m,time:De,pr:b,drop:0}),ge(J.dusk),Sr.value=vt(0.3,0.95,le),Ps.value=1-vt(0.86,0.97,le);let ke=vt(0.78,0.87,le)*(1-vt(1.8,1.97,le));_.group.scale.set(we,Math.min(we,1),we),_.update({alpha:ke,Z:le,time:De,dt:v,pr:b,reduce:R,net:J.net,trace:J.trace,hl:J.hl,dusk:J.dusk,night:Q.night,mapFade:vt(1.06,1.4,le),res:[K*b,he*b]}),V.group.scale.set(we*jo,we*Oi,we*Oi),V.group.updateMatrixWorld();let ot=vt(0.38,0.88,J.scan),Bt=vt(1.72,2.05,le),St=vt(1.04,1.28,le),Ot=vt(1.3,1.8,le);V.update({alpha:Bt,lamps:St,streets:Ot,wake:Q.night*1.12,detail:vt(1.95,2.25,le),rise:J.rise,dim:J.dim,lines:J.lines,cath:vt(0.45,1,J.cath),glow:J.glow,cathSolid:J.cathSolid,focus:J.focus,scan:ot,time:De,pr:b,reduce:R,camera:m}),V.flood.position.copy(V.floodLocal).applyMatrix4(V.group.matrixWorld);let Kt=St>0.15;if(Kt!==zi)zi=Kt,o.classList.toggle("show-osm",Kt);let We=we*Oi;Cn.copy(V.spire).applyMatrix4(V.group.matrixWorld),te.update({b:J.beam,alpha:Bt,at:Cn,unit:We,camera:m,time:De,pr:b});let at=N*J.flow,Ke=((V.spire.y+2)*(1-ot)-1.5)*We;T.update({morph:J.morph,opacity:J.wire*Bt,time:De,bad:at,scanY:Ke,scanOn:J.wire>0.001&&J.morph<0.999?1:0}),Mi=J.wire*Bt*(1-vt(0.25,0.7,J.morph));let _t=vt(0.8,1,J.scan);Hi=Mi*vt(0.9,1,_t),G.update({notes:_t,notesA:Mi,rules:vt(0.15,1,J.morph),rulesA:J.wire*Bt*(1-J.flow),toSite:vt(1.05,1.8,J.morph)}),W.update({alpha:J.flow,time:De,dt:v,pr:b,reduce:R,focusGate:X}),q.update({p:J.layers,alpha:J.layersA,assemble:J.assemble,active:J.assemble>0.5?-1:de,dt:v,reduce:R});for(let At=0;At<2;At++)be.pos[At*3]=m.position.x+S.sun.x*900,be.pos[At*3+1]=m.position.y+S.sun.y*900,be.pos[At*3+2]=m.position.z+S.sun.z*900;if(be.geometry.attributes.position.needsUpdate=true,be.uniforms.uPR.value=b,be.uniforms.uOpacity.value=(1-vt(0.25,0.8,le))*(J.finale>0.5?0.7:1),be.points.visible=be.uniforms.uOpacity.value>0.002,Z.points.position.copy(m.position),Z.uniforms.uPR.value=b,Z.uniforms.uOpacity.value=J.stars*(1-vt(0.6,1,le))+J.stars*0.25*vt(1.5,2,le),Z.points.visible=Z.uniforms.uOpacity.value>0.002,A.updateMatrixWorld(),gn.camPos.copy(m.position),gn.globeA=Ze,gn.europeA=ke,gn.cityA=Bt,j(gn,!z,v),d.render(A,m),!Le)Le=true,s?.();if(k&&!Rn&&!ce)k=false,Rn=true,(window.requestIdleCallback||((yt)=>setTimeout(yt,60)))(()=>Ie().finally(()=>{Rn=false}),{timeout:1200});if(!ce&&!Rn)if(ln=ln*0.95+v*1000*0.05,ln>24&&b>1){if(Pt=0,++Ut>90){if(b===An)y=b-0.25;b=Math.max(1,b-0.25),Ut=0,ln=16,Pe(true)}}else if(ln<18&&b<y){if(Ut=0,++Pt>600)b=An=Math.min(y,b+0.25),Pt=0,Pe(true)}else Ut=0,Pt=0}function Ee(ee){if(ae=requestAnimationFrame(Ee),!lt||document.hidden||window.__zaecFreeze){Re=ee;return}se(ee)}let qe=new ResizeObserver(()=>Pe());qe.observe(e);let Fe=new ResizeObserver(()=>xt());Fe.observe(document.body);let Oe=()=>{Re=performance.now()};document.addEventListener("visibilitychange",Oe);let xe=(ee)=>{ee.preventDefault(),lt=false,o.classList.add("webgl-lost")};e.addEventListener("webglcontextlost",xe),Pe(true),je.smooth=je.target=ie(window.scrollY),D(je.smooth,J);let Me=false,Je=()=>{if(Me)return;Me=true,lt=true,Re=performance.now(),ae=requestAnimationFrame(Ee)};return Promise.race([Ie(),new Promise((ee)=>setTimeout(ee,2500))]).finally(Je),{lite:f,refresh:()=>xt(),setGates(ee){x=ee.slice(),N=x.filter((ce)=>!ce).length/x.length,W.setStates(x)},setFocusGate(ee){X=ee},setLayerHover(ee){de=ee},layerCount:Ru.length,debugStep(ee=1){for(let ce=0;ce<ee;ce++)se(performance.now(),0.016666666666666666);return this.debugCam()},debugCam(){return{progress:+je.smooth.toFixed(3),chapter:ut,Z:+J.Z.toFixed(3),cam:m.position.toArray().map((ee)=>+ee.toFixed(2)),target:[J.tx,J.ty,J.tz].map((ee)=>+ee.toFixed(2)),anchors:fe.map((ee)=>`${ee.id}@${Math.round(ee.y)}`),dpr:b,lite:f,lines:T.count,cityLoaded:V.isLoaded(),night:+Q.night.toFixed(2)}},stats:()=>W.stats(),debugState:()=>({...J}),debug:{camera:m,scene:A,globe:S,europe:_,city:V,renderer:d,beam:te},debugOverride(ee){return ki=ee,this.debugStep(1)},dispose(){l=true,cancelAnimationFrame(ae),lt=false,qe.disconnect(),Fe.disconnect(),document.removeEventListener("visibilitychange",Oe),e.removeEventListener("webglcontextlost",xe),window.removeEventListener("pointermove",E),[S,P,_,V,T,q,W,te,Y].forEach((ee)=>ee.dispose()),Z.geometry.dispose(),be.geometry.dispose(),be.material.dispose(),Z.material.dispose(),d.dispose()}}}export{bb as createWorld3};