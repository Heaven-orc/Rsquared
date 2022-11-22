import React from "react"

export interface INewsArticle {
    id: number
    img: string
    title: string
    slug: string
    date: string
    description: string
}
export interface IBigArticle extends React.HTMLAttributes<HTMLElement> {
    img: string
    title: string
    path: string
    description: string
    date: string
}
export interface IReadMoreArticles {
    data: INewsArticle[]
}
export interface ISingleNewsArticle {
    article: INewsArticle
    readMore: INewsArticle[]
}
export interface ISocial {
    icon: string;
    label: string;
}
export interface INews {
    news: INewsArticle[]
}