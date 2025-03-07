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

import { NuiCommonModule } from "../../common/common.module";
import { NuiButtonModule } from "../button/button.module";
import { NuiIconModule } from "../icon/icon.module";
import { NuiOverlayModule } from "../overlay/overlay.module";
import { NuiTextboxModule } from "../textbox/textbox.module";
import { DayPickerComponent } from "./date-picker-day-picker.component";
import { DatePickerInnerComponent } from "./date-picker-inner.component";
import { MonthPickerComponent } from "./date-picker-month-picker.component";
import { YearPickerComponent } from "./date-picker-year-picker.component";
import { DatePickerComponent } from "./date-picker.component";

/**
 * @ignore
 */
@NgModule({
    imports: [
        NuiCommonModule,
        NuiTextboxModule,
        NuiIconModule,
        NuiButtonModule,
        NuiOverlayModule,
    ],
    declarations: [
        YearPickerComponent,
        MonthPickerComponent,
        DatePickerInnerComponent,
        DayPickerComponent,
        DatePickerComponent,
    ],
    exports: [DatePickerComponent],
    providers: [],
})
export class NuiDatePickerModule {}
