interface ChildDoc {
  path: string
  title: string
  publishedAt: string
  posterImage?: string
  description?: string
}

export type PickedChildDoc = ChildDoc[]

type FolderName = 'projects' | 'updates'

async function getListing(folderName: FolderName) {
  return await useAsyncData(
    folderName,
    () => queryCollection(folderName)
      .select('path', 'title', 'publishedAt', 'posterImage', 'description')
      .order('publishedAt', 'DESC')
      .all() as Promise<PickedChildDoc>,
  )
}

export function useContentFolderListing(folderName: FolderName) {
  return {
    folderName,
    getListing: async () => getListing(folderName),
  }
}
