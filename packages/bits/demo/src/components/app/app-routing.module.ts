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

import { NgModule, Type } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

// To use polyfill you need to create an instance of it
// const i18n = new I18n("xlf", translationLibrary, "fr");
// And then data: i18n("Some string");

const appRoutes: Routes = [
    {
        path: "static",
        loadChildren: async () =>
            import("../../../src/static/static-example.module").then(
                (m) => m.StaticExampleModule
            ) as Promise<Type<any>>,
    },
    {
        path: "schematics",
        loadChildren: async () =>
            import("../../../src/schematics/schematic.module").then(
                (m) => m.SchematicModule
            ) as Promise<Type<any>>,
    },
    {
        path: "breadcrumb",
        loadChildren: async () =>
            import("../demo/breadcrumb/breadcrumb.module").then(
                (m) => m.BreadcrumbModule
            ) as Promise<Type<any>>,
    },
    {
        path: "busy",
        loadChildren: async () =>
            import("../demo/busy/busy.module").then(
                (m) => m.BusyModule
            ) as Promise<Type<any>>,
    },
    {
        path: "button",
        loadChildren: async () =>
            import("../demo/button/button.module").then(
                (m) => m.ButtonModule
            ) as Promise<Type<any>>,
    },
    {
        path: "checkbox",
        loadChildren: async () =>
            import("../demo/checkbox/checkbox.module").then(
                (m) => m.CheckboxModule
            ) as Promise<Type<any>>,
    },
    {
        path: "checkbox-group",
        loadChildren: async () =>
            import("../demo/checkbox-group/checkbox-group.module").then(
                (m) => m.CheckboxGroupModule
            ) as Promise<Type<any>>,
    },
    {
        path: "chips",
        loadChildren: async () =>
            import("../demo/chips/chips.module").then(
                (m) => m.ChipsModule
            ) as Promise<Type<any>>,
    },
    {
        path: "combobox",
        loadChildren: async () =>
            import("../demo/combobox/combobox.module").then(
                (m) => m.ComboboxModule
            ) as Promise<Type<any>>,
    },
    {
        path: "combobox-v2",
        loadChildren: async () =>
            import("../demo/combobox-v2/combobox-v2.module").then(
                (m) => m.ComboboxV2Module
            ) as Promise<Type<any>>,
    },
    {
        path: "common",
        loadChildren: async () =>
            import("../demo/common/common.module").then(
                (m) => m.CommonModule
            ) as Promise<Type<any>>,
    },
    {
        path: "content",
        loadChildren: async () =>
            import("../demo/content/content.module").then(
                (m) => m.ContentModule
            ) as Promise<Type<any>>,
    },
    {
        path: "convenience",
        loadChildren: async () =>
            import("../demo/convenience/convenience.module").then(
                (m) => m.ConvenienceModule
            ) as Promise<Type<any>>,
    },
    {
        path: "date-picker",
        loadChildren: async () =>
            import("../demo/date-picker/date-picker.module").then(
                (m) => m.DatePickerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "date-time-picker",
        loadChildren: async () =>
            import("../demo/date-time-picker/date-time-picker.module").then(
                (m) => m.DateTimePickerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "divider",
        loadChildren: async () =>
            import("../demo/divider/divider.module").then(
                (m) => m.DividerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "dialog",
        loadChildren: async () =>
            import("../demo/dialog/dialog.module").then(
                (m) => m.DialogModule
            ) as Promise<Type<any>>,
    },
    {
        path: "dragdrop",
        loadChildren: async () =>
            import("../demo/dragdrop/dragdrop.module").then(
                (m) => m.DragDropDemoModule
            ) as Promise<Type<any>>,
    },
    {
        path: "dragdrop-cdk",
        loadChildren: async () =>
            import("../demo/dragdrop-cdk/dragdrop.module").then(
                (m) => m.DragDropCdkDemoModule
            ) as Promise<Type<any>>,
    },
    {
        path: "expander",
        loadChildren: async () =>
            import("../demo/expander/expander.module").then(
                (m) => m.ExpanderModule
            ) as Promise<Type<any>>,
    },
    {
        path: "external-libraries",
        loadChildren: async () =>
            import("../demo/external-libraries/external-libraries.module").then(
                (m) => m.ExternalLibrariesModule
            ) as Promise<Type<any>>,
    },
    {
        path: "form-field",
        loadChildren: async () =>
            import("../demo/form-field/form-field.module").then(
                (m) => m.FormFieldModule
            ) as Promise<Type<any>>,
    },
    {
        path: "highlight",
        loadChildren: async () =>
            import("../demo/highlight/highlight.module").then(
                (m) => m.HighlightModule
            ) as Promise<Type<any>>,
    },
    {
        path: "icon",
        loadChildren: async () =>
            import("../demo/icon/icon.module").then(
                (m) => m.IconModule
            ) as Promise<Type<any>>,
    },
    {
        path: "image",
        loadChildren: async () =>
            import("../demo/image/image.module").then(
                (m) => m.ImageModule
            ) as Promise<Type<any>>,
    },
    {
        path: "layout",
        loadChildren: async () =>
            import("../demo/layout/layout.module").then(
                (m) => m.LayoutModule
            ) as Promise<Type<any>>,
    },
    {
        path: "menu",
        loadChildren: async () =>
            import("../demo/menu/menu.module").then(
                (m) => m.MenuModule
            ) as Promise<Type<any>>,
    },
    {
        path: "message",
        loadChildren: async () =>
            import("../demo/message/message.module").then(
                (m) => m.MessageModule
            ) as Promise<Type<any>>,
    },
    {
        path: "paginator",
        loadChildren: async () =>
            import("../demo/paginator/paginator.module").then(
                (m) => m.PaginatorModule
            ) as Promise<Type<any>>,
    },
    {
        path: "panel",
        loadChildren: async () =>
            import("../demo/panel/panel.module").then(
                (m) => m.PanelModule
            ) as Promise<Type<any>>,
    },
    {
        path: "pipes",
        loadChildren: async () =>
            import("../demo/pipes/pipes.module").then(
                (m) => m.PipesModule
            ) as Promise<Type<any>>,
    },
    {
        path: "popover",
        loadChildren: async () =>
            import("../demo/popover/popover.module").then(
                (m) => m.PopoverModule
            ) as Promise<Type<any>>,
    },
    {
        path: "popup",
        loadChildren: async () =>
            import("../demo/popup/popup.module").then(
                (m) => m.PopupModule
            ) as Promise<Type<any>>,
    },
    {
        path: "overlay",
        loadChildren: async () =>
            import("../demo/overlay/overlay.module").then(
                (m) => m.OverlayModule
            ) as Promise<Type<any>>,
    },
    {
        path: "progress",
        loadChildren: async () =>
            import("../demo/progress/progress.module").then(
                (m) => m.ProgressModule
            ) as Promise<Type<any>>,
    },
    {
        path: "radio-group",
        loadChildren: async () =>
            import("../demo/radio-group/radio-group.module").then(
                (m) => m.RadioGroupModule
            ) as Promise<Type<any>>,
    },
    {
        path: "repeat",
        loadChildren: async () =>
            import("../demo/repeat/repeat.module").then(
                (m) => m.RepeatModule
            ) as Promise<Type<any>>,
    },
    {
        path: "resizer",
        loadChildren: async () =>
            import("../demo/resize/resize.module").then(
                (m) => m.ResizeModule
            ) as Promise<Type<any>>,
    },
    {
        path: "runtime-i18n",
        loadChildren: async () =>
            import("../demo/runtime-i18n/runtime-i18n.module").then(
                (m) => m.RuntimeI18NModule
            ) as Promise<Type<any>>,
    },
    {
        path: "search",
        loadChildren: async () =>
            import("../demo/search/search.module").then(
                (m) => m.SearchModule
            ) as Promise<Type<any>>,
    },
    {
        path: "select",
        loadChildren: async () =>
            import("../demo/select/select.module").then(
                (m) => m.SelectModule
            ) as Promise<Type<any>>,
    },
    {
        path: "select-v2",
        loadChildren: async () =>
            import("../demo/select-v2/select-v2.module").then(
                (m) => m.SelectV2Module
            ) as Promise<Type<any>>,
    },
    {
        path: "selector",
        loadChildren: async () =>
            import("../demo/selector/selector.module").then(
                (m) => m.SelectorModule
            ) as Promise<Type<any>>,
    },
    {
        path: "spinner",
        loadChildren: async () =>
            import("../demo/spinner/spinner.module").then(
                (m) => m.SpinnerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "sorter",
        loadChildren: async () =>
            import("../demo/sorter/sorter.module").then(
                (m) => m.SorterModule
            ) as Promise<Type<any>>,
    },
    {
        path: "switch",
        loadChildren: async () =>
            import("../demo/switch/switch.module").then(
                (m) => m.SwitchModule
            ) as Promise<Type<any>>,
    },
    {
        path: "tabgroup",
        loadChildren: async () =>
            import("../demo/tabgroup/tabgroup.module").then(
                (m) => m.TabgroupModule
            ) as Promise<Type<any>>,
    },
    {
        path: "table",
        loadChildren: async () =>
            import("../demo/table/table.module").then(
                (m) => m.TableModule
            ) as Promise<Type<any>>,
    },
    {
        path: "textbox",
        loadChildren: async () =>
            import("../demo/textbox/textbox.module").then(
                (m) => m.TextboxModule
            ) as Promise<Type<any>>,
    },
    {
        path: "theming",
        loadChildren: async () =>
            import("../demo/theming/theming.module").then(
                (m) => m.ThemingModule
            ) as Promise<Type<any>>,
    },
    {
        path: "time-picker",
        loadChildren: async () =>
            import("../demo/time-picker/time-picker.module").then(
                (m) => m.TimePickerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "time-frame-picker",
        loadChildren: async () =>
            import("../demo/time-frame-picker/time-frame-picker.module").then(
                (m) => m.TimeFramePickerModule
            ) as Promise<Type<any>>,
    },
    {
        path: "toast",
        loadChildren: async () =>
            import("../demo/toast/toast.module").then(
                (m) => m.ToastModule
            ) as Promise<Type<any>>,
    },
    {
        path: "toolbar",
        loadChildren: async () =>
            import("../demo/toolbar/toolbar.module").then(
                (m) => m.ToolbarModule
            ) as Promise<Type<any>>,
    },
    {
        path: "tooltip",
        loadChildren: async () =>
            import("../demo/tooltip/tooltip.module").then(
                (m) => m.TooltipDemoModule
            ) as Promise<Type<any>>,
    },
    {
        path: "wizard",
        loadChildren: async () =>
            import("../demo/wizard/wizard.module").then(
                (m) => m.WizardModule
            ) as Promise<Type<any>>,
    },
    {
        path: "wizard-v2",
        loadChildren: async () =>
            import("../demo/wizard-v2/wizard-v2.module").then(
                (m) => m.WizardV2Module
            ) as Promise<Type<any>>,
    },
    {
        path: "",
        redirectTo: "common",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
