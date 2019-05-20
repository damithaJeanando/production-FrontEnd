import { OrderItem } from './OrderItem';
import { RNStatus } from './RNStatus';

export interface RejectionNotice{

    rejectionNoticeId:string;
    rejectionReason:string;
    noticeDate:Date;
    remedyAction:string;

    orderItemId:OrderItem;
    rnStatus:RNStatus;
    
}