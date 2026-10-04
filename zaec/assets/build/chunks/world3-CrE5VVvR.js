import{t as e}from"./gates-BLJKxCCe.js";var t,n,r,i,a,o,s,c,l,u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,O=1018,k=1020,A=35902,j=35899,M=1021,N=1022,P=1023,F=1026,ee=1027,te=1028,ne=1029,re=1030,ie=1031,ae=1033,oe=33776,se=33777,I=33778,L=33779,R=35840,ce=35841,le=35842,ue=35843,de=36196,fe=37492,pe=37496,me=37488,he=37489,ge=37490,_e=37491,ve=37808,ye=37809,be=37810,xe=37811,Se=37812,Ce=37813,we=37814,Te=37815,Ee=37816,De=37817,Oe=37818,ke=37819,z=37820,Ae=37821,je=36492,Me=36494,B=36495,Ne=36283,V=36284,H=36285,Pe=36286,Fe=2300,Ie=2301,Le=2302,Re=2303,ze=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,U(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}s=Symbol.iterator;var K=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[s](){yield this.x,yield this.y}};t=K,t.prototype.isVector2=!0;var ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c=Symbol.iterator;var q=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_t.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_t.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gt.copy(this).projectOnVector(e),this.sub(gt)}reflect(e){return this.sub(gt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[c](){yield this.x,yield this.y,yield this.z}};n=q,n.prototype.isVector3=!0;var gt=new q,_t=new ht,J=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(vt.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(vt.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};r=J,r.prototype.isMatrix3=!0;var vt=new J,yt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xt(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var St=xt();function Ct(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function wt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Tt,Et=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tt===void 0&&(Tt=Qe(`canvas`)),Tt.width=e.width,Tt.height=e.height;let t=Tt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Tt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ct(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ct(t[e]/255)*255):t[e]=Ct(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Dt=0,Ot=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(kt(r[t].image)):e.push(kt(r[t]))}else e=kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Et.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var At=0,jt=new q,Mt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=P,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:At++}),this.uuid=ut(),this.name=``,this.source=new Ot(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jt).x}get height(){return this.source.getSize(jt).y}get depth(){return this.source.getSize(jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=300,Mt.DEFAULT_ANISOTROPY=1,l=Symbol.iterator;var Nt=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[l](){yield this.x,yield this.y,yield this.z,yield this.w}};i=Nt,i.prototype.isVector4=!0;var Pt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r=new Mt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ot(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ft=class extends Pt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},It=class extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Lt=class extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Rt=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/zt.setFromMatrixColumn(e,0).length(),i=1/zt.setFromMatrixColumn(e,1).length(),a=1/zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vt,e,Ht)}lookAt(e,t,n){let r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ut.crossVectors(n,Gt),Ut.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ut.crossVectors(n,Gt)),Ut.normalize(),Wt.crossVectors(Gt,Ut),r[0]=Ut.x,r[4]=Wt.x,r[8]=Gt.x,r[1]=Ut.y,r[5]=Wt.y,r[9]=Gt.y,r[2]=Ut.z,r[6]=Wt.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=zt.set(r[0],r[1],r[2]).length(),o=zt.set(r[4],r[5],r[6]).length(),s=zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Bt.copy(this);let c=1/a,l=1/o,u=1/s;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=l,Bt.elements[5]*=l,Bt.elements[6]*=l,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};a=Rt,a.prototype.isMatrix4=!0;var zt=new q,Bt=new Rt,Vt=new q(0,0,0),Ht=new q(1,1,1),Ut=new q,Wt=new q,Gt=new q,Kt=new Rt,qt=new ht,Jt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qt.setFromEuler(this),this.setFromQuaternion(qt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER=`XYZ`;var Yt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Xt=0,Zt=new q,Qt=new ht,$t=new Rt,en=new q,tn=new q,nn=new q,rn=new ht,an=new q(1,0,0),on=new q(0,1,0),sn=new q(0,0,1),cn={type:`added`},ln={type:`removed`},un={type:`childadded`,child:null},dn={type:`childremoved`,child:null},fn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Jt,r=new ht,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new J}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qt.setFromAxisAngle(e,t),this.quaternion.multiply(Qt),this}rotateOnWorldAxis(e,t){return Qt.setFromAxisAngle(e,t),this.quaternion.premultiply(Qt),this}rotateX(e){return this.rotateOnAxis(an,e)}rotateY(e){return this.rotateOnAxis(on,e)}rotateZ(e){return this.rotateOnAxis(sn,e)}translateOnAxis(e,t){return Zt.copy(e).applyQuaternion(this.quaternion),this.position.add(Zt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(an,e)}translateY(e){return this.translateOnAxis(on,e)}translateZ(e){return this.translateOnAxis(sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?en.copy(e):en.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(tn,en,this.up):$t.lookAt(en,tn,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Qt.setFromRotationMatrix($t),this.quaternion.premultiply(Qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,e,nn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,rn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};fn.DEFAULT_UP=new q(0,1,0),fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},mn={type:`move`},hn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},vn={h:0,s:0,l:0};function yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=dt(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=yn(i,r,e+1/3),this.g=yn(i,r,e),this.b=yn(i,r,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=gn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}copyLinearToSRGB(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return St.workingToColorSpace(bn.copy(this),e),Math.round(G(bn.r*255,0,255))*65536+Math.round(G(bn.g*255,0,255))*256+Math.round(G(bn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(bn.copy(this),t);let n=bn.r,r=bn.g,i=bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ue){St.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,r=bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(vn);let n=ft(_n.h,vn.h,t),r=ft(_n.s,vn.s,t),i=ft(_n.l,vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Y;Y.NAMES=gn;var xn=class extends fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new q,Cn=new q,wn=new q,Tn=new q,En=new q,Dn=new q,On=new q,kn=new q,An=new q,jn=new q,Mn=new Nt,Nn=new Nt,Pn=new Nt,Fn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Sn.subVectors(r,t),Cn.subVectors(n,t),wn.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Cn),s=Sn.dot(wn),c=Cn.dot(Cn),l=Cn.dot(wn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn)!==null&&Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Tn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Tn.x),s.addScaledVector(a,Tn.y),s.addScaledVector(o,Tn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Mn.setScalar(0),Nn.setScalar(0),Pn.setScalar(0),Mn.fromBufferAttribute(e,t),Nn.fromBufferAttribute(e,n),Pn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mn,i.x),a.addScaledVector(Nn,i.y),a.addScaledVector(Pn,i.z),a}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Cn.subVectors(e,t),Sn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Sn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;En.subVectors(r,n),Dn.subVectors(i,n),kn.subVectors(e,n);let s=En.dot(kn),c=Dn.dot(kn);if(s<=0&&c<=0)return t.copy(n);An.subVectors(e,r);let l=En.dot(An),u=Dn.dot(An);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(En,a);jn.subVectors(e,i);let f=En.dot(jn),p=Dn.dot(jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Dn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return On.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(On,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(En,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Rn):Rn.fromBufferAttribute(r,t),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),zn.copy(e.boundingBox)),zn.applyMatrix4(e.matrixWorld),this.union(zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),qn.subVectors(this.max,Kn),Bn.subVectors(e.a,Kn),Vn.subVectors(e.b,Kn),Hn.subVectors(e.c,Kn),Un.subVectors(Vn,Bn),Wn.subVectors(Hn,Vn),Gn.subVectors(Bn,Hn);let t=[0,-Un.z,Un.y,0,-Wn.z,Wn.y,0,-Gn.z,Gn.y,Un.z,0,-Un.x,Wn.z,0,-Wn.x,Gn.z,0,-Gn.x,-Un.y,Un.x,0,-Wn.y,Wn.x,0,-Gn.y,Gn.x,0];return!Xn(t,Bn,Vn,Hn,qn)||(t=[1,0,0,0,1,0,0,0,1],!Xn(t,Bn,Vn,Hn,qn))?!1:(Jn.crossVectors(Un,Wn),t=[Jn.x,Jn.y,Jn.z],Xn(t,Bn,Vn,Hn,qn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new q,new q,new q,new q,new q,new q,new q,new q],Rn=new q,zn=new In,Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new q,Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new q;function Xn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Yn.fromArray(e,a);let o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),s=t.dot(Yn),c=n.dot(Yn),l=r.dot(Yn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Zn=new q,Qn=new K,$n=0,er=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$n++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=T,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},tr=class extends er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},nr=class extends er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},X=class extends er{constructor(e,t,n){super(new Float32Array(e),t,n)}},rr=new In,ir=new q,ar=new q,or=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ar)),this.expandByPoint(ir.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=0,cr=new Rt,lr=new fn,ur=new q,dr=new In,fr=new In,pr=new q,mr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?nr:tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new X(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(pr),pr.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(pr)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(dr.min,fr.min),dr.expandByPoint(pr),pr.addVectors(dr.max,fr.max),dr.expandByPoint(pr)):(dr.expandByPoint(fr.min),dr.expandByPoint(fr.max))}dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pr.fromBufferAttribute(a,t),o&&(ur.fromBufferAttribute(e,t),pr.add(ur)),r=Math.max(r,n.distanceToSquared(pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pr.fromBufferAttribute(e,t),pr.normalize(),e.setXYZ(t,pr.x,pr.y,pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new er(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},hr=new q,gr=new q,_r=new J,vr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hr.subVectors(n,t).cross(gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_r.getNormalMatrix(e),r=this.coplanarPoint(hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yr=0,br=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=new q,Sr=new q,Cr=new q,wr=new q,Tr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sr.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Sr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=wr.dot(this.direction),s=-wr.dot(Cr),c=wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Sr).addScaledVector(Cr,d),f}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);let n=xr.dot(this.direction),r=xr.dot(xr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,te=T-P*D,ne=E-F*D,re=O-P*A,ie=k-F*A,ae=j-P*N,oe=M-F*N,se=ae*ie-oe*re,I=te*oe-ne*ae,L=re*ne-ie*te;if(r){if(se<0||I<0||L<0)return null}else if((se<0||I<0||L<0)&&(se>0||I>0||L>0))return null;let R=se+I+L;if(R===0)return null;let ce=ee*(se*D+I*A+L*N);return(R>0?ce<0:ce>0)?null:this.at(ce/R,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Er=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dr=new Rt,Or=new Tr,kr=new or,Ar=new q,jr=new q,Mr=new q,Nr=new q,Pr=new q,Fr=new q,Ir=new q,Lr=new q,Rr=class extends fn{constructor(e=new mr,t=new Er){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Fr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Pr.fromBufferAttribute(s,e),a?Fr.addScaledVector(Pr,r):Fr.addScaledVector(Pr.sub(t),r))}t.add(Fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),Or.copy(e.ray).recast(e.near),!(kr.containsPoint(Or.origin)===!1&&(Or.intersectSphere(kr,Ar)===null||Or.origin.distanceToSquared(Ar)>(e.far-e.near)**2))&&(Dr.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Dr),(n.boundingBox===null||Or.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Br(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Br(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Br(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Br(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Lr.copy(s),Lr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Lr);return l<n.near||l>n.far?null:{distance:l,point:Lr.clone(),object:e}}function Br(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,jr),e.getVertexPosition(c,Mr),e.getVertexPosition(l,Nr);let u=zr(e,t,n,r,jr,Mr,Nr,Ir);if(u){let e=new q;Fn.getBarycoord(Ir,jr,Mr,Nr,e),i&&(u.uv=Fn.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Fn.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Fn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Fn.getNormal(jr,Mr,Nr,t.normal),u.face=t,u.barycoord=e}return u}var Vr=class extends Mt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hr=new or,Ur=new K(.5,.5),Wr=new q,Gr=class{constructor(e=new vr,t=new vr,n=new vr,r=new vr,i=new vr,a=new vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476+Ur.distanceTo(e.center),Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kr=class extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qr=new q,Jr=new q,Yr=new Rt,Xr=new Tr,Zr=new or,Qr=new q,$r=new q,ei=class extends fn{constructor(e=new mr,t=new Kr){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)qr.fromBufferAttribute(t,e-1),Jr.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=qr.distanceTo(Jr);e.setAttribute(`lineDistance`,new X(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=i,e.ray.intersectsSphere(Zr)===!1)return;Yr.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Yr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ti(this,e,Xr,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ti(this,e,Xr,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ti(this,e,Xr,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ti(this,e,Xr,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ti(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(qr.fromBufferAttribute(s,i),Jr.fromBufferAttribute(s,a),n.distanceSqToSegment(qr,Jr,Qr,$r)>r)return;Qr.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Qr);if(!(c<t.near||c>t.far))return{distance:c,point:$r.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ni=new q,ri=new q,ii=class extends ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ni.fromBufferAttribute(t,e),ri.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ni.distanceTo(ri);e.setAttribute(`lineDistance`,new X(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ai=class extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oi=new Rt,si=new Tr,ci=new or,li=new q,ui=class extends fn{constructor(e=new mr,t=new ai){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(r),ci.radius+=i,e.ray.intersectsSphere(ci)===!1)return;oi.copy(r).invert(),si.copy(e.ray).applyMatrix4(oi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);li.fromBufferAttribute(l,n),di(li,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)li.fromBufferAttribute(l,a),di(li,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function di(e,t,n,r,i,a,o){let s=si.distanceSqToPoint(e);if(s<n){let n=new q;si.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fi=class extends Mt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends Mt{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=F,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ot(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mi=class extends pi{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=F){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hi=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gi=class e extends mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},_i=class e extends mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new X(a,3)),this.setAttribute(`normal`,new X(o,3)),this.setAttribute(`uv`,new X(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},vi=class e extends mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yi=class e extends vi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class e extends mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new X(i,3)),this.setAttribute(`normal`,new X(i.slice(),3)),this.setAttribute(`uv`,new X(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},xi=new q,Si=new q,Ci=new q,wi=new Fn,Ti=class extends mr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ct*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=wi;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),wi.getNormal(Ci),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=wi[c[e]],o=wi[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ci.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ci.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];xi.fromBufferAttribute(a,t),Si.fromBufferAttribute(a,n),d.push(xi.x,xi.y,xi.z),d.push(Si.x,Si.y,Si.z)}this.setAttribute(`position`,new X(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ei=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Rt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(G(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(G(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Di=class extends Ei{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oi=class extends Di{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ki(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ai=new q,ji=new q,Mi=new ki,Ni=new ki,Pi=new ki,Fi=class extends Ei{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ji.subVectors(r[0],r[1]).add(r[0]),c=ji);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ai.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ai),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Mi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ni.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Pi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Mi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ni.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Pi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Mi.calc(s),Ni.calc(s),Pi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ii(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Li(e,t){let n=1-e;return n*n*t}function Ri(e,t){return 2*(1-e)*e*t}function zi(e,t){return e*e*t}function Bi(e,t,n,r){return Li(e,t)+Ri(e,n)+zi(e,r)}function Vi(e,t){let n=1-e;return n*n*n*t}function Hi(e,t){let n=1-e;return 3*n*n*e*t}function Ui(e,t){return 3*(1-e)*e*e*t}function Wi(e,t){return e*e*e*t}function Gi(e,t,n,r,i){return Vi(e,t)+Hi(e,n)+Ui(e,r)+Wi(e,i)}var Ki=class extends Ei{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qi=class extends Ei{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y),Gi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Ei{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Ei{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Ei{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Ei{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y),Bi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ii(o,s.x,c.x,l.x,u.x),Ii(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},$i=Object.freeze({__proto__:null,ArcCurve:Oi,CatmullRomCurve3:Fi,CubicBezierCurve:Ki,CubicBezierCurve3:qi,EllipseCurve:Di,LineCurve:Ji,LineCurve3:Yi,QuadraticBezierCurve:Xi,QuadraticBezierCurve3:Zi,SplineCurve:Qi}),ea=class extends Ei{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new $i[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new $i[n.type]().fromJSON(n))}return this}},ta=class extends ea{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ji(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Xi(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ki(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Qi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Di(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},na=class extends ta{constructor(e){super(e),this.uuid=ut(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ta().fromJSON(n))}return this}};function ra(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ia(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=da(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return oa(a,o,n,s,c,l,0),o}function ia(e,t,n,r,i){let a;if(i===Fa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ma(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ma(i/r|0,e[i],e[i+1],a);return a&&wa(a,a.next)&&(Na(a),a=a.next),a}function aa(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(wa(n,n.next)||Ca(n.prev,n,n.next)===0)){if(Na(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function oa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ga(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ca(e,r,i,a):sa(e)){t.push(c.i,e.i,l.i),Na(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=la(aa(e),t),oa(e,t,n,r,i,a,2)):o===2&&ua(e,t,n,r,i,a):oa(aa(e),t,n,r,i,a,1);break}}}function sa(e){let t=e.prev,n=e,r=e.next;if(Ca(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&xa(i,s,a,c,o,l,m.x,m.y)&&Ca(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ca(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ca(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=va(p,m,t,n,r),v=va(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function la(e,t){let n=e;do{let r=n.prev,i=n.next.next;!wa(r,i)&&Ta(r,n,n.next,i)&&ka(r,i)&&ka(i,r)&&(t.push(r.i,n.i,i.i),Na(n),Na(n.next),n=e=i),n=n.next}while(n!==e);return aa(n)}function ua(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Sa(o,e)){let s=ja(o,e);o=aa(o,o.next),s=aa(s,s.next),oa(o,t,n,r,i,a,0),oa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function da(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ia(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ya(o))}i.sort(fa);for(let e=0;e<i.length;e++)n=pa(i[e],n);return n}function fa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function pa(e,t){let n=ma(e,t);if(!n)return t;let r=ja(n,e);return aa(r,r.next),aa(n,n.next)}function ma(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(wa(e,n))return n;do{if(wa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ba(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ka(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ha(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ha(e,t){return Ca(e.prev,e,t.prev)<0&&Ca(t.next,e,e.next)<0}function ga(e,t,n,r){let i=e;do i.z===0&&(i.z=va(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,_a(i)}function _a(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function va(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ya(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ba(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function xa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ba(e,t,n,r,i,a,o,s)}function Sa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Oa(e,t)&&(ka(e,t)&&ka(t,e)&&Aa(e,t)&&(Ca(e.prev,e,t.prev)||Ca(e,t.prev,t))||wa(e,t)&&Ca(e.prev,e,e.next)>0&&Ca(t.prev,t,t.next)>0)}function Ca(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function wa(e,t){return e.x===t.x&&e.y===t.y}function Ta(e,t,n,r){let i=Da(Ca(e,t,n)),a=Da(Ca(e,t,r)),o=Da(Ca(n,r,e)),s=Da(Ca(n,r,t));return!!(i!==a&&o!==s||i===0&&Ea(e,n,t)||a===0&&Ea(e,r,t)||o===0&&Ea(n,e,r)||s===0&&Ea(n,t,r))}function Ea(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Da(e){return e>0?1:e<0?-1:0}function Oa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ta(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ka(e,t){return Ca(e.prev,e,e.next)<0?Ca(e,t,e.next)>=0&&Ca(e,e.prev,t)>=0:Ca(e,t,e.prev)<0||Ca(e,e.next,t)<0}function Aa(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ja(e,t){let n=Pa(e.i,e.x,e.y),r=Pa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ma(e,t,n,r){let i=Pa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Na(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Pa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ia=class{static triangulate(e,t,n=2){return ra(e,t,n)}},La=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ra(e),za(n,e);let a=e.length;t.forEach(Ra);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,za(n,t[e]);let o=Ia.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ra(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function za(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ba=class e extends mr{constructor(e=new na([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new X(r,3)),this.setAttribute(`uv`,new X(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Va:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!La.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];La.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||W(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=La.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=La.triangulateShape(e,t)}let ee=F.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ee;e++){let n=F[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ee;e++){let n=F[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ee;e++){let t=F[e];oe(t[2],t[1],t[0])}for(let e=0;e<ee;e++){let t=F[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);L(o[0]),L(o[1]),L(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);L(s[0]),L(s[1]),L(s[3]),L(s[1]),L(s[2]),L(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function L(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ha(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $i[i.type]().fromJSON(i)),new e(r,t.options)}},Va={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function Ha(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ua=class e extends bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wa=class e extends mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ga=class e extends mr{constructor(e=new na([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new X(r,3)),this.setAttribute(`normal`,new X(i,3)),this.setAttribute(`uv`,new X(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;La.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];La.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=La.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ka(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ka(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var qa=class e extends mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ja(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Xa(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Xa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ya(e){let t={};for(let n=0;n<e.length;n++){let r=Ja(e[n]);for(let e in r)t[e]=r[e]}return t}function Xa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Za(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:St.workingColorSpace}var $a={clone:Ja,merge:Ya},eo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,to=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,no=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eo,this.fragmentShader=to,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=Za(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ro=class extends no{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},io=class extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function so(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var lo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},uo=class extends lo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},po=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class extends lo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=_o(n,t,g,y,r);i[p]=ho(x,o,_,b,m)}return i}};function ho(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function go(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function _o(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ho(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=go(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var vo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),co(e.settings)&&(n.settings={inTangents:so(e.settings.inTangents,Array),outTangents:so(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;co(this.settings)&&(yo(this.settings.inTangents,e),yo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function yo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}vo.prototype.ValueTypeName=``,vo.prototype.TimeBufferType=Float32Array,vo.prototype.ValueBufferType=Float32Array,vo.prototype.DefaultInterpolation=Ie;var bo=class extends vo{constructor(e,t,n){super(e,t,n)}};bo.prototype.ValueTypeName=`bool`,bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=Fe,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`color`;var So=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};So.prototype.ValueTypeName=`number`;var Co=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ht.slerpFlat(i,0,a,c-o,a,c,s);return i}},wo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName=`quaternion`,wo.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends vo{constructor(e,t,n){super(e,t,n)}};To.prototype.ValueTypeName=`string`,To.prototype.ValueBufferType=Array,To.prototype.DefaultInterpolation=Fe,To.prototype.InterpolantFactoryMethodLinear=void 0,To.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};Eo.prototype.ValueTypeName=`vector`;var Do=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oo=class extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ko=new Rt,Ao=new q,jo=new q,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ko,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new q,Po=new ht,Fo=new q,Io=class extends fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lo=new q,Ro=new K,zo=new K,Bo=class extends Io{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z),Lo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,zo),t.subVectors(zo,Ro)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vo=class extends Mo{constructor(){super(new Bo(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends Do{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Vo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Uo=class extends Io{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wo=class extends Mo{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Wo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ko=-90,qo=1,Jo=class extends fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bo(Ko,qo,e,t);r.layers=this.layers,this.add(r);let i=new Bo(Ko,qo,e,t);i.layers=this.layers,this.add(i);let a=new Bo(Ko,qo,e,t);a.layers=this.layers,this.add(a);let o=new Bo(Ko,qo,e,t);o.layers=this.layers,this.add(o);let s=new Bo(Ko,qo,e,t);s.layers=this.layers,this.add(s);let c=new Bo(Ko,qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Yo=class extends Bo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Xo=`\\[\\]\\.:\\/`,Zo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Qo=`[^\\[\\]\\.:\\/]`,$o=`[^`+Xo.replace(`\\.`,``)+`]`,es=`((?:WC+[\\/:])*)`.replace(`WC`,Qo),ts=`(WCOD+)?`.replace(`WCOD`,$o),ns=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Qo),rs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Qo),is=RegExp(`^`+es+ts+ns+rs+`$`),as=[`material`,`materials`,`bones`,`map`],os=class{constructor(e,t,n){let r=n||ss.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ss=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Zo,``)}static parseTrackName(e){let t=is.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);as.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ss.Composite=os,ss.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ss.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ss.prototype.GetterByBindingType=[ss.prototype._getValue_direct,ss.prototype._getValue_array,ss.prototype._getValue_arrayElement,ss.prototype._getValue_toArray],ss.prototype.SetterByBindingTypeAndVersioning=[[ss.prototype._setValue_direct,ss.prototype._setValue_direct_setNeedsUpdate,ss.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ss.prototype._setValue_array,ss.prototype._setValue_array_setNeedsUpdate,ss.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ss.prototype._setValue_arrayElement,ss.prototype._setValue_arrayElement_setNeedsUpdate,ss.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ss.prototype._setValue_fromArray,ss.prototype._setValue_fromArray_setNeedsUpdate,ss.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],o=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},o.prototype.isMatrix2=!0;function cs(e,t,n,r){let i=ls(r);switch(n){case M:return e*t;case te:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case N:return e*t*3/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case ae:return e*t*4/i.components*i.byteLength;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:case ue:return Math.max(e,16)*Math.max(t,8)/4;case R:case le:return Math.max(e,8)*Math.max(t,8)/2;case de:case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case z:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case je:case Me:case B:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case V:return Math.ceil(e/4)*Math.ceil(t/4)*8;case H:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ls(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case O:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case A:case j:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function us(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},fs={basic:{uniforms:Ya([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ya([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ya([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ya([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Ya([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Ya([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Ya([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ya([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ya([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ya([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Ya([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Ya([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Ya([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};fs.physical={uniforms:Ya([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var ps={r:0,b:0,g:0},ms=new Rt,hs=new J;hs.set(-1,0,0,0,1,0,0,0,1);function gs(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Rr(new gi(1,1,1),new no({name:`BackgroundCubeMaterial`,uniforms:Ja(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ms.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hs),l.material.toneMapped=St.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Rr(new Wa(2,2),new no({name:`BackgroundMaterial`,uniforms:Ja(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=St.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ps,Qa(e)),n.buffers.color.setClear(ps.r,ps.g,ps.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function _s(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function vs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ys(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function bs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var xs=4,Ss=6,Cs=20,ws=256,Ts=new Uo,Es=new Y,Ds=null,Os=0,ks=0,As=!1,js=new q,Ms=new q,Ns=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=js}=i;Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Os,ks),this._renderer.xr.enabled=As,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:E,format:P,colorSpace:We,depthBuffer:!1},r=Fs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ps(r)),this._blurMaterial=Rs(r,e,t),this._ggxMaterial=Ls(r,e,t)}return r}_compileMaterial(e){let t=new Rr(new mr,e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r,i){let a=new Bo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rr(new gi,new Er({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Es),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Is(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Is(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ts)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-xs?n-d+xs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Is(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ts),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Is(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ts)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Is(t,3*l*(r>this._lodMax-xs?r-this._lodMax+xs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ts)}};function Ps(e){let t=[],n=[],r=e,i=e-xs+1+Ss;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ms.set(1,r,n):e===1?Ms.set(-n,1,-r):e===2?Ms.set(-n,r,1):e===3?Ms.set(-1,r,-n):e===4?Ms.set(-n,-1,r):Ms.set(n,r,-1),Ms.toArray(l,(e*6+t)*3)}}let u=new mr;u.setAttribute(`position`,new er(c,3)),u.setAttribute(`outputDirection`,new er(l,3)),n.push(new Rr(u,null)),r>xs&&r--}return{lodMeshes:n,sizeLods:t}}function Fs(e,t,n){let r=new Ft(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Is(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ls(e,t,n){return new no({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(e,t,n){return new no({name:`SphericalGaussianBlur`,defines:{SAMPLES:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new no({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return new no({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hs=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gi(5,5,5),i=new no({name:`CubemapFromEquirect`,uniforms:Ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Rr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new Jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Us(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Hs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ns(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ns(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ws(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Gs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?nr:tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ks(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function qs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Js(e,t,n){let r=new WeakMap,i=new Nt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new It(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ys(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Xs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Zs(e,t,n,r,i,a){let o=new Ft(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new mr;l.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new X([0,2,0,0,2,0],2));let u=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Rr(l,u),f=new Uo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ft(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),c=new Ft(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},St.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Xs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Qs=new Mt,$s=new pi(1,1),ec=new It,tc=new Lt,nc=new fi,rc=[],ic=[],ac=new Float32Array(16),oc=new Float32Array(9),sc=new Float32Array(4);function cc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=rc[i];if(a===void 0&&(a=new Float32Array(i),rc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function lc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function uc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function dc(e,t){let n=ic[t];n===void 0&&(n=new Int32Array(t),ic[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2fv(this.addr,t),uc(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(lc(n,t))return;e.uniform3fv(this.addr,t),uc(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4fv(this.addr,t),uc(n,t)}}function gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;sc.set(r),e.uniformMatrix2fv(this.addr,!1,sc),uc(n,r)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;oc.set(r),e.uniformMatrix3fv(this.addr,!1,oc),uc(n,r)}}function vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;ac.set(r),e.uniformMatrix4fv(this.addr,!1,ac),uc(n,r)}}function yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2iv(this.addr,t),uc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lc(n,t))return;e.uniform3iv(this.addr,t),uc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4iv(this.addr,t),uc(n,t)}}function Cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2uiv(this.addr,t),uc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lc(n,t))return;e.uniform3uiv(this.addr,t),uc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4uiv(this.addr,t),uc(n,t)}}function Dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?($s.compareFunction=n.isReversedDepthBuffer()?518:515,a=$s):a=Qs,n.setTexture2D(t||a,i)}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||tc,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||nc,i)}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ec,i)}function jc(e){switch(e){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return hc;case 35674:return gc;case 35675:return _c;case 35676:return vc;case 5124:case 35670:return yc;case 35667:case 35671:return bc;case 35668:case 35672:return xc;case 35669:case 35673:return Sc;case 5125:return Cc;case 36294:return wc;case 36295:return Tc;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Dc;case 35679:case 36299:case 36307:return Oc;case 35680:case 36300:case 36308:case 36293:return kc;case 36289:case 36303:case 36311:case 36292:return Ac}}function Mc(e,t){e.uniform1fv(this.addr,t)}function Nc(e,t){let n=cc(t,this.size,2);e.uniform2fv(this.addr,n)}function Pc(e,t){let n=cc(t,this.size,3);e.uniform3fv(this.addr,n)}function Fc(e,t){let n=cc(t,this.size,4);e.uniform4fv(this.addr,n)}function Ic(e,t){let n=cc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Lc(e,t){let n=cc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Rc(e,t){let n=cc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function zc(e,t){e.uniform1iv(this.addr,t)}function Bc(e,t){e.uniform2iv(this.addr,t)}function Vc(e,t){e.uniform3iv(this.addr,t)}function Hc(e,t){e.uniform4iv(this.addr,t)}function Uc(e,t){e.uniform1uiv(this.addr,t)}function Wc(e,t){e.uniform2uiv(this.addr,t)}function Gc(e,t){e.uniform3uiv(this.addr,t)}function Kc(e,t){e.uniform4uiv(this.addr,t)}function qc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?$s:Qs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Jc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||tc,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||nc,a[e])}function Xc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ec,a[e])}function Zc(e){switch(e){case 5126:return Mc;case 35664:return Nc;case 35665:return Pc;case 35666:return Fc;case 35674:return Ic;case 35675:return Lc;case 35676:return Rc;case 5124:case 35670:return zc;case 35667:case 35671:return Bc;case 35668:case 35672:return Vc;case 35669:case 35673:return Hc;case 5125:return Uc;case 36294:return Wc;case 36295:return Gc;case 36296:return Kc;case 35678:case 36198:case 36298:case 36306:case 35682:return qc;case 35679:case 36299:case 36307:return Jc;case 35680:case 36300:case 36308:case 36293:return Yc;case 36289:case 36303:case 36311:case 36292:return Xc}}var Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jc(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zc(t.type)}},el=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function nl(e,t){e.seq.push(t),e.map[t.id]=t}function rl(e,t,n){let r=e.name,i=r.length;for(tl.lastIndex=0;;){let a=tl.exec(r),o=tl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){nl(n,l===void 0?new Qc(s,e,t):new $c(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new el(s),nl(n,e)),n=e}}}var il=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);rl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function al(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ol=37297,sl=0;function cl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ll=new J;function ul(e){St._getMatrix(ll,St.workingColorSpace,e);let t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(St.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function dl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+cl(e.getShaderSource(t),r)}return i}function fl(e,t){let n=ul(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var pl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ml(e,t){let n=pl[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var hl=new q;function gl(){return St.getLuminanceCoefficients(hl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${hl.x.toFixed(4)}, ${hl.y.toFixed(4)}, ${hl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function _l(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(bl).join(`
`)}function vl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function yl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function bl(e){return e!==``}function xl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cl=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(e){return e.replace(Cl,El)}var Tl=new Map;function El(e,t){let n=Z[t];if(n===void 0){let e=Tl.get(t);if(e!==void 0)n=Z[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return wl(n)}var Dl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(e){return e.replace(Dl,kl)}function kl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Al(e){let t=`precision ${e.precision} float;
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
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var jl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ml(e){return jl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Nl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Pl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Nl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Fl={302:`ENVMAP_MODE_REFRACTION`};function Il(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Fl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ll={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Rl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ll[e.combine]||`ENVMAP_BLENDING_NONE`}function zl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Bl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ml(n),l=Pl(n),u=Il(n),d=Rl(n),f=zl(n),p=_l(n),m=vl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(bl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(bl).join(`
`),_.length>0&&(_+=`
`)):(g=[Al(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(bl).join(`
`),_=[Al(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:ml(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,fl(`linearToOutputTexel`,n.outputColorSpace),gl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(bl).join(`
`)),o=wl(o),o=xl(o,n),o=Sl(o,n),s=wl(s),s=xl(s,n),s=Sl(s,n),o=Ol(o),s=Ol(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=al(i,i.VERTEX_SHADER,y),S=al(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=dl(i,x,`vertex`),n=dl(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new il(i,h),T=yl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ol)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Vl=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ul(e),t.set(e,n)),n}},Ul=class{constructor(e){this.id=Vl++,this.code=e,this.usedTimes=0}};function Wl(e){return e===1030||e===37490||e===36285}function Gl(e,t,n,r,i,a){let o=new Yt,s=new Hl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=fs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,ee=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,L=!!i.roughnessMap,R=i.anisotropy>0,ce=i.clearcoat>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=R&&!!i.anisotropyMap,he=ce&&!!i.clearcoatMap,ge=ce&&!!i.clearcoatNormalMap,_e=ce&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,ye=de&&!!i.iridescenceThicknessMap,be=fe&&!!i.sheenColorMap,xe=fe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=pe&&!!i.transmissionMap,Ee=pe&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,z=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Wl(i.normalMap.format),metalnessMap:I,roughnessMap:L,anisotropy:R,anisotropyMap:me,clearcoat:ce,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:pe,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:z,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:L&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:Ce&&m(i.specularColorMap.channel),specularIntensityMapUv:we&&m(i.specularIntensityMap.channel),transmissionMapUv:Te&&m(i.transmissionMap.channel),thicknessMapUv:Ee&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||R),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&St.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&St.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=fs[t];n=$a.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Bl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Kl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ql),r.length>1&&r.sort(t||Jl),i.length>1&&i.sort(t||Jl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Xl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yl,e.set(t,[i])):n>=r.length?(i=new Yl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Ql(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $l=0;function eu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function tu(e){let t=new Zl,n=Ql(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Rt,o=new Rt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(eu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=$l++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function nu(e){let t=new tu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ru(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new nu(e),t.set(n,[a])):r>=i.length?(a=new nu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var iu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,au=`uniform sampler2D shadow_pass;
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
}`,ou=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],su=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],cu=new Rt,lu=new q,uu=new q;function du(e,t,n){let r=new Gr,i=new K,a=new K,o=new Nt,s=new ao,c=new oo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new no({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:iu,fragmentShader:au}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new mr;h.setAttribute(`position`,new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rr(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ft(i.x,i.y,{format:re,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new pi(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=F,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new Hs(i.x),d.map.depthTexture=new mi(i.x,w)):(d.map=new Ft(i.x,i.y),d.map.depthTexture=new pi(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=F,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),lu.setFromMatrixPosition(l.matrixWorld),e.position.copy(lu),uu.copy(e.position),uu.add(ou[t]),e.up.copy(su[t]),e.lookAt(uu),e.updateMatrixWorld(),n.makeTranslation(-lu.x,-lu.y,-lu.z),cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ft(i.x,i.y,{format:re,type:E}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fu(e,t){function n(){let t=!1,n=new Nt,r=null,i=new Nt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Nt().fromArray(ne),ae=new Nt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),I(e.CULL_FACE),fe(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function R(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(L(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ve(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function be(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function xe(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function B(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function V(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function H(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:L,bindFramebuffer:R,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:z,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:V,uniformBlockBinding:H,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:B,viewport:Ne,reset:Pe}}function pu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:St.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),te(t)}function P(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&F(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function F(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,i){let a=r.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function R(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},ue={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=pe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=St.getPrimaries(St.workingColorSpace),r=o.colorSpace===``?null:St.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Ae(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);fe(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===ee,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&he(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=cs(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=cs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=je(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=je(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,o,s){if(o.image.length!==6)return;let c=pe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=St.getPrimaries(St.workingColorSpace),r=o.colorSpace===``?null:St.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ae(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);fe(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=je(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Oe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else I(i.depthTexture,0);let u=l.__webglTexture,d=Oe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&ve(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function Ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ke(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ve(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),fe(c,a),ve(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),fe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ve(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(ke(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Te.push(l),Ee.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(i.maxSamples,e.samples)}function ke(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(St.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=L,this.setTexture3D=R,this.setTextureCube=ce,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mu(e,t){function n(n,r=``){let i,a=St.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gu=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new no({vertexShader:hu,fragmentShader:gu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rr(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new _u,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new K,T=null,E=null,D=new Bo;D.viewport=new Nt;let O=new Bo;O.viewport=new Nt;let A=[D,O],j=new Yo,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new hn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new hn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new hn,x[e]=t),t.getHandSpace()};function te(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ee:F,a=_.stencil?k:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ft(d.textureWidth,d.textureHeight,{format:P,type:y,depthTexture:new pi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ft(f.framebufferWidth,f.framebufferHeight,{format:P,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ie=new q,ae=new q;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(j,D,O):j.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),I(e,j,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let L=null;function R(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new Bo,o.layers.enable(n),o.viewport=new Nt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new hi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}L&&L(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new us;ce.setAnimationLoop(R),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},yu=new Rt,bu=new J;bu.set(-1,0,0,0,1,0,0,0,1);function xu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Qa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(yu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Su(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Cu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wu=null;function Tu(){return wu===null&&(wu=new Vr(Cu,16,16,re,E),wu.name=`DFG_LUT`,wu.minFilter=g,wu.magFilter=g,wu.wrapS=d,wu.wrapT=d,wu.generateMipmaps=!1,wu.needsUpdate=!0),wu}var Eu=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ae,ie,ne]),g=new Set([y,w,S,k,D,O]),_=new Uint32Array(4),b=new Int32Array(4),x=new q,C=null,T=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,P=!1,F=null,ee=null,te=null,re=null;this._outputColorSpace=Ue;let oe=0,se=0,I=null,L=-1,R=null,ce=new Nt,le=new Nt,ue=null,de=new Y(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Nt(0,0,pe,me),ye=new Nt(0,0,pe,me),be=!1,xe=new Gr,Se=!1,Ce=!1,we=new Rt,Te=new q,Ee=new Nt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return I===null?he:1}let z=n;function Ae(e,n){return t.getContext(e,n)}let je,Me,B,Ne,V,H,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),z===null){let t=`webgl2`;if(z=Ae(t,e),z===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}et()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),W(`WebGLRenderer: `+e.message),e}function et(){je=new Ws(z),je.init(),Xe=new mu(z,je),Me=new ys(z,je,e,Xe),B=new fu(z,je),Me.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),ee=z.createFramebuffer(),te=z.createFramebuffer(),re=z.createFramebuffer(),Ne=new qs(z),V=new Kl,H=new pu(z,je,B,V,Me,Xe,Ne),Pe=new Us(N),Fe=new ds(z),Ze=new _s(z,Fe),Ie=new Gs(z,Fe,Ne,Ze),Le=new Ys(z,Ie,Fe,Ze,Ne),Ke=new Js(z,Me,H),He=new bs(V),Re=new Gl(N,Pe,je,Me,Ze,He),ze=new xu(N,V),Be=new Xl,Ve=new ru(je),Ge=new gs(N,Pe,B,Le,p,s),We=new du(N,Le,Me),Qe=new Su(z,Ne,Me,B),qe=new vs(z,je,Ne),Je=new Ks(z,je,Ne),Ne.programs=Re.programs,N.capabilities=Me,N.extensions=je,N.properties=V,N.renderLists=Be,N.shadowMap=We,N.state=B,N.info=Ne}m!==1009&&(M=new Zs(m,t.width,t.height,o,r,i));let nt=new vu(N,z);this.xr=nt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(nt.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=h.has(t)}if(e){let e=I.texture.type,t=g.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,z.clearBufferuiv(z.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,z.clearBufferiv(z.COLOR,0,b))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ge.dispose(),Be.dispose(),Ve.dispose(),V.dispose(),Pe.dispose(),Le.dispose(),Ze.dispose(),Qe.dispose(),Re.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,ft),nt.removeEventListener(`sessionend`,pt),mt.stop()};function rt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),P=!0}function at(){tt(`WebGLRenderer: Context Restored.`),P=!1;let e=Ne.autoReset,t=We.enabled,n=We.autoUpdate,r=We.needsUpdate,i=We.type;et(),Ne.autoReset=e,We.enabled=t,We.autoUpdate=n,We.needsUpdate=r,We.type=i}function ot(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),V.remove(e)}function lt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ct(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ze.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Fe.get(c),g=Je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),Se===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,vt(e,t,r),e.side=0,e.needsUpdate=!0,vt(e,t,r),e.side=2):vt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),T=Ve.get(n),T.init(t),j.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Ce=this.localClippingEnabled,Se=He.init(this.clippingPlanes,Ce),Se===!0&&He.setGlobalState(this.clippingPlanes,t),F!==null&&We.render(T.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),T=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let G=null;function dt(e){G&&G(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new us;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){G=e,nt.setAnimationLoop(e),e===null?mt.stop():mt.start()},nt.addEventListener(`sessionstart`,ft),nt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=M!==null&&(I===null||n)&&M.begin(N,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,I),T=Ve.get(e,j.length),T.init(t),T.state.textureUnits=H.getTextureUnits(),j.push(T),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,Ye,t.reversedDepth),Ce=this.localClippingEnabled,Se=He.init(this.clippingPlanes,Ce),C=Be.get(e,A.length),C.init(),A.push(C),nt.enabled===!0&&nt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&K(e,t,-1/0,N.sortObjects)}K(e,t,0,N.sortObjects),C.finish(),F!==null&&F.updateLights(T.state.lightsArray),N.sortObjects===!0&&C.sort(ge,_e),Oe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Oe&&Ge.addToRenderList(C,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&He.beginShadows();let i=T.state.shadowsArray;if(We.render(i,e,t),Se===!0&&He.endShadows(),(r&&M.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}Oe&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(C,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),Oe&&Ge.render(e),ht(C,e,t)}I!==null&&se===0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),Ze.resetDefaultState(),L=-1,R=null,j.pop(),j.length>0?(T=j[j.length-1],H.setTextureUnits(T.state.textureUnits),Se===!0&&He.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,A.pop(),C=A.length>0?A[A.length-1]:null,F!==null&&F.renderEnd()};function K(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)T.pushLightProbeGrid(e);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(xe)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let i=Le.update(e),a=e.material;a.visible&&C.push(e,i,a,n,Ee.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(xe))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&C.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&C.push(e,i,a,n,Ee.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)K(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),Se===!0&&He.setGlobalState(N.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&_t(i,t,n),a.length>0&&_t(a,t,n),o.length>0&&_t(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new Ft(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(de),fe=N.getClearAlpha(),fe<1&&N.setClearColor(16777215,.5),N.clear(),Oe&&Ge.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),Se===!0&&He.setGlobalState(N.clippingPlanes,r),_t(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,J(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(de,fe),d!==void 0&&(r.viewport=d),N.toneMapping=u}function _t(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&J(o,t,n,s,l,c)}}function J(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function vt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return bt(e,s),d}else s.uniforms=Re.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,N),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),bt(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=T.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function yt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=il.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function bt(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function xt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Ct(e,t,n,r,i){t.isScene!==!0&&(t=De),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:St.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=T.state.lights;if(Se===!0&&(Ce===!0||e!==R)){let t=e===R&&r.id===L;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=vt(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,E=x.getUniforms(),D=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==L&&(L=r.id,C=!0),v.needsLights){let e=xt(T.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||R!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),R!==e&&(R=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,H),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,H),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Ke.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Tu()),C){if(E.setValue(z,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&wt(D,w),a&&r.fog===!0&&ze.refreshFogUniforms(D,a),ze.refreshMaterialUniforms(D,r,he,me,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}il.upload(z,yt(v),D,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(il.upload(z,yt(v),D,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,x),Qe.bind(n,x)}}return x}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),L=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ee),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}L=-1};function Et(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Me.textureFormatReadable(e.format),t.__typeReadable=Me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=Et(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Xe.convert(c),Xe.convert(l),a)}finally{let e=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=Et(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Xe.convert(l),Xe.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await it(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Xe.convert(t.format),_=Xe.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,te),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,B.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},Du={globe:JSON.parse(`{"d48":"wP///wEAAAAAQP3/AQL//wEAAAAAAPj/AOj/fwAAAAAAAPAf4P//AQAAAAAAAP6A//8HAAAAAAAA+P3/3wMAAAAAAADw///7BgAAAAAAAPD/vzsAAAAAAAAA///CAAAAAAAAAPD/gQAAAAAAAAD+/wgAAAAAAACA+ucAAAAAAAAAAP8HAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAPiAf/+5///v//AeAHAAAAAAAAwP/4A+ABAAAAAAAA+P/5AQoXAA8AAAAA/D8+IPgB+AAAAAAA/+Hx/AP4AQAAAAD4AW/AH/wDAAAAAPgAT+QDfwAAAAzWP8BPB/AfAABgzv8BMj7Q/wAAgDz/B+Af8P/gAeB+/w/8Afx/8AC86v/zH+D/DwQAAP6/AsD/HwAAAPz/P+j/DwAAAPx/FP7/AQAA0f8/8/8fAAA+4f95/x8AAPyV////BwAA/p//f/4BAMD/4D/ACwAAfwT+AQAAAP4A/wMAKICf3/8BAALg//c/ADAA/v//AQAA+P//AwAA4PX/AQgAcP4/AAAA+P8BAAD8/wOACvj/AQzE/z8AAPz/AQD6/wN4/v8BuP///////+//////////////////////////A/wfyDQAAICA////B//vKgAAAADC///////LEwAAAAD+/////x9BBgAAAMD//////3wIAAAAAP//////+8EAAAAA+P/////+AwAAAAD/////3zIAAAAA8P////9DAAAAgPD/////DwAAAODg/////w8AAABk/v////8BAAAA/P////8vAAAA/P//////FQAA/P//////DwDg////////AVD///////8H+P///////wf/////////+////3+g/wPj////A/w/gf/3HwDgP4D+gQEA+g0A9AMAAAEAAOABAAgAAMAPABAAAAAfAAAAAAAPAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///38AAAAAAAAA4P///38AAAAAAAAA+P///w8AAAAAAAAA/////wQAAAAAAAD4////AwAAAAAAAPD///8DAAAAAAAA+P///wEAAAAAAAD///8PAAAAAAAA+P//CwAAAAAAAPD//wsAAAAAAAD4//8HAAAAAAAA//9/AAAAAAAA+P//AwAAAAAA8P//AwAAAAAA+P//AQAAAAAA//8fAAAAAAD4/z8AAAAAAPD/PwAAAAAA+P8PAAAAAAD/fwAAAAAA+H8AAAAAAPA/AAAAAAD4DwAAAAAATwAAAAAAmAAAAAAA0AAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////fw4AAAAAwP///////wgAAAAA8P//////fwQAAAAA/v//////DwAAAADw//////8/AAAAAOD//////38AAAAA8P//////vwAAAAD+//////8fAAAA8P//////fwAAAOD//////n8AAADw////B/QfAAAA/v//PwD8AQAA8P///wDgBwAA4P//HwDABwAA8P//AwBwAAAA/v8/AIADAADw/38AuB8AAAD8YAD8HwAAAABwAPQHAAAAAA4DOAAAAAAAAvgAAAAAFAH4AAAAAGAAfgAAAAAGgA8AAACYADAAAACIADAAAAAAAAwAABAAsAAAcABAAAAwAMAAAATA/wAQgP9fTQD8/x8A//8PwP//Afz/D/j/H/z/z////f//////////////////////////cRz8////////////cwD///////////9/DPD////////////nQP///////////x82+P///////3/8PxDw//////+/CPgPAP7//////0+AwwDw//////8/AI0C4P/////BP/gfAOD///9/4Yf/R1D8////P/7/H4D/////f/j/CwD/////P/j/E+D/////P/7/Afz/////wf9/+P/////P/////////////9//////////8////////x////////9//P///3/+f/z///+P/w////9//P/4//+/+P/H//8P8P+H///w///wX4D//w8fgP//PzwA//8/HgD//58DQP//HQCA+jIAAAAQAAAAAQDwHwCAPwAAHwCAAwAAAAAAAAAAAAAAwP//LwAAAAAAAAD+////fwAAAAAAAAD+/////wAAAAAAAAD/////PwAAAAAAAPj/////AAAAAAAAgP////8BAAAAAADg/////wAAAAAAAP7///8fAAAAAAD4/////wEAAAAA8P////8BAAAAAPz///9/AAAAAKD/////BwAAAAD/////DwAAAAD+////DwAAAAD/////AwAAAOD///8/AAAAAP7//38AAAAA8P//PwAAAACA/v8FAAAAAAD8AQAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////8DAAAAAAAAAP////8HAAAAAAAAgP////8AAAAAAAAA8P///z8AAAAAAACA/////wAAAAAAAAD///9/AAAAAAAAgP///w8AAAAAAADw//9/AAAAAAAAgP///wAAAAAAAAD//38AAAAAAACA//8PAAAAAAAA8P//AAAAAAAAgP//AAAAAAAAAP9/AAAAAAAAgP8DAAAAAAAA8B8AAAAAAACAfwAAAAAAAAB/AAAAAAAAgB8AAAAAAADwAwAAAAAAgA8AAAAAAAAPAAAAAACABwAAAAAA8AAAAAAAgAMAAAAAAAMAAAAAgAEAAAAAEAAAAACAAAAAAAABAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////wMAAAAAAAD4/////wEAAAAAAHz/////PwAAAAAA4P//////AQAAAABg/v////8DAAAAAED//////wEAAAAAyP////8/AAAAAAD8/////wEAAADg4P////8DAAAAwOD/////AQAAACD4////PwAAAIAD/f///wEAAAAG4P///wMAAAAG4P///wEAAMAH4P//PwAAAHiAJ///AQAAgAcP+P8DAAAAiof5/wEAAACEgP8/AAAAYAD4/wEAAAAA8P8DAAAAAPz/AQAAAAD/PwAAAAD4/wEAAADg/wMAAADA/wEAAADwPwAAAGD+AQAAgOADAAAAwAEAAAAAAAAAAAAAAAcAAAADAADAAABABQAgCADgAgBiAOAAwAuAEQAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAD8AQAAAAAAAAD+AQAAAAAAAPD/AAAAAAAAAP4/AAAAAAAA4A8AAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAB8AAAAAAAAwAMAAAAAAIAHAAAAAADgAwAAAAD4fwAAAADA/wMAAAD4/wcAAAD8/wMAAOD/fwAAAP//AwAA/v8HAAD+/wMAgP9/AAD8/wMA+P8HAOD/AwDAfwAA4AMAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAwAcAAAAAAAAAPuD/AAAAAAAAAPiX/x8AAAAAAADwP/8/AAAAAAAA+N//fwAAAAAAAP///w8AAAAAAPj//38BAAAAAPD///8DAAAAAPj///8BAAAAAP///z8AAAAA+P///wEAAADw////AwAAAPj///8AAAAA////HwAAAPj//z8AAADw//8HAAAA+P//AAAAAP//DwAAAPj/DAAAAPB/AAAAAPjPAQAAAD8AAAAA+AEAAADwAQAAAHgAAAAAvz8AAPj/BwDw5w8I+Og2AAcAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAA8P///////w8AAAAA/P//////fwsAAADA//////v/IwAAAID/////8/8PAAAAAP7//z/g/w8AAAAA////B8D/AwAAAPD//z8A/AcAAABA////APgPAAAAAPz//wCIAAAAAAD//x8AAAAAAADg//8BAAAAAAAA/v8PAAAAAAAA/P8fAAAAAAAA8H8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAADgAAMABAIADAMACAGAA4AHABzABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAADgAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAwP8BAAAAAAAA4P8fAAAAAAAA+P8fAAAAAADA//8DAAAAAED+/x8AAAAAwP//PwAAAADw//8PAAAAwP//fwDA//////8DwP//////AfD/////fwD//////wP8/////wf+/////4////////P///9/3////3/4////P7D///8HAPD//wCA/v8PAHz8AQAAEAAAAAAAAAAAAABgBQAAAAMAAAAAQICBIQwAAAAAAAAAAACAwA8AAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAMAAEAAAAAAAAAAAAIF/AAAAAAAAAACAAT8AAAAAAAAAAGDgBwAAAAAAAAAAAz8AAAAAAAAAAAR8AAAAAAAAAAAGOAAAAAAAAACAAQQAAAAAAAAAEAAAAAAAAAAAwAcAAAAAAAAAwAcAAAAAAAAA8AEAAAAAAAAAPgAAAAAAAABwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////PwAAAAAAAID/////fwAAAAAAAMD/////HwAAAAAAAPj/////AQAAAAAA4P////8PAAAAAADg/////w8AAAAAAPj/////HwAAAACA//////8/AAAAAPz///////8HAADw////////PwAA+P///////w8AAPz//////38AAPD///////8AAPD//////38AAPD//////w8AAP//////fwAA/P//////AAD8/////38AgP//////DwD4/////38A4P//////AID/////fwCA/////w8A+P///38A/P////8A/v///3+A/////w/+//////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBwAAAAAAAAAAAMABAAAAAAAAAAAADuAAAAAAAAAAAPADAAAAAAAAAADADwAAAAAAAAAAwH8AAAAAAAAAAPA/AAAAAAAAAAD/AQAAAAAAAAD4DwAAAAAAAADgHwAAAAAAAAD0HwAAAAAAAMD/BwAAAAAAAP6/AgAAAAAA/v8PAAAAAAD//wMAAAAA4P/fBwAAAAD///8AAAAA/v//BwAAAP///wMAAOD//38AAAD///+vCgD+////HwD/////H+D/////B/////8//v///3////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAgB8AAAAAAAAYgAEAgAMAAAAAAAAIAAAgAAAAAAAAAAAgwAF8AAAAAAAAAMDA9/8DAAAAFAAAAIDj/0cBAAAAAAAAAPD/fwEAAAAAAAAA4H8AAAAAAAAAAAAACAAAAAAAAAAAAAAAACAAAAAAAAAIAAQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A/x8GAAAAAAAAgH+A/R8AAAAAAAAAcA4A/gMAAAAAAADA8QAAPwAAAAAAAIDiAwD4AQAAAAwAAGAAAHAAAAAAAwAABQAACAAAABMAAHAgAAAAAAAeAADAgAMAAAAAPgAAgPAPAAAAwB8AALD/BwAAAPwBAID/fwAAAPgHAED+/wAAAPw/AOD+fwAAAP8/APz/AwAA8P8P4P8fBgDA///A//8gAPj//+///xsA////////f/j///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8P","d30":"cP8fAAAA8B/w/wEAAAD44P8BAAAA4P3/AQAAAOD/9wAAAADg/wgAAAAA/gMAAAAA4B8AAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCQ8/3/AQ8AAAAA/zxQAAoAAPDPIQ88AACADx8+PgAAAA8egx8AMP5BOfwBAN0PPPCPAa9/FfgfAYD/TP8DAPDf/B8AWv//HwB4+/8PAPz5gQLAAz8AAt75ARz89wMA+P8BAMw/AAD/ART+A4H/AeA/sP/////+////////g/9aAQDj/3//twAAAP///6cVAAD+////GQAA+P//0wMAAP7//wkAAPH//z8AAID//z8AAPz///8CgP////8A/P///4f/////8///Az/k/1fgB/4ZQAVADAABADwAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA8P//AwAAAAD//x8AAAAA+P9/AQAAAPD/fwAAAAD4/x8AAAAA/38AAAAA+P8DAAAA8P8DAAAA+P8BAAAA/x8AAAD4fwAAAPB/AAAA+A8AAAA/AAAAuAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///08AAAD+////CQAA8P///w8AAOD///8fAADw////HwAA/v///wEA8P//8QcA4P9/gAcA8P8XwAEA/j8ADADQ/wA/AACCgT4AAMAEBgAAInAAAIDAAwBAAAIAEAABAAAIAAYQAAB/AOD/Af8P/h//7///////////////TPz//////2/g//////+/yf/////fP4T/////ghjw////jx6B//9/Hn8A//9//B/w//+P/wH////xP/7///f////////3//////z///vP///nP///4T//r/3PF/5/HPj/MeD/GwC6AwAAAD8AHAACAAAAwP8fAAAAAPj//wcAAACA//9/AAAAAPz/fwAAAAD//z8AAADw//8PAACA//8/AACA//8/AADg//8HAAD4/38AAOD//wEAAP//AAAA6AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//HwAAAADw//8BAAAAgP//DwAAAAD//wcAAACA//8AAAAA8P8HAAAAgP8fAAAAAP8PAAAAgP8AAAAA8AMAAACADwAAAAAPAAAAgAcAAABwAAAAgAEAAAADAACAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8/AAAAoP7//wEAAED///8DAACA////AQAA4P//PwAAcPz//wEAAPH//wMAgMD//wEAIOD/PwAAB9b/AQBwDv4DAMCE/wEAIMA/AACA/wEAAP4DAAD+AQCAPwAA9AEAgAMAAAAAAQAQACgADEAQHgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAADwAAAAD+AQAAAOALAAAAAAAAAAAAgAMAAABwAAAAgAMAAPAHAAD/AwDwfwDA/wMA/wcA/wPgfwD4AwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUPAHAAAAAD//AAAAAPj9HwAAAPD/PwAAAPj/PwAAAP//DwAA+P8/AADw/z8AAPj/DwAA/38AAPj/AADwbwAA+AUAAA8AADgAALAIAPgfAO9DGCAAAAAAAAAAAADA/////wEAAPz///8fAADw///7HwAA4P9/+B8AAPj/D/gFAAD+/+APAADw/wEAAADg/wEAAADQ/wAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAYACAAOAADGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAACAAAAAAA+AAAAAMB/AAAAAP4/AAAA/P8BAAD8/wEQwf9/gP///wP+//8P/v//h/////v///3//yP1/wHo/wAEAwAAAAAYDAAAQSQAAAAAAADAAwAAAAAAAAAAAAAAACBoAAAAAAAgPAAAAAAAhAcAAAAAQDgAAAAAgEEAAAAAAAUAAAAAwAEAAAAAGAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//fwAAAAD8//8HAAAA4P//HwAAAOD//z8AAAD4//9/AQAA/////w8A+P////8AwP///38A4P///w8A/v//fwD4////APj//38A////D8D//38A/v//gP//f/D//4////////////////////////////////8AAAAAAAAAAAAAAAAAAAAACAAAAAAAAAcAAAAAAOBBAAAAAAAeAAAAAAD4AQAAAAD4AAAAAAD8AAAAAMAPAAAAAP8LAAAA/h8AAAD/PwAA4P8fAAD//wEA/v9XAP///+D//x/////+//////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAIAAIQAAAAAg+n4AAAgAAIh/BAAAAABAfwAAAAAAABAAMAAAAICAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz4nwAAAACwAX4AAAAAMAfgAQCAAAABgAEAJAAwAAAAwAEA4AAEgAcA3A8AgA8A/AcA8Afg/wAA/wP+BwD8H/6fgP/////z//////////////////////////////////////////////////////////8P"}`),europe:[{id:`832`,name:`Jersey`,rings:[[[-2.02,49.23],[-2.05,49.17],[-2.24,49.18],[-2.22,49.27],[-2.02,49.23]]]},{id:`831`,name:`Guernsey`,rings:[[[-2.51,49.49],[-2.55,49.43],[-2.65,49.47],[-2.51,49.49]]]},{id:`833`,name:`Isle of Man`,rings:[[[-4.41,54.18],[-4.61,54.06],[-4.79,54.07],[-4.7,54.22],[-4.43,54.41],[-4.34,54.27],[-4.41,54.18]]]},{id:`826`,name:`United Kingdom`,rings:[[[-2.67,51.62],[-3.29,51.39],[-3.56,51.41],[-3.89,51.59],[-4.24,51.57],[-4.09,51.66],[-4.39,51.74],[-4.6,51.74],[-4.9,51.63],[-5.12,51.71],[-5.2,51.86],[-5.26,51.88],[-5.09,52],[-4.38,52.2],[-4.15,52.33],[-3.98,52.54],[-4.08,52.61],[-4.04,52.7],[-4.12,52.82],[-4.1,52.92],[-4.68,52.81],[-4.64,52.89],[-4.27,53.14],[-3.81,53.3],[-3.43,53.34],[-3.1,53.26],[-3.17,53.39],[-3.07,53.43],[-2.92,53.3],[-2.75,53.31],[-2.91,53.35],[-3.07,53.51],[-2.93,53.73],[-3.03,53.77],[-3.03,53.91],[-2.9,53.96],[-2.87,54.18],[-3.17,54.13],[-3.57,54.47],[-3.59,54.56],[-3.47,54.77],[-3.27,54.91],[-3.04,54.95],[-3.55,54.95],[-3.96,54.78],[-4.13,54.78],[-4.25,54.85],[-4.52,54.76],[-4.82,54.85],[-4.91,54.69],[-5.14,54.86],[-5.17,54.99],[-5.06,54.99],[-4.68,55.5],[-4.73,55.6],[-4.89,55.7],[-4.83,55.93],[-4.58,55.94],[-4.84,56.05],[-4.8,56.16],[-4.93,56.03],[-5.23,55.89],[-5.22,56.07],[-5,56.23],[-5.38,56.02],[-5.42,55.97],[-5.39,55.77],[-5.56,55.39],[-5.65,55.33],[-5.77,55.36],[-5.68,55.62],[-5.51,55.8],[-5.62,55.81],[-5.61,56.05],[-5.54,56.25],[-5.19,56.76],[-5.65,56.53],[-5.87,56.56],[-5.97,56.69],[-6.13,56.72],[-5.73,56.85],[-5.86,56.9],[-5.59,57.1],[-5.56,57.23],[-5.82,57.44],[-5.58,57.55],[-5.68,57.57],[-5.74,57.67],[-5.61,57.88],[-5.16,57.88],[-5.41,58.07],[-5.34,58.24],[-5.01,58.26],[-5.09,58.38],[-5.07,58.52],[-4.98,58.58],[-4.81,58.57],[-4.71,58.51],[-4.49,58.57],[-4.43,58.51],[-3.05,58.63],[-3.11,58.41],[-3.21,58.32],[-3.99,57.96],[-4.03,57.85],[-3.86,57.82],[-4.08,57.68],[-4.13,57.58],[-3.3,57.71],[-3.04,57.67],[-2.08,57.7],[-1.87,57.61],[-1.78,57.47],[-2.02,57.26],[-2.26,56.86],[-2.5,56.64],[-2.68,56.51],[-3.31,56.36],[-2.89,56.4],[-2.65,56.32],[-2.67,56.25],[-2.98,56.19],[-3.36,56.03],[-3.79,56.09],[-3.61,56.02],[-3.05,55.95],[-2.84,56.03],[-2.6,56.03],[-2.15,55.9],[-1.65,55.57],[-1.23,54.7],[-.67,54.5],[-.08,54.12],[-.21,54.02],[.12,53.61],[-.27,53.74],[-.66,53.72],[-.29,53.69],[.27,53.34],[.35,53.16],[.05,52.91],[.28,52.81],[.38,52.83],[.56,52.97],[1.06,52.96],[1.38,52.89],[1.72,52.68],[1.75,52.47],[1.56,52.09],[1.32,51.96],[1.23,51.97],[1.28,51.84],[1.19,51.8],[.96,51.81],[.75,51.73],[.9,51.69],[.89,51.57],[.42,51.47],[.53,51.49],[.69,51.39],[.89,51.36],[1.42,51.36],[1.4,51.18],[1.05,51.05],[.96,50.93],[.77,50.93],[.2,50.76],[-.2,50.82],[-.79,50.76],[-1.42,50.9],[-1.33,50.82],[-1.52,50.75],[-2.03,50.72],[-1.96,50.63],[-2.04,50.6],[-2.35,50.64],[-2.43,50.6],[-3,50.72],[-3.4,50.63],[-3.68,50.24],[-3.79,50.23],[-4.2,50.39],[-4.73,50.29],[-5.01,50.16],[-5.12,50.04],[-5.23,50.02],[-5.43,50.11],[-5.62,50.05],[-5.66,50.13],[-5.34,50.25],[-4.89,50.53],[-4.58,50.78],[-4.52,50.98],[-4.3,51.03],[-4.19,51.19],[-3.84,51.23],[-3.14,51.21],[-2.43,51.74],[-2.67,51.62]]]},{id:`826`,name:`United Kingdom`,rings:[[[-4.2,53.32],[-4.05,53.31],[-4.08,53.26],[-4.37,53.13],[-4.55,53.26],[-4.57,53.39],[-4.31,53.42],[-4.2,53.32]]]},{id:`826`,name:`United Kingdom`,rings:[[[-2.55,59.23],[-2.66,59.23],[-2.6,59.29],[-2.41,59.3],[-2.55,59.23]]]},{id:`826`,name:`United Kingdom`,rings:[[[-1.04,60.51],[-1.16,60.6],[-1.09,60.72],[-.99,60.69],[-1.05,60.65],[-1.04,60.51]]]},{id:`826`,name:`United Kingdom`,rings:[[[-1.31,60.54],[-1.29,60.47],[-1.16,60.42],[-1.05,60.44],[-1.2,60.01],[-1.3,59.88],[-1.36,59.91],[-1.29,60.15],[-1.48,60.17],[-1.67,60.28],[-1.37,60.33],[-1.45,60.47],[-1.57,60.5],[-1.36,60.61],[-1.3,60.61],[-1.31,60.54]]]},{id:`826`,name:`United Kingdom`,rings:[[[-.78,60.81],[-.83,60.68],[-.92,60.7],[-.92,60.81],[-.78,60.81]]]},{id:`826`,name:`United Kingdom`,rings:[[[-3.17,58.79],[-3.28,58.78],[-3.39,58.91],[-3.27,58.9],[-3.17,58.79]]]},{id:`826`,name:`United Kingdom`,rings:[[[-2.93,58.74],[-3.04,58.82],[-2.9,58.83],[-2.93,58.74]]]},{id:`826`,name:`United Kingdom`,rings:[[[-3.06,59.03],[-2.76,58.96],[-2.83,58.89],[-3.2,58.93],[-3.24,59],[-3.35,58.99],[-3.31,59.13],[-3.05,59.1],[-3.02,59.06],[-3.06,59.03]]]},{id:`826`,name:`United Kingdom`,rings:[[[-2.73,59.19],[-2.82,59.16],[-2.86,59.25],[-3.05,59.32],[-2.98,59.35],[-2.73,59.19]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.61,56.59],[-6.67,56.59],[-6.57,56.66],[-6.49,56.67],[-6.61,56.59]]]},{id:`826`,name:`United Kingdom`,rings:[[[-5.11,55.45],[-5.33,55.48],[-5.37,55.67],[-5.19,55.69],[-5.11,55.57],[-5.11,55.45]]]},{id:`826`,name:`United Kingdom`,rings:[[[-5.78,56.34],[-6.31,56.29],[-6.19,56.36],[-6.14,56.49],[-6.32,56.57],[-6.1,56.65],[-5.95,56.54],[-5.76,56.49],[-5.78,56.34]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.13,55.93],[-6.06,55.72],[-6.09,55.66],[-6.31,55.61],[-6.3,55.78],[-6.49,55.7],[-6.41,55.85],[-6.13,55.93]]]},{id:`826`,name:`United Kingdom`,rings:[[[-5.97,55.81],[-6.04,55.81],[-6.07,55.89],[-5.91,55.97],[-5.97,55.99],[-5.94,56.05],[-5.73,56.12],[-5.97,55.81]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.2,58.36],[-6.33,58.19],[-6.55,58.09],[-6.4,58.08],[-6.42,58.02],[-6.96,57.75],[-7.08,57.81],[-6.86,57.92],[-7.06,58],[-6.99,58.05],[-7.09,58.1],[-7.03,58.22],[-6.73,58.19],[-6.78,58.3],[-6.24,58.5],[-6.2,58.36]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.28,56.96],[-6.43,57.02],[-6.32,57.05],[-6.26,57.01],[-6.28,56.96]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.14,57.51],[-6.14,57.31],[-5.67,57.25],[-5.95,57.05],[-6.01,57.05],[-6.04,57.2],[-6.32,57.2],[-6.44,57.33],[-6.68,57.36],[-6.76,57.44],[-6.58,57.51],[-6.62,57.56],[-6.38,57.6],[-6.36,57.67],[-6.25,57.65],[-6.14,57.51]]]},{id:`826`,name:`United Kingdom`,rings:[[[-7.21,57.68],[-7.09,57.63],[-7.18,57.53],[-7.52,57.6],[-7.47,57.65],[-7.21,57.68]]]},{id:`826`,name:`United Kingdom`,rings:[[[-7.25,57.12],[-7.38,57.13],[-7.41,57.38],[-7.27,57.37],[-7.25,57.12]]]},{id:`826`,name:`United Kingdom`,rings:[[[-7.42,56.97],[-7.54,56.97],[-7.45,57.02],[-7.42,56.97]]]},{id:`826`,name:`United Kingdom`,rings:[[[-6.22,54.09],[-6.65,54.06],[-6.67,54.18],[-6.8,54.21],[-6.94,54.37],[-7.05,54.41],[-7.2,54.3],[-7.16,54.24],[-7.32,54.13],[-7.61,54.14],[-7.85,54.22],[-8.15,54.45],[-7.75,54.59],[-7.91,54.7],[-7.55,54.77],[-7.38,55.03],[-7.22,55.09],[-7.1,55.05],[-6.95,55.18],[-6.47,55.24],[-6.13,55.22],[-5.87,54.92],[-5.72,54.82],[-5.71,54.76],[-5.88,54.68],[-5.88,54.64],[-5.58,54.66],[-5.47,54.5],[-5.48,54.44],[-5.67,54.55],[-5.66,54.38],[-5.56,54.37],[-5.61,54.27],[-5.83,54.24],[-6.02,54.05],[-6.22,54.09]]]},{id:`826`,name:`United Kingdom`,rings:[[[-1.06,50.69],[-1.25,50.59],[-1.56,50.67],[-1.31,50.77],[-1.06,50.69]]]},{id:`804`,name:`Ukraine`,rings:[[[38.21,47.09],[37.54,47.07],[37.34,46.92],[37.05,46.88],[36.79,46.71],[36.56,46.76],[36.28,46.66],[35.83,46.62],[35.4,46.38],[35.26,46.2],[35.06,46.1],[35.28,46.28],[35.29,46.37],[35.23,46.44],[35.06,46.27],[34.85,46.19],[34.86,45.99],[35,45.73],[34.95,45.73],[34.8,45.79],[34.79,45.89],[34.69,45.98],[34.45,45.97],[34.35,46.06],[34.03,46.11],[33.81,46.21],[33.66,46.22],[33.59,46.1],[33.43,46.06],[33.2,46.18],[32.48,46.08],[32.03,46.26],[31.83,46.28],[31.78,46.32],[31.99,46.36],[32.01,46.43],[31.71,46.47],[31.56,46.56],[32.36,46.48],[32.58,46.62],[32.36,46.57],[32.05,46.64],[31.94,46.78],[31.94,46.98],[31.76,47.21],[31.91,46.93],[31.87,46.65],[31.53,46.66],[31.56,46.78],[31.4,46.63],[30.8,46.55],[30.66,46.27],[30.22,45.87],[29.82,45.73],[29.63,45.72],[29.6,45.6],[29.67,45.54],[29.71,45.26],[29.4,45.42],[28.9,45.29],[28.78,45.31],[28.76,45.23],[28.32,45.35],[28.21,45.45],[28.5,45.52],[28.49,45.67],[28.73,45.85],[28.74,45.94],[28.95,46.05],[29.01,46.18],[28.94,46.29],[28.96,46.46],[29.19,46.52],[29.21,46.38],[29.31,46.47],[29.62,46.4],[29.71,46.45],[29.84,46.35],[30.13,46.42],[29.93,46.54],[29.94,46.72],[29.88,46.83],[29.57,46.96],[29.51,47.09],[29.54,47.27],[29.13,47.49],[29.21,47.78],[29.13,47.96],[28.92,47.95],[28.77,48.12],[28.53,48.15],[28.46,48.09],[28.34,48.15],[28.35,48.21],[28.29,48.24],[28.09,48.26],[27.82,48.42],[27.55,48.48],[27.23,48.37],[26.85,48.39],[26.62,48.26],[26.31,48.2],[26.16,47.99],[25.46,47.91],[24.89,47.72],[24.49,47.95],[24.18,47.91],[23.41,47.99],[23.14,48.09],[22.88,47.95],[22.77,48.11],[22.58,48.13],[22.35,48.26],[22.25,48.41],[22.13,48.41],[22.14,48.57],[22.3,48.69],[22.54,49.07],[22.84,49.04],[22.71,49.17],[22.73,49.29],[22.65,49.54],[22.71,49.61],[23.71,50.38],[23.97,50.41],[24.09,50.53],[24.09,50.62],[23.98,50.79],[24.1,50.87],[23.66,51.31],[23.61,51.61],[23.71,51.64],[23.98,51.59],[24.36,51.87],[25.27,51.94],[25.93,51.91],[27.14,51.75],[27.3,51.6],[27.69,51.57],[27.7,51.48],[27.86,51.59],[28.01,51.56],[28.18,51.61],[28.6,51.54],[28.65,51.46],[28.73,51.43],[28.85,51.54],[29.1,51.63],[29.35,51.38],[30.16,51.48],[30.31,51.4],[30.33,51.33],[30.54,51.26],[30.63,51.36],[30.53,51.6],[30.58,51.69],[30.76,51.89],[30.98,52.05],[31.57,52.11],[32.12,52.05],[32.28,52.11],[32.36,52.27],[32.43,52.31],[32.81,52.25],[33.15,52.34],[33.73,52.34],[33.92,52.25],[34.11,51.98],[34.4,51.78],[34.38,51.72],[34.12,51.68],[34.28,51.31],[34.21,51.26],[34.76,51.17],[35.06,51.2],[35.16,51.06],[35.31,51.04],[35.44,50.73],[35.41,50.54],[35.59,50.37],[35.67,50.35],[35.89,50.44],[36.12,50.41],[36.3,50.28],[36.5,50.28],[36.62,50.21],[36.76,50.29],[37.42,50.41],[37.58,50.29],[37.7,50.11],[38.05,49.92],[38.15,49.94],[38.18,50.03],[38.26,50.05],[38.92,49.82],[39.17,49.86],[39.3,49.74],[39.46,49.73],[39.78,49.57],[40.08,49.58],[40.11,49.25],[39.89,49.06],[39.68,49.01],[39.75,48.91],[40.01,48.82],[39.79,48.81],[39.7,48.74],[39.65,48.59],[39.84,48.54],[39.89,48.36],[39.85,48.3],[39.96,48.27],[39.77,47.96],[39.78,47.89],[39.66,47.84],[38.9,47.86],[38.64,47.67],[38.37,47.61],[38.29,47.56],[38.2,47.32],[38.28,47.28],[38.2,47.17],[38.21,47.09]]]},{id:`804`,name:`Ukraine`,rings:[[[32.01,46.2],[32.15,46.15],[32.01,46.17],[31.56,46.26],[31.51,46.37],[31.64,46.27],[32.01,46.2]]]},{id:`792`,name:`Turkey`,rings:[[[25.97,40.14],[25.67,40.14],[25.92,40.24],[25.97,40.14]]]},{id:`792`,name:`Turkey`,rings:[[[41.51,41.52],[41.82,41.43],[41.92,41.5],[42.47,41.44],[42.61,41.58],[42.79,41.56],[42.82,41.49],[43.15,41.31],[43.21,41.2],[43.43,41.16],[43.45,41.06],[43.63,40.93],[43.72,40.72],[43.57,40.48],[43.71,40.17],[43.67,40.13],[43.94,40.02],[44.29,40.04],[44.4,40],[44.82,39.65],[44.59,39.77],[44.46,39.67],[44.39,39.42],[44.02,39.38],[44.08,39.22],[44.18,39.14],[44.17,38.93],[44.27,38.84],[44.3,38.39],[44.45,38.34],[44.21,37.91],[44.56,37.74],[44.57,37.44],[44.8,37.27],[44.76,37.14],[44.61,37.18],[44.28,36.98],[44.2,37.05],[44.19,37.25],[44.11,37.3],[43.68,37.23],[43.09,37.37],[42.94,37.32],[42.77,37.37],[42.46,37.13],[42.36,37.11],[42.31,37.23],[42.2,37.3],[42.06,37.21],[41.51,37.09],[40.71,37.1],[40.02,36.83],[39.36,36.68],[38.77,36.69],[38.44,36.86],[38.19,36.9],[37.43,36.64],[37.07,36.65],[36.94,36.76],[36.66,36.8],[36.54,36.46],[36.64,36.23],[36.38,36.17],[36.35,36],[36.2,35.94],[36.13,35.83],[35.89,35.92],[35.96,36],[35.81,36.31],[36.19,36.66],[36.18,36.81],[36.05,36.91],[35.66,36.72],[35.54,36.6],[35.39,36.57],[34.7,36.82],[34.3,36.6],[33.95,36.3],[33.69,36.18],[32.93,36.1],[32.79,36.04],[32.38,36.18],[32.02,36.53],[31.35,36.8],[30.65,36.87],[30.58,36.8],[30.56,36.53],[30.45,36.27],[30.39,36.24],[30.23,36.31],[29.69,36.16],[29.22,36.32],[29.14,36.4],[29.04,36.69],[28.97,36.72],[28.82,36.68],[28.49,36.8],[28.31,36.81],[28.2,36.69],[28.02,36.63],[28.09,36.75],[27.66,36.68],[27.46,36.71],[27.63,36.79],[28.01,36.83],[28.24,37.03],[27.35,37.02],[27.26,36.98],[27.25,37.08],[27.3,37.13],[27.53,37.16],[27.52,37.25],[27.22,37.39],[27.15,37.6],[27.07,37.66],[27.23,37.73],[27.23,37.98],[26.88,38.06],[26.68,38.2],[26.58,38.15],[26.29,38.28],[26.34,38.37],[26.42,38.37],[26.37,38.56],[26.38,38.62],[26.44,38.64],[26.59,38.56],[26.6,38.42],[26.67,38.34],[26.73,38.42],[26.86,38.37],[27.14,38.45],[26.91,38.48],[26.76,38.71],[27.01,38.89],[26.81,38.96],[26.85,39.12],[26.68,39.29],[26.9,39.55],[26.11,39.47],[26.18,39.99],[26.31,40.02],[26.74,40.4],[27.28,40.46],[27.33,40.38],[27.48,40.32],[27.73,40.33],[27.85,40.38],[27.73,40.48],[27.87,40.51],[27.99,40.49],[27.93,40.38],[27.96,40.37],[29.01,40.39],[29.05,40.42],[28.79,40.53],[28.96,40.63],[29.85,40.74],[29.36,40.81],[29.12,40.94],[29.05,41.01],[29.15,41.22],[29.92,41.15],[30.35,41.2],[30.81,41.08],[31.25,41.11],[31.46,41.32],[32.3,41.73],[33.28,42],[34.75,41.96],[35,42.06],[35.16,42.03],[35.12,41.89],[35.3,41.73],[35.56,41.63],[35.92,41.71],[36.05,41.68],[36.18,41.43],[36.41,41.27],[36.51,41.26],[36.65,41.35],[36.78,41.36],[36.99,41.28],[37.07,41.18],[38.38,40.93],[39.43,41.11],[39.81,40.98],[40.26,40.96],[41.08,41.26],[41.51,41.52]]]},{id:`792`,name:`Turkey`,rings:[[[28.01,41.97],[27.99,41.86],[28.2,41.56],[29.06,41.23],[28.96,41.01],[28.78,40.97],[28.17,41.08],[27.92,40.99],[27.5,40.97],[27.26,40.69],[26.77,40.5],[26.33,40.12],[26.2,40.07],[26.25,40.31],[26.79,40.63],[26.11,40.61],[26.04,40.73],[26.33,40.95],[26.33,41.24],[26.62,41.4],[26.58,41.6],[26.32,41.72],[26.33,41.77],[26.51,41.83],[26.62,41.97],[27.24,42.09],[27.53,41.92],[28.01,41.97]]]},{id:`788`,name:`Tunisia`,rings:[[[11.5,33.18],[11.45,32.78],[11.45,32.64],[11.53,32.52],[11.5,32.41],[10.83,32.08],[10.61,31.93],[10.47,31.74],[10.28,31.68],[10.11,31.46],[10.26,30.94],[10.22,30.78],[9.89,30.39],[9.52,30.23],[9.05,32.07],[8.33,32.54],[8.21,32.93],[8.11,33.06],[7.73,33.27],[7.5,33.83],[7.52,34.08],[7.75,34.25],[7.84,34.41],[8.12,34.56],[8.25,34.73],[8.31,35.09],[8.39,35.2],[8.25,35.8],[8.35,36.37],[8.21,36.52],[8.37,36.63],[8.44,36.76],[8.6,36.83],[8.58,36.94],[8.82,37],[9.14,37.19],[9.69,37.34],[9.84,37.31],[9.78,37.21],[9.83,37.14],[9.89,37.18],[9.88,37.25],[10.2,37.21],[10.19,37.03],[10.33,36.86],[10.29,36.78],[10.41,36.73],[10.57,36.88],[11.05,37.07],[11.13,36.87],[10.97,36.74],[10.8,36.49],[10.52,36.32],[10.48,36.18],[10.59,35.89],[11,35.63],[11.04,35.34],[11.12,35.24],[10.69,34.68],[10.12,34.28],[10.04,34.14],[10.16,33.85],[10.31,33.73],[10.45,33.66],[10.71,33.69],[10.72,33.51],[10.9,33.53],[10.96,33.63],[11.09,33.56],[11.15,33.37],[11.26,33.31],[11.2,33.25],[11.5,33.18]]]},{id:`788`,name:`Tunisia`,rings:[[[11.28,34.75],[11.12,34.68],[11.26,34.82],[11.28,34.75]]]},{id:`788`,name:`Tunisia`,rings:[[[10.96,33.72],[10.86,33.69],[10.72,33.74],[10.74,33.89],[10.92,33.89],[11.02,33.82],[11.04,33.78],[10.96,33.72]]]},{id:`760`,name:`Syria`,rings:[[[35.89,35.92],[36.15,35.83],[36.2,35.94],[36.35,36],[36.38,36.17],[36.64,36.23],[36.54,36.46],[36.66,36.8],[36.94,36.76],[37.07,36.65],[37.43,36.64],[38.19,36.9],[38.44,36.86],[38.77,36.69],[39.36,36.68],[40.02,36.83],[40.71,37.1],[41.51,37.09],[42.06,37.21],[42.2,37.3],[42.31,37.23],[42.36,37.11],[41.79,36.6],[41.42,36.51],[41.29,36.38],[41.24,36.07],[41.35,35.81],[41.36,35.64],[41.22,35.29],[41.19,34.77],[40.99,34.43],[40.69,34.33],[39.05,33.51],[36.82,32.32],[36.37,32.39],[36.06,32.53],[35.89,32.71],[35.79,32.73],[35.91,32.95],[35.84,33.33],[35.87,33.43],[36.03,33.59],[35.94,33.67],[35.97,33.73],[36.09,33.83],[36.37,33.84],[36.28,33.89],[36.3,33.96],[36.59,34.22],[36.51,34.43],[36.33,34.5],[36.43,34.61],[36.38,34.66],[35.98,34.63],[35.89,34.95],[35.94,35.22],[35.9,35.42],[35.76,35.57],[35.89,35.92]]]},{id:`756`,name:`Switzerland`,rings:[[[9.52,47.52],[9.62,47.47],[9.48,47.17],[9.49,47.06],[9.84,47.01],[9.88,46.94],[10.13,46.85],[10.35,46.99],[10.46,46.9],[10.4,46.66],[10.43,46.55],[10.2,46.62],[10.09,46.6],[10.04,46.48],[10.13,46.24],[10.04,46.24],[9.94,46.36],[9.53,46.31],[9.43,46.48],[9.3,46.5],[9.26,46.48],[9.25,46.29],[9,46.02],[9.05,45.88],[8.96,45.83],[8.78,46],[8.82,46.08],[8.64,46.11],[8.46,46.25],[8.42,46.45],[8.09,46.27],[8.12,46.16],[7.99,46.02],[7.79,45.92],[7.54,45.98],[7.13,45.88],[7.05,45.9],[6.77,46.16],[6.82,46.28],[6.76,46.42],[6.43,46.43],[6.23,46.33],[6.27,46.25],[6.2,46.19],[5.97,46.15],[5.97,46.21],[6.1,46.28],[6.12,46.38],[6.06,46.43],[6.16,46.61],[6.41,46.75],[6.46,46.95],[6.67,47.03],[6.95,47.27],[7,47.34],[6.9,47.39],[7.05,47.49],[7.27,47.43],[7.42,47.46],[7.62,47.59],[8.43,47.59],[8.56,47.62],[8.4,47.69],[8.57,47.78],[8.88,47.66],[9.18,47.67],[9.52,47.52]]]},{id:`752`,name:`Sweden`,rings:[[[19.07,57.84],[18.82,57.71],[18.79,57.48],[18.91,57.4],[18.78,57.36],[18.7,57.24],[18.48,57.16],[18.34,56.98],[18.15,56.92],[18.29,57.08],[18.11,57.27],[18.15,57.34],[18.14,57.56],[18.54,57.83],[18.8,57.83],[18.9,57.92],[19.07,57.84]]]},{id:`752`,name:`Sweden`,rings:[[[16.53,56.29],[16.43,56.24],[16.4,56.31],[16.41,56.57],[16.63,56.88],[16.73,56.9],[17,57.32],[17.12,57.32],[16.78,56.8],[16.53,56.29]]]},{id:`752`,name:`Sweden`,rings:[[[11.39,59.04],[11.47,58.91],[11.64,58.93],[11.8,59.29],[11.68,59.59],[11.84,59.7],[11.93,59.86],[12.17,59.91],[12.49,60.11],[12.59,60.45],[12.31,60.89],[12.3,61],[12.71,61.06],[12.88,61.35],[12.59,61.54],[12.16,61.72],[12.3,62.28],[12.12,62.59],[12.11,62.92],[12.22,63],[12,63.29],[12.21,63.49],[12.17,63.6],[12.79,64],[13.2,64.07],[13.96,64.01],[14.14,64.17],[14.08,64.46],[13.65,64.58],[14.48,65.3],[14.55,65.65],[14.64,65.79],[14.54,66.13],[15.04,66.17],[15.49,66.31],[15.42,66.49],[16.4,67.06],[16.44,67.15],[16.13,67.43],[16.19,67.51],[16.46,67.55],[16.59,67.63],[16.79,67.9],[17.33,68.1],[17.92,67.97],[18.18,68.2],[18.16,68.53],[18.38,68.56],[19.97,68.36],[20.24,68.48],[19.97,68.54],[20.24,68.67],[20.35,68.85],[20.12,69.02],[20.62,69.04],[20.9,68.98],[20.92,68.91],[22,68.52],[22.85,68.37],[23.1,68.26],[23.18,68.14],[23.32,68.13],[23.64,67.95],[23.5,67.87],[23.54,67.61],[23.46,67.46],[23.73,67.42],[23.78,67.33],[23.63,67.23],[23.64,67.13],[23.99,66.81],[23.87,66.58],[23.7,66.48],[23.7,66.25],[24,66.06],[24.15,65.81],[23.89,65.78],[23.69,65.83],[23.1,65.74],[22.75,65.87],[22.54,65.8],[22.4,65.86],[22.29,65.75],[22.25,65.6],[22.09,65.61],[22.15,65.55],[21.92,65.53],[21.95,65.47],[21.88,65.42],[21.57,65.41],[21.52,65.36],[21.61,65.26],[21.41,65.32],[21.57,65.13],[21.14,64.81],[21.52,64.46],[21.47,64.38],[21.02,64.18],[20.76,63.87],[20.21,63.66],[19.91,63.61],[19.72,63.46],[19.5,63.51],[19.5,63.42],[19.36,63.48],[19.04,63.24],[18.82,63.26],[18.86,63.21],[18.61,63.18],[18.53,63.06],[18.31,63],[18.5,62.99],[18.46,62.9],[18.17,62.79],[17.88,62.87],[17.97,62.72],[17.9,62.66],[18.04,62.6],[17.65,62.45],[17.41,62.51],[17.38,62.46],[17.43,62.34],[17.63,62.23],[17.51,62.17],[17.38,61.87],[17.47,61.68],[17.2,61.72],[17.22,61.66],[17.13,61.57],[17.14,61.38],[17.2,61.31],[17.16,61.28],[17.2,60.95],[17.28,60.81],[17.25,60.7],[17.36,60.64],[17.56,60.64],[17.66,60.54],[17.96,60.59],[18.16,60.41],[18.56,60.25],[18.53,60.15],[18.79,60.08],[18.99,59.83],[18.97,59.76],[18.58,59.57],[17.97,59.36],[18.13,59.32],[18.56,59.39],[18.62,59.33],[18.42,59.29],[18.29,59.11],[17.76,58.97],[16.98,58.65],[16.21,58.64],[16.79,58.59],[16.93,58.49],[16.65,58.43],[16.77,58.21],[16.7,58.16],[16.7,57.92],[16.6,57.91],[16.55,57.81],[16.65,57.5],[16.48,57.26],[16.53,57.07],[16.35,56.71],[15.92,56.17],[15.83,56.13],[15.63,56.19],[14.72,56.13],[14.75,56.03],[14.56,56.05],[14.21,55.83],[14.2,55.73],[14.34,55.53],[14.18,55.4],[13.81,55.43],[13.32,55.35],[12.89,55.41],[12.94,55.48],[12.97,55.75],[12.47,56.29],[12.71,56.23],[12.8,56.26],[12.66,56.44],[12.86,56.45],[12.92,56.52],[12.88,56.62],[12.72,56.66],[12.42,56.91],[12.15,57.23],[12.05,57.45],[11.96,57.43],[11.88,57.68],[11.73,57.72],[11.7,57.97],[11.55,58],[11.45,58.12],[11.43,58.34],[11.25,58.37],[11.21,58.87],[11.15,58.99],[11.19,59.08],[11.39,59.04]]]},{id:`752`,name:`Sweden`,rings:[[[19.16,57.92],[19.14,57.86],[19.04,57.91],[19.14,57.98],[19.33,57.96],[19.16,57.92]]]},{id:`752`,name:`Sweden`,rings:[[[18.42,59.03],[18.35,59.02],[18.38,59.07],[18.48,59.1],[18.42,59.03]]]},{id:`752`,name:`Sweden`,rings:[[[18.6,59.47],[18.57,59.44],[18.55,59.48],[18.57,59.53],[18.7,59.54],[18.6,59.47]]]},{id:`724`,name:`Spain`,rings:[[[1.59,38.67],[1.41,38.67],[1.4,38.71],[1.43,38.77],[1.59,38.67]]]},{id:`724`,name:`Spain`,rings:[[[3.14,39.79],[3.45,39.76],[3.46,39.7],[3.25,39.39],[3.07,39.3],[2.8,39.39],[2.7,39.54],[2.5,39.48],[2.37,39.57],[2.9,39.91],[3.2,39.96],[3.14,39.79]]]},{id:`724`,name:`Spain`,rings:[[[4.29,39.84],[3.87,39.96],[3.85,40.06],[4.22,40.03],[4.32,39.9],[4.29,39.84]]]},{id:`724`,name:`Spain`,rings:[[[1.45,38.92],[1.41,38.86],[1.22,38.9],[1.35,39.08],[1.56,39.12],[1.61,39.09],[1.63,39.04],[1.45,38.92]]]},{id:`724`,name:`Spain`,rings:[[[-1.79,43.41],[-1.76,43.32],[-1.41,43.24],[-1.48,43.07],[-1.43,43.04],[-1.3,43.1],[-1.18,43.02],[-.76,42.94],[-.59,42.8],[-.3,42.83],[-.04,42.69],[.63,42.69],[.7,42.85],[1.35,42.69],[1.43,42.6],[1.45,42.44],[1.7,42.5],[1.99,42.36],[2.2,42.42],[2.65,42.34],[2.67,42.39],[2.89,42.46],[3.21,42.43],[3.31,42.29],[3.17,42.26],[3.15,42.16],[3.24,42.08],[3.25,41.94],[3,41.77],[2.31,41.47],[2.08,41.29],[1.03,41.06],[.71,40.82],[.89,40.72],[.6,40.61],[.04,40.01],[-.33,39.52],[-.2,39.06],[-.03,38.89],[.16,38.82],[.2,38.76],[-.52,38.32],[-.82,37.77],[-.82,37.71],[-.72,37.63],[-.82,37.58],[-1.33,37.56],[-1.64,37.39],[-2.11,36.78],[-2.19,36.74],[-2.45,36.83],[-2.79,36.72],[-3.15,36.76],[-3.43,36.71],[-3.83,36.76],[-4.37,36.72],[-4.67,36.51],[-4.93,36.5],[-5.17,36.42],[-5.36,36.14],[-5.45,36.15],[-5.46,36.07],[-5.63,36.03],[-6.04,36.19],[-6.23,36.43],[-6.27,36.6],[-6.38,36.64],[-6.41,36.73],[-6.22,36.91],[-6.32,36.91],[-6.4,36.83],[-6.49,36.95],[-6.89,37.19],[-6.86,37.28],[-6.98,37.2],[-7.41,37.18],[-7.5,37.59],[-7.44,37.73],[-7.18,38.01],[-7.02,38.05],[-6.96,38.19],[-7.1,38.18],[-7.34,38.46],[-7.28,38.72],[-7.05,38.91],[-7,39.06],[-7.17,39.14],[-7.34,39.47],[-7.54,39.66],[-7.12,39.68],[-6.98,39.8],[-6.9,40.02],[-7.03,40.17],[-6.81,40.34],[-6.85,40.44],[-6.83,40.78],[-6.93,41.01],[-6.21,41.53],[-6.31,41.64],[-6.54,41.67],[-6.56,41.87],[-6.62,41.94],[-7.15,41.98],[-7.21,41.9],[-7.4,41.83],[-7.92,41.88],[-8.15,41.81],[-8.22,41.9],[-8.14,42.04],[-8.27,42.14],[-8.85,41.93],[-8.89,42.11],[-8.69,42.27],[-8.81,42.28],[-8.73,42.41],[-8.81,42.47],[-8.81,42.64],[-9.03,42.59],[-8.93,42.8],[-9.04,42.81],[-9.24,42.98],[-9.18,43.17],[-8.87,43.33],[-8.54,43.34],[-8.25,43.44],[-8.26,43.58],[-7.7,43.77],[-7.5,43.74],[-7.26,43.6],[-7.06,43.55],[-5.85,43.65],[-4.52,43.42],[-3.61,43.52],[-3.04,43.37],[-2.87,43.45],[-2.34,43.33],[-1.79,43.41]]]},{id:`703`,name:`Slovakia`,rings:[[[22.54,49.07],[22.3,48.69],[22.14,48.57],[22.11,48.39],[21.72,48.35],[21.45,48.55],[21.07,48.51],[20.49,48.53],[20.33,48.3],[19.9,48.13],[19.63,48.22],[19.47,48.11],[18.79,48],[18.73,47.79],[17.76,47.77],[17.63,47.81],[17.32,47.99],[17.09,48.04],[16.86,48.39],[16.99,48.68],[17.13,48.84],[17.48,48.83],[17.76,48.89],[18.08,49.07],[18.16,49.26],[18.6,49.49],[18.94,49.5],[18.97,49.4],[19.15,49.4],[19.25,49.51],[19.44,49.6],[19.63,49.41],[19.77,49.37],[19.76,49.2],[19.8,49.19],[20.06,49.18],[20.16,49.32],[20.36,49.38],[20.62,49.39],[20.95,49.32],[21.08,49.42],[21.35,49.43],[21.89,49.34],[22.02,49.21],[22.54,49.07]]]},{id:`705`,name:`Slovenia`,rings:[[[16.52,46.5],[16.32,46.53],[16.24,46.48],[16.23,46.37],[16.07,46.37],[15.93,46.28],[15.64,46.2],[15.59,46.14],[15.67,46.05],[15.65,45.86],[15.28,45.73],[15.36,45.65],[15.28,45.58],[15.34,45.47],[15.24,45.44],[14.79,45.48],[14.57,45.66],[14.37,45.48],[13.99,45.51],[13.88,45.43],[13.61,45.48],[13.58,45.52],[13.88,45.61],[13.72,45.76],[13.58,45.81],[13.6,45.98],[13.49,45.99],[13.63,46.18],[13.38,46.26],[13.7,46.52],[14.55,46.4],[14.89,46.61],[15.44,46.63],[15.76,46.71],[15.96,46.68],[15.98,46.8],[16.09,46.86],[16.28,46.86],[16.38,46.64],[16.52,46.5]]]},{id:`688`,name:`Serbia`,rings:[[[22.7,44.24],[22.63,44.19],[22.6,44.08],[22.42,44.01],[22.37,43.78],[22.56,43.45],[22.98,43.19],[22.94,43.1],[22.71,42.88],[22.47,42.84],[22.44,42.63],[22.53,42.48],[22.42,42.33],[22.24,42.36],[21.56,42.25],[21.52,42.33],[21.61,42.39],[21.75,42.67],[21.39,42.75],[21.4,42.83],[21.06,43.09],[20.85,43.17],[20.8,43.26],[20.62,43.2],[20.66,43.1],[20.62,43.03],[20.48,42.95],[20.47,42.86],[20.35,42.83],[20.27,42.94],[19.61,43.17],[19.22,43.45],[19.19,43.52],[19.25,43.58],[19.45,43.56],[19.5,43.64],[19.24,43.96],[19.55,43.99],[19.58,44.04],[19.12,44.36],[19.15,44.53],[19.29,44.7],[19.35,44.88],[19,44.9],[19.09,44.93],[19.06,45.14],[19.14,45.2],[19.39,45.17],[19.4,45.21],[19.01,45.4],[19.06,45.52],[18.92,45.6],[18.95,45.66],[18.84,45.84],[18.91,45.93],[19.07,46.01],[19.28,46],[19.53,46.16],[20.21,46.13],[20.71,45.74],[20.77,45.75],[20.77,45.48],[21.02,45.32],[21.49,45.15],[21.35,45.01],[21.53,44.9],[21.36,44.83],[21.91,44.67],[22.09,44.54],[22.5,44.71],[22.64,44.65],[22.74,44.57],[22.55,44.54],[22.49,44.44],[22.7,44.24]]]},{id:`674`,name:`San Marino`,rings:[[[12.49,43.9],[12.4,43.94],[12.5,43.99],[12.49,43.9]]]},{id:`643`,name:`Russia`,rings:[[[130.69,42.3],[130.53,42.54],[130.59,42.57],[130.58,42.62],[130.42,42.73],[130.58,42.81],[131.07,42.9],[131.26,43.38],[131.18,43.5],[131.17,43.7],[131.26,44.07],[130.98,44.85],[131.45,44.98],[131.85,45.33],[131.98,45.24],[132.94,45.03],[133.11,45.13],[133.11,45.32],[133.19,45.49],[133.44,45.61],[133.51,45.88],[133.65,45.95],[133.7,46.14],[133.86,46.25],[133.9,46.37],[133.87,46.5],[134.02,46.71],[134.07,46.95],[134.2,47.13],[134.17,47.3],[134.29,47.41],[134.6,47.52],[134.75,47.71],[134.57,48.02],[134.67,48.15],[134.66,48.25],[134.29,48.37],[133.84,48.27],[133.47,48.1],[133.15,48.11],[132.71,47.95],[132.48,47.71],[130.96,47.71],[130.92,47.84],[130.73,48.02],[130.71,48.13],[130.81,48.34],[130.55,48.6],[130.62,48.77],[130.55,48.86],[130.2,48.89],[129.5,49.39],[129.07,49.37],[128.82,49.46],[128.7,49.6],[128,49.57],[127.71,49.67],[127.55,49.8],[127.49,49.97],[127.59,50.21],[127.34,50.35],[127.31,50.71],[126.92,51.1],[126.81,51.51],[126.71,51.57],[126.7,51.7],[126.51,51.93],[126.34,52.36],[126.19,52.52],[126.02,52.61],[126.05,52.74],[125.87,52.87],[125.73,52.89],[125.65,53.04],[125.07,53.2],[124.81,53.13],[123.61,53.55],[123.16,53.54],[122.75,53.47],[122.34,53.49],[120.98,53.28],[120.7,53.17],[120.1,52.79],[120.05,52.72],[120.07,52.63],[120.66,52.57],[120.7,52.49],[120.66,52.3],[120.74,52.21],[120.75,52.1],[120.68,51.97],[120.07,51.6],[119.75,51.11],[119.51,50.86],[119.45,50.7],[119.16,50.41],[119.35,50.28],[119.26,50.07],[118.45,49.84],[117.87,49.51],[117.24,49.62],[116.22,50.01],[115.72,49.88],[115.43,49.9],[114.74,50.23],[114.3,50.27],[113.45,49.94],[113.17,49.8],[113.06,49.62],[112.81,49.52],[112.5,49.53],[112.08,49.42],[111.34,49.36],[110.71,49.14],[110.43,49.22],[110.2,49.17],[109.24,49.33],[108.61,49.32],[107.97,49.65],[107.92,49.95],[107.23,49.99],[106.71,50.31],[106.22,50.3],[105.38,50.47],[104.47,50.31],[104.08,50.15],[103.63,50.14],[103.3,50.2],[103.16,50.29],[102.68,50.39],[102.29,50.58],[102.31,50.72],[102.21,50.83],[102.11,51.35],[101.57,51.47],[101.38,51.45],[100.47,51.73],[99.92,51.76],[99.72,51.87],[99.41,51.92],[98.89,52.12],[98.64,51.8],[98.35,51.72],[98.22,51.51],[98.04,51.45],[97.84,51.05],[97.83,50.99],[97.95,50.86],[98.03,50.65],[98.28,50.53],[98.25,50.3],[98.17,50.18],[98.01,50.01],[97.59,49.91],[97.36,49.74],[97.21,49.73],[96.99,49.88],[96.31,49.9],[96.07,50],[95.94,49.96],[95.79,50.01],[95.52,49.91],[95.11,49.94],[94.93,50.04],[94.61,50.02],[94.36,50.22],[94.25,50.56],[93.1,50.6],[92.94,50.78],[92.78,50.78],[92.74,50.71],[92.63,50.69],[92.35,50.86],[92.19,50.7],[91.8,50.69],[91.41,50.47],[91.02,50.42],[90.65,50.22],[90.05,50.09],[89.98,49.98],[89.64,49.9],[89.65,49.72],[89.39,49.61],[89.24,49.63],[89.11,49.5],[89.01,49.47],[88.9,49.54],[88.83,49.45],[88.63,49.49],[88.19,49.45],[88.12,49.26],[87.99,49.19],[87.42,49.08],[87.32,49.09],[87.23,49.22],[87,49.29],[86.72,49.56],[86.63,49.56],[86.62,49.61],[86.73,49.7],[86.68,49.78],[86.18,49.5],[85.23,49.62],[85,49.89],[84.99,50.06],[84.61,50.2],[84.32,50.24],[84.17,50.52],[83.94,50.78],[83.36,50.99],[83.16,50.99],[83.02,50.9],[82.76,50.89],[82.49,50.73],[81.47,50.74],[81.39,50.96],[81.07,50.97],[81.13,51.19],[80.97,51.19],[80.88,51.28],[80.74,51.29],[80.45,51.18],[80.42,50.95],[80.22,50.91],[80.08,50.84],[80.07,50.76],[79.99,50.78],[79.47,51.49],[77.86,53.27],[76.48,54.02],[76.42,54.15],[76.65,54.14],[76.84,54.44],[75.69,54.12],[75.44,54.09],[75.38,53.97],[75.22,53.89],[75.05,53.83],[74.84,53.83],[74.45,53.65],[74.35,53.49],[74.21,53.58],[73.86,53.62],[73.64,53.58],[73.41,53.45],[73.28,53.6],[73.31,53.71],[73.4,53.81],[73.68,53.93],[73.71,54.04],[73.67,54.06],[73.23,53.96],[72.91,54.11],[72.62,54.13],[72.56,54.09],[72.59,54],[72.45,53.94],[72.39,54.12],[72.19,54.33],[72.01,54.21],[71.34,54.16],[71.09,54.21],[71.05,54.26],[71.15,54.36],[71.19,54.6],[70.91,55.13],[70.74,55.3],[70.49,55.28],[70.18,55.16],[69.49,55.36],[68.98,55.39],[68.52,55.21],[68.2,55.16],[68.24,55.05],[68.15,54.98],[66.22,54.67],[65.91,54.69],[65.71,54.62],[65.48,54.62],[65.24,54.52],[65.16,54.36],[65.09,54.34],[64.93,54.4],[64.65,54.35],[64.46,54.38],[63.85,54.24],[63.19,54.17],[63.07,54.1],[62.5,54.01],[62.04,54],[61.93,53.95],[61.33,54.05],[61.23,54.02],[61.14,53.96],[61.11,53.75],[60.98,53.62],[61.25,53.55],[61.47,53.58],[61.53,53.52],[61.23,53.45],[61.16,53.34],[61.2,53.29],[61.66,53.23],[62.02,53.11],[62.08,53.01],[61.97,52.94],[61.05,52.97],[60.77,52.68],[60.99,52.34],[60.67,52.15],[60.42,52.13],[60.03,51.93],[60.39,51.77],[60.46,51.65],[61.36,51.44],[61.56,51.32],[61.58,51.23],[61.39,50.86],[60.94,50.7],[60.42,50.68],[60.29,50.7],[60.06,50.85],[59.96,50.8],[59.81,50.58],[59.52,50.49],[59.52,50.58],[59.45,50.62],[58.88,50.69],[58.36,51.06],[57.84,51.09],[57.65,50.92],[57.44,50.89],[57.18,51.04],[57.01,51.07],[56.62,50.98],[56.49,51.02],[56.14,50.84],[56.05,50.71],[55.69,50.58],[55.36,50.67],[54.64,51.01],[54.55,50.95],[54.65,50.66],[54.56,50.54],[54.47,50.58],[54.42,50.78],[54.14,51.04],[53.34,51.48],[52.57,51.48],[52.33,51.68],[52.22,51.71],[52.01,51.67],[51.61,51.48],[51.35,51.47],[51.27,51.59],[51.16,51.65],[50.79,51.73],[50.25,51.29],[49.82,51.13],[49.5,51.08],[49.32,50.85],[48.81,50.6],[48.62,50.61],[48.84,50.01],[48.76,49.93],[48.43,49.83],[48.34,49.86],[47.71,50.38],[47.6,50.41],[47.43,50.36],[47.3,50.22],[47.3,50.06],[46.99,49.85],[46.89,49.7],[46.8,49.37],[47.03,49.15],[46.7,48.8],[46.61,48.57],[46.66,48.41],[47.07,48.23],[47.12,48.13],[47.09,47.95],[47.29,47.74],[47.48,47.8],[48.17,47.71],[48.6,47.26],[48.96,46.77],[48.88,46.71],[48.56,46.76],[48.5,46.7],[48.54,46.61],[49.23,46.34],[49.25,46.29],[49.12,46.28],[49.08,46.19],[48.69,46.09],[48.73,45.9],[48.49,45.94],[48.16,45.74],[47.83,45.66],[47.7,45.69],[47.63,45.58],[47.46,45.68],[47.53,45.6],[47.52,45.49],[47.41,45.42],[47.39,45.29],[47.08,44.82],[47,44.88],[46.96,44.78],[46.76,44.66],[46.72,44.56],[46.75,44.42],[47.02,44.34],[47.31,44.1],[47.46,43.56],[47.56,43.83],[47.65,43.89],[47.51,43.51],[47.46,43.03],[47.63,42.9],[47.73,42.68],[48.08,42.35],[48.38,41.95],[48.57,41.85],[48.39,41.6],[48.06,41.46],[47.86,41.21],[47.59,41.22],[47.26,41.32],[47.21,41.46],[46.75,41.81],[46.57,41.8],[46.54,41.87],[45.95,42.04],[45.64,42.2],[45.73,42.48],[45.65,42.52],[45.34,42.53],[45.16,42.68],[44.87,42.76],[44.77,42.62],[44.65,42.73],[44.51,42.75],[43.96,42.57],[43.83,42.57],[43.74,42.62],[43.78,42.75],[43.09,42.99],[42.99,43.09],[42.76,43.17],[42.57,43.16],[42.42,43.22],[41.58,43.22],[41.36,43.33],[41.08,43.37],[40.65,43.53],[40.15,43.57],[39.98,43.42],[38.72,44.29],[38.18,44.42],[37.85,44.7],[37.7,44.66],[37.5,44.7],[37.2,44.97],[36.65,45.13],[36.62,45.19],[36.94,45.29],[36.72,45.37],[36.79,45.41],[36.87,45.43],[37.22,45.27],[37.65,45.38],[37.67,45.49],[37.61,45.5],[37.61,45.57],[37.84,45.8],[37.93,46],[38.01,46.05],[38.08,45.94],[38.18,46.09],[38.49,46.09],[38.08,46.39],[37.91,46.41],[37.77,46.64],[37.97,46.62],[38.23,46.7],[38.5,46.66],[38.44,46.81],[39.27,47.04],[39.29,47.11],[39.2,47.27],[39.02,47.27],[38.93,47.18],[38.67,47.14],[38.55,47.15],[38.76,47.26],[38.58,47.24],[38.21,47.09],[38.2,47.17],[38.28,47.28],[38.2,47.32],[38.29,47.56],[38.64,47.67],[38.82,47.84],[39.74,47.84],[39.78,47.89],[39.77,47.96],[39.96,48.27],[39.85,48.3],[39.89,48.36],[39.84,48.54],[39.65,48.59],[39.7,48.74],[39.79,48.81],[40.01,48.82],[39.75,48.91],[39.68,49.01],[39.89,49.06],[40.11,49.25],[40.08,49.58],[39.78,49.57],[39.46,49.73],[39.3,49.74],[39.17,49.86],[38.92,49.82],[38.26,50.05],[38.18,50.03],[38.15,49.94],[38.05,49.92],[37.7,50.11],[37.58,50.29],[37.42,50.41],[36.76,50.29],[36.62,50.21],[36.5,50.28],[36.3,50.28],[36.12,50.41],[35.89,50.44],[35.67,50.35],[35.59,50.37],[35.41,50.54],[35.44,50.73],[35.31,51.04],[35.16,51.06],[35.06,51.2],[34.76,51.17],[34.21,51.26],[34.28,51.31],[34.12,51.68],[34.38,51.72],[34.4,51.78],[34.11,51.98],[33.92,52.25],[33.73,52.34],[33.15,52.34],[32.81,52.25],[32.43,52.31],[32.36,52.27],[32.28,52.11],[32.12,52.05],[31.76,52.1],[31.58,52.31],[31.62,52.55],[31.53,52.63],[31.56,52.76],[31.26,53.02],[31.42,53.2],[31.67,53.2],[31.85,53.11],[32.14,53.09],[32.7,53.34],[32.71,53.42],[32.47,53.55],[32.42,53.62],[32.45,53.69],[32.2,53.78],[31.75,53.81],[31.83,54.03],[31.4,54.2],[31.19,54.45],[31.07,54.49],[31.15,54.63],[30.8,54.78],[30.83,54.92],[30.98,55.05],[30.96,55.14],[30.81,55.28],[30.9,55.4],[30.91,55.57],[30.23,55.84],[29.94,55.85],[29.48,55.68],[29.35,55.78],[29.37,55.94],[29.09,56.02],[28.79,55.94],[28.56,56.09],[28.28,56.06],[28.15,56.14],[28.2,56.26],[28.1,56.55],[28.01,56.6],[27.85,56.85],[27.64,56.85],[27.83,57.19],[27.83,57.29],[27.54,57.43],[27.51,57.51],[27.35,57.53],[27.4,57.67],[27.54,57.8],[27.78,57.87],[27.67,57.93],[27.5,58.22],[27.53,58.43],[27.43,58.79],[27.76,59.05],[27.9,59.28],[28.15,59.37],[28.01,59.48],[28.06,59.55],[28.01,59.72],[28.06,59.78],[28.33,59.69],[28.52,59.85],[28.95,59.83],[29.15,60],[30.12,59.87],[30.17,59.96],[29.72,60.19],[29.07,60.19],[28.64,60.38],[28.49,60.54],[28.62,60.49],[28.65,60.61],[28.51,60.68],[28.18,60.57],[27.8,60.54],[28.41,60.9],[29.25,61.29],[30.94,62.32],[31.29,62.57],[31.53,62.89],[31.18,63.21],[30.42,63.5],[29.99,63.73],[30.21,63.8],[30.53,64.08],[30.49,64.24],[30.11,64.37],[29.99,64.52],[30.12,64.64],[30.11,64.73],[29.78,64.8],[29.6,64.97],[29.62,65.04],[29.83,65.15],[29.81,65.2],[29.61,65.25],[29.72,65.34],[29.73,65.47],[29.82,65.57],[29.72,65.63],[30.09,65.68],[30.09,65.79],[29.9,66.09],[29.06,66.89],[29.09,66.97],[29.24,67.1],[29.94,67.55],[29.99,67.67],[29.34,68.06],[28.69,68.19],[28.47,68.49],[28.78,68.81],[28.41,68.9],[29.12,69.05],[29.39,69.3],[29.99,69.39],[30.16,69.5],[30.16,69.63],[30.62,69.53],[30.86,69.54],[30.92,69.61],[30.87,69.78],[31.55,69.7],[31.79,69.82],[32,69.81],[31.98,69.95],[33.01,69.72],[33,69.63],[32.91,69.6],[32.18,69.67],[32.09,69.63],[32.33,69.55],[32.38,69.48],[33,69.47],[32.94,69.38],[32.98,69.37],[33.45,69.43],[33.33,69.15],[33.14,69.07],[33.44,69.13],[33.68,69.31],[34.23,69.31],[35.01,69.22],[35.29,69.28],[35.86,69.19],[37.73,68.69],[38.43,68.36],[38.83,68.32],[39.57,68.07],[39.82,68.06],[39.75,68.16],[39.81,68.15],[40.38,67.83],[40.97,67.71],[41.06,67.44],[41.13,67.39],[41.13,67.27],[41.36,67.21],[41.28,66.91],[41.19,66.83],[40.52,66.45],[40.1,66.3],[39.29,66.13],[38.66,66.07],[37.9,66.1],[36.98,66.27],[35.51,66.4],[34.82,66.61],[34.48,66.55],[34.4,66.61],[34.45,66.65],[33.15,66.84],[32.85,67.02],[32.93,67.09],[31.89,67.16],[32.5,67],[32.46,66.92],[32.86,66.72],[33.18,66.68],[33.22,66.53],[33.65,66.44],[33.36,66.33],[34.11,66.23],[34.4,66.13],[34.69,65.95],[34.79,65.86],[34.78,65.77],[34.62,65.51],[34.41,65.4],[34.8,64.99],[34.83,64.8],[34.95,64.76],[34.86,64.71],[34.87,64.56],[35.03,64.44],[35.43,64.35],[35.65,64.38],[36.15,64.19],[36.37,64],[37.44,63.81],[37.97,63.95],[38.07,64.03],[38.06,64.09],[37.95,64.32],[37.74,64.4],[37.18,64.41],[36.58,64.79],[36.53,64.94],[36.79,64.99],[36.88,65.17],[37.14,65.19],[37.53,65.11],[38.01,64.88],[38.41,64.86],[39.57,64.57],[39.76,64.58],[39.85,64.69],[40.06,64.77],[40.44,64.78],[40.28,65],[39.8,65.35],[39.75,65.45],[39.82,65.6],[40.33,65.75],[40.69,65.96],[41.47,66.12],[42.21,66.52],[42.6,66.42],[43.23,66.41],[43.65,66.25],[43.54,66.12],[43.84,66.14],[44.11,66.01],[44.15,66.11],[44.1,66.23],[44.49,66.67],[44.43,66.94],[44.29,67.1],[43.85,67.19],[43.78,67.26],[44.22,68],[44.2,68.25],[44.17,68.33],[43.33,68.67],[44.05,68.55],[45.08,68.58],[45.89,68.48],[46.68,67.97],[46.69,67.85],[45.53,67.76],[44.94,67.48],[44.9,67.41],[44.94,67.35],[45.56,67.19],[45.88,66.89],[46.49,66.8],[47.66,66.98],[47.77,67.28],[47.91,67.45],[47.88,67.58],[48.83,67.68],[48.88,67.73],[48.7,67.87],[48.75,67.9],[49.16,67.87],[50.84,68.35],[51.99,68.54],[52.29,68.46],[52.18,68.37],[52.4,68.35],[52.72,68.48],[52.55,68.59],[52.34,68.61],[53.8,69],[54.49,68.99],[53.8,68.91],[53.97,68.84],[53.76,68.63],[53.92,68.54],[53.93,68.44],[53.83,68.38],[53.34,68.34],[53.26,68.27],[53.97,68.23],[54.48,68.3],[54.72,68.18],[54.86,68.2],[54.92,68.37],[55.42,68.57],[56.04,68.65],[57.13,68.55],[58.17,68.89],[58.24,68.83],[58.35,68.92],[59.06,69.01],[59.11,68.9],[59.37,68.74],[59.11,68.62],[59.1,68.44],[59.73,68.35],[59.92,68.47],[59.87,68.61],[59.9,68.71],[60.49,68.73],[60.93,68.99],[60.86,69.15],[60.67,69.11],[60.17,69.59],[60.91,69.85],[63.36,69.68],[64.19,69.53],[64.93,69.33],[64.9,69.25],[65.03,69.27],[66.42,68.95],[67,68.87],[67.15,68.75],[67.73,68.51],[68.37,68.31],[68.5,68.35],[68.83,68.57],[69.14,68.95],[68.76,68.92],[68.54,68.97],[68.12,69.24],[68.01,69.48],[67.62,69.58],[67.06,69.69],[66.96,69.66],[66.9,69.55],[66.8,69.66],[66.8,69.74],[66.93,70.01],[67.07,70],[67.24,70.11],[67.15,70.22],[67.29,70.74],[67.14,70.84],[66.7,70.82],[66.67,70.9],[66.85,71.06],[66.69,71.04],[66.64,71.08],[66.92,71.28],[67.54,71.41],[68.27,71.68],[68.61,72.01],[69.04,72.67],[69.39,72.96],[69.69,72.98],[69.64,72.9],[69.74,72.88],[71.5,72.91],[71.93,72.82],[72.45,72.79],[72.81,72.69],[72.75,72.34],[72.57,72.01],[72.28,71.7],[71.91,71.55],[71.87,71.46],[72.08,71.31],[72.58,71.15],[72.7,70.96],[72.7,70.46],[72.47,70.28],[72.6,69.79],[72.61,69.48],[72.53,69.15],[72.58,68.97],[72.81,68.82],[73.55,68.57],[73.59,68.48],[73.14,68.18],[73.17,67.97],[73.07,67.77],[72.59,67.59],[71.85,67.01],[71.67,66.94],[71.37,66.96],[71.55,66.76],[71.54,66.68],[71.34,66.69],[70.72,66.52],[70.38,66.6],[70.69,66.74],[70.28,66.69],[69.88,66.85],[69.01,66.79],[69.19,66.58],[69.98,66.4],[70.34,66.34],[71.36,66.36],[72.07,66.25],[72.32,66.33],[72.42,66.56],[73.51,66.86],[73.79,66.99],[74.08,67.41],[74.77,67.77],[74.74,68.07],[74.39,68.42],[74.48,68.66],[74.58,68.75],[75.12,68.86],[76.46,68.98],[77.11,68.6],[77.24,68.47],[77.25,67.94],[77.18,67.78],[77.77,67.57],[78.92,67.59],[77.59,67.75],[77.54,68.01],[77.67,68.19],[78,68.26],[77.65,68.9],[76,69.24],[75.42,69.24],[74.81,69.09],[74.36,69.14],[73.98,69.11],[73.78,69.2],[73.89,69.42],[73.56,69.71],[73.58,69.8],[73.83,70.18],[74.34,70.58],[74.31,70.65],[73.58,71.22],[73.09,71.44],[73.67,71.85],[74.99,72.15],[75.09,72.26],[75.1,72.42],[75.01,72.62],[74.79,72.81],[75.15,72.85],[75.37,72.8],[75.6,72.58],[75.59,72.46],[75.74,72.3],[75.55,72.17],[75.39,71.98],[75.27,71.96],[75.25,71.81],[75.5,71.65],[75.47,71.53],[75.28,71.43],[75.33,71.34],[75.73,71.27],[76.74,71.2],[76.93,71.13],[77,71.18],[77.59,71.17],[78.32,70.93],[79.02,70.95],[79.08,71],[78.72,70.98],[78.49,71.03],[78.21,71.27],[77.91,71.32],[77.48,71.31],[76.43,71.55],[76.31,71.6],[76.03,71.91],[76.42,72.01],[76.87,72.03],[77.55,71.84],[78.19,71.91],[78.23,71.95],[78.02,72.09],[77.49,72.07],[77.41,72.11],[77.44,72.16],[77.97,72.33],[78.48,72.4],[79.42,72.38],[79.95,72.22],[80.76,72.09],[80.86,71.97],[81.66,71.72],[82.76,71.76],[83.11,71.72],[83.23,71.67],[82.98,71.45],[82.32,71.26],[82.24,71],[82.33,70.81],[82.16,70.6],[82.22,70.4],[82.26,70.54],[82.45,70.69],[82.59,70.89],[82.87,70.95],[83.01,70.9],[83.06,70.69],[83.03,70.58],[82.92,70.41],[82.68,70.22],[82.86,70.1],[83.08,70.09],[83.13,70.16],[83.07,70.28],[83.5,70.35],[83.66,70.42],[83.74,70.55],[83.58,70.77],[83.15,71.1],[83.55,71.54],[83.53,71.68],[83.2,71.87],[82.64,71.92],[82.32,72.07],[82.18,72.24],[82.09,72.27],[81.1,72.39],[80.83,72.49],[80.66,72.71],[80.84,72.95],[80.76,73.03],[80.51,73.09],[80.42,73.23],[80.4,73.36],[80.6,73.47],[80.58,73.57],[81.82,73.66],[83.54,73.67],[84.74,73.76],[85.45,73.73],[85.61,73.82],[86.89,73.89],[87.03,73.82],[86.09,73.58],[85.83,73.49],[85.79,73.44],[85.82,73.33],[86.68,73.11],[85.97,73.35],[85.91,73.39],[85.94,73.46],[86.38,73.57],[87.12,73.62],[87.57,73.81],[87.21,73.88],[86.57,74.24],[86,74.32],[86.18,74.42],[86.4,74.45],[86.9,74.33],[87.23,74.36],[86.42,74.59],[85.79,74.65],[85.88,74.74],[86.06,74.73],[86.2,74.82],[86.65,74.68],[87.04,74.78],[87.42,74.94],[87.47,75.01],[86.94,75.07],[86.92,75.11],[87.01,75.17],[87.67,75.13],[88.73,75.37],[89.31,75.47],[89.6,75.46],[90.19,75.59],[91.48,75.65],[91.85,75.72],[94.07,75.91],[94.16,75.96],[93.69,75.92],[93.57,75.96],[93.4,75.9],[93.18,75.96],[92.89,75.91],[92.86,75.98],[92.97,76.08],[93.11,76.03],[93.26,76.1],[93.65,76.05],[94.1,76.12],[94.51,76.11],[94.57,76.15],[95.58,76.14],[96.08,76.08],[95.65,75.89],[96.51,76.01],[96.6,75.99],[96.5,75.89],[97.35,76.03],[97.5,75.98],[97.67,76.08],[98.66,76.24],[99.56,76.11],[99.77,76.03],[99.6,75.85],[99.44,75.8],[99.54,75.8],[99.85,75.93],[99.82,76.14],[98.8,76.48],[98.87,76.51],[99.58,76.47],[100.84,76.53],[101.6,76.44],[101.68,76.49],[100.93,76.56],[101.1,76.7],[100.92,76.82],[100.91,76.9],[100.99,76.99],[101.18,77.03],[101.52,77.2],[102.61,77.51],[103.13,77.63],[103.56,77.63],[104.18,77.73],[105.71,77.53],[106.06,77.39],[105.39,77.24],[104.2,77.1],[105.64,77.1],[105.71,77],[105.82,77],[106.15,77.04],[106.94,77.03],[107.43,76.93],[106.64,76.57],[106.39,76.59],[106.42,76.51],[107.72,76.52],[107.9,76.57],[108.03,76.72],[108.18,76.74],[111.11,76.72],[111.94,76.55],[112.09,76.48],[111.94,76.38],[112.3,76.44],[112.62,76.38],[112.68,76.22],[112.8,76.13],[112.66,76.05],[113.09,76.13],[113.15,76.17],[112.99,76.24],[113.27,76.25],[113.56,75.89],[113.86,75.92],[113.87,75.86],[113.62,75.59],[113.49,75.56],[113.52,75.62],[113.39,75.68],[112.45,75.83],[112.73,75.74],[112.96,75.57],[113.24,75.61],[113.36,75.53],[113.73,75.45],[113.62,75.29],[112.92,75.02],[111.87,74.74],[109.84,74.32],[109.91,74.26],[109.81,74.17],[109.08,74.03],[108.2,73.69],[107.77,73.62],[107.27,73.62],[106.68,73.33],[106.19,73.31],[105.68,72.96],[105.14,72.78],[105.71,72.84],[106.48,73.14],[107.75,73.17],[108.35,73.31],[109.09,73.38],[109.33,73.49],[109.86,73.47],[110.77,73.69],[110.87,73.73],[110.72,73.78],[110.09,73.71],[109.71,73.74],[109.67,73.8],[109.87,73.93],[110.26,74.02],[111.06,73.94],[111.13,74.05],[111.55,74.03],[111.23,73.97],[111.4,73.83],[112.15,73.71],[112.79,73.75],[112.94,73.84],[112.84,73.96],[113.03,73.91],[113.42,73.65],[113.16,73.46],[113.49,73.35],[113.47,73.05],[113.13,72.83],[113.16,72.77],[113.31,72.66],[113.67,72.64],[113.22,72.81],[113.54,73.06],[113.56,73.23],[113.89,73.35],[113.54,73.43],[113.51,73.5],[114.06,73.58],[114.82,73.61],[115.34,73.7],[118.45,73.59],[118.87,73.54],[118.94,73.48],[118.46,73.46],[118.38,73.37],[118.43,73.25],[119.75,72.98],[121,72.94],[121.75,72.97],[122.03,72.9],[122.54,72.88],[122.75,72.91],[122.5,72.97],[122.53,73.02],[123.16,72.95],[123.62,73.19],[123.32,73.43],[123.31,73.53],[123.41,73.64],[123.8,73.63],[124.02,73.71],[124.54,73.75],[125.62,73.52],[125.6,73.45],[126.26,73.55],[126.35,73.51],[126.26,73.42],[126.29,73.39],[126.55,73.33],[127.03,73.55],[127.74,73.48],[128.28,73.33],[128.26,73.27],[128.59,73.26],[128.89,73.19],[128.91,73.11],[129.1,73.11],[129.05,73.04],[128.6,72.9],[129.02,72.87],[129.23,72.78],[129.25,72.7],[128.42,72.53],[129.28,72.44],[129.41,72.32],[129.41,72.17],[129.28,72.09],[128.93,72.08],[127.8,72.43],[127.73,72.41],[127.84,72.31],[128.36,72.09],[128.91,71.75],[129.12,71.82],[129.12,71.95],[129.21,71.92],[129.46,71.74],[128.84,71.66],[128.92,71.6],[129.14,71.59],[129.76,71.12],[130.54,70.89],[130.67,70.89],[130.76,70.96],[131.02,70.75],[131.43,70.83],[131.91,71.2],[132.04,71.24],[132,71.35],[132.23,71.64],[132.65,71.93],[132.8,71.77],[133.13,71.61],[133.69,71.43],[134.1,71.38],[134.7,71.39],[135.02,71.52],[135.56,71.61],[136.09,71.62],[137.12,71.42],[137.94,71.13],[137.97,71.17],[137.84,71.23],[138.32,71.33],[137.92,71.38],[138.05,71.53],[138.23,71.6],[138.52,71.56],[138.78,71.63],[139.21,71.44],[139.99,71.49],[139.69,71.7],[139.72,71.89],[139.36,71.95],[139.64,72],[139.85,72.15],[140.19,72.19],[139.62,72.23],[139.43,72.16],[139.18,72.16],[139.14,72.33],[139.6,72.5],[140.45,72.49],[141.08,72.59],[140.98,72.63],[140.97,72.72],[140.65,72.84],[140.81,72.89],[142.06,72.72],[143.52,72.7],[146.25,72.44],[146.24,72.35],[144.78,72.38],[144.59,72.31],[144.17,72.26],[144.29,72.19],[145.04,72.26],[146.83,72.29],[146.6,72.12],[146.11,71.95],[146,71.95],[146.23,72.14],[145.76,72.23],[145.66,72.07],[145.76,72.02],[145.76,71.94],[145.41,71.89],[145.07,71.93],[145.07,71.83],[144.99,71.75],[145.19,71.7],[146.07,71.81],[147.26,72.33],[148.4,72.31],[149.5,72.16],[149.96,71.99],[150.02,71.9],[149.88,71.84],[149.05,71.8],[148.92,71.71],[148.97,71.69],[149.5,71.66],[150.06,71.51],[150.6,71.52],[150.67,71.45],[150.1,71.23],[150.97,71.38],[151.58,71.29],[152.09,71.02],[151.76,70.98],[152.51,70.83],[153.8,70.88],[155.89,71.1],[157.45,71.07],[158.7,70.94],[159.35,70.79],[159.73,70.65],[159.91,70.51],[160.01,70.31],[159.73,69.87],[159.83,69.78],[160.91,69.61],[161.04,69.1],[161.31,68.98],[161.34,68.9],[161.13,68.65],[160.86,68.54],[161.1,68.56],[161.37,68.82],[161.56,68.9],[161.56,69.06],[161.48,69.2],[161.54,69.38],[162.17,69.61],[163.2,69.72],[163.95,69.74],[164.51,69.61],[166.89,69.5],[167.63,69.74],[167.86,69.73],[168.15,69.58],[168.3,69.27],[169.31,69.08],[169.42,68.92],[169.61,68.79],[170.54,68.83],[171,69.04],[171,69.14],[170.58,69.58],[170.16,69.63],[170.5,69.86],[170.49,70.11],[172.56,69.97],[173.28,69.82],[173.44,69.95],[173.95,69.87],[174.79,69.86],[175.92,69.9],[176.93,69.65],[178.85,69.39],[178.95,69.29],[179.27,69.26],[179.87,69.01],[-180,68.98],[-179.47,68.91],[-179.28,68.82],[-178.87,68.75],[-178.54,68.58],[-178.75,68.66],[-178.69,68.55],[-178.1,68.43],[-178.02,68.32],[-178.06,68.27],[-177.8,68.34],[-178.25,68.54],[-177.53,68.3],[-177.64,68.24],[-177.59,68.22],[-177.3,68.22],[-175.35,67.68],[-175.23,67.45],[-175.37,67.36],[-175.15,67.37],[-175,67.44],[-174.85,67.35],[-174.94,67.09],[-174.78,66.92],[-174.77,66.78],[-174.92,66.62],[-174.5,66.54],[-174.39,66.34],[-174.09,66.47],[-174.02,66.38],[-174.06,66.23],[-173.78,66.43],[-174.23,66.63],[-174.06,66.69],[-174.01,66.78],[-174.09,66.94],[-174.55,67.09],[-173.68,67.14],[-173.16,67.07],[-173.34,66.91],[-173.35,66.85],[-173.26,66.84],[-173.17,66.86],[-173.23,66.97],[-173.19,66.99],[-172.96,66.94],[-172.52,66.95],[-173.01,67.06],[-171.8,66.93],[-171.36,66.68],[-170.51,66.34],[-170.47,66.32],[-170.6,66.25],[-170.3,66.29],[-170.19,66.2],[-170.24,66.17],[-169.78,66.14],[-169.73,66.06],[-169.83,66],[-170.16,66.01],[-170.54,65.86],[-170.56,65.66],[-170.67,65.62],[-171.12,65.69],[-171.42,65.81],[-171.4,65.75],[-171.13,65.63],[-171.05,65.55],[-171.1,65.51],[-171.91,65.5],[-172.28,65.58],[-172.44,65.67],[-172.78,65.68],[-172.35,65.5],[-172.42,65.45],[-172.23,65.45],[-172.31,65.28],[-172.66,65.25],[-172.29,65.2],[-172.21,65.05],[-172.59,64.91],[-173.07,64.85],[-172.8,64.79],[-172.92,64.7],[-172.9,64.63],[-172.49,64.54],[-172.38,64.43],[-172.74,64.41],[-172.79,64.5],[-172.9,64.53],[-172.95,64.51],[-172.92,64.37],[-173.01,64.3],[-173.16,64.28],[-173.38,64.35],[-173.31,64.44],[-173.33,64.54],[-173.6,64.36],[-173.73,64.36],[-174.57,64.72],[-175.04,64.81],[-175.44,64.82],[-175.85,65.01],[-175.86,65.23],[-175.92,65.35],[-176.09,65.47],[-177.06,65.61],[-177.49,65.5],[-178.41,65.49],[-178.53,65.59],[-178.5,65.74],[-178.79,65.86],[-178.94,66.03],[-178.75,66.01],[-178.59,66.2],[-178.53,66.4],[-178.87,66.19],[-179.1,66.23],[-179.14,66.37],[-179.19,66.31],[-179.34,66.29],[-179.33,66.16],[-179.61,66.13],[-179.68,66.18],[-179.79,65.9],[-179.73,65.8],[-179.37,65.64],[-179.35,65.52],[-179.7,65.19],[-180,65.07],[179.83,65.03],[179.45,64.82],[178.52,64.6],[177.75,64.72],[177.18,65.01],[176.88,65.08],[176.34,65.05],[177.04,65],[177.22,64.86],[177.07,64.79],[176.83,64.85],[176.43,64.86],[176.06,64.96],[175.78,64.84],[174.55,64.68],[175.68,64.78],[176.06,64.9],[176.25,64.84],[176.35,64.7],[176.14,64.59],[176.51,64.68],[176.84,64.63],[177.39,64.77],[177.47,64.74],[177.41,64.57],[177.43,64.44],[177.69,64.3],[178.05,64.22],[178.13,64.23],[178.23,64.36],[178.48,64.13],[178.45,64.01],[178.65,63.97],[178.69,63.84],[178.73,63.67],[178.44,63.61],[178.47,63.57],[178.65,63.56],[178.71,63.52],[178.68,63.4],[178.74,63.39],[178.79,63.54],[178.92,63.35],[179.33,63.19],[179.41,63.08],[179.26,63.01],[179.38,62.88],[179.51,62.86],[179.57,62.77],[179.57,62.69],[179.48,62.61],[179.18,62.47],[179.12,62.32],[178.02,62.55],[177.29,62.6],[177.34,62.78],[177.02,62.78],[176.97,62.66],[177.19,62.59],[177.16,62.56],[176.7,62.51],[176.33,62.35],[174.72,61.95],[174.51,61.82],[174.14,61.8],[173.82,61.68],[173.62,61.72],[173.13,61.41],[172.86,61.47],[172.81,61.44],[172.91,61.31],[172.73,61.31],[172.58,61.19],[172.4,61.17],[172.39,61.06],[170.61,60.43],[170.35,59.97],[169.98,60.07],[169.89,60.22],[169.62,60.44],[169.23,60.6],[168.46,60.59],[167.23,60.41],[166.96,60.31],[166.27,59.86],[166.19,59.85],[166.14,59.98],[166.35,60.48],[166.18,60.48],[165.94,60.36],[165.09,60.1],[165.07,59.94],[164.96,59.84],[164.78,59.87],[164.67,60],[164.44,60.07],[164.11,59.9],[164.13,59.98],[163.78,60.04],[163.49,59.89],[163.32,59.71],[163.27,59.3],[163.08,59.13],[162.94,59.12],[163,59.02],[162.97,58.99],[162.45,58.71],[162.14,58.45],[161.96,58.08],[162.04,57.92],[162.41,57.78],[162.39,57.72],[162.52,57.9],[162.66,57.95],[163.23,57.79],[163.19,57.64],[162.78,57.36],[162.76,57.24],[162.8,56.81],[162.92,56.72],[163.26,56.69],[163.24,56.56],[163.34,56.23],[163.05,56.04],[162.84,56.06],[162.63,56.23],[163.04,56.52],[162.67,56.49],[162.49,56.4],[162.53,56.26],[162.09,56.09],[161.78,55.66],[161.72,55.5],[161.78,55.21],[162.08,54.89],[162.1,54.75],[161.63,54.52],[161.29,54.52],[161.13,54.6],[160.77,54.54],[160.07,54.19],[159.92,54.01],[159.84,53.78],[159.95,53.55],[159.9,53.38],[160,53.28],[160.02,53.13],[159.77,53.23],[159.58,53.24],[158.95,53.05],[158.75,52.91],[158.57,53.05],[158.47,53.03],[158.43,52.96],[158.61,52.87],[158.48,52.63],[158.49,52.38],[158.1,51.81],[156.75,50.97],[156.67,51.23],[156.52,51.38],[156.49,51.91],[156.37,52.51],[156.23,52.63],[156.11,52.87],[155.95,53.74],[155.71,54.52],[155.56,55.2],[155.72,56.07],[156.02,56.75],[156.73,57.15],[156.85,57.29],[156.98,57.47],[156.95,57.62],[156.79,57.75],[156.87,57.8],[157.45,57.8],[157.67,58.02],[158.27,58.01],[158.45,58.16],[159.21,58.52],[159.59,58.8],[159.85,59.13],[160.55,59.55],[160.86,59.63],[161.45,60.03],[161.76,60.15],[162.07,60.47],[162.97,60.78],[163.35,60.8],[163.71,60.92],[163.56,61.03],[164.01,61.34],[163.97,61.42],[163.8,61.46],[163.88,61.64],[164.02,61.71],[164.07,62.05],[164.21,62.29],[164.6,62.47],[165.21,62.37],[165.21,62.45],[165.42,62.45],[165.4,62.49],[164.79,62.57],[164.42,62.71],[163.33,62.55],[163.25,62.46],[163.3,62.37],[163.16,62.26],[163.13,62.05],[163.02,61.89],[163.01,61.79],[163.26,61.7],[163.09,61.57],[162.99,61.54],[162.86,61.71],[162.75,61.71],[162.7,61.65],[162.39,61.66],[161.04,60.96],[160.77,60.75],[160.48,60.74],[160.17,60.64],[160.23,60.83],[160.38,61.02],[160.19,61.05],[159.79,60.96],[159.95,61.13],[159.88,61.29],[160.25,61.65],[160.31,61.89],[160.18,61.9],[159.55,61.72],[159.3,61.91],[159.19,61.93],[158.07,61.75],[157.47,61.8],[157.09,61.68],[156.68,61.48],[156.63,61.27],[156.06,61],[155.72,60.68],[154.97,60.38],[154.58,60.1],[154.44,59.88],[154.29,59.83],[154.27,59.66],[154.15,59.53],[154.27,59.47],[154.58,59.54],[154.97,59.45],[155.17,59.36],[155.16,59.19],[154.7,59.14],[154.46,59.22],[154.25,59.11],[154.01,59.08],[153.69,59.22],[153.36,59.21],[153.27,59.09],[153.08,59.08],[152.82,58.93],[152.32,59.03],[152.16,59],[152.09,58.91],[151.33,58.88],[151.12,59.08],[151.51,59.16],[151.99,59.16],[152.26,59.22],[152.17,59.28],[151.8,59.32],[151.35,59.56],[151.03,59.59],[150.82,59.46],[150.48,59.5],[150.67,59.56],[149.64,59.77],[149.42,59.76],[149.06,59.63],[149.21,59.49],[148.92,59.47],[148.8,59.53],[148.71,59.45],[148.74,59.37],[148.96,59.37],[148.91,59.28],[148.73,59.26],[148.49,59.26],[148.26,59.41],[147.87,59.39],[147.51,59.27],[146.54,59.46],[146.44,59.43],[146.27,59.22],[146.05,59.17],[145.93,59.2],[145.76,59.37],[145.55,59.41],[144.48,59.38],[143.87,59.41],[143.52,59.34],[143.19,59.37],[142.33,59.15],[142.03,59],[141.6,58.65],[140.79,58.3],[140.68,58.21],[140.45,57.81],[140,57.69],[139.8,57.51],[139.45,57.33],[139.18,57.26],[138.97,57.09],[138.66,56.97],[137.69,56.14],[136.46,55.58],[136.18,55.35],[135.54,55.11],[135.26,54.94],[135.21,54.84],[135.26,54.73],[135.85,54.58],[136.8,54.62],[136.82,54.45],[136.68,53.93],[136.72,53.8],[136.8,53.78],[136.89,53.84],[137.16,53.82],[137.26,54.03],[137.09,54.13],[137.14,54.18],[137.38,54.28],[137.67,54.28],[137.34,54.1],[137.62,53.97],[137.84,53.95],[137.65,53.87],[137.52,53.71],[137.22,53.58],[137.25,53.55],[137.95,53.6],[138.25,53.73],[138.38,53.91],[138.53,53.96],[138.57,53.82],[138.25,53.52],[138.45,53.54],[138.66,53.75],[138.7,53.87],[138.71,54.22],[138.66,54.3],[139.32,54.19],[139.71,54.28],[140.18,54.05],[140.35,53.81],[140.69,53.6],[141.38,53.29],[141.4,53.18],[141.18,53.01],[140.84,53.09],[141.09,52.9],[141.26,52.84],[141.25,52.55],[141.13,52.43],[141.49,52.18],[141.39,52.06],[141.37,51.92],[140.93,51.62],[140.69,51.23],[140.67,51.05],[140.52,50.8],[140.48,50.55],[140.54,50.13],[140.62,50.08],[140.46,49.91],[140.52,49.6],[140.32,49.12],[140.31,49.05],[140.38,48.96],[140.22,48.77],[140.11,48.42],[139.37,47.89],[139,47.38],[138.59,47.06],[138.39,46.74],[138.34,46.54],[138.21,46.46],[138.11,46.25],[137.69,45.82],[136.8,45.17],[136.25,44.67],[136.14,44.49],[135.87,44.37],[135.53,43.97],[135.48,43.83],[135.26,43.69],[135.13,43.53],[134.01,42.95],[133.16,42.7],[133.06,42.72],[133,42.81],[132.86,42.79],[132.71,42.88],[132.3,42.88],[132.31,43.31],[132.03,43.12],[131.87,43.1],[132.01,43.28],[131.94,43.3],[131.72,43.2],[131.16,42.63],[130.71,42.66],[130.83,42.52],[130.69,42.3]]]},{id:`643`,name:`Russia`,rings:[[[35.81,65.18],[35.86,65.08],[35.84,65],[35.78,64.98],[35.53,65.15],[35.81,65.18]]]},{id:`643`,name:`Russia`,rings:[[[42.71,66.7],[42.46,66.77],[42.63,66.78],[42.71,66.7]]]},{id:`643`,name:`Russia`,rings:[[[20.96,55.28],[20.59,54.98],[20.89,54.91],[21.19,54.93],[21.23,55.26],[21.39,55.27],[22.07,55.06],[22.57,55.06],[22.63,54.97],[22.83,54.87],[22.69,54.56],[22.76,54.36],[19.6,54.46],[19.86,54.63],[19.97,54.92],[20.52,55],[20.9,55.29],[20.96,55.28]]]},{id:`643`,name:`Russia`,rings:[[[33.59,46.1],[33.66,46.22],[33.81,46.21],[34.03,46.11],[34.35,46.06],[34.45,45.97],[34.69,45.98],[34.79,45.89],[34.8,45.79],[35,45.73],[35.26,45.45],[35.46,45.32],[35.83,45.4],[36.01,45.37],[36.17,45.45],[36.57,45.39],[36.39,45.07],[35.87,45],[35.68,45.1],[35.47,45.1],[35.09,44.8],[34.72,44.81],[34.47,44.72],[34.08,44.42],[33.76,44.4],[33.45,44.55],[33.61,44.91],[33.55,45.1],[33.39,45.19],[33.19,45.19],[32.92,45.35],[32.61,45.33],[32.51,45.4],[33.14,45.75],[33.67,45.95],[33.59,46.1]]]},{id:`642`,name:`Romania`,rings:[[[28.21,45.45],[28.32,45.35],[28.76,45.23],[28.78,45.31],[28.9,45.29],[29.4,45.42],[29.71,45.26],[29.56,44.84],[29.05,44.76],[29.05,44.92],[29.09,44.98],[28.98,44.99],[28.89,44.92],[28.92,44.81],[28.81,44.57],[28.89,44.57],[28.64,44.3],[28.66,43.98],[28.59,43.74],[28.22,43.77],[28.05,43.82],[27.88,43.99],[27.74,43.96],[27.43,44.02],[27.09,44.17],[26.22,44.01],[25.82,43.77],[25.5,43.67],[23.23,43.87],[22.92,43.83],[22.87,43.95],[23.03,44.08],[22.7,44.24],[22.49,44.44],[22.55,44.54],[22.7,44.56],[22.72,44.61],[22.5,44.71],[22.09,44.54],[21.91,44.67],[21.36,44.83],[21.53,44.9],[21.35,45.01],[21.49,45.15],[21.02,45.32],[20.77,45.48],[20.77,45.75],[20.71,45.74],[20.24,46.11],[20.51,46.17],[20.61,46.13],[20.76,46.25],[21.12,46.28],[21.26,46.41],[21.32,46.61],[21.5,46.7],[21.48,46.75],[21.66,47.04],[21.99,47.4],[22,47.5],[22.29,47.73],[22.61,47.77],[23.14,48.09],[23.41,47.99],[24.18,47.91],[24.58,47.93],[24.89,47.72],[25.46,47.91],[26.16,47.99],[26.31,48.2],[26.71,48.26],[26.98,48.16],[27.61,47.34],[28.07,46.98],[28.24,46.64],[28.24,46.45],[28.1,45.97],[28.16,45.65],[28.07,45.6],[28.21,45.45]]]},{id:`620`,name:`Portugal`,rings:[[[-8.78,41.94],[-8.59,42.05],[-8.27,42.14],[-8.14,42.04],[-8.22,41.9],[-8.15,41.81],[-7.92,41.88],[-7.4,41.83],[-7.21,41.9],[-7.15,41.98],[-6.62,41.94],[-6.56,41.87],[-6.54,41.67],[-6.31,41.64],[-6.21,41.53],[-6.93,41.01],[-6.83,40.78],[-6.85,40.44],[-6.81,40.34],[-7.03,40.17],[-6.9,40.02],[-6.98,39.8],[-7.12,39.68],[-7.54,39.66],[-7.34,39.47],[-7.17,39.14],[-7,39.06],[-7.05,38.91],[-7.28,38.72],[-7.34,38.46],[-7.1,38.18],[-6.96,38.19],[-7.02,38.05],[-7.18,38.01],[-7.44,37.73],[-7.5,37.59],[-7.41,37.18],[-7.84,37.01],[-8.6,37.12],[-9,37.03],[-8.81,37.43],[-8.79,37.73],[-8.88,37.96],[-8.81,38.3],[-8.88,38.45],[-8.67,38.42],[-8.8,38.52],[-9.21,38.45],[-9.25,38.66],[-9.02,38.75],[-8.94,39],[-8.79,39.08],[-8.96,39.02],[-9.14,38.74],[-9.36,38.7],[-9.47,38.73],[-9.35,39.25],[-9.38,39.34],[-9.15,39.54],[-8.84,40.12],[-8.87,40.26],[-8.69,40.75],[-8.66,41.09],[-8.81,41.65],[-8.76,41.7],[-8.85,41.7],[-8.89,41.77],[-8.78,41.94]]]},{id:`616`,name:`Poland`,rings:[[[23.6,51.52],[23.68,51.4],[23.66,51.31],[24.1,50.87],[23.98,50.79],[24.09,50.62],[24.09,50.53],[23.97,50.41],[23.71,50.38],[23.41,50.17],[22.65,49.54],[22.73,49.29],[22.71,49.17],[22.85,49.08],[22.81,49.02],[22.02,49.21],[21.89,49.34],[21.64,49.41],[21.08,49.42],[21,49.34],[20.87,49.32],[20.62,49.39],[20.36,49.38],[20.16,49.32],[20.06,49.18],[19.76,49.2],[19.77,49.37],[19.63,49.41],[19.44,49.6],[19.25,49.51],[19.15,49.4],[18.97,49.4],[18.94,49.5],[18.83,49.51],[18.81,49.61],[18.6,49.76],[18.56,49.88],[18.3,49.91],[18.03,50.04],[17.88,49.97],[17.63,50.12],[17.59,50.16],[17.74,50.23],[17.7,50.31],[17.42,50.25],[17.15,50.38],[16.88,50.43],[16.99,50.24],[16.64,50.1],[16.21,50.42],[16.42,50.57],[16.28,50.66],[16.01,50.61],[15.73,50.74],[15.36,50.81],[15.26,50.96],[14.99,51.01],[14.98,50.89],[14.81,50.86],[15.02,51.25],[14.91,51.46],[14.73,51.52],[14.74,51.63],[14.6,51.83],[14.75,52.08],[14.68,52.25],[14.55,52.36],[14.62,52.53],[14.13,52.88],[14.37,53.1],[14.41,53.22],[14.26,53.73],[14.58,53.64],[14.56,53.82],[14.21,53.87],[14.2,53.92],[16.19,54.29],[16.56,54.55],[16.89,54.6],[17.26,54.73],[18.08,54.84],[18.32,54.84],[18.76,54.68],[18.8,54.63],[18.44,54.75],[18.59,54.51],[18.67,54.43],[18.98,54.35],[19.41,54.39],[19.6,54.46],[22.17,54.36],[22.89,54.39],[23.45,54.14],[23.6,53.6],[23.89,53.03],[23.9,52.7],[23.41,52.52],[23.18,52.29],[23.65,52.04],[23.63,51.81],[23.55,51.71],[23.6,51.52]]]},{id:`578`,name:`Norway`,rings:[[[20.62,69.04],[20.12,69.02],[20.35,68.85],[20.24,68.67],[19.97,68.54],[20.24,68.48],[19.97,68.36],[18.3,68.56],[18.16,68.53],[18.18,68.2],[17.92,67.97],[17.33,68.1],[16.79,67.9],[16.59,67.63],[16.19,67.51],[16.13,67.43],[16.44,67.15],[16.4,67.06],[15.42,66.49],[15.49,66.31],[15.04,66.17],[14.54,66.13],[14.64,65.79],[14.55,65.65],[14.48,65.3],[13.65,64.58],[14.08,64.46],[14.15,64.26],[14.14,64.17],[14.06,64.1],[13.96,64.01],[13.2,64.07],[12.79,64],[12.17,63.6],[12.21,63.49],[12,63.29],[12.22,63],[12.11,62.92],[12.12,62.59],[12.3,62.28],[12.16,61.72],[12.59,61.54],[12.88,61.35],[12.71,61.06],[12.3,61],[12.31,60.89],[12.59,60.45],[12.49,60.11],[12.17,59.91],[11.93,59.86],[11.84,59.7],[11.68,59.59],[11.8,59.29],[11.64,58.93],[11.47,58.91],[11.37,59.1],[10.83,59.18],[10.64,59.39],[10.6,59.76],[10.54,59.7],[10.57,59.59],[10.4,59.52],[10.46,59.38],[10.43,59.28],[10.18,59.01],[9.84,58.96],[9.64,59.12],[9.56,59.11],[9.7,59.01],[9.66,58.97],[9.31,58.86],[9.39,58.81],[9.32,58.75],[8.17,58.14],[7.46,58.02],[7,58.02],[6.9,58.07],[6.88,58.15],[6.8,58.16],[6.73,58.07],[6.59,58.1],[6.55,58.12],[6.69,58.22],[6.66,58.26],[6.39,58.27],[6.05,58.38],[5.71,58.52],[5.52,58.73],[5.56,58.97],[5.61,59.01],[6.1,58.87],[6.36,59],[6.1,58.95],[5.89,59.1],[5.97,59.19],[5.95,59.3],[6.4,59.56],[5.56,59.29],[5.36,59.17],[5.17,59.16],[5.13,59.23],[5.19,59.45],[5.3,59.64],[5.47,59.71],[5.77,59.66],[5.87,59.73],[6.22,59.82],[5.83,59.8],[5.73,59.86],[6.07,60.08],[6.14,60.23],[6.52,60.41],[6.57,60.36],[6.53,60.15],[6.72,60.42],[7,60.51],[6.15,60.35],[5.91,60.15],[5.88,60.07],[5.7,60.01],[5.5,59.83],[5.15,59.64],[5.12,59.83],[5.22,59.98],[5.18,60.05],[5.21,60.09],[5.5,60.07],[5.69,60.12],[5.29,60.21],[5.14,60.44],[5.65,60.69],[5.24,60.57],[5.12,60.64],[5.05,60.71],[5.01,61.04],[5.99,61.12],[6.42,61.08],[6.78,61.14],[6.97,61.06],[7.04,60.95],[7.08,60.97],[7.04,61.09],[7.61,61.21],[7.4,61.22],[7.35,61.3],[7.44,61.43],[7.33,61.37],[7.28,61.18],[7.17,61.17],[6.66,61.21],[6.6,61.29],[6.49,61.15],[6.38,61.13],[6.08,61.17],[5.33,61.11],[5.11,61.19],[5.02,61.25],[5,61.43],[5.34,61.48],[4.93,61.71],[4.93,61.88],[5.47,61.9],[6.02,61.79],[6.73,61.87],[6.13,61.85],[5.27,61.94],[5.1,62.03],[5.14,62.16],[5.36,62.15],[5.54,62.31],[5.91,62.42],[6.08,62.35],[6.58,62.41],[6.69,62.47],[6.14,62.41],[6.12,62.45],[6.35,62.61],[6.96,62.63],[7.49,62.54],[7.69,62.59],[7.53,62.61],[7.54,62.67],[8.09,62.73],[8.04,62.77],[6.73,62.72],[6.94,62.93],[7.57,63.1],[8.1,63.09],[8.21,62.99],[8.62,62.85],[8.16,63.16],[8.27,63.29],[8.63,63.34],[8.6,63.43],[8.39,63.44],[8.36,63.5],[8.67,63.62],[9.14,63.59],[9.08,63.5],[9.16,63.46],[9.32,63.57],[9.7,63.63],[10.02,63.39],[10.19,63.46],[10.76,63.46],[10.67,63.56],[10.73,63.63],[11.37,63.81],[11.18,63.9],[11.43,64.02],[11.31,64.05],[11.08,63.99],[10.91,63.92],[11.05,63.85],[10.94,63.77],[10.06,63.51],[9.92,63.52],[9.77,63.7],[9.6,63.68],[9.61,63.8],[9.87,63.92],[10.01,64.08],[10.24,64.18],[10.56,64.42],[11.53,64.74],[11.63,64.81],[11.56,64.82],[11.3,64.76],[11.35,64.91],[11.49,64.98],[12.16,65.18],[12.31,65.09],[12.51,65.1],[12.74,65.21],[12.92,65.34],[12.42,65.18],[12.13,65.28],[12.12,65.36],[12.27,65.57],[12.63,65.81],[12.69,65.9],[13.03,65.96],[12.79,66.1],[13.67,66.18],[14.03,66.3],[13.12,66.23],[13.07,66.43],[13.11,66.54],[13.19,66.54],[13.21,66.64],[13.62,66.8],[13.96,66.8],[13.65,66.91],[13.88,66.97],[14.11,67.12],[15.42,67.2],[15.44,67.25],[15.3,67.26],[14.44,67.27],[14.75,67.5],[14.96,67.57],[15.41,67.47],[15.59,67.35],[15.58,67.44],[15.69,67.52],[15.49,67.52],[15.25,67.6],[15.22,67.66],[15.35,67.73],[15.31,67.77],[14.86,67.66],[14.78,67.68],[14.8,67.81],[15.13,67.97],[15.4,67.92],[15.62,67.95],[15.6,67.99],[15.36,68],[15.29,68.04],[15.32,68.07],[16.01,68.23],[16.07,68.2],[16.12,68.03],[16.31,67.88],[16.26,68],[16.39,68.09],[16.26,68.14],[16.17,68.28],[16.21,68.32],[16.39,68.39],[16.95,68.35],[17.55,68.43],[17.43,68.48],[16.58,68.47],[16.52,68.53],[16.65,68.63],[17.13,68.69],[17.39,68.8],[17.54,69],[17.7,69.1],[18.1,69.16],[18.08,69.32],[18.26,69.47],[18.48,69.36],[18.86,69.31],[18.92,69.33],[18.62,69.43],[18.61,69.49],[18.99,69.56],[19.04,69.66],[19.2,69.75],[19.69,69.81],[19.72,69.78],[19.64,69.42],[19.96,69.82],[20.32,69.95],[20.39,69.87],[20.34,69.62],[20.04,69.36],[20.11,69.34],[20.49,69.54],[20.74,69.52],[20.53,69.69],[20.55,69.85],[20.62,69.91],[21.16,69.89],[21.25,70],[21.43,70.01],[21.98,69.83],[21.89,70],[21.8,70.07],[21.4,70.18],[21.36,70.23],[21.78,70.23],[22.22,70.31],[22.32,70.27],[22.42,70.34],[22.69,70.37],[22.94,70.31],[23.05,70.1],[23.36,69.98],[23.4,70.02],[23.29,70.11],[23.38,70.25],[23.66,70.4],[24.04,70.49],[24.42,70.7],[24.27,70.77],[24.26,70.83],[24.66,71],[25.26,70.84],[25.44,70.91],[25.77,70.85],[25.78,70.82],[25.27,70.55],[25.15,70.32],[24.99,70.22],[24.98,70.14],[25.04,70.11],[25.21,70.14],[25.42,70.24],[25.47,70.34],[26.51,70.91],[26.66,70.94],[26.74,70.85],[26.56,70.67],[26.65,70.64],[26.58,70.41],[26.99,70.51],[27.18,70.74],[27.31,70.8],[27.55,70.8],[27.24,70.95],[27.6,71.09],[28.39,70.98],[28.38,70.87],[28.33,70.82],[27.9,70.68],[28.27,70.67],[28.2,70.58],[28.19,70.25],[28.61,70.76],[28.83,70.86],[29.1,70.86],[29.74,70.65],[30.07,70.7],[30.24,70.62],[30.21,70.54],[30.59,70.52],[30.93,70.4],[30.94,70.27],[30.26,70.12],[28.78,70.15],[28.81,70.09],[29.6,69.98],[29.65,69.94],[29.64,69.78],[29.79,69.73],[30.09,69.72],[30.24,69.86],[30.35,69.83],[30.43,69.72],[30.48,69.79],[30.87,69.78],[30.92,69.65],[30.9,69.56],[30.62,69.53],[30.16,69.63],[30.19,69.54],[30.09,69.43],[29.39,69.3],[29.17,69.07],[28.96,69.02],[28.83,69.12],[28.85,69.18],[29.33,69.47],[29.14,69.67],[28.41,69.82],[27.89,70.06],[27.75,70.06],[27.13,69.91],[26.53,69.91],[26.07,69.69],[25.77,69.28],[25.75,68.99],[25.58,68.89],[25.25,68.82],[25.09,68.64],[24.94,68.59],[24,68.8],[23.86,68.81],[23.71,68.71],[23.32,68.65],[22.41,68.72],[22.3,68.86],[21.59,69.27],[21.27,69.27],[21.07,69.21],[21.13,69.08],[21.07,69.04],[20.62,69.04]]]},{id:`578`,name:`Norway`,rings:[[[4.96,61.09],[4.8,61.08],[4.83,61.18],[4.92,61.2],[4.97,61.15],[4.96,61.09]]]},{id:`578`,name:`Norway`,rings:[[[5.09,60.31],[5.09,60.19],[4.96,60.24],[4.96,60.45],[5.09,60.31]]]},{id:`578`,name:`Norway`,rings:[[[29.96,69.8],[29.75,69.79],[29.84,69.91],[30.05,69.84],[29.96,69.8]]]},{id:`578`,name:`Norway`,rings:[[[11.97,65.63],[11.77,65.63],[11.87,65.71],[12,65.68],[11.97,65.63]]]},{id:`578`,name:`Norway`,rings:[[[8.47,63.67],[8.29,63.69],[8.73,63.8],[8.81,63.77],[8.79,63.7],[8.47,63.67]]]},{id:`578`,name:`Norway`,rings:[[[8.1,63.34],[7.89,63.35],[7.8,63.41],[8.07,63.47],[8.14,63.43],[8.1,63.34]]]},{id:`578`,name:`Norway`,rings:[[[23.44,70.82],[23.07,70.59],[22.83,70.54],[22.36,70.52],[21.99,70.66],[22.96,70.71],[23.2,70.82],[23.44,70.82]]]},{id:`578`,name:`Norway`,rings:[[[25.59,71.14],[26.15,71.04],[26.13,71],[26,70.98],[25.58,70.96],[25.31,71.05],[25.59,71.14]]]},{id:`578`,name:`Norway`,rings:[[[23.61,70.55],[23.64,70.46],[23.27,70.3],[23.1,70.3],[23.09,70.38],[22.92,70.39],[23.02,70.49],[23.25,70.5],[23.55,70.62],[23.61,70.55]]]},{id:`578`,name:`Norway`,rings:[[[24.02,70.57],[23.83,70.53],[23.67,70.6],[23.66,70.68],[23.78,70.75],[23.96,70.7],[24.08,70.65],[24.02,70.57]]]},{id:`578`,name:`Norway`,rings:[[[13.87,68.27],[14.12,68.25],[14.03,68.19],[13.49,68.05],[13.42,68.08],[13.39,68.02],[13.23,67.99],[13.2,68.09],[13.3,68.16],[13.43,68.16],[13.54,68.25],[13.87,68.27]]]},{id:`578`,name:`Norway`,rings:[[[12.97,67.87],[12.83,67.82],[12.96,68.02],[13.12,68.05],[13.1,67.96],[12.97,67.87]]]},{id:`578`,name:`Norway`,rings:[[[15.21,68.94],[15.4,68.78],[15.35,68.67],[15.22,68.62],[14.89,68.61],[14.74,68.68],[14.52,68.63],[14.37,68.71],[14.55,68.82],[14.8,68.79],[14.87,68.91],[15.04,68.89],[15.04,69],[15.21,68.94]]]},{id:`578`,name:`Norway`,rings:[[[19.77,70.22],[20.09,70.1],[19.78,70.08],[19.6,70.27],[19.77,70.22]]]},{id:`578`,name:`Norway`,rings:[[[20.78,70.09],[20.46,70.08],[20.41,70.15],[20.78,70.22],[20.82,70.2],[20.78,70.09]]]},{id:`578`,name:`Norway`,rings:[[[19.25,70.07],[19.34,70.01],[19.61,70.02],[19.59,69.97],[19.33,69.82],[19.01,69.76],[18.78,69.58],[18.28,69.54],[18.06,69.6],[18.23,69.64],[18.35,69.77],[18.68,69.78],[18.69,69.89],[18.88,70.01],[19.05,70.04],[19.06,70.17],[19.13,70.24],[19.21,70.25],[19.25,70.07]]]},{id:`578`,name:`Norway`,rings:[[[12.51,65.9],[12.43,65.9],[12.43,65.94],[12.55,66],[12.78,65.99],[12.51,65.9]]]},{id:`578`,name:`Norway`,rings:[[[12.42,66.04],[12.33,66.04],[12.46,66.19],[12.62,66.18],[12.58,66.07],[12.42,66.04]]]},{id:`578`,name:`Norway`,rings:[[[11.23,64.87],[10.74,64.87],[11.02,64.98],[11.13,64.98],[11.24,64.91],[11.23,64.87]]]},{id:`578`,name:`Norway`,rings:[[[17.5,69.6],[18.01,69.5],[18.08,69.4],[17.94,69.33],[17.95,69.2],[17.57,69.16],[17.49,69.2],[17.08,69.01],[16.81,69.07],[16.97,69.14],[17,69.36],[17.36,69.38],[17.37,69.44],[17.23,69.48],[17.45,69.53],[17.5,69.6]]]},{id:`578`,name:`Norway`,rings:[[[15.76,68.56],[16.06,68.68],[16.15,68.84],[16.33,68.88],[16.48,68.8],[16.55,68.72],[16.52,68.63],[16.19,68.54],[15.98,68.4],[15.76,68.41],[15.44,68.31],[15.28,68.37],[15.19,68.31],[14.93,68.31],[14.63,68.2],[14.26,68.19],[14.26,68.26],[14.59,68.4],[15.1,68.44],[15.41,68.62],[15.56,68.87],[15.44,68.92],[15.48,69.04],[15.96,69.3],[16.13,69.27],[16.12,69.22],[15.81,69.02],[15.91,68.91],[15.93,68.73],[15.76,68.56]]]},{id:`578`,name:`Norway`,rings:[[[-8.96,70.84],[-9.1,70.86],[-8.52,71.03],[-8.34,71.14],[-8,71.18],[-7.98,71.12],[-8,71.04],[-8.96,70.84]]]},{id:`528`,name:`Netherlands`,rings:[[[5.99,50.75],[5.75,50.76],[5.64,50.84],[5.75,50.95],[5.82,51.09],[5.8,51.15],[5.48,51.29],[5.21,51.28],[5.1,51.35],[5.03,51.47],[4.85,51.4],[4.76,51.49],[4.64,51.42],[4.5,51.47],[4.38,51.43],[4.37,51.36],[4.01,51.44],[3.82,51.41],[3.59,51.45],[3.45,51.54],[3.74,51.6],[4.14,51.46],[4.28,51.47],[4.01,51.6],[4.18,51.61],[3.95,51.81],[4.08,51.99],[4.48,52.31],[4.77,52.94],[4.89,52.91],[5.06,52.96],[5.36,53.1],[5.53,53.27],[5.87,53.38],[6.82,53.44],[6.97,53.33],[7.2,53.28],[7.19,53],[7.03,52.65],[6.75,52.63],[6.69,52.53],[6.75,52.46],[7,52.42],[7.02,52.27],[6.72,52.08],[6.8,51.98],[6.74,51.91],[6.36,51.82],[6.17,51.88],[5.95,51.8],[6.2,51.45],[6.08,51.22],[6.13,51.15],[5.86,51.03],[6.05,50.91],[5.99,50.75]]]},{id:`528`,name:`Netherlands`,rings:[[[4.22,51.39],[4.17,51.31],[3.9,51.21],[3.58,51.29],[3.43,51.25],[3.35,51.38],[4.22,51.39]]]},{id:`528`,name:`Netherlands`,rings:[[[4.89,53.07],[4.79,53],[4.71,53.04],[4.89,53.18],[4.89,53.07]]]},{id:`528`,name:`Netherlands`,rings:[[[3.95,51.74],[4.07,51.65],[3.95,51.63],[3.7,51.71],[3.95,51.74]]]},{id:`528`,name:`Netherlands`,rings:[[[6.73,53.58],[6.64,53.58],[6.76,53.63],[6.8,53.63],[6.73,53.58]]]},{id:`504`,name:`Morocco`,rings:[[[-2.22,35.1],[-2.13,34.97],[-1.79,34.75],[-1.85,34.61],[-1.73,34.47],[-1.79,34.37],[-1.71,34.18],[-1.72,33.78],[-1.63,33.57],[-1.68,33.32],[-1.45,32.79],[-1.06,32.47],[-1.24,32.34],[-1.23,32.11],[-2.45,32.13],[-2.86,32.08],[-2.93,32.04],[-3.02,31.83],[-3.44,31.71],[-3.77,31.69],[-3.85,31.62],[-3.79,31.36],[-3.83,31.2],[-3.62,31.07],[-3.67,30.96],[-3.99,30.91],[-4.32,30.7],[-4.97,30.47],[-5.18,30.17],[-5.45,29.96],[-6,29.83],[-6.48,29.82],[-6.52,29.66],[-6.64,29.57],[-7.16,29.61],[-7.49,29.39],[-7.68,29.35],[-8.66,28.72],[-8.69,27.66],[-8.82,27.66],[-8.75,27.19],[-8.79,27.12],[-9.41,27.09],[-9.82,26.85],[-10.03,26.91],[-10.25,26.86],[-10.76,27.02],[-11.39,26.88],[-11.32,26.75],[-11.34,26.63],[-11.64,26.3],[-11.72,26.1],[-12.06,25.99],[-12.43,24.83],[-13.06,24.4],[-13.31,23.98],[-13.77,23.79],[-13.89,23.69],[-14.04,23.34],[-14.22,22.31],[-14.63,21.86],[-14.61,21.75],[-14.75,21.5],[-14.97,21.44],[-16.04,21.5],[-17,21.42],[-16.93,21.9],[-16.79,22.16],[-16.68,22.27],[-16.52,22.33],[-16.36,22.59],[-16.3,22.83],[-16.17,23.03],[-16.21,23.1],[-15.79,23.79],[-15.8,23.84],[-15.98,23.67],[-15.9,23.84],[-15.59,24.07],[-15.19,24.48],[-15.04,24.55],[-14.91,24.72],[-14.79,25.4],[-14.41,26.25],[-13.58,26.74],[-13.18,27.65],[-12.95,27.91],[-11.99,28.13],[-11.55,28.31],[-11.08,28.71],[-10.49,29.06],[-10.2,29.38],[-9.67,30.11],[-9.65,30.45],[-9.88,30.72],[-9.81,31.42],[-9.68,31.71],[-9.35,32.09],[-9.25,32.57],[-8.51,33.25],[-6.9,33.97],[-6.35,34.78],[-5.92,35.79],[-5.62,35.83],[-5.4,35.93],[-5.28,35.9],[-5.34,35.86],[-5.34,35.74],[-5.25,35.61],[-4.84,35.28],[-4.63,35.21],[-4.33,35.16],[-3.69,35.28],[-3.39,35.21],[-3.21,35.24],[-2.97,35.41],[-2.84,35.13],[-2.22,35.1]]]},{id:`499`,name:`Montenegro`,rings:[[[19.19,43.53],[19.22,43.45],[19.61,43.17],[19.94,43.08],[20.35,42.85],[20.19,42.75],[20.05,42.76],[20.06,42.55],[19.79,42.48],[19.73,42.64],[19.65,42.63],[19.28,42.17],[19.36,42.07],[19.34,41.87],[19.19,41.95],[18.89,42.25],[18.63,42.38],[18.65,42.44],[18.52,42.43],[18.44,42.52],[18.55,42.64],[18.47,42.78],[18.46,43],[18.62,43.03],[18.68,43.23],[18.85,43.35],[19.03,43.29],[18.95,43.53],[19.19,43.53]]]},{id:`498`,name:`Moldova`,rings:[[[26.62,48.26],[26.85,48.39],[27.23,48.37],[27.55,48.48],[27.82,48.42],[28.09,48.26],[28.29,48.24],[28.35,48.21],[28.34,48.15],[28.46,48.09],[28.53,48.15],[28.77,48.12],[28.92,47.95],[29.13,47.96],[29.21,47.78],[29.13,47.49],[29.54,47.27],[29.51,47.09],[29.57,46.96],[29.88,46.83],[29.94,46.72],[29.93,46.54],[30.13,46.42],[29.84,46.35],[29.71,46.45],[29.62,46.4],[29.31,46.47],[29.21,46.38],[29.19,46.52],[28.96,46.46],[28.94,46.29],[29.01,46.18],[28.95,46.05],[28.74,45.94],[28.73,45.85],[28.49,45.67],[28.5,45.52],[28.21,45.45],[28.07,45.6],[28.16,45.65],[28.1,45.97],[28.24,46.45],[28.24,46.64],[28.07,46.98],[27.61,47.34],[26.98,48.16],[26.79,48.26],[26.62,48.26]]]},{id:`470`,name:`Malta`,rings:[[[14.57,35.85],[14.44,35.82],[14.35,35.87],[14.35,35.98],[14.57,35.85]]]},{id:`470`,name:`Malta`,rings:[[[14.31,36.03],[14.18,36.06],[14.26,36.08],[14.31,36.03]]]},{id:`807`,name:`Macedonia`,rings:[[[21.56,42.25],[22.28,42.35],[22.58,42.11],[22.8,42.03],[23,41.74],[22.93,41.36],[22.78,41.33],[22.73,41.18],[22.6,41.14],[21.99,41.13],[21.78,40.95],[21.58,40.87],[21.4,40.91],[20.96,40.85],[20.87,40.92],[20.74,40.91],[20.49,41.27],[20.45,41.52],[20.51,41.57],[20.55,41.86],[20.72,41.87],[20.78,42.07],[21.06,42.17],[21.29,42.1],[21.39,42.22],[21.56,42.25]]]},{id:`442`,name:`Luxembourg`,rings:[[[6.12,50.12],[6.11,50.03],[6.2,49.92],[6.49,49.8],[6.35,49.45],[6.18,49.5],[6.01,49.45],[5.79,49.54],[5.88,49.65],[5.73,49.81],[5.74,49.92],[5.98,50.17],[6.12,50.12]]]},{id:`440`,name:`Lithuania`,rings:[[[20.96,55.28],[20.9,55.29],[21.12,55.62],[21.11,55.49],[20.96,55.28]]]},{id:`440`,name:`Lithuania`,rings:[[[22.76,54.36],[22.69,54.56],[22.83,54.87],[22.63,54.97],[22.57,55.06],[22.07,55.06],[21.39,55.27],[21.23,55.26],[21.24,55.46],[21.06,55.81],[21.05,56.07],[21.65,56.31],[22.08,56.41],[22.88,56.4],[23.04,56.32],[23.2,56.37],[24.12,56.26],[24.47,56.28],[24.7,56.38],[24.9,56.4],[25.07,56.2],[25.66,56.1],[26.28,55.75],[26.6,55.67],[26.46,55.34],[26.78,55.27],[26.6,55.13],[26.29,55.14],[26.17,55],[25.86,54.92],[25.72,54.72],[25.72,54.56],[25.55,54.33],[25.75,54.26],[25.76,54.18],[25.68,54.14],[25.51,54.16],[25.46,54.29],[25.05,54.13],[24.87,54.14],[24.77,53.97],[24.32,53.89],[24.19,53.95],[23.56,53.92],[23.48,53.94],[23.48,54.08],[23.37,54.2],[22.89,54.39],[22.76,54.36]]]},{id:`438`,name:`Liechtenstein`,rings:[[[9.58,47.06],[9.49,47.06],[9.53,47.27],[9.61,47.11],[9.58,47.06]]]},{id:`434`,name:`Libya`,rings:[[[9.52,30.23],[9.89,30.39],[10.22,30.78],[10.26,30.94],[10.11,31.46],[10.28,31.68],[10.47,31.74],[10.61,31.93],[10.83,32.08],[11.5,32.41],[11.53,32.52],[11.45,32.64],[11.5,33.18],[11.81,33.09],[12.28,32.86],[12.75,32.8],[13.28,32.92],[14.16,32.71],[14.51,32.51],[15.18,32.39],[15.36,32.16],[15.36,31.97],[15.5,31.66],[15.71,31.43],[16.12,31.26],[16.78,31.21],[17.83,30.93],[18.19,30.78],[18.67,30.42],[18.94,30.29],[19.13,30.27],[19.29,30.29],[19.71,30.49],[20.11,30.96],[20.14,31.19],[19.96,31.56],[19.93,31.82],[20.03,32.11],[20.37,32.43],[21.06,32.78],[21.43,32.8],[21.63,32.94],[22.19,32.92],[23.09,32.62],[23.11,32.33],[23.29,32.21],[23.8,32.16],[24.13,32.01],[24.68,32.02],[24.95,31.95],[25.15,31.65],[24.85,31.34],[24.98,30.78],[24.88,30.46],[24.7,30.2],[24.98,29.18],[24.98,20],[23.98,20],[23.98,19.5],[15.98,23.45],[14.21,22.62],[13.48,23.18],[11.97,23.52],[11.51,24.32],[10.69,24.55],[10.44,24.48],[10.33,24.53],[10.12,24.79],[10,25.33],[9.42,26.15],[9.49,26.33],[9.86,26.55],[9.89,26.85],[9.79,27.04],[9.75,27.33],[9.92,27.79],[9.82,28.56],[9.82,29.12],[9.64,29.64],[9.31,30.12],[9.52,30.23]]]},{id:`422`,name:`Lebanon`,rings:[[[35.98,34.63],[36.38,34.66],[36.43,34.61],[36.33,34.5],[36.51,34.43],[36.59,34.22],[36.3,33.96],[36.28,33.89],[36.37,33.84],[36.09,33.83],[36.02,33.78],[35.94,33.67],[36.02,33.56],[35.6,33.24],[35.53,33.25],[35.49,33.12],[35.41,33.07],[35.11,33.08],[35.61,34.03],[35.65,34.25],[35.8,34.44],[35.98,34.55],[35.98,34.63]]]},{id:`428`,name:`Latvia`,rings:[[[26.6,55.67],[26.28,55.75],[25.66,56.1],[25.07,56.2],[24.84,56.41],[24.47,56.28],[24.12,56.26],[23.2,56.37],[23.04,56.32],[22.88,56.4],[22.08,56.41],[21.65,56.31],[21.05,56.07],[21.03,56.64],[21.07,56.82],[21.35,57.02],[21.46,57.32],[21.73,57.57],[22.56,57.72],[22.65,57.6],[23.14,57.32],[23.29,57.09],[23.65,56.97],[23.93,57.01],[24.38,57.25],[24.32,57.87],[25.11,58.06],[25.26,58],[25.28,58.05],[25.99,57.84],[26.3,57.6],[26.46,57.54],[26.97,57.61],[27.47,57.52],[27.54,57.43],[27.83,57.29],[27.83,57.19],[27.64,56.85],[27.85,56.85],[28.01,56.6],[28.1,56.55],[28.2,56.26],[28.15,56.14],[27.89,56.08],[27.64,55.91],[27.58,55.8],[27.05,55.83],[26.82,55.71],[26.6,55.67]]]},{name:`Kosovo`,rings:[[[20.35,42.83],[20.47,42.86],[20.48,42.95],[20.62,43.03],[20.66,43.1],[20.62,43.2],[20.8,43.26],[20.85,43.17],[21.06,43.09],[21.4,42.83],[21.39,42.75],[21.75,42.65],[21.61,42.39],[21.52,42.33],[21.56,42.25],[21.39,42.22],[21.29,42.1],[21.06,42.17],[20.78,42.07],[20.72,41.87],[20.58,41.87],[20.49,42.22],[20.24,42.34],[20.06,42.55],[20.05,42.76],[20.19,42.75],[20.35,42.83]]]},{id:`400`,name:`Jordan`,rings:[[[35.79,32.73],[35.89,32.71],[36.06,32.53],[36.37,32.39],[36.82,32.32],[38.77,33.37],[39.06,32.49],[38.98,32.47],[39.04,32.31],[39.25,32.35],[39.29,32.24],[38.96,32],[36.96,31.49],[37.98,30.5],[37.63,30.31],[37.47,30],[36.75,29.87],[36.48,29.5],[36.02,29.19],[34.95,29.35],[35.14,30.14],[35.14,30.42],[35.44,31.13],[35.4,31.23],[35.56,31.77],[35.57,32.64],[35.79,32.73]]]},{id:`380`,name:`Italy`,rings:[[[7.02,45.93],[7.13,45.88],[7.54,45.98],[7.79,45.92],[7.99,46.02],[8.12,46.16],[8.09,46.27],[8.42,46.45],[8.46,46.25],[8.64,46.11],[8.82,46.08],[8.78,46],[8.96,45.83],[9.05,45.88],[9,46.02],[9.25,46.29],[9.26,46.48],[9.3,46.5],[9.43,46.48],[9.53,46.31],[9.94,46.36],[10.08,46.23],[10.15,46.25],[10.04,46.48],[10.09,46.6],[10.2,46.62],[10.43,46.55],[10.4,46.66],[10.45,46.87],[10.99,46.78],[11.13,46.94],[11.24,46.98],[11.77,46.99],[12.17,47.08],[12.16,46.94],[12.39,46.7],[13.7,46.52],[13.38,46.26],[13.63,46.18],[13.49,45.99],[13.6,45.98],[13.58,45.81],[13.72,45.76],[13.88,45.61],[13.72,45.59],[13.78,45.63],[13.63,45.77],[13.47,45.71],[13.21,45.77],[13.03,45.64],[12.5,45.46],[12.43,45.47],[12.54,45.54],[12.49,45.55],[12.27,45.45],[12.22,45.24],[12.52,44.97],[12.39,44.8],[12.28,44.83],[12.25,44.72],[12.4,44.22],[12.69,43.99],[13.56,43.57],[13.8,43.18],[14.01,42.69],[14.54,42.24],[15.17,41.93],[15.96,41.94],[16.17,41.9],[16.15,41.76],[15.91,41.62],[15.9,41.51],[17.1,41.06],[17.47,40.84],[17.96,40.65],[18.46,40.22],[18.48,40.1],[18.39,39.9],[18.34,39.82],[18.08,39.94],[17.87,40.28],[17.48,40.31],[17.26,40.4],[17.18,40.5],[17.03,40.51],[16.93,40.46],[16.67,40.14],[16.52,39.75],[16.6,39.64],[16.82,39.58],[17.11,39.38],[17.17,39],[17.1,38.92],[16.95,38.94],[16.62,38.8],[16.56,38.72],[16.54,38.41],[16.28,38.25],[16.06,37.94],[15.72,37.94],[15.65,38.03],[15.64,38.18],[15.7,38.26],[15.82,38.3],[15.93,38.67],[16.2,38.76],[16.21,38.94],[16.11,39.02],[16.02,39.35],[15.69,39.99],[15.59,40.05],[15.29,40.07],[14.95,40.24],[14.93,40.31],[14.99,40.38],[14.95,40.47],[14.77,40.67],[14.34,40.6],[14.46,40.73],[14.31,40.81],[14.05,40.81],[13.86,41.13],[13.73,41.24],[13.04,41.27],[12.85,41.41],[12.63,41.47],[12.08,41.94],[11.81,42.08],[11.64,42.29],[11.3,42.42],[11.14,42.39],[11.1,42.42],[11.18,42.46],[11.17,42.53],[10.8,42.8],[10.71,42.94],[10.51,42.97],[10.52,43.2],[10.32,43.51],[10.25,43.85],[10.05,44.02],[9.73,44.1],[9.29,44.32],[8.76,44.42],[8.55,44.35],[8,43.88],[7.49,43.77],[7.48,43.86],[7.68,44.08],[7.64,44.16],[7.32,44.14],[6.9,44.34],[6.84,44.51],[7.03,44.72],[6.99,44.83],[6.74,44.92],[6.63,45.07],[6.69,45.14],[6.84,45.13],[7.08,45.24],[7.15,45.38],[6.79,45.74],[6.81,45.81],[7.02,45.93]],[[12.49,43.9],[12.5,43.99],[12.4,43.94],[12.49,43.9]]]},{id:`380`,name:`Italy`,rings:[[[10.4,42.86],[10.42,42.71],[10.33,42.76],[10.13,42.74],[10.11,42.78],[10.4,42.86]]]},{id:`380`,name:`Italy`,rings:[[[13.94,40.71],[13.87,40.71],[13.87,40.76],[13.96,40.74],[13.94,40.71]]]},{id:`380`,name:`Italy`,rings:[[[12.05,36.76],[11.94,36.78],[11.95,36.84],[12.05,36.76]]]},{id:`380`,name:`Italy`,rings:[[[15.58,38.22],[15.23,37.78],[15.1,37.46],[15.12,37.34],[15.23,37.24],[15.17,37.21],[15.29,37.06],[15.11,36.84],[15.11,36.69],[14.78,36.71],[14.5,36.8],[14.37,36.97],[14.14,37.1],[13.91,37.1],[13.17,37.48],[12.92,37.57],[12.64,37.59],[12.44,37.82],[12.55,38.05],[12.74,38.18],[12.9,38.03],[13.16,38.19],[13.35,38.18],[13.38,38.13],[13.79,37.98],[14.05,38.04],[14.51,38.05],[14.79,38.17],[15.12,38.15],[15.5,38.29],[15.63,38.27],[15.58,38.22]]]},{id:`380`,name:`Italy`,rings:[[[9.63,40.88],[9.8,40.5],[9.64,40.27],[9.71,40.02],[9.56,39.17],[9.49,39.14],[9.06,39.24],[8.97,38.96],[8.88,38.91],[8.65,38.93],[8.42,39.21],[8.4,39.48],[8.45,39.72],[8.54,39.73],[8.55,39.84],[8.41,39.92],[8.47,40.29],[8.35,40.5],[8.19,40.65],[8.2,40.87],[8.22,40.91],[8.47,40.83],[8.7,40.9],[9.23,41.26],[9.61,41.02],[9.55,40.93],[9.63,40.88]]]},{id:`380`,name:`Italy`,rings:[[[8.48,39.07],[8.42,38.97],[8.36,39.1],[8.48,39.07]]]},{id:`380`,name:`Italy`,rings:[[[8.29,41.04],[8.21,41],[8.27,41.1],[8.34,41.1],[8.29,41.04]]]},{id:`376`,name:`Israel`,rings:[[[35.87,33.43],[35.84,33.28],[35.91,32.95],[35.79,32.73],[35.57,32.64],[35.55,32.4],[35.19,32.54],[35.07,32.46],[34.95,32.16],[34.96,31.82],[35.13,31.82],[35.2,31.75],[34.95,31.6],[34.88,31.37],[35.1,31.37],[35.45,31.48],[35.4,31.23],[35.44,31.13],[35.17,30.52],[35.14,30.14],[34.97,29.55],[34.9,29.48],[34.25,31.21],[34.53,31.53],[34.48,31.59],[34.68,31.9],[35.11,33.08],[35.41,33.07],[35.49,33.12],[35.53,33.25],[35.6,33.24],[35.87,33.43]]]},{id:`372`,name:`Ireland`,rings:[[[-9.95,53.91],[-10.27,53.98],[-10,54],[-9.95,53.91]]]},{id:`372`,name:`Ireland`,rings:[[[-7.22,55.09],[-7.38,55.03],[-7.55,54.77],[-7.91,54.7],[-7.75,54.59],[-8.15,54.45],[-7.85,54.22],[-7.61,54.14],[-7.32,54.13],[-7.16,54.24],[-7.2,54.3],[-7.01,54.41],[-6.8,54.21],[-6.65,54.16],[-6.65,54.06],[-6.3,54.09],[-6.18,54.05],[-6.16,54.02],[-6.31,54.01],[-6.35,53.94],[-6.14,53.58],[-6.15,53.37],[-6.03,52.93],[-6.17,52.74],[-6.22,52.54],[-6.46,52.34],[-6.32,52.25],[-6.89,52.16],[-6.96,52.25],[-7,52.17],[-7.53,52.1],[-7.63,51.99],[-7.84,51.95],[-8.06,51.83],[-8.41,51.89],[-8.34,51.79],[-8.41,51.71],[-9.3,51.5],[-9.46,51.53],[-9.84,51.48],[-9.52,51.68],[-10.12,51.6],[-9.6,51.87],[-10.09,51.77],[-10.34,51.8],[-10.38,51.87],[-9.91,52.12],[-10.39,52.13],[-10.36,52.21],[-10.13,52.28],[-9.77,52.25],[-9.91,52.4],[-9.63,52.55],[-8.78,52.68],[-8.99,52.76],[-9.17,52.63],[-9.56,52.65],[-9.92,52.57],[-9.52,52.78],[-9.39,52.9],[-9.46,52.95],[-9.3,53.1],[-8.93,53.21],[-9.51,53.24],[-9.62,53.33],[-9.88,53.34],[-9.79,53.39],[-10.09,53.41],[-10.05,53.48],[-10.12,53.55],[-9.72,53.6],[-9.91,53.66],[-9.9,53.73],[-9.58,53.8],[-9.58,53.88],[-9.91,53.86],[-9.86,54.09],[-9.93,54.08],[-9.98,54.19],[-10.09,54.16],[-10.06,54.26],[-9.56,54.31],[-9.32,54.3],[-9.15,54.21],[-9,54.29],[-8.54,54.24],[-8.62,54.35],[-8.23,54.51],[-8.13,54.64],[-8.46,54.61],[-8.76,54.68],[-8.38,54.89],[-8.39,55.02],[-8.27,55.15],[-7.75,55.19],[-7.76,55.25],[-7.67,55.26],[-7.56,55.12],[-7.66,54.97],[-7.48,55.05],[-7.52,55.25],[-7.3,55.3],[-7.37,55.36],[-7.31,55.37],[-6.96,55.24],[-7.22,55.09]]]},{id:`368`,name:`Iraq`,rings:[[[42.36,37.11],[42.46,37.13],[42.77,37.37],[42.94,37.32],[43.09,37.37],[43.68,37.23],[44.11,37.3],[44.19,37.25],[44.2,37.05],[44.28,36.98],[44.61,37.18],[44.73,37.16],[44.88,36.8],[45.02,36.7],[45.05,36.47],[45.24,36.36],[45.36,36.02],[45.56,35.98],[45.78,35.82],[46.17,35.82],[46.27,35.77],[46,35.61],[45.97,35.48],[46.11,35.32],[46.13,35.13],[45.92,35.03],[45.68,34.8],[45.64,34.57],[45.5,34.58],[45.44,34.42],[45.54,34.22],[45.4,33.97],[45.74,33.6],[45.88,33.61],[45.87,33.49],[46.02,33.42],[46.15,33.23],[46.08,33.09],[46.11,32.96],[46.38,32.93],[47.12,32.47],[47.37,32.42],[47.51,32.15],[47.83,31.79],[47.68,31.4],[47.68,31],[48.01,30.99],[48.02,30.47],[48.33,30.29],[48.43,30.04],[48.54,29.96],[48.45,29.94],[48.07,30.04],[47.98,29.98],[47.67,30.1],[47.22,30.04],[47.1,29.94],[46.77,29.35],[46.53,29.1],[46.36,29.06],[44.72,29.19],[42.08,31.08],[40.37,31.94],[39.14,32.13],[39.29,32.24],[39.25,32.35],[39.04,32.31],[38.98,32.47],[39.06,32.49],[38.77,33.37],[40.69,34.33],[40.99,34.43],[41.19,34.77],[41.22,35.29],[41.36,35.64],[41.35,35.81],[41.24,36.07],[41.29,36.38],[41.42,36.51],[41.79,36.6],[42.36,37.11]]]},{id:`348`,name:`Hungary`,rings:[[[22.13,48.41],[22.25,48.41],[22.35,48.26],[22.58,48.13],[22.77,48.11],[22.88,47.95],[22.61,47.77],[22.29,47.73],[22,47.5],[21.99,47.4],[21.66,47.04],[21.48,46.75],[21.5,46.7],[21.3,46.57],[21.26,46.41],[21.04,46.24],[20.76,46.25],[20.66,46.15],[20.24,46.11],[19.61,46.17],[19.21,45.98],[19.09,46.02],[18.93,45.93],[18.66,45.91],[18.44,45.77],[17.81,45.79],[17.61,45.91],[17.31,46],[16.87,46.34],[16.52,46.5],[16.38,46.64],[16.28,46.86],[16.09,46.86],[16.25,46.97],[16.45,47.01],[16.49,47.12],[16.42,47.22],[16.46,47.27],[16.44,47.4],[16.62,47.45],[16.68,47.54],[16.64,47.61],[16.42,47.67],[16.59,47.75],[16.79,47.68],[17.07,47.71],[17.03,47.84],[17.15,48.01],[17.32,47.99],[17.76,47.77],[18.73,47.79],[18.79,48],[19.47,48.11],[19.63,48.22],[19.9,48.13],[20.33,48.3],[20.49,48.53],[21.07,48.51],[21.45,48.55],[21.72,48.35],[22.13,48.41]]]},{id:`300`,name:`Greece`,rings:[[[27.86,36.55],[27.79,36.61],[27.86,36.64],[27.86,36.55]]]},{id:`300`,name:`Greece`,rings:[[[20.61,38.38],[20.63,38.27],[20.79,38.14],[20.76,38.07],[20.52,38.11],[20.45,38.23],[20.35,38.18],[20.41,38.34],[20.52,38.33],[20.56,38.48],[20.61,38.38]]]},{id:`300`,name:`Greece`,rings:[[[20.89,37.81],[20.99,37.71],[20.91,37.73],[20.82,37.66],[20.62,37.85],[20.69,37.93],[20.89,37.81]]]},{id:`300`,name:`Greece`,rings:[[[20.69,38.61],[20.55,38.58],[20.59,38.76],[20.69,38.84],[20.69,38.61]]]},{id:`300`,name:`Greece`,rings:[[[20.76,38.33],[20.71,38.32],[20.62,38.48],[20.7,38.45],[20.76,38.33]]]},{id:`300`,name:`Greece`,rings:[[[20.08,39.43],[20.1,39.38],[19.88,39.46],[19.65,39.77],[19.84,39.82],[19.92,39.77],[19.85,39.67],[19.96,39.47],[20.08,39.43]]]},{id:`300`,name:`Greece`,rings:[[[23.42,38.96],[23.52,38.81],[24.13,38.65],[24.28,38.22],[24.36,38.16],[24.56,38.15],[24.58,38.02],[24.5,37.97],[24.36,38.02],[24.21,38.12],[24.04,38.39],[23.65,38.44],[23.62,38.55],[23.25,38.8],[23.03,38.87],[22.88,38.85],[23.26,39.03],[23.42,38.96]]]},{id:`300`,name:`Greece`,rings:[[[23.78,39.11],[23.66,39.1],[23.59,39.21],[23.78,39.11]]]},{id:`300`,name:`Greece`,rings:[[[23.89,39.16],[23.84,39.15],[23.89,39.23],[23.97,39.27],[23.89,39.16]]]},{id:`300`,name:`Greece`,rings:[[[24.68,38.81],[24.54,38.79],[24.56,38.83],[24.46,38.89],[24.49,38.98],[24.68,38.81]]]},{id:`300`,name:`Greece`,rings:[[[24.77,40.61],[24.65,40.58],[24.52,40.69],[24.62,40.79],[24.72,40.79],[24.79,40.7],[24.77,40.61]]]},{id:`300`,name:`Greece`,rings:[[[23.55,37.93],[23.42,37.93],[23.48,37.99],[23.55,37.93]]]},{id:`300`,name:`Greece`,rings:[[[23.05,36.19],[23.04,36.15],[22.91,36.22],[22.95,36.38],[23.1,36.25],[23.05,36.19]]]},{id:`300`,name:`Greece`,rings:[[[27.17,35.47],[27.14,35.41],[27.1,35.46],[27.07,35.6],[27.16,35.79],[27.22,35.82],[27.16,35.63],[27.23,35.48],[27.17,35.47]]]},{id:`300`,name:`Greece`,rings:[[[27.02,36.96],[26.92,36.94],[26.89,37.09],[27.04,37],[27.02,36.96]]]},{id:`300`,name:`Greece`,rings:[[[26.95,36.73],[26.96,36.77],[27.21,36.9],[27.35,36.87],[26.95,36.73]]]},{id:`300`,name:`Greece`,rings:[[[25.55,36.97],[25.46,36.93],[25.36,37.07],[25.53,37.2],[25.59,37.15],[25.55,36.97]]]},{id:`300`,name:`Greece`,rings:[[[25.28,37.07],[25.2,36.99],[25.1,37.03],[25.23,37.15],[25.28,37.07]]]},{id:`300`,name:`Greece`,rings:[[[25.48,36.39],[25.44,36.34],[25.37,36.36],[25.41,36.47],[25.48,36.39]]]},{id:`300`,name:`Greece`,rings:[[[25.38,36.67],[25.26,36.76],[25.3,36.79],[25.41,36.72],[25.38,36.67]]]},{id:`300`,name:`Greece`,rings:[[[26.83,37.81],[27.04,37.77],[27.06,37.71],[26.84,37.64],[26.58,37.72],[26.83,37.81]]]},{id:`300`,name:`Greece`,rings:[[[26.03,37.53],[25.98,37.53],[26,37.57],[26.09,37.64],[26.35,37.67],[26.21,37.57],[26.03,37.53]]]},{id:`300`,name:`Greece`,rings:[[[25.86,36.79],[25.74,36.79],[26,36.94],[26.07,36.9],[25.86,36.79]]]},{id:`300`,name:`Greece`,rings:[[[26.46,36.59],[26.33,36.51],[26.27,36.55],[26.27,36.6],[26.34,36.58],[26.37,36.64],[26.46,36.59]]]},{id:`300`,name:`Greece`,rings:[[[24.36,37.58],[24.29,37.53],[24.28,37.6],[24.38,37.68],[24.36,37.58]]]},{id:`300`,name:`Greece`,rings:[[[24.44,37.34],[24.38,37.31],[24.37,37.42],[24.43,37.48],[24.48,37.41],[24.44,37.34]]]},{id:`300`,name:`Greece`,rings:[[[24.54,36.76],[24.53,36.68],[24.33,36.66],[24.36,36.74],[24.42,36.71],[24.54,36.76]]]},{id:`300`,name:`Greece`,rings:[[[24.94,37.49],[24.91,37.39],[24.91,37.51],[24.94,37.49]]]},{id:`300`,name:`Greece`,rings:[[[24.99,37.76],[24.96,37.69],[24.7,37.96],[24.79,37.99],[24.86,37.91],[24.96,37.9],[24.99,37.76]]]},{id:`300`,name:`Greece`,rings:[[[25.26,37.6],[25.22,37.53],[25.16,37.55],[25,37.68],[25.26,37.6]]]},{id:`300`,name:`Greece`,rings:[[[24.72,36.92],[24.68,37.02],[24.76,36.95],[24.72,36.92]]]},{id:`300`,name:`Greece`,rings:[[[26.09,38.22],[26,38.16],[25.89,38.24],[25.99,38.35],[25.85,38.57],[26.01,38.6],[26.16,38.54],[26.16,38.3],[26.09,38.22]]]},{id:`300`,name:`Greece`,rings:[[[26.41,39.33],[26.39,39.27],[26.6,39.05],[26.49,39.07],[26.55,38.99],[26.47,38.97],[26.16,39.03],[26.11,39.08],[26.27,39.2],[26.18,39.19],[26.07,39.1],[25.84,39.2],[25.91,39.29],[26.09,39.3],[26.17,39.37],[26.35,39.38],[26.41,39.33]]]},{id:`300`,name:`Greece`,rings:[[[25.68,40.43],[25.57,40.4],[25.45,40.48],[25.57,40.52],[25.68,40.43]]]},{id:`300`,name:`Greece`,rings:[[[25.44,39.98],[25.36,39.81],[25.26,39.82],[25.25,39.89],[25.18,39.83],[25.06,39.85],[25.06,40],[25.23,40.01],[25.28,39.96],[25.45,40.03],[25.44,39.98]]]},{id:`300`,name:`Greece`,rings:[[[25.4,37.42],[25.31,37.41],[25.31,37.49],[25.46,37.47],[25.4,37.42]]]},{id:`300`,name:`Greece`,rings:[[[24.53,37.13],[24.42,37.13],[24.44,37.19],[24.53,37.19],[24.53,37.13]]]},{id:`300`,name:`Greece`,rings:[[[27.84,35.93],[27.75,35.91],[27.71,35.96],[27.76,36.07],[27.71,36.17],[27.91,36.35],[28.23,36.43],[28.07,36.13],[28.09,36.07],[27.97,36.05],[27.84,35.93]]]},{id:`300`,name:`Greece`,rings:[[[23.85,35.53],[24.01,35.53],[24.17,35.6],[24.2,35.54],[24.11,35.49],[24.26,35.47],[24.31,35.36],[24.72,35.43],[25.48,35.31],[25.73,35.35],[25.75,35.14],[25.79,35.12],[26.17,35.22],[26.32,35.31],[26.25,35.05],[26.17,35.02],[24.8,34.93],[24.74,34.95],[24.71,35.09],[24.46,35.16],[23.59,35.26],[23.57,35.53],[23.61,35.57],[23.67,35.51],[23.74,35.65],[23.85,35.53]]]},{id:`300`,name:`Greece`,rings:[[[26.32,41.72],[26.58,41.6],[26.62,41.4],[26.33,41.24],[26.35,41],[26.11,40.75],[26.04,40.73],[25.86,40.84],[25.1,40.99],[24.79,40.86],[24.48,40.95],[24.08,40.72],[23.76,40.75],[23.74,40.68],[23.88,40.54],[23.83,40.48],[23.87,40.42],[24.21,40.33],[24.34,40.15],[24.16,40.28],[23.91,40.36],[23.73,40.33],[23.72,40.29],[23.97,40.11],[24,40.02],[23.95,39.97],[23.66,40.22],[23.43,40.26],[23.39,40.22],[23.47,40.07],[23.68,39.96],[23.63,39.92],[23.39,39.99],[23.31,40.22],[22.9,40.4],[22.85,40.49],[22.92,40.59],[22.63,40.5],[22.59,40.04],[22.84,39.8],[22.98,39.56],[23.23,39.36],[23.33,39.18],[23.15,39.1],[23.16,39.26],[22.99,39.33],[22.92,39.31],[22.84,39.26],[22.89,39.17],[22.97,39.03],[23.07,39.04],[22.8,38.9],[22.57,38.87],[23.25,38.66],[23.37,38.53],[23.57,38.49],[23.68,38.35],[23.97,38.27],[24.02,38.14],[24.05,37.71],[23.97,37.68],[23.5,38.03],[23.03,37.88],[23.15,37.8],[23.2,37.62],[23.39,37.58],[23.49,37.44],[23.16,37.33],[23.1,37.36],[23.1,37.44],[22.94,37.52],[22.78,37.59],[22.73,37.54],[23.06,36.85],[23.04,36.64],[23.16,36.45],[22.98,36.53],[22.78,36.79],[22.72,36.79],[22.61,36.78],[22.49,36.57],[22.49,36.45],[22.43,36.48],[22.38,36.51],[22.38,36.7],[22.08,37.03],[21.95,36.99],[21.89,36.74],[21.74,36.86],[21.58,37.08],[21.58,37.2],[21.69,37.31],[21.68,37.39],[21.57,37.54],[21.33,37.67],[21.29,37.77],[21.12,37.89],[21.31,38.03],[21.4,38.2],[21.66,38.18],[21.83,38.33],[21.95,38.32],[22.92,37.96],[22.89,38.05],[23.12,38.07],[23.18,38.13],[23.09,38.2],[22.83,38.23],[22.42,38.44],[22.32,38.36],[21.97,38.41],[21.47,38.32],[21.33,38.49],[21.3,38.37],[21.18,38.35],[21.11,38.39],[20.99,38.65],[20.78,38.81],[20.77,38.87],[20.78,38.93],[20.89,38.94],[21.11,38.9],[21.15,38.92],[21.12,39.03],[20.78,39.01],[20.3,39.33],[20.19,39.55],[20,39.71],[20.25,39.68],[20.31,39.8],[20.38,39.8],[20.31,39.98],[20.66,40.12],[20.81,40.45],[20.95,40.49],[21.03,40.62],[20.96,40.85],[21.4,40.91],[21.58,40.87],[21.78,40.95],[21.99,41.13],[22.49,41.12],[22.73,41.18],[22.78,41.33],[23.64,41.39],[24.01,41.46],[24.06,41.53],[24.52,41.55],[24.6,41.44],[24.77,41.36],[24.85,41.39],[24.99,41.36],[25.25,41.24],[25.92,41.31],[26.16,41.44],[26.08,41.7],[26.32,41.72]]]},{id:`276`,name:`Germany`,rings:[[[9.52,47.52],[9.18,47.67],[8.88,47.66],[8.57,47.78],[8.4,47.69],[8.56,47.62],[8.43,47.59],[7.93,47.56],[7.57,47.61],[7.53,47.67],[7.62,48.16],[7.84,48.64],[8.14,48.89],[8.13,48.97],[7.61,49.06],[7.45,49.15],[7.04,49.11],[7,49.18],[6.89,49.21],[6.73,49.16],[6.54,49.4],[6.35,49.45],[6.49,49.8],[6.26,49.87],[6.14,49.97],[6.11,50.09],[6.18,50.23],[6.36,50.32],[6.34,50.45],[6.18,50.52],[6.24,50.6],[5.99,50.75],[6.05,50.91],[5.86,51.03],[6.13,51.15],[6.08,51.22],[6.19,51.41],[6.19,51.49],[5.95,51.8],[6.17,51.88],[6.36,51.82],[6.74,51.91],[6.8,51.98],[6.72,52.08],[6.98,52.21],[7.04,52.38],[6.97,52.44],[6.75,52.46],[6.69,52.53],[6.75,52.63],[7.01,52.63],[7.18,52.97],[7.2,53.28],[7.05,53.38],[7.11,53.56],[7.21,53.66],[8.01,53.69],[8.17,53.54],[8.11,53.47],[8.25,53.45],[8.33,53.61],[8.49,53.51],[8.49,53.39],[8.53,53.78],[8.62,53.88],[9.21,53.86],[9.59,53.6],[9.78,53.55],[9.63,53.6],[9.31,53.86],[8.98,53.93],[8.9,54],[8.91,54.26],[8.78,54.31],[8.65,54.29],[8.65,54.4],[8.95,54.47],[8.96,54.54],[8.68,54.79],[8.67,54.9],[9.25,54.81],[9.62,54.85],[9.89,54.78],[10.02,54.67],[10.03,54.58],[9.87,54.47],[10.14,54.49],[10.21,54.41],[10.36,54.44],[10.73,54.32],[11.01,54.38],[11.06,54.28],[11.01,54.18],[10.81,54.08],[10.92,54],[11.4,53.95],[11.8,54.14],[12.11,54.17],[12.58,54.47],[13.03,54.41],[13.15,54.28],[13.45,54.14],[13.73,54.15],[13.87,53.85],[14.26,53.73],[14.41,53.22],[14.37,53.1],[14.13,52.88],[14.62,52.53],[14.55,52.36],[14.68,52.25],[14.75,52.08],[14.6,51.83],[14.74,51.63],[14.73,51.52],[14.93,51.43],[15.02,51.25],[14.96,51.09],[14.77,50.82],[14.61,50.86],[14.63,50.91],[14.55,50.99],[14.32,51.04],[14.25,51],[14.37,50.9],[13.56,50.7],[13.44,50.6],[13.38,50.62],[13.18,50.51],[13.02,50.49],[12.94,50.41],[12.55,50.39],[12.28,50.18],[12.13,50.31],[12.09,50.27],[12.21,50.1],[12.51,49.9],[12.39,49.74],[12.63,49.46],[13.29,49.1],[13.4,48.98],[13.55,48.96],[13.77,48.82],[13.82,48.77],[13.79,48.59],[13.67,48.52],[13.49,48.58],[13.38,48.36],[12.9,48.2],[12.76,48.11],[12.95,47.89],[12.9,47.72],[13.06,47.66],[13.02,47.48],[12.81,47.54],[12.77,47.64],[12.68,47.67],[12.48,47.64],[12.21,47.72],[12.18,47.62],[11.72,47.58],[11.3,47.42],[11.04,47.39],[10.87,47.52],[10.44,47.55],[10.37,47.37],[10.18,47.28],[10.2,47.36],[10.07,47.39],[9.97,47.5],[9.75,47.58],[9.52,47.52]]]},{id:`276`,name:`Germany`,rings:[[[13.71,54.38],[13.71,54.28],[13.48,54.34],[13.37,54.25],[13.16,54.37],[13.18,54.54],[13.24,54.64],[13.42,54.7],[13.49,54.62],[13.66,54.56],[13.58,54.46],[13.71,54.38]]]},{id:`276`,name:`Germany`,rings:[[[14.21,53.95],[14.21,53.87],[13.93,53.88],[13.92,54],[13.83,54.06],[13.83,54.13],[14.21,53.95]]]},{id:`276`,name:`Germany`,rings:[[[11.28,54.42],[11.01,54.47],[11.09,54.53],[11.23,54.5],[11.28,54.42]]]},{id:`276`,name:`Germany`,rings:[[[8.31,54.79],[8.3,54.91],[8.4,55.06],[8.45,55.05],[8.38,54.9],[8.63,54.89],[8.35,54.85],[8.31,54.79]]]},{id:`276`,name:`Germany`,rings:[[[8.59,54.71],[8.4,54.71],[8.51,54.76],[8.59,54.71]]]},{id:`268`,name:`Georgia`,rings:[[[43.44,41.11],[43.4,41.18],[43.15,41.24],[43.15,41.31],[42.76,41.58],[42.59,41.57],[42.47,41.44],[41.92,41.5],[41.82,41.43],[41.51,41.52],[41.7,41.7],[41.76,41.97],[41.49,42.66],[41.42,42.74],[41.13,42.83],[41.06,42.93],[40.84,43.06],[40.46,43.15],[39.98,43.42],[40.15,43.57],[40.65,43.53],[41.08,43.37],[41.36,43.33],[41.58,43.22],[42.42,43.22],[42.57,43.16],[42.76,43.17],[42.99,43.09],[43.09,42.99],[43.78,42.75],[43.74,42.62],[43.83,42.57],[43.96,42.57],[44.51,42.75],[44.65,42.73],[44.77,42.62],[44.87,42.76],[45.16,42.68],[45.34,42.53],[45.7,42.5],[45.64,42.2],[45.95,42.04],[46.43,41.89],[46.3,41.76],[46.2,41.74],[46.18,41.66],[46.31,41.51],[46.67,41.29],[46.54,41.09],[46.43,41.08],[46.17,41.2],[45.92,41.19],[45.73,41.26],[45.72,41.34],[45.28,41.45],[44.98,41.28],[44.81,41.26],[44.84,41.21],[44.23,41.21],[43.44,41.11]]]},{id:`250`,name:`France`,rings:[[[9.48,42.81],[9.46,42.66],[9.53,42.55],[9.56,42.16],[9.4,41.93],[9.37,41.68],[9.19,41.39],[8.81,41.59],[8.89,41.7],[8.72,41.76],[8.74,41.93],[8.62,41.93],[8.7,42.1],[8.59,42.16],[8.57,42.22],[8.67,42.28],[8.57,42.36],[8.81,42.61],[9.14,42.73],[9.32,42.71],[9.36,43.02],[9.46,42.98],[9.48,42.81]]]},{id:`250`,name:`France`,rings:[[[7.62,47.59],[7.34,47.43],[7.2,47.43],[7.14,47.49],[6.97,47.45],[6.9,47.39],[7,47.32],[6.67,47.03],[6.46,46.95],[6.41,46.75],[6.16,46.61],[6.07,46.46],[6.12,46.38],[6.1,46.28],[5.97,46.21],[6.01,46.14],[6.2,46.19],[6.27,46.25],[6.23,46.33],[6.43,46.43],[6.78,46.41],[6.82,46.28],[6.77,46.16],[7.02,45.93],[6.81,45.81],[6.79,45.74],[7.16,45.4],[7.08,45.24],[6.84,45.13],[6.69,45.14],[6.63,45.07],[6.74,44.92],[6.99,44.83],[7.03,44.72],[6.84,44.51],[6.9,44.34],[7.32,44.14],[7.64,44.16],[7.68,44.08],[7.48,43.86],[7.49,43.77],[7.18,43.66],[6.72,43.37],[6.57,43.2],[6.11,43.07],[5.81,43.1],[5.41,43.23],[5.32,43.35],[5.07,43.37],[5.06,43.44],[4.71,43.37],[4.22,43.48],[4.05,43.59],[3.91,43.56],[3.26,43.19],[3.05,42.91],[3.09,42.59],[3.21,42.43],[2.89,42.46],[2.67,42.39],[2.65,42.34],[2.2,42.42],[2.03,42.35],[1.7,42.5],[1.71,42.6],[1.5,42.64],[1.43,42.6],[1.35,42.69],[.77,42.84],[.67,42.84],[.63,42.69],[-.04,42.69],[-.3,42.83],[-.59,42.8],[-.76,42.94],[-1.18,43.02],[-1.3,43.1],[-1.4,43.03],[-1.48,43.07],[-1.41,43.24],[-1.76,43.32],[-1.79,43.41],[-1.63,43.44],[-1.49,43.56],[-1.24,44.56],[-1.08,44.69],[-1.15,44.76],[-1.24,44.67],[-1.19,45.16],[-1.08,45.53],[-.83,45.38],[-.69,45.09],[-.55,45],[-.64,45.09],[-.79,45.47],[-1.2,45.71],[-1.21,45.77],[-1.03,45.74],[-1.15,46.31],[-1.39,46.35],[-1.79,46.52],[-2.06,46.81],[-2.09,46.92],[-2.02,47.04],[-2.2,47.16],[-2.03,47.27],[-1.74,47.22],[-1.97,47.31],[-2.5,47.31],[-2.53,47.38],[-2.43,47.47],[-2.55,47.53],[-2.77,47.51],[-2.73,47.6],[-2.79,47.63],[-3.07,47.62],[-3.16,47.69],[-3.44,47.71],[-3.9,47.84],[-4.31,47.82],[-4.43,47.97],[-4.68,48.04],[-4.33,48.17],[-4.58,48.29],[-4.24,48.3],[-4.39,48.37],[-4.72,48.36],[-4.76,48.45],[-4.72,48.54],[-4.53,48.62],[-4.06,48.71],[-3.71,48.71],[-3.47,48.81],[-3.23,48.84],[-3,48.79],[-2.69,48.54],[-2.45,48.65],[-2.08,48.65],[-2,48.58],[-1.91,48.7],[-1.82,48.63],[-1.38,48.65],[-1.56,48.8],[-1.58,49.2],[-1.81,49.49],[-1.86,49.68],[-1.26,49.68],[-1.23,49.49],[-1.14,49.39],[-.16,49.3],[.42,49.45],[.13,49.51],[.19,49.7],[.62,49.86],[1.24,50],[1.59,50.25],[1.55,50.29],[1.58,50.74],[1.67,50.88],[1.91,50.99],[2.53,51.1],[2.6,50.88],[2.76,50.75],[2.84,50.71],[3.11,50.78],[3.23,50.66],[3.27,50.53],[3.59,50.48],[3.69,50.31],[3.95,50.34],[4.17,50.25],[4.15,49.97],[4.55,49.96],[4.82,50.15],[4.86,50.14],[4.79,49.96],[4.87,49.79],[5.28,49.68],[5.51,49.51],[5.79,49.54],[6.01,49.45],[6.24,49.49],[6.54,49.4],[6.73,49.16],[6.89,49.21],[7,49.18],[7.04,49.11],[7.45,49.15],[7.61,49.06],[8.13,48.97],[8.14,48.89],[7.84,48.64],[7.62,48.16],[7.53,47.67],[7.62,47.59]]]},{id:`250`,name:`France`,rings:[[[-1.18,45.9],[-1.22,45.82],[-1.39,46.05],[-1.18,45.9]]]},{id:`248`,name:`Åland`,rings:[[[19.99,60.35],[20.24,60.28],[20.19,60.19],[20.04,60.18],[20.03,60.09],[19.74,60.1],[19.69,60.27],[19.78,60.29],[19.78,60.21],[19.85,60.22],[19.87,60.3],[19.79,60.35],[19.82,60.39],[19.99,60.35]]]},{id:`248`,name:`Åland`,rings:[[[19.66,60.19],[19.58,60.14],[19.52,60.18],[19.55,60.24],[19.63,60.25],[19.66,60.19]]]},{id:`246`,name:`Finland`,rings:[[[24.15,65.81],[24,66.06],[23.7,66.25],[23.7,66.48],[23.87,66.58],[23.99,66.81],[23.64,67.13],[23.63,67.23],[23.78,67.33],[23.73,67.42],[23.46,67.46],[23.54,67.61],[23.5,67.87],[23.64,67.95],[23.32,68.13],[23.18,68.14],[23.1,68.26],[22.85,68.37],[22,68.52],[20.92,68.91],[20.9,68.98],[20.62,69.04],[21.07,69.04],[21.13,69.08],[21.07,69.21],[21.27,69.27],[21.59,69.27],[22.3,68.86],[22.41,68.72],[23.32,68.65],[23.71,68.71],[23.86,68.81],[24,68.8],[24.94,68.59],[25.09,68.64],[25.25,68.82],[25.58,68.89],[25.75,68.99],[25.77,69.28],[26.01,69.65],[26.53,69.91],[27.13,69.91],[27.59,70.04],[27.89,70.06],[28.41,69.82],[29.14,69.67],[29.33,69.47],[28.85,69.18],[28.83,69.12],[28.96,69.02],[28.41,68.9],[28.77,68.84],[28.47,68.49],[28.69,68.19],[29.34,68.06],[29.99,67.67],[29.94,67.55],[29.24,67.1],[29.09,66.97],[29.06,66.89],[29.9,66.09],[30.09,65.79],[30.09,65.68],[29.72,65.63],[29.82,65.57],[29.73,65.47],[29.72,65.34],[29.61,65.25],[29.81,65.2],[29.83,65.15],[29.62,65.04],[29.6,64.97],[29.78,64.8],[30.11,64.73],[30.12,64.64],[29.99,64.52],[30.11,64.37],[30.49,64.24],[30.53,64.08],[30.21,63.8],[29.99,63.73],[30.42,63.5],[31.18,63.21],[31.53,62.89],[31.29,62.57],[30.94,62.32],[29.25,61.29],[28.41,60.9],[27.8,60.54],[27.46,60.47],[27.2,60.54],[26.53,60.41],[26.6,60.6],[26.57,60.63],[26.38,60.42],[26.21,60.41],[25.95,60.47],[26.04,60.34],[25.76,60.27],[25.66,60.33],[24.6,60.11],[24.45,60.02],[23.46,59.99],[23.18,59.84],[22.96,59.83],[23.2,60.02],[23.08,60.05],[22.87,60.22],[22.79,60.08],[22.46,60.03],[22.44,60.16],[22.59,60.23],[22.51,60.28],[22.58,60.38],[21.85,60.51],[21.8,60.59],[21.61,60.53],[21.44,60.6],[21.36,60.97],[21.51,61.28],[21.51,61.48],[21.57,61.48],[21.5,61.55],[21.61,61.59],[21.39,61.92],[21.26,61.99],[21.34,62.28],[21.32,62.34],[21.17,62.41],[21.11,62.62],[21.14,62.74],[21.46,62.95],[21.47,63.03],[21.65,63.04],[21.54,63.21],[21.9,63.21],[22.32,63.31],[22.24,63.44],[22.35,63.44],[22.32,63.5],[22.4,63.49],[22.53,63.58],[22.53,63.65],[22.76,63.68],[23.5,64.03],[23.6,64.04],[23.65,64.13],[24.28,64.52],[24.56,64.8],[24.94,64.88],[25.29,64.86],[25.23,64.95],[25.37,65.01],[25.26,65.14],[25.35,65.48],[25.24,65.55],[24.68,65.67],[24.58,65.76],[24.63,65.86],[24.4,65.78],[24.15,65.81]]]},{id:`246`,name:`Finland`,rings:[[[21.99,60.34],[21.82,60.38],[21.83,60.47],[21.99,60.34]]]},{id:`246`,name:`Finland`,rings:[[[21.22,63.24],[21.42,63.25],[21.41,63.2],[21.25,63.15],[21.08,63.28],[21.23,63.28],[21.22,63.24]]]},{id:`246`,name:`Finland`,rings:[[[22.17,60.37],[22.42,60.3],[22.31,60.27],[22.36,60.17],[22.26,60.17],[22.08,60.29],[22.17,60.37]]]},{id:`246`,name:`Finland`,rings:[[[21.45,60.53],[21.44,60.48],[21.3,60.48],[21.21,60.6],[21.27,60.64],[21.45,60.53]]]},{id:`246`,name:`Finland`,rings:[[[21.83,60.14],[21.7,60.11],[21.76,60.2],[21.86,60.2],[21.83,60.14]]]},{id:`246`,name:`Finland`,rings:[[[21.63,60.11],[21.49,60.13],[21.63,60.17],[21.63,60.11]]]},{id:`246`,name:`Finland`,rings:[[[24.85,64.99],[24.58,64.98],[24.58,65.04],[24.78,65.09],[24.97,65.06],[24.85,64.99]]]},{id:`233`,name:`Estonia`,rings:[[[27.35,57.53],[26.97,57.61],[26.46,57.54],[26.3,57.6],[25.99,57.84],[25.28,58.05],[25.26,58],[25.11,58.06],[24.32,57.87],[24.55,58.3],[24.53,58.35],[24.34,58.38],[24.11,58.27],[23.77,58.36],[23.69,58.51],[23.51,58.66],[23.68,58.79],[23.5,58.79],[23.43,58.92],[23.51,59],[23.47,59.03],[23.52,59.11],[23.5,59.19],[24.08,59.29],[24.05,59.37],[24.38,59.47],[25.44,59.52],[25.52,59.56],[25.51,59.64],[26.62,59.55],[26.97,59.45],[27.89,59.41],[28.01,59.48],[28.15,59.37],[27.9,59.28],[27.76,59.05],[27.43,58.79],[27.53,58.43],[27.5,58.22],[27.67,57.93],[27.78,57.87],[27.54,57.8],[27.4,57.67],[27.35,57.53]]]},{id:`233`,name:`Estonia`,rings:[[[22.62,58.62],[22.96,58.61],[23.32,58.45],[23.13,58.44],[22.73,58.23],[22.37,58.22],[22.27,58.16],[22.15,57.97],[22,57.93],[21.99,58],[22.19,58.16],[21.88,58.26],[21.85,58.3],[21.98,58.39],[21.86,58.5],[22.27,58.51],[22.33,58.58],[22.62,58.62]]]},{id:`233`,name:`Estonia`,rings:[[[22.92,58.83],[22.84,58.78],[22.77,58.82],[22.66,58.71],[22.54,58.69],[22.47,58.71],[22.41,58.86],[22.06,58.94],[22.46,58.97],[22.65,59.09],[22.73,59.01],[22.91,58.99],[23.01,58.83],[22.92,58.83]]]},{id:`233`,name:`Estonia`,rings:[[[23.34,58.55],[23.06,58.61],[23.16,58.68],[23.33,58.65],[23.34,58.55]]]},{id:`234`,name:`Faeroe Is.`,rings:[[[-6.62,61.81],[-6.67,61.77],[-6.89,61.9],[-6.66,61.86],[-6.62,61.81]]]},{id:`234`,name:`Faeroe Is.`,rings:[[[-6.7,61.44],[-6.89,61.54],[-6.94,61.63],[-6.74,61.57],[-6.7,61.44]]]},{id:`234`,name:`Faeroe Is.`,rings:[[[-7.19,62.14],[-7.07,62.07],[-7.18,62.04],[-7.38,62.07],[-7.42,62.14],[-7.19,62.14]]]},{id:`234`,name:`Faeroe Is.`,rings:[[[-6.63,62.23],[-6.65,62.09],[-6.84,62.12],[-6.73,61.95],[-7.01,62.09],[-7.17,62.28],[-6.96,62.32],[-6.63,62.23]]]},{id:`234`,name:`Faeroe Is.`,rings:[[[-6.41,62.26],[-6.45,62.19],[-6.54,62.21],[-6.55,62.36],[-6.41,62.26]]]},{id:`208`,name:`Denmark`,rings:[[[12.57,55.79],[12.54,55.66],[12.32,55.59],[12.22,55.47],[12.39,55.39],[12.41,55.29],[12.09,55.19],[12.05,54.81],[11.86,54.77],[11.74,54.92],[11.66,55.19],[11.29,55.2],[11.17,55.33],[11.19,55.47],[11.12,55.6],[11.01,55.64],[10.98,55.72],[11.32,55.75],[11.48,55.94],[11.63,55.96],[11.69,55.91],[11.69,55.73],[11.82,55.7],[11.94,55.9],[11.87,55.97],[12.22,56.12],[12.58,56.06],[12.61,56.03],[12.53,55.92],[12.57,55.79]]]},{id:`208`,name:`Denmark`,rings:[[[9.74,54.83],[9.25,54.81],[8.67,54.9],[8.57,55.13],[8.67,55.16],[8.62,55.42],[8.13,55.6],[8.2,55.98],[8.12,56.14],[8.16,56.61],[8.55,56.56],[8.67,56.5],[8.74,56.63],[8.89,56.73],[9.07,56.79],[9.2,56.7],[9.25,57.01],[8.99,57.02],[8.77,56.72],[8.47,56.66],[8.27,56.75],[8.29,56.85],[8.43,56.98],[8.62,57.11],[9.43,57.17],[9.96,57.58],[10.61,57.74],[10.46,57.62],[10.54,57.45],[10.52,57.24],[10.29,57],[10.28,56.62],[10.49,56.52],[10.85,56.52],[10.93,56.44],[10.86,56.3],[10.76,56.24],[10.54,56.2],[10.43,56.28],[10.37,56.25],[10.18,55.87],[9.91,55.84],[10.02,55.76],[9.59,55.49],[9.67,55.27],[9.46,55.04],[9.69,55],[9.74,54.83]]]},{id:`208`,name:`Denmark`,rings:[[[10.64,55.61],[10.82,55.32],[10.78,55.13],[10.63,55.05],[9.99,55.16],[9.86,55.36],[9.86,55.52],[10.29,55.61],[10.51,55.56],[10.64,55.61]]]},{id:`208`,name:`Denmark`,rings:[[[11.36,54.89],[11.74,54.81],[11.77,54.68],[11.46,54.63],[11.04,54.77],[11.06,54.94],[11.26,54.95],[11.36,54.89]]]},{id:`208`,name:`Denmark`,rings:[[[10.73,54.75],[10.62,54.85],[10.95,55.16],[10.73,54.75]]]},{id:`208`,name:`Denmark`,rings:[[[12.55,54.97],[12.12,54.91],[12.27,55.06],[12.55,54.97]]]},{id:`208`,name:`Denmark`,rings:[[[12.67,55.6],[12.55,55.56],[12.52,55.62],[12.62,55.68],[12.67,55.6]]]},{id:`208`,name:`Denmark`,rings:[[[10.49,54.85],[10.34,54.86],[10.2,54.96],[10.49,54.85]]]},{id:`208`,name:`Denmark`,rings:[[[10.06,54.89],[9.8,54.91],[9.77,55.06],[10,54.99],[10.06,54.89]]]},{id:`208`,name:`Denmark`,rings:[[[10.61,55.78],[10.53,55.78],[10.55,55.99],[10.66,55.88],[10.61,55.78]]]},{id:`208`,name:`Denmark`,rings:[[[11.05,57.25],[10.87,57.26],[11.09,57.33],[11.17,57.32],[11.05,57.25]]]},{id:`208`,name:`Denmark`,rings:[[[15.09,55.02],[14.68,55.1],[14.72,55.24],[14.77,55.3],[15.13,55.14],[15.09,55.02]]]},{id:`203`,name:`Czechia`,rings:[[[18.83,49.51],[18.6,49.49],[18.16,49.26],[18.08,49.07],[17.76,48.89],[17.48,48.83],[17.13,48.84],[16.95,48.6],[16.88,48.7],[16.54,48.8],[16.37,48.74],[16.06,48.75],[15.82,48.86],[14.99,49],[14.92,48.77],[14.79,48.75],[14.69,48.6],[14.19,48.58],[14.05,48.6],[13.99,48.69],[13.55,48.96],[13.44,48.96],[12.92,49.33],[12.81,49.33],[12.68,49.41],[12.39,49.74],[12.51,49.9],[12.21,50.1],[12.09,50.3],[12.28,50.18],[12.55,50.39],[12.94,50.41],[13.02,50.49],[13.18,50.51],[13.38,50.62],[13.44,50.6],[13.56,50.7],[14.37,50.9],[14.25,51],[14.28,51.03],[14.55,50.99],[14.63,50.91],[14.61,50.86],[14.72,50.82],[14.98,50.89],[14.99,51.01],[15.26,50.96],[15.36,50.81],[15.73,50.74],[16.01,50.61],[16.28,50.66],[16.36,50.62],[16.42,50.57],[16.38,50.52],[16.21,50.42],[16.64,50.1],[16.99,50.24],[16.88,50.43],[17.15,50.38],[17.42,50.25],[17.7,50.31],[17.74,50.23],[17.59,50.16],[17.63,50.12],[17.88,49.97],[18.03,50.04],[18.3,49.91],[18.56,49.88],[18.6,49.76],[18.81,49.61],[18.83,49.51]]]},{name:`N. Cyprus`,rings:[[[34,35.06],[33.87,35.09],[33.47,35],[33.38,35.16],[33.19,35.17],[32.92,35.09],[32.71,35.17],[32.88,35.18],[32.94,35.39],[33.61,35.35],[34.55,35.66],[33.94,35.29],[33.91,35.2],[34,35.06]]]},{id:`196`,name:`Cyprus`,rings:[[[32.71,35.17],[32.92,35.09],[33.19,35.17],[33.38,35.16],[33.47,35],[33.87,35.09],[34,35.06],[34.05,34.99],[33.7,34.97],[33.41,34.75],[33.11,34.7],[33.01,34.57],[32.94,34.58],[32.87,34.66],[32.69,34.65],[32.45,34.73],[32.32,34.95],[32.3,35.08],[32.39,35.05],[32.56,35.16],[32.71,35.17]]]},{id:`100`,name:`Bulgaria`,rings:[[[28.01,41.97],[27.53,41.92],[27.24,42.09],[26.62,41.97],[26.51,41.83],[26.36,41.8],[26.32,41.72],[26.11,41.73],[26.07,41.67],[26.15,41.52],[26.13,41.39],[25.92,41.31],[25.25,41.24],[24.99,41.36],[24.85,41.39],[24.77,41.36],[24.49,41.56],[24.06,41.53],[24.01,41.46],[23.64,41.39],[22.92,41.34],[23,41.74],[22.84,41.99],[22.58,42.11],[22.34,42.31],[22.52,42.44],[22.44,42.63],[22.47,42.84],[22.71,42.88],[22.98,43.19],[22.5,43.52],[22.37,43.78],[22.4,43.97],[22.6,44.08],[22.63,44.19],[22.7,44.24],[23.03,44.08],[22.87,43.95],[22.92,43.83],[23.23,43.87],[25.5,43.67],[25.82,43.77],[26.22,44.01],[27.09,44.17],[27.43,44.02],[27.74,43.96],[27.88,43.99],[28.05,43.82],[28.22,43.77],[28.59,43.74],[28.56,43.5],[28.46,43.39],[28.32,43.43],[28.13,43.4],[27.93,43.19],[27.89,42.75],[27.75,42.71],[27.48,42.47],[27.71,42.35],[28.01,41.97]]]},{id:`070`,name:`Bosnia and Herz.`,rings:[[[19.19,43.53],[18.95,43.53],[19.03,43.29],[18.85,43.35],[18.68,43.23],[18.62,43.03],[18.46,43],[18.47,42.78],[18.55,42.64],[18.46,42.56],[18.12,42.69],[17.8,42.9],[17.67,42.9],[17.58,42.94],[17.66,42.98],[17.62,43.04],[17.29,43.31],[17.27,43.45],[17.08,43.52],[16.3,44.12],[16.21,44.21],[16.1,44.52],[15.74,44.77],[15.79,45.18],[15.96,45.21],[16.29,45.01],[16.53,45.22],[16.79,45.2],[16.92,45.28],[17.13,45.17],[17.5,45.12],[17.65,45.16],[17.81,45.08],[17.99,45.14],[18.66,45.08],[18.84,44.88],[19.35,44.88],[19.29,44.7],[19.15,44.53],[19.12,44.36],[19.58,44.01],[19.24,43.96],[19.5,43.64],[19.45,43.56],[19.3,43.59],[19.19,43.53]]]},{id:`056`,name:`Belgium`,rings:[[[4.22,51.39],[4.37,51.36],[4.38,51.43],[4.5,51.47],[4.64,51.42],[4.76,51.49],[4.85,51.4],[5.03,51.47],[5.1,51.35],[5.21,51.28],[5.48,51.29],[5.83,51.13],[5.64,50.84],[5.75,50.76],[5.99,50.75],[6.24,50.6],[6.18,50.52],[6.34,50.45],[6.36,50.32],[6.18,50.23],[6.12,50.12],[5.98,50.17],[5.74,49.92],[5.73,49.81],[5.88,49.65],[5.82,49.55],[5.51,49.51],[5.28,49.68],[4.87,49.79],[4.79,49.96],[4.86,50.14],[4.82,50.15],[4.55,49.96],[4.15,49.97],[4.17,50.25],[4.04,50.32],[3.79,50.35],[3.69,50.31],[3.59,50.48],[3.27,50.53],[3.23,50.66],[3.11,50.78],[2.84,50.71],[2.6,50.88],[2.53,51.1],[3.22,51.35],[3.35,51.38],[3.43,51.25],[3.58,51.29],[3.9,51.21],[4.17,51.31],[4.22,51.39]]]},{id:`112`,name:`Belarus`,rings:[[[31.76,52.1],[31.08,52.08],[30.76,51.89],[30.53,51.6],[30.63,51.36],[30.54,51.26],[30.33,51.33],[30.31,51.4],[30.16,51.48],[29.35,51.38],[29.1,51.63],[28.85,51.54],[28.73,51.43],[28.65,51.46],[28.6,51.54],[28.18,51.61],[28.01,51.56],[27.86,51.59],[27.7,51.48],[27.69,51.57],[27.3,51.6],[27.14,51.75],[25.79,51.92],[24.36,51.87],[23.98,51.59],[23.71,51.64],[23.61,51.61],[23.6,51.52],[23.55,51.71],[23.63,51.81],[23.65,52.04],[23.18,52.29],[23.41,52.52],[23.84,52.66],[23.92,52.77],[23.86,53.11],[23.6,53.6],[23.48,53.94],[24.19,53.95],[24.32,53.89],[24.77,53.97],[24.87,54.14],[25.05,54.13],[25.46,54.29],[25.51,54.16],[25.75,54.16],[25.75,54.26],[25.55,54.33],[25.72,54.56],[25.78,54.83],[25.86,54.92],[26.17,55],[26.25,55.12],[26.6,55.13],[26.78,55.27],[26.46,55.34],[26.6,55.67],[26.82,55.71],[27.05,55.83],[27.58,55.8],[27.64,55.91],[27.89,56.08],[28.12,56.15],[28.28,56.06],[28.56,56.09],[28.79,55.94],[29.09,56.02],[29.37,55.94],[29.35,55.78],[29.48,55.68],[29.94,55.85],[30.23,55.84],[30.91,55.57],[30.9,55.4],[30.81,55.28],[30.96,55.14],[30.98,55.05],[30.83,54.92],[30.8,54.78],[31.15,54.63],[31.07,54.49],[31.19,54.45],[31.4,54.2],[31.83,54.03],[31.75,53.81],[32.2,53.78],[32.45,53.69],[32.42,53.62],[32.47,53.55],[32.71,53.42],[32.7,53.34],[32.14,53.09],[31.85,53.11],[31.67,53.2],[31.42,53.2],[31.26,53.02],[31.56,52.76],[31.53,52.63],[31.62,52.55],[31.58,52.31],[31.76,52.1]]]},{id:`040`,name:`Austria`,rings:[[[9.53,47.27],[9.62,47.47],[9.52,47.52],[9.75,47.58],[10.2,47.36],[10.18,47.28],[10.37,47.37],[10.44,47.55],[10.87,47.52],[11.04,47.39],[11.3,47.42],[11.72,47.58],[12.18,47.62],[12.21,47.72],[12.48,47.64],[12.68,47.67],[12.77,47.64],[12.81,47.54],[13.02,47.48],[13.06,47.66],[12.9,47.72],[12.95,47.89],[12.76,48.08],[12.81,48.16],[13.38,48.36],[13.49,48.58],[13.73,48.54],[13.79,48.59],[13.82,48.77],[13.99,48.69],[14.05,48.6],[14.69,48.6],[14.79,48.75],[14.92,48.77],[14.99,49],[15.82,48.86],[16.06,48.75],[16.37,48.74],[16.54,48.8],[16.88,48.7],[16.95,48.6],[16.86,48.39],[17.15,48.01],[17.03,47.84],[17.07,47.71],[16.79,47.68],[16.59,47.75],[16.42,47.67],[16.64,47.61],[16.68,47.54],[16.62,47.45],[16.44,47.4],[16.46,47.27],[16.42,47.22],[16.49,47.12],[16.45,47.01],[16.33,47],[16.04,46.84],[15.98,46.8],[15.96,46.68],[15.76,46.71],[15.44,46.63],[14.89,46.61],[14.55,46.4],[12.48,46.67],[12.16,46.94],[12.17,47.08],[11.77,46.99],[11.24,46.98],[11.13,46.94],[10.99,46.78],[10.48,46.86],[10.35,46.99],[10.13,46.85],[9.88,46.94],[9.84,47.01],[9.58,47.06],[9.61,47.11],[9.53,47.27]]]},{id:`051`,name:`Armenia`,rings:[[[44.77,39.7],[44.29,40.04],[43.94,40.02],[43.67,40.13],[43.71,40.17],[43.57,40.48],[43.72,40.72],[43.63,40.93],[43.44,41.11],[44.23,41.21],[44.84,41.21],[44.81,41.26],[45,41.29],[45.19,41.15],[45.07,41.08],[45.42,40.99],[45.59,40.85],[45.38,40.64],[45.57,40.42],[45.96,40.23],[45.97,40.18],[45.88,40.02],[45.58,39.98],[46.2,39.59],[46.32,39.62],[46.48,39.56],[46.48,39.48],[46.37,39.4],[46.59,39.22],[46.4,39.19],[46.49,39.07],[46.49,38.91],[46.11,38.88],[45.95,39.18],[45.98,39.24],[45.77,39.38],[45.8,39.49],[45.75,39.56],[45.46,39.49],[45.25,39.6],[45.17,39.57],[45.12,39.7],[45.03,39.77],[44.77,39.7]],[[45.02,41.03],[45.02,41.08],[44.96,41.08],[45.02,41.03]]]},{id:`020`,name:`Andorra`,rings:[[[1.7,42.5],[1.45,42.44],[1.43,42.6],[1.5,42.64],[1.71,42.6],[1.7,42.5]]]},{id:`012`,name:`Algeria`,rings:[[[8.58,36.94],[8.6,36.83],[8.44,36.76],[8.37,36.63],[8.21,36.52],[8.35,36.37],[8.25,35.8],[8.39,35.2],[8.31,35.09],[8.25,34.73],[8.12,34.56],[7.84,34.41],[7.75,34.25],[7.52,34.08],[7.5,33.83],[7.73,33.27],[8.11,33.06],[8.21,32.93],[8.33,32.54],[9.05,32.07],[9.52,30.23],[9.31,30.12],[9.64,29.64],[9.8,29.18],[9.84,28.97],[9.82,28.56],[9.92,27.79],[9.75,27.33],[9.79,27.04],[9.89,26.85],[9.88,26.63],[9.86,26.55],[9.49,26.33],[9.42,26.15],[10,25.33],[10.03,25.05],[10.25,24.59],[10.4,24.49],[10.69,24.55],[11.51,24.32],[11.97,23.52],[7.48,20.87],[5.84,19.48],[3.44,19],[3.26,19.01],[3.11,19.15],[3.26,19.41],[3.2,19.79],[3.13,19.85],[2.41,20.06],[2.22,20.25],[1.76,20.33],[1.61,20.55],[1.16,20.82],[1.15,21.1],[-4.52,24.8],[-8.69,27.29],[-8.68,28.69],[-8.26,28.98],[-7.14,29.62],[-6.64,29.57],[-6.52,29.66],[-6.48,29.82],[-6,29.83],[-5.45,29.96],[-5.18,30.17],[-4.97,30.47],[-4.32,30.7],[-3.99,30.91],[-3.67,30.96],[-3.62,31.07],[-3.83,31.2],[-3.79,31.36],[-3.85,31.62],[-3.77,31.69],[-3.44,31.71],[-3.02,31.83],[-2.93,32.04],[-2.86,32.08],[-2.45,32.13],[-1.23,32.11],[-1.24,32.34],[-1.06,32.47],[-1.45,32.79],[-1.68,33.32],[-1.63,33.57],[-1.72,33.78],[-1.71,34.18],[-1.79,34.37],[-1.73,34.47],[-1.85,34.61],[-1.79,34.75],[-2.13,34.97],[-2.22,35.1],[-1.91,35.09],[-1.67,35.18],[-1.34,35.36],[-1.09,35.58],[-.43,35.86],[-.05,35.83],[.31,36.16],[1.26,36.52],[2.59,36.6],[2.97,36.78],[3.52,36.8],[3.78,36.9],[4.76,36.9],[5.29,36.65],[6.06,36.86],[6.25,36.94],[6.33,37.05],[6.49,37.09],[6.58,37],[6.93,36.92],[7.24,36.97],[7.21,37.09],[7.43,37.06],[7.91,36.86],[8.58,36.94]]]},{id:`008`,name:`Albania`,rings:[[[19.34,41.87],[19.36,42.07],[19.28,42.17],[19.7,42.65],[19.79,42.48],[20.06,42.55],[20.24,42.34],[20.52,42.17],[20.58,41.92],[20.5,41.71],[20.51,41.57],[20.45,41.52],[20.49,41.27],[20.71,40.93],[20.93,40.9],[21.03,40.62],[20.95,40.49],[20.81,40.45],[20.66,40.12],[20.31,39.98],[20.38,39.8],[20.31,39.8],[20.21,39.65],[20,39.71],[19.85,40.04],[19.49,40.21],[19.32,40.41],[19.46,40.41],[19.34,40.66],[19.46,40.93],[19.44,41.43],[19.58,41.64],[19.58,41.79],[19.34,41.87]]]}],croatia:[[[16.358,46.555],[16.239,46.501],[16.295,46.38],[16.048,46.395],[16.066,46.342],[16.006,46.31],[15.775,46.26],[15.78,46.219],[15.633,46.21],[15.587,46.147],[15.714,46.045],[15.702,45.847],[15.531,45.849],[15.249,45.721],[15.319,45.674],[15.347,45.713],[15.336,45.67],[15.364,45.689],[15.394,45.648],[15.269,45.608],[15.374,45.485],[15.338,45.451],[15.148,45.424],[14.913,45.528],[14.896,45.479],[14.811,45.462],[14.679,45.532],[14.693,45.568],[14.564,45.675],[14.494,45.55],[14.312,45.474],[13.994,45.518],[13.977,45.45],[13.876,45.427],[13.499,45.51],[13.601,45.042],[13.639,45.061],[13.743,44.982],[13.786,44.857],[13.938,44.763],[14.053,44.941],[14.156,44.966],[14.149,45.071],[14.319,45.349],[14.546,45.274],[14.825,45.102],[14.906,44.941],[14.865,44.724],[14.965,44.573],[15.268,44.358],[15.527,44.249],[15.258,44.337],[15.284,44.251],[15.179,44.306],[15.186,44.251],[15.091,44.267],[15.123,44.195],[15.535,43.869],[15.59,43.769],[15.828,43.715],[15.913,43.518],[16.051,43.464],[16.185,43.469],[16.181,43.503],[16.201,43.47],[16.363,43.478],[16.271,43.519],[16.425,43.536],[16.376,43.5],[16.866,43.392],[17.522,42.927],[17.186,43.026],[16.985,43.052],[16.994,43.003],[17.212,42.97],[17.76,42.755],[17.813,42.795],[18.029,42.649],[18.196,42.612],[18.22,42.554],[18.525,42.386],[18.409,42.575],[18.345,42.616],[18.238,42.604],[17.882,42.813],[17.815,42.912],[17.685,42.924],[17.634,42.882],[17.53,42.929],[17.704,42.973],[17.665,43.054],[17.331,43.26],[17.246,43.403],[17.274,43.465],[17.005,43.573],[16.499,44.024],[16.306,44.115],[16.182,44.274],[16.205,44.344],[16.11,44.398],[16.164,44.404],[16.126,44.489],[15.998,44.583],[16.048,44.622],[15.891,44.744],[15.825,44.715],[15.717,44.83],[15.785,44.845],[15.731,44.937],[15.759,45.168],[15.822,45.22],[15.97,45.228],[16.101,45.097],[16.299,44.998],[16.503,45.221],[16.813,45.185],[16.924,45.276],[16.928,45.229],[17.013,45.235],[17.172,45.147],[17.24,45.149],[17.26,45.191],[17.33,45.146],[17.451,45.154],[17.474,45.111],[17.658,45.13],[17.833,45.047],[17.996,45.145],[18.125,45.081],[18.216,45.081],[18.251,45.136],[18.413,45.112],[18.496,45.054],[18.541,45.096],[18.646,45.055],[18.66,45.092],[18.719,44.998],[18.787,44.99],[18.761,44.897],[18.969,44.849],[19.012,44.856],[18.993,44.918],[19.056,44.901],[19.138,44.953],[19.042,44.977],[19.087,45.01],[19.077,45.141],[19.121,45.132],[19.164,45.198],[19.433,45.194],[19.405,45.237],[19.175,45.264],[18.981,45.359],[18.993,45.493],[19.087,45.496],[19.007,45.553],[18.873,45.565],[18.955,45.661],[18.898,45.707],[18.967,45.71],[18.894,45.713],[18.967,45.732],[18.951,45.769],[18.901,45.744],[18.839,45.772],[18.911,45.784],[18.888,45.827],[18.836,45.808],[18.894,45.918],[18.794,45.881],[18.65,45.919],[18.611,45.843],[18.437,45.739],[18.119,45.792],[17.9,45.797],[17.85,45.764],[17.821,45.805],[17.65,45.837],[17.554,45.938],[17.34,45.943],[17.381,45.964],[17.25,46.012],[17.284,46.029],[17.193,46.075],[17.225,46.101],[17.168,46.109],[17.147,46.169],[16.876,46.281],[16.855,46.353],[16.362,46.554]],[[14.319,45.178],[14.294,45.177],[14.25,45.125],[14.291,45.065],[14.337,45.04],[14.332,45.01],[14.375,44.967],[14.382,44.909],[14.309,44.956],[14.287,44.916],[14.313,44.823],[14.346,44.81],[14.378,44.74],[14.378,44.702],[14.329,44.716],[14.323,44.702],[14.376,44.603],[14.354,44.563],[14.396,44.549],[14.404,44.564],[14.434,44.527],[14.528,44.473],[14.525,44.445],[14.575,44.439],[14.518,44.517],[14.418,44.584],[14.39,44.631],[14.395,44.67],[14.488,44.599],[14.542,44.629],[14.474,44.698],[14.476,44.742],[14.445,44.789],[14.465,44.788],[14.442,44.875],[14.483,44.954],[14.465,44.982],[14.43,44.978],[14.396,45.013],[14.358,45.088],[14.362,45.158],[14.323,45.173]],[[14.83,44.19],[14.853,44.154],[14.823,44.157],[14.83,44.168],[14.808,44.147],[14.87,44.129],[14.902,44.091],[14.961,44.062],[15.111,43.911],[15.228,43.841],[15.207,43.839],[15.237,43.806],[15.273,43.79],[15.277,43.813],[15.317,43.782],[15.283,43.781],[15.486,43.674],[15.513,43.676],[15.476,43.689],[15.514,43.684],[15.466,43.717],[15.485,43.722],[15.473,43.733],[15.361,43.783],[15.232,43.882],[15.371,43.814],[15.333,43.878],[15.217,43.905],[15.081,44.005],[15.05,44.008],[15.004,44.084],[14.944,44.105],[14.842,44.189]],[[14.731,44.709],[14.721,44.694],[14.746,44.66],[14.903,44.516],[14.912,44.5],[14.885,44.503],[14.9,44.48],[14.963,44.459],[15.027,44.393],[15.073,44.396],[15.105,44.378],[15.077,44.361],[15.098,44.318],[15.168,44.288],[15.129,44.331],[15.23,44.295],[15.206,44.319],[15.23,44.319],[15.192,44.35],[15.248,44.321],[15.242,44.348],[15.067,44.473],[15.045,44.517],[14.994,44.535],[14.905,44.613],[14.86,44.615],[14.857,44.597]],[[14.554,45.258],[14.523,45.239],[14.539,45.214],[14.518,45.227],[14.532,45.168],[14.512,45.123],[14.466,45.13],[14.459,45.1],[14.421,45.095],[14.421,45.07],[14.486,45.023],[14.61,45.011],[14.603,44.981],[14.748,44.936],[14.746,44.969],[14.8,44.961],[14.815,44.979],[14.735,45.039],[14.731,45.071],[14.697,45.068],[14.659,45.093],[14.664,45.158],[14.657,45.149],[14.627,45.164],[14.574,45.23],[14.596,45.228],[14.56,45.254]],[[16.666,42.999],[16.593,42.98],[16.659,42.966],[16.625,42.92],[16.694,42.895],[16.672,42.919],[16.779,42.89],[16.9,42.898],[16.959,42.923],[17.096,42.904],[17.176,42.909],[17.197,42.914],[17.182,42.933],[17.204,42.941],[17.169,42.939],[17.172,42.962],[17.175,42.952],[17.208,42.962],[17.034,42.985],[16.806,42.969],[16.726,42.992]],[[16.55,43.239],[16.505,43.225],[16.568,43.186],[16.489,43.216],[16.447,43.214],[16.355,43.204],[16.381,43.172],[16.303,43.182],[16.292,43.171],[16.369,43.142],[16.477,43.155],[16.648,43.116],[16.74,43.125],[16.973,43.111],[17.194,43.125],[17.145,43.143],[16.719,43.167],[16.672,43.212],[16.573,43.222],[16.561,43.238]],[[15.675,43.727],[15.661,43.706],[15.623,43.713],[15.63,43.693],[15.717,43.653],[15.587,43.686],[15.651,43.628],[15.736,43.62],[15.713,43.644],[15.737,43.645],[15.737,43.663],[15.755,43.66],[15.766,43.677],[15.835,43.641],[15.81,43.673],[15.685,43.726]],[[14.715,44.857],[14.666,44.846],[14.686,44.797],[14.662,44.806],[14.638,44.792],[14.685,44.752],[14.756,44.747],[14.835,44.683],[14.864,44.701],[14.861,44.725],[14.743,44.816],[14.76,44.837],[14.748,44.852]],[[16.201,43.42],[16.153,43.409],[16.164,43.39],[16.533,43.264],[16.781,43.256],[16.875,43.277],[16.896,43.316],[16.771,43.363],[16.544,43.396],[16.412,43.397],[16.428,43.368],[16.412,43.338],[16.267,43.418]],[[14.979,44.19],[15.034,44.142],[15.055,44.148],[15.188,44.032],[15.225,44.024],[15.354,43.908],[15.447,43.888],[15.364,43.972],[15.265,44.018],[15.204,44.08],[15.045,44.168],[15.005,44.171]],[[14.745,44.299],[14.724,44.281],[14.741,44.244],[14.76,44.244],[14.762,44.265],[14.823,44.197],[14.812,44.228],[14.937,44.17],[14.877,44.239],[14.87,44.225],[14.801,44.266]],[[17.825,42.763],[17.826,42.743],[17.787,42.762],[17.771,42.753],[17.891,42.698],[17.928,42.702],[17.909,42.693],[17.924,42.674],[18.019,42.666],[17.849,42.756]],[[16.174,43.087],[16.024,43.057],[16.052,43.038],[16.072,43.044],[16.077,43.025],[16.051,43.006],[16.223,43.016],[16.253,43.032],[16.257,43.068],[16.194,43.082]],[[15.259,43.943],[15.272,43.929],[15.246,43.928],[15.253,43.907],[15.282,43.925],[15.343,43.896],[15.273,43.939]],[[13.711,44.946],[13.735,44.906],[13.722,44.921],[13.705,44.914],[13.743,44.885],[13.777,44.912],[13.74,44.941]],[[15.06,44.087],[15.062,44.07],[15.039,44.083],[15.098,44.019],[15.164,43.994],[15.171,44.012],[15.095,44.073]],[[14.273,44.691],[14.228,44.661],[14.219,44.626],[14.268,44.602],[14.261,44.648],[14.284,44.664]],[[15.476,43.872],[15.469,43.847],[15.492,43.824],[15.531,43.827],[15.495,43.865]],[[14.835,44.492],[14.93,44.405],[14.993,44.393],[14.867,44.458],[14.836,44.491]]],cities:[[`Osijek`,18.6955,45.555,1],[`Zagreb`,15.98,45.81,1],[`Split`,16.44,43.51,1],[`Rijeka`,14.44,45.33,1],[`Zadar`,15.23,44.12,0],[`Dubrovnik`,18.09,42.65,0],[`Pula`,13.85,44.87,0],[`Varaždin`,16.34,46.31,0],[`Slavonski Brod`,18.01,45.16,0],[`Vukovar`,19,45.35,0],[`Đakovo`,18.41,45.31,0],[`Vinkovci`,18.8,45.29,0]],capitals:[[`Beč`,16.37,48.21],[`Budimpešta`,19.04,47.5],[`München`,11.58,48.14],[`Ljubljana`,14.51,46.06],[`Beograd`,20.46,44.79],[`Sarajevo`,18.41,43.86],[`Milano`,9.19,45.46],[`Berlin`,13.4,52.52],[`Prag`,14.42,50.08],[`Varšava`,21.01,52.23],[`Pariz`,2.35,48.86],[`Amsterdam`,4.9,52.37],[`Rim`,12.5,41.9],[`Zürich`,8.54,47.37],[`Bratislava`,17.11,48.15],[`London`,-.13,51.51]]},Ou=Math.PI/180,ku=[18.6955,45.555],Au=Math.cos(45*Ou),ju=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),Mu=(e,t,n)=>e+(t-e)*n,Nu=(e,t,n)=>{let r=ju((n-e)/(t-e));return r*r*(3-2*r)},Pu=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r));function Fu(e,t,n=1,r=new q){let i=t*Ou,a=e*Ou;return r.set(n*Math.cos(i)*Math.sin(a),n*Math.sin(i),n*Math.cos(i)*Math.cos(a))}function Iu(e,t){return[(e-ku[0])*4*Au,-(t-ku[1])*4]}function Lu(e){return e<1?22.5**(e-1):500**(e-1)}function Ru(e=1){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zu({count:e,color:t=`#7fa2ff`,core:n=`#ffffff`,size:r=1,additive:i=!0,depthTest:a=!0}){let o=new mr,s=new Float32Array(e*3),c=new Float32Array(e).fill(1),l=new Float32Array(e).fill(1);o.setAttribute(`position`,new er(s,3)),o.setAttribute(`aAlpha`,new er(c,1)),o.setAttribute(`aSize`,new er(l,1));let u={uColor:{value:new Y(t)},uCore:{value:new Y(n)},uSize:{value:r},uPR:{value:1},uOpacity:{value:1},uMax:{value:40}},d=new no({uniforms:u,transparent:!0,depthWrite:!1,depthTest:a,blending:i?2:1,vertexShader:`
      attribute float aAlpha; attribute float aSize;
      uniform float uSize; uniform float uPR; uniform float uMax; varying float vA;
      void main(){
        vA = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float sc = length(modelMatrix[0].xyz);
        gl_PointSize = min(uMax * uPR, aSize * uSize * uPR * 300.0 * sc / max(0.5, -mv.z));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uCore; uniform float uOpacity; varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float halo = pow(1.0 - d * 2.0, 2.0);
        float core = smoothstep(0.18, 0.0, d);
        gl_FragColor = vec4(mix(uColor, uCore, core), (halo * 0.7 + core) * vA * uOpacity);
      }`}),f=new ui(o,d);return f.frustumCulled=!1,{points:f,pos:s,alpha:c,size:l,uniforms:u,geometry:o,material:d}}function Bu(e=`#8aa6ff`,t=1,n=!1){return new Kr({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:n?2:1})}function Vu(e,t,n=48,r=.25){let i=[],a=e.angleTo(t);for(let o=0;o<=n;o++){let s=o/n,c=new q().copy(e).lerp(t,s).normalize();if(a>.01){let n=Math.sin(a);c.copy(e).multiplyScalar(Math.sin((1-s)*a)/n).add(new q().copy(t).multiplyScalar(Math.sin(s*a)/n))}c.multiplyScalar(1+Math.sin(Math.PI*s)*r*Math.min(1,a*1.4)),i.push(c)}return i}function Hu(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function Uu({geo:e,lite:t}){let n=Ru(7),r=t?30:48,i=Hu(t?e.globe.d30:e.globe.d48),a=new pn;a.name=`globus`;let o=new pn;a.add(o);let s=ku[1]*Ou,c=ku[0]*Ou,l=Fu(ku[0],ku[1]),u=new q(-Math.sin(s)*Math.sin(c),Math.cos(s),-Math.sin(s)*Math.cos(c)).normalize(),d=new q().crossVectors(u,l).normalize(),f=new Rt().makeBasis(d,l,u),p=new Rt().makeBasis(new q(1,0,0),new q(0,1,0),new q(0,0,-1)),m=new Rt().multiplyMatrices(p,f.clone().transpose());a.quaternion.setFromRotationMatrix(m);let h=new Ua(1,r),g=h.attributes.position,_=g.count/3,v=new Float32Array(g.count*3),y=[],b=[],x=[],S=new Y,C=new q;for(let e=0;e<_;e++){let t=i[e>>3]>>(e&7)&1,r=.9+n()*.2;S.setRGB(.028*r,.045*r,.085*r);for(let t=0;t<3;t++)S.toArray(v,(e*3+t)*3);if(t){C.set(0,0,0);let t=new Y().setRGB(.055*r,.085*r,.17*r);for(let n=0;n<3;n++){let r=g.getX(e*3+n),i=g.getY(e*3+n),a=g.getZ(e*3+n);y.push(r*1.006,i*1.006,a*1.006),b.push(t.r,t.g,t.b),C.x+=r,C.y+=i,C.z+=a}x.push(C.clone().normalize())}}h.setAttribute(`color`,new er(v,3));let w=new io({vertexColors:!0,flatShading:!0,roughness:.82,metalness:.15,transparent:!0}),T=new Rr(h,w);o.add(T);let E=new mr;E.setAttribute(`position`,new X(y,3)),E.setAttribute(`color`,new X(b,3)),E.computeVertexNormals();let D=new io({vertexColors:!0,flatShading:!0,roughness:.7,metalness:.1,emissive:new Y(`#0d1a3a`),emissiveIntensity:.35,transparent:!0}),O=new Rr(E,D);o.add(O);let k=t?2:1,A=zu({count:Math.ceil(x.length/k),color:`#5f7fd6`,core:`#bcd0ff`,size:.016,additive:!0});for(let e=0,t=0;e<x.length;e+=k,t++)x[e].clone().multiplyScalar(1.009).toArray(A.pos,t*3),A.alpha[t]=.25+n()*.35;o.add(A.points);let j=[],M=new q,N=new q;for(let t of e.europe)for(let e of t.rings)for(let t=0;t<e.length-1;t++)Fu(e[t][0],e[t][1],1.0075,M),Fu(e[t+1][0],e[t+1][1],1.0075,N),j.push(M.x,M.y,M.z,N.x,N.y,N.z);for(let t of e.croatia)for(let e=0;e<t.length-1;e++)Fu(t[e][0],t[e][1],1.0085,M),Fu(t[e+1][0],t[e+1][1],1.0085,N),j.push(M.x,M.y,M.z,N.x,N.y,N.z);let P=new mr;P.setAttribute(`position`,new X(j,3));let F=Bu(`#4a66b8`,.55),ee=new ii(P,F);o.add(ee);let te={uColor:{value:new Y(`#3b6bff`)},uOpacity:{value:1}},ne=new Rr(new qa(1.2,64,32),new no({uniforms:te,side:1,transparent:!0,depthWrite:!1,blending:2,vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(clamp(-dot(vN, vV), 0.0, 1.0), 1.7); gl_FragColor = vec4(uColor, f * 0.95 * uOpacity); }`}));a.add(ne);let re=Fu(ku[0],ku[1]),ie=[re.clone()];e.capitals.forEach(([,e,t])=>ie.push(Fu(e,t))),e.cities.forEach(([,e,t])=>ie.push(Fu(e,t)));let ae=t?70:140;for(let e=0;e<ae;e++)ie.push(x[n()*x.length|0].clone());let oe=zu({count:ie.length,color:`#4f7bff`,core:`#e8eeff`,size:.065}),se=new Float32Array(ie.length);ie.forEach((t,r)=>{t.clone().multiplyScalar(1.012).toArray(oe.pos,r*3),se[r]=r===0?2.4:r<1+e.capitals.length?1.2:.55+n()*.5,oe.size[r]=se[r]}),o.add(oe.points);let I=[],L=[],R=[],ce=t?34:64;for(let e=0;e<ce;e++){let t=e%3==0,r=1+(n()*(ie.length-1)|0),i=t?0:1+(n()*(ie.length-1)|0);r===i||ie[r].angleTo(ie[i])<.03||R.push([r,i,t])}R.forEach(([e,t,r])=>{let i=Vu(ie[e],ie[t],40,.22).map(e=>e.multiplyScalar(1.012));I.push({pts:i,toO:r,t:n(),speed:.12+n()*.18});for(let e=0;e<i.length-1;e++)L.push(i[e].x,i[e].y,i[e].z,i[e+1].x,i[e+1].y,i[e+1].z)});let le=new mr;le.setAttribute(`position`,new X(L,3));let ue=Bu(`#3d63e0`,.22,!0),de=new ii(le,ue);o.add(de);let fe=zu({count:I.length*6,color:`#6f93ff`,core:`#ffffff`,size:.06});o.add(fe.points);let pe=new q;function me(e,t,n){let r=Math.min(e.length-1.001,Math.max(0,t*(e.length-1))),i=Math.floor(r);return n.copy(e[i]).lerp(e[i+1],r-i)}let he=[w,D,A.material,F,oe.material,ue,fe.material];return{group:a,spin:o,update(e){if(a.visible=e.alpha>.002,!a.visible)return;o.rotation.y=e.spin,w.opacity=D.opacity=e.alpha,w.transparent=D.transparent=e.alpha<.999,w.depthWrite=D.depthWrite=e.alpha>.5,A.uniforms.uOpacity.value=e.alpha,F.opacity=.5*e.alpha*(.6+e.net*.4),te.uOpacity.value=e.alpha*(1-e.dive*.9),oe.uniforms.uOpacity.value=e.alpha,ue.opacity=(.22+.22*e.net+.25*e.finale)*e.alpha,fe.uniforms.uOpacity.value=e.alpha,[A,oe,fe].forEach(t=>t.uniforms.uPR.value=e.pr);for(let t=0;t<ie.length;t++){let n=Math.sin(e.time*1.6+t*1.7)*.5+.5;oe.size[t]=se[t]*(.75+.5*n)*(t===0?1+e.finale*2.2:1),oe.alpha[t]=t===0?1:.55+.45*n}oe.geometry.attributes.aSize.needsUpdate=!0,oe.geometry.attributes.aAlpha.needsUpdate=!0;let t=.6+e.net*.8+e.finale;I.forEach((n,r)=>{e.reduce||(n.t=(n.t+e.dt*n.speed*t)%1);let i=n.toO?.55+e.finale*.45:.6*(1-e.finale*.6);for(let e=0;e<6;e++)me(n.pts,Math.max(0,n.t-e*.018),pe),pe.toArray(fe.pos,(r*6+e)*3),fe.alpha[r*6+e]=i*(1-e/6)*Math.min(1,n.t*8)*Math.min(1,(1-n.t)*10),fe.size[r*6+e]=e===0?1.4:.9-e*.1}),fe.geometry.attributes.position.needsUpdate=!0,fe.geometry.attributes.aAlpha.needsUpdate=!0,fe.geometry.attributes.aSize.needsUpdate=!0},osijekWorld(e=new q){return e.copy(re).multiplyScalar(1.02).applyMatrix4(o.matrixWorld)},dispose(){he.forEach(e=>e.dispose()),[h,E,A.geometry,P,oe.geometry,le,fe.geometry,ne.geometry].forEach(e=>e.dispose()),ne.material.dispose()}}}function Wu(e){let t=([e,t])=>{let[n,r]=Iu(e,t);return new K(n,-r)},n=new na(e[0].map(t));for(let r=1;r<e.length;r++)n.holes.push(new ta(e[r].map(t)));return n}function Gu(e,t,n){for(let r of e)for(let e=0;e<r.length-1;e++){let[i,a]=Iu(r[e][0],r[e][1]),[o,s]=Iu(r[e+1][0],r[e+1][1]);n.push(i,t,a,o,t,s)}}function Ku({geo:e,lite:t}){let n=Ru(11),r=new pn;r.name=`europa`;let i={uOpacity:{value:1},uColor:{value:new Y(`#203057`)}},a=new Rr(new Wa(480,480,1,1).rotateX(-Math.PI/2),new no({uniforms:i,transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
        float grid(vec2 p, float s, float w){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y) / w, 1.0); }
        void main(){
          float d = length(vP + vec2(6.0, -4.0));
          float fade = 1.0 - smoothstep(30.0, 150.0, d);
          float g = grid(vP, 1.0, 1.0) * 0.25 + grid(vP, 4.0, 1.2) * 0.6;
          gl_FragColor = vec4(uColor, g * fade * uOpacity * 0.75);
        }`}));a.position.y=-.02,a.renderOrder=-1,r.add(a);let o=[],s=[],c=[`#0d1528`,`#101a30`,`#0f182c`,`#121c33`];for(let t of e.europe){let e=new Ga(Wu(t.rings),1),r=new Y(c[n()*c.length|0]),i=e.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)r.toArray(a,e*3);e.setAttribute(`color`,new er(a,3)),o.push(e),Gu(t.rings,.03,s)}let l=Ju(o);l.rotateX(-Math.PI/2);let u=new Er({vertexColors:!0,transparent:!0,depthWrite:!1}),d=new Rr(l,u);r.add(d);let f=new mr;f.setAttribute(`position`,new X(s,3));let p=Bu(`#33497f`,.7);r.add(new ii(f,p));let m=new pn;m.name=`hrvatska`;let h=Ju(e.croatia.map(e=>new Ba(Wu([e]),{depth:1,bevelEnabled:!1,curveSegments:1})),!1);h.rotateX(-Math.PI/2);let g=new io({color:`#13224f`,emissive:new Y(`#1a2f9e`),emissiveIntensity:.3,roughness:.6,metalness:.2,flatShading:!0,transparent:!0}),_=new io({color:`#2347ff`,emissive:new Y(`#2347ff`),emissiveIntensity:.9,roughness:.4,transparent:!0}),v=new Rr(h,[g,_]);m.add(v);let y=[],b=[];Gu(e.croatia,1.002,y),Gu(e.croatia,.04,b);let x=Bu(`#9fb6ff`,1,!0),S=new ii(new mr().setAttribute(`position`,new X(y,3)),x);m.add(S),r.add(m);let C=Bu(`#5f80ff`,.9,!0),w=new ii(new mr().setAttribute(`position`,new X(b,3)),C);r.add(w);let T=[],E=e.croatia[0].map(([e,t])=>Iu(e,t)),D=Math.min(...E.map(e=>e[0])),O=Math.max(...E.map(e=>e[0])),k=Math.min(...E.map(e=>e[1])),A=Math.max(...E.map(e=>e[1])),j=t?.42:.28;for(let e=D;e<O;e+=j)for(let t=k;t<A;t+=j)qu(e,t,E)&&T.push([e+(n()-.5)*.08,t+(n()-.5)*.08]);let M=zu({count:T.length,color:`#4f7bff`,core:`#cfe0ff`,size:.16});T.forEach(([e,t],r)=>{M.pos[r*3]=e,M.pos[r*3+1]=1.02,M.pos[r*3+2]=t,M.alpha[r]=.2+n()*.5}),m.add(M.points);let N=t?1400:2800,P=zu({count:N,color:`#ffb35a`,core:`#fff0d0`,size:.24,depthTest:!1});P.uniforms.uMax.value=13,P.points.renderOrder=2;let F=[[18.41,45.31,1],[19,45.35,1],[18.8,45.29,.9],[18.42,45.66,.6],[18.4,45.68,.5],[18.1,45.49,.6],[18.6,45.77,.6],[18.17,45.76,.5],[18.69,45.43,.4],[18.89,45.47,.4]].map(([e,t,n])=>[...Iu(e,t),n]),ee=()=>Math.sqrt(-2*Math.log(n()+1e-6))*Math.cos(n()*Math.PI*2);for(let e=0;e<N;e++){let t,r,i=n();if(i<.38)t=ee()*.09,r=ee()*.06+.01;else if(i<.62)t=ee()*.3,r=ee()*.22;else{let e=F[n()*F.length|0],i=.025+e[2]*.03;t=e[0]+ee()*i,r=e[1]+ee()*i}P.pos[e*3]=t,P.pos[e*3+1]=1.03,P.pos[e*3+2]=r,P.alpha[e]=.2+n()*.8,P.size[e]=.5+n()*n()*1.8}m.add(P.points);let te=new Y(`#13224f`),ne=new Y(`#070b1a`),re=zu({count:e.cities.length,color:`#6f93ff`,core:`#ffffff`,size:.11});e.cities.forEach(([,e,t,n],r)=>{let[i,a]=Iu(e,t);re.pos[r*3]=i,re.pos[r*3+1]=1.08,re.pos[r*3+2]=a,re.size[r]=r===0?2.6:n?1.3:.8}),m.add(re.points);let ie=[],ae=[];e.capitals.forEach(([,e,t])=>{let[r,i]=Iu(e,t),a=new q(0,1.08,0),o=new q(r,.1,i),s=2+a.distanceTo(o)*.22,c=[];for(let e=0;e<=36;e++){let t=e/36,n=a.clone().lerp(o,t);n.y+=Math.sin(Math.PI*t)*s,c.push(n)}for(let e=0;e<c.length-1;e++)ae.push(...c[e].toArray(),...c[e+1].toArray());ie.push({pts:c,t:n(),speed:.18+n()*.12,dir:n()<.5?1:-1})});let oe=Bu(`#4a6ff0`,.4,!0),se=new ii(new mr().setAttribute(`position`,new X(ae,3)),oe);r.add(se);let I=zu({count:e.capitals.length,color:`#4f7bff`,core:`#dfe7ff`,size:.32});e.capitals.forEach(([,e,t],n)=>{let[r,i]=Iu(e,t);I.pos[n*3]=r,I.pos[n*3+1]=.1,I.pos[n*3+2]=i}),r.add(I.points);let L=zu({count:ie.length*5,color:`#7f9fff`,core:`#ffffff`,size:.36});r.add(L.points);let R=[M,re,I,L,P],ce=new q;return{group:r,cro:m,cityWorld(e,t=new q){return t.fromArray(re.pos,e*3).applyMatrix4(m.matrixWorld)},update(e){if(r.visible=e.alpha>.002,!r.visible)return;let t=e.alpha;i.uOpacity.value=t,u.opacity=t*(1-e.cityFade*.7),p.opacity=.7*t*(1-e.cityFade);let n=Math.max(.001,e.lift);m.scale.y=n*(1-e.cityFade*.985),g.opacity=_.opacity=t;let a=Nu(1.05,1.5,e.Z||1);g.emissiveIntensity=(.22+.18*e.lift)*(1-.85*a),g.color.lerpColors(te,ne,a),P.uniforms.uOpacity.value=t*Nu(1.08,1.4,e.Z||1)*(1-Nu(1.55,1.8,e.Z||1)),x.opacity=t*Nu(.02,.4,e.lift)*(1-e.cityFade),C.opacity=t*(1-e.cityFade),oe.opacity=.42*t*e.net*(1-e.cityFade),R.forEach(t=>{t.uniforms.uPR.value=e.pr}),M.uniforms.uOpacity.value=t*Nu(.3,1,e.lift)*(1-e.cityFade),re.uniforms.uOpacity.value=t*Nu(.2,.9,e.lift)*(1-e.cityFade),I.uniforms.uOpacity.value=t*e.net*(1-e.cityFade),L.uniforms.uOpacity.value=t*e.net*(1-e.cityFade);for(let t=0;t<M.alpha.length;t+=7)M.alpha[t]=.25+.5*(Math.sin(e.time*2+t)*.5+.5);M.geometry.attributes.aAlpha.needsUpdate=!0,ie.forEach((t,n)=>{e.reduce||(t.t=(t.t+e.dt*t.speed)%1);for(let e=0;e<5;e++){let r=t.dir>0?t.t-e*.02:1-t.t+e*.02,i=Math.min(t.pts.length-1.001,Math.max(0,r*(t.pts.length-1))),a=Math.floor(i);ce.copy(t.pts[a]).lerp(t.pts[a+1],i-a).toArray(L.pos,(n*5+e)*3),L.alpha[n*5+e]=(1-e/5)*Math.min(1,t.t*6)*Math.min(1,(1-t.t)*6)}}),L.geometry.attributes.position.needsUpdate=!0,L.geometry.attributes.aAlpha.needsUpdate=!0},dispose(){r.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(e=>e.dispose())})}}}function qu(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function Ju(e,t=!0){let n=e.map(e=>e.index?e.toNonIndexed():e),r=0;n.forEach(e=>r+=e.attributes.position.count);let i=new Float32Array(r*3),a=new Float32Array(r*3),o=t?new Float32Array(r*3):null,s=new mr,c=0,l=[];return n.forEach(e=>{i.set(e.attributes.position.array,c*3),e.attributes.normal&&a.set(e.attributes.normal.array,c*3),o&&e.attributes.color&&o.set(e.attributes.color.array,c*3),(e.groups.length?e.groups:[{start:0,count:e.attributes.position.count,materialIndex:0}]).forEach(e=>l.push({start:c+e.start,count:e.count,materialIndex:e.materialIndex})),c+=e.attributes.position.count,e.dispose()}),s.setAttribute(`position`,new er(i,3)),s.setAttribute(`normal`,new er(a,3)),o&&s.setAttribute(`color`,new er(o,3)),t||l.forEach(e=>s.addGroup(e.start,e.count,e.materialIndex)),s}function Yu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new mr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Xu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Xu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Xu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new er(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Zu(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var Qu={brick:`#8e3825`,brickDark:`#6c2a1b`,trim:`#b4583a`,roof:`#2b3244`,spire:`#232a3a`,dark:`#0b0d13`,stone:`#c9b9a4`};function $u(e,t){let n=e.index?e.toNonIndexed():e;n!==e&&e.dispose(),n.deleteAttribute(`uv`);let r=new Y(t),i=n.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)r.toArray(a,e*3);return n.setAttribute(`color`,new er(a,3)),n.attributes.normal||n.computeVertexNormals(),n}function ed(e,t,n,r,i,a,o){return $u(new gi(e,t,n).translate(r,i+t/2,a),o)}function td(e,t,n,r,i,a,o,s){let c=e/2,l=t/2,u=[-c,0,-l,-c,0,l,-c,n,0,c,0,l,c,0,-l,c,n,0,-c,0,l,c,0,l,c,n,0,-c,0,l,c,n,0,-c,n,0,c,0,-l,-c,0,-l,-c,n,0,c,0,-l,-c,n,0,c,n,0],d=new mr;return d.setAttribute(`position`,new X(u,3)),o===`z`&&d.rotateY(Math.PI/2),d.translate(r,i,a),d.computeVertexNormals(),$u(d,s)}function nd(e,t,n,r,i,a,o,s,c){let l=e/2,u=o,d=o+s*t,f=[-l,a+r,u,l,a+r,u,l,a+n,d,-l,a+r,u,l,a+n,d,-l,a+n,d],p=new mr;return p.setAttribute(`position`,new X(f,3)),p.translate(i,0,0),p.computeVertexNormals(),$u(p,c)}function rd(e,t,n,r,i,a,o,s=0){return $u(new yi(e,t,n,1).rotateY(s).translate(r,i+t/2,a),o)}function id(e,t,n,r,i,a,o,s=0,c=Math.PI*2){return $u(new vi(e,e,t,n,1,!1,s,c).translate(r,i+t/2,a),o)}function ad(){let e=[],t=t=>e.push(t);t(ed(7.6,3.6,3,.8,0,0,Qu.brick)),t(td(7.8,3.2,2.5,.8,3.6,0,`x`,Qu.roof)),[-1,1].forEach(e=>{t(ed(6.6,2.3,1.1,.3,0,e*2.05,Qu.brickDark)),t(nd(6.6,1.25,2.3,3.15,.3,0,e*1.5,e,Qu.roof));for(let n=0;n<6;n++){let r=-2.6+n*1.18;t(ed(.26,2.75,.42,r,0,e*2.75,Qu.brick)),t(rd(.13,.7,4,r,2.75,e*2.75,Qu.trim,Math.PI/4)),n<5&&t(ed(.32,1.25,.04,r+.59,.55,e*2.62,Qu.dark))}for(let n=0;n<5;n++)t(ed(.28,.75,.04,-2+n*1.18,2.55,e*1.52,Qu.dark))}),t(ed(1.8,3.6,6.6,3.55,0,0,Qu.brick)),t(td(6.8,2,2.3,3.55,3.6,0,`z`,Qu.roof)),[-1,1].forEach(e=>{t(ed(.7,1.9,.04,3.55,1,e*3.32,Qu.dark)),t(rd(.16,.9,4,2.7,3.6,e*3.25,Qu.trim,Math.PI/4)),t(rd(.16,.9,4,4.4,3.6,e*3.25,Qu.trim,Math.PI/4))}),t(rd(.22,1.6,6,3.55,6,0,Qu.spire)),t(id(1.5,3.4,8,4.6,0,0,Qu.brick,0,Math.PI)),t($u(new yi(1.5,1.9,8,1,!1,0,Math.PI).translate(4.6,4.35,0),Qu.roof));for(let e=0;e<5;e++){let n=e/4*Math.PI;t(ed(.05,1.5,.3,4.6+Math.sin(n)*1.48,.8,Math.cos(n)*1.48,Qu.dark))}let n=-4.05;t(ed(2.3,5.2,2.3,n,0,0,Qu.brick)),t(ed(2,2,2,n,5.2,0,Qu.brickDark)),[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([e,r])=>{t(ed(.36,6.4,.36,n+e*1.18,0,r*1.18,Qu.brick)),t(rd(.2,1.1,4,n+e*1.18,6.4,r*1.18,Qu.trim,Math.PI/4))}),[[0,1.01],[0,-1.01]].forEach(([,e])=>{t(ed(.32,1.35,.04,-4.3999999999999995,5.45,e,Qu.dark)),t(ed(.32,1.35,.04,-3.6999999999999997,5.45,e,Qu.dark)),t(ed(.5,1.6,.04,n,2.2,e*1.14,Qu.dark))}),[[-1.01],[1.01]].forEach(([e])=>{t(ed(.04,1.35,.32,n+e,5.45,-.35,Qu.dark)),t(ed(.04,1.35,.32,n+e,5.45,.35,Qu.dark))}),t(ed(.06,2,.85,-5.2299999999999995,0,0,Qu.dark)),t($u(new _i(.42,8).rotateY(-Math.PI/2).translate(-5.24,3.4,0),Qu.dark)),t(ed(2.2,.16,2.2,n,7.2,0,Qu.trim)),[0,Math.PI/2,Math.PI,-Math.PI/2].forEach(e=>{let r=td(.9,.18,.95,0,0,0,`x`,Qu.spire);r.rotateY(e),r.translate(n+Math.sin(e)*.9,7.36,Math.cos(e)*.9),t(r)}),t(rd(1,5.6,8,n,7.36,0,Qu.spire,Math.PI/8)),t(ed(.06,.7,.06,n,12.95,0,Qu.stone)),t(ed(.06,.06,.36,n,13.38,0,Qu.stone)),[-1,1].forEach(e=>{t(id(.34,3.4,8,-2.95,0,e*2.35,Qu.brick)),t(rd(.42,1.5,8,-2.95,3.4,e*2.35,Qu.spire,Math.PI/8))});let r=Yu(e,!1);return e.forEach(e=>e.dispose()),r.computeBoundingBox(),r}function od(e,t=24){let n=e.clone();n.deleteAttribute(`color`),n.deleteAttribute(`normal`);let r=Zu(n,1e-4),i=new Ti(r,t);return n.dispose(),r.dispose(),i}var sd=e=>-21+Math.sin(e/16)*2.6+Math.sin(e/7)*.6;function cd(e,t){let n=e.index?e.toNonIndexed():e;n!==e&&e.dispose(),n.deleteAttribute(`uv`);let r=new Y(t),i=new Float32Array(n.attributes.position.count*3);for(let e=0;e<n.attributes.position.count;e++)r.toArray(i,e*3);return n.setAttribute(`color`,new er(i,3)),n.attributes.normal||n.computeVertexNormals(),n}function ld(e,t){let n=new io(e);return n.onBeforeCompile=e=>{e.uniforms.uRise=t.uRise,e.uniforms.uDim=t.uDim,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uRise;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float dRise = length(position.xz) / 55.0;
transformed.y *= clamp((uRise * 1.6 - dRise) * 2.2, 0.0, 1.0);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDim;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor.rgb *= (1.0 - uDim * 0.75);`)},n.customProgramCacheKey=()=>`zaec-rise`,n}function ud(e,t){return new no({uniforms:{...t,uColor:{value:new Y(e)}},transparent:!0,depthWrite:!1,vertexShader:`uniform float uRise; varying float vY;
      void main(){ vec3 p = position; float d = length(p.xz) / 55.0; p.y *= clamp((uRise * 1.6 - d) * 2.2, 0.0, 1.0); vY = p.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uLines; varying float vY;
      void main(){ gl_FragColor = vec4(uColor, uLines * (0.35 + min(vY, 4.0) * 0.12)); }`})}function dd({lite:e}){let t=Ru(1945),n=new pn;n.name=`osijek`;let r={uRise:{value:0},uDim:{value:0},uLines:{value:.5}},i={uOpacity:{value:1}},a=new Rr(new _i(75,48).rotateX(-Math.PI/2),new no({uniforms:i,transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform float uOpacity; varying vec2 vP;
        float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
        void main(){ float d = length(vP); float a = 1.0 - smoothstep(35.0, 72.0, d);
          vec3 c = vec3(0.035, 0.05, 0.09) + grid(vP, 2.0) * 0.025;
          gl_FragColor = vec4(c, a * uOpacity); }`}));a.position.y=-.01,n.add(a);let o=[],s=4.2;for(let e=-72;e<72;e+=2){let t=sd(e),n=sd(e+2);o.push(e,.02,t-s,e+2,.02,n-s,e,.02,t+s,e+2,.02,n-s,e+2,.02,n+s,e,.02,t+s)}let c=new mr;c.setAttribute(`position`,new X(o,3));let l={uTime:{value:0},uOpacity:{value:1}},u=new Rr(c,new no({uniforms:l,transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform float uTime; uniform float uOpacity; varying vec2 vP;
        void main(){ float s = sin(vP.x * 0.9 - uTime * 1.4 + sin(vP.y * 2.0) * 1.5) * sin(vP.x * 0.31 + uTime * 0.6);
          float glint = smoothstep(0.82, 1.0, s) * 0.35;
          float fade = 1.0 - smoothstep(40.0, 70.0, abs(vP.x));
          float edge = smoothstep(2.6, 4.2, abs(vP.y - (-21.0 + sin(vP.x / 16.0) * 2.6 + sin(vP.x / 7.0) * 0.6)));
          gl_FragColor = vec4(vec3(0.06, 0.13, 0.3) + glint * vec3(0.4, 0.55, 1.0) + edge * vec3(0.12, 0.2, 0.45), 0.95 * fade * uOpacity); }`}));n.add(u);let d=[],f=[],p=(e,t,n)=>Math.abs(e)<10.5&&t>-8&&t<8.5||t<sd(e)+s+2.2||Math.hypot(e+15,t+13)<5,m=[`#4a2a24`,`#55302a`,`#3d2622`],h=[`#161d2e`,`#1a2236`,`#141a29`,`#1d2539`],g=6.2;for(let e=-8;e<=8;e++)for(let n=-4;n<=7;n++){let r=e*g+(t()-.5)*.8,i=n*g+1+(t()-.5)*.8,a=Math.hypot(r,i);if(a>50||p(r,i,3))continue;if(t()<.08){for(let e=0;e<7;e++){let e=new Ua(.55+t()*.35,0).translate(r+(t()-.5)*4,.6,i+(t()-.5)*4);d.push(cd(e,`#14332a`))}continue}let o=4.6,s=4.6,c=Math.max(0,1-a/46),l=2+(t()*3|0);for(let e=0;e<l;e++){let n=e%2==0,a=n?o:1.4+t()*.6,l=n?1.4+t()*.6:s,u=n?0:(e===1?1:-1)*(o/2-a/2),p=n?(e===0?-1:1)*(s/2-l/2):0,g=1.1+t()*1.1+c*1.4,_=r+u,v=i+p;if(d.push(cd(new gi(a,g,l).translate(_,g/2,v),h[t()*h.length|0])),t()<.55){let e=new yi(Math.max(a,l)*.62,.9,4,1).rotateY(Math.PI/4).scale(a/Math.max(a,l),1,l/Math.max(a,l)).translate(_,g+.45,v);d.push(cd(e,m[t()*m.length|0]))}let y=Math.round(a*g*.35);for(let e=0;e<y;e++){let e=t()<.5?1:-1;f.push([_+(t()-.5)*a*.85,.4+t()*(g-.6),v+e*(l/2+.03)])}}}[[-16.5,-13.5,7.6],[-13.2,-12.4,6.6]].forEach(([e,n,r])=>{d.push(cd(new gi(2.6,r,2.2).translate(e,r/2,n),`#1c2a47`));for(let i=0;i<18;i++)f.push([e+(t()-.5)*2.4,.5+t()*(r-1),n+1.13])}),d.push(cd(new gi(19,.04,14.5).translate(0,.02,.2),`#141b2b`));let _=Yu(d,!1);d.forEach(e=>e.dispose());let v=new Rr(_,ld({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05},r));n.add(v);let y=new ii(new Ti(_,30),ud(`#5574c9`,r));n.add(y);let b=zu({count:f.length,color:`#ffb35a`,core:`#ffe2b0`,size:.42});f.forEach((e,n)=>{b.pos.set(e,n*3),b.alpha[n]=t()<.6?.15+t()*.6:0}),n.add(b.points);let x=ad(),S={uLift:{value:0},uGlow:{value:.5},uAlpha:{value:1}},C=new io({vertexColors:!0,flatShading:!0,roughness:.75,metalness:.05,transparent:!0});C.onBeforeCompile=e=>{Object.assign(e.uniforms,S),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uLift; varying float vH;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed.y = transformed.y * uLift - (1.0 - uLift) * 0.4; vH = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uGlow; uniform float uAlpha; varying float vH;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
 gl_FragColor.rgb += vec3(1.0, 0.45, 0.22) * uGlow * 0.22 * (1.0 - smoothstep(0.0, 9.0, vH));
 gl_FragColor.a *= uAlpha;`)},C.customProgramCacheKey=()=>`zaec-cath`;let w=new Rr(x,C);n.add(w);let T=new Ho(`#ff9a5c`,0,26,1.4);return T.position.set(-2,2,9),n.add(T),{group:n,cathGeo:x,cathMat:C,update(e){if(n.visible=e.alpha>.002,n.visible){if(r.uRise.value=e.rise,r.uDim.value=e.dim,r.uLines.value=e.alpha*(.35+.65*e.lines)*(1-e.dim*.7),i.uOpacity.value=e.alpha,l.uOpacity.value=e.alpha*(1-e.dim*.6),l.uTime.value=e.time,S.uLift.value=Math.max(.001,e.cath),S.uGlow.value=.6+e.glow,S.uAlpha.value=e.alpha*e.cathSolid,w.visible=e.cathSolid>.01,C.depthWrite=e.cathSolid>.6,T.intensity=14*e.glow*e.alpha*e.cathSolid,b.uniforms.uPR.value=e.pr,b.uniforms.uOpacity.value=e.alpha*Nu(.5,1,e.rise)*(1-e.dim*.8),!e.reduce)for(let e=0;e<b.alpha.length;e+=23)b.alpha[e]=Math.random()<.02?b.alpha[e]>0?0:.7:b.alpha[e];b.geometry.attributes.aAlpha.needsUpdate=!0}},dispose(){n.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(e=>e.dispose())})}}}var fd={x0:-5.6,y0:.7,w:12,h:8},pd=(e,t,n=0,r=new q)=>r.set(fd.x0+e*fd.w,fd.y0+t*fd.h,n),md=(e,t,n,r)=>[[e,t,n,t],[n,t,n,r],[n,r,e,r],[e,r,e,t]],$=(e,t,n,r)=>[[e,t,n,r]],hd=(e,t,n=.008,r=8)=>{let i=[];for(let a=0;a<r;a++){let o=a/r*Math.PI*2,s=(a+1)/r*Math.PI*2;i.push([e+Math.cos(o)*n,t+Math.sin(o)*n*1.5,e+Math.cos(s)*n,t+Math.sin(s)*n*1.5])}return i},gd={frame:[...md(0,0,1,1),...$(0,.925,1,.925),...hd(.025,.962),...hd(.045,.962),...hd(.065,.962),...md(.3,.945,.7,.98)],nav:[...md(.04,.85,.11,.895),...$(.5,.872,.56,.872),...$(.59,.872,.65,.872),...$(.68,.872,.74,.872),...md(.84,.85,.96,.895)],hero:[...md(.05,.72,.52,.785),...md(.05,.645,.44,.71),...$(.05,.6,.47,.6),...$(.05,.575,.4,.575),...md(.05,.49,.19,.545),...md(.21,.49,.33,.545)],visual:[...md(.58,.49,.95,.79),...$(.58,.49,.95,.79),...$(.58,.79,.95,.49)],proof:[0,1,2,3,4].flatMap(e=>md(.05+e*.185,.4,.19+e*.185,.43)),cards:[0,1,2].flatMap(e=>{let t=.05+e*.31;return[...md(t,.14,t+.28,.34),...$(t+.02,.3,t+.2,.3),...$(t+.02,.27,t+.25,.27),...$(t+.02,.245,t+.22,.245)]}),cta:[...md(.32,.025,.68,.085),...$(.05,.11,.95,.11)]},_d={frame:gd.frame,nav:[...md(.4,.835,.6,.9),...[0,1,2,3,4,5,6,7,8].flatMap(e=>$(.05+e*.1,.81,.12+e*.1,.81))],slider:[...md(.03,.44,.97,.78),...md(.3,.6,.7,.625),...hd(.07,.61,.02),...hd(.93,.61,.02),...[.44,.48,.52,.56].flatMap(e=>hd(e,.47,.006,6))],wall:[0,1,2,3,4,5,6,7,8].flatMap(e=>$(.05,.38-e*.026,.95-e%3*.04,.38-e*.026)),icons:[0,1,2,3,4,5].flatMap(e=>hd(.12+e*.152,.1,.022)),cta:[...md(.86,.022,.95,.042),...$(.05,.06,.95,.06)]},vd={entry:[.07,.9],message:[.29,.715],trust:[.5,.415],content:[.5,.24],cta:[.5,.055]},yd=e=>Object.values(e).flat();function bd(e,t){let n=yd(e).map(([e,t,n,r])=>({a:pd(e,t),b:pd(n,r)})),r=n.reduce((e,t)=>e+t.a.distanceTo(t.b),0),i=[],a=t;for(n.forEach((e,o)=>{let s=e.a.distanceTo(e.b),c=o===n.length-1?a:Math.max(1,Math.round(s/r*t));c=Math.max(0,Math.min(c,a-(n.length-1-o))),a-=c;for(let t=0;t<c;t++){let n=e.a.clone().lerp(e.b,t/c),r=e.a.clone().lerp(e.b,(t+1)/c);i.push({a:n,b:r,y:(n.y+r.y)/2,x:(n.x+r.x)/2})}});i.length<t;)i.push(i[i.length-1]);return i.length=t,i.sort((e,t)=>t.y-e.y||e.x-t.x)}function xd(e){let t=Ru(303),n=od(e,22),r=n.attributes.position.array,i=r.length/6,a=[];for(let e=0;e<i;e++){let t=new q(r[e*6],r[e*6+1],r[e*6+2]),n=new q(r[e*6+3],r[e*6+4],r[e*6+5]);a.push({a:t,b:n,y:(t.y+n.y)/2,x:(t.x+n.x)/2})}a.sort((e,t)=>t.y-e.y||e.x-t.x);let o=bd(gd,i),s=bd(_d,i),c=new Float32Array(i*6),l=new Float32Array(i*6),u=new Float32Array(i*6),d=new Float32Array(i*2),f=new Float32Array(i*2);for(let e=0;e<i;e++){c.set([...a[e].a.toArray(),...a[e].b.toArray()],e*6),l.set([...o[e].a.toArray(),...o[e].b.toArray()],e*6),u.set([...s[e].a.toArray(),...s[e].b.toArray()],e*6);let n=e/i*.55+t()*.12,r=t();d[e*2]=d[e*2+1]=n,f[e*2]=f[e*2+1]=r}let p=new mr;p.setAttribute(`position`,new er(c.slice(),3)),p.setAttribute(`aFrom`,new er(c,3)),p.setAttribute(`aTo`,new er(l,3)),p.setAttribute(`aBad`,new er(u,3)),p.setAttribute(`aDelay`,new er(d,1)),p.setAttribute(`aSeed`,new er(f,1)),p.boundingSphere=new or(new q(0,5,0),30),n.dispose();let m={uMorph:{value:0},uOpacity:{value:0},uTime:{value:0},uWarm:{value:new Y(`#ffc9a3`)},uCool:{value:new Y(`#b8c8ff`)},uBadCol:{value:new Y(`#ff7a66`)},uFocus:{value:0},uBad:{value:0}},h=new no({uniforms:m,transparent:!0,depthWrite:!1,blending:2,vertexShader:`
      attribute vec3 aFrom; attribute vec3 aTo; attribute vec3 aBad; attribute float aDelay; attribute float aSeed;
      uniform float uMorph; uniform float uTime; uniform float uBad; varying float vT;
      void main(){
        float t = clamp((uMorph - aDelay) / 0.42, 0.0, 1.0);
        float e = t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
        float b = clamp(uBad * 1.5 - aSeed * 0.5, 0.0, 1.0);
        b = b * b * (3.0 - 2.0 * b);
        vec3 p = mix(aFrom, mix(aTo, aBad, b), e);
        float arc = sin(e * 3.14159);
        p += vec3((aSeed - 0.5) * 2.2, (aSeed - 0.3) * 1.6, 1.4 + aSeed * 2.6) * arc;
        p += vec3(sin(uTime * 0.9 + aSeed * 30.0), cos(uTime * 0.7 + aSeed * 20.0), 0.0) * 0.04 * arc;
        p.z += sin(b * 3.14159) * (0.5 + aSeed);
        vT = e;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCool; uniform vec3 uBadCol; uniform float uFocus; uniform float uBad; varying float vT;
      void main(){
        vec3 c = mix(uWarm, mix(uCool, uBadCol, uBad * 0.8), vT);
        float flare = sin(vT * 3.14159);
        gl_FragColor = vec4(c + flare * 0.35, uOpacity * (0.55 + 0.45 * vT + flare * 0.4) * (1.0 - uFocus * 0.55));
      }`}),g=new ii(p,h);return g.frustumCulled=!1,g.renderOrder=3,{object:g,count:i,update(e){g.visible=e.opacity>.002,m.uMorph.value=e.morph,m.uOpacity.value=e.opacity,m.uTime.value=e.time,m.uFocus.value=e.focus||0,m.uBad.value=e.bad||0},dispose(){p.dispose(),h.dispose()}}}var Sd=[{code:`01`,name:`Poruka`,color:`#4f73ff`},{code:`02`,name:`Struktura`,color:`#5a7cff`},{code:`03`,name:`UX`,color:`#6f84ff`},{code:`04`,name:`Tehnologija`,color:`#8c8bf2`},{code:`05`,name:`SEO`,color:`#b98ed8`},{code:`06`,name:`Mjerenje`,color:`#e3999a`},{code:`07`,name:`Konverzija`,color:`#ffb23f`}];function Cd(e){switch(e){case 0:return[...md(.08,.62,.7,.76),...md(.08,.46,.55,.58),...$(.08,.36,.6,.36),...$(.08,.3,.5,.3)];case 1:return[...md(.42,.78,.58,.88),...$(.5,.78,.5,.68),...$(.2,.68,.8,.68),...[.2,.5,.8].flatMap(e=>[...$(e,.68,e,.6),...md(e-.08,.5,e+.08,.6),...$(e,.5,e,.42),...md(e-.05,.34,e+.05,.42)])];case 2:return[...$(.1,.75,.35,.75),...$(.35,.75,.35,.5),...$(.35,.5,.65,.5),...$(.65,.5,.65,.25),...$(.65,.25,.88,.25),...$(.84,.29,.88,.25),...$(.84,.21,.88,.25),...hd(.1,.75,.02),...hd(.35,.5,.02),...hd(.65,.25,.02)];case 3:return[...$(.25,.65,.15,.5),...$(.15,.5,.25,.35),...$(.75,.65,.85,.5),...$(.85,.5,.75,.35),...$(.56,.7,.44,.3),...[0,1,2,3].flatMap(e=>md(.32+e*.1,.12,.4+e*.1,.2))];case 4:return[...md(.1,.74,.9,.84),...hd(.85,.79,.018),...[0,1,2,3].flatMap(e=>[...$(.1,.62-e*.13,.45,.62-e*.13),...$(.1,.58-e*.13,.75,.58-e*.13)])];case 5:return[...$(.1,.15,.9,.15),...$(.1,.15,.1,.85),...[.25,.4,.33,.55,.48,.7].flatMap((e,t)=>md(.16+t*.12,.15,.24+t*.12,.15+e))];default:return[...md(.3,.42,.7,.58),...$(.42,.5,.48,.45),...$(.48,.45,.58,.55),...$(.15,.85,.85,.85),...$(.15,.85,.4,.6),...$(.85,.85,.6,.6),...$(.4,.25,.6,.25)]}}function wd(){let e=new pn;e.name=`slojevi`,e.position.copy(pd(.5,.5));let t=Sd.map((t,n)=>{let r=new pn,i=[],a=(e,t)=>[(e-.5)*fd.w,(t-.5)*fd.h,0];[...md(0,0,1,1),...Cd(n)].forEach(([e,t,n,r])=>i.push(...a(e,t),...a(n,r)));let o=new mr;o.setAttribute(`position`,new X(i,3));let s=new Kr({color:t.color,transparent:!0,opacity:0,depthWrite:!1,blending:2}),c=new ii(o,s),l=new Wa(fd.w,fd.h),u=new Er({color:t.color,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2});return r.add(new Rr(l,u),c),e.add(r),{g:r,lm:s,fm:u,lg:o,fg:l}}),n=new q;return{group:e,update(n){if(e.visible=n.alpha>.002,!e.visible)return;let r=n.p*8.2,i=Math.min(1,Math.max(0,r-7.2));t.forEach((e,t)=>{let a=1-(1-Math.min(1,Math.max(0,r-t)))**3,o=(3-t)*(1.55+-1.33*i);e.g.position.set((1-a)*9,(1-a)*5,o+(1-a)*6),e.g.rotation.set((1-a)*-.5,(1-a)*.9,(1-a)*.3);let s=+(n.hover===t);e.lm.opacity=n.alpha*a*(.7+s*.3+i*.2),e.fm.opacity=n.alpha*a*(.04+s*.14+i*.03)})},anchor(e,r=n){return r.set(-fd.w/2,fd.h*.32,0).applyMatrix4(t[e].g.matrixWorld)},dispose(){t.forEach(e=>{e.lg.dispose(),e.lm.dispose(),e.fm.dispose(),e.fg.dispose()})}}}var Td=[`Google pretraga`,`Preporuka`,`Društvene mreže`,`Oglasi`,`AI pretraga`],Ed=[`Poziv`,`Upit`,`Rezervacija`,`Kupnja`],Dd=-13.2,Od=13.8,kd=e=>8.3-e*1.65,Ad=e=>7.1-e*1.65;function jd(e,t,n,r,i,a){let o=i*i,s=o*i;return a.x=.5*(2*t.x+(-e.x+n.x)*i+(2*e.x-5*t.x+4*n.x-r.x)*o+(-e.x+3*t.x-3*n.x+r.x)*s),a.y=.5*(2*t.y+(-e.y+n.y)*i+(2*e.y-5*t.y+4*n.y-r.y)*o+(-e.y+3*t.y-3*n.y+r.y)*s),a.z=.5*(2*t.z+(-e.z+n.z)*i+(2*e.z-5*t.z+4*n.z-r.z)*o+(-e.z+3*t.z-3*n.z+r.z)*s),a}function Md({lite:t}){let n=Ru(2024),r=new pn;r.name=`tok`;let i=t?90:170,a=Td.map((e,t)=>new q(Dd,kd(t),0)),o=Ed.map((e,t)=>new q(Od,Ad(t),0)),s=e=>pd(vd[e][0],vd[e][1],.15),c=e.map(e=>s(e.zone)),l=new q(8.2,2.2,.15),u=new q,d=Bu(`#3d5ccc`,.25,!0),f=new ii(new mr,d);r.add(f);let p=!1;function m(){let e=[],t=(t,n,r,i,a=24)=>{let o=n.clone();for(let s=1;s<=a;s++)jd(t,n,r,i,s/a,u),e.push(o.x,o.y,o.z,u.x,u.y,u.z),o=u.clone()},n=p?new q(0,3,0):new q(-3,0,0),r=p?new q(0,-3,0):new q(3,0,0);a.forEach(e=>t(e.clone().add(n),e,c[0],c[1])),o.forEach(e=>t(c[4],l,e,e.clone().add(r))),f.geometry.dispose(),f.geometry=new mr().setAttribute(`position`,new X(e,3))}let h=new mr,g=[];for(let e=0;e<40;e++){let t=e/40*Math.PI*2,n=(e+1)/40*Math.PI*2;g.push(Math.cos(t),Math.sin(t),0,Math.cos(n),Math.sin(n),0)}h.setAttribute(`position`,new X(g,3));let _=c.map(e=>{let t=new Kr({color:`#7f9fff`,transparent:!0,opacity:0,depthWrite:!1,blending:2}),n=new ii(h,t);return n.position.copy(e),n.scale.setScalar(.42),r.add(n),{r:n,m:t,hit:0}}),v=new Y(`#7f9fff`),y=new Y(`#ff6f5e`),b=zu({count:a.length+o.length,color:`#4f7bff`,core:`#ffffff`,size:1.5});[...a,...o].forEach((e,t)=>{e.toArray(b.pos,t*3),b.size[t]=t<a.length?1:1.2}),r.add(b.points);let x=new Float32Array(o.length);function S(e){p=e,a.forEach((t,n)=>e?t.set(-4.6+n*2.5,12.4,0):t.set(Dd,kd(n),0)),o.forEach((t,n)=>e?t.set(-3.5+n*2.6,-2.4,0):t.set(Od,Ad(n),0)),e?l.set(.4,-.4,.15):l.set(8.2,2.2,.15),[...a,...o].forEach((e,t)=>e.toArray(b.pos,t*3)),b.geometry.attributes.position.needsUpdate=!0,m()}S(!1);let C=zu({count:i*3,color:`#8fb0ff`,core:`#ffffff`,size:.85}),w=zu({count:i*3,color:`#ff6a55`,core:`#ffd2c8`,size:.75}),T=zu({count:i,color:`#ffb23f`,core:`#fff3d6`,size:1.6});r.add(C.points,w.points,T.points);let E=[];for(let e=0;e<i;e++){let e=Array.from({length:8},()=>new q);E.push({wp:e,s:0,speed:1,state:0,wait:n()*7,vel:new q,pos:new q,hist:[new q,new q,new q],life:0,out:0})}function D(t){let r=n()*a.length|0;t.out=n()*o.length|0,t.wp[0].copy(a[r]),e.forEach((e,r)=>{t.wp[r+1].copy(c[r]).add(u.set((n()-.5)*2*e.jx,(n()-.5)*2*e.jy,(n()-.5)*.4))}),t.wp[6].copy(l).add(u.set(0,(n()-.5)*1.4,0)),t.wp[7].copy(o[t.out]),t.s=0,t.speed=.75+n()*.5,t.state=1,t.pos.copy(t.wp[0]),t.hist.forEach(e=>e.copy(t.pos))}let O=(e,t,n)=>{let r=Math.min(6,Math.floor(t)),i=t-r,a=e.wp;return jd(a[Math.max(0,r-1)],a[r],a[r+1],a[Math.min(7,r+2)],i,n)},k=[!1,!1,!1,!1,!1],A=0,j=0;function M(t){for(let r=0;r<i;r++){let i=E[r];if(i.state===0)i.wait-=t,i.wait<=0&&(D(i),A++);else if(i.state===1){let r=Math.floor(i.s);i.s+=t*i.speed*(i.s<1?.7:1);let a=Math.floor(i.s);if(a!==r&&a>=1&&a<=5){let t=a-1,r=k[t]?e[t].good:e[t].bad;n()>r&&(i.state=2,i.life=0,O(i,i.s,i.pos),i.vel.set((n()-.5)*2.4+(i.pos.x>.4?1.2:-1.2),.6+n()*.8,1+n()*2.5),_[t].hit=1)}i.state===1&&(i.s>=7?(i.state=3,i.life=0,i.pos.copy(i.wp[7]),x[i.out]=1,j++):O(i,i.s,i.pos))}else i.state===2?(i.life+=t,i.vel.y-=t*3.2,i.pos.addScaledVector(i.vel,t),i.life>1.5&&(i.state=0,i.wait=.2+n()*1.5)):i.state===3&&(i.life+=t,i.life>.6&&(i.state=0,i.wait=.2+n()*1.2));t>0&&(i.hist[2].copy(i.hist[1]),i.hist[1].copy(i.hist[0]),i.hist[0].copy(i.pos));for(let e=0;e<3;e++){let t=r*3+e,n=i.hist[e],a=1-e*.32,o=i.state===1,s=i.state===2;(o?C:w).pos.set([n.x,n.y,n.z],t*3),C.alpha[t]=o?a*Math.min(1,i.s*3):0,w.alpha[t]=s?a*Math.max(0,1-i.life/1.5)*.85:0,C.size[t]=w.size[t]=1-e*.25}T.alpha[r]=i.state===3?Math.max(0,1-i.life/.6):0,T.size[r]=i.state===3?1+i.life*3:1,i.state===3&&i.pos.toArray(T.pos,r*3)}[C,w,T].forEach(e=>{e.geometry.attributes.position.needsUpdate=!0,e.geometry.attributes.aAlpha.needsUpdate=!0,e.geometry.attributes.aSize.needsUpdate=!0})}let N=!1;return{group:r,channelWorld:e=>a[e],outcomeWorld:e=>o[e],gateWorld:e=>c[e],setStates(e){k=e.slice()},setLayout(e){e!==p&&S(e)},stats:()=>({emitted:A,converted:j}),update(e){if(r.visible=e.alpha>.002,!r.visible)return;let t=e.reduce?0:Math.min(e.dt,1/20);if(!N){N=!0;for(let e=0;e<180;e++)M(1/30);A=j=0}d.opacity=.22*e.alpha,[b,C,w,T].forEach(t=>{t.uniforms.uPR.value=e.pr,t.uniforms.uOpacity.value=e.alpha}),M(t),_.forEach((n,r)=>{n.hit=Math.max(0,n.hit-t*2.5),n.m.color.copy(k[r]?v:y);let i=+(e.focusGate===r);n.m.opacity=e.alpha*(.35+n.hit*.6+i*.5),n.r.scale.setScalar(.42+n.hit*.25+i*.18+Math.sin(e.time*2+r)*.02)});for(let e=0;e<o.length;e++)x[e]=Math.max(0,x[e]-t*2),b.size[a.length+e]=1.2+x[e]*1.4;for(let t=0;t<a.length;t++)b.size[t]=.9+Math.sin(e.time*1.7+t*1.3)*.15;b.geometry.attributes.aSize.needsUpdate=!0},dispose(){r.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(e=>e.dispose())})}}}var Nd={Z:0,tx:0,ty:0,tz:0,az:0,el:20,dist:30,fov:34,sx:0,sy:0,fit:0,idle:0,net:0,finale:0,lift:0,rise:0,cath:0,glow:0,dim:0,lines:.4,cathSolid:1,morph:0,wire:0,flow:0,layers:0,layersA:0,labOsijek:0,labCities:0,labCity:0,labFlow:0,labLayers:0,labFinale:0,stars:1},Pd=Object.keys(Nd),Fd={rise:1,cath:1,stars:.5},Id={...Fd,Z:2,dim:.94,lines:0,cathSolid:0,wire:1,morph:1,glow:0},Ld={hero:{fit:23,Z:0,ty:-10,az:-14,el:24,dist:47,sx:.2,sy:.02,idle:1,net:.65,m:{dist:66,sx:0,sy:.22}},world:{fit:26,Z:.1,ty:-7,az:14,el:32,dist:46,sx:-.2,net:1,labOsijek:1,m:{dist:62,sx:0,sy:.2}},europe:{fit:36,Z:.94,tx:-6.5,ty:0,tz:-1,az:0,el:62,dist:50,sx:.17,net:.7,m:{dist:76,sx:0,sy:.18}},croatia:{fit:19,Z:1,tx:-6,ty:.5,tz:4.2,az:-10,el:52,dist:31,sx:.16,lift:1,net:.5,labCities:1,m:{dist:44,sx:0,sy:.16}},osijek:{fit:62,Z:2,tx:-2,ty:0,tz:-7,az:24,el:42,dist:92,sx:.12,...Fd,glow:.3,lift:1,labCity:1,ease:`dive`,m:{dist:120,sx:0,sy:.16}},cathedral:{fit:13,Z:2,tx:-2.4,ty:6.4,tz:0,az:-40,el:12,dist:33,sx:-.2,...Fd,glow:1,dim:.35,lines:.2,m:{dist:36,sx:0,sy:.14}},arch:{fit:14,Z:2,tx:.4,ty:5.6,az:0,el:4,dist:30,sx:.17,...Fd,glow:.4,dim:.78,lines:0,cathSolid:.22,wire:1,m:{dist:44,sx:0,sy:.16}},web:{fit:13.5,...Id,tx:.4,ty:4.7,az:0,el:0,dist:23,sx:.15,m:{dist:34,sx:0,sy:.18}},flow:{fit:33,...Id,tx:.3,ty:4.7,az:0,el:0,dist:45,sx:0,sy:.11,flow:1,labFlow:1,m:{dist:50,fit:15,tx:.4,ty:5,sy:.19}},"layers-a":{fit:17,...Id,wire:0,tx:.4,ty:4.7,az:-50,el:16,dist:37,sx:.17,layers:.12,layersA:1,labLayers:1,m:{dist:54,sx:0,sy:.17}},"layers-b":{fit:17,...Id,wire:0,tx:.4,ty:4.7,az:-38,el:14,dist:35,sx:.17,layers:.86,layersA:1,labLayers:1,m:{dist:52,sx:0,sy:.17}},"layers-c":{fit:16,...Id,wire:0,tx:.4,ty:4.7,az:-20,el:9,dist:29,sx:.17,layers:1,layersA:1,labLayers:.4,m:{dist:46,sx:0,sy:.17}},final:{fit:23,Z:0,ty:-10,az:22,el:38,dist:50,sx:.21,finale:1,net:1,labFinale:1,m:{dist:70,sx:0,sy:.25}}};function Rd(e,t){let n=Ld[e];if(!n)return null;let r={...Nd,...n,...t&&n.m?n.m:{}};return delete r.m,r}function zd({canvas:t,labelsRoot:n,onReady:r,onChapter:i,onFrame:a}){let o=document.documentElement,s=matchMedia(`(prefers-reduced-motion: reduce)`),c=matchMedia(`(hover: hover) and (pointer: fine)`).matches,l=!c||innerWidth<760||(navigator.hardwareConcurrency||8)<=4,u=new Eu({canvas:t,antialias:!l,alpha:!1,powerPreference:`high-performance`,stencil:!1});u.setClearColor(`#04060c`,1),u.outputColorSpace=Ue;let d=l?1.35:1.75,f=Math.min(window.devicePixelRatio||1,d),p=new xn,m=new Bo(34,1,.1,6e3);p.add(new Oo(`#8ea3ff`,`#0a0e1a`,.6));let h=new Go(`#dde5ff`,1.45);h.position.set(-40,60,34),p.add(h);let g=new Go(`#ff9d66`,.55);g.position.set(50,18,-40),p.add(g);let _=Uu({geo:Du,lite:l}),v=Ku({geo:Du,lite:l}),y=dd({lite:l}),b=xd(y.cathGeo),x=wd(),S=Md({lite:l});p.add(_.group,v.group,y.group,b.object,x.group,S.group);let C=Ru(99),w=zu({count:l?380:720,color:`#7f95d6`,core:`#dfe6ff`,size:1.4,depthTest:!1});for(let e=0;e<w.alpha.length;e++){let t=C()*2-1,n=C()*Math.PI*2,r=700+C()*300,i=Math.sqrt(1-t*t);w.pos.set([Math.cos(n)*i*r,t*r,Math.sin(n)*i*r],e*3),w.alpha[e]=.12+C()*.45,w.size[e]=.5+C()*C()*2.2}w.points.renderOrder=-10,p.add(w.points);let T=[],E=[],D=[],O=!1,k=0,A=0,j={...Rd(`hero`,!1)},M={target:0,smooth:0},N=``;function P(){let e=window.scrollY;O=innerWidth<760||innerWidth/innerHeight<.82,T=[...document.querySelectorAll(`[data-cam]`)].map(t=>{let n=t.getBoundingClientRect(),r=n.top+e,i=t.dataset.camAt||`center`,a=i===`top`?r:i===`bottom`?r+n.height-innerHeight:r+n.height/2-innerHeight/2;return{id:t.dataset.cam,y:Math.max(0,a)}}).filter(e=>Ld[e.id]).sort((e,t)=>e.y-t.y),T.length||(T=[{id:`hero`,y:0}]),E=T.map(e=>Rd(e.id,O)),S.setLayout(O),n?.classList.toggle(`is-portrait`,O),D=[...document.querySelectorAll(`[data-cover]`)].map(t=>{let n=t.getBoundingClientRect();return[n.top+e,n.bottom+e]}),D.sort((e,t)=>e[0]-t[0]);let t=[];D.forEach(e=>{let n=t[t.length-1];n&&e[0]<=n[1]+2?n[1]=Math.max(n[1],e[1]):t.push([e[0],e[1]])}),D=t}function F(e){if(T.length<2||e<=T[0].y)return 0;for(let t=0;t<T.length-1;t++){let n=T[t].y,r=T[t+1].y;if(e<r)return t+(r>n?(e-n)/(r-n):1)}return T.length-1}function ee(e,t){if(E.length<2)return Object.assign(t,E[0]),t;let n=Math.min(E.length-2,Math.max(0,Math.floor(e))),r=ju(e-n);r=s.matches?r<.5?0:1:Nu(.08,.92,r);let i=E[n],a=E[n+1];for(let e of Pd)t[e]=Mu(i[e],a[e],r);let o=Lu(i.Z),c=Lu(a.Z),l=Lu(t.Z),u=r;if(a.ease===`dive`&&c!==o){let e=Math.abs(Math.log(c/o))+3;u=(1-Math.exp(-e*r))/(1-Math.exp(-e))}return t.tx=Mu(i.tx/o,a.tx/c,u)*l,t.ty=Mu(i.ty/o,a.ty/c,u)*l,t.tz=Mu(i.tz/o,a.tz/c,u)*l,t.chapter=r<.5?T[n].id:T[n+1].id,t}function te(e){for(let[t,n]of D)if(e>=t-1&&e+A<=n+1)return!0;return!1}function ne(e=!1){let n=t.clientWidth||innerWidth,r=t.clientHeight||innerHeight;!e&&n===k&&Math.abs(r-A)<120||(k=n,A=r,u.setPixelRatio(f),u.setSize(n,r,!1),m.aspect=n/r,m.updateProjectionMatrix(),P())}let re={x:0,y:0,sx:0,sy:0},ie=e=>{e.pointerType===`mouse`&&(re.x=e.clientX/innerWidth*2-1,re.y=e.clientY/innerHeight*2-1)};c&&window.addEventListener(`pointermove`,ie,{passive:!0});let ae=e.map(()=>!1),oe=1,se=-1,I=-1;S.setStates(ae);let L=n?[...n.querySelectorAll(`[data-l]`)].map(e=>({el:e,key:e.dataset.l,o:-1,x:-1e4,y:-1e4})):[],R=new q,ce=new q,le={cath:[-4.05,14.2,0],drava:[-30,.6,-23.5],hotel:[-16.5,8.4,-13.5]},ue=e=>Du.cities.findIndex(t=>t[0]===e);function de(e,t){let[n,r]=e.split(`-`),i=+r;switch(n){case`osijek`:case`you`:return _.osijekWorld(R),ce.copy(R).sub(t.globeCenter).normalize(),ce.dot(t.camPos.clone().sub(R))>0?(n===`you`?j.labFinale:j.labOsijek)*t.globeA:0;case`city`:return v.cityWorld(ue(r),R),j.labCities*t.europeA;case`cath`:case`drava`:case`hotel`:return R.fromArray(le[n]),j.labCity*t.cityA;case`ch`:return R.copy(S.channelWorld(i)),j.labFlow;case`out`:return R.copy(S.outcomeWorld(i)),j.labFlow;case`gate`:return R.copy(S.gateWorld(i)),j.labFlow;case`layer`:{x.anchor(i,R);let e=ju(j.layers*8.2-i),t=I>=0?+(I===i):1;return j.labLayers*j.layersA*e*t}default:return 0}}function fe(e,t){for(let n of L){let r=t?de(n.key,e):0;if(r>.01){if(R.project(m),R.z>1||Math.abs(R.x)>1.15||Math.abs(R.y)>1.15)r=0;else{let e=Math.round((R.x*.5+.5)*k),t=Math.round((-R.y*.5+.5)*A);(e!==n.x||t!==n.y)&&(n.el.style.transform=`translate3d(${e}px, ${t}px, 0)`,n.x=e,n.y=t)}}r=Math.round(ju(r)*100)/100,r!==n.o&&(n.el.style.opacity=String(r),n.el.classList.toggle(`is-on`,r>.5),n.o=r)}}let pe=0,me=performance.now(),he=0,ge=0,_e=!1,ve=!0,ye=0,be=16,xe=!1,Se=null,Ce={globeCenter:new q,camPos:new q,globeA:0,europeA:0,cityA:0};function we(e,t){let n=t??Math.min(.05,Math.max(.001,(e-me)/1e3));me=e;let o=s.matches;o||(he+=n);let l=window.scrollY;M.target=F(l),Math.abs(M.target-M.smooth)>1.1&&(M.smooth=M.target-Math.sign(M.target-M.smooth)*1.1),M.smooth=o?M.target:Pu(M.smooth,M.target,4.4,n),Math.abs(M.smooth-M.target)<1e-4&&(M.smooth=M.target),ee(M.smooth,j),Se&&Object.assign(j,Se),j.fit>0&&(j.dist=Math.max(j.dist,j.fit/(2*Math.tan(j.fov*Ou/2)*(k/A)*.92)));let d=ee(M.target,{});d.chapter!==N&&(N=d.chapter,i?.(N));let h=te(l);if(a?.({progress:M.smooth,covered:h}),h&&_e){xe||(fe(Ce,!1),xe=!0);return}xe=!1,c&&!o&&(re.sx=Pu(re.sx,re.x,2.5,n),re.sy=Pu(re.sy,re.y,2.5,n));let g=(j.az+re.sx*3.2)*Ou,C=(j.el-re.sy*1.8)*Ou;m.position.set(j.tx+j.dist*Math.cos(C)*Math.sin(g),j.ty+j.dist*Math.sin(C),j.tz+j.dist*Math.cos(C)*Math.cos(g)),m.lookAt(j.tx,j.ty,j.tz),Math.abs(m.fov-j.fov)>.01&&(m.fov=j.fov),m.near=j.Z>1.5?.5:.1,m.far=j.Z>1.5?1200:6e3,m.setViewOffset(k,A,-j.sx*k,j.sy*A,k,A),m.updateProjectionMatrix(),m.updateMatrixWorld();let T=j.Z,E=Lu(T),D=225*E;_.group.scale.setScalar(D),_.group.position.set(0,-D,0),Ce.globeCenter.set(0,-D,0),j.idle>.985&&!o&&(ge+=n*.11);let O=Math.atan2(Math.sin(ge),Math.cos(ge)),P=1-Nu(.8,.93,T);_.update({alpha:P,spin:O*j.idle,net:j.net,finale:j.finale,dive:Nu(.5,1,T),time:he,dt:n,pr:f,reduce:o});let ie=Nu(.7,.92,T)*(1-Nu(1.72,1.96,T)),ae=Nu(1.35,1.85,T),L=Math.min(E,1);v.group.scale.set(E,L,E),v.group.position.y=-j.lift*(1-ae*.985)*L*Nu(1,1.25,T),v.update({alpha:ie,lift:j.lift,net:j.net,cityFade:ae,Z:T,time:he,dt:n,pr:f,reduce:o});let R=Nu(1.62,1.9,T);y.update({alpha:R,rise:j.rise,dim:j.dim,lines:j.lines,cath:Nu(.45,1,j.cath),glow:j.glow,cathSolid:j.cathSolid,time:he,pr:f,reduce:o});let ce=oe*j.flow;b.update({morph:j.morph,opacity:j.wire*R,time:he,focus:0,bad:ce}),S.update({alpha:j.flow,time:he,dt:n,pr:f,reduce:o,focusGate:se});let le=I>=0?I:-1;x.update({p:j.layers,alpha:j.layersA,hover:le}),w.points.position.copy(m.position),w.uniforms.uPR.value=f,w.uniforms.uOpacity.value=j.stars*(.55+.45*(1-Nu(1.2,1.8,T))),p.updateMatrixWorld(),Ce.camPos.copy(m.position),Ce.globeA=P,Ce.europeA=ie,Ce.cityA=R,fe(Ce,!h),u.render(p,m),_e||(_e=!0,r?.()),t||(be=be*.95+n*1e3*.05,be>24&&f>1?++ye>90&&(f=Math.max(1,f-.25),ye=0,be=16,ne(!0)):ye=0)}function Te(e){if(pe=requestAnimationFrame(Te),!ve||document.hidden||window.__zaecFreeze){me=e;return}we(e)}let Ee=new ResizeObserver(()=>ne());Ee.observe(t);let De=new ResizeObserver(()=>P());De.observe(document.body);let Oe=()=>{me=performance.now()};document.addEventListener(`visibilitychange`,Oe);let ke=e=>{e.preventDefault(),ve=!1,o.classList.add(`webgl-lost`)};return t.addEventListener(`webglcontextlost`,ke),ne(!0),M.smooth=M.target=F(window.scrollY),pe=requestAnimationFrame(Te),{lite:l,refresh:()=>P(),setGates(e){ae=e.slice(),oe=ae.filter(e=>!e).length/ae.length,S.setStates(ae)},setFocusGate(e){se=e},setLayerHover(e){I=e},layerCount:Sd.length,debugStep(e=1){for(let t=0;t<e;t++)we(performance.now(),1/60);return this.debugCam()},debugCam(){return{progress:+M.smooth.toFixed(3),chapter:N,Z:+j.Z.toFixed(3),cam:m.position.toArray().map(e=>+e.toFixed(2)),target:[j.tx,j.ty,j.tz].map(e=>+e.toFixed(2)),anchors:T.map(e=>`${e.id}@${Math.round(e.y)}`),dpr:f,lite:l}},stats:()=>S.stats(),debugState:()=>({...j}),debug:{camera:m,scene:p,globe:_,europe:v,city:y,renderer:u},debugOverride(e){return Se=e,this.debugStep(1)},debugStates:()=>E.map((e,t)=>({id:T[t].id,labFlow:e.labFlow,labCity:e.labCity,labOsijek:e.labOsijek})),dispose(){cancelAnimationFrame(pe),Ee.disconnect(),De.disconnect(),document.removeEventListener(`visibilitychange`,Oe),t.removeEventListener(`webglcontextlost`,ke),window.removeEventListener(`pointermove`,ie),[_,v,y,b,x,S].forEach(e=>e.dispose()),w.geometry.dispose(),w.material.dispose(),u.dispose()}}}export{zd as createWorld3};