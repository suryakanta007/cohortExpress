import http from "http"
import  url  from "url"

class CohortExpress {
    #server 

    Routes = {
        get:{},
        post:{},
        put:{},
        patch:{},
        delete:{},
    }

    get(path,cb){
        this.Routes.get[path]= cb;
    }
    post(path,cb){
        this.Routes.post[path]= cb;
    }
    put(path,cb){
        this.Routes.put[path]= cb;
    }
    patch(path,cb){
        this.Routes.patch[path]=cb;
    }
    delete(path,cb){
        this.Routes.delete[path]= cb;
    }




    constructor(){
      this.#server =http.createServer(this.reqHandeler.bind(this));
    }


    
    chaiListen({port,host="0.0.0.0",cb}){
        this.#server.listen(port,host,cb);
    }
    reqHandeler(req,res){
        const method = req.method.toLowerCase();
        console.log(method)
        const parsedUrl = url.parse(req.url,true);
        const route = parsedUrl.pathname;

        if(!this.Routes[method]){
            return res.end("Invalid method.");
        }
        if(!this.Routes[method][route]){
            return res.end(`${this.Routes[method][route] } not found`);
        }

        this.Routes[method][route](req,res);

    }
}

export default CohortExpress