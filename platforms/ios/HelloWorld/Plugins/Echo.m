/********* Echo.m Cordova Plugin Implementation *******/

#import "Echo.h"
#import <Cordova/CDVPluginResult.h>

@interface Echo ()
{
    CGSize _pageSize;
}
@end

@implementation Echo

- (void) echo:(CDVInvokedUrlCommand*)command;
{
    NSString* callbackId = command.callbackId;
    NSArray *arguments = command.arguments;
    NSDictionary *options = [arguments objectAtIndex:0];
    
    NSData* jsonData = [((NSString*) options) dataUsingEncoding:NSUTF8StringEncoding];

    NSError *error;
    NSDictionary *jsonDict = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&error];

    [self setupPDFDocumentNamed:@"NewPDF" Width:850 Height:1100];
    
    [self beginPDFPage];
    
    NSEnumerator *enumerator = [jsonDict keyEnumerator];
	id key;
	while ((key = [enumerator nextObject])) {
		NSDictionary *jsonDictChildren = [jsonDict objectForKey:key];
        if ([key isEqualToString:@"bays"])
        {
            for(int i = 0; i < [((NSArray *)jsonDictChildren) count]; i++)
            {
                NSDictionary *bay = ((NSDictionary *)[((NSArray *)jsonDictChildren) objectAtIndex:i]);
                int bayHeight = [[bay objectForKey:@"width"] intValue];
                int bayWidth = [[bay objectForKey:@"height"] intValue];
                int numberOfBays = [[bay objectForKey:@"fNumber"] intValue];
                NSArray *shelves = ((NSArray *)[bay objectForKey:@"shelves"]);
                int numberOfShelves = [shelves count];
                int minShelfHeight = bayHeight / (numberOfShelves / numberOfBays);
                
                UIImage *baseBitmapTop = [UIImage imageNamed:@"shelf.png"];
                UIImage *baseImageTop = nil;
                CGRect cropRect = CGRectMake(15, 0, bayWidth, minShelfHeight); //set your rect size.
                baseImageTop = [self croppIngimageByImageName:baseBitmapTop toRect:cropRect];
                
                UIImage *baseBitmapBottom = [UIImage imageNamed:@"shelf.png"];
                UIImage *baseImageBottom = nil;
                cropRect = CGRectMake(15, 60 - minShelfHeight, bayWidth, minShelfHeight); //set your rect size.
                baseImageBottom = [self croppIngimageByImageName:baseBitmapBottom toRect:cropRect];
                
                bool stateWasTrue = false;
                for(int shelvesOffset = 0; shelvesOffset < [shelves count]; shelvesOffset++)
                {
                    NSDictionary *shelf = ((NSDictionary *)[shelves objectAtIndex:shelvesOffset]);
                    if([[shelf objectForKey:@"state"] boolValue])
                    {
                        [self addImage:baseImageBottom atPoint:CGPointMake(i * (bayWidth), shelvesOffset * minShelfHeight)];
                        NSArray *shelveItems = ((NSArray *)[shelf objectForKey:@"shelveItems"]);
                        int cummulatedShelfOffset = 0;
                        for(int n = 0; n < [shelveItems count]; n++)
                        {
                            NSDictionary *shelfItem = ((NSDictionary *)[shelveItems objectAtIndex:n]);
                            int shelfImageWidth = [[shelfItem objectForKey:@"width"] intValue];
                            int shelfImageHeight = [[shelfItem objectForKey:@"height"] intValue];
                            NSString *imageName = [shelfItem objectForKey:@"img"];
                            UIImage *shelfItemBitmap = [UIImage imageNamed:imageName];
                            UIImage *shelfItemImage = nil;
                            shelfItemImage = [self resizeImage:shelfItemBitmap withMaxDimension:fmax(shelfImageWidth, shelfImageHeight)];
                            [self addImage:shelfItemImage atPoint:CGPointMake(i * (bayWidth + 10) + cummulatedShelfOffset, shelvesOffset * minShelfHeight - 10)];
                            cummulatedShelfOffset += shelfImageWidth + 5;
                        }
                        stateWasTrue = true;
                    }
                    else
                    {
                        [self addImage:baseImageTop atPoint:CGPointMake(i * (bayWidth), shelvesOffset * minShelfHeight)];
                        stateWasTrue = false;
                    }
                }
            }
        }
	}    
    
    [self finishPDF];
    
    CDVPluginResult* pluginResult = nil;
    NSString* javaScript = nil;
    
    @try {
        NSString *newPDFName = [NSString stringWithFormat:@"%@.pdf", @"NewPDF"];
        
        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES);
        NSString *documentsDirectory = [paths objectAtIndex:0];
        
        NSString *pdfPath = [documentsDirectory stringByAppendingPathComponent:newPDFName];
        NSString* echo = pdfPath;
        
        if (echo != nil && [echo length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            javaScript = [pluginResult toSuccessCallbackString:callbackId];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            javaScript = [pluginResult toErrorCallbackString:callbackId];
        }
    } @catch (NSException* exception) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:[exception reason]];
        javaScript = [pluginResult toErrorCallbackString:callbackId];
    }
    
    [self writeJavascript:javaScript];
}

- (UIImage *)croppIngimageByImageName:(UIImage *)imageToCrop toRect:(CGRect)rect
{
    CGImageRef imageRef = CGImageCreateWithImageInRect([imageToCrop CGImage], rect);
    UIImage *cropped = [UIImage imageWithCGImage:imageRef];
    CGImageRelease(imageRef);
    
    return cropped;
}

- (void)setupPDFDocumentNamed:(NSString*)name Width:(float)width Height:(float)height {
    _pageSize = CGSizeMake(width, height);
    
    NSString *newPDFName = [NSString stringWithFormat:@"%@.pdf", name];
    
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    
    NSString *pdfPath = [documentsDirectory stringByAppendingPathComponent:newPDFName];
    
    UIGraphicsBeginPDFContextToFile(pdfPath, CGRectZero, nil);
}

- (void)beginPDFPage {
    UIGraphicsBeginPDFPageWithInfo(CGRectMake(0, 0, _pageSize.width, _pageSize.height), nil);
}

- (void)finishPDF {
    UIGraphicsEndPDFContext();
}

- (CGRect)addImage:(UIImage*)image atPoint:(CGPoint)point {
    CGRect imageFrame = CGRectMake(point.x, point.y, image.size.width, image.size.height);
    [image drawInRect:imageFrame];
    
    return imageFrame;
}

- (UIImage *)resizeImage:(UIImage *)image
        withMaxDimension:(CGFloat)maxDimension
{
    if (fmax(image.size.width, image.size.height) <= maxDimension) {
        return image;
    }
    
    CGFloat aspect = image.size.width / image.size.height;
    CGSize newSize;
    
    if (image.size.width > image.size.height) {
        newSize = CGSizeMake(maxDimension, maxDimension / aspect);
    } else {
        newSize = CGSizeMake(maxDimension * aspect, maxDimension);
    }
    
    UIGraphicsBeginImageContextWithOptions(newSize, NO, 1.0);
    CGRect newImageRect = CGRectMake(0.0, 0.0, newSize.width, newSize.height);
    [image drawInRect:newImageRect];
    UIImage *newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return newImage;
}

@end