import { UIController } from '@tuval/forms';
import { TForm } from '@tuval/forms';
export declare class AppController extends UIController {
    private menu_text;
    protected InitController(): void;
    OnBindModel(form: TForm): void;
    LoadView(): import("@tuval/forms").UISceneClass;
}
