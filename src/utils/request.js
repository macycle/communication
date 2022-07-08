import instance from './https';

export function getCity(){
    return instance({
        url: '/api/address/list',
        method: 'get',
        params: {
            app_id:"jqoeser1qeeekahq",
            app_secret:"cGtsdUUzVDNzMkw0S2ViZUFSWkNsdz09"
          },
    }).then((res)=>{res})
}

