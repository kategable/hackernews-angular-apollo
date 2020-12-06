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
  data$: Observable<any>;
  loading: any;
  currentUser: any;
  constructor(private apollo: Apollo) {}

  linksToRender: any = [
    {
      id: '1',
      description: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com',
    },
    {
      id: '2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/',
    },
  ];

  ngOnInit(): void {
    this.data$ = this.apollo.watchQuery<any>({query: FEED_QUERY}).valueChanges
  }
}
