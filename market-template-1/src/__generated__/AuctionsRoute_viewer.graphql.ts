/**
 * @generated SignedSource<<e2224f2c6d8dbdd826ec1d23a52ffbb7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionsRoute_viewer$data = {
  readonly salesConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly href: string | null;
        readonly isLiveOpen: boolean | null;
        readonly liveStartAt: string | null;
        readonly name: string | null;
        readonly slug: string;
      } | null;
    } | null> | null;
    readonly totalCount: number | null;
  } | null;
  readonly " $fragmentType": "AuctionsRoute_viewer";
};
export type AuctionsRoute_viewer$key = {
  readonly " $data"?: AuctionsRoute_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionsRoute_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionsRoute_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "auctionState",
          "value": "OPEN"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "live",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "published",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "TIMELY_AT_NAME_ASC"
        }
      ],
      "concreteType": "SaleConnection",
      "kind": "LinkedField",
      "name": "salesConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Sale",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "href",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "liveStartAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isLiveOpen",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "salesConnection(auctionState:\"OPEN\",first:10,live:true,published:true,sort:\"TIMELY_AT_NAME_ASC\")"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "b1c15012245d4c78c24211ec33ef6d88";

export default node;
