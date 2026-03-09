

## Add Drag-and-Drop to ImageUploader

Update `src/components/editor/ImageUploader.tsx` to support drag-and-drop file uploads alongside the existing click-to-upload flow.

### Changes (single file)

**`src/components/editor/ImageUploader.tsx`**:
- Add `dragOver` state to track when a file is being dragged over the drop zone
- Add `onDragOver`, `onDragLeave`, `onDrop` handlers to the outer container
- Extract file validation + upload logic into a shared `processFile(file)` function used by both the drop handler and the existing `onChange` handler
- Apply a visual highlight (dashed border color change, background tint) when dragging over the component
- Make the entire component area (preview + buttons) the drop target

No new dependencies or files needed — pure enhancement to the existing component.

