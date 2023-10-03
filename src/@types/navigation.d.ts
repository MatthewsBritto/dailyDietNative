export declare global {

   namespace ReactNavigation {

      interface RootParamList{
         home : undefined;
         analytics : {
            percent: number;
         };
         form:{
            type:'NEUTRO' | 'GREEN' | 'RED' ;
         };
         review: {
            type: "IN" | "OUT";
         }
         feedback : {
            type: 'RED' | 'GREEN';
         };
      }
   }
}