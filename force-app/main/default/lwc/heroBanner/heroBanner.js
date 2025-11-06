import { LightningElement, api, wire } from 'lwc';
import { getContent } from "experience/cmsDeliveryApi";
import siteId from "@salesforce/site/Id";
import basePath from '@salesforce/community/basePath';

export default class HeroBanner extends LightningElement {
    @api contentKey;
    data;
    imageUrl

  @wire(getContent, { channelOrSiteId: siteId , contentKeyOrId: "$contentKey" })
  onGetContent({data, error}) {

    if (data) {
      try{
        const content = data.contentBody['sfdc_cms:media'].url;
        this.imageUrl = `${basePath}/sfsites/c/${content}`
          return imageUrl;

      } catch (e) {
        console.log(e)
      }  
  }
  else if (error){
    console.error(error)
  }
}
}