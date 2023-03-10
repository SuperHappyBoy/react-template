/**
 * @generated SignedSource<<5fa62a6576103584e49181ddd8763c4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MockRelayRendererFixtures_artwork$data = {
  readonly artist: {
    readonly slug: string;
  } | null;
  readonly image: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"MockRelayRendererFixtures_artworkMetadata">;
  readonly " $fragmentType": "MockRelayRendererFixtures_artwork";
};
export type MockRelayRendererFixtures_artwork$key = {
  readonly " $data"?: MockRelayRendererFixtures_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MockRelayRendererFixtures_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MockRelayRendererFixtures_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MockRelayRendererFixtures_artworkMetadata"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "35b0d2a11cf28fcc477de58eac475015";

export default node;
