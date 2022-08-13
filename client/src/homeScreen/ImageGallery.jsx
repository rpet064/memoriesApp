import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {URLConfig} from "@cloudinary/url-gen";
import {CloudConfig} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";



export default function ImageGallery() {
    let cloudConfig = new CloudConfig({cloudName: 'dmahebpb1'});
    let urlConfig = new URLConfig({secure: true});

    let myImage = new CloudinaryImage('Wedding/376_i2i5nr', cloudConfig, urlConfig);
    myImage
    .resize(thumbnail().width(200).height(200))
    // useEffect(() => {
    // axios.get('http://res.cloudinary.com/dmahebpb1/image/list/Wedding.json')
    //         .then(res => {
    //             console.log(res.data.resources);
    //             this.setState({gallery: res.data.resources});
    //         });
    //     })
    return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
    );
  }