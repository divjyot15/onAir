import { Routes } from "@angular/router";

import { AdvideoComponent } from "../Mycomponents/advideo/advideo.component";
import { AllcollectionsComponent } from "../Mycomponents/allcollections/allcollections.component";
import { CollectionsComponent } from "../Mycomponents/collections/collections.component";
import { SlideShowComponent } from "../Mycomponents/slide-show/slide-show.component";
import { SubmitComponent } from "../Mycomponents/submit/submit.component";

export const routes : Routes = [
    {path : 'ads-with-crew/:title', component : AdvideoComponent},
    {path : 'slideshow', component : SlideShowComponent },
    {path: '', redirectTo: '/slideshow', pathMatch: 'full' },
    {path : 'collections/:title', component : CollectionsComponent },
    {path : 'allcollections', component : AllcollectionsComponent },
    {path: 'collections', redirectTo: '/allcollections', pathMatch: 'full'},
    {path : 'submit', component : SubmitComponent }
]