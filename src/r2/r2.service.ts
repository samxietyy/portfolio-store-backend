import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';


@Injectable()
export class R2Service {
    private readonly s3 = new S3Client({
            region: 'auto'
        });

    constructor(){
        

    }

}
