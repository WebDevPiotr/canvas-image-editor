import ImageSprite from './SceneElements/ImageSprite'

export type Size = {
    width: number,
    height: number
}

export type SceneElement = ImageSprite

export type Intersection = SceneElement | null