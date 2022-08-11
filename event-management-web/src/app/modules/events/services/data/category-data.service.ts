import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryDto } from '../../../shared/models/category-dto';
import { CategoryHttpService } from '../../../shared/services/category-http.service';
import { SelectOption } from '../../models/select-option-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  private categoryList$: BehaviorSubject<SelectOption[]> = new BehaviorSubject<SelectOption[]>([]);
  private categoryList: SelectOption[] = [];

  constructor(private categoryHttpService: CategoryHttpService) { }

  // make the api call and publish the response to the Category list observable.
  public retrieveCategoryList(){
    this.categoryHttpService.getCategoryList().subscribe((result: CategoryDto[]) => {
      this.MapSelectOptionData(result);
      this.categoryList$.next(this.categoryList);
    });
  }

  // returns the category list as the observable
  public getCategoryList(): Observable<SelectOption[]> {
    return this.categoryList$.asObservable();
  }

  private MapSelectOptionData(result: CategoryDto[]) {
    result.forEach(item => {
      var selectValue: SelectOption = {
        key: item.id.toString(),
        value: item.name,
      };
      this.categoryList.push(selectValue);
    });
  }
}
