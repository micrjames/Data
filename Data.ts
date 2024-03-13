export default class Data {
   private url: string;
   private method: string;
   private contentType: string;
   private _bodyData;
   private _options;
   constructor(method: string, url: string) {
	  this.method = method;
	  this.url = url;
	  this.contentType = 'application/json';
	  this._bodyData = {};
	  this._options = {};
   }

   public set bodyData(data) {
	  this._bodyData = data;
   }
   public set options(options) {
	  this._options = options;
   }

   public async fetchIt() {
	   const res = await fetch(this.url, this._options);
	   const data = await res.json();

	   return data;
   }

   public setOption() {
	   return {
		   method: this.method,
		   headers: {
			   'Content-type': this.contentType
		   },
		   body: JSON.stringify(this._bodyData)
	   };
   }

}
