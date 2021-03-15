import { Injectable } from '@angular/core';
import { ClarityIcons } from '@clr/icons';
import { IconShapeSources } from '@clr/icons/interfaces/icon-interfaces';
@Injectable()
export class IconsService {
  icons: IconShapeSources = {};

  constructor() {}

  public load(): void {
    ClarityIcons.add(this.icons);
  }
}
