// © 2022 SolarWinds Worldwide, LLC. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to
//  deal in the Software without restriction, including without limitation the
//  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
//  sell copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
    NuiBreadcrumbModule,
    NuiButtonModule,
    NuiDocsModule,
    SrlcStage,
} from "@nova-ui/bits";

import {
    BreadcrumbBasicExampleComponent,
    BreadcrumbCountriesSubviewComponent,
    BreadcrumbDocsExampleComponent,
    BreadcrumbFirstSubviewLevelComponent,
    BreadcrumbOfficesSubviewComponent,
    BreadcrumbSecondSubviewLevelComponent,
    BreadcrumbSingleCountryComponent,
    BreadcrumbVisualTestComponent,
} from "./index";

const routes = [
    {
        path: "",
        component: BreadcrumbDocsExampleComponent,
        data: {
            breadcrumb: "Root",
            srlc: {
                stage: SrlcStage.ga,
            },
            showThemeSwitcher: true,
        },
        children: [
            {
                path: "countries",
                component: BreadcrumbCountriesSubviewComponent,
                data: {
                    breadcrumb: "Countries",
                    url: "https://tesla.com",
                    showThemeSwitcher: true,
                },
                children: [
                    {
                        path: "usa",
                        component: BreadcrumbSingleCountryComponent,
                        data: {
                            breadcrumb: "USA",
                            showThemeSwitcher: true,
                        },
                    },
                    {
                        path: "ukraine",
                        component: BreadcrumbSingleCountryComponent,
                        data: {
                            breadcrumb: "Ukraine",
                            showThemeSwitcher: true,
                        },
                    },
                ],
            },
            {
                path: "offices",
                component: BreadcrumbOfficesSubviewComponent,
                data: {
                    breadcrumb: "Offices",
                    showThemeSwitcher: true,
                },
            },
        ],
    },
    {
        path: "breadcrumb-visual-test",
        component: BreadcrumbVisualTestComponent,
        data: {
            srlc: {
                hideIndicator: true,
            },
            breadcrumb: "Root",
        },
        children: [
            {
                path: "first-subroute",
                component: BreadcrumbFirstSubviewLevelComponent,
                data: {
                    breadcrumb: "First Level",
                    srlc: {
                        hideIndicator: true,
                    },
                },
                children: [
                    {
                        path: "second-subroute",
                        component: BreadcrumbSecondSubviewLevelComponent,
                        data: {
                            breadcrumb: "Second Level",
                            srlc: {
                                hideIndicator: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [
        NuiDocsModule,
        NuiBreadcrumbModule,
        NuiButtonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        BreadcrumbDocsExampleComponent,
        BreadcrumbBasicExampleComponent,
        BreadcrumbCountriesSubviewComponent,
        BreadcrumbSingleCountryComponent,
        BreadcrumbOfficesSubviewComponent,
        BreadcrumbVisualTestComponent,
        BreadcrumbFirstSubviewLevelComponent,
        BreadcrumbSecondSubviewLevelComponent,
    ],
    exports: [RouterModule],
})
export class BreadcrumbModule {}
