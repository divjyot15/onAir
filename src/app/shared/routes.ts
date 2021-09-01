import { Routes } from "@angular/router";

import { AdvideoComponent } from "../Mycomponents/advideo/advideo.component";
import { AgencyComponent } from "../Mycomponents/agency/agency.component";
import { AllcollectionsComponent } from "../Mycomponents/allcollections/allcollections.component";
import { ClientComponent } from "../Mycomponents/client/client.component";
import { CollectionsComponent } from "../Mycomponents/collections/collections.component";
import { CrewComponent } from "../Mycomponents/crew/crew.component";
import { SlideShowComponent } from "../Mycomponents/slide-show/slide-show.component";
import { SubmitComponent } from "../Mycomponents/submit/submit.component";

export const routes : Routes = [
    {path : 'ads-with-crew/:title', component : AdvideoComponent, children:[
        {path:'crew', component : CrewComponent },
        {path:'agency', component : AgencyComponent},
        {path:'client', component : ClientComponent}
    ]},
    {path : 'slideshow', component : SlideShowComponent },
    { path: '', redirectTo: '/slideshow', pathMatch: 'full' },
    {path : 'collections/:title', component : CollectionsComponent },
    {path : 'allcollections', component : AllcollectionsComponent },
    {path: 'collections', redirectTo: '/allcollections', pathMatch: 'full'},
    {path : 'submit', component : SubmitComponent }
]