import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     { path: 'products', component:  },
//     { path: 'products/:id', component:  },
//     { path: 'products/new', component:  },
//     { path: 'products/:id/edit', component: ,
//       canDeactivate: [] }
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }