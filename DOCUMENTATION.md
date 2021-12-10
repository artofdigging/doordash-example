# Bottom Sheet Component

This bottom sheet component includes the ability to customise what is inside the sheet.

## Basic Example

```
<BottomSheet
    isVisable={isVisable}
    close={handleClose}
    title="A title"
    subTitle="a sub title"
>
    {Children}
</BottomSheet>
```

## API

isVisable

> A boolean used to determine is the bottom sheet is visable or not

close

> A function used to close the the bottom sheet when it is open

{Children}

> The child component that will be rendered inside of the parent component

title

> The title in the header of the bottom sheet

subTitle

> The sub title of the header in the bottom sheet
