export declare global {

   namespace ReactNavigation {

      interface RootParamList{
         home : undefined;
         analytics : {
            percent: number;
            inside: number;
            outside: number;
         };
         form:{
            type:'NEUTRO' | 'GREEN' | 'RED' ;
         };
         review: {
               id:string;
               title: string;
               description:string;
               time: string;
               type: "IN" | "OUT";
         }
         feedback : {
            type: 'RED' | 'GREEN';
         };
      }
   }
}