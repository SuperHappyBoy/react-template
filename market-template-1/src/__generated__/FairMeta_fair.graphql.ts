/**
 * @generated SignedSource<<56d6d1452611006a2e7a5fa3d33454d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairMeta_fair$data = {
  readonly metaDescription: string | null;
  readonly metaImage: {
    readonly src: string | null;
  } | null;
  readonly name: string | null;
  readonly slug: string;
  readonly " $fragmentType": "FairMeta_fair";
};
export type FairMeta_fair$key = {
  readonly " $data"?: FairMeta_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairMeta_fair">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairMeta_fair",
  "selections": [
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "metaDescription",
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": "metaImage",
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": "src",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large_rectangle"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"large_rectangle\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "df70e523e990f462efe34ddf4770162c";

export default node;
