import { Routes } from "@angular/router";

import { AdvideoComponent } from "../Mycomponents/advideo/advideo.component";
import { AgencyComponent } from "../Mycomponents/agency/agency.component";
import { AllcollectionsComponent } from "../Mycomponents/allcollections/allcollections.component";
import { ClientComponent } from "../Mycomponents/client/client.component";
import { CollectionComponent } from "../Mycomponents/collection/collection.component";
import { CrewComponent } from "../Mycomponents/crew/crew.component";
import { SlideShowComponent } from "../Mycomponents/slide-show/slide-show.component";

export const routes : Routes = [
    {path : 'advideo/:title', component : AdvideoComponent, children:[
        {path:'crew', component : CrewComponent },
        {path:'agency', component : AgencyComponent},
        {path:'client', component : ClientComponent}
    ]},
    {path : 'slideshow', component : SlideShowComponent },
    { path: '', redirectTo: '/slideshow', pathMatch: 'full' },
    {path : 'collection/:title', component : CollectionComponent },
    {path : 'allcollections', component : AllcollectionsComponent }
   

]