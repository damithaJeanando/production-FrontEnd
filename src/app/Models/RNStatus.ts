import { RejectionNotice } from './RejectionNotice';

export interface RNStatus{

    rnStatus_id:string;
    rnStatus:string;

    rejectionNotices:RejectionNotice[];
}