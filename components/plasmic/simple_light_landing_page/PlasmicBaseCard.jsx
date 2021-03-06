// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jHHdDD9kiFsjRVJS1eJMvp
// Component: qx3fX-IiOoS3L0
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: jHHdDD9kiFsjRVJS1eJMvp/projectcss
import * as sty from "./PlasmicBaseCard.module.css"; // plasmic-import: qx3fX-IiOoS3L0/css

export const PlasmicBaseCard__VariantProps = new Array("long");

export const PlasmicBaseCard__ArgProps = new Array("children", "iconBack");

function PlasmicBaseCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__long]: hasVariant(variants, "long", "long")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.box__y9Zy0, {
          [sty.box__long__y9Zy0IGgyf]: hasVariant(variants, "long", "long")
        })}
      >
        <p.PlasmicSlot
          defaultContents={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          value={args.children}
          className={classNames(sty.slotChildren, {
            [sty.slotChildren__long]: hasVariant(variants, "long", "long")
          })}
        />
      </div>

      {(hasVariant(variants, "long", "long") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.box__pCqsb, {
            [sty.box__long__pCqsBiGgyf]: hasVariant(variants, "long", "long")
          })}
        >
          <p.PlasmicSlot
            defaultContents={
              <svg
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg)}
                role={"img"}
              />
            }
            value={args.iconBack}
          />
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBaseCard__ArgProps,
      internalVariantPropNames: PlasmicBaseCard__VariantProps
    });

    return PlasmicBaseCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBaseCard";
  } else {
    func.displayName = `PlasmicBaseCard.${nodeName}`;
  }
  return func;
}

export const PlasmicBaseCard = Object.assign(
  // Top-level PlasmicBaseCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicBaseCard
    internalVariantProps: PlasmicBaseCard__VariantProps,
    internalArgProps: PlasmicBaseCard__ArgProps
  }
);

export default PlasmicBaseCard;
/* prettier-ignore-end */
