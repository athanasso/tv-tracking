import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.css']
})
export class MediaSearchComponent {
  searchForm: FormGroup;
  searchResults: any;

  constructor(private formBuilder: FormBuilder, private omdbService: OmdbService) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
  }

  ngOnInit() {
  }

  search() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    if (!searchTerm.trim()) {
      return;
    }

    this.omdbService.getResult(searchTerm).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
