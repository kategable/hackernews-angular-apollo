import {Apollo, gql} from 'apollo-angular';
import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const FEED_QUERY = gql`
query FEED_QUERY
{
  feed {
    links {
      id
      createdAt
      url
      description
    }
  }
}
`;

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
})
export class LinksListComponent implements OnInit {
  links$: Observable<any>;
  loading: any;
  currentUser: any;
  constructor(private apollo: Apollo) {}


  ngOnInit(): void {
    this.links$ = this.apollo.watchQuery<any>({query: FEED_QUERY}).valueChanges.pipe(map(result=> result.data.feed?.links))
  }
}
