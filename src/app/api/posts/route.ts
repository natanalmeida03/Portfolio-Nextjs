import { NextResponse } from 'next/server'
import fetchPosts from '@/lib/getPosts'

export async function GET() {
  try {
    const posts = await fetchPosts();
    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { message: "Nenhum post encontrado.", posts: [] },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Posts encontrados com sucesso.", posts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar posts.", error: String(error) },
      { status: 500 }
    );
  }
}