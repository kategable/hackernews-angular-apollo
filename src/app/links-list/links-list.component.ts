import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
const FEED_QUERY = gql`
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
`
@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})

export class LinksListComponent implements OnInit {
  

  data: Observable<any>;
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
  ]


  ngOnInit(): void { 
    this.data = this.apollo
    .watchQuery({query: FEED_QUERY})
    .valueChanges.pipe(
      tap(d=> console.log(d.data)),
      map(({data}) => data.feed.links));
  }
}
