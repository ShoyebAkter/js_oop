function Stopwatch(){
    let startTime,endTime,running,duration=0;

    this.start=function(){
         if(running){
            throw new Error("stopwatch running")
         }
         running=true;
         startTime=new Date();
    }

    this.stop=function(){
        if(!running){
            throw new Error("stopwatch not running")
        }

        running=false;
        endTime=new Date();
        duration=endTime-startTime;
    }

    this.reset=function(){
        duration=0;

    }

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
}
