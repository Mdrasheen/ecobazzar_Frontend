import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({

selector: 'app-navbar',

standalone: true,

imports: [RouterLink,MatToolbarModule],

templateUrl: './navbar.html',

styleUrls: ['./navbar.scss']

})

export class Navbar {}